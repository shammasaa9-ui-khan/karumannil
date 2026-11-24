import Navbar from "@/components/home/Navbar";
import Portfolio from "@/components/home/portfolio";
import Footer from "@/components/home/footer";

export const metadata = {
  title: "Portfolio | Karumannil Holding",
  description:
    "Explore our signature real estate projects, premium apartments, luxury villas, and commercial ventures.",
};

export default function PortfolioPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#faf8f5] text-[#121212]">
      <Navbar />
      <main className="flex-1">
        <Portfolio />
      </main>
      <Footer />
    </div>
  );
}
