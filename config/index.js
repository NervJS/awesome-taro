let outputRoot = "dist";

if (process.env.npm_config_argv.indexOf("h5") > 0) {
  outputRoot = "dist_h5";
} else if (process.env.npm_config_argv.indexOf("weapp") > 0) {
  outputRoot = "dist_we";
} else if (process.env.npm_config_argv.indexOf("swan") > 0) {
  outputRoot = "dist_swan";
} else if (process.env.npm_config_argv.indexOf("alipay") > 0) {
  outputRoot = "dist_al";
}

const config = {
  projectName: 'taro_zhihu_dva_wxparse',
  date: '2018-12-14',
  designWidth: 750,
  deviceRatio: {
    '640': 2.34 / 2,
    '750': 1,
    '828': 1.81 / 2
  },
  sourceRoot: 'src',
  outputRoot: outputRoot,
  plugins: {
    babel: {
      sourceMap: true,
      presets: [
        'env'
      ],
      plugins: [
        'transform-class-properties',
        'transform-decorators-legacy',
        'transform-object-rest-spread'
      ]
    },
  },
  defineConstants: {
  },
  // 小程序端专用配置
  weapp: {
    module: {
      postcss: {
        autoprefixer: {
          enable: true
        },
        // 小程序端样式引用本地资源内联配置
        url: {
          enable: true,
          config: {
            limit: 10240
          }
        }
      }
    }
  },
  // H5 端专用配置
  h5: {
    publicPath: '/',
    staticDirectory: 'static',
    module: {
      postcss: {
        autoprefixer: {
          enable: true
        }
      }
    },
    // 自定义 webpack 配置
    webpackChain: {},
    devServer: {
      port: 8000
    }
  }
}

module.exports = function (merge) {
  if (process.env.NODE_ENV === 'development') {
    return merge({}, config, require('./dev'))
  }
  return merge({}, config, require('./prod'))
}
