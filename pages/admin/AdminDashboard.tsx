import React from 'react';
import { Users, GraduationCap, DollarSign, BookOpen } from 'lucide-react';
import { StatCard, Card } from '../../components/ui/Components';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';

export const AdminDashboard: React.FC = () => {
  // Mock Data
  const stats = [
    { title: 'Total de Alunos', value: '1,240', icon: Users, color: 'blue' as const, subtext: '+12% este mês' },
    { title: 'Turmas Ativas', value: '42', icon: GraduationCap, color: 'green' as const, subtext: '4 níveis ativos' },
    { title: 'Faturamento Mensal', value: 'R$ 48.2k', icon: DollarSign, color: 'yellow' as const, subtext: '92% adimplência' },
    { title: 'Lições Concluídas', value: '8,430', icon: BookOpen, color: 'red' as const, subtext: 'Média de 85%' },
  ];

  const enrollmentData = [
    { name: 'Jardim da Fé', alunos: 320 },
    { name: 'Exploradores', alunos: 450 },
    { name: 'Conquistadores', alunos: 300 },
    { name: 'Guardiões', alunos: 170 },
  ];

  const financialData = [
    { name: 'Pago', value: 92 },
    { name: 'Pendente', value: 5 },
    { name: 'Atrasado', value: 3 },
  ];

  const COLORS = ['#10B981', '#FBBF24', '#F43F5E'];

  return (
    <div className="p-6 space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-800">Visão Geral Administrativa</h1>
        <div className="flex space-x-2">
            <span className="text-sm text-gray-500 bg-white px-3 py-1 rounded-full border border-gray-200">
                Ano Letivo: 2024
            </span>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <StatCard key={index} {...stat} />
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Main Chart */}
        <Card title="Alunos por Nível" className="lg:col-span-2">
          <div className="h-72 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={enrollmentData}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} />
                <XAxis dataKey="name" axisLine={false} tickLine={false} />
                <YAxis axisLine={false} tickLine={false} />
                <Tooltip cursor={{ fill: '#F3F4F6' }} />
                <Bar dataKey="alunos" fill="#3B82F6" radius={[4, 4, 0, 0]} barSize={40} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </Card>

        {/* Financial Pie Chart */}
        <Card title="Status Financeiro (Mês)">
          <div className="h-72 w-full flex flex-col items-center justify-center">
            <ResponsiveContainer width="100%" height={200}>
              <PieChart>
                <Pie
                  data={financialData}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={80}
                  paddingAngle={5}
                  dataKey="value"
                >
                  {financialData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
            <div className="flex w-full justify-around mt-4 text-sm">
                <div className="flex items-center"><div className="w-3 h-3 bg-ibuc-green rounded-full mr-2"></div> Pago</div>
                <div className="flex items-center"><div className="w-3 h-3 bg-ibuc-yellow rounded-full mr-2"></div> Pend.</div>
                <div className="flex items-center"><div className="w-3 h-3 bg-ibuc-red rounded-full mr-2"></div> Atras.</div>
            </div>
          </div>
        </Card>
      </div>

      {/* Recent Activity / Logs */}
      <Card title="Logs Recentes do Sistema">
        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left text-gray-500">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50">
              <tr>
                <th className="px-4 py-3">Ação</th>
                <th className="px-4 py-3">Usuário</th>
                <th className="px-4 py-3">Data</th>
                <th className="px-4 py-3">Status</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b">
                <td className="px-4 py-3 font-medium text-gray-900">Nova Matrícula</td>
                <td className="px-4 py-3">Admin Master</td>
                <td className="px-4 py-3">Hoje, 10:42</td>
                <td className="px-4 py-3"><span className="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded">Sucesso</span></td>
              </tr>
              <tr className="border-b">
                <td className="px-4 py-3 font-medium text-gray-900">Lançamento de Notas</td>
                <td className="px-4 py-3">Prof. Carlos</td>
                <td className="px-4 py-3">Hoje, 09:15</td>
                <td className="px-4 py-3"><span className="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded">Sucesso</span></td>
              </tr>
              <tr className="border-b">
                <td className="px-4 py-3 font-medium text-gray-900">Falha no Pagamento</td>
                <td className="px-4 py-3">Sistema (Auto)</td>
                <td className="px-4 py-3">Ontem, 23:00</td>
                <td className="px-4 py-3"><span className="bg-red-100 text-red-800 text-xs font-medium px-2.5 py-0.5 rounded">Erro</span></td>
              </tr>
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  );
};
