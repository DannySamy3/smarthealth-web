import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Roles from "@/components/Roles";
import Differentiators from "@/components/Differentiators";
import Team from "@/components/Team";
import Testimonials from "@/components/Testimonials";
import Pricing from "@/components/Pricing";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import ScrollObserver from "@/components/ScrollObserver";

export default function Home() {
  return (
    <>
      <ScrollObserver />
      <Header />
      
      <main style={{ marginTop: "var(--header-height)" }}>
        <Hero />
        <Features />
        <Roles />
        <Differentiators />
        <Team />
        <Testimonials />
        <Pricing />
        <FAQ />
      </main>

      <Footer />
    </>
  );
}
