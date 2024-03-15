//import { dracula } from "react-syntax-highlighter/dist/esm/styles/hljs";
import style from "react-syntax-highlighter/dist/esm/styles/hljs/a11y-dark";
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
    const codeString4 = `const [active, setActive] = useState(props.active);

    const handleItemClick = (item) => {
        setActive(item);
    };`    

    const codeString5 = `export default function NavBar(props) {
        const [active, setActive] = useState(props.active);
    
        const handleItemClick = (item) => {
            setActive(item);
        };
    
        return (
            <div className="navbardiv">
                <ul className="navbarul">
                    <li id="navli" className={active === 'Inleiding' ? 'active' : ''} onClick={() => handleItemClick('Inleiding')}><a href="/">Inleiding</a></li>
                    <li id="navli" className={active === 'Front-End' ? 'active' : ''} onClick={() => handleItemClick('Front-End')}><a href="/front_end">Front-End</a></li>
                    <li id="navli" className={active === 'Back-End' ? 'active' : ''} onClick={() => handleItemClick('Back-End')}><a  href="/back_end">Back-End</a></li>
                </ul>
            </div>
        )
    }
    `

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
                            <SyntaxHighlighter className={styles.shl} language="css" style={darcula}>{codeString3}</SyntaxHighlighter><br/><br/>

                        </div>
                    </div>
                    <div style={{display: 'flex'}}>
                        <div style={{flex: 1}}>
                            <h4>
                            Als laatste hebben we Javascript, dit dient voor de interactiviteit van de website.<br/>
                            Bv. het veranderen van pagina als je op de knoppen boven drukt.<br/>
                            Bovenaan in de navigatiebar zie je dat het venster dat de knop 'front-end' iets donkerder is dan de rest, dit is omdat je je daar nu bevindt.<br/>
                            Dit is ook (deels) gedaan met Javascript, het Javascript gedeelte ziet er zo uit:<br/>
                            </h4>
                        </div>
                        <div style={{flex: 1}}>
                            <SyntaxHighlighter className={styles.shl} language="javascript" style={darcula}>{codeString4}</SyntaxHighlighter>
                        </div>
                    </div>
                    <br/>
                    <br/>
                    <br/>
                            
                                
                                    <h4>
                                Je hebt verschillende tools om dit gemakkelijker en vooral sneller te maken.<br/>
                            Als je niet goed weet wat je aan het doen bent, kan je de website zeer traag en onhandig maken.<br/>
                            Voor de front-end gebruiken daarom veel mensen "React".<br/>
                            React is een hulpmiddel in Javascript die je helpt om de front-end te ontwikkelen.<br/>
                            Met react kan je elk stukje verdelen in componenten, deze componenten kan je appart gebruiken.<br/>
                            Een voorbeeld hiervan is de navigatiebar bovenaan.<br/>
                            Die is op elke pagina ongeveer hetzelfde (buiten de kleur die donkerder wordt als je op een knop drukt).<br/>
                            Zonder React zou de webbrowser deze navigatiebar elke keer opnieuw inladen als je van pagina verandert,<br/> maar doordat ik React hebt gebruikt, wordt de navigatiebar maar 1 keer ingeladen, en blijft die ingeladen ook als je van pagina verandert.<br/>
                            Dit is heel handig voor efficiënte laadtijden, databesparing en batterijbesparing.<br/>
                            De code voor het React component dat voor de navigatiebar zorgt, ziet er zo uit:<br/>
                            </h4>
                                
                                
                                    <SyntaxHighlighter language="javascript" className={styles.shl} style={darcula}>{codeString5}</SyntaxHighlighter>
                                
                            
                    

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