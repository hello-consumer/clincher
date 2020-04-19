import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import ClickyButton from './components/ClickyButton';
import TopNav from './components/TopNav';

function App() {  
  return (<React.Fragment>
    <CssBaseline />
    <TopNav></TopNav>
    <Container style={{height: '100vh'}}>
        <Typography component="div" >
          Lorem ipsum....  More content
        </Typography>
        {[...Array(10).keys()].map(e =>
          <ClickyButton></ClickyButton>
        )}
        
    </Container>
    
  </React.Fragment>
  );
}

export default App;
