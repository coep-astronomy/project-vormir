const path = require('path');
const webpack = require('webpack');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const BrotliPlugin = require('brotli-webpack-plugin');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const ESLintPlugin = require('eslint-webpack-plugin');
const dotenv = require('dotenv');

module.exports = (env) => {
  // eslint-disable-next-line
  console.log('WEBPACK ENV: ', env);

  // Variables
  const isProduction = env === 'production';
  const isDev = env === 'development';

  let envVars;
  if (isProduction) {
    envVars = {
      NODE_ENV: env,
    };
  } else {
    // call dotenv and it will return an Object with a parsed key
    envVars = dotenv.config().parsed || {};
    envVars.NODE_ENV = env;
  }

  // reduce it to a nice object, the same as before
  const envKeys = Object.keys(envVars).reduce((prev, next) => {
    // eslint-disable-next-line
    prev[`process.env.${next}`] = JSON.stringify(envVars[next]);
    return prev;
  }, {});

  /* ========= Plugins ========= */
  // Maps environment variables from .env file to the project
  const DefinePlugin = new webpack.DefinePlugin(envKeys);

  // Cleans 'dist' folder everytime before a new build
  const CleanPlugin = new CleanWebpackPlugin({
    root: path.join(__dirname, '/dist'),
    verbose: true,
    dry: false,
  });

  // Plugin to generate a bundle map with sizes
  const AnalyzerPlugin = new BundleAnalyzerPlugin({
    analyzerMode: 'disabled',
  });

  // Plugin to copy assets/static directory to the build
  const CopyPlugin = new CopyWebpackPlugin({
    patterns: [{ from: './public/assets', to: './assets' }],
  });

  // Plugin to setup the root html template
  const HTMLPlugin = new HtmlWebpackPlugin({
    template: './public/index.html',
    chunksSortMode: 'none',
    favicon: './public/assets/icons/favicon.ico',
  });

  // Plugin to support hot reload in development
  const HotReloadPlugin = new webpack.HotModuleReplacementPlugin();

  // Plugin for compression
  const BrotliWebpackPlugin = new BrotliPlugin({
    asset: '[path].br[query]',
    test: /\.(js|css|html|svg)$/,
    threshold: 0,
    minRatio: 0.8,
  });

  // Plugin for type checking during build time
  const TypeCheckPlugin = new ForkTsCheckerWebpackPlugin({
    async: false,
  });

  // Plugin to lint code during build time
  const LintPlugin = new ESLintPlugin({
    extensions: ['js', 'jsx', 'ts', 'tsx'],
  });

  // Building Webpack
  const config = {};

  config.entry = ['babel-polyfill', './src/index.tsx'];

  config.output = {
    path: path.join(__dirname, '/dist'),
    filename: 'bundle.js',
  };

  config.optimization = {
    splitChunks: {
      cacheGroups: {
        commons: {
          test: /[\\]node_modules[\\]/,
          name: 'vendor',
          chunks: 'initial',
        },
      },
    },
    runtimeChunk: {
      name: 'manifest',
    },
    minimizer: [
      new UglifyJsPlugin({
        sourceMap: false,
        uglifyOptions: {
          ecma: 8,
          mangle: false,
          keep_classnames: true,
          keep_fnames: true,
        },
      }),
    ],
  };

  config.plugins = [
    TypeCheckPlugin,
    LintPlugin,
    CleanPlugin,
    AnalyzerPlugin,
    HTMLPlugin,
    CopyPlugin,
    DefinePlugin,
  ];

  config.module = {
    rules: [
      {
        test: /\.(ts|js)x?$/i,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              '@babel/preset-env',
              '@babel/preset-react',
              '@babel/preset-typescript',
            ],
          },
        },
        exclude: /node_modules/,
      },
      {
        test: /\.(png|jpg|jpeg|gif|svg|woff|woff2|ttf|cot)$/,
        loader: 'file-loader',
      },
      {
        test: /\.html$/,
        loader: 'html-loader',
      },
      {
        test: /\.(css|scss)$/i,
        use: ['style-loader', 'css-loader'],
      },
    ],
  };

  config.resolve = {
    extensions: ['.tsx', '.ts', '.js'],
  };

  if (isProduction) {
    config.output = {
      // publicPath: path.join(__dirname, 'dist', '/'),
      chunkFilename: '[name].[contenthash].bundle.js',
      filename: '[name].[contenthash].bundle.js',
      path: path.join(__dirname, 'dist'),
    };

    config.mode = 'production';
    config.devtool = '';

    config.plugins.push(BrotliWebpackPlugin);
  }

  if (isDev) {
    config.output = {
      path: path.join(__dirname, 'dist'),
      chunkFilename: '[name].bundle.js',
      filename: '[name].bundle.js',
    };

    config.mode = 'development';
    config.devtool = 'inline-source-map';

    config.plugins.push(HotReloadPlugin);

    config.devServer = {
      contentBase: path.join(__dirname, 'dist'),
      historyApiFallback: true,
      port: 3000,
      open: true,
      hot: true,
    };
  }

  return config;
};
