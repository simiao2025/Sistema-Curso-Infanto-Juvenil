import React, { useState } from 'react';
import { Card, Button, Input, Badge } from '../../components/ui/Components';
import { Search, Plus, Edit2, Trash2, X, Save } from 'lucide-react';

// Tipagem local para o exemplo (em produção viria de types.ts)
interface Student {
  id: number;
  name: string;
  level: string;
  age: number;
  status: 'Ativo' | 'Inadimplente' | 'Inativo';
}

export const StudentList: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  // Mock Data Inicial
  const [students, setStudents] = useState<Student[]>([
    { id: 1, name: 'Davi Silva', level: 'Jardim da Fé', age: 4, status: 'Ativo' },
    { id: 2, name: 'Rebeca Oliveira', level: 'Exploradores', age: 8, status: 'Ativo' },
    { id: 3, name: 'Samuel Santos', level: 'Conquistadores', age: 11, status: 'Inadimplente' },
    { id: 4, name: 'Ester Souza', level: 'Guardiões', age: 15, status: 'Ativo' },
  ]);

  // Form State
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    level: 'Jardim da Fé'
  });
  const [formError, setFormError] = useState('');

  // Lógica de Filtro
  const filteredStudents = students.filter(student => 
    student.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    student.level.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleSave = () => {
    if (!formData.name || !formData.age) {
      setFormError('Por favor, preencha todos os campos obrigatórios.');
      return;
    }

    const newStudent: Student = {
      id: students.length + 1,
      name: formData.name,
      age: parseInt(formData.age),
      level: formData.level,
      status: 'Ativo'
    };

    setStudents([...students, newStudent]);
    setIsModalOpen(false);
    setFormData({ name: '', age: '', level: 'Jardim da Fé' });
    setFormError('');
  };

  return (
    <div className="p-6 relative">
      <div className="flex flex-col sm:flex-row justify-between items-center mb-6 gap-4">
        <h1 className="text-2xl font-bold text-gray-800">Gestão de Alunos</h1>
        <Button variant="green" onClick={() => setIsModalOpen(true)}>
          <Plus className="w-4 h-4 mr-2" />
          Novo Aluno
        </Button>
      </div>

      <Card>
        <div className="flex items-center mb-6">
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
            <Input 
              placeholder="Buscar por nome, matrícula ou responsável..." 
              className="pl-10"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left text-gray-500">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50">
              <tr>
                <th className="px-6 py-3">Nome</th>
                <th className="px-6 py-3">Nível</th>
                <th className="px-6 py-3">Idade</th>
                <th className="px-6 py-3">Status</th>
                <th className="px-6 py-3 text-right">Ações</th>
              </tr>
            </thead>
            <tbody>
              {filteredStudents.length > 0 ? (
                filteredStudents.map((student) => (
                  <tr key={student.id} className="bg-white border-b hover:bg-gray-50">
                    <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                      <div className="flex items-center gap-3">
                          <div className="w-8 h-8 rounded-full bg-gray-200 overflow-hidden">
                              <img src={`https://picsum.photos/seed/${student.id}/200`} alt="avatar" />
                          </div>
                          {student.name}
                      </div>
                    </td>
                    <td className="px-6 py-4">{student.level}</td>
                    <td className="px-6 py-4">{student.age} anos</td>
                    <td className="px-6 py-4">
                      <Badge variant={student.status === 'Ativo' ? 'green' : 'red'}>
                        {student.status}
                      </Badge>
                    </td>
                    <td className="px-6 py-4 text-right">
                      <div className="flex justify-end gap-2">
                          <button className="text-blue-600 hover:text-blue-800 p-1">
                              <Edit2 className="w-4 h-4" />
                          </button>
                          <button className="text-red-600 hover:text-red-800 p-1">
                              <Trash2 className="w-4 h-4" />
                          </button>
                      </div>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={5} className="px-6 py-8 text-center text-gray-400">
                    Nenhum aluno encontrado.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </Card>

      {/* Modal de Cadastro */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
          <div className="bg-white rounded-xl shadow-2xl w-full max-w-md overflow-hidden animate-in fade-in zoom-in duration-200">
            <div className="flex justify-between items-center p-4 border-b bg-gray-50">
              <h3 className="text-lg font-bold text-gray-800">Cadastrar Novo Aluno</h3>
              <button onClick={() => setIsModalOpen(false)} className="text-gray-400 hover:text-gray-600">
                <X className="w-5 h-5" />
              </button>
            </div>
            
            <div className="p-6 space-y-4">
              <Input 
                label="Nome Completo" 
                placeholder="Ex: João da Silva"
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
              />
              
              <div className="grid grid-cols-2 gap-4">
                <Input 
                  label="Idade" 
                  type="number" 
                  placeholder="Ex: 8"
                  value={formData.age}
                  onChange={(e) => setFormData({...formData, age: e.target.value})}
                />
                <div className="flex flex-col gap-1 w-full">
                  <label className="text-sm font-medium text-gray-700">Nível</label>
                  <select 
                    className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-ibuc-blue outline-none"
                    value={formData.level}
                    onChange={(e) => setFormData({...formData, level: e.target.value})}
                  >
                    <option value="Jardim da Fé">Jardim da Fé (2-4)</option>
                    <option value="Exploradores">Exploradores (5-8)</option>
                    <option value="Conquistadores">Conquistadores (9-12)</option>
                    <option value="Guardiões">Guardiões (13-16)</option>
                  </select>
                </div>
              </div>

              {formError && (
                <div className="text-red-500 text-sm bg-red-50 p-2 rounded">
                  {formError}
                </div>
              )}
            </div>

            <div className="p-4 border-t bg-gray-50 flex justify-end gap-3">
              <Button variant="gray" onClick={() => setIsModalOpen(false)}>Cancelar</Button>
              <Button variant="blue" onClick={handleSave}>
                <Save className="w-4 h-4 mr-2" />
                Salvar Aluno
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
