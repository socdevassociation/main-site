import Head from "next/head";
import Footer from "./Footer";
import Header from "./Header";

export default function Layout({ children }) {
  return (
    <div className="min-h-screen flex flex-col overflow-hidden max-w-6xl m-auto">
      <Head>
        <title>Socialist Developers Association</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Header></Header>
      <div className="flex-1 flex flex-col ">
        <main className="flex-1 overflow-auto">{children}</main>
        <Footer></Footer>
      </div>
    </div>
  );
}
