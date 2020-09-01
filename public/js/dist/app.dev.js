"use strict";

var _vue = _interopRequireDefault(require("vue"));

var _vueRouter = _interopRequireDefault(require("vue-router"));

var _Homepage = _interopRequireDefault(require("./components/Homepage"));

var _Read = _interopRequireDefault(require("./components/Read"));

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
  }]
});
var app = new _vue["default"]({
  el: '#app',
  router: router,
  components: {
    Homepage: _Homepage["default"]
  }
});