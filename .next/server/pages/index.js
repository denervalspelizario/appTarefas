(() => {
var exports = {};
exports.id = 405;
exports.ids = [405];
exports.modules = {

/***/ 2372:
/***/ ((module) => {

// Exports
module.exports = {
	"container": "home_container__GJ1Uu",
	"logoContent": "home_logoContent__ZjqGn",
	"hero": "home_hero__tr80M",
	"title": "home_title__P93ac",
	"infoContent": "home_infoContent__ITRDf",
	"box": "home_box__gQezQ"
};


/***/ }),

/***/ 9229:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/media/hero.397efab8.png","height":353,"width":579,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAFCAYAAAB4ka1VAAAAsElEQVR4nAGlAFr/AeDd4ADW19KnKiwtWAcHCvz9/fwE//8A/vz8/AK8vMBiAQAAABGwssuwPj8wPhEOBP3+/v4DAgIB/e/t7gPGyM1jAQBn/2qbROaVXk4U/AYGBgMAAAAB6+z0/NfU0QQBBAJiAQAZn2ybhRGTOTUgAP7/BAD//wAA6+74AAUC/QDs6+VmAQ8AAD6NmJIoGR4p4BMSDUwSEhFkuba0ienq8AViZGGZ5O9IkKpdllIAAAAASUVORK5CYII=","blurWidth":8,"blurHeight":5});

/***/ }),

/***/ 85:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Home),
/* harmony export */   "getStaticProps": () => (/* binding */ getStaticProps)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(968);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _src_styles_home_module_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(2372);
/* harmony import */ var _src_styles_home_module_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_src_styles_home_module_css__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _public_assets_hero_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9229);
/* harmony import */ var _services_firebaseConnection__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7675);
/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1492);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_services_firebaseConnection__WEBPACK_IMPORTED_MODULE_4__, firebase_firestore__WEBPACK_IMPORTED_MODULE_5__]);
([_services_firebaseConnection__WEBPACK_IMPORTED_MODULE_4__, firebase_firestore__WEBPACK_IMPORTED_MODULE_5__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);

 // esse head é o texto que fica na aba da pagina

 // usando image de next 



function Home({ posts , comments  }) {
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: (_src_styles_home_module_css__WEBPACK_IMPORTED_MODULE_6___default().container),
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("title", {
                    children: "Tarefas+ | Organize suas tarefas de forma f\xe1cil"
                })
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("main", {
                className: (_src_styles_home_module_css__WEBPACK_IMPORTED_MODULE_6___default().main),
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: (_src_styles_home_module_css__WEBPACK_IMPORTED_MODULE_6___default().logoContent),
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_2___default()) // Estrututa de Imagem do Next
                        , {
                            className: (_src_styles_home_module_css__WEBPACK_IMPORTED_MODULE_6___default().hero),
                            alt: "Logo Tarefas+",
                            src: _public_assets_hero_png__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z,
                            priority: true
                        })
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h1", {
                        className: (_src_styles_home_module_css__WEBPACK_IMPORTED_MODULE_6___default().title),
                        children: [
                            "Sistema feito para voc\xea organizar ",
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                            "seus estudos e tarefas"
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: (_src_styles_home_module_css__WEBPACK_IMPORTED_MODULE_6___default().infoContent),
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("section", {
                                className: (_src_styles_home_module_css__WEBPACK_IMPORTED_MODULE_6___default().box),
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                    children: [
                                        "+",
                                        posts,
                                        " posts"
                                    ]
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("section", {
                                className: (_src_styles_home_module_css__WEBPACK_IMPORTED_MODULE_6___default().box),
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                    children: [
                                        "+",
                                        comments,
                                        " comentarios"
                                    ]
                                })
                            })
                        ]
                    })
                ]
            })
        ]
    });
}
// Pegando la no db a quantidade "comments" e "tarefas" e adiciona no
// props posts('tarefas') e comments'comentarios' somente a quantidade de ambos para ser usado na section box 
const getStaticProps = async ()=>{
    /* O getStaticProps é uma função utilizada no Next.js para gerar páginas estáticas com conteúdo dinâmico. 
      O getStaticProps sabe que essa página é uma página estática e pode ser pré-renderizada no momento da build. 
      Isso significa que quando o usuário acessar essa página, o conteúdo já estará disponível e carregará mais rapidamente do que se a página fosse gerada dinamicamente no momento do acesso.
  
  .*/ // Buscar do banco de dados os numeros e mandar pro componente
    const commentRef = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_5__.collection)(_services_firebaseConnection__WEBPACK_IMPORTED_MODULE_4__.db, "comments") // pegando todas as  collection  comments
    ;
    const postRef = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_5__.collection)(_services_firebaseConnection__WEBPACK_IMPORTED_MODULE_4__.db, "tarefas") // pegando todas as collection tarefas
    ;
    const commentSnapshot = await (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_5__.getDocs)(commentRef) // pega todos os docs e joga na const
    ;
    const postSnapshot = await (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_5__.getDocs)(postRef) // pega todos os docs e joga na const
    ;
    return {
        props: {
            posts: postSnapshot.size || 0,
            comments: commentSnapshot.size || 0 // repassa a props apenas a quantidade de comments
        },
        revalidate: 60 // será revalidada(atualizada) a cada 60 segundos
    };
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

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

/***/ }),

/***/ 3918:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/amp-context.js");

/***/ }),

/***/ 5732:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/amp-mode.js");

/***/ }),

/***/ 2796:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 4486:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-blur-svg.js");

/***/ }),

/***/ 744:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-config-context.js");

/***/ }),

/***/ 5843:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-config.js");

/***/ }),

/***/ 9552:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-loader");

/***/ }),

/***/ 2470:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/side-effect.js");

/***/ }),

/***/ 618:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils/warn-once.js");

/***/ }),

/***/ 968:
/***/ ((module) => {

"use strict";
module.exports = require("next/head");

/***/ }),

/***/ 6689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 3745:
/***/ ((module) => {

"use strict";
module.exports = import("firebase/app");;

/***/ }),

/***/ 1492:
/***/ ((module) => {

"use strict";
module.exports = import("firebase/firestore");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [636,675], () => (__webpack_exec__(85)));
module.exports = __webpack_exports__;

})();