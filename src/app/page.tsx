import { FloatingBlobs } from "@/components/FloatingBlobs";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { SectionDivider } from "@/components/SectionDivider";
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
        <SectionDivider />
        <About />
        <SectionDivider />
        <Expertise />
        <SectionDivider />
        <Career />
        <SectionDivider />
        <Projects />
        <SectionDivider />
        <Research />
        <SectionDivider />
        <ResumeSection />
        <SectionDivider />
        <Contact />
        <Footer />
      </main>
    </>
  );
}
