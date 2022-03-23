import Link from "next/link";
import Image from "next/image";
import styles from "../styles/Header.module.css";
import { useRouter } from "next/router";

const Header = ({ guitarra }) => {
  const router = useRouter();
  return (
    <header className={styles.header}>
      <div className="contenedor">
        <div className={styles.barra}>
          <div>
            <Link href="/">
              <a>
                <Image
                  src="/img/logo.svg"
                  width={400}
                  height={100}
                  alt="Imagen Logo"
                />
              </a>
            </Link>
          </div>
          <nav className={styles.navegacion}>
            <Link href="/">Inicio</Link>
            <Link href="/nosotros">Nosotros</Link>
            <Link href="/blog">Blog</Link>
            <Link href="/tienda">Tienda</Link>
            <Link href="/carrito">
              <a>
                <Image
                  src="/img/carrito.png"
                  width={25}
                  height={20}
                  alt="Imagen Carrito"
                />
              </a>
            </Link>
          </nav>
        </div>
        {guitarra && (
          <div className={styles.modelo}>
            <h2>Modelo {guitarra.nombre}</h2>
            <p>{guitarra.descripcion}</p>
            <p className={styles.precio}>$ {guitarra.precio}</p>
            <Link href={`/tienda/${guitarra.url}`}>
              <a className={styles.enlace}>Ver Producto</a>
            </Link>
          </div>
        )}
      </div>

      {router.pathname === "/" && (
        <img
          className={styles.guitarra}
          src="/img/header_guitarra.png"
          alt="imagen header"
          width="400"
        />
      )}
    </header>
  );
};

export default Header;
