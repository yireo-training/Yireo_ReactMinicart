import React from 'react';

class Subtotal extends React.Component {
    render() {
        var subtotal = this.props.subtotal;

        return (
            <div className="subtotal">
                <span className="label">
                    <span>Cart Subtotal</span>
                </span>

                <div className="amount price-container">
                    <span className="price-wrapper" dangerouslySetInnerHTML={{__html: subtotal}}></span>
                </div>
            </div>
        );
    }
}

export default Subtotal;