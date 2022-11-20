import estilos from './Encabezado.module.css';

function Encabezado() {
    return ( 
        <div className={estilos.contenedor}>
            <div className={estilos.contenedorImagen}>
            <img src="/contabilidad.png" className={estilos.imagenes}/>
            </div>
            <div className={estilos.contenedorTitulo}>
            <h2 className={estilos.titulo}>BOLETA DE HONORARIOS</h2>
            </div>
        </div>
    );
}

export default Encabezado;

