import Artigo from "./Artigo/Artigo";
import DicaDoDia from "./DicaDoDia/DicaDoDia";
import styles from "./Conteudo.module.css";
import AvisoImportante from "./AvisoImportante/AvisoImportante";

export default function Conteudo() {
  return (
    <main className={styles.conteudo}>
      <section
        className={` ${styles.principal} ${styles.arredondada} ${styles.sombra}`}
      >
        <h2 className="font-bold text-lg">
          Seja bem vindo(a) aos fundamentos de react
        </h2>
        <p>Este é um exemplo de aplicação react</p>

        <Artigo />

        <Artigo />

        <Artigo />
      </section>

      <DicaDoDia />

      <AvisoImportante />
    </main>
  );
}
