import Navbar from "@/components/home/Navbar";
import AboutMain from "@/components/aboutmain";
import Mission from "@/components/home/mission";
import Footer from "@/components/home/footer";

export const metadata = {
  title: "About Us | Karumannil Holding",
  description:
    "Karumannil Holding is a dynamic and diversified business group committed to shaping the future through strategic investments, visionary leadership, and a steadfast dedication to excellence.",
};

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#eff0eb] text-[#121212]">
      <Navbar />
      <main className="flex-1">
        <AboutMain />
        <Mission />
      </main>
      <Footer />
    </div>
  );
}
