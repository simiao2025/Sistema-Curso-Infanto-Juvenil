import React from 'react';

export type UserRole = 'admin' | 'professor' | 'aluno' | 'responsavel';

export interface Usuario {
  id: string;
  email: string;
  nome: string;
  papel: UserRole;
  created_at?: string;
}

export interface Aluno {
  id: string;
  usuario_id: string;
  nome: string;
  data_nascimento: string;
  endereco: string;
  foto_perfil?: string;
  nivel_atual: number;
  turma_id?: string;
}

export interface Turma {
  id: string;
  nome: string;
  nivel_id: number;
  professor_id?: string;
  ano_letivo: number;
  turno: 'manha' | 'tarde' | 'noite';
}

export interface Nivel {
  id: number;
  nome: string; // ex: "Jardim da Fé (2-4 anos)"
  idade_min: number;
  idade_max: number;
  descricao: string;
  cor_tema: 'yellow' | 'blue' | 'green' | 'red';
}

export interface Financeiro {
  id: string;
  aluno_id: string;
  mes: number;
  ano: number;
  valor: number;
  pago: boolean;
  data_pagamento?: string;
  status: 'pendente' | 'pago' | 'atrasado';
}

export interface Licao {
  id: string;
  nivel_id: number;
  titulo: string;
  descricao: string;
  ordem: number;
  concluida?: boolean; // campo virtual para UI
}

export interface Presenca {
  id: string;
  aluno_id: string;
  licao_id: string;
  data: string;
  status: 'presente' | 'falta' | 'justificado';
}

// UI specific types
export interface MetricCardProps {
  title: string;
  value: string | number;
  icon: React.ReactNode;
  color: 'yellow' | 'blue' | 'green' | 'red';
  trend?: string;
}