import {NavbarListItem} from 'design-comuni-plone-theme/components/UnibaTheme';

const NavbarList = () => {
    const info_per_json = {
        "Futuri studenti" : "https://www.uniba.it/studenti/Profili/profilo-futuri-studenti",
        "Studenti iscritti" : "https://www.uniba.it/studenti/Profili/profilo-futuri-studenti",
        "Laureati" : "https://www.uniba.it/studenti/Profili/profilo-laureati",
        "Studenti internazionali" : "https://www.uniba.it/studenti/segreterie-studenti/studenti-stranieri",
        "Personale":"https://www.uniba.it/personale/profili/",
        "Enti e Imprese":"https://www.uniba.it/enti-imprese",
    };
    return (
        <ul className="uniba-topbar__list" id="topbar-list">
            <NavbarListItem 
                staticLink = {false}
                href = "https://www.uniba.it/servizionline"
                endpoint = "/++api++/@@uniba.servizi_online"
                title = "Servizi Online"
            />
            <NavbarListItem 
                staticLink = {true}
                href = "https://www.uniba.it/esse3"
                title = "Esse3"
            />
            <NavbarListItem 
                staticLink = {true}
                href = "https://www.uniba.it/rubrica"
                title = "Rubrica"
            />
            <NavbarListItem 
                staticLink = {true}
                href = "https://www.uniba.it/webmail"
                title = "Webmail"
            />
            <NavbarListItem 
                staticLink = {true}
                href = "https://www.uniba.it/ateneo/le-app-uniba"
                title = "App Uniba"
            />
            <NavbarListItem 
                staticLink = {false}
                href = "https://www.uniba.it/info-for"
                title = "Info Per"
                dropdown_json = {info_per_json}
            />
            <NavbarListItem 
                staticLink = {true}
                href = "https://www.uniba.it/search"
                title = "Cerca in uniba"
            />
        </ul>
    );
};

export default NavbarList;