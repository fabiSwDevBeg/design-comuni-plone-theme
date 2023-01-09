import PropTypes from 'prop-types';
import { defineMessages, useIntl } from 'react-intl';

import { RichTextSection } from 'design-comuni-plone-theme/components/ItaliaTheme/View';

const messages = defineMessages({
  tempi_e_scadenze: {
    id: 'tempi_e_scadenze',
    defaultMessage: 'Tempi e scadenze',
  },
});

const ServizioTempiScadenze = ({ content }) => {
  const intl = useIntl();
  return (
    <RichTextSection
      content={content.tempi_e_scadenze}
      add_class="style_ol_list"
      tag_id="deadlines"
      title={intl.formatMessage(messages.tempi_e_scadenze)}
    />
  );
};

ServizioTempiScadenze.propTypes = {
  content: PropTypes.shape({
    tempi_e_scadenze: PropTypes.shape({
      data: PropTypes.string,
    }),
  }),
};
export default ServizioTempiScadenze;
