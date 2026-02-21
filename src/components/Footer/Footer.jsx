export function Footer() {
  return (
    <footer className="bg-black border-t border-zinc-800 py-10">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <div>
          <p className="text-yellow-600 text-2xl font-black tracking-widest">
            ORION
          </p>
          <p className="text-zinc-600 text-xs tracking-widest uppercase">
            Ink Studio
          </p>
        </div>

        <div className="flex gap-6">
          <a
            href="#sobre"
            className="text-zinc-500 hover:text-yellow-600 text-xs uppercase tracking-widest transition-colors"
          >
            Sobre
          </a>
          <a
            href="#servicos"
            className="text-zinc-500 hover:text-yellow-600 text-xs uppercase tracking-widest transition-colors"
          >
            Serviços
          </a>
          <a
            href="#contato"
            className="text-zinc-500 hover:text-yellow-600 text-xs uppercase tracking-widest transition-colors"
          >
            Contato
          </a>
        </div>

        <p className="text-zinc-700 text-xs tracking-widest">
          © {new Date().getFullYear()} Orion Ink Studio
        </p>
      </div>
    </footer>
  );
}
