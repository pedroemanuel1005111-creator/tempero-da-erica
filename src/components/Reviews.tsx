import { Star, Quote } from 'lucide-react';

export default function Reviews() {
  const reviews = [
    {
      name: 'Adolfo Soares',
      role: 'Local Guide · 101 avaliações',
      rating: 5,
      text: 'Muito bom! Comida excelente e atendimento de primeira. Preço justo por pessoa, entre R$ 20 e R$ 40.',
      time: '4 meses atrás',
      avatar: 'AS',
      color: 'bg-blue-600',
    },
    {
      name: 'Desentupidora Rapidão',
      role: '6 avaliações',
      rating: 5,
      text: 'Comida deliciosa, sempre fresca e preparada com muito carinho! 🍽️ Venho todos os dias e a qualidade é impecável, além do atendimento super acolhedor! A equipe é super gente boa e sempre disposta a fazer você se sentir em casa. Recomendo de olhos fechados! 👏😊',
      time: 'um ano atrás',
      avatar: 'DR',
      color: 'bg-emerald-600',
    },
    {
      name: 'Zuleide Santos',
      role: '1 avaliação',
      rating: 5,
      text: 'Melhor comida de Rio Largo, muita opção de carnes e verduras. Local limpo e organizado. Ótimo atendimento.',
      time: 'um ano atrás',
      avatar: 'ZS',
      color: 'bg-purple-600',
    },
    {
      name: 'Cliente Google',
      role: 'Avaliação verificada',
      rating: 5,
      text: 'Melhor comida de Rio Largo, bem próximo ao aeroporto e atendimento 5 estrelas!',
      time: 'Recente',
      avatar: 'CG',
      color: 'bg-amber-600',
    },
    {
      name: 'Cliente Google',
      role: 'Avaliação verificada',
      rating: 5,
      text: 'Bom ambiente, atendimento bom e opções de refeições muito boas.',
      time: 'Recente',
      avatar: 'CG',
      color: 'bg-red-600',
    },
    {
      name: 'Cliente Google',
      role: 'Avaliação verificada',
      rating: 4,
      text: 'Boa opção para almoço na região. Comida caseira de qualidade com bom custo-benefício.',
      time: 'Recente',
      avatar: 'CG',
      color: 'bg-teal-600',
    },
  ];

  return (
    <section id="avaliacoes" className="py-24 bg-white relative overflow-hidden">
      {/* Decorative */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-amber-400 via-orange-500 to-red-500" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-amber-600 font-semibold text-sm tracking-widest uppercase">
            Avaliações
          </span>
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-stone-800 mt-3 mb-4"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            O que nossos <span className="text-amber-600">clientes</span> dizem
          </h2>
          <div className="flex items-center justify-center gap-4 mt-6">
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={24} className={i < 4 ? 'fill-amber-400 text-amber-400' : 'fill-amber-400/50 text-amber-400/50'} />
              ))}
            </div>
            <span className="text-2xl font-bold text-stone-800">4,5</span>
            <span className="text-stone-500">· 105 avaliações no Google</span>
          </div>
        </div>

        {/* Rating breakdown */}
        <div className="max-w-md mx-auto mb-14 bg-stone-50 rounded-2xl p-6">
          {[
            { stars: 5, percent: 75 },
            { stars: 4, percent: 15 },
            { stars: 3, percent: 7 },
            { stars: 2, percent: 2 },
            { stars: 1, percent: 1 },
          ].map((row) => (
            <div key={row.stars} className="flex items-center gap-3 mb-2 last:mb-0">
              <span className="text-sm text-stone-500 w-3">{row.stars}</span>
              <Star size={14} className="fill-amber-400 text-amber-400" />
              <div className="flex-1 h-2 bg-stone-200 rounded-full overflow-hidden">
                <div
                  className="h-full bg-amber-400 rounded-full transition-all duration-1000"
                  style={{ width: `${row.percent}%` }}
                />
              </div>
              <span className="text-xs text-stone-400 w-8 text-right">{row.percent}%</span>
            </div>
          ))}
        </div>

        {/* Reviews Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((review, idx) => (
            <div
              key={idx}
              className="bg-stone-50 hover:bg-white rounded-2xl p-6 border border-stone-100 hover:border-amber-200 hover:shadow-xl hover:shadow-stone-100/50 transition-all duration-500 group"
            >
              <Quote size={24} className="text-amber-300 mb-4 group-hover:text-amber-500 transition-colors" />
              <p className="text-stone-600 leading-relaxed mb-6 text-sm">
                "{review.text}"
              </p>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className={`w-10 h-10 rounded-full ${review.color} flex items-center justify-center text-white text-xs font-bold`}>
                    {review.avatar}
                  </div>
                  <div>
                    <p className="font-semibold text-stone-800 text-sm">{review.name}</p>
                    <p className="text-stone-400 text-xs">{review.time}</p>
                  </div>
                </div>
                <div className="flex items-center gap-0.5">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} size={12} className="fill-amber-400 text-amber-400" />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
