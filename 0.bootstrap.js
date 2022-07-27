(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[0],{

/***/ "../pkg/doggle_wasm.js":
/*!*****************************!*\
  !*** ../pkg/doggle_wasm.js ***!
  \*****************************/
/*! exports provided: getState, getAnswer, submitGuess, typeLetter, checkGameOver, __wbg_random_f744427db82e7116 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _doggle_wasm_bg_wasm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./doggle_wasm_bg.wasm */ \"../pkg/doggle_wasm_bg.wasm\");\n/* harmony import */ var _doggle_wasm_bg_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./doggle_wasm_bg.js */ \"../pkg/doggle_wasm_bg.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"getState\", function() { return _doggle_wasm_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"getState\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"getAnswer\", function() { return _doggle_wasm_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"getAnswer\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"submitGuess\", function() { return _doggle_wasm_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"submitGuess\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"typeLetter\", function() { return _doggle_wasm_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"typeLetter\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"checkGameOver\", function() { return _doggle_wasm_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"checkGameOver\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"__wbg_random_f744427db82e7116\", function() { return _doggle_wasm_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"__wbg_random_f744427db82e7116\"]; });\n\n\n\n\n//# sourceURL=webpack:///../pkg/doggle_wasm.js?");

/***/ }),

/***/ "../pkg/doggle_wasm_bg.js":
/*!********************************!*\
  !*** ../pkg/doggle_wasm_bg.js ***!
  \********************************/
/*! exports provided: getState, getAnswer, submitGuess, typeLetter, checkGameOver, __wbg_random_f744427db82e7116 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getState\", function() { return getState; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getAnswer\", function() { return getAnswer; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"submitGuess\", function() { return submitGuess; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"typeLetter\", function() { return typeLetter; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"checkGameOver\", function() { return checkGameOver; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbg_random_f744427db82e7116\", function() { return __wbg_random_f744427db82e7116; });\n/* harmony import */ var _doggle_wasm_bg_wasm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./doggle_wasm_bg.wasm */ \"../pkg/doggle_wasm_bg.wasm\");\n\n\nlet cachegetInt32Memory0 = null;\nfunction getInt32Memory0() {\n    if (cachegetInt32Memory0 === null || cachegetInt32Memory0.buffer !== _doggle_wasm_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"memory\"].buffer) {\n        cachegetInt32Memory0 = new Int32Array(_doggle_wasm_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"memory\"].buffer);\n    }\n    return cachegetInt32Memory0;\n}\n\nconst lTextDecoder = typeof TextDecoder === 'undefined' ? (0, module.require)('util').TextDecoder : TextDecoder;\n\nlet cachedTextDecoder = new lTextDecoder('utf-8', { ignoreBOM: true, fatal: true });\n\ncachedTextDecoder.decode();\n\nlet cachegetUint8Memory0 = null;\nfunction getUint8Memory0() {\n    if (cachegetUint8Memory0 === null || cachegetUint8Memory0.buffer !== _doggle_wasm_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"memory\"].buffer) {\n        cachegetUint8Memory0 = new Uint8Array(_doggle_wasm_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"memory\"].buffer);\n    }\n    return cachegetUint8Memory0;\n}\n\nfunction getStringFromWasm0(ptr, len) {\n    return cachedTextDecoder.decode(getUint8Memory0().subarray(ptr, ptr + len));\n}\n/**\n* @returns {string}\n*/\nfunction getState() {\n    try {\n        const retptr = _doggle_wasm_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"__wbindgen_add_to_stack_pointer\"](-16);\n        _doggle_wasm_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"getState\"](retptr);\n        var r0 = getInt32Memory0()[retptr / 4 + 0];\n        var r1 = getInt32Memory0()[retptr / 4 + 1];\n        return getStringFromWasm0(r0, r1);\n    } finally {\n        _doggle_wasm_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"__wbindgen_add_to_stack_pointer\"](16);\n        _doggle_wasm_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"__wbindgen_free\"](r0, r1);\n    }\n}\n\n/**\n* @returns {string}\n*/\nfunction getAnswer() {\n    try {\n        const retptr = _doggle_wasm_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"__wbindgen_add_to_stack_pointer\"](-16);\n        _doggle_wasm_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"getAnswer\"](retptr);\n        var r0 = getInt32Memory0()[retptr / 4 + 0];\n        var r1 = getInt32Memory0()[retptr / 4 + 1];\n        return getStringFromWasm0(r0, r1);\n    } finally {\n        _doggle_wasm_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"__wbindgen_add_to_stack_pointer\"](16);\n        _doggle_wasm_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"__wbindgen_free\"](r0, r1);\n    }\n}\n\n/**\n* @param {number} row\n* @returns {number}\n*/\nfunction submitGuess(row) {\n    const ret = _doggle_wasm_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"submitGuess\"](row);\n    return ret >>> 0;\n}\n\n/**\n* @param {number} row\n* @param {number} col\n* @param {string} character\n*/\nfunction typeLetter(row, col, character) {\n    _doggle_wasm_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"typeLetter\"](row, col, character.codePointAt(0));\n}\n\n/**\n* @returns {boolean}\n*/\nfunction checkGameOver() {\n    const ret = _doggle_wasm_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"checkGameOver\"]();\n    return ret !== 0;\n}\n\nfunction notDefined(what) { return () => { throw new Error(`${what} is not defined`); }; }\n\nconst __wbg_random_f744427db82e7116 = typeof Math.random == 'function' ? Math.random : notDefined('Math.random');\n\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../www/node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))\n\n//# sourceURL=webpack:///../pkg/doggle_wasm_bg.js?");

/***/ }),

/***/ "../pkg/doggle_wasm_bg.wasm":
/*!**********************************!*\
  !*** ../pkg/doggle_wasm_bg.wasm ***!
  \**********************************/
/*! exports provided: memory, getState, getAnswer, submitGuess, typeLetter, checkGameOver, __wbindgen_add_to_stack_pointer, __wbindgen_free */
/***/ (function(module, exports, __webpack_require__) {

eval("\"use strict\";\n// Instantiate WebAssembly module\nvar wasmExports = __webpack_require__.w[module.i];\n__webpack_require__.r(exports);\n// export exports from WebAssembly module\nfor(var name in wasmExports) if(name != \"__webpack_init__\") exports[name] = wasmExports[name];\n// exec imports from WebAssembly module (for esm order)\n/* harmony import */ var m0 = __webpack_require__(/*! ./doggle_wasm_bg.js */ \"../pkg/doggle_wasm_bg.js\");\n\n\n// exec wasm module\nwasmExports[\"__webpack_init__\"]()\n\n//# sourceURL=webpack:///../pkg/doggle_wasm_bg.wasm?");

/***/ }),

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var doggle_wasm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! doggle_wasm */ \"../pkg/doggle_wasm.js\");\n// Because my fetching libraries in Rust aren't compatible with wasm, I'm just using redactone's code for this part\n// Sorry\n// import init, { getState, getAnswer, typeLetter, submitGuess } from 'doggle_wasm'\n\n\nlet length = 0\nlet currRow = 0\nlet currCol = 0\nlet won = false\n\nasync function main() {\n  //   await init()\n  let answer = doggle_wasm__WEBPACK_IMPORTED_MODULE_0__[\"getAnswer\"]()\n  length = answer.length\n  document.getElementById('answer').textContent = answer\n  let image = await getImage(answer)\n  document.getElementById('dogImage').src = image\n\n  render()\n}\n\nasync function getImage(breed) {\n  const response = await fetch(\n    `https://dog.ceo/api/breed/${breed}/images/random`,\n  )\n  const body = await response.json()\n  return body.message\n}\n\nfunction render() {\n  let root = document.getElementById('root')\n  root.innerHTML = ''\n\n  let data = doggle_wasm__WEBPACK_IMPORTED_MODULE_0__[\"getState\"]()\n    .split('\\n')\n    .map((row) => row.trim().split(/\\s+/))\n  root.style.display = 'inline-grid'\n  root.style.gridTemplate = `repeat(${data.length}, auto) / repeat(${data[0].length}, auto)`\n  console.log(data)\n  for (let y = 0; y < data.length; y++) {\n    for (let x = 0; x < data[y].length; x++) {\n      let element = document.createElement('span')\n      element.classList.add('tile')\n      element.id = `row-${y}-col-${x}`\n\n      let charAndColor = data[y][x].split('#')\n      let character = charAndColor[0]\n      let color = charAndColor[1]\n      if (typeof color == 'undefined') {\n        element.classList.remove('tile')\n        break\n      }\n      element.classList.add(charAndColor[1])\n\n      if (typeof character == 'undefined' || character == '') {\n        character = ' '\n      }\n      element.innerText = character\n\n      root.appendChild(element)\n    }\n  }\n}\n\ndocument.addEventListener(\n  'keydown',\n  (event) => {\n    let key = event.key\n    let code = event.code\n    let count = 0\n\n    if (code == 'Enter') {\n      let count = doggle_wasm__WEBPACK_IMPORTED_MODULE_0__[\"submitGuess\"](currRow++)\n      if (count == length) {\n        alert('You won!')\n      } else if (currRow == 6) {\n        alert('You lost!')\n      }\n      currCol = 0\n    } else if (code == 'Backspace') {\n      if (currCol > 0) {\n        doggle_wasm__WEBPACK_IMPORTED_MODULE_0__[\"typeLetter\"](currRow, currCol - 1, ' ')\n        currCol--\n      }\n    } else if (/^\\w$/.test(key)) {\n      if (currCol < length) {\n        doggle_wasm__WEBPACK_IMPORTED_MODULE_0__[\"typeLetter\"](currRow, currCol, key)\n        currCol++\n      }\n    }\n\n    render()\n  },\n  false,\n)\n\nmain()\n\n\n//# sourceURL=webpack:///./index.js?");

/***/ }),

/***/ "./node_modules/webpack/buildin/harmony-module.js":
/*!*******************************************!*\
  !*** (webpack)/buildin/harmony-module.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = function(originalModule) {\n\tif (!originalModule.webpackPolyfill) {\n\t\tvar module = Object.create(originalModule);\n\t\t// module.parent = undefined by default\n\t\tif (!module.children) module.children = [];\n\t\tObject.defineProperty(module, \"loaded\", {\n\t\t\tenumerable: true,\n\t\t\tget: function() {\n\t\t\t\treturn module.l;\n\t\t\t}\n\t\t});\n\t\tObject.defineProperty(module, \"id\", {\n\t\t\tenumerable: true,\n\t\t\tget: function() {\n\t\t\t\treturn module.i;\n\t\t\t}\n\t\t});\n\t\tObject.defineProperty(module, \"exports\", {\n\t\t\tenumerable: true\n\t\t});\n\t\tmodule.webpackPolyfill = 1;\n\t}\n\treturn module;\n};\n\n\n//# sourceURL=webpack:///(webpack)/buildin/harmony-module.js?");

/***/ })

}]);