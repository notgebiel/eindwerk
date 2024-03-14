import NavBar from "../components/navbar"
import styles from '../stylesheets/front-end.module.css';

export default function Front_End() {
    return (
        <>
            <NavBar active='Front-End' />
            <h1 className={styles.header}>front-end</h1>
            <div className={styles.textdiv}>
                <h4 className={styles.text}>
                    In dit deel gaan we het hebben over de front-end.<br/>
                    De front-end is alles wat je kan zien en kan gebruiken, bv. deze tekst, de knoppen bovenaan, de achtergrond...<br/>
                    <br/>
                    <br/>
                    

                </h4>
            </div>
        </>
    )
}