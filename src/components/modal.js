import React from 'react';
import { Button, Modal, ModalBody, ModalFooter } from 'reactstrap';
import '../assets/scss/main.scss';
import Modifiers from './modifiers';

class IngredientsModal extends React.Component {

    constructor(){
        super();
        this.state = {showAdvanceOpt: false};

        this.toggleAdvanceOptions = this.toggleAdvanceOptions.bind(this);
    }

    toggleAdvanceOptions(){
        this.setState({ showAdvanceOpt: !this.state.showAdvanceOpt })
    }

    render() {
        if (!this.props.selectedItem){ return null; }
        const {name, description, modifiers, addPrice} = this.props.selectedItem;
        const allmodifiers = modifiers || [];
        const requiredModifiers = allmodifiers.filter((modifier) => modifier.requirementType === 'required');
        const optionalModifiers = allmodifiers.filter((modifier) => modifier.requirementType === 'optional' || modifier.requirementType === 'none');
        return (
            <Modal style={{margin: '30rem 0rem 0rem 40rem', backgroundColor: 'red'}} isOpen={this.props.modal} toggle={this.props.toggle}>
                <div id="menuPickerTitle" className="std-customisation__title">
                    <h3>
                        {name}
                        <span>from £{addPrice}</span>
                    </h3>
                    <i id="menuPickerClose" className="fa fa-times std_customisation__close"></i>

                    <p className="std_customisation__item-desc">{description}</p>
                </div>
                <ModalBody style={{backgroundColor: '#fdeae5'}}>
                    <div>
                        <div id="menuPickerBody">
                            <div className="menuPickerOptionHolder options">
                                <Modifiers modifiers={requiredModifiers} />
                            </div>
                            {
                                this.state.showAdvanceOpt ?
                                    <div className="advancedMenuPickerOptionHolder options">
                                        <Modifiers modifiers={optionalModifiers} />
                                    </div> :
                                    <div className="options__advanced-link" onClick={this.toggleAdvanceOptions}>
                                        <p>Want to Customise your item?</p>
                                    </div>
                            }
                        </div>
                    </div>
                </ModalBody>
                <ModalFooter style={{backgroundColor: '#fdeae5'}}>
                    <button id="menuPickerButton" className="options__add-btn flypay-button" onClick="">
                        ADD TO ORDER
                    </button>{' '}
                    <Button color="danger" onClick={this.props.toggle}>CLOSE</Button>
                </ModalFooter>
            </Modal>
        )
    }
}

export default IngredientsModal;