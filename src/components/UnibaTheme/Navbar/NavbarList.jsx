import {NavbarListItem} from 'design-comuni-plone-theme/components/UnibaTheme';

const NavbarList = () => {
    return (
        <ul className="uniba-topbar__list" id="topbar-list">
            <NavbarListItem 
                staticLink = {false}
                href = "https://www.uniba.it/servizionline"
                endpoint = "https://www.uniba.it/@@uniba.servizi_online"
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
                staticLink = {true}
                href = "https://www.uniba.it/info-for"
                title = "Info Per"
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