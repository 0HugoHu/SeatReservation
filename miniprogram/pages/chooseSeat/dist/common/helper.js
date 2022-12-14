'use strict';

function extractComponentId() {
  var event = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  var _ref = event.currentTarget || {},
      componentId = _ref.dataset.componentId;

  return componentId;
}


var LIFE_CYCLE = ['onLoad', 'onReady', 'onShow', 'onHide', 'onUnload', 'onPullDownRefresh', 'onReachBottom', 'onShareAppMessage', 'onPageScroll'];

var extendCreator = function extendCreator() {
  var config = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var _config$life = config.life,
      life = _config$life === undefined ? LIFE_CYCLE : _config$life,
      _config$exclude = config.exclude,
      exclude = _config$exclude === undefined ? [] : _config$exclude;


  var excludeList = exclude.concat(LIFE_CYCLE.map(getFuncArrayName));

  if (!Array.isArray(life) || !Array.isArray(exclude)) throw new Error('Invalid Extend Config');
  var lifeCycleList = life.filter(function (item) {
    return LIFE_CYCLE.indexOf(item) >= 0;
  });
  return function extend(target) {
    for (var _len = arguments.length, objList = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      objList[_key - 1] = arguments[_key];
    }

    objList.forEach(function (source) {
      if (source) {
        var keys = Object.keys(source);
        keys.forEach(function (key) {
          var value = source[key];
          if (excludeList.indexOf(key) >= 0) return;
          if (lifeCycleList.indexOf(key) >= 0 && typeof value === 'function') {
            var funcArrayName = getFuncArrayName(key);
            if (!target[funcArrayName]) {
              target[funcArrayName] = [];
              if (target[key]) {
                target[funcArrayName].push(target[key]);
              }
              target[key] = function () {
                var _this = this;

                for (var _len2 = arguments.length, rest = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
                  rest[_key2] = arguments[_key2];
                }

                target[funcArrayName].forEach(function (func) {
                  return func.apply(_this, rest);
                });
              };
            }

            if (source[funcArrayName]) {
              var _target$funcArrayName;

              // ?????????????????????????????????????????????????????????
              (_target$funcArrayName = target[funcArrayName]).push.apply(_target$funcArrayName, source[funcArrayName]);
            } else {
              // ??????????????????????????????????????????
              target[funcArrayName].push(value);
            }
          } else {
            target[key] = value;
          }
        });
      }
    });
    return target;
  };
};

var getFuncArrayName = function getFuncArrayName(name) {
  return '__$' + name;
};

module.exports = {
  extractComponentId: extractComponentId,
  extend: Object.assign,
  extendCreator: extendCreator
};