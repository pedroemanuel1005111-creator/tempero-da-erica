import { MapPin, Clock, Star, ChevronDown } from 'lucide-react';

export default function Hero() {
  const whatsappUrl = 'https://wa.me/5582988211541?text=Olá! Gostaria de fazer um pedido.';

  return (
    <section id="inicio" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="https://images.pexels.com/photos/34520954/pexels-photo-34520954.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=1920"
          alt="Pratos do Tempero Da Erica"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/30" />
      </div>

      {/* Decorative elements */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-amber-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 w-full">
        <div className="max-w-2xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-4 py-2 mb-8">
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  size={14}
                  className={i < 4 ? 'fill-amber-400 text-amber-400' : 'fill-amber-400/50 text-amber-400/50'}
                />
              ))}
            </div>
            <span className="text-white/90 text-sm font-medium">4,5 · 105 avaliações</span>
          </div>

          {/* Title */}
          <h1
            className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Tempero
            <br />
            <span className="text-amber-400">Da Erica</span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg sm:text-xl text-white/80 mb-8 leading-relaxed max-w-lg">
            Comida caseira feita com amor e tempero especial. A melhor opção para almoço em Rio Largo, pertinho do aeroporto.
          </p>

          {/* Info badges */}
          <div className="flex flex-wrap gap-4 mb-10">
            <a href="https://www.google.com/maps/place/Tempero+Da+Erica/@-9.4847969,-35.8165242,17z/data=!4m6!3m5!1s0x70137e558c9d343:0xe66089e081315db7!8m2!3d-9.4870051!4d-35.8145746!16s%2Fg%2F11h6qjxqzz" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-white/70 hover:text-amber-400 transition-colors">
              <MapPin size={16} className="text-amber-400" />
              <span className="text-sm">Rio Largo, AL</span>
            </a>
            <div className="flex items-center gap-2 text-white/70">
              <Clock size={16} className="text-amber-400" />
              <span className="text-sm">Seg-Sex · 10:30 - 15:00</span>
            </div>
            <div className="flex items-center gap-2 text-white/70">
              <span className="text-amber-400 text-sm font-bold">R$</span>
              <span className="text-sm">20–40 por pessoa</span>
            </div>
          </div>

          {/* CTAs */}
          <div className="flex flex-wrap gap-4">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-3 bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-full text-base font-semibold transition-all duration-300 hover:shadow-xl hover:shadow-green-600/30 hover:-translate-y-1"
            >
              <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current" xmlns="http://www.w3.org/2000/svg">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              Pedir pelo WhatsApp
            </a>
            <a
              href="#cardapio"
              className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/30 hover:bg-white/20 text-white px-8 py-4 rounded-full text-base font-semibold transition-all duration-300 hover:-translate-y-1"
            >
              Ver Cardápio
            </a>
          </div>

          {/* Service tags */}
          <div className="flex flex-wrap gap-3 mt-10">
            {['🍽️ Refeição no local', '📦 Para viagem', '🛵 Entrega'].map((service) => (
              <span
                key={service}
                className="bg-white/10 backdrop-blur-sm border border-white/10 text-white/80 px-4 py-2 rounded-full text-xs font-medium"
              >
                {service}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <a href="#sobre" className="text-white/50 hover:text-white/80 transition-colors">
          <ChevronDown size={28} />
        </a>
      </div>
    </section>
  );
}
