import React, { Component } from 'react';
import markChecked from '../assets/icons/menu-tick-large.svg';
import markUnChecked from '../assets/icons/menu-unticked-large.svg';

class PickOptionToggle extends Component{
    constructor(){
        super();
        this.state = { checked: false };

        this.handleCheck = this.handleCheck.bind(this);
    }

    handleCheck(){
        this.setState({ checked: !this.state.checked })
    }

    render(){
        return(
            <div id="sstatus-797434-3688359" className="options__check-box status ticked on">
                <img src={this.state.checked ? markChecked : markUnChecked} alt="ticked" onClick={this.handleCheck} />
            </div>
        )
    }
}

export default PickOptionToggle;