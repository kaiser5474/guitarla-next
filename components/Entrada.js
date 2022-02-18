import Link from "next/link";
import Image from "next/image";
import { formatearFecha } from "../helpers/index";
import styles from "../styles/Entrada.module.css";

const Entrada = ({ entrada }) => {
  const { titulo, resumen, imagen, published_at, id } = entrada;
  const urlImg = `${process.env.NEXT_PUBLIC_API_URL}${imagen.url}`;
  console.log(imagen.formats.thumbnail.url);
  const fecha = formatearFecha(published_at);
  return (
    <article>
      <div className={styles.imagen}>
        <Image
          priority="true"
          src={urlImg}
          height={800}
          width={600}
          alt={`imagen blog ${titulo}`}
        />
      </div>
      <div>
        <h3 className={styles.contenido}>{titulo}</h3>
        <p className={styles.fecha}>{fecha}</p>
        <p className={styles.resumen}>{resumen}</p>
        <Link href={`/blog/${id}`}>
          <a className={styles.enlace}>Leer Entrada</a>
        </Link>
      </div>
    </article>
  );
};

export default Entrada;
