import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Roles from "@/components/Roles";
import Differentiators from "@/components/Differentiators";
import Testimonials from "@/components/Testimonials";
import Pricing from "@/components/Pricing";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      
      <main style={{ marginTop: "var(--header-height)" }}>
        <Hero />
        <Features />
        <Roles />
        <Differentiators />
        <Testimonials />
        <Pricing />
        <FAQ />
      </main>

      <Footer />
    </>
  );
}
