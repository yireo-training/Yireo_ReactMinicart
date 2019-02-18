import CustomerData from './CustomerData';
import React from 'react';
import Cart from "./Minicart/Cart";
import EmptyCart from "./Minicart/EmptyCart";

class Minicart extends React.Component {
    componentWillMount() {
        this.setState((state, props) => {
            let showDropdown = props.showDropdown || false;

            return {
                showDropdown: showDropdown
            };
        });
    }

    toggleDropdown(event) {
        event.preventDefault();
        this.setState((state) => { return {showDropdown: !state.showDropdown}; });
        return false;
    }

    render() {
        var cart = CustomerData.getCartFromLocalStorage();
        cart.cartUrl = this.props.cartUrl;

        return (
            <div>
                <a className="action showcart" href="#" onClick={this.toggleDropdown.bind(this)}>
                    <span className="text">My Cart</span>
                    {cart.summary_count > 0 &&
                    <span className="counter qty">
                        <span className="counter-number">{cart.summary_count}</span>
                        <span className="counter-label">{cart.summary_count} items</span>
                    </span>
                    }
                </a>

                {this.state.showDropdown &&
                <div className="ui-dialog ui-widget ui-widget-content ui-corner-all ui-front">
                    <div className="block block-minicart ui-dialog-content ui-widget-content"
                         style={{display: "block"}}>
                        {!cart.summary_count > 0 && <EmptyCart/>}
                        {cart.summary_count > 0 && <Cart cart={cart}/>}
                    </div>
                </div>
                }
            </div>
        );
    }
}

export default Minicart;