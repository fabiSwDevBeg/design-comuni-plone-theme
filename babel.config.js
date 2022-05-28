module.exports = require('@plone/volto/babel');
/*
//const babelVolto = require('@plone/volto/babel');
module.exports = function (api) {
  api.cache(true);
  const presets = ['razzle/babel'];
  const plugins = [
    [
      '@babel/plugin-transform-react-jsx',
      {
        runtime: 'automatic',
      },
    ],
    'lodash',
    '@babel/plugin-proposal-export-default-from', // Stage 1
    '@babel/plugin-syntax-export-namespace-from', // Stage 4
    '@babel/plugin-proposal-throw-expressions', // Stage 2
    [
      'babel-plugin-root-import', // Required for the ~ imports to work
      {
        rootPathSuffix: 'src',
      },
    ],
    [
      'react-intl', // React Intl extractor, required for the whole i18n infrastructure to work
      {
        messagesDir: './build/messages/',
      },
    ],
    '@loadable/babel-plugin', // Required by the @loadable plugin
    [
      'transform-imports',
      {
        '@fortawesome/free-solid-svg-icons': {
          transform: (importName, matches) =>
            `@fortawesome/free-solid-svg-icons/${importName.toUpperCase()}`,
          preventFullImport: true,
          skipDefaultConversion: true,
        },
        '@fortawesome/free-regular-svg-icons': {
          transform: (importName, matches) =>
            `@fortawesome/free-regular-svg-icons/${importName.toUpperCase()}`,
          preventFullImport: true,
          skipDefaultConversion: true,
        },
        '@fortawesome/free-brands-svg-icons': {
          transform: (importName, matches) =>
            `@fortawesome/free-brands-svg-icons/${importName.toUpperCase()}`,
          preventFullImport: true,
          skipDefaultConversion: true,
        },
        'react-bootstrap': {
          transform: (importName, matches) =>
            `react-bootstrap/lib/${importName.toUpperCase()}`,
          preventFullImport: true,
        },
        'design-react-kit/dist/design-react-kit': {
          transform: (importName, matches) =>
            `design-react-kit/dist/design-react-kit/${importName.toUpperCase()}`,
          preventFullImport: true,
        },
        lodash: {
          transform: (importName, matches) =>
            `lodash/${importName.toUpperCase()}`,
          preventFullImport: true,
        },
      },
    ],
  ];

  return {
    plugins,
    presets,
  };
};
*/
