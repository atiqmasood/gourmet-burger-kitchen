import React, { Component } from 'react';
import '../app.css';


class MyOrder extends Component {

    render() {
        return (
            <div id="menuBasketWrapper" className="basket__wrapper">
                <div id="menuBasketTitle" className="basket__title-wrapper">
                    <h2 className="basket__title">MY ORDER</h2>

                    <div id="menuBasketBack" className="basket__close-icon">
                        <i className="fa fa-times"></i>
                    </div>
                </div>
                <ul id="menuBasketList" className="basket_item-list"></ul>

                <div className="basket__loyalty-wrapper" data-logged_in="false">
                    <div className="basket__loyalty-label">
                        <h5>Login to use your rewards</h5>
                    </div>
                    <div className="basket__loyalty-btn">
                        <a href="/login">
                            <button className=" flypay-button">Login</button>
                        </a>
                    </div>
                </div>

                <div id="basketTotal" className="basket_total-wrapper">
                    <div id="basketTotalTitle" className="basket_total-title">TOTAL:</div>
                    <div id="basketTotalPrice" className="basket-total">£0.00</div>
                </div>

                <button className="basket__checkout-btn flypay-button" onClick="javascript: flypayEngine.submitOrder(); fbq('track', 'InitiateCheckout');">checkout
                </button>
            </div>
        );
    }
}



export default MyOrder;
