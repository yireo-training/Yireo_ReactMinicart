import React from 'react';
import CustomerData from './../CustomerData';
import EmptyCart from "./Dropdown/EmptyCart";
import Cart from "./Dropdown/Cart";

class Dropdown extends React.Component {
    render() {
        var cart = CustomerData.getCartFromLocalStorage();
        var cartSummaryCount = cart.summary_count;

        return (
            <div>
                <div className="block-title">
                    <strong>
                        <span className="text">My Cart</span>
                    </strong>
                </div>

                {!cartSummaryCount > 0 && <EmptyCart/>}
                {cartSummaryCount > 0 && <Cart/>}


            </div>
        );
    }
}

export default Dropdown;