import React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import IconButton from '@mui/material/IconButton';
import EditIcon from '@mui/icons-material/Edit';

function Editclient({ updateClient, params }) {
    const [open, setOpen] = React.useState(false);
    const [client, setClient] = React.useState({
        firstname: '',
        lastname: '',
        streetaddress: '',
        postcode: '',
        city: '',
        email: '',
        phone: ''
    })

    const handleClickOpen = () => {
        setOpen(true);
        setClient({
            firstname: params.data.firstname,
            lastname: params.data.lastname,
            streetaddress: params.data.streetaddress,
            postcode: params.data.postcode,
            city: params.data.city,
            email: params.data.email,
            phone: params.data.phone
        })
      };
    
      const handleClose = () => {
        setOpen(false);
      };
    
      const handleSave = () => {
        updateClient(client, params.value);
      }
    
      const inputChanged = (event) => {
        setClient({...client, [event.target.name]: event.target.value})
      }
    return(
        <div>
            <IconButton onClick={handleClickOpen}>
                <EditIcon />
            </IconButton>
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>Edit client</DialogTitle>
                <DialogContent>
                <TextField
                        name="firstname"
                        value={client.firstname}
                        onChange={inputChanged}
                        margin="dense"
                        label="Firstname"
                        fullWidth
                        variant="standard"
                    />
                    <TextField
                        name="lastname"
                        value={client.lastname}
                        onChange={inputChanged}
                        margin="dense"
                        label="Lastname"
                        fullWidth
                        variant="standard"
                    />
                    <TextField
                        name="streetaddress"
                        value={client.streetaddress}
                        onChange={inputChanged}
                        margin="dense"
                        label="Streetaddress"
                        fullWidth
                        variant="standard"
                    />
                    <TextField
                        name="postcode"
                        value={client.postcode}
                        onChange={inputChanged}
                        margin="dense"
                        label="Postcode"
                        fullWidth
                        variant="standard"
                    />
                    <TextField
                        name="city"
                        value={client.city}
                        onChange={inputChanged}
                        margin="dense"
                        label="City"
                        fullWidth
                        variant="standard"
                    />
                    <TextField
                        name="email"
                        value={client.email}
                        onChange={inputChanged}
                        margin="dense"
                        label="Email"
                        fullWidth
                        variant="standard"
                    />
                    <TextField
                        name="phone"
                        value={client.phone}
                        onChange={inputChanged}
                        margin="dense"
                        label="Phone"
                        fullWidth
                        variant="standard"
                    />
                </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleSave}>Save</Button>
        </DialogActions>
      </Dialog>
    </div>
    )
}

export default Editclient;