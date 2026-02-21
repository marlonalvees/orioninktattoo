import { Header } from "./components/Header/Header";
import { Footer } from "./components/Footer/Footer";
import { Hero } from "./components/Hero/Hero";
export function App() {
  return (
    <div className="bg-black min-h-screen">
      <Header />
      <Hero />
      <Footer />
    </div>
  );
}
