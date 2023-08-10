import Featured from "@/components/featured";
import Footer from "@/components/footer";
import OurOffers from "@/components/ourOffers";
import OurStrength from "@/components/strength";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Usman Kitchen</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <OurOffers />
      <OurStrength />
      <Featured />
      <Footer />
    </>
  );
}
