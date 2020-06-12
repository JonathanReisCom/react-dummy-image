webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/TopMenuBar/TopMenuLinks.jsx":
/*!************************************************!*\
  !*** ./components/TopMenuBar/TopMenuLinks.jsx ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/styles */ \"./node_modules/@material-ui/core/esm/styles/index.js\");\n/* harmony import */ var _material_ui_core_List__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/List */ \"./node_modules/@material-ui/core/esm/List/index.js\");\n/* harmony import */ var _material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/ListItem */ \"./node_modules/@material-ui/core/esm/ListItem/index.js\");\n/* harmony import */ var _material_ui_core_Tooltip__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/Tooltip */ \"./node_modules/@material-ui/core/esm/Tooltip/index.js\");\n/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/Button */ \"./node_modules/@material-ui/core/esm/Button/index.js\");\n/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/Typography */ \"./node_modules/@material-ui/core/esm/Typography/index.js\");\n/* harmony import */ var _material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/AppBar */ \"./node_modules/@material-ui/core/esm/AppBar/index.js\");\n/* harmony import */ var _material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core/Toolbar */ \"./node_modules/@material-ui/core/esm/Toolbar/index.js\");\n/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/core/IconButton */ \"./node_modules/@material-ui/core/esm/IconButton/index.js\");\n/* harmony import */ var _material_ui_core_Hidden__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/core/Hidden */ \"./node_modules/@material-ui/core/esm/Hidden/index.js\");\n/* harmony import */ var _material_ui_core_Drawer__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @material-ui/core/Drawer */ \"./node_modules/@material-ui/core/esm/Drawer/index.js\");\n/* harmony import */ var _material_ui_icons_Menu__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @material-ui/icons/Menu */ \"./node_modules/@material-ui/icons/Menu.js\");\n/* harmony import */ var _material_ui_icons_Menu__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Menu__WEBPACK_IMPORTED_MODULE_14__);\n/* harmony import */ var _material_ui_icons_Instagram__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @material-ui/icons/Instagram */ \"./node_modules/@material-ui/icons/Instagram.js\");\n/* harmony import */ var _material_ui_icons_Instagram__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Instagram__WEBPACK_IMPORTED_MODULE_15__);\n/* harmony import */ var _material_ui_icons_LinkedIn__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @material-ui/icons/LinkedIn */ \"./node_modules/@material-ui/icons/LinkedIn.js\");\n/* harmony import */ var _material_ui_icons_LinkedIn__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_LinkedIn__WEBPACK_IMPORTED_MODULE_16__);\n/* harmony import */ var _material_ui_icons_GitHub__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @material-ui/icons/GitHub */ \"./node_modules/@material-ui/icons/GitHub.js\");\n/* harmony import */ var _material_ui_icons_GitHub__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_GitHub__WEBPACK_IMPORTED_MODULE_17__);\n/* harmony import */ var _material_ui_icons_Settings__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @material-ui/icons/Settings */ \"./node_modules/@material-ui/icons/Settings.js\");\n/* harmony import */ var _material_ui_icons_Settings__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Settings__WEBPACK_IMPORTED_MODULE_18__);\n/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! lodash/get */ \"./node_modules/lodash/get.js\");\n/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(lodash_get__WEBPACK_IMPORTED_MODULE_19__);\n/* harmony import */ var _common_useFirebase__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../../common/useFirebase */ \"./common/useFirebase.jsx\");\n/* harmony import */ var _common_Logger__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../../common/Logger */ \"./common/Logger.jsx\");\n/* harmony import */ var _common_Theme__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../../common/Theme */ \"./common/Theme.jsx\");\n\n\nvar _this = undefined,\n    _jsxFileName = \"/Users/Jonathan/Projects/my-menu/components/TopMenuBar/TopMenuLinks.jsx\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;\n // NextJS\n\n // @material-ui/core components\n\n\n\n\n\n\n\n\n\n\n\n // @material-ui/icons\n\n // import { Instagram, LinkedIn, Search } from '@material-ui/icons';\n\n\n\n\n // Lodash\n\n // My Components\n// import Api from '../../common/FirebaseApi';\n\n // import useGlobalState from '../../common/useGlobalState';\n\n // Images\n// import logo from 'assets/images/logo-jonathan-reis-com.png';\n\nvar log = new _common_Logger__WEBPACK_IMPORTED_MODULE_21__[\"default\"]({\n  label: 'TopMenuLinks',\n  enabled: true,\n  important: false\n}); // Style\n\n\nvar localStyle = {\n  list: Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({\n    height: '100%',\n    display: 'flex',\n    alignItems: 'center',\n    justifyContent: 'flex-end',\n    color: 'white'\n  }, _common_Theme__WEBPACK_IMPORTED_MODULE_22__[\"default\"].breakpoints.down('xs'), {\n    width: '100%',\n    display: 'block',\n    backgroundColor: 'gray'\n  }),\n  listItem: {\n    \"float\": 'left',\n    position: 'relative',\n    width: 'auto',\n    margin: '0',\n    padding: '0'\n  },\n  listButton: {\n    color: _common_Theme__WEBPACK_IMPORTED_MODULE_22__[\"default\"].palette.text.menubar,\n    padding: '1rem',\n    minWidth: '20px',\n    '&:hover,&:focus': {\n      background: 'rgba(200, 200, 200, 0.2)'\n    }\n  },\n  icons: {\n    width: '20px',\n    height: '20px'\n  },\n  text: {\n    marginLeft: '0.5rem'\n  }\n};\nvar useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__[\"makeStyles\"])(localStyle);\n\nvar Component = function Component(props) {\n  _s();\n\n  var classes = useStyles(); // const [globalState, globalActions] = useGlobalState();\n\n  var _useFirebase = Object(_common_useFirebase__WEBPACK_IMPORTED_MODULE_20__[\"default\"])(),\n      asd = _useFirebase.asd;\n\n  var links = {\n    github: {\n      href: 'https://github.com/JonathanReisCom',\n      target: '_blank',\n      tooltip: 'Me siga no LinkedIn'\n    },\n    linkedin: {\n      href: 'https://www.linkedin.com/in/jonathan-reis-com/',\n      target: '_blank',\n      tooltip: 'Me siga no LinkedIn'\n    },\n    instagram: {\n      href: 'https://www.instagram.com/jonathanreis/',\n      target: '_blank',\n      tooltip: 'Me siga no LinkedIn'\n    }\n  };\n\n  var renderLoginOrLoggedButton = function renderLoginOrLoggedButton() {\n    // const isLogged = get(globalState, 'isLogged', null);\n    var isLogged = true;\n    log.show('renderLoginOrLoggedButton', isLogged);\n\n    if (isLogged) {\n      return __jsx(_material_ui_core_Tooltip__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n        id: \"home-tooltip\",\n        title: 'Home tooltip',\n        placement: 'top',\n        arrow: true,\n        classes: {\n          tooltip: classes.tooltip\n        },\n        __self: _this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 107,\n          columnNumber: 9\n        }\n      }, __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n        className: classes.listButton,\n        href: '/',\n        target: '_self',\n        __self: _this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 113,\n          columnNumber: 11\n        }\n      }, \"Sign-up\"));\n    }\n\n    return null;\n  };\n\n  return __jsx(_material_ui_core_List__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n    className: classes.list,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 124,\n      columnNumber: 5\n    }\n  }, __jsx(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n    className: classes.listItem,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 125,\n      columnNumber: 7\n    }\n  }, renderLoginOrLoggedButton(), __jsx(_material_ui_core_Tooltip__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n    id: \"home-tooltip\",\n    title: 'Home tooltip',\n    placement: 'top',\n    arrow: true,\n    classes: {\n      tooltip: classes.tooltip\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 130,\n      columnNumber: 9\n    }\n  }, __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n    className: classes.listButton,\n    href: '/',\n    target: '_self',\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 136,\n      columnNumber: 11\n    }\n  }, \"Home\")), __jsx(_material_ui_core_Tooltip__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n    id: \"other-tooltip\",\n    title: 'Other tooltip',\n    placement: 'top',\n    arrow: true,\n    classes: {\n      tooltip: classes.tooltip\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 142,\n      columnNumber: 9\n    }\n  }, __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n    className: classes.listButton,\n    href: '/other',\n    target: '_self',\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 148,\n      columnNumber: 11\n    }\n  }, \"Other page\"))));\n};\n\n_s(Component, \"JPPjH/zAcy5F+uuQdcFQwiQY2Wg=\", false, function () {\n  return [useStyles, _common_useFirebase__WEBPACK_IMPORTED_MODULE_20__[\"default\"]];\n});\n\n_c = Component;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Component);\n\nvar _c;\n\n$RefreshReg$(_c, \"Component\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1RvcE1lbnVCYXIvVG9wTWVudUxpbmtzLmpzeD80Yjc1Il0sIm5hbWVzIjpbImxvZyIsIkxvZ2dlciIsImxhYmVsIiwiZW5hYmxlZCIsImltcG9ydGFudCIsImxvY2FsU3R5bGUiLCJsaXN0IiwiaGVpZ2h0IiwiZGlzcGxheSIsImFsaWduSXRlbXMiLCJqdXN0aWZ5Q29udGVudCIsImNvbG9yIiwidGhlbWUiLCJicmVha3BvaW50cyIsImRvd24iLCJ3aWR0aCIsImJhY2tncm91bmRDb2xvciIsImxpc3RJdGVtIiwicG9zaXRpb24iLCJtYXJnaW4iLCJwYWRkaW5nIiwibGlzdEJ1dHRvbiIsInBhbGV0dGUiLCJ0ZXh0IiwibWVudWJhciIsIm1pbldpZHRoIiwiYmFja2dyb3VuZCIsImljb25zIiwibWFyZ2luTGVmdCIsInVzZVN0eWxlcyIsIm1ha2VTdHlsZXMiLCJDb21wb25lbnQiLCJwcm9wcyIsImNsYXNzZXMiLCJ1c2VGaXJlYmFzZSIsImFzZCIsImxpbmtzIiwiZ2l0aHViIiwiaHJlZiIsInRhcmdldCIsInRvb2x0aXAiLCJsaW5rZWRpbiIsImluc3RhZ3JhbSIsInJlbmRlckxvZ2luT3JMb2dnZWRCdXR0b24iLCJpc0xvZ2dlZCIsInNob3ciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztDQUNBOztDQUVBOztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0NBRUE7O0NBRUE7O0FBQ0E7QUFDQTtBQUNBO0NBRUE7O0NBRUE7QUFDQTs7Q0FHQTs7Q0FFQTtBQUNBOztBQUVBLElBQU1BLEdBQUcsR0FBRyxJQUFJQyx1REFBSixDQUFXO0FBQUVDLE9BQUssRUFBRSxjQUFUO0FBQXlCQyxTQUFPLEVBQUUsSUFBbEM7QUFBd0NDLFdBQVMsRUFBRTtBQUFuRCxDQUFYLENBQVosQyxDQUVBOztBQUNBO0FBQ0EsSUFBTUMsVUFB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Q2hCLFFBQTdCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FFRzBCLHlCQUF5QixFQUY1QixFQUtFLE1BQUMsaUVBQUQ7QUFDRSxNQUFFLEVBQUMsY0FETDtBQUVFLFNBQUssRUFBRSxjQUZUO0FBR0UsYUFBUyxFQUFFLEtBSGI7QUFJRSxTQUFLLE1BSlA7QUFLRSxXQUFPLEVBQUU7QUFBRUgsYUFBTyxFQUFFUCxPQUFPLENBQUNPO0FBQW5CLEtBTFg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQU1FLE1BQUMsZ0VBQUQ7QUFBUSxhQUFTLEVBQUVQLE9BQU8sQ0FBQ1osVUFBM0I7QUFBdUMsUUFBSSxFQUFFLEdBQTdDO0FBQWtELFVBQU0sRUFBRSxPQUExRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBTkYsQ0FMRixFQWlCRSxNQUFDLGlFQUFEO0FBQ0UsTUFBRSxFQUFDLGVBREw7QUFFRSxTQUFLLEVBQUUsZUFGVDtBQUdFLGFBQVMsRUFBRSxLQUhiO0FBSUUsU0FBSyxNQUpQO0FBS0UsV0FBTyxFQUFFO0FBQUVtQixhQUFPLEVBQUVQLE9BQU8sQ0FBQ087QUFBbkIsS0FMWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBTUUsTUFBQyxnRUFBRDtBQUFRLGFBQVMsRUFBRVAsT0FBTyxDQUFDWixVQUEzQjtBQUF1QyxRQUFJLEVBQUUsUUFBN0M7QUFBdUQsVUFBTSxFQUFFLE9BQS9EO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBTkYsQ0FqQkYsQ0FERixDQURGO0FBb0VELENBbkhEOztHQUFNVSxTO1VBQ1lGLFMsRUFFQUssNEQ7OztLQUhaSCxTO0FBcUhTQSx3RUFBZiIsImZpbGUiOiIuL2NvbXBvbmVudHMvVG9wTWVudUJhci9Ub3BNZW51TGlua3MuanN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0Jztcbi8vIE5leHRKU1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcbi8vIEBtYXRlcmlhbC11aS9jb3JlIGNvbXBvbmVudHNcbmltcG9ydCB7IG1ha2VTdHlsZXMgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnO1xuaW1wb3J0IExpc3QgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvTGlzdCc7XG5pbXBvcnQgTGlzdEl0ZW0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvTGlzdEl0ZW0nO1xuaW1wb3J0IFRvb2x0aXAgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVG9vbHRpcCc7XG5pbXBvcnQgQnV0dG9uIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0J1dHRvbic7XG5pbXBvcnQgVHlwb2dyYXBoeSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9UeXBvZ3JhcGh5JztcbmltcG9ydCBBcHBCYXIgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQXBwQmFyJztcbmltcG9ydCBUb29sYmFyIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1Rvb2xiYXInO1xuaW1wb3J0IEljb25CdXR0b24gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvSWNvbkJ1dHRvbic7XG5pbXBvcnQgSGlkZGVuIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0hpZGRlbic7XG5pbXBvcnQgRHJhd2VyIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0RyYXdlcic7XG4vLyBAbWF0ZXJpYWwtdWkvaWNvbnNcbmltcG9ydCBNZW51IGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9NZW51Jztcbi8vIGltcG9ydCB7IEluc3RhZ3JhbSwgTGlua2VkSW4sIFNlYXJjaCB9IGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucyc7XG5pbXBvcnQgSW5zdGFncmFtIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9JbnN0YWdyYW0nO1xuaW1wb3J0IExpbmtlZEluIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9MaW5rZWRJbic7XG5pbXBvcnQgR2l0SHViIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9HaXRIdWInO1xuaW1wb3J0IFNldHRpbmdzIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9TZXR0aW5ncyc7XG4vLyBMb2Rhc2hcbmltcG9ydCBnZXQgZnJvbSAnbG9kYXNoL2dldCc7XG4vLyBNeSBDb21wb25lbnRzXG4vLyBpbXBvcnQgQXBpIGZyb20gJy4uLy4uL2NvbW1vbi9GaXJlYmFzZUFwaSc7XG5pbXBvcnQgdXNlRmlyZWJhc2UgZnJvbSAnLi4vLi4vY29tbW9uL3VzZUZpcmViYXNlJztcblxuLy8gaW1wb3J0IHVzZUdsb2JhbFN0YXRlIGZyb20gJy4uLy4uL2NvbW1vbi91c2VHbG9iYWxTdGF0ZSc7XG5pbXBvcnQgTG9nZ2VyIGZyb20gJy4uLy4uL2NvbW1vbi9Mb2dnZXInO1xuLy8gSW1hZ2VzXG4vLyBpbXBvcnQgbG9nbyBmcm9tICdhc3NldHMvaW1hZ2VzL2xvZ28tam9uYXRoYW4tcmVpcy1jb20ucG5nJztcblxuY29uc3QgbG9nID0gbmV3IExvZ2dlcih7IGxhYmVsOiAnVG9wTWVudUxpbmtzJywgZW5hYmxlZDogdHJ1ZSwgaW1wb3J0YW50OiBmYWxzZSB9KTtcblxuLy8gU3R5bGVcbmltcG9ydCB0aGVtZSBmcm9tICcuLi8uLi9jb21tb24vVGhlbWUnO1xuY29uc3QgbG9jYWxTdHlsZSA9IHtcbiAgbGlzdDoge1xuICAgIGhlaWdodDogJzEwMCUnLFxuICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcbiAgICBqdXN0aWZ5Q29udGVudDogJ2ZsZXgtZW5kJyxcbiAgICBjb2xvcjogJ3doaXRlJyxcbiAgICBbdGhlbWUuYnJlYWtwb2ludHMuZG93bigneHMnKV06IHtcbiAgICAgIHdpZHRoOiAnMTAwJScsXG4gICAgICBkaXNwbGF5OiAnYmxvY2snLFxuICAgICAgYmFja2dyb3VuZENvbG9yOiAnZ3JheScsXG4gICAgfSxcbiAgfSxcbiAgbGlzdEl0ZW06IHtcbiAgICBmbG9hdDogJ2xlZnQnLFxuICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxuICAgIHdpZHRoOiAnYXV0bycsXG4gICAgbWFyZ2luOiAnMCcsXG4gICAgcGFkZGluZzogJzAnLFxuICB9LFxuICBsaXN0QnV0dG9uOiB7XG4gICAgY29sb3I6IHRoZW1lLnBhbGV0dGUudGV4dC5tZW51YmFyLFxuICAgIHBhZGRpbmc6ICcxcmVtJyxcbiAgICBtaW5XaWR0aDogJzIwcHgnLFxuICAgICcmOmhvdmVyLCY6Zm9jdXMnOiB7XG4gICAgICBiYWNrZ3JvdW5kOiAncmdiYSgyMDAsIDIwMCwgMjAwLCAwLjIpJyxcbiAgICB9LFxuICB9LFxuICBpY29uczoge1xuICAgIHdpZHRoOiAnMjBweCcsXG4gICAgaGVpZ2h0OiAnMjBweCcsXG4gIH0sXG4gIHRleHQ6IHtcbiAgICBtYXJnaW5MZWZ0OiAnMC41cmVtJyxcbiAgfSxcbn07XG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKGxvY2FsU3R5bGUpO1xuXG5jb25zdCBDb21wb25lbnQgPSAocHJvcHMpID0+IHtcbiAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xuICAvLyBjb25zdCBbZ2xvYmFsU3RhdGUsIGdsb2JhbEFjdGlvbnNdID0gdXNlR2xvYmFsU3RhdGUoKTtcbiAgY29uc3QgeyBhc2QgfSA9IHVzZUZpcmViYXNlKCk7XG5cbiAgY29uc3QgbGlua3MgPSB7XG4gICAgZ2l0aHViOiB7XG4gICAgICBocmVmOiAnaHR0cHM6Ly9naXRodWIuY29tL0pvbmF0aGFuUmVpc0NvbScsXG4gICAgICB0YXJnZXQ6ICdfYmxhbmsnLFxuICAgICAgdG9vbHRpcDogJ01lIHNpZ2Egbm8gTGlua2VkSW4nLFxuICAgIH0sXG4gICAgbGlua2VkaW46IHtcbiAgICAgIGhyZWY6ICdodHRwczovL3d3dy5saW5rZWRpbi5jb20vaW4vam9uYXRoYW4tcmVpcy1jb20vJyxcbiAgICAgIHRhcmdldDogJ19ibGFuaycsXG4gICAgICB0b29sdGlwOiAnTWUgc2lnYSBubyBMaW5rZWRJbicsXG4gICAgfSxcblxuICAgIGluc3RhZ3JhbToge1xuICAgICAgaHJlZjogJ2h0dHBzOi8vd3d3Lmluc3RhZ3JhbS5jb20vam9uYXRoYW5yZWlzLycsXG4gICAgICB0YXJnZXQ6ICdfYmxhbmsnLFxuICAgICAgdG9vbHRpcDogJ01lIHNpZ2Egbm8gTGlua2VkSW4nLFxuICAgIH0sXG4gIH07XG5cbiAgY29uc3QgcmVuZGVyTG9naW5PckxvZ2dlZEJ1dHRvbiA9ICgpID0+IHtcbiAgICAvLyBjb25zdCBpc0xvZ2dlZCA9IGdldChnbG9iYWxTdGF0ZSwgJ2lzTG9nZ2VkJywgbnVsbCk7XG4gICAgY29uc3QgaXNMb2dnZWQgPSB0cnVlO1xuICAgIGxvZy5zaG93KCdyZW5kZXJMb2dpbk9yTG9nZ2VkQnV0dG9uJywgaXNMb2dnZWQpO1xuXG4gICAgaWYgKGlzTG9nZ2VkKSB7XG4gICAgICByZXR1cm4gKFxuICAgICAgICA8VG9vbHRpcFxuICAgICAgICAgIGlkPVwiaG9tZS10b29sdGlwXCJcbiAgICAgICAgICB0aXRsZT17J0hvbWUgdG9vbHRpcCd9XG4gICAgICAgICAgcGxhY2VtZW50PXsndG9wJ31cbiAgICAgICAgICBhcnJvd1xuICAgICAgICAgIGNsYXNzZXM9e3sgdG9vbHRpcDogY2xhc3Nlcy50b29sdGlwIH19PlxuICAgICAgICAgIDxCdXR0b24gY2xhc3NOYW1lPXtjbGFzc2VzLmxpc3RCdXR0b259IGhyZWY9eycvJ30gdGFyZ2V0PXsnX3NlbGYnfT5cbiAgICAgICAgICAgIFNpZ24tdXBcbiAgICAgICAgICAgIHsvKiB7Z2xvYmFsU3RhdGUuY291bnRlcn0gKi99XG4gICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgIDwvVG9vbHRpcD5cbiAgICAgICk7XG4gICAgfVxuICAgIHJldHVybiBudWxsO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPExpc3QgY2xhc3NOYW1lPXtjbGFzc2VzLmxpc3R9PlxuICAgICAgPExpc3RJdGVtIGNsYXNzTmFtZT17Y2xhc3Nlcy5saXN0SXRlbX0+XG4gICAgICAgIHsvKiBTaWduVXAgQnV0dG9uICovfVxuICAgICAgICB7cmVuZGVyTG9naW5PckxvZ2dlZEJ1dHRvbigpfVxuXG4gICAgICAgIHsvKiBIb21lIEJ1dHRvbiAqL31cbiAgICAgICAgPFRvb2x0aXBcbiAgICAgICAgICBpZD1cImhvbWUtdG9vbHRpcFwiXG4gICAgICAgICAgdGl0bGU9eydIb21lIHRvb2x0aXAnfVxuICAgICAgICAgIHBsYWNlbWVudD17J3RvcCd9XG4gICAgICAgICAgYXJyb3dcbiAgICAgICAgICBjbGFzc2VzPXt7IHRvb2x0aXA6IGNsYXNzZXMudG9vbHRpcCB9fT5cbiAgICAgICAgICA8QnV0dG9uIGNsYXNzTmFtZT17Y2xhc3Nlcy5saXN0QnV0dG9ufSBocmVmPXsnLyd9IHRhcmdldD17J19zZWxmJ30+XG4gICAgICAgICAgICBIb21lXG4gICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgIDwvVG9vbHRpcD5cblxuICAgICAgICB7LyogT3RoZXIgQnV0dG9uICovfVxuICAgICAgICA8VG9vbHRpcFxuICAgICAgICAgIGlkPVwib3RoZXItdG9vbHRpcFwiXG4gICAgICAgICAgdGl0bGU9eydPdGhlciB0b29sdGlwJ31cbiAgICAgICAgICBwbGFjZW1lbnQ9eyd0b3AnfVxuICAgICAgICAgIGFycm93XG4gICAgICAgICAgY2xhc3Nlcz17eyB0b29sdGlwOiBjbGFzc2VzLnRvb2x0aXAgfX0+XG4gICAgICAgICAgPEJ1dHRvbiBjbGFzc05hbWU9e2NsYXNzZXMubGlzdEJ1dHRvbn0gaHJlZj17Jy9vdGhlcid9IHRhcmdldD17J19zZWxmJ30+XG4gICAgICAgICAgICBPdGhlciBwYWdlXG4gICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgIDwvVG9vbHRpcD5cblxuICAgICAgICB7LyogTGlua2VkSW4gQnV0dG9uICovfVxuICAgICAgICB7LyogPFRvb2x0aXBcbiAgICAgICAgICBpZD1cImdpdEh1Yi10b29sdGlwXCJcbiAgICAgICAgICB0aXRsZT17bGlua3MuZ2l0aHViLnRvb2x0aXB9XG4gICAgICAgICAgcGxhY2VtZW50PXsndG9wJ31cbiAgICAgICAgICBhcnJvd1xuICAgICAgICAgIGNsYXNzZXM9e3sgdG9vbHRpcDogY2xhc3Nlcy50b29sdGlwIH19PlxuICAgICAgICAgIDxCdXR0b24gY2xhc3NOYW1lPXtjbGFzc2VzLmxpc3RCdXR0b259IGhyZWY9e2xpbmtzLmdpdGh1Yi5ocmVmfSB0YXJnZXQ9e2xpbmtzLmdpdGh1Yi50YXJnZXR9PlxuICAgICAgICAgICAgPEdpdEh1YiBjbGFzc05hbWU9e2NsYXNzZXMuaWNvbnN9IC8+XG4gICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgIDwvVG9vbHRpcD4gKi99XG5cbiAgICAgICAgey8qIExpbmtlZEluIEJ1dHRvbiAqL31cbiAgICAgICAgey8qIDxUb29sdGlwXG4gICAgICAgICAgaWQ9XCJsaW5rZWRpbi10b29sdGlwXCJcbiAgICAgICAgICB0aXRsZT17bGlua3MubGlua2VkaW4udG9vbHRpcH1cbiAgICAgICAgICBwbGFjZW1lbnQ9eyd0b3AnfVxuICAgICAgICAgIGFycm93XG4gICAgICAgICAgY2xhc3Nlcz17eyB0b29sdGlwOiBjbGFzc2VzLnRvb2x0aXAgfX0+XG4gICAgICAgICAgPEJ1dHRvbiBjbGFzc05hbWU9e2NsYXNzZXMubGlzdEJ1dHRvbn0gaHJlZj17bGlua3MubGlua2VkaW4uaHJlZn0gdGFyZ2V0PXtsaW5rcy5saW5rZWRpbi50YXJnZXR9PlxuICAgICAgICAgICAgPExpbmtlZEluIGNsYXNzTmFtZT17Y2xhc3Nlcy5pY29uc30gLz5cbiAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgPC9Ub29sdGlwPiAqL31cblxuICAgICAgICB7LyogSW5zdGFncmFtIEJ1dHRvbiAqL31cbiAgICAgICAgey8qIDxUb29sdGlwXG4gICAgICAgICAgaWQ9XCJpbnN0YWdyYW0tdG9vbHRpcFwiXG4gICAgICAgICAgdGl0bGU9e2xpbmtzLmluc3RhZ3JhbS50b29sdGlwfVxuICAgICAgICAgIHBsYWNlbWVudD17J3RvcCd9XG4gICAgICAgICAgYXJyb3dcbiAgICAgICAgICBjbGFzc2VzPXt7IHRvb2x0aXA6IGNsYXNzZXMudG9vbHRpcCB9fT5cbiAgICAgICAgICA8QnV0dG9uIGNsYXNzTmFtZT17Y2xhc3Nlcy5saXN0QnV0dG9ufSBocmVmPXtsaW5rcy5pbnN0YWdyYW0uaHJlZn0gdGFyZ2V0PXtsaW5rcy5pbnN0YWdyYW0udGFyZ2V0fT5cbiAgICAgICAgICAgIDxJbnN0YWdyYW0gY2xhc3NOYW1lPXtjbGFzc2VzLmljb25zfSAvPlxuICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICA8L1Rvb2x0aXA+ICovfVxuICAgICAgPC9MaXN0SXRlbT5cbiAgICA8L0xpc3Q+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBDb21wb25lbnQ7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/TopMenuBar/TopMenuLinks.jsx\n");

/***/ })

})