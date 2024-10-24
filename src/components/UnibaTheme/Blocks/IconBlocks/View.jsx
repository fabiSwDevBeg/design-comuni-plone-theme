/**
 * View IconsBlock block.
 * @module components/ItaliaTheme/Blocks/Accordion/View
 */

import React from 'react';
import PropTypes from 'prop-types';
import redraft from 'redraft';
import ViewBlock from './Block/ViewBlock';
import { Container, Row, Col } from 'design-react-kit';
import { flattenToAppURL } from '@plone/volto/helpers';
import { UniversalLink } from '@plone/volto/components';
import config from '@plone/volto/registry';
import { checkRedraftHasContent } from 'design-comuni-plone-theme/helpers';

/**
 * View IconsBlock block class.
 * @class View
 * @extends Component
 */
const IconsBlockView = ({ data, block }) => {
  const id = new Date().getTime();
  const Image = config.getComponent({ name: 'Image' }).component;

  return (
    <div className="block iconBlocks">
      <div className="public-ui">
        <div className="full-width section py-5">
          {data.background?.[0] ? (
            <div className="background-image">
              <Image
                item={data.background[0]}
                alt=""
                role={null}
                responsive={true}
                sizes="100vw"
              />
            </div>
          ) : (
            <div className="background-image no-image"></div>
          )}
          <Container className="px-md-4">
            <div className="block-header">
              {checkRedraftHasContent(data.title) && (
                <div className="title">
                  {redraft(
                    data.title,
                    config.settings.richtextViewSettings.ToHTMLRenderers,
                    config.settings.richtextViewSettings.ToHTMLOptions,
                  )}
                </div>
              )}
              {checkRedraftHasContent(data.description) && (
                <div className="description">
                  {redraft(
                    data.description,
                    config.settings.richtextViewSettings.ToHTMLRenderers,
                    config.settings.richtextViewSettings.ToHTMLOptions,
                  )}
                </div>
              )}
            </div>
            <Row>
              {data.subblocks.map((subblock, index) => (
                <Col lg="4" xl="3" key={subblock.id}>
                  <ViewBlock
                    data={subblock}
                    key={index}
                    id={id}
                    index={index}
                  />
                </Col>
              ))}
            </Row>

            {data.href && data.linkMoreTitle && (
              <div className="link-button text-center my-4">
                <UniversalLink
                  href={flattenToAppURL(data.href)}
                  className="btn btn-tertiary"
                >
                  {data.linkMoreTitle}
                </UniversalLink>
              </div>
            )}
          </Container>
        </div>
      </div>
    </div>
  );
};

/**
 * Property types.
 * @property {Object} propTypes Property types.
 * @static
 */
IconsBlockView.propTypes = {
  data: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default IconsBlockView;
