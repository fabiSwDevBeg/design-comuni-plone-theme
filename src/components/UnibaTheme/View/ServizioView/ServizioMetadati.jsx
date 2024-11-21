import PropTypes from 'prop-types';
import { Metadata } from 'design-uniba-volto/components/ItaliaTheme/View';

const ServizioMetadati = ({ content }) => {
  return <Metadata content={content} showSectionTitle={false} />;
};

ServizioMetadati.propTypes = {
  content: PropTypes.object,
};

export default ServizioMetadati;
