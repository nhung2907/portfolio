import { nav, profile } from "@/content/profile";
import { Navbar } from "@/components/navbar";
import { RevealObserver } from "@/components/reveal-observer";
import { Hero } from "@/components/sections/hero";
import { About, Identity, Marquee } from "@/components/sections/about";
import { Projects } from "@/components/sections/projects";
import { Currently, Interests } from "@/components/sections/personal";
import { Contact, Footer } from "@/components/sections/contact";

export default function Home() {
  return (
    <>
      <Navbar items={nav} initials={profile.initials} brand={profile.firstName.toLowerCase()} />
      <main>
        <Hero />
        <Marquee />
        <About />
        <Identity />
        <Projects />
        <Interests />
        <Currently />
        <Contact />
      </main>
      <Footer />
      <RevealObserver />
    </>
  );
}
