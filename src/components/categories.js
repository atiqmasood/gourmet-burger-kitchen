import React, { Component } from 'react';
import ItemList from './items';
import '../assets/scss/main.scss';

class CategoriesList extends Component {
    constructor(){
        super();
        this.state = {
            selectedCategoryId: 40474,
            categoryName: 'PRE BURGER'
        };

        this.selectCategory = this.selectCategory.bind(this);
    }

    selectCategory(e, id, name){
        e.preventDefault();
        console.log('select category is:', id);
        this.setState({
            selectedCategoryId: id,
            categoryName: name
        })
    }

    render() {
        const categories = this.props.categorieslist;
        const mapCategories = categories && categories.length && categories.map((category) => {
           return <li style={{color: this.state.selectedCategoryId === category.id && 'red'}} className="menu-categories__name" key={category.id} onClick={((e) =>this.selectCategory(e, category.id, category.name))} title={category.description}>{category.name}</li>
        });
        let itemlist = [];
        categories && categories.length && categories.filter((item) => {
            if (item.id === this.state.selectedCategoryId){
                itemlist =  item.items;
            }
            return item;
        });

        return (
            <div>
                <div className="col-xs-12 col-sm-4">
                    <div id="menuCats" className=" hidden-xs hidden-sm">
                        <ul>
                            {mapCategories}
                        </ul>
                    </div>
                </div>
                <div className="col-xs-12 col-sm-4">
                    <div><ItemList itemlist={itemlist} categoryName={this.state.categoryName} /></div>
                </div>
            </div>
        );
    }
}

export default CategoriesList;
