import estilos from "./Encabezado.module.css";

function Encabezado() {
  return (
    <div className={estilos.contenedor}>
      <div className={estilos.contenedorImagen}>
        <img src="/contabilidad.png" className={estilos.imagenes} />
      </div>
      <div className={estilos.contenedorTitulo}>
        <h2 className={estilos.titulo}>CALCULA TU BOLETA</h2>
      </div>
    </div>
  );
}

export default Encabezado;
