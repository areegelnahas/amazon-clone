import React from "react";
import Product from "./Product";

const ProductsFeed = ({ products }) => {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 md:-mt-52">
      {products.map(({ id, title, price, category, description, image }) => (
        <Product
          key={id}
          id={id}
          title={title}
          price={price}
          category={category}
          description={description}
          image={image}
        />
      ))}
    </div>
  );
};

export default ProductsFeed;
