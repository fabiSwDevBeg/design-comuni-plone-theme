/**
 * NewsItemView view component.
 * @module components/theme/View/NewsItemView
 */

import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';

import { Attachments } from './Commons';
import { Gallery } from './Commons';
import { CuredBy } from './Commons';
import { Locations } from './Commons';
import { WideImage } from './Commons';
import { SideMenu } from './Commons';
import { PageHeader } from './Commons';
import { RichTextArticle } from './Commons';
import { Metadata } from './Commons';
import { readingTime } from './ViewUtils';
// import { getBaseUrl } from '@plone/volto/helpers';

/**
 * NewsItemView view component class.
 * @function NewsItemView
 * @params {object} content Content object.
 * @returns {string} Markup of the component.
 */
const NewsItemView = ({ content }) => {
  let readingtime = readingTime(
    content.text.data + ' ' + content.title + ' ' + content.description,
  );
  return (
    <>
      <div className="container px-4 my-4 newsitem-view">
        <PageHeader
          content={content}
          readingtime={readingtime}
          showreadingtime={true}
          showdates={true}
          showtopics={true}
          showtassonomiaargomenti={true}
        />
        {(content.image || content.image_caption) && (
          <WideImage
            title={content.title}
            image={content.image}
            caption={content.image_caption}
          />
        )}
        <div className="row border-top row-column-border row-column-menu-left">
          <aside className="col-lg-4">
            <SideMenu />
          </aside>
          <section className="col-lg-8 it-page-sections-container">
            {content.text.data && (
              <RichTextArticle
                content={content.text.data}
                tag_id={'text-body'}
                title={null}
              />
            )}
            {content?.items.some(e => e.id === 'multimedia') && (
              <Gallery content={content} folder_name={'multimedia'} />
            )}
            {content?.items.some(e => e.id === 'documenti-allegati') && (
              <Attachments
                content={content}
                folder_name={'documenti-allegati'}
              />
            )}
            {(content.a_cura_di || content.a_cura_di_persone) && (
              <CuredBy
                content={content}
                office={content.a_cura_di}
                people={content.a_cura_di_persone}
              />
            )}
            {content.luoghi_notizia && (
              <Locations locations={content.luoghi_notizia} />
            )}
            {content.dataset && (
              <RichTextArticle
                content={content.dataset.data}
                tag_id="dataset"
                title={'Dataset'}
              />
            )}
            <Metadata content={content} />
          </section>
        </div>
      </div>
      <section id="contenuti-correlati"></section>
    </>
  );
};

/**
 * Property types.
 * @property {Object} propTypes Property types.
 * @static
 */
NewsItemView.propTypes = {
  content: PropTypes.shape({
    title: PropTypes.string,
    subtitle: PropTypes.string,
    description: PropTypes.string,
    effective: PropTypes.string,
    expires: PropTypes.string,
    image: PropTypes.object,
    image_caption: PropTypes.string,
    text: PropTypes.shape({
      data: PropTypes.string,
    }),
    items: PropTypes.array,
    a_cura_di: PropTypes.shape({
      title: PropTypes.string,
    }),
    a_cura_di_persone: PropTypes.object,
    dataset: PropTypes.shape({
      data: PropTypes.string,
    }),
    modified: PropTypes.string,
    rights: PropTypes.string,
  }).isRequired,
};

export default NewsItemView;
