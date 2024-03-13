import '../stylesheets/navbar.css'
import React, { useState } from 'react';

export default function NavBar(props) {
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
