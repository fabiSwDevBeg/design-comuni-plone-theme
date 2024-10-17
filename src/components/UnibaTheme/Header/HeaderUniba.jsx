import { NavbarSlim, NavbarBrand, NavbarList, NavbarCenter } from 'design-comuni-plone-theme/components/UnibaTheme'

const HeaderUniba = () => {
    return (
        <header id="portal-top">
            <NavbarSlim
                sectionClassName="uniba-topbar"
                navClassName="uniba-topbar__nav"
            >
                <NavbarBrand
                    className="uniba-topbar__tornauniba"
                    href="www.uniba.it"
                />
                <NavbarList />
            </NavbarSlim>
            <NavbarCenter />
        </header>
    );
};

export default HeaderUniba;