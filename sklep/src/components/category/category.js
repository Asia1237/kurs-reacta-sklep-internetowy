import React from 'react';
import { Link } from 'react-router-dom';
import ProductsList from '../productsList/productsList';

const Category = (props) => {
  // const currentCategory = props.match.params.category;

  return (
    <div className="container">
      <h1>Category</h1>
      <Link to="/">Home</Link>
      <ProductsList />
    </div>
  );
};

export default Category;