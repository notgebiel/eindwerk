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
                <li className={active === 'Inleiding' ? 'active' : ''} onClick={() => handleItemClick('Inleiding')}><a>Inleiding</a></li>
                <li className={active === 'Front-End' ? 'active' : ''} onClick={() => handleItemClick('Front-End')}><a>Front-End</a></li>
                <li className={active === 'Back-End' ? 'active' : ''} onClick={() => handleItemClick('Back-End')}><a>Back-End</a></li>
            </ul>
        </div>
    )
}
