import Link from "next/link";
import Image from "next/image";
import { formatearNumero } from "../helpers/index";
import styles from "../styles/Guitarra.module.css";

const Guitarra = ({ guitarra }) => {
  const { descripcion, imagen, nombre, precio, url } = guitarra;
  console.log(guitarra.imagen.url);
  return (
    <div className={styles.guitarra}>
      <Image
        layout="responsive"
        width={180}
        height={350}
        src={`${process.env.NEXT_PUBLIC_API_URL}${imagen.url}`}
        alt={`Imagen Guitarra ${nombre}`}
      ></Image>
      <div className={styles.contenido}>
        <h3>{nombre}</h3>
        <p className={styles.descripcion}>{descripcion}</p>
        <p className={styles.precio}>{formatearNumero(precio)}</p>
        <Link href={`/tienda/${url}`}>
          <a className={styles.enlace}>Ver Producto</a>
        </Link>
      </div>
    </div>
  );
};

export default Guitarra;
