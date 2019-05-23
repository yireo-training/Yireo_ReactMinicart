import React from 'react';

class ProductActions extends React.Component {
    render() {
        var product = this.props.product;

        return (
            <div className="product actions">
                <div className="primary">
                    <a className="action edit" href={product.configure_url} title="Edit item">
                        <span>Edit</span>
                    </a>
                </div>
                <div className="secondary">
                    <a href="#" className="action delete" title="Remove item">
                        <span>Remove</span>
                    </a>
                </div>
            </div>
        );
    }
}

export default ProductActions;