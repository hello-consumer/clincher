import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import ClickyButton from './components/ClickyButton';
import TopNav from './components/TopNav';
import { useTheme } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';

function App() {  
  //const classes = useStyles();
  const theme = useTheme();

  return (<React.Fragment>
    <CssBaseline />
    <TopNav></TopNav>
    <Container style={{height: '100vh'}}>
      <Box my={1} py={1} bgcolor="background.paper">
        <Typography component="p">
          Lorem ipsum....  More content
        </Typography>
        
        {[...Array(10).keys()].map(e =>
          <ClickyButton></ClickyButton>
        )}
      </Box>
        
    </Container>
  </React.Fragment>
  );
}

export default App;
