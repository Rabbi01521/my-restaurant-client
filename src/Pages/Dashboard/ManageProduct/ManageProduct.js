import React, { useEffect, useState } from "react";
import { Button, Container, Table } from "react-bootstrap";
import { toast } from "react-toastify";

const ManageProduct = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://limitless-oasis-13774.herokuapp.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, [products]);

  const handleDeleteProduct = (productId) => {
    const deleteConfirmation = window.confirm("Do you want to delete product?");

    if (deleteConfirmation) {
      const productUri = `https://limitless-oasis-13774.herokuapp.com/product/${productId}`;

      fetch(productUri, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((result) => {
          toast.error(`Product deleted successfully`, {
            position: "bottom-left",
            autoClose: 2000,
          });
        });
    }
  };

  return (
    <div>
      <Container>
        <div className="mb-4">
          <h3 className="fw-bold text-light">Manage Products</h3>
        </div>

        <Table responsive hover size="sm">
          <thead>
            <tr>
              <th className="text-light">#</th>
              <th className="text-light">Image</th>
              <th className="text-light">Title</th>
              <th className="text-light">Price</th>
              <th className="text-light">Availability</th>
              <th className="text-light">Action</th>
            </tr>
          </thead>

          <tbody>
            {products.map((product, index) => (
              <tr>
                <td className="text-light">{index + 1}</td>
                <td>
                  <img
                    src={product.image}
                    style={{
                      width: "72px",
                      border: "1px solid gray",
                      borderRadius: "4px",
                    }}
                    alt=""
                  />
                </td>
                <td className="text-light">{product.title}</td>
                <td className="text-light">${product.price}</td>
                <td className="text-light">In Stock</td>
                <td>
                  <Button
                    onClick={() => handleDeleteProduct(product._id)}
                    variant="danger"
                    size="sm"
                  >
                    DELETE
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Container>
    </div>
  );
};

export default ManageProduct;
