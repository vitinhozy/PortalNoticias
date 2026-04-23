import { BrowserRouter, Routes, Route } from "react-router";

import HomePage from "./pages/publico/HomePage";
import LoginPage from "./pages/publico/LoginPage";
import CadastroPage from "./pages/publico/SignUpPage";
import LembrarSenhaPage from "./pages/publico/LembrarSenhaPage";
import BuscaPorUFPage from "./pages/publico/BuscaPorUFPage";
import BuscaPorTagPage from "./pages/publico/BuscaPorTagPage";
import DetalheNoticiaPage from "./pages/publico/DetalheNoticiaPage";

import PerfilLeitorPage from "./pages/leitor/PerfilLeitorPage";
import ComentarLeitorPage from "./pages/leitor/ComentarLeitorPage";

import PerfilAutorPage from "./pages/autor/PerfilAutorPage";
import ComentarAutorPage from "./pages/autor/ComentarAutorPage";
import MinhasNoticiasPage from "./pages/autor/MinhasNoticiasPage";
import NovaNoticiaPage from "./pages/autor/NovaNoticiaPage";
import EditarNoticiaPage from "./pages/autor/EditarNoticiaPage";

import PainelEditorPage from "./pages/editor/PainelEditorPage";
import PerfilEditorPage from "./pages/editor/PerfilEditorPage";
import PublicarDespublicarPage from "./pages/editor/PublicarDespublicarPage";
import EditarQualquerNoticiaPage from "./pages/editor/EditarQualquerNoticiaPage";

import DashboardPage from "./pages/admin/DashboardPage";
import CrudUFPage from "./pages/admin/CrudUFPage";
import FormUFPage from "./pages/admin/FormUFPage";
import CrudCidadesPage from "./pages/admin/CrudCidadesPage";
import FormCidadePage from "./pages/admin/FormCidadePage";
import CrudTagsPage from "./pages/admin/CrudTagsPage";
import FormTagPage from "./pages/admin/FormTagPage";
import CrudPerfisPage from "./pages/admin/CrudPerfisPage";
import CrudNoticiasPage from "./pages/admin/CrudNoticiasPage";
import FormNoticiaAdminPage from "./pages/admin/FormNoticiaAdminPage";
import CrudUsuariosPage from "./pages/admin/CrudUsuariosPage";
import FormUsuarioPage from "./pages/admin/FormUsuarioPage";
import GerenciarComentariosPage from "./pages/admin/GerenciarComentariosPage";

import NotFoundPage from "./pages/NotFoundPage";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Rotas Públicas */}
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/cadastro" element={<CadastroPage />} />
        <Route path="/lembrar-senha" element={<LembrarSenhaPage />} />
        <Route path="/busca/uf/:sigla" element={<BuscaPorUFPage />} />
        <Route path="/busca/tag/:slug" element={<BuscaPorTagPage />} />
        <Route path="/noticia/:id" element={<DetalheNoticiaPage />} />

        {/* Rotas Leitor */}
        <Route path="/leitor/perfil" element={<PerfilLeitorPage />} />
        <Route path="/leitor/comentar/:noticiaId" element={<ComentarLeitorPage />} />

        {/* Rotas Autor */}
        <Route path="/autor/perfil" element={<PerfilAutorPage />} />
        <Route path="/autor/comentar/:noticiaId" element={<ComentarAutorPage />} />
        <Route path="/autor/noticias" element={<MinhasNoticiasPage />} />
        <Route path="/autor/noticias/nova" element={<NovaNoticiaPage />} />
        <Route path="/autor/noticias/:id/editar" element={<EditarNoticiaPage />} />

        {/* Rotas Editor */}
        <Route path="/editor/painel" element={<PainelEditorPage />} />
        <Route path="/editor/perfil" element={<PerfilEditorPage />} />
        <Route path="/editor/publicar/:id" element={<PublicarDespublicarPage />} />
        <Route path="/editor/noticias/:id/editar" element={<EditarQualquerNoticiaPage />} />

        {/* Rotas SuperAdmin */}
        <Route path="/admin/dashboard" element={<DashboardPage />} />
        <Route path="/admin/ufs" element={<CrudUFPage />} />
        <Route path="/admin/ufs/nova" element={<FormUFPage />} />
        <Route path="/admin/ufs/:id/editar" element={<FormUFPage />} />
        <Route path="/admin/cidades" element={<CrudCidadesPage />} />
        <Route path="/admin/cidades/nova" element={<FormCidadePage />} />
        <Route path="/admin/cidades/:id/editar" element={<FormCidadePage />} />
        <Route path="/admin/tags" element={<CrudTagsPage />} />
        <Route path="/admin/tags/nova" element={<FormTagPage />} />
        <Route path="/admin/tags/:id/editar" element={<FormTagPage />} />
        <Route path="/admin/perfis" element={<CrudPerfisPage />} />
        <Route path="/admin/noticias" element={<CrudNoticiasPage />} />
        <Route path="/admin/noticias/:id/editar" element={<FormNoticiaAdminPage />} />
        <Route path="/admin/usuarios" element={<CrudUsuariosPage />} />
        <Route path="/admin/usuarios/:id/editar" element={<FormUsuarioPage />} />
        <Route path="/admin/comentarios" element={<GerenciarComentariosPage />} />

        {/* Rota Coringa */}
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}
