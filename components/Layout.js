import Head from "next/head";
import Footer from "./Footer";
import Headers from "./Header";

const Layout = ({ children, pagina }) => {
  return (
    <div>
      <Head>
        <title>Create GuitarLA - {pagina}</title>
        <meta name="description" content="Sitio web de ventas de guitarras" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Headers />
      {children}
      <Footer/>
    </div>
  );
};

export default Layout;
