import Head from "next/head";
import Footer from "./Footer";
import Headers from "./Header";

const Layout = ({ children, pagina }) => {
  return (
    <div>
      <Head>
        <title>Create GuitarLA - {pagina}</title>
        <meta name="description" content="Sitio web de ventas de guitarras" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,700;0,900;1,400&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Headers />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
