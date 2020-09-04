/* eslint valid-jsdoc: "off" */

'use strict';
const path = require('path');
/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_eshow';

  // 安全配置
  config.security = {
    csrf: {
      enable: false,
    },
    domainWhiteList: [ '*' ]
  };
  // HTTP请求配置
  config.httpclient = {
    request: {
      timeout: 60 * 1000,
    },
  };
  // session配置
  config.session = {
    key: 'KEY_SESS',
    maxAge: 3600 * 1000,
    httpOnly: true,
    encrypt: true,
  };
  // 静态资源地址
  config.static = {
    prefix: '/public/',
    dir: path.join(appInfo.baseDir, '/app/public'),
    dynamic: true,
    preload: false,
    buffer: false,
    maxFiles: 1000,
  };
  // 日志配置
  config.logger = {
    level: 'DEBUG',
    dir: path.join(appInfo.baseDir, 'logs'),
  };

  // add your middleware config here
  config.middleware = ['gzip'];
  config.gzip = {
    threshold: 1024, // 小于 1k 的响应体不压缩
  }
  config.bodyParser = {
    jsonLimit: '1mb',
    formLimit: '1mb',
  }
  config.multipart = {
    mode: 'file',
    // fileExtensions: [ '.apk' ], // 增加对 apk 扩展名的文件支持 
    // whitelist: [ '.png' ], // 覆盖整个白名单，只允许上传 '.png' 格式   注意：当重写了 whitelist 时，fileExtensions 不生效。
  }
  config.cors = {
    origin: '*', // 访问白名单,根据你自己的需要进行设置
    allowMethods: 'GET,HEAD,PUT,POST,DELETE,PATCH,OPTIONS'
  };
  config.mongoose = {
    url: 'mongodb://127.0.0.1:27017/fl',
    options: {},
  };
  // 接口配置
  config.url = {
    host: '', // 公共接口
    port: '', // 公共端口
  };

  return config;
};
