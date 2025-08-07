import Image from "next/image";
 
import Navbar from "@/components/NavBar";
import HeroSection from "@/components/HeroSection";
import { useTranslations } from "next-intl";
import WhyUs from "@/components/WhyUs";

export default function Home() {
  const t = useTranslations();
  return (
    <main>
      <Navbar />
      <HeroSection />
      <WhyUs/>
    </main>
  );
}
