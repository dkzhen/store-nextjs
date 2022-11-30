import { useRouter } from "next/router";
import useSWR from "swr";
import { Loading } from "../../../components/Loading";
import Head from "next/head";
import { Navbar } from "../../../components/Navbar";

const fecther = (...args) => fetch(...args).then((res) => res.json());
export default function ProductDetail() {
  const router = useRouter();

  const { productId } = router.query;

  const { data, error } = useSWR(
    `https://api.escuelajs.co/api/v1/products/${productId}`,
    fecther
  );
  if (error) return <div>Failed to load</div>;
  if (!data) return <Loading />;

  console.log("ini", data);
  return (
    <>
      <Head>
        <title>DKZhen - Store</title>
      </Head>
      <Navbar />
      <div className="container justify-center">
        <div className="w-screen justify-center items-center flex flex-col">
          <h1 className="text-3xl my-5 font-mono">Products</h1>
          <img
            className="rounded-lg px-8 md:px-3 lg:px-0"
            src={data.images}
          ></img>
          <div className="font-mono font-bold md:text-2xl text-lg mt-3">
            {data.title}
          </div>
          <div className="font-mono font-bold md:text-xl text-md">
            Price:${data.price}
          </div>
        </div>
      </div>
    </>
  );
}
