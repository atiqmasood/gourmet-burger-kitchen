import React, { Component } from 'react';
import addButtonImg from '../assets/icons/item-plus.svg';
import IngredientsModal from './modal';

class ItemList extends Component{

    constructor(props) {
        super(props);
        this.state = {
            modal: false,
            selectedItem: {}
        };

        this.toggle = this.toggle.bind(this);
    }

    toggle(e,item) {
        console.log('click event calling', item);
        e.preventDefault();
        this.setState({
            modal: !this.state.modal,
            selectedItem: item
        });
    }

    render() {
        const itemlist = this.props.itemlist;
        console.log('list of item :', this.props.itemlist);
        return(
            <div>
                <div id="menuBodyCat40818" className="catItemHolder menu-body__category-wrapper" style={{ display: 'block' }}>
                    <div className="menu-body__category-title-wrapper">
                        <h1 className="menu-body__category-title">{this.props.categoryName}</h1>
                        <i className="menu-body__menu-info-button fa fa-info-circle" aria-hidden="true" onClick="menuInfoModal.open();"></i>
                    </div>
                    <p className="menu-body__category-desc"></p>
                    {
                        itemlist && itemlist.length && itemlist.map((item) => {
                            const combinedPriceStr = item.portions.map(({ingredient}) => `£${ingredient.addPrice}`).join(' / ');
                            const portionsToRender = [item.portions[0]];
                            const showCustomizationMenu = item.portions.length > 1 || (item.portions[0].ingredient.modifiers); // This will decide whether to customization dialog to user before adding item to order.
                            return (
                                <div key={item.id}>
                                    {
                                        portionsToRender.map((itemPortion) => {
                                            const portionIngredient = itemPortion.ingredient;
                                            return (
                                                <ul className="menu-body__item-list">
                                                    <li id="menuItem237998" className="menuItem ">
                                                        <div className="menuItemBody">
                                                            <div className="menu-item-heading">
                                                                <h3>{item.name}</h3>
                                                                <span>{combinedPriceStr}</span>
                                                            </div>
                                                            <div className="menu-info">
                                                                <p>{item.description}</p>
                                                            </div>
                                                        </div>

                                                        <div className="menuItemAction">
                                                            <div className="item-action__add-img-wrapper">
                                                                <img id="menuItemActionImg244425" className="item-action__add-img" src={addButtonImg} alt="Add" data-id="237998"
                                                                     onClick={((e) => showCustomizationMenu ? this.toggle(e, portionIngredient) : alert("Test: Item added to order."))} title="Add" />
                                                            </div>
                                                            <button id="menuItemActionBtn244425" className="menu-add-btn">
                                                                Add
                                                            </button>
                                                            <div className="spinner"></div>
                                                        </div>
                                                        <div id="menuItemQty244425" data-tags="" className="menuItemQty" style={{display: 'none'}}></div>
                                                    </li>
                                                </ul>
                                            );
                                        })

                                    }
                                </div>
                            )
                        })
                    }
                </div>
                <IngredientsModal toggle={this.toggle} modal={this.state.modal} selectedItem={this.state.selectedItem} />
            </div>
        );
    }
}

export default ItemList;