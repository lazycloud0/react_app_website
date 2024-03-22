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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Buttons; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Country_Btn_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Country_Btn.css */ \"(app-pages-browser)/./src/Review/Country_Btn/Country_Btn.css\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\nfunction Buttons() {\n    _s();\n    const [country, setCountry] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    let reviews = {};\n    console.log(country);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const fetchData = async ()=>{\n            const response = await fetch(\"https://seal-app-336e8.ondigitalocean.app/reviews?country=\".concat(country), {\n                header: {\n                    Accept: \"application/json\"\n                }\n            });\n            if (!response.ok) {\n                console.error(response.status);\n                console.error(response.text());\n            }\n            reviews = await response.json();\n            console.log(reviews);\n        };\n        fetchData();\n    }, [\n        country\n    ]);\n    function handleClick() {\n        console.log(\"clicked\");\n        setCountry(country);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"button-section\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        onClick: ()=>setCountry(\"england\"),\n                        children: \"England\"\n                    }, void 0, false, {\n                        fileName: \"/Users/winnielau/Desktop/SoC/Practice/react_app_website/src/Review/Country_Btn/Country_Btn.js\",\n                        lineNumber: 40,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        onClick: ()=>setCountry(\"wales\"),\n                        children: \"Wales\"\n                    }, void 0, false, {\n                        fileName: \"/Users/winnielau/Desktop/SoC/Practice/react_app_website/src/Review/Country_Btn/Country_Btn.js\",\n                        lineNumber: 41,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        onClick: ()=>setCountry(\"scotland\"),\n                        children: \"Scotland\"\n                    }, void 0, false, {\n                        fileName: \"/Users/winnielau/Desktop/SoC/Practice/react_app_website/src/Review/Country_Btn/Country_Btn.js\",\n                        lineNumber: 42,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/winnielau/Desktop/SoC/Practice/react_app_website/src/Review/Country_Btn/Country_Btn.js\",\n                lineNumber: 39,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {}, void 0, false, {\n                fileName: \"/Users/winnielau/Desktop/SoC/Practice/react_app_website/src/Review/Country_Btn/Country_Btn.js\",\n                lineNumber: 44,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: \"reviews\"\n            }, void 0, false, {\n                fileName: \"/Users/winnielau/Desktop/SoC/Practice/react_app_website/src/Review/Country_Btn/Country_Btn.js\",\n                lineNumber: 45,\n                columnNumber: 9\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(Buttons, \"9L3Zg5FcscnsQ/D6FObYQh4sBQ4=\");\n_c = Buttons;\nvar _c;\n$RefreshReg$(_c, \"Buttons\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9SZXZpZXcvQ291bnRyeV9CdG4vQ291bnRyeV9CdG4uanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUVtRDtBQUN4QjtBQUVaLFNBQVNHOztJQUN0QixNQUFNLENBQUNDLFNBQVNDLFdBQVcsR0FBR0osK0NBQVFBLENBQUM7SUFDdkMsSUFBSUssVUFBVSxDQUFDO0lBQ2ZDLFFBQVFDLEdBQUcsQ0FBQ0o7SUFFWkYsZ0RBQVNBLENBQUM7UUFDUixNQUFNTyxZQUFZO1lBQ2hCLE1BQU1DLFdBQVcsTUFBTUMsTUFDckIsNkRBQXFFLE9BQVJQLFVBQzdEO2dCQUNFUSxRQUFRO29CQUNOQyxRQUFRO2dCQUNWO1lBQ0Y7WUFHRixJQUFJLENBQUNILFNBQVNJLEVBQUUsRUFBRTtnQkFDaEJQLFFBQVFRLEtBQUssQ0FBQ0wsU0FBU00sTUFBTTtnQkFDN0JULFFBQVFRLEtBQUssQ0FBQ0wsU0FBU08sSUFBSTtZQUM3QjtZQUNBWCxVQUFVLE1BQU1JLFNBQVNRLElBQUk7WUFDN0JYLFFBQVFDLEdBQUcsQ0FBQ0Y7UUFDZDtRQUNBRztJQUNGLEdBQUc7UUFBQ0w7S0FBUTtJQUVaLFNBQVNlO1FBQ1BaLFFBQVFDLEdBQUcsQ0FBQztRQUNaSCxXQUFXRDtJQUNiO0lBRUEscUJBQ0U7OzBCQUNFLDhEQUFDZ0I7Z0JBQUlDLFdBQVU7O2tDQUNiLDhEQUFDQzt3QkFBT0MsU0FBUyxJQUFNbEIsV0FBVztrQ0FBWTs7Ozs7O2tDQUM5Qyw4REFBQ2lCO3dCQUFPQyxTQUFTLElBQU1sQixXQUFXO2tDQUFVOzs7Ozs7a0NBQzVDLDhEQUFDaUI7d0JBQU9DLFNBQVMsSUFBTWxCLFdBQVc7a0NBQWE7Ozs7Ozs7Ozs7OzswQkFFakQsOERBQUNlOzs7OzswQkFDQyw4REFBQ0k7MEJBQUU7Ozs7Ozs7O0FBSVg7R0EzQ3dCckI7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL1Jldmlldy9Db3VudHJ5X0J0bi9Db3VudHJ5X0J0bi5qcz85MjZhIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xuXG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IFwiLi9Db3VudHJ5X0J0bi5jc3NcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQnV0dG9ucygpIHtcbiAgY29uc3QgW2NvdW50cnksIHNldENvdW50cnldID0gdXNlU3RhdGUobnVsbCk7XG4gIGxldCByZXZpZXdzID0ge307XG4gIGNvbnNvbGUubG9nKGNvdW50cnkpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgZmV0Y2hEYXRhID0gYXN5bmMgKCkgPT4ge1xuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChcbiAgICAgICAgYGh0dHBzOi8vc2VhbC1hcHAtMzM2ZTgub25kaWdpdGFsb2NlYW4uYXBwL3Jldmlld3M/Y291bnRyeT0ke2NvdW50cnl9YCxcbiAgICAgICAge1xuICAgICAgICAgIGhlYWRlcjoge1xuICAgICAgICAgICAgQWNjZXB0OiBcImFwcGxpY2F0aW9uL2pzb25cIixcbiAgICAgICAgICB9LFxuICAgICAgICB9XG4gICAgICApO1xuXG4gICAgICBpZiAoIXJlc3BvbnNlLm9rKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IocmVzcG9uc2Uuc3RhdHVzKTtcbiAgICAgICAgY29uc29sZS5lcnJvcihyZXNwb25zZS50ZXh0KCkpO1xuICAgICAgfVxuICAgICAgcmV2aWV3cyA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgICAgIGNvbnNvbGUubG9nKHJldmlld3MpO1xuICAgIH07XG4gICAgZmV0Y2hEYXRhKCk7XG4gIH0sIFtjb3VudHJ5XSk7XG5cbiAgZnVuY3Rpb24gaGFuZGxlQ2xpY2soKSB7XG4gICAgY29uc29sZS5sb2coXCJjbGlja2VkXCIpO1xuICAgIHNldENvdW50cnkoY291bnRyeSk7XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImJ1dHRvbi1zZWN0aW9uXCI+XG4gICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gc2V0Q291bnRyeShcImVuZ2xhbmRcIil9PkVuZ2xhbmQ8L2J1dHRvbj5cbiAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBzZXRDb3VudHJ5KFwid2FsZXNcIil9PldhbGVzPC9idXR0b24+XG4gICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gc2V0Q291bnRyeShcInNjb3RsYW5kXCIpfT5TY290bGFuZDwvYnV0dG9uPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2PjwvZGl2PlxuICAgICAgICA8cD5yZXZpZXdzPC9wPlxuICAgICAgXG4gICAgPC8+XG4gICk7XG59XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsIkJ1dHRvbnMiLCJjb3VudHJ5Iiwic2V0Q291bnRyeSIsInJldmlld3MiLCJjb25zb2xlIiwibG9nIiwiZmV0Y2hEYXRhIiwicmVzcG9uc2UiLCJmZXRjaCIsImhlYWRlciIsIkFjY2VwdCIsIm9rIiwiZXJyb3IiLCJzdGF0dXMiLCJ0ZXh0IiwianNvbiIsImhhbmRsZUNsaWNrIiwiZGl2IiwiY2xhc3NOYW1lIiwiYnV0dG9uIiwib25DbGljayIsInAiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/Review/Country_Btn/Country_Btn.js\n"));

/***/ })

});