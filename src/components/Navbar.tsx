import { useState } from 'react';
import { Menu, X } from 'lucide-react';

function InstagramIcon({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <circle cx="12" cy="12" r="5" />
      <circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" stroke="none" />
    </svg>
  );
}

interface NavbarProps {
  scrolled: boolean;
}

export default function Navbar({ scrolled }: NavbarProps) {
  const [mobileOpen, setMobileOpen] = useState(false);

  const links = [
    { label: 'Início', href: '#inicio' },
    { label: 'Sobre', href: '#sobre' },
    { label: 'Cardápio', href: '#cardapio' },
    { label: 'Avaliações', href: '#avaliacoes' },
    { label: 'Contato', href: '#contato' },
  ];

  const whatsappUrl = 'https://wa.me/5582988211541?text=Olá! Gostaria de fazer um pedido.';

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-md shadow-lg shadow-stone-200/50'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="#inicio" className="flex items-center gap-3 group">
            <div className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-500 ${
              scrolled ? 'bg-amber-600' : 'bg-white/20 backdrop-blur-sm'
            }`}>
              <span className="text-xl">🍽️</span>
            </div>
            <div>
              <h1
                className={`text-xl font-bold transition-colors duration-500 tracking-tight ${
                  scrolled ? 'text-stone-800' : 'text-white'
                }`}
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                Tempero Da Erica
              </h1>
            </div>
          </a>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-8">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`text-sm font-medium transition-all duration-300 hover:opacity-100 ${
                  scrolled
                    ? 'text-stone-600 hover:text-amber-700'
                    : 'text-white/80 hover:text-white'
                }`}
              >
                {link.label}
              </a>
            ))}
            <a
              href="https://www.instagram.com/temperodaerica/"
              target="_blank"
              rel="noopener noreferrer"
              className={`transition-colors duration-300 ${
                scrolled ? 'text-stone-500 hover:text-pink-600' : 'text-white/80 hover:text-white'
              }`}
            >
              <InstagramIcon size={20} />
            </a>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-amber-600 hover:bg-amber-700 text-white px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-amber-600/30 hover:-translate-y-0.5"
            >
              Fazer Pedido
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className={`md:hidden p-2 rounded-lg transition-colors ${
              scrolled ? 'text-stone-700' : 'text-white'
            }`}
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-500 ${
          mobileOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="bg-white/95 backdrop-blur-md border-t border-stone-100 px-4 py-4 space-y-1">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="block px-4 py-3 text-stone-700 hover:text-amber-700 hover:bg-amber-50 rounded-lg text-sm font-medium transition-colors"
            >
              {link.label}
            </a>
          ))}
          <div className="pt-2 flex gap-3">
            <a
              href="https://www.instagram.com/temperodaerica/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-3 text-stone-500 hover:text-pink-600 text-sm font-medium transition-colors"
            >
              <InstagramIcon size={18} /> Instagram
            </a>
          </div>
          <div className="pt-2">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="block text-center bg-amber-600 hover:bg-amber-700 text-white px-5 py-3 rounded-xl text-sm font-semibold transition-colors"
            >
              Fazer Pedido via WhatsApp
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
