import React from 'react';
import './App.css';
import CategoryForm from './components/CategoryForm';
import ProductForm from './components/ProductForm';
import { Route } from 'react-router';
import ProductList from './components/ProductList';

function App() {
  return (
    <div className="App">
      <Route exact path="/" component={ProductList} />
      <Route excat path="/categories/create" component={CategoryForm} />
      <Route exact path="/products/create" component={ProductForm}/>
      <Route exact path="/products/edit/:productId" component={ProductForm}/>

    </div>
  );
}

export default App;
