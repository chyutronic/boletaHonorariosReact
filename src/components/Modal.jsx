import estilos from "./Modal.module.css";

function Modal({ children, estado, cambiarEstado }) {
  return (
    <>
      {estado && (
        <div className={estilos.ventanaModal}>
          <div className={estilos.contenedorModal}>
            <div className={estilos.nav}>
              <h3 className={estilos.titulo}>TU RESULTADO!</h3>
              <button
                className={estilos.botonCerrar}
                onClick={() => {
                  cambiarEstado(false);
                  location.reload();
                }}
              >
                X
              </button>
            </div>
            <hr></hr>
            <div>{children}</div>
          </div>
        </div>
      )}
    </>
  );
}

export default Modal;
