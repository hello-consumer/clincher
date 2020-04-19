import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import AndroidIcon from '@material-ui/icons/Android';

class LeftDrawer extends React.Component {
    render() {
        return <Drawer
        variant="persistent"
        anchor="left"
        open={this.props.open}
      >
        <div>
          <IconButton onClick={e => this.props.toggleOpen(e)}>
            <ChevronLeftIcon />
          </IconButton>
        </div>
        <Divider />
        <List>
          {['Lorem', 'ipsum', 'dolor', 'sit'].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon><AndroidIcon /></ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
        <Divider />
        <List>
          {['amet', 'consectetur', 'adipiscing'].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon><AndroidIcon /></ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
      </Drawer>;
    }
}

export default LeftDrawer;


