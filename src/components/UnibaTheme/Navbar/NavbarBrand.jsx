import React from 'react';
import LogoText from '../Logo/LogoText';
import LogoHome from '../Logo/LogoHome';

const NavbarBrand = ({
    className,
    href,
    ...attributes
}) => {
  return (
    <div className={className}>
      <div>
        <a href={href} {...attributes}>
          <LogoHome alt="Home uniba"/>
          <LogoText alt="Torna in uniba"/>
        </a>
      </div>
    </div>
  );
};

export default NavbarBrand;
