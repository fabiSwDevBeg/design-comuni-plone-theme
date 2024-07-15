import React from 'react';
import cx from 'classnames';
import { useIntl } from 'react-intl';
import { SiteProperty } from 'volto-site-settings';
import { getSiteProperty } from 'design-comuni-plone-theme/helpers';

const BrandText = ({ mobile = false, subsite, getParent = false }) => {
  const intl = useIntl();
  // TODO DEPRECATED: remove and only use SiteProperty
  const deprecatedSiteTitle =
    subsite?.title || getSiteProperty('siteTitle', intl.locale);
  let title =
    deprecatedSiteTitle ||
    SiteProperty({
      property: 'site_title',
      defaultValue: getSiteProperty('siteTitle', intl.locale),
      getValue: true,
      getParent: getParent,
    });

  // TODO DEPRECATED: remove and only use SiteProperty
  const deprecatedSiteSubtitle =
    subsite?.description || getSiteProperty('siteSubtitle', intl.locale);
  const description =
    deprecatedSiteSubtitle ||
    SiteProperty({
      property: 'site_subtitle',
      defaultValue: getSiteProperty('siteSubtitle', intl.locale),
      getValue: true,
      getParent: getParent,
    });
  const titleSplit = title?.split('\n') ?? null;
  title = titleSplit?.map((t, i) => (
    <>
      {t}
      {i < titleSplit.length - 1 && <br />}
    </>
  ));

  return (
    <div className="it-brand-text">
      {title && <p className="no_toc h2">{title}</p>}
      {description && (
        <p className={cx('no_toc h3', { 'd-none d-md-block': !mobile })}>
          {description}
        </p>
      )}
    </div>
  );
};

export default BrandText;
