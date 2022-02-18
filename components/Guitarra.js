import Link from "next/link";
import Image from "next/image";
import { formatearNumero } from "../helpers/index";

const Guitarra = ({ guitarra }) => {
  const { descripcion, imagen, nombre, precio, url } = guitarra;
  console.log(guitarra.imagen.url);
  return (
    <div>
      <Image
        layout="responsive"
        width={500}
        height={350}
        src={`${process.env.NEXT_PUBLIC_API_URL}${guitarra.imagen.url}`}
        alt={`Imagen Guitarra ${nombre}`}
      ></Image>
      <div>
        <h3>{nombre}</h3>
        <p>{descripcion}</p>
        <p>{formatearNumero(precio)}</p>
        <Link href={`/guitarras/${url}`}>
          Ver Producto
        </Link>
      </div>
    </div>
  );
};

export default Guitarra;
