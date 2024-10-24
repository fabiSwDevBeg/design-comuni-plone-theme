import React from 'react';
import PropTypes from 'prop-types';
import { defineMessages, useIntl } from 'react-intl';
import moment from 'moment';
import cx from 'classnames';
import { injectLazyLibs } from '@plone/volto/helpers/Loadable/Loadable';
import {
  Card,
  CardBody,
  CardTitle,
  CardReadMore,
  CardText,
  Row,
  Col,
  Container,
} from 'design-react-kit';

import { UniversalLink } from '@plone/volto/components';

import {
  Icon,
  getItemIcon,
  ListingText,
  ListingLinkMore,
  RassegnaInfo,
} from 'design-comuni-plone-theme/components/ItaliaTheme';
import {
  getCalendarDate,
  getEventRecurrenceMore,
  getComponentWithFallback,
} from 'design-comuni-plone-theme/helpers';
import { getCategory } from 'design-comuni-plone-theme/components/ItaliaTheme/Blocks/Listing/Commons/utils';

const messages = defineMessages({
  default_detail_link: {
    id: 'Vedi',
    defaultMessage: 'Vedi',
  },
  argumentIcon: {
    id: 'argument_icon',
    defaultMessage: 'Icona {type}',
  },
});

const RibbonCardTemplate = (props) => {
  const intl = useIntl();
  moment.locale(intl.locale);

  const {
    items,
    isEditMode,
    linkAlign,
    linkTitle,
    linkHref,
    title,
    show_only_first_ribbon,
    show_detail_link,
    detail_link_label,
    show_section = true,
    show_icon = true,
    show_description = true,
    show_type,
    hide_dates,
    id_lighthouse,
    titleLine,
    linkmore_id_lighthouse,
    rrule,
  } = props;
  return (
    <div className="ribbon-card-template">
      <Container className="px-4">
        {title && (
          <Row>
            <Col>
              <h2 className={cx('mb-4', { 'title-bottom-line': titleLine })}>
                {title}
              </h2>
            </Col>
          </Row>
        )}

        <Row className="mb-4">
          {items.map((item, index) => {
            const itemTitle = item.title || item.id;
            const showRibbon =
              !show_only_first_ribbon ||
              (show_only_first_ribbon && index === 0);
            const icon = show_icon ? getItemIcon(item) : null;
            const date = hide_dates
              ? null
              : getCalendarDate(item, rrule.rrulestr);
            const eventRecurrenceMore = hide_dates
              ? null
              : getEventRecurrenceMore(item, isEditMode);
            const category = getCategory(item, show_type, show_section, props);
            const listingText = show_description ? (
              <ListingText item={item} />
            ) : null;

            const BlockExtraTags = getComponentWithFallback({
              name: 'BlockExtraTags',
              dependencies: ['RibbonCardTemplate', item['@type']],
            }).component;

            const isEventAppointment =
              item.parent?.['@type'] === 'Event' && item?.['@type'] === 'Event';

            return (
              <Col lg={4} sm={12} key={index}>
                <Card
                  className={cx(
                    `card-bg card-big align-items-top rounded shadow`,
                    { show_detail_link: show_detail_link },
                  )}
                  noWrapper={false}
                  tag="div"
                  spacing
                  key={index}
                >
                  {showRibbon && <div className="flag-icon" />}

                  {(category || icon) && (
                    <div className="etichetta">
                      {icon && (
                        <Icon
                          icon={icon}
                          title={intl.formatMessage(messages.argumentIcon, {
                            type: category || item.design_italia_meta_type,
                          })}
                        />
                      )}
                      {category && <span>{category}</span>}
                    </div>
                  )}

                  <CardBody
                    tag="div"
                    className={cx('', { 'mt-5': !showRibbon })}
                  >
                    {date && <div className="dates">{date}</div>}
                    <CardTitle
                      tag="h3"
                      className={`${
                        isEventAppointment ? 'rassegna-appointment-title' : ''
                      }`}
                    >
                      <UniversalLink
                        item={!isEditMode ? item : null}
                        href={isEditMode ? '#' : null}
                        data-element={id_lighthouse}
                      >
                        {itemTitle}
                      </UniversalLink>
                    </CardTitle>
                    {isEventAppointment && (
                      <RassegnaInfo eventoPadre={item.parent} />
                    )}

                    {listingText && <CardText>{listingText}</CardText>}
                    <BlockExtraTags {...props} item={item} itemIndex={index} />
                    {eventRecurrenceMore}
                    {show_detail_link && (
                      <CardReadMore
                        iconName="it-arrow-right"
                        tag={UniversalLink}
                        item={!isEditMode ? item : null}
                        href={isEditMode ? '#' : null}
                        text={
                          detail_link_label ||
                          intl.formatMessage(messages.default_detail_link)
                        }
                        aria-hidden="true"
                      />
                    )}
                  </CardBody>
                </Card>
              </Col>
            );
          })}
        </Row>
        <ListingLinkMore
          title={linkTitle}
          href={linkHref}
          linkAlign={linkAlign}
          className="my-5"
          linkmoreIdLighthouse={linkmore_id_lighthouse}
        />
      </Container>
    </div>
  );
};

RibbonCardTemplate.propTypes = {
  items: PropTypes.arrayOf(PropTypes.any).isRequired,
  isEditMode: PropTypes.bool,
  linkTitle: PropTypes.any,
  linkHref: PropTypes.any,
};

export default injectLazyLibs(['rrule'])(RibbonCardTemplate);
