import Head from "next/head";
import Banner from "../components/Banner";
import Header from "../components/Header";
import ProductsFeed from "../components/ProductsFeed";

export default function Home({ products }) {
  return (
    <div className="bg-gray-100">
      <Head>
        <title>Amazon 2.0</title>
      </Head>
      <Header />
      <main className="max-w-screen-xl mx-auto">
        {/* Banner */}
        <Banner />
        {/* Products Feed */}
        <ProductsFeed products={products} />
      </main>
    </div>
  );
}

export async function getServerSideProps(context) {
  const response = await fetch("https://fakestoreapi.com/products");
  const products = await response.json();
  return { props: { products } };
}
