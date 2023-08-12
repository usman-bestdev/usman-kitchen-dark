import BestSpecialties from "@/components/bestSpecialties";
import Events from "@/components/events";
import Featured from "@/components/featured";
import Footer from "@/components/footer";
import HeaderCarousel from "@/components/headerCarousel";
import AppBar from "@/components/appBar";
import OurChef from "@/components/ourChef";
import OurOffers from "@/components/ourOffers";
import SpecialDish from "@/components/specialDish";
import OurStrength from "@/components/strength";
import Head from "next/head";
import OrderForm from "@/components/orderForm";

export default function Home() {
  return (
    <>
      <Head>
        <title>Usman Kitchen</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <AppBar />
      <HeaderCarousel />
      <OurOffers />
      <SpecialDish />
      <OrderForm />
      <BestSpecialties />
      <OurStrength />
      <Featured />
      <OurChef />
      <Events />
      <Footer />
    </>
  );
}
