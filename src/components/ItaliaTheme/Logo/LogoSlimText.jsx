/**
 * Logo Text component.
 * @module components/UnibaTheme/Logo/LogoSlimText
 */
import { Image } from 'semantic-ui-react';
import LogoImage from './LogoText.svg';

/**
 * Logo component class.
 * @function LogoSlimText
 * @param {Object} intl Intl object
 * @returns {string} Markup of the component.
 */
const LogoSlimText = ({
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

export default LogoSlimText;