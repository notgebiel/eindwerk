import NavBar from "../components/navbar";
import styles from "../stylesheets/back-end.module.css";

export default function Back_End () {
    return (
        <>
        <NavBar active='Back-End' />
        <h1 className={styles.heading}>Back-End</h1>
        </>
    )
}