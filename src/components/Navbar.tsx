import {
  ReactElement,
  JSXElementConstructor,
  ReactNode,
  ReactPortal
} from 'react'

/* eslint-disable @typescript-eslint/no-explicit-any */
interface NavbarProps {
  pages: any
}

const Navbar = ({ pages }: NavbarProps) => (
  <>
    <nav className="navbar navbar-default navbar-static-top">
      <div className="container">
        <div className="navbar-header">
          <button
            className="navbar-toggle"
            aria-expanded="false"
            aria-controls="navbar"
            data-toggle="collapse"
            data-target="#navbar"
          >
            <span className="sr-only">Toggle navigation</span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
          </button>
          <a
            href="/"
            className="navbar-brand"
          >
            <img
              src="{% static 'img/efforia.png' %}"
              alt="Plethora"
            />
          </a>
        </div>
        <div
          id="navbar"
          className="nav-collapse"
        >
          <ul className="nav navbar-nav">
            <li>
              <a href="facebook">Facebook</a>
            </li>
            <li>
              <a href="twitter">Twitter</a>
            </li>
            <li>
              <a href="http://www.youtube.com/user/EfforiaTV">YouTube</a>
            </li>
            {pages.map(
              (
                p:
                  | string
                  | number
                  | boolean
                  | ReactElement<any, string | JSXElementConstructor<any>>
                  | Iterable<ReactNode>
                  | ReactPortal
                  | null
                  | undefined
              ) => (
                <li>
                  <a
                    href="#"
                    className="page"
                  >
                    {p}
                  </a>
                </li>
              )
            )}
          </ul>
          <form
            action="efforia/enter"
            className="navbar-form navbar-right"
          >
            <div className="form-group">
              <input
                name="username"
                type="text"
                placeholder="Usuário"
                className="form-control"
              />
              <input
                name="password"
                type="password"
                placeholder="Senha"
                className="form-control"
              />
            </div>
            <button
              type="submit"
              data-loading-text="Entrando..."
              className="btn btn-default login"
            >
              Entrar
            </button>
            <button className="btn register btn-primary">Participar</button>
          </form>
        </div>
      </div>
    </nav>
    <div className="container-fluid text-center main">{/* children */}</div>
  </>
)

export default Navbar
