import { Helmet } from 'react-helmet-async';
import { NavLink } from "react-router-dom";

function NotFound() {
    return(
        <>
            <Helmet>
                <title>Página no encontrada | Portafolio</title>
            </Helmet>

            <div className="mt-5">
                <i className="bi bi-exclamation-triangle-fill icon-404 fs-1"></i>
                <h1 className="display-4">¡Oops! Página no encontrada</h1>
                <p className="lead">La URL que buscabas no existe o fue cambiada.</p>
                <NavLink to="/" className="btn btn-warning btn-hover-efecto btn-home">
                    <i className="bi bi-house-door-fill me-2"></i>Volver al inicio
                </NavLink>
            </div>
        </>
    );
}

export default NotFound;