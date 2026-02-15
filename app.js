var data = {
    name: 'Bamboo Thermal Ski Coat',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, eaque.',
    price: "$499.99",
    image: 'https://hplussport.com/wp-content/uploads/2016/12/ski-coat_LYNDA_29940.jpg'
}

const { createApp } = Vue
createApp({
    data() {
        return {
            data
        }
    }
}).mount('#app')