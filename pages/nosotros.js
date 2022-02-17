import Link from "next/link";
import Layout from "../components/Layout";

const Nosotros = () => {
  return (
    <>
      <Layout pagina={"Nosotros"}>
        <Link href="/">Inicio</Link>
        <div>Desde nosotros</div>
      </Layout>
    </>
  );
};

export default Nosotros;
