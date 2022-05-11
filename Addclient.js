import React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';

function Addclient({ addClient }) {

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
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleSave= () => {
        addClient(client);
        setClient({
            firstname: '',
            lastname: '',
            streetaddress: '',
            postcode: '',
            city: '',
            email: '',
            phone: ''
        })
        setOpen(false);
      };
    
      const inputChanged = (event) => {
        setClient({...client, [event.target.name]: event.target.value})
      }

    return(
        <div>
            <Button variant="outlined" onClick={handleClickOpen}>
                New client
            </Button>
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>New client</DialogTitle>
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

export default Addclient;