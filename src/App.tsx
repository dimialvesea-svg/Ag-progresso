import { 
  Printer, 
  Droplet, 
  Settings, 
  MapPin, 
  Phone, 
  Clock, 
  Star, 
  CheckCircle2, 
  ArrowRight,
  MessageCircle,
  ShieldCheck,
  Zap
} from 'lucide-react';
import { motion } from 'motion/react';

const SERVICES = [
  {
    title: "Cartuchos",
    description: "Cartuchos de tinta para todas as marcas e modelos com o melhor rendimento.",
    icon: <Droplet className="w-8 h-8 text-brand-secondary" />,
  },
  {
    title: "Toners",
    description: "Toners premium para impressoras laser, garantindo impressões nítidas e profissionais.",
    icon: <Printer className="w-8 h-8 text-brand-secondary" />,
  },
  {
    title: "Tintas",
    description: "Tintas específicas para Bulk Ink e Ecotank, mantendo sua impressora sempre pronta.",
    icon: <Zap className="w-8 h-8 text-brand-secondary" />,
  },
  {
    title: "Assistência Técnica",
    description: "Manutenção especializada em impressoras jato de tinta e laser em Vitória.",
    icon: <Settings className="w-8 h-8 text-brand-secondary" />,
  },
];

const REVIEWS = [
  {
    name: "Rosi Moraes",
    text: "Compromisso com o cliente em primeiro lugar recomendo.",
    rating: 5,
  },
  {
    name: "Leonardo Farias",
    text: "Atendimento e preços excelentes.",
    rating: 5,
  },
];

const WHATSAPP_LINK = "https://wa.me/5527995260812";

export default function App() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="bg-brand-primary p-1.5 rounded-lg">
              <Printer className="text-white w-6 h-6" />
            </div>
            <span className="text-xl font-bold font-display tracking-tighter">AG <span className="text-brand-secondary">CARTUCHOS</span></span>
          </div>
          
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600">
            <a href="#services" className="hover:text-brand-primary transition-colors">Serviços</a>
            <a href="#location" className="hover:text-brand-primary transition-colors">Localização</a>
            <a href="#reviews" className="hover:text-brand-primary transition-colors">Avaliações</a>
          </div>

          <a 
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-brand-primary text-white px-5 py-2 rounded-full font-semibold hover:bg-brand-secondary transition-all transform hover:scale-105 active:scale-95 text-sm"
          >
            <MessageCircle className="w-4 h-4" />
            <span>WhatsApp</span>
          </a>
        </div>
      </header>

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative pt-20 pb-32 overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 relative z-10">
            <div className="max-w-3xl">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <div className="inline-flex items-center gap-2 bg-blue-50 text-brand-primary px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-6">
                  <ShieldCheck className="w-4 h-4" />
                  <span>Excelência em VITÓRIA</span>
                </div>
                <h1 className="text-5xl md:text-7xl font-bold leading-[1.1] mb-8">
                  Sua Impressora em <span className="text-brand-secondary">Boas Mãos</span>
                </h1>
                <p className="text-xl text-slate-600 mb-10 leading-relaxed max-w-2xl">
                  Especialistas em cartuchos, toners, tintas e manutenção técnica. Garantia de qualidade e o melhor preço do Centro de Vitória.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <a 
                    href={WHATSAPP_LINK}
                    className="flex items-center justify-center gap-3 bg-brand-primary text-white px-8 py-4 rounded-xl font-bold shadow-lg shadow-blue-200 hover:shadow-xl transition-all"
                  >
                    <span>Solicitar Orçamento</span>
                    <ArrowRight className="w-5 h-5" />
                  </a>
                  <a 
                    href="#services"
                    className="flex items-center justify-center gap-3 bg-white border border-slate-200 text-slate-700 px-8 py-4 rounded-xl font-bold hover:bg-slate-50 transition-all"
                  >
                    Ver Serviços
                  </a>
                </div>

                <div className="mt-12 flex items-center gap-6">
                  <div className="flex -space-x-2">
                    {[1, 2, 3, 4].map(i => (
                      <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-slate-200 flex items-center justify-center text-[10px] font-bold text-slate-500 overflow-hidden">
                        <img src={`https://i.pravatar.cc/100?u=${i}`} alt="User" />
                      </div>
                    ))}
                  </div>
                  <div>
                    <div className="flex items-center gap-1 mb-0.5">
                      {[1, 2, 3, 4, 5].map(i => <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />)}
                    </div>
                    <p className="text-sm text-slate-500 font-medium">4.0 (15 avaliações no Google)</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
          
          {/* Decorative background elements */}
          <div className="absolute top-0 right-0 w-1/2 h-full bg-slate-50 -z-10 rounded-l-[100px] hidden lg:block">
            <div className="h-full w-full flex items-center justify-center p-20 opacity-20 grayscale brightness-110">
               <Printer className="w-full h-full text-brand-primary" />
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-24 bg-slate-50">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <h2 className="text-4xl font-bold mb-4">Nossos Serviços</h2>
              <p className="text-slate-600">Oferecemos soluções completas para suas necessidades de impressão, com peças originais e compatíveis de alta qualidade.</p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {SERVICES.map((service, idx) => (
                <motion.div 
                  key={idx}
                  whileHover={{ y: -10 }}
                  className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm hover:shadow-xl transition-all"
                >
                  <div className="mb-6 w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed">{service.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Reviews Section */}
        <section id="reviews" className="py-24">
          <div className="max-w-7xl mx-auto px-4">
            <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-16">
              <div className="max-w-2xl">
                <h2 className="text-4xl font-bold mb-4">O que dizem nossos clientes</h2>
                <p className="text-slate-600">A satisfação de quem confia na AG Cartuchos há anos.</p>
              </div>
              <div className="flex gap-2">
                <button className="w-12 h-12 rounded-full border border-slate-200 flex items-center justify-center hover:bg-slate-50 transition-colors">
                  <ArrowRight className="w-5 h-5 rotate-180" />
                </button>
                <button className="w-12 h-12 rounded-full bg-brand-primary text-white flex items-center justify-center hover:bg-brand-secondary transition-colors">
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {REVIEWS.map((review, idx) => (
                <div key={idx} className="bg-slate-50 p-10 rounded-3xl border border-slate-100 italic relative">
                  <div className="absolute top-8 right-8 text-brand-secondary/20">
                    <Star className="w-12 h-12 fill-current" />
                  </div>
                  <div className="flex gap-1 mb-6">
                    {Array.from({ length: review.rating }).map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <p className="text-lg text-slate-700 mb-8 leading-relaxed">
                    "{review.text}"
                  </p>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-brand-primary/10 flex items-center justify-center text-brand-primary font-bold">
                      {review.name[0]}
                    </div>
                    <span className="font-bold text-slate-900 not-italic">{review.name}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Info / Location Section */}
        <section id="location" className="py-24 bg-brand-primary text-white overflow-hidden relative">
          <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-8">Onde nos encontrar</h2>
              
              <div className="space-y-8">
                <div className="flex gap-6">
                  <div className="w-14 h-14 rounded-2xl bg-white/10 flex-shrink-0 flex items-center justify-center">
                    <MapPin className="w-7 h-7" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1 underline decoration-brand-secondary underline-offset-4">Endereço</h4>
                    <p className="text-white/80">R. Gama Rosa, 140 - Centro, Vitória - ES, 29015-100</p>
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="w-14 h-14 rounded-2xl bg-white/10 flex-shrink-0 flex items-center justify-center">
                    <Clock className="w-7 h-7" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1 underline decoration-brand-secondary underline-offset-4">Horário</h4>
                    <p className="text-white/80">Segunda à Sexta: 08:00 - 18:00</p>
                    <p className="text-white/80">Sábado: Sob consulta</p>
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="w-14 h-14 rounded-2xl bg-white/10 flex-shrink-0 flex items-center justify-center">
                    <Phone className="w-7 h-7" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1 underline decoration-brand-secondary underline-offset-4">Contato</h4>
                    <p className="text-white/80">(27) 99526-0812 (WhatsApp)</p>
                  </div>
                </div>

                <div className="pt-6">
                  <a 
                    href="https://maps.apple.com/?address=R.+Gama+Rosa,+140+-+Centro,+Vit%C3%B3ria+-+ES,+29015-100"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-white font-bold hover:text-brand-secondary transition-colors"
                  >
                    <span>Ver no Google Maps</span>
                    <ArrowRight className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="aspect-square bg-slate-900/20 rounded-3xl border border-white/10 overflow-hidden backdrop-blur-sm p-4">
                <div className="w-full h-full rounded-2xl bg-slate-800 flex items-center justify-center text-slate-500 text-center p-8 bg-[url('https://images.unsplash.com/photo-1524234107056-1c1f48f64ab8?auto=format&fit=crop&q=80&w=800')] bg-cover bg-center">
                   <div className="bg-black/50 p-6 rounded-xl backdrop-blur-md border border-white/20">
                     <p className="text-white font-bold text-xl mb-2">Visite nossa loja no Centro</p>
                     <p className="text-white/70 text-sm italic">Próximo ao comércio central de Vitória</p>
                   </div>
                </div>
              </div>
              {/* Floating Badge */}
              <div className="absolute -bottom-6 -left-6 bg-white text-brand-primary p-6 rounded-2xl shadow-2xl">
                 <p className="text-2xl font-black font-display leading-none mb-1 text-brand-secondary tracking-tighter">VITÓRIA & REGIÃO</p>
                 <p className="text-[10px] font-bold uppercase tracking-widest opacity-60">Atendemos as proximidades</p>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-24">
          <div className="max-w-5xl mx-auto px-4">
            <div className="bg-slate-950 rounded-[40px] p-12 md:p-20 relative overflow-hidden text-center">
              <div className="relative z-10">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">Precisando recarregar ou consertar sua impressora?</h2>
                <p className="text-white/60 text-lg mb-12 max-w-2xl mx-auto">Não pare sua produtividade. Entre em contato agora e receba um orçamento rápido via WhatsApp.</p>
                <a 
                  href={WHATSAPP_LINK}
                  className="inline-flex items-center gap-3 bg-brand-secondary hover:bg-blue-400 text-white px-10 py-5 rounded-2xl font-bold text-lg transition-all transform hover:scale-105 active:scale-95"
                >
                  <MessageCircle className="w-6 h-6" />
                  <span>Chamar no WhatsApp</span>
                </a>
              </div>
              {/* Background Glow */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-brand-primary/20 blur-[120px] rounded-full"></div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-slate-50 py-12 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-2">
            <div className="bg-brand-primary p-1 rounded">
              <Printer className="text-white w-4 h-4" />
            </div>
            <span className="font-bold font-display tracking-tight">AG <span className="text-brand-secondary">CARTUCHOS</span></span>
          </div>
          
          <p className="text-slate-400 text-sm">© 2026 AG Cartuchos. Todos os direitos reservados.</p>
          
          <div className="flex items-center gap-6 text-slate-400">
             <a href="#" className="hover:text-brand-primary">Instagram</a>
             <a href="#" className="hover:text-brand-primary">Facebook</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
