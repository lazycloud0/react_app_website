"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./src/Review/Country_Btn/Country_Btn.js":
/*!***********************************************!*\
  !*** ./src/Review/Country_Btn/Country_Btn.js ***!
  \***********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Buttons; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Country_Btn_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Country_Btn.css */ \"(app-pages-browser)/./src/Review/Country_Btn/Country_Btn.css\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\nfunction Buttons() {\n    _s();\n    const [country, setCountry] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [reviews, setReviews] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    console.log(country);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (country) {\n            fetch(\"https://seal-app-336e8.ondigitalocean.app/reviews?country=\".concat(country)).then((response)=>response.json()).then((json)=>setReviews(json));\n        }\n    // const fetchData = async () => {\n    //   const response = await fetch(\n    //     `https://seal-app-336e8.ondigitalocean.app/reviews?country=${country}`,\n    //     {\n    //       header: {\n    //         Accept: \"application/json\",\n    //       },\n    //     }\n    //   );\n    //   if (!response.ok) {\n    //     console.error(response.status);\n    //     console.error(response.text());\n    //   }\n    //   reviews = await response.json();\n    //   console.log(reviews);\n    // };\n    // fetchData();\n    }, [\n        country\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"button-section\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        onClick: ()=>setCountry(\"england\"),\n                        children: \"England\"\n                    }, void 0, false, {\n                        fileName: \"/Users/winnielau/Desktop/SoC/Practice/react_app_website/src/Review/Country_Btn/Country_Btn.js\",\n                        lineNumber: 42,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        onClick: ()=>setCountry(\"wales\"),\n                        children: \"Wales\"\n                    }, void 0, false, {\n                        fileName: \"/Users/winnielau/Desktop/SoC/Practice/react_app_website/src/Review/Country_Btn/Country_Btn.js\",\n                        lineNumber: 43,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        onClick: ()=>setCountry(\"scotland\"),\n                        children: \"Scotland\"\n                    }, void 0, false, {\n                        fileName: \"/Users/winnielau/Desktop/SoC/Practice/react_app_website/src/Review/Country_Btn/Country_Btn.js\",\n                        lineNumber: 44,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/winnielau/Desktop/SoC/Practice/react_app_website/src/Review/Country_Btn/Country_Btn.js\",\n                lineNumber: 41,\n                columnNumber: 7\n            }, this),\n            reviews && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"reviewText\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    children: reviews.text\n                }, void 0, false, {\n                    fileName: \"/Users/winnielau/Desktop/SoC/Practice/react_app_website/src/Review/Country_Btn/Country_Btn.js\",\n                    lineNumber: 48,\n                    columnNumber: 11\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/winnielau/Desktop/SoC/Practice/react_app_website/src/Review/Country_Btn/Country_Btn.js\",\n                lineNumber: 47,\n                columnNumber: 9\n            }, this),\n            reviews && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"reviewText\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    children: reviews.author\n                }, void 0, false, {\n                    fileName: \"/Users/winnielau/Desktop/SoC/Practice/react_app_website/src/Review/Country_Btn/Country_Btn.js\",\n                    lineNumber: 53,\n                    columnNumber: 11\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/winnielau/Desktop/SoC/Practice/react_app_website/src/Review/Country_Btn/Country_Btn.js\",\n                lineNumber: 52,\n                columnNumber: 9\n            }, this),\n            reviews && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"reviewText\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    children: reviews.t\n                }, void 0, false, {\n                    fileName: \"/Users/winnielau/Desktop/SoC/Practice/react_app_website/src/Review/Country_Btn/Country_Btn.js\",\n                    lineNumber: 58,\n                    columnNumber: 11\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/winnielau/Desktop/SoC/Practice/react_app_website/src/Review/Country_Btn/Country_Btn.js\",\n                lineNumber: 57,\n                columnNumber: 9\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(Buttons, \"gy7uwol2VBJBKNjnON2dXrAhzs0=\");\n_c = Buttons;\nvar _c;\n$RefreshReg$(_c, \"Buttons\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9SZXZpZXcvQ291bnRyeV9CdG4vQ291bnRyeV9CdG4uanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUVtRDtBQUN4QjtBQUVaLFNBQVNHOztJQUN0QixNQUFNLENBQUNDLFNBQVNDLFdBQVcsR0FBR0osK0NBQVFBLENBQUM7SUFDdkMsTUFBTSxDQUFDSyxTQUFTQyxXQUFXLEdBQUdOLCtDQUFRQSxDQUFDLEVBQUU7SUFDekNPLFFBQVFDLEdBQUcsQ0FBQ0w7SUFFWkYsZ0RBQVNBLENBQUM7UUFDUixJQUFJRSxTQUFTO1lBQ1hNLE1BQ0UsNkRBQXFFLE9BQVJOLFVBRTVETyxJQUFJLENBQUMsQ0FBQ0MsV0FBYUEsU0FBU0MsSUFBSSxJQUNoQ0YsSUFBSSxDQUFDLENBQUNFLE9BQVNOLFdBQVdNO1FBQy9CO0lBQ0Esa0NBQWtDO0lBQ2xDLGtDQUFrQztJQUNsQyw4RUFBOEU7SUFDOUUsUUFBUTtJQUNSLGtCQUFrQjtJQUNsQixzQ0FBc0M7SUFDdEMsV0FBVztJQUNYLFFBQVE7SUFDUixPQUFPO0lBRVAsd0JBQXdCO0lBQ3hCLHNDQUFzQztJQUN0QyxzQ0FBc0M7SUFDdEMsTUFBTTtJQUNOLHFDQUFxQztJQUNyQywwQkFBMEI7SUFDMUIsS0FBSztJQUNMLGVBQWU7SUFDakIsR0FBRztRQUFDVDtLQUFRO0lBRVoscUJBQ0U7OzBCQUNFLDhEQUFDVTtnQkFBSUMsV0FBVTs7a0NBQ2IsOERBQUNDO3dCQUFPQyxTQUFTLElBQU1aLFdBQVc7a0NBQVk7Ozs7OztrQ0FDOUMsOERBQUNXO3dCQUFPQyxTQUFTLElBQU1aLFdBQVc7a0NBQVU7Ozs7OztrQ0FDNUMsOERBQUNXO3dCQUFPQyxTQUFTLElBQU1aLFdBQVc7a0NBQWE7Ozs7Ozs7Ozs7OztZQUVoREMseUJBQ0MsOERBQUNRO2dCQUFJQyxXQUFVOzBCQUNiLDRFQUFDRzs4QkFBR1osUUFBUWEsSUFBSTs7Ozs7Ozs7Ozs7WUFHbkJiLHlCQUNDLDhEQUFDUTtnQkFBSUMsV0FBVTswQkFDYiw0RUFBQ0c7OEJBQUdaLFFBQVFjLE1BQU07Ozs7Ozs7Ozs7O1lBR3JCZCx5QkFDQyw4REFBQ1E7Z0JBQUlDLFdBQVU7MEJBQ2IsNEVBQUNHOzhCQUFHWixRQUFRZSxDQUFDOzs7Ozs7Ozs7Ozs7O0FBS3ZCO0dBekR3QmxCO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9SZXZpZXcvQ291bnRyeV9CdG4vQ291bnRyeV9CdG4uanM/OTI2YSJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcblxuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBcIi4vQ291bnRyeV9CdG4uY3NzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEJ1dHRvbnMoKSB7XG4gIGNvbnN0IFtjb3VudHJ5LCBzZXRDb3VudHJ5XSA9IHVzZVN0YXRlKFwiXCIpO1xuICBjb25zdCBbcmV2aWV3cywgc2V0UmV2aWV3c10gPSB1c2VTdGF0ZShbXSk7XG4gIGNvbnNvbGUubG9nKGNvdW50cnkpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKGNvdW50cnkpIHtcbiAgICAgIGZldGNoKFxuICAgICAgICBgaHR0cHM6Ly9zZWFsLWFwcC0zMzZlOC5vbmRpZ2l0YWxvY2Vhbi5hcHAvcmV2aWV3cz9jb3VudHJ5PSR7Y291bnRyeX1gXG4gICAgICApXG4gICAgICAgIC50aGVuKChyZXNwb25zZSkgPT4gcmVzcG9uc2UuanNvbigpKVxuICAgICAgICAudGhlbigoanNvbikgPT4gc2V0UmV2aWV3cyhqc29uKSk7XG4gICAgfVxuICAgIC8vIGNvbnN0IGZldGNoRGF0YSA9IGFzeW5jICgpID0+IHtcbiAgICAvLyAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goXG4gICAgLy8gICAgIGBodHRwczovL3NlYWwtYXBwLTMzNmU4Lm9uZGlnaXRhbG9jZWFuLmFwcC9yZXZpZXdzP2NvdW50cnk9JHtjb3VudHJ5fWAsXG4gICAgLy8gICAgIHtcbiAgICAvLyAgICAgICBoZWFkZXI6IHtcbiAgICAvLyAgICAgICAgIEFjY2VwdDogXCJhcHBsaWNhdGlvbi9qc29uXCIsXG4gICAgLy8gICAgICAgfSxcbiAgICAvLyAgICAgfVxuICAgIC8vICAgKTtcblxuICAgIC8vICAgaWYgKCFyZXNwb25zZS5vaykge1xuICAgIC8vICAgICBjb25zb2xlLmVycm9yKHJlc3BvbnNlLnN0YXR1cyk7XG4gICAgLy8gICAgIGNvbnNvbGUuZXJyb3IocmVzcG9uc2UudGV4dCgpKTtcbiAgICAvLyAgIH1cbiAgICAvLyAgIHJldmlld3MgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gICAgLy8gICBjb25zb2xlLmxvZyhyZXZpZXdzKTtcbiAgICAvLyB9O1xuICAgIC8vIGZldGNoRGF0YSgpO1xuICB9LCBbY291bnRyeV0pO1xuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYnV0dG9uLXNlY3Rpb25cIj5cbiAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBzZXRDb3VudHJ5KFwiZW5nbGFuZFwiKX0+RW5nbGFuZDwvYnV0dG9uPlxuICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IHNldENvdW50cnkoXCJ3YWxlc1wiKX0+V2FsZXM8L2J1dHRvbj5cbiAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBzZXRDb3VudHJ5KFwic2NvdGxhbmRcIil9PlNjb3RsYW5kPC9idXR0b24+XG4gICAgICA8L2Rpdj5cbiAgICAgIHtyZXZpZXdzICYmIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZXZpZXdUZXh0XCI+XG4gICAgICAgICAgPHA+e3Jldmlld3MudGV4dH08L3A+XG4gICAgICAgIDwvZGl2PlxuICAgICAgKX1cbiAgICAgIHtyZXZpZXdzICYmIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZXZpZXdUZXh0XCI+XG4gICAgICAgICAgPHA+e3Jldmlld3MuYXV0aG9yfTwvcD5cbiAgICAgICAgPC9kaXY+XG4gICAgICApfVxuICAgICAge3Jldmlld3MgJiYgKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJldmlld1RleHRcIj5cbiAgICAgICAgICA8cD57cmV2aWV3cy50fTwvcD5cbiAgICAgICAgPC9kaXY+XG4gICAgICApfVxuICAgIDwvPlxuICApO1xufVxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJCdXR0b25zIiwiY291bnRyeSIsInNldENvdW50cnkiLCJyZXZpZXdzIiwic2V0UmV2aWV3cyIsImNvbnNvbGUiLCJsb2ciLCJmZXRjaCIsInRoZW4iLCJyZXNwb25zZSIsImpzb24iLCJkaXYiLCJjbGFzc05hbWUiLCJidXR0b24iLCJvbkNsaWNrIiwicCIsInRleHQiLCJhdXRob3IiLCJ0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/Review/Country_Btn/Country_Btn.js\n"));

/***/ })

});