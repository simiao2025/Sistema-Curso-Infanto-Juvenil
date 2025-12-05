import React from 'react';
import { PlayCircle, Star, Calendar, FileText } from 'lucide-react';
import { Card, Button } from '../../components/ui/Components';

export const StudentDashboard: React.FC = () => {
  return (
    <div className="p-6 max-w-7xl mx-auto space-y-6">
      
      {/* Welcome Banner */}
      <div className="bg-gradient-to-r from-ibuc-blue to-blue-400 rounded-2xl p-8 text-white shadow-lg relative overflow-hidden">
        <div className="relative z-10">
          <h1 className="text-3xl font-bold mb-2">Olá, Davi! 🚀</h1>
          <p className="opacity-90 text-lg">Você está no nível <span className="font-bold text-ibuc-yellow">Exploradores da Fé</span>.</p>
          <div className="mt-6 w-full max-w-md bg-white/20 rounded-full h-4 backdrop-blur-sm">
            <div className="bg-ibuc-yellow h-4 rounded-full" style={{ width: '65%' }}></div>
          </div>
          <p className="mt-2 text-sm opacity-80">65% do curso concluído. Continue assim!</p>
        </div>
        <Star className="absolute right-10 top-10 text-white/10 w-48 h-48 rotate-12" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Next Lesson */}
        <div className="lg:col-span-2">
            <h2 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                <PlayCircle className="text-ibuc-red" />
                Próxima Lição
            </h2>
            <Card className="border-l-4 border-ibuc-red bg-white hover:shadow-md transition-shadow cursor-pointer group">
                <div className="flex flex-col md:flex-row gap-6">
                    <div className="w-full md:w-48 h-32 bg-gray-200 rounded-lg overflow-hidden relative">
                        <img src="https://picsum.photos/400/300" alt="Lesson thumbnail" className="w-full h-full object-cover" />
                        <div className="absolute inset-0 bg-black/30 flex items-center justify-center group-hover:bg-black/10 transition-colors">
                            <PlayCircle className="w-12 h-12 text-white opacity-90" />
                        </div>
                    </div>
                    <div className="flex-1">
                        <span className="bg-red-100 text-red-800 text-xs font-semibold px-2.5 py-0.5 rounded">Lição 14</span>
                        <h3 className="text-xl font-bold text-gray-900 mt-2">A Arca de Noé</h3>
                        <p className="text-gray-600 mt-2 line-clamp-2">Nesta lição, aprenderemos sobre a obediência de Noé e a promessa de Deus através do arco-íris.</p>
                        <div className="mt-4">
                            <Button variant="red" className="w-full md:w-auto">Assistir Agora</Button>
                        </div>
                    </div>
                </div>
            </Card>

            <h2 className="text-xl font-bold text-gray-800 mt-8 mb-4">Minhas Conquistas</h2>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="bg-white p-4 rounded-xl border border-gray-100 text-center shadow-sm">
                        <div className="w-12 h-12 mx-auto bg-yellow-100 rounded-full flex items-center justify-center mb-2">
                            <Star className="w-6 h-6 text-yellow-600 fill-current" />
                        </div>
                        <p className="font-bold text-gray-800 text-sm">Leitor Ávido</p>
                        <p className="text-xs text-gray-400">Leu 5 lições</p>
                    </div>
                ))}
            </div>
        </div>

        {/* Sidebar Info */}
        <div className="space-y-6">
            <Card title="Calendário" color="green">
                <div className="flex items-center justify-between mb-4 bg-green-50 p-3 rounded-lg border border-green-100">
                    <div className="flex items-center gap-3">
                        <Calendar className="text-ibuc-green" />
                        <div>
                            <p className="font-bold text-gray-800">Domingo, 14 Out</p>
                            <p className="text-xs text-gray-500">Próxima Aula Presencial</p>
                        </div>
                    </div>
                </div>
                <div className="space-y-2">
                    <p className="text-sm font-medium text-gray-500">Frequência este mês</p>
                    <div className="flex gap-1">
                        {[...Array(4)].map((_, i) => (
                            <div key={i} className={`h-8 flex-1 rounded ${i < 3 ? 'bg-ibuc-green' : 'bg-gray-200'}`} title={i < 3 ? "Presente" : "Futuro"}></div>
                        ))}
                    </div>
                    <p className="text-xs text-right text-gray-400">3/4 Aulas</p>
                </div>
            </Card>

            <Card title="Boletim Rápido" color="blue">
                <div className="space-y-3">
                    <div className="flex justify-between items-center">
                        <span className="text-sm text-gray-600">Bíblia</span>
                        <span className="font-bold text-ibuc-blue">9.5</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                        <div className="bg-ibuc-blue h-2 rounded-full" style={{ width: '95%' }}></div>
                    </div>
                    
                    <div className="flex justify-between items-center mt-2">
                        <span className="text-sm text-gray-600">Atividades</span>
                        <span className="font-bold text-ibuc-blue">8.0</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                        <div className="bg-ibuc-blue h-2 rounded-full" style={{ width: '80%' }}></div>
                    </div>
                    
                    <Button variant="outline" className="w-full mt-4 text-xs">
                        <FileText className="w-4 h-4 mr-2" />
                        Ver Boletim Completo
                    </Button>
                </div>
            </Card>
        </div>
      </div>
    </div>
  );
};
