import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import { useValidateSession } from "../../hooks/validate-session";
import { UseAuthMe } from "../../hooks/auth-me";
import { ModalOrdenes } from "../modal-ordenes";
import { ModalUpdateUser } from "../modal-update-user";

const Header = () => {
  const { userData } = UseAuthMe();

  function handleLogout() {
    localStorage.removeItem("token");
    window.location.reload();
  }

  const [openModalOrdenes, setOpenModalOrdenes] = useState(false);
  const [openModalUpdateUser, setOpenModalUpdateUser] = useState(false);

  return (
    <header className="navbar">
      <div className="navbar-content">
        {/* Título con íconos 🌸 y texto */}
        <h1 className="navbar-title">
          <span>🌸</span>
          <Link to="/">Sorprende Lima</Link>
          <span>🌸</span>
        </h1>
        {/* Subtítulos */}
        <ul className="content-items">
          <li>
            <Link to="/productos" className="item-link">
              🌼 Productos
            </Link>
          </li>
          {!useValidateSession() ? (
            <li>
              <Link to="/login" className="item-link">
                👤 Iniciar Sesión
              </Link>
            </li>
          ) : (
            <li className="item-link">
              <span>{userData?.nombre_completo}</span> <span>|</span>{" "}
              <span
                role="button"
                onClick={handleLogout}
                style={{ cursor: "pointer" }}
              >
                Salir
              </span>
            </li>
          )}

          <li>
            <Link to="/carrito" className="carrito-link item-link">
              🛒 Carrito
            </Link>
          </li>

          <li>
            <span
              role="button"
              className="carrito-link item-link"
              onClick={() => setOpenModalOrdenes(true)}
            >
              🛒 Ordenes de compra
            </span>
          </li>

          <li>
            <span
              role="button"
              className="carrito-link item-link"
              onClick={() => setOpenModalUpdateUser(true)}
            >
              Configuracion
            </span>
          </li>
        </ul>
        <div className="search-container">
          <input type="text" placeholder="Buscar productos..." />
          <span className="search-icon">🔍</span>
        </div>
      </div>

      <ModalOrdenes open={openModalOrdenes} setOpen={setOpenModalOrdenes} />
      <ModalUpdateUser
        open={openModalUpdateUser}
        setOpen={setOpenModalUpdateUser}
      />
    </header>
  );
};

export default Header;
