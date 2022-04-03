import Head from "next/head";
import Banner from "./components/Banner";
import CardList from "./components/Card/";
import Category from "./components/Category";
import Logo from "./components/Logo";

export default function Home() {
  return (
    <>
      <Head>
        <title>TypeScript starter for Next.js</title>
        <meta
          name="description"
          content="TypeScript starter for Next.js that includes all you need to build amazing apps"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Logo />

      {/* <CardList /> */}

      <main className="sm:px-16 xl:px-32">
        <Banner />
        <Category />
        <CardList />
      </main>

      <footer />
    </>
  );
}
