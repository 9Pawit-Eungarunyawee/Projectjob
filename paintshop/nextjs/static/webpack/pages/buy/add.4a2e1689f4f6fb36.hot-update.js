"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/buy/add",{

/***/ "./src/firebase/addBuy.js":
/*!********************************!*\
  !*** ./src/firebase/addBuy.js ***!
  \********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   cancelBuy: function() { return /* binding */ cancelBuy; },\n/* harmony export */   \"default\": function() { return /* binding */ addBuy; },\n/* harmony export */   editBuy: function() { return /* binding */ editBuy; }\n/* harmony export */ });\n/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./config */ \"./src/firebase/config.js\");\n/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! firebase/firestore */ \"./node_modules/firebase/firestore/dist/esm/index.esm.js\");\n\n\nconst db = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.getFirestore)(_config__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\nasync function addBuy(collectionName, data) {\n    let result = null;\n    let error = null;\n    try {\n        // เพิ่มข้อมูลเข้าคอลเลคชันตาม collectionName ด้วยข้อมูลที่เตรียมไว้\n        const buyData = {\n            name: data.name,\n            createAt: firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.Timestamp.fromDate(new Date(data.createAt)),\n            // products: data.products.map((product) => ({\n            //   ...product,\n            //   product_exp: Timestamp.fromDate(new Date(product.product_exp)),\n            // })),\n            products: data.products,\n            discount: data.discount !== \"\" ? data.discount : 0,\n            shippingCost: data.shippingCost !== \"\" ? data.shippingCost : 0,\n            user_id: data.user_id,\n            totalCost: data.totalCost,\n            status: \"สำเร็จ\"\n        };\n        result = await (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.addDoc)((0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.collection)(db, collectionName), buyData);\n        console.log(\"สร้างรายการซื้อสำเร็จ\", result);\n    } catch (e) {\n        error = e;\n        console.error(\"เกิดข้อผิดพลาดในการสร้างรายการซื้อ:\", error);\n    }\n    return {\n        result,\n        error\n    };\n}\nasync function editBuy(colllection, id, data) {\n    let result = null;\n    let error = null;\n    co;\n    const buyData = {\n        name: data.name,\n        createAt: firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.Timestamp.fromDate(new Date(data.createAt)),\n        // products: data.products.map((product) => ({\n        //   ...product,\n        //   product_exp: Timestamp.fromDate(new Date(product.product_exp)),\n        // })),\n        products: data.products,\n        discount: data.discount !== \"\" ? data.discount : 0,\n        shippingCost: data.shippingCost !== \"\" ? data.shippingCost : 0,\n        user_id: data.user_id,\n        totalCost: data.totalCost,\n        status: \"สำเร็จ\"\n    };\n    try {\n        result = await (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.setDoc)((0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.doc)(db, colllection, id), buyData, {\n            merge: true\n        });\n        console.log(\"แก้ไขสำเร็จ\", result);\n    } catch (e) {\n        error = e;\n        console.error(\"เกิดข้อผิดพลาดในการแก้ไขข้อมูล:\", error);\n    }\n    return {\n        result,\n        error\n    };\n}\nasync function cancelBuy(colllection, id) {\n    let result = null;\n    let error = null;\n    const buyData = {\n        status: \"ยกเลิก\"\n    };\n    try {\n        result = await (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.setDoc)((0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.doc)(db, colllection, id), buyData, {\n            merge: true\n        });\n        console.log(\"ยกเลิกรายการสำเร็จ\", result);\n    } catch (e) {\n        error = e;\n        console.error(\"เกิดข้อผิดพลาดในการยกเลิกรายการข้อมูล:\", error);\n    }\n    return {\n        result,\n        error\n    };\n}\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvZmlyZWJhc2UvYWRkQnV5LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQW9DO0FBUVI7QUFFNUIsTUFBTU8sS0FBS04sZ0VBQVlBLENBQUNELCtDQUFZQTtBQUVyQixlQUFlUSxPQUFPQyxjQUFjLEVBQUVDLElBQUk7SUFDdkQsSUFBSUMsU0FBUztJQUNiLElBQUlDLFFBQVE7SUFFWixJQUFJO1FBQ0Ysb0VBQW9FO1FBRXBFLE1BQU1DLFVBQVU7WUFDZEMsTUFBTUosS0FBS0ksSUFBSTtZQUNmQyxVQUFVWCx5REFBU0EsQ0FBQ1ksUUFBUSxDQUFDLElBQUlDLEtBQUtQLEtBQUtLLFFBQVE7WUFDbkQsOENBQThDO1lBQzlDLGdCQUFnQjtZQUNoQixvRUFBb0U7WUFDcEUsT0FBTztZQUNQRyxVQUFTUixLQUFLUSxRQUFRO1lBQ3RCQyxVQUFVVCxLQUFLUyxRQUFRLEtBQUssS0FBS1QsS0FBS1MsUUFBUSxHQUFHO1lBQ2pEQyxjQUFjVixLQUFLVSxZQUFZLEtBQUssS0FBS1YsS0FBS1UsWUFBWSxHQUFHO1lBQzdEQyxTQUFTWCxLQUFLVyxPQUFPO1lBQ3JCQyxXQUFXWixLQUFLWSxTQUFTO1lBQ3pCQyxRQUFRO1FBQ1Y7UUFFQVosU0FBUyxNQUFNUiwwREFBTUEsQ0FBQ0QsOERBQVVBLENBQUNLLElBQUlFLGlCQUFpQkk7UUFFdERXLFFBQVFDLEdBQUcsQ0FBQyx5QkFBeUJkO0lBQ3ZDLEVBQUUsT0FBT2UsR0FBRztRQUNWZCxRQUFRYztRQUNSRixRQUFRWixLQUFLLENBQUMsdUNBQXVDQTtJQUN2RDtJQUVBLE9BQU87UUFBRUQ7UUFBUUM7SUFBTTtBQUN6QjtBQUNPLGVBQWVlLFFBQVFDLFdBQVcsRUFBRUMsRUFBRSxFQUFFbkIsSUFBSTtJQUNqRCxJQUFJQyxTQUFTO0lBQ2IsSUFBSUMsUUFBUTtJQUVYa0I7SUFFRCxNQUFNakIsVUFBVTtRQUNkQyxNQUFNSixLQUFLSSxJQUFJO1FBQ2ZDLFVBQVVYLHlEQUFTQSxDQUFDWSxRQUFRLENBQUMsSUFBSUMsS0FBS1AsS0FBS0ssUUFBUTtRQUNuRCw4Q0FBOEM7UUFDOUMsZ0JBQWdCO1FBQ2hCLG9FQUFvRTtRQUNwRSxPQUFPO1FBQ1BHLFVBQVNSLEtBQUtRLFFBQVE7UUFDdEJDLFVBQVVULEtBQUtTLFFBQVEsS0FBSyxLQUFLVCxLQUFLUyxRQUFRLEdBQUc7UUFDakRDLGNBQWNWLEtBQUtVLFlBQVksS0FBSyxLQUFLVixLQUFLVSxZQUFZLEdBQUc7UUFDN0RDLFNBQVNYLEtBQUtXLE9BQU87UUFDckJDLFdBQVdaLEtBQUtZLFNBQVM7UUFDekJDLFFBQVE7SUFDVjtJQUVBLElBQUk7UUFDRlosU0FBUyxNQUFNTiwwREFBTUEsQ0FBQ0MsdURBQUdBLENBQUNDLElBQUlxQixhQUFhQyxLQUFLaEIsU0FBUztZQUN2RGtCLE9BQU87UUFDVDtRQUNBUCxRQUFRQyxHQUFHLENBQUMsZUFBY2Q7SUFDNUIsRUFBRSxPQUFPZSxHQUFHO1FBQ1ZkLFFBQVFjO1FBQ1JGLFFBQVFaLEtBQUssQ0FBQyxtQ0FBbUNBO0lBQ25EO0lBR0EsT0FBTztRQUFFRDtRQUFRQztJQUFNO0FBQ3pCO0FBRU8sZUFBZW9CLFVBQVVKLFdBQVcsRUFBRUMsRUFBRTtJQUM3QyxJQUFJbEIsU0FBUztJQUNiLElBQUlDLFFBQVE7SUFFWixNQUFNQyxVQUFVO1FBQ2RVLFFBQVE7SUFDVjtJQUVBLElBQUk7UUFDRlosU0FBUyxNQUFNTiwwREFBTUEsQ0FBQ0MsdURBQUdBLENBQUNDLElBQUlxQixhQUFhQyxLQUFLaEIsU0FBUztZQUN2RGtCLE9BQU87UUFDVDtRQUNBUCxRQUFRQyxHQUFHLENBQUMsc0JBQXFCZDtJQUNuQyxFQUFFLE9BQU9lLEdBQUc7UUFDVmQsUUFBUWM7UUFDUkYsUUFBUVosS0FBSyxDQUFDLDBDQUEwQ0E7SUFDMUQ7SUFFQSxPQUFPO1FBQUVEO1FBQVFDO0lBQU07QUFDekIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2ZpcmViYXNlL2FkZEJ1eS5qcz9jNjQ3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBmaXJlYmFzZV9hcHAgZnJvbSBcIi4vY29uZmlnXCI7XHJcbmltcG9ydCB7XHJcbiAgZ2V0RmlyZXN0b3JlLFxyXG4gIGNvbGxlY3Rpb24sXHJcbiAgYWRkRG9jLFxyXG4gIFRpbWVzdGFtcCxcclxuICBzZXREb2MsXHJcbiAgZG9jLFxyXG59IGZyb20gXCJmaXJlYmFzZS9maXJlc3RvcmVcIjtcclxuXHJcbmNvbnN0IGRiID0gZ2V0RmlyZXN0b3JlKGZpcmViYXNlX2FwcCk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBhZGRCdXkoY29sbGVjdGlvbk5hbWUsIGRhdGEpIHtcclxuICBsZXQgcmVzdWx0ID0gbnVsbDtcclxuICBsZXQgZXJyb3IgPSBudWxsO1xyXG5cclxuICB0cnkge1xyXG4gICAgLy8g4LmA4Lie4Li04LmI4Lih4LiC4LmJ4Lit4Lih4Li54Lil4LmA4LiC4LmJ4Liy4LiE4Lit4Lil4LmA4Lil4LiE4LiK4Lix4LiZ4LiV4Liy4LihIGNvbGxlY3Rpb25OYW1lIOC4lOC5ieC4p+C4ouC4guC5ieC4reC4oeC4ueC4peC4l+C4teC5iOC5gOC4leC4o+C4teC4ouC4oeC5hOC4p+C5iVxyXG5cclxuICAgIGNvbnN0IGJ1eURhdGEgPSB7XHJcbiAgICAgIG5hbWU6IGRhdGEubmFtZSxcclxuICAgICAgY3JlYXRlQXQ6IFRpbWVzdGFtcC5mcm9tRGF0ZShuZXcgRGF0ZShkYXRhLmNyZWF0ZUF0KSksXHJcbiAgICAgIC8vIHByb2R1Y3RzOiBkYXRhLnByb2R1Y3RzLm1hcCgocHJvZHVjdCkgPT4gKHtcclxuICAgICAgLy8gICAuLi5wcm9kdWN0LFxyXG4gICAgICAvLyAgIHByb2R1Y3RfZXhwOiBUaW1lc3RhbXAuZnJvbURhdGUobmV3IERhdGUocHJvZHVjdC5wcm9kdWN0X2V4cCkpLFxyXG4gICAgICAvLyB9KSksXHJcbiAgICAgIHByb2R1Y3RzOmRhdGEucHJvZHVjdHMsXHJcbiAgICAgIGRpc2NvdW50OiBkYXRhLmRpc2NvdW50ICE9PSBcIlwiID8gZGF0YS5kaXNjb3VudCA6IDAsXHJcbiAgICAgIHNoaXBwaW5nQ29zdDogZGF0YS5zaGlwcGluZ0Nvc3QgIT09IFwiXCIgPyBkYXRhLnNoaXBwaW5nQ29zdCA6IDAsXHJcbiAgICAgIHVzZXJfaWQ6IGRhdGEudXNlcl9pZCxcclxuICAgICAgdG90YWxDb3N0OiBkYXRhLnRvdGFsQ29zdCxcclxuICAgICAgc3RhdHVzOiBcIuC4quC4s+C5gOC4o+C5h+C4iFwiLFxyXG4gICAgfTtcclxuXHJcbiAgICByZXN1bHQgPSBhd2FpdCBhZGREb2MoY29sbGVjdGlvbihkYiwgY29sbGVjdGlvbk5hbWUpLCBidXlEYXRhKTtcclxuXHJcbiAgICBjb25zb2xlLmxvZyhcIuC4quC4o+C5ieC4suC4h+C4o+C4suC4ouC4geC4suC4o+C4i+C4t+C5ieC4reC4quC4s+C5gOC4o+C5h+C4iFwiLCByZXN1bHQpO1xyXG4gIH0gY2F0Y2ggKGUpIHtcclxuICAgIGVycm9yID0gZTtcclxuICAgIGNvbnNvbGUuZXJyb3IoXCLguYDguIHguLTguJTguILguYnguK3guJzguLTguJTguJ7guKXguLLguJTguYPguJnguIHguLLguKPguKrguKPguYnguLLguIfguKPguLLguKLguIHguLLguKPguIvguLfguYnguK06XCIsIGVycm9yKTtcclxuICB9XHJcblxyXG4gIHJldHVybiB7IHJlc3VsdCwgZXJyb3IgfTtcclxufVxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZWRpdEJ1eShjb2xsbGVjdGlvbiwgaWQsIGRhdGEpIHtcclxuICBsZXQgcmVzdWx0ID0gbnVsbDtcclxuICBsZXQgZXJyb3IgPSBudWxsO1xyXG4gIFxyXG4gICBjb1xyXG5cclxuICBjb25zdCBidXlEYXRhID0ge1xyXG4gICAgbmFtZTogZGF0YS5uYW1lLFxyXG4gICAgY3JlYXRlQXQ6IFRpbWVzdGFtcC5mcm9tRGF0ZShuZXcgRGF0ZShkYXRhLmNyZWF0ZUF0KSksXHJcbiAgICAvLyBwcm9kdWN0czogZGF0YS5wcm9kdWN0cy5tYXAoKHByb2R1Y3QpID0+ICh7XHJcbiAgICAvLyAgIC4uLnByb2R1Y3QsXHJcbiAgICAvLyAgIHByb2R1Y3RfZXhwOiBUaW1lc3RhbXAuZnJvbURhdGUobmV3IERhdGUocHJvZHVjdC5wcm9kdWN0X2V4cCkpLFxyXG4gICAgLy8gfSkpLFxyXG4gICAgcHJvZHVjdHM6ZGF0YS5wcm9kdWN0cyxcclxuICAgIGRpc2NvdW50OiBkYXRhLmRpc2NvdW50ICE9PSBcIlwiID8gZGF0YS5kaXNjb3VudCA6IDAsXHJcbiAgICBzaGlwcGluZ0Nvc3Q6IGRhdGEuc2hpcHBpbmdDb3N0ICE9PSBcIlwiID8gZGF0YS5zaGlwcGluZ0Nvc3QgOiAwLFxyXG4gICAgdXNlcl9pZDogZGF0YS51c2VyX2lkLFxyXG4gICAgdG90YWxDb3N0OiBkYXRhLnRvdGFsQ29zdCxcclxuICAgIHN0YXR1czogXCLguKrguLPguYDguKPguYfguIhcIixcclxuICB9O1xyXG4gIFxyXG4gIHRyeSB7XHJcbiAgICByZXN1bHQgPSBhd2FpdCBzZXREb2MoZG9jKGRiLCBjb2xsbGVjdGlvbiwgaWQpLCBidXlEYXRhLCB7XHJcbiAgICAgIG1lcmdlOiB0cnVlLFxyXG4gICAgfSk7XHJcbiAgICBjb25zb2xlLmxvZyhcIuC5geC4geC5ieC5hOC4guC4quC4s+C5gOC4o+C5h+C4iFwiLHJlc3VsdClcclxuICB9IGNhdGNoIChlKSB7XHJcbiAgICBlcnJvciA9IGU7XHJcbiAgICBjb25zb2xlLmVycm9yKFwi4LmA4LiB4Li04LiU4LiC4LmJ4Lit4Lic4Li04LiU4Lie4Lil4Liy4LiU4LmD4LiZ4LiB4Liy4Lij4LmB4LiB4LmJ4LmE4LiC4LiC4LmJ4Lit4Lih4Li54LilOlwiLCBlcnJvcik7XHJcbiAgfVxyXG5cclxuICBcclxuICByZXR1cm4geyByZXN1bHQsIGVycm9yIH07XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBjYW5jZWxCdXkoY29sbGxlY3Rpb24sIGlkKSB7XHJcbiAgbGV0IHJlc3VsdCA9IG51bGw7XHJcbiAgbGV0IGVycm9yID0gbnVsbDtcclxuICBcclxuICBjb25zdCBidXlEYXRhID0ge1xyXG4gICAgc3RhdHVzOiBcIuC4ouC4geC5gOC4peC4tOC4gVwiLFxyXG4gIH07XHJcbiAgXHJcbiAgdHJ5IHtcclxuICAgIHJlc3VsdCA9IGF3YWl0IHNldERvYyhkb2MoZGIsIGNvbGxsZWN0aW9uLCBpZCksIGJ1eURhdGEsIHtcclxuICAgICAgbWVyZ2U6IHRydWUsXHJcbiAgICB9KTtcclxuICAgIGNvbnNvbGUubG9nKFwi4Lii4LiB4LmA4Lil4Li04LiB4Lij4Liy4Lii4LiB4Liy4Lij4Liq4Liz4LmA4Lij4LmH4LiIXCIscmVzdWx0KVxyXG4gIH0gY2F0Y2ggKGUpIHtcclxuICAgIGVycm9yID0gZTtcclxuICAgIGNvbnNvbGUuZXJyb3IoXCLguYDguIHguLTguJTguILguYnguK3guJzguLTguJTguJ7guKXguLLguJTguYPguJnguIHguLLguKPguKLguIHguYDguKXguLTguIHguKPguLLguKLguIHguLLguKPguILguYnguK3guKHguLnguKU6XCIsIGVycm9yKTtcclxuICB9XHJcblxyXG4gIHJldHVybiB7IHJlc3VsdCwgZXJyb3IgfTtcclxufSJdLCJuYW1lcyI6WyJmaXJlYmFzZV9hcHAiLCJnZXRGaXJlc3RvcmUiLCJjb2xsZWN0aW9uIiwiYWRkRG9jIiwiVGltZXN0YW1wIiwic2V0RG9jIiwiZG9jIiwiZGIiLCJhZGRCdXkiLCJjb2xsZWN0aW9uTmFtZSIsImRhdGEiLCJyZXN1bHQiLCJlcnJvciIsImJ1eURhdGEiLCJuYW1lIiwiY3JlYXRlQXQiLCJmcm9tRGF0ZSIsIkRhdGUiLCJwcm9kdWN0cyIsImRpc2NvdW50Iiwic2hpcHBpbmdDb3N0IiwidXNlcl9pZCIsInRvdGFsQ29zdCIsInN0YXR1cyIsImNvbnNvbGUiLCJsb2ciLCJlIiwiZWRpdEJ1eSIsImNvbGxsZWN0aW9uIiwiaWQiLCJjbyIsIm1lcmdlIiwiY2FuY2VsQnV5Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/firebase/addBuy.js\n"));

/***/ })

});