import Curso from "../components/Curso";
import Layout from "../components/Layout";
import ListadoGuitarra from "../components/ListadoGuitarra";
import ListadoBlogs from "../components/ListadoBlogs";

export default function Home({ guitarras, curso, blogs }) {
  return (
    <div>
      <Layout pagina={"Inicio"} guitarra={guitarras[1]}>
        <ListadoGuitarra guitarras={guitarras} />
        <Curso curso={curso} />
        <ListadoBlogs entradas={blogs} />
      </Layout>
    </div>
  );
}

export async function getServerSideProps() {
  const urlGuitarras = `${process.env.API_URL}/guitarras?_sort=precio:desc`;
  // const urlGuitarras = `${process.env.API_URL}/guitarras`;
  const urlCursos = `${process.env.API_URL}/cursos`;
  const urlBlogs = `${process.env.API_URL}/blogs?_limit=3&_sort=created_at:desc`;

  const [resGuitarras, resCursos, resBlogs] = await Promise.all([
    fetch(urlGuitarras),
    fetch(urlCursos),
    fetch(urlBlogs),
  ]);

  const [guitarras, curso, blogs] = await Promise.all([
    resGuitarras.json(),
    resCursos.json(),
    resBlogs.json(),
  ]);

  if (guitarras.length > 0) {
    return {
      props: {
        guitarras,
        curso,
        blogs,
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
        curso,
        blogs,
      },
    };
  }
}
