exports.id = 445;
exports.ids = [445];
exports.modules = {

/***/ 8747:
/***/ ((module) => {

// Exports
module.exports = {
	"textarea": "styles_textarea__UoB2p"
};


/***/ }),

/***/ 4532:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "g": () => (/* binding */ Textarea)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8747);
/* harmony import */ var _styles_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_module_css__WEBPACK_IMPORTED_MODULE_1__);


/* Vou pegar todos os dados que a pessoa jogar neste textarea e jogar no rest
   E eu só posso receber do tipo HTMLprops e dentro do HTMLprops só posso receber 
   o tipo HTMLTextAreaElement
   depois dentro de textarea adicionando o ...rest para repassar  as propriedades que o usuario ultilizou
*/ function Textarea({ ...rest }) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("textarea", {
        className: (_styles_module_css__WEBPACK_IMPORTED_MODULE_1___default().textarea),
        ...rest
    });
}


/***/ }),

/***/ 7675:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "db": () => (/* binding */ db)
/* harmony export */ });
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3745);
/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1492);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([firebase_app__WEBPACK_IMPORTED_MODULE_0__, firebase_firestore__WEBPACK_IMPORTED_MODULE_1__]);
([firebase_app__WEBPACK_IMPORTED_MODULE_0__, firebase_firestore__WEBPACK_IMPORTED_MODULE_1__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);


const firebaseConfig = {
    apiKey: "AIzaSyDlfkPx2aZQh0qBUhI4-hc4Hyw4HjAZ5qQ",
    authDomain: "tarefasnextjs.firebaseapp.com",
    projectId: "tarefasnextjs",
    storageBucket: "tarefasnextjs.appspot.com",
    messagingSenderId: "511684015289",
    appId: "1:511684015289:web:400efa9b67f43956da5768"
};
// Initialize Firebase
const firebaseApp = (0,firebase_app__WEBPACK_IMPORTED_MODULE_0__.initializeApp)(firebaseConfig);
const db = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.getFirestore)(firebaseApp);
 // exportando a configuração do db 

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;