/**
 * HeaderSlim component.
 * @module components/UnibaTheme/Header/HeaderSlim
 */

import React from 'react';
import { useSelector } from 'react-redux';
import { HeaderSlimRightZone } from 'design-comuni-plone-theme/components/ItaliaTheme';
import {
  Header,
  /*HeaderBrand,*/
  HeaderContent,
  HeaderRightZone,
} from 'design-react-kit';
import { useIntl } from 'react-intl';
import {
  getSiteProperty,
  useHomePath,
} from 'design-comuni-plone-theme/helpers';
import { HeaderBrand } from '..';
import { SiteProperty } from 'volto-site-settings';

const HeaderSlim = () => {
  const subsite = useSelector((state) => state.subsite?.data);
  const intl = useIntl();
  const homepath = useHomePath();
  const parentSiteURL = subsite
    ? homepath
    : getSiteProperty('parentSiteURL', intl.locale);

  const staticParentSiteTitle = getSiteProperty('parentSiteTitle', intl.locale);

  // TODO DEPRECATED use only SiteProperty
  const deprecatedSubsiteParentSiteTitle = getSiteProperty(
    'subsiteParentSiteTitle',
    intl.locale,
  );

  const subsiteParentSiteTitle = SiteProperty({
    property: 'site_title',
    forceValue: deprecatedSubsiteParentSiteTitle,
    defaultValue: getSiteProperty('subsiteParentSiteTitle', intl.locale),
    getValue: true,
    getParent: true,
  });

  const target = subsite ? null : '_blank';
  return (
    <Header small={false} theme="" type="slim" role="navigation">
      <HeaderContent>
        <HeaderBrand
          responsive
          href={parentSiteURL}
          target={target}
          rel="noopener noreferrer"
          className="uniba-topbar__tornauniba"
        >
          {!subsite && staticParentSiteTitle}
          {subsite && (subsiteParentSiteTitle?.replaceAll('\\n', ' - ') ?? '')}
        </HeaderBrand>
        <HeaderRightZone>
          <HeaderSlimRightZone />
        </HeaderRightZone>
      </HeaderContent>
    </Header>
  );
};

export default HeaderSlim;
