import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./ProductoDetalle.css";

const productos = [
  {
    id: 1,
    titulo: "TAZA METALICA NAVIDAD CON DULCES",
    imagenOriginal: "/Imagenes/1.jpg",
    precio: "S/. 70.00 PEN",
    descripcion: "Descripción detallada del producto...",
    contenido: [
      "Taza metálica con diseño exclusivo de navidad",
      "1 bolsita de galletitas chocochips artesanales",
      "1 bolsita de mini brownies artesanales",
      "1 globito decorativo",
      "Dedicatoria",
    ],
    detalle:
      "Este regalo llegará a manos de quien quieras sorprender en una bolsa de regalo de finos acabados y cerrada con sellos de seguridad. Será un regalo especial que nunca olvidará. El presente no incluirá información de precios y llegará de forma anónima. El sorprendido únicamente recibirá una tarjeta dedicatoria con el mensaje que desees colocar, en caso desees que tu nombre se incluya deberás colocarlo como firma en el mensaje para la tarjeta dedicatoria.",
    descripcionExtra:
      "Un regalo ideal para navidad. Una linda taza metálica con un diseño único de navidad para usarla en estas fiestas y endulzarlo con unas deliciosas galletas y brownies.",
  },
  {
    id: 2,
    titulo: "GIFT BOX CELEBREMOS NAVIDAD",
    imagenOriginal: "/Imagenes/2.jpg",
    imagenHover: "/Imagenes/2-hover.jpg",
    precio: "S/. 135.00 PEN",
    descripcion:
      "Un regalo ideal para esta navidad, con productos exclusivos para una celebración única.",
    contenido: [
      "Caja de Sorprende Lima personalizada con diseño y frase de navidad",
      "Suculenta natural",
      "Mini vela aromática decorada con lazo",
      "Frappuccino embotellado de Starbucks",
      "1 brownie artesanal decorado en fondant Santa Claus",
      "1 alfajor artesanal con diseño navidad",
      "Taza metálica con diseño de navidad",
      "Tarjeta de dedicatoria en sobre",
      "Tarjeta eres increíble",
    ],
    detalle:
      "El mejor regalo para navidad. El mejor regalo para el amigo secreto. Este regalo llegará a manos de quien quieras sorprender en finos acabados y cerrada con sellos de seguridad. Será un regalo especial que nunca olvidará. La perfección está en los detalles. El presente no incluirá información de precios y llegará de forma anónima. El sorprendido únicamente recibirá una tarjeta dedicatoria con el mensaje que desees colocar, en caso desees que tu nombre se incluya deberás colocarlo como firma en el mensaje para la tarjeta dedicatoria.",
  },
  {
    id: 3,
    titulo: "GIFT BOX SWEETIE NAVIDEÑO",
    imagenOriginal: "/Imagenes/3.jpg",
    imagenHover: "/Imagenes/3-hover.jpg",
    precio: "S/. 170.00 PEN",
    contenido: [
      "Caja decorativa con temática navideña",
      "Galletas decoradas de navidad",
      "Mini pastelito de chocolate navideño",
      "Bolsita de té con diseño navideño",
      "Mini vela de canela",
    ],
    detalle:
      "Un regalo con toques dulces y navideños que sorprenderá a tu ser querido. Llegará en una caja de finos acabados con un diseño especial para esta temporada navideña, con una dedicatoria personalizada.",
    descripcionExtra:
      "Perfecto para compartir con seres queridos, este regalo tiene una mezcla de dulzura y elegancia para esta navidad.",
  },

  {
    id: 4,
    titulo: "MINI BOX NAVIDEÑO",
    imagenOriginal: "/Imagenes/4.jpg",
    imagenHover: "/Imagenes/4-hover.jpg",
    precio: "S/. 140.00 PEN",
    contenido: [
      "Jaba de madera pino decorado con lazo",
      "Esfera navideña personalizable con nombre",
      "Taza metálica con diseño de navidad",
      "1 galleta modelo gengibre con chocolate",
      "Tableta Milky La Iberica",
      "Decoración navideña",
      "Tarjeta de dedicatoria en sobre",
      "Tarjeta eres increible",
    ],
    detalle:
      "Regalos para navidad. Sorprende en navidad con regalos navideños. Este regalo llegará a manos de quien quieras sorprender en finos acabados y cerrada con sellos de seguridad. Será un regalo especial que nunca olvidará. La perfección está en los detalles. El presente no incluirá información de precios y llegará de forma anónima. El sorprendido únicamente recibirá una tarjeta dedicatoria con el mensaje que desees colocar, en caso desees que tu nombre se incluya deberás colocarlo como firma en el mensaje para la tarjeta dedicatoria.",
    descripcionExtra:
      "Nuestro mini box será un lindo detalle para esta navidad o para regalarlo por amigo secreto. Tiene deliciosos detalles que recordará para siempre",
  },
  {
    id: 5,
    titulo: "CAJA DE TRUFAS NAVIDEÑAS",
    imagenOriginal: "/Imagenes/5.jpg",
    imagenHover: "/Imagenes/5-hover.jpg",
    precio: "S/. 59.00 PEN",
    descripcion:
      "Endulza a alguien especial con unas deliciosas y lindas trufas decoradas de navidad, perfectas para compartirlo con amigos y familia también.",
    contenido: [
      "12 trufas de chocolate decoradas de navidad",
      "Caja sorprende lima",
      "Dedicatoria",
      "Bolsa de regalo",
    ],
    detalle:
      "Este regalo de navidad llegará a manos de quien quieras sorprender en una bolsa de regalo de finos acabados y cerrada con sellos de seguridad. Será un regalo especial que nunca olvidará. La perfección está en los detalles. El presente no incluirá información de precios y llegará de forma anónima. El sorprendido únicamente recibirá una tarjeta dedicatoria con el mensaje que desees colocar, en caso desees que tu nombre se incluya deberás colocarlo como firma en el mensaje para la tarjeta dedicatoria.",
  },
  {
    id: 6,
    titulo: "GIFT BOX COCOA",
    imagenOriginal: "/Imagenes/6.jpg",
    imagenHover: "/Imagenes/6-hover.jpg",
    precio: "S/. 195.00 PEN",
    descripcion:
      "Un hermoso gift box con detalles únicos para esta navidad. Viene en una caja de acrílico especial para darle un toque especial al regalo, todo personalizado por navidad. Será el regalo sorpresa para esta navidad",
    contenido: [
      "Caja de madera y acrílico personalizado con diseño navidad",
      "1 galleta de gengible decorado con chocolate blanco",
      "1 mini jar de cocoa en polvo",
      "1 mini jar de galletitas artesanales",
      "Taza métalica navideña",
      "Bolsita de marshmellow",
      "Bolsita de lentejitas",
      "Lazo decorativo navideño",
      "Tarjeta de dedicatoria en sobre",
      "Tarjeta eres increible",
    ],
    detalle:
      "El mejor regalo de navidad. Detalles para navidad. Este regalo llegará a manos de quien quieras sorprender en finos acabados y cerrada con sellos de seguridad. Será un regalo especial que nunca olvidará. La perfección está en los detalles. El presente no incluirá información de precios y llegará de forma anónima. El sorprendido únicamente recibirá una tarjeta dedicatoria con el mensaje que desees colocar, en caso desees que tu nombre se incluya deberás colocarlo como firma en el mensaje para la tarjeta dedicatoria.",
  },
  {
    id: 7,
    titulo: "BOX NAVIDAD FLORAL",
    imagenOriginal: "/Imagenes/7.jpg",
    imagenHover: "/Imagenes/7-hover.jpg",
    precio: "S/. 95.00 PEN",
    descripcion:
      "Un regalo único para navidad, y las flores siempre serán un toque especial para una sorpresa",
    contenido: [
      "Caja de trupan personalizado con diseño de navidad",
      "Jardín de flores en tonos rojo y blanco: Rosas, claveles, lluvia, follaje verde",
      "Mini champagne Riccadonna 200 ml",
      "Lazo decorativo",
      "Tarjeta de dedicatoria en sobre",
      "Tarjeta eres increible",
    ],
    detalle:
      "Regalo perfecto para navidad. Regalos para navidad. Detalles para navidad. Este regalo llegará a manos de quien quieras sorprender en finos acabados y cerrada con sellos de seguridad. Será un regalo especial que nunca olvidará. La perfección está en los detalles. El presente no incluirá información de precios y llegará de forma anónima. El sorprendido únicamente recibirá una tarjeta dedicatoria con el mensaje que desees colocar, en caso desees que tu nombre se incluya deberás colocarlo como firma en el mensaje para la tarjeta dedicatoria.",
  },
  {
    id: 8,
    titulo: "CAJA CUPCAKES NAVIDAD",
    imagenOriginal: "/Imagenes/8.jpg",
    imagenHover: "/Imagenes/8-hover.jpg",
    precio: "S/. 80.00 PEN",
    descripcion:
      "Los mejores postres para compartir esta navidad. Nuestra caja de cupcakes son deliciosos y decorados con mucho detalle para navidad",
    contenido: [
      "Caja de cupcakes Sorprende Lima",
      "6 cupcakes artesanales en sabores variados: chocolate y red velvet. Decorados con tematica navidad",
      "Tarjeta de dedicatoria en sobre",
      "Tarjeta eres increible",
    ],
    detalle:
      "Los mejores postres y regalos para compartir en navidad. Este regalo llegará a manos de quien quieras sorprender con finos acabados y cerrada con sellos de seguridad. Será un regalo especial que nunca olvidará. La perfección está en los detalles. El presente no incluirá información de precios y llegará de forma anónima. El sorprendido únicamente recibirá una tarjeta dedicatoria con el mensaje que desees colocar, en caso desees que tu nombre se incluya deberás colocarlo como firma en el mensaje para la tarjeta dedicatoria.",
  },
  {
    id: 9,
    titulo: "MAXI JAR GALLETITAS NAVIDAD",
    imagenOriginal: "/Imagenes/9.jpg",
    imagenHover: "/Imagenes/9-hover.jpg",
    precio: "S/. 39.00 PEN",
    descripcion:
      "Regala unas deliciosas galletas navideñas ideales para sorprender a alguien en esta navidad.",
    contenido: [
      "Jar de galletitas con diseño de navidad",
      "Galletitas artesanales en formas navideñas",
      "Lazo decorativo",
      "Dedicatoria",
      "Bolsa de regalo",
    ],
    detalle:
      "Este regalo de navidad llegará a manos de quien quieras sorprender en una bolsa de regalo de finos acabados y cerrada con sellos de seguridad. Será un regalo especial que nunca olvidará. La perfección está en los detalles.  El presente no incluirá información de precios y llegará de forma anónima. El sorprendido únicamente recibirá una tarjeta dedicatoria con el mensaje que desees colocar, en caso desees que tu nombre se incluya deberás colocarlo como firma en el mensaje para la tarjeta dedicatoria.",
  },
  {
    id: 10,
    titulo: "CASITA DE JENGIBRE NAVIDAD",
    imagenOriginal: "/Imagenes/10.jpg",
    imagenHover: "/Imagenes/10-hover.jpg",
    precio: "S/. 85.00 PEN",
    descripcion:
      "El detalle más lindo para esta navidad. Regálale el kit perfecto para que prepare su propia casita de jengibre y la decore a su manera! Estamos seguros que le encantará. ",
    contenido: [
      "Caja decorativa con temática de navidad",
      "Piezas de galletas para armar la casa",
      "Dulces decorativos (glassé, gomitas, lentejitas, etc.)",
      "Globito decorativo",
      "Tarjeta dedicatoria en sobre",
      "Bolsa de regalo.",
    ],
    detalle:
      "Este regalo llegará a manos de quien quieras sorprender en una bolsa de regalo de finos acabados y cerrada con sellos de seguridad.  Cada caja utilizada en Sorprende Lima es producida exclusivamente en nuestro taller por artesanos peruanos. El presente no incluirá información de precios y llegará de forma anónima. El sorprendido únicamente recibirá una tarjeta dedicatoria con el mensaje que desees colocar, en caso desees que tu nombre se incluya deberás colocarlo como firma en el mensaje para la tarjeta dedicatoria.",
  },
  {
    id: 11,
    titulo: "BENTO CAKE SANTA",
    imagenOriginal: "/Imagenes/11.jpg",
    imagenHover: "/Imagenes/11-hover.jpg",
    precio: "S/. 65.00 PEN",
    descripcion:
      "Los mejores regalos y postres para compartir en navidad. Nuestra bento cake tiene un lindo diseño del personaje principal de la navidad: Santa Claus. Esta mini torta será perfecta para compartirla en navidad con los que más amas",
    contenido: [
      "Caja de bento Sorprende Lima",
      "Bento cake sabor chocolate decorado en buttercream con Santa Claus",
      "Tarjeta de dedicatoria en sobre",
      "Tarjeta eres increible",
    ],
    detalle:
      "Los mejores postres y regalos para navidad. Este regalo llegará a manos de quien quieras sorprender en finos acabados y cerrada con sellos de seguridad. Será un regalo especial que nunca olvidará. La perfección está en los detalles. El presente no incluirá información de precios y llegará de forma anónima. El sorprendido únicamente recibirá una tarjeta dedicatoria con el mensaje que desees colocar, en caso desees que tu nombre se incluya deberás colocarlo como firma en el mensaje para la tarjeta dedicatoria.",
  },
  {
    id: 12,
    titulo: "BOX DULCERO NAVIDAD",
    imagenOriginal: "/Imagenes/12.jpg",
    imagenHover: "/Imagenes/12-hover.jpg",
    precio: "S/. 99.00 PEN",
    descripcion:
      "Un dulce regalo para navidad. Nuestro box dulcero tiene nuestros clasicos y deliciosos postres en jar perfectos para compartir en navidad y sorprender a quien más quieres",
    contenido: [
      "Caja de trupan personalizada en la tapa con diseño navideño",
      "3 mini jars de postres artesanales segun stock: alfajores, brownies, galletitas. Todos personalizados con diseños de navidad",
      "Lazo decorativo de navidad",
      "Tarjeta de dedicatoria en sobre",
      "Tarjeta eres increible",
    ],
    detalle:
      "Los mejores regalos para navidad. Este regalo llegará a manos de quien quieras sorprender en finos acabados y cerrada con sellos de seguridad. Será un regalo especial que nunca olvidará. La perfección está en los detalles. El presente no incluirá información de precios y llegará de forma anónima. El sorprendido únicamente recibirá una tarjeta dedicatoria con el mensaje que desees colocar, en caso desees que tu nombre se incluya deberás colocarlo como firma en el mensaje para la tarjeta dedicatoria.",
  },
  {
    id: 13,
    titulo: "GIFT BOX ESTRELLA NAVIDAD",
    imagenOriginal: "/Imagenes/13.jpg",
    imagenHover: "/Imagenes/13-hover.jpg",
    precio: "S/. 260.00 PEN",
    descripcion:
      "Un detalle único y hermoso para navidad. Nuestro gift box viene en forma de estrella navidad con detalles perfectos para sorprender esta navidad",
    contenido: [
      "Caja de madera pino en forma de estrella navidad decorado con lazo navideño",
      "Champagne Riccadonna",
      "Caja de 3 bombones Ferrero Rocher",
      "Jar de galletitas navideñas personalizado con frase navidad",
      "Copa personalizada de navidad",
      "Decoración de navidad",
      "Tarjeta de dedicatoria en sobre",
      "Tarjeta eres increible",
    ],
    detalle:
      "El mejor regalo de navidad. Sorprende en navidad. Detalles perfectos para navidad. Este regalo llegará a manos de quien quieras sorprender en  finos acabados y cerrada con sellos de seguridad. Será un regalo especial que nunca olvidará. La perfección está en los detalles. El presente no incluirá información de precios y llegará de forma anónima. El sorprendido únicamente recibirá una tarjeta dedicatoria con el mensaje que desees colocar, en caso desees que tu nombre se incluya deberás colocarlo como firma en el mensaje para la tarjeta dedicatoria.",
  },
  {
    id: 14,
    titulo: "GIFT BOX ARBOL DE NAVIDAD",
    imagenOriginal: "/Imagenes/14.jpg",
    imagenHover: "/Imagenes/14-hover.jpg",
    precio: "S/. 210.00 PEN",
    descripcion:
      "Un hermoso regalo de navidad. Este gift box esta hecho en forma del clásico arbol de navidad, con todos los detalles perfectos para sorprender a quien más quieras esta navidad",
    contenido: [
      "Caja de madera pino en forma de arbol de navidad decorado con lazo navideño",
      "Mini Riccadonna 200 ml",
      "Copa de champagne personalizada con frase de navidad",
      "1 esfera de navidad personalizable con nombre",
      "1 mini jar de galletitas artesanales personalizado con diseño de navidad",
      "1 caja de bombones Ferrero Rocher",
      "Suculenta natural",
      "Tarjeta de dedicatoria en sobre",
      "Tarjeta eres increible",
    ],
    detalle:
      "El mejor regalo de navidad. El mejor regalo para amigo secreto. Sorprende en esta navidad. Este regalo llegará a manos de quien quieras sorprender en finos acabados y cerrada con sellos de seguridad. Será un regalo especial que nunca olvidará. La perfección está en los detalles. El presente no incluirá información de precios y llegará de forma anónima. El sorprendido únicamente recibirá una tarjeta dedicatoria con el mensaje que desees colocar, en caso desees que tu nombre se incluya deberás colocarlo como firma en el mensaje para la tarjeta dedicatoria.",
  },
  {
    id: 15,
    titulo: "MINI BOX ELFO NAVIDEÑO",
    imagenOriginal: "/Imagenes/15.jpg",
    imagenHover: "/Imagenes/15-hover.jpg",
    precio: "S/. 120.00 PEN",
    descripcion:
      "El regalo perfecto para amigo secreto o navidad. Nuestro mini box tiene como protagonista a un tierno elfo navideño, con detalles dulces perfectos para sorprender",
    contenido: [
      "Jaba de madera pino",
      "Vaso con diseño navideño (según stock)",
      "Muñeco navideño",
      "4 chocolates importados según stock",
      "1 bombon Ferrero Rocher",
      "Lazo navideño decorativo",
      "Tarjeta de dedicatoria en sobre",
      "Tarjeta eres increible",
    ],
    detalle:
      "Regalos perfectos para navidad. Sorprende en navidad o amigo secreto con regalos navideños. Este regalo llegará a manos de quien quieras sorprender en finos acabados y cerrada con sellos de seguridad. Será un regalo especial que nunca olvidará. La perfección está en los detalles. El presente no incluirá información de precios y llegará de forma anónima. El sorprendido únicamente recibirá una tarjeta dedicatoria con el mensaje que desees colocar, en caso desees que tu nombre se incluya deberás colocarlo como firma en el mensaje para la tarjeta dedicatoria.",
  },
  {
    id: 16,
    titulo: "BENTO CAKE MEME NAVIDAD",
    imagenOriginal: "/Imagenes/16.jpg",
    imagenHover: "/Imagenes/16-hover.jpg",
    precio: "S/. 65.00 PEN",
    descripcion:
      "Al estilo de Mariah Carrey y la canción más sonada en navidad, podrás decirle a esa persona cuan especial es para ti en estas fiestas.",
    contenido: [
      "Bento cake de chocolate decorada con meme de navidad",
      "Caja de bento cake Sorprende Lima",
      "Tarjeta de dedicatoria en sobre",
      "Tarjeta eres increible",
    ],
    detalle:
      "Este regalo de navidad llegará a manos de quien quieras sorprender en una bolsa de regalo de finos acabados y cerrada con sellos de seguridad. Será un regalo especial que nunca olvidará. La perfección está en los detalles. El presente no incluirá información de precios y llegará de forma anónima. El sorprendido únicamente recibirá una tarjeta dedicatoria con el mensaje que desees colocar, en caso desees que tu nombre se incluya deberás colocarlo como firma en el mensaje para la tarjeta dedicatoria.",
  },
];

import axios from "axios";
import { BASE_API } from "../../contants/api.constant";

const ProductoDetalle = () => {
  const { id } = useParams();
  const producto = productos.find((producto) => producto.id === parseInt(id));

  if (!producto) {
    return <div>Producto no encontrado</div>;
  }

  const [selectedTab, setSelectedTab] = useState("descripcion");
  const [dedicatoria, setDedicatoria] = useState("");

  const handleTabClick = (tab) => {
    setSelectedTab(tab);
  };

  const handleAddToCart = () => {
    alert("Producto agregado al carrito");
  };

  const [productIndividual, setProductIndividual] = useState({});

  async function fetchProduct() {
    try {
      const response = await axios.get(`${BASE_API}/products/${id}`);
      setProductIndividual(response.data);
    } catch (error) {}
  }

  useEffect(() => {
    fetchProduct();
  }, []);

  async function handleSelectForCart(producto) {
    try {
      await axios.get(`${BASE_API}/products/${producto.id}/cart`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
    } catch (error) {
      // alert("Error al agregar producto, reinicie la sesion")
    }
  }

  return (
    <div className="producto-detalle-container">
      <div className="producto-detalle">
        <img
          src={productIndividual?.image}
          alt={productIndividual?.titulo}
          className="producto-imagen-detalle"
        />
        <div className="producto-info">
          <h2 className="producto-titulo">{productIndividual?.titulo}</h2>
          <p className="producto-precio">{productIndividual?.precio}</p>

          <div className="tabs">
            <button
              onClick={() => handleTabClick("descripcion")}
              style={
                selectedTab === "descripcion" ? { backgroundColor: "red" } : {}
              }
            >
              Descripción
            </button>
            <button
              onClick={() => handleTabClick("contenido")}
              style={
                selectedTab === "contenido" ? { backgroundColor: "red" } : {}
              }
            >
              Contenido
            </button>
            <button
              onClick={() => handleTabClick("detalle")}
              style={
                selectedTab === "detalle" ? { backgroundColor: "red" } : {}
              }
            >
              Detalle
            </button>
          </div>

          <div className="tab-content">
            {selectedTab === "descripcion" && (
              <div>
                <p>{productIndividual?.description}</p>
                {/* <p>{productIndividual.descripcionExtra}</p> */}
              </div>
            )}
            {selectedTab === "contenido" && (
              // <ul className="contenido-lista">
              //   {producto.contenido.map((item, index) => (
              //     <li key={index} className="contenido-item">
              //       • {item}
              //     </li>
              //   ))}
              // </ul>
              <p>{productIndividual.content}</p>
            )}
            {selectedTab === "detalle" && <p>{productIndividual?.detail}</p>}

            <p>Agrega una dedicatoria (hasta 250 caracteres)</p>
            <textarea
              value={dedicatoria}
              onChange={(e) => setDedicatoria(e.target.value)}
              maxLength={250}
              placeholder="Escribe tu dedicatoria aquí..."
              className="dedicatoria-input"
            />
            <button
              className="add-to-cart-button"
              onClick={() => handleSelectForCart(productIndividual)}
            >
              AGREGA AL CARRITO Y COMPRA
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductoDetalle;
