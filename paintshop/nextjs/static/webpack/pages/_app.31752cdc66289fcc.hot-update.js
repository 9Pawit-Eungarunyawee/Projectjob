"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./src/context/OrderContext.js":
/*!*************************************!*\
  !*** ./src/context/OrderContext.js ***!
  \*************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   OrderContext: function() { return /* binding */ OrderContext; },\n/* harmony export */   \"default\": function() { return /* binding */ OrderProvider; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _firebase_getData__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/firebase/getData */ \"./src/firebase/getData.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n\nvar _s = $RefreshSig$();\n\n\n\nconst OrderContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_2__.createContext)();\nfunction OrderProvider(param) {\n    let { children } = param;\n    _s();\n    const [orderData, setOrderData] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]);\n    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(true);\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        fetchOrderData();\n    }, []);\n    const fetchOrderData = async ()=>{\n        const collectionName = \"orders\";\n        const { result, error } = await (0,_firebase_getData__WEBPACK_IMPORTED_MODULE_1__.getCollection)(collectionName);\n        if (error) {\n            console.error(\"Error fetching document:\", error);\n        } else if (result) {\n            const Data = result.docs.map((doc)=>({\n                    id: doc.id,\n                    ...doc.data()\n                }));\n            // เรียงลำดับข้อมูลตามวันที่\n            const sortedData = Data.sort((a, b)=>{\n                return b.createAt.toMillis() - a.createAt.toMillis();\n            });\n            // ตั้งค่าข้อมูลใหม่ที่เรียงลำดับแล้ว\n            setOrderData(sortedData);\n            setLoading(false);\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(OrderContext.Provider, {\n        value: {\n            orderData,\n            setOrderData,\n            fetchOrderData\n        },\n        children: children\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\ASUS\\\\OneDrive\\\\Desktop\\\\Project\\\\paintshop\\\\src\\\\context\\\\OrderContext.js\",\n        lineNumber: 38,\n        columnNumber: 5\n    }, this);\n}\n_s(OrderProvider, \"y/PSgSmhKqlm0mXIMKQRN6JaAIs=\");\n_c = OrderProvider;\nvar _c;\n$RefreshReg$(_c, \"OrderProvider\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29udGV4dC9PcmRlckNvbnRleHQuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQW1EO0FBQ29CO0FBQ0E7QUFFaEUsTUFBTVEsNkJBQWVKLG9EQUFhQSxHQUFHO0FBRTdCLFNBQVNLLGNBQWMsS0FBWTtRQUFaLEVBQUVDLFFBQVEsRUFBRSxHQUFaOztJQUNwQyxNQUFNLENBQUNDLFdBQVdDLGFBQWEsR0FBR0wsK0NBQVFBLENBQUMsRUFBRTtJQUM3QyxNQUFNLENBQUNNLFNBQVNDLFdBQVcsR0FBR1AsK0NBQVFBLENBQUM7SUFFdkNELGdEQUFTQSxDQUFDO1FBQ1JTO0lBQ0YsR0FBRyxFQUFFO0lBRUwsTUFBTUEsaUJBQWlCO1FBQ3JCLE1BQU1DLGlCQUFpQjtRQUN2QixNQUFNLEVBQUVDLE1BQU0sRUFBRUMsS0FBSyxFQUFFLEdBQUcsTUFBTWxCLGdFQUFhQSxDQUFDZ0I7UUFDOUMsSUFBSUUsT0FBTztZQUNUQyxRQUFRRCxLQUFLLENBQUMsNEJBQTRCQTtRQUM1QyxPQUFPLElBQUlELFFBQVE7WUFDakIsTUFBTUcsT0FBT0gsT0FBT0ksSUFBSSxDQUNyQkMsR0FBRyxDQUFDLENBQUNDLE1BQVM7b0JBQ2JDLElBQUlELElBQUlDLEVBQUU7b0JBQ1YsR0FBR0QsSUFBSUUsSUFBSSxFQUFFO2dCQUNmO1lBRUYsNEJBQTRCO1lBQzVCLE1BQU1DLGFBQWFOLEtBQUtPLElBQUksQ0FBQyxDQUFDQyxHQUFHQztnQkFDL0IsT0FBT0EsRUFBRUMsUUFBUSxDQUFDQyxRQUFRLEtBQUtILEVBQUVFLFFBQVEsQ0FBQ0MsUUFBUTtZQUNwRDtZQUVBLHFDQUFxQztZQUNyQ25CLGFBQWFjO1lBQ2JaLFdBQVc7UUFDYjtJQUNGO0lBQ0EscUJBQ0UsOERBQUNOLGFBQWF3QixRQUFRO1FBQ3BCQyxPQUFPO1lBQUV0QjtZQUFXQztZQUFjRztRQUFlO2tCQW9CaERMOzs7Ozs7QUFHUDtHQXZEd0JEO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb250ZXh0L09yZGVyQ29udGV4dC5qcz8wZGI5Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGdldENvbGxlY3Rpb24gfSBmcm9tIFwiQC9maXJlYmFzZS9nZXREYXRhXCI7XHJcbmltcG9ydCB7IEJhY2tkcm9wLCBDaXJjdWxhclByb2dyZXNzLCBUeXBvZ3JhcGh5IH0gZnJvbSBcIkBtdWkvbWF0ZXJpYWxcIjtcclxuaW1wb3J0IHsgY3JlYXRlQ29udGV4dCwgdXNlQ29udGV4dCwgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IE9yZGVyQ29udGV4dCA9IGNyZWF0ZUNvbnRleHQoKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE9yZGVyUHJvdmlkZXIoeyBjaGlsZHJlbiB9KSB7XHJcbiAgY29uc3QgW29yZGVyRGF0YSwgc2V0T3JkZXJEYXRhXSA9IHVzZVN0YXRlKFtdKTtcclxuICBjb25zdCBbbG9hZGluZywgc2V0TG9hZGluZ10gPSB1c2VTdGF0ZSh0cnVlKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGZldGNoT3JkZXJEYXRhKCk7XHJcbiAgfSwgW10pO1xyXG5cclxuICBjb25zdCBmZXRjaE9yZGVyRGF0YSA9IGFzeW5jICgpID0+IHtcclxuICAgIGNvbnN0IGNvbGxlY3Rpb25OYW1lID0gXCJvcmRlcnNcIjtcclxuICAgIGNvbnN0IHsgcmVzdWx0LCBlcnJvciB9ID0gYXdhaXQgZ2V0Q29sbGVjdGlvbihjb2xsZWN0aW9uTmFtZSk7XHJcbiAgICBpZiAoZXJyb3IpIHtcclxuICAgICAgY29uc29sZS5lcnJvcihcIkVycm9yIGZldGNoaW5nIGRvY3VtZW50OlwiLCBlcnJvcik7XHJcbiAgICB9IGVsc2UgaWYgKHJlc3VsdCkge1xyXG4gICAgICBjb25zdCBEYXRhID0gcmVzdWx0LmRvY3NcclxuICAgICAgICAubWFwKChkb2MpID0+ICh7XHJcbiAgICAgICAgICBpZDogZG9jLmlkLFxyXG4gICAgICAgICAgLi4uZG9jLmRhdGEoKSxcclxuICAgICAgICB9KSk7XHJcblxyXG4gICAgICAvLyDguYDguKPguLXguKLguIfguKXguLPguJTguLHguJrguILguYnguK3guKHguLnguKXguJXguLLguKHguKfguLHguJnguJfguLXguYhcclxuICAgICAgY29uc3Qgc29ydGVkRGF0YSA9IERhdGEuc29ydCgoYSwgYikgPT4ge1xyXG4gICAgICAgIHJldHVybiBiLmNyZWF0ZUF0LnRvTWlsbGlzKCkgLSBhLmNyZWF0ZUF0LnRvTWlsbGlzKCk7XHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgLy8g4LiV4Lix4LmJ4LiH4LiE4LmI4Liy4LiC4LmJ4Lit4Lih4Li54Lil4LmD4Lir4Lih4LmI4LiX4Li14LmI4LmA4Lij4Li14Lii4LiH4Lil4Liz4LiU4Lix4Lia4LmB4Lil4LmJ4LinXHJcbiAgICAgIHNldE9yZGVyRGF0YShzb3J0ZWREYXRhKTtcclxuICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XHJcbiAgICB9XHJcbiAgfTtcclxuICByZXR1cm4gKFxyXG4gICAgPE9yZGVyQ29udGV4dC5Qcm92aWRlclxyXG4gICAgICB2YWx1ZT17eyBvcmRlckRhdGEsIHNldE9yZGVyRGF0YSwgZmV0Y2hPcmRlckRhdGEgfX1cclxuICAgID5cclxuICAgICAgey8qIHtsb2FkaW5nID8gKFxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICA8QmFja2Ryb3BcclxuICAgICAgICAgICAgc3g9e3tcclxuICAgICAgICAgICAgICBjb2xvcjogXCIjZmZmXCIsXHJcbiAgICAgICAgICAgICAgekluZGV4OiAodGhlbWUpID0+IHRoZW1lLnpJbmRleC5kcmF3ZXIgKyAxLFxyXG4gICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogXCIjMDE4Mjk0XCIsIC8vIOC4quC4teC4n+C5ieC4suC5g+C4qlxyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICBvcGVuPXt0cnVlfVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICA8Q2lyY3VsYXJQcm9ncmVzcyBjb2xvcj1cImluaGVyaXRcIiAvPlxyXG4gICAgICAgICAgICA8VHlwb2dyYXBoeSBzeD17eyBtOiAyIH19PuC4geC4s+C4peC4seC4h+C5guC4q+C4peC4lOC4quC4tOC4meC4hOC5ieC4si4uLjwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgIDwvQmFja2Ryb3A+XHJcbiAgICAgICAgXHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICkgOiAoXHJcbiAgICAgICAgY2hpbGRyZW5cclxuICAgICAgKX0gKi99XHJcbiAgICAgIHtjaGlsZHJlbn1cclxuICAgIDwvT3JkZXJDb250ZXh0LlByb3ZpZGVyPlxyXG4gICk7XHJcbn1cclxuIl0sIm5hbWVzIjpbImdldENvbGxlY3Rpb24iLCJCYWNrZHJvcCIsIkNpcmN1bGFyUHJvZ3Jlc3MiLCJUeXBvZ3JhcGh5IiwiY3JlYXRlQ29udGV4dCIsInVzZUNvbnRleHQiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIk9yZGVyQ29udGV4dCIsIk9yZGVyUHJvdmlkZXIiLCJjaGlsZHJlbiIsIm9yZGVyRGF0YSIsInNldE9yZGVyRGF0YSIsImxvYWRpbmciLCJzZXRMb2FkaW5nIiwiZmV0Y2hPcmRlckRhdGEiLCJjb2xsZWN0aW9uTmFtZSIsInJlc3VsdCIsImVycm9yIiwiY29uc29sZSIsIkRhdGEiLCJkb2NzIiwibWFwIiwiZG9jIiwiaWQiLCJkYXRhIiwic29ydGVkRGF0YSIsInNvcnQiLCJhIiwiYiIsImNyZWF0ZUF0IiwidG9NaWxsaXMiLCJQcm92aWRlciIsInZhbHVlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/context/OrderContext.js\n"));

/***/ })

});