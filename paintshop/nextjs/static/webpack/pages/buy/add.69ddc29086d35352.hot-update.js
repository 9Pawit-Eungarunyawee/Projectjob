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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ addBuy; }\n/* harmony export */ });\n/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./config */ \"./src/firebase/config.js\");\n/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! firebase/firestore */ \"./node_modules/firebase/firestore/dist/esm/index.esm.js\");\n\n\nconst db = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.getFirestore)(_config__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\nasync function addBuy(collectionName, data) {\n    let result = null;\n    let error = null;\n    try {\n        // เพิ่มข้อมูลเข้าคอลเลคชันตาม collectionName ด้วยข้อมูลที่เตรียมไว้\n        const productData = {\n            name: data.name,\n            createAt: FormDataEvent(),\n            products: data.products,\n            user_id: data.user_id\n        };\n        result = await (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.addDoc)((0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.collection)(db, collectionName), productData);\n        console.log(\"สร้างรายการซื้อสำเร็จ\", result);\n    } catch (e) {\n        error = e;\n        console.error(\"เกิดข้อผิดพลาดในการสร้างรายการซื้อ:\", error);\n    }\n    return {\n        result,\n        error\n    };\n}\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvZmlyZWJhc2UvYWRkQnV5LmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUFvQztBQUNrQztBQUV0RSxNQUFNSSxLQUFLSCxnRUFBWUEsQ0FBQ0QsK0NBQVlBO0FBRXJCLGVBQWVLLE9BQU9DLGNBQWMsRUFBRUMsSUFBSTtJQUN2RCxJQUFJQyxTQUFTO0lBQ2IsSUFBSUMsUUFBUTtJQUVaLElBQUk7UUFDRixvRUFBb0U7UUFFcEUsTUFBTUMsY0FBYztZQUNsQkMsTUFBTUosS0FBS0ksSUFBSTtZQUNmQyxVQUFXQztZQUNYQyxVQUFVUCxLQUFLTyxRQUFRO1lBQ3ZCQyxTQUFTUixLQUFLUSxPQUFPO1FBQ3ZCO1FBRUFQLFNBQVMsTUFBTUwsMERBQU1BLENBQUNELDhEQUFVQSxDQUFDRSxJQUFJRSxpQkFBaUJJO1FBRXRETSxRQUFRQyxHQUFHLENBQUMseUJBQXlCVDtJQUN2QyxFQUFFLE9BQU9VLEdBQUc7UUFDVlQsUUFBUVM7UUFDUkYsUUFBUVAsS0FBSyxDQUFDLHVDQUF1Q0E7SUFDdkQ7SUFFQSxPQUFPO1FBQUVEO1FBQVFDO0lBQU07QUFDekIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2ZpcmViYXNlL2FkZEJ1eS5qcz9jNjQ3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBmaXJlYmFzZV9hcHAgZnJvbSBcIi4vY29uZmlnXCI7XHJcbmltcG9ydCB7IGdldEZpcmVzdG9yZSwgY29sbGVjdGlvbiwgYWRkRG9jIH0gZnJvbSBcImZpcmViYXNlL2ZpcmVzdG9yZVwiO1xyXG5cclxuY29uc3QgZGIgPSBnZXRGaXJlc3RvcmUoZmlyZWJhc2VfYXBwKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIGFkZEJ1eShjb2xsZWN0aW9uTmFtZSwgZGF0YSkge1xyXG4gIGxldCByZXN1bHQgPSBudWxsO1xyXG4gIGxldCBlcnJvciA9IG51bGw7XHJcblxyXG4gIHRyeSB7XHJcbiAgICAvLyDguYDguJ7guLTguYjguKHguILguYnguK3guKHguLnguKXguYDguILguYnguLLguITguK3guKXguYDguKXguITguIrguLHguJnguJXguLLguKEgY29sbGVjdGlvbk5hbWUg4LiU4LmJ4Lin4Lii4LiC4LmJ4Lit4Lih4Li54Lil4LiX4Li14LmI4LmA4LiV4Lij4Li14Lii4Lih4LmE4Lin4LmJXHJcbiAgICBcclxuICAgIGNvbnN0IHByb2R1Y3REYXRhID0ge1xyXG4gICAgICBuYW1lOiBkYXRhLm5hbWUsXHJcbiAgICAgIGNyZWF0ZUF0OiAgRm9ybURhdGFFdmVudCgpLFxyXG4gICAgICBwcm9kdWN0czogZGF0YS5wcm9kdWN0cyxcclxuICAgICAgdXNlcl9pZDogZGF0YS51c2VyX2lkLFxyXG4gICAgfTtcclxuXHJcbiAgICByZXN1bHQgPSBhd2FpdCBhZGREb2MoY29sbGVjdGlvbihkYiwgY29sbGVjdGlvbk5hbWUpLCBwcm9kdWN0RGF0YSk7XHJcblxyXG4gICAgY29uc29sZS5sb2coXCLguKrguKPguYnguLLguIfguKPguLLguKLguIHguLLguKPguIvguLfguYnguK3guKrguLPguYDguKPguYfguIhcIiwgcmVzdWx0KTtcclxuICB9IGNhdGNoIChlKSB7XHJcbiAgICBlcnJvciA9IGU7XHJcbiAgICBjb25zb2xlLmVycm9yKFwi4LmA4LiB4Li04LiU4LiC4LmJ4Lit4Lic4Li04LiU4Lie4Lil4Liy4LiU4LmD4LiZ4LiB4Liy4Lij4Liq4Lij4LmJ4Liy4LiH4Lij4Liy4Lii4LiB4Liy4Lij4LiL4Li34LmJ4LitOlwiLCBlcnJvcik7XHJcbiAgfVxyXG5cclxuICByZXR1cm4geyByZXN1bHQsIGVycm9yIH07XHJcbn1cclxuIl0sIm5hbWVzIjpbImZpcmViYXNlX2FwcCIsImdldEZpcmVzdG9yZSIsImNvbGxlY3Rpb24iLCJhZGREb2MiLCJkYiIsImFkZEJ1eSIsImNvbGxlY3Rpb25OYW1lIiwiZGF0YSIsInJlc3VsdCIsImVycm9yIiwicHJvZHVjdERhdGEiLCJuYW1lIiwiY3JlYXRlQXQiLCJGb3JtRGF0YUV2ZW50IiwicHJvZHVjdHMiLCJ1c2VyX2lkIiwiY29uc29sZSIsImxvZyIsImUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/firebase/addBuy.js\n"));

/***/ })

});