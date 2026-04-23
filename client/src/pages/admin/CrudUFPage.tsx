import { useState } from "react";
import { Link } from "react-router";
import styles from "./CrudUFPage.module.css";
import { ufs } from "../../data/ufs";

export default function CrudUFPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [ufsList] = useState(ufs);

  const filteredUFs = ufsList.filter(
    (uf) =>
      uf.nome.toLowerCase().includes(searchTerm.toLowerCase()) ||
      uf.sigla.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleDelete = (id: number) => {
    if (confirm("Tem certeza que deseja excluir esta UF?")) {
      alert(`UF com ID ${id} foi excluída`);
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
            <Link to="/admin/ufs" className={`${styles.navItem} ${styles.active}`}>
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
            <h1>Unidades Federativas</h1>
            <Link to="/admin/ufs/nova" className={styles.addBtn}>
              ➕ Nova UF
            </Link>
          </div>

          <div className={styles.searchBar}>
            <input
              type="text"
              placeholder="Buscar por sigla ou nome..."
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
                  <th>Sigla</th>
                  <th>Nome</th>
                  <th>Qtd. Cidades</th>
                  <th>Ações</th>
                </tr>
              </thead>
              <tbody>
                {filteredUFs.length > 0 ? (
                  filteredUFs.map((uf) => (
                    <tr key={uf.id}>
                      <td>{uf.id}</td>
                      <td className={styles.sigla}>{uf.sigla}</td>
                      <td>{uf.nome}</td>
                      <td>-</td>
                      <td className={styles.actions}>
                        <Link
                          to={`/admin/ufs/${uf.id}/editar`}
                          className={styles.editBtn}
                        >
                          ✏️ Editar
                        </Link>
                        <button
                          className={styles.deleteBtn}
                          onClick={() => handleDelete(uf.id)}
                        >
                          🗑️ Excluir
                        </button>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan={5} className={styles.emptyMessage}>
                      Nenhuma UF encontrada
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
