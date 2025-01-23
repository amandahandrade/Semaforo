import { useEffect, useState } from "react";
import s from "./app.module.scss";

export default function App() {
  return (
    <main>
      <section className={s.semaforo}>
        <div className={s.luz}></div>
        <div className={s.luz}></div>
        <div className={s.luz}></div>
      </section>

      <section className={s.btn}>
        <button className={s.btnVerde}>Verde</button>
        <button className={s.btnAmarelo}>Amarelo</button>
        <button className={s.btnVermelho}>Vermelho</button>
      </section>
    </main>
  );
}
