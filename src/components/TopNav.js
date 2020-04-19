import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Typography from '@material-ui/core/Typography';

class TopNav extends React.Component {
    render() {
        return <AppBar position="sticky">
        <Toolbar>
          <IconButton edge="start" color="inherit" aria-label="menu" onClick={e => this.props.toggleOpen(e)}>
            <MenuIcon />
          </IconButton>
          <Typography variant="h6">
            Clincher
          </Typography>
        </Toolbar>
      </AppBar>;
    }
}

export default TopNav;


