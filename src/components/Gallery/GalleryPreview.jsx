import { Link } from "react-router-dom";
import { galleryImages } from "../../data/galleryData";

export function GalleryPreview() {
  const highlight = galleryImages.slice(0, 6);

  return (
    <section className="py-32 bg-zinc-950">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-16">
          <div>
            <p className="text-yellow-700 text-xs tracking-widest uppercase mb-4">
              — Portfólio
            </p>
            <h2 className="text-5xl lg:text-6xl font-black text-white">
              Nossa
              <span className="italic text-yellow-600"> Galeria</span>
            </h2>
          </div>

          <Link
            to="/galeria"
            className="mt-6 md:mt-0 text-yellow-600 hover:text-yellow-400 text-xs uppercase tracking-widest flex items-center gap-2 group transition-colors"
          >
            Ver tudo
            <span className="group-hover:translate-x-1 transition-transform duration-300">
              →
            </span>
          </Link>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-3 gap-3">
          {highlight.map((image, index) => (
            <Link
              key={image.id}
              to="/galeria"
              className={`relative overflow-hidden bg-zinc-900 group ${
                index === 0 ? "row-span-2" : ""
              }`}
              style={{ aspectRatio: index === 0 ? "3/4" : "1/1" }}
            >
              <img
                src={image.src}
                alt={image.title}
                className="w-full h-full object-cover opacity-75 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
              />

              <div className="absolute inset-0 bg-linear-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <p className="text-white text-sm font-bold">{image.title}</p>
                <p className="text-yellow-600 text-xs uppercase tracking-widest mt-1">
                  {image.style}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
