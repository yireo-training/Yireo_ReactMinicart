define([
    'react',
    'reactDom',
    'reactMinicartComponent',
    'Magento_Customer/js/customer-data'
], function(React, ReactDOM, MinicartComponent, customerData) {
    'use strict';

    return function(config, element) {
        var component = React.createElement(MinicartComponent.default, {showDropdown: false});
        ReactDOM.render(component, element);

        var cart = customerData.get('cart');
        cart.subscribe(function() {
            var component = React.createElement(MinicartComponent.default, {showDropdown: true});
            component.setOptions();
            ReactDOM.render(component, element);
        });
    };
});
