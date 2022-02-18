import {formatearFecha} from '../helpers/index'

const Entrada = ({ entrada }) => {
  const { titulo, resumen, imagen, published_at, id } = entrada;
  const fecha = formatearFecha(published_at)
  return (
    <article>
      <div>
        <h1>{titulo}</h1>
        <p>{fecha}</p>
      </div>
    </article>
  );
};

export default Entrada;
