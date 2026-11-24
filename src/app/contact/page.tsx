import Navbar from "@/components/home/Navbar";
import Contact from "@/components/contact/contact";
import Footer from "@/components/home/footer";

export const metadata = {
  title: "Contact Us | Karumannil Holding",
  description:
    "Have a question, project, or collaboration in mind? Get in touch with Karumannil Holding.",
};

export default function ContactPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-[#121212]">
      <Navbar />
      <main className="flex-1 flex flex-col justify-center">
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
