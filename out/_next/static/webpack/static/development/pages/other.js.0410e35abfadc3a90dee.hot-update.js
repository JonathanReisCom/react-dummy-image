webpackHotUpdate("static/development/pages/other.js",{

/***/ "./common/useFirebase.jsx":
/*!********************************!*\
  !*** ./common/useFirebase.jsx ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! firebase/app */ \"./node_modules/firebase/app/dist/index.cjs.js\");\n/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(firebase_app__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase/auth */ \"./node_modules/firebase/auth/dist/index.esm.js\");\n/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! firebase/firestore */ \"./node_modules/firebase/firestore/dist/index.esm.js\");\n/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lodash/get */ \"./node_modules/lodash/get.js\");\n/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(lodash_get__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _Logger__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Logger */ \"./common/Logger.jsx\");\nvar _s = $RefreshSig$();\n\n // Firebase\n\n\n\n // Lodash\n\n // useGlobal Hook\n// import useGlobal from './hooks/useGlobal';\n// My Global State\n// import useGlobalState from './useGlobalState';\n\n\nvar log = new _Logger__WEBPACK_IMPORTED_MODULE_5__[\"default\"]({\n  label: 'FirebaseApi',\n  enabled: true,\n  important: false\n});\nvar config = {\n  apiKey: 'AIzaSyD5p1vID502EXVjfJTD3Asrt6itiyzuJS0',\n  authDomain: 'meucardapio-com.firebaseapp.com',\n  databaseURL: 'https://meucardapio-com.firebaseio.com',\n  projectId: 'meucardapio-com',\n  storageBucket: 'meucardapio-com.appspot.com',\n  messagingSenderId: '225246847990',\n  appId: '1:225246847990:web:914a4cc39611ac097a9dd7',\n  measurementId: 'G-J66DDL2BT0'\n};\n/*\nconst initialState = () => {\n  if (!app.apps.length) {\n    app.initializeApp(config);\n  }\n  const db = app.firestore();\n  const auth = app.auth();\n  setAuthListener(auth);\n\n  return {\n    auth,\n    db,\n  };\n};\n\nconst setAuthListener = (auth) => {\n  // const [globalState, globalActions] = useGlobalState();\n  auth.onAuthStateChanged((user) => {\n    if (user) {\n      // User is signed in.\n      log.show('onAuthStateChanged', user.email);\n      actions.setUser(user);\n    } else {\n      // No user is signed in.\n      log.show('onAuthStateChanged', 'No user');\n    }\n  });\n};\n\nconst actions = {\n  actionTest: (store, item) => {\n    log.show('actionTest', store, item);\n  },\n  setUser: (store, user) => {\n    log.show('setUser', store, user);\n    store.setState({ user: user });\n  },\n};\n\nconst useFirebase = useGlobal(React, initialState, actions);\n*/\n\nvar initFirebase = function initFirebase() {\n  log.show('initFirebase');\n\n  if (!firebase_app__WEBPACK_IMPORTED_MODULE_1___default.a.apps.length) {\n    firebase_app__WEBPACK_IMPORTED_MODULE_1___default.a.initializeApp(config);\n  }\n};\n\ninitFirebase();\n\nvar useFirebase = function useFirebase() {\n  _s();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(function () {\n    var db = firebase_app__WEBPACK_IMPORTED_MODULE_1___default.a.firestore();\n    var auth = firebase_app__WEBPACK_IMPORTED_MODULE_1___default.a.auth();\n    var user = auth.currentUser;\n    return {\n      db: db,\n      auth: auth,\n      user: user\n    };\n  }),\n      state = _useState[0],\n      setState = _useState[1];\n\n  var onChange = function onChange(user) {\n    log.show('onChange', user.email);\n    setState({\n      user: user\n    });\n  };\n\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(function () {\n    var auth = lodash_get__WEBPACK_IMPORTED_MODULE_4___default()(state, 'auth', null);\n\n    if (auth) {\n      // Listen for auth state changes.\n      var unsubscribe = state.auth.onAuthStateChanged(onChange); // Unsubscribe to the listener when unmounting.\n\n      return function () {\n        return unsubscribe();\n      };\n    }\n  }, []);\n  return [state, setState];\n};\n\n_s(useFirebase, \"fI8RFJsxKHprmcqsJkzAhWcq3fo=\");\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (useFirebase);\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21tb24vdXNlRmlyZWJhc2UuanN4P2YwOGMiXSwibmFtZXMiOlsibG9nIiwiTG9nZ2VyIiwibGFiZWwiLCJlbmFibGVkIiwiaW1wb3J0YW50IiwiY29uZmlnIiwiYXBpS2V5IiwiYXV0aERvbWFpbiIsImRhdGFiYXNlVVJMIiwicHJvamVjdElkIiwic3RvcmFnZUJ1Y2tldCIsIm1lc3NhZ2luZ1NlbmRlcklkIiwiYXBwSWQiLCJtZWFzdXJlbWVudElkIiwiaW5pdEZpcmViYXNlIiwic2hvdyIsImZpcmViYXNlIiwiYXBwcyIsImxlbmd0aCIsImluaXRpYWxpemVBcHAiLCJ1c2VGaXJlYmFzZSIsInVzZVN0YXRlIiwiZGIiLCJmaXJlc3RvcmUiLCJhdXRoIiwidXNlciIsImN1cnJlbnRVc2VyIiwic3RhdGUiLCJzZXRTdGF0ZSIsIm9uQ2hhbmdlIiwiZW1haWwiLCJ1c2VFZmZlY3QiLCJnZXQiLCJ1bnN1YnNjcmliZSIsIm9uQXV0aFN0YXRlQ2hhbmdlZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0NBQ0E7O0FBQ0E7QUFDQTtDQUVBOztDQUdBO0FBQ0E7QUFFQTtBQUNBOztBQUVBO0FBQ0EsSUFBTUEsR0FBRyxHQUFHLElBQUlDLCtDQUFKLENBQVc7QUFBRUMsT0FBSyxFQUFFLGFBQVQ7QUFBd0JDLFNBQU8sRUFBRSxJQUFqQztBQUF1Q0MsV0FBUyxFQUFFO0FBQWxELENBQVgsQ0FBWjtBQUVBLElBQU1DLE1BQU0sR0FBRztBQUNiQyxRQUFNLEVBQUUseUNBREs7QUFFYkMsWUFBVSxFQUFFLGlDQUZDO0FBR2JDLGFBQVcsRUFBRSx3Q0FIQTtBQUliQyxXQUFTLEVBQUUsaUJBSkU7QUFLYkMsZUFBYSxFQUFFLDZCQUxGO0FBTWJDLG1CQUFpQixFQUFFLGNBTk47QUFPYkMsT0FBSyxFQUFFLDJDQVBNO0FBUWJDLGVBQWEsRUFBRTtBQVJGLENBQWY7QUFVQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBeUNBLElBQU1DLFlBQVksR0FBRyxTQUFmQSxZQUFlLEdBQU07QUFDekJkLEtBQUcsQ0FBQ2UsSUFBSixDQUFTLGNBQVQ7O0FBQ0EsTUFBSSxDQUFDQyxtREFBUSxDQUFDQyxJQUFULENBQWNDLE1BQW5CLEVBQTJCO0FBQ3pCRix1REFBUSxDQUFDRyxhQUFULENBQXVCZCxNQUF2QjtBQUNEO0FBQ0YsQ0FMRDs7QUFNQVMsWUFBWTs7QUFFWixJQUFNTSxXQUFXLEdBQUcsU0FBZEEsV0FBYyxHQUFNO0FBQUE7O0FBQUEsa0JBQ0VDLHNEQUFRLENBQUMsWUFBTTtBQUN2QyxRQUFNQyxFQUFFLEdBQUdOLG1EQUFRLENBQUNPLFNBQVQsRUFBWDtBQUNBLFFBQU1DLElBQUksR0FBR1IsbURBQVEsQ0FBQ1EsSUFBVCxFQUFiO0FBQ0EsUUFBTUMsSUFBSSxHQUFHRCxJQUFJLENBQUNFLFdBQWxCO0FBRUEsV0FBTztBQUNMSixRQUFFLEVBQUZBLEVBREs7QUFFTEUsVUFBSSxFQUFKQSxJQUZLO0FBR0xDLFVBQUksRUFBSkE7QUFISyxLQUFQO0FBS0QsR0FWaUMsQ0FEVjtBQUFBLE1BQ2pCRSxLQURpQjtBQUFBLE1BQ1ZDLFFBRFU7O0FBYXhCLE1BQU1DLFFBQVEsR0FBRyxTQUFYQSxRQUFXLENBQUNKLElBQUQsRUFBVTtBQUN6QnpCLE9BQUcsQ0FBQ2UsSUFBSixDQUFTLFVBQVQsRUFBcUJVLElBQUksQ0FBQ0ssS0FBMUI7QUFDQUYsWUFBUSxDQUFDO0FBQUVILFVBQUksRUFBRUE7QUFBUixLQUFELENBQVI7QUFDRCxHQUhEOztBQUtBTSx5REFBUyxDQUFDLFlBQU07QUFDZCxRQUFNUCxJQUFJLEdBQUdRLGlEQUFHLENBQUNMLEtBQUQsRUFBUSxNQUFSLEVBQWdCLElBQWhCLENBQWhCOztBQUNBLFFBQUlILElBQUosRUFBVTtBQUNSO0FBQ0EsVUFBTVMsV0FBVyxHQUFHTixLQUFLLENBQUNILElBQU4sQ0FBV1Usa0JBQVgsQ0FBOEJMLFFBQTlCLENBQXBCLENBRlEsQ0FJUjs7QUFDQSxhQUFPO0FBQUEsZUFBTUksV0FBVyxFQUFqQjtBQUFBLE9BQVA7QUFDRDtBQUNGLEdBVFEsRUFTTixFQVRNLENBQVQ7QUFXQSxTQUFPLENBQUNOLEtBQUQsRUFBUUMsUUFBUixDQUFQO0FBQ0QsQ0E5QkQ7O0dBQU1SLFc7O0FBZ0NTQSwwRUFBZiIsImZpbGUiOiIuL2NvbW1vbi91c2VGaXJlYmFzZS5qc3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0Jztcbi8vIEZpcmViYXNlXG5pbXBvcnQgZmlyZWJhc2UgZnJvbSAnZmlyZWJhc2UvYXBwJztcbmltcG9ydCAnZmlyZWJhc2UvYXV0aCc7XG5pbXBvcnQgJ2ZpcmViYXNlL2ZpcmVzdG9yZSc7XG4vLyBMb2Rhc2hcbmltcG9ydCBnZXQgZnJvbSAnbG9kYXNoL2dldCc7XG5cbi8vIHVzZUdsb2JhbCBIb29rXG4vLyBpbXBvcnQgdXNlR2xvYmFsIGZyb20gJy4vaG9va3MvdXNlR2xvYmFsJztcblxuLy8gTXkgR2xvYmFsIFN0YXRlXG4vLyBpbXBvcnQgdXNlR2xvYmFsU3RhdGUgZnJvbSAnLi91c2VHbG9iYWxTdGF0ZSc7XG5cbmltcG9ydCBMb2dnZXIgZnJvbSAnLi9Mb2dnZXInO1xuY29uc3QgbG9nID0gbmV3IExvZ2dlcih7IGxhYmVsOiAnRmlyZWJhc2VBcGknLCBlbmFibGVkOiB0cnVlLCBpbXBvcnRhbnQ6IGZhbHNlIH0pO1xuXG5jb25zdCBjb25maWcgPSB7XG4gIGFwaUtleTogJ0FJemFTeUQ1cDF2SUQ1MDJFWFZqZkpURDNBc3J0Nml0aXl6dUpTMCcsXG4gIGF1dGhEb21haW46ICdtZXVjYXJkYXBpby1jb20uZmlyZWJhc2VhcHAuY29tJyxcbiAgZGF0YWJhc2VVUkw6ICdodHRwczovL21ldWNhcmRhcGlvLWNvbS5maXJlYmFzZWlvLmNvbScsXG4gIHByb2plY3RJZDogJ21ldWNhcmRhcGlvLWNvbScsXG4gIHN0b3JhZ2VCdWNrZXQ6ICdtZXVjYXJkYXBpby1jb20uYXBwc3BvdC5jb20nLFxuICBtZXNzYWdpbmdTZW5kZXJJZDogJzIyNTI0Njg0Nzk5MCcsXG4gIGFwcElkOiAnMToyMjUyNDY4NDc5OTA6d2ViOjkxNGE0Y2MzOTYxMWFjMDk3YTlkZDcnLFxuICBtZWFzdXJlbWVudElkOiAnRy1KNjZEREwyQlQwJyxcbn07XG4vKlxuY29uc3QgaW5pdGlhbFN0YXRlID0gKCkgPT4ge1xuICBpZiAoIWFwcC5hcHBzLmxlbmd0aCkge1xuICAgIGFwcC5pbml0aWFsaXplQXBwKGNvbmZpZyk7XG4gIH1cbiAgY29uc3QgZGIgPSBhcHAuZmlyZXN0b3JlKCk7XG4gIGNvbnN0IGF1dGggPSBhcHAuYXV0aCgpO1xuICBzZXRBdXRoTGlzdGVuZXIoYXV0aCk7XG5cbiAgcmV0dXJuIHtcbiAgICBhdXRoLFxuICAgIGRiLFxuICB9O1xufTtcblxuY29uc3Qgc2V0QXV0aExpc3RlbmVyID0gKGF1dGgpID0+IHtcbiAgLy8gY29uc3QgW2dsb2JhbFN0YXRlLCBnbG9iYWxBY3Rpb25zXSA9IHVzZUdsb2JhbFN0YXRlKCk7XG4gIGF1dGgub25BdXRoU3RhdGVDaGFuZ2VkKCh1c2VyKSA9PiB7XG4gICAgaWYgKHVzZXIpIHtcbiAgICAgIC8vIFVzZXIgaXMgc2lnbmVkIGluLlxuICAgICAgbG9nLnNob3coJ29uQXV0aFN0YXRlQ2hhbmdlZCcsIHVzZXIuZW1haWwpO1xuICAgICAgYWN0aW9ucy5zZXRVc2VyKHVzZXIpO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyBObyB1c2VyIGlzIHNpZ25lZCBpbi5cbiAgICAgIGxvZy5zaG93KCdvbkF1dGhTdGF0ZUNoYW5nZWQnLCAnTm8gdXNlcicpO1xuICAgIH1cbiAgfSk7XG59O1xuXG5jb25zdCBhY3Rpb25zID0ge1xuICBhY3Rpb25UZXN0OiAoc3RvcmUsIGl0ZW0pID0+IHtcbiAgICBsb2cuc2hvdygnYWN0aW9uVGVzdCcsIHN0b3JlLCBpdGVtKTtcbiAgfSxcbiAgc2V0VXNlcjogKHN0b3JlLCB1c2VyKSA9PiB7XG4gICAgbG9nLnNob3coJ3NldFVzZXInLCBzdG9yZSwgdXNlcik7XG4gICAgc3RvcmUuc2V0U3RhdGUoeyB1c2VyOiB1c2VyIH0pO1xuICB9LFxufTtcblxuY29uc3QgdXNlRmlyZWJhc2UgPSB1c2VHbG9iYWwoUmVhY3QsIGluaXRpYWxTdGF0ZSwgYWN0aW9ucyk7XG4qL1xuY29uc3QgaW5pdEZpcmViYXNlID0gKCkgPT4ge1xuICBsb2cuc2hvdygnaW5pdEZpcmViYXNlJyk7XG4gIGlmICghZmlyZWJhc2UuYXBwcy5sZW5ndGgpIHtcbiAgICBmaXJlYmFzZS5pbml0aWFsaXplQXBwKGNvbmZpZyk7XG4gIH1cbn07XG5pbml0RmlyZWJhc2UoKTtcblxuY29uc3QgdXNlRmlyZWJhc2UgPSAoKSA9PiB7XG4gIGNvbnN0IFtzdGF0ZSwgc2V0U3RhdGVdID0gdXNlU3RhdGUoKCkgPT4ge1xuICAgIGNvbnN0IGRiID0gZmlyZWJhc2UuZmlyZXN0b3JlKCk7XG4gICAgY29uc3QgYXV0aCA9IGZpcmViYXNlLmF1dGgoKTtcbiAgICBjb25zdCB1c2VyID0gYXV0aC5jdXJyZW50VXNlcjtcblxuICAgIHJldHVybiB7XG4gICAgICBkYixcbiAgICAgIGF1dGgsXG4gICAgICB1c2VyLFxuICAgIH07XG4gIH0pO1xuXG4gIGNvbnN0IG9uQ2hhbmdlID0gKHVzZXIpID0+IHtcbiAgICBsb2cuc2hvdygnb25DaGFuZ2UnLCB1c2VyLmVtYWlsKTtcbiAgICBzZXRTdGF0ZSh7IHVzZXI6IHVzZXIgfSk7XG4gIH07XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBhdXRoID0gZ2V0KHN0YXRlLCAnYXV0aCcsIG51bGwpO1xuICAgIGlmIChhdXRoKSB7XG4gICAgICAvLyBMaXN0ZW4gZm9yIGF1dGggc3RhdGUgY2hhbmdlcy5cbiAgICAgIGNvbnN0IHVuc3Vic2NyaWJlID0gc3RhdGUuYXV0aC5vbkF1dGhTdGF0ZUNoYW5nZWQob25DaGFuZ2UpO1xuXG4gICAgICAvLyBVbnN1YnNjcmliZSB0byB0aGUgbGlzdGVuZXIgd2hlbiB1bm1vdW50aW5nLlxuICAgICAgcmV0dXJuICgpID0+IHVuc3Vic2NyaWJlKCk7XG4gICAgfVxuICB9LCBbXSk7XG5cbiAgcmV0dXJuIFtzdGF0ZSwgc2V0U3RhdGVdO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgdXNlRmlyZWJhc2U7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./common/useFirebase.jsx\n");

/***/ })

})