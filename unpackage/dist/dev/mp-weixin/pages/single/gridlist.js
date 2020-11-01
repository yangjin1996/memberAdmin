(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["pages/single/gridlist"],{

/***/ 347:
/*!*************************************************************************************!*\
  !*** C:/Users/小进进/Desktop/memberAdmin/main.js?{"page":"pages%2Fsingle%2Fgridlist"} ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(createPage) {__webpack_require__(/*! uni-pages */ 4);
var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 2));
var _gridlist = _interopRequireDefault(__webpack_require__(/*! ./pages/single/gridlist.vue */ 348));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}
createPage(_gridlist.default);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["createPage"]))

/***/ }),

/***/ 348:
/*!******************************************************************!*\
  !*** C:/Users/小进进/Desktop/memberAdmin/pages/single/gridlist.vue ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _gridlist_vue_vue_type_template_id_5f29bc3c_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gridlist.vue?vue&type=template&id=5f29bc3c&scoped=true& */ 349);
/* harmony import */ var _gridlist_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./gridlist.vue?vue&type=script&lang=js& */ 351);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _gridlist_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _gridlist_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../Downloads/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 11);

var renderjs




/* normalize component */

var component = Object(_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _gridlist_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _gridlist_vue_vue_type_template_id_5f29bc3c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _gridlist_vue_vue_type_template_id_5f29bc3c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "5f29bc3c",
  null,
  false,
  _gridlist_vue_vue_type_template_id_5f29bc3c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["components"],
  renderjs
)

component.options.__file = "pages/single/gridlist.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 349:
/*!*************************************************************************************************************!*\
  !*** C:/Users/小进进/Desktop/memberAdmin/pages/single/gridlist.vue?vue&type=template&id=5f29bc3c&scoped=true& ***!
  \*************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_gridlist_vue_vue_type_template_id_5f29bc3c_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../Downloads/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../Downloads/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--16-0!../../../../Downloads/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!../../../../Downloads/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!../../../../Downloads/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../Downloads/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./gridlist.vue?vue&type=template&id=5f29bc3c&scoped=true& */ 350);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_gridlist_vue_vue_type_template_id_5f29bc3c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_gridlist_vue_vue_type_template_id_5f29bc3c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_gridlist_vue_vue_type_template_id_5f29bc3c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_gridlist_vue_vue_type_template_id_5f29bc3c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),

/***/ 350:
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--16-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!C:/Users/小进进/Desktop/memberAdmin/pages/single/gridlist.vue?vue&type=template&id=5f29bc3c&scoped=true& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var components
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ 351:
/*!*******************************************************************************************!*\
  !*** C:/Users/小进进/Desktop/memberAdmin/pages/single/gridlist.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Downloads_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_gridlist_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../Downloads/HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib!../../../../Downloads/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!../../../../Downloads/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!../../../../Downloads/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../Downloads/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./gridlist.vue?vue&type=script&lang=js& */ 352);
/* harmony import */ var _Downloads_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_gridlist_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_gridlist_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _Downloads_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_gridlist_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _Downloads_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_gridlist_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_gridlist_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 352:
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!C:/Users/小进进/Desktop/memberAdmin/pages/single/gridlist.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var cuGrid = function cuGrid() {__webpack_require__.e(/*! require.ensure | components/single/grid/cu-grid */ "components/single/grid/cu-grid").then((function () {return resolve(__webpack_require__(/*! ../../components/single/grid/cu-grid.vue */ 749));}).bind(null, __webpack_require__)).catch(__webpack_require__.oe);};var typelist = function typelist() {__webpack_require__.e(/*! require.ensure | components/single/grid/classify-list */ "components/single/grid/classify-list").then((function () {return resolve(__webpack_require__(/*! ../../components/single/grid/classify-list.vue */ 1001));}).bind(null, __webpack_require__)).catch(__webpack_require__.oe);};var cuBar = function cuBar() {__webpack_require__.e(/*! require.ensure | components/single/bar/cu-bar */ "components/single/bar/cu-bar").then((function () {return resolve(__webpack_require__(/*! ../../components/single/bar/cu-bar.vue */ 756));}).bind(null, __webpack_require__)).catch(__webpack_require__.oe);};var cases = function cases() {__webpack_require__.e(/*! require.ensure | components/single/grid/item_case2 */ "components/single/grid/item_case2").then((function () {return resolve(__webpack_require__(/*! ../../components/single/grid/item_case2.vue */ 1008));}).bind(null, __webpack_require__)).catch(__webpack_require__.oe);};var caseslist = function caseslist() {__webpack_require__.e(/*! require.ensure | components/single/grid/item_case */ "components/single/grid/item_case").then((function () {return resolve(__webpack_require__(/*! ../../components/single/grid/item_case.vue */ 1015));}).bind(null, __webpack_require__)).catch(__webpack_require__.oe);};var designers = function designers() {__webpack_require__.e(/*! require.ensure | components/single/grid/item_designer2 */ "components/single/grid/item_designer2").then((function () {return resolve(__webpack_require__(/*! ../../components/single/grid/item_designer2.vue */ 1022));}).bind(null, __webpack_require__)).catch(__webpack_require__.oe);};var designerlist = function designerlist() {__webpack_require__.e(/*! require.ensure | components/single/grid/item_designer */ "components/single/grid/item_designer").then((function () {return resolve(__webpack_require__(/*! ../../components/single/grid/item_designer.vue */ 1029));}).bind(null, __webpack_require__)).catch(__webpack_require__.oe);};var itemLive = function itemLive() {__webpack_require__.e(/*! require.ensure | components/single/grid/item_live */ "components/single/grid/item_live").then((function () {return resolve(__webpack_require__(/*! ../../components/single/grid/item_live.vue */ 1036));}).bind(null, __webpack_require__)).catch(__webpack_require__.oe);};var _default =






























{
  computed: {},
  components: {
    cuGrid: cuGrid,
    typelist: typelist,
    cuBar: cuBar,
    cases: cases,
    caseslist: caseslist,
    designers: designers,
    designerlist: designerlist,
    itemLive: itemLive },

  data: function data() {
    return {
      types: [
      {
        img:
        'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1578029520227&di=ff3955c66b5a560c2e7c24778ca2dc4a&imgtype=0&src=http%3A%2F%2F5b0988e595225.cdn.sohucs.com%2Fimages%2F20180719%2F7d91117ef0e243db94f03ec927bf26a2.jpeg',
        name: '人工智能',
        e_name: 'AI' },

      {
        img:
        'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1578030059908&di=2e391f8a3a53636ecbcb4246ef55055b&imgtype=0&src=http%3A%2F%2F5b0988e595225.cdn.sohucs.com%2Fimages%2F20180912%2Fca4ed1b60667454a94fa4d9da82701a6.jpeg',
        name: '数据分析',
        e_name: 'Data Analysis' },

      {
        img:
        'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1578030249455&di=972b656faed671ad3ce7cf122046ac85&imgtype=0&src=http%3A%2F%2Fwww.shwzzz.cn%2Fd%2Ffile%2F2018-10-26%2Fdcd81dbe6d0e6ec45b9ca53dcc627d02.jpg',
        name: '爬虫',
        e_name: 'Spider' },

      {
        img:
        'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1578030367710&di=91bcf02e41e8eca48bb5a0447d60a140&imgtype=0&src=http%3A%2F%2F5b0988e595225.cdn.sohucs.com%2Fimages%2F20190219%2F79f12e6d269248e6a808d57966151719.jpeg',
        name: '少儿编程',
        e_name: 'Children Coding' }],


      cuIconList: [
      {
        cuIcon: 'cardboardfill',
        color: 'red',
        badge: 120,
        name: 'VR' },

      {
        cuIcon: 'recordfill',
        color: 'orange',
        badge: 1,
        name: '录像' },

      {
        cuIcon: 'picfill',
        color: 'yellow',
        badge: 0,
        name: '图像' },

      {
        cuIcon: 'noticefill',
        color: 'olive',
        badge: 22,
        name: '通知' },

      {
        cuIcon: 'upstagefill',
        color: 'cyan',
        badge: 0,
        name: '排行榜' },

      {
        cuIcon: 'clothesfill',
        color: 'blue',
        badge: 0,
        name: '皮肤' },

      {
        cuIcon: 'discoverfill',
        color: 'purple',
        badge: 0,
        name: '发现' },

      {
        cuIcon: 'questionfill',
        color: 'mauve',
        badge: 0,
        name: '帮助' },

      {
        cuIcon: 'commandfill',
        color: 'purple',
        badge: 0,
        name: '问答' },

      {
        cuIcon: 'brandfill',
        color: 'mauve',
        badge: 0,
        name: '版权' }],


      caselist: [
      {
        photo: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big84000.jpg',
        title: 'HPISD华派国际设计-觅得一隅',
        area: 120,
        style: '简约风格',
        zan: 123,
        is_zan: 1 },

      {
        photo: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big84000.jpg',
        title: 'HPISD华派国际设计-觅得一隅',
        area: 120,
        style: '简约风格',
        zan: 123,
        is_zan: 1 },

      {
        photo: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big84000.jpg',
        title: 'HPISD华派国际设计-觅得一隅',
        area: 120,
        style: '简约风格',
        zan: 123,
        is_zan: 1 },

      {
        photo: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big84000.jpg',
        title: 'HPISD华派国际设计-觅得一隅',
        area: 120,
        style: '简约风格',
        zan: 123,
        is_zan: 1 }],


      designers: [
      {
        avatar: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big10001.jpg',
        position: '工程师',
        name: '张三丰',
        cases_number: 12,
        cases_image: [
        {
          id: 1,
          photo: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big25011.jpg',
          url: '' },

        {
          id: 2,
          photo: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big84000.jpg',
          url: '' },

        {
          id: 3,
          photo: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big37006.jpg',
          url: '' }] },




      {
        avatar: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big10001.jpg',
        position: '设计师',
        name: '张可儿',
        cases_number: 12,
        cases_image: [
        {
          id: 1,
          photo: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big84000.jpg',
          url: '' },

        {
          id: 2,
          photo: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big84000.jpg',
          url: '' },

        {
          id: 3,
          photo: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big84000.jpg',
          url: '' }] },




      {
        avatar: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big10001.jpg',
        position: '产品经理',
        name: '张叁',
        cases_number: 12,
        cases_image: [
        {
          id: 1,
          photo: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big84000.jpg',
          url: '' },

        {
          id: 2,
          photo: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big84000.jpg',
          url: '' },

        {
          id: 3,
          photo: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big84000.jpg',
          url: '' }] },




      {
        avatar: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big10001.jpg',
        position: '项目经理',
        name: '王五',
        cases_number: 12,
        cases_image: [
        {
          id: 1,
          photo: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big84000.jpg',
          url: '' },

        {
          id: 2,
          photo: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big84000.jpg',
          url: '' },

        {
          id: 3,
          photo: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big84000.jpg',
          url: '' }] },




      {
        avatar: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big10001.jpg',
        position: 'UI设计师',
        name: '张叁',
        cases_number: 12,
        cases_image: [
        {
          id: 1,
          photo: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big84000.jpg',
          url: '' },

        {
          id: 2,
          photo: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big84000.jpg',
          url: '' },

        {
          id: 3,
          photo: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big84000.jpg',
          url: '' }] }] };







  },
  onLoad: function onLoad() {},
  onShow: function onShow() {},
  methods: {} };exports.default = _default;

/***/ })

},[[347,"common/runtime","common/vendor"]]]);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/single/gridlist.js.map