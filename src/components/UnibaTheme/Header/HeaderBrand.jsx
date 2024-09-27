import classNames from 'classnames';
/*import { LogoText, LogoHome } from '..';*/
import LogoText from '../Logo/LogoText';
import LogoHome from '../Logo/LogoHome';

const HeaderBrand = ({
  className,
  href,
  children,
  tag = 'a',
  responsive = false,
  testId,
  ...attributes
}) => {
  return (
    <div className={className} data-testid={testId}>
      <a href={href} {...attributes}>
        {/* Render both logos inside the <a> tag */}
        <LogoHome />
        <LogoText />
      </a>
    </div>
  );
};

export default HeaderBrand;
