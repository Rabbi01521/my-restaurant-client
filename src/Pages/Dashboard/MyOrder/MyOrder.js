import React, { useEffect, useState } from "react";
import { Button, Container, Table } from "react-bootstrap";
import { toast } from "react-toastify";
import useAuth from "../../../Hook/useAuth";

const MyOrder = () => {
  const [orders, setOrders] = useState([]);
  const { user } = useAuth();

  useEffect(() => {
    const myOrderUri = `https://limitless-oasis-13774.herokuapp.com/orders/${user.email}`;

    fetch(myOrderUri)
      .then((res) => res.json())
      .then((result) => setOrders(result));
  }, [orders, user.email]);

  const handleDeleteOrder = (productId) => {
    const cancelConfirmation = window.confirm(
      "Do you want to cancel your order?"
    );

    if (cancelConfirmation) {
      const productUri = `https://limitless-oasis-13774.herokuapp.com/orders/${productId}`;
      fetch(productUri, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((result) => {
          toast.error(`Order canceled successfully`, {
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
          <h3 className="fw-bold text-light">My Order</h3>
        </div>

        <Table responsive hover size="sm">
          <thead>
            <tr>
              <th className="text-light">#</th>
              <th className="text-light">Image</th>
              <th className="text-light">Title</th>
              <th className="text-light">Price</th>
              <th className="text-light">Order Status</th>
              <th className="text-light">Action</th>
            </tr>
          </thead>

          <tbody>
            {orders.map((order, index) => (
              <tr key={index}>
                <td className="text-light">{index + 1}</td>
                <td>
                  <img
                    src={order.image}
                    style={{
                      width: "72px",
                      border: "1px solid gray",
                      borderRadius: "4px",
                    }}
                    alt=""
                  />
                </td>
                <td className="text-light">{order.title}</td>
                <td className="text-light">${order.price}</td>
                <td className="text-light">{order.status}</td>
                <td>
                  <Button
                    onClick={() => handleDeleteOrder(order._id)}
                    variant="danger"
                    size="sm"
                  >
                    CANCEL
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

export default MyOrder;
