"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/catalogadmin/editcatalog",{

/***/ "./src/firebase/addCatalog.js":
/*!************************************!*\
  !*** ./src/firebase/addCatalog.js ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ addCatalog; },\n/* harmony export */   softDeleteCatalog: function() { return /* binding */ softDeleteCatalog; }\n/* harmony export */ });\n/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./config */ \"./src/firebase/config.js\");\n/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! firebase/firestore */ \"./node_modules/firebase/firestore/dist/esm/index.esm.js\");\n\n\nconst db = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.getFirestore)(_config__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\nasync function addCatalog(collectionName, data) {\n    let result = null;\n    let error = null;\n    try {\n        const img = data.img ? data.img : \"\";\n        // เตรียมข้อมูลที่ต้องการเพิ่ม\n        const catalogData = {\n            name: data.name,\n            img: img,\n            detail: data.detail\n        };\n        // เพิ่มข้อมูลเข้าคอลเลคชันตาม collectionName ด้วยข้อมูลที่เตรียมไว้\n        result = await (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.addDoc)((0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.collection)(db, collectionName), catalogData);\n        console.log(\"เพิ่มข้อมูลสำเร็จ\", result);\n    } catch (e) {\n        error = e;\n        console.error(\"เกิดข้อผิดพลาดในการเพิ่มข้อมูล:\", error);\n    }\n    return {\n        result,\n        error\n    };\n}\nasync function softDeleteCatalog(colllection, id, user_id) {\n    let result = null;\n    let error = null;\n    try {\n        const userRef = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.doc)(db, \"users\", user_id);\n        const catalogData = {\n            delete: {\n                deleteAt: (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.serverTimestamp)(),\n                deleteBy: userRef\n            }\n        };\n        result = await (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.setDoc)((0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.doc)(db, colllection, id), catalogData, {\n            merge: true\n        });\n        console.log(\"แก้ไขสำเร็จ\", result);\n    } catch (e) {\n        error = e;\n        console.error(\"เกิดข้อผิดพลาดในการแก้ไขข้อมูล:\", error);\n    }\n    return {\n        result,\n        error\n    };\n}\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvZmlyZWJhc2UvYWRkQ2F0YWxvZy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQ29DO0FBQ2dFO0FBRXBHLE1BQU1PLEtBQUtOLGdFQUFZQSxDQUFDRCwrQ0FBWUE7QUFFckIsZUFBZVEsV0FBV0MsY0FBYyxFQUFFQyxJQUFJO0lBQzNELElBQUlDLFNBQVM7SUFDYixJQUFJQyxRQUFRO0lBR1osSUFBSTtRQUNGLE1BQU1DLE1BQU1ILEtBQUtHLEdBQUcsR0FBR0gsS0FBS0csR0FBRyxHQUFHO1FBRWxDLDhCQUE4QjtRQUM5QixNQUFNQyxjQUFjO1lBQ2xCQyxNQUFNTCxLQUFLSyxJQUFJO1lBQ2ZGLEtBQUtBO1lBQ0xHLFFBQU9OLEtBQUtNLE1BQU07UUFDcEI7UUFFQSxvRUFBb0U7UUFDcEVMLFNBQVMsTUFBTVAsMERBQU1BLENBQUNELDhEQUFVQSxDQUFDSSxJQUFJRSxpQkFBaUJLO1FBRXRERyxRQUFRQyxHQUFHLENBQUMscUJBQXFCUDtJQUNuQyxFQUFFLE9BQU9RLEdBQUc7UUFDVlAsUUFBUU87UUFDUkYsUUFBUUwsS0FBSyxDQUFDLG1DQUFtQ0E7SUFDbkQ7SUFFQSxPQUFPO1FBQUVEO1FBQVFDO0lBQU07QUFDekI7QUFDTyxlQUFlUSxrQkFBa0JDLFdBQVcsRUFBRUMsRUFBRSxFQUFFQyxPQUFPO0lBQzlELElBQUlaLFNBQVM7SUFDYixJQUFJQyxRQUFRO0lBRVosSUFBSTtRQUNGLE1BQU1ZLFVBQVV0Qix1REFBR0EsQ0FBQ0ssSUFBSSxTQUFTZ0I7UUFDakMsTUFBTVQsY0FBYztZQUNsQlcsUUFBUTtnQkFDTkMsVUFBVXBCLG1FQUFlQTtnQkFDekJxQixVQUFVSDtZQUNaO1FBQ0Y7UUFDQWIsU0FBUyxNQUFNTiwwREFBTUEsQ0FBQ0gsdURBQUdBLENBQUNLLElBQUljLGFBQWFDLEtBQUtSLGFBQWE7WUFDM0RjLE9BQU87UUFDVDtRQUNBWCxRQUFRQyxHQUFHLENBQUMsZUFBZVA7SUFDN0IsRUFBRSxPQUFPUSxHQUFHO1FBQ1ZQLFFBQVFPO1FBQ1JGLFFBQVFMLEtBQUssQ0FBQyxtQ0FBbUNBO0lBQ25EO0lBRUEsT0FBTztRQUFFRDtRQUFRQztJQUFNO0FBQ3pCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9maXJlYmFzZS9hZGRDYXRhbG9nLmpzPzYzODQiXSwic291cmNlc0NvbnRlbnQiOlsiXHJcbmltcG9ydCBmaXJlYmFzZV9hcHAgZnJvbSBcIi4vY29uZmlnXCI7XHJcbmltcG9ydCB7IGdldEZpcmVzdG9yZSwgZG9jLCBjb2xsZWN0aW9uLCBhZGREb2MsIHNldERvYywgc2VydmVyVGltZXN0YW1wIH0gZnJvbSBcImZpcmViYXNlL2ZpcmVzdG9yZVwiO1xyXG5cclxuY29uc3QgZGIgPSBnZXRGaXJlc3RvcmUoZmlyZWJhc2VfYXBwKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIGFkZENhdGFsb2coY29sbGVjdGlvbk5hbWUsIGRhdGEpIHtcclxuICBsZXQgcmVzdWx0ID0gbnVsbDtcclxuICBsZXQgZXJyb3IgPSBudWxsO1xyXG5cclxuXHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IGltZyA9IGRhdGEuaW1nID8gZGF0YS5pbWcgOiBcIlwiO1xyXG4gICBcclxuICAgIC8vIOC5gOC4leC4o+C4teC4ouC4oeC4guC5ieC4reC4oeC4ueC4peC4l+C4teC5iOC4leC5ieC4reC4h+C4geC4suC4o+C5gOC4nuC4tOC5iOC4oVxyXG4gICAgY29uc3QgY2F0YWxvZ0RhdGEgPSB7XHJcbiAgICAgIG5hbWU6IGRhdGEubmFtZSxcclxuICAgICAgaW1nOiBpbWcsXHJcbiAgICAgIGRldGFpbDpkYXRhLmRldGFpbFxyXG4gICAgfTtcclxuXHJcbiAgICAvLyDguYDguJ7guLTguYjguKHguILguYnguK3guKHguLnguKXguYDguILguYnguLLguITguK3guKXguYDguKXguITguIrguLHguJnguJXguLLguKEgY29sbGVjdGlvbk5hbWUg4LiU4LmJ4Lin4Lii4LiC4LmJ4Lit4Lih4Li54Lil4LiX4Li14LmI4LmA4LiV4Lij4Li14Lii4Lih4LmE4Lin4LmJXHJcbiAgICByZXN1bHQgPSBhd2FpdCBhZGREb2MoY29sbGVjdGlvbihkYiwgY29sbGVjdGlvbk5hbWUpLCBjYXRhbG9nRGF0YSk7XHJcblxyXG4gICAgY29uc29sZS5sb2coXCLguYDguJ7guLTguYjguKHguILguYnguK3guKHguLnguKXguKrguLPguYDguKPguYfguIhcIiwgcmVzdWx0KTtcclxuICB9IGNhdGNoIChlKSB7XHJcbiAgICBlcnJvciA9IGU7XHJcbiAgICBjb25zb2xlLmVycm9yKFwi4LmA4LiB4Li04LiU4LiC4LmJ4Lit4Lic4Li04LiU4Lie4Lil4Liy4LiU4LmD4LiZ4LiB4Liy4Lij4LmA4Lie4Li04LmI4Lih4LiC4LmJ4Lit4Lih4Li54LilOlwiLCBlcnJvcik7XHJcbiAgfVxyXG5cclxuICByZXR1cm4geyByZXN1bHQsIGVycm9yIH07XHJcbn1cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHNvZnREZWxldGVDYXRhbG9nKGNvbGxsZWN0aW9uLCBpZCwgdXNlcl9pZCkge1xyXG4gIGxldCByZXN1bHQgPSBudWxsO1xyXG4gIGxldCBlcnJvciA9IG51bGw7XHJcblxyXG4gIHRyeSB7XHJcbiAgICBjb25zdCB1c2VyUmVmID0gZG9jKGRiLCBcInVzZXJzXCIsIHVzZXJfaWQpO1xyXG4gICAgY29uc3QgY2F0YWxvZ0RhdGEgPSB7XHJcbiAgICAgIGRlbGV0ZToge1xyXG4gICAgICAgIGRlbGV0ZUF0OiBzZXJ2ZXJUaW1lc3RhbXAoKSxcclxuICAgICAgICBkZWxldGVCeTogdXNlclJlZixcclxuICAgICAgfSxcclxuICAgIH07XHJcbiAgICByZXN1bHQgPSBhd2FpdCBzZXREb2MoZG9jKGRiLCBjb2xsbGVjdGlvbiwgaWQpLCBjYXRhbG9nRGF0YSwge1xyXG4gICAgICBtZXJnZTogdHJ1ZSxcclxuICAgIH0pO1xyXG4gICAgY29uc29sZS5sb2coXCLguYHguIHguYnguYTguILguKrguLPguYDguKPguYfguIhcIiwgcmVzdWx0KTtcclxuICB9IGNhdGNoIChlKSB7XHJcbiAgICBlcnJvciA9IGU7XHJcbiAgICBjb25zb2xlLmVycm9yKFwi4LmA4LiB4Li04LiU4LiC4LmJ4Lit4Lic4Li04LiU4Lie4Lil4Liy4LiU4LmD4LiZ4LiB4Liy4Lij4LmB4LiB4LmJ4LmE4LiC4LiC4LmJ4Lit4Lih4Li54LilOlwiLCBlcnJvcik7XHJcbiAgfVxyXG5cclxuICByZXR1cm4geyByZXN1bHQsIGVycm9yIH07XHJcbn0iXSwibmFtZXMiOlsiZmlyZWJhc2VfYXBwIiwiZ2V0RmlyZXN0b3JlIiwiZG9jIiwiY29sbGVjdGlvbiIsImFkZERvYyIsInNldERvYyIsInNlcnZlclRpbWVzdGFtcCIsImRiIiwiYWRkQ2F0YWxvZyIsImNvbGxlY3Rpb25OYW1lIiwiZGF0YSIsInJlc3VsdCIsImVycm9yIiwiaW1nIiwiY2F0YWxvZ0RhdGEiLCJuYW1lIiwiZGV0YWlsIiwiY29uc29sZSIsImxvZyIsImUiLCJzb2Z0RGVsZXRlQ2F0YWxvZyIsImNvbGxsZWN0aW9uIiwiaWQiLCJ1c2VyX2lkIiwidXNlclJlZiIsImRlbGV0ZSIsImRlbGV0ZUF0IiwiZGVsZXRlQnkiLCJtZXJnZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/firebase/addCatalog.js\n"));

/***/ })

});