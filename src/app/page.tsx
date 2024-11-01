import About from "@/components/Home/About";
import Hero from "@/components/Home/Hero";
import Products from "@/components/Home/Products";
import Sectors from "@/components/Home/Sectors";
import Services from "@/components/Home/Services";
import Standards from "@/components/Home/Standards";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Standards />
      <Sectors />
      <Services />
      <Products />
    </>
  );
}
