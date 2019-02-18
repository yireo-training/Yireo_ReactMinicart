define([
    'react',
    'reactDom',
    'reactMinicartComponent',
    'Magento_Customer/js/customer-data'
], function(React, ReactDOM, MinicartComponent, customerData) {
    'use strict';

    return function(config, element) {

        config.showDropdown = false;
        config.addMessage = function(message, type) {
            if (type === undefined) {
                type = 'success';
            }

            customerData.set('messages', {
                messages: [{
                    type: type,
                    text: message
                }]
            });
        };

        function renderComponent() {
            var component = React.createElement(MinicartComponent.default, config);
            ReactDOM.render(component, element);
        }

        renderComponent();

        var cart = customerData.get('cart');
        cart.subscribe(function() {
            renderComponent();
        });
    };
});
