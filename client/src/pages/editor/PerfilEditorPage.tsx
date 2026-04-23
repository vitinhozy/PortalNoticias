import { useState } from "react";
import { Link } from "react-router";
import styles from "./PerfilEditorPage.module.css";
import { usuarios } from "../../data/usuarios";
import { noticias } from "../../data/noticias";

export default function PerfilEditorPage() {
  const [isEditing, setIsEditing] = useState(false);
  const [userData, setUserData] = useState(usuarios[6]); // Editor simulado

  const noticiasRevisadas = noticias.filter((n) => n.publicada).length;
  const noticiasRejeitadas = noticias.filter((n) => !n.publicada).length;

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
            <Link to="/editor/painel">Painel</Link>
            <Link to="/editor/perfil" className={styles.active}>
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
                <p className={styles.perfil}>Editor</p>
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
          <h2>Estatísticas de Edição</h2>
          <div className={styles.statsGrid}>
            <div className={styles.statCard}>
              <div className={styles.statValue}>{noticiasRevisadas}</div>
              <div className={styles.statLabel}>Notícias Revisadas</div>
            </div>
            <div className={styles.statCard}>
              <div className={styles.statValue}>{noticiasRejeitadas}</div>
              <div className={styles.statLabel}>Notícias Rejeitadas</div>
            </div>
            <div className={styles.statCard}>
              <div className={styles.statValue}>
                {Math.round((noticiasRevisadas / (noticiasRevisadas + noticiasRejeitadas)) * 100)}%
              </div>
              <div className={styles.statLabel}>Taxa de Aprovação</div>
            </div>
          </div>
        </section>

        <section className={styles.actionsSection}>
          <h2>Ações Rápidas</h2>
          <div className={styles.actionsList}>
            <Link to="/editor/painel" className={styles.actionCard}>
              <div className={styles.actionIcon}>📋</div>
              <div className={styles.actionContent}>
                <h3>Ir para Painel</h3>
                <p>Revise notícias pendentes</p>
              </div>
            </Link>
            <Link to="/editor/comentarios" className={styles.actionCard}>
              <div className={styles.actionIcon}>💬</div>
              <div className={styles.actionContent}>
                <h3>Gerenciar Comentários</h3>
                <p>Aprove ou rejeite comentários</p>
              </div>
            </Link>
            <Link to="/" className={styles.actionCard}>
              <div className={styles.actionIcon}>🏠</div>
              <div className={styles.actionContent}>
                <h3>Voltar para Home</h3>
                <p>Visualizar portal</p>
              </div>
            </Link>
          </div>
        </section>
      </div>

      <footer className={styles.footer}>
        <p>&copy; 2024 Portal de Notícias. Todos os direitos reservados.</p>
      </footer>
    </div>
  );
}
