import CustomerData from './CustomerData';
import React from 'react';
import Cart from "./Minicart/Cart";
import EmptyCart from "./Minicart/EmptyCart";

class Minicart extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            defaultShowdown: props.showDropdown,
            clickShowDropdown: false
        };
    }

    toggleDropdown(event) {
        event.preventDefault();
        const currentState = this.state.clickShowDropdown;
        this.setState({clickShowDropdown: !currentState, defaultShowdown: false});
        return false;
    }

    render() {
        var cart = CustomerData.getCartFromLocalStorage();
        var cartSummaryCount = cart.summary_count;

        var showDropdown = this.state.clickShowDropdown;
        if (this.state.clickShowDropdown == false && this.state.defaultShowdown == true) {
            showDropdown = true;
        }

        cart.shoppingCartUrl = window.checkout.shoppingCartUrl;

        return (
            <div>
                <a className="action showcart" href="#" onClick={this.toggleDropdown.bind(this)}>
                    <span className="text">My Cart</span>
                    {cartSummaryCount > 0 &&
                    <span className="counter qty">
                        <span className="counter-number">{cartSummaryCount}</span>
                        <span className="counter-label">{cartSummaryCount} items</span>
                    </span>
                    }
                </a>

                {showDropdown &&
                <div className="ui-dialog ui-widget ui-widget-content ui-corner-all ui-front">
                    <div className="block block-minicart ui-dialog-content ui-widget-content"
                         style={{display: "block"}}>
                        {!cartSummaryCount > 0 && <EmptyCart/>}
                        {cartSummaryCount > 0 && <Cart cart={cart}/>}
                    </div>
                </div>
                }
            </div>
        );
    }
}

export default Minicart;