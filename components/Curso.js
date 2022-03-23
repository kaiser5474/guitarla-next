import styles from "../styles/Curso.module.css";

const Curso = ({ curso }) => {
  const { titulo, contenido, imagen } = curso;
  const paraImagen = `${process.env.NEXT_PUBLIC_API_URL}${imagen.url}`;
  return (
    <section>
      <div className={`contenedor ${styles.grid}`}>
        <div className={styles.contenido}>
          <h2>{titulo}</h2>
          <p>{contenido}</p>
          <a href="#">Más información</a>
        </div>
      </div>
      <style jsx>{`
        section {
          background-image: linear-gradient(
              to right,
              rgb(0 0 0 / 0.65),
              rgb(0 0 0 / 0.7)
            ),
            url(${paraImagen});
          padding: 5rem 0;
          background-size: cover;
          background-position: 50%;
          margin-top: 5rem;
          background-size: cover;
        }
      `}</style>
    </section>
  );
};

export default Curso;
