import Image from "next/image";
import Layout from "../../components/Layout";
import { formatearFecha } from "../../helpers/index";
import styles from "../../styles/Entrada.module.css";
import NoEncontrado from "../404";

const EntradaBlog = ({ entrada }) => {
  const { contenido, imagen, published_at, titulo } = entrada;
  const urlImg = `${process.env.NEXT_PUBLIC_API_URL}${imagen.url}`;
  const fecha = formatearFecha(published_at);

  return (
    <Layout pagina={titulo}>
      {contenido ? (
        <main className="contenedor">
          <h1 className="heading">{titulo}</h1>
          <article className={styles.entrada}>
            <div>
              <Image
                priority="true"
                layout="responsive"
                src={urlImg}
                height={800}
                width={600}
                alt={`imagen entrada ${titulo}`}
              />
            </div>
            <div className={styles.contenido}>
              <p className={styles.fecha}>{fecha}</p>
              <p className={styles.texto}>{contenido}</p>
            </div>
          </article>
        </main>
      ) : (
        <NoEncontrado />
      )}
    </Layout>
  );
};

export async function getServerSideProps({ query }) {
  const url = `${process.env.API_URL}/blogs?url=${query.id}`;
  const resultado = await fetch(url);
  const entrada = await resultado.json();
  if (entrada.length > 0) {
    return {
      props: {
        entrada: entrada[0],
      },
    };
  } else {
    return {
      props: {
        entrada: {
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

export default EntradaBlog;
