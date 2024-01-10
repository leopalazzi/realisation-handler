(self["webpackChunk_N_E"] = self["webpackChunk_N_E"] || []).push([[405],{

/***/ 8312:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {


    (window.__NEXT_P = window.__NEXT_P || []).push([
      "/",
      function () {
        return __webpack_require__(7786);
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

/***/ 5649:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);

const FitlerButton = (props)=>{
    const { label , ariaLabel , onClick , textColor , disabled , isSelected , code  } = props;
    let icon;
    switch(code){
        case "image":
            icon = /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                className: "rounded-[40px] bg-[#40BCF4] w-[16px] h-[16px]"
            });
            break;
        case "etalonnage":
            icon = /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                className: "rounded-[40px] bg-[#00E054] w-[16px] h-[16px]"
            });
            break;
        case "realisation":
            icon = /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                className: "rounded-[40px] bg-[#FF8000] w-[16px] h-[16px]"
            });
            break;
        default:
            break;
    }
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button", {
        className: "".concat(disabled ? "filterButtonDisable" : "", " ").concat(isSelected ? "filterSelected" : "", " rounded-[40px] border border-[#DADCE0] py-[8px] px-[16px] flex items-center gap-[10px] hover:bg-[#EDEDED] bg-white "),
        "aria-label": ariaLabel,
        type: "button",
        onClick: ()=>{
            onClick();
        },
        disabled: disabled,
        children: [
            icon,
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", {
                className: "lg:text-[16px] text-[12px] font-normal",
                children: label
            })
        ]
    });
};
/* harmony default export */ __webpack_exports__["Z"] = (FitlerButton);


/***/ }),

/***/ 3299:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7294);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);



const ImageCompponent = (props)=>{
    const { src , alt , height , onClick , className , width , loading , priority  } = props;
    const [isLoaded, setIsLoaded] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            !isLoaded && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                className: "containerImg",
                style: {
                    width: "".concat(width, "px"),
                    height: "".concat(height, "px")
                }
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                className: "image-container",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {
                    src: src,
                    onLoad: ()=>setIsLoaded(true),
                    onError: ()=>setIsLoaded(false),
                    alt: alt,
                    className: "image ".concat(className ? className : ""),
                    onClick: onClick,
                    loading: loading,
                    fill: true,
                    sizes: "(max-width: 768px)",
                    priority: priority,
                    unoptimized: true
                })
            })
        ]
    });
};
/* harmony default export */ __webpack_exports__["Z"] = (ImageCompponent);


/***/ }),

/***/ 7977:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export filtersConfig */
const filtersConfig = [
    {
        code: "image",
        label: "Image",
        ariaLabel: "Filtre Image",
        backgroundColor: "#EBF2FF",
        hasIcon: true
    },
    {
        code: "etalonnage",
        label: "Etalonnage",
        ariaLabel: "Filtre Etalonnage",
        backgroundColor: "#D6EFDD",
        textColor: "#3C862B",
        hasIcon: true
    },
    {
        code: "realisation",
        label: "R\xe9alisation",
        ariaLabel: "Filtre realisation",
        backgroundColor: "#FCE9E9",
        textColor: "#D95040",
        hasIcon: true
    },
    {
        code: "photographie",
        label: "Photographie",
        ariaLabel: "Filtre Photographie",
        backgroundColor: "#E0D9EE",
        textColor: "#411AAE",
        hasIcon: true
    },
    {
        code: "numerique",
        label: "Num\xe9rique",
        ariaLabel: "Filtre Num\xe9rique",
        backgroundColor: "#FFFEDD",
        textColor: "#C28C3F"
    },
    {
        code: "pellicule",
        label: "Pellicule",
        ariaLabel: "Filtre Pellicule",
        backgroundColor: "#D7EEF5",
        textColor: "#384A51"
    },
    {
        code: "fiction",
        label: "Fiction",
        ariaLabel: "Filtre Fiction",
        backgroundColor: "#FFECCF",
        textColor: "#AA6E14"
    },
    {
        code: "documentaire",
        label: "Documentaire",
        ariaLabel: "Filtre Documentaire",
        backgroundColor: "#E0FFF6",
        textColor: "#1E926F"
    },
    {
        code: "clip",
        label: "Clip",
        ariaLabel: "Filtre Clip",
        backgroundColor: "#FFE3F4",
        textColor: "#B60F73"
    }
];
/* harmony default export */ __webpack_exports__["Z"] = (filtersConfig);


/***/ }),

/***/ 3930:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Bq": function() { return /* binding */ useResponsiveDetect; }
/* harmony export */ });
/* unused harmony exports isClientSide, getWindowWidth, useWindowDimensions, useIsDeviceDetected */
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7294);

const MOBILE = {
    max: 600
};
const TABLET = {
    min: 601,
    max: 960
};
const DESKTOP = {
    min: 1040
};
const BIGSCREEN = {
    min: 1400
};
const isClientSide = ()=>"object" !== "undefined";
const getWindowWidth = ()=>{
    if (!isClientSide() || !document) {
        return 0;
    }
    if (document) {
        const e = document.documentElement;
        const g = document.getElementsByTagName("body")[0];
        return e.clientWidth || window.innerWidth || g.clientWidth;
    }
};
const getWindowDimensions = ()=>{
    return {
        width: getWindowWidth()
    };
};
const useWindowDimensions = ()=>{
    const [windowDimensions, setWindowDimensions] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(getWindowDimensions());
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{
        const handleResize = ()=>{
            setWindowDimensions(getWindowDimensions());
        };
        window.addEventListener("resize", handleResize);
        return ()=>window.removeEventListener("resize", handleResize);
    }, []);
    return windowDimensions;
};
const useResponsiveDetect = ()=>{
    const { width  } = useWindowDimensions();
    const [isMobile, setIsMobile] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
    const [isTablet, setIsTablet] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
    const [isDesktop, setIsDesktop] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
    const [isBigScreen, setIsBigscreen] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{
        setIsMobile(width <= MOBILE.max);
        setIsTablet(width >= TABLET.min && width <= TABLET.max);
        setIsDesktop(width >= DESKTOP.min);
        setIsBigscreen(width >= BIGSCREEN.min);
    }, [
        width
    ]);
    return {
        width,
        isMobile,
        isTablet,
        isDesktop,
        isBigScreen
    };
};
const useIsDeviceDetected = (type)=>{
    const { width , isMobile , isTablet , isDesktop , isBigScreen  } = useResponsiveDetect();
    const [device, setDevice] = useState(false);
    useEffect(()=>{
        switch(type){
            case "mobile":
                setDevice(isMobile);
                break;
            case "tablet":
                setDevice(isTablet);
                break;
            case "desktop":
                setDevice(isDesktop);
                break;
            case "bigScreen":
                setDevice(isBigScreen);
                break;
        }
    }, [
        width,
        type,
        isMobile,
        isTablet,
        isDesktop,
        isBigScreen
    ]);
    return device;
};


/***/ }),

/***/ 7786:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ Home; }
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(5893);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(7294);
// EXTERNAL MODULE: ./node_modules/next/router.js
var next_router = __webpack_require__(1163);
// EXTERNAL MODULE: ./components/Image/Image.tsx
var Image = __webpack_require__(3299);
// EXTERNAL MODULE: ./config/filtersConfig.ts
var filtersConfig = __webpack_require__(7977);
// EXTERNAL MODULE: ./hooks/useResponsiveDetect.ts
var useResponsiveDetect = __webpack_require__(3930);
;// CONCATENATED MODULE: ./components/RealisationsImage/RealisationsImage.tsx





const RealisationsImage = (props)=>{
    var _columnsData__, _columnsData___images;
    const { isMobile , isDesktop  } = (0,useResponsiveDetect/* useResponsiveDetect */.Bq)();
    const { projectsList , maxImages  } = props;
    const router = (0,next_router.useRouter)();
    const columns = isMobile ? 2 : 4; // Number of columns
    const rows = Math.ceil(projectsList.slice(0, maxImages).length / columns); // Calculate number of rows
    const columnsData = Array.from({
        length: columns
    }, (_, colIndex)=>{
        const start = colIndex * rows;
        const end = start + rows;
        return projectsList.slice(start, end);
    });
    const onClickImage = (event, id)=>{
        event.preventDefault();
        router.push("/".concat(id, "/details"));
    };
    return /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
        className: "flex",
        children: ((_columnsData__ = columnsData[0][0]) === null || _columnsData__ === void 0 ? void 0 : (_columnsData___images = _columnsData__.images) === null || _columnsData___images === void 0 ? void 0 : _columnsData___images[0]) && columnsData.map((column, colIndex)=>{
            return /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                className: "imgColumn",
                children: column.map((project, rowIndex)=>{
                    var _project_images;
                    const padding = isDesktop ? 128 : 32;
                    const numberColumn = isDesktop ? 4 : 2;
                    const columnWidth = (window.document.documentElement.clientWidth - padding) / numberColumn - 8;
                    const imageRatio = parseInt(project.imageWidth, 10) / columnWidth;
                    const heightImage = Math.round(parseInt(project.imageHeight, 10) / imageRatio);
                    const percentageHeightScreen = heightImage / document.documentElement.clientHeight * 100;
                    return ((_project_images = project.images) === null || _project_images === void 0 ? void 0 : _project_images[0]) && /*#__PURE__*/ (0,jsx_runtime.jsxs)("a", {
                        className: "imgContainer",
                        onClick: (event)=>{
                            onClickImage(event, project.id);
                        },
                        href: "".concat("https://realisation-handler.onrender.com", "/").concat(project.id, "/details"),
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Image/* default */.Z, {
                                src: "/projects/".concat(project.projectDirectory, "/").concat(project.images[0]),
                                alt: "".concat(project.projectTitle, " - Image 1"),
                                height: isNaN(heightImage) ? 200 : "".concat(heightImage),
                                width: columnWidth,
                                priority: percentageHeightScreen > 20 ? true : false
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                className: "imgInfos smooth-opacity",
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                        className: "filtersContainer",
                                        children: project.filters.map((filterCode)=>{
                                            const currentFilterConfig = filtersConfig/* default.find */.Z.find((filter)=>filter.code === filterCode);
                                            if (!currentFilterConfig) {
                                                return;
                                            }
                                            return /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                                className: "text-white px-2 py-1 rounded-[80px] border border-white",
                                                children: currentFilterConfig.label
                                            }, "".concat(filterCode));
                                        })
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                        className: "imgTitleContainer",
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                                className: "text-white uppercase font-medium mb-1 leading-[14px]",
                                                children: project.projectTitle
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                className: "text-white leading-[14px]",
                                                children: [
                                                    "de ",
                                                    project.projectDirector
                                                ]
                                            })
                                        ]
                                    })
                                ]
                            })
                        ]
                    }, "".concat(project.projectTitle, "-").concat(rowIndex));
                })
            }, colIndex);
        })
    });
};
/* harmony default export */ var RealisationsImage_RealisationsImage = (RealisationsImage);

;// CONCATENATED MODULE: ./components/RealisationsTable/RealisationsTable.tsx



const RealisationsTable = (props)=>{
    const { projectsList  } = props;
    const router = (0,next_router.useRouter)();
    const goToDetails = (projectId)=>{
        router.push("/".concat(projectId, "/details"));
    };
    const onKeyDown = (event, projectId)=>{
        if (event.key === "Enter") {
            goToDetails(projectId);
        }
    };
    const returnCorrectIcon = (filterCode)=>{
        let icon;
        switch(filterCode){
            case "image":
                icon = /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                    className: "rounded-[40px] bg-[#40BCF4] w-[16px] h-[16px]"
                });
                break;
            case "etalonnage":
                icon = /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                    className: "rounded-[40px] bg-[#00E054] w-[16px] h-[16px]"
                });
                break;
            case "realisation":
                icon = /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                    className: "rounded-[40px] bg-[#FF8000] w-[16px] h-[16px]"
                });
                break;
            default:
                break;
        }
        return icon;
    };
    const createIcons = (projectFilters)=>{
        let icons = [];
        filtersConfig/* default.forEach */.Z.forEach((filterConfig)=>{
            if (filterConfig.hasIcon) {
                const { code  } = filterConfig;
                const filterInProject = projectFilters.find((filterCode)=>filterCode === code);
                if (filterInProject) {
                    icons.push(returnCorrectIcon(code));
                }
            }
        });
        return icons;
    };
    return /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
        style: {
            width: "100%"
        },
        className: "bg-[#F9F9F9]",
        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("table", {
            className: "sortable",
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsx)("thead", {
                    children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("tr", {
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)("th", {
                                className: "sticky top-0 py-[16px]",
                                children: "Ann\xe9e"
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)("th", {
                                className: "sticky top-0 py-[16px]",
                                children: "Titre"
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)("th", {
                                className: "sticky top-0 py-[16px]",
                                children: "Real"
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)("th", {
                                className: "sticky top-0 py-[16px]",
                                children: "Prod"
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)("th", {
                                className: "sticky top-0 py-[16px]",
                                children: "Cam\xe9ra"
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)("th", {
                                className: "sticky top-0 py-[16px]",
                                children: "Filtres"
                            })
                        ]
                    })
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)("tbody", {
                    children: projectsList.map((project, index)=>{
                        const { projectTitle , id , projectYear , projectDirector , projectProducer , camera  } = project;
                        return /*#__PURE__*/ (0,jsx_runtime.jsxs)("tr", {
                            className: "text-justify hover:bg-[#D0E3FF]",
                            onClick: ()=>goToDetails(id),
                            tabIndex: 0,
                            onKeyDown: (event)=>onKeyDown(event, id),
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("td", {
                                    children: projectYear
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("td", {
                                    children: projectTitle
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("td", {
                                    children: projectDirector ? projectDirector : "NA"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("td", {
                                    children: projectProducer ? projectProducer : "NA"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("td", {
                                    children: camera ? camera : "NA"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("td", {
                                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                        className: "flex gap-4 flex-wrap",
                                        children: createIcons(project.filters)
                                    })
                                })
                            ]
                        }, "".concat(projectTitle, "-").concat(index));
                    })
                })
            ]
        })
    });
};
/* harmony default export */ var RealisationsTable_RealisationsTable = (RealisationsTable);

// EXTERNAL MODULE: ./components/Button/Button.tsx
var Button = __webpack_require__(4910);
;// CONCATENATED MODULE: ./components/Icons/MosaicViewIcon.tsx

const MosaicViewIcon = ()=>{
    return /*#__PURE__*/ (0,jsx_runtime.jsx)("svg", {
        width: "19",
        height: "19",
        viewBox: "0 0 19 19",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M1.94971 0.705322C1.39746 0.705322 0.949707 1.15304 0.949707 1.70532V7.71221C0.949707 8.2645 1.39746 8.71221 1.94971 8.71221H8.00073C8.5531 8.71221 9.00073 8.2645 9.00073 7.71221V1.70532C9.00073 1.15304 8.5531 0.705322 8.00073 0.705322H1.94971ZM1.94946 10.6118C1.39722 10.6118 0.949463 11.0595 0.949463 11.6118V17.6187C0.949463 18.171 1.39722 18.6187 1.94946 18.6187H8.00049C8.55286 18.6187 9.00049 18.171 9.00049 17.6187V11.6118C9.00049 11.0595 8.55286 10.6118 8.00049 10.6118H1.94946ZM10.9106 11.6118C10.9106 11.0595 11.3584 10.6118 11.9106 10.6118H17.9617C18.514 10.6118 18.9617 11.0595 18.9617 11.6118V17.6187C18.9617 18.171 18.514 18.6187 17.9617 18.6187H11.9106C11.3584 18.6187 10.9106 18.171 10.9106 17.6187V11.6118ZM11.9109 0.705322C11.3586 0.705322 10.9109 1.15304 10.9109 1.70532V7.71221C10.9109 8.2645 11.3586 8.71221 11.9109 8.71221H17.9619C18.5143 8.71221 18.9619 8.2645 18.9619 7.71221V1.70532C18.9619 1.15304 18.5143 0.705322 17.9619 0.705322H11.9109Z",
            fill: "#72829B"
        })
    });
};
/* harmony default export */ var Icons_MosaicViewIcon = (MosaicViewIcon);

;// CONCATENATED MODULE: ./components/Icons/ListViewIcon.tsx

const ListViewIcon = (props)=>{
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("svg", {
        width: "19",
        height: "19",
        viewBox: "0 0 19 19",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
                d: "M0.219727 1.57642C0.219727 1.02413 0.667442 0.576416 1.21973 0.576416H17.1329C17.6852 0.576416 18.1329 1.02413 18.1329 1.57642V4.34218C18.1329 4.89446 17.6852 5.34218 17.1329 5.34218H1.21973C0.667441 5.34218 0.219727 4.89446 0.219727 4.34218V1.57642Z",
                fill: "#72829B"
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
                d: "M0.219727 8.15015C0.219727 7.59786 0.667442 7.15015 1.21973 7.15015H17.1329C17.6852 7.15015 18.1329 7.59786 18.1329 8.15015V10.9159C18.1329 11.4682 17.6852 11.9159 17.1329 11.9159H1.21973C0.667441 11.9159 0.219727 11.4682 0.219727 10.9159V8.15015Z",
                fill: "#72829B"
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
                d: "M0.219727 14.7239C0.219727 14.1716 0.667442 13.7239 1.21973 13.7239H17.1329C17.6852 13.7239 18.1329 14.1716 18.1329 14.7239V17.4896C18.1329 18.0419 17.6852 18.4896 17.1329 18.4896H1.21973C0.667441 18.4896 0.219727 18.0419 0.219727 17.4896V14.7239Z",
                fill: "#72829B"
            })
        ]
    });
};
/* harmony default export */ var Icons_ListViewIcon = (ListViewIcon);

;// CONCATENATED MODULE: ./components/Icons/MosaicViewOffIcon.tsx

const MosaicViewOffIcon = ()=>{
    return /*#__PURE__*/ (0,jsx_runtime.jsx)("svg", {
        width: "19",
        height: "19",
        viewBox: "0 0 19 19",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M1.89026 0.705322C1.33801 0.705322 0.890259 1.15304 0.890259 1.70532V7.71221C0.890259 8.2645 1.33801 8.71221 1.89026 8.71221H7.94128C8.49365 8.71221 8.94128 8.2645 8.94128 7.71221V1.70532C8.94128 1.15304 8.49365 0.705322 7.94128 0.705322H1.89026ZM1.89001 10.6118C1.33777 10.6118 0.890015 11.0595 0.890015 11.6118V17.6187C0.890015 18.171 1.33777 18.6187 1.89001 18.6187H7.94104C8.49341 18.6187 8.94104 18.171 8.94104 17.6187V11.6118C8.94104 11.0595 8.49341 10.6118 7.94104 10.6118H1.89001ZM10.8512 11.6118C10.8512 11.0595 11.299 10.6118 11.8512 10.6118H17.9022C18.4546 10.6118 18.9022 11.0595 18.9022 11.6118V17.6187C18.9022 18.171 18.4546 18.6187 17.9022 18.6187H11.8512C11.299 18.6187 10.8512 18.171 10.8512 17.6187V11.6118ZM11.8514 0.705322C11.2992 0.705322 10.8514 1.15304 10.8514 1.70532V7.71221C10.8514 8.2645 11.2992 8.71221 11.8514 8.71221H17.9025C18.4548 8.71221 18.9025 8.2645 18.9025 7.71221V1.70532C18.9025 1.15304 18.4548 0.705322 17.9025 0.705322H11.8514Z",
            fill: "#BDC2C7"
        })
    });
};
/* harmony default export */ var Icons_MosaicViewOffIcon = (MosaicViewOffIcon);

;// CONCATENATED MODULE: ./components/Icons/ListViewOffIcon.tsx

const ListViewOffIcon = ()=>{
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("svg", {
        width: "19",
        height: "19",
        viewBox: "0 0 19 19",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
                d: "M0.219727 1.67334C0.219727 1.12106 0.667442 0.67334 1.21973 0.67334H17.1329C17.6852 0.67334 18.1329 1.12106 18.1329 1.67334V4.4391C18.1329 4.99139 17.6852 5.4391 17.1329 5.4391H1.21973C0.667441 5.4391 0.219727 4.99139 0.219727 4.4391V1.67334Z",
                fill: "#BDC2C7"
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
                d: "M0.219727 8.24707C0.219727 7.69479 0.667442 7.24707 1.21973 7.24707H17.1329C17.6852 7.24707 18.1329 7.69479 18.1329 8.24707V11.0128C18.1329 11.5651 17.6852 12.0128 17.1329 12.0128H1.21973C0.667441 12.0128 0.219727 11.5651 0.219727 11.0128V8.24707Z",
                fill: "#BDC2C7"
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
                d: "M0.219727 14.8208C0.219727 14.2685 0.667442 13.8208 1.21973 13.8208H17.1329C17.6852 13.8208 18.1329 14.2685 18.1329 14.8208V17.5866C18.1329 18.1388 17.6852 18.5866 17.1329 18.5866H1.21973C0.667441 18.5866 0.219727 18.1388 0.219727 17.5866V14.8208Z",
                fill: "#BDC2C7"
            })
        ]
    });
};
/* harmony default export */ var Icons_ListViewOffIcon = (ListViewOffIcon);

;// CONCATENATED MODULE: ./components/ButtonBlock/ButtonBlock.tsx






const ButtonBlock = (props)=>{
    const [isAnimated, setIsAnimated] = (0,react.useState)(false);
    const { setBtnClicked , btnClicked  } = props;
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        className: "flex",
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                className: "buttonBlockBackground ".concat(isAnimated && btnClicked === "listView" ? "slide-background-to-right" : "", " ").concat(isAnimated && btnClicked === "mosaicView" ? "slide-background-to-left" : "")
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)("button", {
                onClick: ()=>{
                    setBtnClicked("mosaicView");
                    setIsAnimated(true);
                },
                style: {
                    borderRadius: "0 10px 10px 0"
                },
                className: "buttonDouble",
                role: "button",
                "aria-label": "Vue en mode images",
                children: btnClicked === "mosaicView" ? /*#__PURE__*/ (0,jsx_runtime.jsx)(Icons_MosaicViewIcon, {}) : /*#__PURE__*/ (0,jsx_runtime.jsx)(Icons_MosaicViewOffIcon, {})
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)("button", {
                onClick: ()=>{
                    setBtnClicked("listView");
                    setIsAnimated(true);
                },
                style: {
                    borderRadius: "10px 0px 0px 10px"
                },
                className: "buttonDouble",
                role: "button",
                "aria-label": "Vue en mode liste",
                children: btnClicked === "listView" ? /*#__PURE__*/ (0,jsx_runtime.jsx)(Icons_ListViewIcon, {}) : /*#__PURE__*/ (0,jsx_runtime.jsx)(Icons_ListViewOffIcon, {})
            })
        ]
    });
};
/* harmony default export */ var ButtonBlock_ButtonBlock = (ButtonBlock);

// EXTERNAL MODULE: ./context/Context/Context.tsx
var Context = __webpack_require__(3968);
// EXTERNAL MODULE: ./components/FilterButton/FilterButton.tsx
var FilterButton = __webpack_require__(5649);
;// CONCATENATED MODULE: ./components/FiltersList/FiltersList.tsx





const FiltersList = (props)=>{
    const { onClickFilter  } = props;
    const { selectedFilters  } = (0,react.useContext)(Context/* ContextApp */.g);
    return /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
        className: "flex gap-4 flex-wrap",
        children: filtersConfig/* default.map */.Z.map((filter)=>{
            const isSelected = selectedFilters.includes(filter.code);
            return /*#__PURE__*/ (0,jsx_runtime.jsx)(FilterButton/* default */.Z, {
                code: filter.code,
                label: filter.label,
                ariaLabel: filter.ariaLabel,
                onClick: ()=>onClickFilter(filter.code),
                backgroundColor: filter.backgroundColor,
                textColor: filter.textColor,
                isSelected: isSelected
            }, filter.code);
        })
    });
};
/* harmony default export */ var FiltersList_FiltersList = (FiltersList);

// EXTERNAL MODULE: ./node_modules/next/head.js
var head = __webpack_require__(9008);
var head_default = /*#__PURE__*/__webpack_require__.n(head);
;// CONCATENATED MODULE: ./pages/index.tsx











function Home(props) {
    var _projectsList_, _projectsList__images;
    const { initialProjectList  } = props;
    const { selectedFilters , setSelectedFilters , projectsList , setProjectsList  } = (0,react.useContext)(Context/* ContextApp */.g);
    const [maxImages, setMaxImages] = (0,react.useState)(16);
    const [btnClicked, setBtnClicked] = (0,react.useState)("mosaicView");
    const { isDesktop , isMobile  } = (0,useResponsiveDetect/* useResponsiveDetect */.Bq)();
    const onClickMoreResults = ()=>{
        if (maxImages + 16 > projectsList.length) {
            setMaxImages(projectsList.length);
        } else {
            setMaxImages(maxImages + 16);
        }
    };
    const onClickFilter = (filterCode)=>{
        console.log("filter", filterCode);
        if (selectedFilters.includes(filterCode)) {
            setSelectedFilters((prevFilters)=>{
                return prevFilters.filter((filter)=>filter !== filterCode);
            });
        } else {
            setSelectedFilters((prevFilters)=>[
                    ...prevFilters,
                    filterCode
                ]);
        }
    };
    (0,react.useEffect)(()=>{
        setProjectsList(()=>{
            return initialProjectList.current.filter((project)=>{
                return selectedFilters.every((filter)=>{
                    var _project_filters;
                    return (_project_filters = project.filters) === null || _project_filters === void 0 ? void 0 : _project_filters.includes(filter);
                });
            });
        });
    }, [
        selectedFilters
    ]);
    (0,react.useEffect)(()=>{
        if (isMobile) {
            setBtnClicked("mosaicView");
        }
    }, [
        isMobile
    ]);
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        className: "flex flex-col grow gap-[40px]",
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsxs)((head_default()), {
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("title", {
                        children: "Tous les projets d'Emmanuel Fraisse"
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("meta", {
                        name: "description",
                        content: "Retrouvez tous les projets d'Emmanuel Fraisse."
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("link", {
                        rel: "canonical",
                        href: "".concat("https://realisation-handler.onrender.com")
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("script", {
                        type: "application/ld+json"
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: "flex flex-row gap-6 items-center justify-between",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                        className: "flex justify-center items-center",
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(FiltersList_FiltersList, {
                            onClickFilter: onClickFilter
                        })
                    }),
                    isDesktop && /*#__PURE__*/ (0,jsx_runtime.jsx)(ButtonBlock_ButtonBlock, {
                        setBtnClicked: setBtnClicked,
                        btnClicked: btnClicked
                    })
                ]
            }),
            btnClicked === "mosaicView" ? /*#__PURE__*/ (0,jsx_runtime.jsx)(RealisationsImage_RealisationsImage, {
                projectsList: projectsList,
                maxImages: maxImages
            }) : /*#__PURE__*/ (0,jsx_runtime.jsx)(RealisationsTable_RealisationsTable, {
                projectsList: projectsList
            }),
            ((_projectsList_ = projectsList[0]) === null || _projectsList_ === void 0 ? void 0 : (_projectsList__images = _projectsList_.images) === null || _projectsList__images === void 0 ? void 0 : _projectsList__images.length) > 0 && maxImages !== (projectsList === null || projectsList === void 0 ? void 0 : projectsList.length) && btnClicked === "mosaicView" && /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                className: "flex justify-center",
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* default */.Z, {
                    type: "button",
                    "aria-label": "Afficher plus de r\xe9sultats",
                    onClick: onClickMoreResults,
                    className: "rounded-[40px] border border-[#D3D3D3] bg-[#F8F8F8] text-[#0F0F0F] py-[16px] px-[24px]",
                    children: "Afficher plus de r\xe9sultats"
                })
            }),
            projectsList.length == 0 && /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                className: "flex justify-center",
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                    children: "Pas de projet trouv\xe9 pour votre recherche"
                })
            })
        ]
    });
}


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, [959,774,888,179], function() { return __webpack_exec__(8312); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ _N_E = __webpack_exports__;
/******/ }
]);