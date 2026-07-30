import { Header, Hero } from "@/components/Hero";
import { AboutStudio } from "@/components/AboutStudio";
import { FavoriteDesigns } from "@/components/FavoriteDesigns";
import { Services } from "@/components/Services";
import { Treatments } from "@/components/Treatments";
import { InteractiveVideo } from "@/components/InteractiveVideo";
import { Gallery } from "@/components/Gallery";
import { Testimonials } from "@/components/Testimonials";
import { BookingForm } from "@/components/BookingForm";
import { VisitSection } from "@/components/VisitSection";
import { Footer } from "@/components/Footer";
import { PolishCursor } from "@/components/PolishCursor";

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
