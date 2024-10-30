/**
 * HeaderSlim component.
 * @module components/ItaliaTheme/Header/HeaderSlim/HeaderSlimRightZone
 */

import React from 'react';
import { useSelector } from 'react-redux';

import {
  ParentSiteMenu,
  LanguageSelector,
  HeaderLogin,
  TertiaryMenu,
} from 'design-comuni-plone-theme/components/ItaliaTheme';

const HeaderSlimRightZone = () => {
  const subsite = useSelector((state) => state.subsite?.data);
  return (
    <>
      <ParentSiteMenu />
      {!subsite && <TertiaryMenu />}
      <LanguageSelector />
      <span class="uniba-topbar__collapse pull-right">
        <a role="button" href="#" data-target="#topbar-list" data-toggle="collapse" id="uniba-topbar__button" class="out collapsed" aria-expanded="false">
          <span class="Icon-collapse"></span>
          <span class="Icon-expand"></span>
        </a>
      </span>
      <HeaderLogin />
    </>
  );
};

export default HeaderSlimRightZone;
