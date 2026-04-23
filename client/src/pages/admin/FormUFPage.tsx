import { useState } from "react";
import { Link, useParams, useNavigate } from "react-router";
import styles from "./FormUFPage.module.css";
import { ufs } from "../../data/ufs";

export default function FormUFPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const isEditing = !!id;

  const ufToEdit = isEditing ? ufs.find((uf) => uf.id === Number(id)) : null;

  const [sigla, setSigla] = useState(ufToEdit?.sigla || "");
  const [nome, setNome] = useState(ufToEdit?.nome || "");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!sigla.trim() || !nome.trim()) {
      alert("Preencha todos os campos");
      return;
    }
    alert(isEditing ? "UF atualizada com sucesso!" : "UF criada com sucesso!");
    navigate("/admin/ufs");
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
          <div className={styles.formContainer}>
            <h1>
              {isEditing ? `Editar UF — ${ufToEdit?.sigla}` : "Nova UF"}
            </h1>

            <form onSubmit={handleSubmit} className={styles.form}>
              <div className={styles.formGroup}>
                <label htmlFor="sigla">Sigla</label>
                <input
                  id="sigla"
                  type="text"
                  value={sigla}
                  onChange={(e) => setSigla(e.target.value.toUpperCase())}
                  placeholder="Ex: SP"
                  maxLength={2}
                  className={styles.input}
                />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="nome">Nome</label>
                <input
                  id="nome"
                  type="text"
                  value={nome}
                  onChange={(e) => setNome(e.target.value)}
                  placeholder="Ex: São Paulo"
                  className={styles.input}
                />
              </div>

              <div className={styles.formButtons}>
                <button type="submit" className={styles.submitBtn}>
                  💾 Salvar
                </button>
                <Link to="/admin/ufs" className={styles.cancelBtn}>
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
