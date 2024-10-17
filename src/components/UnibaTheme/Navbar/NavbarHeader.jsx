import { Logo } from '@plone/volto/components';
import { HeaderSearch } from 'design-comuni-plone-theme/components/ItaliaTheme';
import { HeaderRightZone } from 'design-react-kit';
const NavbarHeader = () => {
    return (
        <div id="portal-header">
            <div id="portal-logo">
                <Logo />
            </div>
            <div className="search-social-wrapper no-social-links">
                <HeaderRightZone>
                    <HeaderSearch />
                </HeaderRightZone>
            </div>
        </div>
    );
};
export default NavbarHeader;