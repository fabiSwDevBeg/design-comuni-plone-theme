/**
 * Logo Home component.
 * @module components/UnibaTheme/Logo/LogoSlimHome
 */
import { Image } from 'semantic-ui-react';
import LogoImage from './LogoHome.svg';

/**
 * Logo component class.
 * @function LogoSlimHome
 * @param {Object} intl Intl object
 * @returns {string} Markup of the component.
 */
const LogoSlimHome = ({
  alt,
  ...attributes
}) => {
  return (
      <Image
        src={
          LogoImage
        }
        alt={alt}
        title={alt}
        {...attributes}
      />
  );
};

export default LogoSlimHome;