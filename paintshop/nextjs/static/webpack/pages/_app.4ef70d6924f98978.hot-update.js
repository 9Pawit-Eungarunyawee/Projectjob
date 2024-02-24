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

/***/ "./src/context/UserContext.js":
/*!************************************!*\
  !*** ./src/context/UserContext.js ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   UserContext: function() { return /* binding */ UserContext; },\n/* harmony export */   \"default\": function() { return /* binding */ UserProvider; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _firebase_getData__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/firebase/getData */ \"./src/firebase/getData.js\");\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mui/material */ \"./node_modules/@mui/material/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n\nvar _s = $RefreshSig$();\n\n\n\nconst UserContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_2__.createContext)();\nfunction UserProvider(param) {\n    let { children } = param;\n    _s();\n    const [userData, setUserData] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]);\n    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(true);\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        fetchUserData();\n    }, []);\n    const fetchUserData = async ()=>{\n        const collectionName = \"users\";\n        const { result, error } = await (0,_firebase_getData__WEBPACK_IMPORTED_MODULE_1__.getCollection)(collectionName);\n        if (error) {\n            console.error(\"Error fetching document:\", error);\n        } else if (result) {\n            const Data = result.docs.map((doc)=>({\n                    id: doc.id,\n                    ...doc.data()\n                }));\n            setUserData(Data);\n            setLoading(false);\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(UserContext.Provider, {\n        value: {\n            userData,\n            setUserData,\n            fetchUserData\n        },\n        children: loading ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Backdrop, {\n                    sx: {\n                        color: \"#fff\",\n                        zIndex: (theme)=>theme.zIndex.drawer + 1\n                    },\n                    open: true,\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_3__.CircularProgress, {\n                            color: \"inherit\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\ASUS\\\\OneDrive\\\\Desktop\\\\Project\\\\paintshop\\\\src\\\\context\\\\UserContext.js\",\n                            lineNumber: 43,\n                            columnNumber: 13\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Typography, {\n                            sx: {\n                                m: 2\n                            },\n                            children: \"กำลังโหลดสินค้า...\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\ASUS\\\\OneDrive\\\\Desktop\\\\Project\\\\paintshop\\\\src\\\\context\\\\UserContext.js\",\n                            lineNumber: 44,\n                            columnNumber: 13\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\ASUS\\\\OneDrive\\\\Desktop\\\\Project\\\\paintshop\\\\src\\\\context\\\\UserContext.js\",\n                    lineNumber: 35,\n                    columnNumber: 11\n                }, this),\n                children\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\ASUS\\\\OneDrive\\\\Desktop\\\\Project\\\\paintshop\\\\src\\\\context\\\\UserContext.js\",\n            lineNumber: 34,\n            columnNumber: 9\n        }, this) : children\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\ASUS\\\\OneDrive\\\\Desktop\\\\Project\\\\paintshop\\\\src\\\\context\\\\UserContext.js\",\n        lineNumber: 30,\n        columnNumber: 5\n    }, this);\n}\n_s(UserProvider, \"hwv9Rll+1Nzzw3Sx6L8pt/dYrJ4=\");\n_c = UserProvider;\nvar _c;\n$RefreshReg$(_c, \"UserProvider\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29udGV4dC9Vc2VyQ29udGV4dC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQW1EO0FBQ29CO0FBQ0E7QUFFaEUsTUFBTVEsNEJBQWNKLG9EQUFhQSxHQUFHO0FBRTVCLFNBQVNLLGFBQWEsS0FBWTtRQUFaLEVBQUVDLFFBQVEsRUFBRSxHQUFaOztJQUNuQyxNQUFNLENBQUNDLFVBQVVDLFlBQVksR0FBR0wsK0NBQVFBLENBQUMsRUFBRTtJQUMzQyxNQUFNLENBQUNNLFNBQVNDLFdBQVcsR0FBR1AsK0NBQVFBLENBQUM7SUFFdkNELGdEQUFTQSxDQUFDO1FBQ1JTO0lBQ0YsR0FBRyxFQUFFO0lBRUwsTUFBTUEsZ0JBQWdCO1FBQ3BCLE1BQU1DLGlCQUFpQjtRQUN2QixNQUFNLEVBQUVDLE1BQU0sRUFBRUMsS0FBSyxFQUFFLEdBQUcsTUFBTWxCLGdFQUFhQSxDQUFDZ0I7UUFDOUMsSUFBSUUsT0FBTztZQUNUQyxRQUFRRCxLQUFLLENBQUMsNEJBQTRCQTtRQUM1QyxPQUFPLElBQUlELFFBQVE7WUFDakIsTUFBTUcsT0FBT0gsT0FBT0ksSUFBSSxDQUFDQyxHQUFHLENBQUMsQ0FBQ0MsTUFBUztvQkFDckNDLElBQUlELElBQUlDLEVBQUU7b0JBQ1YsR0FBR0QsSUFBSUUsSUFBSSxFQUFFO2dCQUNmO1lBQ0FiLFlBQVlRO1lBQ1pOLFdBQVc7UUFDYjtJQUNGO0lBQ0EscUJBQ0UsOERBQUNOLFlBQVlrQixRQUFRO1FBQ25CQyxPQUFPO1lBQUVoQjtZQUFVQztZQUFhRztRQUFjO2tCQUU3Q0Ysd0JBQ0MsOERBQUNlOzs4QkFDQyw4REFBQzNCLG1EQUFRQTtvQkFDUDRCLElBQUk7d0JBQ0ZDLE9BQU87d0JBQ1BDLFFBQVEsQ0FBQ0MsUUFBVUEsTUFBTUQsTUFBTSxDQUFDRSxNQUFNLEdBQUc7b0JBRTNDO29CQUNBQyxNQUFNOztzQ0FFTiw4REFBQ2hDLDJEQUFnQkE7NEJBQUM0QixPQUFNOzs7Ozs7c0NBQ3hCLDhEQUFDM0IscURBQVVBOzRCQUFDMEIsSUFBSTtnQ0FBRU0sR0FBRzs0QkFBRTtzQ0FBRzs7Ozs7Ozs7Ozs7O2dCQUUzQnpCOzs7Ozs7bUJBR0hBOzs7Ozs7QUFJUjtHQTlDd0JEO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb250ZXh0L1VzZXJDb250ZXh0LmpzPzA3OWYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZ2V0Q29sbGVjdGlvbiB9IGZyb20gXCJAL2ZpcmViYXNlL2dldERhdGFcIjtcclxuaW1wb3J0IHsgQmFja2Ryb3AsIENpcmN1bGFyUHJvZ3Jlc3MsIFR5cG9ncmFwaHkgfSBmcm9tIFwiQG11aS9tYXRlcmlhbFwiO1xyXG5pbXBvcnQgeyBjcmVhdGVDb250ZXh0LCB1c2VDb250ZXh0LCB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcblxyXG5leHBvcnQgY29uc3QgVXNlckNvbnRleHQgPSBjcmVhdGVDb250ZXh0KCk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBVc2VyUHJvdmlkZXIoeyBjaGlsZHJlbiB9KSB7XHJcbiAgY29uc3QgW3VzZXJEYXRhLCBzZXRVc2VyRGF0YV0gPSB1c2VTdGF0ZShbXSk7XHJcbiAgY29uc3QgW2xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGUodHJ1ZSk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBmZXRjaFVzZXJEYXRhKCk7XHJcbiAgfSwgW10pO1xyXG5cclxuICBjb25zdCBmZXRjaFVzZXJEYXRhID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgY29uc3QgY29sbGVjdGlvbk5hbWUgPSBcInVzZXJzXCI7XHJcbiAgICBjb25zdCB7IHJlc3VsdCwgZXJyb3IgfSA9IGF3YWl0IGdldENvbGxlY3Rpb24oY29sbGVjdGlvbk5hbWUpO1xyXG4gICAgaWYgKGVycm9yKSB7XHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciBmZXRjaGluZyBkb2N1bWVudDpcIiwgZXJyb3IpO1xyXG4gICAgfSBlbHNlIGlmIChyZXN1bHQpIHtcclxuICAgICAgY29uc3QgRGF0YSA9IHJlc3VsdC5kb2NzLm1hcCgoZG9jKSA9PiAoe1xyXG4gICAgICAgIGlkOiBkb2MuaWQsXHJcbiAgICAgICAgLi4uZG9jLmRhdGEoKSxcclxuICAgICAgfSkpO1xyXG4gICAgICBzZXRVc2VyRGF0YShEYXRhKVxyXG4gICAgICBzZXRMb2FkaW5nKGZhbHNlKTtcclxuICAgIH1cclxuICB9O1xyXG4gIHJldHVybiAoXHJcbiAgICA8VXNlckNvbnRleHQuUHJvdmlkZXJcclxuICAgICAgdmFsdWU9e3sgdXNlckRhdGEsIHNldFVzZXJEYXRhLCBmZXRjaFVzZXJEYXRhIH19XHJcbiAgICA+XHJcbiAgICAgIHtsb2FkaW5nID8gKFxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICA8QmFja2Ryb3BcclxuICAgICAgICAgICAgc3g9e3tcclxuICAgICAgICAgICAgICBjb2xvcjogXCIjZmZmXCIsXHJcbiAgICAgICAgICAgICAgekluZGV4OiAodGhlbWUpID0+IHRoZW1lLnpJbmRleC5kcmF3ZXIgKyAxLFxyXG4gICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICBvcGVuPXt0cnVlfVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICA8Q2lyY3VsYXJQcm9ncmVzcyBjb2xvcj1cImluaGVyaXRcIiAvPlxyXG4gICAgICAgICAgICA8VHlwb2dyYXBoeSBzeD17eyBtOiAyIH19PuC4geC4s+C4peC4seC4h+C5guC4q+C4peC4lOC4quC4tOC4meC4hOC5ieC4si4uLjwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgIDwvQmFja2Ryb3A+XHJcbiAgICAgICAgICB7Y2hpbGRyZW59XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICkgOiAoXHJcbiAgICAgICAgY2hpbGRyZW5cclxuICAgICAgKX1cclxuICAgIDwvVXNlckNvbnRleHQuUHJvdmlkZXI+XHJcbiAgKTtcclxufVxyXG4iXSwibmFtZXMiOlsiZ2V0Q29sbGVjdGlvbiIsIkJhY2tkcm9wIiwiQ2lyY3VsYXJQcm9ncmVzcyIsIlR5cG9ncmFwaHkiLCJjcmVhdGVDb250ZXh0IiwidXNlQ29udGV4dCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiVXNlckNvbnRleHQiLCJVc2VyUHJvdmlkZXIiLCJjaGlsZHJlbiIsInVzZXJEYXRhIiwic2V0VXNlckRhdGEiLCJsb2FkaW5nIiwic2V0TG9hZGluZyIsImZldGNoVXNlckRhdGEiLCJjb2xsZWN0aW9uTmFtZSIsInJlc3VsdCIsImVycm9yIiwiY29uc29sZSIsIkRhdGEiLCJkb2NzIiwibWFwIiwiZG9jIiwiaWQiLCJkYXRhIiwiUHJvdmlkZXIiLCJ2YWx1ZSIsImRpdiIsInN4IiwiY29sb3IiLCJ6SW5kZXgiLCJ0aGVtZSIsImRyYXdlciIsIm9wZW4iLCJtIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/context/UserContext.js\n"));

/***/ })

});