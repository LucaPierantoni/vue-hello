const { createApp } = Vue

createApp({
    data() {
      	return {
        	message: 'VUE HELLO!',
        	image: 'https://static.vecteezy.com/ti/vettori-gratis/p3/3750422-uomo-di-ciao-gratuito-vettoriale.jpg'
      	}
    }
}).mount('#app')