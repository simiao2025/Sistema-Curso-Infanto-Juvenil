import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { supabase } from '../supabaseClient';
import { Button, Input, Card } from '../components/ui/Components';
import { Lock, Mail, GraduationCap, ShieldCheck, ArrowLeft } from 'lucide-react';

export const Login: React.FC = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);
  
  // To simulate the routing since we can't create real users in the provided supabase instance without admin panel access
  // In a real scenario, we would fetch the user role from the 'usuarios' table after auth.
  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (error) throw error;

      // Mock Role Logic for Demo Purposes based on email pattern
      // In production: await supabase.from('usuarios').select('papel').eq('id', data.user.id)
      if (email.includes('admin')) {
        navigate('/admin');
      } else {
        navigate('/student');
      }

    } catch (err: any) {
      setError(err.message || 'Erro ao realizar login. Verifique suas credenciais.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-ibuc-yellow via-ibuc-red to-ibuc-blue"></div>
      <div className="absolute -top-20 -left-20 w-64 h-64 bg-ibuc-blue opacity-5 rounded-full blur-3xl"></div>
      <div className="absolute top-40 -right-20 w-72 h-72 bg-ibuc-yellow opacity-5 rounded-full blur-3xl"></div>

      <div className="sm:mx-auto sm:w-full sm:max-w-md relative z-10">
        <div className="mb-6">
            <Link to="/" className="text-gray-500 hover:text-gray-900 flex items-center gap-2 text-sm font-medium transition-colors">
                <ArrowLeft className="w-4 h-4" />
                Voltar para Home
            </Link>
        </div>

        <div className="text-center mb-8">
            <div className="mx-auto w-16 h-16 bg-white rounded-2xl shadow-lg flex items-center justify-center mb-4">
                <GraduationCap className="w-8 h-8 text-ibuc-blue" />
            </div>
            <h2 className="text-3xl font-extrabold text-gray-900">Portal IBUC</h2>
            <p className="mt-2 text-sm text-gray-600">
                Acesse sua área exclusiva
            </p>
        </div>

        <Card className="py-8 px-4 shadow-xl border-0 sm:px-10">
          <form className="space-y-6" onSubmit={handleLogin}>
            <div>
              <Input 
                label="E-mail"
                type="email"
                placeholder="seu@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="pl-10"
              />
            </div>

            <div>
              <Input 
                label="Senha"
                type="password"
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>

            {error && (
              <div className="bg-red-50 border border-red-200 text-red-600 text-sm p-3 rounded-lg flex items-center">
                  <ShieldCheck className="w-4 h-4 mr-2" />
                  {error}
              </div>
            )}

            <Button type="submit" className="w-full" isLoading={loading} variant="blue">
              Entrar na Plataforma
            </Button>
          </form>

          <div className="mt-6">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300" />
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-white text-gray-500">
                  Esqueceu a senha?
                </span>
              </div>
            </div>
            <div className="mt-6 text-center">
                <a href="#" className="font-medium text-ibuc-blue hover:text-ibuc-blue/80">Recuperar acesso</a>
            </div>
          </div>
        </Card>
      </div>
      
      <div className="mt-8 text-center text-xs text-gray-400">
        &copy; 2024 IBUC System. Todos os direitos reservados.
      </div>
    </div>
  );
};