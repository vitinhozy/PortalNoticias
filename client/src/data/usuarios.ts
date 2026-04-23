import { Usuario } from "../types";

export const usuarios: Usuario[] = [
  // Leitores
  { id: 1, nome: "João Silva", email: "joao@email.com", perfil: "LEITOR", avatar: "👤", bio: "Leitor ativo", cidadeId: 1, ativo: true, criadoEm: "2024-01-15" },
  { id: 2, nome: "Maria Santos", email: "maria@email.com", perfil: "LEITOR", avatar: "👤", bio: "Apaixonada por notícias", cidadeId: 5, ativo: true, criadoEm: "2024-01-20" },
  { id: 3, nome: "Pedro Oliveira", email: "pedro@email.com", perfil: "LEITOR", avatar: "👤", bio: "Leitor de tecnologia", cidadeId: 8, ativo: true, criadoEm: "2024-02-01" },
  { id: 4, nome: "Ana Costa", email: "ana@email.com", perfil: "LEITOR", avatar: "👤", bio: "Acompanha política", cidadeId: 11, ativo: true, criadoEm: "2024-02-10" },
  { id: 5, nome: "Carlos Mendes", email: "carlos@email.com", perfil: "LEITOR", avatar: "👤", bio: "Entusiasta de esportes", cidadeId: 18, ativo: true, criadoEm: "2024-02-15" },

  // Autores
  { id: 6, nome: "Fernanda Lima", email: "fernanda@email.com", perfil: "AUTOR", avatar: "✍️", bio: "Jornalista de tecnologia", cidadeId: 1, ativo: true, criadoEm: "2024-01-01" },
  { id: 7, nome: "Roberto Alves", email: "roberto@email.com", perfil: "AUTOR", avatar: "✍️", bio: "Especialista em política", cidadeId: 5, ativo: true, criadoEm: "2024-01-05" },
  { id: 8, nome: "Juliana Rocha", email: "juliana@email.com", perfil: "AUTOR", avatar: "✍️", bio: "Repórter de esportes", cidadeId: 8, ativo: true, criadoEm: "2024-01-10" },
  { id: 9, nome: "Lucas Martins", email: "lucas@email.com", perfil: "AUTOR", avatar: "✍️", bio: "Colunista de economia", cidadeId: 11, ativo: true, criadoEm: "2024-01-12" },
  { id: 10, nome: "Beatriz Santos", email: "beatriz@email.com", perfil: "AUTOR", avatar: "✍️", bio: "Crítica de cultura", cidadeId: 18, ativo: true, criadoEm: "2024-01-18" },

  // Editores
  { id: 11, nome: "Marcelo Gomes", email: "marcelo@email.com", perfil: "EDITOR", avatar: "📋", bio: "Editor-chefe", cidadeId: 1, ativo: true, criadoEm: "2023-12-01" },
  { id: 12, nome: "Camila Ferreira", email: "camila@email.com", perfil: "EDITOR", avatar: "📋", bio: "Editora de conteúdo", cidadeId: 5, ativo: true, criadoEm: "2023-12-05" },
  { id: 13, nome: "Diego Souza", email: "diego@email.com", perfil: "EDITOR", avatar: "📋", bio: "Editor de seção", cidadeId: 8, ativo: true, criadoEm: "2023-12-10" },

  // SuperAdmins
  { id: 14, nome: "Admin Principal", email: "admin@email.com", perfil: "SUPERADMIN", avatar: "👑", bio: "Administrador do sistema", cidadeId: 24, ativo: true, criadoEm: "2023-11-01" },
  { id: 15, nome: "Gerente de Sistema", email: "gerente@email.com", perfil: "SUPERADMIN", avatar: "👑", bio: "Gerente de operações", cidadeId: 1, ativo: true, criadoEm: "2023-11-15" },
];
