import NavBar from "../components/navbar"
import style from '../stylesheets/front-end.module.css';

export default function Front_End() {
    return (
        <>
            <NavBar active='Front-End' />
            <h1 className={style.header}>front-end</h1>
        </>
    )
}