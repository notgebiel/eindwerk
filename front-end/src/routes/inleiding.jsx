import NavBar from "../components/navbar"
import styles from  '../stylesheets/inleiding.module.css';

export default function Inleiding() {
    return(
        <>
        <NavBar active="Inleiding" />
        <h1 className={styles.heading}>inleiding</h1>
        <h4 className={styles.text}>Hallo allemaal.<br />
        Mijn naam is Emile Cloostermans-Huwaert en ik zit in 4NWb.<br />
        Als accentwerking project heb ik een online cursus gevolgd, genaamd "Full Stack Web Developer".<br />
        Ik heb deze cursus gevolgd voor 2 jaar, in deze cursus heb ik alles geleerd over websites en de structuur die erachter zit.<br /><br/><br/>
        De structuur kan je opdelen in 2 grote delen: de "Front-end" en de "Back-end".<br/>
        De Front-end is alles wat je kan zien, bv. deze tekst, de navigatiebar bovenaan...<br/>
        De Back-end is alles wat je niet kan zien, bv. de server, de database... meer hierover in het Back-end hoofdstuk.<br/>
        </h4>
        <div className={styles.button_div}>
            <button className={styles.button}><a href="/front_end">Volgend</a></button>
        </div>
        </>
    )
}