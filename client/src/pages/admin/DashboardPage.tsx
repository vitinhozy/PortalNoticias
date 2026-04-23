import { Link } from "react-router";
import styles from "./DashboardPage.module.css";
import { noticias } from "../../data/noticias";
import { usuarios } from "../../data/usuarios";
import { comentarios } from "../../data/comentarios";
import { tags } from "../../data/tags";

export default function DashboardPage() {
  const totalNoticiasPublicadas = noticias.filter((n) => n.publicada).length;
  const totalNoticiasRascunho = noticias.filter((n) => !n.publicada).length;
  const totalComentarios = comentarios.length;
  const comentariosAprovados = comentarios.filter((c) => c.aprovado).length;
  const comentariosPendentes = comentarios.filter((c) => !c.aprovado).length;

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <div className={styles.headerContent}>
          <Link to="/" className={styles.logo}>
            📰 Portal de Notícias
          </Link>
          <nav className={styles.nav}>
            <Link to="/">Home</Link>
            <Link to="/admin/dashboard" className={styles.active}>
              Dashboard
            </Link>
            <Link to="/admin/usuarios">Usuários</Link>
            <Link to="/login">Sair</Link>
          </nav>
        </div>
      </header>

      <div className={styles.content}>
        <h1>Dashboard SuperAdmin</h1>

        {/* Estatísticas Principais */}
        <div className={styles.statsGrid}>
          <div className={styles.statCard}>
            <div className={styles.statValue}>{noticias.length}</div>
            <div className={styles.statLabel}>Total de Notícias</div>
          </div>
          <div className={styles.statCard}>
            <div className={styles.statValue}>{totalNoticiasPublicadas}</div>
            <div className={styles.statLabel}>Publicadas</div>
          </div>
          <div className={styles.statCard}>
            <div className={styles.statValue}>{totalNoticiasRascunho}</div>
            <div className={styles.statLabel}>Rascunhos</div>
          </div>
          <div className={styles.statCard}>
            <div className={styles.statValue}>{usuarios.length}</div>
            <div className={styles.statLabel}>Usuários</div>
          </div>
          <div className={styles.statCard}>
            <div className={styles.statValue}>{totalComentarios}</div>
            <div className={styles.statLabel}>Comentários</div>
          </div>
          <div className={styles.statCard}>
            <div className={styles.statValue}>{tags.length}</div>
            <div className={styles.statLabel}>Tags</div>
          </div>
        </div>

        {/* Resumo de Comentários */}
        <div className={styles.section}>
          <h2>Resumo de Comentários</h2>
          <div className={styles.commentStats}>
            <div className={styles.commentStat}>
              <span className={styles.label}>Aprovados:</span>
              <span className={styles.value}>{comentariosAprovados}</span>
            </div>
            <div className={styles.commentStat}>
              <span className={styles.label}>Pendentes:</span>
              <span className={styles.value}>{comentariosPendentes}</span>
            </div>
            <div className={styles.commentStat}>
              <span className={styles.label}>Total:</span>
              <span className={styles.value}>{totalComentarios}</span>
            </div>
          </div>
        </div>

        {/* Menu de Gerenciamento */}
        <div className={styles.section}>
          <h2>Gerenciamento</h2>
          <div className={styles.menuGrid}>
            <Link to="/admin/usuarios" className={styles.menuCard}>
              <div className={styles.menuIcon}>👥</div>
              <div className={styles.menuContent}>
                <h3>Usuários</h3>
                <p>Gerenciar usuários do sistema</p>
              </div>
            </Link>
            <Link to="/admin/noticias" className={styles.menuCard}>
              <div className={styles.menuIcon}>📰</div>
              <div className={styles.menuContent}>
                <h3>Notícias</h3>
                <p>Gerenciar todas as notícias</p>
              </div>
            </Link>
            <Link to="/admin/tags" className={styles.menuCard}>
              <div className={styles.menuIcon}>🏷️</div>
              <div className={styles.menuContent}>
                <h3>Tags</h3>
                <p>Gerenciar categorias</p>
              </div>
            </Link>
            <Link to="/admin/ufs" className={styles.menuCard}>
              <div className={styles.menuIcon}>🗺️</div>
              <div className={styles.menuContent}>
                <h3>Estados (UF)</h3>
                <p>Gerenciar estados</p>
              </div>
            </Link>
            <Link to="/admin/cidades" className={styles.menuCard}>
              <div className={styles.menuIcon}>🏙️</div>
              <div className={styles.menuContent}>
                <h3>Cidades</h3>
                <p>Gerenciar cidades</p>
              </div>
            </Link>
            <Link to="/admin/comentarios" className={styles.menuCard}>
              <div className={styles.menuIcon}>💬</div>
              <div className={styles.menuContent}>
                <h3>Comentários</h3>
                <p>Gerenciar comentários</p>
              </div>
            </Link>
          </div>
        </div>

        {/* Notícias Recentes */}
        <div className={styles.section}>
          <h2>Notícias Recentes</h2>
          <div className={styles.noticiasList}>
            {noticias.slice(0, 5).map((noticia) => (
              <div key={noticia.id} className={styles.noticiaItem}>
                <div className={styles.noticiaTitle}>{noticia.titulo}</div>
                <div className={styles.noticiaInfo}>
                  <span className={`${styles.status} ${noticia.publicada ? styles.published : styles.draft}`}>
                    {noticia.publicada ? "✅ Publicada" : "📝 Rascunho"}
                  </span>
                  <span>{noticia.criadoEm}</span>
                  <span>👁️ {noticia.visualizacoes}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <footer className={styles.footer}>
        <p>&copy; 2024 Portal de Notícias. Todos os direitos reservados.</p>
      </footer>
    </div>
  );
}
