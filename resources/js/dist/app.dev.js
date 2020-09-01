"use strict";

var _vue = _interopRequireDefault(require("vue"));

var _vueRouter = _interopRequireDefault(require("vue-router"));

var _Homepage = _interopRequireDefault(require("./components/Homepage"));

var _Create = _interopRequireDefault(require("./components/Create"));

var _Read = _interopRequireDefault(require("./components/Read"));

var _Update = _interopRequireDefault(require("./components/Update"));

var _Comments = _interopRequireDefault(require("./components/Comments"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

require('./bootstrap');

_vue["default"].use(_vueRouter["default"]);

var router = new _vueRouter["default"]({
  mode: 'history',
  routes: [{
    path: '/admin/dashboard',
    name: 'read',
    component: _Read["default"],
    props: true
  }, {
    path: '/admin/create',
    name: 'create',
    component: _Create["default"],
    props: true
  }, {
    path: '/admin/update',
    name: 'update',
    component: _Update["default"],
    props: true
  }]
});
var app = new _vue["default"]({
  el: '#app',
  components: {
    Homepage: _Homepage["default"],
    Comments: _Comments["default"]
  },
  router: router
});