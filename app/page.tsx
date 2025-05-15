import Head from "next/head";
import HeroSection from "../Components/HeroSection";
// import { StickyScrollRevealDemo } from "@/Components/sticky-scroll";
import BeautySection from "@/Components/beauty";
import OurServices from "@/Components/Services";
import BeautyServices from "@/Components/OurServices";
import WhyChooseUs from "@/Components/chooseus";
// import { Contact } from "lucide-react";
import AppointmentSection from "@/Components/Contact";
import { ColumnsBlock } from "@/Components/Columnsblock";
import Footer from "@/Components/footer";

export default function Home() {
  return (
    <>
      <Head>
        <title>Beauty Artists</title>
      </Head>
      <main>
<div className="scroll-smooth">
      <section id="home"><HeroSection /></section>
<section id="services"><BeautySection /></section>
<section id="why-us"><OurServices /></section>
<section id="about"> <WhyChooseUs /></section>
<section id="working"><BeautyServices /></section>
<section id="gallery"><ColumnsBlock /></section>
<section id="contact"><AppointmentSection /></section>
{/* <section id="contact">...</section> */}
<Footer />

</div>

        
        {/* <StickyScrollRevealDemo/> */}
        
        
       
        
        
        
        
      </main>
    </>
  );
}
