import React from 'react';

class ProductDetails extends React.Component {
    render() {
        var product = this.props.product;

        return (
            <div className="content">
                <strong className="subtitle"><span>Options Details</span></strong>
                <dl className="product options list">
                    {product.options.map(function (option) {
                        return (
                            <div key={option.value}>
                                <dt className="label">{option.label}</dt>
                                <dd className="values">{option.value}</dd>
                            </div>
                        );
                    })}
                </dl>
            </div>
        );
    }
}

export default ProductDetails;