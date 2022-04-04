import { createContext, useCallback, useState } from "react";
import Head from "next/head";
import Banner from "./components/Banner";
import CardList from "./components/Card/";
import Category from "./components/Category";
import Logo from "./components/Logo";
import { ProductContextType, RoomType } from "@/types";
import { CategoryColorMap } from "@/const";

export const ProductContext = createContext<Partial<ProductContextType>>({
  category: "all",
});

const SiteTitle = "IKEA Low Price Products | 宜家低价好物";
const SiteDesc = "IKEA Low Price Products | 宜家低价好物；宜家折扣价";

export default function Home() {
  const [category, setCategory] = useState<RoomType>("all");
  const isDarkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;

  return (
    <>
      <Head>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/favicon/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon/favicon-16x16.png"
        />
        <link rel="icon" href="/favicon/favicon.ico" />
        <link rel="manifest" href="/favicon/site.webmanifest" />
        <link
          rel="mask-icon"
          href="/favicon/safari-pinned-tab.svg"
          color="#5bbad5"
        />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content={isDarkMode ? '#35363a' : CategoryColorMap[category]} />
        <title>{SiteTitle}</title>
        <meta name="description" content={SiteDesc} />
        <meta content={SiteDesc} name="description" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content={SiteTitle} />
        <meta property="og:title" content={SiteTitle} />
        <meta property="og:description" content={SiteDesc} />
        <meta property="og:url" content="https://ikea-lp.netlify.app/" />
        <meta property="og:image" content="https://i.imgur.com/43NFIi5.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content="https://i.imgur.com/43NFIi5.png" />
        <meta name="twitter:site" content="@phillzou" />
        <meta
          name="twitter:title"
          content="IKEA Low Price Products | 宜家低价好物"
        />
        <meta name="twitter:description" content={SiteDesc} />
      </Head>

      <Logo />

      <main className="sm:px-16 xl:px-48 2xl:px-64">
        <ProductContext.Provider value={{ category, setCategory }}>
          <Banner />
          <Category />
          <CardList />
        </ProductContext.Provider>
      </main>

      <footer className="flex justify-center text-gray-700 py-4 font-bold dark:text-white">
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
