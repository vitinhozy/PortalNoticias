import { useState } from "react";
import { Link } from "react-router";
import styles from "./CrudTagsPage.module.css";
import { tags } from "../../data/tags";

export default function CrudTagsPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [tagsList] = useState(tags);

  const filteredTags = tagsList.filter((tag) =>
    tag.nome.toLowerCase().includes(searchTerm.toLowerCase()) ||
    tag.slug.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleDelete = (id: number) => {
    if (confirm("Tem certeza que deseja excluir esta tag?")) {
      alert(`Tag com ID ${id} foi excluída`);
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
            <Link to="/admin/tags" className={`${styles.navItem} ${styles.active}`}>
              🏷️ Tags
            </Link>
            <Link to="/admin/perfis" className={styles.navItem}>
              👥 Perfis
            </Link>
            <Link to="/admin/noticias" className={styles.navItem}>
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
            <h1>Tags</h1>
            <Link to="/admin/tags/nova" className={styles.addBtn}>
              ➕ Nova Tag
            </Link>
          </div>

          <div className={styles.searchBar}>
            <input
              type="text"
              placeholder="Buscar por nome ou slug..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className={styles.searchInput}
            />
          </div>

          <div className={styles.tableWrapper}>
            <table className={styles.table}>
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Nome</th>
                  <th>Slug</th>
                  <th>Qtd. Notícias</th>
                  <th>Ações</th>
                </tr>
              </thead>
              <tbody>
                {filteredTags.length > 0 ? (
                  filteredTags.map((tag) => (
                    <tr key={tag.id}>
                      <td>{tag.id}</td>
                      <td>
                        <span className={styles.tagBadge}>{tag.nome}</span>
                      </td>
                      <td className={styles.slug}>{tag.slug}</td>
                      <td>-</td>
                      <td className={styles.actions}>
                        <Link
                          to={`/admin/tags/${tag.id}/editar`}
                          className={styles.editBtn}
                        >
                          ✏️ Editar
                        </Link>
                        <button
                          className={styles.deleteBtn}
                          onClick={() => handleDelete(tag.id)}
                        >
                          🗑️ Excluir
                        </button>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan={5} className={styles.emptyMessage}>
                      Nenhuma tag encontrada
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