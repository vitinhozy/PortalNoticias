import { useState } from "react";
import { Link } from "react-router";
import styles from "./HomePage.module.css";
import { noticias } from "../../data/noticias";
import { tags } from "../../data/tags";
import { ufs } from "../../data/ufs";

export default function HomePage() {
  const [selectedUF, setSelectedUF] = useState<string>("");
  const [searchTerm, setSearchTerm] = useState<string>("");

  const noticiasPublicadas = noticias.filter((n) => n.publicada);
  const noticiaDestaque = noticiasPublicadas[0];
  const noticiasGrid = noticiasPublicadas.slice(1);

  return (
    <div className={styles.container}>
      {/* Header */}
      <header className={styles.header}>
        <div className={styles.headerContent}>
          <div className={styles.logo}>📰 Portal de Notícias</div>
          <nav className={styles.nav}>
            <Link to="/">Home</Link>
            <Link to="/login">Login</Link>
            <Link to="/cadastro">Cadastro</Link>
          </nav>
        </div>
      </header>

      {/* Hero */}
      {noticiaDestaque && (
        <section className={styles.hero}>
          <img src={noticiaDestaque.imagemCapa} alt={noticiaDestaque.titulo} />
          <div className={styles.heroContent}>
            <h1>{noticiaDestaque.titulo}</h1>
            <Link to={`/noticia/${noticiaDestaque.id}`} className={styles.btnLerMais}>
              Ler mais
            </Link>
          </div>
        </section>
      )}

      {/* Filtros */}
      <section className={styles.filtros}>
        <div className={styles.searchBar}>
          <input
            type="text"
            placeholder="🔍 Buscar notícias..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <select
          value={selectedUF}
          onChange={(e) => setSelectedUF(e.target.value)}
          className={styles.ufSelector}
        >
          <option value="">Todas as UFs</option>
          {ufs.map((uf) => (
            <option key={uf.id} value={uf.sigla}>
              {uf.nome}
            </option>
          ))}
        </select>
      </section>

      {/* Tags */}
      <section className={styles.tagsSection}>
        <h2>Tags Populares</h2>
        <div className={styles.tagsList}>
          {tags.map((tag) => (
            <Link
              key={tag.id}
              to={`/busca/tag/${tag.slug}`}
              className={styles.tagBadge}
            >
              {tag.nome}
            </Link>
          ))}
        </div>
      </section>

      {/* Grid de Notícias */}
      <section className={styles.noticiasGrid}>
        <h2>Últimas Notícias</h2>
        <div className={styles.grid}>
          {noticiasGrid.map((noticia) => (
            <Link
              key={noticia.id}
              to={`/noticia/${noticia.id}`}
              className={styles.noticiaCard}
            >
              <img src={noticia.imagemCapa} alt={noticia.titulo} />
              <div className={styles.cardContent}>
                <h3>{noticia.titulo}</h3>
                <p className={styles.subtitulo}>{noticia.subtitulo}</p>
                <div className={styles.cardMeta}>
                  <span className={styles.autor}>Autor</span>
                  <span className={styles.data}>{noticia.criadoEm}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className={styles.footer}>
        <p>&copy; 2024 Portal de Notícias. Todos os direitos reservados.</p>
        <nav className={styles.footerNav}>
          <a href="#sobre">Sobre</a>
          <a href="#contato">Contato</a>
          <a href="#termos">Termos</a>
        </nav>
      </footer>
    </div>
  );
}
