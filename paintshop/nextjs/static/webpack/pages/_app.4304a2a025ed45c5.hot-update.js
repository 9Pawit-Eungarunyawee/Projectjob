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

/***/ "./src/context/CatalogContext.js":
/*!***************************************!*\
  !*** ./src/context/CatalogContext.js ***!
  \***************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   CatalogContext: function() { return /* binding */ CatalogContext; },\n/* harmony export */   \"default\": function() { return /* binding */ CatalogProvider; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _firebase_getData__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/firebase/getData */ \"./src/firebase/getData.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n\nvar _s = $RefreshSig$();\n\n\n\nconst CatalogContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_2__.createContext)();\nfunction CatalogProvider(param) {\n    let { children } = param;\n    _s();\n    const [catalogData, setCatalogData] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]);\n    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(true);\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        fetchcatalogData();\n    }, []);\n    const fetchcatalogData = async ()=>{\n        const collectionName = \"catalog\";\n        const { result, error } = await (0,_firebase_getData__WEBPACK_IMPORTED_MODULE_1__.getCollection)(collectionName);\n        if (error) {\n            console.error(\"Error fetching document:\", error);\n        } else if (result) {\n            const Data = result.docs.filter((doc)=>!doc.data().delete).map((doc)=>({\n                    id: doc.id,\n                    ...doc.data()\n                }));\n            setCatalogData(Data);\n            setLoading(false);\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(CatalogContext.Provider, {\n        value: {\n            catalogData,\n            setCatalogData,\n            fetchcatalogData\n        }\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\ASUS\\\\OneDrive\\\\Desktop\\\\Project\\\\paintshop\\\\src\\\\context\\\\CatalogContext.js\",\n        lineNumber: 32,\n        columnNumber: 5\n    }, this);\n}\n_s(CatalogProvider, \"JsFOE7ld3JEslf4sHnKn6US+9vw=\");\n_c = CatalogProvider;\nvar _c;\n$RefreshReg$(_c, \"CatalogProvider\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29udGV4dC9DYXRhbG9nQ29udGV4dC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBbUQ7QUFDb0I7QUFDWjtBQUVwRCxNQUFNTywrQkFBaUJILG9EQUFhQSxHQUFHO0FBRS9CLFNBQVNJLGdCQUFnQixLQUFZO1FBQVosRUFBRUMsUUFBUSxFQUFFLEdBQVo7O0lBQ3RDLE1BQU0sQ0FBQ0MsYUFBYUMsZUFBZSxHQUFHTCwrQ0FBUUEsQ0FBQyxFQUFFO0lBQ2pELE1BQU0sQ0FBQ00sU0FBU0MsV0FBVyxHQUFHUCwrQ0FBUUEsQ0FBQztJQUV2Q0QsZ0RBQVNBLENBQUM7UUFDUlM7SUFDRixHQUFHLEVBQUU7SUFFTCxNQUFNQSxtQkFBbUI7UUFDdkIsTUFBTUMsaUJBQWlCO1FBQ3ZCLE1BQU0sRUFBRUMsTUFBTSxFQUFFQyxLQUFLLEVBQUUsR0FBRyxNQUFNakIsZ0VBQWFBLENBQUNlO1FBQzlDLElBQUlFLE9BQU87WUFDVEMsUUFBUUQsS0FBSyxDQUFDLDRCQUE0QkE7UUFDNUMsT0FBTyxJQUFJRCxRQUFRO1lBQ2pCLE1BQU1HLE9BQU9ILE9BQU9JLElBQUksQ0FDckJDLE1BQU0sQ0FBQyxDQUFDQyxNQUFRLENBQUNBLElBQUlDLElBQUksR0FBR0MsTUFBTSxFQUNsQ0MsR0FBRyxDQUFDLENBQUNILE1BQVM7b0JBQ2JJLElBQUlKLElBQUlJLEVBQUU7b0JBQ1YsR0FBR0osSUFBSUMsSUFBSSxFQUFFO2dCQUNmO1lBQ0ZaLGVBQWVRO1lBQ2ZOLFdBQVc7UUFDYjtJQUNGO0lBQ0EscUJBQ0UsOERBQUNOLGVBQWVvQixRQUFRO1FBQ3RCQyxPQUFPO1lBQUVsQjtZQUFhQztZQUFnQkc7UUFBaUI7Ozs7OztBQXNCN0Q7R0FoRHdCTjtLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29udGV4dC9DYXRhbG9nQ29udGV4dC5qcz81ZTdjIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGdldENvbGxlY3Rpb24gfSBmcm9tIFwiQC9maXJlYmFzZS9nZXREYXRhXCI7XHJcbmltcG9ydCB7IEJhY2tkcm9wLCBDaXJjdWxhclByb2dyZXNzLCBUeXBvZ3JhcGh5IH0gZnJvbSBcIkBtdWkvbWF0ZXJpYWxcIjtcclxuaW1wb3J0IHsgY3JlYXRlQ29udGV4dCwgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IENhdGFsb2dDb250ZXh0ID0gY3JlYXRlQ29udGV4dCgpO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQ2F0YWxvZ1Byb3ZpZGVyKHsgY2hpbGRyZW4gfSkge1xyXG4gIGNvbnN0IFtjYXRhbG9nRGF0YSwgc2V0Q2F0YWxvZ0RhdGFdID0gdXNlU3RhdGUoW10pO1xyXG4gIGNvbnN0IFtsb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlKHRydWUpO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgZmV0Y2hjYXRhbG9nRGF0YSgpO1xyXG4gIH0sIFtdKTtcclxuXHJcbiAgY29uc3QgZmV0Y2hjYXRhbG9nRGF0YSA9IGFzeW5jICgpID0+IHtcclxuICAgIGNvbnN0IGNvbGxlY3Rpb25OYW1lID0gXCJjYXRhbG9nXCI7XHJcbiAgICBjb25zdCB7IHJlc3VsdCwgZXJyb3IgfSA9IGF3YWl0IGdldENvbGxlY3Rpb24oY29sbGVjdGlvbk5hbWUpO1xyXG4gICAgaWYgKGVycm9yKSB7XHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciBmZXRjaGluZyBkb2N1bWVudDpcIiwgZXJyb3IpO1xyXG4gICAgfSBlbHNlIGlmIChyZXN1bHQpIHtcclxuICAgICAgY29uc3QgRGF0YSA9IHJlc3VsdC5kb2NzXHJcbiAgICAgICAgLmZpbHRlcigoZG9jKSA9PiAhZG9jLmRhdGEoKS5kZWxldGUpXHJcbiAgICAgICAgLm1hcCgoZG9jKSA9PiAoe1xyXG4gICAgICAgICAgaWQ6IGRvYy5pZCxcclxuICAgICAgICAgIC4uLmRvYy5kYXRhKCksXHJcbiAgICAgICAgfSkpO1xyXG4gICAgICBzZXRDYXRhbG9nRGF0YShEYXRhKTtcclxuICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XHJcbiAgICB9XHJcbiAgfTtcclxuICByZXR1cm4gKFxyXG4gICAgPENhdGFsb2dDb250ZXh0LlByb3ZpZGVyXHJcbiAgICAgIHZhbHVlPXt7IGNhdGFsb2dEYXRhLCBzZXRDYXRhbG9nRGF0YSwgZmV0Y2hjYXRhbG9nRGF0YSB9fVxyXG4gICAgPlxyXG4gICAgICB7Lyoge2xvYWRpbmcgPyAoXHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgIDxCYWNrZHJvcFxyXG4gICAgICAgICAgICBzeD17e1xyXG4gICAgICAgICAgICAgIGNvbG9yOiBcIiNmZmZcIixcclxuICAgICAgICAgICAgICB6SW5kZXg6ICh0aGVtZSkgPT4gdGhlbWUuekluZGV4LmRyYXdlciArIDEsXHJcbiAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBcIiMwMTgyOTRcIiwgLy8g4Liq4Li14Lif4LmJ4Liy4LmD4LiqXHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgIG9wZW49e3RydWV9XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxDaXJjdWxhclByb2dyZXNzIGNvbG9yPVwiaW5oZXJpdFwiIC8+XHJcbiAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHN4PXt7IG06IDIgfX0+4LiB4Liz4Lil4Lix4LiH4LmC4Lir4Lil4LiU4LmB4LiE4LiV4LiV4Liy4Lil4LmH4Lit4LiBLi4uPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgPC9CYWNrZHJvcD5cclxuICAgICAgIFxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICApIDogKFxyXG4gICAgICAgIGNoaWxkcmVuXHJcbiAgICAgICl9ICovfVxyXG4gICAgPC9DYXRhbG9nQ29udGV4dC5Qcm92aWRlcj5cclxuICApO1xyXG59XHJcbiJdLCJuYW1lcyI6WyJnZXRDb2xsZWN0aW9uIiwiQmFja2Ryb3AiLCJDaXJjdWxhclByb2dyZXNzIiwiVHlwb2dyYXBoeSIsImNyZWF0ZUNvbnRleHQiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIkNhdGFsb2dDb250ZXh0IiwiQ2F0YWxvZ1Byb3ZpZGVyIiwiY2hpbGRyZW4iLCJjYXRhbG9nRGF0YSIsInNldENhdGFsb2dEYXRhIiwibG9hZGluZyIsInNldExvYWRpbmciLCJmZXRjaGNhdGFsb2dEYXRhIiwiY29sbGVjdGlvbk5hbWUiLCJyZXN1bHQiLCJlcnJvciIsImNvbnNvbGUiLCJEYXRhIiwiZG9jcyIsImZpbHRlciIsImRvYyIsImRhdGEiLCJkZWxldGUiLCJtYXAiLCJpZCIsIlByb3ZpZGVyIiwidmFsdWUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/context/CatalogContext.js\n"));

/***/ })

});