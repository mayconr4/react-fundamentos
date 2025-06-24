import type { CSSProperties } from "react";

const estilosRodape: CSSProperties = {
  backgroundColor: "#222",
  color: "white",
  textAlign: "center",
  padding: "1rem",
};

export default function Rodape() {
  return (
    <>
      <footer>
        <h2>Pequeno site criado com react</h2>
        <p style={{ color: "red", fontWeight: "bold" }}>
          Desenvolvido por <b>Maycon</b> &copy; 2025
        </p>
      </footer>
      <hr />
      <p className="outro-texto"></p>
      <hr />
    </>
  );
}
