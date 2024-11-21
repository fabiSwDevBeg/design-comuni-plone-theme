import {
  templatesOptions,
  addDefaultOptions,
} from 'design-uniba-volto/config/Blocks/ListingOptions';

import { addLighthouseField } from 'design-uniba-volto/config/Blocks/ListingOptions/utils';

export const addCompleteBlockLinksTemplateOptions = (
  schema,
  formData,
  intl,
  position = 1,
) => {
  let pos = position;

  pos = addLighthouseField(schema, intl, pos);

  pos = addDefaultOptions(schema, formData, intl, pos);

  pos = templatesOptions(
    schema,
    formData,
    intl,
    ['show_description'],
    null,
    pos,
  );
  return pos;
};
