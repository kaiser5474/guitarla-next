
import Entrada from "../components/Entrada";
import Layout from "../components/Layout";
import ListadoBlogs from "../components/ListadoBlogs";
import styles from "../styles/Blog.module.css";

const blog = ({ entradas }) => {
  return (
    <>
      <Layout pagina={"Blog"}>
        <ListadoBlogs entradas = {entradas}/>
      </Layout>
    </>
  );
};

export async function getServerSideProps() {
  const url = `${process.env.API_URL}/blogs`;
  const resultado = await fetch(url);
  const entradas = await resultado.json();
  return {
    props: {
      entradas,
    },
  };
}

export default blog;
