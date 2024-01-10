(self["webpackChunk_N_E"] = self["webpackChunk_N_E"] || []).push([[335],{

/***/ 1382:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {


    (window.__NEXT_P = window.__NEXT_P || []).push([
      "/contact",
      function () {
        return __webpack_require__(4607);
      }
    ]);
    if(false) {}
  

/***/ }),

/***/ 4910:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7294);


const Button = (props)=>{
    const { ariaLabel , onClick , children , active , disabled , label , type , className  } = props;
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button", {
        className: "flex px-[16px] py-[8px] bg-white border border-[#DADCDF] justify-center rounded-[80px] items-center hover:bg-[#EDEDED] ".concat(active ? "activeBtn" : "", " ").concat(className ? className : ""),
        "aria-label": ariaLabel,
        type: type,
        onClick: onClick,
        disabled: disabled,
        role: "button",
        children: [
            label && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", {
                className: "mr-[10px] font-normal",
                children: label
            }),
            typeof children === "string" ? children : /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.cloneElement)(children)
        ]
    });
};
/* harmony default export */ __webpack_exports__["Z"] = (Button);


/***/ }),

/***/ 4607:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ contact; }
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(5893);
// EXTERNAL MODULE: ./components/Button/Button.tsx
var Button = __webpack_require__(4910);
// EXTERNAL MODULE: ./node_modules/react-toastify/dist/react-toastify.esm.mjs + 1 modules
var react_toastify_esm = __webpack_require__(2920);
;// CONCATENATED MODULE: ./back/services/MailService.ts

class MailService {
    /**
   * Envoie un message au destinataire sp�cifi� en utilisant un template.
   *
   * @param to        Adresse email du destinataire
   * @param urlDetail url de la page détail
   * @returns       	Statut de la requête
   */ async sendTemplate(emailParams) {
        console.log(emailParams);
        return await fetch(this.apiUrl, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(emailParams)
        }).then((response)=>{
            console.log(response);
            if (response.ok) {
                react_toastify_esm/* toast.success */.Am.success("Votre message a bien \xe9t\xe9 envoy\xe9 !");
                return response.json();
            } else {
                react_toastify_esm/* toast.error */.Am.error("Une erreur s'est produite, veuillez r\xe9essayer.");
            }
        }).catch((error)=>{
            react_toastify_esm/* toast.error */.Am.error("Une erreur s'est produite, veuillez r\xe9essayer.");
            console.error("Error:", error);
        // Handle any errors
        });
    }
    /**
   * Crée une instance de la classe MailService.
   *
   * @constructor
   * @param backendUrl Url du backend Carbon
   */ constructor(backendUrl){
        this.apiUrl = "".concat(backendUrl, "/contact");
    }
}

// EXTERNAL MODULE: ./node_modules/next/head.js
var head = __webpack_require__(9008);
var head_default = /*#__PURE__*/__webpack_require__.n(head);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(7294);
;// CONCATENATED MODULE: ./pages/contact.tsx





const ContactForm = ()=>{
    const [surname, setSurname] = (0,react.useState)("");
    const [name, setName] = (0,react.useState)("");
    const [email, setEmail] = (0,react.useState)("");
    const [message, setMessage] = (0,react.useState)("");
    const [isConsentConfirmed, setIsConsentConfirmed] = (0,react.useState)(false);
    const mailService = new MailService("https://realisation-handler.onrender.com" || 0);
    const handleSubmit = (e)=>{
        e.preventDefault();
        const emailParams = {
            to: "leopalazzi751@gmail.com",
            data: {
                name,
                surname,
                email,
                message
            }
        };
        mailService.sendTemplate(emailParams);
        // Réinitialiser les champs du formulaire
        setName("");
        setEmail("");
        setMessage("");
        setSurname("");
    };
    const onConsentChange = ()=>{
        setIsConsentConfirmed((prevState)=>!prevState);
    };
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsxs)((head_default()), {
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("title", {
                        children: "Page de contact"
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("meta", {
                        name: "description",
                        content: "Contactez-moi pour plus d'informations."
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("link", {
                        rel: "canonical",
                        href: "".concat("https://realisation-handler.onrender.com", "/contact")
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("script", {
                        type: "application/ld+json"
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)("h1", {
                className: "mb-2",
                children: "Contact"
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                className: "border mb-6"
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: "mb-[54px] text-[18px] text-[#7D7D7D]",
                children: [
                    "Vous pouvez me joindre \xe0 cette adresse :",
                    " ",
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("a", {
                        className: "underline text-[#000000]",
                        title: "Email vers Emmanuel Fraisse",
                        href: "mailto:em.fraisse@protonmail.com",
                        children: "emfraisse@protonmaill.com"
                    }),
                    "\xa0ou en remplissant ce formulaire"
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("form", {
                onSubmit: handleSubmit,
                className: "flex flex-col gap-[40px] text-[#000000]",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: "flex flex-col gap-[12px]",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)("label", {
                                htmlFor: "surname",
                                className: "text-[#000000] text-[18px]",
                                children: "Pr\xe9nom"
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)("input", {
                                type: "text",
                                name: "surname",
                                id: "surname",
                                value: surname,
                                onChange: (e)=>setSurname(e.target.value),
                                placeholder: "Entrez votre pr\xe9nom",
                                required: true,
                                className: "border-b-[1px] border-[#7D7D7D] pb-[10px] focus:outline-0 bg-[#F9F9F9]"
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: "flex flex-col gap-[12px]",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)("label", {
                                htmlFor: "name",
                                className: "text-[#000000] text-[18px]",
                                children: "Nom"
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)("input", {
                                type: "text",
                                id: "name",
                                name: "name",
                                value: name,
                                onChange: (e)=>setName(e.target.value),
                                placeholder: "Entrez votre nom",
                                required: true,
                                className: "border-b-[1px] border-[#7D7D7D] pb-[10px] focus:outline-0 bg-[#F9F9F9]"
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: "flex flex-col gap-[12px]",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)("label", {
                                htmlFor: "email",
                                className: "text-[#000000] text-[18px]",
                                children: "Email"
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)("input", {
                                type: "email",
                                id: "email",
                                name: "email",
                                value: email,
                                onChange: (e)=>setEmail(e.target.value),
                                required: true,
                                className: "border-b-[1px] border-[#7D7D7D] pb-[10px] focus:outline-0 bg-[#F9F9F9]",
                                placeholder: "Entrez votre addresse mail"
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: "flex flex-col gap-[12px]",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)("label", {
                                htmlFor: "message",
                                className: "text-[#000000] text-[18px]",
                                children: "Votre message"
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)("textarea", {
                                id: "message",
                                name: "message",
                                value: message,
                                onChange: (e)=>setMessage(e.target.value),
                                required: true,
                                className: "border-[1px] border-[#7D7D7D] pb-[10px] focus:outline-0 bg-[#F9F9F9] lg:min-h-[200px] pl-[12px] pt-[18px]",
                                placeholder: "Entrez votre message"
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("label", {
                        className: "row gap-[12px] items-center checkboxDiv",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)("input", {
                                id: "checkbox",
                                onChange: onConsentChange,
                                required: true,
                                name: "consentCheckbox",
                                type: "checkbox",
                                className: "w-[24px] h-[24px] checkboxContact"
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                className: "text-[12px] cursor-pointer",
                                children: "Pour nous contacter, compl\xe9tez le formulaire. J‘autorise \xe0 conserver mes donn\xe9es personnelles transmises via ce formulaire. Et \xe0 traiter vos donn\xe9es \xe0 des fins d‘information et de communication non commerciales."
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* default */.Z, {
                        type: "submit",
                        className: "self-start",
                        disabled: !isConsentConfirmed,
                        children: "Envoyer"
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ var contact = (ContactForm);


/***/ }),

/***/ 9008:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__(2636)


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, [774,888,179], function() { return __webpack_exec__(1382); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ _N_E = __webpack_exports__;
/******/ }
]);