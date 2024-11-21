import React from 'react';
import { TrasparenzaFields } from 'design-uniba-volto/components/ItaliaTheme/View';
import config from '@plone/volto/registry';

const ServizioTrasparenza = ({ content }) => {
  return config.settings.showTrasparenzaFields ? (
    <TrasparenzaFields content={content} />
  ) : (
    <></>
  );
};

export default ServizioTrasparenza;
