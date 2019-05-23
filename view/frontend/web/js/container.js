define([
    'react',
    'reactDom',
    'reactMinicartComponent',
    'Magento_Customer/js/customer-data',
    'knockout'
], function(React, ReactDOM, MinicartComponent, customerData, ko) {
    'use strict';

    return function(config, domElement) {

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

        config.cart = {
            addItem: function() {

            },
            removeItem: function() {

            },
            editItem: function() {

            }
        };

        config.foobar = ko.observable('');

        var reactElement = React.createElement(MinicartComponent.default, config);
        var component = ReactDOM.render(reactElement, domElement);

        var cart = customerData.get('cart');
        cart.subscribe(function() {
            config.foobar('updated');
            component.forceUpdate();
        });

        return component;
    };
});











