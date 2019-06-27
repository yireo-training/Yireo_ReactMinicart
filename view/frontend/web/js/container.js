define([
    'react',
    'reactDom',
    'reactMinicartComponent',
    'Magento_Customer/js/customer-data'
], function(React, ReactDOM, MinicartComponent, customerData) {
    'use strict';

    return function(config, domElement) {
        var reactElement = React.createElement(MinicartComponent.default, config);
        var component = ReactDOM.render(reactElement, domElement);

        var cart = customerData.get('cart');
        cart.subscribe(function() {
            component.forceUpdate();
        });

        return component;
    };
});











