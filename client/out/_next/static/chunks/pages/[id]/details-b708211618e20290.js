(self["webpackChunk_N_E"] = self["webpackChunk_N_E"] || []).push([[891],{

/***/ 5960:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {


    (window.__NEXT_P = window.__NEXT_P || []).push([
      "/[id]/details",
      function () {
        return __webpack_require__(9244);
      }
    ]);
    if(false) {}
  

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

/***/ 9244:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ details; }
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(5893);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(7294);
// EXTERNAL MODULE: ./node_modules/next/router.js
var next_router = __webpack_require__(1163);
// EXTERNAL MODULE: ./components/FilterButton/FilterButton.tsx
var FilterButton = __webpack_require__(5649);
// EXTERNAL MODULE: ./config/filtersConfig.ts
var filtersConfig = __webpack_require__(7977);
// EXTERNAL MODULE: ./context/Context/Context.tsx
var Context = __webpack_require__(3968);
;// CONCATENATED MODULE: ./components/DetailsBlock/DetailsBlock.tsx

const DetailsBlock = (props)=>{
    const { title , director , filters , year , duration , producer , camera , photographerName , nomination , videoLink  } = props;
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        className: "flex gap-2 shrink-0 flex-col pr-[90px] text-[18px] mb-[50px] lg:mb-[60px]",
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("span", {
                children: [
                    "Date de sortie : ",
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                        className: "font-medium",
                        children: year
                    })
                ]
            }),
            duration && /*#__PURE__*/ (0,jsx_runtime.jsxs)("span", {
                children: [
                    "Dur\xe9e : ",
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                        className: "font-medium",
                        children: duration
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("span", {
                children: [
                    "R\xe9al : ",
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                        className: "font-medium",
                        children: director
                    })
                ]
            }),
            producer && /*#__PURE__*/ (0,jsx_runtime.jsxs)("span", {
                children: [
                    "Prod : ",
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                        className: "font-medium",
                        children: producer
                    })
                ]
            }),
            camera && /*#__PURE__*/ (0,jsx_runtime.jsxs)("span", {
                children: [
                    "Cam\xe9ra : ",
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                        className: "font-medium",
                        children: camera
                    })
                ]
            }),
            photographerName && /*#__PURE__*/ (0,jsx_runtime.jsxs)("span", {
                children: [
                    "Image : ",
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                        className: "font-medium",
                        children: photographerName
                    })
                ]
            }),
            nomination && /*#__PURE__*/ (0,jsx_runtime.jsxs)("span", {
                children: [
                    "S\xe9lections / Prix : ",
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                        className: "font-medium",
                        children: nomination
                    })
                ]
            }),
            videoLink && /*#__PURE__*/ (0,jsx_runtime.jsxs)("span", {
                children: [
                    "Lien :",
                    " ",
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("a", {
                        href: videoLink,
                        target: "_blank",
                        className: "underline font-medium text-[#64A2FF] break-normal",
                        children: videoLink
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ var DetailsBlock_DetailsBlock = (DetailsBlock);

;// CONCATENATED MODULE: ./components/Icons/BackIcon.tsx

const BackIcon = ()=>{
    return /*#__PURE__*/ (0,jsx_runtime.jsx)("svg", {
        width: "13",
        height: "23",
        viewBox: "0 0 13 23",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
            d: "M11.8161 1.46509L1.81592 11.4649L11.8161 21.4651",
            stroke: "#3C3C3C",
            strokeWidth: "1.3",
            strokeLinecap: "round"
        })
    });
};
/* harmony default export */ var Icons_BackIcon = (BackIcon);

// EXTERNAL MODULE: ./node_modules/react-slick/lib/index.js
var lib = __webpack_require__(6066);
;// CONCATENATED MODULE: ./components/Icons/PrevArrowCaroussel.tsx

const PrevArrowCaroussel = (props)=>{
    const { onClick , arrowClassName  } = props;
    return /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
        tabIndex: 0,
        onClick: onClick,
        className: arrowClassName,
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "33",
            height: "33",
            viewBox: "0 0 33 33",
            fill: "none",
            children: /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M32.0639 32.1303C31.73 32.7827 30.9303 33.0409 30.2778 32.707L1.62011 18.0392C0.653302 17.5443 0.652567 16.1621 1.62011 15.6669L30.2778 0.999061C30.9303 0.665105 31.73 0.923319 32.0639 1.5758C32.3979 2.22828 32.1397 3.02794 31.4872 3.3619L5.99808 16.4079C5.63516 16.5937 5.63516 17.1124 5.99808 17.2981L31.4872 30.3442C32.1397 30.6781 32.3979 31.4778 32.0639 32.1303Z",
                fill: "white"
            })
        })
    });
};
/* harmony default export */ var Icons_PrevArrowCaroussel = (PrevArrowCaroussel);

;// CONCATENATED MODULE: ./components/Icons/NextArrowCaroussel.tsx

const NextArrowCaroussel = (props)=>{
    const { onClick , arrowClassName  } = props;
    return /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
        tabIndex: 0,
        onClick: onClick,
        className: arrowClassName,
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "33",
            height: "33",
            viewBox: "0 0 33 33",
            fill: "none",
            children: /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M1.04057 32.2675C1.37452 32.9199 2.17419 33.1782 2.82667 32.8442L31.4844 18.1764C32.4512 17.6815 32.4519 16.2993 31.4844 15.8041L2.82667 1.13627C2.17419 0.802312 1.37452 1.06053 1.04056 1.713C0.706608 2.36548 0.964821 3.16515 1.6173 3.49911L27.1064 16.5451C27.4693 16.7309 27.4693 17.2496 27.1064 17.4353L1.6173 30.4814C0.964824 30.8153 0.70661 31.615 1.04057 32.2675Z",
                fill: "white"
            })
        })
    });
};
/* harmony default export */ var Icons_NextArrowCaroussel = (NextArrowCaroussel);

;// CONCATENATED MODULE: ./components/AppSlider/AppSlider.tsx





const AppSlider = (props)=>{
    const { children , className , setIndexImage  } = props;
    const sliderRef = (0,react.useRef)(null);
    const settings = {
        dots: false,
        arrows: true,
        ref: sliderRef,
        prevArrow: /*#__PURE__*/ (0,jsx_runtime.jsx)(Icons_PrevArrowCaroussel, {
            arrowClassName: "cursor-pointer"
        }),
        nextArrow: /*#__PURE__*/ (0,jsx_runtime.jsx)(Icons_NextArrowCaroussel, {
            arrowClassName: "cursor-pointer"
        }),
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        beforeChange: (oldIndex, newIndex)=>{
            setIndexImage(newIndex + 1);
        }
    };
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(lib/* default */.Z, {
        ...settings,
        className: className,
        children: children
    });
};
/* harmony default export */ var AppSlider_AppSlider = (AppSlider);

;// CONCATENATED MODULE: ./components/Icons/CrossIcon.tsx

const CrossIcon = ()=>{
    return /*#__PURE__*/ (0,jsx_runtime.jsx)("svg", {
        width: "30",
        height: "30",
        viewBox: "0 0 30 30",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
            d: "M28.8955 1.27769L1.40723 28.7656M28.8955 28.7653L1.40723 1.27734",
            stroke: "white",
            strokeWidth: "2.5"
        })
    });
};
/* harmony default export */ var Icons_CrossIcon = (CrossIcon);

;// CONCATENATED MODULE: ./components/ImagesSlider/ImagesSlider.tsx




const ImagesSlider = (props)=>{
    const { images , projectDirectory , projectTitle , setImageClickedIndex , onImageClick , mousePos  } = props;
    const [indexImage, setIndexImage] = (0,react.useState)(1);
    return /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
        className: "h-[100%] w-[100%] bg-[#00000033] fixed left-0 top-0 z-10 max-sm:pt-[200px] backdrop-blur-lg scaleForward",
        style: {
            transformOrigin: "".concat(mousePos.x, "px ").concat(mousePos.y, "px")
        },
        tabIndex: 0,
        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
            className: "flex flex-col h-[100%] gap-[32px]",
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                    className: "flex justify-between",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                            className: "ml-[40px] mt-[40px]",
                            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("span", {
                                className: "text-white text-[18px]",
                                children: [
                                    indexImage,
                                    "/",
                                    images === null || images === void 0 ? void 0 : images.length
                                ]
                            })
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                            tabIndex: 0,
                            className: "p-[24px] cursor-pointer mt-[16px] mr-[16px]",
                            onClick: ()=>setImageClickedIndex(null),
                            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Icons_CrossIcon, {})
                        })
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                    className: "w-[100%] mx-[auto] px-[40px]",
                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(AppSlider_AppSlider, {
                        setIndexImage: setIndexImage,
                        children: images === null || images === void 0 ? void 0 : images.map((imagePath, index)=>{
                            return /*#__PURE__*/ (0,jsx_runtime.jsx)("img", {
                                src: "/projects/".concat(projectDirectory, "/").concat(imagePath),
                                alt: "Image ".concat(projectTitle, " - ").concat(index),
                                onClick: ()=>onImageClick(index),
                                className: "lg:max-h-[740px] max-h-[640px] w-[auto]",
                                style: {
                                    width: "auto"
                                }
                            }, "".concat(imagePath, "-").concat(index));
                        })
                    })
                })
            ]
        })
    });
};
/* harmony default export */ var ImagesSlider_ImagesSlider = (ImagesSlider);

// EXTERNAL MODULE: ./node_modules/next/head.js
var head = __webpack_require__(9008);
var head_default = /*#__PURE__*/__webpack_require__.n(head);
// EXTERNAL MODULE: ./components/Image/Image.tsx
var Image = __webpack_require__(3299);
// EXTERNAL MODULE: ./hooks/useResponsiveDetect.ts
var useResponsiveDetect = __webpack_require__(3930);
;// CONCATENATED MODULE: ./pages/[id]/details.tsx













const Details = (props)=>{
    var _currentProject_images;
    const { isDesktop  } = (0,useResponsiveDetect/* useResponsiveDetect */.Bq)();
    const [imageClickedIndex, setImageClickedIndex] = (0,react.useState)(null);
    const { projectsList  } = (0,react.useContext)(Context/* ContextApp */.g);
    const router = (0,next_router.useRouter)();
    const id = router.query.id;
    const currentProject = projectsList.find((project)=>{
        var _project_id;
        return ((_project_id = project.id) === null || _project_id === void 0 ? void 0 : _project_id.toString()) === id;
    });
    const divRef = (0,react.useRef)(null);
    const [imagesSlider, setImagesSlider] = (0,react.useState)([]);
    const mousePosRef = (0,react.useRef)({});
    const projectContainerRef = (0,react.useRef)(null);
    (0,react.useEffect)(()=>{
        if (projectContainerRef.current) {
            projectContainerRef.current.addEventListener("wheel", handleWheel);
        }
        // Clean up the event listener when the component unmounts
        return ()=>{
            var _projectContainerRef_current;
            projectContainerRef === null || projectContainerRef === void 0 ? void 0 : (_projectContainerRef_current = projectContainerRef.current) === null || _projectContainerRef_current === void 0 ? void 0 : _projectContainerRef_current.removeEventListener("wheel", handleWheel);
        };
    }, [
        projectContainerRef.current
    ]);
    (0,react.useEffect)(()=>{
        if (document) {
            if (imageClickedIndex !== null) {
                document.body.style.overflow = "hidden";
            } else {
                document.body.style.overflow = "unset"; // Enable scrolling when image is closed
            }
            // Clean up the event listener on unmount
            return ()=>{
                document.body.style.overflow = "unset";
            };
        }
    }, [
        imageClickedIndex
    ]);
    const onMouseMouve = (event)=>{
        const mousePos = {
            x: event.clientX,
            y: event.clientY
        };
        mousePosRef.current = mousePos;
    };
    const handleWheel = (event)=>{
        event.preventDefault();
        const { wheelDelta  } = event;
        if (wheelDelta > 0) {
            projectContainerRef.current.scrollLeft += 75;
        // Scroll the container horizontally
        } else {
            projectContainerRef.current.scrollLeft -= 75;
        }
    };
    const onImageClick = (index)=>{
        const tempImages = Array.from(currentProject.images);
        const tempImg = tempImages.splice(index, 1)[0];
        tempImages.unshift(tempImg);
        setImagesSlider(tempImages);
        setImageClickedIndex(index);
    };
    const onKeyPressed = (event)=>{
        if (event.keyCode == 27) {
            setImageClickedIndex(null);
        }
    };
    if (!currentProject) {
        return /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
            className: "flex self-center text-[20px]",
            children: "Erreur de num\xe9ro de projet"
        });
    }
    const { projectTitle , projectDirector , filters , projectYear , projectDuration , projectProducer , camera , photographerName , nomination , videoLink  } = currentProject;
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        tabIndex: 0,
        onKeyDown: onKeyPressed,
        ref: divRef,
        onMouseMove: onMouseMouve,
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsxs)((head_default()), {
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("title", {
                        children: [
                            "Projet - ",
                            currentProject.projectTitle
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("meta", {
                        name: "description",
                        content: "Vous trouverez les details pour le projet ".concat(currentProject.projectTitle)
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("link", {
                        rel: "canonical",
                        href: "".concat("https://realisation-handler.onrender.com", "/").concat(currentProject.id, "/details")
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("script", {
                        type: "application/ld+json"
                    })
                ]
            }),
            imageClickedIndex !== null && /*#__PURE__*/ (0,jsx_runtime.jsx)(ImagesSlider_ImagesSlider, {
                images: imagesSlider,
                projectDirectory: currentProject.projectDirectory,
                projectTitle: projectTitle,
                setImageClickedIndex: setImageClickedIndex,
                onImageClick: onImageClick,
                mousePos: mousePosRef.current
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: "flex flex-col",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("button", {
                        className: "mb-[48px]",
                        onClick: ()=>router.push("/"),
                        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("span", {
                            className: "flex text-[20px] font-bold items-center gap-2",
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsx)(Icons_BackIcon, {}),
                                " Retour"
                            ]
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                        className: "flex items-center mb-[32px]",
                        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("h1", {
                            className: "text-[29px] font-medium text-[#3A3A3A]",
                            children: [
                                projectTitle,
                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("span", {
                                    className: "italic text-[#3A3A3A] font-light",
                                    children: [
                                        " ",
                                        "de ",
                                        projectDirector
                                    ]
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                        className: "flex gap-[8px] flex-wrap mb-[40px]",
                        children: filters === null || filters === void 0 ? void 0 : filters.map((filterCode)=>{
                            const currentFilterConfig = filtersConfig/* default.find */.Z.find((filter)=>filter.code === filterCode);
                            return currentFilterConfig && /*#__PURE__*/ (0,jsx_runtime.jsx)(FilterButton/* default */.Z, {
                                label: currentFilterConfig === null || currentFilterConfig === void 0 ? void 0 : currentFilterConfig.label,
                                ariaLabel: currentFilterConfig === null || currentFilterConfig === void 0 ? void 0 : currentFilterConfig.ariaLabel,
                                disabled: true,
                                code: currentFilterConfig === null || currentFilterConfig === void 0 ? void 0 : currentFilterConfig.code
                            }, currentFilterConfig === null || currentFilterConfig === void 0 ? void 0 : currentFilterConfig.code);
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                        className: "grid-cols-2 grid gap-2 items-center mb-[40px]",
                        children: (_currentProject_images = currentProject.images) === null || _currentProject_images === void 0 ? void 0 : _currentProject_images.map((imagePath, index)=>{
                            const padding = isDesktop ? 128 : 32;
                            const numberColumn = 2;
                            const columnWidth = (document.documentElement.clientWidth - padding) / numberColumn - 8;
                            const imageRatio = parseInt(currentProject.imageWidth, 10) / columnWidth;
                            const heightImage = Math.round(parseInt(currentProject.imageHeight, 10) / imageRatio);
                            return /*#__PURE__*/ (0,jsx_runtime.jsx)(Image/* default */.Z, {
                                src: "/projects/".concat(currentProject.projectDirectory, "/").concat(imagePath),
                                alt: "Image du projet ".concat(currentProject.projectTitle, " - ").concat(index),
                                onClick: ()=>onImageClick(index),
                                width: columnWidth,
                                height: heightImage,
                                className: "cursor-zoom-in image",
                                priority: index <= 3 ? true : false
                            }, "".concat(imagePath, "-").concat(index));
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(DetailsBlock_DetailsBlock, {
                        title: projectTitle,
                        director: projectDirector,
                        filters: filters,
                        year: projectYear,
                        duration: projectDuration,
                        producer: projectProducer,
                        camera: camera,
                        photographerName: photographerName,
                        nomination: nomination,
                        videoLink: videoLink
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ var details = (Details);


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, [959,66,774,888,179], function() { return __webpack_exec__(5960); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ _N_E = __webpack_exports__;
/******/ }
]);