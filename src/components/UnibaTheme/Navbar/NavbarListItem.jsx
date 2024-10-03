import React, { useState, useEffect } from 'react';
import {Dropdown, DropdownItem, DropdownMenu } from 'semantic-ui-react';

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
            const fullEndpoint = `${window.location.origin}${endpoint}`;
            fetch(fullEndpoint)
                .then(response => response.text()) // Ottieni il contenuto come testo
                .then(html => {
                    setDropdownContent(html); // Aggiorna lo stato con il contenuto HTML
                })
                .catch(error => console.error("Error fetching the content:", error));
        }
    }, [staticLink, endpoint]); // Dipendenze: esegue l'effetto solo quando staticLink o endpoint cambiano
    
    return (
        <li>
            {staticLink ? (
                // Se staticLink è true, mostra un semplice <a> all'interno di <li>
                <a 
                    href={href}
                    {...attributes}
                >
                    {title}
                </a>
            ) : (
                // Se staticLink è false, mostra il Dropdown
                <Dropdown text={title}>
                    <DropdownMenu>
                        {dropdownContent ? (
                            <DropdownItem>
                                <div dangerouslySetInnerHTML={{__html: dropdownContent}} />
                            </DropdownItem>
                        ) : (
                            <DropdownItem>
                                <span>Loading...</span>
                            </DropdownItem>
                        )}
                    </DropdownMenu>
                </Dropdown>
            )}
        </li>
    );
};

export default NavbarListItem;