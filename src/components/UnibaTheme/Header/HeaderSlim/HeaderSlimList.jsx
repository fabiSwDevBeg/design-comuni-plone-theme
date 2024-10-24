import {HeaderSlimListItem} from 'design-comuni-plone-theme/components/UnibaTheme';

const HeaderSlimList = () => {
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
            <HeaderSlimListItem 
                staticLink = {false}
                href = "https://www.uniba.it/servizionline"
                endpoint = "/++api++/@@uniba.servizi_online"
                title = "Servizi Online"
            />
            <HeaderSlimListItem 
                staticLink = {true}
                href = "https://www.uniba.it/esse3"
                title = "Esse3"
            />
            <HeaderSlimListItem 
                staticLink = {true}
                href = "https://www.uniba.it/rubrica"
                title = "Rubrica"
            />
            <HeaderSlimListItem 
                staticLink = {true}
                href = "https://www.uniba.it/webmail"
                title = "Webmail"
            />
            <HeaderSlimListItem 
                staticLink = {true}
                href = "https://www.uniba.it/ateneo/le-app-uniba"
                title = "App Uniba"
            />
            <HeaderSlimListItem 
                staticLink = {false}
                href = "https://www.uniba.it/info-for"
                title = "Info Per"
                dropdown_json = {info_per_json}
            />
            <HeaderSlimListItem 
                staticLink = {true}
                href = "https://www.uniba.it/search"
                title = "Cerca in uniba"
            />
        </ul>
    );
};

export default HeaderSlimList;