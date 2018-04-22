import React, { Component } from 'react';
import CategoriesList from './components/categories';
import { connect } from 'react-redux';
import { loadCategories } from './actions/CategoryAction';


class App extends Component {

    componentDidMount(){
        const LocationId = 92;
        const OrderTypeId = 1;
        const accessToken = '2629afb4ff7d1c2be74d8c107ebdd4d18df2bb69fcd1bbe3d36d39c073b8941e';
        this.props.loadCategories(LocationId, OrderTypeId, accessToken);
    }

    render() {
        const menus = this.props.categorieslist;
        const categorieslist = menus && menus.length && menus[0].categories;
        return (
            <div className="container-fluid">
                <div className="content">
                    <div><CategoriesList categorieslist={categorieslist} /></div>
                    <div className="col-xs-12 col-sm-4"></div>
                </div>
            </div>
        );
    }
}


function mapStateToProps(state){
    return{
        categorieslist:  state.categories.list
    }
}
export default connect(mapStateToProps, { loadCategories })(App);
