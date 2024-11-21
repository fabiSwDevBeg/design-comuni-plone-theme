import React from 'react';
import { defineMessages, useIntl } from 'react-intl';
import { Gallery } from 'design-uniba-volto/components/ItaliaTheme/View';
import { contentFolderHasItems } from 'design-uniba-volto/helpers';

const messages = defineMessages({
  video: {
    id: 'Video',
    defaultMessage: 'Video',
  },
});

const VenueMultimedia = ({ content }) => {
  const intl = useIntl();
  return contentFolderHasItems(content, 'multimedia') ? (
    <Gallery
      content={content}
      folder_name={'multimedia'}
      title_video={intl.formatMessage(messages.video)}
      title_type="h5"
    />
  ) : null;
};

export default VenueMultimedia;
