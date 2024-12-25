"use strict";
(self["webpackChunkbelajar_webpack_code"] = self["webpackChunkbelajar_webpack_code"] || []).push([["hello"],{

/***/ "./src/hello.js":
/*!**********************!*\
  !*** ./src/hello.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);

var mahasiswa = [{
  nama: "Rudi",
  email: "rudi@gmail.com",
  jurusan: "Teknik Informatika"
}, {
  nama: "Andi",
  email: "andi@gmail.com",
  jurusan: "Teknik Kimia"
}, {
  nama: "Rina",
  email: "rina@gmail.com",
  jurusan: "Teknik Industri"
}];
var mhs = lodash__WEBPACK_IMPORTED_MODULE_0___default().find(mahasiswa, {
  nama: "Rudi"
});
console.log("mhs", mhs);

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/hello.js"));
/******/ }
]);