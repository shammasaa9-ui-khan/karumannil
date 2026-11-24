import Navbar from "@/components/home/Navbar";
import Hero from "@/components/home/Hero";
import About from "@/components/home/About";
import ServicesSection from "@/components/home/ServicesSection";
import Details from "@/components/home/details";
import Testimonial from "@/components/home/testimonual";
import Blog from "@/components/home/blog";
import Footer from "@/components/home/footer";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-[#eff0eb] text-[#121212]">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <About />
        <ServicesSection />
        <Details />
        <Testimonial />
        <Blog />
      </main>
      <Footer />
    </div>
  );
}
