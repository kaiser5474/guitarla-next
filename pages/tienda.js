import Link from "next/link";
import Layout from "../components/Layout";
import Guitarra from "../components/Guitarra";
import styles from "../styles/Tienda.module.css";

const tienda = ({ guitarras }) => {
  return (
    <>
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
    </>
  );
};

export async function getServerSideProps() {
  const url = `${process.env.API_URL}/guitarras`;
  const resultado = await fetch(url);
  const guitarras = await resultado.json();
  return {
    props: {
      guitarras,
    },
  };
}

export default tienda;
