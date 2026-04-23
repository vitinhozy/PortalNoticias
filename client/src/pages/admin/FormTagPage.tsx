import { useState } from "react";
import { Link, useParams, useNavigate } from "react-router";
import styles from "./FormTagPage.module.css";
import { tags } from "../../data/tags";

export default function FormTagPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const isEditing = !!id;

  const tagToEdit = isEditing ? tags.find((t) => t.id === Number(id)) : null;

  const [nome, setNome] = useState(tagToEdit?.nome || "");
  const [slug, setSlug] = useState(tagToEdit?.slug || "");

  const generateSlug = (text: string) => {
    return text
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/(^-|-$)/g, "");
  };

  const handleNomeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setNome(value);
    if (!isEditing) {
      setSlug(generateSlug(value));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!nome.trim() || !slug.trim()) {
      alert("Preencha todos os campos");
      return;
    }
    alert(isEditing ? "Tag atualizada com sucesso!" : "Tag criada com sucesso!");
    navigate("/admin/tags");
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
          <div className={styles.formContainer}>
            <h1>{isEditing ? "Editar Tag" : "Nova Tag"}</h1>

            <form onSubmit={handleSubmit} className={styles.form}>
              <div className={styles.formGroup}>
                <label htmlFor="nome">Nome</label>
                <input
                  id="nome"
                  type="text"
                  value={nome}
                  onChange={handleNomeChange}
                  placeholder="Ex: Tecnologia"
                  className={styles.input}
                />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="slug">Slug (gerado automaticamente)</label>
                <input
                  id="slug"
                  type="text"
                  value={slug}
                  onChange={(e) => setSlug(e.target.value)}
                  placeholder="Ex: tecnologia"
                  className={styles.input}
                />
                <small>Slug: {slug || "será gerado automaticamente"}</small>
              </div>

              <div className={styles.preview}>
                <p>Preview:</p>
                <span className={styles.tagBadge}>{nome || "Tag"}</span>
              </div>

              <div className={styles.formButtons}>
                <button type="submit" className={styles.submitBtn}>
                  💾 Salvar
                </button>
                <Link to="/admin/tags" className={styles.cancelBtn}>
                  ❌ Cancelar
                </Link>
              </div>
            </form>
          </div>
        </main>
      </div>

      <footer className={styles.footer}>
        <p>&copy; 2024 Portal de Notícias. Todos os direitos reservados.</p>
      </footer>
    </div>
  );
}