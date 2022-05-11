import React, { useState, useEffect } from "react";
import { AgGridReact } from 'ag-grid-react';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import Snackbar from '@mui/material/Snackbar';
import Addclient from './Addclient';
import Editclient from "./Editclient";
import Addtraining from "./Addtraining";
import { CSVLink, CSVDownload } from "react-csv";

import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';

function Client() {

    const [clients, setClients] = useState([]);
    const [trainings, setTrainings] = useState([]);
    const [open, setOpen] = useState(false);
    const [msg, setMsg] = useState('');

    useEffect(() => {
        fetchClients();
     }, []);

    const fetchClients = () => {
        fetch("https://customerrest.herokuapp.com/api/customers")
        .then(response => response.json())
        .then(data => setClients(data.content))
    }

    useEffect(() => {
      fetchTrainings();
    }, []);

    const fetchTrainings = () => {
        fetch("https://customerrest.herokuapp.com/api/trainings")
        .then(response => response.json())
        .then(data => setTrainings(data.content))
    }

    const addTraining = (training) => {
      fetch('https://customerrest.herokuapp.com/api/trainings',{
        method:'POST',
        headers: {'Content-type':'application/json'},
        body: JSON.stringify(training)
      })
      .then(response => {
        if (response.ok) {
          setMsg('Training added succesfully')
          setOpen(true);
          fetchTrainings();
        }
        else {
          alert('Something went wrong when adding the training')
        }
      })
      .catch(err => console.log(err))
    }

    const deleteClient = (link) => {
        if (window.confirm('Are you sure?')) {
          fetch(link, { method: 'DELETE' })
          .then(response => {
            if (response.ok) {
              setMsg('Client deleted')
              setOpen(true);
              fetchClients();
            }
            else {
              alert('Something went wrong');
            }
        })
        }
      }

    const addClient = (client) => {
        fetch("https://customerrest.herokuapp.com/api/customers",{
          method:'POST',
          headers: {'Content-type':'application/json'},
          body: JSON.stringify(client)
        })
        .then(response => {
          if (response.ok) {
            setMsg('Client added succesfully')
            setOpen(true);
            fetchClients();
          }
          else {
            alert('Something went wrong when adding the client')
          }
        })
        .catch(err => console.log(err))
      }

      const updateClient = (updatedClient, link) => {
        fetch(link, {
          method: 'PUT',
          headers: {'Content-type':'application/json'},
          body: JSON.stringify(updatedClient)
        })
        .then(response => {
          if(response.ok) {
            setMsg('Client edited succesfully')
            setOpen(true);
            fetchClients();
          }
          else {
            alert('Something went wrong when editing the client')
          }
        })
        .catch(err => console.log(err))
      }
  

    const columns = [
        {field: 'firstname', sortable: true, filter: true, width: 120}, 
        {field: 'lastname', sortable: true, filter: true, width: 120},  
        {field: 'email', sortable: true, filter: true}, 
        {field: 'phone', sortable: true, filter: true},
        {field: 'streetaddress', sortable: true, filter: true},
        {field: 'postcode', sortable: true, filter: true, width: 120},
        {field: 'city', sortable: true, filter: true, width: 120},
        {
            headerName: '', 
            width: '180', 
            field: 'links.0.href',
            cellRenderer: params => <Addtraining addTraining={addTraining} params={params}></Addtraining>
          },
          {
            headerName:'',
            width: 100,
            field: 'links.0.href',
            cellRenderer: params => <Editclient updateClient={updateClient} params={params}/>
          },
          {
            headerName: '', 
            width: '100', 
            field: 'links.0.href',
            cellRenderer: params => <IconButton color="error" onClick={() => deleteClient(params.value)}><DeleteIcon /></IconButton>
          },
    ]

    return(
        <>
        <CSVLink data={clients} >Export to CSV</CSVLink>
        <Addclient addClient={addClient}/>
        <div className="ag-theme-alpine" style={{height: 600, width: '90%'}}>
          <AgGridReact 
            columnDefs={columns}
            rowData={clients}
            pagination={true}
            paginationPageSize={10}
            suppressCellFocus={true}
          />
        </div>
        <Snackbar 
          open={open}
          message={msg}
          autoHideDuration={3000}
          onClose={() => setOpen(false)}
        />
        </>
    )
}

export default Client;