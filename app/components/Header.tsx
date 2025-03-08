import styles from "../page.module.scss";

export default function Header () {
    return ( 
     <header className="all-h" >
        <h1 className={styles.h1}> trénik Typescript app To Do </h1>
              <h2 className={styles.h2}>seznam úkolů</h2>
     </header >
    );
}