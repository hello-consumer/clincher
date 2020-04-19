import React from 'react';
import Button from '@material-ui/core/Button';

class ClickyButton extends React.Component {
    constructor(){
        super();
        this.state = { clickedCount: 0}
    }

    onClick = function(event){
        this.setState(state => { return { clickedCount: state.clickedCount + 1}});
    }

    render() {
        return <Button variant="contained" color="secondary" onClick={e => this.onClick(e)}>I've been clicked {this.state.clickedCount} times</Button>;
    }
}

export default ClickyButton;
