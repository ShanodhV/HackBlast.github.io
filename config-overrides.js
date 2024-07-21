// config-overrides.js
const { override, addWebpackModuleRule } = require('customize-cra');

const ignoreSourceMapLoaderWarnings = () => config => {
  const newConfig = {
    ...config,
    module: {
      ...config.module,
      rules: config.module.rules.map(rule => {
        if (rule.use && rule.use.some(use => use.loader === 'source-map-loader')) {
          return {
            ...rule,
            exclude: /@mediapipe\/tasks-vision/
          };
        }
        return rule;
      })
    }
  };
  return newConfig;
};

module.exports = override(
  ignoreSourceMapLoaderWarnings()
);
