import React, { useState, useEffect } from 'react';

const NavbarListItem = ({
    staticLink = true,
    endpoint = "",
    href,
    title,
    ...attributes
}) => {
    const [dropdownContent, setDropdownContent] = useState("");
    const aToggleClass = "pat-toggle unibaheader-toggle"
    
    useEffect(() => {
        if (!staticLink && endpoint) {
            // Effettua la richiesta quando staticLink è false
            fetch(endpoint)
                .then(response => response.text()) // Ottieni il contenuto come testo
                .then(html => {
                    setDropdownContent(html); // Aggiorna lo stato con il contenuto HTML
                })
                .catch(error => console.error("Error fetching the content:", error));
        }
    }, [staticLink, endpoint]); // Dipendenze: esegue l'effetto solo quando staticLink o endpoint cambiano
    
    return (
        <li>
            <a 
            href={href}
            className={staticLink ? "" : aToggleClass}
            data-toggle={staticLink ? "" : "dropdown"}
            aria-expanded={staticLink ? "" : "false"}
            {...attributes}
            >
                {title}
            </a>
            {!staticLink && (
                <div 
                    className="dropdown-menu unibaheader_collapse"
                    dangerouslySetInnerHTML={{__html: dropdownContent}}    
                />
            )}
        </li>
    );
};

export default NavbarListItem;