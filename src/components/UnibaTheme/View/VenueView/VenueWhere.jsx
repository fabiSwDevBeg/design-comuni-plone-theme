import React from 'react';
import PropTypes from 'prop-types';
import { defineMessages, useIntl } from 'react-intl';
import { Card, CardBody, CardTitle, CardText } from 'design-react-kit';
import {
  richTextHasContent,
  RichText,
  RichTextSection,
} from 'design-comuni-plone-theme/components/ItaliaTheme/View';
import { OSMMap } from 'volto-venue';

const messages = defineMessages({
  dove: {
    id: 'dove',
    defaultMessage: 'Indirizzo',
  },
  circoscrizione: {
    id: 'circoscrizione',
    defaultMessage: 'Circoscrizione',
  },
  quartiere: {
    id: 'quartiere',
    defaultMessage: 'Quartiere',
  },
});

const VenueWhere = ({ content }) => {
  const intl = useIntl();

  return (content.geolocation?.latitude && content.geolocation?.longitude) ||
    content.street ||
    content.zip_code ||
    content.city ||
    content.country ||
    content.circoscrizione ||
    content.quartiere ||
    richTextHasContent(content.notes) ? (
    <RichTextSection tag_id="dove" title={intl.formatMessage(messages.dove)}>
      <Card className="card card-teaser border-left-card preview-image-card card-big-io-comune shadow mt-3 rounded mb-4">
        <CardBody>
          <CardTitle>
            <h3 className="h5 card-title">{content.title}</h3>
          </CardTitle>
          <CardText>
            <p>
              {[content.street, content.city]
                .filter((v) => v !== null)
                .join(' - ')}
              {(content.street || content.city) &&
                (content.zip_code || content.country) && <br />}

              {[content.zip_code, content.country?.title]
                .filter((v) => v !== null)
                .join(' - ')}
            </p>
          </CardText>
        </CardBody>
      </Card>
      {__CLIENT__ &&
        content.geolocation?.latitude &&
        content.geolocation?.longitude && (
          <OSMMap
            markers={[
              {
                latitude: content.geolocation.latitude,
                longitude: content.geolocation.longitude,
                title: content.title,
              },
            ]}
            mapOptions={{
              scrollWheelZoom: false,
              // tap: false,
              // dragging: false,
            }}
          />
        )}
      {content.circoscrizione && (
        <div className="circoscrizione">
          <h3 className="mt-3">
            {intl.formatMessage(messages.circoscrizione)}
          </h3>
          <div className="font-serif">{content.circoscrizione}</div>
        </div>
      )}
      {content.quartiere && (
        <div className="quartiere">
          <h3 className="mt-3">{intl.formatMessage(messages.quartiere)}</h3>
          <div className="font-serif">{content.quartiere}</div>
        </div>
      )}

      {richTextHasContent(content.notes) && (
        <div className="mt-5">
          <RichText data={content.notes} />
        </div>
      )}
    </RichTextSection>
  ) : (
    <></>
  );
};

VenueWhere.propTypes = {
  content: PropTypes.shape({
    geolocation: PropTypes.object,
    street: PropTypes.string,
    zip_code: PropTypes.string,
    city: PropTypes.string,
    country: PropTypes.string,
    circoscrizione: PropTypes.string,
    quartiere: PropTypes.string,
  }).isRequired,
};

export default VenueWhere;
