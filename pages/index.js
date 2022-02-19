import Link from "next/link";
import Curso from "../components/Curso";
import Layout from "../components/Layout";
import Tienda from "../pages/tienda";

export default function Home({ guitarras, curso, blogs }) {
  console.log(curso);
  return (
    <div>
      <Layout pagina={"Inicio"}>
        <main className="contenedor">
          <h1 className="heading">Nuestra coleccion</h1>
          <Tienda guitarras={guitarras} desdeHome={"home"}></Tienda>
        </main>
        <Curso curso={curso} />
      </Layout>
    </div>
  );
}

export async function getServerSideProps() {
  const urlGuitarras = `${process.env.API_URL}/guitarras?_sort=precio:desc`;
  const urlCursos = `${process.env.API_URL}/cursos`;
  const urlCursos = `${process.env.API_URL}/blogs?_limit=3&_sort=created_at:desc`;

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
