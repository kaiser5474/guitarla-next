import Image from "next/image";
import Layout from "../../components/Layout";
import { formatearNumero, formatearFecha } from "../../helpers/index";
import styles from "../../styles/Guitarra.module.css";
import NoEncontrado from "../404";
import { useState } from "react";

const GuitarraTienda = ({ guitarra, agregarCarrito }) => {
  const [cantidad, setCantidad] = useState(1);

  const { descripcion, imagen, published_at, nombre, precio, id } = guitarra;
  //console.log(id);
  const urlImg = `${process.env.NEXT_PUBLIC_API_URL}${imagen.url}`;
  const fecha = formatearFecha(published_at);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (cantidad < 1) {
      alert("cantidad no valida");
      return;
    }

    //agregarlo al Carrito
    const guitarraSeleccionada = {
      id,
      imagen: "https://quiet-ridge-75046.herokuapp.com" + imagen.url,
      nombre,
      precio,
      cantidad,
    };
    agregarCarrito(guitarraSeleccionada);
  };

  return (
    <Layout pagina={`Guitarra ${nombre}`}>
      {nombre ? (
        <div className={styles.guitarra}>
          <Image
            layout="responsive"
            width={180}
            height={350}
            src={urlImg}
            alt={`Imagen Guitarra ${nombre}`}
          ></Image>
          <div className={styles.contenido}>
            <h3>{nombre}</h3>
            <p className={styles.descripcion}>{descripcion}</p>
            <p className={styles.precio}>{formatearNumero(precio)}</p>
            <form className={styles.formulario} onSubmit={handleSubmit}>
              <label>Cantidad:</label>
              <select
                value={cantidad}
                onChange={(e) => setCantidad(parseInt(e.target.value))}
              >
                <option value="0">- Seleccione -</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
              </select>
              <input type="submit" value="Agregar al carrito"></input>
            </form>
          </div>
        </div>
      ) : (
        <NoEncontrado />
      )}
    </Layout>
  );
};

export async function getServerSideProps({ query }) {
  const url = `${process.env.API_URL}/guitarras?url=${query.id}`;
  const resultado = await fetch(url);
  const guitarra = await resultado.json();
  if (guitarra.length > 0) {
    return {
      props: {
        guitarra: guitarra[0],
      },
    };
  } else {
    return {
      props: {
        guitarra: {
          contenido: "",
          imagen: {
            url: "",
          },
          published_at: "",
          titulo: "",
        },
      },
    };
  }
}

export default GuitarraTienda;
