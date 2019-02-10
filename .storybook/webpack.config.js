const path = require('path');
const autoprefixer = require("autoprefixer");
const modulesPath = path.resolve(__dirname, '../sass')
module.exports = (config, env) => {

  if (env === 'PRODUCTION') {
    config.plugins = config.plugins
      .filter(plugin => plugin.constructor.name !== 'UglifyJsPlugin')
  }

  const rules = config.module.rules
  rules.forEach((rule, index) => {
    if ('README.md'.match(rule.test)) {
      // console.warn('replacing MD rule:', rule)
      rules.splice(index, 1, {
        test: /\.md$/,
        loader: 'raw-loader',
      })
    }
  })

  rules.push(
    {
      enforce: 'pre',
      test: /\.s[ac]ss/,
      use: 'import-glob-loader'
    },
    {
      test: /\.s[ac]ss$/,
      loaders: [
        'style-loader',
        'css-loader',
        {
          loader: 'postcss-loader',
          options: {
            plugins: () => [autoprefixer()]
          }
        },
        {
          loader: 'sass-loader'
        },
      ],
      include: modulesPath,
    },
    {
      test: /\.stories\.js[x]?$/,
      loaders: [require.resolve('@storybook/addon-storysource/loader')],
      enforce: 'pre',
    }
  )

  return config
}
