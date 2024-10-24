/*
 * Customization with image
 *
 * If you have a jpg/png, do like this:
 *
 * <figure className="icon">
 *  <img src={logo} alt="" />
 * </figure>
 *
 * Note the icon class.
 */

/* SVG example
 import { Icon } from 'design-comuni-plone-theme/components/ItaliaTheme';
 const Logo = () => <Icon color="" icon="it-pa" padding={false} size="" />;
*/

/* PNG example using https://www.npmjs.com/package/webpack-image-resize-loader *
 * works, but some issues with prettier and jest
 */
// eslint-disable-next-line import/no-unresolved
//import logo from './logo.png?width=164';
import logo from './unibalogo.svg';
import { SiteProperty } from 'volto-site-settings';

const Logo = ({ alt = 'Logo', className }) => {
  return (
    <SiteProperty
      property="site_logo"
      defaultValue={{url: logo, height: 80, width: 270}}
      className={className}
      alt={alt}
    />
  );
};
export default Logo;
