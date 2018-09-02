import React from 'react';

class Cart extends React.Component {
    render() {
        return (
            <div>
                <div className="items-total">
                    <span className="count">1</span>
                    <span>Item in Cart</span>
                    <span>Items in Cart</span>
                </div>

                <div className="subtotal">
                    <span className="label">
                        <span>Cart Subtotal</span>
                    </span>

                    <div className="amount price-container">
                        <span className="price-wrapper">
                            <span className="price">$48.00</span>
                        </span>
                    </div>
                </div>

                <div className="actions">
                    <div className="primary">
                        <button id="top-cart-btn-checkout" type="button" className="action primary checkout"
                                title="Proceed to Checkout">Proceed to Checkout
                        </button>
                    </div>
                </div>

                <strong className="subtitle">Recently added item(s)</strong>
                <div className="minicart-items-wrapper" style="height: 140px;">
                    <ol id="mini-cart" className="minicart-items">
                        <li className="item product product-item odd last">
                            <div className="product">
                                <a className="product-item-photo" href="http://magento4.yr/hera-pullover-hoodie.html"
                                   title="Hera Pullover Hoodie">
                        <span className="product-image-container"
                              style="width: 75px;">
                            <span className="product-image-wrapper" style="padding-bottom: 100%;">
                                <img className="product-image-photo"
                                     src="http://magento4.yr/pub/media/catalog/product/cache/fd4c882ce4b945a790b629f572e4ef93/w/h/wh02-blue_main.jpg"
                                     alt="Hera Pullover Hoodie" style="width: 75px; height: 75px;"/>
                            </span>
                        </span>
                                </a>

                                <div className="product-item-details">
                                    <strong className="product-item-name">
                                        <a href="http://magento4.yr/hera-pullover-hoodie.html">Hera Pullover Hoodie</a>
                                    </strong>

                                    <div className="product options">
                            <span className="toggle">
                                <span>See Details</span>
                            </span>

                                        <div className="content" style="display: none;">
                                            <strong className="subtitle"><span>Options Details</span></strong>
                                            <dl className="product options list">
                                                <dt className="label">Size</dt>
                                                <dd className="values">
                                                    <span data-bind="html: option.value">S</span>
                                                </dd>

                                                <dt className="label">Color</dt>
                                                <dd className="values">
                                                    <span>Green</span>
                                                </dd>
                                            </dl>
                                        </div>
                                    </div>

                                    <div className="product-item-pricing">
                                        <div className="price-container">
                                <span className="price-wrapper">
                                    <span className="price-wrapper price-excluding-tax">
                                        <span className="price">$48.00</span>
                                    </span>
                                </span>
                                        </div>
                                    </div>

                                    <div className="product actions">
                                        <div className="primary">
                                            <a className="action edit"
                                               href="http://magento4.yr/checkout/cart/configure/id/13/product_id/1065/"
                                               title="Edit item">
                                                <span>Edit</span>
                                            </a>
                                        </div>
                                        <div className="secondary">
                                            <a href="#" className="action delete" title="Remove item">
                                                <span>Remove</span>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                    </ol>
                </div>

                <div className="actions">
                    <div className="secondary">
                        <a className="action viewcart" href="http://magento4.yr/checkout/cart/">
                            <span>View and Edit Cart</span>
                        </a>
                    </div>
                </div>
            </div>
        );
    }
}

export default Cart;