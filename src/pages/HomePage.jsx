import { Hero } from "../components/Hero/Hero";
import { About } from "../components/About/About";
import { Services } from "../components/Services/Services";
import { GalleryPreview } from "../components/gallery/GalleryPreview";

export function HomePage() {
  return (
    <main>
      <Hero />
      <About />
      <Services />
      <GalleryPreview />
    </main>
  );
}
