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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Buttons; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Country_Btn_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Country_Btn.css */ \"(app-pages-browser)/./src/Review/Country_Btn/Country_Btn.css\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\nfunction Buttons() {\n    _s();\n    const [country, setCountry] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    console.log(country);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const fetchData = async ()=>{\n            const response = await fetch(\"https://seal-app-336e8.ondigitalocean.app/reviews?country=\".concat(country), {\n                header\n            });\n            const reviews1 = await response.json();\n            console.log(reviews1);\n        };\n        async function retrieveWeather() {\n            const response = await fetch(url, {\n                headers: {\n                    Accept: \"application/json\"\n                }\n            });\n            console.log(response);\n            if (!response.ok) {\n                console.error(response.status);\n                console.error(response.text());\n            }\n            const data = await response.json();\n            console.log(data);\n            return data;\n        }\n        ;\n        fetchData();\n    }, [\n        country\n    ]);\n    function handleClick() {\n        console.log(\"clicked\");\n        setCountry(country);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"button-section\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    onClick: ()=>setCountry(\"england\"),\n                    children: \"England\"\n                }, void 0, false, {\n                    fileName: \"/Users/winnielau/Desktop/SoC/Practice/react_app_website/src/Review/Country_Btn/Country_Btn.js\",\n                    lineNumber: 49,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    onClick: ()=>setCountry(\"wales\"),\n                    children: \"Wales\"\n                }, void 0, false, {\n                    fileName: \"/Users/winnielau/Desktop/SoC/Practice/react_app_website/src/Review/Country_Btn/Country_Btn.js\",\n                    lineNumber: 50,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    onClick: ()=>setCountry(\"scotland\"),\n                    children: \"Scotland\"\n                }, void 0, false, {\n                    fileName: \"/Users/winnielau/Desktop/SoC/Practice/react_app_website/src/Review/Country_Btn/Country_Btn.js\",\n                    lineNumber: 51,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    children: JSON.stringify(reviews.text)\n                }, void 0, false, {\n                    fileName: \"/Users/winnielau/Desktop/SoC/Practice/react_app_website/src/Review/Country_Btn/Country_Btn.js\",\n                    lineNumber: 52,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/winnielau/Desktop/SoC/Practice/react_app_website/src/Review/Country_Btn/Country_Btn.js\",\n            lineNumber: 48,\n            columnNumber: 7\n        }, this)\n    }, void 0, false);\n}\n_s(Buttons, \"9L3Zg5FcscnsQ/D6FObYQh4sBQ4=\");\n_c = Buttons;\nvar _c;\n$RefreshReg$(_c, \"Buttons\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9SZXZpZXcvQ291bnRyeV9CdG4vQ291bnRyeV9CdG4uanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUVtRDtBQUN4QjtBQUVaLFNBQVNHOztJQUN0QixNQUFNLENBQUNDLFNBQVNDLFdBQVcsR0FBR0osK0NBQVFBLENBQUM7SUFFdkNLLFFBQVFDLEdBQUcsQ0FBQ0g7SUFFWkYsZ0RBQVNBLENBQUM7UUFDUixNQUFNTSxZQUFZO1lBQ2hCLE1BQU1DLFdBQVcsTUFBTUMsTUFDckIsNkRBQXFFLE9BQVJOLFVBQVc7Z0JBQ3RFTztZQUNGO1lBRUYsTUFBTUMsV0FBVSxNQUFNSCxTQUFTSSxJQUFJO1lBQ25DUCxRQUFRQyxHQUFHLENBQUNLO1FBQ2Q7UUFFQSxlQUFlRTtZQUNiLE1BQU1MLFdBQVcsTUFBTUMsTUFBTUssS0FBSTtnQkFDL0JDLFNBQVE7b0JBQ05DLFFBQVE7Z0JBQ1Y7WUFDRjtZQUNBWCxRQUFRQyxHQUFHLENBQUNFO1lBRVosSUFBRyxDQUFDQSxTQUFTUyxFQUFFLEVBQUM7Z0JBQ2RaLFFBQVFhLEtBQUssQ0FBQ1YsU0FBU1csTUFBTTtnQkFDN0JkLFFBQVFhLEtBQUssQ0FBQ1YsU0FBU1ksSUFBSTtZQUM3QjtZQUNBLE1BQU1DLE9BQU8sTUFBTWIsU0FBU0ksSUFBSTtZQUNoQ1AsUUFBUUMsR0FBRyxDQUFDZTtZQUNaLE9BQU9BO1FBQ1A7O1FBQ0ZkO0lBQ0YsR0FBRztRQUFDSjtLQUFRO0lBRVosU0FBU21CO1FBQ1BqQixRQUFRQyxHQUFHLENBQUM7UUFDWkYsV0FBV0Q7SUFDYjtJQUVBLHFCQUNFO2tCQUNFLDRFQUFDb0I7WUFBSUMsV0FBVTs7OEJBQ2IsOERBQUNDO29CQUFPQyxTQUFTLElBQU10QixXQUFXOzhCQUFZOzs7Ozs7OEJBQzlDLDhEQUFDcUI7b0JBQU9DLFNBQVMsSUFBTXRCLFdBQVc7OEJBQVU7Ozs7Ozs4QkFDNUMsOERBQUNxQjtvQkFBT0MsU0FBUyxJQUFNdEIsV0FBVzs4QkFBYTs7Ozs7OzhCQUMvQyw4REFBQ3VCOzhCQUFHQyxLQUFLQyxTQUFTLENBQUNsQixRQUFRUyxJQUFJOzs7Ozs7Ozs7Ozs7O0FBSXZDO0dBbER3QmxCO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9SZXZpZXcvQ291bnRyeV9CdG4vQ291bnRyeV9CdG4uanM/OTI2YSJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcblxuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBcIi4vQ291bnRyeV9CdG4uY3NzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEJ1dHRvbnMoKSB7XG4gIGNvbnN0IFtjb3VudHJ5LCBzZXRDb3VudHJ5XSA9IHVzZVN0YXRlKG51bGwpO1xuXG4gIGNvbnNvbGUubG9nKGNvdW50cnkpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgZmV0Y2hEYXRhID0gYXN5bmMgKCkgPT4ge1xuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChcbiAgICAgICAgYGh0dHBzOi8vc2VhbC1hcHAtMzM2ZTgub25kaWdpdGFsb2NlYW4uYXBwL3Jldmlld3M/Y291bnRyeT0ke2NvdW50cnl9YCwge1xuICAgICAgICAgIGhlYWRlclxuICAgICAgICB9XG4gICAgICApO1xuICAgICAgY29uc3QgcmV2aWV3cyA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgICAgIGNvbnNvbGUubG9nKHJldmlld3MpO1xuICAgIH07XG5cbiAgICBhc3luYyBmdW5jdGlvbiByZXRyaWV2ZVdlYXRoZXIoKSB7XG4gICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKHVybCx7XG4gICAgICAgIGhlYWRlcnM6e1xuICAgICAgICAgIEFjY2VwdDogXCJhcHBsaWNhdGlvbi9qc29uXCJcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICBjb25zb2xlLmxvZyhyZXNwb25zZSk7XG4gICAgXG4gICAgICBpZighcmVzcG9uc2Uub2spe1xuICAgICAgICBjb25zb2xlLmVycm9yKHJlc3BvbnNlLnN0YXR1cyk7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IocmVzcG9uc2UudGV4dCgpKTtcbiAgICAgIH1cbiAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gICAgICBjb25zb2xlLmxvZyhkYXRhKTtcbiAgICAgIHJldHVybiBkYXRhO1xuICAgICAgfTtcbiAgICBmZXRjaERhdGEoKTtcbiAgfSwgW2NvdW50cnldKTtcblxuICBmdW5jdGlvbiBoYW5kbGVDbGljaygpIHtcbiAgICBjb25zb2xlLmxvZyhcImNsaWNrZWRcIik7XG4gICAgc2V0Q291bnRyeShjb3VudHJ5KTtcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYnV0dG9uLXNlY3Rpb25cIj5cbiAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBzZXRDb3VudHJ5KFwiZW5nbGFuZFwiKX0+RW5nbGFuZDwvYnV0dG9uPlxuICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IHNldENvdW50cnkoXCJ3YWxlc1wiKX0+V2FsZXM8L2J1dHRvbj5cbiAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBzZXRDb3VudHJ5KFwic2NvdGxhbmRcIil9PlNjb3RsYW5kPC9idXR0b24+XG4gICAgICAgIDxwPntKU09OLnN0cmluZ2lmeShyZXZpZXdzLnRleHQpfTwvcD5cbiAgICAgIDwvZGl2PlxuICAgIDwvPlxuICApO1xufVxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJCdXR0b25zIiwiY291bnRyeSIsInNldENvdW50cnkiLCJjb25zb2xlIiwibG9nIiwiZmV0Y2hEYXRhIiwicmVzcG9uc2UiLCJmZXRjaCIsImhlYWRlciIsInJldmlld3MiLCJqc29uIiwicmV0cmlldmVXZWF0aGVyIiwidXJsIiwiaGVhZGVycyIsIkFjY2VwdCIsIm9rIiwiZXJyb3IiLCJzdGF0dXMiLCJ0ZXh0IiwiZGF0YSIsImhhbmRsZUNsaWNrIiwiZGl2IiwiY2xhc3NOYW1lIiwiYnV0dG9uIiwib25DbGljayIsInAiLCJKU09OIiwic3RyaW5naWZ5Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/Review/Country_Btn/Country_Btn.js\n"));

/***/ })

});