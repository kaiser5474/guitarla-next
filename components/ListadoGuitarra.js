import Guitarra from "./Guitarra";
import styles from "../styles/Tienda.module.css";

const ListadoGuitarra = ({ guitarras }) => {
  return (
    <main className="contenedor">
      <h1 className="heading">Nuestra Colección</h1>
      <div className={styles.tienda}>
        {guitarras.map((guitarra) => (
          <Guitarra key={guitarra.id} guitarra={guitarra} />
        ))}
      </div>
    </main>
  );
};

export default ListadoGuitarra;
