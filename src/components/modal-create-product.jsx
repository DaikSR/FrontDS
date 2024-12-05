import Modal from "react-bootstrap/Modal";
import axios from "axios";
import { BASE_API } from "../contants/api.constant";
import { useEffect, useState } from "react";

export function ModalCreateProduct({ open, setOpen }) {
  const [titulo, setTitulo] = useState("");
  const [precio, setPrecio] = useState("");
  const [image, setImage] = useState("");
  const [description, setDescription] = useState("");
  const [content, setContent] = useState("");
  const [detail, setDetail] = useState("");

  async function handleEditProduct() {
    try {
      await axios.post(
        `${BASE_API}/products`,
        {
          titulo,
          precio,
          image,
          description,
          content,
          detail,
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );

      setOpen(false);

      window.location.reload();
    } catch (error) {}
  }

  return (
    <Modal show={open} onHide={() => setOpen(false)}>
      <Modal.Header closeButton>
        <Modal.Title>Crear producto</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div style={{ display: "flex", gap: "10px", flexDirection: "column" }}>
          <div>
            <label htmlFor="titulo">Titulo:</label>
            <input
              type="text"
              id="titulo"
              onChange={(e) => setTitulo(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="precio">Precio:</label>
            <input
              type="text"
              id="precio"
              onChange={(e) => setPrecio(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="imagenOriginal">Imagen url:</label>
            <input
              type="text"
              id="imagenOriginal"
              onChange={(e) => setImage(e.target.value)}
            />
          </div>
          <div style={{ display: "flex", gap: "4px", flexDirection: "column" }}>
            <label htmlFor="">Descripcion:</label>
            <textarea
              type="text"
              onChange={(e) => setDescription(e.target.value)}
            ></textarea>
          </div>

          <div style={{ display: "flex", gap: "4px", flexDirection: "column" }}>
            <label htmlFor="">Contenido:</label>
            <textarea
              type="text"
              onChange={(e) => setContent(e.target.value)}
            ></textarea>
          </div>

          <div style={{ display: "flex", gap: "4px", flexDirection: "column" }}>
            <label htmlFor="">Detalle:</label>
            <textarea
              type="text"
              onChange={(e) => setDetail(e.target.value)}
            ></textarea>
          </div>

          <div style={{ display: "flex", justifyContent: "end" }}>
            <button
              style={{
                cursor: "pointer",
                backgroundColor: "red",
                color: "white",
                borderRadius: "8px",
                border: "none",
                paddingBlock: "4px",
              }}
              onClick={handleEditProduct}
            >
              Crear producto
            </button>
          </div>
        </div>
      </Modal.Body>
      <Modal.Footer></Modal.Footer>
    </Modal>
  );
}
