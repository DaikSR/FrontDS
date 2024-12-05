import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Productos.css";
import { BASE_API } from "../../contants/api.constant";
import axios from "axios";
import { useValidateSession } from "../../hooks/validate-session";
import { ButtonEdit } from "../../components/button-edit";
import { UseAuthMe } from "../../hooks/auth-me";
import { ModalCreateProduct } from "../../components/modal-create-product";

const productos = [
  {
    id: 1,
    titulo: "TAZA METALICA NAVIDAD CON DULCES",
    imagenOriginal: "/Imagenes/1.jpg",
    precio: "S/. 70.00 PEN",
  },
  {
    id: 2,
    titulo: "GIFT BOX CELEBREMOS NAVIDAD",
    imagenOriginal: "/Imagenes/2.jpg",
    imagenHover: "/Imagenes/2-hover.jpg",
    precio: "S/. 135.00 PEN",
  },
  {
    id: 3,
    titulo: "GIFT BOX SWEETIE NAVIDEÑO",
    imagenOriginal: "/Imagenes/3.jpg",
    imagenHover: "/Imagenes/3-hover.jpg",
    precio: "S/. 170.00 PEN",
  },
  {
    id: 4,
    titulo: "MINI BOX NAVIDEÑO",
    imagenOriginal: "/Imagenes/4.jpg",
    imagenHover: "/Imagenes/4-hover.jpg",
    precio: "S/. 140.00 PEN",
  },
  {
    id: 5,
    titulo: "CAJA DE TRUFAS NAVIDEñAS",
    imagenOriginal: "/Imagenes/5.jpg",
    imagenHover: "/Imagenes/5-hover.jpg",
    precio: "S/. 59.00 PEN",
  },
  {
    id: 6,
    titulo: "GIFT BOX COCOA",
    imagenOriginal: "/Imagenes/6.jpg",
    imagenHover: "/Imagenes/6-hover.jpg",
    precio: "S/. 195.00 PEN",
  },
  {
    id: 7,
    titulo: "BOX NAVIDAD FLORAL",
    imagenOriginal: "/Imagenes/7.jpg",
    imagenHover: "/Imagenes/7-hover.jpg",
    precio: "S/. 95.00 PEN",
  },
  {
    id: 8,
    titulo: "CAJA CUPCAKES NAVIDAD",
    imagenOriginal: "/Imagenes/8.jpg",
    imagenHover: "/Imagenes/8-hover.jpg",
    precio: "S/. 80.00 PEN",
  },
  {
    id: 9,
    titulo: "MAXI JAR GALLETITAS NAVIDAD",
    imagenOriginal: "/Imagenes/9.jpg",
    imagenHover: "/Imagenes/9-hover.jpg",
    precio: "S/. 39.00 PEN",
  },
  {
    id: 10,
    titulo: "CASITA DE JENGIBRE NAVIDAD",
    imagenOriginal: "/Imagenes/10.jpg",
    precio: "S/. 85.00 PEN",
  },
  {
    id: 11,
    titulo: "BENTO CAKE SANTA",
    imagenOriginal: "/Imagenes/11.jpg",
    imagenHover: "/Imagenes/11-hover.jpg",
    precio: "S/. 65.00 PEN",
  },
  {
    id: 12,
    titulo: "BOX DULCERO NAVIDAD",
    imagenOriginal: "/Imagenes/12.jpg",
    imagenHover: "/Imagenes/12-hover.jpg",
    precio: "S/. 99.00 PEN",
  },
  {
    id: 13,
    titulo: "GIFT BOX ESTRELLA NAVIDAD",
    imagenOriginal: "/Imagenes/13.jpg",
    imagenHover: "/Imagenes/13-hover.jpg",
    precio: "S/. 260.00 PEN",
  },
  {
    id: 14,
    titulo: "GIFT BOX ARBOL DE NAVIDAD",
    imagenOriginal: "/Imagenes/14.jpg",
    imagenHover: "/Imagenes/14-hover.jpg",
    precio: "S/. 210.00 PEN",
  },
  {
    id: 15,
    titulo: "MINI BOX ELFO NAVIDEÑO",
    imagenOriginal: "/Imagenes/15.jpg",
    imagenHover: "/Imagenes/15-hover.jpg",
    precio: "S/. 120.00 PEN",
  },
  {
    id: 16,
    titulo: "BENTO CAKE MEME NAVIDAD",
    imagenOriginal: "/Imagenes/16.jpg",
    imagenHover: "/Imagenes/16-hover.jpg",
    precio: "S/. 65.00 PEN",
  },
];

const Productos = () => {
  const [imagenes, setImagenes] = useState({});

  const handleMouseEnter = (id) => {
    setImagenes((prevState) => ({
      ...prevState,
      [id]: productos.find((producto) => producto.id === id).imagenHover,
    }));
  };

  const handleMouseLeave = (id) => {
    setImagenes((prevState) => ({
      ...prevState,
      [id]: productos.find((producto) => producto.id === id).imagenOriginal,
    }));
  };

  const [productos, setProductos] = useState([]);

  async function getProducts() {
    try {
      const response = await axios.get(`${BASE_API}/products`);

      setProductos(response.data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getProducts();
  }, []);

  async function handleSelectForCart(producto) {
    try {
      await axios.get(`${BASE_API}/products/${producto.id}/cart`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
    } catch (error) {
      // alert("Error al agregar producto, reinicie la sesion");
    }
  }

  const { userData } = UseAuthMe();

  const [openModalCreate, setOpenModalCreate] = useState(false);

  return (
    <div className="productos-container">
      <h2 className="productos-titulo">Productos</h2>
      <div className="productos-grid">
        {productos.map((producto) => (
          <div key={producto.id} className="producto-card">
            <Link to={`/producto/${producto.id}`}>
              <img
                src={producto.image}
                alt={producto.titulo}
                className="producto-imagen"
                onMouseEnter={() => handleMouseEnter(producto.id)}
                onMouseLeave={() => handleMouseLeave(producto.id)}
              />
            </Link>
            <h3 className="producto-titulo">{producto.titulo}</h3>
            <p className="producto-precio">{producto.precio}</p>

            {useValidateSession() && (
              <button
                type="button"
                onClick={() => handleSelectForCart(producto)}
                style={{
                  cursor: "pointer",
                  backgroundColor: "red",
                  color: "white",
                  borderRadius: "8px",
                  border: "none",
                  paddingBlock: "4px",
                }}
              >
                Agregar al carrito
              </button>
            )}
            <ButtonEdit productSelected={producto}></ButtonEdit>
          </div>
        ))}
        {userData?.role === "admin" && (
          <div>
            <button className="" onClick={() => setOpenModalCreate(true)}>
              Agregar producto
            </button>
          </div>
        )}
      </div>

      <ModalCreateProduct open={openModalCreate} setOpen={setOpenModalCreate} />
    </div>
  );
};

export default Productos;
