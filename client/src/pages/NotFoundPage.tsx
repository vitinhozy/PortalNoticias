import { Link } from "react-router";
import styles from "./NotFoundPage.module.css";

export default function NotFoundPage() {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>404</h1>
        <h2 className={styles.subtitle}>Página não encontrada</h2>
        <p className={styles.description}>
          Desculpe, a página que você está procurando não existe.
        </p>
        <Link to="/" className={styles.link}>
          Voltar para Home
        </Link>
      </div>
    </div>
  );
}
