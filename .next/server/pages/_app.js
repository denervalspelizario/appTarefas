(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 6811:
/***/ ((module) => {

// Exports
module.exports = {
	"header": "styles_header__JYCjN",
	"content": "styles_content__5gqdf",
	"logo": "styles_logo__MHxt6",
	"loginButton": "styles_loginButton__xrL3N",
	"nav": "styles_nav__KGtwf",
	"link": "styles_link__fgMrm"
};


/***/ }),

/***/ 1705:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ App)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./src/styles/globals.css
var globals = __webpack_require__(108);
// EXTERNAL MODULE: ./src/components/header/styles.module.css
var styles_module = __webpack_require__(6811);
var styles_module_default = /*#__PURE__*/__webpack_require__.n(styles_module);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: external "next-auth/react"
var react_ = __webpack_require__(1649);
;// CONCATENATED MODULE: ./src/components/header/index.tsx


 // importando link do next (cuidado para não chamar o do react-router-dom)
 // importando os metodos do next 
function Header() {
    const { data: session , status  } = (0,react_.useSession)();
    /* atravez da useSession temos acesso a data: session que podemos ter acesso se usuario esta logando, se está carregando
     se tem as info dos usuario 
  */ return /*#__PURE__*/ jsx_runtime_.jsx("header", {
        className: (styles_module_default()).header,
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("section", {
            className: (styles_module_default()).content,
            children: [
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("nav", {
                    className: (styles_module_default()).nav,
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                            href: "/" // toda vez que clicado vai até home 
                            ,
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h1", {
                                className: (styles_module_default()).logo,
                                children: [
                                    "Tarefas",
                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                        children: "+"
                                    })
                                ]
                            })
                        }),
                        session?.user && /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                            href: "/dashboard",
                            className: (styles_module_default()).link,
                            children: "Meu painel"
                        })
                    ]
                }),
                status === "loading" ? /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {}) // nao mostra nada
                 : session ? /*#__PURE__*/ (0,jsx_runtime_.jsxs)("button", {
                    className: (styles_module_default()).loginButton,
                    onClick: ()=>(0,react_.signOut)(),
                    children: [
                        "Ol\xe1 ",
                        session?.user?.name
                    ]
                }) : /*#__PURE__*/ jsx_runtime_.jsx("button", {
                    className: (styles_module_default()).loginButton,
                    onClick: ()=>(0,react_.signIn)("google"),
                    children: "Acessar"
                })
            ]
        })
    });
}

;// CONCATENATED MODULE: ./src/pages/_app.tsx



 // importando session do next-auth
function App({ Component , pageProps  }) {
    return /*#__PURE__*/ jsx_runtime_.jsx(react_.SessionProvider // Com o next-auth o <> deixa de abraçar os components e agora o SessionProvider faz esse papel não esquecer de  session={}
    , {
        session: pageProps.session,
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx(Header, {}),
                /*#__PURE__*/ jsx_runtime_.jsx(Component, {
                    ...pageProps
                })
            ]
        })
    });
}


/***/ }),

/***/ 108:
/***/ (() => {



/***/ }),

/***/ 1649:
/***/ ((module) => {

"use strict";
module.exports = require("next-auth/react");

/***/ }),

/***/ 3280:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 1751:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 1109:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-local-url.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 7782:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/resolve-href.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils.js");

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

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [664], () => (__webpack_exec__(1705)));
module.exports = __webpack_exports__;

})();