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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Buttons; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Country_Btn_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Country_Btn.css */ \"(app-pages-browser)/./src/Review/Country_Btn/Country_Btn.css\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\nfunction Buttons() {\n    _s();\n    const [countryToggle, setCountryToggle] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        country: \"\",\n        isVisible: false\n    });\n    const [reviews, setReviews] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    console.log(countryToggle);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (countryToggle.country && countryToggle.isVisible) {\n            fetch(\"https://seal-app-336e8.ondigitalocean.app/reviews?country=\".concat(countryToggle.country)).then((response)=>response.json()).then((json)=>setReviews(json));\n        }\n    // const fetchData = async () => {\n    //   const response = await fetch(\n    //     `https://seal-app-336e8.ondigitalocean.app/reviews?country=${country}`,\n    //     {\n    //       header: {\n    //         Accept: \"application/json\",\n    //       },\n    //     }\n    //   );\n    //   if (!response.ok) {\n    //     console.error(response.status);\n    //     console.error(response.text());\n    //   }\n    //   reviews = await response.json();\n    //   console.log(reviews);\n    // };\n    // fetchData();\n    }, [\n        countryToggle\n    ]);\n    const handleClick = (country)=>{\n        const isSameCountry = countryToggle.country === country;\n        const isVisible = isSameCountry ? !countryToggle.isVisible : true;\n        setCountryToggle({\n            country,\n            isVisible\n        });\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"button-section\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        onClick: ()=>setCountry(\"england\"),\n                        children: \"England\"\n                    }, void 0, false, {\n                        fileName: \"/Users/winnielau/Desktop/SoC/Practice/react_app_website/src/Review/Country_Btn/Country_Btn.js\",\n                        lineNumber: 49,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        onClick: ()=>setCountry(\"wales\"),\n                        children: \"Wales\"\n                    }, void 0, false, {\n                        fileName: \"/Users/winnielau/Desktop/SoC/Practice/react_app_website/src/Review/Country_Btn/Country_Btn.js\",\n                        lineNumber: 50,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        onClick: ()=>setCountry(\"scotland\"),\n                        children: \"Scotland\"\n                    }, void 0, false, {\n                        fileName: \"/Users/winnielau/Desktop/SoC/Practice/react_app_website/src/Review/Country_Btn/Country_Btn.js\",\n                        lineNumber: 51,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/winnielau/Desktop/SoC/Practice/react_app_website/src/Review/Country_Btn/Country_Btn.js\",\n                lineNumber: 48,\n                columnNumber: 7\n            }, this),\n            reviews && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"reviewText\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    children: reviews.text\n                }, void 0, false, {\n                    fileName: \"/Users/winnielau/Desktop/SoC/Practice/react_app_website/src/Review/Country_Btn/Country_Btn.js\",\n                    lineNumber: 55,\n                    columnNumber: 11\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/winnielau/Desktop/SoC/Practice/react_app_website/src/Review/Country_Btn/Country_Btn.js\",\n                lineNumber: 54,\n                columnNumber: 9\n            }, this),\n            reviews && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"reviewText\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    children: reviews.author\n                }, void 0, false, {\n                    fileName: \"/Users/winnielau/Desktop/SoC/Practice/react_app_website/src/Review/Country_Btn/Country_Btn.js\",\n                    lineNumber: 60,\n                    columnNumber: 11\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/winnielau/Desktop/SoC/Practice/react_app_website/src/Review/Country_Btn/Country_Btn.js\",\n                lineNumber: 59,\n                columnNumber: 9\n            }, this),\n            reviews && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"reviewText\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    children: reviews.t\n                }, void 0, false, {\n                    fileName: \"/Users/winnielau/Desktop/SoC/Practice/react_app_website/src/Review/Country_Btn/Country_Btn.js\",\n                    lineNumber: 65,\n                    columnNumber: 11\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/winnielau/Desktop/SoC/Practice/react_app_website/src/Review/Country_Btn/Country_Btn.js\",\n                lineNumber: 64,\n                columnNumber: 9\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(Buttons, \"tpF74tX31T20lhG6EJwS9LLriEU=\");\n_c = Buttons;\nvar _c;\n$RefreshReg$(_c, \"Buttons\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9SZXZpZXcvQ291bnRyeV9CdG4vQ291bnRyeV9CdG4uanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUVtRDtBQUN4QjtBQUVaLFNBQVNHOztJQUN0QixNQUFNLENBQUNDLGVBQWVDLGlCQUFpQixHQUFHSiwrQ0FBUUEsQ0FBQztRQUFDSyxTQUFRO1FBQUlDLFdBQVU7SUFBSztJQUMvRSxNQUFNLENBQUNDLFNBQVNDLFdBQVcsR0FBR1IsK0NBQVFBLENBQUMsRUFBRTtJQUN6Q1MsUUFBUUMsR0FBRyxDQUFDUDtJQUVaRixnREFBU0EsQ0FBQztRQUNSLElBQUlFLGNBQWNFLE9BQU8sSUFBSUYsY0FBY0csU0FBUyxFQUFFO1lBQ3BESyxNQUNFLDZEQUFtRixPQUF0QlIsY0FBY0UsT0FBTyxHQUVqRk8sSUFBSSxDQUFDLENBQUNDLFdBQWFBLFNBQVNDLElBQUksSUFDaENGLElBQUksQ0FBQyxDQUFDRSxPQUFTTixXQUFXTTtRQUMvQjtJQUNBLGtDQUFrQztJQUNsQyxrQ0FBa0M7SUFDbEMsOEVBQThFO0lBQzlFLFFBQVE7SUFDUixrQkFBa0I7SUFDbEIsc0NBQXNDO0lBQ3RDLFdBQVc7SUFDWCxRQUFRO0lBQ1IsT0FBTztJQUVQLHdCQUF3QjtJQUN4QixzQ0FBc0M7SUFDdEMsc0NBQXNDO0lBQ3RDLE1BQU07SUFDTixxQ0FBcUM7SUFDckMsMEJBQTBCO0lBQzFCLEtBQUs7SUFDTCxlQUFlO0lBQ2pCLEdBQUc7UUFBQ1g7S0FBYztJQUVsQixNQUFNWSxjQUFjLENBQUNWO1FBQ25CLE1BQU1XLGdCQUFnQmIsY0FBY0UsT0FBTyxLQUFLQTtRQUNoRCxNQUFNQyxZQUFZVSxnQkFBZ0IsQ0FBQ2IsY0FBY0csU0FBUyxHQUFHO1FBRTdERixpQkFBaUI7WUFBQ0M7WUFBU0M7UUFBUztJQUN0QztJQUVBLHFCQUNFOzswQkFDRSw4REFBQ1c7Z0JBQUlDLFdBQVU7O2tDQUNiLDhEQUFDQzt3QkFBT0MsU0FBUyxJQUFNQyxXQUFXO2tDQUFZOzs7Ozs7a0NBQzlDLDhEQUFDRjt3QkFBT0MsU0FBUyxJQUFNQyxXQUFXO2tDQUFVOzs7Ozs7a0NBQzVDLDhEQUFDRjt3QkFBT0MsU0FBUyxJQUFNQyxXQUFXO2tDQUFhOzs7Ozs7Ozs7Ozs7WUFFaERkLHlCQUNDLDhEQUFDVTtnQkFBSUMsV0FBVTswQkFDYiw0RUFBQ0k7OEJBQUdmLFFBQVFnQixJQUFJOzs7Ozs7Ozs7OztZQUduQmhCLHlCQUNDLDhEQUFDVTtnQkFBSUMsV0FBVTswQkFDYiw0RUFBQ0k7OEJBQUdmLFFBQVFpQixNQUFNOzs7Ozs7Ozs7OztZQUdyQmpCLHlCQUNDLDhEQUFDVTtnQkFBSUMsV0FBVTswQkFDYiw0RUFBQ0k7OEJBQUdmLFFBQVFrQixDQUFDOzs7Ozs7Ozs7Ozs7O0FBS3ZCO0dBaEV3QnZCO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9SZXZpZXcvQ291bnRyeV9CdG4vQ291bnRyeV9CdG4uanM/OTI2YSJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcblxuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBcIi4vQ291bnRyeV9CdG4uY3NzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEJ1dHRvbnMoKSB7XG4gIGNvbnN0IFtjb3VudHJ5VG9nZ2xlLCBzZXRDb3VudHJ5VG9nZ2xlXSA9IHVzZVN0YXRlKHtjb3VudHJ5OlwiXCIsIGlzVmlzaWJsZTpmYWxzZX0pO1xuICBjb25zdCBbcmV2aWV3cywgc2V0UmV2aWV3c10gPSB1c2VTdGF0ZShbXSk7XG4gIGNvbnNvbGUubG9nKGNvdW50cnlUb2dnbGUpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKGNvdW50cnlUb2dnbGUuY291bnRyeSAmJiBjb3VudHJ5VG9nZ2xlLmlzVmlzaWJsZSkge1xuICAgICAgZmV0Y2goXG4gICAgICAgIGBodHRwczovL3NlYWwtYXBwLTMzNmU4Lm9uZGlnaXRhbG9jZWFuLmFwcC9yZXZpZXdzP2NvdW50cnk9JHtjb3VudHJ5VG9nZ2xlLmNvdW50cnl9YFxuICAgICAgKVxuICAgICAgICAudGhlbigocmVzcG9uc2UpID0+IHJlc3BvbnNlLmpzb24oKSlcbiAgICAgICAgLnRoZW4oKGpzb24pID0+IHNldFJldmlld3MoanNvbikpO1xuICAgIH1cbiAgICAvLyBjb25zdCBmZXRjaERhdGEgPSBhc3luYyAoKSA9PiB7XG4gICAgLy8gICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKFxuICAgIC8vICAgICBgaHR0cHM6Ly9zZWFsLWFwcC0zMzZlOC5vbmRpZ2l0YWxvY2Vhbi5hcHAvcmV2aWV3cz9jb3VudHJ5PSR7Y291bnRyeX1gLFxuICAgIC8vICAgICB7XG4gICAgLy8gICAgICAgaGVhZGVyOiB7XG4gICAgLy8gICAgICAgICBBY2NlcHQ6IFwiYXBwbGljYXRpb24vanNvblwiLFxuICAgIC8vICAgICAgIH0sXG4gICAgLy8gICAgIH1cbiAgICAvLyAgICk7XG5cbiAgICAvLyAgIGlmICghcmVzcG9uc2Uub2spIHtcbiAgICAvLyAgICAgY29uc29sZS5lcnJvcihyZXNwb25zZS5zdGF0dXMpO1xuICAgIC8vICAgICBjb25zb2xlLmVycm9yKHJlc3BvbnNlLnRleHQoKSk7XG4gICAgLy8gICB9XG4gICAgLy8gICByZXZpZXdzID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICAgIC8vICAgY29uc29sZS5sb2cocmV2aWV3cyk7XG4gICAgLy8gfTtcbiAgICAvLyBmZXRjaERhdGEoKTtcbiAgfSwgW2NvdW50cnlUb2dnbGVdKTtcblxuICBjb25zdCBoYW5kbGVDbGljayA9IChjb3VudHJ5KSA9PiB7XG4gICAgY29uc3QgaXNTYW1lQ291bnRyeSA9IGNvdW50cnlUb2dnbGUuY291bnRyeSA9PT0gY291bnRyeTtcbiAgICBjb25zdCBpc1Zpc2libGUgPSBpc1NhbWVDb3VudHJ5ID8gIWNvdW50cnlUb2dnbGUuaXNWaXNpYmxlIDogdHJ1ZTtcblxuICAgIHNldENvdW50cnlUb2dnbGUoe2NvdW50cnksIGlzVmlzaWJsZX0pO1xuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJidXR0b24tc2VjdGlvblwiPlxuICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IHNldENvdW50cnkoXCJlbmdsYW5kXCIpfT5FbmdsYW5kPC9idXR0b24+XG4gICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gc2V0Q291bnRyeShcIndhbGVzXCIpfT5XYWxlczwvYnV0dG9uPlxuICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IHNldENvdW50cnkoXCJzY290bGFuZFwiKX0+U2NvdGxhbmQ8L2J1dHRvbj5cbiAgICAgIDwvZGl2PlxuICAgICAge3Jldmlld3MgJiYgKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJldmlld1RleHRcIj5cbiAgICAgICAgICA8cD57cmV2aWV3cy50ZXh0fTwvcD5cbiAgICAgICAgPC9kaXY+XG4gICAgICApfVxuICAgICAge3Jldmlld3MgJiYgKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJldmlld1RleHRcIj5cbiAgICAgICAgICA8cD57cmV2aWV3cy5hdXRob3J9PC9wPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICl9XG4gICAgICB7cmV2aWV3cyAmJiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmV2aWV3VGV4dFwiPlxuICAgICAgICAgIDxwPntyZXZpZXdzLnR9PC9wPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICl9XG4gICAgPC8+XG4gICk7XG59XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsIkJ1dHRvbnMiLCJjb3VudHJ5VG9nZ2xlIiwic2V0Q291bnRyeVRvZ2dsZSIsImNvdW50cnkiLCJpc1Zpc2libGUiLCJyZXZpZXdzIiwic2V0UmV2aWV3cyIsImNvbnNvbGUiLCJsb2ciLCJmZXRjaCIsInRoZW4iLCJyZXNwb25zZSIsImpzb24iLCJoYW5kbGVDbGljayIsImlzU2FtZUNvdW50cnkiLCJkaXYiLCJjbGFzc05hbWUiLCJidXR0b24iLCJvbkNsaWNrIiwic2V0Q291bnRyeSIsInAiLCJ0ZXh0IiwiYXV0aG9yIiwidCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/Review/Country_Btn/Country_Btn.js\n"));

/***/ })

});