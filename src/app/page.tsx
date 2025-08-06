import Image from "next/image";
 
import Navbar from "@/components/NavBar";
import HeroSection from "@/components/HeroSection";

export default function Home() {
  return (
    <main>
      <Navbar />
      <HeroSection />
    </main>
  );
}
