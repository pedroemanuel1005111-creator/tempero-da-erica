import { Heart } from 'lucide-react';

function InstagramIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <circle cx="12" cy="12" r="5" />
      <circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" stroke="none" />
    </svg>
  );
}

export default function Footer() {
  const whatsappUrl = 'https://wa.me/5582988211541?text=Olá! Gostaria de saber mais sobre o restaurante.';

  return (
    <footer className="bg-stone-950 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer */}
        <div className="py-16 grid md:grid-cols-3 gap-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 rounded-full bg-amber-600 flex items-center justify-center">
                <span className="text-xl">🍽️</span>
              </div>
              <h3
                className="text-2xl font-bold"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                Tempero Da Erica
              </h3>
            </div>
            <p className="text-stone-400 leading-relaxed text-sm mb-6">
              Comida caseira feita com amor e o melhor tempero de Rio Largo. 
              Venha nos visitar ou peça pelo WhatsApp!
            </p>
            <div className="flex gap-3">
              <a
                href="https://www.instagram.com/temperodaerica/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-white/10 hover:bg-gradient-to-r hover:from-purple-600 hover:to-pink-600 flex items-center justify-center transition-all duration-300 text-stone-400 hover:text-white"
              >
                <InstagramIcon size={18} />
              </a>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-white/10 hover:bg-green-600 flex items-center justify-center transition-all duration-300 text-stone-400 hover:text-white"
              >
                <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current" xmlns="http://www.w3.org/2000/svg">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-white mb-5 text-sm uppercase tracking-wider">
              Navegação
            </h4>
            <ul className="space-y-3">
              {[
                { label: 'Início', href: '#inicio' },
                { label: 'Sobre Nós', href: '#sobre' },
                { label: 'Cardápio', href: '#cardapio' },
                { label: 'Avaliações', href: '#avaliacoes' },
                { label: 'Contato', href: '#contato' },
              ].map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-stone-400 hover:text-amber-400 transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold text-white mb-5 text-sm uppercase tracking-wider">
              Informações
            </h4>
            <ul className="space-y-4 text-sm text-stone-400">
              <li>
                <span className="text-stone-500 text-xs uppercase tracking-wider block mb-1">Endereço</span>
                <a href="https://www.google.com/maps/place/Tempero+Da+Erica/@-9.4847969,-35.8165242,17z/data=!4m6!3m5!1s0x70137e558c9d343:0xe66089e081315db7!8m2!3d-9.4870051!4d-35.8145746!16s%2Fg%2F11h6qjxqzz" target="_blank" rel="noopener noreferrer" className="hover:text-amber-400 transition-colors">
                  De Souza - Conj. Antonio Lins<br />
                  Mata do Rolo, Rio Largo - AL
                </a>
              </li>
              <li>
                <span className="text-stone-500 text-xs uppercase tracking-wider block mb-1">WhatsApp</span>
                <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="hover:text-amber-400 transition-colors">
                  (82) 98821-1541
                </a>
              </li>
              <li>
                <span className="text-stone-500 text-xs uppercase tracking-wider block mb-1">Horário</span>
                Seg-Sex: 10:30 - 15:00
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-stone-500 text-xs">
            © {new Date().getFullYear()} Tempero Da Erica. Todos os direitos reservados.
          </p>
          <p className="text-stone-500 text-xs flex items-center gap-1">
            Feito com <Heart size={12} className="text-red-500 fill-red-500" /> em Rio Largo, AL
          </p>
        </div>
      </div>
    </footer>
  );
}
