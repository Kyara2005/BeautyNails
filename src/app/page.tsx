import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { PolishCursor } from "@/components/layout/PolishCursor";
import { Hero } from "@/components/sections/Hero";
import { AboutStudio } from "@/components/sections/AboutStudio";
import { FavoriteDesigns } from "@/components/sections/FavoriteDesigns";
import { Services } from "@/components/sections/Services";
import { Treatments } from "@/components/sections/Treatments";
import { InteractiveVideo } from "@/components/sections/InteractiveVideo";
import { Gallery } from "@/components/sections/Gallery";
import { Testimonials } from "@/components/sections/Testimonials";
import { BookingForm } from "@/components/sections/BookingForm";
import { VisitSection } from "@/components/sections/VisitSection";

export default function Home() {
  return (
    <>
      <PolishCursor />
      <Header />
      <main className="flex-1">
        <Hero />
        <AboutStudio />
        <FavoriteDesigns />
        <Services />
        <Treatments />
        <InteractiveVideo />
        <Gallery />
        <Testimonials />
        <BookingForm />
        <VisitSection />
      </main>
      <Footer />
    </>
  );
}
