export function About() {
  return (
    <section id="sobre" className="py-32 bg-zinc-950">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="relative aspect-3/4 max-w-sm mx-auto lg:mx-0 bg-zinc-900 flex items-center justify-center overflow-hidden">
              <svg
                viewBox="0 0 300 300"
                className="w-64 h-64 opacity-60"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g transform="translate(150,150)">
                  <circle
                    r="120"
                    fill="none"
                    stroke="#92620a"
                    strokeWidth="0.5"
                  />
                  <circle
                    r="90"
                    fill="none"
                    stroke="#92620a"
                    strokeWidth="0.5"
                  />
                  <circle r="60" fill="none" stroke="#92620a" strokeWidth="1" />
                  <circle
                    r="30"
                    fill="none"
                    stroke="#92620a"
                    strokeWidth="1.5"
                  />
                  <circle r="8" fill="#92620a" />
                  {[0, 45, 90, 135, 180, 225, 270, 315].map((angle) => (
                    <g key={angle} transform={`rotate(${angle})`}>
                      <line
                        x1="0"
                        y1="-32"
                        x2="0"
                        y2="-88"
                        stroke="#92620a"
                        strokeWidth="0.8"
                      />
                    </g>
                  ))}
                  {[0, 60, 120, 180, 240, 300].map((angle) => (
                    <g key={angle} transform={`rotate(${angle})`}>
                      <ellipse
                        cx="0"
                        cy="-60"
                        rx="6"
                        ry="12"
                        fill="none"
                        stroke="#ca8a04"
                        strokeWidth="0.8"
                      />
                    </g>
                  ))}
                </g>
              </svg>

              <div className="absolute top-3 left-3 w-6 h-6 border-t border-l border-yellow-700" />
              <div className="absolute top-3 right-3 w-6 h-6 border-t border-r border-yellow-700" />
              <div className="absolute bottom-3 left-3 w-6 h-6 border-b border-l border-yellow-700" />
              <div className="absolute bottom-3 right-3 w-6 h-6 border-b border-r border-yellow-700" />
            </div>

            <div className="absolute -bottom-4 -right-4 lg:right-8 bg-yellow-700 px-5 py-4 text-center">
              <p className="text-black text-2xl font-black">12+</p>
              <p className="text-black text-xs uppercase tracking-widest mt-1">
                anos de arte
              </p>
            </div>
          </div>

          <div className="lg:pl-8">
            <p className="text-yellow-700 text-xs tracking-widest uppercase mb-4">
              — Sobre nós
            </p>

            <h2 className="text-5xl lg:text-6xl font-black leading-tight text-white mb-6">
              Arte gravada
              <span className="block italic text-yellow-600"> na pele</span>
            </h2>

            <div className="w-12 h-px bg-yellow-700 mb-8" />

            <p className="text-zinc-400 text-lg leading-relaxed mb-6">
              No Orion Ink Studio, acreditamos que cada tatuagem é mais do que
              tinta — é uma expressão permanente de quem você é. Nosso estúdio
              foi fundado com a missão de transformar histórias pessoais em arte
              visual incomparável.
            </p>

            <p className="text-zinc-600 text-base leading-relaxed mb-10">
              Com mais de uma década de experiência, nossa equipe domina
              técnicas que vão do fineline ao blackwork, do realismo ao
              geométrico.
            </p>

            <div className="grid grid-cols-2 gap-6">
              {[
                ["Blackwork", "Linhas precisas e sombras profundas"],
                ["Fineline", "Traços delicados e detalhados"],
                ["Realismo", "Imagens com profundidade e textura"],
                ["Geométrico", "Padrões e formas simétricas"],
              ].map(([title, description]) => (
                <div key={title} className="border-l border-yellow-800 pl-4">
                  <p className="text-white text-xs font-medium uppercase tracking-widest mb-1">
                    {title}
                  </p>
                  <p className="text-zinc-500 text-sm">{description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
