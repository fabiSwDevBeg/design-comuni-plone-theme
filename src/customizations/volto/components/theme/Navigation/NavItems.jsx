import React, { useState } from 'react';
import NavItem from '@plone/volto/components/theme/Navigation/NavItem';
import PropTypes from 'prop-types';
import { Dropdown } from 'semantic-ui-react';
import { useHistory , useLocation } from 'react-router-dom';
const NavItems = ({ items, lang , mobile = false, closeNavigation = null}) => {
  const [openDropdown, setOpenDropdown] = useState(null);
  const history = useHistory();
  const location = useLocation();

  const handleDropdownClick = (item) => {
    history.push(item.url);
    setOpenDropdown(null);
    closeNavigation?.();
  };

  const handleDropdownToggle = (item, e) => {
    console.log(e.currentTarget);
    if (e.currentTarget.localName === "i") {
      e.stopPropagation(); // Impedisce che il click sul dropdown icon navighi
      setOpenDropdown(openDropdown === item.url ? null : item.url);
    } else {
      handleDropdownClick(item);
    }
  };

  var dropdownClassName = mobile ? "item" : "item simple";
  return (
    <>
      {items.map((item) =>
            item && item.items && item.items.length > 0 ? (
              <Dropdown 
                text={item.title} 
                className={`${dropdownClassName}${(location.pathname === item.url || location.pathname.includes(item.url)) ? ' inPath' : ''}`}
                key={item.url} 
                closeOnChange={true}
                open={openDropdown === item.url}
                onClick={(e) =>
                  mobile
                    ? handleDropdownToggle(item, e) // Solo per mobile
                    : handleDropdownClick(item) // Per desktop, naviga al link
                }>
                <Dropdown.Menu key={item.url}>
                  {item.items.map((dropdownitem) => (
                    <a className="item" href={dropdownitem.url} key={dropdownitem.url}>{dropdownitem.title}</a>
                  ))}
                </Dropdown.Menu>
              </Dropdown>
            ) : (
              <NavItem item={item} lang={lang} key={item.url} />
            ),
          )}
    </>
  );
};
 
NavItems.propTypes = {
  items: PropTypes.array.isRequired, // Array di oggetti, puoi specificare ulteriormente se conosci la struttura
  lang: PropTypes.string.isRequired, // Stringa per la lingua
  mobile: PropTypes.bool, // Booleano per mobile
  closeNavigation: PropTypes.func, // Funzione per chiudere la navigazione
};

export default NavItems;