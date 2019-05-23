import React from 'react';

class Actions extends React.Component {
    render() {
        var cart = this.props.cart;

        return (
            <div className="actions">
                <div className="secondary">
                    <a className="action viewcart" href={cart.shoppingCartUrl}>
                        <span>View and Edit Cart</span>
                    </a>
                </div>
            </div>
        );
    }
}

export default Actions;