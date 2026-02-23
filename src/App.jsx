import { Header } from "./components/Header/Header";
import { Footer } from "./components/Footer/Footer";
import { Hero } from "./components/Hero/Hero";
import { About } from "./components/About/About";
import { Services } from "./components/Services/Services";

export function App() {
  return (
    <div className="bg-black min-h-screen">
      <Header />
      <Hero />
      <About />
      <Services />
      <Footer />
    </div>
  );
}
