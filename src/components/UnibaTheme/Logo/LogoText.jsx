/**
 * Logo Text component.
 * @module components/UnibaTheme/Logo/LogoText
 */
import { Image } from 'semantic-ui-react';
import LogoImage from './LogoText.svg';

/**
 * Logo component class.
 * @function LogoText
 * @param {Object} intl Intl object
 * @returns {string} Markup of the component.
 */
const LogoText = ({
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

export default LogoText;
