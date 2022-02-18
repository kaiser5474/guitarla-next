import Link from "next/link";
import Layout from "../components/Layout";

const tienda = () => {
  return (
    <>
      <Layout pagina={"Tienda"}>
        <Link href="/">Tienda</Link>
        <div>Desde tienda</div>
      </Layout>
    </>
  );
};

export default tienda;
