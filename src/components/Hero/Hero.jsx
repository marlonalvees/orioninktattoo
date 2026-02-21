export function Hero() {
  function handleBudget() {
    const section = document.querySelector("#contato");

    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  }

  const gridBgStyle = {
    backgroundImage: `
      linear-gradient(rgba(161,120,27,0.8) 1px, transparent 1px),
      linear-gradient(90deg, rgba(161,120,27,0.8) 1px, transparent 1px)
    `,
    backgroundSize: "80px 80px",
  };

  return (
    <section className="min-h-screen bg-black flex items-center justify-center relative overflow-hidden">
      <div
        className="absolute inset-0 opacity-5 pointer-events-none"
        style={gridBgStyle}
        aria-hidden="true"
      />

      <div className="relative z-10 text-center px-6 max-w-3xl mx-auto">
        <p className="text-yellow-700 text-xs tracking-widest uppercase mb-6">
          ✦ Tattoo Studio ✦
        </p>

        <h1 className="text-6xl sm:text-7xl md:text-9xl font-black leading-none tracking-tight mb-4">
          <span className="block text-white">ORION</span>
          <span className="block text-yellow-600 italic">INK</span>
        </h1>

        <div className="flex items-center gap-4 justify-center mb-6">
          <div className="h-px w-16 bg-yellow-800" />
          <p className="text-zinc-500 text-xs uppercase tracking-widest">
            Arte permanente na pele
          </p>
          <div className="h-px w-16 bg-yellow-800" />
        </div>

        <p className="text-zinc-400 text-lg mb-12 max-w-md mx-auto leading-relaxed italic">
          Cada traço conta uma história. Cada tatuagem é uma obra única, feita
          com precisão e paixão.
        </p>

        <button
          type="button"
          aria-label="Ir para a seção de contato para solicitar orçamento"
          onClick={handleBudget}
          className="bg-yellow-700 hover:bg-yellow-600 text-black font-bold text-sm uppercase tracking-widest px-10 py-4 transition-colors duration-300"
        >
          Faça um Orçamento Conosco →
        </button>

        <div className="mt-16 flex items-center justify-center gap-12">
          <div className="text-center">
            <p className="text-yellow-600 text-2xl font-black">12+</p>
            <p className="text-zinc-600 text-xs uppercase tracking-widest mt-1">
              Anos de experiência
            </p>
          </div>

          <div className="w-px h-10 bg-zinc-800" />

          <div className="text-center">
            <p className="text-yellow-600 text-2xl font-black">2k+</p>
            <p className="text-zinc-600 text-xs uppercase tracking-widest mt-1">
              Tatuagens realizadas
            </p>
          </div>

          <div className="w-px h-10 bg-zinc-800" />

          <div className="text-center">
            <p className="text-yellow-600 text-2xl font-black">100%</p>
            <p className="text-zinc-600 text-xs uppercase tracking-widest mt-1">
              Clientes satisfeitos
            </p>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
        <p className="text-zinc-600 text-xs uppercase tracking-widest">
          Scroll
        </p>
        <div className="w-px h-8 bg-linear-to-b from-yellow-800 to-transparent" />
      </div>
    </section>
  );
}
