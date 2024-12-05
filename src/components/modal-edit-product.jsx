import Modal from "react-bootstrap/Modal";
import axios from "axios";
import { BASE_API } from "../contants/api.constant";
import { useState } from "react";

export function ModalEditProduct({ open, setOpen, productSelected }) {
  const [titulo, setTitulo] = useState(productSelected.titulo);
  const [precio, setPrecio] = useState(productSelected.precio);
  const [image, setImage] = useState(productSelected.image);
  const [description, setDescription] = useState(productSelected.description);
  const [content, setContent] = useState(productSelected.content);
  const [detail, setDetail] = useState(productSelected.detail);

  async function handleEditProduct() {
    try {
      await axios.patch(
        `${BASE_API}/products/${productSelected.id}`,
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
        <Modal.Title>Editar producto</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div style={{ display: "flex", gap: "10px", flexDirection: "column" }}>
          <div>
            <label htmlFor="titulo">Titulo:</label>
            <input
              type="text"
              id="titulo"
              defaultValue={productSelected.titulo}
              onChange={(e) => setTitulo(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="precio">Precio:</label>
            <input
              type="text"
              id="precio"
              defaultValue={productSelected.precio}
              onChange={(e) => setPrecio(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="imagenOriginal">Imagen Original:</label>
            <input
              type="text"
              id="imagenOriginal"
              defaultValue={productSelected.image}
              onChange={(e) => setImage(e.target.value)}
            />
          </div>
          <div style={{ display: "flex", gap: "4px", flexDirection: "column" }}>
            <label htmlFor="">Descripcion:</label>
            <textarea
              type="text"
              defaultValue={productSelected.description}
              onChange={(e) => setDescription(e.target.value)}
            ></textarea>
          </div>

          <div style={{ display: "flex", gap: "4px", flexDirection: "column" }}>
            <label htmlFor="">Contenido:</label>
            <textarea
              type="text"
              defaultValue={productSelected.content}
              onChange={(e) => setContent(e.target.value)}
            ></textarea>
          </div>

          <div style={{ display: "flex", gap: "4px", flexDirection: "column" }}>
            <label htmlFor="">Detalle:</label>
            <textarea
              type="text"
              defaultValue={productSelected.detail}
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
              Guardar cambios
            </button>
          </div>
        </div>
      </Modal.Body>
      <Modal.Footer></Modal.Footer>
    </Modal>
  );
}
