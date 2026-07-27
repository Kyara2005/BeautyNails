import { Header, Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { Gallery } from "@/components/Gallery";
import { Hours } from "@/components/Hours";
import { Testimonials } from "@/components/Testimonials";
import { Linktree, Footer } from "@/components/Linktree";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <Hero />
        <Services />
        <Gallery />
        <Hours />
        <Testimonials />
        <Linktree />
      </main>
      <Footer />
    </>
  );
}
