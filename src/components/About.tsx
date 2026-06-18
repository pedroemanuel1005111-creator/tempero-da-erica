import { Heart, Leaf, Clock, Users } from 'lucide-react';

export default function About() {
  const features = [
    {
      icon: <Heart className="w-6 h-6" />,
      title: 'Feito com Amor',
      description: 'Cada prato é preparado com carinho e dedicação, como comida de casa.',
    },
    {
      icon: <Leaf className="w-6 h-6" />,
      title: 'Ingredientes Frescos',
      description: 'Utilizamos ingredientes sempre frescos e selecionados para garantir a melhor qualidade.',
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: 'Pontualidade',
      description: 'Seu pedido preparado com agilidade, sem perder a qualidade que você merece.',
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: 'Atendimento Acolhedor',
      description: 'Nossa equipe faz você se sentir em casa desde o primeiro momento.',
    },
  ];

  return (
    <section id="sobre" className="py-24 bg-white relative overflow-hidden">
      {/* Decorative */}
      <div className="absolute -top-40 -right-40 w-80 h-80 bg-amber-100 rounded-full blur-3xl opacity-50" />
      <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-orange-100 rounded-full blur-3xl opacity-50" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image collage */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="rounded-2xl overflow-hidden shadow-xl shadow-stone-200/50 transform hover:scale-[1.02] transition-transform duration-500">
                  <img
                    src="https://images.pexels.com/photos/34520967/pexels-photo-34520967.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=400&w=300"
                    alt="Prato do Tempero Da Erica"
                    className="w-full h-52 object-cover"
                  />
                </div>
                <div className="rounded-2xl overflow-hidden shadow-xl shadow-stone-200/50 transform hover:scale-[1.02] transition-transform duration-500">
                  <img
                    src="https://images.pexels.com/photos/10135116/pexels-photo-10135116.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=300&w=300"
                    alt="Ambiente do restaurante"
                    className="w-full h-40 object-cover"
                  />
                </div>
              </div>
              <div className="pt-8 space-y-4">
                <div className="rounded-2xl overflow-hidden shadow-xl shadow-stone-200/50 transform hover:scale-[1.02] transition-transform duration-500">
                  <img
                    src="https://images.pexels.com/photos/34520964/pexels-photo-34520964.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=300&w=300"
                    alt="Comida brasileira"
                    className="w-full h-40 object-cover"
                  />
                </div>
                <div className="rounded-2xl overflow-hidden shadow-xl shadow-stone-200/50 transform hover:scale-[1.02] transition-transform duration-500">
                  <img
                    src="https://images.pexels.com/photos/34520948/pexels-photo-34520948.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=400&w=300"
                    alt="Pastel brasileiro"
                    className="w-full h-52 object-cover"
                  />
                </div>
              </div>
            </div>
            {/* Floating badge */}
            <div className="absolute -bottom-6 -right-3 sm:right-6 bg-amber-600 text-white rounded-2xl p-5 shadow-xl shadow-amber-600/30">
              <div className="text-center">
                <span className="text-3xl font-bold block" style={{ fontFamily: "'Playfair Display', serif" }}>
                  4,5
                </span>
                <span className="text-amber-100 text-xs font-medium">⭐ Google</span>
              </div>
            </div>
          </div>

          {/* Text content */}
          <div>
            <span className="text-amber-600 font-semibold text-sm tracking-widest uppercase">
              Sobre Nós
            </span>
            <h2
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-stone-800 mt-3 mb-6 leading-tight"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Uma história de <br />
              <span className="text-amber-600">sabor e tradição</span>
            </h2>
            <p className="text-stone-600 text-lg leading-relaxed mb-4">
              O Tempero Da Erica nasceu do amor pela cozinha e pela vontade de levar 
              comida de qualidade para a cidade de Rio Largo. Com pratos preparados 
              diariamente com ingredientes frescos e muito tempero, nos tornamos 
              referência em sabor na região.
            </p>
            <p className="text-stone-600 text-lg leading-relaxed mb-10">
              Localizado próximo ao aeroporto, oferecemos um ambiente limpo, organizado 
              e acolhedor, perfeito para seu almoço do dia a dia. Venha nos visitar e 
              prove o melhor da culinária caseira!
            </p>

            {/* Feature grid */}
            <div className="grid sm:grid-cols-2 gap-6">
              {features.map((feature) => (
                <div key={feature.title} className="flex gap-4 group">
                  <div className="w-12 h-12 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center flex-shrink-0 group-hover:bg-amber-600 group-hover:text-white transition-all duration-300">
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="font-semibold text-stone-800 mb-1">{feature.title}</h3>
                    <p className="text-stone-500 text-sm leading-relaxed">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
