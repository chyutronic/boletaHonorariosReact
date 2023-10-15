import estilos from "./Pie.module.css";

function Pie() {
  return (
    <div className={estilos.contenedor}>
      <footer>
        <small>
          Developed and designed by{" "}
          <a href="https://www.yutrodev.com/">yutroDev</a>. ©2023. All rights
          reserved.
        </small>
      </footer>
    </div>
  );
}

export default Pie;
