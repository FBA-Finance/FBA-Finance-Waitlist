"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/layout",{

/***/ "(app-pages-browser)/./styles/globals.css":
/*!****************************!*\
  !*** ./styles/globals.css ***!
  \****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (\"ece69e80f969\");\nif (true) { module.hot.accept() }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3N0eWxlcy9nbG9iYWxzLmNzcyIsIm1hcHBpbmdzIjoiO0FBQUEsK0RBQWUsY0FBYztBQUM3QixJQUFJLElBQVUsSUFBSSxpQkFBaUIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3R5bGVzL2dsb2JhbHMuY3NzP2VlZTgiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgXCJlY2U2OWU4MGY5NjlcIlxuaWYgKG1vZHVsZS5ob3QpIHsgbW9kdWxlLmhvdC5hY2NlcHQoKSB9XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./styles/globals.css\n"));

/***/ }),

/***/ "(app-pages-browser)/./components/NavPanel.jsx":
/*!*********************************!*\
  !*** ./components/NavPanel.jsx ***!
  \*********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/dist/api/image.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ \"(app-pages-browser)/./node_modules/next/dist/api/link.js\");\n\n\n\n\nconst NavPanel = (param)=>{\n    let { onLinkClick } = param;\n    const navItems = [\n        {\n            label: \"About Us\",\n            hasDropdown: false,\n            id: \"about-us\",\n            externalLink: false\n        },\n        {\n            label: \"How It Works\",\n            hasDropdown: false,\n            id: \"how-it-works\",\n            externalLink: false\n        },\n        {\n            label: \"Blog\",\n            hasDropdown: false,\n            id: \"https://fba-blog-git-main-tegaeths-projects.vercel.app/\",\n            externalLink: true\n        },\n        {\n            label: \"Contact\",\n            hasDropdown: false,\n            id: \"contact\",\n            externalLink: false\n        }\n    ];\n    const handleClick = (e, id)=>{\n        e.preventDefault();\n        if (onLinkClick) {\n            onLinkClick();\n        }\n        const element = document.getElementById(id);\n        if (element) {\n            element.scrollIntoView({\n                behavior: \"smooth\"\n            });\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n        className: \"flex overflow-hidden flex-col justify-center self-stretch px-9 py-6 bg-white rounded-[44px] text-zinc-800 max-md:px-5 max-md:max-w-full sticky z-10\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n            className: \"flex flex-wrap gap-7 items-start max-md:max-w-full\",\n            children: navItems.map((item, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                    children: item.externalLink ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                        href: item.id,\n                        className: \"flex gap-1 items-center transition duration-300 ease-in-out transform hover:scale-105\",\n                        //onClick={(e) => handleClick(e, item.id)}\n                        target: \"_blank\",\n                        rel: \"noopener noreferrer\",\n                        children: [\n                            item.label,\n                            item.hasDropdown && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                src: \"/assets/images/dropdown.svg\",\n                                alt: \"\",\n                                width: 20,\n                                height: 20,\n                                className: \"object-contain shrink-0 self-stretch my-auto aspect-square w-[19px] transition duration-300 ease-in-out transform hover:scale-105\"\n                            }, void 0, false, {\n                                fileName: \"/Users/wiszy/Documents/Wisdom/Coding/nextjs/components/NavPanel.jsx\",\n                                lineNumber: 59,\n                                columnNumber: 19\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/wiszy/Documents/Wisdom/Coding/nextjs/components/NavPanel.jsx\",\n                        lineNumber: 50,\n                        columnNumber: 15\n                    }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                        href: \"#\".concat(item.id),\n                        className: \"flex gap-1 items-center transition duration-300 ease-in-out transform hover:scale-105\",\n                        children: [\n                            item.label,\n                            item.hasDropdown && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                src: \"/assets/images/dropdown.svg\",\n                                alt: \"\",\n                                width: 20,\n                                height: 20,\n                                className: \"object-contain shrink-0 self-stretch my-auto aspect-square w-[19px] transition duration-300 ease-in-out transform hover:scale-105\"\n                            }, void 0, false, {\n                                fileName: \"/Users/wiszy/Documents/Wisdom/Coding/nextjs/components/NavPanel.jsx\",\n                                lineNumber: 75,\n                                columnNumber: 19\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/wiszy/Documents/Wisdom/Coding/nextjs/components/NavPanel.jsx\",\n                        lineNumber: 69,\n                        columnNumber: 15\n                    }, undefined)\n                }, index, false, {\n                    fileName: \"/Users/wiszy/Documents/Wisdom/Coding/nextjs/components/NavPanel.jsx\",\n                    lineNumber: 48,\n                    columnNumber: 11\n                }, undefined))\n        }, void 0, false, {\n            fileName: \"/Users/wiszy/Documents/Wisdom/Coding/nextjs/components/NavPanel.jsx\",\n            lineNumber: 46,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/wiszy/Documents/Wisdom/Coding/nextjs/components/NavPanel.jsx\",\n        lineNumber: 45,\n        columnNumber: 5\n    }, undefined);\n};\n_c = NavPanel;\n/* harmony default export */ __webpack_exports__[\"default\"] = (NavPanel);\nvar _c;\n$RefreshReg$(_c, \"NavPanel\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvTmF2UGFuZWwuanN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBMEI7QUFDSztBQUNGO0FBRTdCLE1BQU1HLFdBQVc7UUFBQyxFQUFFQyxXQUFXLEVBQUU7SUFDL0IsTUFBTUMsV0FBVztRQUNmO1lBQ0VDLE9BQU87WUFDUEMsYUFBYTtZQUNiQyxJQUFJO1lBQ0pDLGNBQWM7UUFDaEI7UUFDQTtZQUNFSCxPQUFPO1lBQ1BDLGFBQWE7WUFDYkMsSUFBSTtZQUNKQyxjQUFjO1FBQ2hCO1FBQ0E7WUFDRUgsT0FBTztZQUNQQyxhQUFhO1lBQ2JDLElBQUk7WUFDSkMsY0FBYztRQUNoQjtRQUNBO1lBQ0VILE9BQU87WUFDUEMsYUFBYTtZQUNiQyxJQUFJO1lBQ0pDLGNBQWM7UUFDaEI7S0FDRDtJQUVELE1BQU1DLGNBQWMsQ0FBQ0MsR0FBR0g7UUFDdEJHLEVBQUVDLGNBQWM7UUFDaEIsSUFBSVIsYUFBYTtZQUNmQTtRQUNGO1FBQ0EsTUFBTVMsVUFBVUMsU0FBU0MsY0FBYyxDQUFDUDtRQUN4QyxJQUFJSyxTQUFTO1lBQ1hBLFFBQVFHLGNBQWMsQ0FBQztnQkFBRUMsVUFBVTtZQUFTO1FBQzlDO0lBQ0Y7SUFFQSxxQkFDRSw4REFBQ0M7UUFBSUMsV0FBVTtrQkFDYiw0RUFBQ0M7WUFBR0QsV0FBVTtzQkFDWGQsU0FBU2dCLEdBQUcsQ0FBQyxDQUFDQyxNQUFNQyxzQkFDbkIsOERBQUNDOzhCQUNFRixLQUFLYixZQUFZLGlCQUNoQiw4REFBQ1AsaURBQUlBO3dCQUNIdUIsTUFBTUgsS0FBS2QsRUFBRTt3QkFDYlcsV0FBVTt3QkFDViwwQ0FBMEM7d0JBQzFDTyxRQUFPO3dCQUNQQyxLQUFJOzs0QkFFSEwsS0FBS2hCLEtBQUs7NEJBQ1ZnQixLQUFLZixXQUFXLGtCQUNmLDhEQUFDTixrREFBS0E7Z0NBQ0oyQixLQUFJO2dDQUNKQyxLQUFJO2dDQUNKQyxPQUFPO2dDQUNQQyxRQUFRO2dDQUNSWixXQUFVOzs7Ozs7Ozs7OztrREFLaEIsOERBQUNqQixpREFBSUE7d0JBQ0h1QixNQUFNLElBQVksT0FBUkgsS0FBS2QsRUFBRTt3QkFDakJXLFdBQVU7OzRCQUVURyxLQUFLaEIsS0FBSzs0QkFDVmdCLEtBQUtmLFdBQVcsa0JBQ2YsOERBQUNOLGtEQUFLQTtnQ0FDSjJCLEtBQUk7Z0NBQ0pDLEtBQUk7Z0NBQ0pDLE9BQU87Z0NBQ1BDLFFBQVE7Z0NBQ1JaLFdBQVU7Ozs7Ozs7Ozs7OzttQkFoQ1hJOzs7Ozs7Ozs7Ozs7Ozs7QUEwQ25CO0tBckZNcEI7QUF1Rk4sK0RBQWVBLFFBQVFBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9OYXZQYW5lbC5qc3g/YjUxZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgSW1hZ2UgZnJvbSBcIm5leHQvaW1hZ2VcIjtcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcblxuY29uc3QgTmF2UGFuZWwgPSAoeyBvbkxpbmtDbGljayB9KSA9PiB7XG4gIGNvbnN0IG5hdkl0ZW1zID0gW1xuICAgIHtcbiAgICAgIGxhYmVsOiBcIkFib3V0IFVzXCIsXG4gICAgICBoYXNEcm9wZG93bjogZmFsc2UsXG4gICAgICBpZDogXCJhYm91dC11c1wiLFxuICAgICAgZXh0ZXJuYWxMaW5rOiBmYWxzZSxcbiAgICB9LFxuICAgIHtcbiAgICAgIGxhYmVsOiBcIkhvdyBJdCBXb3Jrc1wiLFxuICAgICAgaGFzRHJvcGRvd246IGZhbHNlLFxuICAgICAgaWQ6IFwiaG93LWl0LXdvcmtzXCIsXG4gICAgICBleHRlcm5hbExpbms6IGZhbHNlLFxuICAgIH0sXG4gICAge1xuICAgICAgbGFiZWw6IFwiQmxvZ1wiLFxuICAgICAgaGFzRHJvcGRvd246IGZhbHNlLFxuICAgICAgaWQ6IFwiaHR0cHM6Ly9mYmEtYmxvZy1naXQtbWFpbi10ZWdhZXRocy1wcm9qZWN0cy52ZXJjZWwuYXBwL1wiLFxuICAgICAgZXh0ZXJuYWxMaW5rOiB0cnVlLFxuICAgIH0sXG4gICAge1xuICAgICAgbGFiZWw6IFwiQ29udGFjdFwiLFxuICAgICAgaGFzRHJvcGRvd246IGZhbHNlLFxuICAgICAgaWQ6IFwiY29udGFjdFwiLFxuICAgICAgZXh0ZXJuYWxMaW5rOiBmYWxzZSxcbiAgICB9LFxuICBdO1xuXG4gIGNvbnN0IGhhbmRsZUNsaWNrID0gKGUsIGlkKSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGlmIChvbkxpbmtDbGljaykge1xuICAgICAgb25MaW5rQ2xpY2soKTtcbiAgICB9XG4gICAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGlkKTtcbiAgICBpZiAoZWxlbWVudCkge1xuICAgICAgZWxlbWVudC5zY3JvbGxJbnRvVmlldyh7IGJlaGF2aW9yOiBcInNtb290aFwiIH0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxuYXYgY2xhc3NOYW1lPVwiZmxleCBvdmVyZmxvdy1oaWRkZW4gZmxleC1jb2wganVzdGlmeS1jZW50ZXIgc2VsZi1zdHJldGNoIHB4LTkgcHktNiBiZy13aGl0ZSByb3VuZGVkLVs0NHB4XSB0ZXh0LXppbmMtODAwIG1heC1tZDpweC01IG1heC1tZDptYXgtdy1mdWxsIHN0aWNreSB6LTEwXCI+XG4gICAgICA8dWwgY2xhc3NOYW1lPVwiZmxleCBmbGV4LXdyYXAgZ2FwLTcgaXRlbXMtc3RhcnQgbWF4LW1kOm1heC13LWZ1bGxcIj5cbiAgICAgICAge25hdkl0ZW1zLm1hcCgoaXRlbSwgaW5kZXgpID0+IChcbiAgICAgICAgICA8bGkga2V5PXtpbmRleH0+XG4gICAgICAgICAgICB7aXRlbS5leHRlcm5hbExpbmsgPyAoXG4gICAgICAgICAgICAgIDxMaW5rXG4gICAgICAgICAgICAgICAgaHJlZj17aXRlbS5pZH1cbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmbGV4IGdhcC0xIGl0ZW1zLWNlbnRlciB0cmFuc2l0aW9uIGR1cmF0aW9uLTMwMCBlYXNlLWluLW91dCB0cmFuc2Zvcm0gaG92ZXI6c2NhbGUtMTA1XCJcbiAgICAgICAgICAgICAgICAvL29uQ2xpY2s9eyhlKSA9PiBoYW5kbGVDbGljayhlLCBpdGVtLmlkKX1cbiAgICAgICAgICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxuICAgICAgICAgICAgICAgIHJlbD1cIm5vb3BlbmVyIG5vcmVmZXJyZXJcIlxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAge2l0ZW0ubGFiZWx9XG4gICAgICAgICAgICAgICAge2l0ZW0uaGFzRHJvcGRvd24gJiYgKFxuICAgICAgICAgICAgICAgICAgPEltYWdlXG4gICAgICAgICAgICAgICAgICAgIHNyYz1cIi9hc3NldHMvaW1hZ2VzL2Ryb3Bkb3duLnN2Z1wiXG4gICAgICAgICAgICAgICAgICAgIGFsdD1cIlwiXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoPXsyMH1cbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0PXsyMH1cbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwib2JqZWN0LWNvbnRhaW4gc2hyaW5rLTAgc2VsZi1zdHJldGNoIG15LWF1dG8gYXNwZWN0LXNxdWFyZSB3LVsxOXB4XSB0cmFuc2l0aW9uIGR1cmF0aW9uLTMwMCBlYXNlLWluLW91dCB0cmFuc2Zvcm0gaG92ZXI6c2NhbGUtMTA1XCJcbiAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgPExpbmtcbiAgICAgICAgICAgICAgICBocmVmPXtgIyR7aXRlbS5pZH1gfVxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZsZXggZ2FwLTEgaXRlbXMtY2VudGVyIHRyYW5zaXRpb24gZHVyYXRpb24tMzAwIGVhc2UtaW4tb3V0IHRyYW5zZm9ybSBob3ZlcjpzY2FsZS0xMDVcIlxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAge2l0ZW0ubGFiZWx9XG4gICAgICAgICAgICAgICAge2l0ZW0uaGFzRHJvcGRvd24gJiYgKFxuICAgICAgICAgICAgICAgICAgPEltYWdlXG4gICAgICAgICAgICAgICAgICAgIHNyYz1cIi9hc3NldHMvaW1hZ2VzL2Ryb3Bkb3duLnN2Z1wiXG4gICAgICAgICAgICAgICAgICAgIGFsdD1cIlwiXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoPXsyMH1cbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0PXsyMH1cbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwib2JqZWN0LWNvbnRhaW4gc2hyaW5rLTAgc2VsZi1zdHJldGNoIG15LWF1dG8gYXNwZWN0LXNxdWFyZSB3LVsxOXB4XSB0cmFuc2l0aW9uIGR1cmF0aW9uLTMwMCBlYXNlLWluLW91dCB0cmFuc2Zvcm0gaG92ZXI6c2NhbGUtMTA1XCJcbiAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgKX1cbiAgICAgICAgICA8L2xpPlxuICAgICAgICApKX1cbiAgICAgIDwvdWw+XG4gICAgPC9uYXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBOYXZQYW5lbDtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsIkltYWdlIiwiTGluayIsIk5hdlBhbmVsIiwib25MaW5rQ2xpY2siLCJuYXZJdGVtcyIsImxhYmVsIiwiaGFzRHJvcGRvd24iLCJpZCIsImV4dGVybmFsTGluayIsImhhbmRsZUNsaWNrIiwiZSIsInByZXZlbnREZWZhdWx0IiwiZWxlbWVudCIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJzY3JvbGxJbnRvVmlldyIsImJlaGF2aW9yIiwibmF2IiwiY2xhc3NOYW1lIiwidWwiLCJtYXAiLCJpdGVtIiwiaW5kZXgiLCJsaSIsImhyZWYiLCJ0YXJnZXQiLCJyZWwiLCJzcmMiLCJhbHQiLCJ3aWR0aCIsImhlaWdodCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/NavPanel.jsx\n"));

/***/ })

});