var config = {
    map: {
        '*': {
            react: 'Yireo_ReactMinicart/js/react',
            reactDom: 'Yireo_ReactMinicart/js/react-dom',
            reactMinicart: 'Yireo_ReactMinicart/js/container',
            reactMinicartComponent: 'Yireo_ReactMinicart/js/compiled/Minicart',
            reactCustomerData: 'Yireo_ReactMinicart/js/customerData'
        }
    },
    shim: {
        reactMinicartComponent: ['react', 'reactDom']
    }
};