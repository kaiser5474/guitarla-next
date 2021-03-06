import Layout from "../components/Layout";
import styles from "../styles/Carrito.module.css";
import Image from "next/image";
import { useState, useEffect } from "react";

const Carrito = ({ carrito, actualizarCantidad, eliminarCarrito }) => {
  //   console.log(carrito);
  //   const carritoLS = JSON.parse(localStorage.getItem("carrito")) ?? [];
  const [total, setTotal] = useState(0);

  useEffect(() => {
    console.log(carrito);

    const totalCarrito = carrito.reduce(
      (total, producto) => total + producto.cantidad * producto.precio,
      0
    );
    //console.log(totalCarrito);
    setTotal(totalCarrito);
  }, [carrito]);

  return (
    <Layout pagina="Carrito de Compras">
      <h1 className="heading">Carrito</h1>
      <main className={`${styles.contenido} contenedor`}>
        <div className={styles.carrito}>
          {carrito.length === 0
            ? "Carrito vacio"
            : carrito.map((producto) => (
                <div key={producto.id} className={styles.producto}>
                  <div>
                    <Image
                      layout="responsive"
                      width={250}
                      height={500}
                      src={producto.imagen}
                      alt={producto.nombre}
                    />
                  </div>
                  <div>
                    <p className={styles.nombre}>{producto.nombre}</p>
                    <div className={styles.cantidad}>
                      <p>Cantidad:</p>
                      <select
                        className={styles.select}
                        value={producto.cantidad}
                        onChange={(e) =>
                          actualizarCantidad({
                            cantidad: e.target.value,
                            id: producto.id,
                          })
                        }
                      >
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                      </select>
                    </div>
                    <p className={styles.precio}>
                      $ <span>{producto.precio}</span>
                    </p>
                    <p className={styles.subtotal}>
                      Subtotal: ${" "}
                      <span>{producto.precio * producto.cantidad}</span>
                    </p>
                  </div>
                  <button
                    type="button"
                    className={styles.eliminar}
                    onClick={() => eliminarCarrito(producto.id)}
                  >
                    x
                  </button>
                </div>
              ))}
        </div>
        <div className={styles.resumen}>
          <h3>Resumen del pedido</h3>
          {total > 0 ? (
            <>
              <p>Total a pagar: $ {total}</p>
            </>
          ) : (
            <p>No hay productos en el carrito</p>
          )}
        </div>
      </main>
    </Layout>
  );
};

export default Carrito;
