import { createContext, useState } from "react";
import Head from "next/head";
import Banner from "./components/Banner";
import CardList from "./components/Card/";
import Category from "./components/Category";
import Logo from "./components/Logo";
import { ProductContextType, RoomType } from "@/types";

export const ProductContext = createContext<Partial<ProductContextType>>({});

export default function Home() {
  const [category, setCategory] = useState<RoomType>("all");

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

      <main className="sm:px-16 xl:px-48 2xl:px-64">
        <ProductContext.Provider value={{ category, setCategory }}>
          <Banner />
          <Category />
          <CardList />
        </ProductContext.Provider>
      </main>

      <footer className="flex justify-center text-gray-700 py-4 font-bold">
        <a href="https://github.com/mayandev" className="hover:underline mx-3">
          GitHub
        </a>
        {" · "}
        <a
          href="https://www.figma.com/file/VbgWVwF0CuzZTtjSaR6iho/IKEA-Low-Price"
          className="hover:underline mx-3"
        >
          设计稿
        </a>
        {" · "}
        <a
          href="https://dun.mianbaoduo.com/@mayandev "
          className="hover:underline mx-3"
        >
          打赏开发者
        </a>
      </footer>
    </>
  );
}
