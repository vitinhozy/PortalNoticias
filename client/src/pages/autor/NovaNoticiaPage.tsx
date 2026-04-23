import { useState } from "react";
import { Link, useNavigate } from "react-router";
import styles from "./NovaNoticiaPage.module.css";
import { tags } from "../../data/tags";
import { ufs } from "../../data/ufs";
import { cidades } from "../../data/cidades";

export default function NovaNoticiaPage() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    titulo: "",
    subtitulo: "",
    imagemCapa: "",
    conteudo: "",
    ufId: 25,
    cidadeId: 1,
    tags: [] as number[],
  });

  const cidadesDoEstado = cidades.filter((c) => c.ufId === formData.ufId);

  const handleTagToggle = (tagId: number) => {
    setFormData((prev) => ({
      ...prev,
      tags: prev.tags.includes(tagId)
        ? prev.tags.filter((t) => t !== tagId)
        : [...prev.tags, tagId].slice(0, 5),
    }));
  };

  const handleSubmit = (e: React.FormEvent, asDraft: boolean) => {
    e.preventDefault();
    if (formData.titulo.trim()) {
      alert(
        `Notícia ${asDraft ? "salva como rascunho" : "enviada para revisão"}!`
      );
      navigate("/autor/noticias");
    }
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
            <Link to="/autor/noticias">Minhas Notícias</Link>
            <Link to="/login">Sair</Link>
          </nav>
        </div>
      </header>

      <div className={styles.content}>
        <h1>Criar Nova Notícia</h1>
        <form onSubmit={(e) => handleSubmit(e, false)} className={styles.form}>
          <div className={styles.formGroup}>
            <label>Título *</label>
            <input
              type="text"
              required
              value={formData.titulo}
              onChange={(e) =>
                setFormData({ ...formData, titulo: e.target.value })
              }
              placeholder="Digite o título da notícia"
            />
          </div>

          <div className={styles.formGroup}>
            <label>Subtítulo</label>
            <input
              type="text"
              value={formData.subtitulo}
              onChange={(e) =>
                setFormData({ ...formData, subtitulo: e.target.value })
              }
              placeholder="Digite o subtítulo"
            />
          </div>

          <div className={styles.formGroup}>
            <label>URL da Imagem de Capa</label>
            <input
              type="url"
              value={formData.imagemCapa}
              onChange={(e) =>
                setFormData({ ...formData, imagemCapa: e.target.value })
              }
              placeholder="https://exemplo.com/imagem.jpg"
            />
            {formData.imagemCapa && (
              <img
                src={formData.imagemCapa}
                alt="Preview"
                className={styles.imagePreview}
              />
            )}
          </div>

          <div className={styles.formRow}>
            <div className={styles.formGroup}>
              <label>UF</label>
              <select
                value={formData.ufId}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    ufId: Number(e.target.value),
                    cidadeId: 1,
                  })
                }
              >
                {ufs.map((uf) => (
                  <option key={uf.id} value={uf.id}>
                    {uf.nome}
                  </option>
                ))}
              </select>
            </div>

            <div className={styles.formGroup}>
              <label>Cidade</label>
              <select
                value={formData.cidadeId}
                onChange={(e) =>
                  setFormData({ ...formData, cidadeId: Number(e.target.value) })
                }
              >
                {cidadesDoEstado.map((cidade) => (
                  <option key={cidade.id} value={cidade.id}>
                    {cidade.nome}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className={styles.formGroup}>
            <label>Conteúdo *</label>
            <textarea
              required
              value={formData.conteudo}
              onChange={(e) =>
                setFormData({ ...formData, conteudo: e.target.value })
              }
              placeholder="Digite o conteúdo da notícia"
              rows={10}
            />
          </div>

          <div className={styles.formGroup}>
            <label>Tags (máximo 5)</label>
            <div className={styles.tagsContainer}>
              {tags.map((tag) => (
                <label key={tag.id} className={styles.tagCheckbox}>
                  <input
                    type="checkbox"
                    checked={formData.tags.includes(tag.id)}
                    onChange={() => handleTagToggle(tag.id)}
                    disabled={formData.tags.length >= 5 && !formData.tags.includes(tag.id)}
                  />
                  <span className={styles.tagLabel}>{tag.nome}</span>
                </label>
              ))}
            </div>
          </div>

          <div className={styles.formButtons}>
            <button
              type="button"
              className={styles.draftBtn}
              onClick={(e) => handleSubmit(e, true)}
            >
              📝 Salvar como Rascunho
            </button>
            <button type="submit" className={styles.submitBtn}>
              📤 Enviar para Revisão
            </button>
          </div>
        </form>
      </div>

      <footer className={styles.footer}>
        <p>&copy; 2024 Portal de Notícias. Todos os direitos reservados.</p>
      </footer>
    </div>
  );
}
