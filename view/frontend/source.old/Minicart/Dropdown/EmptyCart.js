import React from 'react';

class EmptyCart extends React.Component {
    render() {
        return (
            <strong className="subtitle empty">You have no items in your shopping cart.</strong>
        );
    }
}

export default EmptyCart;