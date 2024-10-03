import { Grid, GridRow, GridColumn, Image, List, ListItem } from 'semantic-ui-react';
import FacebookSVG from '../../../theme/UnibaTheme/images/ico-facebook.svg';
import InstagramSVG from '../../../theme/UnibaTheme/images/ico-instagram.svg';
import LinkedinSVG from '../../../theme/UnibaTheme/images/ico-linkedin.svg';
import TwitterSVG from '../../../theme/UnibaTheme/images/ico-twitter.svg';
import YoutubeSVG from '../../../theme/UnibaTheme/images/ico-youtube.svg';

const FooterUniba = () => {
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
                            <GridColumn key={2}>
                                <div className="text-xs-center">
                                    <List className="list-unstyled">
                                        <ListItem>
                                            <a href="https://www.uniba.it/it/organizzazione/amm-centrale/dai/sezione-servizi-istituzionali/uo-urp-e-redazione-web/urp">Ufficio Relazioni con il Pubblico</a>
                                        </ListItem>
                                        <ListItem>
                                            <a href="https://www.uniba.it/it/ateneo/contatti/pec-posta-elettronica-certificata">Posta elettronica certificata PEC</a>
                                        </ListItem>
                                        <ListItem>
                                            <a href="https://www.uniba.it/it/ateneo/rettorato/ufficio-stampa/contatti">Ufficio stampa</a>
                                        </ListItem>
                                        <ListItem>
                                            <a href="https://www.uniba.it/it/organizzazione/amm-centrale/dai/sezione-servizi-istituzionali/uo-urp-e-redazione-web/redazione-web">Redazione Web</a>
                                        </ListItem>
                                        <ListItem>
                                            <a href="https://csi.ict.uniba.it/">Centro Servizi Informatici</a>
                                        </ListItem>
                                        <ListItem>
                                            <a href="https://www.uniba.it/it/studenti/servizi-disabilita-dsa/servizi-disabilita">Disabilità e DSA</a>
                                        </ListItem>
                                        <ListItem>
                                            <a href="https://www.uniba.it/it/bdg-gep">Bilancio di Genere &amp; Gender Equality Plan</a>
                                        </ListItem>
                                        <ListItem>
                                            <a href="https://community.ict.uniba.it/in/login" rel="noopener" target="_blank">Area Riservata</a>
                                        </ListItem>
                                    </List>
                                </div>
                            </GridColumn>
                            <GridColumn key={3}>
                                <div className="text-xs-center">
                                    <List className="list-unstyled">
                                        <ListItem>
                                            <a href="http://opendata.uniba.it/">Open Data</a>
                                        </ListItem>
                                        <ListItem>
                                            <a href="https://www.uniba.it/it/crediti">Credits</a>
                                        </ListItem>
                                        <ListItem>
                                            <a href="https://www.uniba.it/it/sitemap">Mappa del sito</a> e<a href="https://www.uniba.it/accessibility-info"> Accessibilità</a>
                                        </ListItem>
                                        <ListItem>
                                            <a href="https://www.uniba.it/it/ateneo/privacy">Privacy</a> e <a href="https://www.uniba.it/it/note-legali">Note legali</a>
                                        </ListItem>
                                        <ListItem>
                                            <a href="https://www.uniba.it/studenti/e-learning">E-learning</a>
                                        </ListItem>
                                        <ListItem>
                                            <a href="https://www.uniba.it/it/ateneo/fattura-elettronica">Fatturazione elettronica</a><a href="https://www.uniba.it/ateneo/contatti/pec-posta-elettronica-certificata"></a>
                                        </ListItem>
                                        <ListItem>
                                            <a href="https://www.uniba.it/it/elenco-siti-tematici/siti-tematici">Elenco siti tematici</a>
                                        </ListItem>
                                        <ListItem>
                                            <a href="https://www.uniba.it/it/ateneo/privacy/informative/info-cookie-e-sito">Informativa sul trattamento dati</a>
                                        </ListItem>
                                    </List>
                                </div>
                            </GridColumn>
                            <GridColumn key={4}>
                                <div className="text-xs-center">
                                    <List className="list-unstyled">
                                        <ListItem>
                                            <a href="https://www.uniba.it/it/amministrazione-trasparente">Amministrazione trasparente</a>
                                        </ListItem>
                                        <ListItem>
                                            <a href="https://www.uniba.it/it/ateneo/albo-pretorio" title="Albo Pretorio">Albo online</a>
                                        </ListItem>
                                        <ListItem>
                                            <a href="https://www.uniba.it/it/amministrazione-trasparente/altri-contenuti/dati-uteriori/atti-notifica">Atti di notifica</a>
                                        </ListItem>
                                        <ListItem>
                                            <a href="https://www.uniba.it/it/ateneo/amministrazione/servizio-editoriale-universitario/bollettino-ufficiale">Bollettino ufficiale</a>
                                        </ListItem>
                                        <ListItem>
                                            <a href="https://www.uniba.it/it/bandi-gare">Bandi e gare</a>
                                        </ListItem>
                                        <ListItem>
                                            <a href="https://www.uniba.it/it/personale/reclutamento-e-concorsi">Concorsi e selezioni</a>
                                        </ListItem>
                                        <ListItem>
                                            <a href="https://www.uniba.it/it/dati-di-monitoraggio">Dati di monitoraggio</a>
                                        </ListItem>
                                        <ListItem>
                                            <a href="https://www.uniba.it/it/ateneo/presidio-qualita">Presidio della Qualità</a>
                                        </ListItem>
                                    </List>
                                </div>
                            </GridColumn>
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