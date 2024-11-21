import React from 'react';
import PropTypes from 'prop-types';

import { Gallery } from 'design-uniba-volto/components/ItaliaTheme/View';

const NewsItemGallery = ({ content }) => {
  return <Gallery content={content} folder_name={'multimedia'} />;
};

NewsItemGallery.propTypes = {
  content: PropTypes.object.isRequired,
};

export default NewsItemGallery;
