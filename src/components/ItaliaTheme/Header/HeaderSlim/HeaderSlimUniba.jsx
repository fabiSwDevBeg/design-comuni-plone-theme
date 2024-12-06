/**
 * HeaderSlim component.
 * @module components/ItaliaTheme/Header/HeaderSlim/HeaderSlim
 */

import React from 'react';
import { HeaderSlimRightZoneUniba, HeaderSlimBrandUniba, HeaderSlimListUniba} from 'design-comuni-plone-theme/components/ItaliaTheme';
import {
  Header,
  HeaderContent,
  HeaderRightZone,
} from 'design-react-kit';

const HeaderSlimUniba = () => {
  return (
    <Header small={false} theme="" type="slim" role="navigation">
      <HeaderContent>
        <section className="uniba-topbar">
          <nav className="uniba-topbar__nav">
            <HeaderSlimBrandUniba 
              className="uniba-topbar__tornauniba"
              href="www.uniba.it"
            />
            <HeaderSlimListUniba />
          </nav>
          <HeaderRightZone>
            <HeaderSlimRightZoneUniba />
          </HeaderRightZone>
        </section>
      </HeaderContent>
    </Header>
  );
};

export default HeaderSlimUniba;
