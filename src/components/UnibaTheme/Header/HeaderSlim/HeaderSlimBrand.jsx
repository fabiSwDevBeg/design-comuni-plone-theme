import React from 'react';
import { LogoSlimText } from 'design-comuni-plone-theme/components/UnibaTheme';
import { LogoSlimHome } from 'design-comuni-plone-theme/components/UnibaTheme';

const HeaderSlimBrand = ({
    className,
    href,
    ...attributes
}) => {
  return (
    <div className={className}>
      <div>
        <a href={href} {...attributes}>
          <LogoSlimHome alt="Home uniba"/>
          <LogoSlimText alt="Torna in uniba"/>
        </a>
      </div>
    </div>
  );
};

export default HeaderSlimBrand;