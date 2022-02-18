import Link from "next/link";
import Entrada from "../components/Entrada";
import Layout from "../components/Layout";
import styles from "../styles/Blog.module.css";

const blog = ({ entradas }) => {
  return (
    <>
      <Layout pagina={"Blog"}>
        <main className="contenedor">
          <h2 className="heading">Blog</h2>
          <div className={styles.blog}>
            {entradas.map((entrada) => (
              <Entrada key={entrada.id} entrada={entrada}/>
            ))}
          </div>
        </main>
      </Layout>
    </>
  );
};

export async function getServerSideProps() {
  const url = "http://localhost:1337/blogs";
  const resultado = await fetch(url);
  const entradas = await resultado.json();
  return {
    props: {
      entradas,
    },
  };
}

export default blog;
