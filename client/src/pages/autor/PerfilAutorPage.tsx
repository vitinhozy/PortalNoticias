import { useState } from "react";
import { Link } from "react-router";
import styles from "./PerfilAutorPage.module.css";
import { usuarios } from "../../data/usuarios";
import { noticias } from "../../data/noticias";

export default function PerfilAutorPage() {
  const [isEditing, setIsEditing] = useState(false);
  const [userData, setUserData] = useState(usuarios[5]); // Autor simulado

  const autorNoticias = noticias.filter((n) => n.autorId === userData.id);
  const noticiasPublicadas = autorNoticias.filter((n) => n.publicada);
  const rascunhos = autorNoticias.filter((n) => !n.publicada);
  const totalVisualizacoes = autorNoticias.reduce(
    (sum, n) => sum + n.visualizacoes,
    0
  );

  const handleSave = () => {
    setIsEditing(false);
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
            <Link to="/autor/noticias">Minhas Notícias</Link>
            <Link to="/autor/perfil" className={styles.active}>
              Perfil
            </Link>
            <Link to="/login">Sair</Link>
          </nav>
        </div>
      </header>

      <div className={styles.content}>
        <section className={styles.profileSection}>
          <div className={styles.profileCard}>
            <div className={styles.profileHeader}>
              <div className={styles.avatar}>{userData.avatar}</div>
              <div className={styles.profileInfo}>
                <h1>{userData.nome}</h1>
                <p className={styles.perfil}>Autor</p>
              </div>
            </div>

            {!isEditing ? (
              <div className={styles.profileDetails}>
                <div className={styles.detailItem}>
                  <span className={styles.label}>E-mail:</span>
                  <span>{userData.email}</span>
                </div>
                <div className={styles.detailItem}>
                  <span className={styles.label}>Bio:</span>
                  <span>{userData.bio || "Sem bio"}</span>
                </div>
                <div className={styles.detailItem}>
                  <span className={styles.label}>Cadastrado em:</span>
                  <span>{userData.criadoEm}</span>
                </div>
                <button
                  className={styles.editBtn}
                  onClick={() => setIsEditing(true)}
                >
                  ✏️ Editar Perfil
                </button>
              </div>
            ) : (
              <div className={styles.editForm}>
                <div className={styles.formGroup}>
                  <label>Nome</label>
                  <input
                    type="text"
                    value={userData.nome}
                    onChange={(e) =>
                      setUserData({ ...userData, nome: e.target.value })
                    }
                  />
                </div>
                <div className={styles.formGroup}>
                  <label>Bio</label>
                  <textarea
                    value={userData.bio || ""}
                    onChange={(e) =>
                      setUserData({ ...userData, bio: e.target.value })
                    }
                  />
                </div>
                <div className={styles.formButtons}>
                  <button className={styles.saveBtn} onClick={handleSave}>
                    💾 Salvar
                  </button>
                  <button
                    className={styles.cancelBtn}
                    onClick={() => setIsEditing(false)}
                  >
                    ❌ Cancelar
                  </button>
                </div>
              </div>
            )}
          </div>
        </section>

        <section className={styles.statsSection}>
          <h2>Estatísticas</h2>
          <div className={styles.statsGrid}>
            <div className={styles.statCard}>
              <div className={styles.statValue}>{autorNoticias.length}</div>
              <div className={styles.statLabel}>Total de Notícias</div>
            </div>
            <div className={styles.statCard}>
              <div className={styles.statValue}>{noticiasPublicadas.length}</div>
              <div className={styles.statLabel}>Publicadas</div>
            </div>
            <div className={styles.statCard}>
              <div className={styles.statValue}>{rascunhos.length}</div>
              <div className={styles.statLabel}>Rascunhos</div>
            </div>
            <div className={styles.statCard}>
              <div className={styles.statValue}>{totalVisualizacoes}</div>
              <div className={styles.statLabel}>Visualizações</div>
            </div>
          </div>
        </section>

        <section className={styles.noticiasSection}>
          <h2>Minhas Notícias Recentes</h2>
          {autorNoticias.length > 0 ? (
            <div className={styles.noticiasList}>
              {autorNoticias.slice(0, 5).map((noticia) => (
                <div key={noticia.id} className={styles.noticiaItem}>
                  <img src={noticia.imagemCapa} alt={noticia.titulo} />
                  <div className={styles.noticiaContent}>
                    <h3>{noticia.titulo}</h3>
                    <p>{noticia.subtitulo}</p>
                    <div className={styles.noticiaFooter}>
                      <span className={styles.date}>{noticia.criadoEm}</span>
                      <span
                        className={`${styles.status} ${
                          noticia.publicada ? styles.published : styles.draft
                        }`}
                      >
                        {noticia.publicada ? "📤 Publicada" : "📝 Rascunho"}
                      </span>
                      <span className={styles.views}>
                        👁️ {noticia.visualizacoes}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <p className={styles.emptyMessage}>
              Você ainda não escreveu nenhuma notícia
            </p>
          )}
          <Link to="/autor/noticias" className={styles.viewAllLink}>
            Ver todas as notícias →
          </Link>
        </section>
      </div>

      <footer className={styles.footer}>
        <p>&copy; 2024 Portal de Notícias. Todos os direitos reservados.</p>
      </footer>
    </div>
  );
}
