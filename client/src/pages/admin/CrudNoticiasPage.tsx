import { useState } from "react";
import { Link } from "react-router";
import styles from "./CrudNoticiasPage.module.css";
import { noticias } from "../../data/noticias";
import { usuarios } from "../../data/usuarios";
import { ufs } from "../../data/ufs";

export default function CrudNoticiasPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("");
  const [ufFilter, setUfFilter] = useState("");
  const [autorFilter, setAutorFilter] = useState("");

  const filteredNoticias = noticias.filter((noticia) => {
    const matchSearch = noticia.titulo.toLowerCase().includes(searchTerm.toLowerCase());
    const matchStatus = !statusFilter || (statusFilter === "publicada" ? noticia.publicada : !noticia.publicada);
    const matchAutor = !autorFilter || noticia.autorId === Number(autorFilter);
    return matchSearch && matchStatus && matchAutor;
  });

  const getAutorNome = (autorId: number) => {
    return usuarios.find((u) => u.id === autorId)?.nome || "Desconhecido";
  };

  const handleDelete = (id: number) => {
    if (confirm("Tem certeza que deseja excluir esta notícia?")) {
      alert(`Notícia com ID ${id} foi excluída`);
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
            <Link to="/admin/noticias" className={`${styles.navItem} ${styles.active}`}>
              📰 Notícias
            </Link>
            <Link to="/admin/usuarios" className={styles.navItem}>
              👤 Usuários
            </Link>
            <Link to="/admin/comentarios" className={styles.navItem}>
              💬 Comentários
            </Link>
          </nav>
        </aside>

        <main className={styles.content}>
          <div className={styles.pageHeader}>
            <h1>Notícias</h1>
          </div>

          <div className={styles.filters}>
            <input
              type="text"
              placeholder="Buscar por título..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className={styles.filterInput}
            />
            <select
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
              className={styles.filterInput}
            >
              <option value="">Todos os Status</option>
              <option value="publicada">Publicadas</option>
              <option value="rascunho">Rascunhos</option>
            </select>
            <select
              value={autorFilter}
              onChange={(e) => setAutorFilter(e.target.value)}
              className={styles.filterInput}
            >
              <option value="">Todos os Autores</option>
              {usuarios.filter((u) => u.perfil === "AUTOR").map((u) => (
                <option key={u.id} value={u.id}>
                  {u.nome}
                </option>
              ))}
            </select>
          </div>

          <div className={styles.tableWrapper}>
            <table className={styles.table}>
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Título</th>
                  <th>Autor</th>
                  <th>Status</th>
                  <th>Data</th>
                  <th>Visualizações</th>
                  <th>Ações</th>
                </tr>
              </thead>
              <tbody>
                {filteredNoticias.length > 0 ? (
                  filteredNoticias.map((noticia) => (
                    <tr key={noticia.id}>
                      <td>{noticia.id}</td>
                      <td>{noticia.titulo}</td>
                      <td>{getAutorNome(noticia.autorId)}</td>
                      <td>
                        <span className={`${styles.status} ${noticia.publicada ? styles.published : styles.draft}`}>
                          {noticia.publicada ? "Publicada" : "Rascunho"}
                        </span>
                      </td>
                      <td>{noticia.criadoEm}</td>
                      <td>{noticia.visualizacoes}</td>
                      <td className={styles.actions}>
                        <Link to={`/noticia/${noticia.id}`} className={styles.viewBtn}>
                          👁️
                        </Link>
                        <Link to={`/admin/noticias/${noticia.id}/editar`} className={styles.editBtn}>
                          ✏️
                        </Link>
                        <button className={styles.deleteBtn} onClick={() => handleDelete(noticia.id)}>
                          🗑️
                        </button>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan={7} className={styles.emptyMessage}>
                      Nenhuma notícia encontrada
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