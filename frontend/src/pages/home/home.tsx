import { Link, useParams } from "react-router-dom";
import { Outlet } from "react-router-dom";
import { authentication } from "~/auth/authentication";

export function Home() {
  const { id } = useParams();

  return (
    <>
      <div className="warning hidden">
        <h1>Your browser does not support</h1>
        <p>Please update your browser to the latest version</p>
      </div>

      <header className="main-header flex justify-around p-4 text-white">
        <h1 className="header-logo">
          <Link to={"/"}>Soluciona+</Link>
        </h1>

        <div className="nav-wrapper">
          <nav>
            <ul className="navbar__ul flex gap-2">
              <li className="navbar__item">
                <Link className="navbar__link" to={"/ticket/new"}>
                  Crie um ticket
                </Link>
              </li>
              <li className="navbar__item">
                <Link className="navbar__link" to={"/tickets"}>
                  Lista de tickets
                </Link>
              </li>
              <li className="navbar__item">
                {authentication() && (
                  <Link className="navbar__link" to={`user/${id}`}>
                    Perfil do Usuario
                  </Link>
                )}
              </li>
            </ul>
          </nav>
        </div>

        <ul className="user__section">
          {authentication() ? (
            <li className="user__logoff">
              <Link className="navbar__link" to={`/`}>
                Sair
              </Link>
            </li>
          ) : (
            <>
              <li className="user__signin">
                <Link className="user__link" to={"/signin"}>
                  Login
                </Link>
              </li>
              <li className="user__signup">
                <Link className="user__link" to={"/signup"}>
                  Cadastre-se
                </Link>
              </li>
            </>
          )}
        </ul>
      </header>

      <Outlet />

      <footer className="flex  bg-linear-to-l from-[#0F2027] via-[#203A43] to-[#2C5364] text-white">
        <div className="main__wrapper">
          <h1 className="footer-logo">
            <Link to={"/"}>Soluciona+</Link>
          </h1>
          <div className="footer-about__section">
            <p>
              O <strong>Soluciona+</strong> é uma plataforma dedicada à
              resolução colaborativa de problemas. Usuários podem abrir tickets
              para solicitar assistência em diversas áreas, enquanto outros
              membros da comunidade oferecem soluções e orientações. Nosso
              objetivo é promover um ambiente de troca de conhecimento, onde
              todos têm a oportunidade de colaborar e aprender.
            </p>
          </div>
        </div>

        <div className="quick-links__wrapper">
          <h2>Links rápidos</h2>
          <ul className="quick-links__list">
            <li className="quick-links_items">
              <Link to={"/signin"} className="quick__links">
                Login
              </Link>
            </li>
            <li className="quick-links_items">
              <Link to={"/signup"} className="quick__links">
                Cadastre-se
              </Link>
            </li>
            <li className="quick-links_items">
              <Link to={"/ticket/new"} className="quick__links">
                Abrir um ticket
              </Link>
            </li>
            <li className="quick-links_items">
              <a href="#" className="quick__links">
                Contato
              </a>
            </li>
          </ul>
        </div>

        <div className="copyright__wrapper">
          <span>
            Vinicius Bavosa &copy; {new Date().getFullYear()} Todos os direitos
            reservados.
          </span>
        </div>
      </footer>
    </>
  );
}
