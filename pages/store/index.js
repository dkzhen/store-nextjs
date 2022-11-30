import { Navbar } from "../../components/Navbar";
import { Pagination } from "../../components/Pagination";
import { Loading } from "../../components/Loading";
import Head from "next/head";
import useSWR from "swr";
import Link from "next/link";

const fecther = (...args) => fetch(...args).then((res) => res.json());

export default function Store() {
  const { data, error } = useSWR(
    "https://api.escuelajs.co/api/v1/products?offset=0&limit=36",
    fecther
  );

  if (!data)
    return (
      <div>
        <Loading />
      </div>
    );
  if (error) return <div>Failed to load</div>;

  return (
    <>
      <Head>
        <title>DKZhen - Store</title>
      </Head>
      <Navbar />

      <div className="container justify-center">
        <h1 className="flex justify-center items-center font-bold text-3xl my-5 mx auto font-mono">
          Products
        </h1>

        <div className="w-screen grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 md:px-32 lg:px-48 px-5 justify-center items-center gap-5 my-5 pb-3">
          {data.map((item, index) => (
            <Link href={`/store/product/${item.id}`} key={index}>
              <img
                className="rounded-tr-lg rounded-tl-lg border-green-300 border-2"
                src={item.images}
              ></img>
              <div className="bg-green-300 flex justify-center flex-col items-center font-mono rounded-br-lg rounded-bl-lg">
                <p className="font-normal">{item.title}</p>
                <p className="font-semibold">${item.price}</p>
              </div>
            </Link>
          ))}
        </div>
        <Pagination />
      </div>
    </>
  );
}
