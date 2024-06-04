import React from 'react';
import Product from './product';

export default function ProductList() {
  return (
    <section>
      <h1>Product List</h1>
      <Product name="Laptop" price={1200} />
      <Product name="Phone" price={800} />
    </section>
  );
}
