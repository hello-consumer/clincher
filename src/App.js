import React from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

function App() {
  
  return (<React.Fragment>
    <CssBaseline />
    <AppBar position="sticky">
      <Toolbar>
        <IconButton edge="start" color="inherit" aria-label="menu">
          <MenuIcon />
        </IconButton>
        <Typography variant="h6">
          Clincher
        </Typography>
      </Toolbar>
    </AppBar>
    <Container style={{height: '100vh'}}>
        <Typography component="div" >
          Lorem ipsum....
        </Typography>
        <Button variant="contained" color="primary">Hello World</Button>
    </Container>
    
  </React.Fragment>
  );
}

export default App;
