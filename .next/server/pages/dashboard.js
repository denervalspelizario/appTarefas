(() => {
var exports = {};
exports.id = 26;
exports.ids = [26];
exports.modules = {

/***/ 1024:
/***/ ((module) => {

// Exports
module.exports = {
	"container": "styles_container__qyl6g",
	"content": "styles_content__b7wif",
	"contentForm": "styles_contentForm__AC5rt",
	"title": "styles_title__9id5R",
	"label": "styles_label__HDt0t",
	"checkboxArea": "styles_checkboxArea__COjRV",
	"checkbox": "styles_checkbox__9vQ0i",
	"button": "styles_button__q7p_d",
	"taskContainer": "styles_taskContainer__Wp_Cn",
	"task": "styles_task__5On_m",
	"tagContainer": "styles_tagContainer___j8kC",
	"tag": "styles_tag__SoKff",
	"shareButton": "styles_shareButton__sDhmV",
	"taskContent": "styles_taskContent__TL3wm",
	"trashButton": "styles_trashButton__h4JHa"
};


/***/ }),

/***/ 1013:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Dashboard),
/* harmony export */   "getServerSideProps": () => (/* binding */ getServerSideProps)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_module_css__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(1024);
/* harmony import */ var _styles_module_css__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_styles_module_css__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(968);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1649);
/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_textArea__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4532);
/* harmony import */ var _services_firebaseConnection__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(7675);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(1492);
/* harmony import */ var react_icons_fi__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(2750);
/* harmony import */ var react_icons_fi__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_icons_fi__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(6290);
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_icons_fa__WEBPACK_IMPORTED_MODULE_9__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_services_firebaseConnection__WEBPACK_IMPORTED_MODULE_5__, firebase_firestore__WEBPACK_IMPORTED_MODULE_7__]);
([_services_firebaseConnection__WEBPACK_IMPORTED_MODULE_5__, firebase_firestore__WEBPACK_IMPORTED_MODULE_7__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);



 // esse head é o texto que fica na aba da pagina
 // importando o getSession para verificar se a sessão ativa

 // importando dados do db

 // importando os metodos do firestore


// comando para instalar icons yarn add react-icons
function Dashboard({ user  }) {
    const [input, setInput] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("") // 
    ;
    const [checkbox, setCheckbox] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false) // state que armazenará click da checkbox iniciará como false
    ;
    const [tarefas, setTarefas] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]) // tipando que a state tarefaProps tenha a estrutura da interface tarefaProps
    ;
    // FUNCAO QUE ADICINA NA STATE CHECKBOX A ÇAO DO CLICK NA CHECKBOX
    function dadoCheckbox(event) {
        setCheckbox(event.target.checked);
    }
    //FUNÇÃO QUE REGISTRA DADOS DO USER NO BANCO DE DADOS - CRIA UMA CHILD 'tarefas' E ADICONA UM OBJETO COM /EMAIL DO USER/DATA DO REGISTRO/SE REGISTO É PUBLICO OU NÃO/TAREFA DIGITADA NA TEXTAREA   
    async function registrandoTarefas(event) {
        event.preventDefault(); // garantindo que ao clicar não sera atualizada a pagina 
        if (input === "") return; // ao clicar se estiver vazio return nada   
        // DEU CERTO
        try {
            await (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_7__.addDoc)((0,firebase_firestore__WEBPACK_IMPORTED_MODULE_7__.collection)(_services_firebaseConnection__WEBPACK_IMPORTED_MODULE_5__.db, "tarefas"), {
                tarefa: input,
                created: new Date(),
                user: user?.email,
                public: checkbox // registrando se é publica ou não com dados da state checkbox 
            });
            setInput(""); // após o registro limpa  a state 
            setCheckbox(false) // e altera a checkbox para desmarcada/false  
            ;
        // DEU ERRO   
        } catch (err) {
            console.log(err);
        }
    }
    /* FUNCAO QUE ACESSA TAREFAS DO FIREBASE, FILTRA APENAS TAREFAS DO USUARIO LOGADO DEPOIS JOGA OS DADOS EM UM SNAPSHOT QUE CONTEM UMA LISTA ESTRUTURA POR UMA INTERFACE
   E APOS ADICIONAR POR LOOPING(FOREACH) TODAS AS TAREFAS 1 POR 1 EM LISTA ATUALIZA A STATE TAREFAS COM ESSES DADOS*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        async function loadTarefas() {
            //ACESSANDO TAREFAS DE DB
            const tarefasRef = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_7__.collection)(_services_firebaseConnection__WEBPACK_IMPORTED_MODULE_5__.db, "tarefas") // acessando tarefas de db e jogando em tarefasRef (Estou referenciando as tarefas que estao no database e jogando no tarefasRef)
            ;
            // FILTRANDO TAREFAS DE USUARIO LOGADO
            const q = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_7__.query)(tarefasRef, (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_7__.orderBy)("created", "desc"), (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_7__.where)("user", "==", user?.email) // filtrando tarefas apenas de usuario logado
            );
            /* Usando o where é necessario criar indice la no banco indices>adicionar indice> em Código do conjunto adicione tarefas, em caminho de campo user e crescente, 
         no segundo campo adicionar created Decrescente, e adiconao em coleção.. isto feito vc vai criar um segundo campo mas invertendo
         tb tarefas mas campo user sera descrecente e created sera crescente e adicionar colecao obs demora um pouco para criar e ficar com o status de ativado 
         OBS SE DER ERRO CRIAR IGUAL MAS AO INVES DE COLEÇÃO FAZ COM GRUPO DE COLEÇOES
      */ /* PEGANDO OS DADOS FILTRADOS( Q ) JOGANDO ESSES DADOS NO SNAPSHOT  DEPOIS ESSES DADOS SERÃO PERCORRIDOS PELO FOREACH E ADICIONADOS NA LISTA ESTA LISTA NO FINAL 
         SERÁ ADICIONADA NA STATE TAREFAS, ESSE OnSnapshot É UMA FUNCAO QUE FICA ATUALIZANDO AUTOMATICAMENTE SEMPRE OLHANDO NO FIREBASE DE MANEIRA REALTIME SE MUDAR LA MUDA AQUI*/ (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_7__.onSnapshot)(q, (snapshot)=>{
                let lista = []; // esta lista recebe a tipagem da interface TarefaProps
                snapshot.forEach((doc)=>{
                    lista.push({
                        id: doc.id,
                        tarefa: doc.data().tarefa,
                        created: doc.data().created,
                        user: doc.data().user,
                        public: doc.data().public
                    });
                });
                setTarefas(lista);
            });
        }
        loadTarefas() // chamando a funcao 
        ;
    }, [
        user?.email
    ]) // A FUNÇÃO SOMENTE VAI FUNCIONAR QUANDO USER?.EMAILE STIVER ATIVO OU SEJA QUANDO USUAIO ESTIVER LOGADO
    ;
    // FUNCAO QUE É CHAMADA AO CLICLAR O ICON(BUTTON) DE COMPARTILHAR COPIA URL DA TAREFA PARA PODER COMPARTILHAR
    async function compartilharURL(id) {
        await navigator.clipboard.writeText(`${"http://localhost:3000"}/task/${id}` // copiando url da tarefa que se vai compartilhar(NEXT_PUBLIC_URL = http://localhost:3000  olhar em .env)
        );
        alert("URL Copiado com sucesso");
    }
    //FUNCAO QUE DELETA TASK AO CILCAR NO ICON DE TRASH
    async function deletarTarefa(id) {
        const referenciarTerfa = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_7__.doc)(_services_firebaseConnection__WEBPACK_IMPORTED_MODULE_5__.db, "tarefas", id);
        await (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_7__.deleteDoc)(referenciarTerfa);
    }
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: (_styles_module_css__WEBPACK_IMPORTED_MODULE_10___default().container),
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_head__WEBPACK_IMPORTED_MODULE_2___default()), {
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("title", {
                    children: "Meu painel de tarefas"
                })
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("main", {
                className: (_styles_module_css__WEBPACK_IMPORTED_MODULE_10___default().main),
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("section", {
                        className: (_styles_module_css__WEBPACK_IMPORTED_MODULE_10___default().content),
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: (_styles_module_css__WEBPACK_IMPORTED_MODULE_10___default().contentForm),
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                    className: (_styles_module_css__WEBPACK_IMPORTED_MODULE_10___default().title),
                                    children: "Qual a sua tarefa?"
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("form", {
                                    onSubmit: registrandoTarefas,
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_textArea__WEBPACK_IMPORTED_MODULE_4__/* .Textarea */ .g, {
                                            placeholder: "Digite qual a sua tarefa..",
                                            value: input,
                                            onChange: (event)=>setInput(event.target.value)
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: (_styles_module_css__WEBPACK_IMPORTED_MODULE_10___default().checkboxArea),
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                    type: "checkbox",
                                                    className: (_styles_module_css__WEBPACK_IMPORTED_MODULE_10___default().checkbox),
                                                    checked: checkbox,
                                                    onChange: dadoCheckbox
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                                    className: (_styles_module_css__WEBPACK_IMPORTED_MODULE_10___default().label),
                                                    children: "Deixar tarefa publica "
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                            className: (_styles_module_css__WEBPACK_IMPORTED_MODULE_10___default().button),
                                            type: "submit",
                                            children: "Registrar"
                                        })
                                    ]
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("section", {
                        className: (_styles_module_css__WEBPACK_IMPORTED_MODULE_10___default().taskContainer),
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                children: "Minhas tarefas"
                            }),
                            tarefas.map((itemRecebidoTarefas)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("article", {
                                    className: (_styles_module_css__WEBPACK_IMPORTED_MODULE_10___default().task),
                                    children: [
                                        itemRecebidoTarefas.public && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: (_styles_module_css__WEBPACK_IMPORTED_MODULE_10___default().tagContainer),
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                                    className: (_styles_module_css__WEBPACK_IMPORTED_MODULE_10___default().tag),
                                                    children: "PUBLICO"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                                    className: (_styles_module_css__WEBPACK_IMPORTED_MODULE_10___default().shareButton),
                                                    onClick: ()=>compartilharURL(itemRecebidoTarefas.id),
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_fi__WEBPACK_IMPORTED_MODULE_8__.FiShare2, {
                                                        size: 22,
                                                        color: "#3183FF"
                                                    })
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: (_styles_module_css__WEBPACK_IMPORTED_MODULE_10___default().taskContent),
                                            children: [
                                                itemRecebidoTarefas.public ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_6___default()), {
                                                    href: `/task/${itemRecebidoTarefas.id}`,
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                        children: itemRecebidoTarefas.tarefa
                                                    })
                                                }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                    children: itemRecebidoTarefas.tarefa
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                                    className: (_styles_module_css__WEBPACK_IMPORTED_MODULE_10___default().trashButton),
                                                    onClick: ()=>deletarTarefa(itemRecebidoTarefas.id),
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_9__.FaTrash, {
                                                        size: 24,
                                                        color: "#ea3140"
                                                    })
                                                })
                                            ]
                                        })
                                    ]
                                }, itemRecebidoTarefas.id))
                        ]
                    })
                ]
            })
        ]
    });
}
// VERIFICANDO SE TEM USUARIO E SE NÃO TIVER BLOQUEANDO TODAS A ROTA E REDIRECIONANDO PARA HOME COM RETORNO DE EMAIL DO USUARIO
const getServerSideProps = async ({ req  })=>{
    /* GetServerSideProps que permite buscar dados em tempo de execução no servidor e, em seguida, passar esses dados para a página antes que ela seja renderizada no cliente.
  Essa função é executada no servidor sempre que uma página é acessada e permite que você faça requisições a uma API externa ou a um banco de dados, por exemplo, 
  para buscar os dados necessários para a renderização da página. Depois que os dados são obtidos, eles são passados para a página como props, que podem ser utilizados na renderização da mesma.
  O uso do getServerSideProps é uma forma eficiente de se obter dados atualizados em tempo de execução para cada requisição de página, 
  ao invés de obter todos os dados de uma vez só e enviá-los para o cliente, o que pode tornar a aplicação mais lenta.*/ const session = await (0,next_auth_react__WEBPACK_IMPORTED_MODULE_3__.getSession)({
        req
    });
    //console.log(session)
    if (!session?.user) {
        return {
            redirect: {
                destination: "/",
                permanent: false // false pq queremos somente redirecionar quando o user não esta logado
            }
        };
    }
    return {
        props: {
            user: {
                email: session?.user.email // se estiver logado retorna o email do usuario logado
            }
        }
    };
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

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

/***/ 6290:
/***/ ((module) => {

"use strict";
module.exports = require("react-icons/fa");

/***/ }),

/***/ 2750:
/***/ ((module) => {

"use strict";
module.exports = require("react-icons/fi");

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
var __webpack_exports__ = __webpack_require__.X(0, [664,445], () => (__webpack_exec__(1013)));
module.exports = __webpack_exports__;

})();