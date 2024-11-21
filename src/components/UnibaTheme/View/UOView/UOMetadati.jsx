import PropTypes from 'prop-types';
import { Metadata } from 'design-uniba-volto/components/ItaliaTheme/View';

const UOMetadati = ({ content }) => {
  return <Metadata content={content} showSectionTitle={false} />;
};

UOMetadati.propTypes = {
  content: PropTypes.object,
};

export default UOMetadati;
