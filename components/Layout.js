import Head from "next/head";

const Layout = ({ children, pagina }) => {
  return (
    <div>
      <Head>
        <title>Create GuitarLA - {pagina}</title>
        <meta name="description" content="Sitio web de ventas de guitarras" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {children}
    </div>
  );
};

export default Layout;
