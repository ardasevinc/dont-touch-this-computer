import Link from "next/link";
import Container from "../components/container";
import Layout from "../components/layout";
import Head from "next/head";
import TheThing from "../components/square";

export default function HomePage() {
  return (
    <Layout>
      <Head>
        <title>STOP</title>
      </Head>
      <div className="h-screen flex justify-center items-center">
        <TheThing>
          <p className="text-black">lol</p>
        </TheThing>
      </div>
    </Layout>
  );
}
