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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (\"9d4bdee0b6dd\");\nif (true) { module.hot.accept() }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3N0eWxlcy9nbG9iYWxzLmNzcyIsIm1hcHBpbmdzIjoiO0FBQUEsK0RBQWUsY0FBYztBQUM3QixJQUFJLElBQVUsSUFBSSxpQkFBaUIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3R5bGVzL2dsb2JhbHMuY3NzP2VlZTgiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgXCI5ZDRiZGVlMGI2ZGRcIlxuaWYgKG1vZHVsZS5ob3QpIHsgbW9kdWxlLmhvdC5hY2NlcHQoKSB9XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./styles/globals.css\n"));

/***/ }),

/***/ "(app-pages-browser)/./components/NavBar.jsx":
/*!*******************************!*\
  !*** ./components/NavBar.jsx ***!
  \*******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/dist/api/image.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"(app-pages-browser)/./node_modules/next/dist/api/link.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _components_NavPanel__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @components/NavPanel */ \"(app-pages-browser)/./components/NavPanel.jsx\");\n/* harmony import */ var _Modal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Modal */ \"(app-pages-browser)/./components/Modal.jsx\");\n/* harmony import */ var _app_create_form_GoogleForm__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../app/create-form/GoogleForm */ \"(app-pages-browser)/./app/create-form/GoogleForm.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\nconst NavBar = ()=>{\n    _s();\n    const [mobileMenuOpen, setMobileMenuOpen] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false);\n    const [showModal, setShowModal] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false);\n    const handleOpenModal = ()=>{\n        setShowModal(true);\n    };\n    const handleCloseModal = ()=>{\n        setShowModal(false);\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{\n        const handleResize = ()=>{\n            if (window.innerWidth >= 1024) {\n                setMobileMenuOpen(false);\n            }\n        };\n        window.addEventListener(\"resize\", handleResize);\n        return ()=>window.removeEventListener(\"resize\", handleResize);\n    }, []);\n    const closeMobileMenu = ()=>{\n        setMobileMenuOpen(false);\n    };\n    const openGoogleForm = ()=>{\n        window.open(\"https://forms.gle/n2795F4jih9Kf792A\", \"_blank\");\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n        className: \"flex items-center justify-between w-full mb-10 pt-3\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                href: \"/\",\n                className: \"flex items-center\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                    src: \"/assets/images/logo_fba.svg\",\n                    alt: \"logo\",\n                    width: 120,\n                    height: 30,\n                    className: \"object-contain\"\n                }, void 0, false, {\n                    fileName: \"/Users/wiszy/Documents/Wisdom/Coding/nextjs/components/NavBar.jsx\",\n                    lineNumber: 44,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/wiszy/Documents/Wisdom/Coding/nextjs/components/NavBar.jsx\",\n                lineNumber: 43,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"hidden lg:block\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_NavPanel__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n                            fileName: \"/Users/wiszy/Documents/Wisdom/Coding/nextjs/components/NavBar.jsx\",\n                            lineNumber: 56,\n                            columnNumber: 11\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/Users/wiszy/Documents/Wisdom/Coding/nextjs/components/NavBar.jsx\",\n                        lineNumber: 55,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex space-x-4 items-center\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                onClick: openGoogleForm,\n                                className: \"bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded transition duration-300 ease-in-out transform hover:scale-105\",\n                                children: \"Get Early Access\"\n                            }, void 0, false, {\n                                fileName: \"/Users/wiszy/Documents/Wisdom/Coding/nextjs/components/NavBar.jsx\",\n                                lineNumber: 60,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                \"data-collapse-toggle\": \"navbar-default\",\n                                onClick: ()=>setMobileMenuOpen(!mobileMenuOpen),\n                                type: \"button\",\n                                className: \"inline-flex items-center p-2 text-sm rounded-lg lg:hidden hover:bg-indigo-400 focus:outline-none focus:ring-2 focus:ring-indigo-200 dark:text-gray-600 dark:hover:bg-indigo-600 dark:focus:ring-gray-600\",\n                                \"aria-controls\": \"mobile-menu\",\n                                \"aria-expanded\": mobileMenuOpen,\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                        className: \"sr-only\",\n                                        children: \"Toggle menu\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/wiszy/Documents/Wisdom/Coding/nextjs/components/NavBar.jsx\",\n                                        lineNumber: 74,\n                                        columnNumber: 13\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"svg\", {\n                                        className: \"w-6 h-6\",\n                                        fill: \"none\",\n                                        stroke: \"currentColor\",\n                                        viewBox: \"0 0 24 24\",\n                                        xmlns: \"http://www.w3.org/2000/svg\",\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"path\", {\n                                            strokeLinecap: \"round\",\n                                            strokeLinejoin: \"round\",\n                                            strokeWidth: \"2\",\n                                            d: mobileMenuOpen ? \"M6 18L18 6M6 6l12 12\" : \"M4 6h16M4 12h16M4 18h16\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/wiszy/Documents/Wisdom/Coding/nextjs/components/NavBar.jsx\",\n                                            lineNumber: 82,\n                                            columnNumber: 15\n                                        }, undefined)\n                                    }, void 0, false, {\n                                        fileName: \"/Users/wiszy/Documents/Wisdom/Coding/nextjs/components/NavBar.jsx\",\n                                        lineNumber: 75,\n                                        columnNumber: 13\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/wiszy/Documents/Wisdom/Coding/nextjs/components/NavBar.jsx\",\n                                lineNumber: 66,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Modal__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                                isOpen: showModal,\n                                onClose: handleCloseModal,\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_app_create_form_GoogleForm__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                                    onClose: handleCloseModal\n                                }, void 0, false, {\n                                    fileName: \"/Users/wiszy/Documents/Wisdom/Coding/nextjs/components/NavBar.jsx\",\n                                    lineNumber: 95,\n                                    columnNumber: 13\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"/Users/wiszy/Documents/Wisdom/Coding/nextjs/components/NavBar.jsx\",\n                                lineNumber: 94,\n                                columnNumber: 11\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/wiszy/Documents/Wisdom/Coding/nextjs/components/NavBar.jsx\",\n                        lineNumber: 59,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/wiszy/Documents/Wisdom/Coding/nextjs/components/NavBar.jsx\",\n                lineNumber: 54,\n                columnNumber: 7\n            }, undefined),\n            mobileMenuOpen && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"lg:hidden fixed inset-x-0 top-0 z-50 bg-white white:bg-white-100 \",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"p-4\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            onClick: closeMobileMenu,\n                            className: \"absolute top-4 right-4 text-gray-500 hover:text-gray-200 dark:text-gray-400 dark:hover:text-gray-300\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"svg\", {\n                                className: \"w-6 h-6\",\n                                fill: \"none\",\n                                stroke: \"currentColor\",\n                                viewBox: \"0 0 24 24\",\n                                xmlns: \"http://www.w3.org/2000/svg\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"path\", {\n                                    strokeLinecap: \"round\",\n                                    strokeLinejoin: \"round\",\n                                    strokeWidth: \"2\",\n                                    d: \"M6 18L18 6M6 6l12 12\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/wiszy/Documents/Wisdom/Coding/nextjs/components/NavBar.jsx\",\n                                    lineNumber: 115,\n                                    columnNumber: 17\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"/Users/wiszy/Documents/Wisdom/Coding/nextjs/components/NavBar.jsx\",\n                                lineNumber: 108,\n                                columnNumber: 15\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"/Users/wiszy/Documents/Wisdom/Coding/nextjs/components/NavBar.jsx\",\n                            lineNumber: 104,\n                            columnNumber: 13\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_NavPanel__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                            onLinkClick: closeMobileMenu\n                        }, void 0, false, {\n                            fileName: \"/Users/wiszy/Documents/Wisdom/Coding/nextjs/components/NavBar.jsx\",\n                            lineNumber: 123,\n                            columnNumber: 13\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/wiszy/Documents/Wisdom/Coding/nextjs/components/NavBar.jsx\",\n                    lineNumber: 103,\n                    columnNumber: 11\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/wiszy/Documents/Wisdom/Coding/nextjs/components/NavBar.jsx\",\n                lineNumber: 102,\n                columnNumber: 9\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/wiszy/Documents/Wisdom/Coding/nextjs/components/NavBar.jsx\",\n        lineNumber: 42,\n        columnNumber: 5\n    }, undefined);\n};\n_s(NavBar, \"mPxZ5FlaUmJkI7+5Z54VczqiSmc=\");\n_c = NavBar;\n/* harmony default export */ __webpack_exports__[\"default\"] = (NavBar);\nvar _c;\n$RefreshReg$(_c, \"NavBar\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvTmF2QmFyLmpzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUMrQjtBQUNGO0FBQ2U7QUFDQTtBQUNoQjtBQUMyQjtBQUV2RCxNQUFNTyxTQUFTOztJQUNiLE1BQU0sQ0FBQ0MsZ0JBQWdCQyxrQkFBa0IsR0FBR1AsK0NBQVFBLENBQUM7SUFFckQsTUFBTSxDQUFDUSxXQUFXQyxhQUFhLEdBQUdULCtDQUFRQSxDQUFDO0lBRTNDLE1BQU1VLGtCQUFrQjtRQUN0QkQsYUFBYTtJQUNmO0lBRUEsTUFBTUUsbUJBQW1CO1FBQ3ZCRixhQUFhO0lBQ2Y7SUFFQVIsZ0RBQVNBLENBQUM7UUFDUixNQUFNVyxlQUFlO1lBQ25CLElBQUlDLE9BQU9DLFVBQVUsSUFBSSxNQUFNO2dCQUM3QlAsa0JBQWtCO1lBQ3BCO1FBQ0Y7UUFFQU0sT0FBT0UsZ0JBQWdCLENBQUMsVUFBVUg7UUFDbEMsT0FBTyxJQUFNQyxPQUFPRyxtQkFBbUIsQ0FBQyxVQUFVSjtJQUNwRCxHQUFHLEVBQUU7SUFFTCxNQUFNSyxrQkFBa0I7UUFDdEJWLGtCQUFrQjtJQUNwQjtJQUVBLE1BQU1XLGlCQUFpQjtRQUNyQkwsT0FBT00sSUFBSSxDQUFDLHVDQUF1QztJQUNyRDtJQUVBLHFCQUNFLDhEQUFDQztRQUFJQyxXQUFVOzswQkFDYiw4REFBQ3RCLGlEQUFJQTtnQkFBQ3VCLE1BQUs7Z0JBQUlELFdBQVU7MEJBQ3ZCLDRFQUFDdkIsa0RBQUtBO29CQUNKeUIsS0FBSTtvQkFDSkMsS0FBSTtvQkFDSkMsT0FBTztvQkFDUEMsUUFBUTtvQkFDUkwsV0FBVTs7Ozs7Ozs7Ozs7MEJBS2QsOERBQUNNO2dCQUFJTixXQUFVOztrQ0FDYiw4REFBQ007d0JBQUlOLFdBQVU7a0NBQ2IsNEVBQUNuQiw0REFBUUE7Ozs7Ozs7Ozs7a0NBR1gsOERBQUN5Qjt3QkFBSU4sV0FBVTs7MENBQ2IsOERBQUNPO2dDQUNDQyxTQUFTWDtnQ0FDVEcsV0FBVTswQ0FDWDs7Ozs7OzBDQUdELDhEQUFDTztnQ0FDQ0Usd0JBQXFCO2dDQUNyQkQsU0FBUyxJQUFNdEIsa0JBQWtCLENBQUNEO2dDQUNsQ3lCLE1BQUs7Z0NBQ0xWLFdBQVU7Z0NBQ1ZXLGlCQUFjO2dDQUNkQyxpQkFBZTNCOztrREFFZiw4REFBQzRCO3dDQUFLYixXQUFVO2tEQUFVOzs7Ozs7a0RBQzFCLDhEQUFDYzt3Q0FDQ2QsV0FBVTt3Q0FDVmUsTUFBSzt3Q0FDTEMsUUFBTzt3Q0FDUEMsU0FBUTt3Q0FDUkMsT0FBTTtrREFFTiw0RUFBQ0M7NENBQ0NDLGVBQWM7NENBQ2RDLGdCQUFlOzRDQUNmQyxhQUFZOzRDQUNaQyxHQUNFdEMsaUJBQ0kseUJBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7OzBDQUtaLDhEQUFDSCw4Q0FBS0E7Z0NBQUMwQyxRQUFRckM7Z0NBQVdzQyxTQUFTbkM7MENBQ2pDLDRFQUFDUCxtRUFBVUE7b0NBQUMwQyxTQUFTbkM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBTTFCTCxnQ0FDQyw4REFBQ3FCO2dCQUFJTixXQUFVOzBCQUNiLDRFQUFDTTtvQkFBSU4sV0FBVTs7c0NBQ2IsOERBQUNPOzRCQUNDQyxTQUFTWjs0QkFDVEksV0FBVTtzQ0FFViw0RUFBQ2M7Z0NBQ0NkLFdBQVU7Z0NBQ1ZlLE1BQUs7Z0NBQ0xDLFFBQU87Z0NBQ1BDLFNBQVE7Z0NBQ1JDLE9BQU07MENBRU4sNEVBQUNDO29DQUNDQyxlQUFjO29DQUNkQyxnQkFBZTtvQ0FDZkMsYUFBWTtvQ0FDWkMsR0FBRTs7Ozs7Ozs7Ozs7Ozs7OztzQ0FJUiw4REFBQzFDLDREQUFRQTs0QkFBQzZDLGFBQWE5Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFNbkM7R0F4SE1aO0tBQUFBO0FBMEhOLCtEQUFlQSxNQUFNQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvTmF2QmFyLmpzeD9mYjFkIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xuaW1wb3J0IEltYWdlIGZyb20gXCJuZXh0L2ltYWdlXCI7XG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XG5pbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgTmF2UGFuZWwgZnJvbSBcIkBjb21wb25lbnRzL05hdlBhbmVsXCI7XG5pbXBvcnQgTW9kYWwgZnJvbSBcIi4vTW9kYWxcIjtcbmltcG9ydCBHb29nbGVGb3JtIGZyb20gXCIuLi9hcHAvY3JlYXRlLWZvcm0vR29vZ2xlRm9ybVwiO1xuXG5jb25zdCBOYXZCYXIgPSAoKSA9PiB7XG4gIGNvbnN0IFttb2JpbGVNZW51T3Blbiwgc2V0TW9iaWxlTWVudU9wZW5dID0gdXNlU3RhdGUoZmFsc2UpO1xuXG4gIGNvbnN0IFtzaG93TW9kYWwsIHNldFNob3dNb2RhbF0gPSB1c2VTdGF0ZShmYWxzZSk7XG5cbiAgY29uc3QgaGFuZGxlT3Blbk1vZGFsID0gKCkgPT4ge1xuICAgIHNldFNob3dNb2RhbCh0cnVlKTtcbiAgfTtcblxuICBjb25zdCBoYW5kbGVDbG9zZU1vZGFsID0gKCkgPT4ge1xuICAgIHNldFNob3dNb2RhbChmYWxzZSk7XG4gIH07XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBoYW5kbGVSZXNpemUgPSAoKSA9PiB7XG4gICAgICBpZiAod2luZG93LmlubmVyV2lkdGggPj0gMTAyNCkge1xuICAgICAgICBzZXRNb2JpbGVNZW51T3BlbihmYWxzZSk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwicmVzaXplXCIsIGhhbmRsZVJlc2l6ZSk7XG4gICAgcmV0dXJuICgpID0+IHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKFwicmVzaXplXCIsIGhhbmRsZVJlc2l6ZSk7XG4gIH0sIFtdKTtcblxuICBjb25zdCBjbG9zZU1vYmlsZU1lbnUgPSAoKSA9PiB7XG4gICAgc2V0TW9iaWxlTWVudU9wZW4oZmFsc2UpO1xuICB9O1xuXG4gIGNvbnN0IG9wZW5Hb29nbGVGb3JtID0gKCkgPT4ge1xuICAgIHdpbmRvdy5vcGVuKFwiaHR0cHM6Ly9mb3Jtcy5nbGUvbjI3OTVGNGppaDlLZjc5MkFcIiwgXCJfYmxhbmtcIik7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8bmF2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktYmV0d2VlbiB3LWZ1bGwgbWItMTAgcHQtM1wiPlxuICAgICAgPExpbmsgaHJlZj1cIi9cIiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlclwiPlxuICAgICAgICA8SW1hZ2VcbiAgICAgICAgICBzcmM9XCIvYXNzZXRzL2ltYWdlcy9sb2dvX2ZiYS5zdmdcIlxuICAgICAgICAgIGFsdD1cImxvZ29cIlxuICAgICAgICAgIHdpZHRoPXsxMjB9XG4gICAgICAgICAgaGVpZ2h0PXszMH1cbiAgICAgICAgICBjbGFzc05hbWU9XCJvYmplY3QtY29udGFpblwiXG4gICAgICAgIC8+XG4gICAgICA8L0xpbms+XG5cbiAgICAgIHsvKiBOYXZQYW5lbCBmb3IgZGVza3RvcCAqL31cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleFwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhpZGRlbiBsZzpibG9ja1wiPlxuICAgICAgICAgIDxOYXZQYW5lbCAvPlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggc3BhY2UteC00IGl0ZW1zLWNlbnRlclwiPlxuICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgIG9uQ2xpY2s9e29wZW5Hb29nbGVGb3JtfVxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiYmctaW5kaWdvLTYwMCBob3ZlcjpiZy1pbmRpZ28tNzAwIHRleHQtd2hpdGUgZm9udC1ib2xkIHB5LTIgcHgtNCByb3VuZGVkIHRyYW5zaXRpb24gZHVyYXRpb24tMzAwIGVhc2UtaW4tb3V0IHRyYW5zZm9ybSBob3ZlcjpzY2FsZS0xMDVcIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIEdldCBFYXJseSBBY2Nlc3NcbiAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICBkYXRhLWNvbGxhcHNlLXRvZ2dsZT1cIm5hdmJhci1kZWZhdWx0XCJcbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldE1vYmlsZU1lbnVPcGVuKCFtb2JpbGVNZW51T3Blbil9XG4gICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImlubGluZS1mbGV4IGl0ZW1zLWNlbnRlciBwLTIgdGV4dC1zbSByb3VuZGVkLWxnIGxnOmhpZGRlbiBob3ZlcjpiZy1pbmRpZ28tNDAwIGZvY3VzOm91dGxpbmUtbm9uZSBmb2N1czpyaW5nLTIgZm9jdXM6cmluZy1pbmRpZ28tMjAwIGRhcms6dGV4dC1ncmF5LTYwMCBkYXJrOmhvdmVyOmJnLWluZGlnby02MDAgZGFyazpmb2N1czpyaW5nLWdyYXktNjAwXCJcbiAgICAgICAgICAgIGFyaWEtY29udHJvbHM9XCJtb2JpbGUtbWVudVwiXG4gICAgICAgICAgICBhcmlhLWV4cGFuZGVkPXttb2JpbGVNZW51T3Blbn1cbiAgICAgICAgICA+XG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJzci1vbmx5XCI+VG9nZ2xlIG1lbnU8L3NwYW4+XG4gICAgICAgICAgICA8c3ZnXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cInctNiBoLTZcIlxuICAgICAgICAgICAgICBmaWxsPVwibm9uZVwiXG4gICAgICAgICAgICAgIHN0cm9rZT1cImN1cnJlbnRDb2xvclwiXG4gICAgICAgICAgICAgIHZpZXdCb3g9XCIwIDAgMjQgMjRcIlxuICAgICAgICAgICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPHBhdGhcbiAgICAgICAgICAgICAgICBzdHJva2VMaW5lY2FwPVwicm91bmRcIlxuICAgICAgICAgICAgICAgIHN0cm9rZUxpbmVqb2luPVwicm91bmRcIlxuICAgICAgICAgICAgICAgIHN0cm9rZVdpZHRoPVwiMlwiXG4gICAgICAgICAgICAgICAgZD17XG4gICAgICAgICAgICAgICAgICBtb2JpbGVNZW51T3BlblxuICAgICAgICAgICAgICAgICAgICA/IFwiTTYgMThMMTggNk02IDZsMTIgMTJcIlxuICAgICAgICAgICAgICAgICAgICA6IFwiTTQgNmgxNk00IDEyaDE2TTQgMThoMTZcIlxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgPjwvcGF0aD5cbiAgICAgICAgICAgIDwvc3ZnPlxuICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgIDxNb2RhbCBpc09wZW49e3Nob3dNb2RhbH0gb25DbG9zZT17aGFuZGxlQ2xvc2VNb2RhbH0+XG4gICAgICAgICAgICA8R29vZ2xlRm9ybSBvbkNsb3NlPXtoYW5kbGVDbG9zZU1vZGFsfSAvPlxuICAgICAgICAgIDwvTW9kYWw+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG5cbiAgICAgIHsvKiBNb2JpbGUgbWVudSBvdmVybGF5ICovfVxuICAgICAge21vYmlsZU1lbnVPcGVuICYmIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsZzpoaWRkZW4gZml4ZWQgaW5zZXQteC0wIHRvcC0wIHotNTAgYmctd2hpdGUgd2hpdGU6Ymctd2hpdGUtMTAwIFwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicC00XCI+XG4gICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgIG9uQ2xpY2s9e2Nsb3NlTW9iaWxlTWVudX1cbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYWJzb2x1dGUgdG9wLTQgcmlnaHQtNCB0ZXh0LWdyYXktNTAwIGhvdmVyOnRleHQtZ3JheS0yMDAgZGFyazp0ZXh0LWdyYXktNDAwIGRhcms6aG92ZXI6dGV4dC1ncmF5LTMwMFwiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxzdmdcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LTYgaC02XCJcbiAgICAgICAgICAgICAgICBmaWxsPVwibm9uZVwiXG4gICAgICAgICAgICAgICAgc3Ryb2tlPVwiY3VycmVudENvbG9yXCJcbiAgICAgICAgICAgICAgICB2aWV3Qm94PVwiMCAwIDI0IDI0XCJcbiAgICAgICAgICAgICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxwYXRoXG4gICAgICAgICAgICAgICAgICBzdHJva2VMaW5lY2FwPVwicm91bmRcIlxuICAgICAgICAgICAgICAgICAgc3Ryb2tlTGluZWpvaW49XCJyb3VuZFwiXG4gICAgICAgICAgICAgICAgICBzdHJva2VXaWR0aD1cIjJcIlxuICAgICAgICAgICAgICAgICAgZD1cIk02IDE4TDE4IDZNNiA2bDEyIDEyXCJcbiAgICAgICAgICAgICAgICA+PC9wYXRoPlxuICAgICAgICAgICAgICA8L3N2Zz5cbiAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgPE5hdlBhbmVsIG9uTGlua0NsaWNrPXtjbG9zZU1vYmlsZU1lbnV9IC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgKX1cbiAgICA8L25hdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IE5hdkJhcjtcbiJdLCJuYW1lcyI6WyJJbWFnZSIsIkxpbmsiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsIk5hdlBhbmVsIiwiTW9kYWwiLCJHb29nbGVGb3JtIiwiTmF2QmFyIiwibW9iaWxlTWVudU9wZW4iLCJzZXRNb2JpbGVNZW51T3BlbiIsInNob3dNb2RhbCIsInNldFNob3dNb2RhbCIsImhhbmRsZU9wZW5Nb2RhbCIsImhhbmRsZUNsb3NlTW9kYWwiLCJoYW5kbGVSZXNpemUiLCJ3aW5kb3ciLCJpbm5lcldpZHRoIiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJjbG9zZU1vYmlsZU1lbnUiLCJvcGVuR29vZ2xlRm9ybSIsIm9wZW4iLCJuYXYiLCJjbGFzc05hbWUiLCJocmVmIiwic3JjIiwiYWx0Iiwid2lkdGgiLCJoZWlnaHQiLCJkaXYiLCJidXR0b24iLCJvbkNsaWNrIiwiZGF0YS1jb2xsYXBzZS10b2dnbGUiLCJ0eXBlIiwiYXJpYS1jb250cm9scyIsImFyaWEtZXhwYW5kZWQiLCJzcGFuIiwic3ZnIiwiZmlsbCIsInN0cm9rZSIsInZpZXdCb3giLCJ4bWxucyIsInBhdGgiLCJzdHJva2VMaW5lY2FwIiwic3Ryb2tlTGluZWpvaW4iLCJzdHJva2VXaWR0aCIsImQiLCJpc09wZW4iLCJvbkNsb3NlIiwib25MaW5rQ2xpY2siXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/NavBar.jsx\n"));

/***/ })

});