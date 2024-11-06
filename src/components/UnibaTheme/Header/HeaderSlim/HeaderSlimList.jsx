import {HeaderSlimListItem} from 'design-comuni-plone-theme/components/UnibaTheme';
import { FormattedMessage } from 'react-intl';
import { useIntl } from 'react-intl';

const HeaderSlimList = () => {
    const { formatMessage } = useIntl();
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
                endpoint = "/@@uniba.servizi_online"
                title = {
                    formatMessage({ 
                        id: 'servizi_online_title', 
                        defaultMessage: 'Servizi Online' 
                    })
                }
            />
            <HeaderSlimListItem 
                staticLink = {true}
                href = "https://www.uniba.it/esse3"
                title = {
                    formatMessage({ 
                        id: 'esse3_title', 
                        defaultMessage: 'Esse3' 
                    })
                }
            />
            <HeaderSlimListItem 
                staticLink = {true}
                href = "https://www.uniba.it/rubrica"
                title = {
                    formatMessage({ 
                        id: 'rubrica_title', 
                        defaultMessage: 'Rubrica' 
                    })
                }
            />
            <HeaderSlimListItem 
                staticLink = {true}
                href = "https://www.uniba.it/webmail"
                title = {
                    formatMessage({ 
                        id: 'webmail_title', 
                        defaultMessage: 'Webmail' 
                    })
                }
            />
            <HeaderSlimListItem 
                staticLink = {true}
                href = "https://www.uniba.it/ateneo/le-app-uniba"
                title = {
                    formatMessage({ 
                        id: 'app_uniba_title', 
                        defaultMessage: 'App Uniba' 
                    })
                }
            />
            <HeaderSlimListItem 
                staticLink = {false}
                href = "https://www.uniba.it/info-for"
                title = {
                    formatMessage({ 
                        id: 'info_per_title', 
                        defaultMessage: 'Info per' 
                    })
                }
                dropdown_json = {info_per_json}
            />
            <HeaderSlimListItem 
                staticLink = {true}
                href = "https://www.uniba.it/search"
                title = {
                    formatMessage({ 
                        id: 'cerca_in_uniba_title', 
                        defaultMessage: 'Cerca in uniba' 
                    })
                }
            />
        </ul>
    );
};

export default HeaderSlimList;