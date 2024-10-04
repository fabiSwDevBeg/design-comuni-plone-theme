import React, { useState, useEffect } from 'react';
import { Dropdown, DropdownItem, DropdownMenu } from 'semantic-ui-react';

const NavbarListItem = ({
    staticLink = true,
    endpoint = "",
    dropdown_json = {},
    href,
    title,
    ...attributes
}) => {
    const [dropdownContent, setDropdownContent] = useState("");

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
                // Caso 1: Static link
                <a href={href} {...attributes}>
                    {title}
                </a>
            ) : endpoint ? (
                // Caso 2: Dynamic dropdown con endpoint
                <Dropdown text={title}>
                    <DropdownMenu>
                        {dropdownContent ? (
                            <DropdownItem>
                                <div dangerouslySetInnerHTML={{ __html: dropdownContent }} />
                            </DropdownItem>
                        ) : (
                            <DropdownItem>
                                <span>Loading...</span>
                            </DropdownItem>
                        )}
                    </DropdownMenu>
                </Dropdown>
            ) : (
                // Caso 3: Dropdown basato su `dropdown_json`
                <Dropdown text={title}>
                    <DropdownMenu>
                        {Object.keys(dropdown_json).map((key) => (
                            <DropdownItem key={key}>
                                <a href={dropdown_json[key]}>{key}</a>
                            </DropdownItem>
                        ))}
                    </DropdownMenu>
                </Dropdown>
            )}
        </li>
    );
};

export default NavbarListItem;