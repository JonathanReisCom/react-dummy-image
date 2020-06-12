webpackHotUpdate("static/development/pages/other.js",{

/***/ "./common/useFirebase.jsx":
/*!********************************!*\
  !*** ./common/useFirebase.jsx ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! firebase/app */ \"./node_modules/firebase/app/dist/index.cjs.js\");\n/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(firebase_app__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! firebase/auth */ \"./node_modules/firebase/auth/dist/index.esm.js\");\n/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! firebase/firestore */ \"./node_modules/firebase/firestore/dist/index.esm.js\");\n/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! lodash/get */ \"./node_modules/lodash/get.js\");\n/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(lodash_get__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _Logger__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Logger */ \"./common/Logger.jsx\");\n\n\n\nvar _s = $RefreshSig$();\n\n // Firebase\n\n\n\n // Lodash\n\n\n\nvar log = new _Logger__WEBPACK_IMPORTED_MODULE_7__[\"default\"]({\n  label: 'FirebaseApi',\n  enabled: true,\n  important: false\n});\nvar config = {\n  apiKey: 'AIzaSyD5p1vID502EXVjfJTD3Asrt6itiyzuJS0',\n  authDomain: 'meucardapio-com.firebaseapp.com',\n  databaseURL: 'https://meucardapio-com.firebaseio.com',\n  projectId: 'meucardapio-com',\n  storageBucket: 'meucardapio-com.appspot.com',\n  messagingSenderId: '225246847990',\n  appId: '1:225246847990:web:914a4cc39611ac097a9dd7',\n  measurementId: 'G-J66DDL2BT0'\n};\n\nvar initFirebase = function initFirebase() {\n  log.show('initFirebase');\n\n  if (!firebase_app__WEBPACK_IMPORTED_MODULE_3___default.a.apps.length) {\n    firebase_app__WEBPACK_IMPORTED_MODULE_3___default.a.initializeApp(config);\n  }\n};\n\ninitFirebase();\n\nvar useFirebase = function useFirebase() {\n  _s();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(function () {\n    var db = firebase_app__WEBPACK_IMPORTED_MODULE_3___default.a.firestore();\n    var auth = firebase_app__WEBPACK_IMPORTED_MODULE_3___default.a.auth();\n    var user = auth.currentUser;\n    return {\n      db: db,\n      auth: auth,\n      user: user\n    };\n  }),\n      state = _useState[0],\n      setState = _useState[1];\n\n  var onChange = function onChange(user) {\n    log.show('onChange', user.email);\n    setState({\n      user: user\n    });\n  };\n\n  Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useEffect\"])(function () {\n    var auth = lodash_get__WEBPACK_IMPORTED_MODULE_6___default()(state, 'auth', null);\n\n    if (auth) {\n      // Listen for auth state changes.\n      var unsubscribe = state.auth.onAuthStateChanged(onChange); // Unsubscribe to the listener when unmounting.\n\n      return function () {\n        return unsubscribe();\n      };\n    }\n  }, []);\n\n  var fetchDataSample = /*#__PURE__*/function () {\n    var _ref = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {\n      var result;\n      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {\n        while (1) {\n          switch (_context.prev = _context.next) {\n            case 0:\n              log.show('fetchDataSample');\n              _context.next = 3;\n              return new Promise(function (resolve, reject) {\n                var db = lodash_get__WEBPACK_IMPORTED_MODULE_6___default()(state, 'db', null);\n                db.collection('user').doc('jonathan.reis@gmail.com').get().then(function (doc) {\n                  log.show('fetchDataSample then', doc.data());\n                  resolve(doc.data());\n                })[\"catch\"](function (error) {\n                  log.show('fetchDataSample catch', error);\n                  reject([{\n                    id: 'falha'\n                  }]);\n                });\n              });\n\n            case 3:\n              result = _context.sent;\n              return _context.abrupt(\"return\", result);\n\n            case 5:\n            case \"end\":\n              return _context.stop();\n          }\n        }\n      }, _callee);\n    }));\n\n    return function fetchDataSample() {\n      return _ref.apply(this, arguments);\n    };\n  }();\n\n  return [state, setState, {\n    fetchDataSample: fetchDataSample\n  }];\n};\n\n_s(useFirebase, \"fI8RFJsxKHprmcqsJkzAhWcq3fo=\");\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (useFirebase);\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21tb24vdXNlRmlyZWJhc2UuanN4P2YwOGMiXSwibmFtZXMiOlsibG9nIiwiTG9nZ2VyIiwibGFiZWwiLCJlbmFibGVkIiwiaW1wb3J0YW50IiwiY29uZmlnIiwiYXBpS2V5IiwiYXV0aERvbWFpbiIsImRhdGFiYXNlVVJMIiwicHJvamVjdElkIiwic3RvcmFnZUJ1Y2tldCIsIm1lc3NhZ2luZ1NlbmRlcklkIiwiYXBwSWQiLCJtZWFzdXJlbWVudElkIiwiaW5pdEZpcmViYXNlIiwic2hvdyIsImZpcmViYXNlIiwiYXBwcyIsImxlbmd0aCIsImluaXRpYWxpemVBcHAiLCJ1c2VGaXJlYmFzZSIsInVzZVN0YXRlIiwiZGIiLCJmaXJlc3RvcmUiLCJhdXRoIiwidXNlciIsImN1cnJlbnRVc2VyIiwic3RhdGUiLCJzZXRTdGF0ZSIsIm9uQ2hhbmdlIiwiZW1haWwiLCJ1c2VFZmZlY3QiLCJnZXQiLCJ1bnN1YnNjcmliZSIsIm9uQXV0aFN0YXRlQ2hhbmdlZCIsImZldGNoRGF0YVNhbXBsZSIsIlByb21pc2UiLCJyZXNvbHZlIiwicmVqZWN0IiwiY29sbGVjdGlvbiIsImRvYyIsInRoZW4iLCJkYXRhIiwiZXJyb3IiLCJpZCIsInJlc3VsdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0NBQ0E7O0FBQ0E7QUFDQTtDQUVBOztBQUNBO0FBRUE7QUFDQSxJQUFNQSxHQUFHLEdBQUcsSUFBSUMsK0NBQUosQ0FBVztBQUFFQyxPQUFLLEVBQUUsYUFBVDtBQUF3QkMsU0FBTyxFQUFFLElBQWpDO0FBQXVDQyxXQUFTLEVBQUU7QUFBbEQsQ0FBWCxDQUFaO0FBRUEsSUFBTUMsTUFBTSxHQUFHO0FBQ2JDLFFBQU0sRUFBRSx5Q0FESztBQUViQyxZQUFVLEVBQUUsaUNBRkM7QUFHYkMsYUFBVyxFQUFFLHdDQUhBO0FBSWJDLFdBQVMsRUFBRSxpQkFKRTtBQUtiQyxlQUFhLEVBQUUsNkJBTEY7QUFNYkMsbUJBQWlCLEVBQUUsY0FOTjtB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R0FBTWYsVzs7QUFvRFNBLDBFQUFmIiwiZmlsZSI6Ii4vY29tbW9uL3VzZUZpcmViYXNlLmpzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuLy8gRmlyZWJhc2VcbmltcG9ydCBmaXJlYmFzZSBmcm9tICdmaXJlYmFzZS9hcHAnO1xuaW1wb3J0ICdmaXJlYmFzZS9hdXRoJztcbmltcG9ydCAnZmlyZWJhc2UvZmlyZXN0b3JlJztcbi8vIExvZGFzaFxuaW1wb3J0IGdldCBmcm9tICdsb2Rhc2gvZ2V0JztcblxuaW1wb3J0IExvZ2dlciBmcm9tICcuL0xvZ2dlcic7XG5jb25zdCBsb2cgPSBuZXcgTG9nZ2VyKHsgbGFiZWw6ICdGaXJlYmFzZUFwaScsIGVuYWJsZWQ6IHRydWUsIGltcG9ydGFudDogZmFsc2UgfSk7XG5cbmNvbnN0IGNvbmZpZyA9IHtcbiAgYXBpS2V5OiAnQUl6YVN5RDVwMXZJRDUwMkVYVmpmSlREM0FzcnQ2aXRpeXp1SlMwJyxcbiAgYXV0aERvbWFpbjogJ21ldWNhcmRhcGlvLWNvbS5maXJlYmFzZWFwcC5jb20nLFxuICBkYXRhYmFzZVVSTDogJ2h0dHBzOi8vbWV1Y2FyZGFwaW8tY29tLmZpcmViYXNlaW8uY29tJyxcbiAgcHJvamVjdElkOiAnbWV1Y2FyZGFwaW8tY29tJyxcbiAgc3RvcmFnZUJ1Y2tldDogJ21ldWNhcmRhcGlvLWNvbS5hcHBzcG90LmNvbScsXG4gIG1lc3NhZ2luZ1NlbmRlcklkOiAnMjI1MjQ2ODQ3OTkwJyxcbiAgYXBwSWQ6ICcxOjIyNTI0Njg0Nzk5MDp3ZWI6OTE0YTRjYzM5NjExYWMwOTdhOWRkNycsXG4gIG1lYXN1cmVtZW50SWQ6ICdHLUo2NkRETDJCVDAnLFxufTtcblxuY29uc3QgaW5pdEZpcmViYXNlID0gKCkgPT4ge1xuICBsb2cuc2hvdygnaW5pdEZpcmViYXNlJyk7XG4gIGlmICghZmlyZWJhc2UuYXBwcy5sZW5ndGgpIHtcbiAgICBmaXJlYmFzZS5pbml0aWFsaXplQXBwKGNvbmZpZyk7XG4gIH1cbn07XG5pbml0RmlyZWJhc2UoKTtcblxuY29uc3QgdXNlRmlyZWJhc2UgPSAoKSA9PiB7XG4gIGNvbnN0IFtzdGF0ZSwgc2V0U3RhdGVdID0gdXNlU3RhdGUoKCkgPT4ge1xuICAgIGNvbnN0IGRiID0gZmlyZWJhc2UuZmlyZXN0b3JlKCk7XG4gICAgY29uc3QgYXV0aCA9IGZpcmViYXNlLmF1dGgoKTtcbiAgICBjb25zdCB1c2VyID0gYXV0aC5jdXJyZW50VXNlcjtcblxuICAgIHJldHVybiB7XG4gICAgICBkYixcbiAgICAgIGF1dGgsXG4gICAgICB1c2VyLFxuICAgIH07XG4gIH0pO1xuXG4gIGNvbnN0IG9uQ2hhbmdlID0gKHVzZXIpID0+IHtcbiAgICBsb2cuc2hvdygnb25DaGFuZ2UnLCB1c2VyLmVtYWlsKTtcbiAgICBzZXRTdGF0ZSh7IHVzZXI6IHVzZXIgfSk7XG4gIH07XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBhdXRoID0gZ2V0KHN0YXRlLCAnYXV0aCcsIG51bGwpO1xuICAgIGlmIChhdXRoKSB7XG4gICAgICAvLyBMaXN0ZW4gZm9yIGF1dGggc3RhdGUgY2hhbmdlcy5cbiAgICAgIGNvbnN0IHVuc3Vic2NyaWJlID0gc3RhdGUuYXV0aC5vbkF1dGhTdGF0ZUNoYW5nZWQob25DaGFuZ2UpO1xuXG4gICAgICAvLyBVbnN1YnNjcmliZSB0byB0aGUgbGlzdGVuZXIgd2hlbiB1bm1vdW50aW5nLlxuICAgICAgcmV0dXJuICgpID0+IHVuc3Vic2NyaWJlKCk7XG4gICAgfVxuICB9LCBbXSk7XG5cbiAgY29uc3QgZmV0Y2hEYXRhU2FtcGxlID0gYXN5bmMgKCkgPT4ge1xuICAgIGxvZy5zaG93KCdmZXRjaERhdGFTYW1wbGUnKTtcbiAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICBjb25zdCBkYiA9IGdldChzdGF0ZSwgJ2RiJywgbnVsbCk7XG4gICAgICBkYi5jb2xsZWN0aW9uKCd1c2VyJylcbiAgICAgICAgLmRvYygnam9uYXRoYW4ucmVpc0BnbWFpbC5jb20nKVxuICAgICAgICAuZ2V0KClcbiAgICAgICAgLnRoZW4oKGRvYykgPT4ge1xuICAgICAgICAgIGxvZy5zaG93KCdmZXRjaERhdGFTYW1wbGUgdGhlbicsIGRvYy5kYXRhKCkpO1xuICAgICAgICAgIHJlc29sdmUoZG9jLmRhdGEoKSk7XG4gICAgICAgIH0pXG4gICAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICAgICAgICBsb2cuc2hvdygnZmV0Y2hEYXRhU2FtcGxlIGNhdGNoJywgZXJyb3IpO1xuICAgICAgICAgIHJlamVjdChbeyBpZDogJ2ZhbGhhJyB9XSk7XG4gICAgICAgIH0pO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfTtcblxuICByZXR1cm4gW3N0YXRlLCBzZXRTdGF0ZSwgeyBmZXRjaERhdGFTYW1wbGUgfV07XG59O1xuXG5leHBvcnQgZGVmYXVsdCB1c2VGaXJlYmFzZTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./common/useFirebase.jsx\n");

/***/ })

})