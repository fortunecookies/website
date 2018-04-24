const argv = require('yargs').argv
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')

const project = require('./project.config')
const debug = require('debug')('app:config:webpack')

const { __DEV__, __PROD__, __TEST__ } = project.globals

debug('Creating configuration.')
const webpackConfig = {
  name: 'client',
  target: 'web',
  devtool: project.compiler_devtool,
  resolve: {
    modules: [project.paths.client(), 'node_modules'],
    extensions: ['.js', '.jsx', '.json']
  },
  module: {}
}
// ------------------------------------
// Entry Points
// ------------------------------------
const APP_ENTRY = project.paths.client('main.js')

webpackConfig.entry = {
  app: __DEV__
    ? [
        'react-hot-loader/patch',
        // activate HMR for React

        `webpack-dev-server/client?http://localhost:${project.server_port}`,
        // bundle the client for webpack-dev-server
        // and connect to the provided endpoint

        'webpack/hot/only-dev-server',
        // bundle the client for hot reloading
        // only- means to only hot reload for successful updates

        APP_ENTRY
      ]
    : [APP_ENTRY],
  vendor: project.compiler_vendors
}

// ------------------------------------
// Bundle Output
// ------------------------------------
webpackConfig.output = {
  filename: `[name].[${project.compiler_hash_type}].js`,
  path: project.paths.dist(),
  publicPath: project.compiler_public_path
}

// ------------------------------------
// Externals
// ------------------------------------
webpackConfig.externals = ['react/lib/ExecutionEnvironment', 'react/lib/ReactContext', 'react/addons']

// ------------------------------------
// Plugins
// ------------------------------------
webpackConfig.plugins = [
  new webpack.DefinePlugin(project.globals),
  new HtmlWebpackPlugin({
    template: project.paths.client('index.html'),
    hash: false,
    favicon: project.paths.client('static/favicon.png'),
    filename: 'index.html',
    inject: 'body',
    minify: {
      collapseWhitespace: true
    }
  }),
  new CopyWebpackPlugin([{ from: project.paths.public() }])
]

// Ensure that the compiler exits on errors during testing so that
// they do not get skipped and misreported.
if (__TEST__ && !argv.watch) {
  webpackConfig.plugins.push(function() {
    this.plugin('done', function(stats) {
      if (stats.compilation.errors.length) {
        // Pretend no assets were generated. This prevents the tests
        // from running making it clear that there were warnings.
        throw new Error(stats.compilation.errors.map(err => err.message || err))
      }
    })
  })
}

if (__DEV__) {
  debug('Enabling plugins for live development (HMR, NoErrors).')
  webpackConfig.plugins.push(
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),
    new webpack.NoEmitOnErrorsPlugin()
  )
}

if (__PROD__) {
  debug('Enable UglifyJS for production')
  webpackConfig.plugins.push(
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        unused: true,
        dead_code: true,
        warnings: false
      }
    }),
    new webpack.optimize.AggressiveMergingPlugin()
  )
}

// Don't split bundles during testing, since we only want import one bundle
if (!__TEST__) {
  webpackConfig.plugins.push(
    new webpack.optimize.CommonsChunkPlugin({
      names: ['vendor']
    })
  )
}

// ------------------------------------
// Dev Server
// ------------------------------------

webpackConfig.devServer = {
  host: project.server_host,
  port: project.server_port,
  lazy: false,
  historyApiFallback: true,
  overlay: true,
  hot: true,
  contentBase: project.paths.public(),
  quiet: project.compiler_quiet,
  noInfo: project.compiler_quiet,
  stats: project.compiler_stats,
  compress: true,
  disableHostCheck: true
}

// ------------------------------------
// Loaders
// ------------------------------------
// JavaScript / JSON

webpackConfig.module.rules = [
  {
    test: /\.(js|jsx)$/,
    exclude: /node_modules/,
    loader: 'babel-loader',
    options: {
      cacheDirectory: true,
      plugins: [
        'react-hot-loader/babel',
        '@babel/transform-runtime',
        'transform-decorators-legacy',
        [
          'react-loadable/babel',
          {
            server: false,
            webpack: true
          }
        ]
      ],
      presets: [
        ['@babel/es2015', { modules: false }],
        '@babel/react',
        '@babel/stage-0',
        ...(__PROD__ ? [['minify', { mangle: false, guards: false }]] : [])
      ]
    }
  }
]

// File loaders
/* eslint-disable */
webpackConfig.module.rules.push(
  {
    test: /\.woff(\?.*)?$/,
    use: 'url-loader?prefix=fonts/&name=[path][name].[ext]&limit=10000&mimetype=application/font-woff'
  },
  {
    test: /\.woff2(\?.*)?$/,
    use: 'url-loader?prefix=fonts/&name=[path][name].[ext]&limit=10000&mimetype=application/font-woff2'
  },
  {
    test: /\.otf(\?.*)?$/,
    use: 'file-loader?prefix=fonts/&name=[path][name].[ext]&limit=10000&mimetype=font/opentype'
  },
  {
    test: /\.ttf(\?.*)?$/,
    use: 'url-loader?prefix=fonts/&name=[path][name].[ext]&limit=10000&mimetype=application/octet-stream'
  },
  {
    test: /\.eot(\?.*)?$/,
    use: 'file-loader?prefix=fonts/&name=[path][name].[ext]'
  },
  { test: /\.(png|jpg)$/, use: 'url-loader?limit=8192' },
  { test: /\.svg$/, use: 'svg-inline-loader' }
);

module.exports = webpackConfig;
