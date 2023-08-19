import { useState } from "react";
import Modal from "./Modal";
import estilos from "./Principal.module.css";

// Declaración de variables y constantes

const retencion2022 = 12.25;
const retencion2023 = 13;
const retencion2024 = 13.75;
const retencion2025 = 14.5;
const retencion2026 = 15.25;
const retencion2027 = 16;
const retencion2028 = 17;

// arreglo que contiene las respuestas con combinaciones posibles: 7*2=14 combinaciones posibles

let op1 = ["2022", "BRUTO"];
let op2 = ["2023", "BRUTO"];
let op3 = ["2024", "BRUTO"];
let op4 = ["2025", "BRUTO"];
let op5 = ["2026", "BRUTO"];
let op6 = ["2027", "BRUTO"];
let op7 = ["2028", "BRUTO"];
let op8 = ["2022", "LIQUIDO"];
let op9 = ["2023", "LIQUIDO"];
let op10 = ["2024", "LIQUIDO"];
let op11 = ["2025", "LIQUIDO"];
let op12 = ["2026", "LIQUIDO"];
let op13 = ["2027", "LIQUIDO"];
let op14 = ["2028", "LIQUIDO"];

// arreglo donde se guardan las respuestas del usuario
let opcionElegida = [];
var valorLiquido;
var valorBruto;

function Principal() {
  const [form, setForm] = useState({
    ano: "ELIGE UNA OPCION",
    tipoMonto: "ELIGE UNA OPCION",
    monto: 0,
  });

  const [modal, setModal] = useState(false);

  const { ano, tipoMonto, monto } = form;

  const onChange = (event, prop) => {
    setForm((estado) => ({ ...estado, [prop]: event.target.value }));
  };

  //función para calcular el monto líquido o bruto
  function calcular() {
    // función que toma el número de pregunta y el imput elegido de esa pregunta
    function respuesta() {
      opcionElegida.splice(0, 1, ano);
      opcionElegida.splice(1, 1, tipoMonto);
    } // fin método respuesta

    respuesta();
    // console.log(opcionElegida);

    // fórmulas para obtener valores líquidos

    if ([JSON.stringify(op1)].includes(JSON.stringify(opcionElegida))) {
      valorLiquido = (monto * (100 - retencion2022)) / 100;
      valorLiquido = valorLiquido.toFixed(2);
    }
    if ([JSON.stringify(op2)].includes(JSON.stringify(opcionElegida))) {
      valorLiquido = (monto * (100 - retencion2023)) / 100;
      valorLiquido = valorLiquido.toFixed(2);
    }
    if ([JSON.stringify(op3)].includes(JSON.stringify(opcionElegida))) {
      valorLiquido = (monto * (100 - retencion2024)) / 100;
      valorLiquido = valorLiquido.toFixed(2);
    }
    if ([JSON.stringify(op4)].includes(JSON.stringify(opcionElegida))) {
      valorLiquido = (monto * (100 - retencion2025)) / 100;
      valorLiquido = valorLiquido.toFixed(2);
    }
    if ([JSON.stringify(op5)].includes(JSON.stringify(opcionElegida))) {
      valorLiquido = (monto * (100 - retencion2026)) / 100;
      valorLiquido = valorLiquido.toFixed(2);
    }
    if ([JSON.stringify(op6)].includes(JSON.stringify(opcionElegida))) {
      valorLiquido = (monto * (100 - retencion2027)) / 100;
      valorLiquido = valorLiquido.toFixed(2);
    }
    if ([JSON.stringify(op7)].includes(JSON.stringify(opcionElegida))) {
      valorLiquido = (monto * (100 - retencion2028)) / 100;
      valorLiquido = valorLiquido.toFixed(2);
    }

    // fórmulas para obtener valores Brutos

    if ([JSON.stringify(op8)].includes(JSON.stringify(opcionElegida))) {
      valorBruto = (monto * 100) / (100 - retencion2022);
      valorBruto = valorBruto.toFixed(2);
    }
    if ([JSON.stringify(op9)].includes(JSON.stringify(opcionElegida))) {
      valorBruto = (monto * 100) / (100 - retencion2023);
      valorBruto = valorBruto.toFixed(2);
    }
    if ([JSON.stringify(op10)].includes(JSON.stringify(opcionElegida))) {
      valorBruto = (monto * 100) / (100 - retencion2024);
      valorBruto = valorBruto.toFixed(2);
    }
    if ([JSON.stringify(op11)].includes(JSON.stringify(opcionElegida))) {
      valorBruto = (monto * 100) / (100 - retencion2025);
      valorBruto = valorBruto.toFixed(2);
    }
    if ([JSON.stringify(op12)].includes(JSON.stringify(opcionElegida))) {
      valorBruto = (monto * 100) / (100 - retencion2026);
      valorBruto = valorBruto.toFixed(2);
    }
    if ([JSON.stringify(op13)].includes(JSON.stringify(opcionElegida))) {
      valorBruto = (monto * 100) / (100 - retencion2027);
      valorBruto = valorBruto.toFixed(2);
    }
    if ([JSON.stringify(op14)].includes(JSON.stringify(opcionElegida))) {
      valorBruto = (monto * 100) / (100 - retencion2028);
      valorBruto = valorBruto.toFixed(2);
    }
  } //fin función calcular

  //función para reiniciar la aplicación
  const reiniciar = () => {
    location.reload();
  };

  const opcionesDeAno = [
    "ELIGE UNA OPCION",
    "2022",
    "2023",
    "2024",
    "2025",
    "2026",
    "2027",
    "2028",
  ];
  const opcionesDeMonto = ["ELIGE UNA OPCION", "BRUTO", "LIQUIDO"];

  return (
    <div>
      <form className={estilos.contenedor}>
        <label className={estilos.label}>
          ¿En qué año estamos..?
          <select
            className={estilos.input}
            value={ano}
            onChange={(e) => onChange(e, "ano")}
          >
            {opcionesDeAno.map((opcion) => (
              <option value={opcion}>{opcion}</option>
            ))}
          </select>
        </label>
        <label className={estilos.label}>
          ¿Ingresarás un monto líquido o bruto..?
          <select
            className={estilos.input}
            value={tipoMonto}
            onChange={(e) => onChange(e, "tipoMonto")}
          >
            {opcionesDeMonto.map((opcion) => (
              <option value={opcion}>{opcion}</option>
            ))}
          </select>
        </label>
        <label className={estilos.label}>
          Ingresa el monto...
          <input
            className={estilos.input}
            type="number"
            value={monto}
            onChange={(e) => onChange(e, "monto")}
          ></input>
        </label>
      </form>
      <div>
        <div className={estilos.botones}>
          <button
            className={estilos.botonCalcular}
            onClick={() => {
              calcular();
              setModal(!modal);
            }}
          >
            CALCULAR
          </button>
          <button className={estilos.botonReiniciar} onClick={reiniciar}>
            REINICIAR
          </button>
        </div>
      </div>
      <Modal estado={modal} cambiarEstado={setModal}>
        <p className={estilos.textoResultado}>
          El valor{" "}
          <strong>{tipoMonto === "BRUTO" ? "LIQUIDO" : "BRUTO"}</strong> de tu
          Boleta de Honorarios es:
        </p>
        <h3 className={estilos.resultado}>
          <strong>
            ${tipoMonto === "LIQUIDO" ? valorBruto : valorLiquido}.-
          </strong>
        </h3>
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
