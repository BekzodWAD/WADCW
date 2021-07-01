import React from 'react';
import './App.css';
import CategoryForm from './components/CategoryForm';
import ProductForm from './components/ProductForm';
import { Route } from 'react-router';

function App() {
  return (
    <div className="App">
      <Route excat path="/category/create" component={CategoryForm} />
      <Route exact path="/product/create" component={ProductForm}/>

    </div>
  );
}

export default App;
