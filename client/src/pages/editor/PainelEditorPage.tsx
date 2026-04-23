import { useState } from "react";
import { Link } from "react-router";
import styles from "./PainelEditorPage.module.css";
import { noticias } from "../../data/noticias";
import { comentarios } from "../../data/comentarios";
import { usuarios } from "../../data/usuarios";

export default function PainelEditorPage() {
  const [filterStatus, setFilterStatus] = useState("pendentes");

  const editor = usuarios[6]; // Editor simulado
  const noticiasPendentes = noticias.filter((n) => !n.publicada);
  const noticiasPublicadas = noticias.filter((n) => n.publicada);
  const comentariosPendentes = comentarios.filter((c) => !c.aprovado);

  let noticiasExibidas = noticiasPendentes;
  if (filterStatus === "publicadas") {
    noticiasExibidas = noticiasPublicadas;
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
            <Link to="/editor/painel" className={styles.active}>
              Painel
            </Link>
            <Link to="/editor/perfil">Perfil</Link>
            <Link to="/login">Sair</Link>
          </nav>
        </div>
      </header>

      <div className={styles.content}>
        <h1>Painel do Editor</h1>

        <div className={styles.statsGrid}>
          <div className={styles.statCard}>
            <div className={styles.statValue}>{noticiasPendentes.length}</div>
            <div className={styles.statLabel}>Pendentes de Revisão</div>
          </div>
          <div className={styles.statCard}>
            <div className={styles.statValue}>{noticiasPublicadas.length}</div>
            <div className={styles.statLabel}>Publicadas</div>
          </div>
          <div className={styles.statCard}>
            <div className={styles.statValue}>{comentariosPendentes.length}</div>
            <div className={styles.statLabel}>Comentários Pendentes</div>
          </div>
          <div className={styles.statCard}>
            <div className={styles.statValue}>{noticias.length}</div>
            <div className={styles.statLabel}>Total de Notícias</div>
          </div>
        </div>

        <div className={styles.tabs}>
          <button
            className={`${styles.tab} ${
              filterStatus === "pendentes" ? styles.active : ""
            }`}
            onClick={() => setFilterStatus("pendentes")}
          >
            📋 Pendentes ({noticiasPendentes.length})
          </button>
          <button
            className={`${styles.tab} ${
              filterStatus === "publicadas" ? styles.active : ""
            }`}
            onClick={() => setFilterStatus("publicadas")}
          >
            ✅ Publicadas ({noticiasPublicadas.length})
          </button>
        </div>

        <div className={styles.noticiasList}>
          {noticiasExibidas.length > 0 ? (
            noticiasExibidas.map((noticia) => (
              <div key={noticia.id} className={styles.noticiaCard}>
                <div className={styles.noticiaImage}>
                  <img src={noticia.imagemCapa} alt={noticia.titulo} />
                </div>
                <div className={styles.noticiaContent}>
                  <h3>{noticia.titulo}</h3>
                  <p>{noticia.subtitulo}</p>
                  <div className={styles.metadata}>
                    <span>📝 Autor ID: {noticia.autorId}</span>
                    <span>📅 {noticia.criadoEm}</span>
                    <span>👁️ {noticia.visualizacoes}</span>
                  </div>
                </div>
                <div className={styles.actions}>
                  <Link
                    to={`/editor/noticias/${noticia.id}/revisar`}
                    className={styles.actionBtn}
                  >
                    👁️ Revisar
                  </Link>
                  {!noticia.publicada && (
                    <button
                      className={`${styles.actionBtn} ${styles.approveBtn}`}
                      onClick={() =>
                        alert(`Notícia "${noticia.titulo}" aprovada!`)
                      }
                    >
                      ✅ Aprovar
                    </button>
                  )}
                  <button
                    className={`${styles.actionBtn} ${styles.rejectBtn}`}
                    onClick={() =>
                      alert(`Notícia "${noticia.titulo}" rejeitada!`)
                    }
                  >
                    ❌ Rejeitar
                  </button>
                </div>
              </div>
            ))
          ) : (
            <div className={styles.emptyState}>
              <p>
                {filterStatus === "pendentes"
                  ? "Nenhuma notícia pendente"
                  : "Nenhuma notícia publicada"}
              </p>
            </div>
          )}
        </div>

        <section className={styles.section}>
          <h2>Comentários Pendentes de Aprovação</h2>
          {comentariosPendentes.length > 0 ? (
            <div className={styles.comentariosList}>
              {comentariosPendentes.slice(0, 5).map((comentario) => (
                <div key={comentario.id} className={styles.comentarioItem}>
                  <div className={styles.comentarioHeader}>
                    <strong>Usuário ID: {comentario.autorId}</strong>
                    <span className={styles.date}>{comentario.criadoEm}</span>
                  </div>
                  <p>{comentario.texto}</p>
                  <div className={styles.comentarioActions}>
                    <button
                      className={styles.approveBtn}
                      onClick={() =>
                        alert(`Comentário aprovado!`)
                      }
                    >
                      ✅ Aprovar
                    </button>
                    <button
                      className={styles.rejectBtn}
                      onClick={() =>
                        alert(`Comentário rejeitado!`)
                      }
                    >
                      ❌ Rejeitar
                    </button>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <p className={styles.emptyMessage}>
              Nenhum comentário pendente de aprovação
            </p>
          )}
          <Link to="/editor/comentarios" className={styles.viewAllLink}>
            Ver todos os comentários →
          </Link>
        </section>
      </div>

      <footer className={styles.footer}>
        <p>&copy; 2024 Portal de Notícias. Todos os direitos reservados.</p>
      </footer>
    </div>
  );
}
