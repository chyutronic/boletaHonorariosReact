import { useState } from "react";
import Modal from "./Modal";
import estilos from "./Principal.module.css";
import {
  calcular,
  valorBruto,
  valorLiquido,
  respuesta,
  retencion2023,
  retencion2024,
  retencion2025,
  retencion2026,
  retencion2027,
  retencion2028,
} from "../negocio/calculadora";

function Principal() {
  const [form, setForm] = useState({
    ano: "ELIGE UNA OPCION",
    tipoMonto: "ELIGE UNA OPCION",
    monto: 0,
  });

  const [modal, setModal] = useState(false);

  const [retencion, setRetencion] = useState(0);

  const { ano, tipoMonto, monto } = form;

  const onChange = (event, prop) => {
    setForm((estado) => ({ ...estado, [prop]: event.target.value }));
  };

  //función para reiniciar la aplicación
  const reiniciar = () => {
    location.reload();
  };

  const opcionesDeAno = ["AÑO", "2023", "2024", "2025", "2026", "2027", "2028"];
  const opcionesDeMonto = ["BRUTO / LIQUIDO", "BRUTO", "LIQUIDO"];

  const handleForm = (e) => {
    e.preventDefault();
    if (ano === "2023") {
      setRetencion(retencion2023);
    } else if (ano === "2024") {
      setRetencion(retencion2024);
    } else if (ano === "2025") {
      setRetencion(retencion2025);
    } else if (ano === "2026") {
      setRetencion(retencion2026);
    } else if (ano === "2027") {
      setRetencion(retencion2027);
    } else if (ano === "2028") {
      setRetencion(retencion2028);
    }
  };

  return (
    <div>
      <form onSubmit={handleForm} id="formul" className={estilos.contenedor}>
        <div className={estilos.contenedorNombreInput}>
          <label htmlFor="ano" className={estilos.label}>
            Ingresa el año
          </label>
          <div className={estilos.contenedorAno}>
            <select
              id="ano"
              required
              className={estilos.input}
              value={ano}
              onChange={(e) => onChange(e, "ano")}
            >
              {opcionesDeAno.map((opcion) => (
                <option key={opcion} value={opcion}>
                  {opcion}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div className={estilos.contenedorNombreInput}>
          <label className={estilos.label} htmlFor="tipoMonto">
            ¿Qué tipo de monto ingresarás?
          </label>
          <div className={estilos.contenedorBrutoLiquido}>
            <select
              id="tipoMonto"
              required
              className={estilos.input}
              value={tipoMonto}
              onChange={(e) => onChange(e, "tipoMonto")}
            >
              {opcionesDeMonto.map((opcion) => (
                <option key={opcion} value={opcion}>
                  {opcion}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div className={estilos.contenedorNombreInput}>
          <label htmlFor="monto" className={estilos.label}>
            Ingresa el monto
          </label>
          <div className={estilos.contenedorMonto}>
            <input
              id="monto"
              required
              className={estilos.input}
              type="number"
              value={monto}
              onChange={(e) => onChange(e, "monto")}
            ></input>
          </div>
        </div>
        <div className={estilos.botones}>
          <p className={estilos.label}>Calcula tu boleta</p>
          {/* <div className={estilos.botones}> */}
          <button
            className={estilos.botonCalcular}
            onClick={() => {
              respuesta(ano, tipoMonto);
              calcular(monto);
              setModal(!modal);
            }}
          >
            CALCULAR
          </button>
          {/* </div> */}
        </div>
      </form>
      <div className={estilos.contenedorBotonReiniciar}>
        <button className={estilos.botonReiniciar} onClick={reiniciar}>
          REINICIAR
        </button>
      </div>

      <Modal estado={modal} cambiarEstado={setModal}>
        <div className={estilos.contenedorBoleta}>
          <div className={estilos.textoResultado}>
            <p className={estilos.textoBoleta}>
              Total <strong>BRUTO</strong>:
            </p>
            <p className={estilos.textoBoleta}>
              {retencion}% impto. retenido:{" "}
            </p>
            <p className={estilos.textoBoleta}>
              Total <strong>LÍQUIDO</strong>:
            </p>
          </div>

          {tipoMonto === "BRUTO" ? (
            <div className={estilos.textoResultado}>
              <h3 className={estilos.resultado}>
                <strong>
                  $ {new Intl.NumberFormat("de-DE").format(monto)}
                </strong>
              </h3>
              <h3 className={estilos.resultado}>
                <strong>
                  ${" "}
                  {new Intl.NumberFormat("de-DE").format(monto - valorLiquido)}
                </strong>
              </h3>
              <h3 className={estilos.resultado}>
                <strong>
                  $ {new Intl.NumberFormat("de-DE").format(valorLiquido)}
                </strong>
              </h3>
            </div>
          ) : (
            <div className={estilos.textoResultado}>
              <h3 className={estilos.resultado}>
                <strong>
                  $ {new Intl.NumberFormat("de-DE").format(valorBruto)}
                </strong>
              </h3>
              <h3 className={estilos.resultado}>
                <strong>
                  $ {new Intl.NumberFormat("de-DE").format(valorBruto - monto)}
                </strong>
              </h3>
              <h3 className={estilos.resultado}>
                <strong>
                  $ {new Intl.NumberFormat("de-DE").format(monto)}
                </strong>
              </h3>
            </div>
          )}
        </div>

        <div className={estilos.pie}>
          <p>
            Valor de acuerdo a la ley 21.133 que aumenta gradualmente la
            retención de impuestos para Boletas de Honorarios
          </p>
        </div>
      </Modal>
    </div>
  );
}

export default Principal;
