(() => {
var exports = {};
exports.id = 198;
exports.ids = [198];
exports.modules = {

/***/ 8687:
/***/ ((module) => {

// Exports
module.exports = {
	"container": "styles_container__Sq8hF",
	"main": "styles_main__HXFVR",
	"task": "styles_task__Fad5H",
	"commentsContainer": "styles_commentsContainer__unCk3",
	"button": "styles_button__OQxz6",
	"comment": "styles_comment__vtH9n",
	"headComment": "styles_headComment__RzhyT",
	"commentsLabel": "styles_commentsLabel__xBI1G",
	"buttonTrash": "styles_buttonTrash__KjSST"
};


/***/ }),

/***/ 4681:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Task),
/* harmony export */   "getServerSideProps": () => (/* binding */ getServerSideProps)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(968);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_module_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(8687);
/* harmony import */ var _styles_module_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_styles_module_css__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _services_firebaseConnection__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7675);
/* harmony import */ var _components_textArea__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4532);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1649);
/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(6290);
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_icons_fa__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(1492);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_services_firebaseConnection__WEBPACK_IMPORTED_MODULE_2__, firebase_firestore__WEBPACK_IMPORTED_MODULE_7__]);
([_services_firebaseConnection__WEBPACK_IMPORTED_MODULE_2__, firebase_firestore__WEBPACK_IMPORTED_MODULE_7__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);

 // importando a tag de head que será o cabeçario




 // Hook para saber qual usuario esta logado


function Task({ item , allComments  }) {
    const { data: session  } = (0,next_auth_react__WEBPACK_IMPORTED_MODULE_5__.useSession)(); // data = dados firebase    session = true/logado  false/deslogado
    /*O useSession é um hook fornecido pela biblioteca Next.js que permite acessar informações de sessão do usuário em páginas ou componentes React.
    O useSession retorna um array com dois elementos: o primeiro é um objeto contendo informações da sessão do usuário 
    (como o ID do usuário, o email, o token de acesso, etc.), e o segundo é um valor booleano que indica se o usuário está autenticado ou não.
  */ const [input, setInput] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)("");
    const [comments, setComments] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(allComments || []) // state se não tiver nenhum comentario vai começar vazio - e allComments tipado com CommentProps que é uma array
    ;
    //FUNCAO QUE AO USER CLICAR NO BOTÃO FO FORMULÁRIO VERIFICA SE USER ESTA LOGADO SE ESTIVER CRIAR UMA NOVA COLLECTION NO FIREBASE COM A SEGUINTE ESTRUTURA
    // COMMENT(COMENTARIO NO INPUT) - CREATED(DATA QUE FOI CRIADO O COMENTARIO) - USER(NOME EMAIL) - NAME(NOME USUARIO) - ID(ID DO COMMETS CRIADO)
    async function tratarComentarios(event) {
        event.preventDefault(); // prevenindo que não se atualize sonho
        if (input === "") {
            return;
        }
        if (!session?.user?.email || !session?.user?.name) {
            return;
        }
        try {
            const docRef = await (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_7__.addDoc)((0,firebase_firestore__WEBPACK_IMPORTED_MODULE_7__.collection)(_services_firebaseConnection__WEBPACK_IMPORTED_MODULE_2__.db, "comments"), {
                comment: input,
                created: new Date(),
                user: session?.user?.email,
                name: session?.user?.name,
                taskId: item?.taskId
            });
            // criando Objeto data com a estrutura  comentario 
            const data = {
                id: docRef.id,
                comment: input,
                user: session?.user?.email,
                name: session?.user?.name,
                taskId: item?.taskId //id do comentario
            };
            setComments((comentariosAntigos)=>[
                    ...comentariosAntigos,
                    data
                ]) // Estou adicionando na state commments os comentarios antigos + o comentario que acabou de ser adicionado
            ;
            setInput("") // após criar a collection será esvaziando o input  
            ;
        } catch (err) {
            console.log(err) // clg do erro
            ;
        }
    }
    // FUNCAO DELETAR COMENTARIOS
    async function deletarComentarios(id) {
        try {
            const docRef = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_7__.doc)(_services_firebaseConnection__WEBPACK_IMPORTED_MODULE_2__.db, "comments", id) // acessando db > comments > id do comentarios que será deletado e jogandoe ssa referencia no docref
            ;
            await (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_7__.deleteDoc)(docRef);
            const comentariosFiltrados = comments.filter((item)=>item.id !== id) // filter vai percorrer TODOS os comentarios pelos ids e vai devolver todos que sejam DIFERENTES do id referenciado
            ;
            setComments(comentariosFiltrados) // atualizando o state comments(que contem todos os comentarios) com os comentarios MENOS o comentario deletado
            ;
        } catch (err) {
            console.log(err);
        }
    }
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: (_styles_module_css__WEBPACK_IMPORTED_MODULE_8___default().container),
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("title", {
                    children: "Tarefa - Detalhes da Tarefa"
                })
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("main", {
                className: (_styles_module_css__WEBPACK_IMPORTED_MODULE_8___default().main),
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                        children: "Tarefa"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("article", {
                        className: (_styles_module_css__WEBPACK_IMPORTED_MODULE_8___default().task),
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                            children: item.tarefa
                        })
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("section", {
                className: (_styles_module_css__WEBPACK_IMPORTED_MODULE_8___default().commentsContainer),
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                        children: "Deixar comentarios"
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("form", {
                        onSubmit: tratarComentarios,
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_textArea__WEBPACK_IMPORTED_MODULE_3__/* .Textarea */ .g, {
                                value: input,
                                placeholder: "digite seu coment\xe1rio....",
                                onChange: (event)=>setInput(event.target.value)
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                className: (_styles_module_css__WEBPACK_IMPORTED_MODULE_8___default().button),
                                disabled: !session?.user,
                                children: "Enviar coment\xe1rio"
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("section", {
                className: (_styles_module_css__WEBPACK_IMPORTED_MODULE_8___default().commentsContainer),
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                        children: "Todos coment\xe1rios"
                    }),
                    comments.length === 0 && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                        children: "Nenhum comentario foi encontrado..."
                    }),
                    comments.map((item)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("article", {
                            className: (_styles_module_css__WEBPACK_IMPORTED_MODULE_8___default().comment),
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: (_styles_module_css__WEBPACK_IMPORTED_MODULE_8___default().headComment),
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                            className: (_styles_module_css__WEBPACK_IMPORTED_MODULE_8___default().commentsLabel),
                                            children: item.name
                                        }),
                                        item.user === session?.user?.email && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                            className: (_styles_module_css__WEBPACK_IMPORTED_MODULE_8___default().buttonTrash),
                                            onClick: ()=>deletarComentarios(item.id),
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_6__.FaTrash, {
                                                size: 18,
                                                color: "#ea3140"
                                            })
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                    children: item.comment
                                })
                            ]
                        }, item.id))
                ]
            })
        ]
    });
}
const getServerSideProps = async ({ params  })=>{
    /* GetServerSideProps que permite buscar dados em tempo de execução no servidor e, em seguida, passar esses dados para a página antes que ela seja renderizada no cliente.
   Essa função é executada no servidor sempre que uma página é acessada e permite que você faça requisições a uma API externa ou a um banco de dados, por exemplo, 
   para buscar os dados necessários para a renderização da página. Depois que os dados são obtidos, eles são passados para a página como props, que podem ser utilizados na renderização da mesma.
   O uso do getServerSideProps é uma forma eficiente de se obter dados atualizados em tempo de execução para cada requisição de página, 
   ao invés de obter todos os dados de uma vez só e enviá-los para o cliente, o que pode tornar a aplicação mais lenta.  
*/ const id = params?.id; // garantindo e ja tipando que este id da tarefa será uma string
    const docRef = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_7__.doc)(_services_firebaseConnection__WEBPACK_IMPORTED_MODULE_2__.db, "tarefas", id) // docRef é referenciando por db > tarefas > id  para poder chegar na id exata da tarefa ou seja pega um doc especifico
    ;
    //TODOS AS ARRAY DE COMENTARIOS DO USUARIO(olhar q la tem o filtro) SERÁO ADICIONANDO DENTRO DE ALLCOMMENTS
    // OU SEJA EM ALLCOMMENTS CONSTARÁ TODOS OS COMENTARIOS DO USUÁRIO
    const q = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_7__.query)((0,firebase_firestore__WEBPACK_IMPORTED_MODULE_7__.collection)(_services_firebaseConnection__WEBPACK_IMPORTED_MODULE_2__.db, "comments"), (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_7__.where)("taskId", "==", id)) // filtrando apenas comments do db tendo o id seja igual a id logada e jogando na const q   
    ;
    const snapshotComments = await (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_7__.getDocs)(q) // Depois de filtrar adicionando esses dados de comments do user para snapshotComments
    ;
    let allComments = [] // estabelecendo tipagem definida pela interface CommentProps[]
    ;
    snapshotComments.forEach((doc)=>{
        allComments.push({
            id: doc.id,
            comment: doc.data().comment,
            user: doc.data().user,
            name: doc.data().name,
            taskId: doc.data().taskId
        });
    });
    console.log(allComments);
    const snapshot = await (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_7__.getDoc)(docRef) // repassando o doc para o snapshot
    ;
    // CONDICIONAL  SE ELE DIGITAR UMA URL QUE NÃO EXISTE SERÁ REDIRECIONANDO PARA HOME
    if (snapshot.data() === undefined) {
        return {
            redirect: {
                destination: "/",
                permanent: false // apenas um vez
            }
        };
    }
    //CONDICIONAL QUE PERMITE ACESSAR URL APENAS DE TAREFAS PUBLICAS
    if (!snapshot.data()?.public) {
        return {
            redirect: {
                destination: "/",
                permanent: false // apenas 1 vez
            }
        };
    }
    const miliseconds = snapshot.data()?.created?.seconds * 1000 // adicionando em milisecods o valor de seconds * 1000 virando milisegundos msm
    ;
    // task esse objeto vai recber todos os dados de maneira organizada 
    const task = {
        tarefa: snapshot.data()?.tarefa,
        public: snapshot.data()?.public,
        created: new Date(miliseconds).toLocaleDateString(),
        user: snapshot.data()?.user,
        taskId: id
    };
    console.log(task);
    // RETORNANDO A TAREFA TODA FORMATADA E TODOS OS COMENTARIOS DO USER LOGADO
    return {
        props: {
            item: task,
            allComments: allComments
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
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [445], () => (__webpack_exec__(4681)));
module.exports = __webpack_exports__;

})();