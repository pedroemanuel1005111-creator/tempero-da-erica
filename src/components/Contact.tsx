import { MapPin, Phone, Clock, Navigation, ExternalLink } from 'lucide-react';

function InstagramIcon({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <circle cx="12" cy="12" r="5" />
      <circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" stroke="none" />
    </svg>
  );
}

const GOOGLE_MAPS_URL = 'https://www.google.com/maps/place/Tempero+Da+Erica/@-9.4847969,-35.8165242,17z/data=!4m6!3m5!1s0x70137e558c9d343:0xe66089e081315db7!8m2!3d-9.4870051!4d-35.8145746!16s%2Fg%2F11h6qjxqzz';

export default function Contact() {
  const whatsappUrl = 'https://wa.me/5582988211541?text=Olá! Gostaria de fazer um pedido.';

  const info = [
    {
      icon: <MapPin className="w-5 h-5" />,
      label: 'Endereço',
      value: 'De Souza - Conj. Antonio Lins - Mata do Rolo',
      sub: 'Rio Largo - AL, 57100-000',
      link: GOOGLE_MAPS_URL,
    },
    {
      icon: <Phone className="w-5 h-5" />,
      label: 'Telefone / WhatsApp',
      value: '(82) 98821-1541',
      sub: 'Ligue ou mande mensagem',
      link: whatsappUrl,
    },
    {
      icon: <Clock className="w-5 h-5" />,
      label: 'Horário de Funcionamento',
      value: 'Segunda a Sexta: 10:30 - 15:00',
      sub: 'Sábado e Domingo: Consultar',
      link: null,
    },
    {
      icon: <Navigation className="w-5 h-5" />,
      label: 'Localização',
      value: 'Próximo ao Aeroporto',
      sub: 'Rio Largo, Alagoas',
      link: GOOGLE_MAPS_URL,
    },
  ];

  return (
    <section id="contato" className="py-24 bg-stone-900 text-white relative overflow-hidden">
      {/* Decorative */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-amber-600/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-orange-600/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-amber-400 font-semibold text-sm tracking-widest uppercase">
            Contato
          </span>
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mt-3 mb-4"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Venha nos <span className="text-amber-400">visitar</span>
          </h2>
          <p className="text-stone-400 text-lg max-w-2xl mx-auto">
            Estamos esperando você! Faça seu pedido pelo WhatsApp ou venha nos visitar pessoalmente.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Info cards */}
          <div className="space-y-6">
            {info.map((item) => {
              const Wrapper = item.link ? 'a' : 'div';
              const linkProps = item.link
                ? { href: item.link, target: '_blank' as const, rel: 'noopener noreferrer' }
                : {};
              return (
                <Wrapper
                  key={item.label}
                  {...linkProps}
                  className={`flex gap-5 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 hover:border-amber-500/30 transition-all duration-300 group ${item.link ? 'cursor-pointer' : ''}`}
                >
                  <div className="w-12 h-12 rounded-xl bg-amber-600/20 text-amber-400 flex items-center justify-center flex-shrink-0 group-hover:bg-amber-600 group-hover:text-white transition-all duration-300">
                    {item.icon}
                  </div>
                  <div className="flex-1">
                    <p className="text-stone-400 text-xs uppercase tracking-wider mb-1">{item.label}</p>
                    <p className="text-white font-semibold">{item.value}</p>
                    <p className="text-stone-500 text-sm mt-0.5">{item.sub}</p>
                  </div>
                  {item.link && (
                    <ExternalLink size={16} className="text-stone-600 group-hover:text-amber-400 transition-colors mt-1 flex-shrink-0" />
                  )}
                </Wrapper>
              );
            })}

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-4 pt-4">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 bg-green-600 hover:bg-green-700 text-white px-6 py-3.5 rounded-xl font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-green-600/30 text-sm"
              >
                <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current" xmlns="http://www.w3.org/2000/svg">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                WhatsApp
              </a>
              <a
                href="https://www.instagram.com/temperodaerica/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-6 py-3.5 rounded-xl font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-pink-600/30 text-sm"
              >
                <InstagramIcon size={20} />
                Instagram
              </a>
              <a
                href={GOOGLE_MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3.5 rounded-xl font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-blue-600/30 text-sm"
              >
                <MapPin size={20} />
                Como Chegar
              </a>
            </div>
          </div>

          {/* Map embed */}
          <div className="rounded-2xl overflow-hidden border border-white/10 shadow-2xl relative group">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3943.5!2d-35.8165242!3d-9.4847969!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x70137e558c9d343%3A0xe66089e081315db7!2sTempero%20Da%20Erica!5e0!3m2!1spt-BR!2sbr!4v1700000000000!5m2!1spt-BR!2sbr"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: '400px' }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Localização Tempero Da Erica"
            />
            {/* Overlay link to open full Google Maps */}
            <a
              href={GOOGLE_MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="absolute bottom-4 right-4 bg-white hover:bg-stone-50 text-stone-700 px-4 py-2.5 rounded-xl text-xs font-semibold shadow-lg flex items-center gap-2 transition-all duration-300 hover:shadow-xl opacity-90 group-hover:opacity-100"
            >
              <MapPin size={14} className="text-red-500" />
              Abrir no Google Maps
              <ExternalLink size={12} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
