import React from 'react';
import Counter from './Cart/Counter';
import Subtotal from './Cart/Subtotal';
import Product from "./Cart/Product";
import Actions from "./Cart/Actions";

class Cart extends React.Component {
    render() {
        var cart = this.props.cart;

        return (
            <div className="block-content">
                <div className="block-title">
                    <strong>
                        <span className="text">My Cart</span>
                    </strong>
                </div>

                <Counter count={cart.summary_count}/>
                <Subtotal subtotal={cart.subtotal}/>

                <div className="actions">
                    <div className="primary">
                        <a href={cart.shoppingCartUrl} className="action primary checkout" title="Proceed to Checkout">Proceed to Checkout
                        </a>
                    </div>
                </div>

                <strong className="subtitle">Recently added item(s)</strong>
                <div className="minicart-items-wrapper">
                    <ol id="mini-cart" className="minicart-items">
                        {cart.items.map(function(product, index) {
                            return (
                                <Product key={index} product={product} />
                            );
                        })}
                    </ol>
                </div>

                <Actions cart={cart}/>

                <button type="button" className="action close" title="Close">
                    <span>Close</span>
                </button>
            </div>
        );
    }
}

export default Cart;