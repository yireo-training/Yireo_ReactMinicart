var config = {
    map: {
        '*': {
            reactMinicart: 'Yireo_ReactMinicart/js/container',
            reactMinicartComponent: 'Yireo_ReactMinicart/js/compiled/Minicart',
            reactCustomerData: 'Yireo_ReactMinicart/js/customerData'
        }
    },
    shim: {
        reactMinicartComponent: ['react', 'reactDom']
    }
};
