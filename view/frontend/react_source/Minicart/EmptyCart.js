import React from 'react';

class EmptyCart extends React.Component {
    render() {
        return (
            <div className="block-content">
                <div className="block-title">
                    <strong>
                        <span className="text">My Cart</span>
                    </strong>
                </div>

                <strong className="subtitle empty">You have no items in your shopping cart.</strong>

                <button type="button" className="action close" title="Close">
                    <span>Close</span>
                </button>
            </div>
        );
    }
}

export default EmptyCart;