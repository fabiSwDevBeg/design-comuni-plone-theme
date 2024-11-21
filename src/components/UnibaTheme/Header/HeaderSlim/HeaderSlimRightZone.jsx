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
} from 'design-uniba-volto/components/UnibaTheme';

const HeaderSlimRightZone = () => {
  const subsite = useSelector((state) => state.subsite?.data);

  const toggleTopbarList = () => {
    // Seleziona la lista e il pulsante
    const topbarList = document.getElementById('topbar-list');
    const toggleButton = document.getElementById('uniba-topbar_button');
    
    if (topbarList && toggleButton) {
      // Toggle la visibilità della lista
      topbarList.classList.toggle('in');
      
      // Toggle la classe 'collapsed' sul pulsante
      toggleButton.classList.toggle('collapsed');
    }
  };

  return (
    <>
      <ParentSiteMenu />
      {!subsite && <TertiaryMenu />}
      <LanguageSelector />
      <span className="uniba-topbar__collapse pull-right">
        <a 
          role="button" 
          href="#" 
          id="uniba-topbar_button" 
          className="out collapsed"
          onClick={(e) => {
            e.preventDefault();
            toggleTopbarList();
          }}>
          <span className="Icon-collapse"></span>
          <span className="Icon-expand"></span>
        </a>
      </span>
      <HeaderLogin />
    </>
  );
};

export default HeaderSlimRightZone;
