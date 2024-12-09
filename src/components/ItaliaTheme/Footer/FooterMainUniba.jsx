import React, { useState, useEffect } from 'react';
import {
    Image
} from 'semantic-ui-react';
import {
    Container,
    Row,
    Col,
    // List, 
    // ListItem 
} from 'design-react-kit';
import { useSelector } from 'react-redux';
import FacebookSVG from '../../../theme/images/ico-facebook.svg';
import InstagramSVG from '../../../theme/images/ico-instagram.svg';
import LinkedinSVG from '../../../theme/images/ico-linkedin.svg';
import TwitterSVG from '../../../theme/images/ico-twitter.svg';
import YoutubeSVG from '../../../theme/images/ico-youtube.svg';

const FooterMainUniba = () => {
    const [parsedColumns, setParsedColumns] = useState([]);
    const lang = useSelector((state) => state.intl.locale);

    useEffect(() => {
        // Funzione per recuperare i dati dall'endpoint
        const fullEndpoint = `${window.location.origin}/++api++/${lang}/@@uniba.footer`;
        fetch(fullEndpoint)
            .then(response => response.text()) // Ottieni il contenuto come testo
            .then(html => {
                const parser = new DOMParser();
                const doc = parser.parseFromString(html, 'text/html');
                const columns = doc.querySelectorAll('div.col-sm-4.col-md-3');
                const gridColumns = Array.from(columns).map((column, index) => {
                    const listItems = column.querySelectorAll('ul.list-unstyled li');

                    return (
                        <Col className="list-unstyled ps-4 pb-3" key={index} sm="12" lg="3">
                            {Array.from(listItems).map((listItem, idx) => (
                                <Row key={idx}>
                                    {/* Inserisce il contenuto del <li> direttamente */}
                                    <div dangerouslySetInnerHTML={{ __html: listItem.innerHTML }} />
                                </Row>
                            ))}
                        </Col>
                    );
                });
                setParsedColumns(gridColumns); // Aggiorna lo stato con il contenuto HTML
            })
            .catch(error => console.error("Error fetching the content:", error));
    }, []);

    return (
        <div className="portal-main-footer bg-primary">
            <div className="container position--relative">
                <Container>
                    <Row className="pt-2 pb-2">
                        <Col key="links1" sm="12" lg="3" className='ps-5 pe-5'>
                            <Container className="sedi">
                                <Row className='ps-4 pe-4' key="1">
                                    <Col key="sedi1">
                                        <a href="https://www.uniba.it/ateneo/sede-di-brindisi/">Uniba Brindisi</a>
                                    </Col>
                                    <Col xs="1" key="sedi2">
                                        ·
                                    </Col>
                                    <Col key="sedi3">
                                        <a href="https://www.uniba.it/ateneo/sede-di-taranto/">Uniba Taranto</a>
                                    </Col>
                                </Row>
                            </Container>
                            <Container className="socials">
                                <Row className='ps-4 pe-4'>
                                    <Col className='p-0' key="socials1">
                                        <a href="http://www.facebook.com/pages/Universita-degli-Studi-di-Bari-Aldo-Moro/142796619110027">
                                            <Image src={FacebookSVG} />
                                        </a>
                                    </Col>
                                    <Col className='p-0' key="socials2">
                                        <a href="https://www.instagram.com/unibaofficial">
                                            <Image src={InstagramSVG} />
                                        </a>
                                    </Col>
                                    <Col className='p-0' key="socials3">
                                        <a href="http://www.twitter.com/unibait">
                                            <Image src={TwitterSVG} />
                                        </a>
                                    </Col>
                                    <Col className='p-0' key="socials4">
                                        <a href="https://www.youtube.com/user/unialdomoro">
                                            <Image src={YoutubeSVG} />
                                        </a>
                                    </Col>
                                    <Col className='p-0' key="socials5">
                                        <a href="https://www.linkedin.com/school/universit-degli-studi-di-bari">
                                            <Image src={LinkedinSVG} />
                                        </a>
                                    </Col>
                                </Row>
                            </Container>
                        </Col>
                        {parsedColumns}
                    </Row>
                    <Row className='ps-3 pe-3'>
                        <Col key="footer1">
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
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    );
};

export default FooterMainUniba;