import { FloatingBlobs } from "@/components/FloatingBlobs";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Expertise } from "@/components/Expertise";
import { Career } from "@/components/Career";
import { Projects } from "@/components/Projects";
import { Research } from "@/components/Research";
import { ResumeSection } from "@/components/ResumeSection";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <FloatingBlobs />
      <Header />
      <main>
        <Hero />
        <About />
        <Expertise />
        <Career />
        <Projects />
        <Research />
        <ResumeSection />
        <Contact />
        <Footer />
      </main>
    </>
  );
}
