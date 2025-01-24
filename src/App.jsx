import { useEffect, useState } from "react";
import s from "./app.module.scss";

export default function App() {
  const [cor, setCor] = useState("luz");

  const mudarCor = (novaCor) => {
    const coresValidas = ["vermelho", "amarelo", "verde"];
    // Verifica se a nova cor passada é uma das cores válidas
    if (coresValidas.includes(novaCor)) {
      // Se for válida, atualiza o estado 'cor' com a nova cor
      setCor(novaCor);
    }
  };

  // Outra forma de fazer:
  // const mudarCor = (novaCor) => {
  //   if (novaCor === "vermelho") {
  //     setCor("vermelho");
  //   } else if (novaCor === "amarelo") {
  //     setCor("amarelo");
  //   } else if (novaCor === "verde") {
  //     setCor("verde");
  //   }
  // };

  return (
    <main>
      <section className={s.semaforo}>
        {/* Luz vermelha: se o estado 'cor' for 'vermelho', aplica a classe 's.vermelho', senão usa a classe 'luz' */}
        {/* condição ? valorSeVerdadeiro : valorSeFalso; */}
        <div
          className={`${s.luz} ${cor === "vermelho" ? s.vermelho : "luz"}`}
        ></div>
        <div
          className={`${s.luz} ${cor === "amarelo" ? s.amarelo : "luz"}`}
        ></div>
        <div className={`${s.luz} ${cor === "verde" ? s.verde : "luz"}`}></div>
      </section>

      <section className={s.btn}>
        <button className={s.btnVermelho} onClick={() => mudarCor("vermelho")}>
          Vermelho
        </button>
        <button className={s.btnAmarelo} onClick={() => mudarCor("amarelo")}>
          Amarelo
        </button>
        <button className={s.btnVerde} onClick={() => mudarCor("verde")}>
          Verde
        </button>
      </section>
    </main>
  );
}
