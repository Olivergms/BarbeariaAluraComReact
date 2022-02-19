import { createServer, Model } from 'miragejs';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';


createServer({
  models: {
    products: Model,   
  },

  seeds(server){
    server.db.loadData({
      products: [
        {
          id: 1,
          title: 'Cabelo',
          image: 'https://angelicaalbuquerque.github.io/barbearia_alura/cabelo.jpg',
          description: 'Na tesoura ou máquina, como o cliente preferir',
          price: '25.00',
        },
        {
          id: 2,
          title: 'Barba',
          image: 'https://angelicaalbuquerque.github.io/barbearia_alura/barba.jpg',
          description: 'Corte e desenho profissional de barba',
          price: '18.00',
        },
        {
          id: 3,
          title: 'Cabelo + Barba',
          image: 'https://angelicaalbuquerque.github.io/barbearia_alura/cabelo+barba.jpg',
          description: 'Pacote completo de cabelo e barba',
          price: '35.00',
        },
      ],
    })
  },
  routes(){
    this.namespace = 'api'

    this.get('products', (schema) => {
      return schema.db.products;
    });
  }
});

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

