import Link from "next/link";
import Layout from "../components/Layout";

const tienda = () => {
  return (
    <>
      <Layout pagina={"Tienda Virtual"}>
        <main className="contenedor">
          <h2 className="heading">Nuestra Colección</h2>
          {/* <div className={styles.blog}>
            {entradas.map((entrada) => (
              <Entrada key={entrada.id} entrada={entrada}/>
            ))}
          </div> */}
        </main>
      </Layout>
    </>
  );
};

export default tienda;
