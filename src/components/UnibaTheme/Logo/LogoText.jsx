/**
 * Logo component.
 * @module components/UnibaTheme/Logo/LogoText
 */
import { useEffect } from 'react';
import { Image } from 'semantic-ui-react';
import { ConditionalLink } from '@plone/volto/components';
import LogoImage from './LogoText.svg';
import { useSelector, useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { getNavroot } from '@plone/volto/actions';
import {
  flattenToAppURL,
  hasApiExpander,
  getBaseUrl,
} from '@plone/volto/helpers';

/**
 * Logo component class.
 * @function LogoText
 * @param {Object} intl Intl object
 * @returns {string} Markup of the component.
 */
const LogoText = () => {
  const pathname = useLocation().pathname;
  const site = useSelector((state) => state.site.data);
  const navroot = useSelector((state) => state.navroot.data);
  const dispatch = useDispatch();

  useEffect(() => {
    if (pathname && !hasApiExpander('navroot', getBaseUrl(pathname))) {
      dispatch(getNavroot(getBaseUrl(pathname)));
    }
  }, [dispatch, pathname]);

  const navRootPath = flattenToAppURL(navroot?.navroot?.['@id']) || '/';
  const currentURLIsNavRoot = pathname !== navRootPath;

  return (
      <Image
        src={
          site['plone.site_logo']
            ? flattenToAppURL(site['plone.site_logo'])
            : LogoImage
        }
        alt={navroot?.navroot?.title}
        title={navroot?.navroot?.title}
      />
  );
};

export default LogoText;
