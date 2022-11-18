import estilos from './Principal.module.css';

function Principal() {
    return ( 
        <div>
            <form className={estilos.contenedor}>
                <label className={estilos.label}>
                    ¿En qué año estamos..?
                    <input 
                    type="input"
                    value=""
                    className={estilos.input}
                    >
                    </input>
                </label>
                <label className={estilos.label}>
                    ¿Ingresarás un monto líquido o bruto..?
                    <input 
                    type="input"
                    value=""
                    className={estilos.input}
                    >
                    </input>
                </label>
                <label className={estilos.label}>
                    Ingresa el monto...
                    <input 
                    type="number"
                    value=""
                    className={estilos.input}
                    >
                    </input>
                </label>
            </form>
            <div>
                <div className={estilos.botones}>
                    <button className={estilos.botonCalcular}>
                        Calcular!
                    </button>
                    <button className={estilos.botonReiniciar}>
                        Reiniciar!
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Principal;
