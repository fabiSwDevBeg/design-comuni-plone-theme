/**
 * HeaderCenter component.
 * @module components/Header/HeaderCenter
 */

import React from 'react';
import { defineMessages, useIntl } from 'react-intl';
import { UniversalLink } from '@plone/volto/components';
import { useSelector } from 'react-redux';
import { Header, HeaderContent, HeaderRightZone } from 'design-react-kit';
import { flattenToAppURL } from '@plone/volto/helpers';
import {
  Logo,
  SocialHeader,
  HeaderSearch,
  BrandText,
} from 'design-comuni-plone-theme/components/UnibaTheme';
import { useHomePath } from 'design-comuni-plone-theme/helpers';

const messages = defineMessages({
  logoSubsiteAlt: {
    id: 'logo-subsite-alt',
    defaultMessage: 'Logo',
  },
  subsiteUniversalLink: {
    id: 'link-subsite-homepage-title',
    defaultMessage: 'homepage',
  },
});

const HeaderCenter = () => {
  const intl = useIntl();
  const subsite = useSelector((state) => state.subsite?.data);
  const logoSubsite = subsite?.subsite_logo && (
    <figure className="icon">
      <Logo alt={intl.formatMessage(messages.logoSubsiteAlt)} />
    </figure>
  );
  const homepath = useHomePath();

  return (
    <Header small={false} theme="" type="center">
      <HeaderContent>
        <div className="it-brand-wrapper ps-4" id="portal-logo">
          <UniversalLink
            href={subsite?.['@id'] ? flattenToAppURL(subsite['@id']) : homepath}
            title={intl.formatMessage(messages.subsiteUniversalLink)}
            className="main-header_uniba"
          >
            {subsite?.subsite_logo ? logoSubsite : <Logo className="icon" />}
          </UniversalLink>
        </div>
        <HeaderRightZone>
          <SocialHeader />
          <HeaderSearch />
        </HeaderRightZone>
      </HeaderContent>
    </Header>
  );
};

export default HeaderCenter;
