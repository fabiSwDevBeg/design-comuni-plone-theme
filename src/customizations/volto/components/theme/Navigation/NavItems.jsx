import React, { useState } from 'react';
import NavItem from '@plone/volto/components/theme/Navigation/NavItem';
import { Dropdown } from 'semantic-ui-react';
import { useHistory } from 'react-router-dom';
const NavItems = ({ items, lang }) => {
  const [openDropdown, setOpenDropdown] = useState(null);
  const history = useHistory();

  const handleItemClick = () => {
    setOpenDropdown(null); // Chiude il dropdown
  };
  
  const handleDropdownClick = (item) => {
    history.push(item.url);
    setOpenDropdown(null);
  };

  return (
    <>
      {items.map((item) =>
            item && item.items && item.items.length > 0 ? (
              <Dropdown 
                text={item.title} 
                className="item simple" 
                key={item.url} 
                closeOnChange={true}
                open={openDropdown}
                onClick={() => handleDropdownClick(item)}>
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
 
export default NavItems;