/**
 * HeaderSlim component.
 * @module components/ItaliaTheme/Header/HeaderSlim/HeaderSlim
 */

import React from 'react';
import { HeaderSlimRightZone, HeaderSlimBrand, HeaderSlimList} from 'design-comuni-plone-theme/components/UnibaTheme';
import {
  Header,
  HeaderContent,
  HeaderRightZone,
} from 'design-react-kit';

const HeaderSlim = () => {

  return (
    <Header small={false} theme="" type="slim" role="navigation">
      <HeaderContent>
        <section className="uniba-topbar">
          <nav className="uniba-topbar__nav">
            <HeaderSlimBrand 
              className="uniba-topbar__tornauniba"
              href="www.uniba.it"
            />
            <HeaderSlimList />
          </nav>
        </section>
        <HeaderRightZone>
          <HeaderSlimRightZone />
        </HeaderRightZone>
      </HeaderContent>
    </Header>
  );
};

export default HeaderSlim;
