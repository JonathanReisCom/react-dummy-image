webpackHotUpdate("static/development/pages/index.js",{

/***/ "./common/hooks/useGlobal.jsx":
false,

/***/ "./common/useGlobalState.jsx":
false,

/***/ "./components/TopMenuBar/TopMenuLinks.jsx":
/*!************************************************!*\
  !*** ./components/TopMenuBar/TopMenuLinks.jsx ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/styles */ \"./node_modules/@material-ui/core/esm/styles/index.js\");\n/* harmony import */ var _material_ui_core_List__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/List */ \"./node_modules/@material-ui/core/esm/List/index.js\");\n/* harmony import */ var _material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/ListItem */ \"./node_modules/@material-ui/core/esm/ListItem/index.js\");\n/* harmony import */ var _material_ui_core_Tooltip__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/Tooltip */ \"./node_modules/@material-ui/core/esm/Tooltip/index.js\");\n/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/Button */ \"./node_modules/@material-ui/core/esm/Button/index.js\");\n/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/Typography */ \"./node_modules/@material-ui/core/esm/Typography/index.js\");\n/* harmony import */ var _material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/AppBar */ \"./node_modules/@material-ui/core/esm/AppBar/index.js\");\n/* harmony import */ var _material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core/Toolbar */ \"./node_modules/@material-ui/core/esm/Toolbar/index.js\");\n/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/core/IconButton */ \"./node_modules/@material-ui/core/esm/IconButton/index.js\");\n/* harmony import */ var _material_ui_core_Hidden__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/core/Hidden */ \"./node_modules/@material-ui/core/esm/Hidden/index.js\");\n/* harmony import */ var _material_ui_core_Drawer__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @material-ui/core/Drawer */ \"./node_modules/@material-ui/core/esm/Drawer/index.js\");\n/* harmony import */ var _material_ui_icons_Menu__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @material-ui/icons/Menu */ \"./node_modules/@material-ui/icons/Menu.js\");\n/* harmony import */ var _material_ui_icons_Menu__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Menu__WEBPACK_IMPORTED_MODULE_14__);\n/* harmony import */ var _material_ui_icons_Instagram__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @material-ui/icons/Instagram */ \"./node_modules/@material-ui/icons/Instagram.js\");\n/* harmony import */ var _material_ui_icons_Instagram__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Instagram__WEBPACK_IMPORTED_MODULE_15__);\n/* harmony import */ var _material_ui_icons_LinkedIn__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @material-ui/icons/LinkedIn */ \"./node_modules/@material-ui/icons/LinkedIn.js\");\n/* harmony import */ var _material_ui_icons_LinkedIn__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_LinkedIn__WEBPACK_IMPORTED_MODULE_16__);\n/* harmony import */ var _material_ui_icons_GitHub__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @material-ui/icons/GitHub */ \"./node_modules/@material-ui/icons/GitHub.js\");\n/* harmony import */ var _material_ui_icons_GitHub__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_GitHub__WEBPACK_IMPORTED_MODULE_17__);\n/* harmony import */ var _material_ui_icons_Settings__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @material-ui/icons/Settings */ \"./node_modules/@material-ui/icons/Settings.js\");\n/* harmony import */ var _material_ui_icons_Settings__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Settings__WEBPACK_IMPORTED_MODULE_18__);\n/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! lodash/get */ \"./node_modules/lodash/get.js\");\n/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(lodash_get__WEBPACK_IMPORTED_MODULE_19__);\n/* harmony import */ var _common_Logger__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../../common/Logger */ \"./common/Logger.jsx\");\n/* harmony import */ var _common_Theme__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../../common/Theme */ \"./common/Theme.jsx\");\n\n\nvar _this = undefined,\n    _jsxFileName = \"/Users/Jonathan/Projects/my-menu/components/TopMenuBar/TopMenuLinks.jsx\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;\n // NextJS\n\n // @material-ui/core components\n\n\n\n\n\n\n\n\n\n\n\n // @material-ui/icons\n\n // import { Instagram, LinkedIn, Search } from '@material-ui/icons';\n\n\n\n\n // Lodash\n\n // My Components\n// import Api from '../../common/FirebaseApi';\n// import useGlobalState from '../../common/useGlobalState';\n\n // Images\n// import logo from 'assets/images/logo-jonathan-reis-com.png';\n\nvar log = new _common_Logger__WEBPACK_IMPORTED_MODULE_20__[\"default\"]({\n  label: 'TopMenuLinks',\n  enabled: true,\n  important: false\n}); // Style\n\n\nvar localStyle = {\n  list: Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({\n    height: '100%',\n    display: 'flex',\n    alignItems: 'center',\n    justifyContent: 'flex-end',\n    color: 'white'\n  }, _common_Theme__WEBPACK_IMPORTED_MODULE_21__[\"default\"].breakpoints.down('xs'), {\n    width: '100%',\n    display: 'block',\n    backgroundColor: 'gray'\n  }),\n  listItem: {\n    \"float\": 'left',\n    position: 'relative',\n    width: 'auto',\n    margin: '0',\n    padding: '0'\n  },\n  listButton: {\n    color: _common_Theme__WEBPACK_IMPORTED_MODULE_21__[\"default\"].palette.text.menubar,\n    padding: '1rem',\n    minWidth: '20px',\n    '&:hover,&:focus': {\n      background: 'rgba(200, 200, 200, 0.2)'\n    }\n  },\n  icons: {\n    width: '20px',\n    height: '20px'\n  },\n  text: {\n    marginLeft: '0.5rem'\n  }\n};\nvar useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__[\"makeStyles\"])(localStyle);\n\nvar Component = function Component(props) {\n  _s();\n\n  var classes = useStyles(); // const [globalState, globalActions] = useGlobalState();\n\n  var links = {\n    github: {\n      href: 'https://github.com/JonathanReisCom',\n      target: '_blank',\n      tooltip: 'Me siga no LinkedIn'\n    },\n    linkedin: {\n      href: 'https://www.linkedin.com/in/jonathan-reis-com/',\n      target: '_blank',\n      tooltip: 'Me siga no LinkedIn'\n    },\n    instagram: {\n      href: 'https://www.instagram.com/jonathanreis/',\n      target: '_blank',\n      tooltip: 'Me siga no LinkedIn'\n    }\n  };\n\n  var renderLoginOrLoggedButton = function renderLoginOrLoggedButton() {\n    var isLogged = lodash_get__WEBPACK_IMPORTED_MODULE_19___default()(globalState, 'isLogged', null);\n    log.show('renderLoginOrLoggedButton', isLogged);\n\n    if (isLogged) {\n      return __jsx(_material_ui_core_Tooltip__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n        id: \"home-tooltip\",\n        title: 'Home tooltip',\n        placement: 'top',\n        arrow: true,\n        classes: {\n          tooltip: classes.tooltip\n        },\n        __self: _this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 103,\n          columnNumber: 9\n        }\n      }, __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n        className: classes.listButton,\n        href: '/',\n        target: '_self',\n        __self: _this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 109,\n          columnNumber: 11\n        }\n      }, \"Sign-up\", globalState.counter));\n    }\n\n    return null;\n  };\n\n  return __jsx(_material_ui_core_List__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n    className: classes.list,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 120,\n      columnNumber: 5\n    }\n  }, __jsx(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n    className: classes.listItem,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 121,\n      columnNumber: 7\n    }\n  }, renderLoginOrLoggedButton(), __jsx(_material_ui_core_Tooltip__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n    id: \"home-tooltip\",\n    title: 'Home tooltip',\n    placement: 'top',\n    arrow: true,\n    classes: {\n      tooltip: classes.tooltip\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 126,\n      columnNumber: 9\n    }\n  }, __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n    className: classes.listButton,\n    href: '/',\n    target: '_self',\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 132,\n      columnNumber: 11\n    }\n  }, \"Home\")), __jsx(_material_ui_core_Tooltip__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n    id: \"other-tooltip\",\n    title: 'Other tooltip',\n    placement: 'top',\n    arrow: true,\n    classes: {\n      tooltip: classes.tooltip\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 138,\n      columnNumber: 9\n    }\n  }, __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n    className: classes.listButton,\n    href: '/other',\n    target: '_self',\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 144,\n      columnNumber: 11\n    }\n  }, \"Other page\"))));\n};\n\n_s(Component, \"8g5FPXexvSEOsxdmU7HicukHGqY=\", false, function () {\n  return [useStyles];\n});\n\n_c = Component;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Component);\n\nvar _c;\n\n$RefreshReg$(_c, \"Component\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1RvcE1lbnVCYXIvVG9wTWVudUxpbmtzLmpzeD80Yjc1Il0sIm5hbWVzIjpbImxvZyIsIkxvZ2dlciIsImxhYmVsIiwiZW5hYmxlZCIsImltcG9ydGFudCIsImxvY2FsU3R5bGUiLCJsaXN0IiwiaGVpZ2h0IiwiZGlzcGxheSIsImFsaWduSXRlbXMiLCJqdXN0aWZ5Q29udGVudCIsImNvbG9yIiwidGhlbWUiLCJicmVha3BvaW50cyIsImRvd24iLCJ3aWR0aCIsImJhY2tncm91bmRDb2xvciIsImxpc3RJdGVtIiwicG9zaXRpb24iLCJtYXJnaW4iLCJwYWRkaW5nIiwibGlzdEJ1dHRvbiIsInBhbGV0dGUiLCJ0ZXh0IiwibWVudWJhciIsIm1pbldpZHRoIiwiYmFja2dyb3VuZCIsImljb25zIiwibWFyZ2luTGVmdCIsInVzZVN0eWxlcyIsIm1ha2VTdHlsZXMiLCJDb21wb25lbnQiLCJwcm9wcyIsImNsYXNzZXMiLCJsaW5rcyIsImdpdGh1YiIsImhyZWYiLCJ0YXJnZXQiLCJ0b29sdGlwIiwibGlua2VkaW4iLCJpbnN0YWdyYW0iLCJyZW5kZXJMb2dpbk9yTG9nZ2VkQnV0dG9uIiwiaXNMb2dnZWQiLCJnZXQiLCJnbG9iYWxTdGF0ZSIsInNob3ciLCJjb3VudGVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztDQUNBOztDQUVBOztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0NBRUE7O0NBRUE7O0FBQ0E7QUFDQTtBQUNBO0NBRUE7O0NBRUE7QUFDQTtBQUNBOztDQUVBO0FBQ0E7O0FBRUEsSUFBTUEsR0FBRyxHQUFHLElBQUlDLHVEQUFKLENBQVc7QUFBRUMsT0FBSyxFQUFFLGNBQVQ7QUFBeUJDLFNBQU8sRUFBRSxJQUFsQztBQUF3Q0MsV0FBUyxFQUFFO0FBQW5ELENBQVgsQ0FBWixDLENBRUE7O0FBQ0E7QUFDQSxJ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T0FBTyxDQUFDaEIsUUFBN0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUVHd0IseUJBQXlCLEVBRjVCLEVBS0UsTUFBQyxpRUFBRDtBQUNFLE1BQUUsRUFBQyxjQURMO0FBRUUsU0FBSyxFQUFFLGNBRlQ7QUFHRSxhQUFTLEVBQUUsS0FIYjtBQUlFLFNBQUssTUFKUDtBQUtFLFdBQU8sRUFBRTtBQUFFSCxhQUFPLEVBQUVMLE9BQU8sQ0FBQ0s7QUFBbkIsS0FMWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBTUUsTUFBQyxnRUFBRDtBQUFRLGFBQVMsRUFBRUwsT0FBTyxDQUFDWixVQUEzQjtBQUF1QyxRQUFJLEVBQUUsR0FBN0M7QUFBa0QsVUFBTSxFQUFFLE9BQTFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFORixDQUxGLEVBaUJFLE1BQUMsaUVBQUQ7QUFDRSxNQUFFLEVBQUMsZUFETDtBQUVFLFNBQUssRUFBRSxlQUZUO0FBR0UsYUFBUyxFQUFFLEtBSGI7QUFJRSxTQUFLLE1BSlA7QUFLRSxXQUFPLEVBQUU7QUFBRWlCLGFBQU8sRUFBRUwsT0FBTyxDQUFDSztBQUFuQixLQUxYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FNRSxNQUFDLGdFQUFEO0FBQVEsYUFBUyxFQUFFTCxPQUFPLENBQUNaLFVBQTNCO0FBQXVDLFFBQUksRUFBRSxRQUE3QztBQUF1RCxVQUFNLEVBQUUsT0FBL0Q7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFORixDQWpCRixDQURGLENBREY7QUFvRUQsQ0FqSEQ7O0dBQU1VLFM7VUFDWUYsUzs7O0tBRFpFLFM7QUFtSFNBLHdFQUFmIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9Ub3BNZW51QmFyL1RvcE1lbnVMaW5rcy5qc3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuLy8gTmV4dEpTXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xuLy8gQG1hdGVyaWFsLXVpL2NvcmUgY29tcG9uZW50c1xuaW1wb3J0IHsgbWFrZVN0eWxlcyB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcyc7XG5pbXBvcnQgTGlzdCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9MaXN0JztcbmltcG9ydCBMaXN0SXRlbSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9MaXN0SXRlbSc7XG5pbXBvcnQgVG9vbHRpcCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9Ub29sdGlwJztcbmltcG9ydCBCdXR0b24gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQnV0dG9uJztcbmltcG9ydCBUeXBvZ3JhcGh5IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1R5cG9ncmFwaHknO1xuaW1wb3J0IEFwcEJhciBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9BcHBCYXInO1xuaW1wb3J0IFRvb2xiYXIgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVG9vbGJhcic7XG5pbXBvcnQgSWNvbkJ1dHRvbiBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9JY29uQnV0dG9uJztcbmltcG9ydCBIaWRkZW4gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvSGlkZGVuJztcbmltcG9ydCBEcmF3ZXIgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvRHJhd2VyJztcbi8vIEBtYXRlcmlhbC11aS9pY29uc1xuaW1wb3J0IE1lbnUgZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL01lbnUnO1xuLy8gaW1wb3J0IHsgSW5zdGFncmFtLCBMaW5rZWRJbiwgU2VhcmNoIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zJztcbmltcG9ydCBJbnN0YWdyYW0gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL0luc3RhZ3JhbSc7XG5pbXBvcnQgTGlua2VkSW4gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL0xpbmtlZEluJztcbmltcG9ydCBHaXRIdWIgZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL0dpdEh1Yic7XG5pbXBvcnQgU2V0dGluZ3MgZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL1NldHRpbmdzJztcbi8vIExvZGFzaFxuaW1wb3J0IGdldCBmcm9tICdsb2Rhc2gvZ2V0Jztcbi8vIE15IENvbXBvbmVudHNcbi8vIGltcG9ydCBBcGkgZnJvbSAnLi4vLi4vY29tbW9uL0ZpcmViYXNlQXBpJztcbi8vIGltcG9ydCB1c2VHbG9iYWxTdGF0ZSBmcm9tICcuLi8uLi9jb21tb24vdXNlR2xvYmFsU3RhdGUnO1xuaW1wb3J0IExvZ2dlciBmcm9tICcuLi8uLi9jb21tb24vTG9nZ2VyJztcbi8vIEltYWdlc1xuLy8gaW1wb3J0IGxvZ28gZnJvbSAnYXNzZXRzL2ltYWdlcy9sb2dvLWpvbmF0aGFuLXJlaXMtY29tLnBuZyc7XG5cbmNvbnN0IGxvZyA9IG5ldyBMb2dnZXIoeyBsYWJlbDogJ1RvcE1lbnVMaW5rcycsIGVuYWJsZWQ6IHRydWUsIGltcG9ydGFudDogZmFsc2UgfSk7XG5cbi8vIFN0eWxlXG5pbXBvcnQgdGhlbWUgZnJvbSAnLi4vLi4vY29tbW9uL1RoZW1lJztcbmNvbnN0IGxvY2FsU3R5bGUgPSB7XG4gIGxpc3Q6IHtcbiAgICBoZWlnaHQ6ICcxMDAlJyxcbiAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXG4gICAganVzdGlmeUNvbnRlbnQ6ICdmbGV4LWVuZCcsXG4gICAgY29sb3I6ICd3aGl0ZScsXG4gICAgW3RoZW1lLmJyZWFrcG9pbnRzLmRvd24oJ3hzJyldOiB7XG4gICAgICB3aWR0aDogJzEwMCUnLFxuICAgICAgZGlzcGxheTogJ2Jsb2NrJyxcbiAgICAgIGJhY2tncm91bmRDb2xvcjogJ2dyYXknLFxuICAgIH0sXG4gIH0sXG4gIGxpc3RJdGVtOiB7XG4gICAgZmxvYXQ6ICdsZWZ0JyxcbiAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcbiAgICB3aWR0aDogJ2F1dG8nLFxuICAgIG1hcmdpbjogJzAnLFxuICAgIHBhZGRpbmc6ICcwJyxcbiAgfSxcbiAgbGlzdEJ1dHRvbjoge1xuICAgIGNvbG9yOiB0aGVtZS5wYWxldHRlLnRleHQubWVudWJhcixcbiAgICBwYWRkaW5nOiAnMXJlbScsXG4gICAgbWluV2lkdGg6ICcyMHB4JyxcbiAgICAnJjpob3ZlciwmOmZvY3VzJzoge1xuICAgICAgYmFja2dyb3VuZDogJ3JnYmEoMjAwLCAyMDAsIDIwMCwgMC4yKScsXG4gICAgfSxcbiAgfSxcbiAgaWNvbnM6IHtcbiAgICB3aWR0aDogJzIwcHgnLFxuICAgIGhlaWdodDogJzIwcHgnLFxuICB9LFxuICB0ZXh0OiB7XG4gICAgbWFyZ2luTGVmdDogJzAuNXJlbScsXG4gIH0sXG59O1xuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcyhsb2NhbFN0eWxlKTtcblxuY29uc3QgQ29tcG9uZW50ID0gKHByb3BzKSA9PiB7XG4gIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcbiAgLy8gY29uc3QgW2dsb2JhbFN0YXRlLCBnbG9iYWxBY3Rpb25zXSA9IHVzZUdsb2JhbFN0YXRlKCk7XG5cbiAgY29uc3QgbGlua3MgPSB7XG4gICAgZ2l0aHViOiB7XG4gICAgICBocmVmOiAnaHR0cHM6Ly9naXRodWIuY29tL0pvbmF0aGFuUmVpc0NvbScsXG4gICAgICB0YXJnZXQ6ICdfYmxhbmsnLFxuICAgICAgdG9vbHRpcDogJ01lIHNpZ2Egbm8gTGlua2VkSW4nLFxuICAgIH0sXG4gICAgbGlua2VkaW46IHtcbiAgICAgIGhyZWY6ICdodHRwczovL3d3dy5saW5rZWRpbi5jb20vaW4vam9uYXRoYW4tcmVpcy1jb20vJyxcbiAgICAgIHRhcmdldDogJ19ibGFuaycsXG4gICAgICB0b29sdGlwOiAnTWUgc2lnYSBubyBMaW5rZWRJbicsXG4gICAgfSxcblxuICAgIGluc3RhZ3JhbToge1xuICAgICAgaHJlZjogJ2h0dHBzOi8vd3d3Lmluc3RhZ3JhbS5jb20vam9uYXRoYW5yZWlzLycsXG4gICAgICB0YXJnZXQ6ICdfYmxhbmsnLFxuICAgICAgdG9vbHRpcDogJ01lIHNpZ2Egbm8gTGlua2VkSW4nLFxuICAgIH0sXG4gIH07XG5cbiAgY29uc3QgcmVuZGVyTG9naW5PckxvZ2dlZEJ1dHRvbiA9ICgpID0+IHtcbiAgICBjb25zdCBpc0xvZ2dlZCA9IGdldChnbG9iYWxTdGF0ZSwgJ2lzTG9nZ2VkJywgbnVsbCk7XG4gICAgbG9nLnNob3coJ3JlbmRlckxvZ2luT3JMb2dnZWRCdXR0b24nLCBpc0xvZ2dlZCk7XG5cbiAgICBpZiAoaXNMb2dnZWQpIHtcbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxUb29sdGlwXG4gICAgICAgICAgaWQ9XCJob21lLXRvb2x0aXBcIlxuICAgICAgICAgIHRpdGxlPXsnSG9tZSB0b29sdGlwJ31cbiAgICAgICAgICBwbGFjZW1lbnQ9eyd0b3AnfVxuICAgICAgICAgIGFycm93XG4gICAgICAgICAgY2xhc3Nlcz17eyB0b29sdGlwOiBjbGFzc2VzLnRvb2x0aXAgfX0+XG4gICAgICAgICAgPEJ1dHRvbiBjbGFzc05hbWU9e2NsYXNzZXMubGlzdEJ1dHRvbn0gaHJlZj17Jy8nfSB0YXJnZXQ9eydfc2VsZid9PlxuICAgICAgICAgICAgU2lnbi11cFxuICAgICAgICAgICAge2dsb2JhbFN0YXRlLmNvdW50ZXJ9XG4gICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgIDwvVG9vbHRpcD5cbiAgICAgICk7XG4gICAgfVxuICAgIHJldHVybiBudWxsO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPExpc3QgY2xhc3NOYW1lPXtjbGFzc2VzLmxpc3R9PlxuICAgICAgPExpc3RJdGVtIGNsYXNzTmFtZT17Y2xhc3Nlcy5saXN0SXRlbX0+XG4gICAgICAgIHsvKiBTaWduVXAgQnV0dG9uICovfVxuICAgICAgICB7cmVuZGVyTG9naW5PckxvZ2dlZEJ1dHRvbigpfVxuXG4gICAgICAgIHsvKiBIb21lIEJ1dHRvbiAqL31cbiAgICAgICAgPFRvb2x0aXBcbiAgICAgICAgICBpZD1cImhvbWUtdG9vbHRpcFwiXG4gICAgICAgICAgdGl0bGU9eydIb21lIHRvb2x0aXAnfVxuICAgICAgICAgIHBsYWNlbWVudD17J3RvcCd9XG4gICAgICAgICAgYXJyb3dcbiAgICAgICAgICBjbGFzc2VzPXt7IHRvb2x0aXA6IGNsYXNzZXMudG9vbHRpcCB9fT5cbiAgICAgICAgICA8QnV0dG9uIGNsYXNzTmFtZT17Y2xhc3Nlcy5saXN0QnV0dG9ufSBocmVmPXsnLyd9IHRhcmdldD17J19zZWxmJ30+XG4gICAgICAgICAgICBIb21lXG4gICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgIDwvVG9vbHRpcD5cblxuICAgICAgICB7LyogT3RoZXIgQnV0dG9uICovfVxuICAgICAgICA8VG9vbHRpcFxuICAgICAgICAgIGlkPVwib3RoZXItdG9vbHRpcFwiXG4gICAgICAgICAgdGl0bGU9eydPdGhlciB0b29sdGlwJ31cbiAgICAgICAgICBwbGFjZW1lbnQ9eyd0b3AnfVxuICAgICAgICAgIGFycm93XG4gICAgICAgICAgY2xhc3Nlcz17eyB0b29sdGlwOiBjbGFzc2VzLnRvb2x0aXAgfX0+XG4gICAgICAgICAgPEJ1dHRvbiBjbGFzc05hbWU9e2NsYXNzZXMubGlzdEJ1dHRvbn0gaHJlZj17Jy9vdGhlcid9IHRhcmdldD17J19zZWxmJ30+XG4gICAgICAgICAgICBPdGhlciBwYWdlXG4gICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgIDwvVG9vbHRpcD5cblxuICAgICAgICB7LyogTGlua2VkSW4gQnV0dG9uICovfVxuICAgICAgICB7LyogPFRvb2x0aXBcbiAgICAgICAgICBpZD1cImdpdEh1Yi10b29sdGlwXCJcbiAgICAgICAgICB0aXRsZT17bGlua3MuZ2l0aHViLnRvb2x0aXB9XG4gICAgICAgICAgcGxhY2VtZW50PXsndG9wJ31cbiAgICAgICAgICBhcnJvd1xuICAgICAgICAgIGNsYXNzZXM9e3sgdG9vbHRpcDogY2xhc3Nlcy50b29sdGlwIH19PlxuICAgICAgICAgIDxCdXR0b24gY2xhc3NOYW1lPXtjbGFzc2VzLmxpc3RCdXR0b259IGhyZWY9e2xpbmtzLmdpdGh1Yi5ocmVmfSB0YXJnZXQ9e2xpbmtzLmdpdGh1Yi50YXJnZXR9PlxuICAgICAgICAgICAgPEdpdEh1YiBjbGFzc05hbWU9e2NsYXNzZXMuaWNvbnN9IC8+XG4gICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgIDwvVG9vbHRpcD4gKi99XG5cbiAgICAgICAgey8qIExpbmtlZEluIEJ1dHRvbiAqL31cbiAgICAgICAgey8qIDxUb29sdGlwXG4gICAgICAgICAgaWQ9XCJsaW5rZWRpbi10b29sdGlwXCJcbiAgICAgICAgICB0aXRsZT17bGlua3MubGlua2VkaW4udG9vbHRpcH1cbiAgICAgICAgICBwbGFjZW1lbnQ9eyd0b3AnfVxuICAgICAgICAgIGFycm93XG4gICAgICAgICAgY2xhc3Nlcz17eyB0b29sdGlwOiBjbGFzc2VzLnRvb2x0aXAgfX0+XG4gICAgICAgICAgPEJ1dHRvbiBjbGFzc05hbWU9e2NsYXNzZXMubGlzdEJ1dHRvbn0gaHJlZj17bGlua3MubGlua2VkaW4uaHJlZn0gdGFyZ2V0PXtsaW5rcy5saW5rZWRpbi50YXJnZXR9PlxuICAgICAgICAgICAgPExpbmtlZEluIGNsYXNzTmFtZT17Y2xhc3Nlcy5pY29uc30gLz5cbiAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgPC9Ub29sdGlwPiAqL31cblxuICAgICAgICB7LyogSW5zdGFncmFtIEJ1dHRvbiAqL31cbiAgICAgICAgey8qIDxUb29sdGlwXG4gICAgICAgICAgaWQ9XCJpbnN0YWdyYW0tdG9vbHRpcFwiXG4gICAgICAgICAgdGl0bGU9e2xpbmtzLmluc3RhZ3JhbS50b29sdGlwfVxuICAgICAgICAgIHBsYWNlbWVudD17J3RvcCd9XG4gICAgICAgICAgYXJyb3dcbiAgICAgICAgICBjbGFzc2VzPXt7IHRvb2x0aXA6IGNsYXNzZXMudG9vbHRpcCB9fT5cbiAgICAgICAgICA8QnV0dG9uIGNsYXNzTmFtZT17Y2xhc3Nlcy5saXN0QnV0dG9ufSBocmVmPXtsaW5rcy5pbnN0YWdyYW0uaHJlZn0gdGFyZ2V0PXtsaW5rcy5pbnN0YWdyYW0udGFyZ2V0fT5cbiAgICAgICAgICAgIDxJbnN0YWdyYW0gY2xhc3NOYW1lPXtjbGFzc2VzLmljb25zfSAvPlxuICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICA8L1Rvb2x0aXA+ICovfVxuICAgICAgPC9MaXN0SXRlbT5cbiAgICA8L0xpc3Q+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBDb21wb25lbnQ7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/TopMenuBar/TopMenuLinks.jsx\n");

/***/ })

})