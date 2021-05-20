import React from 'react';
import PropTypes from 'prop-types';
import { defineMessages, useIntl } from 'react-intl';
import moment from 'moment';
import 'moment/min/locales';
import cx from 'classnames';

import {
  Card,
  CardBody,
  CardTitle,
  CardReadMore,
  CardText,
  Row,
  Col,
  Container,
} from 'design-react-kit/dist/design-react-kit';

import { UniversalLink } from '@plone/volto/components';

import { flattenToAppURL } from '@plone/volto/helpers';

import { Icon, getItemIcon, ListingText } from '@italia/components/ItaliaTheme';
import { getCalendarDate, getEventRecurrenceMore } from '@italia/helpers';
import { getCategory } from '@italia/components/ItaliaTheme/Blocks/Listing/Commons/utils';

const messages = defineMessages({
  view_all: {
    id: 'Vedi tutto',
    defaultMessage: 'Vedi tutto',
  },
  default_detail_link: {
    id: 'Vedi',
    defaultMessage: 'Vedi',
  },
});

const RibbonCardTemplate = ({
  items,
  isEditMode,
  linkMore,
  title,
  show_only_first_ribbon,
  show_detail_link,
  detail_link_label,
  show_block_bg,
  show_section = true,
  show_icon = true,
  show_description = true,
  show_type,
  hide_dates,
}) => {
  const intl = useIntl();
  moment.locale(intl.locale);

  return (
    <div
      className={cx('ribbon-card-template', {
        'public-ui': isEditMode,
      })}
    >
      <div className="full-width">
        <Container className="px-4">
          {title && (
            <Row>
              <Col>
                <h2 className="mb-4">{title}</h2>
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
              const date = hide_dates ? null : getCalendarDate(item);
              const eventRecurrenceMore = hide_dates
                ? null
                : getEventRecurrenceMore(item, isEditMode);
              const category = getCategory(item, show_type, show_section);
              const listingText = show_description ? (
                <ListingText item={item} />
              ) : null;

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
                        {icon && <Icon icon={icon} />}
                        {category && <span>{category}</span>}
                      </div>
                    )}

                    <CardBody
                      tag="div"
                      className={cx('', { 'mt-5': !showRibbon })}
                    >
                      {date && <div className="dates">{date}</div>}
                      <CardTitle tag="h3">
                        <UniversalLink
                          item={!isEditMode ? item : null}
                          href={isEditMode ? '#' : null}
                        >
                          {itemTitle}
                        </UniversalLink>
                      </CardTitle>
                      {listingText && <CardText>{listingText}</CardText>}

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
                        />
                      )}
                    </CardBody>
                  </Card>
                </Col>
              );
            })}
          </Row>
          {linkMore?.href && (
            <div className="link-button text-center my-5">
              <UniversalLink
                href={flattenToAppURL(linkMore.href)}
                className="btn btn-tertiary"
              >
                {linkMore.title || intl.formatMessage(messages.view_all)}
              </UniversalLink>
            </div>
          )}
        </Container>
      </div>
    </div>
  );
};

RibbonCardTemplate.propTypes = {
  items: PropTypes.arrayOf(PropTypes.any).isRequired,
  isEditMode: PropTypes.bool,
  linkMore: PropTypes.any,
};

export default RibbonCardTemplate;
