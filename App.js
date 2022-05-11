import logo from './logo.svg';
import Client from './components/Client';
import Trainings from './components/Trainings'
import './App.css';
import Tabs from'@mui/material/Tabs';
import Tab from'@mui/material/Tab';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import React, { useState } from'react';

function App() {

  const [value, setValue] = useState('one');

  const handleChange = (event, value) => {  
    setValue(value);
  };

  return (
    <div>
      <Tabs value = {value} onChange={handleChange}>
      <Tab value="Clients" label="Clients" />
      <Tab value="Trainings" label="Trainings" />
      </Tabs>  
      {value === 'Trainings' && <div className="app">
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6">Trainings</Typography>
        </Toolbar>
      </AppBar>
      <Trainings />
      </div>} 
      {value === 'Clients' && <div className="App">
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6">Clients</Typography>
        </Toolbar>
      </AppBar>
      <Client />
      </div>}
    </div>
  );
}

export default App;