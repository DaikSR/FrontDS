import React, { useEffect, useState } from "react";
import "./Carrito.css";
import { BASE_API } from "../../contants/api.constant";
import axios from "axios";
import { ModalFinalizarCompra } from "../../components/modal-finalizar-compra";

const Carrito = () => {
  // Estado del carrito
  const [productos, setProductos] = useState([]);

  // Función para agregar un producto al carrito
  const agregarAlCarrito = (producto) => {
    setProductos((prevProductos) => [...prevProductos, producto]);
  };

  // Simulación de productos disponibles
  const productosDisponibles = [
    { id: 1, nombre: "Taza Metálica", precio: "S/. 50" },
    { id: 2, nombre: "Bolsa Reutilizable", precio: "S/. 30" },
    { id: 3, nombre: "Cuaderno Artesanal", precio: "S/. 40" },
  ];
  const [products, setProducts] = useState([]);

  async function fetchProducts() {
    try {
      const response = await axios.get(`${BASE_API}/cart`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });

      setProducts(response.data);
    } catch (error) {}
  }

  useEffect(() => {
    fetchProducts();
  }, []);

  async function handleRemoveFromCart(producto) {
    try {
      await axios.delete(`${BASE_API}/cart/${producto.cart_id}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      window.location.reload();
    } catch (error) {}
  }

  const [openModalEnd, setOpenModalEnd] = useState(false);

  return (
    <div className="carrito-container">
      <h2>Carrito de Compras</h2>

      {/* Mostrar productos disponibles */}
      {/* <div className="productos-disponibles">
        <h3>Productos Disponibles</h3>
        <ul>
          {productosDisponibles.map((producto) => (
            <li key={producto.id} className="producto-disponible">
              <span>{producto.nombre} - {producto.precio}</span>
              <button
                className="agregar-boton"
                onClick={() => agregarAlCarrito(producto)}
              >
                Agregar al Carrito
              </button>
            </li>
          ))}
        </ul>
      </div> */}

      {/* Mostrar carrito de compras */}
      {products.length === 0 ? (
        <p className="carrito-vacio">Su carrito está vacío</p>
      ) : (
        <ul className="carrito-lista">
          {products.map((producto, index) => (
            <li key={index} className="carrito-item">
              <div>
                <span>{producto.product.titulo} </span>
                <span>({producto.quantity}) - </span>
                <span>S/. {producto.product.precio}</span>
              </div>
              <span>S/. {producto.quantity * producto.product.precio}</span>
              <span>
                <button onClick={() => handleRemoveFromCart(producto)}>
                  Eliminar
                </button>
              </span>
            </li>
          ))}
        </ul>
      )}

      {products.length !== 0 && (
        <div style={{ display: "flex", justifyContent: "end" }}>
          <button onClick={() => setOpenModalEnd(true)}>
            Finalizar compra
          </button>
        </div>
      )}

      <ModalFinalizarCompra
        open={openModalEnd}
        setOpen={setOpenModalEnd}
      ></ModalFinalizarCompra>
    </div>
  );
};

export default Carrito;
