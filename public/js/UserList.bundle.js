/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./AppEngine/Domains/Users/ReactComponents/UserList.js":
/*!*************************************************************!*\
  !*** ./AppEngine/Domains/Users/ReactComponents/UserList.js ***!
  \*************************************************************/
/***/ (() => {

eval("\r\n\r\nconst e = React.createElement;\r\nconst { useState } = React;\r\n\r\nfunction LikeButton() {\r\n    const [liked, setLiked] = useState(false);\r\n\r\n    if (liked) {\r\n        return 'You liked this.';\r\n    }\r\n\r\n    return e(\r\n        'button',\r\n        { onClick: () => setLiked(true) },\r\n        'Like'\r\n    );\r\n}\r\n\r\nconst domContainer = document.querySelector('#home_component');\r\nconst root = ReactDOM.createRoot(domContainer);\r\nroot.render(e(LikeButton));\r\n\n\n//# sourceURL=webpack:///./AppEngine/Domains/Users/ReactComponents/UserList.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./AppEngine/Domains/Users/ReactComponents/UserList.js"]();
/******/ 	
/******/ })()
;