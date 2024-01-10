(self["webpackChunk_N_E"] = self["webpackChunk_N_E"] || []).push([[888],{

/***/ 6840:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {


    (window.__NEXT_P = window.__NEXT_P || []).push([
      "/_app",
      function () {
        return __webpack_require__(7103);
      }
    ]);
    if(false) {}
  

/***/ }),

/***/ 3968:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "g": function() { return /* binding */ ContextApp; }
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7294);



const ContextApp = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)(null);
const ContextProvider = (param)=>{
    let { children  } = param;
    const [selectedFilters, setSelectedFilters] = useState([]);
    const [projectsList, setProjectsList] = useState([]);
    useEffect(()=>{
        localStorage.setItem("projectsList", JSON.stringify(projectsList));
    }, [
        projectsList
    ]);
    useEffect(()=>{
        const storedProjectsList = localStorage.getItem("projectsList");
        if (storedProjectsList) {
            setProjectsList(JSON.parse(storedProjectsList));
        }
    }, []);
    return /*#__PURE__*/ _jsx(ContextApp.Provider, {
        value: {
            selectedFilters,
            setSelectedFilters,
            projectsList,
            setProjectsList
        },
        children: children
    });
};
/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = ((/* unused pure expression or super */ null && (ContextProvider)));


/***/ }),

/***/ 7103:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ _app; }
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(5893);
// EXTERNAL MODULE: ./node_modules/next/router.js
var next_router = __webpack_require__(1163);
;// CONCATENATED MODULE: ./components/Header/Header.tsx


const Header = ()=>{
    const router = (0,next_router.useRouter)();
    const onClickContact = (event)=>{
        event.preventDefault();
        router.push("/contact");
    };
    const onClickHome = (event)=>{
        event.preventDefault();
        router.push("/");
    };
    return /*#__PURE__*/ (0,jsx_runtime.jsx)("header", {
        className: "pt-[48px] lg:px-[64px] px-[16px] mb-[52px] gap-[24px] flex flex-row justify-between items-center",
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)("a", {
            href: "https://realisation-handler.onrender.com",
            title: "Lien vers la home page",
            onClick: onClickHome,
            className: "cursor-pointer",
            children: /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                className: "text-[18px] lg:text-[20px] text-[#161616] font-normal",
                children: "Emmanuel Fraisse"
            })
        })
    });
};
/* harmony default export */ var Header_Header = (Header);

;// CONCATENATED MODULE: ./components/Footer/Footer.tsx

const Footer = ()=>{
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("footer", {
        className: "p-[56px] gap-[24px] flex flex-col bg-[#F4F4F4] shrink bt-[#F9F6FF] border lg:items-start max-sm:items-center",
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: "lg:flex lg:flex-row lg:justify-between lg:w-[100%] flex-col flex gap-[24px] max-sm:items-center",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                        className: "lg:text-[24px] text-[16px]",
                        children: "Emmanuel Fraisse"
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("a", {
                        href: "mailto:em.fraisse@protonmail.com",
                        className: "underline mb-[16px]",
                        title: "Email vers Emmanuel Fraisse",
                        children: "em.fraisse@protonmail.com"
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                className: "flex flex-col lg:flex-row justify-between",
                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                    className: "flex flex-col lg:flex-row justify-start gap-[24px]  text-center",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsx)("a", {
                            className: "border-[#D3D3D3] border px-[24px] py-[8px] rounded-[60px] bg-white",
                            title: "Lien vers Unifrance",
                            target: "_blank",
                            href: "https://google.com",
                            children: "Unifrance"
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)("a", {
                            className: "border-[#D3D3D3] border px-[24px] py-[8px] rounded-[60px] bg-white",
                            title: "Lien vers Mudi",
                            target: "_blank",
                            href: "https://google.com",
                            children: "Mudi"
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)("a", {
                            className: "border-[#D3D3D3] border px-[24px] py-[8px] rounded-[60px] bg-white",
                            title: "Lien vers IMDb",
                            target: "_blank",
                            href: "https://google.com",
                            children: "IMDb"
                        })
                    ]
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                className: "mt-[24px] max-sm:text-center font-light",
                children: "Designed and developped by LP & RF"
            })
        ]
    });
};
/* harmony default export */ var Footer_Footer = (Footer);

// EXTERNAL MODULE: ./globals.css
var globals = __webpack_require__(4515);
// EXTERNAL MODULE: ./node_modules/react-toastify/dist/react-toastify.esm.mjs + 1 modules
var react_toastify_esm = __webpack_require__(2920);
;// CONCATENATED MODULE: ./config/projectsConfig.ts
const projectsConfig = [
    // Les Projets //
    // FILTRES // image, etalonnage, realisation, réalisation // photographie, numerique, pellicule, // clip, documentaire, fiction,  //
    {
        id: 1,
        projectTitle: "Adomination",
        projectYear: 2023,
        projectDirector: "Camille Degeye",
        projectProducer: "Cultural Workers & Petit Chaos",
        camera: "Super16",
        projectDuration: "12'",
        photographerName: "Robin Fresson",
        videoLink: "",
        projectDirectory: "SCREENSHOTSADOMINATION",
        images: [
            "ADOMINATION 1.jpg",
            "ADOMINATION 10.jpg",
            "ADOMINATION 2.jpg",
            "ADOMINATION 3.jpg",
            "ADOMINATION 4.jpg",
            "ADOMINATION 5.jpg",
            "ADOMINATION 6.jpg",
            "ADOMINATION 7.jpg",
            "ADOMINATION 8.jpg",
            "ADOMINATION 9.jpg"
        ],
        filters: [
            "etalonnage",
            "clip",
            "pellicule"
        ],
        nomination: "C\xf4t\xe9 court, Pantin",
        imageWidth: "1280px",
        imageHeight: "960px"
    },
    {
        id: 2,
        projectTitle: "\xc6ON",
        projectYear: 2020,
        projectDirector: "Emmanuel Fraisse",
        projectProducer: "Ca\xefmans Production",
        camera: "Panasonic GH5 & Drone",
        projectDuration: "30’",
        photographerName: "Emmanuel Fraisse",
        videoLink: "https://vimeo.com/483612628/fb9311366c",
        projectDirectory: "SCREENSHOTSAEON",
        images: [
            "AEON 1.jpg",
            "AEON 10.jpg",
            "AEON 2.jpg",
            "AEON 3.jpg",
            "AEON 4.jpg",
            "AEON 5.jpg",
            "AEON 6.jpg",
            "AEON 7.jpg",
            "AEON 8.jpg",
            "AEON 9.jpg"
        ],
        filters: [
            "etalonnage",
            "realisation",
            "image",
            "fiction",
            "numerique"
        ],
        nomination: "Rhode Island International Film Festival - Grand Prix du meilleur film exp\xe9rimental / Beijing International Film Festival / Festival International Signes de Nuit, Paris Mention for the night Award / Ch\xe9ries-Ch\xe9ris, Paris / Bog\xf2ta Experimental Film Festival - Competition Poetic Dweling",
        imageWidth: "1793px",
        imageHeight: "1080px"
    },
    {
        id: 3,
        projectTitle: "AFTER",
        projectYear: 2023,
        projectDirector: "Anthony Lapia",
        projectProducer: "Soci\xe9t\xe9 Ac\xe9phale",
        camera: "Super16 & HD",
        projectDuration: "70’",
        photographerName: "Robin Fresson & Raimon Gaffier",
        videoLink: "",
        projectDirectory: "SCREENSHOTSAFTER",
        images: [
            "AFTER 1.jpg",
            "AFTER 2.jpg",
            "AFTER 3.jpg",
            "AFTER 4.jpg",
            "AFTER 5.jpg",
            "AFTER 6.jpg",
            "AFTER 7.jpg"
        ],
        filters: [
            "etalonnage",
            "fiction",
            "pellicule"
        ],
        nomination: "Berlinale (Panorama), IndieLisboa",
        imageWidth: "1796px",
        imageHeight: "1080px"
    },
    {
        id: 4,
        projectTitle: "Bibimbap",
        projectYear: 2019,
        projectDirector: "Guilhem Amesland",
        projectProducer: "Ca\xefmans Production",
        camera: "Sony F55 RAW",
        projectDuration: "20’",
        photographerName: "Emmanuel Fraisse",
        videoLink: "",
        projectDirectory: "SCREENSHOTSBIBIMBAP",
        images: [
            "BIBIMBAP 1.jpg",
            "BIBIMBAP 10.jpg",
            "BIBIMBAP 2.jpg",
            "BIBIMBAP 3.jpg",
            "BIBIMBAP 4.jpg",
            "BIBIMBAP 5.jpg",
            "BIBIMBAP 6.jpg",
            "BIBIMBAP 7.jpg",
            "BIBIMBAP 8.jpg",
            "BIBIMBAP 9.jpg"
        ],
        filters: [
            "etalonnage",
            "image",
            "fiction",
            "numerique"
        ],
        nomination: "Third Price Oblique Mecal Pro, Mecal Barcelone",
        imageWidth: "1920px",
        imageHeight: "1080px"
    },
    {
        id: 5,
        projectTitle: "Bloom",
        projectYear: 2018,
        projectDirector: "Emmanuel Fraisse",
        projectProducer: "La F\xe9mis",
        camera: "Sony F5 RAW",
        projectDuration: "19’",
        photographerName: "Emmanuel Fraisse",
        videoLink: "",
        projectDirectory: "SCREENSHOTSBLOOM",
        images: [
            "BLOOM 1.jpg",
            "BLOOM 2.jpg",
            "BLOOM 3.jpg",
            "BLOOM 4.jpg",
            "BLOOM 5.jpg",
            "BLOOM 6.jpg"
        ],
        filters: [
            "etalonnage",
            "realisation",
            "image",
            "fiction",
            "numerique"
        ],
        nomination: "",
        imageWidth: "1887px",
        imageHeight: "920px"
    },
    {
        id: 6,
        projectTitle: "Bosphore",
        projectYear: 2018,
        projectDirector: "Rapha\xebl Duracell",
        projectProducer: "",
        camera: "Sony F55 RAW",
        projectDuration: "",
        photographerName: "Emmanuel Fraisse",
        videoLink: "https://www.youtube.com/watch?v=Wkvvf7b43gc",
        projectDirectory: "SCREENSHOTSBOSPHORE",
        images: [
            "BOSPHORE 1.jpg",
            "BOSPHORE 2.png",
            "BOSPHORE 3.jpg",
            "BOSPHORE 4.jpg"
        ],
        filters: [
            "etalonnage",
            "image",
            "clip",
            "numerique"
        ],
        nomination: "",
        imageWidth: "3360px",
        imageHeight: "1874px"
    },
    {
        id: 7,
        projectTitle: "Caillou",
        projectYear: 2021,
        projectDirector: "Mathilde Poymiro",
        projectProducer: "Barberousse Films",
        camera: "",
        projectDuration: "25’",
        photographerName: "Emmanuel Fraisse",
        videoLink: "",
        projectDirectory: "SCREENSHOTSCAILLOU",
        images: [
            "CAILLOU 1.jpg",
            "CAILLOU 10.jpg",
            "CAILLOU 2.jpg",
            "CAILLOU 3.jpg",
            "CAILLOU 4.jpg",
            "CAILLOU 5.jpg",
            "CAILLOU 6.jpg",
            "CAILLOU 7.jpg",
            "CAILLOU 8.jpg",
            "CAILLOU 9.jpg"
        ],
        filters: [
            "etalonnage",
            "image",
            "fiction",
            "numerique"
        ],
        nomination: "C\xf4t\xe9 court, Pantin - comp\xe9tition nationale / Premiers Plans, Angers Prix des jeunes internationaux, Prix des biblioth\xe9caires, Prix d'interpr\xe9tation",
        imageWidth: "1920px",
        imageHeight: "1080px"
    },
    {
        id: 8,
        projectTitle: "Dans La Nuit Les Enfants",
        projectYear: 2022,
        projectDirector: "Jeanne Mayer",
        projectProducer: "Mabel Films",
        camera: "Sony FS7",
        projectDuration: "20’",
        photographerName: "Juliette Barrat",
        videoLink: "",
        projectDirectory: "SCREENSHOTSDANSLANUITLESENFANTS",
        images: [
            "DANS LA NUIT DES ENFANTS 1.jpg",
            "DANS LA NUIT DES ENFANTS 2.jpg",
            "DANS LA NUIT DES ENFANTS 3.jpg",
            "DANS LA NUIT DES ENFANTS 4.jpg",
            "DANS LA NUIT DES ENFANTS 5.jpg",
            "DANS LA NUIT DES ENFANTS 6.jpg",
            "DANS LA NUIT DES ENFANTS 7.jpg"
        ],
        filters: [
            "etalonnage",
            "fiction",
            "numerique"
        ],
        nomination: "",
        imageWidth: "1998px",
        imageHeight: "1080px"
    },
    {
        id: 9,
        projectTitle: "Elancourt Mambo",
        projectYear: 2023,
        projectDirector: "Romain Andr\xe9",
        projectProducer: "Mabel Films",
        camera: "Alexa mini",
        projectDuration: "22’",
        photographerName: "Manuel Bola\xf1os",
        videoLink: "",
        projectDirectory: "SCREENSHOTSELANCOURTMAMBO",
        images: [
            "ELANCOURT MAMBO 1.jpg",
            "ELANCOURT MAMBO 10.jpg",
            "ELANCOURT MAMBO 2.jpg",
            "ELANCOURT MAMBO 3.jpg",
            "ELANCOURT MAMBO 4.jpg",
            "ELANCOURT MAMBO 5.jpg",
            "ELANCOURT MAMBO 6.jpg",
            "ELANCOURT MAMBO 7.jpg",
            "ELANCOURT MAMBO 8.jpg",
            "ELANCOURT MAMBO 9.jpg"
        ],
        filters: [
            "etalonnage",
            "fiction",
            "numerique"
        ],
        nomination: "",
        imageWidth: "3840px",
        imageHeight: "2160px"
    },
    {
        id: 10,
        projectTitle: "En Chien",
        projectYear: 2021,
        projectDirector: "Axel Würsten",
        projectProducer: "Ph\xe9nom\xe8nes Films",
        camera: "Super 16",
        projectDuration: "",
        photographerName: "Emmanuel Fraisse",
        videoLink: "https://www.youtube.com/watch?v=YkGzsfW0LS8",
        projectDirectory: "SCREENSHOTSENCHIEN",
        images: [
            "EN CHIEN 1.jpg",
            "EN CHIEN 2.jpg",
            "EN CHIEN 3.jpg",
            "EN CHIEN 4.jpg",
            "EN CHIEN 5.jpg",
            "EN CHIEN 6.jpg",
            "EN CHIEN 7.jpg"
        ],
        filters: [
            "etalonnage",
            "image",
            "fiction",
            "pellicule"
        ],
        nomination: "",
        imageWidth: "1849px",
        imageHeight: "1390px"
    },
    {
        id: 11,
        projectTitle: "L’Enfant au Diamant",
        projectYear: 2022,
        projectDirector: "Pierre-Edouard Dumora",
        projectProducer: "Les Films du Worso & Melodrama",
        camera: "Super16 & 35mm",
        projectDuration: "30’",
        photographerName: "Ville Piippo",
        videoLink: "",
        projectDirectory: "SCREENSHOTSENFANTAUDIAMANT",
        images: [
            "ENFANT AU DIAMANT 1.jpg",
            "ENFANT AU DIAMANT 2.jpg",
            "ENFANT AU DIAMANT 3.jpg",
            "ENFANT AU DIAMANT 4.jpg",
            "ENFANT AU DIAMANT 5.jpg",
            "ENFANT AU DIAMANT 6.jpg",
            "ENFANT AU DIAMANT 7.jpg",
            "ENFANT AU DIAMANT 8.jpg"
        ],
        filters: [
            "etalonnage",
            "fiction",
            "pellicule"
        ],
        nomination: "Locarno",
        imageWidth: "2047px",
        imageHeight: "849px"
    },
    {
        id: 12,
        projectTitle: "Fragment de drame",
        projectYear: 2018,
        projectDirector: "L.Garcia",
        projectProducer: "La F\xe9mis",
        camera: "Super16",
        projectDuration: "24’",
        photographerName: "Emmanuel Fraisse",
        videoLink: "",
        projectDirectory: "SCREENSHOTSFRAGMENTDEDRAME",
        images: [
            "FRAGMENT DE DRAME 1.jpeg",
            "FRAGMENT DE DRAME 2.jpeg",
            "FRAGMENT DE DRAME 3.jpeg"
        ],
        filters: [
            "image",
            "fiction",
            "pellicule"
        ],
        nomination: "Cin\xe9fondation, Festival de Cannes / L’\xc9trange Festival, Paris / Festival du film m\xe9diterran\xe9en, Tanger / Denver Film Festival, USA",
        imageWidth: "1000px",
        imageHeight: "750px"
    },
    {
        id: 13,
        projectTitle: "Fraya",
        projectYear: 2022,
        projectDirector: "Cl\xe9mentine Delbecq",
        projectProducer: "Alta Rocca Films",
        camera: "Arri Amira",
        projectDuration: "25’",
        photographerName: " Pauline Dom\xe9jean",
        videoLink: "",
        projectDirectory: "SCREENSHOTSFRAYA",
        images: [
            "FRAYA 1.jpg",
            "FRAYA 10.jpg",
            "FRAYA 2.jpg",
            "FRAYA 3.jpg",
            "FRAYA 4.jpg",
            "FRAYA 5.jpg",
            "FRAYA 6.jpg",
            "FRAYA 7.jpg",
            "FRAYA 8.jpg",
            "FRAYA 9.jpg"
        ],
        filters: [
            "etalonnage",
            "fiction",
            "numerique"
        ],
        nomination: "C\xf4t\xe9 court, Pantin",
        imageWidth: "1998px",
        imageHeight: "1080px"
    },
    {
        id: 14,
        projectTitle: "Idiot Fish",
        projectYear: 2022,
        projectDirector: "Hakim Mao",
        projectProducer: "Bobilux & Capricci",
        camera: "Alexa mini",
        projectDuration: "25’",
        photographerName: "Fran\xe7ois Ray",
        videoLink: "",
        projectDirectory: "SCREENSHOTSIDIOTFISH",
        images: [
            "IDIOT FISH 1.jpg",
            "IDIOT FISH 2.jpg",
            "IDIOT FISH 3.jpg",
            "IDIOT FISH 4.jpg",
            "IDIOT FISH 5.jpg",
            "IDIOT FISH 6.jpg",
            "IDIOT FISH 7.jpg",
            "IDIOT FISH 8.jpg",
            "IDIOT FISH 9.jpg"
        ],
        filters: [
            "etalonnage",
            "fiction",
            "numerique"
        ],
        nomination: "FIFIB Laur\xe9at Film Workout / Diffus\xe9 sur Arte",
        imageWidth: "3200px",
        imageHeight: "1800px"
    },
    {
        id: 15,
        projectTitle: "Insieme Insieme",
        projectYear: 2022,
        projectDirector: "Bernardo Zanotta",
        projectProducer: "Venin Films",
        camera: "Super16",
        projectDuration: "37’",
        photographerName: "Ville Piippo",
        videoLink: "",
        projectDirectory: "SCREENSHOTSINSIEMEINSIEME",
        images: [
            "INSIEME INSIEME 1.jpeg",
            "INSIEME INSIEME 2.jpeg",
            "INSIEME INSIEME 3.jpeg",
            "INSIEME INSIEME 4.jpeg",
            "INSIEME INSIEME 5.jpeg"
        ],
        filters: [
            "etalonnage",
            "fiction",
            "pellicule"
        ],
        nomination: "FID, Marseille",
        imageWidth: "1023px",
        imageHeight: "629px"
    },
    {
        id: 16,
        projectTitle: "La Petite Constantine,",
        projectYear: 2018,
        projectDirector: "Simon Serna",
        projectProducer: "La F\xe9mis",
        camera: "Sony F5 RAW",
        projectDuration: "16’",
        photographerName: "Emmanuel Fraisse",
        videoLink: "",
        projectDirectory: "SCREENSHOTSLAPETITECONSTANTINE",
        images: [
            "LA PETITE CONSTANTINE 1.jpg",
            "LA PETITE CONSTANTINE 2.png",
            "LA PETITE CONSTANTINE 3.jpg",
            "LA PETITE CONSTANTINE 4.jpg"
        ],
        filters: [
            "etalonnage",
            "image",
            "fiction",
            "numerique"
        ],
        nomination: "",
        imageWidth: "3150px",
        imageHeight: "1898px"
    },
    {
        id: 17,
        projectTitle: "La Vedova Nera",
        projectYear: 2023,
        projectDirector: "River & Jack McKinnon",
        projectProducer: "Melodrama",
        camera: "Arri Amira",
        projectDuration: "20’",
        photographerName: "Maxime Berger",
        videoLink: "",
        projectDirectory: "SCREENSHOTSLAVEDOVANERA",
        images: [
            "LA VEDOVA NERA 1.jpg",
            "LA VEDOVA NERA 10.jpg",
            "LA VEDOVA NERA 2.jpg",
            "LA VEDOVA NERA 3.jpg",
            "LA VEDOVA NERA 4.jpg",
            "LA VEDOVA NERA 5.jpg",
            "LA VEDOVA NERA 6.jpg",
            "LA VEDOVA NERA 7.jpg",
            "LA VEDOVA NERA 8.jpg",
            "LA VEDOVA NERA 9.jpg"
        ],
        filters: [
            "etalonnage",
            "fiction",
            "numerique"
        ],
        nomination: "",
        imageWidth: "3840px",
        imageHeight: "2160px"
    },
    {
        id: 18,
        projectTitle: "Lit de punaise",
        projectYear: 2019,
        projectDirector: "Axel Würsten",
        projectProducer: "La Femis, Arte, Ca\xefmans production",
        camera: "Sony F55 RAW",
        projectDuration: "",
        photographerName: "Emmanuel Fraisse",
        videoLink: "",
        projectDirectory: "SCREENSHOTSLITDEPUNAISE",
        images: [
            "LIT DE PUNAISE 1.jpg",
            "LIT DE PUNAISE 2.jpg",
            "LIT DE PUNAISE 3.jpg",
            "LIT DE PUNAISE 4.jpg",
            "LIT DE PUNAISE 5.jpg",
            "LIT DE PUNAISE 6.jpg",
            "LIT DE PUNAISE 7.jpg",
            "LIT DE PUNAISE 8.png",
            "LIT DE PUNAISE 9.png"
        ],
        filters: [
            "etalonnage",
            "image",
            "fiction",
            "numerique"
        ],
        nomination: "",
        imageWidth: "3360px",
        imageHeight: "1816px"
    },
    {
        id: 19,
        projectTitle: "Loon / Orange",
        projectYear: 2023,
        projectDirector: "Jules Cassignol",
        projectProducer: "Premier Cri Production",
        camera: "Sony FX6",
        projectDuration: "",
        photographerName: "Pauline Dom\xe9jean",
        videoLink: "",
        projectDirectory: "SCREENSHOTSLOON",
        images: [
            "LOON 1.jpg",
            "LOON 10.jpg",
            "LOON 2.jpg",
            "LOON 3.jpg",
            "LOON 4.jpg",
            "LOON 5.jpg",
            "LOON 6.jpg",
            "LOON 7.jpg",
            "LOON 8.jpg",
            "LOON 9.jpg"
        ],
        filters: [
            "etalonnage",
            "clip",
            "numerique"
        ],
        nomination: "",
        imageWidth: "3840px",
        imageHeight: "2160px"
    },
    {
        id: 20,
        projectTitle: "M\xe9moires du Bois",
        projectYear: 2023,
        projectDirector: "Th\xe9o Vincent",
        projectProducer: "le G.R.E.C ",
        camera: " Red Dragon",
        projectDuration: "20’",
        photographerName: "L\xe9o Roussel",
        videoLink: "",
        projectDirectory: "SCREENSHOTSMEMOIRESDUBOIS",
        images: [
            "MEMOIRES DU BOIS 1.jpg",
            "MEMOIRES DU BOIS 2.jpg",
            "MEMOIRES DU BOIS 3.jpg",
            "MEMOIRES DU BOIS 4.jpg",
            "MEMOIRES DU BOIS 5.jpg",
            "MEMOIRES DU BOIS 6.jpg",
            "MEMOIRES DU BOIS 7.jpg",
            "MEMOIRES DU BOIS 8.jpg"
        ],
        filters: [
            "etalonnage",
            "fiction",
            "numerique"
        ],
        nomination: "",
        imageWidth: "3585px",
        imageHeight: "2160px"
    },
    {
        id: 21,
        projectTitle: "Memory Slot",
        projectYear: 2023,
        projectDirector: "Yann Gonzal\xe8s",
        projectProducer: "Venin Films & Le Fresnoy",
        camera: "super16",
        projectDuration: "12’",
        photographerName: " Manuel Bola\xf1os",
        videoLink: "",
        projectDirectory: "SCREENSHOTSMEMORYSLOT",
        images: [
            "MEMORY SLOT 1.jpg",
            "MEMORY SLOT 2.jpg",
            "MEMORY SLOT 3.jpg",
            "MEMORY SLOT 4.jpg",
            "MEMORY SLOT 5.jpg",
            "MEMORY SLOT 6.jpg"
        ],
        filters: [
            "etalonnage",
            "fiction",
            "pellicule"
        ],
        nomination: "Sexp\xe9rimentaux, Cin\xe9math\xe8que fran\xe7aise",
        imageWidth: "2048px",
        imageHeight: "1556px"
    },
    {
        id: 22,
        projectTitle: "Millions of Memories",
        projectYear: 2018,
        projectDirector: "Laura Rius Aran",
        projectProducer: "La F\xe9mis",
        camera: "",
        projectDuration: "25’",
        photographerName: "",
        videoLink: "",
        projectDirectory: "SCREENSHOTSMILLIONSMILLIONSOFMEMORIES",
        images: [
            "MILLIONS & MILLIONS OF MEMORIES 1.jpg",
            "MILLIONS & MILLIONS OF MEMORIES 2.png",
            "MILLIONS & MILLIONS OF MEMORIES 3.jpg",
            "MILLIONS & MILLIONS OF MEMORIES 4.jpg",
            "MILLIONS & MILLIONS OF MEMORIES 5.png"
        ],
        filters: [
            "etalonnage",
            "fiction",
            "numerique"
        ],
        nomination: "FILMADRID International Film Festival - Premio Openecam mejor Pel\xeccula",
        imageWidth: "3360px",
        imageHeight: "1894px"
    },
    {
        id: 23,
        projectTitle: "Mono No Aware",
        projectYear: 2018,
        projectDirector: "Rapha\xebl Duracell",
        projectProducer: "La F\xe9mis",
        camera: "Sony F5 RAW",
        projectDuration: "22’",
        photographerName: "Emmanuel Fraisse",
        videoLink: "",
        projectDirectory: "SCREENSHOTSMONONOAWARE",
        images: [
            "MONO NO AWARE 1.jpg",
            "MONO NO AWARE 2.jpg",
            "MONO NO AWARE 3.jpg",
            "MONO NO AWARE 4.jpg",
            "MONO NO AWARE 5.jpg",
            "MONO NO AWARE 6.jpg"
        ],
        filters: [
            "etalonnage",
            "image",
            "fiction",
            "numerique"
        ],
        nomination: "C\xf4t\xe9 court, Pantin, Mention sp\xe9ciale du jury / 7e lune, Lune d’Or",
        imageWidth: "1720px",
        imageHeight: "1080px"
    },
    {
        id: 24,
        projectTitle: "Preparadise Sorry Now",
        projectYear: 2023,
        projectDirector: "Douna Lim & Th\xe9o Pessos",
        projectProducer: "Glassbox",
        camera: "HDV",
        projectDuration: "60’",
        photographerName: "",
        videoLink: "",
        projectDirectory: "SCREENSHOTSPREPARADISESORRYNOW",
        images: [
            "PREPARADISE SORRY NOW 1.jpg",
            "PREPARADISE SORRY NOW 2.jpg",
            "PREPARADISE SORRY NOW 3.jpg",
            "PREPARADISE SORRY NOW 4.jpg",
            "PREPARADISE SORRY NOW 5.jpg",
            "PREPARADISE SORRY NOW 6.jpg",
            "PREPARADISE SORRY NOW 7.jpg"
        ],
        filters: [
            "etalonnage",
            "fiction",
            "numerique"
        ],
        nomination: "",
        imageWidth: "1920px",
        imageHeight: "1080px"
    },
    {
        id: 25,
        projectTitle: "Rayon Frais",
        projectYear: 2023,
        projectDirector: "Karina Ykrelef",
        projectProducer: "Furyo Films",
        camera: "Alexa mini",
        projectDuration: "20’",
        photographerName: "Julien Guillery",
        videoLink: "",
        projectDirectory: "SCREENSHOTSRAYONFRAIS",
        images: [
            "RAYON FRAIS 1.jpg",
            "RAYON FRAIS 2.jpg",
            "RAYON FRAIS 3.jpg",
            "RAYON FRAIS 4.jpg",
            "RAYON FRAIS 5.jpg",
            "RAYON FRAIS 6.jpg",
            "RAYON FRAIS 7.jpg",
            "RAYON FRAIS 8.jpg",
            "RAYON FRAIS 9.jpg"
        ],
        filters: [
            "etalonnage",
            "fiction",
            "numerique"
        ],
        nomination: "",
        imageWidth: "3996px",
        imageHeight: "2160px"
    },
    {
        id: 26,
        projectTitle: "Rouge amoureuse",
        projectYear: 2018,
        projectDirector: "L.Garcia",
        projectProducer: "Parsifal films",
        camera: "",
        projectDuration: "24’",
        photographerName: "Emmanuel Fraisse",
        videoLink: "",
        projectDirectory: "SCREENSHOTSROUGEAMOUREUSE",
        images: [
            "ROUGE AMOUREUSE 1.jpg",
            "ROUGE AMOUREUSE 2.jpg",
            "ROUGE AMOUREUSE 3.jpg"
        ],
        filters: [
            "image",
            "etalonnage",
            "fiction",
            "numerique"
        ],
        nomination: "Entrevues, Belfort, Prix CAMIRA/ Ch\xe9ries-Ch\xe9ris, Paris",
        imageWidth: "968px",
        imageHeight: "726px"
    },
    {
        id: 27,
        projectTitle: "Salut les Zins",
        projectYear: 2023,
        projectDirector: "Paul Nouhet",
        projectProducer: "Les Films du Sursaut",
        camera: "Sony FX6",
        projectDuration: "45’",
        photographerName: "Pauline Dom\xe9jean",
        videoLink: "",
        projectDirectory: "SCREENSHOTSSALUTLESZINS",
        images: [
            "SALUT LES ZINS 1.jpg",
            "SALUT LES ZINS 10.jpg",
            "SALUT LES ZINS 2.jpg",
            "SALUT LES ZINS 3.jpg",
            "SALUT LES ZINS 4.jpg",
            "SALUT LES ZINS 5.jpg",
            "SALUT LES ZINS 6.jpg",
            "SALUT LES ZINS 7.jpg",
            "SALUT LES ZINS 8.jpg",
            "SALUT LES ZINS 9.jpg"
        ],
        filters: [
            "etalonnage",
            "fiction",
            "numerique"
        ],
        nomination: "",
        imageWidth: "3224px",
        imageHeight: "2160px"
    },
    {
        id: 28,
        projectTitle: "ST4R",
        projectYear: 2022,
        projectDirector: "Julia Tarissan",
        projectProducer: "Le Fresnoy",
        camera: "Alexa mini",
        projectDuration: "20’",
        photographerName: "Lucie Ternisien",
        videoLink: "",
        projectDirectory: "SCREENSHOTST4R",
        images: [],
        filters: [
            "etalonnage",
            "fiction",
            "numerique"
        ],
        nomination: "",
        imageWidth: "XXXXXXXXXXXX",
        imageHeight: "XXXXXXXXXXX"
    },
    {
        id: 29,
        projectTitle: "Allerseelen",
        projectYear: 2023,
        projectDirector: "Benjamin Goubet",
        projectProducer: "Art Association & la HEAD",
        camera: "Sony A7SIII",
        projectDuration: "6’",
        photographerName: "Emmanuel Fraisse",
        videoLink: "",
        projectDirectory: "SCREENSHOTSALLERSEELEN",
        images: [
            "ALLERSEELEN 1.jpg",
            "ALLERSEELEN 2.jpg",
            "ALLERSEELEN 3.jpg",
            "ALLERSEELEN 4.jpg",
            "ALLERSEELEN 5.jpg",
            "ALLERSEELEN 6.jpg",
            "ALLERSEELEN 7.jpg",
            "ALLERSEELEN 8.jpg"
        ],
        filters: [
            "image",
            "etalonnage",
            "numerique",
            "clip"
        ],
        nomination: "",
        imageWidth: "1280px",
        imageHeight: "960px"
    },
    {
        id: 30,
        projectTitle: "Vers le nord",
        projectYear: 2023,
        projectDirector: "Pauline Penichout ",
        projectProducer: "KIDAM & Fondation META",
        camera: "Panasonic GH5",
        projectDuration: "17’",
        photographerName: "Emmanuel Fraisse",
        videoLink: "",
        projectDirectory: "SCREENSHOTSVERSLENORD",
        images: [
            "VERS LE NORD 1.jpg",
            "VERS LE NORD 2.jpg",
            "VERS LE NORD 3.jpg",
            "VERS LE NORD 4.jpg",
            "VERS LE NORD 5.jpg",
            "VERS LE NORD 6.jpg"
        ],
        filters: [
            "image",
            "etalonnage",
            "numerique",
            "fiction"
        ],
        nomination: "C\xf4t\xe9 court, Pantin",
        imageWidth: "1280px",
        imageHeight: "771px"
    },
    {
        id: 31,
        projectTitle: "Coconut Head Generation",
        projectYear: 2023,
        projectDirector: "Alain Kassenda",
        projectProducer: "Ajimati Films",
        camera: "",
        projectDuration: "90’",
        photographerName: "",
        videoLink: "",
        projectDirectory: "SCREENSHOTSCOCONUTHEADGENERATION",
        images: [
            "COCONUT HEAD GENERATION 1.jpg",
            "COCONUT HEAD GENERATION 2.jpg",
            "COCONUT HEAD GENERATION 3.jpg",
            "COCONUT HEAD GENERATION 4.jpg",
            "COCONUT HEAD GENERATION 5.jpg"
        ],
        filters: [
            "etalonnage",
            "numerique",
            "fiction"
        ],
        nomination: "Cin\xe9ma du R\xe9el, comp\xe9tition nationale – Grand Prix / IDFA, Amsterdam",
        imageWidth: "1280px",
        imageHeight: "720px"
    },
    {
        id: 32,
        projectTitle: "Le jour commence au bord de la nuit",
        projectYear: 2022,
        projectDirector: "Lau Garcia",
        projectProducer: "Orph\xe9e films & Saison unique",
        camera: "Super16",
        projectDuration: "15’",
        photographerName: "Emmanuel Fraisse",
        videoLink: "",
        projectDirectory: "SCREENSHOTSLEJOURCOMMENCEAUBORDDELANUIT",
        images: [
            "LE JOUR COMMENCE AU BORD DE LA NUIT 1.jpg",
            "LE JOUR COMMENCE AU BORD DE LA NUIT 2.jpg",
            "LE JOUR COMMENCE AU BORD DE LA NUIT 3.png",
            "LE JOUR COMMENCE AU BORD DE LA NUIT 4.jpg",
            "LE JOUR COMMENCE AU BORD DE LA NUIT 5.jpg"
        ],
        filters: [
            "image",
            "numerique",
            "fiction"
        ],
        nomination: "Entrevues, Belfort / Oberhausen",
        imageWidth: "1280px",
        imageHeight: "960px"
    },
    {
        id: 33,
        projectTitle: "Carn\xe9.e.s",
        projectYear: 2021,
        projectDirector: "L\xe9o Desch\xeanes",
        projectProducer: "Les Films du Clan",
        camera: "Alexa mini",
        projectDuration: "25’",
        photographerName: "Fran\xe7ois Ray",
        videoLink: "",
        projectDirectory: "SCREENSHOTSCARNEES",
        images: [
            "CARNEES 1.jpg",
            "CARNEES 2.jpg",
            "CARNEES 3.jpg",
            "CARNEES 4.jpg",
            "CARNEES 5.jpg"
        ],
        filters: [
            "etalonnage",
            "numerique",
            "fiction"
        ],
        nomination: "Clermont-Ferrand (programme Canal+)",
        imageWidth: "1280px",
        imageHeight: "720px"
    },
    {
        id: 34,
        projectTitle: "The Sound of Metamorphosis",
        projectYear: 2021,
        projectDirector: "Jules Cassignol (Jazzboy)",
        projectProducer: "",
        camera: "Sony F55 RAW",
        projectDuration: "17’",
        photographerName: "Till Lepr\xeatre",
        videoLink: "",
        projectDirectory: "SCREENSHOTSTHESOUNDOFMETAMORPHOSIS",
        images: [
            "THE SOUND OF METAMORPHOSIS 1.jpg",
            "THE SOUND OF METAMORPHOSIS 2.png",
            "THE SOUND OF METAMORPHOSIS 3.png",
            "THE SOUND OF METAMORPHOSIS 4.jpg",
            "THE SOUND OF METAMORPHOSIS 5.png"
        ],
        filters: [
            "etalonnage",
            "numerique",
            "fiction"
        ],
        nomination: "FAME 2022, Ga\xeet\xe9 Lyrique, Paris",
        imageWidth: "1280px",
        imageHeight: "768px"
    },
    {
        id: 35,
        projectTitle: "Super Nova",
        projectYear: 2020,
        projectDirector: "Juliette Saint-Sardos",
        projectProducer: "D\xf9ne & Composite films",
        camera: "Super16",
        projectDuration: "15’",
        photographerName: "Emmanuel Fraisse",
        videoLink: "",
        projectDirectory: "SCREENSHOTSSUPERNOVA",
        images: [
            "SUPERNOVA 1.jpg",
            "SUPERNOVA 2.png",
            "SUPERNOVA 3.jpg",
            "SUPERNOVA 4.jpg",
            "SUPERNOVA 5.jpg",
            "SUPERNOVA 6.jpg",
            "SUPERNOVA 7.jpg"
        ],
        filters: [
            "image",
            "etalonnage",
            "pellicule",
            "fiction"
        ],
        nomination: "C\xf4t\xe9 court, Pantin / Diffus\xe9 sur Arte",
        imageWidth: "1280px",
        imageHeight: "771px"
    },
    {
        id: 36,
        projectTitle: "Visuels de la tourn\xe9e de -M- \xabLettre infinie\xbb",
        projectYear: 2019,
        projectDirector: "J.Frenkel & C.Castro",
        projectProducer: "La com\xe8te",
        camera: "RED Monstro 8K",
        projectDuration: "",
        photographerName: "Emmanuel Fraisse",
        videoLink: "",
        projectDirectory: "SCREENSHOTSVISUELSDELATOURNEEDEM",
        images: [
            "VISUELS DE LA TOURNEE DE -M- 1.jpg",
            "VISUELS DE LA TOURNEE DE -M- 2.jpg",
            "VISUELS DE LA TOURNEE DE -M- 3.jpg",
            "VISUELS DE LA TOURNEE DE -M- 4.jpg",
            "VISUELS DE LA TOURNEE DE -M- 5.jpg",
            "VISUELS DE LA TOURNEE DE -M- 6.jpg",
            "VISUELS DE LA TOURNEE DE -M- 7.jpg",
            "VISUELS DE LA TOURNEE DE -M- 8.jpg"
        ],
        filters: [
            "image",
            "realisation",
            "etalonnage",
            "numerique",
            "fiction"
        ],
        nomination: "",
        imageWidth: "1280px",
        imageHeight: "629px"
    },
    {
        id: 37,
        projectTitle: "ALPA",
        projectYear: 2021,
        projectDirector: "Paolo Mattei-Lvovsky",
        projectProducer: "Premier Souffle Production",
        camera: "Alexa mini",
        projectDuration: "23’",
        photographerName: "Ulysse Gilbert-Castel",
        videoLink: "",
        projectDirectory: "SCREENSHOTSALPA",
        images: [
            "ALPA 1.jpg",
            "ALPA 2.jpg",
            "ALPA 3.jpg",
            "ALPA 4.jpg",
            "ALPA 5.jpg",
            "ALPA 6.jpg",
            "ALPA 7.jpg",
            "ALPA 8.jpg"
        ],
        filters: [
            "etalonnage",
            "numerique",
            "fiction"
        ],
        nomination: "Festival international de court-m\xe9trage de S\xe3o Paulo",
        imageWidth: "1280px",
        imageHeight: "544px"
    },
    {
        id: 38,
        projectTitle: "Anabase",
        projectYear: 2021,
        projectDirector: "Benjamin Goubet",
        projectProducer: "HEAD Gen\xe8ve",
        camera: "Sony A7SIII",
        projectDuration: "",
        photographerName: "Emmanuel Fraisse",
        videoLink: "",
        projectDirectory: "SCREENSHOTSANABASE",
        images: [
            "ANABASE 1.jpg",
            "ANABASE 2.jpg",
            "ANABASE 3.jpg",
            "ANABASE 4.jpg",
            "ANABASE 5.jpg",
            "ANABASE 6.jpg",
            "ANABASE 7.jpg",
            "ANABASE 8.jpg"
        ],
        filters: [
            "image",
            "etalonnage",
            "numerique",
            "fiction"
        ],
        nomination: "C\xf4t\xe9 court, Pantin / Winthertur / San Sebastian / Atlantis Best Cinematography",
        imageWidth: "1280px",
        imageHeight: "851px"
    },
    {
        id: 39,
        projectTitle: "The peacekeeper",
        projectYear: 2017,
        projectDirector: "Pierre Edouard Dumora",
        projectProducer: "XXXXXXXXXXXXXXXXXXX",
        camera: "Canon 5D",
        projectDuration: "19’",
        photographerName: "",
        videoLink: "",
        projectDirectory: "SCREENSHOTSPEACEKEEPER",
        images: [
            "PEACEKEEPER 1.jpg",
            "PEACEKEEPER 2.jpeg",
            "PEACEKEEPER 3.jpg"
        ],
        filters: [
            "etalonnage",
            "numerique",
            "fiction"
        ],
        nomination: "25 fps Zagreb festival (special mention critics award). C\xf4t\xe9 Court, Pantin. Le FID Marseille (section \xe9crans parall\xe8les - les sentiers)",
        imageWidth: "1280px",
        imageHeight: "719px"
    },
    {
        id: 40,
        projectTitle: "Uma Resistencia",
        projectYear: 2021,
        projectDirector: "Barbara Balestas Kazazian",
        projectProducer: "XXXXXXXXXXXXXXXXXXX",
        camera: "Varicam 35",
        projectDuration: "25’",
        photographerName: "Emmanuel Fraisse",
        videoLink: "",
        projectDirectory: "SCREENSHOTSUMARESISTENCIA",
        images: [
            "UMA RESISTENCIA 1.jpg",
            "UMA RESISTENCIA 2.jpg"
        ],
        filters: [
            "image",
            "etalonnage",
            "numerique",
            "fiction"
        ],
        nomination: "DocLisboa, Lisbonne / Premiers plans, Angers",
        imageWidth: "1280px",
        imageHeight: "831px"
    },
    {
        id: 41,
        projectTitle: "Coeur \xe0 prendre",
        projectYear: 2018,
        projectDirector: "Cl\xe9ment Fourment",
        projectProducer: "La F\xe9mis",
        camera: "Sony F65 & optiques Zeiss Master Prime",
        projectDuration: "24’",
        photographerName: "Cl\xe9ment Fourment",
        videoLink: "",
        projectDirectory: "SCREENSHOTSCOEURAPRENDRE",
        images: [
            "COEUR \xc0 PRENDRE 1.jpg",
            "COEUR \xc0 PRENDRE 2.jpg",
            "COEUR \xc0 PRENDRE 3.jpg"
        ],
        filters: [
            "numerique",
            "fiction"
        ],
        nomination: "Go Shorts - Nim\xe8gue, Pays-Bas",
        imageWidth: "1280px",
        imageHeight: "771px"
    },
    {
        id: 42,
        projectTitle: "Galathea",
        projectYear: 2018,
        projectDirector: "Antonio Messana",
        projectProducer: "La F\xe9mis",
        camera: "Sony F5",
        projectDuration: "12’",
        photographerName: "Cl\xe9ment Fourment",
        videoLink: "",
        projectDirectory: "SCREENSHOTSGALATHEA",
        images: [
            "GALATHEA 1.jpg",
            "GALATHEA 2.png",
            "GALATHEA 3.jpg"
        ],
        filters: [
            "image",
            "etalonnage",
            "numerique",
            "fiction"
        ],
        nomination: "",
        imageWidth: "1280px",
        imageHeight: "548px"
    },
    {
        id: 43,
        projectTitle: "Veilleurs",
        projectYear: 2018,
        projectDirector: "Victor Aureillian",
        projectProducer: "La F\xe9mis",
        camera: "",
        projectDuration: "9'",
        photographerName: "",
        videoLink: "",
        projectDirectory: "SCREENSHOTSVEILLEURS",
        images: [
            "VEILLEURS 1.jpg",
            "VEILLEURS 2.jpg",
            "VEILLEURS 3.jpg",
            "VEILLEURS 4.jpg"
        ],
        filters: [
            "etalonnage",
            "numerique",
            "fiction"
        ],
        nomination: "",
        imageWidth: "1280px",
        imageHeight: "720px"
    },
    {
        id: 44,
        projectTitle: "Trace",
        projectYear: 2017,
        projectDirector: "Aliona Zagurovska-Demonsant",
        projectProducer: "La F\xe9mis",
        camera: "Alexa XT & optiques Zeiss Master Prime",
        projectDuration: "24’",
        photographerName: "R\xe9ginald Galienne",
        videoLink: "",
        projectDirectory: "SCREENSHOTSTRACE",
        images: [
            "TRACE 1.png",
            "TRACE 2.jpg",
            "TRACE 3.jpg"
        ],
        filters: [
            "image",
            "numerique",
            "fiction"
        ],
        nomination: "FID campus - Marseille",
        imageWidth: "954px",
        imageHeight: "719px"
    },
    {
        id: 45,
        projectTitle: "Coll\xe8ge de Ouangani, Mayotte",
        projectYear: 2018,
        projectDirector: "Emmanuel Fraisse",
        projectProducer: "TERRENEUVE architectes",
        camera: "",
        projectDuration: "8'",
        photographerName: "Emmanuel Fraisse",
        videoLink: "https://vimeo.com/304568292",
        projectDirectory: "SCREENSHOTSCOLLEGEDEOUANGANI",
        images: [
            "COLLEGE DE OUANGANI 1.png",
            "COLLEGE DE OUANGANI 10.jpg",
            "COLLEGE DE OUANGANI 2.png",
            "COLLEGE DE OUANGANI 3.jpg",
            "COLLEGE DE OUANGANI 4.jpg",
            "COLLEGE DE OUANGANI 5.png",
            "COLLEGE DE OUANGANI 6.png",
            "COLLEGE DE OUANGANI 7.jpg",
            "COLLEGE DE OUANGANI 8.jpg",
            "COLLEGE DE OUANGANI 9.png"
        ],
        filters: [
            "etalonnage",
            "image",
            "realisation",
            "documentaire",
            "numerique"
        ],
        nomination: "",
        imageWidth: "1280px",
        imageHeight: "721px"
    },
    {
        id: 46,
        projectTitle: "J'avais un camarade",
        projectYear: 2018,
        projectDirector: "Aurore Toulon",
        projectProducer: "La F\xe9mis",
        camera: "Super16",
        projectDuration: "8'",
        photographerName: "Aurore Toulon",
        videoLink: "",
        projectDirectory: "SCREENSHOTSJAVAISUNCAMARADE",
        images: [
            "J AVAIS UN CAMARADE 1.jpg",
            "J AVAIS UN CAMARADE 2.jpg",
            "J AVAIS UN CAMARADE 3.jpg"
        ],
        filters: [
            "pellicule",
            "fiction "
        ],
        nomination: "",
        imageWidth: "1280px",
        imageHeight: "771px"
    },
    {
        id: 47,
        projectTitle: "Deadman walking on the moon",
        projectYear: 2018,
        projectDirector: "Julia Tarissan & Juliet Casella",
        projectProducer: "",
        camera: "Canon 5D MkII",
        projectDuration: "4'",
        photographerName: "",
        videoLink: "",
        projectDirectory: "SCREENSHOTSDEADMANWALKINGONTHEMOON",
        images: [
            "DEADMAN WALKING ON THE MOON 1.png",
            "DEADMAN WALKING ON THE MOON 2.jpg"
        ],
        filters: [
            "etalonnage",
            "clip",
            "numerique"
        ],
        nomination: "",
        imageWidth: "1280px",
        imageHeight: "712px"
    },
    {
        id: 48,
        projectTitle: "Madeleine",
        projectYear: 2018,
        projectDirector: "Chlo\xe9 Cortella",
        projectProducer: "Melocoton",
        camera: "",
        projectDuration: "16'",
        photographerName: "",
        videoLink: "",
        projectDirectory: "SCREENSHOTS MADELEINE",
        images: [],
        filters: [
            "etalonnage",
            "numerique",
            "fiction"
        ],
        nomination: "",
        imageWidth: "1280px",
        imageHeight: "675px"
    },
    {
        id: 49,
        projectTitle: "Capitaine France",
        projectYear: 2018,
        projectDirector: "Thomas Robineau & Julien Paillet",
        projectProducer: "La F\xe9mis",
        camera: "Archives",
        projectDuration: "21’",
        photographerName: "",
        videoLink: "XXXXXXXXXXXXXXXXXXX",
        projectDirectory: "SCREENSHOTSCAPITAINEFRANCE",
        images: [
            "CAPITAINE FRANCE 1.jpg",
            "CAPITAINE FRANCE 2.png",
            "CAPITAINE FRANCE 3.png",
            "CAPITAINE FRANCE 4.jpg"
        ],
        filters: [
            "etalonnage",
            "numerique",
            "fiction"
        ],
        nomination: "",
        imageWidth: "1280px",
        imageHeight: "692px"
    },
    {
        id: 50,
        projectTitle: "Britney on LSD",
        projectYear: 2018,
        projectDirector: "Elliot Totzauer",
        projectProducer: "Croche",
        camera: "",
        projectDuration: "4’",
        photographerName: "Emmanuel Fraisse",
        videoLink: "",
        projectDirectory: "SCREENSHOTSBRITNEYONLSD",
        images: [
            "BRITNEY ON LSD 1.jpg",
            "BRITNEY ON LSD 2.jpg",
            "BRITNEY ON LSD 3.jpg"
        ],
        filters: [
            "image, etalonnage, clip, numerique,"
        ],
        nomination: "",
        imageWidth: "1280px",
        imageHeight: "960px"
    },
    // Les Photos //
    {
        id: 101,
        projectTitle: "Petite Terre, Mayotte",
        projectYear: 2018,
        projectDirectory: "PHOTOGRAPHIEPETITETERRE",
        images: [
            "PETITE TERRE 1.jpg",
            "PETITE TERRE 2.jpg",
            "PETITE TERRE 3.jpg",
            "PETITE TERRE 4.jpg",
            "PETITE TERRE 5.jpg",
            "PETITE TERRE 6.jpg",
            "PETITE TERRE 7.jpg"
        ],
        filters: [
            "photographie"
        ]
    },
    {
        id: 102,
        projectTitle: "L'\xeele de la R\xe9union",
        projectYear: 2014,
        projectDirectory: "PHOTOGRAPHIELAREUNION",
        images: [
            "LA REUNION 1.jpg",
            "LA REUNION 2.jpg",
            "LA REUNION 3.jpg",
            "LA REUNION 4.jpg",
            "LA REUNION 5.jpg",
            "LA REUNION 6.jpg",
            "LA REUNION 7.jpg",
            "LA REUNION 8.jpg",
            "LA REUNION 9.jpg"
        ],
        filters: [
            "photographie"
        ],
        imageWidth: "1280px",
        imageHeight: "854px"
    },
    {
        id: 103,
        projectTitle: "Richmond, USA",
        projectYear: 2019,
        projectDirectory: "PHOTOGRAPHIERICHMOND",
        images: [
            "RICHMOND 1.jpg",
            "RICHMOND 2.jpg",
            "RICHMOND 3.jpg",
            "RICHMOND 4.jpg",
            "RICHMOND 5.jpg",
            "RICHMOND 6.jpg"
        ],
        filters: [
            "photographie"
        ]
    },
    {
        id: 104,
        projectTitle: "P\xf4le d’Excellence rurale de Chiconi, Mayotte",
        projectYear: 2018,
        projectDirectory: "PHOTOGRAPHIECHICONI",
        images: [
            "1_CHICONI.jpg",
            "CHICONI 3.jpg",
            "CHICONI 4.jpg",
            "CHICONI 5.jpg",
            "CHICONI 6.jpg",
            "CHICONI_2.jpg"
        ],
        filters: [
            "photographie"
        ]
    },
    {
        id: 105,
        projectTitle: "Liban",
        projectYear: 2018,
        projectDirectory: "PHOTOGRAPHIELIBAN",
        images: [
            "LIBAN 1.jpg",
            "LIBAN 2.jpg",
            "LIBAN 3.jpg",
            "LIBAN 4.jpg",
            "LIBAN 5.jpg",
            "LIBAN 6.jpg",
            "LIBAN 7.jpg"
        ],
        filters: [
            "photographie"
        ]
    },
    {
        id: 106,
        projectTitle: "Liban 2",
        projectYear: 2019,
        projectDirectory: "PHOTOGRAPHIELIBAN2",
        images: [],
        filters: [
            "photographie"
        ]
    }
];

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(7294);
// EXTERNAL MODULE: ./context/Context/Context.tsx
var Context = __webpack_require__(3968);
;// CONCATENATED MODULE: ./pages/_app.tsx








const App = (param)=>{
    let { Component , pageProps  } = param;
    const [selectedFilters, setSelectedFilters] = (0,react.useState)([]);
    const [projectsList, setProjectsList] = (0,react.useState)([]);
    const initialProjectList = (0,react.useRef)([]);
    (0,react.useEffect)(()=>{
        setProjectsList(projectsConfig);
        initialProjectList.current = projectsConfig;
        async function fetchFileNames() {
            try {
            // const response = await fetch("/api/filenames", {
            //   method: "POST",
            //   headers: {
            //     "Content-Type": "application/json",
            //   },
            //   body: JSON.stringify({ projectsList: projectsConfig }),
            // });
            // const data = await response.json();
            // initialProjectList.current = data;
            // setProjectsList(projectsConfig);
            } catch (error) {
                console.error("Failed to fetch file names:", error);
            }
        }
    // if (selectedFilters.length === 0) {
    //   fetchFileNames();
    // }
    }, []);
    (0,react.useEffect)(()=>{
        localStorage.setItem("projectsList", JSON.stringify(projectsList));
    }, [
        projectsList
    ]);
    // useEffect(() => {
    //   const storedProjectsList = localStorage.getItem("projectsList");
    //   if (storedProjectsList) {
    //     setProjectsList(JSON.parse(storedProjectsList));
    //   }
    // }, []);
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Header_Header, {}),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Context/* ContextApp.Provider */.g.Provider, {
                value: {
                    selectedFilters,
                    setSelectedFilters,
                    projectsList,
                    setProjectsList
                },
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)("main", {
                    className: " lg:px-[64px] px-[16px] pb-[120px]",
                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Component, {
                        ...pageProps,
                        initialProjectList: initialProjectList
                    })
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Footer_Footer, {}),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(react_toastify_esm/* ToastContainer */.Ix, {})
        ]
    });
};
/* harmony default export */ var _app = (App);


/***/ }),

/***/ 4515:
/***/ (function() {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 1163:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__(6885)


/***/ }),

/***/ 2920:
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Ix": function() { return /* binding */ k; },
  "Am": function() { return /* binding */ Q; }
});

// UNUSED EXPORTS: Bounce, Flip, Icons, Slide, Zoom, collapseToast, cssTransition, useToast, useToastContainer

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(7294);
;// CONCATENATED MODULE: ./node_modules/clsx/dist/clsx.m.js
function r(e){var t,f,n="";if("string"==typeof e||"number"==typeof e)n+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(f=r(e[t]))&&(n&&(n+=" "),n+=f);else for(t in e)e[t]&&(n&&(n+=" "),n+=t);return n}function clsx(){for(var e,t,f=0,n="";f<arguments.length;)(e=arguments[f++])&&(t=r(e))&&(n&&(n+=" "),n+=t);return n}/* harmony default export */ var clsx_m = (clsx);
;// CONCATENATED MODULE: ./node_modules/react-toastify/dist/react-toastify.esm.mjs
'use client';
const u=t=>"number"==typeof t&&!isNaN(t),d=t=>"string"==typeof t,p=t=>"function"==typeof t,m=t=>d(t)||p(t)?t:null,f=t=>(0,react.isValidElement)(t)||d(t)||p(t)||u(t);function g(t,e,n){void 0===n&&(n=300);const{scrollHeight:o,style:s}=t;requestAnimationFrame(()=>{s.minHeight="initial",s.height=o+"px",s.transition=`all ${n}ms`,requestAnimationFrame(()=>{s.height="0",s.padding="0",s.margin="0",setTimeout(e,n)})})}function h(e){let{enter:a,exit:r,appendPosition:i=!1,collapse:l=!0,collapseDuration:c=300}=e;return function(e){let{children:u,position:d,preventExitTransition:p,done:m,nodeRef:f,isIn:h}=e;const y=i?`${a}--${d}`:a,v=i?`${r}--${d}`:r,T=(0,react.useRef)(0);return (0,react.useLayoutEffect)(()=>{const t=f.current,e=y.split(" "),n=o=>{o.target===f.current&&(t.dispatchEvent(new Event("d")),t.removeEventListener("animationend",n),t.removeEventListener("animationcancel",n),0===T.current&&"animationcancel"!==o.type&&t.classList.remove(...e))};t.classList.add(...e),t.addEventListener("animationend",n),t.addEventListener("animationcancel",n)},[]),(0,react.useEffect)(()=>{const t=f.current,e=()=>{t.removeEventListener("animationend",e),l?g(t,m,c):m()};h||(p?e():(T.current=1,t.className+=` ${v}`,t.addEventListener("animationend",e)))},[h]),react.createElement(react.Fragment,null,u)}}function y(t,e){return null!=t?{content:t.content,containerId:t.props.containerId,id:t.props.toastId,theme:t.props.theme,type:t.props.type,data:t.props.data||{},isLoading:t.props.isLoading,icon:t.props.icon,status:e}:{}}const v={list:new Map,emitQueue:new Map,on(t,e){return this.list.has(t)||this.list.set(t,[]),this.list.get(t).push(e),this},off(t,e){if(e){const n=this.list.get(t).filter(t=>t!==e);return this.list.set(t,n),this}return this.list.delete(t),this},cancelEmit(t){const e=this.emitQueue.get(t);return e&&(e.forEach(clearTimeout),this.emitQueue.delete(t)),this},emit(t){this.list.has(t)&&this.list.get(t).forEach(e=>{const n=setTimeout(()=>{e(...[].slice.call(arguments,1))},0);this.emitQueue.has(t)||this.emitQueue.set(t,[]),this.emitQueue.get(t).push(n)})}},T=e=>{let{theme:n,type:o,...s}=e;return react.createElement("svg",{viewBox:"0 0 24 24",width:"100%",height:"100%",fill:"colored"===n?"currentColor":`var(--toastify-icon-color-${o})`,...s})},E={info:function(e){return react.createElement(T,{...e},react.createElement("path",{d:"M12 0a12 12 0 1012 12A12.013 12.013 0 0012 0zm.25 5a1.5 1.5 0 11-1.5 1.5 1.5 1.5 0 011.5-1.5zm2.25 13.5h-4a1 1 0 010-2h.75a.25.25 0 00.25-.25v-4.5a.25.25 0 00-.25-.25h-.75a1 1 0 010-2h1a2 2 0 012 2v4.75a.25.25 0 00.25.25h.75a1 1 0 110 2z"}))},warning:function(e){return react.createElement(T,{...e},react.createElement("path",{d:"M23.32 17.191L15.438 2.184C14.728.833 13.416 0 11.996 0c-1.42 0-2.733.833-3.443 2.184L.533 17.448a4.744 4.744 0 000 4.368C1.243 23.167 2.555 24 3.975 24h16.05C22.22 24 24 22.044 24 19.632c0-.904-.251-1.746-.68-2.44zm-9.622 1.46c0 1.033-.724 1.823-1.698 1.823s-1.698-.79-1.698-1.822v-.043c0-1.028.724-1.822 1.698-1.822s1.698.79 1.698 1.822v.043zm.039-12.285l-.84 8.06c-.057.581-.408.943-.897.943-.49 0-.84-.367-.896-.942l-.84-8.065c-.057-.624.25-1.095.779-1.095h1.91c.528.005.84.476.784 1.1z"}))},success:function(e){return react.createElement(T,{...e},react.createElement("path",{d:"M12 0a12 12 0 1012 12A12.014 12.014 0 0012 0zm6.927 8.2l-6.845 9.289a1.011 1.011 0 01-1.43.188l-4.888-3.908a1 1 0 111.25-1.562l4.076 3.261 6.227-8.451a1 1 0 111.61 1.183z"}))},error:function(e){return react.createElement(T,{...e},react.createElement("path",{d:"M11.983 0a12.206 12.206 0 00-8.51 3.653A11.8 11.8 0 000 12.207 11.779 11.779 0 0011.8 24h.214A12.111 12.111 0 0024 11.791 11.766 11.766 0 0011.983 0zM10.5 16.542a1.476 1.476 0 011.449-1.53h.027a1.527 1.527 0 011.523 1.47 1.475 1.475 0 01-1.449 1.53h-.027a1.529 1.529 0 01-1.523-1.47zM11 12.5v-6a1 1 0 012 0v6a1 1 0 11-2 0z"}))},spinner:function(){return react.createElement("div",{className:"Toastify__spinner"})}};function C(t){const[,o]=(0,react.useReducer)(t=>t+1,0),[l,c]=(0,react.useState)([]),g=(0,react.useRef)(null),h=(0,react.useRef)(new Map).current,T=t=>-1!==l.indexOf(t),C=(0,react.useRef)({toastKey:1,displayedToast:0,count:0,queue:[],props:t,containerId:null,isToastActive:T,getToast:t=>h.get(t)}).current;function b(t){let{containerId:e}=t;const{limit:n}=C.props;!n||e&&C.containerId!==e||(C.count-=C.queue.length,C.queue=[])}function I(t){c(e=>null==t?[]:e.filter(e=>e!==t))}function _(){const{toastContent:t,toastProps:e,staleId:n}=C.queue.shift();O(t,e,n)}function L(t,n){let{delay:s,staleId:r,...i}=n;if(!f(t)||function(t){return!g.current||C.props.enableMultiContainer&&t.containerId!==C.props.containerId||h.has(t.toastId)&&null==t.updateId}(i))return;const{toastId:l,updateId:c,data:T}=i,{props:b}=C,L=()=>I(l),N=null==c;N&&C.count++;const M={...b,style:b.toastStyle,key:C.toastKey++,...Object.fromEntries(Object.entries(i).filter(t=>{let[e,n]=t;return null!=n})),toastId:l,updateId:c,data:T,closeToast:L,isIn:!1,className:m(i.className||b.toastClassName),bodyClassName:m(i.bodyClassName||b.bodyClassName),progressClassName:m(i.progressClassName||b.progressClassName),autoClose:!i.isLoading&&(R=i.autoClose,w=b.autoClose,!1===R||u(R)&&R>0?R:w),deleteToast(){const t=y(h.get(l),"removed");h.delete(l),v.emit(4,t);const e=C.queue.length;if(C.count=null==l?C.count-C.displayedToast:C.count-1,C.count<0&&(C.count=0),e>0){const t=null==l?C.props.limit:1;if(1===e||1===t)C.displayedToast++,_();else{const n=t>e?e:t;C.displayedToast=n;for(let t=0;t<n;t++)_()}}else o()}};var R,w;M.iconOut=function(t){let{theme:n,type:o,isLoading:s,icon:r}=t,i=null;const l={theme:n,type:o};return!1===r||(p(r)?i=r(l):(0,react.isValidElement)(r)?i=(0,react.cloneElement)(r,l):d(r)||u(r)?i=r:s?i=E.spinner():(t=>t in E)(o)&&(i=E[o](l))),i}(M),p(i.onOpen)&&(M.onOpen=i.onOpen),p(i.onClose)&&(M.onClose=i.onClose),M.closeButton=b.closeButton,!1===i.closeButton||f(i.closeButton)?M.closeButton=i.closeButton:!0===i.closeButton&&(M.closeButton=!f(b.closeButton)||b.closeButton);let x=t;(0,react.isValidElement)(t)&&!d(t.type)?x=(0,react.cloneElement)(t,{closeToast:L,toastProps:M,data:T}):p(t)&&(x=t({closeToast:L,toastProps:M,data:T})),b.limit&&b.limit>0&&C.count>b.limit&&N?C.queue.push({toastContent:x,toastProps:M,staleId:r}):u(s)?setTimeout(()=>{O(x,M,r)},s):O(x,M,r)}function O(t,e,n){const{toastId:o}=e;n&&h.delete(n);const s={content:t,props:e};h.set(o,s),c(t=>[...t,o].filter(t=>t!==n)),v.emit(4,y(s,null==s.props.updateId?"added":"updated"))}return (0,react.useEffect)(()=>(C.containerId=t.containerId,v.cancelEmit(3).on(0,L).on(1,t=>g.current&&I(t)).on(5,b).emit(2,C),()=>{h.clear(),v.emit(3,C)}),[]),(0,react.useEffect)(()=>{C.props=t,C.isToastActive=T,C.displayedToast=l.length}),{getToastToRender:function(e){const n=new Map,o=Array.from(h.values());return t.newestOnTop&&o.reverse(),o.forEach(t=>{const{position:e}=t.props;n.has(e)||n.set(e,[]),n.get(e).push(t)}),Array.from(n,t=>e(t[0],t[1]))},containerRef:g,isToastActive:T}}function b(t){return t.targetTouches&&t.targetTouches.length>=1?t.targetTouches[0].clientX:t.clientX}function I(t){return t.targetTouches&&t.targetTouches.length>=1?t.targetTouches[0].clientY:t.clientY}function _(t){const[o,a]=(0,react.useState)(!1),[r,l]=(0,react.useState)(!1),c=(0,react.useRef)(null),u=(0,react.useRef)({start:0,x:0,y:0,delta:0,removalDistance:0,canCloseOnClick:!0,canDrag:!1,boundingRect:null,didMove:!1}).current,d=(0,react.useRef)(t),{autoClose:m,pauseOnHover:f,closeToast:g,onClick:h,closeOnClick:y}=t;function v(e){if(t.draggable){"touchstart"===e.nativeEvent.type&&e.nativeEvent.preventDefault(),u.didMove=!1,document.addEventListener("mousemove",_),document.addEventListener("mouseup",L),document.addEventListener("touchmove",_),document.addEventListener("touchend",L);const n=c.current;u.canCloseOnClick=!0,u.canDrag=!0,u.boundingRect=n.getBoundingClientRect(),n.style.transition="",u.x=b(e.nativeEvent),u.y=I(e.nativeEvent),"x"===t.draggableDirection?(u.start=u.x,u.removalDistance=n.offsetWidth*(t.draggablePercent/100)):(u.start=u.y,u.removalDistance=n.offsetHeight*(80===t.draggablePercent?1.5*t.draggablePercent:t.draggablePercent/100))}}function T(e){if(u.boundingRect){const{top:n,bottom:o,left:s,right:a}=u.boundingRect;"touchend"!==e.nativeEvent.type&&t.pauseOnHover&&u.x>=s&&u.x<=a&&u.y>=n&&u.y<=o?C():E()}}function E(){a(!0)}function C(){a(!1)}function _(e){const n=c.current;u.canDrag&&n&&(u.didMove=!0,o&&C(),u.x=b(e),u.y=I(e),u.delta="x"===t.draggableDirection?u.x-u.start:u.y-u.start,u.start!==u.x&&(u.canCloseOnClick=!1),n.style.transform=`translate${t.draggableDirection}(${u.delta}px)`,n.style.opacity=""+(1-Math.abs(u.delta/u.removalDistance)))}function L(){document.removeEventListener("mousemove",_),document.removeEventListener("mouseup",L),document.removeEventListener("touchmove",_),document.removeEventListener("touchend",L);const e=c.current;if(u.canDrag&&u.didMove&&e){if(u.canDrag=!1,Math.abs(u.delta)>u.removalDistance)return l(!0),void t.closeToast();e.style.transition="transform 0.2s, opacity 0.2s",e.style.transform=`translate${t.draggableDirection}(0)`,e.style.opacity="1"}}(0,react.useEffect)(()=>{d.current=t}),(0,react.useEffect)(()=>(c.current&&c.current.addEventListener("d",E,{once:!0}),p(t.onOpen)&&t.onOpen((0,react.isValidElement)(t.children)&&t.children.props),()=>{const t=d.current;p(t.onClose)&&t.onClose((0,react.isValidElement)(t.children)&&t.children.props)}),[]),(0,react.useEffect)(()=>(t.pauseOnFocusLoss&&(document.hasFocus()||C(),window.addEventListener("focus",E),window.addEventListener("blur",C)),()=>{t.pauseOnFocusLoss&&(window.removeEventListener("focus",E),window.removeEventListener("blur",C))}),[t.pauseOnFocusLoss]);const O={onMouseDown:v,onTouchStart:v,onMouseUp:T,onTouchEnd:T};return m&&f&&(O.onMouseEnter=C,O.onMouseLeave=E),y&&(O.onClick=t=>{h&&h(t),u.canCloseOnClick&&g()}),{playToast:E,pauseToast:C,isRunning:o,preventExitTransition:r,toastRef:c,eventHandlers:O}}function L(e){let{closeToast:n,theme:o,ariaLabel:s="close"}=e;return react.createElement("button",{className:`Toastify__close-button Toastify__close-button--${o}`,type:"button",onClick:t=>{t.stopPropagation(),n(t)},"aria-label":s},react.createElement("svg",{"aria-hidden":"true",viewBox:"0 0 14 16"},react.createElement("path",{fillRule:"evenodd",d:"M7.71 8.23l3.75 3.75-1.48 1.48-3.75-3.75-3.75 3.75L1 11.98l3.75-3.75L1 4.48 2.48 3l3.75 3.75L9.98 3l1.48 1.48-3.75 3.75z"})))}function O(e){let{delay:n,isRunning:o,closeToast:s,type:a="default",hide:r,className:i,style:l,controlledProgress:u,progress:d,rtl:m,isIn:f,theme:g}=e;const h=r||u&&0===d,y={...l,animationDuration:`${n}ms`,animationPlayState:o?"running":"paused",opacity:h?0:1};u&&(y.transform=`scaleX(${d})`);const v=clsx_m("Toastify__progress-bar",u?"Toastify__progress-bar--controlled":"Toastify__progress-bar--animated",`Toastify__progress-bar-theme--${g}`,`Toastify__progress-bar--${a}`,{"Toastify__progress-bar--rtl":m}),T=p(i)?i({rtl:m,type:a,defaultClassName:v}):clsx_m(v,i);return react.createElement("div",{role:"progressbar","aria-hidden":h?"true":"false","aria-label":"notification timer",className:T,style:y,[u&&d>=1?"onTransitionEnd":"onAnimationEnd"]:u&&d<1?null:()=>{f&&s()}})}const N=n=>{const{isRunning:o,preventExitTransition:s,toastRef:r,eventHandlers:i}=_(n),{closeButton:l,children:u,autoClose:d,onClick:m,type:f,hideProgressBar:g,closeToast:h,transition:y,position:v,className:T,style:E,bodyClassName:C,bodyStyle:b,progressClassName:I,progressStyle:N,updateId:M,role:R,progress:w,rtl:x,toastId:$,deleteToast:k,isIn:P,isLoading:B,iconOut:D,closeOnClick:A,theme:z}=n,F=clsx_m("Toastify__toast",`Toastify__toast-theme--${z}`,`Toastify__toast--${f}`,{"Toastify__toast--rtl":x},{"Toastify__toast--close-on-click":A}),H=p(T)?T({rtl:x,position:v,type:f,defaultClassName:F}):clsx_m(F,T),S=!!w||!d,q={closeToast:h,type:f,theme:z};let Q=null;return!1===l||(Q=p(l)?l(q):(0,react.isValidElement)(l)?(0,react.cloneElement)(l,q):L(q)),react.createElement(y,{isIn:P,done:k,position:v,preventExitTransition:s,nodeRef:r},react.createElement("div",{id:$,onClick:m,className:H,...i,style:E,ref:r},react.createElement("div",{...P&&{role:R},className:p(C)?C({type:f}):clsx_m("Toastify__toast-body",C),style:b},null!=D&&react.createElement("div",{className:clsx_m("Toastify__toast-icon",{"Toastify--animate-icon Toastify__zoom-enter":!B})},D),react.createElement("div",null,u)),Q,react.createElement(O,{...M&&!S?{key:`pb-${M}`}:{},rtl:x,theme:z,delay:d,isRunning:o,isIn:P,closeToast:h,hide:g,type:f,style:N,className:I,controlledProgress:S,progress:w||0})))},M=function(t,e){return void 0===e&&(e=!1),{enter:`Toastify--animate Toastify__${t}-enter`,exit:`Toastify--animate Toastify__${t}-exit`,appendPosition:e}},R=h(M("bounce",!0)),w=h(M("slide",!0)),x=h(M("zoom")),$=h(M("flip")),k=(0,react.forwardRef)((e,n)=>{const{getToastToRender:o,containerRef:a,isToastActive:r}=C(e),{className:i,style:l,rtl:u,containerId:d}=e;function f(t){const e=clsx_m("Toastify__toast-container",`Toastify__toast-container--${t}`,{"Toastify__toast-container--rtl":u});return p(i)?i({position:t,rtl:u,defaultClassName:e}):clsx_m(e,m(i))}return (0,react.useEffect)(()=>{n&&(n.current=a.current)},[]),react.createElement("div",{ref:a,className:"Toastify",id:d},o((e,n)=>{const o=n.length?{...l}:{...l,pointerEvents:"none"};return react.createElement("div",{className:f(e),style:o,key:`container-${e}`},n.map((e,o)=>{let{content:s,props:a}=e;return react.createElement(N,{...a,isIn:r(a.toastId),style:{...a.style,"--nth":o+1,"--len":n.length},key:`toast-${a.key}`},s)}))}))});k.displayName="ToastContainer",k.defaultProps={position:"top-right",transition:R,autoClose:5e3,closeButton:L,pauseOnHover:!0,pauseOnFocusLoss:!0,closeOnClick:!0,draggable:!0,draggablePercent:80,draggableDirection:"x",role:"alert",theme:"light"};let P,B=new Map,D=[],A=1;function z(){return""+A++}function F(t){return t&&(d(t.toastId)||u(t.toastId))?t.toastId:z()}function H(t,e){return B.size>0?v.emit(0,t,e):D.push({content:t,options:e}),e.toastId}function S(t,e){return{...e,type:e&&e.type||t,toastId:F(e)}}function q(t){return(e,n)=>H(e,S(t,n))}function Q(t,e){return H(t,S("default",e))}Q.loading=(t,e)=>H(t,S("default",{isLoading:!0,autoClose:!1,closeOnClick:!1,closeButton:!1,draggable:!1,...e})),Q.promise=function(t,e,n){let o,{pending:s,error:a,success:r}=e;s&&(o=d(s)?Q.loading(s,n):Q.loading(s.render,{...n,...s}));const i={isLoading:null,autoClose:null,closeOnClick:null,closeButton:null,draggable:null},l=(t,e,s)=>{if(null==e)return void Q.dismiss(o);const a={type:t,...i,...n,data:s},r=d(e)?{render:e}:e;return o?Q.update(o,{...a,...r}):Q(r.render,{...a,...r}),s},c=p(t)?t():t;return c.then(t=>l("success",r,t)).catch(t=>l("error",a,t)),c},Q.success=q("success"),Q.info=q("info"),Q.error=q("error"),Q.warning=q("warning"),Q.warn=Q.warning,Q.dark=(t,e)=>H(t,S("default",{theme:"dark",...e})),Q.dismiss=t=>{B.size>0?v.emit(1,t):D=D.filter(e=>null!=t&&e.options.toastId!==t)},Q.clearWaitingQueue=function(t){return void 0===t&&(t={}),v.emit(5,t)},Q.isActive=t=>{let e=!1;return B.forEach(n=>{n.isToastActive&&n.isToastActive(t)&&(e=!0)}),e},Q.update=function(t,e){void 0===e&&(e={}),setTimeout(()=>{const n=function(t,e){let{containerId:n}=e;const o=B.get(n||P);return o&&o.getToast(t)}(t,e);if(n){const{props:o,content:s}=n,a={delay:100,...o,...e,toastId:e.toastId||t,updateId:z()};a.toastId!==t&&(a.staleId=t);const r=a.render||s;delete a.render,H(r,a)}},0)},Q.done=t=>{Q.update(t,{progress:1})},Q.onChange=t=>(v.on(4,t),()=>{v.off(4,t)}),Q.POSITION={TOP_LEFT:"top-left",TOP_RIGHT:"top-right",TOP_CENTER:"top-center",BOTTOM_LEFT:"bottom-left",BOTTOM_RIGHT:"bottom-right",BOTTOM_CENTER:"bottom-center"},Q.TYPE={INFO:"info",SUCCESS:"success",WARNING:"warning",ERROR:"error",DEFAULT:"default"},v.on(2,t=>{P=t.containerId||t,B.set(P,t),D.forEach(t=>{v.emit(0,t.content,t.options)}),D=[]}).on(3,t=>{B.delete(t.containerId||t),0===B.size&&v.off(0).off(1).off(5)});
//# sourceMappingURL=react-toastify.esm.mjs.map


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, [774,179], function() { return __webpack_exec__(6840), __webpack_exec__(6885); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ _N_E = __webpack_exports__;
/******/ }
]);