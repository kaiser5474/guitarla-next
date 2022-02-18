import { useRouter } from "next/router";

const EntradaBlog = () => {
  const router = useRouter();
  console.log(router.query);
  return (
    <div>
      <p>dadada</p>
    </div>
  );
};

export default EntradaBlog;
