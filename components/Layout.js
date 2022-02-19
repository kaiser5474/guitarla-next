import Head from "next/head";
import Footer from "./Footer";
import Headers from "./Header";

const Layout = ({ children, pagina, guitarra }) => {
  return (
    <div>
      <Head>
        <title>Create GuitarLA - {pagina}</title>
        <meta name="description" content="Sitio web de ventas de guitarras" />
      </Head>
      <Headers guitarra = {guitarra}/>
      {children}
      <Footer />
    </div>
  );
};

Layout.defaultProps = {
  guitarra: null 
}

export default Layout;
