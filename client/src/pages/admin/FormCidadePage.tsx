import { useState } from "react";
import { Link, useParams, useNavigate } from "react-router";
import styles from "./FormCidadePage.module.css";
import { cidades } from "../../data/cidades";
import { ufs } from "../../data/ufs";

export default function FormCidadePage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const isEditing = !!id;

  const cidadeToEdit = isEditing ? cidades.find((c) => c.id === Number(id)) : null;

  const [nome, setNome] = useState(cidadeToEdit?.nome || "");
  const [ufId, setUfId] = useState(cidadeToEdit?.ufId || "");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!nome.trim() || !ufId) {
      alert("Preencha todos os campos");
      return;
    }
    alert(isEditing ? "Cidade atualizada com sucesso!" : "Cidade criada com sucesso!");
    navigate("/admin/cidades");
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
          <div className={styles.formContainer}>
            <h1>{isEditing ? "Editar Cidade" : "Nova Cidade"}</h1>

            <form onSubmit={handleSubmit} className={styles.form}>
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

              <div className={styles.formGroup}>
                <label htmlFor="ufId">UF</label>
                <select
                  id="ufId"
                  value={ufId}
                  onChange={(e) => setUfId(e.target.value)}
                  className={styles.input}
                >
                  <option value="">Selecione uma UF</option>
                  {ufs.map((uf) => (
                    <option key={uf.id} value={uf.id}>
                      {uf.sigla} - {uf.nome}
                    </option>
                  ))}
                </select>
              </div>

              <div className={styles.formButtons}>
                <button type="submit" className={styles.submitBtn}>
                  💾 Salvar
                </button>
                <Link to="/admin/cidades" className={styles.cancelBtn}>
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