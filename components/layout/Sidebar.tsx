import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { 
  LayoutDashboard, 
  BookOpen, 
  Users, 
  GraduationCap, 
  CalendarCheck, 
  DollarSign, 
  Settings, 
  LogOut,
  FileText
} from 'lucide-react';
import { supabase } from '../../supabaseClient';
import { UserRole } from '../../types';

interface SidebarProps {
  role: UserRole;
  isOpen: boolean;
  toggleSidebar: () => void;
}

export const Sidebar: React.FC<SidebarProps> = ({ role, isOpen, toggleSidebar }) => {
  const navigate = useNavigate();

  const handleLogout = async () => {
    await supabase.auth.signOut();
    navigate('/');
  };

  const adminLinks = [
    { to: '/admin', icon: LayoutDashboard, label: 'Dashboard' },
    { to: '/admin/students', icon: Users, label: 'Alunos' },
    { to: '/admin/classes', icon: GraduationCap, label: 'Turmas' },
    { to: '/admin/lessons', icon: BookOpen, label: 'Lições & Conteúdo' },
    { to: '/admin/finance', icon: DollarSign, label: 'Financeiro' },
    { to: '/admin/reports', icon: FileText, label: 'Relatórios' },
  ];

  const studentLinks = [
    { to: '/student', icon: LayoutDashboard, label: 'Meu Painel' },
    { to: '/student/lessons', icon: BookOpen, label: 'Minhas Lições' },
    { to: '/student/attendance', icon: CalendarCheck, label: 'Presenças' },
    { to: '/student/report', icon: FileText, label: 'Boletim' },
    { to: '/student/financial', icon: DollarSign, label: 'Mensalidades' },
  ];

  const links = role === 'admin' ? adminLinks : studentLinks;

  return (
    <aside className={`fixed top-0 left-0 z-50 h-screen transition-transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0 bg-white border-r border-gray-200 w-64 shadow-lg md:shadow-none`}>
      <div className="h-full px-3 py-4 overflow-y-auto flex flex-col">
        
        {/* Logo Area */}
        <div className="flex items-center ps-2.5 mb-8 mt-2 cursor-pointer" onClick={() => navigate('/')}>
          <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-ibuc-blue to-ibuc-green flex items-center justify-center text-white font-bold text-xl mr-3 shadow-md">
            I
          </div>
          <span className="self-center text-xl font-bold whitespace-nowrap text-gray-800">
            IBUC <span className="text-ibuc-blue">System</span>
          </span>
        </div>

        {/* Navigation */}
        <ul className="space-y-2 font-medium flex-1">
          {links.map((link) => (
            <li key={link.to}>
              <NavLink 
                to={link.to}
                end={link.to === '/admin' || link.to === '/student'}
                className={({ isActive }) => 
                  `flex items-center p-3 text-gray-900 rounded-lg group hover:bg-gray-100 transition-colors ${
                    isActive ? 'bg-ibuc-blue/10 text-ibuc-blue font-semibold' : ''
                  }`
                }
              >
                <link.icon className={`w-5 h-5 transition duration-75 ${({ isActive }: any) => isActive ? 'text-ibuc-blue' : 'text-gray-500 group-hover:text-gray-900'}`} />
                <span className="ms-3">{link.label}</span>
              </NavLink>
            </li>
          ))}
        </ul>

        {/* Bottom Actions */}
        <div className="pt-4 border-t border-gray-200">
           <NavLink to={`/${role}/settings`} className="flex items-center p-3 text-gray-900 rounded-lg hover:bg-gray-100 group">
             <Settings className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 group-hover:text-gray-900" />
             <span className="ms-3">Configurações</span>
           </NavLink>
           <button onClick={handleLogout} className="flex w-full items-center p-3 text-red-600 rounded-lg hover:bg-red-50 group">
             <LogOut className="flex-shrink-0 w-5 h-5 text-red-500 transition duration-75 group-hover:text-red-700" />
             <span className="ms-3">Sair</span>
           </button>
        </div>

      </div>
    </aside>
  );
};