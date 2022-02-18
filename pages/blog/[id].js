import Layout from "../../components/Layout";

const EntradaBlog = ({ entrada }) => {
  const { titulo, imagen, published_at, id } = entrada;
  return (
    <Layout>
      <main className="contenedor">
        <h1 className="heading">{entrada.titulo}</h1>
      </main>
    </Layout>
  );
};

export async function getServerSideProps({ query }) {
  const url = `${process.env.API_URL}/blogs/${query.id}`;
  const resultado = await fetch(url);
  const entrada = await resultado.json();
  return {
    props: {
      entrada,
    },
  };
}

export default EntradaBlog;
