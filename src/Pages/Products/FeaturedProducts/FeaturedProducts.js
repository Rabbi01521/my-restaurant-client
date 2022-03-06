import React, { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import SingleProduct from "../SingleProduct/SingleProduct";

const FeaturedProducts = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data.slice(0, 6));
      });
  }, []);

  return (
    <div className="my-5 py-5">
      <Container>
        <h2 className="text-left fs-1 fw-bold text-secondary my-5">
          Best Foods
        </h2>
        <Row xs={1} md={2} lg={3} xl={3} className="g-4">
          {products.map((product) => (
            <SingleProduct key={product._id} product={product}></SingleProduct>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default FeaturedProducts;
