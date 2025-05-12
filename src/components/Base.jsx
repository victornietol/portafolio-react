import { Outlet, NavLink } from "react-router-dom";
import { useEffect, useRef, useState } from "react";

function Base() {
    const navbarRef = useRef(null);
    const btnSubirRef = useRef(null);
    const [currentScale, setCurrentScale] = useState(1);
    const prevScrollY = useRef(window.scrollY);
    const [modalSrc, setModalSrc] = useState("");
    const imagenModalRef = useRef(null);
    const modalElementRef = useRef(null);
    const modalRef = useRef(null);

    useEffect(() => {
        if (modalElementRef.current) {
            modalRef.current = new bootstrap.Modal(modalElementRef.current);
        }

        const handleScroll = () => {
            const currentScrollY = window.scrollY;

            // Ocultar o mostrar navbar
            if (navbarRef.current) {
                navbarRef.current.style.top = prevScrollY.current > currentScrollY ? "0" : "-180px";
            }
            prevScrollY.current = currentScrollY;

            // Mostrar u ocultar botón de subir
            if (btnSubirRef.current) {
                btnSubirRef.current.style.display = currentScrollY > 300 ? "block" : "none";
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const handleSubir = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    const handleZoomIn = () => {
        const newScale = currentScale + 0.1;
        setCurrentScale(newScale);
        if (imagenModalRef.current) {
            imagenModalRef.current.style.transform = `scale(${newScale})`;
        }
    };

    const handleZoomOut = () => {
        if (currentScale > 0.2) {
            const newScale = currentScale - 0.1;
            setCurrentScale(newScale);
            if (imagenModalRef.current) {
                imagenModalRef.current.style.transform = `scale(${newScale})`;
            }
        }
    };

    const resetZoom = () => {
        setCurrentScale(1);
        if (imagenModalRef.current) {
            imagenModalRef.current.style.transform = `scale(1)`;
        }
    };


    return (
        <>
            <nav ref={navbarRef} id="navbar" className="navbar navbar-expand-lg navbar-light bg-azulMarinoOscuro navbar-dark fixed-top navbar-transition" style={{ backgroundColor: "#00052f", transition: "top 0.15s" }}>
                <div className="container">
                    <NavLink to="/" className="navbar-brand">
                        <i className="bi bi-power"></i> Portafolio
                    </NavLink>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item">
                                <NavLink to="/" className={({ isActive }) => "nav-link" + (isActive ? " active" : "")}>
                                <i className="bi bi-house-door-fill"></i> Inicio
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/proyectos" className={({ isActive }) => "nav-link" + (isActive ? " active" : "")}>
                                <i className="bi bi-terminal-fill"></i> Proyectos
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/contacto" className={({ isActive }) => "nav-link" + (isActive ? " active" : "")}>
                                <i className="bi bi-person-fill"></i> Contacto
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

            <main className="container py-5 flex-grow-1" style={{ paddingTop: "70px" }}>
                {/* Aqui se renderiza el contenido de las paginas */}
                <Outlet context={{ setModalSrc, openModal: () => modalRef.current?.show() }} />

                <button ref={btnSubirRef} id="btn-subir" title="Subir al inicio de la página" className="btn btn-light position-fixed bottom-0 end-0 m-3 rounded animate__animated animate__backInUp" style={{ display: "none", width: "45px", height: "45px" }}  onClick={handleSubir}>
                    <i className="bi bi-arrow-up"></i>
                </button>
            </main>

            <footer className="bg-dark text-secondary text-center py-3 mt-auto">
                <p className="mb-0">
                    2025 | Victor Manuel Nieto Licona | <NavLink to="/contacto">Contacto</NavLink>
                </p>
            </footer>

            {/* Modal para poder mostrar la imagen con zoom */}
            <div ref={modalElementRef} className="modal fade" id="modalImagen" tabIndex="-1" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered modal-lg">
                    <div className="modal-content bg-transparent border-0">
                    <div className="modal-body d-flex flex-column p-0 position-relative">
                        {/* Botones */}
                        <div
                        className="d-flex justify-content-center gap-5 mb-3 mt-3 z-3"
                        style={{ position: 'relative' }}
                        >
                        {/* Botones de zoom */}
                        <div className="d-flex gap-2">
                            <button onClick={handleZoomIn} id="zoomInBtn" className="btn btn-light">
                            <i className="bi bi-zoom-in"></i>
                            </button>
                            <button onClick={handleZoomOut} id="zoomOutBtn" className="btn btn-light">
                            <i className="bi bi-zoom-out"></i>
                            </button>
                        </div>
                        {/* Botón para cerrar la imagen */}
                        <button
                            type="button"
                            className="btn btn-light"
                            data-bs-dismiss="modal"
                        >
                            <i className="bi bi-x-lg"></i>
                        </button>
                        </div>
                        {/* Imagen */}
                        <div className="d-flex justify-content-center align-items-start">
                            <img
                                ref={imagenModalRef}
                                id="imagenModal"
                                src={modalSrc}
                                alt="Imagen ampliada"
                                className="img-fluid rounded shadow-lg animate__animated animate__zoomIn animate__faster"
                                style={{
                                maxWidth: '100%',
                                maxHeight: '95vh',
                                objectFit: 'contain',
                                transformOrigin: 'top center',
                                }}
                            />
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Base;