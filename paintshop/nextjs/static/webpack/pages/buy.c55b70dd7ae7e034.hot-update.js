"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/buy",{

/***/ "./src/pages/buy/index.js":
/*!********************************!*\
  !*** ./src/pages/buy/index.js ***!
  \********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Buy; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/layout */ \"./src/components/layout.js\");\n/* harmony import */ var _firebase_getData__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/firebase/getData */ \"./src/firebase/getData.js\");\n/* harmony import */ var _firebase_searchData__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/firebase/searchData */ \"./src/firebase/searchData.js\");\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @mui/material */ \"./node_modules/@mui/material/index.js\");\n/* harmony import */ var lodash_debounce__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lodash/debounce */ \"./node_modules/lodash/debounce.js\");\n/* harmony import */ var lodash_debounce__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(lodash_debounce__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _mui_icons_material_Search__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @mui/icons-material/Search */ \"./node_modules/@mui/icons-material/Search.js\");\n/* harmony import */ var _table__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./table */ \"./src/pages/buy/table.js\");\n/* harmony import */ var _context_ProductContext__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/context/ProductContext */ \"./src/context/ProductContext.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_8__);\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\nfunction Buy() {\n    _s();\n    const theme = (0,_mui_material__WEBPACK_IMPORTED_MODULE_9__.createTheme)({\n        palette: {\n            primary: {\n                main: \"#018294\"\n            },\n            success: {\n                main: \"#A9C470\"\n            },\n            error: {\n                main: \"#FE616A\"\n            }\n        }\n    });\n    const [searchTerm, setSearchTerm] = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(\"\");\n    const [documentData, setDocumentData] = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)([]);\n    (0,react__WEBPACK_IMPORTED_MODULE_5__.useEffect)(()=>{\n        fetchData();\n    }, []);\n    const debouncedSearch = lodash_debounce__WEBPACK_IMPORTED_MODULE_4___default()(async (term)=>{\n        try {\n            const collectionName = \"lots\";\n            const field = \"name\";\n            const results = await (0,_firebase_searchData__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(collectionName, field, term);\n            setDocumentData(results);\n        } catch (error) {\n            console.error(\"Error searching data:\", error);\n        }\n    }, 500);\n    const handleSearch = (term)=>{\n        setSearchTerm(term);\n        debouncedSearch(term);\n    };\n    const fetchData = async ()=>{\n        const collectionName = \"buy\";\n        const { result, error } = await (0,_firebase_getData__WEBPACK_IMPORTED_MODULE_2__.getCollection)(collectionName);\n        if (error) {\n            console.error(\"Error fetching document:\", error);\n        } else if (result) {\n            const lotData = result.docs.map((doc)=>({\n                    id: doc.id,\n                    ...doc.data()\n                }));\n            console.log(lotData);\n            setDocumentData(lotData);\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_layout__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_9__.ThemeProvider, {\n            theme: theme,\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_9__.Box, {\n                    sx: {\n                        height: \"100%\",\n                        width: \"100%\",\n                        mt: 5\n                    },\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_9__.Typography, {\n                            sx: {\n                                fontSize: \"2rem\",\n                                fontWeight: \"600\"\n                            },\n                            children: \"รายการซื้อ\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\ASUS\\\\OneDrive\\\\Desktop\\\\Project\\\\paintshop\\\\src\\\\pages\\\\buy\\\\index.js\",\n                            lineNumber: 76,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_9__.Box, {\n                            sx: {\n                                mt: 1\n                            },\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_9__.TextField, {\n                                label: \"ค้นหา\",\n                                variant: \"outlined\",\n                                size: \"small\",\n                                onChange: (e)=>handleSearch(e.target.value),\n                                InputProps: {\n                                    startAdornment: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_9__.InputAdornment, {\n                                        position: \"start\",\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_icons_material_Search__WEBPACK_IMPORTED_MODULE_10__[\"default\"], {\n                                            sx: {\n                                                fontSize: \"1.4rem\"\n                                            }\n                                        }, void 0, false, void 0, void 0)\n                                    }, void 0, false, void 0, void 0)\n                                }\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\ASUS\\\\OneDrive\\\\Desktop\\\\Project\\\\paintshop\\\\src\\\\pages\\\\buy\\\\index.js\",\n                                lineNumber: 80,\n                                columnNumber: 13\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\ASUS\\\\OneDrive\\\\Desktop\\\\Project\\\\paintshop\\\\src\\\\pages\\\\buy\\\\index.js\",\n                            lineNumber: 79,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\ASUS\\\\OneDrive\\\\Desktop\\\\Project\\\\paintshop\\\\src\\\\pages\\\\buy\\\\index.js\",\n                    lineNumber: 75,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_9__.Box, {\n                    sx: {\n                        display: \"flex\",\n                        justifyContent: {\n                            xl: \"flex-end\"\n                        }\n                    },\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_8___default()), {\n                        href: \"/add\",\n                        passHref: true,\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_9__.Button, {\n                            variant: \"contained\",\n                            color: \"success\",\n                            sx: {\n                                mr: 2,\n                                mb: 2,\n                                mt: 2\n                            },\n                            children: \"สร้างรายการซื้อ\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\ASUS\\\\OneDrive\\\\Desktop\\\\Project\\\\paintshop\\\\src\\\\pages\\\\buy\\\\index.js\",\n                            lineNumber: 97,\n                            columnNumber: 13\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\ASUS\\\\OneDrive\\\\Desktop\\\\Project\\\\paintshop\\\\src\\\\pages\\\\buy\\\\index.js\",\n                        lineNumber: 96,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\ASUS\\\\OneDrive\\\\Desktop\\\\Project\\\\paintshop\\\\src\\\\pages\\\\buy\\\\index.js\",\n                    lineNumber: 95,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_table__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                    data: {\n                        data: documentData\n                    }\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\ASUS\\\\OneDrive\\\\Desktop\\\\Project\\\\paintshop\\\\src\\\\pages\\\\buy\\\\index.js\",\n                    lineNumber: 106,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\ASUS\\\\OneDrive\\\\Desktop\\\\Project\\\\paintshop\\\\src\\\\pages\\\\buy\\\\index.js\",\n            lineNumber: 74,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\ASUS\\\\OneDrive\\\\Desktop\\\\Project\\\\paintshop\\\\src\\\\pages\\\\buy\\\\index.js\",\n        lineNumber: 73,\n        columnNumber: 5\n    }, this);\n}\n_s(Buy, \"FaGz7vHmKbt/mRWKFIPUNfpaBuI=\");\n_c = Buy;\nvar _c;\n$RefreshReg$(_c, \"Buy\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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S0wsOERBQUNqQyw4Q0FBU0E7b0JBQUM0QixNQUFNO3dCQUFFQSxNQUFNaEI7b0JBQWE7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBSTlDO0dBMUZ3QlQ7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL2J1eS9pbmRleC5qcz8zMmZhIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMYXlvdXQgZnJvbSBcIkAvY29tcG9uZW50cy9sYXlvdXRcIjtcclxuaW1wb3J0IHsgZ2V0Q29sbGVjdGlvbiB9IGZyb20gXCJAL2ZpcmViYXNlL2dldERhdGFcIjtcclxuaW1wb3J0IHNlYXJjaERhdGEgZnJvbSBcIkAvZmlyZWJhc2Uvc2VhcmNoRGF0YVwiO1xyXG5pbXBvcnQge1xyXG4gIEJveCxcclxuICBCdXR0b24sXHJcbiAgSW5wdXRBZG9ybm1lbnQsXHJcbiAgVGV4dEZpZWxkLFxyXG4gIFRoZW1lUHJvdmlkZXIsXHJcbiAgVHlwb2dyYXBoeSxcclxuICBjcmVhdGVUaGVtZSxcclxufSBmcm9tIFwiQG11aS9tYXRlcmlhbFwiO1xyXG5pbXBvcnQgeyBkZWJvdW5jZSB9IGZyb20gXCJsb2Rhc2hcIjtcclxuaW1wb3J0IHsgdXNlQ29udGV4dCwgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgU2VhcmNoSWNvbiBmcm9tIFwiQG11aS9pY29ucy1tYXRlcmlhbC9TZWFyY2hcIjtcclxuaW1wb3J0IFRhYmxlTG90cyBmcm9tIFwiLi90YWJsZVwiO1xyXG5pbXBvcnQgeyBQcm9kdWN0Q29udGV4dCB9IGZyb20gXCJAL2NvbnRleHQvUHJvZHVjdENvbnRleHRcIjtcclxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQnV5KCkge1xyXG4gIGNvbnN0IHRoZW1lID0gY3JlYXRlVGhlbWUoe1xyXG4gICAgcGFsZXR0ZToge1xyXG4gICAgICBwcmltYXJ5OiB7XHJcbiAgICAgICAgbWFpbjogXCIjMDE4Mjk0XCIsXHJcbiAgICAgIH0sXHJcbiAgICAgIHN1Y2Nlc3M6IHtcclxuICAgICAgICBtYWluOiBcIiNBOUM0NzBcIixcclxuICAgICAgfSxcclxuICAgICAgZXJyb3I6IHtcclxuICAgICAgICBtYWluOiBcIiNGRTYxNkFcIixcclxuICAgICAgfSxcclxuICAgIH0sXHJcbiAgfSk7XHJcblxyXG4gIGNvbnN0IFtzZWFyY2hUZXJtLCBzZXRTZWFyY2hUZXJtXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFtkb2N1bWVudERhdGEsIHNldERvY3VtZW50RGF0YV0gPSB1c2VTdGF0ZShbXSk7XHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGZldGNoRGF0YSgpO1xyXG4gIH0sIFtdKTtcclxuXHJcbiAgY29uc3QgZGVib3VuY2VkU2VhcmNoID0gZGVib3VuY2UoYXN5bmMgKHRlcm0pID0+IHtcclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IGNvbGxlY3Rpb25OYW1lID0gXCJsb3RzXCI7XHJcbiAgICAgIGNvbnN0IGZpZWxkID0gXCJuYW1lXCI7XHJcbiAgICAgIGNvbnN0IHJlc3VsdHMgPSBhd2FpdCBzZWFyY2hEYXRhKGNvbGxlY3Rpb25OYW1lLCBmaWVsZCwgdGVybSk7XHJcbiAgICAgIHNldERvY3VtZW50RGF0YShyZXN1bHRzKTtcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciBzZWFyY2hpbmcgZGF0YTpcIiwgZXJyb3IpO1xyXG4gICAgfVxyXG4gIH0sIDUwMCk7XHJcblxyXG4gIGNvbnN0IGhhbmRsZVNlYXJjaCA9ICh0ZXJtKSA9PiB7XHJcbiAgICBzZXRTZWFyY2hUZXJtKHRlcm0pO1xyXG4gICAgZGVib3VuY2VkU2VhcmNoKHRlcm0pO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGZldGNoRGF0YSA9IGFzeW5jICgpID0+IHtcclxuICAgIGNvbnN0IGNvbGxlY3Rpb25OYW1lID0gXCJidXlcIjtcclxuICAgIGNvbnN0IHsgcmVzdWx0LCBlcnJvciB9ID0gYXdhaXQgZ2V0Q29sbGVjdGlvbihjb2xsZWN0aW9uTmFtZSk7XHJcbiAgICBpZiAoZXJyb3IpIHtcclxuICAgICAgY29uc29sZS5lcnJvcihcIkVycm9yIGZldGNoaW5nIGRvY3VtZW50OlwiLCBlcnJvcik7XHJcbiAgICB9IGVsc2UgaWYgKHJlc3VsdCkge1xyXG4gICAgICBjb25zdCBsb3REYXRhID0gcmVzdWx0LmRvY3MubWFwKChkb2MpID0+ICh7XHJcbiAgICAgICAgaWQ6IGRvYy5pZCxcclxuICAgICAgICAuLi5kb2MuZGF0YSgpLFxyXG4gICAgICB9KSk7XHJcbiAgICAgIGNvbnNvbGUubG9nKGxvdERhdGEpO1xyXG4gICAgICBzZXREb2N1bWVudERhdGEobG90RGF0YSk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxMYXlvdXQ+XHJcbiAgICAgIDxUaGVtZVByb3ZpZGVyIHRoZW1lPXt0aGVtZX0+XHJcbiAgICAgICAgPEJveCBzeD17eyBoZWlnaHQ6IFwiMTAwJVwiLCB3aWR0aDogXCIxMDAlXCIsIG10OiA1IH19PlxyXG4gICAgICAgICAgPFR5cG9ncmFwaHkgc3g9e3sgZm9udFNpemU6IFwiMnJlbVwiLCBmb250V2VpZ2h0OiBcIjYwMFwiIH19PlxyXG4gICAgICAgICAgICDguKPguLLguKLguIHguLLguKPguIvguLfguYnguK1cclxuICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgIDxCb3ggc3g9e3sgbXQ6IDEgfX0+XHJcbiAgICAgICAgICAgIDxUZXh0RmllbGRcclxuICAgICAgICAgICAgICBsYWJlbD1cIuC4hOC5ieC4meC4q+C4slwiXHJcbiAgICAgICAgICAgICAgdmFyaWFudD1cIm91dGxpbmVkXCJcclxuICAgICAgICAgICAgICBzaXplPVwic21hbGxcIlxyXG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gaGFuZGxlU2VhcmNoKGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgICAgICBJbnB1dFByb3BzPXt7XHJcbiAgICAgICAgICAgICAgICBzdGFydEFkb3JubWVudDogKFxyXG4gICAgICAgICAgICAgICAgICA8SW5wdXRBZG9ybm1lbnQgcG9zaXRpb249XCJzdGFydFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxTZWFyY2hJY29uIHN4PXt7IGZvbnRTaXplOiBcIjEuNHJlbVwiIH19IC8+XHJcbiAgICAgICAgICAgICAgICAgIDwvSW5wdXRBZG9ybm1lbnQ+XHJcbiAgICAgICAgICAgICAgICApLFxyXG4gICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8L0JveD5cclxuICAgICAgICA8L0JveD5cclxuICAgICAgICA8Qm94IHN4PXt7IGRpc3BsYXk6IFwiZmxleFwiLCBqdXN0aWZ5Q29udGVudDogeyB4bDogXCJmbGV4LWVuZFwiIH0gfX0+XHJcbiAgICAgICAgICA8TGluayBocmVmPVwiL2FkZFwiIHBhc3NIcmVmPlxyXG4gICAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgICAgdmFyaWFudD1cImNvbnRhaW5lZFwiXHJcbiAgICAgICAgICAgICAgY29sb3I9XCJzdWNjZXNzXCJcclxuICAgICAgICAgICAgICBzeD17eyBtcjogMiwgbWI6IDIsIG10OiAyIH19XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICDguKrguKPguYnguLLguIfguKPguLLguKLguIHguLLguKPguIvguLfguYnguK1cclxuICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgPC9Cb3g+XHJcbiAgICAgICAgPFRhYmxlTG90cyBkYXRhPXt7IGRhdGE6IGRvY3VtZW50RGF0YSB9fSAvPlxyXG4gICAgICA8L1RoZW1lUHJvdmlkZXI+XHJcbiAgICA8L0xheW91dD5cclxuICApO1xyXG59XHJcbiJdLCJuYW1lcyI6WyJMYXlvdXQiLCJnZXRDb2xsZWN0aW9uIiwic2VhcmNoRGF0YSIsIkJveCIsIkJ1dHRvbiIsIklucHV0QWRvcm5tZW50IiwiVGV4dEZpZWxkIiwiVGhlbWVQcm92aWRlciIsIlR5cG9ncmFwaHkiLCJjcmVhdGVUaGVtZSIsImRlYm91bmNlIiwidXNlQ29udGV4dCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiU2VhcmNoSWNvbiIsIlRhYmxlTG90cyIsIlByb2R1Y3RDb250ZXh0IiwiTGluayIsIkJ1eSIsInRoZW1lIiwicGFsZXR0ZSIsInByaW1hcnkiLCJtYWluIiwic3VjY2VzcyIsImVycm9yIiwic2VhcmNoVGVybSIsInNldFNlYXJjaFRlcm0iLCJkb2N1bWVudERhdGEiLCJzZXREb2N1bWVudERhdGEiLCJmZXRjaERhdGEiLCJkZWJvdW5jZWRTZWFyY2giLCJ0ZXJtIiwiY29sbGVjdGlvbk5hbWUiLCJmaWVsZCIsInJlc3VsdHMiLCJjb25zb2xlIiwiaGFuZGxlU2VhcmNoIiwicmVzdWx0IiwibG90RGF0YSIsImRvY3MiLCJtYXAiLCJkb2MiLCJpZCIsImRhdGEiLCJsb2ciLCJzeCIsImhlaWdodCIsIndpZHRoIiwibXQiLCJmb250U2l6ZSIsImZvbnRXZWlnaHQiLCJsYWJlbCIsInZhcmlhbnQiLCJzaXplIiwib25DaGFuZ2UiLCJlIiwidGFyZ2V0IiwidmFsdWUiLCJJbnB1dFByb3BzIiwic3RhcnRBZG9ybm1lbnQiLCJwb3NpdGlvbiIsImRpc3BsYXkiLCJqdXN0aWZ5Q29udGVudCIsInhsIiwiaHJlZiIsInBhc3NIcmVmIiwiY29sb3IiLCJtciIsIm1iIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/buy/index.js\n"));

/***/ })

});