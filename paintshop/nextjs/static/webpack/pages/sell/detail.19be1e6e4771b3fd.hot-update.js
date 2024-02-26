"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/sell/detail",{

/***/ "./src/pages/sell/detail.js":
/*!**********************************!*\
  !*** ./src/pages/sell/detail.js ***!
  \**********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Detail; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/layout */ \"./src/components/layout.js\");\n/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @emotion/react */ \"./node_modules/@emotion/react/dist/emotion-react.browser.esm.js\");\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mui/material */ \"./node_modules/@mui/material/index.js\");\n/* harmony import */ var _mui_icons_material_ArrowBackOutlined__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mui/icons-material/ArrowBackOutlined */ \"./node_modules/@mui/icons-material/ArrowBackOutlined.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\nfunction Detail() {\n    _s();\n    const goBack = ()=>{\n        window.history.back();\n    };\n    const theme = (0,_mui_material__WEBPACK_IMPORTED_MODULE_4__.createTheme)({\n        palette: {\n            primary: {\n                main: \"#018294\"\n            },\n            success: {\n                main: \"#A9C470\"\n            },\n            error: {\n                main: \"#FE616A\"\n            }\n        }\n    });\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();\n    const buy_id = JSON.parse(router.query.id);\n    const [sellData, setSellData] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]);\n    useEffect(()=>{\n        fetchData();\n    }, []);\n    const fetchData = async ()=>{\n        const collectionName = \"sell\";\n        const { result, error } = await getDoument(collectionName, buy_id);\n        if (error) {\n            console.error(\"Error fetching document:\", error);\n        } else if (result) {\n            const Data = result.data();\n            setSellData(Data);\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_layout__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_emotion_react__WEBPACK_IMPORTED_MODULE_5__.ThemeProvider, {\n            theme: theme,\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Typography, {\n                    sx: {\n                        fontSize: \"2rem\",\n                        fontWeight: \"600\",\n                        mt: 5\n                    },\n                    children: \"รายละเอียดรายการขาย\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\ASUS\\\\OneDrive\\\\Desktop\\\\Project\\\\paintshop\\\\src\\\\pages\\\\sell\\\\detail.js\",\n                    lineNumber: 43,\n                    columnNumber: 7\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Button, {\n                    sx: {\n                        color: \"#018294\",\n                        bgcolor: \"white\",\n                        fontWeight: \"bold\",\n                        borderRadius: \"50px\",\n                        boxShadow: \"4px 4px 4px 0px rgba(0, 0, 0, 0.25)\"\n                    },\n                    onClick: goBack,\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_icons_material_ArrowBackOutlined__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {}, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\ASUS\\\\OneDrive\\\\Desktop\\\\Project\\\\paintshop\\\\src\\\\pages\\\\sell\\\\detail.js\",\n                            lineNumber: 56,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Typography, {\n                            children: \" ย้อนกลับ\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\ASUS\\\\OneDrive\\\\Desktop\\\\Project\\\\paintshop\\\\src\\\\pages\\\\sell\\\\detail.js\",\n                            lineNumber: 57,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\ASUS\\\\OneDrive\\\\Desktop\\\\Project\\\\paintshop\\\\src\\\\pages\\\\sell\\\\detail.js\",\n                    lineNumber: 46,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\ASUS\\\\OneDrive\\\\Desktop\\\\Project\\\\paintshop\\\\src\\\\pages\\\\sell\\\\detail.js\",\n            lineNumber: 42,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\ASUS\\\\OneDrive\\\\Desktop\\\\Project\\\\paintshop\\\\src\\\\pages\\\\sell\\\\detail.js\",\n        lineNumber: 41,\n        columnNumber: 5\n    }, this);\n}\n_s(Detail, \"0fAwHB6KcLWtdEnA+X3XPw944AQ=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter\n    ];\n});\n_c = Detail;\nvar _c;\n$RefreshReg$(_c, \"Detail\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvc2VsbC9kZXRhaWwuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUF5QztBQUNNO0FBQ3NCO0FBQ0s7QUFDekM7QUFDTztBQUN6QixTQUFTUzs7SUFDdEIsTUFBTUMsU0FBUztRQUNiQyxPQUFPQyxPQUFPLENBQUNDLElBQUk7SUFDckI7SUFDQSxNQUFNQyxRQUFRVCwwREFBV0EsQ0FBQztRQUN4QlUsU0FBUztZQUNQQyxTQUFTO2dCQUNQQyxNQUFNO1lBQ1I7WUFDQUMsU0FBUztnQkFDUEQsTUFBTTtZQUNSO1lBQ0FFLE9BQU87Z0JBQ0xGLE1BQU07WUFDUjtRQUNGO0lBQ0Y7SUFDQSxNQUFNRyxTQUFTWixzREFBU0E7SUFDeEIsTUFBTWEsU0FBU0MsS0FBS0MsS0FBSyxDQUFDSCxPQUFPSSxLQUFLLENBQUNDLEVBQUU7SUFDekMsTUFBTSxDQUFDQyxVQUFTQyxZQUFZLEdBQUdwQiwrQ0FBUUEsQ0FBQyxFQUFFO0lBQzFDcUIsVUFBVTtRQUNSQztJQUNGLEdBQUcsRUFBRTtJQUNMLE1BQU1BLFlBQVk7UUFDaEIsTUFBTUMsaUJBQWlCO1FBQ3ZCLE1BQU0sRUFBRUMsTUFBTSxFQUFFWixLQUFLLEVBQUUsR0FBRyxNQUFNYSxXQUFXRixnQkFBZ0JUO1FBQzNELElBQUlGLE9BQU87WUFDVGMsUUFBUWQsS0FBSyxDQUFDLDRCQUE0QkE7UUFDNUMsT0FBTyxJQUFJWSxRQUFRO1lBQ2pCLE1BQU1HLE9BQU9ILE9BQU9JLElBQUk7WUFDeEJSLFlBQVlPO1FBQ2Q7SUFDRjtJQUNBLHFCQUNFLDhEQUFDbEMsMERBQU1BO2tCQUNMLDRFQUFDQyx5REFBYUE7WUFBQ2EsT0FBT0E7OzhCQUN0Qiw4REFBQ1YscURBQVVBO29CQUFDZ0MsSUFBSTt3QkFBRUMsVUFBVTt3QkFBUUMsWUFBWTt3QkFBT0MsSUFBSTtvQkFBRTs4QkFBRzs7Ozs7OzhCQUc5RCw4REFBQ3BDLGlEQUFNQTtvQkFDTGlDLElBQUk7d0JBQ0ZJLE9BQU87d0JBQ1BDLFNBQVM7d0JBQ1RILFlBQVk7d0JBQ1pJLGNBQWM7d0JBQ2RDLFdBQVc7b0JBQ2I7b0JBQ0FDLFNBQVNsQzs7c0NBRVQsOERBQUNKLDZFQUFxQkE7Ozs7O3NDQUN0Qiw4REFBQ0YscURBQVVBO3NDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUt0QjtHQXZEd0JLOztRQWlCUEQsa0RBQVNBOzs7S0FqQkZDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9wYWdlcy9zZWxsL2RldGFpbC5qcz80OGQwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMYXlvdXQgZnJvbSBcIkAvY29tcG9uZW50cy9sYXlvdXRcIjtcclxuaW1wb3J0IHsgVGhlbWVQcm92aWRlciB9IGZyb20gXCJAZW1vdGlvbi9yZWFjdFwiO1xyXG5pbXBvcnQgeyBCb3gsIEJ1dHRvbiwgVHlwb2dyYXBoeSwgY3JlYXRlVGhlbWUgfSBmcm9tIFwiQG11aS9tYXRlcmlhbFwiO1xyXG5pbXBvcnQgQXJyb3dCYWNrT3V0bGluZWRJY29uIGZyb20gXCJAbXVpL2ljb25zLW1hdGVyaWFsL0Fycm93QmFja091dGxpbmVkXCI7XHJcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBEZXRhaWwoKSB7XHJcbiAgY29uc3QgZ29CYWNrID0gKCkgPT4ge1xyXG4gICAgd2luZG93Lmhpc3RvcnkuYmFjaygpO1xyXG4gIH07XHJcbiAgY29uc3QgdGhlbWUgPSBjcmVhdGVUaGVtZSh7XHJcbiAgICBwYWxldHRlOiB7XHJcbiAgICAgIHByaW1hcnk6IHtcclxuICAgICAgICBtYWluOiBcIiMwMTgyOTRcIixcclxuICAgICAgfSxcclxuICAgICAgc3VjY2Vzczoge1xyXG4gICAgICAgIG1haW46IFwiI0E5QzQ3MFwiLFxyXG4gICAgICB9LFxyXG4gICAgICBlcnJvcjoge1xyXG4gICAgICAgIG1haW46IFwiI0ZFNjE2QVwiLFxyXG4gICAgICB9LFxyXG4gICAgfSxcclxuICB9KTtcclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuICBjb25zdCBidXlfaWQgPSBKU09OLnBhcnNlKHJvdXRlci5xdWVyeS5pZCk7XHJcbiAgY29uc3QgW3NlbGxEYXRhLHNldFNlbGxEYXRhXSA9IHVzZVN0YXRlKFtdKVxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBmZXRjaERhdGEoKTtcclxuICB9LCBbXSk7XHJcbiAgY29uc3QgZmV0Y2hEYXRhID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgY29uc3QgY29sbGVjdGlvbk5hbWUgPSBcInNlbGxcIjtcclxuICAgIGNvbnN0IHsgcmVzdWx0LCBlcnJvciB9ID0gYXdhaXQgZ2V0RG91bWVudChjb2xsZWN0aW9uTmFtZSwgYnV5X2lkKTtcclxuICAgIGlmIChlcnJvcikge1xyXG4gICAgICBjb25zb2xlLmVycm9yKFwiRXJyb3IgZmV0Y2hpbmcgZG9jdW1lbnQ6XCIsIGVycm9yKTtcclxuICAgIH0gZWxzZSBpZiAocmVzdWx0KSB7XHJcbiAgICAgIGNvbnN0IERhdGEgPSByZXN1bHQuZGF0YSgpO1xyXG4gICAgICBzZXRTZWxsRGF0YShEYXRhKTtcclxuICAgIH1cclxuICB9O1xyXG4gIHJldHVybiAoXHJcbiAgICA8TGF5b3V0PlxyXG4gICAgICA8VGhlbWVQcm92aWRlciB0aGVtZT17dGhlbWV9PlxyXG4gICAgICA8VHlwb2dyYXBoeSBzeD17eyBmb250U2l6ZTogXCIycmVtXCIsIGZvbnRXZWlnaHQ6IFwiNjAwXCIsIG10OiA1IH19PlxyXG4gICAgICAgICAg4Lij4Liy4Lii4Lil4Liw4LmA4Lit4Li14Lii4LiU4Lij4Liy4Lii4LiB4Liy4Lij4LiC4Liy4LiiXHJcbiAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgIDxCdXR0b25cclxuICAgICAgICAgIHN4PXt7XHJcbiAgICAgICAgICAgIGNvbG9yOiBcIiMwMTgyOTRcIixcclxuICAgICAgICAgICAgYmdjb2xvcjogXCJ3aGl0ZVwiLFxyXG4gICAgICAgICAgICBmb250V2VpZ2h0OiBcImJvbGRcIixcclxuICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiBcIjUwcHhcIixcclxuICAgICAgICAgICAgYm94U2hhZG93OiBcIjRweCA0cHggNHB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMjUpXCIsXHJcbiAgICAgICAgICB9fVxyXG4gICAgICAgICAgb25DbGljaz17Z29CYWNrfVxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxBcnJvd0JhY2tPdXRsaW5lZEljb24gLz5cclxuICAgICAgICAgIDxUeXBvZ3JhcGh5PiDguKLguYnguK3guJnguIHguKXguLHguJo8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgIDwvVGhlbWVQcm92aWRlcj5cclxuICAgIDwvTGF5b3V0PlxyXG4gICk7XHJcbn1cclxuIl0sIm5hbWVzIjpbIkxheW91dCIsIlRoZW1lUHJvdmlkZXIiLCJCb3giLCJCdXR0b24iLCJUeXBvZ3JhcGh5IiwiY3JlYXRlVGhlbWUiLCJBcnJvd0JhY2tPdXRsaW5lZEljb24iLCJ1c2VTdGF0ZSIsInVzZVJvdXRlciIsIkRldGFpbCIsImdvQmFjayIsIndpbmRvdyIsImhpc3RvcnkiLCJiYWNrIiwidGhlbWUiLCJwYWxldHRlIiwicHJpbWFyeSIsIm1haW4iLCJzdWNjZXNzIiwiZXJyb3IiLCJyb3V0ZXIiLCJidXlfaWQiLCJKU09OIiwicGFyc2UiLCJxdWVyeSIsImlkIiwic2VsbERhdGEiLCJzZXRTZWxsRGF0YSIsInVzZUVmZmVjdCIsImZldGNoRGF0YSIsImNvbGxlY3Rpb25OYW1lIiwicmVzdWx0IiwiZ2V0RG91bWVudCIsImNvbnNvbGUiLCJEYXRhIiwiZGF0YSIsInN4IiwiZm9udFNpemUiLCJmb250V2VpZ2h0IiwibXQiLCJjb2xvciIsImJnY29sb3IiLCJib3JkZXJSYWRpdXMiLCJib3hTaGFkb3ciLCJvbkNsaWNrIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/sell/detail.js\n"));

/***/ })

});