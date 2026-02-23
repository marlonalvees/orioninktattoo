const services = [
  {
    number: "01",
    title: "Blackwork",
    description:
      "Tatuagens em preto profundo com linhas marcantes e composições ousadas que criam contraste máximo.",
    details: ["Bold lines", "Dotwork", "Sombras sólidas", "Tribal"],
    price: "A partir de R$ 350",
  },
  {
    number: "02",
    title: "Fineline",
    description:
      "Arte delicada com traços finíssimos que capturam details sutis. Perfeita para designs elegantes.",
    details: ["Micro tattoo", "Linha única", "Floral", "Escrita"],
    price: "A partir de R$ 280",
  },
  {
    number: "03",
    title: "Realismo",
    description:
      "Retratos e imagens hiper-realistas com técnica fotográfica aplicada à pele.",
    details: ["Retratos", "Animais", "Paisagens", "Black & Grey"],
    price: "A partir de R$ 600",
  },
  {
    number: "04",
    title: "Geométrico",
    description:
      "Padrões matemáticos e formas simétricas que criam composições visualmente hipnóticas.",
    details: ["Sacred Geometry", "Mandalas", "Lineares", "Pontilhismo"],
    price: "A partir de R$ 320",
  },
  {
    number: "05",
    title: "Aquarela",
    description:
      "A fluidez das aquarelas traduzida para a pele. Cores que se misturam como pinceladas livres.",
    details: ["Splashes", "Floral", "Abstrato", "Colorido"],
    price: "A partir de R$ 450",
  },
  {
    number: "06",
    title: "Cover-up",
    description:
      "Transformamos tatuagens antigas em novas obras de arte. Consulta necessária para avaliação.",
    details: ["Análise prévia", "Redesign", "Rework", "Restauração"],
    price: "Consulta gratuita",
  },
];

export function Services() {
  return (
    <section id="services" className="py-32 bg-black">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <p className="text-yellow-700 text-xs tracking-widest uppercase mb-4">
            — O que fazemos
          </p>
          <h2 className="text-5xl lg:text-7xl font-black text-white">
            Nossos
            <span className="italic text-yellow-600"> Serviços</span>
          </h2>
          <div className="flex items-center gap-4 justify-center mt-6">
            <div className="h-px w-20 bg-yellow-900" />
            <div className="w-1.5 h-1.5 bg-yellow-700 rotate-45" />
            <div className="h-px w-20 bg-yellow-900" />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-zinc-800">
          {services.map((service) => (
            <div
              key={service.number}
              className="bg-black p-8 group hover:bg-zinc-950 transition-colors duration-300 relative overflow-hidden"
            >
              <span className="absolute top-4 right-6 text-7xl font-black text-zinc-900 select-none group-hover:text-zinc-800 transition-colors duration-300">
                {service.number}
              </span>

              <div className="relative z-10">
                <p className="text-yellow-800 text-xs tracking-widest mb-4">
                  {service.number}
                </p>

                <h3 className="text-white text-2xl font-bold mb-3 group-hover:text-yellow-500 transition-colors duration-300">
                  {service.title}
                </h3>

                <div className="w-8 h-px bg-yellow-700 mb-4 group-hover:w-16 transition-all duration-300" />

                <p className="text-zinc-500 text-sm leading-relaxed mb-6">
                  {service.description}
                </p>

                <ul className="flex flex-wrap gap-2 mb-6">
                  {service.details.map((detalhe) => (
                    <li
                      key={detalhe}
                      className="text-xs uppercase tracking-widest px-2.5 py-1 border border-zinc-800 text-zinc-500 group-hover:border-yellow-900 group-hover:text-yellow-700 transition-all duration-300"
                    >
                      {detalhe}
                    </li>
                  ))}
                </ul>

                <p className="text-zinc-400 text-xs font-medium">
                  {service.price}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
