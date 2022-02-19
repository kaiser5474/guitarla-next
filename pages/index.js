import Link from "next/link";
import Curso from "../components/Curso";
import Layout from "../components/Layout";
import Tienda from "../pages/tienda";

export default function Home({ guitarras, curso }) {
  console.log(curso);
  return (
    <div>
      <Layout pagina={"Inicio"}>
        <main className="contenedor">
          <h1 className="heading">Nuestra coleccion</h1>
          <Tienda guitarras={guitarras} desdeHome={"home"}></Tienda>
        </main>
      </Layout>
      <Curso
        curso = {curso}
      />
    </div>
  );
}

export async function getServerSideProps() {
  const urlGuitarras = `${process.env.API_URL}/guitarras?_sort=precio:desc`;
  const urlCursos = `${process.env.API_URL}/cursos`;

  const [resGuitarras, resCursos] = await Promise.all([
    fetch(urlGuitarras),
    fetch(urlCursos),
  ]);

  const [guitarras, curso] = await Promise.all([
    resGuitarras.json(),
    resCursos.json(),
  ]);

  if (guitarras.length > 0) {
    return {
      props: {
        guitarras,
        curso,
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
      },
    };
  }
}
