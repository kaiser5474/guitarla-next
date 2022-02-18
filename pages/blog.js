import Link from "next/link";
import Layout from "../components/Layout";

const blog = () => {
  return (
    <>
      <Layout pagina={"Blog"}>
        <Link href="/">Blog</Link>
        <div>Desde blog</div>
      </Layout>
    </>
  );
};

export default blog;
