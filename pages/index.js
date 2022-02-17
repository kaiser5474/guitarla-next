import Image from "next/image";
import Link from "next/link";
import Layout from "../components/Layout";

export default function Home() {
  return (
    <div>
      <Layout pagina={"Inicio"}>
      <h1 className="heading">Aprendiendo Next</h1>
      <Link href="/nosotros">Nosotros</Link>
      </Layout>
      
      
    </div>
  );
}
