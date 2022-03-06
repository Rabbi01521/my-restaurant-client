import React, { useEffect, useState } from "react";
import { Button, Container, Table } from "react-bootstrap";
import { toast } from "react-toastify";

const ManageOrder = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    fetch("https://limitless-oasis-13774.herokuapp.com/orders")
      .then((res) => res.json())
      .then((data) => setOrders(data));
  }, [orders]);

  /* 
        const handleUpdateStatus = productId => {
            fetch(`https://limitless-oasis-13774.herokuapp.com/orders/${productId}`, {
                method: 'PUT',
                headers: {
                    'content-type': 'application.json'
                },
                body: JSON.stringify({ status: 'Shipped' })
            })
                .then(res => res.json())
                .then(result => {
    
                })
        };
         */

  const handleDeleteOrder = (orderId) => {
    const deleteConfirmation = window.confirm("Do you want delete the order?");

    if (deleteConfirmation) {
      const productUri = `https://limitless-oasis-13774.herokuapp.com/orders/${orderId}`;
      fetch(productUri, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((result) => {
          toast.error(`Order deleted successfully`, {
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
          <h3 className="fw-bold text-light">Manage Order</h3>
        </div>

        <Table responsive hover size="sm">
          <thead>
            <tr>
              <th className="text-light">#</th>
              <th className="text-light">Image</th>
              <th className="text-light">Title</th>
              <th className="text-light">Price</th>
              <th className="text-light">User Name</th>
              <th className="text-light">User Email</th>
              <th className="text-light">Order Status</th>
              <th className="text-light">Action</th>
            </tr>
          </thead>

          <tbody>
            {orders.map((order, index) => (
              <tr>
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
                <td className="text-light">{order.displayName}</td>
                <td className="text-light">{order.email}</td>
                <td className="text-light">{order.status}</td>
                <td>
                  {/* <Button variant="success" size="sm" onClick={() => handleUpdateStatus(order._id)}>APPROVE</Button> */}{" "}
                  <Button
                    onClick={() => handleDeleteOrder(order._id)}
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

export default ManageOrder;
