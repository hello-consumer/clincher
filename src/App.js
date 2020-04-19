import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import ClickyButton from './components/ClickyButton';
import TopNav from './components/TopNav';
import LeftDrawer from './components/LeftDrawer';
//import { useTheme } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';

function App() { 

  const [state, setState] = React.useState({
    open: false,
  });

  const toggleOpen = (e) => {
    setState({
      open: !state.open
    });
  }


  //const classes = useStyles();
  //const theme = useTheme();

  return (<React.Fragment>
    <CssBaseline />
    <LeftDrawer toggleOpen={toggleOpen} open={state.open}></LeftDrawer>
    <TopNav toggleOpen={toggleOpen}></TopNav>
    <Container style={{height: '100vh'}}>
      <Box my={1} py={1} bgcolor="background.paper">
        <Typography component="p">
          Lorem ipsum....  More content
        </Typography>
        
        {[...Array(10).keys()].map(e =>
          <ClickyButton key={e}></ClickyButton>
        )}
      </Box>
        
    </Container>
  </React.Fragment>
  );
}

export default App;
