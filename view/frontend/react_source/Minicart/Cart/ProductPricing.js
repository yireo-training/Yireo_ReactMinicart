import React from 'react';

class ProductPricing extends React.Component {
    render() {
        var product = this.props.product;

        return (
            <div className="product-item-pricing">
                <div className="price-container">
                    <span className="price-wrapper" dangerouslySetInnerHTML={{__html: product.product_price}}>
                    </span>
                </div>
            </div>
        );
    }
}

export default ProductPricing;