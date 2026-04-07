import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    function handleScroll() {
      if (window.scrollY > 40) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    }

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-black/95 backdrop-blur-md border-b border-zinc-800"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <div>
          <p className="text-yellow-600 text-xl font-black tracking-widest">
            ORION
          </p>
          <p className="text-zinc-600 text-[.5625rem] tracking-widest uppercase">
            Ink Studio
          </p>
        </div>

        <nav className="hidden md:flex items-center gap-8">
          <a
            href="#sobre"
            className="text-zinc-400 hover:text-yellow-600 text-xs uppercase tracking-widest transition-colors duration-300"
          >
            Sobre
          </a>
          <a
            href="#servicos"
            className="text-zinc-400 hover:text-yellow-600 text-xs uppercase tracking-widest transition-colors duration-300"
          >
            Serviços
          </a>
          <Link
            to={"gallery"}
            className="text-zinc-400 hover:text-yellow-600 text-xs uppercase tracking-widest transition-colors duration-300"
          >
            Galeria
          </Link>
          <a
            href="#contato"
            className="text-zinc-400 hover:text-yellow-600 text-xs uppercase tracking-widest transition-colors duration-300"
          >
            Contato
          </a>
        </nav>
        {/* Hambúrguer */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMenuOpen((prev) => !prev)}
        >
          <span
            className={`block w-6 h-px bg-white transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-2" : ""}`}
          />
          <span
            className={`block w-6 h-px bg-white transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`}
          />
          <span
            className={`block w-6 h-px bg-white transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`}
          />
        </button>
      </div>
      {/* Menu Mobile */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-500 ${menuOpen ? "max-h-64" : "max-h-0"}`}
      >
        <nav className="flex flex-col px-6 py-4 gap-4 bg-black border-t border-zinc-800">
          <a
            href="#sobre"
            onClick={() => setMenuOpen((prev) => !prev)}
            className="text-zinc-400 hover:text-yellow-600 text-xs uppercase tracking-widest transition-colors py-2"
          >
            Sobre
          </a>
          <a
            href="#servicos"
            onClick={() => setMenuOpen((prev) => !prev)}
            className="text-zinc-400 hover:text-yellow-600 text-xs uppercase tracking-widest transition-colors py-2"
          >
            Serviços
          </a>

          <Link
            to="/gallery"
            onClick={() => setMenuOpen((prev) => !prev)}
            className="text-zinc-400 hover:text-yellow-600 text-xs uppercase tracking-widest transition-colors py-2"
          >
            Galeria
          </Link>
          <a
            href="#contato"
            onClick={() => setMenuOpen((prev) => !prev)}
            className="text-zinc-400 hover:text-yellow-600 text-xs uppercase tracking-widest transition-colors py-2"
          >
            Contato
          </a>
        </nav>
      </div>
    </header>
  );
}
