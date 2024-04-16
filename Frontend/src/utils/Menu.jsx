import { NavLink } from "react-router-dom";

export function Menu() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <NavLink to="/" className="navbar-brand" end>
          Eventlogs
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <ul className="navbar-nav d-flex">
            <li className="nav-item">
              <NavLink to="/" className="nav-link">
                Lista de Eventos
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/eventlogs/create" className="nav-link">
                Crear Evento
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
