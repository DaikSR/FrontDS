import Modal from "react-bootstrap/Modal";
import axios from "axios";
import { BASE_API } from "../contants/api.constant";
import { useEffect, useState } from "react";

export function ModalFinalizarCompra({ open, setOpen }) {
  const [loading, setLoading] = useState(false);
  const [confirm, setConfirm] = useState(false);

  const [nombre, setNombre] = useState("");
  const [numero, setNumero] = useState("");
  const [fecha, setFecha] = useState("");
  const [cvv, setCvv] = useState("");
  const [monto, setMonto] = useState("");

  async function handleFinalizarCompra() {
    try {
      await axios.get(`${BASE_API}/orders/create-order`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
    } catch (error) {
      alert("Error al finalizar la compra");
    }
  }

  function handleEnter() {
    if (nombre === "" || numero === "" || fecha === "" || cvv === "") {
      alert("Por favor, rellene todos los campos");
      return;
    }
    setLoading(true);
    handleFinalizarCompra();

    setTimeout(() => {
      setLoading(false);
      setConfirm(true);
    }, 2000);

    setTimeout(() => {
      window.location.reload();
    }, 3000);
  }

  return (
    <Modal show={open} onHide={() => setOpen(false)}>
      <Modal.Header closeButton>
        <Modal.Title>Fianlizar tu compra</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="payment-container">
          <div>
            <div className="form-group">
              <label htmlFor="cardholder-name">Nombre del titular</label>
              <input
                type="text"
                id="cardholder-name"
                placeholder="Nombre completo"
                required
                onChange={(e) => setNombre(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="card-number">Número de tarjeta</label>
              <input
                type="text"
                id="card-number"
                placeholder="1234 5678 9012 3456"
                maxLength="19"
                required
                onChange={(e) => setNumero(e.target.value)}
              />
            </div>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="expiry-date">Fecha de expiración</label>
                <input
                  type="text"
                  id="expiry-date"
                  placeholder="MM/AA"
                  maxLength="5"
                  required
                  onChange={(e) => setFecha(e.target.value)}
                />
              </div>
              <div className="form-group">
                <label htmlFor="cvv">CVV</label>
                <input
                  type="text"
                  id="cvv"
                  placeholder="123"
                  maxLength="3"
                  required
                  onChange={(e) => setCvv(e.target.value)}
                />
              </div>
            </div>

            <button onClick={handleEnter} type="submit" disabled={loading}>
              Pagar ahora
            </button>
          </div>
        </div>
      </Modal.Body>
      <Modal.Footer>
        {confirm && (
          <span style={{ color: "green" }}>Compra realizada con exito!</span>
        )}
      </Modal.Footer>
    </Modal>
  );
}
