webpackHotUpdate_N_E("pages/_app",{

/***/ "./src/sagas/categories.js":
/*!*********************************!*\
  !*** ./src/sagas/categories.js ***!
  \*********************************/
/*! exports provided: getCategories, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCategories", function() { return getCategories; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return CategoriesSaga; });
/* harmony import */ var D_CY_Company_FileProject_NextJS_Project_NextJS_3_nextjss_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var D_CY_Company_FileProject_NextJS_Project_NextJS_3_nextjss_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(D_CY_Company_FileProject_NextJS_Project_NextJS_3_nextjss_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-saga/effects */ "./node_modules/redux-saga/dist/redux-saga-effects-npm-proxy.esm.js");
/* harmony import */ var _utils_request__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/request */ "./src/utils/request.js");
/* harmony import */ var _actions_categories__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../actions/categories */ "./src/actions/categories.js");
/* harmony import */ var _contans_categories__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../contans/categories */ "./src/contans/categories.js");


var _marked = /*#__PURE__*/D_CY_Company_FileProject_NextJS_Project_NextJS_3_nextjss_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(getCategories),
    _marked2 = /*#__PURE__*/D_CY_Company_FileProject_NextJS_Project_NextJS_3_nextjss_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(CategoriesSaga);





function getCategories(action) {
  var url, response;
  return D_CY_Company_FileProject_NextJS_Project_NextJS_3_nextjss_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function getCategories$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          url = "categories/get?id_website=4&active=1";
          _context.prev = 1;
          _context.next = 4;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["call"])(_utils_request__WEBPACK_IMPORTED_MODULE_2__["default"], url);

        case 4:
          response = _context.sent;
          _context.next = 7;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])(Object(_actions_categories__WEBPACK_IMPORTED_MODULE_3__["getListCategoriesSuccess"])(response));

        case 7:
          _context.next = 13;
          break;

        case 9:
          _context.prev = 9;
          _context.t0 = _context["catch"](1);
          _context.next = 13;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])(Object(_actions_categories__WEBPACK_IMPORTED_MODULE_3__["getListCategoriesError"])(_context.t0.message));

        case 13:
        case "end":
          return _context.stop();
      }
    }
  }, _marked, null, [[1, 9]]);
}
function CategoriesSaga() {
  return D_CY_Company_FileProject_NextJS_Project_NextJS_3_nextjss_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function CategoriesSaga$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.t0 = redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["all"];
          _context2.next = 3;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["takeLatest"])(_contans_categories__WEBPACK_IMPORTED_MODULE_4__["GET_LIST_CATEGORIES"], _actions_categories__WEBPACK_IMPORTED_MODULE_3__["getListCategories"]);

        case 3:
          _context2.t1 = _context2.sent;
          _context2.t2 = [_context2.t1];
          _context2.next = 7;
          return (0, _context2.t0)(_context2.t2);

        case 7:
        case "end":
          return _context2.stop();
      }
    }
  }, _marked2);
}
_c = CategoriesSaga;

var _c;

$RefreshReg$(_c, "CategoriesSaga");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3NhZ2FzL2NhdGVnb3JpZXMuanMiXSwibmFtZXMiOlsiZ2V0Q2F0ZWdvcmllcyIsIkNhdGVnb3JpZXNTYWdhIiwiYWN0aW9uIiwidXJsIiwiY2FsbCIsIlJlcXVlc3QiLCJyZXNwb25zZSIsInB1dCIsImdldExpc3RDYXRlZ29yaWVzU3VjY2VzcyIsImdldExpc3RDYXRlZ29yaWVzRXJyb3IiLCJtZXNzYWdlIiwiYWxsIiwidGFrZUxhdGVzdCIsIkdFVF9MSVNUX0NBVEVHT1JJRVMiLCJnZXRMaXN0Q2F0ZWdvcmllcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O3VLQVFpQkEsYTt3S0FVUUMsYzs7QUFsQnpCO0FBRUE7QUFFQTtBQUVBO0FBRU8sU0FBVUQsYUFBVixDQUF3QkUsTUFBeEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0dDLGFBREg7QUFBQTtBQUFBO0FBR2tCLGlCQUFNQywrREFBSSxDQUFDQyxzREFBRCxFQUFVRixHQUFWLENBQVY7O0FBSGxCO0FBR09HLGtCQUhQO0FBQUE7QUFJQyxpQkFBTUMsOERBQUcsQ0FBQ0Msb0ZBQXdCLENBQUNGLFFBQUQsQ0FBekIsQ0FBVDs7QUFKRDtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFNQyxpQkFBTUMsOERBQUcsQ0FBQ0Usa0ZBQXNCLENBQUMsWUFBTUMsT0FBUCxDQUF2QixDQUFUOztBQU5EO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBVVEsU0FBVVQsY0FBVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEseUJBQ0xVLHNEQURLO0FBQUE7QUFFUCxpQkFBTUMscUVBQVUsQ0FBQ0MsdUVBQUQsRUFBc0JDLHFFQUF0QixDQUFoQjs7QUFGTztBQUFBO0FBQUE7QUFBQTtBQUNYOztBQURXO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0tBQVViLGMiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvX2FwcC4xY2Q5ODI3OTBkZWRlMzgxMjY2Yy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgcHV0LCB0YWtlTGF0ZXN0LCBhbGwsIGNhbGwgfSBmcm9tIFwicmVkdXgtc2FnYS9lZmZlY3RzXCI7XHJcblxyXG5pbXBvcnQgUmVxdWVzdCBmcm9tIFwiLi4vdXRpbHMvcmVxdWVzdFwiO1xyXG5cclxuaW1wb3J0IHtnZXRMaXN0Q2F0ZWdvcmllc1N1Y2Nlc3MsIGdldExpc3RDYXRlZ29yaWVzRXJyb3IsIGdldExpc3RDYXRlZ29yaWVzfSBmcm9tIFwiLi4vYWN0aW9ucy9jYXRlZ29yaWVzXCI7XHJcblxyXG5pbXBvcnQgeyBHRVRfTElTVF9DQVRFR09SSUVTIH0gZnJvbSBcIi4uL2NvbnRhbnMvY2F0ZWdvcmllc1wiO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uKiBnZXRDYXRlZ29yaWVzKGFjdGlvbikge1xyXG4gICAgY29uc3QgdXJsID0gYGNhdGVnb3JpZXMvZ2V0P2lkX3dlYnNpdGU9NCZhY3RpdmU9MWA7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0geWllbGQgY2FsbChSZXF1ZXN0LCB1cmwpO1xyXG4gICAgICAgIHlpZWxkIHB1dChnZXRMaXN0Q2F0ZWdvcmllc1N1Y2Nlc3MocmVzcG9uc2UpKTtcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgeWllbGQgcHV0KGdldExpc3RDYXRlZ29yaWVzRXJyb3IoZXJyb3IubWVzc2FnZSkpO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiogQ2F0ZWdvcmllc1NhZ2EoKSB7XHJcbiAgICB5aWVsZCBhbGwoW1xyXG4gICAgICAgIHlpZWxkIHRha2VMYXRlc3QoR0VUX0xJU1RfQ0FURUdPUklFUywgZ2V0TGlzdENhdGVnb3JpZXMpLFxyXG4gICAgXSk7XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==