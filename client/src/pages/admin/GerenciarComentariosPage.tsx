import { useState } from "react";
import { Link } from "react-router";
import styles from "./GerenciarComentariosPage.module.css";
import { comentarios } from "../../data/comentarios";
import { noticias } from "../../data/noticias";
import { usuarios } from "../../data/usuarios";

export default function GerenciarComentariosPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("");
  const [selectedComments, setSelectedComments] = useState<number[]>([]);

  const filteredComentarios = comentarios.filter((comentario) => {
    const matchSearch = comentario.texto.toLowerCase().includes(searchTerm.toLowerCase());
    const matchStatus = !statusFilter || (statusFilter === "aprovado" ? comentario.aprovado : !comentario.aprovado);
    return matchSearch && matchStatus;
  });

  const getNoticiaTitle = (noticiaId: number) => {
    return noticias.find((n) => n.id === noticiaId)?.titulo || "Notícia não encontrada";
  };

  const getUsuarioNome = (usuarioId: number) => {
    return usuarios.find((u) => u.id === usuarioId)?.nome || "Desconhecido";
  };

  const handleToggleSelect = (id: number) => {
    setSelectedComments((prev) =>
      prev.includes(id) ? prev.filter((c) => c !== id) : [...prev, id]
    );
  };

  const handleSelectAll = () => {
    if (selectedComments.length === filteredComentarios.length) {
      setSelectedComments([]);
    } else {
      setSelectedComments(filteredComentarios.map((c) => c.id));
    }
  };

  const handleApproveSelected = () => {
    if (selectedComments.length === 0) {
      alert("Selecione comentários para aprovar");
      return;
    }
    alert(`${selectedComments.length} comentário(s) aprovado(s)`);
    setSelectedComments([]);
  };

  const handleDeleteSelected = () => {
    if (selectedComments.length === 0) {
      alert("Selecione comentários para excluir");
      return;
    }
    if (confirm(`Tem certeza que deseja excluir ${selectedComments.length} comentário(s)?`)) {
      alert(`${selectedComments.length} comentário(s) excluído(s)`);
      setSelectedComments([]);
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
            <Link to="/admin/usuarios" className={styles.navItem}>
              👤 Usuários
            </Link>
            <Link to="/admin/comentarios" className={`${styles.navItem} ${styles.active}`}>
              💬 Comentários
            </Link>
          </nav>
        </aside>

        <main className={styles.content}>
          <div className={styles.pageHeader}>
            <h1>Gerenciar Comentários</h1>
          </div>

          <div className={styles.filters}>
            <input
              type="text"
              placeholder="Buscar comentários..."
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
              <option value="aprovado">Aprovados</option>
              <option value="pendente">Pendentes</option>
            </select>
          </div>

          {selectedComments.length > 0 && (
            <div className={styles.bulkActions}>
              <span>{selectedComments.length} comentário(s) selecionado(s)</span>
              <button className={styles.approveBtn} onClick={handleApproveSelected}>
                ✅ Aprovar Selecionados
              </button>
              <button className={styles.deleteBtn} onClick={handleDeleteSelected}>
                🗑️ Excluir Selecionados
              </button>
            </div>
          )}

          <div className={styles.comentariosList}>
            <div className={styles.selectAllRow}>
              <input
                type="checkbox"
                checked={selectedComments.length === filteredComentarios.length && filteredComentarios.length > 0}
                onChange={handleSelectAll}
              />
              <span>Selecionar Todos</span>
            </div>

            {filteredComentarios.length > 0 ? (
              filteredComentarios.map((comentario) => (
                <div key={comentario.id} className={styles.comentarioItem}>
                  <input
                    type="checkbox"
                    checked={selectedComments.includes(comentario.id)}
                    onChange={() => handleToggleSelect(comentario.id)}
                  />
                  <div className={styles.comentarioContent}>
                    <div className={styles.comentarioHeader}>
                      <strong>{getUsuarioNome(comentario.autorId)}</strong>
                      <span className={styles.date}>{comentario.criadoEm}</span>
                      <span className={`${styles.status} ${comentario.aprovado ? styles.approved : styles.pending}`}>
                        {comentario.aprovado ? "Aprovado" : "Pendente"}
                      </span>
                    </div>
                    <p className={styles.texto}>{comentario.texto}</p>
                    <p className={styles.noticia}>
                      Notícia: <Link to={`/noticia/${comentario.noticiaId}`}>{getNoticiaTitle(comentario.noticiaId)}</Link>
                    </p>
                  </div>
                  <div className={styles.actions}>
                    {!comentario.aprovado && (
                      <button className={styles.approveBtn} onClick={() => alert("Comentário aprovado!")}>
                        ✅
                      </button>
                    )}
                    <button className={styles.deleteBtn} onClick={() => alert("Comentário excluído!")}>
                      🗑️
                    </button>
                  </div>
                </div>
              ))
            ) : (
              <div className={styles.emptyMessage}>Nenhum comentário encontrado</div>
            )}
          </div>
        </main>
      </div>

      <footer className={styles.footer}>
        <p>&copy; 2024 Portal de Notícias. Todos os direitos reservados.</p>
      </footer>
    </div>
  );
}