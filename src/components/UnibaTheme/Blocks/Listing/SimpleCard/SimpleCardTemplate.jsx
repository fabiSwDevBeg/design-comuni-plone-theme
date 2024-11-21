import React from 'react';
import PropTypes from 'prop-types';
import { Container } from 'design-react-kit';
import SimpleCardTemplateDefault from 'design-uniba-volto/components/ItaliaTheme/Blocks/Listing/SimpleCard/SimpleCardTemplateDefault';
import SimpleCardTemplateCompact from 'design-uniba-volto/components/ItaliaTheme/Blocks/Listing/SimpleCard/SimpleCardTemplateCompact';
import SimpleCardTemplateOneForRow from 'design-uniba-volto/components/ItaliaTheme/Blocks/Listing/SimpleCard/SimpleCardTemplateOneForRow';

import {
  SimpleCardTemplateAppearance_COMPACT,
  SimpleCardTemplateAppearance_ONEFORROW,
} from 'design-uniba-volto/config/Blocks/ListingOptions';

const SimpleCardTemplate = (data) => {
  let content = null;
  switch (data.appearance) {
    case SimpleCardTemplateAppearance_COMPACT:
      content = <SimpleCardTemplateCompact {...data} />;
      break;
    case SimpleCardTemplateAppearance_ONEFORROW:
      content = <SimpleCardTemplateOneForRow {...data} />;
      break;
    default:
      content = <SimpleCardTemplateDefault {...data} />;
  }

  return <Container className="px-4">{content}</Container>;
};

SimpleCardTemplate.propTypes = {
  items: PropTypes.arrayOf(PropTypes.any).isRequired,
  isEditMode: PropTypes.bool,
  linkTitle: PropTypes.any,
  linkHref: PropTypes.any,
};

export default SimpleCardTemplate;
