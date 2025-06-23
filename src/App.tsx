import Cabecalho from "./Cabecalho";

export default function App() {
  // Comentário de uma linha
  /*Comentário de multiplas linhas */
  return (
    <>
      <Cabecalho />

      <main>
        <section>
          <h2>Seja bem vindo(a) aos fundamentos de react</h2>
          <p>Este é um exemplo de aplicação react</p>

          <article>
            <h3>Artigo 1 exemplo</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat
              culpa earum cupiditate minima quis id officia et quisquam illo sit
              optio nihil deserunt accusamus, consectetur porro consequatur amet
              temporibus vero?
            </p>
          </article>

          <article>
            <h3>Artigo 2 exemplo</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat
              culpa earum cupiditate minima quis id officia et quisquam illo sit
              optio nihil deserunt accusamus, consectetur porro consequatur amet
              temporibus vero?
            </p>
          </article>

          <article>
            <h3>Artigo 3 exemplo</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat
              culpa earum cupiditate minima quis id officia et quisquam illo sit
              optio nihil deserunt accusamus, consectetur porro consequatur amet
              temporibus vero?
            </p>
          </article>
        </section>
      </main>

      <footer>
        <h2>Pequeno site criado com react</h2>
        <p>
          Desenvolvido por <b>Maycon</b> &copy; 2025
        </p>
      </footer>
    </>
  );
}
