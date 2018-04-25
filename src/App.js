import React, { Component } from 'react';
import CategoriesList from './components/categories';
import Header from './components/Header';
import { connect } from 'react-redux';
import { loadCategories } from './actions/CategoryAction';
import './app.css';
import MyOrder from './components/MyOrder';


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
            <div className="bodyStyle">
                    <div className="container">
                        <Header />
                        <section className="col-md-12 location-select" id="location">
                            <div className="sectionTitleHolder clearfix">
                                <div className="sectTitleStep complete">
                                    <div className="section-indicator complete"><i className="fa fa-check"></i></div>
                                    <h2><a href="#" title="PICK A LOCATION" onClick={() => {alert('Pick a Location')}}>PICK A LOCATION</a></h2>
                                    <div className="spinner"></div>
                                </div>

                                <div id="selectedLocation" className="sectTitleAction">Covent Garden</div>
                            </div>
                            <div id="locationPanel" className="col-md-12 bodyHolder location-panel"></div>
                        </section>
                        <div className="sectionTitleHolder clearfix" style={{marginTop: '5rem'}}>
                            <div className="col-md-6 sectTitleStep">
                                <div className="section-indicator">2</div>
                                <h2>
                                    <a className="#" title="SELECT YOUR FOOD" onClick={() => {alert('SELECT YOUR FOOD')}}>SELECT YOUR FOOD</a>
                                </h2>
                                <div className="spinner"></div>
                            </div>

                            <div className="col-md-6 sectTitleAction mobile-basket" onClick="">
                                <i id="mobileBasketShow" className="fa fa-shopping-cart menu-basket__icon"></i>
                                <h5 id="menuPrice" className="menu-basket__price">£0.00</h5>
                            </div>
                        </div>
                        <div><CategoriesList categorieslist={categorieslist} /></div>
                        <div id="menuBasket" className="col-md-4 hidden-sm hidden-xs clearfix" style={{marginTop: '2rem'}}>
                            <MyOrder/>
                        </div>
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
