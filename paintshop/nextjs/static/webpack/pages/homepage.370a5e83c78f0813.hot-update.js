"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/homepage",{

/***/ "./src/components/drawer.js":
/*!**********************************!*\
  !*** ./src/components/drawer.js ***!
  \**********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mui/material */ \"./node_modules/@mui/material/index.js\");\n/* harmony import */ var _mui_icons_material_Menu__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/icons-material/Menu */ \"./node_modules/@mui/icons-material/Menu.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _mui_icons_material_HomeOutlined__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mui/icons-material/HomeOutlined */ \"./node_modules/@mui/icons-material/HomeOutlined.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nconst pages = [\n    \"หน้าแรก\",\n    \"ผลิตภัณฑ์\"\n];\nconst DrawerComp = ()=>{\n    _s();\n    const [openDrawer, setOpenDrawer] = react__WEBPACK_IMPORTED_MODULE_1__.useState(false);\n    const [activeLink, setActiveLink] = react__WEBPACK_IMPORTED_MODULE_1__.useState(\"\");\n    const styles = {\n        Box: {\n            width: \"90%\",\n            transition: \"0.1s\",\n            m: 1,\n            \"&:hover\": {\n                transition: \"0.1s\",\n                borderRadius: \"5px\",\n                backgroundColor: \"#FE616A\",\n                boxShadow: \"0px 4px 4px 0px rgba(0, 0, 0, 0.25)\"\n            }\n        },\n        BoxActive: {\n            width: \"90%\",\n            transition: \"0.1s\",\n            backgroundColor: \"#FE616A\",\n            borderRadius: \"5px\",\n            boxShadow: \"0px 4px 4px 0px rgba(0, 0, 0, 0.25)\"\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react__WEBPACK_IMPORTED_MODULE_1__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Drawer, {\n                anchor: \"left\",\n                open: openDrawer,\n                onClose: ()=>setOpenDrawer(false),\n                PaperProps: {\n                    sx: {\n                        width: \"250px\"\n                    }\n                },\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_3__.List, {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                        href: \"/homepage\",\n                        style: {\n                            textDecoration: \"none\"\n                        },\n                        onClick: (e)=>setActiveLink(\"/homepage\"),\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Box, {\n                            sx: activeLink === \"/homepage\" ? styles.BoxActive : styles.Box,\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Typography, {\n                                variant: \"menu\",\n                                noWrap: true,\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_icons_material_HomeOutlined__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                                        sx: {\n                                            pr: 2\n                                        }\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\Letr0\\\\Downloads\\\\ProjectPaint\\\\paintshop\\\\src\\\\components\\\\drawer.js\",\n                                        lineNumber: 59,\n                                        columnNumber: 17\n                                    }, undefined),\n                                    \"หน้าหลัก\"\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\Letr0\\\\Downloads\\\\ProjectPaint\\\\paintshop\\\\src\\\\components\\\\drawer.js\",\n                                lineNumber: 58,\n                                columnNumber: 15\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Letr0\\\\Downloads\\\\ProjectPaint\\\\paintshop\\\\src\\\\components\\\\drawer.js\",\n                            lineNumber: 55,\n                            columnNumber: 13\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Letr0\\\\Downloads\\\\ProjectPaint\\\\paintshop\\\\src\\\\components\\\\drawer.js\",\n                        lineNumber: 48,\n                        columnNumber: 11\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Letr0\\\\Downloads\\\\ProjectPaint\\\\paintshop\\\\src\\\\components\\\\drawer.js\",\n                    lineNumber: 47,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Letr0\\\\Downloads\\\\ProjectPaint\\\\paintshop\\\\src\\\\components\\\\drawer.js\",\n                lineNumber: 41,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_3__.IconButton, {\n                sx: {\n                    color: \"black\"\n                },\n                onClick: ()=>setOpenDrawer(!openDrawer),\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_icons_material_Menu__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                    color: \"white\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Letr0\\\\Downloads\\\\ProjectPaint\\\\paintshop\\\\src\\\\components\\\\drawer.js\",\n                    lineNumber: 70,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Letr0\\\\Downloads\\\\ProjectPaint\\\\paintshop\\\\src\\\\components\\\\drawer.js\",\n                lineNumber: 66,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\Letr0\\\\Downloads\\\\ProjectPaint\\\\paintshop\\\\src\\\\components\\\\drawer.js\",\n        lineNumber: 40,\n        columnNumber: 5\n    }, undefined);\n};\n_s(DrawerComp, \"XAszc4HumZ5ll+uO2Fk1vkw7fAY=\");\n_c = DrawerComp;\n/* harmony default export */ __webpack_exports__[\"default\"] = (DrawerComp);\nvar _c;\n$RefreshReg$(_c, \"DrawerComp\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9kcmF3ZXIuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQStCO0FBVVI7QUFDeUI7QUFDbkI7QUFDbUM7QUFDaEUsTUFBTVksUUFBUTtJQUFDO0lBQVc7Q0FBWTtBQUN0QyxNQUFNQyxhQUFhOztJQUNqQixNQUFNLENBQUNDLFlBQVlDLGNBQWMsR0FBR2YsMkNBQWMsQ0FBQztJQUNuRCxNQUFNLENBQUNpQixZQUFZQyxjQUFjLEdBQUdsQiwyQ0FBYyxDQUFDO0lBQ25ELE1BQU1tQixTQUFTO1FBQ2JsQixLQUFLO1lBQ0htQixPQUFPO1lBQ1BDLFlBQVk7WUFDWkMsR0FBRztZQUNILFdBQVc7Z0JBQ1RELFlBQVk7Z0JBQ1pFLGNBQWM7Z0JBQ2RDLGlCQUFpQjtnQkFDakJDLFdBQVc7WUFDYjtRQUNGO1FBQ0FDLFdBQVc7WUFDVE4sT0FBTztZQUNQQyxZQUFZO1lBQ1pHLGlCQUFpQjtZQUNqQkQsY0FBYztZQUNkRSxXQUFXO1FBQ2I7SUFDRjtJQUNBLHFCQUNFLDhEQUFDekIsMkNBQWM7OzBCQUNiLDhEQUFDRSxpREFBTUE7Z0JBQ0wwQixRQUFPO2dCQUNQQyxNQUFNZjtnQkFDTmdCLFNBQVMsSUFBTWYsY0FBYztnQkFDN0JnQixZQUFZO29CQUFFQyxJQUFJO3dCQUFFWixPQUFPO29CQUFRO2dCQUFFOzBCQUVyQyw0RUFBQ2hCLCtDQUFJQTs4QkFDSCw0RUFBQ00sa0RBQUlBO3dCQUNIdUIsTUFBSzt3QkFDTEMsT0FBTzs0QkFDTEMsZ0JBQWdCO3dCQUNsQjt3QkFDQUMsU0FBUyxDQUFDQyxJQUFNbkIsY0FBYztrQ0FFOUIsNEVBQUNqQiw4Q0FBR0E7NEJBQ0YrQixJQUFJZixlQUFlLGNBQWNFLE9BQU9PLFNBQVMsR0FBR1AsT0FBT2xCLEdBQUc7c0NBRTlELDRFQUFDTyxxREFBVUE7Z0NBQUM4QixTQUFRO2dDQUFPQyxNQUFNOztrREFDL0IsOERBQUM1Qix3RUFBZ0JBO3dDQUFDcUIsSUFBSTs0Q0FBRVEsSUFBSTt3Q0FBRTs7Ozs7O29DQUFLOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7MEJBTzdDLDhEQUFDckMscURBQVVBO2dCQUNUNkIsSUFBSTtvQkFBRVMsT0FBTztnQkFBUTtnQkFDckJMLFNBQVMsSUFBTXJCLGNBQWMsQ0FBQ0Q7MEJBRTlCLDRFQUFDTCxnRUFBUUE7b0JBQUNnQyxPQUFNOzs7Ozs7Ozs7Ozs7Ozs7OztBQUl4QjtHQTFETTVCO0tBQUFBO0FBNEROLCtEQUFlQSxVQUFVQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL2RyYXdlci5qcz9kMzk3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQge1xyXG4gIEJveCxcclxuICBEcmF3ZXIsXHJcbiAgSWNvbkJ1dHRvbixcclxuICBMaXN0LFxyXG4gIExpc3RJdGVtQnV0dG9uLFxyXG4gIExpc3RJdGVtSWNvbixcclxuICBMaXN0SXRlbVRleHQsXHJcbiAgVHlwb2dyYXBoeSxcclxufSBmcm9tIFwiQG11aS9tYXRlcmlhbFwiO1xyXG5pbXBvcnQgTWVudUljb24gZnJvbSBcIkBtdWkvaWNvbnMtbWF0ZXJpYWwvTWVudVwiO1xyXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcbmltcG9ydCBIb21lT3V0bGluZWRJY29uIGZyb20gJ0BtdWkvaWNvbnMtbWF0ZXJpYWwvSG9tZU91dGxpbmVkJztcclxuY29uc3QgcGFnZXMgPSBbXCLguKvguJnguYnguLLguYHguKPguIFcIiwgXCLguJzguKXguLTguJXguKDguLHguJPguJHguYxcIl07XHJcbmNvbnN0IERyYXdlckNvbXAgPSAoKSA9PiB7XHJcbiAgY29uc3QgW29wZW5EcmF3ZXIsIHNldE9wZW5EcmF3ZXJdID0gUmVhY3QudXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IFthY3RpdmVMaW5rLCBzZXRBY3RpdmVMaW5rXSA9IFJlYWN0LnVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IHN0eWxlcyA9IHtcclxuICAgIEJveDoge1xyXG4gICAgICB3aWR0aDogXCI5MCVcIixcclxuICAgICAgdHJhbnNpdGlvbjogXCIwLjFzXCIsXHJcbiAgICAgIG06IDEsXHJcbiAgICAgIFwiJjpob3ZlclwiOiB7XHJcbiAgICAgICAgdHJhbnNpdGlvbjogXCIwLjFzXCIsXHJcbiAgICAgICAgYm9yZGVyUmFkaXVzOiBcIjVweFwiLFxyXG4gICAgICAgIGJhY2tncm91bmRDb2xvcjogXCIjRkU2MTZBXCIsXHJcbiAgICAgICAgYm94U2hhZG93OiBcIjBweCA0cHggNHB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMjUpXCIsXHJcbiAgICAgIH0sXHJcbiAgICB9LFxyXG4gICAgQm94QWN0aXZlOiB7XHJcbiAgICAgIHdpZHRoOiBcIjkwJVwiLFxyXG4gICAgICB0cmFuc2l0aW9uOiBcIjAuMXNcIixcclxuICAgICAgYmFja2dyb3VuZENvbG9yOiBcIiNGRTYxNkFcIixcclxuICAgICAgYm9yZGVyUmFkaXVzOiBcIjVweFwiLFxyXG4gICAgICBib3hTaGFkb3c6IFwiMHB4IDRweCA0cHggMHB4IHJnYmEoMCwgMCwgMCwgMC4yNSlcIixcclxuICAgIH0sXHJcbiAgfTtcclxuICByZXR1cm4gKFxyXG4gICAgPFJlYWN0LkZyYWdtZW50PlxyXG4gICAgICA8RHJhd2VyXHJcbiAgICAgICAgYW5jaG9yPVwibGVmdFwiXHJcbiAgICAgICAgb3Blbj17b3BlbkRyYXdlcn1cclxuICAgICAgICBvbkNsb3NlPXsoKSA9PiBzZXRPcGVuRHJhd2VyKGZhbHNlKX1cclxuICAgICAgICBQYXBlclByb3BzPXt7IHN4OiB7IHdpZHRoOiBcIjI1MHB4XCIgfSB9fVxyXG4gICAgICA+XHJcbiAgICAgICAgPExpc3Q+XHJcbiAgICAgICAgICA8TGlua1xyXG4gICAgICAgICAgICBocmVmPVwiL2hvbWVwYWdlXCJcclxuICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICB0ZXh0RGVjb3JhdGlvbjogXCJub25lXCIsXHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgIG9uQ2xpY2s9eyhlKSA9PiBzZXRBY3RpdmVMaW5rKFwiL2hvbWVwYWdlXCIpfVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICA8Qm94XHJcbiAgICAgICAgICAgICAgc3g9e2FjdGl2ZUxpbmsgPT09IFwiL2hvbWVwYWdlXCIgPyBzdHlsZXMuQm94QWN0aXZlIDogc3R5bGVzLkJveH1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJtZW51XCIgbm9XcmFwPlxyXG4gICAgICAgICAgICAgICAgPEhvbWVPdXRsaW5lZEljb24gc3g9e3sgcHI6IDIgfX0gLz5cclxuICAgICAgICAgICAgICAgIOC4q+C4meC5ieC4suC4q+C4peC4seC4gVxyXG4gICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgPC9Cb3g+XHJcbiAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgPC9MaXN0PlxyXG4gICAgICA8L0RyYXdlcj5cclxuICAgICAgPEljb25CdXR0b25cclxuICAgICAgICBzeD17eyBjb2xvcjogXCJibGFja1wiIH19XHJcbiAgICAgICAgb25DbGljaz17KCkgPT4gc2V0T3BlbkRyYXdlcighb3BlbkRyYXdlcil9XHJcbiAgICAgID5cclxuICAgICAgICA8TWVudUljb24gY29sb3I9XCJ3aGl0ZVwiIC8+XHJcbiAgICAgIDwvSWNvbkJ1dHRvbj5cclxuICAgIDwvUmVhY3QuRnJhZ21lbnQ+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IERyYXdlckNvbXA7XHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsIkJveCIsIkRyYXdlciIsIkljb25CdXR0b24iLCJMaXN0IiwiTGlzdEl0ZW1CdXR0b24iLCJMaXN0SXRlbUljb24iLCJMaXN0SXRlbVRleHQiLCJUeXBvZ3JhcGh5IiwiTWVudUljb24iLCJMaW5rIiwiSG9tZU91dGxpbmVkSWNvbiIsInBhZ2VzIiwiRHJhd2VyQ29tcCIsIm9wZW5EcmF3ZXIiLCJzZXRPcGVuRHJhd2VyIiwidXNlU3RhdGUiLCJhY3RpdmVMaW5rIiwic2V0QWN0aXZlTGluayIsInN0eWxlcyIsIndpZHRoIiwidHJhbnNpdGlvbiIsIm0iLCJib3JkZXJSYWRpdXMiLCJiYWNrZ3JvdW5kQ29sb3IiLCJib3hTaGFkb3ciLCJCb3hBY3RpdmUiLCJGcmFnbWVudCIsImFuY2hvciIsIm9wZW4iLCJvbkNsb3NlIiwiUGFwZXJQcm9wcyIsInN4IiwiaHJlZiIsInN0eWxlIiwidGV4dERlY29yYXRpb24iLCJvbkNsaWNrIiwiZSIsInZhcmlhbnQiLCJub1dyYXAiLCJwciIsImNvbG9yIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/drawer.js\n"));

/***/ })

});