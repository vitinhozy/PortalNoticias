import { useNavigate } from "react-router";
import styles from "./LoginPage.module.css";

export default function LoginPage() {
  const navigate = useNavigate();

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <h1>📰 Portal de Notícias</h1>
        <form onSubmit={(e) => { e.preventDefault(); }}>
          <input type="email" placeholder="E-mail" className={styles.input} />
          <input type="password" placeholder="Senha" className={styles.input} />
          <label className={styles.checkbox}>
            <input type="checkbox" /> Lembrar-me
          </label>
          <button type="submit" className={styles.btn}>Entrar</button>
        </form>
        <div className={styles.links}>
          <a href="/lembrar-senha">Esqueci minha senha</a>
          <a href="/cadastro">Não tem conta? Cadastre-se</a>
        </div>
        <div className={styles.quickAccess}>
          <h3>Acesso Rápido (Desenvolvimento)</h3>
          <div className={styles.quickButtons}>
            <button onClick={() => navigate("/leitor/perfil")} className={styles.quickBtn}>LEITOR</button>
            <button onClick={() => navigate("/autor/noticias")} className={styles.quickBtn}>AUTOR</button>
            <button onClick={() => navigate("/editor/painel")} className={styles.quickBtn}>EDITOR</button>
            <button onClick={() => navigate("/admin/dashboard")} className={styles.quickBtn}>SUPERADMIN</button>
          </div>
        </div>
      </div>
    </div>
  );
}
