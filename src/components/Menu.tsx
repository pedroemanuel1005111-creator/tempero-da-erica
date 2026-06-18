import { ArrowRight } from 'lucide-react';

export default function Menu() {
  const whatsappUrl = 'https://wa.me/5582988211541?text=Olá! Gostaria de fazer um pedido.';

  const menuItems = [
    {
      name: 'Frango Frito',
      description: 'Frango crocante por fora, suculento por dentro, temperado com especiarias da casa.',
      image: 'https://images.pexels.com/photos/36605427/pexels-photo-36605427.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=400&w=600',
      tag: 'Mais Pedido',
    },
    {
      name: 'Bife ao Molho',
      description: 'Bife macio ao molho especial da casa, acompanhado de arroz, feijão e salada.',
      image: 'https://images.pexels.com/photos/8764748/pexels-photo-8764748.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=400&w=600',
      tag: 'Destaque',
    },
    {
      name: 'Prato Executivo',
      description: 'Opção completa com proteína, arroz, feijão, farofa, salada e acompanhamentos.',
      image: 'https://images.pexels.com/photos/34472662/pexels-photo-34472662.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=400&w=600',
      tag: 'Popular',
    },
    {
      name: 'Marmita Completa',
      description: 'Refeição completa para levar, com variedade de carnes e acompanhamentos frescos.',
      image: 'https://images.pexels.com/photos/32655181/pexels-photo-32655181.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=400&w=600',
      tag: 'Para Viagem',
    },
    {
      name: 'Prato do Dia',
      description: 'Prato especial que muda diariamente, sempre com ingredientes frescos e sabor único.',
      image: 'https://images.pexels.com/photos/34520961/pexels-photo-34520961.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=400&w=600',
      tag: 'Novidade',
    },
    {
      name: 'Sobremesa da Casa',
      description: 'Finalize sua refeição com nossas sobremesas caseiras feitas com muito carinho.',
      image: 'https://images.pexels.com/photos/34520946/pexels-photo-34520946.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=400&w=600',
      tag: 'Especial',
    },
  ];

  const tagColors: Record<string, string> = {
    'Mais Pedido': 'bg-red-500',
    'Destaque': 'bg-amber-600',
    'Popular': 'bg-green-600',
    'Para Viagem': 'bg-blue-600',
    'Novidade': 'bg-purple-600',
    'Especial': 'bg-pink-600',
  };

  return (
    <section id="cardapio" className="py-24 bg-stone-50 relative">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-[0.02]" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
      }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-amber-600 font-semibold text-sm tracking-widest uppercase">
            Nosso Cardápio
          </span>
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-stone-800 mt-3 mb-4"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Destaques do <span className="text-amber-600">Menu</span>
          </h2>
          <p className="text-stone-500 text-lg max-w-2xl mx-auto">
            Pratos preparados diariamente com ingredientes frescos e o tempero especial que só a Erica tem.
          </p>
          <div className="mt-4 inline-flex items-center gap-2 bg-amber-50 text-amber-700 px-5 py-2 rounded-full text-sm font-medium">
            <span className="font-bold">R$ 20–40</span>
            <span className="text-amber-500">por pessoa</span>
          </div>
        </div>

        {/* Menu Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {menuItems.map((item) => (
            <a
              key={item.name}
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl hover:shadow-stone-200/50 transition-all duration-500 hover:-translate-y-2 border border-stone-100"
            >
              <div className="relative overflow-hidden">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-52 object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <span
                  className={`absolute top-4 left-4 ${tagColors[item.tag] || 'bg-amber-600'} text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-lg`}
                >
                  {item.tag}
                </span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-stone-800 mb-2 group-hover:text-amber-700 transition-colors" style={{ fontFamily: "'Playfair Display', serif" }}>
                  {item.name}
                </h3>
                <p className="text-stone-500 text-sm leading-relaxed mb-4">
                  {item.description}
                </p>
                <div className="flex items-center text-amber-600 font-semibold text-sm gap-2 group-hover:gap-3 transition-all">
                  Pedir agora
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-14">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-full text-base font-semibold transition-all duration-300 hover:shadow-xl hover:shadow-green-600/30 hover:-translate-y-1"
          >
            <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current" xmlns="http://www.w3.org/2000/svg">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            Ver Cardápio Completo no WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
