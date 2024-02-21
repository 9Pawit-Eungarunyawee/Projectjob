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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ addBuy; }\n/* harmony export */ });\n/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./config */ \"./src/firebase/config.js\");\n/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! firebase/firestore */ \"./node_modules/firebase/firestore/dist/esm/index.esm.js\");\n\n\nconst db = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.getFirestore)(_config__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\nasync function addBuy(collectionName, data) {\n    let result = null;\n    let error = null;\n    try {\n        // เพิ่มข้อมูลเข้าคอลเลคชันตาม collectionName ด้วยข้อมูลที่เตรียมไว้\n        const productData = {\n            name: data.name,\n            createAt: firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.Timestamp.fromDate(new Date(data.createAt)),\n            products: data.products,\n            user_id: data.user_id\n        };\n        result = await (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.addDoc)((0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.collection)(db, collectionName), productData);\n        console.log(\"สร้างรายการซื้อสำเร็จ\", result);\n    } catch (e) {\n        error = e;\n        console.error(\"เกิดข้อผิดพลาดในการสร้างรายการซื้อ:\", error);\n    }\n    return {\n        result,\n        error\n    };\n}\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvZmlyZWJhc2UvYWRkQnV5LmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUFvQztBQUM2QztBQUVqRixNQUFNSyxLQUFLSixnRUFBWUEsQ0FBQ0QsK0NBQVlBO0FBRXJCLGVBQWVNLE9BQU9DLGNBQWMsRUFBRUMsSUFBSTtJQUN2RCxJQUFJQyxTQUFTO0lBQ2IsSUFBSUMsUUFBUTtJQUVaLElBQUk7UUFDRixvRUFBb0U7UUFFcEUsTUFBTUMsY0FBYztZQUNsQkMsTUFBTUosS0FBS0ksSUFBSTtZQUNmQyxVQUFXVCx5REFBU0EsQ0FBQ1UsUUFBUSxDQUFDLElBQUlDLEtBQUtQLEtBQUtLLFFBQVE7WUFDcERHLFVBQVVSLEtBQUtRLFFBQVE7WUFDdkJDLFNBQVNULEtBQUtTLE9BQU87UUFDdkI7UUFFQVIsU0FBUyxNQUFNTiwwREFBTUEsQ0FBQ0QsOERBQVVBLENBQUNHLElBQUlFLGlCQUFpQkk7UUFFdERPLFFBQVFDLEdBQUcsQ0FBQyx5QkFBeUJWO0lBQ3ZDLEVBQUUsT0FBT1csR0FBRztRQUNWVixRQUFRVTtRQUNSRixRQUFRUixLQUFLLENBQUMsdUNBQXVDQTtJQUN2RDtJQUVBLE9BQU87UUFBRUQ7UUFBUUM7SUFBTTtBQUN6QiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvZmlyZWJhc2UvYWRkQnV5LmpzP2M2NDciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGZpcmViYXNlX2FwcCBmcm9tIFwiLi9jb25maWdcIjtcclxuaW1wb3J0IHsgZ2V0RmlyZXN0b3JlLCBjb2xsZWN0aW9uLCBhZGREb2MsIFRpbWVzdGFtcCB9IGZyb20gXCJmaXJlYmFzZS9maXJlc3RvcmVcIjtcclxuXHJcbmNvbnN0IGRiID0gZ2V0RmlyZXN0b3JlKGZpcmViYXNlX2FwcCk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBhZGRCdXkoY29sbGVjdGlvbk5hbWUsIGRhdGEpIHtcclxuICBsZXQgcmVzdWx0ID0gbnVsbDtcclxuICBsZXQgZXJyb3IgPSBudWxsO1xyXG5cclxuICB0cnkge1xyXG4gICAgLy8g4LmA4Lie4Li04LmI4Lih4LiC4LmJ4Lit4Lih4Li54Lil4LmA4LiC4LmJ4Liy4LiE4Lit4Lil4LmA4Lil4LiE4LiK4Lix4LiZ4LiV4Liy4LihIGNvbGxlY3Rpb25OYW1lIOC4lOC5ieC4p+C4ouC4guC5ieC4reC4oeC4ueC4peC4l+C4teC5iOC5gOC4leC4o+C4teC4ouC4oeC5hOC4p+C5iVxyXG4gICAgXHJcbiAgICBjb25zdCBwcm9kdWN0RGF0YSA9IHtcclxuICAgICAgbmFtZTogZGF0YS5uYW1lLFxyXG4gICAgICBjcmVhdGVBdDogIFRpbWVzdGFtcC5mcm9tRGF0ZShuZXcgRGF0ZShkYXRhLmNyZWF0ZUF0KSksXHJcbiAgICAgIHByb2R1Y3RzOiBkYXRhLnByb2R1Y3RzLFxyXG4gICAgICB1c2VyX2lkOiBkYXRhLnVzZXJfaWQsXHJcbiAgICB9O1xyXG5cclxuICAgIHJlc3VsdCA9IGF3YWl0IGFkZERvYyhjb2xsZWN0aW9uKGRiLCBjb2xsZWN0aW9uTmFtZSksIHByb2R1Y3REYXRhKTtcclxuXHJcbiAgICBjb25zb2xlLmxvZyhcIuC4quC4o+C5ieC4suC4h+C4o+C4suC4ouC4geC4suC4o+C4i+C4t+C5ieC4reC4quC4s+C5gOC4o+C5h+C4iFwiLCByZXN1bHQpO1xyXG4gIH0gY2F0Y2ggKGUpIHtcclxuICAgIGVycm9yID0gZTtcclxuICAgIGNvbnNvbGUuZXJyb3IoXCLguYDguIHguLTguJTguILguYnguK3guJzguLTguJTguJ7guKXguLLguJTguYPguJnguIHguLLguKPguKrguKPguYnguLLguIfguKPguLLguKLguIHguLLguKPguIvguLfguYnguK06XCIsIGVycm9yKTtcclxuICB9XHJcblxyXG4gIHJldHVybiB7IHJlc3VsdCwgZXJyb3IgfTtcclxufVxyXG4iXSwibmFtZXMiOlsiZmlyZWJhc2VfYXBwIiwiZ2V0RmlyZXN0b3JlIiwiY29sbGVjdGlvbiIsImFkZERvYyIsIlRpbWVzdGFtcCIsImRiIiwiYWRkQnV5IiwiY29sbGVjdGlvbk5hbWUiLCJkYXRhIiwicmVzdWx0IiwiZXJyb3IiLCJwcm9kdWN0RGF0YSIsIm5hbWUiLCJjcmVhdGVBdCIsImZyb21EYXRlIiwiRGF0ZSIsInByb2R1Y3RzIiwidXNlcl9pZCIsImNvbnNvbGUiLCJsb2ciLCJlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/firebase/addBuy.js\n"));

/***/ })

});