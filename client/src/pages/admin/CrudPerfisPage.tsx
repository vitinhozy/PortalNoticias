import { Link } from "react-router";
import styles from "./CrudPerfisPage.module.css";
import { usuarios } from "../../data/usuarios";

export default function CrudPerfisPage() {
  const perfis = [
    {
      nome: "Leitor",
      descricao: "Pode visualizar notícias e comentar",
      permissoes: ["Ler notícias", "Comentar", "Editar perfil"],
      cor: "#667eea",
      usuarios: usuarios.filter((u) => u.perfil === "LEITOR").length,
    },
    {
      nome: "Autor",
      descricao: "Pode criar e editar suas próprias notícias",
      permissoes: ["Ler notícias", "Criar notícias", "Editar notícias", "Comentar"],
      cor: "#764ba2",
      usuarios: usuarios.filter((u) => u.perfil === "AUTOR").length,
    },
    {
      nome: "Editor",
      descricao: "Pode revisar e publicar notícias",
      permissoes: ["Revisar notícias", "Publicar", "Moderar comentários"],
      cor: "#f093fb",
      usuarios: usuarios.filter((u) => u.perfil === "EDITOR").length,
    },
    {
      nome: "SuperAdmin",
      descricao: "Acesso total ao sistema",
      permissoes: ["Gerenciar tudo", "CRUD completo", "Configurações"],
      cor: "#4facfe",
      usuarios: usuarios.filter((u) => u.perfil === "SUPERADMIN").length,
    },
  ];

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
            <Link to="/admin/perfis" className={`${styles.navItem} ${styles.active}`}>
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
          <h1>Perfis do Sistema</h1>
          <p className={styles.subtitle}>Visualização somente leitura dos perfis disponíveis</p>

          <div className={styles.perfisGrid}>
            {perfis.map((perfil) => (
              <div
                key={perfil.nome}
                className={styles.perfilCard}
                style={{ borderTopColor: perfil.cor }}
              >
                <h2 style={{ color: perfil.cor }}>{perfil.nome}</h2>
                <p className={styles.descricao}>{perfil.descricao}</p>

                <div className={styles.permissoes}>
                  <h3>Permissões:</h3>
                  <ul>
                    {perfil.permissoes.map((perm) => (
                      <li key={perm}>✓ {perm}</li>
                    ))}
                  </ul>
                </div>

                <div className={styles.usuarios}>
                  <strong>{perfil.usuarios}</strong> usuários
                </div>
              </div>
            ))}
          </div>
        </main>
      </div>

      <footer className={styles.footer}>
        <p>&copy; 2024 Portal de Notícias. Todos os direitos reservados.</p>
      </footer>
    </div>
  );
}