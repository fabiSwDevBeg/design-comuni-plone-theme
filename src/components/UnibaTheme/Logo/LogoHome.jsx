/**
 * Logo Home component.
 * @module components/UnibaTheme/Logo/LogoHome
 */
import { Image } from 'semantic-ui-react';
import LogoImage from './LogoHome.svg';

/**
 * Logo component class.
 * @function LogoHome
 * @param {Object} intl Intl object
 * @returns {string} Markup of the component.
 */
const LogoHome = ({
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

export default LogoHome;
