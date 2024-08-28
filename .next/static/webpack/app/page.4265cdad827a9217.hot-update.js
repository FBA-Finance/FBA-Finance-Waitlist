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

/***/ "(app-pages-browser)/./components/Testimony/TestimonialCard.jsx":
/*!**************************************************!*\
  !*** ./components/Testimony/TestimonialCard.jsx ***!
  \**************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! framer-motion */ \"(app-pages-browser)/./node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs\");\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! framer-motion */ \"(app-pages-browser)/./node_modules/framer-motion/dist/es/render/dom/motion.mjs\");\n/* harmony import */ var _Quote__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Quote */ \"(app-pages-browser)/./components/Testimony/Quote.jsx\");\n/* harmony import */ var _TestimonialContent__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./TestimonialContent */ \"(app-pages-browser)/./components/Testimony/TestimonialContent.jsx\");\n/* harmony import */ var _Avatar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Avatar */ \"(app-pages-browser)/./components/Testimony/Avatar.jsx\");\n/* harmony import */ var _AuthorInfo__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./AuthorInfo */ \"(app-pages-browser)/./components/Testimony/AuthorInfo.jsx\");\n/* harmony import */ var _Navigation__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Navigation */ \"(app-pages-browser)/./components/Testimony/Navigation.jsx\");\n/* harmony import */ var _BackgroundPattern__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./BackgroundPattern */ \"(app-pages-browser)/./components/Testimony/BackgroundPattern.jsx\");\n/* harmony import */ var _testimonialData__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./testimonialData */ \"(app-pages-browser)/./components/Testimony/testimonialData.jsx\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\nconst TestimonialCard = ()=>{\n    _s();\n    const [currentIndex, setCurrentIndex] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const [isHovered, setIsHovered] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const nextTestimonial = ()=>{\n        setCurrentIndex((prevIndex)=>(prevIndex + 1) % _testimonialData__WEBPACK_IMPORTED_MODULE_8__.testimonials.length);\n    };\n    const prevTestimonial = ()=>{\n        setCurrentIndex((prevIndex)=>(prevIndex - 1 + _testimonialData__WEBPACK_IMPORTED_MODULE_8__.testimonials.length) % _testimonialData__WEBPACK_IMPORTED_MODULE_8__.testimonials.length);\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        let timer;\n        if (!isHovered) {\n            timer = setInterval(nextTestimonial, 10000); // Auto-advance every 10 seconds\n        }\n        return ()=>clearInterval(timer);\n    }, [\n        isHovered\n    ]);\n    const currentTestimonial = _testimonialData__WEBPACK_IMPORTED_MODULE_8__.testimonials[currentIndex];\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"mt-24 bg-indigo-600 rounded-3xl p-8 relative overflow-hidden w-full max-w-6xl mx-auto animate-slide hover:[animation-play-state:paused]\",\n        onMouseEnter: ()=>setIsHovered(true),\n        onMouseLeave: ()=>setIsHovered(false),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_BackgroundPattern__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/wiszy/Documents/Wisdom/Coding/nextjs/components/Testimony/TestimonialCard.jsx\",\n                lineNumber: 42,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Quote__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/wiszy/Documents/Wisdom/Coding/nextjs/components/Testimony/TestimonialCard.jsx\",\n                lineNumber: 43,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_9__.AnimatePresence, {\n                mode: \"wait\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_10__.motion.div, {\n                    initial: {\n                        opacity: 0,\n                        y: 50\n                    },\n                    animate: {\n                        opacity: 1,\n                        y: 0\n                    },\n                    exit: {\n                        opacity: 0,\n                        y: -50\n                    },\n                    transition: {\n                        duration: 0.5\n                    },\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_TestimonialContent__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"h-[125px] overflow-y-auto md:text-l\",\n                                children: currentTestimonial.content\n                            }, void 0, false, {\n                                fileName: \"/Users/wiszy/Documents/Wisdom/Coding/nextjs/components/Testimony/TestimonialCard.jsx\",\n                                lineNumber: 53,\n                                columnNumber: 13\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"/Users/wiszy/Documents/Wisdom/Coding/nextjs/components/Testimony/TestimonialCard.jsx\",\n                            lineNumber: 52,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"pl-020 mb-8 flex items-center mt-014 mb-8\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Avatar__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                                    src: currentTestimonial.image,\n                                    alt: currentTestimonial.author.name\n                                }, void 0, false, {\n                                    fileName: \"/Users/wiszy/Documents/Wisdom/Coding/nextjs/components/Testimony/TestimonialCard.jsx\",\n                                    lineNumber: 58,\n                                    columnNumber: 13\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_AuthorInfo__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                                    name: currentTestimonial.author.name,\n                                    title: currentTestimonial.author.title\n                                }, void 0, false, {\n                                    fileName: \"/Users/wiszy/Documents/Wisdom/Coding/nextjs/components/Testimony/TestimonialCard.jsx\",\n                                    lineNumber: 62,\n                                    columnNumber: 13\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/wiszy/Documents/Wisdom/Coding/nextjs/components/Testimony/TestimonialCard.jsx\",\n                            lineNumber: 57,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, \"\".concat(currentTestimonial.author.name, \"-\").concat(currentIndex), true, {\n                    fileName: \"/Users/wiszy/Documents/Wisdom/Coding/nextjs/components/Testimony/TestimonialCard.jsx\",\n                    lineNumber: 45,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/wiszy/Documents/Wisdom/Coding/nextjs/components/Testimony/TestimonialCard.jsx\",\n                lineNumber: 44,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Navigation__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                currentIndex: currentIndex,\n                total: _testimonialData__WEBPACK_IMPORTED_MODULE_8__.testimonials.length,\n                onNext: nextTestimonial,\n                onPrev: prevTestimonial\n            }, void 0, false, {\n                fileName: \"/Users/wiszy/Documents/Wisdom/Coding/nextjs/components/Testimony/TestimonialCard.jsx\",\n                lineNumber: 69,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/wiszy/Documents/Wisdom/Coding/nextjs/components/Testimony/TestimonialCard.jsx\",\n        lineNumber: 37,\n        columnNumber: 5\n    }, undefined);\n};\n_s(TestimonialCard, \"92jvCy9DnWhtTqKvapMIyzkQScY=\");\n_c = TestimonialCard;\n/* harmony default export */ __webpack_exports__[\"default\"] = (TestimonialCard);\nvar _c;\n$RefreshReg$(_c, \"TestimonialCard\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvVGVzdGltb255L1Rlc3RpbW9uaWFsQ2FyZC5qc3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQ21EO0FBQ0s7QUFDNUI7QUFDMEI7QUFDeEI7QUFDUTtBQUNBO0FBQ2M7QUFDSDtBQUVqRCxNQUFNWSxrQkFBa0I7O0lBQ3RCLE1BQU0sQ0FBQ0MsY0FBY0MsZ0JBQWdCLEdBQUdiLCtDQUFRQSxDQUFDO0lBQ2pELE1BQU0sQ0FBQ2MsV0FBV0MsYUFBYSxHQUFHZiwrQ0FBUUEsQ0FBQztJQUUzQyxNQUFNZ0Isa0JBQWtCO1FBQ3RCSCxnQkFBZ0IsQ0FBQ0ksWUFBYyxDQUFDQSxZQUFZLEtBQUtQLDBEQUFZQSxDQUFDUSxNQUFNO0lBQ3RFO0lBRUEsTUFBTUMsa0JBQWtCO1FBQ3RCTixnQkFDRSxDQUFDSSxZQUFjLENBQUNBLFlBQVksSUFBSVAsMERBQVlBLENBQUNRLE1BQU0sSUFBSVIsMERBQVlBLENBQUNRLE1BQU07SUFFOUU7SUFFQWpCLGdEQUFTQSxDQUFDO1FBQ1IsSUFBSW1CO1FBQ0osSUFBSSxDQUFDTixXQUFXO1lBQ2RNLFFBQVFDLFlBQVlMLGlCQUFpQixRQUFRLGdDQUFnQztRQUMvRTtRQUNBLE9BQU8sSUFBTU0sY0FBY0Y7SUFDN0IsR0FBRztRQUFDTjtLQUFVO0lBRWQsTUFBTVMscUJBQXFCYiwwREFBWSxDQUFDRSxhQUFhO0lBRXJELHFCQUNFLDhEQUFDWTtRQUNDQyxXQUFVO1FBQ1ZDLGNBQWMsSUFBTVgsYUFBYTtRQUNqQ1ksY0FBYyxJQUFNWixhQUFhOzswQkFFakMsOERBQUNOLDBEQUFpQkE7Ozs7OzBCQUNsQiw4REFBQ0wsOENBQUtBOzs7OzswQkFDTiw4REFBQ0QsMERBQWVBO2dCQUFDeUIsTUFBSzswQkFDcEIsNEVBQUMxQixrREFBTUEsQ0FBQ3NCLEdBQUc7b0JBRVRLLFNBQVM7d0JBQUVDLFNBQVM7d0JBQUdDLEdBQUc7b0JBQUc7b0JBQzdCQyxTQUFTO3dCQUFFRixTQUFTO3dCQUFHQyxHQUFHO29CQUFFO29CQUM1QkUsTUFBTTt3QkFBRUgsU0FBUzt3QkFBR0MsR0FBRyxDQUFDO29CQUFHO29CQUMzQkcsWUFBWTt3QkFBRUMsVUFBVTtvQkFBSTs7c0NBRTVCLDhEQUFDOUIsMkRBQWtCQTtzQ0FDakIsNEVBQUNtQjtnQ0FBSUMsV0FBVTswQ0FDWkYsbUJBQW1CYSxPQUFPOzs7Ozs7Ozs7OztzQ0FHL0IsOERBQUNaOzRCQUFJQyxXQUFVOzs4Q0FDYiw4REFBQ25CLCtDQUFNQTtvQ0FDTCtCLEtBQUtkLG1CQUFtQmUsS0FBSztvQ0FDN0JDLEtBQUtoQixtQkFBbUJpQixNQUFNLENBQUNDLElBQUk7Ozs7Ozs4Q0FFckMsOERBQUNsQyxtREFBVUE7b0NBQ1RrQyxNQUFNbEIsbUJBQW1CaUIsTUFBTSxDQUFDQyxJQUFJO29DQUNwQ0MsT0FBT25CLG1CQUFtQmlCLE1BQU0sQ0FBQ0UsS0FBSzs7Ozs7Ozs7Ozs7OzttQkFsQnJDLEdBQXFDOUIsT0FBbENXLG1CQUFtQmlCLE1BQU0sQ0FBQ0MsSUFBSSxFQUFDLEtBQWdCLE9BQWI3Qjs7Ozs7Ozs7OzswQkF1QjlDLDhEQUFDSixtREFBVUE7Z0JBQ1RJLGNBQWNBO2dCQUNkK0IsT0FBT2pDLDBEQUFZQSxDQUFDUSxNQUFNO2dCQUMxQjBCLFFBQVE1QjtnQkFDUjZCLFFBQVExQjs7Ozs7Ozs7Ozs7O0FBSWhCO0dBakVNUjtLQUFBQTtBQW1FTiwrREFBZUEsZUFBZUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL1Rlc3RpbW9ueS9UZXN0aW1vbmlhbENhcmQuanN4P2Q0YjUiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgbW90aW9uLCBBbmltYXRlUHJlc2VuY2UgfSBmcm9tIFwiZnJhbWVyLW1vdGlvblwiO1xuaW1wb3J0IFF1b3RlIGZyb20gXCIuL1F1b3RlXCI7XG5pbXBvcnQgVGVzdGltb25pYWxDb250ZW50IGZyb20gXCIuL1Rlc3RpbW9uaWFsQ29udGVudFwiO1xuaW1wb3J0IEF2YXRhciBmcm9tIFwiLi9BdmF0YXJcIjtcbmltcG9ydCBBdXRob3JJbmZvIGZyb20gXCIuL0F1dGhvckluZm9cIjtcbmltcG9ydCBOYXZpZ2F0aW9uIGZyb20gXCIuL05hdmlnYXRpb25cIjtcbmltcG9ydCBCYWNrZ3JvdW5kUGF0dGVybiBmcm9tIFwiLi9CYWNrZ3JvdW5kUGF0dGVyblwiO1xuaW1wb3J0IHsgdGVzdGltb25pYWxzIH0gZnJvbSBcIi4vdGVzdGltb25pYWxEYXRhXCI7XG5cbmNvbnN0IFRlc3RpbW9uaWFsQ2FyZCA9ICgpID0+IHtcbiAgY29uc3QgW2N1cnJlbnRJbmRleCwgc2V0Q3VycmVudEluZGV4XSA9IHVzZVN0YXRlKDApO1xuICBjb25zdCBbaXNIb3ZlcmVkLCBzZXRJc0hvdmVyZWRdID0gdXNlU3RhdGUoZmFsc2UpO1xuXG4gIGNvbnN0IG5leHRUZXN0aW1vbmlhbCA9ICgpID0+IHtcbiAgICBzZXRDdXJyZW50SW5kZXgoKHByZXZJbmRleCkgPT4gKHByZXZJbmRleCArIDEpICUgdGVzdGltb25pYWxzLmxlbmd0aCk7XG4gIH07XG5cbiAgY29uc3QgcHJldlRlc3RpbW9uaWFsID0gKCkgPT4ge1xuICAgIHNldEN1cnJlbnRJbmRleChcbiAgICAgIChwcmV2SW5kZXgpID0+IChwcmV2SW5kZXggLSAxICsgdGVzdGltb25pYWxzLmxlbmd0aCkgJSB0ZXN0aW1vbmlhbHMubGVuZ3RoXG4gICAgKTtcbiAgfTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGxldCB0aW1lcjtcbiAgICBpZiAoIWlzSG92ZXJlZCkge1xuICAgICAgdGltZXIgPSBzZXRJbnRlcnZhbChuZXh0VGVzdGltb25pYWwsIDEwMDAwKTsgLy8gQXV0by1hZHZhbmNlIGV2ZXJ5IDEwIHNlY29uZHNcbiAgICB9XG4gICAgcmV0dXJuICgpID0+IGNsZWFySW50ZXJ2YWwodGltZXIpO1xuICB9LCBbaXNIb3ZlcmVkXSk7XG5cbiAgY29uc3QgY3VycmVudFRlc3RpbW9uaWFsID0gdGVzdGltb25pYWxzW2N1cnJlbnRJbmRleF07XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2XG4gICAgICBjbGFzc05hbWU9XCJtdC0yNCBiZy1pbmRpZ28tNjAwIHJvdW5kZWQtM3hsIHAtOCByZWxhdGl2ZSBvdmVyZmxvdy1oaWRkZW4gdy1mdWxsIG1heC13LTZ4bCBteC1hdXRvIGFuaW1hdGUtc2xpZGUgaG92ZXI6W2FuaW1hdGlvbi1wbGF5LXN0YXRlOnBhdXNlZF1cIlxuICAgICAgb25Nb3VzZUVudGVyPXsoKSA9PiBzZXRJc0hvdmVyZWQodHJ1ZSl9XG4gICAgICBvbk1vdXNlTGVhdmU9eygpID0+IHNldElzSG92ZXJlZChmYWxzZSl9XG4gICAgPlxuICAgICAgPEJhY2tncm91bmRQYXR0ZXJuIC8+XG4gICAgICA8UXVvdGUgLz5cbiAgICAgIDxBbmltYXRlUHJlc2VuY2UgbW9kZT1cIndhaXRcIj5cbiAgICAgICAgPG1vdGlvbi5kaXZcbiAgICAgICAgICBrZXk9e2Ake2N1cnJlbnRUZXN0aW1vbmlhbC5hdXRob3IubmFtZX0tJHtjdXJyZW50SW5kZXh9YH1cbiAgICAgICAgICBpbml0aWFsPXt7IG9wYWNpdHk6IDAsIHk6IDUwIH19XG4gICAgICAgICAgYW5pbWF0ZT17eyBvcGFjaXR5OiAxLCB5OiAwIH19XG4gICAgICAgICAgZXhpdD17eyBvcGFjaXR5OiAwLCB5OiAtNTAgfX1cbiAgICAgICAgICB0cmFuc2l0aW9uPXt7IGR1cmF0aW9uOiAwLjUgfX1cbiAgICAgICAgPlxuICAgICAgICAgIDxUZXN0aW1vbmlhbENvbnRlbnQ+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImgtWzEyNXB4XSBvdmVyZmxvdy15LWF1dG8gbWQ6dGV4dC1sXCI+XG4gICAgICAgICAgICAgIHtjdXJyZW50VGVzdGltb25pYWwuY29udGVudH1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvVGVzdGltb25pYWxDb250ZW50PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGwtMDIwIG1iLTggZmxleCBpdGVtcy1jZW50ZXIgbXQtMDE0IG1iLThcIj5cbiAgICAgICAgICAgIDxBdmF0YXJcbiAgICAgICAgICAgICAgc3JjPXtjdXJyZW50VGVzdGltb25pYWwuaW1hZ2V9XG4gICAgICAgICAgICAgIGFsdD17Y3VycmVudFRlc3RpbW9uaWFsLmF1dGhvci5uYW1lfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxBdXRob3JJbmZvXG4gICAgICAgICAgICAgIG5hbWU9e2N1cnJlbnRUZXN0aW1vbmlhbC5hdXRob3IubmFtZX1cbiAgICAgICAgICAgICAgdGl0bGU9e2N1cnJlbnRUZXN0aW1vbmlhbC5hdXRob3IudGl0bGV9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L21vdGlvbi5kaXY+XG4gICAgICA8L0FuaW1hdGVQcmVzZW5jZT5cbiAgICAgIDxOYXZpZ2F0aW9uXG4gICAgICAgIGN1cnJlbnRJbmRleD17Y3VycmVudEluZGV4fVxuICAgICAgICB0b3RhbD17dGVzdGltb25pYWxzLmxlbmd0aH1cbiAgICAgICAgb25OZXh0PXtuZXh0VGVzdGltb25pYWx9XG4gICAgICAgIG9uUHJldj17cHJldlRlc3RpbW9uaWFsfVxuICAgICAgLz5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFRlc3RpbW9uaWFsQ2FyZDtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwibW90aW9uIiwiQW5pbWF0ZVByZXNlbmNlIiwiUXVvdGUiLCJUZXN0aW1vbmlhbENvbnRlbnQiLCJBdmF0YXIiLCJBdXRob3JJbmZvIiwiTmF2aWdhdGlvbiIsIkJhY2tncm91bmRQYXR0ZXJuIiwidGVzdGltb25pYWxzIiwiVGVzdGltb25pYWxDYXJkIiwiY3VycmVudEluZGV4Iiwic2V0Q3VycmVudEluZGV4IiwiaXNIb3ZlcmVkIiwic2V0SXNIb3ZlcmVkIiwibmV4dFRlc3RpbW9uaWFsIiwicHJldkluZGV4IiwibGVuZ3RoIiwicHJldlRlc3RpbW9uaWFsIiwidGltZXIiLCJzZXRJbnRlcnZhbCIsImNsZWFySW50ZXJ2YWwiLCJjdXJyZW50VGVzdGltb25pYWwiLCJkaXYiLCJjbGFzc05hbWUiLCJvbk1vdXNlRW50ZXIiLCJvbk1vdXNlTGVhdmUiLCJtb2RlIiwiaW5pdGlhbCIsIm9wYWNpdHkiLCJ5IiwiYW5pbWF0ZSIsImV4aXQiLCJ0cmFuc2l0aW9uIiwiZHVyYXRpb24iLCJjb250ZW50Iiwic3JjIiwiaW1hZ2UiLCJhbHQiLCJhdXRob3IiLCJuYW1lIiwidGl0bGUiLCJ0b3RhbCIsIm9uTmV4dCIsIm9uUHJldiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/Testimony/TestimonialCard.jsx\n"));

/***/ })

});