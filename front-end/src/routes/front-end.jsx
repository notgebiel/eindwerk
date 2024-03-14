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
                    Je hebt HTML, CSS en Javascript.<br/><br/><br/><br/><br/>
                    <div style={{ display: 'flex' }}>
      <div style={{ flex: 1 }}>
      HTML is de structuur van de front-end, bv. deze tekst bestaat uit HTML.<br/>
                    Een voorbeeld hiervan is de volgende zin: deze tekst.<br/>
                    Hieronder zie je hoe dit eruit ziet als je de website aan het ontwikkelen bent.<br/>
      </div>
      <div style={{ flex: 1 }}>
      <SyntaxHighlighter className={styles.shl} language="html" style={darcula}>{codeString1}</SyntaxHighlighter>

      </div>
    </div>
                    <br/><br/>
                    Dit is maar 1 voorbeeld van een "HTML tag".<br/> Je hebt honderden verschillende tags, elk met hun eigen functie.<br/>
                    <br/><br/><br/><br/><br/>
                    <div style={{ display: 'flex' }}>
      <div style={{ flex: 1 }}>
        <h4>Als je de structuur hebt, heb je natuurlijk ook de opmaak nodig, hiervoor gebruik je CSS.<br/>
                    CSS is heel gestructureerd en dus makkelijk te leren.<br/>
                    Stel nu dat ik deze tekst in het rood wil.<br/>
                    Dan gaan we naar het CSS bestand, dit CSS bestand eindigt altijd met .css, om aan te duiden dat dit een CSS bestand is.<br/>
                    Er zijn veel verschillende manieren om dit te bereiken. Een voorbeeld hiervan is dit:</h4>
      </div>
      <div style={{ flex: 1 }}>
      <SyntaxHighlighter className={styles.shl} language="css" style={darcula}>{codeString2}</SyntaxHighlighter><br/>
      </div></div>
                    <br/>
                    <br/>
                    <br/>
                    <div style={{display: 'flex'}}>
                        <div style={{flex: 1}}>
                            <h3>Het CSS bestand van de vorige pagina, zag er zo uit:<br/>
                                Dit beschrijft hoe de navigatiebalk eruit moet zien, hoe hij zich moet gedragen als het venster vergroot/verkleint, wat er moet gebeuren als je er met je muis over gaat, hoe de knop eruit moet zien en hoe die zich moet gedragen, en hoe de tekst eruit ziet.
                            </h3>
                        </div>
                        <div style={{flex: 1}}>
                            <SyntaxHighlighter className={styles.shl} language="css" style={darcula}>{codeString3}</SyntaxHighlighter>
                        </div>
                    </div>
                    

                </h4>
            </div>
        </>
    )
}




/*<div style={{ display: 'flex' }}>
      <div style={{ flex: 1 }}>
        <p>This is some descriptive text.</p>
      </div>
      <div style={{ flex: 1 }}>
        <SyntaxHighlighter language="javascript" style={darcula}>
          {codeString}
        </SyntaxHighlighter>
      </div>
    </div>*/