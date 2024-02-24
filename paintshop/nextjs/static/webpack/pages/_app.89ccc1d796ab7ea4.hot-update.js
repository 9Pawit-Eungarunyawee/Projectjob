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

/***/ "./src/context/ProductContext.js":
/*!***************************************!*\
  !*** ./src/context/ProductContext.js ***!
  \***************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   ProductContext: function() { return /* binding */ ProductContext; },\n/* harmony export */   \"default\": function() { return /* binding */ ProductProvider; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _firebase_getData__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/firebase/getData */ \"./src/firebase/getData.js\");\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mui/material */ \"./node_modules/@mui/material/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n\nvar _s = $RefreshSig$();\n\n\n\nconst ProductContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_2__.createContext)();\nfunction ProductProvider(param) {\n    let { children } = param;\n    _s();\n    const [productData, setProductData] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]);\n    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(true);\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        fetchProductData();\n    }, []);\n    const fetchProductData = async ()=>{\n        const collectionName = \"products\";\n        const { result, error } = await (0,_firebase_getData__WEBPACK_IMPORTED_MODULE_1__.getCollection)(collectionName);\n        if (error) {\n            console.error(\"Error fetching document:\", error);\n        } else if (result) {\n            const Data = result.docs.filter((doc)=>!doc.data().delete).map((doc)=>({\n                    id: doc.id,\n                    ...doc.data()\n                }));\n            // เรียงลำดับข้อมูลตามวันที่\n            const sortedData = Data.sort((a, b)=>{\n                return b.create.createAt.toMillis() - a.create.createAt.toMillis();\n            });\n            // ตั้งค่าข้อมูลใหม่ที่เรียงลำดับแล้ว\n            setProductData(sortedData);\n            setLoading(false);\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ProductContext.Provider, {\n        value: {\n            productData,\n            setProductData,\n            fetchProductData\n        },\n        children: loading ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Backdrop, {\n                    sx: {\n                        color: \"#fff\",\n                        zIndex: (theme)=>theme.zIndex.drawer + 1,\n                        backgroundColor: \"#018294\"\n                    },\n                    open: true,\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_3__.CircularProgress, {\n                            color: \"inherit\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\ASUS\\\\OneDrive\\\\Desktop\\\\Project\\\\paintshop\\\\src\\\\context\\\\ProductContext.js\",\n                            lineNumber: 52,\n                            columnNumber: 13\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Typography, {\n                            sx: {\n                                m: 2\n                            },\n                            children: \"กำลังโหลดสินค้า...\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\ASUS\\\\OneDrive\\\\Desktop\\\\Project\\\\paintshop\\\\src\\\\context\\\\ProductContext.js\",\n                            lineNumber: 53,\n                            columnNumber: 13\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\ASUS\\\\OneDrive\\\\Desktop\\\\Project\\\\paintshop\\\\src\\\\context\\\\ProductContext.js\",\n                    lineNumber: 44,\n                    columnNumber: 11\n                }, this),\n                children\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\ASUS\\\\OneDrive\\\\Desktop\\\\Project\\\\paintshop\\\\src\\\\context\\\\ProductContext.js\",\n            lineNumber: 43,\n            columnNumber: 9\n        }, this) : children\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\ASUS\\\\OneDrive\\\\Desktop\\\\Project\\\\paintshop\\\\src\\\\context\\\\ProductContext.js\",\n        lineNumber: 39,\n        columnNumber: 5\n    }, this);\n}\n_s(ProductProvider, \"FhVMuLSrk2dpD3X17T9jeAQRWvA=\");\n_c = ProductProvider;\nvar _c;\n$RefreshReg$(_c, \"ProductProvider\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29udGV4dC9Qcm9kdWN0Q29udGV4dC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQW1EO0FBQ29CO0FBQ0E7QUFFaEUsTUFBTVEsK0JBQWlCSixvREFBYUEsR0FBRztBQUUvQixTQUFTSyxnQkFBZ0IsS0FBWTtRQUFaLEVBQUVDLFFBQVEsRUFBRSxHQUFaOztJQUN0QyxNQUFNLENBQUNDLGFBQWFDLGVBQWUsR0FBR0wsK0NBQVFBLENBQUMsRUFBRTtJQUNqRCxNQUFNLENBQUNNLFNBQVNDLFdBQVcsR0FBR1AsK0NBQVFBLENBQUM7SUFFdkNELGdEQUFTQSxDQUFDO1FBQ1JTO0lBQ0YsR0FBRyxFQUFFO0lBRUwsTUFBTUEsbUJBQW1CO1FBQ3ZCLE1BQU1DLGlCQUFpQjtRQUN2QixNQUFNLEVBQUVDLE1BQU0sRUFBRUMsS0FBSyxFQUFFLEdBQUcsTUFBTWxCLGdFQUFhQSxDQUFDZ0I7UUFDOUMsSUFBSUUsT0FBTztZQUNUQyxRQUFRRCxLQUFLLENBQUMsNEJBQTRCQTtRQUM1QyxPQUFPLElBQUlELFFBQVE7WUFDakIsTUFBTUcsT0FBT0gsT0FBT0ksSUFBSSxDQUNyQkMsTUFBTSxDQUFDLENBQUNDLE1BQVEsQ0FBQ0EsSUFBSUMsSUFBSSxHQUFHQyxNQUFNLEVBQ2xDQyxHQUFHLENBQUMsQ0FBQ0gsTUFBUztvQkFDYkksSUFBSUosSUFBSUksRUFBRTtvQkFDVixHQUFHSixJQUFJQyxJQUFJLEVBQUU7Z0JBQ2Y7WUFFRiw0QkFBNEI7WUFDNUIsTUFBTUksYUFBYVIsS0FBS1MsSUFBSSxDQUFDLENBQUNDLEdBQUdDO2dCQUMvQixPQUFPQSxFQUFFQyxNQUFNLENBQUNDLFFBQVEsQ0FBQ0MsUUFBUSxLQUFLSixFQUFFRSxNQUFNLENBQUNDLFFBQVEsQ0FBQ0MsUUFBUTtZQUNsRTtZQUVBLHFDQUFxQztZQUNyQ3RCLGVBQWVnQjtZQUNmZCxXQUFXO1FBQ2I7SUFDRjtJQUNBLHFCQUNFLDhEQUFDTixlQUFlMkIsUUFBUTtRQUN0QkMsT0FBTztZQUFFekI7WUFBYUM7WUFBZ0JHO1FBQWlCO2tCQUV0REYsd0JBQ0MsOERBQUN3Qjs7OEJBQ0MsOERBQUNwQyxtREFBUUE7b0JBQ1BxQyxJQUFJO3dCQUNGQyxPQUFPO3dCQUNQQyxRQUFRLENBQUNDLFFBQVVBLE1BQU1ELE1BQU0sQ0FBQ0UsTUFBTSxHQUFHO3dCQUN6Q0MsaUJBQWlCO29CQUNuQjtvQkFDQUMsTUFBTTs7c0NBRU4sOERBQUMxQywyREFBZ0JBOzRCQUFDcUMsT0FBTTs7Ozs7O3NDQUN4Qiw4REFBQ3BDLHFEQUFVQTs0QkFBQ21DLElBQUk7Z0NBQUVPLEdBQUc7NEJBQUU7c0NBQUc7Ozs7Ozs7Ozs7OztnQkFFM0JuQzs7Ozs7O21CQUdIQTs7Ozs7O0FBSVI7R0F2RHdCRDtLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29udGV4dC9Qcm9kdWN0Q29udGV4dC5qcz9mMjM0Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGdldENvbGxlY3Rpb24gfSBmcm9tIFwiQC9maXJlYmFzZS9nZXREYXRhXCI7XHJcbmltcG9ydCB7IEJhY2tkcm9wLCBDaXJjdWxhclByb2dyZXNzLCBUeXBvZ3JhcGh5IH0gZnJvbSBcIkBtdWkvbWF0ZXJpYWxcIjtcclxuaW1wb3J0IHsgY3JlYXRlQ29udGV4dCwgdXNlQ29udGV4dCwgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IFByb2R1Y3RDb250ZXh0ID0gY3JlYXRlQ29udGV4dCgpO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUHJvZHVjdFByb3ZpZGVyKHsgY2hpbGRyZW4gfSkge1xyXG4gIGNvbnN0IFtwcm9kdWN0RGF0YSwgc2V0UHJvZHVjdERhdGFdID0gdXNlU3RhdGUoW10pO1xyXG4gIGNvbnN0IFtsb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlKHRydWUpO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgZmV0Y2hQcm9kdWN0RGF0YSgpO1xyXG4gIH0sIFtdKTtcclxuXHJcbiAgY29uc3QgZmV0Y2hQcm9kdWN0RGF0YSA9IGFzeW5jICgpID0+IHtcclxuICAgIGNvbnN0IGNvbGxlY3Rpb25OYW1lID0gXCJwcm9kdWN0c1wiO1xyXG4gICAgY29uc3QgeyByZXN1bHQsIGVycm9yIH0gPSBhd2FpdCBnZXRDb2xsZWN0aW9uKGNvbGxlY3Rpb25OYW1lKTtcclxuICAgIGlmIChlcnJvcikge1xyXG4gICAgICBjb25zb2xlLmVycm9yKFwiRXJyb3IgZmV0Y2hpbmcgZG9jdW1lbnQ6XCIsIGVycm9yKTtcclxuICAgIH0gZWxzZSBpZiAocmVzdWx0KSB7XHJcbiAgICAgIGNvbnN0IERhdGEgPSByZXN1bHQuZG9jc1xyXG4gICAgICAgIC5maWx0ZXIoKGRvYykgPT4gIWRvYy5kYXRhKCkuZGVsZXRlKVxyXG4gICAgICAgIC5tYXAoKGRvYykgPT4gKHtcclxuICAgICAgICAgIGlkOiBkb2MuaWQsXHJcbiAgICAgICAgICAuLi5kb2MuZGF0YSgpLFxyXG4gICAgICAgIH0pKTtcclxuXHJcbiAgICAgIC8vIOC5gOC4o+C4teC4ouC4h+C4peC4s+C4lOC4seC4muC4guC5ieC4reC4oeC4ueC4peC4leC4suC4oeC4p+C4seC4meC4l+C4teC5iFxyXG4gICAgICBjb25zdCBzb3J0ZWREYXRhID0gRGF0YS5zb3J0KChhLCBiKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIGIuY3JlYXRlLmNyZWF0ZUF0LnRvTWlsbGlzKCkgLSBhLmNyZWF0ZS5jcmVhdGVBdC50b01pbGxpcygpO1xyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIC8vIOC4leC4seC5ieC4h+C4hOC5iOC4suC4guC5ieC4reC4oeC4ueC4peC5g+C4q+C4oeC5iOC4l+C4teC5iOC5gOC4o+C4teC4ouC4h+C4peC4s+C4lOC4seC4muC5geC4peC5ieC4p1xyXG4gICAgICBzZXRQcm9kdWN0RGF0YShzb3J0ZWREYXRhKTtcclxuICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XHJcbiAgICB9XHJcbiAgfTtcclxuICByZXR1cm4gKFxyXG4gICAgPFByb2R1Y3RDb250ZXh0LlByb3ZpZGVyXHJcbiAgICAgIHZhbHVlPXt7IHByb2R1Y3REYXRhLCBzZXRQcm9kdWN0RGF0YSwgZmV0Y2hQcm9kdWN0RGF0YSB9fVxyXG4gICAgPlxyXG4gICAgICB7bG9hZGluZyA/IChcclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgPEJhY2tkcm9wXHJcbiAgICAgICAgICAgIHN4PXt7XHJcbiAgICAgICAgICAgICAgY29sb3I6IFwiI2ZmZlwiLFxyXG4gICAgICAgICAgICAgIHpJbmRleDogKHRoZW1lKSA9PiB0aGVtZS56SW5kZXguZHJhd2VyICsgMSxcclxuICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IFwiIzAxODI5NFwiLCAvLyDguKrguLXguJ/guYnguLLguYPguKpcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgb3Blbj17dHJ1ZX1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPENpcmN1bGFyUHJvZ3Jlc3MgY29sb3I9XCJpbmhlcml0XCIgLz5cclxuICAgICAgICAgICAgPFR5cG9ncmFwaHkgc3g9e3sgbTogMiB9fT7guIHguLPguKXguLHguIfguYLguKvguKXguJTguKrguLTguJnguITguYnguLIuLi48L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICA8L0JhY2tkcm9wPlxyXG4gICAgICAgICAge2NoaWxkcmVufVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICApIDogKFxyXG4gICAgICAgIGNoaWxkcmVuXHJcbiAgICAgICl9XHJcbiAgICA8L1Byb2R1Y3RDb250ZXh0LlByb3ZpZGVyPlxyXG4gICk7XHJcbn1cclxuIl0sIm5hbWVzIjpbImdldENvbGxlY3Rpb24iLCJCYWNrZHJvcCIsIkNpcmN1bGFyUHJvZ3Jlc3MiLCJUeXBvZ3JhcGh5IiwiY3JlYXRlQ29udGV4dCIsInVzZUNvbnRleHQiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIlByb2R1Y3RDb250ZXh0IiwiUHJvZHVjdFByb3ZpZGVyIiwiY2hpbGRyZW4iLCJwcm9kdWN0RGF0YSIsInNldFByb2R1Y3REYXRhIiwibG9hZGluZyIsInNldExvYWRpbmciLCJmZXRjaFByb2R1Y3REYXRhIiwiY29sbGVjdGlvbk5hbWUiLCJyZXN1bHQiLCJlcnJvciIsImNvbnNvbGUiLCJEYXRhIiwiZG9jcyIsImZpbHRlciIsImRvYyIsImRhdGEiLCJkZWxldGUiLCJtYXAiLCJpZCIsInNvcnRlZERhdGEiLCJzb3J0IiwiYSIsImIiLCJjcmVhdGUiLCJjcmVhdGVBdCIsInRvTWlsbGlzIiwiUHJvdmlkZXIiLCJ2YWx1ZSIsImRpdiIsInN4IiwiY29sb3IiLCJ6SW5kZXgiLCJ0aGVtZSIsImRyYXdlciIsImJhY2tncm91bmRDb2xvciIsIm9wZW4iLCJtIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/context/ProductContext.js\n"));

/***/ })

});