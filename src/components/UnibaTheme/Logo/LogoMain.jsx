/**
 * Logo Home component.
 * @module components/UnibaTheme/Logo/LogoHome
 */
import { Image } from 'semantic-ui-react';
import LogoImage from './LogoMain.svg';

/**
 * Logo component class.
 * @function LogoHome
 * @param {Object} intl Intl object
 * @returns {string} Markup of the component.
 */
const LogoMain = ({
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

export default LogoMain;
