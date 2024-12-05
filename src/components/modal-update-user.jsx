import Modal from "react-bootstrap/Modal";
import axios from "axios";
import { BASE_API } from "../contants/api.constant";
import { useEffect, useState } from "react";
import { UseAuthMe } from "../hooks/auth-me";

export function ModalUpdateUser({ open, setOpen }) {
  const { userData } = UseAuthMe();

  const [nombre_completo, setNombre_completo] = useState("");
  const [correo, setCorreo] = useState("");
  const [contrasena, setContrasena] = useState("");

  async function updateUser() {
    try {
      let formatedData;

      if (contrasena === "") {
        formatedData = {
          nombre_completo: nombre_completo,
          email: correo,
        };
      } else {
        formatedData = {
          nombre_completo: nombre_completo,
          email: correo,
          password: contrasena,
        };
      }

      console.log(formatedData);

      const response = await axios.post(
        `${BASE_API}/auth/update`,
        formatedData,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      setOpen(false);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    setNombre_completo(userData?.nombre_completo);
    setCorreo(userData?.correo);
  }, []);

  if (userData) {
    return (
      <Modal show={open} onHide={() => setOpen(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Modificar datos</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div>
            <div>
              <label>Nombre completo</label>
              <input
                type="text"
                value={nombre_completo}
                onChange={(e) => setNombre_completo(e.target.value)}
              />
            </div>
            <div>
              <label>Email</label>
              <input
                type="text"
                value={correo}
                onChange={(e) => setCorreo(e.target.value)}
              />
            </div>
            <div>
              <label>Contrasena</label>
              <input
                type="password"
                onChange={(e) => setContrasena(e.target.value)}
              />
            </div>
            <br />
            <div>
              <button onClick={updateUser}>Modificar</button>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer></Modal.Footer>
      </Modal>
    );
  }
}
