define([
    'react',
    'reactDom',
    'reactMinicartComponent',
    'Magento_Customer/js/customer-data'
], function(React, ReactDOM, MinicartComponent, customerData) {
    'use strict';

    return function(config, element) {
        ReactDOM.render(React.createElement(MinicartComponent.default), element);

        var cart = customerData.get('cart');
        cart.subscribe(function() {
            ReactDOM.render(React.createElement(MinicartComponent.default), element);
        });
    };
});
