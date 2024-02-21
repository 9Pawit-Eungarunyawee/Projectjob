"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/buy/add",{

/***/ "./src/firebase/addBuy.js":
/*!********************************!*\
  !*** ./src/firebase/addBuy.js ***!
  \********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ addBuy; }\n/* harmony export */ });\n/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./config */ \"./src/firebase/config.js\");\n/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! firebase/firestore */ \"./node_modules/firebase/firestore/dist/esm/index.esm.js\");\n\n\nconst db = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.getFirestore)(_config__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\nasync function addBuy(collectionName, data) {\n    let result = null;\n    let error = null;\n    try {\n        // เพิ่มข้อมูลเข้าคอลเลคชันตาม collectionName ด้วยข้อมูลที่เตรียมไว้\n        const productData = {\n            name: data.name,\n            createAt: firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.Timestamp.fromDate(new Date(data.createAt)),\n            products: data.products.map((product)=>({\n                    amount: product.amount\n                })),\n            discount: discount,\n            shippingCost: shippingCost,\n            user_id: data.user_id\n        };\n        result = await (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.addDoc)((0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.collection)(db, collectionName), productData);\n        console.log(\"สร้างรายการซื้อสำเร็จ\", result);\n    } catch (e) {\n        error = e;\n        console.error(\"เกิดข้อผิดพลาดในการสร้างรายการซื้อ:\", error);\n    }\n    return {\n        result,\n        error\n    };\n}\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvZmlyZWJhc2UvYWRkQnV5LmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUFvQztBQUM2QztBQUVqRixNQUFNSyxLQUFLSixnRUFBWUEsQ0FBQ0QsK0NBQVlBO0FBRXJCLGVBQWVNLE9BQU9DLGNBQWMsRUFBRUMsSUFBSTtJQUN2RCxJQUFJQyxTQUFTO0lBQ2IsSUFBSUMsUUFBUTtJQUVaLElBQUk7UUFDRixvRUFBb0U7UUFFcEUsTUFBTUMsY0FBYztZQUNsQkMsTUFBTUosS0FBS0ksSUFBSTtZQUNmQyxVQUFXVCx5REFBU0EsQ0FBQ1UsUUFBUSxDQUFDLElBQUlDLEtBQUtQLEtBQUtLLFFBQVE7WUFDcERHLFVBQVVSLEtBQUtRLFFBQVEsQ0FBQ0MsR0FBRyxDQUFDLENBQUNDLFVBQVc7b0JBQUNDLFFBQU9ELFFBQVFDLE1BQU07Z0JBQUM7WUFDL0RDLFVBQVVBO1lBQ1ZDLGNBQWNBO1lBQ2RDLFNBQVNkLEtBQUtjLE9BQU87UUFDdkI7UUFFQWIsU0FBUyxNQUFNTiwwREFBTUEsQ0FBQ0QsOERBQVVBLENBQUNHLElBQUlFLGlCQUFpQkk7UUFFdERZLFFBQVFDLEdBQUcsQ0FBQyx5QkFBeUJmO0lBQ3ZDLEVBQUUsT0FBT2dCLEdBQUc7UUFDVmYsUUFBUWU7UUFDUkYsUUFBUWIsS0FBSyxDQUFDLHVDQUF1Q0E7SUFDdkQ7SUFFQSxPQUFPO1FBQUVEO1FBQVFDO0lBQU07QUFDekIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2ZpcmViYXNlL2FkZEJ1eS5qcz9jNjQ3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBmaXJlYmFzZV9hcHAgZnJvbSBcIi4vY29uZmlnXCI7XHJcbmltcG9ydCB7IGdldEZpcmVzdG9yZSwgY29sbGVjdGlvbiwgYWRkRG9jLCBUaW1lc3RhbXAgfSBmcm9tIFwiZmlyZWJhc2UvZmlyZXN0b3JlXCI7XHJcblxyXG5jb25zdCBkYiA9IGdldEZpcmVzdG9yZShmaXJlYmFzZV9hcHApO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gYWRkQnV5KGNvbGxlY3Rpb25OYW1lLCBkYXRhKSB7XHJcbiAgbGV0IHJlc3VsdCA9IG51bGw7XHJcbiAgbGV0IGVycm9yID0gbnVsbDtcclxuXHJcbiAgdHJ5IHtcclxuICAgIC8vIOC5gOC4nuC4tOC5iOC4oeC4guC5ieC4reC4oeC4ueC4peC5gOC4guC5ieC4suC4hOC4reC4peC5gOC4peC4hOC4iuC4seC4meC4leC4suC4oSBjb2xsZWN0aW9uTmFtZSDguJTguYnguKfguKLguILguYnguK3guKHguLnguKXguJfguLXguYjguYDguJXguKPguLXguKLguKHguYTguKfguYlcclxuICAgIFxyXG4gICAgY29uc3QgcHJvZHVjdERhdGEgPSB7XHJcbiAgICAgIG5hbWU6IGRhdGEubmFtZSxcclxuICAgICAgY3JlYXRlQXQ6ICBUaW1lc3RhbXAuZnJvbURhdGUobmV3IERhdGUoZGF0YS5jcmVhdGVBdCkpLFxyXG4gICAgICBwcm9kdWN0czogZGF0YS5wcm9kdWN0cy5tYXAoKHByb2R1Y3QpPT4oe2Ftb3VudDpwcm9kdWN0LmFtb3VudCx9KSksXHJcbiAgICAgIGRpc2NvdW50OiBkaXNjb3VudCxcclxuICAgICAgc2hpcHBpbmdDb3N0OiBzaGlwcGluZ0Nvc3QsXHJcbiAgICAgIHVzZXJfaWQ6IGRhdGEudXNlcl9pZCxcclxuICAgIH07XHJcblxyXG4gICAgcmVzdWx0ID0gYXdhaXQgYWRkRG9jKGNvbGxlY3Rpb24oZGIsIGNvbGxlY3Rpb25OYW1lKSwgcHJvZHVjdERhdGEpO1xyXG5cclxuICAgIGNvbnNvbGUubG9nKFwi4Liq4Lij4LmJ4Liy4LiH4Lij4Liy4Lii4LiB4Liy4Lij4LiL4Li34LmJ4Lit4Liq4Liz4LmA4Lij4LmH4LiIXCIsIHJlc3VsdCk7XHJcbiAgfSBjYXRjaCAoZSkge1xyXG4gICAgZXJyb3IgPSBlO1xyXG4gICAgY29uc29sZS5lcnJvcihcIuC5gOC4geC4tOC4lOC4guC5ieC4reC4nOC4tOC4lOC4nuC4peC4suC4lOC5g+C4meC4geC4suC4o+C4quC4o+C5ieC4suC4h+C4o+C4suC4ouC4geC4suC4o+C4i+C4t+C5ieC4rTpcIiwgZXJyb3IpO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIHsgcmVzdWx0LCBlcnJvciB9O1xyXG59XHJcbiJdLCJuYW1lcyI6WyJmaXJlYmFzZV9hcHAiLCJnZXRGaXJlc3RvcmUiLCJjb2xsZWN0aW9uIiwiYWRkRG9jIiwiVGltZXN0YW1wIiwiZGIiLCJhZGRCdXkiLCJjb2xsZWN0aW9uTmFtZSIsImRhdGEiLCJyZXN1bHQiLCJlcnJvciIsInByb2R1Y3REYXRhIiwibmFtZSIsImNyZWF0ZUF0IiwiZnJvbURhdGUiLCJEYXRlIiwicHJvZHVjdHMiLCJtYXAiLCJwcm9kdWN0IiwiYW1vdW50IiwiZGlzY291bnQiLCJzaGlwcGluZ0Nvc3QiLCJ1c2VyX2lkIiwiY29uc29sZSIsImxvZyIsImUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/firebase/addBuy.js\n"));

/***/ })

});