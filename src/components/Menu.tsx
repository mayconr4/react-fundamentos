import styles from "./Menu.module.css";

// export default function Menu() {
//   return (
//     <nav className={styles.menu}>
//       <a  href="">Home</a>
//       <a href="">Sobre</a>
//       <a href="">Contatato</a>
//     </nav>
//   );
// }

export default function Menu() {
  return (
    <nav>
      <div className={styles.menuList}>
        <div className={styles.menuItem}>Início</div>
        <div className={styles.menuItem}>Sobre</div>
        <div className={styles.menuItem}>Contato</div>
      </div>
    </nav>
  );
}
