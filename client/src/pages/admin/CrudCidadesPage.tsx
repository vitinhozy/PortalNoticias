import { useState } from "react";
import { Link } from "react-router";
import styles from "./CrudCidadesPage.module.css";
import { cidades } from "../../data/cidades";
import { ufs } from "../../data/ufs";

export default function CrudCidadesPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedUF, setSelectedUF] = useState("");
  const [cidadesList] = useState(cidades);

  const filteredCidades = cidadesList.filter((cidade) => {
    const matchSearch = cidade.nome.toLowerCase().includes(searchTerm.toLowerCase());
    const matchUF = !selectedUF || cidade.ufId === Number(selectedUF);
    return matchSearch && matchUF;
  });

  const handleDelete = (id: number) => {
    if (confirm("Tem certeza que deseja excluir esta cidade?")) {
      alert(`Cidade com ID ${id} foi excluída`);
    }
  };

  const getUFName = (ufId: number) => {
    return ufs.find((uf) => uf.id === ufId)?.sigla || "-";
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
            <Link to="/admin/cidades" className={`${styles.navItem} ${styles.active}`}>
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
            <h1>Cidades</h1>
            <Link to="/admin/cidades/nova" className={styles.addBtn}>
              ➕ Nova Cidade
            </Link>
          </div>

          <div className={styles.filters}>
            <input
              type="text"
              placeholder="Buscar por nome..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className={styles.searchInput}
            />
            <select
              value={selectedUF}
              onChange={(e) => setSelectedUF(e.target.value)}
              className={styles.selectInput}
            >
              <option value="">Todas as UFs</option>
              {ufs.map((uf) => (
                <option key={uf.id} value={uf.id}>
                  {uf.sigla} - {uf.nome}
                </option>
              ))}
            </select>
          </div>

          <div className={styles.tableWrapper}>
            <table className={styles.table}>
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Nome</th>
                  <th>UF</th>
                  <th>Qtd. Notícias</th>
                  <th>Ações</th>
                </tr>
              </thead>
              <tbody>
                {filteredCidades.length > 0 ? (
                  filteredCidades.map((cidade) => (
                    <tr key={cidade.id}>
                      <td>{cidade.id}</td>
                      <td>{cidade.nome}</td>
                      <td>{getUFName(cidade.ufId)}</td>
                      <td>-</td>
                      <td className={styles.actions}>
                        <Link
                          to={`/admin/cidades/${cidade.id}/editar`}
                          className={styles.editBtn}
                        >
                          ✏️ Editar
                        </Link>
                        <button
                          className={styles.deleteBtn}
                          onClick={() => handleDelete(cidade.id)}
                        >
                          🗑️ Excluir
                        </button>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan={5} className={styles.emptyMessage}>
                      Nenhuma cidade encontrada
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
