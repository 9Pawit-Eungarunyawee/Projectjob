"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/catalog",{

/***/ "./src/components/drawer.js":
/*!**********************************!*\
  !*** ./src/components/drawer.js ***!
  \**********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mui/material */ \"./node_modules/@mui/material/index.js\");\n/* harmony import */ var _mui_icons_material_Menu__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mui/icons-material/Menu */ \"./node_modules/@mui/icons-material/Menu.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n\nvar _s = $RefreshSig$();\n\n\n\n\nconst pages = [\n    \"หน้าแรก\",\n    \"ผลิตภัณฑ์\"\n];\nconst DrawerComp = ()=>{\n    _s();\n    const [openDrawer, setOpenDrawer] = react__WEBPACK_IMPORTED_MODULE_1__.useState(false);\n    const [activeLink, setActiveLink] = react__WEBPACK_IMPORTED_MODULE_1__.useState(\"\");\n    const styles = {\n        Box: {\n            width: \"90%\",\n            transition: \"0.1s\",\n            m: 1,\n            \"&:hover\": {\n                transition: \"0.1s\",\n                borderRadius: \"5px\",\n                backgroundColor: \"#FE616A\",\n                boxShadow: \"0px 4px 4px 0px rgba(0, 0, 0, 0.25)\"\n            }\n        },\n        BoxActive: {\n            width: \"90%\",\n            transition: \"0.1s\",\n            backgroundColor: \"#FE616A\",\n            borderRadius: \"5px\",\n            boxShadow: \"0px 4px 4px 0px rgba(0, 0, 0, 0.25)\"\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react__WEBPACK_IMPORTED_MODULE_1__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Drawer, {\n                anchor: \"left\",\n                open: openDrawer,\n                onClose: ()=>setOpenDrawer(false),\n                PaperProps: {\n                    sx: {\n                        width: \"250px\"\n                    }\n                },\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_3__.List, {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                        href: \"/homepage\",\n                        style: {\n                            textDecoration: \"none\",\n                            display: \"flex\",\n                            justifyContent: \"center\"\n                        },\n                        onClick: (e)=>setActiveLink(\"/homepage\"),\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Box, {\n                            sx: activeLink === \"/homepage\" ? styles.BoxActive : styles.Box,\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Typography, {\n                                variant: \"menu\",\n                                noWrap: true,\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(HomeIcon, {\n                                        sx: {\n                                            pr: 2\n                                        }\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\Letr0\\\\Downloads\\\\ProjectPaint\\\\paintshop\\\\src\\\\components\\\\drawer.js\",\n                                        lineNumber: 59,\n                                        columnNumber: 17\n                                    }, undefined),\n                                    \"หน้าหลัก\"\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\Letr0\\\\Downloads\\\\ProjectPaint\\\\paintshop\\\\src\\\\components\\\\drawer.js\",\n                                lineNumber: 58,\n                                columnNumber: 15\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Letr0\\\\Downloads\\\\ProjectPaint\\\\paintshop\\\\src\\\\components\\\\drawer.js\",\n                            lineNumber: 55,\n                            columnNumber: 13\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Letr0\\\\Downloads\\\\ProjectPaint\\\\paintshop\\\\src\\\\components\\\\drawer.js\",\n                        lineNumber: 46,\n                        columnNumber: 11\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Letr0\\\\Downloads\\\\ProjectPaint\\\\paintshop\\\\src\\\\components\\\\drawer.js\",\n                    lineNumber: 45,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Letr0\\\\Downloads\\\\ProjectPaint\\\\paintshop\\\\src\\\\components\\\\drawer.js\",\n                lineNumber: 39,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_3__.IconButton, {\n                sx: {\n                    color: \"black\"\n                },\n                onClick: ()=>setOpenDrawer(!openDrawer),\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_icons_material_Menu__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                    color: \"white\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Letr0\\\\Downloads\\\\ProjectPaint\\\\paintshop\\\\src\\\\components\\\\drawer.js\",\n                    lineNumber: 70,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Letr0\\\\Downloads\\\\ProjectPaint\\\\paintshop\\\\src\\\\components\\\\drawer.js\",\n                lineNumber: 66,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\Letr0\\\\Downloads\\\\ProjectPaint\\\\paintshop\\\\src\\\\components\\\\drawer.js\",\n        lineNumber: 38,\n        columnNumber: 5\n    }, undefined);\n};\n_s(DrawerComp, \"XAszc4HumZ5ll+uO2Fk1vkw7fAY=\");\n_c = DrawerComp;\n/* harmony default export */ __webpack_exports__[\"default\"] = (DrawerComp);\nvar _c;\n$RefreshReg$(_c, \"DrawerComp\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9kcmF3ZXIuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBK0I7QUFTUjtBQUN5QjtBQUNuQjtBQUM3QixNQUFNVSxRQUFRO0lBQUM7SUFBVztDQUFZO0FBQ3RDLE1BQU1DLGFBQWE7O0lBQ2pCLE1BQU0sQ0FBQ0MsWUFBWUMsY0FBYyxHQUFHYiwyQ0FBYyxDQUFDO0lBQ25ELE1BQU0sQ0FBQ2UsWUFBWUMsY0FBYyxHQUFHaEIsMkNBQWMsQ0FBQztJQUNuRCxNQUFNaUIsU0FBUztRQUNiaEIsS0FBSztZQUNIaUIsT0FBTztZQUNQQyxZQUFZO1lBQ1pDLEdBQUc7WUFDSCxXQUFXO2dCQUNURCxZQUFZO2dCQUNaRSxjQUFjO2dCQUNkQyxpQkFBaUI7Z0JBQ2pCQyxXQUFXO1lBQ2I7UUFDRjtRQUNBQyxXQUFXO1lBQ1ROLE9BQU87WUFDUEMsWUFBWTtZQUNaRyxpQkFBaUI7WUFDakJELGNBQWM7WUFDZEUsV0FBVztRQUNiO0lBQ0Y7SUFDQSxxQkFDRSw4REFBQ3ZCLDJDQUFjOzswQkFDYiw4REFBQ0UsaURBQU1BO2dCQUNMd0IsUUFBTztnQkFDUEMsTUFBTWY7Z0JBQ05nQixTQUFTLElBQU1mLGNBQWM7Z0JBQzdCZ0IsWUFBWTtvQkFBRUMsSUFBSTt3QkFBRVosT0FBTztvQkFBUTtnQkFBRTswQkFFckMsNEVBQUNkLCtDQUFJQTs4QkFDSCw0RUFBQ0ssa0RBQUlBO3dCQUNIc0IsTUFBSzt3QkFDTEMsT0FBTzs0QkFDTEMsZ0JBQWdCOzRCQUNoQkMsU0FBUzs0QkFDVEMsZ0JBQWdCO3dCQUNsQjt3QkFDQUMsU0FBUyxDQUFDQyxJQUFNckIsY0FBYztrQ0FFOUIsNEVBQUNmLDhDQUFHQTs0QkFDRjZCLElBQUlmLGVBQWUsY0FBY0UsT0FBT08sU0FBUyxHQUFHUCxPQUFPaEIsR0FBRztzQ0FFOUQsNEVBQUNxQztnQ0FBV0MsU0FBUTtnQ0FBT0MsTUFBTTs7a0RBQy9CLDhEQUFDQzt3Q0FBU1gsSUFBSTs0Q0FBRVksSUFBSTt3Q0FBRTs7Ozs7O29DQUFLOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7MEJBT3JDLDhEQUFDdkMscURBQVVBO2dCQUNUMkIsSUFBSTtvQkFBRWEsT0FBTztnQkFBUTtnQkFDckJQLFNBQVMsSUFBTXZCLGNBQWMsQ0FBQ0Q7MEJBRTlCLDRFQUFDSixnRUFBUUE7b0JBQUNtQyxPQUFNOzs7Ozs7Ozs7Ozs7Ozs7OztBQUl4QjtHQTVETWhDO0tBQUFBO0FBOEROLCtEQUFlQSxVQUFVQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL2RyYXdlci5qcz9kMzk3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQge1xyXG4gIEJveCxcclxuICBEcmF3ZXIsXHJcbiAgSWNvbkJ1dHRvbixcclxuICBMaXN0LFxyXG4gIExpc3RJdGVtQnV0dG9uLFxyXG4gIExpc3RJdGVtSWNvbixcclxuICBMaXN0SXRlbVRleHQsXHJcbn0gZnJvbSBcIkBtdWkvbWF0ZXJpYWxcIjtcclxuaW1wb3J0IE1lbnVJY29uIGZyb20gXCJAbXVpL2ljb25zLW1hdGVyaWFsL01lbnVcIjtcclxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xyXG5jb25zdCBwYWdlcyA9IFtcIuC4q+C4meC5ieC4suC5geC4o+C4gVwiLCBcIuC4nOC4peC4tOC4leC4oOC4seC4k+C4keC5jFwiXTtcclxuY29uc3QgRHJhd2VyQ29tcCA9ICgpID0+IHtcclxuICBjb25zdCBbb3BlbkRyYXdlciwgc2V0T3BlbkRyYXdlcl0gPSBSZWFjdC51c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW2FjdGl2ZUxpbmssIHNldEFjdGl2ZUxpbmtdID0gUmVhY3QudXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3Qgc3R5bGVzID0ge1xyXG4gICAgQm94OiB7XHJcbiAgICAgIHdpZHRoOiBcIjkwJVwiLFxyXG4gICAgICB0cmFuc2l0aW9uOiBcIjAuMXNcIixcclxuICAgICAgbTogMSxcclxuICAgICAgXCImOmhvdmVyXCI6IHtcclxuICAgICAgICB0cmFuc2l0aW9uOiBcIjAuMXNcIixcclxuICAgICAgICBib3JkZXJSYWRpdXM6IFwiNXB4XCIsXHJcbiAgICAgICAgYmFja2dyb3VuZENvbG9yOiBcIiNGRTYxNkFcIixcclxuICAgICAgICBib3hTaGFkb3c6IFwiMHB4IDRweCA0cHggMHB4IHJnYmEoMCwgMCwgMCwgMC4yNSlcIixcclxuICAgICAgfSxcclxuICAgIH0sXHJcbiAgICBCb3hBY3RpdmU6IHtcclxuICAgICAgd2lkdGg6IFwiOTAlXCIsXHJcbiAgICAgIHRyYW5zaXRpb246IFwiMC4xc1wiLFxyXG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6IFwiI0ZFNjE2QVwiLFxyXG4gICAgICBib3JkZXJSYWRpdXM6IFwiNXB4XCIsXHJcbiAgICAgIGJveFNoYWRvdzogXCIwcHggNHB4IDRweCAwcHggcmdiYSgwLCAwLCAwLCAwLjI1KVwiLFxyXG4gICAgfSxcclxuICB9O1xyXG4gIHJldHVybiAoXHJcbiAgICA8UmVhY3QuRnJhZ21lbnQ+XHJcbiAgICAgIDxEcmF3ZXJcclxuICAgICAgICBhbmNob3I9XCJsZWZ0XCJcclxuICAgICAgICBvcGVuPXtvcGVuRHJhd2VyfVxyXG4gICAgICAgIG9uQ2xvc2U9eygpID0+IHNldE9wZW5EcmF3ZXIoZmFsc2UpfVxyXG4gICAgICAgIFBhcGVyUHJvcHM9e3sgc3g6IHsgd2lkdGg6IFwiMjUwcHhcIiB9IH19XHJcbiAgICAgID5cclxuICAgICAgICA8TGlzdD5cclxuICAgICAgICAgIDxMaW5rXHJcbiAgICAgICAgICAgIGhyZWY9XCIvaG9tZXBhZ2VcIlxyXG4gICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgIHRleHREZWNvcmF0aW9uOiBcIm5vbmVcIixcclxuICAgICAgICAgICAgICBkaXNwbGF5OiBcImZsZXhcIixcclxuICAgICAgICAgICAgICBqdXN0aWZ5Q29udGVudDogXCJjZW50ZXJcIixcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgb25DbGljaz17KGUpID0+IHNldEFjdGl2ZUxpbmsoXCIvaG9tZXBhZ2VcIil9XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxCb3hcclxuICAgICAgICAgICAgICBzeD17YWN0aXZlTGluayA9PT0gXCIvaG9tZXBhZ2VcIiA/IHN0eWxlcy5Cb3hBY3RpdmUgOiBzdHlsZXMuQm94fVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cIm1lbnVcIiBub1dyYXA+XHJcbiAgICAgICAgICAgICAgICA8SG9tZUljb24gc3g9e3sgcHI6IDIgfX0gLz5cclxuICAgICAgICAgICAgICAgIOC4q+C4meC5ieC4suC4q+C4peC4seC4gVxyXG4gICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgPC9Cb3g+XHJcbiAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgPC9MaXN0PlxyXG4gICAgICA8L0RyYXdlcj5cclxuICAgICAgPEljb25CdXR0b25cclxuICAgICAgICBzeD17eyBjb2xvcjogXCJibGFja1wiIH19XHJcbiAgICAgICAgb25DbGljaz17KCkgPT4gc2V0T3BlbkRyYXdlcighb3BlbkRyYXdlcil9XHJcbiAgICAgID5cclxuICAgICAgICA8TWVudUljb24gY29sb3I9XCJ3aGl0ZVwiIC8+XHJcbiAgICAgIDwvSWNvbkJ1dHRvbj5cclxuICAgIDwvUmVhY3QuRnJhZ21lbnQ+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IERyYXdlckNvbXA7XHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsIkJveCIsIkRyYXdlciIsIkljb25CdXR0b24iLCJMaXN0IiwiTGlzdEl0ZW1CdXR0b24iLCJMaXN0SXRlbUljb24iLCJMaXN0SXRlbVRleHQiLCJNZW51SWNvbiIsIkxpbmsiLCJwYWdlcyIsIkRyYXdlckNvbXAiLCJvcGVuRHJhd2VyIiwic2V0T3BlbkRyYXdlciIsInVzZVN0YXRlIiwiYWN0aXZlTGluayIsInNldEFjdGl2ZUxpbmsiLCJzdHlsZXMiLCJ3aWR0aCIsInRyYW5zaXRpb24iLCJtIiwiYm9yZGVyUmFkaXVzIiwiYmFja2dyb3VuZENvbG9yIiwiYm94U2hhZG93IiwiQm94QWN0aXZlIiwiRnJhZ21lbnQiLCJhbmNob3IiLCJvcGVuIiwib25DbG9zZSIsIlBhcGVyUHJvcHMiLCJzeCIsImhyZWYiLCJzdHlsZSIsInRleHREZWNvcmF0aW9uIiwiZGlzcGxheSIsImp1c3RpZnlDb250ZW50Iiwib25DbGljayIsImUiLCJUeXBvZ3JhcGh5IiwidmFyaWFudCIsIm5vV3JhcCIsIkhvbWVJY29uIiwicHIiLCJjb2xvciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/drawer.js\n"));

/***/ })

});