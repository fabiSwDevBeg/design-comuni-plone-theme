import React from 'react';
import { defineMessages, useIntl } from 'react-intl';
import { Link } from 'react-router-dom';
import { flattenToAppURL } from '@plone/volto/helpers';
import { Chip, ChipLabel } from 'design-react-kit';

const messages = defineMessages({
  persona: {
    id: 'persona',
    defaultMessage: 'Persona',
  },
});

const IncaricoPersone = ({ content }) => {
  const intl = useIntl();

  return content?.persona?.length > 0 ? (
    <article
      id="persone-struttura"
      className="it-page-section anchor-offset mt-5"
    >
      <h4 id="header-persone-struttura">
        {intl.formatMessage(messages.persona)}
      </h4>
      <div className="ruolo-persone-struttura">
        {content?.persona?.map((person, _i) => (
          <Link
            to={flattenToAppURL(person['@id'])}
            key={person['@id']}
            title={person.title}
            className="text-decoration-none me-2"
          >
            <Chip
              color="primary"
              disabled={false}
              large={false}
              simple
              tag="div"
            >
              <ChipLabel tag="span">{person.title}</ChipLabel>
            </Chip>
          </Link>
        ))}
      </div>
    </article>
  ) : (
    <></>
  );
};

export default IncaricoPersone;
