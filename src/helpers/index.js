/**
 * Add your helpers here.
 * @module helpers
 * @example
 * export { Api } from './Api/Api';
 */

export { defaultIconWidgetOptions } from 'design-uniba-volto/helpers/IconWidget/IconWidgetHelper';
export { fontAwesomeAliases } from 'design-uniba-volto/helpers/IconWidget/IconAliasHelper';
export {
  getCalendarDate,
  getEventRecurrenceMore,
} from 'design-uniba-volto/helpers/ListingHelper';
export {
  contentFolderHasItems,
  renderPDCItemValue,
} from 'design-uniba-volto/helpers/contentHelper';
export { checkRedraftHasContent } from 'design-uniba-volto/helpers/redraftHelper';
export { getTableRowData } from 'design-uniba-volto/helpers/amministrazioneTrasparenteHelper';
export { getItemsByPath } from 'design-uniba-volto/helpers/getItemsByPath';
export {
  viewDate,
  getRealStartAndEndWithRecurrence,
  getRealEventEnd,
} from 'design-uniba-volto/helpers/dates';
export { getSiteProperty } from 'design-uniba-volto/helpers/config';
export { useDebouncedEffect } from 'design-uniba-volto/helpers/debounce';
export {
  FILE_FORMATS,
  FILE_EXTENSIONS,
  getFileViewFormat,
} from 'design-uniba-volto/helpers/files';
export {
  videoUrlHelper,
  checkIfValidVideoLink,
} from 'design-uniba-volto/helpers/videoUrlHelper';
export {
  blockIsNotEmptyPlaceholder,
  SSRRenderHtml,
} from 'design-uniba-volto/helpers/htmlDiff';
export {
  serviceFormValidationHelper,
  blocksFieldIsEmpty,
  getRealEmptyField,
  eventFormValidationHelper,
} from 'design-uniba-volto/helpers/FormValidation/FormValidationHelpers';
export {
  getSpecificDataGridFieldValidation,
  realWidgetType,
  CUSTOM_DGFIELD_VALIDATION,
} from 'design-uniba-volto/helpers/FormValidation/DataGridFormValidationHelpers';

export { commonSearchBlockMessages } from 'design-uniba-volto/helpers/Translations/searchBlockExtendedTranslations';

export { getComponentWithFallback } from 'design-uniba-volto/helpers/registry';
export { useHomePath } from 'design-uniba-volto/helpers/url';
export { usePaginatedItemsSection } from 'design-uniba-volto/helpers/usePaginatedItemsSection.hook.ts';
