import { useState } from "react";
import { Link, useNavigate } from "react-router";
import styles from "./SignUpPage.module.css";
import { ufs } from "../../data/ufs";
import { cidades } from "../../data/cidades";

export default function SignUpPage() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    senha: "",
    confirmarSenha: "",
    ufId: "",
    cidadeId: "",
    bio: "",
    aceitarTermos: false,
  });

  const [erros, setErros] = useState<Record<string, string>>({});
  const [cidadesFiltered, setCidadesFiltered] = useState(cidades);

  const handleUFChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const ufId = e.target.value;
    setFormData({ ...formData, ufId, cidadeId: "" });
    
    const ufIdNum = Number(ufId);
    
    if (ufIdNum) {
      const filtered = cidades.filter((c) => c.ufId === ufIdNum);
      setCidadesFiltered(filtered);
    } else {
      setCidadesFiltered(cidades);
    }
  };

  const validarFormulario = () => {
    const novosErros: Record<string, string> = {};

    if (!formData.nome.trim()) {
      novosErros.nome = "Nome é obrigatório";
    }

    if (!formData.email.trim()) {
      novosErros.email = "E-mail é obrigatório";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      novosErros.email = "E-mail inválido";
    }

    if (!formData.senha) {
      novosErros.senha = "Senha é obrigatória";
    } else if (formData.senha.length < 6) {
      novosErros.senha = "Senha deve ter no mínimo 6 caracteres";
    }

    if (formData.confirmarSenha !== formData.senha) {
      novosErros.confirmarSenha = "As senhas não conferem";
    }

    if (!formData.ufId) {
      novosErros.ufId = "Selecione um estado";
    }

    if (!formData.cidadeId) {
      novosErros.cidadeId = "Selecione uma cidade";
    }

    if (!formData.aceitarTermos) {
      novosErros.aceitarTermos = "Você deve aceitar os termos de uso";
    }

    setErros(novosErros);
    return Object.keys(novosErros).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (validarFormulario()) {
      alert("Cadastro realizado com sucesso!");
      navigate("/login");
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type } = e.target;
    
    if (type === "checkbox") {
      setFormData({
        ...formData,
        [name]: (e.target as HTMLInputElement).checked,
      });
    } else {
      setFormData({ ...formData, [name]: value });
    }

    if (erros[name]) {
      setErros({ ...erros, [name]: "" });
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
            <Link to="/login">Login</Link>
          </nav>
        </div>
      </header>

      <main className={styles.main}>
        <div className={styles.formWrapper}>
          <div className={styles.formContainer}>
            <h1>Criar Conta</h1>
            <p className={styles.subtitle}>
              Preencha os dados abaixo para criar sua conta
            </p>

            <form onSubmit={handleSubmit} className={styles.form}>
              <div className={styles.formGroup}>
                <label htmlFor="nome">Nome Completo *</label>
                <input
                  id="nome"
                  type="text"
                  name="nome"
                  value={formData.nome}
                  onChange={handleChange}
                  placeholder="Seu nome completo"
                  className={`${styles.input} ${erros.nome ? styles.inputError : ""}`}
                />
                {erros.nome && <span className={styles.erro}>{erros.nome}</span>}
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="email">E-mail *</label>
                <input
                  id="email"
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="seu.email@exemplo.com"
                  className={`${styles.input} ${erros.email ? styles.inputError : ""}`}
                />
                {erros.email && <span className={styles.erro}>{erros.email}</span>}
              </div>

              <div className={styles.formRow}>
                <div className={styles.formGroup}>
                  <label htmlFor="senha">Senha *</label>
                  <input
                    id="senha"
                    type="password"
                    name="senha"
                    value={formData.senha}
                    onChange={handleChange}
                    placeholder="Mínimo 6 caracteres"
                    className={`${styles.input} ${erros.senha ? styles.inputError : ""}`}
                  />
                  {erros.senha && <span className={styles.erro}>{erros.senha}</span>}
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="confirmarSenha">Confirmar Senha *</label>
                  <input
                    id="confirmarSenha"
                    type="password"
                    name="confirmarSenha"
                    value={formData.confirmarSenha}
                    onChange={handleChange}
                    placeholder="Confirme sua senha"
                    className={`${styles.input} ${erros.confirmarSenha ? styles.inputError : ""}`}
                  />
                  {erros.confirmarSenha && (
                    <span className={styles.erro}>{erros.confirmarSenha}</span>
                  )}
                </div>
              </div>

              <div className={styles.formRow}>
                <div className={styles.formGroup}>
                  <label htmlFor="ufId">Estado *</label>
                  <select
                    id="ufId"
                    name="ufId"
                    value={String(formData.ufId)}
                    onChange={handleUFChange}
                    className={`${styles.input} ${erros.ufId ? styles.inputError : ""}`}
                  >
                    <option value="">Selecione um estado</option>
                    {ufs.map((uf) => (
                      <option key={uf.id} value={uf.id}>
                        {uf.sigla} - {uf.nome}
                      </option>
                    ))}
                  </select>
                  {erros.ufId && <span className={styles.erro}>{erros.ufId}</span>}
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="cidadeId">Cidade *</label>
                  <select
                    id="cidadeId"
                    name="cidadeId"
                    value={formData.cidadeId}
                    onChange={handleChange}
                    className={`${styles.input} ${erros.cidadeId ? styles.inputError : ""}`}
                    disabled={!formData.ufId}
                  >
                    <option value="">Selecione uma cidade</option>
                    {cidadesFiltered.map((cidade) => (
                      <option key={cidade.id} value={cidade.id}>
                        {cidade.nome}
                      </option>
                    ))}
                  </select>
                  {erros.cidadeId && <span className={styles.erro}>{erros.cidadeId}</span>}
                </div>
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="bio">Bio (Opcional)</label>
                <textarea
                  id="bio"
                  name="bio"
                  value={formData.bio}
                  onChange={handleChange}
                  placeholder="Conte um pouco sobre você..."
                  className={styles.textarea}
                  maxLength={500}
                />
                <small className={styles.charCount}>
                  {formData.bio.length}/500 caracteres
                </small>
              </div>

              <div className={styles.checkboxGroup}>
                <input
                  id="aceitarTermos"
                  type="checkbox"
                  name="aceitarTermos"
                  checked={formData.aceitarTermos}
                  onChange={handleChange}
                  className={styles.checkbox}
                />
                <label htmlFor="aceitarTermos" className={styles.checkboxLabel}>
                  Aceito os{" "}
                  <a href="#" onClick={(e) => e.preventDefault()}>
                    termos de uso
                  </a>{" "}
                  e a{" "}
                  <a href="#" onClick={(e) => e.preventDefault()}>
                    política de privacidade
                  </a>
                  *
                </label>
              </div>
              {erros.aceitarTermos && (
                <span className={styles.erro}>{erros.aceitarTermos}</span>
              )}

              <button type="submit" className={styles.submitBtn}>
                📝 Criar Conta
              </button>

              <p className={styles.loginLink}>
                Já tem conta?{" "}
                <Link to="/login" className={styles.link}>
                  Faça login aqui
                </Link>
              </p>
            </form>
          </div>

          <div className={styles.infoBox}>
            <h2>Por que se cadastrar?</h2>
            <ul>
              <li>✅ Acesse notícias exclusivas</li>
              <li>✅ Comente e participe da comunidade</li>
              <li>✅ Receba notificações personalizadas</li>
              <li>✅ Salve seus artigos favoritos</li>
              <li>✅ Publique suas próprias notícias</li>
            </ul>
          </div>
        </div>
      </main>

      <footer className={styles.footer}>
        <p>&copy; 2024 Portal de Notícias. Todos os direitos reservados.</p>
      </footer>
    </div>
  );
}
