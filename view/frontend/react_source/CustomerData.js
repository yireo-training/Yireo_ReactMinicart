const CustomerData = {
    getLocalStorage: function() {
        var cacheJson = localStorage.getItem('mage-cache-storage');
        return JSON.parse(cacheJson);
    },

    getCartFromLocalStorage: function() {
        var cache = this.getLocalStorage();
        if (cache.cart) {
            return cache.cart;
        }

        return {
            summary_count: 0
        };
    }
};

export default CustomerData;