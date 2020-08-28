'use strict';

/** @type Egg.EggPlugin */

exports.mongoose = {
    enable: true,
    package: 'egg-mongoose',
};

//egg网页日志
exports.logview = {
  package: 'egg-logview',
  // env: ['local', 'default', 'test', 'unittest']
};

exports.oss={
  enable:true, 
  package:'egg-oss',
};