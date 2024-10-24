/*
CUSTOMIZATIONS:
- get defaultValue from siteProperties
*/

import React from 'react';
import { useIntl } from 'react-intl';
import { useSelector } from 'react-redux';
import { Helmet } from '@plone/volto/helpers';
import { SiteProperty } from 'volto-site-settings';
import { getSiteProperty } from 'design-comuni-plone-theme/helpers';

const SiteSettingsExtras = (props) => {
  const intl = useIntl();
  const subsite = useSelector((state) => state.subsite?.data);
  let siteTitle = SiteProperty({
    property: 'site_title',
    getValue: true,
    defaultValue: getSiteProperty('siteTitle', intl.locale),
    // TODO DEPRECATED: remove and only use defaultValue in v12
    forceValue: subsite?.title || getSiteProperty('siteTitle', intl.locale),
  });

  const parentSiteTitle = SiteProperty({
    property: 'site_title',
    getValue: true,
    getParent: true,
    defaultValue: getSiteProperty('siteTitle', intl.locale),
    // TODO DEPRECATED: remove and only use defaultValue in v12
    forceValue: getSiteProperty('siteTitle', intl.locale),
  });

  if (parentSiteTitle !== siteTitle) {
    siteTitle = siteTitle + ' - ' + parentSiteTitle;
  }

  siteTitle = siteTitle?.replaceAll('\\n', ' - ') ?? '';

  return <Helmet titleTemplate={`%s - ${siteTitle}`} />;
};
export default SiteSettingsExtras;
