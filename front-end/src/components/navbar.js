import '../stylesheets/navbar.css'
import React, {useEffect} from 'react';

export default function NavBar(props) {
    useEffect(() => {
        const activeElement = document.getElementById(props.active);
        if (activeElement) {
            activeElement.style.backgroundColor = "#494D7B";
        }
    }, [props.active])
    return (
        <div className="navbardiv">
            <ul className="navbarul">
                <li className="Inleiding"><a>Inleiding</a></li>
                <li className="Front-End"><a>Front-End</a></li>
                <li className="Back-End"><a>Back-End</a></li>
            </ul>
        </div>
    
    )
    }