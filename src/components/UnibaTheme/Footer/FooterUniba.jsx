import { Grid, GridRow, GridColumn, Image, List, ListItem } from 'semantic-ui-react';
import FacebookSVG from '../../../theme/UnibaTheme/images/ico-facebook.svg';
import InstagramSVG from '../../../theme/UnibaTheme/images/ico-instagram.svg';
import LinkedinSVG from '../../../theme/UnibaTheme/images/ico-linkedin.svg';
import TwitterSVG from '../../../theme/UnibaTheme/images/ico-twitter.svg';
import YoutubeSVG from '../../../theme/UnibaTheme/images/ico-youtube.svg';

const FooterUniba = () => {
    const [parsedColumns, setParsedColumns] = useState([]);

    useEffect(() => {
        // Funzione per recuperare i dati dall'endpoint
        const fullEndpoint = `${window.location.origin}${'/++api++/@@uniba.footer'}`;
        fetch(fullEndpoint)
                .then(response => response.text()) // Ottieni il contenuto come testo
                .then(html => {
                    const parser = new DOMParser();
                    const doc = parser.parseFromString(html, 'text/html');
                    const columns = doc.querySelectorAll('div.col-sm-4.col-md-3');
                    const gridColumns = Array.from(columns).map((column, index) => {
                        const links = column.querySelectorAll('ul.list-unstyled li a');
                        
                        return (
                            <GridColumn key={index}>
                                <div className="text-xs-center">
                                    <List className="list-unstyled">
                                        {Array.from(links).map((link, idx) => (
                                            <ListItem key={idx}>
                                                <a href={link.href}>{link.textContent}</a>
                                            </ListItem>
                                        ))}
                                    </List>
                                </div>
                            </GridColumn>
                        );
                    });
                    setParsedColumns(gridColumns); // Aggiorna lo stato con il contenuto HTML
                })
                .catch(error => console.error("Error fetching the content:", error));
    }, []);

    return (
        <footer id="portal-footer-wrapper">
            <div className="portal-main-footer bg-primary">
                <div className="container position--relative">
                    <Grid>
                        <GridRow columns={4}>
                            <GridColumn key={1}>
                                <div className="sedi">
                                    <List horizontal className="list-inline text-center">
                                        <ListItem>
                                            <a href="https://www.uniba.it/ateneo/sede-di-brindisi/">Uniba Brindisi</a>
                                        </ListItem>
                                        <ListItem>
                                            ·
                                        </ListItem>
                                        <ListItem>
                                            <a href="https://www.uniba.it/ateneo/sede-di-taranto/">Uniba Taranto</a>
                                        </ListItem>
                                    </List>
                                </div>
                                <div className="socials">
                                    <List horizontal relaxed className="list-inline">
                                        <ListItem className="socials-item">
                                            <a href="http://www.facebook.com/pages/Universita-degli-Studi-di-Bari-Aldo-Moro/142796619110027">
                                                <Image src={FacebookSVG} />
                                            </a>
                                        </ListItem>
                                        <ListItem className="socials-item">
                                            <a href="https://www.instagram.com/unibaofficial">
                                                <Image src={InstagramSVG} />
                                            </a>
                                        </ListItem>
                                        <ListItem className="socials-item">
                                            <a href="http://www.twitter.com/unibait">
                                                <Image src={TwitterSVG} />
                                            </a>
                                        </ListItem>
                                        <ListItem className="socials-item">
                                            <a href="https://www.youtube.com/user/unialdomoro">
                                                <Image src={YoutubeSVG} />
                                            </a>
                                        </ListItem>
                                        <ListItem className="socials-item">
                                            <a href="https://www.linkedin.com/school/universit-degli-studi-di-bari">
                                                <Image src={LinkedinSVG} />
                                            </a>
                                        </ListItem>
                                    </List>
                                </div>
                            </GridColumn>
                            {parsedColumns}
                        </GridRow>
                        <GridRow columns={1}>
                            <GridColumn key={1}>
                                <p className="text-center">Università degli studi di Bari Aldo Moro - Piazza Umberto I - 70121 Bari (Italy) - P.I.01086760723 | C.F.80002170720</p>
                                <p className="text-center">
                                    <a href="mailto:urp@uniba.it">urp@uniba.it</a>
                                    &nbsp;&nbsp;•&nbsp;&nbsp;
                                    <a href="mailto:universitabari@pec.it">universitabari@pec.it</a>
                                    &nbsp;&nbsp;•&nbsp;&nbsp;
                                    <a href="mailto:webmaster@ict.uniba.it">webmaster@ict.uniba.it</a>
                                    &nbsp;&nbsp;•&nbsp;&nbsp;
                                    <a href="mailto:redazioneweb@uniba.it">redazioneweb@uniba.it</a>
                                </p>
                            </GridColumn>
                        </GridRow>
                    </Grid>
                </div>
            </div>
        </footer>
    );
};

export default FooterUniba;