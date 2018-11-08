import React from 'react';
import ProductDetails from "./ProductDetails";
import ProductPricing from "./ProductPricing";
import ProductActions from "./ProductActions";

class Product extends React.Component {
    render() {
        var product = this.props.product;

        return (
            <li className="item product product-item">
                <div className="product">
                    <a className="product-item-photo" href={product.product_url} title={product.product_name}>
                        <span className="product-image-container">
                            <span className="product-image-wrapper">
                                <img className="product-image-photo"
                                     src={product.product_image.src}
                                     alt={product.product_name}/>
                            </span>
                        </span>
                    </a>

                    <div className="product-item-details">
                        <strong className="product-item-name">
                            <a href={product.product_url}>{product.product_name}</a>
                        </strong>

                        <details>
                            <summary>See Details</summary>
                            <ProductDetails product={product}/>
                        </details>

                        <ProductPricing product={product}/>
                        <ProductActions product={product}/>
                    </div>
                </div>
            </li>
        );
    }
}

export default Product;