webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/TopMenuBar/TopMenuLinks.jsx":
/*!************************************************!*\
  !*** ./components/TopMenuBar/TopMenuLinks.jsx ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ \"./node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/styles */ \"./node_modules/@material-ui/core/esm/styles/index.js\");\n/* harmony import */ var _material_ui_core_List__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/List */ \"./node_modules/@material-ui/core/esm/List/index.js\");\n/* harmony import */ var _material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/ListItem */ \"./node_modules/@material-ui/core/esm/ListItem/index.js\");\n/* harmony import */ var _material_ui_core_Tooltip__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/Tooltip */ \"./node_modules/@material-ui/core/esm/Tooltip/index.js\");\n/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/Button */ \"./node_modules/@material-ui/core/esm/Button/index.js\");\n/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/Typography */ \"./node_modules/@material-ui/core/esm/Typography/index.js\");\n/* harmony import */ var _material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core/AppBar */ \"./node_modules/@material-ui/core/esm/AppBar/index.js\");\n/* harmony import */ var _material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/core/Toolbar */ \"./node_modules/@material-ui/core/esm/Toolbar/index.js\");\n/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/core/IconButton */ \"./node_modules/@material-ui/core/esm/IconButton/index.js\");\n/* harmony import */ var _material_ui_core_Hidden__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @material-ui/core/Hidden */ \"./node_modules/@material-ui/core/esm/Hidden/index.js\");\n/* harmony import */ var _material_ui_core_Drawer__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @material-ui/core/Drawer */ \"./node_modules/@material-ui/core/esm/Drawer/index.js\");\n/* harmony import */ var _material_ui_icons_Menu__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @material-ui/icons/Menu */ \"./node_modules/@material-ui/icons/Menu.js\");\n/* harmony import */ var _material_ui_icons_Menu__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Menu__WEBPACK_IMPORTED_MODULE_15__);\n/* harmony import */ var _material_ui_icons_Instagram__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @material-ui/icons/Instagram */ \"./node_modules/@material-ui/icons/Instagram.js\");\n/* harmony import */ var _material_ui_icons_Instagram__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Instagram__WEBPACK_IMPORTED_MODULE_16__);\n/* harmony import */ var _material_ui_icons_LinkedIn__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @material-ui/icons/LinkedIn */ \"./node_modules/@material-ui/icons/LinkedIn.js\");\n/* harmony import */ var _material_ui_icons_LinkedIn__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_LinkedIn__WEBPACK_IMPORTED_MODULE_17__);\n/* harmony import */ var _material_ui_icons_GitHub__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @material-ui/icons/GitHub */ \"./node_modules/@material-ui/icons/GitHub.js\");\n/* harmony import */ var _material_ui_icons_GitHub__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_GitHub__WEBPACK_IMPORTED_MODULE_18__);\n/* harmony import */ var _material_ui_icons_Settings__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @material-ui/icons/Settings */ \"./node_modules/@material-ui/icons/Settings.js\");\n/* harmony import */ var _material_ui_icons_Settings__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Settings__WEBPACK_IMPORTED_MODULE_19__);\n/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! lodash/get */ \"./node_modules/lodash/get.js\");\n/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(lodash_get__WEBPACK_IMPORTED_MODULE_20__);\n/* harmony import */ var _common_useFirebase__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../../common/useFirebase */ \"./common/useFirebase.jsx\");\n/* harmony import */ var _common_Logger__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../../common/Logger */ \"./common/Logger.jsx\");\n/* harmony import */ var _common_Theme__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../../common/Theme */ \"./common/Theme.jsx\");\n\n\n\nvar _this = undefined,\n    _jsxFileName = \"/Users/Jonathan/Projects/my-menu/components/TopMenuBar/TopMenuLinks.jsx\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;\n // NextJS\n\n // @material-ui/core components\n\n\n\n\n\n\n\n\n\n\n\n // @material-ui/icons\n\n // import { Instagram, LinkedIn, Search } from '@material-ui/icons';\n\n\n\n\n // Lodash\n\n // My Components\n// import Api from '../../common/FirebaseApi';\n\n // import useGlobalState from '../../common/useGlobalState';\n\n // Images\n// import logo from 'assets/images/logo-jonathan-reis-com.png';\n\nvar log = new _common_Logger__WEBPACK_IMPORTED_MODULE_22__[\"default\"]({\n  label: 'TopMenuLinks',\n  enabled: true,\n  important: false\n}); // Style\n\n\nvar localStyle = {\n  list: Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__[\"default\"])({\n    height: '100%',\n    display: 'flex',\n    alignItems: 'center',\n    justifyContent: 'flex-end',\n    color: 'white'\n  }, _common_Theme__WEBPACK_IMPORTED_MODULE_23__[\"default\"].breakpoints.down('xs'), {\n    width: '100%',\n    display: 'block',\n    backgroundColor: 'gray'\n  }),\n  listItem: {\n    \"float\": 'left',\n    position: 'relative',\n    width: 'auto',\n    margin: '0',\n    padding: '0'\n  },\n  listButton: {\n    color: _common_Theme__WEBPACK_IMPORTED_MODULE_23__[\"default\"].palette.text.menubar,\n    padding: '1rem',\n    minWidth: '20px',\n    '&:hover,&:focus': {\n      background: 'rgba(200, 200, 200, 0.2)'\n    }\n  },\n  icons: {\n    width: '20px',\n    height: '20px'\n  },\n  text: {\n    marginLeft: '0.5rem'\n  }\n};\nvar useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__[\"makeStyles\"])(localStyle);\n\nvar Component = function Component(props) {\n  _s();\n\n  var classes = useStyles(); // const [globalState, globalActions] = useGlobalState();\n\n  var _useFirebase = Object(_common_useFirebase__WEBPACK_IMPORTED_MODULE_21__[\"default\"])(),\n      _useFirebase2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_useFirebase, 2),\n      firebase = _useFirebase2[0],\n      firebaseActions = _useFirebase2[1];\n\n  var links = {\n    github: {\n      href: 'https://github.com/JonathanReisCom',\n      target: '_blank',\n      tooltip: 'Me siga no LinkedIn'\n    },\n    linkedin: {\n      href: 'https://www.linkedin.com/in/jonathan-reis-com/',\n      target: '_blank',\n      tooltip: 'Me siga no LinkedIn'\n    },\n    instagram: {\n      href: 'https://www.instagram.com/jonathanreis/',\n      target: '_blank',\n      tooltip: 'Me siga no LinkedIn'\n    }\n  };\n\n  var renderLoginOrLoggedButton = function renderLoginOrLoggedButton() {\n    var userEmail = lodash_get__WEBPACK_IMPORTED_MODULE_20___default()(firebase, 'user.email', null); // log.show('renderLoginOrLoggedButton', firebase, firebaseActions);\n\n    if (userEmail) {\n      return __jsx(_material_ui_core_Tooltip__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n        id: \"home-tooltip\",\n        title: 'Home tooltip',\n        placement: 'top',\n        arrow: true,\n        classes: {\n          tooltip: classes.tooltip\n        },\n        __self: _this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 106,\n          columnNumber: 9\n        }\n      }, __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n        className: classes.listButton,\n        href: '/',\n        target: '_self',\n        __self: _this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 112,\n          columnNumber: 11\n        }\n      }, userEmail));\n    } else {\n      return __jsx(_material_ui_core_Tooltip__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n        id: \"home-tooltip\",\n        title: 'Home tooltip',\n        placement: 'top',\n        arrow: true,\n        classes: {\n          tooltip: classes.tooltip\n        },\n        __self: _this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 119,\n          columnNumber: 9\n        }\n      }, __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n        className: classes.listButton,\n        href: '/',\n        target: '_self',\n        __self: _this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 125,\n          columnNumber: 11\n        }\n      }, \"Sign-up\"));\n    }\n\n    return null;\n  };\n\n  return __jsx(_material_ui_core_List__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n    className: classes.list,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 135,\n      columnNumber: 5\n    }\n  }, __jsx(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n    className: classes.listItem,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 136,\n      columnNumber: 7\n    }\n  }, renderLoginOrLoggedButton(), __jsx(_material_ui_core_Tooltip__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n    id: \"home-tooltip\",\n    title: 'Home tooltip',\n    placement: 'top',\n    arrow: true,\n    classes: {\n      tooltip: classes.tooltip\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 141,\n      columnNumber: 9\n    }\n  }, __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n    className: classes.listButton,\n    href: '/',\n    target: '_self',\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 147,\n      columnNumber: 11\n    }\n  }, \"Home\")), __jsx(_material_ui_core_Tooltip__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n    id: \"other-tooltip\",\n    title: 'Other tooltip',\n    placement: 'top',\n    arrow: true,\n    classes: {\n      tooltip: classes.tooltip\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 153,\n      columnNumber: 9\n    }\n  }, __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n    className: classes.listButton,\n    href: '/other',\n    target: '_self',\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 159,\n      columnNumber: 11\n    }\n  }, \"Other page\"))));\n};\n\n_s(Component, \"Jnkc/LeqzskYLipVaKtnq/12IBw=\", false, function () {\n  return [useStyles, _common_useFirebase__WEBPACK_IMPORTED_MODULE_21__[\"default\"]];\n});\n\n_c = Component;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Component);\n\nvar _c;\n\n$RefreshReg$(_c, \"Component\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1RvcE1lbnVCYXIvVG9wTWVudUxpbmtzLmpzeD80Yjc1Il0sIm5hbWVzIjpbImxvZyIsIkxvZ2dlciIsImxhYmVsIiwiZW5hYmxlZCIsImltcG9ydGFudCIsImxvY2FsU3R5bGUiLCJsaXN0IiwiaGVpZ2h0IiwiZGlzcGxheSIsImFsaWduSXRlbXMiLCJqdXN0aWZ5Q29udGVudCIsImNvbG9yIiwidGhlbWUiLCJicmVha3BvaW50cyIsImRvd24iLCJ3aWR0aCIsImJhY2tncm91bmRDb2xvciIsImxpc3RJdGVtIiwicG9zaXRpb24iLCJtYXJnaW4iLCJwYWRkaW5nIiwibGlzdEJ1dHRvbiIsInBhbGV0dGUiLCJ0ZXh0IiwibWVudWJhciIsIm1pbldpZHRoIiwiYmFja2dyb3VuZCIsImljb25zIiwibWFyZ2luTGVmdCIsInVzZVN0eWxlcyIsIm1ha2VTdHlsZXMiLCJDb21wb25lbnQiLCJwcm9wcyIsImNsYXNzZXMiLCJ1c2VGaXJlYmFzZSIsImZpcmViYXNlIiwiZmlyZWJhc2VBY3Rpb25zIiwibGlua3MiLCJnaXRodWIiLCJocmVmIiwidGFyZ2V0IiwidG9vbHRpcCIsImxpbmtlZGluIiwiaW5zdGFncmFtIiwicmVuZGVyTG9naW5PckxvZ2dlZEJ1dHRvbiIsInVzZXJFbWFpbCIsImdldCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Q0FDQTs7Q0FFQTs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtDQUVBOztDQUVBOztBQUNBO0FBQ0E7QUFDQTtDQUVBOztDQUVBO0FBQ0E7O0NBR0E7O0NBRUE7QUFDQTs7QUFFQSxJQUFNQSxHQUFHLEdBQUcsSUFBSUMsdURBQUosQ0FBVztBQUFFQyxPQUFLLEVBQUUsY0FBVDtBQUF5QkMsU0FBTyxFQUFFLElBQWxDO0FBQXdDQyxXQUFTLEVBQUU7QUFBbkQsQ0FBWCxDQUFaLEMs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QUNRO0FBQW5CLEtBTFg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQU1FLE1BQUMsZ0VBQUQ7QUFBUSxhQUFTLEVBQUVSLE9BQU8sQ0FBQ1osVUFBM0I7QUFBdUMsUUFBSSxFQUFFLFFBQTdDO0FBQXVELFVBQU0sRUFBRSxPQUEvRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQU5GLENBakJGLENBREYsQ0FERjtBQW9FRCxDQTlIRDs7R0FBTVUsUztVQUNZRixTLEVBRW9CSyw0RDs7O0tBSGhDSCxTO0FBZ0lTQSx3RUFBZiIsImZpbGUiOiIuL2NvbXBvbmVudHMvVG9wTWVudUJhci9Ub3BNZW51TGlua3MuanN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0Jztcbi8vIE5leHRKU1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcbi8vIEBtYXRlcmlhbC11aS9jb3JlIGNvbXBvbmVudHNcbmltcG9ydCB7IG1ha2VTdHlsZXMgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnO1xuaW1wb3J0IExpc3QgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvTGlzdCc7XG5pbXBvcnQgTGlzdEl0ZW0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvTGlzdEl0ZW0nO1xuaW1wb3J0IFRvb2x0aXAgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVG9vbHRpcCc7XG5pbXBvcnQgQnV0dG9uIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0J1dHRvbic7XG5pbXBvcnQgVHlwb2dyYXBoeSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9UeXBvZ3JhcGh5JztcbmltcG9ydCBBcHBCYXIgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQXBwQmFyJztcbmltcG9ydCBUb29sYmFyIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1Rvb2xiYXInO1xuaW1wb3J0IEljb25CdXR0b24gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvSWNvbkJ1dHRvbic7XG5pbXBvcnQgSGlkZGVuIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0hpZGRlbic7XG5pbXBvcnQgRHJhd2VyIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0RyYXdlcic7XG4vLyBAbWF0ZXJpYWwtdWkvaWNvbnNcbmltcG9ydCBNZW51IGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9NZW51Jztcbi8vIGltcG9ydCB7IEluc3RhZ3JhbSwgTGlua2VkSW4sIFNlYXJjaCB9IGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucyc7XG5pbXBvcnQgSW5zdGFncmFtIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9JbnN0YWdyYW0nO1xuaW1wb3J0IExpbmtlZEluIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9MaW5rZWRJbic7XG5pbXBvcnQgR2l0SHViIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9HaXRIdWInO1xuaW1wb3J0IFNldHRpbmdzIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9TZXR0aW5ncyc7XG4vLyBMb2Rhc2hcbmltcG9ydCBnZXQgZnJvbSAnbG9kYXNoL2dldCc7XG4vLyBNeSBDb21wb25lbnRzXG4vLyBpbXBvcnQgQXBpIGZyb20gJy4uLy4uL2NvbW1vbi9GaXJlYmFzZUFwaSc7XG5pbXBvcnQgdXNlRmlyZWJhc2UgZnJvbSAnLi4vLi4vY29tbW9uL3VzZUZpcmViYXNlJztcblxuLy8gaW1wb3J0IHVzZUdsb2JhbFN0YXRlIGZyb20gJy4uLy4uL2NvbW1vbi91c2VHbG9iYWxTdGF0ZSc7XG5pbXBvcnQgTG9nZ2VyIGZyb20gJy4uLy4uL2NvbW1vbi9Mb2dnZXInO1xuLy8gSW1hZ2VzXG4vLyBpbXBvcnQgbG9nbyBmcm9tICdhc3NldHMvaW1hZ2VzL2xvZ28tam9uYXRoYW4tcmVpcy1jb20ucG5nJztcblxuY29uc3QgbG9nID0gbmV3IExvZ2dlcih7IGxhYmVsOiAnVG9wTWVudUxpbmtzJywgZW5hYmxlZDogdHJ1ZSwgaW1wb3J0YW50OiBmYWxzZSB9KTtcblxuLy8gU3R5bGVcbmltcG9ydCB0aGVtZSBmcm9tICcuLi8uLi9jb21tb24vVGhlbWUnO1xuY29uc3QgbG9jYWxTdHlsZSA9IHtcbiAgbGlzdDoge1xuICAgIGhlaWdodDogJzEwMCUnLFxuICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcbiAgICBqdXN0aWZ5Q29udGVudDogJ2ZsZXgtZW5kJyxcbiAgICBjb2xvcjogJ3doaXRlJyxcbiAgICBbdGhlbWUuYnJlYWtwb2ludHMuZG93bigneHMnKV06IHtcbiAgICAgIHdpZHRoOiAnMTAwJScsXG4gICAgICBkaXNwbGF5OiAnYmxvY2snLFxuICAgICAgYmFja2dyb3VuZENvbG9yOiAnZ3JheScsXG4gICAgfSxcbiAgfSxcbiAgbGlzdEl0ZW06IHtcbiAgICBmbG9hdDogJ2xlZnQnLFxuICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxuICAgIHdpZHRoOiAnYXV0bycsXG4gICAgbWFyZ2luOiAnMCcsXG4gICAgcGFkZGluZzogJzAnLFxuICB9LFxuICBsaXN0QnV0dG9uOiB7XG4gICAgY29sb3I6IHRoZW1lLnBhbGV0dGUudGV4dC5tZW51YmFyLFxuICAgIHBhZGRpbmc6ICcxcmVtJyxcbiAgICBtaW5XaWR0aDogJzIwcHgnLFxuICAgICcmOmhvdmVyLCY6Zm9jdXMnOiB7XG4gICAgICBiYWNrZ3JvdW5kOiAncmdiYSgyMDAsIDIwMCwgMjAwLCAwLjIpJyxcbiAgICB9LFxuICB9LFxuICBpY29uczoge1xuICAgIHdpZHRoOiAnMjBweCcsXG4gICAgaGVpZ2h0OiAnMjBweCcsXG4gIH0sXG4gIHRleHQ6IHtcbiAgICBtYXJnaW5MZWZ0OiAnMC41cmVtJyxcbiAgfSxcbn07XG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKGxvY2FsU3R5bGUpO1xuXG5jb25zdCBDb21wb25lbnQgPSAocHJvcHMpID0+IHtcbiAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xuICAvLyBjb25zdCBbZ2xvYmFsU3RhdGUsIGdsb2JhbEFjdGlvbnNdID0gdXNlR2xvYmFsU3RhdGUoKTtcbiAgY29uc3QgW2ZpcmViYXNlLCBmaXJlYmFzZUFjdGlvbnNdID0gdXNlRmlyZWJhc2UoKTtcblxuICBjb25zdCBsaW5rcyA9IHtcbiAgICBnaXRodWI6IHtcbiAgICAgIGhyZWY6ICdodHRwczovL2dpdGh1Yi5jb20vSm9uYXRoYW5SZWlzQ29tJyxcbiAgICAgIHRhcmdldDogJ19ibGFuaycsXG4gICAgICB0b29sdGlwOiAnTWUgc2lnYSBubyBMaW5rZWRJbicsXG4gICAgfSxcbiAgICBsaW5rZWRpbjoge1xuICAgICAgaHJlZjogJ2h0dHBzOi8vd3d3LmxpbmtlZGluLmNvbS9pbi9qb25hdGhhbi1yZWlzLWNvbS8nLFxuICAgICAgdGFyZ2V0OiAnX2JsYW5rJyxcbiAgICAgIHRvb2x0aXA6ICdNZSBzaWdhIG5vIExpbmtlZEluJyxcbiAgICB9LFxuXG4gICAgaW5zdGFncmFtOiB7XG4gICAgICBocmVmOiAnaHR0cHM6Ly93d3cuaW5zdGFncmFtLmNvbS9qb25hdGhhbnJlaXMvJyxcbiAgICAgIHRhcmdldDogJ19ibGFuaycsXG4gICAgICB0b29sdGlwOiAnTWUgc2lnYSBubyBMaW5rZWRJbicsXG4gICAgfSxcbiAgfTtcblxuICBjb25zdCByZW5kZXJMb2dpbk9yTG9nZ2VkQnV0dG9uID0gKCkgPT4ge1xuICAgIGNvbnN0IHVzZXJFbWFpbCA9IGdldChmaXJlYmFzZSwgJ3VzZXIuZW1haWwnLCBudWxsKTtcbiAgICAvLyBsb2cuc2hvdygncmVuZGVyTG9naW5PckxvZ2dlZEJ1dHRvbicsIGZpcmViYXNlLCBmaXJlYmFzZUFjdGlvbnMpO1xuXG4gICAgaWYgKHVzZXJFbWFpbCkge1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgPFRvb2x0aXBcbiAgICAgICAgICBpZD1cImhvbWUtdG9vbHRpcFwiXG4gICAgICAgICAgdGl0bGU9eydIb21lIHRvb2x0aXAnfVxuICAgICAgICAgIHBsYWNlbWVudD17J3RvcCd9XG4gICAgICAgICAgYXJyb3dcbiAgICAgICAgICBjbGFzc2VzPXt7IHRvb2x0aXA6IGNsYXNzZXMudG9vbHRpcCB9fT5cbiAgICAgICAgICA8QnV0dG9uIGNsYXNzTmFtZT17Y2xhc3Nlcy5saXN0QnV0dG9ufSBocmVmPXsnLyd9IHRhcmdldD17J19zZWxmJ30+XG4gICAgICAgICAgICB7dXNlckVtYWlsfVxuICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICA8L1Rvb2x0aXA+XG4gICAgICApO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gKFxuICAgICAgICA8VG9vbHRpcFxuICAgICAgICAgIGlkPVwiaG9tZS10b29sdGlwXCJcbiAgICAgICAgICB0aXRsZT17J0hvbWUgdG9vbHRpcCd9XG4gICAgICAgICAgcGxhY2VtZW50PXsndG9wJ31cbiAgICAgICAgICBhcnJvd1xuICAgICAgICAgIGNsYXNzZXM9e3sgdG9vbHRpcDogY2xhc3Nlcy50b29sdGlwIH19PlxuICAgICAgICAgIDxCdXR0b24gY2xhc3NOYW1lPXtjbGFzc2VzLmxpc3RCdXR0b259IGhyZWY9eycvJ30gdGFyZ2V0PXsnX3NlbGYnfT5cbiAgICAgICAgICAgIFNpZ24tdXBcbiAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgPC9Ub29sdGlwPlxuICAgICAgKTtcbiAgICB9XG4gICAgcmV0dXJuIG51bGw7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8TGlzdCBjbGFzc05hbWU9e2NsYXNzZXMubGlzdH0+XG4gICAgICA8TGlzdEl0ZW0gY2xhc3NOYW1lPXtjbGFzc2VzLmxpc3RJdGVtfT5cbiAgICAgICAgey8qIFNpZ25VcCBCdXR0b24gKi99XG4gICAgICAgIHtyZW5kZXJMb2dpbk9yTG9nZ2VkQnV0dG9uKCl9XG5cbiAgICAgICAgey8qIEhvbWUgQnV0dG9uICovfVxuICAgICAgICA8VG9vbHRpcFxuICAgICAgICAgIGlkPVwiaG9tZS10b29sdGlwXCJcbiAgICAgICAgICB0aXRsZT17J0hvbWUgdG9vbHRpcCd9XG4gICAgICAgICAgcGxhY2VtZW50PXsndG9wJ31cbiAgICAgICAgICBhcnJvd1xuICAgICAgICAgIGNsYXNzZXM9e3sgdG9vbHRpcDogY2xhc3Nlcy50b29sdGlwIH19PlxuICAgICAgICAgIDxCdXR0b24gY2xhc3NOYW1lPXtjbGFzc2VzLmxpc3RCdXR0b259IGhyZWY9eycvJ30gdGFyZ2V0PXsnX3NlbGYnfT5cbiAgICAgICAgICAgIEhvbWVcbiAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgPC9Ub29sdGlwPlxuXG4gICAgICAgIHsvKiBPdGhlciBCdXR0b24gKi99XG4gICAgICAgIDxUb29sdGlwXG4gICAgICAgICAgaWQ9XCJvdGhlci10b29sdGlwXCJcbiAgICAgICAgICB0aXRsZT17J090aGVyIHRvb2x0aXAnfVxuICAgICAgICAgIHBsYWNlbWVudD17J3RvcCd9XG4gICAgICAgICAgYXJyb3dcbiAgICAgICAgICBjbGFzc2VzPXt7IHRvb2x0aXA6IGNsYXNzZXMudG9vbHRpcCB9fT5cbiAgICAgICAgICA8QnV0dG9uIGNsYXNzTmFtZT17Y2xhc3Nlcy5saXN0QnV0dG9ufSBocmVmPXsnL290aGVyJ30gdGFyZ2V0PXsnX3NlbGYnfT5cbiAgICAgICAgICAgIE90aGVyIHBhZ2VcbiAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgPC9Ub29sdGlwPlxuXG4gICAgICAgIHsvKiBMaW5rZWRJbiBCdXR0b24gKi99XG4gICAgICAgIHsvKiA8VG9vbHRpcFxuICAgICAgICAgIGlkPVwiZ2l0SHViLXRvb2x0aXBcIlxuICAgICAgICAgIHRpdGxlPXtsaW5rcy5naXRodWIudG9vbHRpcH1cbiAgICAgICAgICBwbGFjZW1lbnQ9eyd0b3AnfVxuICAgICAgICAgIGFycm93XG4gICAgICAgICAgY2xhc3Nlcz17eyB0b29sdGlwOiBjbGFzc2VzLnRvb2x0aXAgfX0+XG4gICAgICAgICAgPEJ1dHRvbiBjbGFzc05hbWU9e2NsYXNzZXMubGlzdEJ1dHRvbn0gaHJlZj17bGlua3MuZ2l0aHViLmhyZWZ9IHRhcmdldD17bGlua3MuZ2l0aHViLnRhcmdldH0+XG4gICAgICAgICAgICA8R2l0SHViIGNsYXNzTmFtZT17Y2xhc3Nlcy5pY29uc30gLz5cbiAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgPC9Ub29sdGlwPiAqL31cblxuICAgICAgICB7LyogTGlua2VkSW4gQnV0dG9uICovfVxuICAgICAgICB7LyogPFRvb2x0aXBcbiAgICAgICAgICBpZD1cImxpbmtlZGluLXRvb2x0aXBcIlxuICAgICAgICAgIHRpdGxlPXtsaW5rcy5saW5rZWRpbi50b29sdGlwfVxuICAgICAgICAgIHBsYWNlbWVudD17J3RvcCd9XG4gICAgICAgICAgYXJyb3dcbiAgICAgICAgICBjbGFzc2VzPXt7IHRvb2x0aXA6IGNsYXNzZXMudG9vbHRpcCB9fT5cbiAgICAgICAgICA8QnV0dG9uIGNsYXNzTmFtZT17Y2xhc3Nlcy5saXN0QnV0dG9ufSBocmVmPXtsaW5rcy5saW5rZWRpbi5ocmVmfSB0YXJnZXQ9e2xpbmtzLmxpbmtlZGluLnRhcmdldH0+XG4gICAgICAgICAgICA8TGlua2VkSW4gY2xhc3NOYW1lPXtjbGFzc2VzLmljb25zfSAvPlxuICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICA8L1Rvb2x0aXA+ICovfVxuXG4gICAgICAgIHsvKiBJbnN0YWdyYW0gQnV0dG9uICovfVxuICAgICAgICB7LyogPFRvb2x0aXBcbiAgICAgICAgICBpZD1cImluc3RhZ3JhbS10b29sdGlwXCJcbiAgICAgICAgICB0aXRsZT17bGlua3MuaW5zdGFncmFtLnRvb2x0aXB9XG4gICAgICAgICAgcGxhY2VtZW50PXsndG9wJ31cbiAgICAgICAgICBhcnJvd1xuICAgICAgICAgIGNsYXNzZXM9e3sgdG9vbHRpcDogY2xhc3Nlcy50b29sdGlwIH19PlxuICAgICAgICAgIDxCdXR0b24gY2xhc3NOYW1lPXtjbGFzc2VzLmxpc3RCdXR0b259IGhyZWY9e2xpbmtzLmluc3RhZ3JhbS5ocmVmfSB0YXJnZXQ9e2xpbmtzLmluc3RhZ3JhbS50YXJnZXR9PlxuICAgICAgICAgICAgPEluc3RhZ3JhbSBjbGFzc05hbWU9e2NsYXNzZXMuaWNvbnN9IC8+XG4gICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgIDwvVG9vbHRpcD4gKi99XG4gICAgICA8L0xpc3RJdGVtPlxuICAgIDwvTGlzdD5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IENvbXBvbmVudDtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/TopMenuBar/TopMenuLinks.jsx\n");

/***/ })

})