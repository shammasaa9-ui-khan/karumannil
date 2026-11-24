import Navbar from "@/components/home/Navbar";
import News from "@/components/news";
import Footer from "@/components/home/footer";

export const metadata = {
  title: "News & Achievements | Karumannil Holding",
  description:
    "Discover the latest news, events, achievements, and press releases from Karumannil Holding.",
};

export default function NewsPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-[#121212]">
      <Navbar />
      <main className="flex-1">
        <News />
      </main>
      <Footer />
    </div>
  );
}
