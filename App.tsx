import React from 'react';
import { HashRouter, Routes, Route, Navigate } from 'react-router-dom';
import { LandingPage } from './pages/LandingPage';
import { Login } from './pages/Login';
import { AdminLayout } from './components/layout/AdminLayout';
import { StudentLayout } from './components/layout/StudentLayout';
import { AdminDashboard } from './pages/admin/AdminDashboard';
import { StudentDashboard } from './pages/student/StudentDashboard';
import { StudentList } from './pages/admin/StudentList';

// Placeholder components for routes not fully implemented in this demo
const Placeholder = ({ title }: { title: string }) => (
    <div className="p-10 text-center text-gray-500">
        <h2 className="text-2xl font-bold mb-2">{title}</h2>
        <p>Funcionalidade em desenvolvimento.</p>
    </div>
);

const App: React.FC = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
        
        {/* Admin Routes */}
        <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<AdminDashboard />} />
          <Route path="students" element={<StudentList />} />
          <Route path="classes" element={<Placeholder title="Gestão de Turmas" />} />
          <Route path="lessons" element={<Placeholder title="Lições & Conteúdo" />} />
          <Route path="finance" element={<Placeholder title="Financeiro" />} />
          <Route path="reports" element={<Placeholder title="Relatórios" />} />
          <Route path="settings" element={<Placeholder title="Configurações Admin" />} />
        </Route>

        {/* Student Routes */}
        <Route path="/student" element={<StudentLayout />}>
          <Route index element={<StudentDashboard />} />
          <Route path="lessons" element={<Placeholder title="Minhas Lições" />} />
          <Route path="attendance" element={<Placeholder title="Minhas Presenças" />} />
          <Route path="report" element={<Placeholder title="Meu Boletim" />} />
          <Route path="financial" element={<Placeholder title="Minhas Mensalidades" />} />
          <Route path="settings" element={<Placeholder title="Minha Conta" />} />
        </Route>

        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </HashRouter>
  );
};

export default App;