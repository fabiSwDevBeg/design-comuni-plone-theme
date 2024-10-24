/* ****************
Costuisce il SideMenu utilizzando tutti gli h2 che trova nella parte di destra del contenuto.
******************/
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable no-unused-expressions */
import { defineMessages, useIntl } from 'react-intl';
import React, { useEffect, useState, useCallback, useMemo } from 'react';
import { throttle } from 'lodash';
import {
  Progress,
  Accordion,
  AccordionBody,
  AccordionHeader,
} from 'design-react-kit';
import cx from 'classnames';

const messages = defineMessages({
  index: {
    id: 'index',
    defaultMessage: 'Indice della pagina',
  },
});

const extractHeaders = (elements, intl) => {
  let item;
  let headers = [];
  for (var index = 0; index < elements.length; index++) {
    item = elements[index];

    const h = item.getElementsByTagName('h2');

    for (var hi = 0; hi < h.length; hi++) {
      headers.push({
        id: h[hi].id,
        title: h[hi].innerText,
        item: h[hi],
      });
    }
  }
  return headers;
};

/**
 * SideMenuByTitles view component class.
 * @function SideMenuByTitles
 * @params {object} content: Content object.
 * @returns {string} Markup of the component.
 */
const SideMenuByTitles = ({ data, content_uid, index_title }) => {
  const intl = useIntl();

  const [headers, setHeaders] = useState([]);
  const [activeSection, setActiveSection] = useState(null);
  const [scrollY, setScrollY] = useState(0);
  const [isClient, setIsClient] = useState(false);

  const [isNavOpen, setIsNavOpen] = useState(
    __CLIENT__ ? window.innerWidth >= 992 : false,
  );

  useEffect(() => {
    setIsClient(true);
  }, []);

  const handleScroll = useCallback(() => {
    const scrollOffset = 0.1 * window.innerHeight;
    setScrollY(window.scrollY);
    const headersHeights = headers
      .map((section) => {
        const element = document.getElementById(section.id);
        return {
          id: section.id,
          top: element?.getBoundingClientRect()?.top,
        };
      })
      .filter((section) => section.top <= scrollOffset);
    if (headersHeights.length > 0) {
      const section = headersHeights.reduce(
        (prev, curr) => (prev.top > curr.top ? prev : curr),
        headers[0],
      );
      setActiveSection(section.id);
    } else {
      setActiveSection(null); //di default nessun header è selezionato.
    }
  }, [headers, activeSection]);

  useEffect(() => {
    if (data?.children) {
      const extractedHeaders = extractHeaders(data.children, intl);

      if (extractedHeaders.length > 0) {
        setHeaders(extractedHeaders);
        // setActiveSection(extractedHeaders[0].id); //di default nessun header è selezionato.
      }
    }
  }, [data, content_uid]);

  useEffect(() => {
    if (headers.length > 0)
      window.addEventListener('scroll', throttledHandleScroll, {
        passive: true,
      });

    return () => {
      window.removeEventListener('scroll', throttledHandleScroll);
    };
  }, [headers]);

  const throttledHandleScroll = throttle(handleScroll, 100);

  const handleClickAnchor = (id) => (e) => {
    e.preventDefault();
    if (window.innerWidth < 992) {
      setIsNavOpen(false);
    }
    // Blur a link
    document.getElementById(`item-${id}`).blur();
    // Focus on section
    document.getElementById(id).focus({ preventScroll: true });
    // Scroll to section
    // setTimeout hack should wait for rerender after setIsNavOpen
    setTimeout(() => {
      document.getElementById(id)?.scrollIntoView?.({
        behavior: 'smooth',
        block: 'start',
      });
    }, 0);
  };

  const yCountEnd = isClient
    ? document.querySelector('#main-content-section')
    : null;

  const progressValue = useMemo(() => {
    if (!isClient) return 0;
    return (scrollY - yCountEnd.offsetTop) / yCountEnd.offsetHeight || 0;
  }, [scrollY, isClient]);

  return headers?.length > 0 ? (
    <div className="sticky-wrapper navbar-wrapper page-side-menu">
      <nav className="navbar it-navscroll-wrapper navbar-expand-lg">
        <div className="menu-wrapper">
          <div className="link-list-wrapper menu-link-list">
            <div className="accordion-wrapper">
              <Accordion>
                <AccordionHeader
                  active={isNavOpen}
                  onToggle={() => {
                    setIsNavOpen(!isNavOpen);
                  }}
                  aria-controls="side-menu-body"
                >
                  <h3>{index_title ?? intl.formatMessage(messages.index)}</h3>
                </AccordionHeader>
                <div className="mb-3">
                  <Progress
                    value={progressValue > 0 ? 100 * progressValue : 0}
                    role="progressbar"
                  />
                </div>
                <AccordionBody
                  active={isNavOpen}
                  id="side-menu-body"
                  role="region"
                >
                  <ul className="link-list" data-element="page-index">
                    {headers.map((item, i) => {
                      return (
                        <li className="nav-item" key={item.id}>
                          <a
                            className={cx('nav-link', {
                              active: item.id === activeSection,
                            })}
                            href={`#${item.id}`}
                            onClick={handleClickAnchor(item.id)}
                            id={`item-${item.id}`}
                          >
                            <span>{item.title}</span>
                          </a>
                        </li>
                      );
                    })}
                  </ul>
                </AccordionBody>
              </Accordion>
            </div>
          </div>
        </div>
      </nav>
    </div>
  ) : null;
};
export default SideMenuByTitles;
