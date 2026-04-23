import { useState } from "react";
import { Link } from "react-router";
import styles from "./PerfilLeitorPage.module.css";
import { usuarios } from "../../data/usuarios";
import { comentarios } from "../../data/comentarios";
import { noticias } from "../../data/noticias";

export default function PerfilLeitorPage() {
  const [isEditing, setIsEditing] = useState(false);
  const [userData, setUserData] = useState(usuarios[0]); // Leitor simulado

  const userComments = comentarios.filter((c) => c.autorId === userData.id);
  const cidadeNome = "São Paulo";
  const ufNome = "SP";

  const handleSave = () => {
    setIsEditing(false);
  };

  return (
    <div className={styles.container}>
      {/* Header */}
      <header className={styles.header}>
        <div className={styles.headerContent}>
          <Link to="/" className={styles.logo}>
            📰 Portal de Notícias
          </Link>
          <nav className={styles.nav}>
            <Link to="/">Home</Link>
            <Link to="/leitor/perfil" className={styles.active}>
              Perfil
            </Link>
            <Link to="/login">Sair</Link>
          </nav>
        </div>
      </header>

      <div className={styles.content}>
        {/* Seção de Perfil */}
        <section className={styles.profileSection}>
          <div className={styles.profileCard}>
            <div className={styles.profileHeader}>
              <div className={styles.avatar}>{userData.avatar}</div>
              <div className={styles.profileInfo}>
                <h1>{userData.nome}</h1>
                <p className={styles.perfil}>Leitor</p>
              </div>
            </div>

            {!isEditing ? (
              <div className={styles.profileDetails}>
                <div className={styles.detailItem}>
                  <span className={styles.label}>E-mail:</span>
                  <span>{userData.email}</span>
                </div>
                <div className={styles.detailItem}>
                  <span className={styles.label}>Cidade/UF:</span>
                  <span>
                    {cidadeNome}/{ufNome}
                  </span>
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

        {/* Seção de Comentários */}
        <section className={styles.commentsSection}>
          <h2>Meus Comentários ({userComments.length})</h2>
          {userComments.length > 0 ? (
            <div className={styles.commentsList}>
              {userComments.map((comment) => {
                const noticia = noticias.find((n) => n.id === comment.noticiaId);
                return (
                  <div key={comment.id} className={styles.commentItem}>
                    <div className={styles.commentHeader}>
                      <span className={styles.commentDate}>
                        {comment.criadoEm}
                      </span>
                      <span
                        className={`${styles.commentStatus} ${
                          comment.aprovado ? styles.approved : styles.pending
                        }`}
                      >
                        {comment.aprovado ? "✅ Aprovado" : "⏳ Pendente"}
                      </span>
                    </div>
                    <p className={styles.commentText}>{comment.texto}</p>
                    {noticia && (
                      <Link
                        to={`/noticia/${noticia.id}`}
                        className={styles.noticiaLink}
                      >
                        📰 {noticia.titulo}
                      </Link>
                    )}
                  </div>
                );
              })}
            </div>
          ) : (
            <p className={styles.emptyMessage}>
              Você ainda não fez nenhum comentário
            </p>
          )}
        </section>
      </div>

      {/* Footer */}
      <footer className={styles.footer}>
        <p>&copy; 2024 Portal de Notícias. Todos os direitos reservados.</p>
      </footer>
    </div>
  );
}
