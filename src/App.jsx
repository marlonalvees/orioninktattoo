import { Header } from "./components/Header/Header";
import { Footer } from "./components/Footer/Footer";
import { HomePage } from "./pages/HomePage";
import { GalleryPage } from "./pages/GalleryPage";
import { Routes, Route } from "react-router-dom";

export function App() {
  return (
    <div className="bg-black min-h-screen">
      <Header />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/gallery" element={<GalleryPage />} />
      </Routes>

      <Footer />
    </div>
  );
}
