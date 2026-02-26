import { useState } from "react";
import { galleryImages, categories } from "../../data/galleryData";

export function GalleryFull() {
  const [activeCategory, setActiveCategory] = useState("todos");
  const [lightbox, setLightbox] = useState(null);

  const filteredImages =
    activeCategory === "todos"
      ? galleryImages
      : galleryImages.filter((img) => img.category === activeCategory);

  const labelCategory = {
    todos: "Todos",
    blackwork: "Blackwork",
    fineline: "Fineline",
    realismo: "Realismo",
    geometrico: "Geométrico",
    aquarela: "Aquarela",
  };

  return (
    <section className="pt-32 pb-20 min-h-screen bg-black">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-yellow-700 text-xs tracking-widest uppercase mb-4">
            — Portfólio
          </p>
          <h1 className="text-6xl lg:text-8xl font-black text-white">
            Galeria
          </h1>
          <div className="flex items-center gap-4 justify-center mt-6">
            <div className="h-px w-20 bg-yellow-900" />
            <div className="w-1.5 h-1.5 bg-yellow-700 rotate-45" />
            <div className="h-px w-20 bg-yellow-900" />
          </div>
        </div>

        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`text-xs uppercase tracking-widest px-5 py-2.5 transition-all duration-300 ${
                activeCategory === cat
                  ? "bg-yellow-700 text-black font-bold"
                  : "border border-zinc-700 text-zinc-400 hover:border-yellow-700 hover:text-yellow-600"
              }`}
            >
              {labelCategory[cat]}
            </button>
          ))}
        </div>

        <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-3 space-y-3">
          {filteredImages.map((image) => (
            <div
              key={image.id}
              onClick={() => setLightbox(image)}
              className="break-inside-avoid relative overflow-hidden group cursor-pointer bg-zinc-900"
            >
              <img
                src={image.src}
                alt={image.title}
                className="w-full h-auto block opacity-75 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <p className="text-white text-sm font-bold">{image.title}</p>
                <p className="text-yellow-600 text-xs uppercase tracking-widest mt-1">
                  {image.style}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {lightbox && (
        <div
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
          onClick={() => setLightbox(null)}
        >
          <button
            className="absolute top-6 right-6 text-zinc-400 hover:text-white text-xs uppercase tracking-widest transition-colors"
            onClick={() => setLightbox(null)}
          >
            2026 ✕ Fechar
          </button>

          <div
            className="max-w-2xl w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={lightbox.src}
              alt={lightbox.title}
              className="w-full h-auto max-h-[75vh] object-contain"
            />
            <div className="mt-4 text-center">
              <p className="text-white text-xl font-bold">{lightbox.title}</p>
              <p className="text-yellow-600 text-xs uppercase tracking-widest mt-2">
                {lightbox.style}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
