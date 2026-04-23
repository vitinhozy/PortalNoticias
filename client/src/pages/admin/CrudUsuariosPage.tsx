import { useState } from "react";
import { Link } from "react-router";
import styles from "./CrudUsuariosPage.module.css";
import { usuarios } from "../../data/usuarios";
import { ufs } from "../../data/ufs";

export default function CrudUsuariosPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [perfilFilter, setPerfilFilter] = useState("");
  const [statusFilter, setStatusFilter] = useState("");

  const filteredUsuarios = usuarios.filter((usuario) => {
    const matchSearch = usuario.nome.toLowerCase().includes(searchTerm.toLowerCase());
    const matchPerfil = !perfilFilter || usuario.perfil === perfilFilter;
    const matchStatus = !statusFilter || (statusFilter === "ativo" ? usuario.ativo : !usuario.ativo);
    return matchSearch && matchPerfil && matchStatus;
  });

  const handleDelete = (id: number) => {
    if (confirm("Tem certeza que deseja excluir este usuário?")) {
      alert(`Usuário com ID ${id} foi excluído`);
    }
  };

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <div className={styles.headerContent}>
          <Link to="/" className={styles.logo}>
            📰 Portal de Notícias
          </Link>
          <nav className={styles.nav}>
            <Link to="/">Home</Link>
            <Link to="/admin/dashboard">Dashboard</Link>
            <Link to="/login">Sair</Link>
          </nav>
        </div>
      </header>

      <div className={styles.wrapper}>
        <aside className={styles.sidebar}>
          <nav className={styles.sidebarNav}>
            <Link to="/admin/dashboard" className={styles.navItem}>
              📊 Dashboard
            </Link>
            <Link to="/admin/ufs" className={styles.navItem}>
              🗺️ UFs
            </Link>
            <Link to="/admin/cidades" className={styles.navItem}>
              🏙️ Cidades
            </Link>
            <Link to="/admin/tags" className={styles.navItem}>
              🏷️ Tags
            </Link>
            <Link to="/admin/perfis" className={styles.navItem}>
              👥 Perfis
            </Link>
            <Link to="/admin/noticias" className={styles.navItem}>
              📰 Notícias
            </Link>
            <Link to="/admin/usuarios" className={`${styles.navItem} ${styles.active}`}>
              👤 Usuários
            </Link>
            <Link to="/admin/comentarios" className={styles.navItem}>
              💬 Comentários
            </Link>
          </nav>
        </aside>

        <main className={styles.content}>
          <div className={styles.pageHeader}>
            <h1>Usuários</h1>
          </div>

          <div className={styles.filters}>
            <input
              type="text"
              placeholder="Buscar por nome..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className={styles.filterInput}
            />
            <select
              value={perfilFilter}
              onChange={(e) => setPerfilFilter(e.target.value)}
              className={styles.filterInput}
            >
              <option value="">Todos os Perfis</option>
              <option value="LEITOR">Leitor</option>
              <option value="AUTOR">Autor</option>
              <option value="EDITOR">Editor</option>
              <option value="SUPERADMIN">SuperAdmin</option>
            </select>
            <select
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
              className={styles.filterInput}
            >
              <option value="">Todos os Status</option>
              <option value="ativo">Ativo</option>
              <option value="inativo">Inativo</option>
            </select>
          </div>

          <div className={styles.tableWrapper}>
            <table className={styles.table}>
              <thead>
                <tr>
                  <th>Avatar</th>
                  <th>Nome</th>
                  <th>E-mail</th>
                  <th>Perfil</th>
                  <th>Status</th>
                  <th>Data</th>
                  <th>Ações</th>
                </tr>
              </thead>
              <tbody>
                {filteredUsuarios.length > 0 ? (
                  filteredUsuarios.map((usuario) => (
                    <tr key={usuario.id}>
                      <td className={styles.avatar}>{usuario.avatar}</td>
                      <td>{usuario.nome}</td>
                      <td>{usuario.email}</td>
                      <td>{usuario.perfil}</td>
                      <td>
                        <span className={`${styles.status} ${usuario.ativo ? styles.active : styles.inactive}`}>
                          {usuario.ativo ? "Ativo" : "Inativo"}
                        </span>
                      </td>
                      <td>{usuario.criadoEm}</td>
                      <td className={styles.actions}>
                        <Link to={`/admin/usuarios/${usuario.id}/editar`} className={styles.editBtn}>
                          ✏️ Editar
                        </Link>
                        <button className={styles.deleteBtn} onClick={() => handleDelete(usuario.id)}>
                          🗑️ Excluir
                        </button>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan={7} className={styles.emptyMessage}>
                      Nenhum usuário encontrado
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </main>
      </div>

      <footer className={styles.footer}>
        <p>&copy; 2024 Portal de Notícias. Todos os direitos reservados.</p>
      </footer>
    </div>
  );
}