import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { GraduationCap, ArrowRight, Star, BookOpen, Users, Heart, Menu, X, Mail, Phone, MapPin, CheckCircle } from 'lucide-react';
import { Button } from '../components/ui/Components';

export const LandingPage: React.FC = () => {
  const navigate = useNavigate();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMenu = () => setMobileMenuOpen(!mobileMenuOpen);

  const levels = [
    {
      id: 1,
      name: 'Jardim da Fé',
      age: '2-4 anos',
      color: 'bg-ibuc-yellow',
      borderColor: 'border-ibuc-yellow',
      textColor: 'text-yellow-900',
      icon: Heart,
      desc: 'Primeiros passos no amor de Deus com histórias bíblicas simples e lúdicas.'
    },
    {
      id: 2,
      name: 'Exploradores',
      age: '5-8 anos',
      color: 'bg-ibuc-blue',
      borderColor: 'border-ibuc-blue',
      textColor: 'text-blue-900',
      icon: BookOpen,
      desc: 'Descobrindo os heróis da fé e as aventuras do Antigo e Novo Testamento.'
    },
    {
      id: 3,
      name: 'Conquistadores',
      age: '9-12 anos',
      color: 'bg-ibuc-green',
      borderColor: 'border-ibuc-green',
      textColor: 'text-green-900',
      icon: Star,
      desc: 'Aprofundamento doutrinário e aplicação prática dos ensinamentos de Jesus.'
    },
    {
      id: 4,
      name: 'Guardiões',
      age: '13-16 anos',
      color: 'bg-ibuc-red',
      borderColor: 'border-ibuc-red',
      textColor: 'text-red-900',
      icon: Users,
      desc: 'Teologia sólida, apologética e preparação para a liderança cristã.'
    }
  ];

  return (
    <div className="min-h-screen bg-white flex flex-col font-sans scroll-smooth">
      {/* Navbar */}
      <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-md border-b border-gray-100 z-50 transition-all">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <div className="flex items-center gap-2 cursor-pointer" onClick={() => window.scrollTo(0, 0)}>
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-ibuc-blue to-ibuc-green flex items-center justify-center text-white font-bold shadow-lg text-xl">
                I
              </div>
              <span className="text-2xl font-bold text-gray-800 tracking-tight">
                IBUC <span className="text-ibuc-blue">System</span>
              </span>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#niveis" className="text-gray-600 hover:text-ibuc-blue transition-colors font-medium text-sm uppercase tracking-wide">Níveis</a>
              <a href="#sobre" className="text-gray-600 hover:text-ibuc-blue transition-colors font-medium text-sm uppercase tracking-wide">Sobre</a>
              <a href="#contato" className="text-gray-600 hover:text-ibuc-blue transition-colors font-medium text-sm uppercase tracking-wide">Contato</a>
            </div>

            {/* Desktop Actions */}
            <div className="hidden md:flex items-center gap-4">
              <Button 
                variant="outline" 
                className="border-ibuc-red text-ibuc-red hover:bg-red-50"
                onClick={() => navigate('/login')}
              >
                Área Administrativa
              </Button>
              <Button 
                variant="blue" 
                onClick={() => navigate('/login')} 
                className="shadow-lg shadow-blue-200"
              >
                <GraduationCap className="w-4 h-4 mr-2" />
                Portal do Aluno
              </Button>
            </div>

            {/* Mobile Toggle */}
            <div className="md:hidden">
              <button onClick={toggleMenu} className="text-gray-600 hover:text-ibuc-blue p-2">
                {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-100 absolute w-full shadow-xl animate-in slide-in-from-top-5">
            <div className="px-4 pt-4 pb-6 space-y-4 flex flex-col">
              <a href="#niveis" onClick={toggleMenu} className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-ibuc-blue hover:bg-blue-50">Níveis</a>
              <a href="#sobre" onClick={toggleMenu} className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-ibuc-blue hover:bg-blue-50">Sobre</a>
              <a href="#contato" onClick={toggleMenu} className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-ibuc-blue hover:bg-blue-50">Contato</a>
              <div className="border-t border-gray-100 my-2 pt-2 space-y-3">
                <Button variant="outline" className="w-full justify-center border-ibuc-red text-ibuc-red" onClick={() => navigate('/login')}>
                  Área Administrativa
                </Button>
                <Button variant="blue" className="w-full justify-center" onClick={() => navigate('/login')}>
                  Portal do Aluno
                </Button>
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-blue-50/50 to-white relative overflow-hidden">
        {/* Background Decorative Blobs */}
        <div className="absolute top-20 right-0 w-96 h-96 bg-ibuc-yellow/10 rounded-full blur-3xl -z-10 animate-pulse"></div>
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-ibuc-blue/10 rounded-full blur-3xl -z-10"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-gray-100 rounded-full -z-20 opacity-50"></div>
        
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <span className="inline-flex items-center py-1 px-4 rounded-full bg-blue-100 text-ibuc-blue text-sm font-bold mb-8 shadow-sm animate-in fade-in slide-in-from-bottom-4 duration-500 border border-blue-200">
            <Star className="w-4 h-4 mr-2 fill-current" />
            Matrículas Abertas para 2024
          </span>
          
          <h1 className="text-5xl md:text-7xl font-extrabold text-gray-900 tracking-tight mb-8 leading-tight animate-in fade-in slide-in-from-bottom-5 duration-700">
            Ensino Teológico <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-ibuc-blue via-ibuc-green to-ibuc-yellow">
              Que Transforma
            </span>
          </h1>
          
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-600 mb-10 leading-relaxed animate-in fade-in slide-in-from-bottom-6 duration-700">
            Uma plataforma completa para crianças e adolescentes de 2 a 16 anos. 
            Conectando a nova geração aos princípios eternos da Palavra de Deus.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4 animate-in fade-in slide-in-from-bottom-7 duration-1000">
            <Button variant="green" className="text-lg px-8 py-4 shadow-lg shadow-green-200 hover:shadow-xl hover:-translate-y-1 transition-all" onClick={() => navigate('/login')}>
              Começar Agora
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            <Button variant="outline" className="text-lg px-8 py-4 bg-white hover:bg-gray-50 text-gray-700 border-gray-300">
              Conhecer a Grade
            </Button>
          </div>
        </div>
      </section>

      {/* Níveis Section */}
      <section id="niveis" className="py-24 bg-white scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Jornada de Aprendizado</h2>
            <div className="w-20 h-1 bg-ibuc-blue mx-auto mt-4 rounded-full"></div>
            <p className="mt-4 text-lg text-gray-500 max-w-2xl mx-auto">Um currículo estruturado respeitando cada fase cognitiva e espiritual do desenvolvimento.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {levels.map((level) => (
              <div key={level.id} className={`bg-white rounded-2xl shadow-sm hover:shadow-2xl transition-all duration-300 p-8 border-t-4 ${level.borderColor} group relative overflow-hidden`}>
                <div className={`w-16 h-16 rounded-2xl ${level.color} bg-opacity-10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <level.icon className={`w-8 h-8 ${level.textColor}`} />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{level.name}</h3>
                <span className={`inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide ${level.color} bg-opacity-20 ${level.textColor}`}>
                  {level.age}
                </span>
                <p className="mt-4 text-gray-600 text-sm leading-relaxed">
                  {level.desc}
                </p>
                <div className="mt-6 pt-6 border-t border-gray-100">
                    <span className="text-sm font-semibold text-gray-400 group-hover:text-gray-600 transition-colors flex items-center">
                        Ver detalhes <ArrowRight className="w-4 h-4 ml-1 opacity-0 group-hover:opacity-100 transition-all transform group-hover:translate-x-1" />
                    </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sobre Section (Novo) */}
      <section id="sobre" className="py-24 bg-gray-50 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
            <div className="mb-12 lg:mb-0 relative">
                <div className="absolute inset-0 bg-gradient-to-tr from-ibuc-blue to-ibuc-green transform rotate-3 rounded-2xl opacity-100 blur-sm translate-x-2 translate-y-2"></div>
                <img 
                    src="https://images.unsplash.com/photo-1544717305-2782549b5136?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                    alt="Estudantes" 
                    className="relative rounded-2xl shadow-2xl z-10 w-full object-cover h-[500px]"
                />
                
                {/* Stats Floating Card */}
                <div className="absolute -bottom-10 -right-10 z-20 bg-white p-6 rounded-xl shadow-xl border border-gray-100 hidden md:block">
                    <div className="flex items-center gap-4">
                        <div className="bg-green-100 p-3 rounded-full text-green-600">
                            <Users size={24} />
                        </div>
                        <div>
                            <p className="text-3xl font-bold text-gray-900">+1.200</p>
                            <p className="text-sm text-gray-500">Alunos formados</p>
                        </div>
                    </div>
                </div>
            </div>
            
            <div>
              <span className="text-ibuc-blue font-bold tracking-wider uppercase text-sm">Sobre o IBUC System</span>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 mt-2">Tecnologia a favor do Reino</h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                O IBUC System não é apenas uma plataforma de ensino, é um ecossistema completo para igrejas e instituições de ensino teológico que desejam elevar o nível da educação cristã infanto-juvenil.
              </p>
              
              <div className="space-y-4">
                {[
                    "Material didático 100% bíblico e interativo",
                    "Acompanhamento pedagógico em tempo real",
                    "Ambiente gamificado para engajamento dos alunos",
                    "Gestão administrativa simplificada para igrejas"
                ].map((item, index) => (
                    <div key={index} className="flex items-start">
                        <CheckCircle className="w-6 h-6 text-ibuc-green mt-0.5 mr-3 flex-shrink-0" />
                        <span className="text-gray-700">{item}</span>
                    </div>
                ))}
              </div>

              <div className="mt-10">
                <Button variant="blue" onClick={() => navigate('/login')}>
                    Conhecer a Plataforma
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contato Section (Novo) */}
      <section id="contato" className="py-24 bg-white scroll-mt-20 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-ibuc-yellow via-ibuc-red to-ibuc-blue"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
                <h2 className="text-3xl font-bold text-gray-900">Fale Conosco</h2>
                <p className="mt-4 text-gray-500">Estamos prontos para atender sua igreja e família.</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="bg-blue-50 p-8 rounded-2xl text-center border border-blue-100 hover:shadow-lg transition-shadow">
                    <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center mx-auto mb-4 text-ibuc-blue shadow-sm">
                        <Phone />
                    </div>
                    <h3 className="font-bold text-lg text-gray-900 mb-2">Telefone</h3>
                    <p className="text-gray-600">(11) 99999-0000</p>
                    <p className="text-gray-500 text-sm mt-1">Seg a Sex, 9h às 18h</p>
                </div>

                <div className="bg-green-50 p-8 rounded-2xl text-center border border-green-100 hover:shadow-lg transition-shadow">
                    <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center mx-auto mb-4 text-ibuc-green shadow-sm">
                        <Mail />
                    </div>
                    <h3 className="font-bold text-lg text-gray-900 mb-2">E-mail</h3>
                    <p className="text-gray-600">contato@ibucsystem.com</p>
                    <p className="text-gray-500 text-sm mt-1">Resposta em até 24h</p>
                </div>

                <div className="bg-yellow-50 p-8 rounded-2xl text-center border border-yellow-100 hover:shadow-lg transition-shadow">
                    <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center mx-auto mb-4 text-ibuc-yellow shadow-sm">
                        <MapPin />
                    </div>
                    <h3 className="font-bold text-lg text-gray-900 mb-2">Localização</h3>
                    <p className="text-gray-600">Av. Paulista, 1000</p>
                    <p className="text-gray-500 text-sm mt-1">São Paulo - SP</p>
                </div>
            </div>
            
            {/* Newsletter */}
            <div className="mt-16 bg-gray-900 rounded-3xl p-8 md:p-12 text-center relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-5 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
                
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 relative z-10">
                    Inscreva-se para novidades
                </h3>
                <p className="text-gray-400 mb-8 max-w-2xl mx-auto relative z-10">
                    Receba conteúdos exclusivos sobre educação cristã e atualizações da plataforma.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto relative z-10">
                    <input 
                        type="email" 
                        placeholder="Seu melhor e-mail" 
                        className="flex-1 px-6 py-3 rounded-lg bg-gray-800 border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-ibuc-blue"
                    />
                    <Button variant="blue" className="px-8">Inscrever</Button>
                </div>
            </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-50 pt-16 pb-8 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
                <div className="col-span-1 md:col-span-2">
                    <div className="flex items-center gap-2 mb-6">
                        <div className="w-8 h-8 rounded-lg bg-ibuc-blue flex items-center justify-center text-white font-bold">I</div>
                        <span className="text-xl font-bold text-gray-800">IBUC System</span>
                    </div>
                    <p className="text-gray-500 max-w-sm leading-relaxed">
                        Transformando vidas através do ensino da palavra de Deus para crianças e adolescentes, com tecnologia de ponta e compromisso bíblico.
                    </p>
                </div>
                <div>
                    <h4 className="font-bold text-gray-900 mb-6">Plataforma</h4>
                    <ul className="space-y-4 text-gray-500">
                        <li><a href="#" className="hover:text-ibuc-blue transition-colors">Home</a></li>
                        <li><a href="#niveis" className="hover:text-ibuc-blue transition-colors">Níveis de Ensino</a></li>
                        <li><a href="/login" className="hover:text-ibuc-blue transition-colors">Área do Aluno</a></li>
                        <li><a href="/login" className="hover:text-ibuc-blue transition-colors">Área Administrativa</a></li>
                    </ul>
                </div>
                <div>
                    <h4 className="font-bold text-gray-900 mb-6">Legal</h4>
                    <ul className="space-y-4 text-gray-500">
                        <li><a href="#" className="hover:text-ibuc-blue transition-colors">Termos de Uso</a></li>
                        <li><a href="#" className="hover:text-ibuc-blue transition-colors">Privacidade</a></li>
                        <li><a href="#" className="hover:text-ibuc-blue transition-colors">Suporte</a></li>
                    </ul>
                </div>
            </div>
            <div className="border-t border-gray-200 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
                <p>&copy; 2024 IBUC System. Todos os direitos reservados.</p>
                <div className="flex gap-4 mt-4 md:mt-0">
                    <span>Desenvolvido com ❤️ para o Reino</span>
                </div>
            </div>
        </div>
      </footer>
    </div>
  );
};