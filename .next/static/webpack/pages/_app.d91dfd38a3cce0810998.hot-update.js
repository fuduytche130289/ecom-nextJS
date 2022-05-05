webpackHotUpdate_N_E("pages/_app",{

/***/ "./src/sagas/product.js":
/*!******************************!*\
  !*** ./src/sagas/product.js ***!
  \******************************/
/*! exports provided: getProduct, getDetail, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getProduct", function() { return getProduct; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDetail", function() { return getDetail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ProductSaga; });
/* harmony import */ var D_CY_Company_FileProject_NextJS_Project_NextJS_3_nextjss_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var D_CY_Company_FileProject_NextJS_Project_NextJS_3_nextjss_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(D_CY_Company_FileProject_NextJS_Project_NextJS_3_nextjss_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-saga/effects */ "./node_modules/redux-saga/dist/redux-saga-effects-npm-proxy.esm.js");
/* harmony import */ var _utils_request__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/request */ "./src/utils/request.js");
/* harmony import */ var _actions_product__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../actions/product */ "./src/actions/product.js");
/* harmony import */ var _contans_product__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../contans/product */ "./src/contans/product.js");


var _marked = /*#__PURE__*/D_CY_Company_FileProject_NextJS_Project_NextJS_3_nextjss_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(getProduct),
    _marked2 = /*#__PURE__*/D_CY_Company_FileProject_NextJS_Project_NextJS_3_nextjss_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(getDetail),
    _marked3 = /*#__PURE__*/D_CY_Company_FileProject_NextJS_Project_NextJS_3_nextjss_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(ProductSaga);





function getProduct(action) {
  var url, response;
  return D_CY_Company_FileProject_NextJS_Project_NextJS_3_nextjss_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function getProduct$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          url = "products/get?active=1&id_cat=2&id_website=4&highlight=1&feature=1";
          _context.prev = 1;
          _context.next = 4;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["call"])(_utils_request__WEBPACK_IMPORTED_MODULE_2__["default"], url);

        case 4:
          response = _context.sent;
          _context.next = 7;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])(Object(_actions_product__WEBPACK_IMPORTED_MODULE_3__["getProductSuccess"])(response));

        case 7:
          _context.next = 13;
          break;

        case 9:
          _context.prev = 9;
          _context.t0 = _context["catch"](1);
          _context.next = 13;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])(Object(_actions_product__WEBPACK_IMPORTED_MODULE_3__["getProductError"])(_context.t0.message));

        case 13:
        case "end":
          return _context.stop();
      }
    }
  }, _marked, null, [[1, 9]]);
}
function getDetail(action) {
  var url, response;
  return D_CY_Company_FileProject_NextJS_Project_NextJS_3_nextjss_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function getDetail$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          url = "/products/detail?alias=".concat(action.alias);
          _context2.prev = 1;
          _context2.next = 4;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["call"])(_utils_request__WEBPACK_IMPORTED_MODULE_2__["default"], url);

        case 4:
          response = _context2.sent;
          _context2.next = 7;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])(Object(_actions_product__WEBPACK_IMPORTED_MODULE_3__["getProductDetailSuccess"])(response.data));

        case 7:
          _context2.next = 13;
          break;

        case 9:
          _context2.prev = 9;
          _context2.t0 = _context2["catch"](1);
          _context2.next = 13;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])(Object(_actions_product__WEBPACK_IMPORTED_MODULE_3__["getProductDetailError"])(_context2.t0.message));

        case 13:
        case "end":
          return _context2.stop();
      }
    }
  }, _marked2, null, [[1, 9]]);
}
function ProductSaga() {
  return D_CY_Company_FileProject_NextJS_Project_NextJS_3_nextjss_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function ProductSaga$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          _context3.t0 = redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["all"];
          _context3.next = 3;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["takeLatest"])(_contans_product__WEBPACK_IMPORTED_MODULE_4__["GET_PRODUCT"], getProduct);

        case 3:
          _context3.t1 = _context3.sent;
          _context3.next = 6;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["takeLatest"])(_contans_product__WEBPACK_IMPORTED_MODULE_4__["GET_DETAIL"], getDetail);

        case 6:
          _context3.t2 = _context3.sent;
          _context3.t3 = [_context3.t1, _context3.t2];
          _context3.next = 10;
          return (0, _context3.t0)(_context3.t3);

        case 10:
        case "end":
          return _context3.stop();
      }
    }
  }, _marked3);
}
_c = ProductSaga;

var _c;

$RefreshReg$(_c, "ProductSaga");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3NhZ2FzL3Byb2R1Y3QuanMiXSwibmFtZXMiOlsiZ2V0UHJvZHVjdCIsImdldERldGFpbCIsIlByb2R1Y3RTYWdhIiwiYWN0aW9uIiwidXJsIiwiY2FsbCIsIlJlcXVlc3QiLCJyZXNwb25zZSIsInB1dCIsImdldFByb2R1Y3RTdWNjZXNzIiwiZ2V0UHJvZHVjdEVycm9yIiwibWVzc2FnZSIsImFsaWFzIiwiZ2V0UHJvZHVjdERldGFpbFN1Y2Nlc3MiLCJkYXRhIiwiZ2V0UHJvZHVjdERldGFpbEVycm9yIiwiYWxsIiwidGFrZUxhdGVzdCIsIkdFVF9QUk9EVUNUIiwiR0VUX0RFVEFJTCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozt1S0FhaUJBLFU7d0tBVUFDLFM7d0tBVVFDLFc7O0FBakN6QjtBQUVBO0FBRUE7QUFPQTtBQUVPLFNBQVVGLFVBQVYsQ0FBcUJHLE1BQXJCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNDQyxhQUREO0FBQUE7QUFBQTtBQUdjLGlCQUFNQywrREFBSSxDQUFDQyxzREFBRCxFQUFVRixHQUFWLENBQVY7O0FBSGQ7QUFHR0csa0JBSEg7QUFBQTtBQUlILGlCQUFNQyw4REFBRyxDQUFDQywwRUFBaUIsQ0FBQ0YsUUFBRCxDQUFsQixDQUFUOztBQUpHO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQU1ILGlCQUFNQyw4REFBRyxDQUFDRSx3RUFBZSxDQUFDLFlBQU1DLE9BQVAsQ0FBaEIsQ0FBVDs7QUFORztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVVBLFNBQVVWLFNBQVYsQ0FBb0JFLE1BQXBCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNDQyxhQURELG9DQUNpQ0QsTUFBTSxDQUFDUyxLQUR4QztBQUFBO0FBQUE7QUFHYyxpQkFBTVAsK0RBQUksQ0FBQ0Msc0RBQUQsRUFBVUYsR0FBVixDQUFWOztBQUhkO0FBR0dHLGtCQUhIO0FBQUE7QUFJSCxpQkFBTUMsOERBQUcsQ0FBQ0ssZ0ZBQXVCLENBQUNOLFFBQVEsQ0FBQ08sSUFBVixDQUF4QixDQUFUOztBQUpHO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQU1ILGlCQUFNTiw4REFBRyxDQUFDTyw4RUFBcUIsQ0FBQyxhQUFNSixPQUFQLENBQXRCLENBQVQ7O0FBTkc7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFVUSxTQUFVVCxXQUFWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx5QkFDUGMsc0RBRE87QUFBQTtBQUVYLGlCQUFNQyxxRUFBVSxDQUFDQyw0REFBRCxFQUFjbEIsVUFBZCxDQUFoQjs7QUFGVztBQUFBO0FBQUE7QUFHWCxpQkFBTWlCLHFFQUFVLENBQUNFLDJEQUFELEVBQWFsQixTQUFiLENBQWhCOztBQUhXO0FBQUE7QUFBQTtBQUFBO0FBQ2I7O0FBRGE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7S0FBVUMsVyIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9fYXBwLmQ5MWRmZDM4YTNjY2UwODEwOTk4LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBwdXQsIHRha2VMYXRlc3QsIGFsbCwgY2FsbCB9IGZyb20gXCJyZWR1eC1zYWdhL2VmZmVjdHNcIjtcclxuXHJcbmltcG9ydCBSZXF1ZXN0IGZyb20gXCIuLi91dGlscy9yZXF1ZXN0XCI7XHJcblxyXG5pbXBvcnQge1xyXG4gIGdldFByb2R1Y3RTdWNjZXNzLFxyXG4gIGdldFByb2R1Y3RFcnJvcixcclxuICBnZXRQcm9kdWN0RGV0YWlsU3VjY2VzcyxcclxuICBnZXRQcm9kdWN0RGV0YWlsRXJyb3IsXHJcbn0gZnJvbSBcIi4uL2FjdGlvbnMvcHJvZHVjdFwiO1xyXG5cclxuaW1wb3J0IHsgR0VUX1BST0RVQ1QsIEdFVF9ERVRBSUwgfSBmcm9tIFwiLi4vY29udGFucy9wcm9kdWN0XCI7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24qIGdldFByb2R1Y3QoYWN0aW9uKSB7XHJcbiAgY29uc3QgdXJsID0gYHByb2R1Y3RzL2dldD9hY3RpdmU9MSZpZF9jYXQ9MiZpZF93ZWJzaXRlPTQmaGlnaGxpZ2h0PTEmZmVhdHVyZT0xYDtcclxuICB0cnkge1xyXG4gICAgY29uc3QgcmVzcG9uc2UgPSB5aWVsZCBjYWxsKFJlcXVlc3QsIHVybCk7XHJcbiAgICB5aWVsZCBwdXQoZ2V0UHJvZHVjdFN1Y2Nlc3MocmVzcG9uc2UpKTtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgeWllbGQgcHV0KGdldFByb2R1Y3RFcnJvcihlcnJvci5tZXNzYWdlKSk7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24qIGdldERldGFpbChhY3Rpb24pIHtcclxuICBjb25zdCB1cmwgPSBgL3Byb2R1Y3RzL2RldGFpbD9hbGlhcz0ke2FjdGlvbi5hbGlhc31gO1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCByZXNwb25zZSA9IHlpZWxkIGNhbGwoUmVxdWVzdCwgdXJsKTtcclxuICAgIHlpZWxkIHB1dChnZXRQcm9kdWN0RGV0YWlsU3VjY2VzcyhyZXNwb25zZS5kYXRhKSk7XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIHlpZWxkIHB1dChnZXRQcm9kdWN0RGV0YWlsRXJyb3IoZXJyb3IubWVzc2FnZSkpO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24qIFByb2R1Y3RTYWdhKCkge1xyXG4gIHlpZWxkIGFsbChbXHJcbiAgICB5aWVsZCB0YWtlTGF0ZXN0KEdFVF9QUk9EVUNULCBnZXRQcm9kdWN0KSxcclxuICAgIHlpZWxkIHRha2VMYXRlc3QoR0VUX0RFVEFJTCwgZ2V0RGV0YWlsKSxcclxuICBdKTtcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9