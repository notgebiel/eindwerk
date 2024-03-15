import NavBar from "../components/navbar";
import styles from "../stylesheets/back-end.module.css";

export default function Back_End () {
    return (
        <>
        <NavBar active='Back-End' />
        <h1 className={styles.heading}>Back-End</h1>

        <div className={styles.textdiv}>
            <h4 className={styles.text}>
                De back-end is dus alles wat je niet kan zien, dit is veel ingewikkelder dan de front-end.
                
            </h4>
        </div>
        </>
    )
}