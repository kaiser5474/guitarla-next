import Link from "next/link";
import Layout from "../components/Layout";
import Guitarra from "../components/Guitarra";
import styles from "../styles/Tienda.module.css";

const tienda = ({ guitarras, desdeHome }) => {
  return (
    <>
      {desdeHome !== "home" ? (
        <Layout pagina={"Tienda Virtual"}>
          <main className="contenedor">
            <h2 className="heading">Nuestra Colección</h2>
            <div className={styles.tienda}>
              {guitarras.map((guitarra) => (
                <Guitarra key={guitarra.id} guitarra={guitarra} />
              ))}
            </div>
          </main>
        </Layout>
      ) : (
        
          <div className={styles.tienda}>
            {guitarras.map((guitarra) => (
              <Guitarra key={guitarra.id} guitarra={guitarra} />
            ))}
          </div>
       
      )}
    </>
  );
};

export async function getServerSideProps() {
  //const url = `${process.env.API_URL}/guitarras`;
  const url = `${process.env.API_URL}/guitarras?_sort=precio:desc`;
  const resultado = await fetch(url);
  const guitarras = await resultado.json();
  if (guitarras.length > 0) {
    return {
      props: {
        guitarras,
      },
    };
  } else {
    return {
      props: {
        guitarras: {
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

export default tienda;
