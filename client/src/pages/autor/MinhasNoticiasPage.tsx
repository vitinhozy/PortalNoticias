import { useState } from "react";
import { Link } from "react-router";
import styles from "./MinhasNoticiasPage.module.css";
import { noticias } from "../../data/noticias";
import { usuarios } from "../../data/usuarios";

export default function MinhasNoticiasPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("todas");

  const autor = usuarios[5]; // Autor simulado
  const autorNoticias = noticias.filter((n) => n.autorId === autor.id);

  let filtered = autorNoticias;

  if (statusFilter === "publicadas") {
    filtered = filtered.filter((n) => n.publicada);
  } else if (statusFilter === "rascunhos") {
    filtered = filtered.filter((n) => !n.publicada);
  }

  if (searchTerm) {
    filtered = filtered.filter((n) =>
      n.titulo.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <div className={styles.headerContent}>
          <Link to="/" className={styles.logo}>
            📰 Portal de Notícias
          </Link>
          <nav className={styles.nav}>
            <Link to="/">Home</Link>
            <Link to="/autor/noticias" className={styles.active}>
              Minhas Notícias
            </Link>
            <Link to="/autor/perfil">Perfil</Link>
            <Link to="/login">Sair</Link>
          </nav>
        </div>
      </header>

      <div className={styles.content}>
        <div className={styles.pageHeader}>
          <h1>Minhas Notícias</h1>
          <Link to="/autor/noticias/nova" className={styles.newBtn}>
            ➡️ Nova Notícia
          </Link>
        </div>

        <div className={styles.filters}>
          <input
            type="text"
            placeholder="🔍 Buscar notícias..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className={styles.searchInput}
          />
          <select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
            className={styles.statusSelect}
          >
            <option value="todas">Todas</option>
            <option value="publicadas">Publicadas</option>
            <option value="rascunhos">Rascunhos</option>
          </select>
        </div>

        {filtered.length > 0 ? (
          <div className={styles.tableContainer}>
            <table className={styles.table}>
              <thead>
                <tr>
                  <th>Título</th>
                  <th>Data</th>
                  <th>Status</th>
                  <th>Visualizações</th>
                  <th>Ações</th>
                </tr>
              </thead>
              <tbody>
                {filtered.map((noticia) => (
                  <tr key={noticia.id}>
                    <td className={styles.titleCell}>{noticia.titulo}</td>
                    <td>{noticia.criadoEm}</td>
                    <td>
                      <span
                        className={`${styles.statusBadge} ${
                          noticia.publicada
                            ? styles.published
                            : styles.draft
                        }`}
                      >
                        {noticia.publicada ? "📤 Publicada" : "📝 Rascunho"}
                      </span>
                    </td>
                    <td>{noticia.visualizacoes}</td>
                    <td className={styles.actionsCell}>
                      <Link
                        to={`/noticia/${noticia.id}`}
                        className={styles.actionBtn}
                        title="Visualizar"
                      >
                        👁️
                      </Link>
                      <Link
                        to={`/autor/noticias/${noticia.id}/editar`}
                        className={styles.actionBtn}
                        title="Editar"
                      >
                        ✏️
                      </Link>
                      <button
                        className={`${styles.actionBtn} ${styles.deleteBtn}`}
                        title="Deletar"
                        onClick={() =>
                          alert(`Deletar notícia: ${noticia.titulo}`)
                        }
                      >
                        🗑️
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <div className={styles.emptyState}>
            <p>
              {searchTerm
                ? "Nenhuma notícia encontrada"
                : "Você ainda não escreveu nenhuma notícia"}
            </p>
            <Link to="/autor/noticias/nova" className={styles.newBtn}>
              ➡️ Criar Primeira Notícia
            </Link>
          </div>
        )}

        <div className={styles.summary}>
          <p>
            Mostrando <strong>{filtered.length}</strong> de
            <strong>{autorNoticias.length}</strong> notícias
          </p>
        </div>
      </div>

      <footer className={styles.footer}>
        <p>&copy; 2024 Portal de Notícias. Todos os direitos reservados.</p>
      </footer>
    </div>
  );
}
