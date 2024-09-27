import React from 'react';
import { HeaderSlimRightZone } from 'design-comuni-plone-theme/components/ItaliaTheme';
import { HeaderRightZone } from 'design-react-kit';
const NavbarSlim = ({
    children,
    sectionClassName,
    navClassName
}) => {
  return (
    <section className={sectionClassName}>
      <nav className={navClassName}>
        {children}
      </nav>
    </section>
  );
};

export default NavbarSlim;
