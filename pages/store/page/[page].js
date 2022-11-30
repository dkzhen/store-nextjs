import useSWR from "swr";
import Head from "next/head";
import { Navbar } from "../../../components/Navbar";
import { Loading } from "../../../components/Loading";
import { Pagination } from "../../../components//Pagination";
import Link from "next/link";
import { useRouter } from "next/router";

const fecther = (...args) => fetch(...args).then((res) => res.json());

export default function Pages() {
  const router = useRouter();
  let api = "";
  const { page = [] } = router.query;
  console.log(page);
  if (page == 1) {
    api = 0;
  } else if (page == 2) {
    api = 37;
  } else if (page == 3) {
    api = 73;
  } else if (page == 4) {
    api = 109;
  } else if (page == 5) {
    api = 145;
  } else {
    api = 0;
  }
  const { data, error } = useSWR(
    `https://api.escuelajs.co/api/v1/products?offset=${api}&limit=36`,
    fecther
  );

  if (error) return <div>Failed to load</div>;
  if (!data) return <Loading />;

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
        <Pagination page={page} />
      </div>
    </>
  );
}
