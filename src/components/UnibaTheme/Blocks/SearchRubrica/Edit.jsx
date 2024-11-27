import React from 'react';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import { SidebarPortal } from '@plone/volto/components';
import {
  BlockSearchRubricaSidebar,
  BlockSearchRubricaBody,
} from 'design-uniba-volto/components/UnibaTheme';
import { SearchUtils } from 'design-uniba-volto/components';

const Edit = ({
  data,
  id,
  block,
  onChangeBlock,
  openObjectBrowser,
  selected,
}) => {
  const { parseFetchedSections } = SearchUtils;
  const location = useLocation();

  const fetched_sections = useSelector(
    (state) => {
      console.log('Redux State:', state);
      return state?.searchFilters?.result?.sections;
    }
  );

  const sections = fetched_sections
    ? parseFetchedSections(fetched_sections, location)
    : [];

  return (
    <>
      <div className="block full-width">
        <BlockSearchRubricaBody block={data} sections={sections} />
      </div>
      <SidebarPortal selected={selected}>
        <BlockSearchRubricaSidebar
          data={data}
          block={block}
          onChangeBlock={onChangeBlock}
          openObjectBrowser={openObjectBrowser}
          sections={sections}
        />
      </SidebarPortal>
    </>
  );
};

/**
 * Property types.
 * @property {Object} propTypes Property types.
 * @static
 */
Edit.propTypes = {
  data: PropTypes.objectOf(PropTypes.any).isRequired,
  id: PropTypes.string.isRequired,
  selected: PropTypes.bool.isRequired,
  block: PropTypes.string.isRequired,
};

export default Edit;
