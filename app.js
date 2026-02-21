

const { createApp } = Vue
createApp({
    data() {
        return {
            products: null,
            maximum: 50
        }
    },
    mounted() {
        fetch('https://hplussport.com/api/products/order/price')
            .then(response => response.json())
            .then(data => {
                this.products = data;
            })
    }
}).mount('#app')