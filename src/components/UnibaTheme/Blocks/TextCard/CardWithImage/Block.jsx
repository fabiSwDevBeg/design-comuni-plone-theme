/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState, useEffect } from 'react';
import { Card, CardBody, Container, Row, Col } from 'design-react-kit';
import { defineMessages, useIntl } from 'react-intl';
import PropTypes from 'prop-types';
import redraft from 'redraft';
import { TextEditorWidget } from 'design-comuni-plone-theme/components/ItaliaTheme';
import config from '@plone/volto/registry';
import cx from 'classnames';

const messages = defineMessages({
  image_card_title: {
    id: 'Type the title…',
    defaultMessage: 'Type the title…',
  },
  image_card_content: {
    id: 'Type description…',
    defaultMessage: 'Digita la descrizione…',
  },
  image_card_click: {
    id: 'Type text…',
    defaultMessage: 'Digita il testo…',
  },
});

const renderImage = (image, showImage, sizeNatural, altText = '') =>
  showImage && image ? (
    <div className="img-responsive-wrapper">
      <div
        className={cx({
          'img-responsive': !sizeNatural,
        })}
      >
        <figure className="img-wrapper">
          <img
            src={`data:${image['content-type']};${image.encoding},${image.data}`}
            alt={altText}
            aria-hidden="true"
            loading="lazy"
          />
        </figure>
      </div>
    </div>
  ) : null;

const Block = ({
  data,
  block,
  inEditMode,
  onChange,
  onSelectBlock,
  onAddBlock,
  onFocusPreviousBlock,
  onFocusNextBlock,
  index,
  selected,
}) => {
  const intl = useIntl();
  const title = data?.image_card_title?.blocks[0]?.text;
  const hasImage = data?.showImage;
  const content = data?.image_card_content;

  const [selectedField, setSelectedField] = useState('title');

  useEffect(() => {
    if (selected) {
      setSelectedField('title');
    } else {
      setSelectedField(null);
    }
  }, [selected]);

  return (
    <div className="image-text-card-wrapper">
      <h2 className="mb-4 mt-5" id={block.id + 'title'}>
        {inEditMode ? (
          <div
            onClick={() => {
              setSelectedField('title');
            }}
            onFocus={() => {
              setSelectedField('title');
            }}
          >
            <TextEditorWidget
              data={data}
              fieldName="image_card_title"
              selected={selectedField === 'title'}
              block={block}
              onChangeBlock={(data) => onChange(data)}
              placeholder={intl.formatMessage(messages.image_card_title)}
              showToolbar={false}
              onSelectBlock={() => {}}
              onAddBlock={() => {
                setSelectedField('content');
              }}
              onFocusNextBlock={() => {
                setSelectedField('content');
              }}
              onFocusPreviousBlock={onFocusPreviousBlock}
            />
          </div>
        ) : (
          title
        )}
      </h2>
      <Card color="white" className="card-bg rounded" noWrapper={false}>
        <CardBody>
          {inEditMode ? (
            <Container>
              <Row
                className={cx('card-body-row', {
                  'revert-row': data?.rightImage,
                  'no-image': !hasImage,
                })}
              >
                {hasImage && (
                  <Col className="my-1 px-0" key={'col-0'}>
                    {renderImage(
                      data?.image,
                      hasImage,
                      data?.sizeNatural,
                      data?.altText,
                    )}
                  </Col>
                )}
                <div
                  key={'col-1'}
                  className={cx('px-4 mb-2', {
                    'col-12': !hasImage,
                    'col-8':
                      (hasImage && data?.sizeImage === 's') ||
                      (hasImage && !data?.sizeImage),
                    'col-6': hasImage && data?.sizeImage === 'm',
                    'col-4': hasImage && data?.sizeImage === 'l',
                    'ps-0': data?.rightImage,
                  })}
                >
                  <div
                    onClick={() => {
                      setSelectedField('content');
                    }}
                    onFocus={() => {
                      setSelectedField('content');
                    }}
                  >
                    <TextEditorWidget
                      data={data}
                      fieldName="image_card_content"
                      selected={selectedField === 'content'}
                      block={block}
                      onChangeBlock={(data) => onChange(data)}
                      placeholder={intl.formatMessage(
                        messages.image_card_content,
                      )}
                      showToolbar={true}
                      onSelectBlock={onSelectBlock}
                      onAddBlock={onAddBlock}
                      index={index}
                      onFocusNextBlock={onFocusNextBlock}
                      onFocusPreviousBlock={() => {
                        setSelectedField('title');
                      }}
                    />
                  </div>
                </div>
              </Row>
            </Container>
          ) : (
            <Container>
              <Row
                className={cx('card-body-row', {
                  'revert-row': data?.rightImage,
                })}
              >
                <Col className="my-1 p-0" key={'col-0'} data-testid={'col-0'}>
                  {renderImage(
                    data?.image,
                    hasImage,
                    data?.sizeNatural,
                    data?.altText,
                  )}
                </Col>
                <div
                  key={'col-1'}
                  data-testid={'col-1'}
                  className={cx('px-4', {
                    'col-12': !hasImage,
                    'col-8':
                      (hasImage && data?.sizeImage === 's') ||
                      (hasImage && !data?.sizeImage),
                    'col-6': hasImage && data?.sizeImage === 'm',
                    'col-4': hasImage && data?.sizeImage === 'l',
                    'ps-0': data?.rightImage,
                  })}
                >
                  {redraft(
                    content,
                    config.settings.richtextViewSettings.ToHTMLRenderers,
                    config.settings.richtextViewSettings.ToHTMLOptions,
                  )}
                </div>
              </Row>
            </Container>
          )}
        </CardBody>
      </Card>
    </div>
  );
};

Block.propTypes = {
  entityMap: PropTypes.any,
  title: PropTypes.string,
  content: PropTypes.any,
};

export default Block;
