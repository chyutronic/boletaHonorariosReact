// arreglo donde se guardan las respuestas del usuario
let opcionElegida = [];

// función que toma el número de pregunta y el input elegido de esa pregunta
export function respuesta(ano, tipoMonto) {
  opcionElegida.splice(0, 1, ano);
  opcionElegida.splice(1, 1, tipoMonto);
} // fin método respuesta

// Declaración de variables y constantes

export var valorLiquido;
export var valorBruto;
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

//función para calcular el monto líquido o bruto
export function calcular(monto) {
  // fórmulas para obtener valores líquidos

  if ([JSON.stringify(op1)].includes(JSON.stringify(opcionElegida))) {
    valorLiquido = (monto * (100 - retencion2022)) / 100;
    valorLiquido = valorLiquido.toFixed(0);
  }
  if ([JSON.stringify(op2)].includes(JSON.stringify(opcionElegida))) {
    valorLiquido = (monto * (100 - retencion2023)) / 100;
    valorLiquido = valorLiquido.toFixed(0);
  }
  if ([JSON.stringify(op3)].includes(JSON.stringify(opcionElegida))) {
    valorLiquido = (monto * (100 - retencion2024)) / 100;
    valorLiquido = valorLiquido.toFixed(0);
  }
  if ([JSON.stringify(op4)].includes(JSON.stringify(opcionElegida))) {
    valorLiquido = (monto * (100 - retencion2025)) / 100;
    valorLiquido = valorLiquido.toFixed(0);
  }
  if ([JSON.stringify(op5)].includes(JSON.stringify(opcionElegida))) {
    valorLiquido = (monto * (100 - retencion2026)) / 100;
    valorLiquido = valorLiquido.toFixed(0);
  }
  if ([JSON.stringify(op6)].includes(JSON.stringify(opcionElegida))) {
    valorLiquido = (monto * (100 - retencion2027)) / 100;
    valorLiquido = valorLiquido.toFixed(0);
  }
  if ([JSON.stringify(op7)].includes(JSON.stringify(opcionElegida))) {
    valorLiquido = (monto * (100 - retencion2028)) / 100;
    valorLiquido = valorLiquido.toFixed(0);
  }

  // fórmulas para obtener valores Brutos

  if ([JSON.stringify(op8)].includes(JSON.stringify(opcionElegida))) {
    valorBruto = (monto * 100) / (100 - retencion2022);
    valorBruto = valorBruto.toFixed(0);
  }
  if ([JSON.stringify(op9)].includes(JSON.stringify(opcionElegida))) {
    valorBruto = (monto * 100) / (100 - retencion2023);
    valorBruto = valorBruto.toFixed(0);
  }
  if ([JSON.stringify(op10)].includes(JSON.stringify(opcionElegida))) {
    valorBruto = (monto * 100) / (100 - retencion2024);
    valorBruto = valorBruto.toFixed(0);
  }
  if ([JSON.stringify(op11)].includes(JSON.stringify(opcionElegida))) {
    valorBruto = (monto * 100) / (100 - retencion2025);
    valorBruto = valorBruto.toFixed(0);
  }
  if ([JSON.stringify(op12)].includes(JSON.stringify(opcionElegida))) {
    valorBruto = (monto * 100) / (100 - retencion2026);
    valorBruto = valorBruto.toFixed(0);
  }
  if ([JSON.stringify(op13)].includes(JSON.stringify(opcionElegida))) {
    valorBruto = (monto * 100) / (100 - retencion2027);
    valorBruto = valorBruto.toFixed(0);
  }
  if ([JSON.stringify(op14)].includes(JSON.stringify(opcionElegida))) {
    valorBruto = (monto * 100) / (100 - retencion2028);
    valorBruto = valorBruto.toFixed(0);
  }
} //fin función calcular
