import Modal from "react-bootstrap/Modal";
import axios from "axios";
import { BASE_API } from "../contants/api.constant";
import { useEffect, useState } from "react";
export function ModalOrdenes({ open, setOpen }) {
  const [orders, setOrders] = useState([]);

  async function fetchOrders() {
    try {
      const response = await axios.get(`${BASE_API}/orders`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      setOrders(response.data);
    } catch (error) {
      // alert("Error al agregar producto, reinicie la sesion");
    }
  }

  useEffect(() => {
    fetchOrders();
  }, []);

  return (
    <Modal show={open} onHide={() => setOpen(false)}>
      <Modal.Header closeButton>
        <Modal.Title>Tus ordenes de compra</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div>
          <table style={{ width: "100%" }} cellPadding={8}>
            <thead>
              <tr>
                <th>Numero de orden</th>
                <th>Fecha</th>
                <th>Cantidad de productos</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order) => (
                <tr key={order.id} style={{ borderBottom: "1px solid #ccc" }}>
                  <td>001 - {order.id}</td>
                  <td>{order.createdAt.split("T")[0]}</td>
                  <td>{order.product_ids.length}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Modal.Body>
      <Modal.Footer></Modal.Footer>
    </Modal>
  );
}
