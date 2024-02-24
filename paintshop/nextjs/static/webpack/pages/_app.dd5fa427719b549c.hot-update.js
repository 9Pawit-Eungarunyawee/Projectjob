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

/***/ "./src/context/BuyContext.js":
/*!***********************************!*\
  !*** ./src/context/BuyContext.js ***!
  \***********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   BuyContext: function() { return /* binding */ BuyContext; },\n/* harmony export */   \"default\": function() { return /* binding */ BuyProvider; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _firebase_getData__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/firebase/getData */ \"./src/firebase/getData.js\");\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mui/material */ \"./node_modules/@mui/material/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n\nvar _s = $RefreshSig$();\n\n\n\nconst BuyContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_2__.createContext)();\nfunction BuyProvider(param) {\n    let { children } = param;\n    _s();\n    const [buyData, setBuyData] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]);\n    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(true);\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        fetchBuyData();\n    }, []);\n    const fetchBuyData = async ()=>{\n        const collectionName = \"buy\";\n        const { result, error } = await (0,_firebase_getData__WEBPACK_IMPORTED_MODULE_1__.getCollection)(collectionName);\n        if (error) {\n            console.error(\"Error fetching document:\", error);\n        } else if (result) {\n            const Data = result.docs.map((doc)=>({\n                    id: doc.id,\n                    ...doc.data()\n                }));\n            // เรียงลำดับข้อมูลตามวันที่\n            const sortedData = Data.sort((a, b)=>{\n                return b.createAt.toMillis() - a.createAt.toMillis();\n            });\n            // ตั้งค่าข้อมูลใหม่ที่เรียงลำดับแล้ว\n            setBuyData(sortedData);\n            setLoading(false);\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(BuyContext.Provider, {\n        value: {\n            buyData,\n            setBuyData,\n            fetchBuyData\n        },\n        children: loading ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Backdrop, {\n                    sx: {\n                        color: \"#fff\",\n                        zIndex: (theme)=>theme.zIndex.drawer + 1,\n                        backgroundColor: \"#018294\"\n                    },\n                    open: true,\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_3__.CircularProgress, {\n                            color: \"inherit\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\ASUS\\\\OneDrive\\\\Desktop\\\\Project\\\\paintshop\\\\src\\\\context\\\\BuyContext.js\",\n                            lineNumber: 51,\n                            columnNumber: 13\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Typography, {\n                            sx: {\n                                m: 2\n                            },\n                            children: \"กำลังโหลดสินค้า...\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\ASUS\\\\OneDrive\\\\Desktop\\\\Project\\\\paintshop\\\\src\\\\context\\\\BuyContext.js\",\n                            lineNumber: 52,\n                            columnNumber: 13\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\ASUS\\\\OneDrive\\\\Desktop\\\\Project\\\\paintshop\\\\src\\\\context\\\\BuyContext.js\",\n                    lineNumber: 43,\n                    columnNumber: 11\n                }, this),\n                \"children\"\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\ASUS\\\\OneDrive\\\\Desktop\\\\Project\\\\paintshop\\\\src\\\\context\\\\BuyContext.js\",\n            lineNumber: 42,\n            columnNumber: 9\n        }, this) : children\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\ASUS\\\\OneDrive\\\\Desktop\\\\Project\\\\paintshop\\\\src\\\\context\\\\BuyContext.js\",\n        lineNumber: 38,\n        columnNumber: 5\n    }, this);\n}\n_s(BuyProvider, \"vpCMX1HPYGvnqyhj/wzpASUh+4Y=\");\n_c = BuyProvider;\nvar _c;\n$RefreshReg$(_c, \"BuyProvider\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29udGV4dC9CdXlDb250ZXh0LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBbUQ7QUFDb0I7QUFDQTtBQUVoRSxNQUFNUSwyQkFBYUosb0RBQWFBLEdBQUc7QUFFM0IsU0FBU0ssWUFBWSxLQUFZO1FBQVosRUFBRUMsUUFBUSxFQUFFLEdBQVo7O0lBQ2xDLE1BQU0sQ0FBQ0MsU0FBU0MsV0FBVyxHQUFHTCwrQ0FBUUEsQ0FBQyxFQUFFO0lBQ3pDLE1BQU0sQ0FBQ00sU0FBU0MsV0FBVyxHQUFHUCwrQ0FBUUEsQ0FBQztJQUV2Q0QsZ0RBQVNBLENBQUM7UUFDUlM7SUFDRixHQUFHLEVBQUU7SUFFTCxNQUFNQSxlQUFlO1FBQ25CLE1BQU1DLGlCQUFpQjtRQUN2QixNQUFNLEVBQUVDLE1BQU0sRUFBRUMsS0FBSyxFQUFFLEdBQUcsTUFBTWxCLGdFQUFhQSxDQUFDZ0I7UUFDOUMsSUFBSUUsT0FBTztZQUNUQyxRQUFRRCxLQUFLLENBQUMsNEJBQTRCQTtRQUM1QyxPQUFPLElBQUlELFFBQVE7WUFDakIsTUFBTUcsT0FBT0gsT0FBT0ksSUFBSSxDQUNyQkMsR0FBRyxDQUFDLENBQUNDLE1BQVM7b0JBQ2JDLElBQUlELElBQUlDLEVBQUU7b0JBQ1YsR0FBR0QsSUFBSUUsSUFBSSxFQUFFO2dCQUNmO1lBRUYsNEJBQTRCO1lBQzVCLE1BQU1DLGFBQWFOLEtBQUtPLElBQUksQ0FBQyxDQUFDQyxHQUFHQztnQkFDL0IsT0FBT0EsRUFBRUMsUUFBUSxDQUFDQyxRQUFRLEtBQUtILEVBQUVFLFFBQVEsQ0FBQ0MsUUFBUTtZQUNwRDtZQUVBLHFDQUFxQztZQUNyQ25CLFdBQVdjO1lBQ1haLFdBQVc7UUFDYjtJQUNGO0lBQ0EscUJBQ0UsOERBQUNOLFdBQVd3QixRQUFRO1FBQ2xCQyxPQUFPO1lBQUV0QjtZQUFTQztZQUFZRztRQUFhO2tCQUUxQ0Ysd0JBQ0MsOERBQUNxQjs7OEJBQ0MsOERBQUNqQyxtREFBUUE7b0JBQ1BrQyxJQUFJO3dCQUNGQyxPQUFPO3dCQUNQQyxRQUFRLENBQUNDLFFBQVVBLE1BQU1ELE1BQU0sQ0FBQ0UsTUFBTSxHQUFHO3dCQUN6Q0MsaUJBQWlCO29CQUNuQjtvQkFDQUMsTUFBTTs7c0NBRU4sOERBQUN2QywyREFBZ0JBOzRCQUFDa0MsT0FBTTs7Ozs7O3NDQUN4Qiw4REFBQ2pDLHFEQUFVQTs0QkFBQ2dDLElBQUk7Z0NBQUVPLEdBQUc7NEJBQUU7c0NBQUc7Ozs7Ozs7Ozs7OztnQkFDakI7Ozs7OzttQkFJYmhDOzs7Ozs7QUFJUjtHQXREd0JEO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb250ZXh0L0J1eUNvbnRleHQuanM/ZDk3MiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBnZXRDb2xsZWN0aW9uIH0gZnJvbSBcIkAvZmlyZWJhc2UvZ2V0RGF0YVwiO1xyXG5pbXBvcnQgeyBCYWNrZHJvcCwgQ2lyY3VsYXJQcm9ncmVzcywgVHlwb2dyYXBoeSB9IGZyb20gXCJAbXVpL21hdGVyaWFsXCI7XHJcbmltcG9ydCB7IGNyZWF0ZUNvbnRleHQsIHVzZUNvbnRleHQsIHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBCdXlDb250ZXh0ID0gY3JlYXRlQ29udGV4dCgpO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQnV5UHJvdmlkZXIoeyBjaGlsZHJlbiB9KSB7XHJcbiAgY29uc3QgW2J1eURhdGEsIHNldEJ1eURhdGFdID0gdXNlU3RhdGUoW10pO1xyXG4gIGNvbnN0IFtsb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlKHRydWUpO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgZmV0Y2hCdXlEYXRhKCk7XHJcbiAgfSwgW10pO1xyXG5cclxuICBjb25zdCBmZXRjaEJ1eURhdGEgPSBhc3luYyAoKSA9PiB7XHJcbiAgICBjb25zdCBjb2xsZWN0aW9uTmFtZSA9IFwiYnV5XCI7XHJcbiAgICBjb25zdCB7IHJlc3VsdCwgZXJyb3IgfSA9IGF3YWl0IGdldENvbGxlY3Rpb24oY29sbGVjdGlvbk5hbWUpO1xyXG4gICAgaWYgKGVycm9yKSB7XHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciBmZXRjaGluZyBkb2N1bWVudDpcIiwgZXJyb3IpO1xyXG4gICAgfSBlbHNlIGlmIChyZXN1bHQpIHtcclxuICAgICAgY29uc3QgRGF0YSA9IHJlc3VsdC5kb2NzXHJcbiAgICAgICAgLm1hcCgoZG9jKSA9PiAoe1xyXG4gICAgICAgICAgaWQ6IGRvYy5pZCxcclxuICAgICAgICAgIC4uLmRvYy5kYXRhKCksXHJcbiAgICAgICAgfSkpO1xyXG5cclxuICAgICAgLy8g4LmA4Lij4Li14Lii4LiH4Lil4Liz4LiU4Lix4Lia4LiC4LmJ4Lit4Lih4Li54Lil4LiV4Liy4Lih4Lin4Lix4LiZ4LiX4Li14LmIXHJcbiAgICAgIGNvbnN0IHNvcnRlZERhdGEgPSBEYXRhLnNvcnQoKGEsIGIpID0+IHtcclxuICAgICAgICByZXR1cm4gYi5jcmVhdGVBdC50b01pbGxpcygpIC0gYS5jcmVhdGVBdC50b01pbGxpcygpO1xyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIC8vIOC4leC4seC5ieC4h+C4hOC5iOC4suC4guC5ieC4reC4oeC4ueC4peC5g+C4q+C4oeC5iOC4l+C4teC5iOC5gOC4o+C4teC4ouC4h+C4peC4s+C4lOC4seC4muC5geC4peC5ieC4p1xyXG4gICAgICBzZXRCdXlEYXRhKHNvcnRlZERhdGEpO1xyXG4gICAgICBzZXRMb2FkaW5nKGZhbHNlKTtcclxuICAgIH1cclxuICB9O1xyXG4gIHJldHVybiAoXHJcbiAgICA8QnV5Q29udGV4dC5Qcm92aWRlclxyXG4gICAgICB2YWx1ZT17eyBidXlEYXRhLCBzZXRCdXlEYXRhLCBmZXRjaEJ1eURhdGEgfX1cclxuICAgID5cclxuICAgICAge2xvYWRpbmcgPyAoXHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgIDxCYWNrZHJvcFxyXG4gICAgICAgICAgICBzeD17e1xyXG4gICAgICAgICAgICAgIGNvbG9yOiBcIiNmZmZcIixcclxuICAgICAgICAgICAgICB6SW5kZXg6ICh0aGVtZSkgPT4gdGhlbWUuekluZGV4LmRyYXdlciArIDEsXHJcbiAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBcIiMwMTgyOTRcIiwgLy8g4Liq4Li14Lif4LmJ4Liy4LmD4LiqXHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgIG9wZW49e3RydWV9XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxDaXJjdWxhclByb2dyZXNzIGNvbG9yPVwiaW5oZXJpdFwiIC8+XHJcbiAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHN4PXt7IG06IDIgfX0+4LiB4Liz4Lil4Lix4LiH4LmC4Lir4Lil4LiU4Liq4Li04LiZ4LiE4LmJ4LiyLi4uPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgPC9CYWNrZHJvcD5cclxuICAgICAgICAgIGNoaWxkcmVuXHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICkgOiAoXHJcbiAgICAgICAgY2hpbGRyZW5cclxuICAgICAgKX1cclxuICAgIDwvQnV5Q29udGV4dC5Qcm92aWRlcj5cclxuICApO1xyXG59XHJcbiJdLCJuYW1lcyI6WyJnZXRDb2xsZWN0aW9uIiwiQmFja2Ryb3AiLCJDaXJjdWxhclByb2dyZXNzIiwiVHlwb2dyYXBoeSIsImNyZWF0ZUNvbnRleHQiLCJ1c2VDb250ZXh0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJCdXlDb250ZXh0IiwiQnV5UHJvdmlkZXIiLCJjaGlsZHJlbiIsImJ1eURhdGEiLCJzZXRCdXlEYXRhIiwibG9hZGluZyIsInNldExvYWRpbmciLCJmZXRjaEJ1eURhdGEiLCJjb2xsZWN0aW9uTmFtZSIsInJlc3VsdCIsImVycm9yIiwiY29uc29sZSIsIkRhdGEiLCJkb2NzIiwibWFwIiwiZG9jIiwiaWQiLCJkYXRhIiwic29ydGVkRGF0YSIsInNvcnQiLCJhIiwiYiIsImNyZWF0ZUF0IiwidG9NaWxsaXMiLCJQcm92aWRlciIsInZhbHVlIiwiZGl2Iiwic3giLCJjb2xvciIsInpJbmRleCIsInRoZW1lIiwiZHJhd2VyIiwiYmFja2dyb3VuZENvbG9yIiwib3BlbiIsIm0iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/context/BuyContext.js\n"));

/***/ })

});