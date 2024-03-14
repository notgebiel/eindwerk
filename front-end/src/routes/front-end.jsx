import { dracula } from "react-syntax-highlighter/dist/esm/styles/hljs";
import NavBar from "../components/navbar"
import styles from '../stylesheets/front-end.module.css';
import {Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { darcula } from 'react-syntax-highlighter/dist/esm/styles/prism';

export default function Front_End() {

    const codeString1 = '<p>deze tekst</p>'
    const codeString2 = 'p { color: red; }'
    const codeString3 = `.heading {
        text-align: center;
    }
    
    .text {
        padding: 16px;
        text-align: center;
    }
    
    .button {
        background-color: #922790;
        color: white;
        padding: 14px 25px;
        text-align: center;
        text-decoration: none;
        display: inline-block;
        border: none;
        border-radius: 25px;
        
    }
    
    .button a {
        color: white;
        text-decoration: none;
    }
    
    .button:hover {
        background-color: #7E247C;
    }
    
    .button_div {
        text-align: center;
    }`
    
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
                    Voor de front-end te ontwikkelen kan je 3 talen gebruiken (het zijn er meer maar we houden het bij de basis).<br/>
                    Je hebt HTML, CSS en Javascript.<br/>
                    HTML is de structuur van de front-end, bv. deze tekst bestaat uit HTML.<br/>
                    Een voorbeeld hiervan is de volgende zin: deze tekst.<br/>
                    Hieronder zie je hoe dit eruit ziet als je de website aan het ontwikkelen bent.<br/>
                    <SyntaxHighlighter language="html" style={darcula}>{codeString1}</SyntaxHighlighter>
                    <br/>
                    Dit is maar 1 voorbeeld van een "HTML tag". Je hebt honderden verschillende tags, elk met hun eigen functie.<br/>
                    <br/>
                    Als je de structuur hebt, heb je natuurlijk ook de opmaak nodig, hiervoor gebruik je CSS.<br/>
                    CSS is heel gestructureerd en dus makkelijk te leren.<br/>
                    Stel nu dat ik deze tekst in het rood wil.<br/>
                    Dan gaan we naar het CSS bestand, dit CSS bestand eindigt altijd met .css, om aan te duiden dat dit een CSS bestand is.<br/>
                    Er zijn veel verschillende manieren om dit te bereiken. Een voorbeeld hiervan is dit:<br/>
                    <SyntaxHighlighter language="css" style={darcula}>{codeString2}</SyntaxHighlighter><br/>
                    Het CSS bestand van de vorige pagina, zag er zo uit:<br/>
                    <SyntaxHighlighter language="css" style={darcula}>{codeString3}</SyntaxHighlighter><br/>
                    

                </h4>
            </div>
        </>
    )
}