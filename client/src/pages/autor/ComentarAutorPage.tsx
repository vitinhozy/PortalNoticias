import { useState } from "react";
import { useParams, Link, useNavigate } from "react-router";
import styles from "./ComentarAutorPage.module.css";
import { noticias } from "../../data/noticias";

export default function ComentarAutorPage() {
  const { noticiaId } = useParams();
  const navigate = useNavigate();
  const [comentario, setComentario] = useState("");
  const [enviado, setEnviado] = useState(false);

  const noticia = noticias.find((n) => n.id === Number(noticiaId));
  const maxChars = 500;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (comentario.trim()) {
      setEnviado(true);
      setTimeout(() => {
        navigate(`/noticia/${noticiaId}`);
      }, 2000);
    }
  };

  if (!noticia) {
    return (
      <div className={styles.container}>
        <div className={styles.error}>
          <h1>Notícia não encontrada</h1>
          <Link to="/">Voltar para Home</Link>
        </div>
      </div>
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
            <Link to="/autor/perfil">Perfil</Link>
            <Link to="/login">Sair</Link>
          </nav>
        </div>
      </header>

      <div className={styles.content}>
        <div className={styles.card}>
          <h1>Comentar Notícia</h1>

          <div className={styles.noticiaResume}>
            <img src={noticia.imagemCapa} alt={noticia.titulo} />
            <div className={styles.resumeContent}>
              <h3>{noticia.titulo}</h3>
              <p className={styles.autor}>Autor: Desconhecido</p>
            </div>
          </div>

          {!enviado ? (
            <form onSubmit={handleSubmit} className={styles.form}>
              <div className={styles.formGroup}>
                <label htmlFor="comentario">Seu comentário:</label>
                <textarea
                  id="comentario"
                  value={comentario}
                  onChange={(e) => setComentario(e.target.value)}
                  placeholder="Digite seu comentário aqui..."
                  maxLength={maxChars}
                  className={styles.textarea}
                />
                <div className={styles.charCounter}>
                  {comentario.length}/{maxChars} caracteres
                </div>
              </div>
              <button
                type="submit"
                disabled={!comentario.trim()}
                className={styles.submitBtn}
              >
                📤 Enviar Comentário
              </button>
            </form>
          ) : (
            <div className={styles.successMessage}>
              <p>✅ Comentário enviado com sucesso!</p>
              <p className={styles.redirectText}>
                Redirecionando para a notícia...
              </p>
            </div>
          )}

          <Link to={`/noticia/${noticiaId}`} className={styles.backLink}>
            ← Voltar para a Notícia
          </Link>
        </div>
      </div>

      <footer className={styles.footer}>
        <p>&copy; 2024 Portal de Notícias. Todos os direitos reservados.</p>
      </footer>
    </div>
  );
}
