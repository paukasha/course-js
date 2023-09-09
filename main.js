/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles.css */ "./src/styles.css");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _redux_actions_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/redux/actions/auth */ "./src/redux/actions/auth.js");
/* harmony import */ var _pages_NotFound_NotFound__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/pages/NotFound/NotFound */ "./src/pages/NotFound/NotFound.jsx");
/* harmony import */ var _pages_MainPage_MainPage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/pages/MainPage/MainPage */ "./src/pages/MainPage/MainPage.jsx");
/* harmony import */ var _components_Layout_Layout__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @components/Layout/Layout */ "./src/components/Layout/Layout.jsx");
/* harmony import */ var _components_Spinner_Spinner__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @components/Spinner/Spinner */ "./src/components/Spinner/Spinner.jsx");
/* harmony import */ var _hoc_PrivateAuth__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./hoc/PrivateAuth */ "./src/hoc/PrivateAuth.jsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");













var ProfileContent = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.lazy(function () {
  return __webpack_require__.e(/*! import() */ "src_pages_ProfileContent_ProfileContent_jsx").then(__webpack_require__.bind(__webpack_require__, /*! @/pages/ProfileContent/ProfileContent */ "./src/pages/ProfileContent/ProfileContent.jsx"));
});
var PhotoPage = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.lazy(function () {
  return __webpack_require__.e(/*! import() */ "src_pages_PhotoPage_PhotoPage_jsx").then(__webpack_require__.bind(__webpack_require__, /*! @/pages/PhotoPage/PhotoPage */ "./src/pages/PhotoPage/PhotoPage.jsx"));
});

var App = function App() {
  var navigate = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_10__.useNavigate)(),
      dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useDispatch)();
  var accessToken = localStorage.getItem('accessToken');
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    var urlSearchParams = new URLSearchParams(window.location.search);
    var params = Object.fromEntries(urlSearchParams.entries());
    dispatch((0,_redux_actions_auth__WEBPACK_IMPORTED_MODULE_3__.auth)(params === null || params === void 0 ? void 0 : params.code, function () {
      params.toString();
      window.history.pushState({}, document.title, window.location.pathname);
      navigate('photos');
    }));
  }, []);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.Fragment, {
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_10__.Routes, {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(react_router_dom__WEBPACK_IMPORTED_MODULE_10__.Route, {
        path: "/cource-js/",
        element: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_components_Layout_Layout__WEBPACK_IMPORTED_MODULE_6__["default"], {}),
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_10__.Route, {
          index: true,
          element: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_pages_MainPage_MainPage__WEBPACK_IMPORTED_MODULE_5__["default"], {})
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_10__.Route, {
          path: "photos",
          element: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_hoc_PrivateAuth__WEBPACK_IMPORTED_MODULE_8__.PrivateAuth, {
            isAuth: accessToken,
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(react__WEBPACK_IMPORTED_MODULE_0__.Suspense, {
              fallback: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_components_Spinner_Spinner__WEBPACK_IMPORTED_MODULE_7__["default"], {}),
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(ProfileContent, {})
            })
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_10__.Route, {
          path: "photos/:photoId",
          element: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_hoc_PrivateAuth__WEBPACK_IMPORTED_MODULE_8__.PrivateAuth, {
            isAuth: accessToken,
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(react__WEBPACK_IMPORTED_MODULE_0__.Suspense, {
              fallback: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_components_Spinner_Spinner__WEBPACK_IMPORTED_MODULE_7__["default"], {}),
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(PhotoPage, {})
            })
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_10__.Route, {
          path: "*",
          element: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_pages_NotFound_NotFound__WEBPACK_IMPORTED_MODULE_4__["default"], {})
        })]
      })
    })
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (App);

/***/ }),

/***/ "./src/components/Footer/Footer.jsx":
/*!******************************************!*\
  !*** ./src/components/Footer/Footer.jsx ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _footer_m_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./footer.m.css */ "./src/components/Footer/footer.m.css");
/* harmony import */ var _images_logo_footer_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @images/logo-footer.png */ "./src/assets/images/logo-footer.png");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");






var Footer = function Footer() {
  var year = new Date().getFullYear();
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("footer", {
    className: _footer_m_css__WEBPACK_IMPORTED_MODULE_1__["default"].footer,
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
      className: _footer_m_css__WEBPACK_IMPORTED_MODULE_1__["default"].container,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
        className: _footer_m_css__WEBPACK_IMPORTED_MODULE_1__["default"].footerTop,
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
          className: _footer_m_css__WEBPACK_IMPORTED_MODULE_1__["default"].contacts,
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("span", {
            children: "\u041A\u043E\u043D\u0442\u0430\u043A\u0442\u044B"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("ul", {
            className: _footer_m_css__WEBPACK_IMPORTED_MODULE_1__["default"].contactsList,
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("li", {
              className: _footer_m_css__WEBPACK_IMPORTED_MODULE_1__["default"].listItemTel,
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("a", {
                href: "tel:+79999999999",
                children: "+7(999)-999-99-99"
              })
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("li", {
              className: _footer_m_css__WEBPACK_IMPORTED_MODULE_1__["default"].listItemMail,
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("a", {
                href: "email:test@mail.ru",
                children: "test@mail.ru"
              })
            })]
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("img", {
          src: _images_logo_footer_png__WEBPACK_IMPORTED_MODULE_2__,
          alt: _images_logo_footer_png__WEBPACK_IMPORTED_MODULE_2__
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
          className: _footer_m_css__WEBPACK_IMPORTED_MODULE_1__["default"].social,
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("span", {
            className: _footer_m_css__WEBPACK_IMPORTED_MODULE_1__["default"].inSocialText,
            children: "\u041C\u044B \u0432 \u0441\u043E\u0446\u0441\u0435\u0442\u044F\u0445"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("ul", {
            className: _footer_m_css__WEBPACK_IMPORTED_MODULE_1__["default"].socialList,
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("li", {
              className: _footer_m_css__WEBPACK_IMPORTED_MODULE_1__["default"].socialLostItem,
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("a", {
                href: "https://vk.com/",
                target: "_blank",
                className: [_footer_m_css__WEBPACK_IMPORTED_MODULE_1__["default"].link, _footer_m_css__WEBPACK_IMPORTED_MODULE_1__["default"].vk].join(' ')
              })
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("li", {
              className: _footer_m_css__WEBPACK_IMPORTED_MODULE_1__["default"].socialLostItem,
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("a", {
                href: "https://www.google.com/",
                target: "_blank",
                className: [_footer_m_css__WEBPACK_IMPORTED_MODULE_1__["default"].link, _footer_m_css__WEBPACK_IMPORTED_MODULE_1__["default"].google].join(' ')
              })
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("li", {
              className: _footer_m_css__WEBPACK_IMPORTED_MODULE_1__["default"].socialLostItem,
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("a", {
                href: "https://ok.ru/",
                target: "_blank",
                className: [_footer_m_css__WEBPACK_IMPORTED_MODULE_1__["default"].link, _footer_m_css__WEBPACK_IMPORTED_MODULE_1__["default"].ok].join(' ')
              })
            })]
          })]
        })]
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
      className: _footer_m_css__WEBPACK_IMPORTED_MODULE_1__["default"].footerBottom,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("small", {
        className: _footer_m_css__WEBPACK_IMPORTED_MODULE_1__["default"].footerCopy,
        children: ["\xA9", year, " Pavlenko Darya"]
      })
    })]
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Footer);

/***/ }),

/***/ "./src/components/Header/Header.jsx":
/*!******************************************!*\
  !*** ./src/components/Header/Header.jsx ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _header_m_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./header.m.css */ "./src/components/Header/header.m.css");
/* harmony import */ var _images_logo_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @images/logo.png */ "./src/assets/images/logo.png");
/* harmony import */ var _components_Header_Location_Location__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @components/Header/Location/Location */ "./src/components/Header/Location/Location.jsx");
/* harmony import */ var _components_Header_Signin_Signin__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @components/Header/Signin/Signin */ "./src/components/Header/Signin/Signin.jsx");
/* harmony import */ var _components_Profile_Profile__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @components/Profile/Profile */ "./src/components/Profile/Profile.jsx");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/index.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");











var Header = function Header() {
  var isAuth = (0,react_redux__WEBPACK_IMPORTED_MODULE_6__.useSelector)(function (state) {
    return state.auth.isAuth;
  });
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("div", {
    className: "container",
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("header", {
      className: _header_m_css__WEBPACK_IMPORTED_MODULE_1__["default"].header,
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_8__.Link, {
        to: "/",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("img", {
          src: _images_logo_png__WEBPACK_IMPORTED_MODULE_2__,
          className: _header_m_css__WEBPACK_IMPORTED_MODULE_1__["default"].logo,
          alt: "logo"
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("nav", {
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("ul", {
          className: _header_m_css__WEBPACK_IMPORTED_MODULE_1__["default"].list,
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("li", {
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("a", {
              className: _header_m_css__WEBPACK_IMPORTED_MODULE_1__["default"].link,
              href: "#",
              children: "\u041E \u043D\u0430\u0441"
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("li", {
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("a", {
              className: _header_m_css__WEBPACK_IMPORTED_MODULE_1__["default"].link,
              href: "#",
              children: "\u041A\u043E\u043D\u0442\u0430\u043A\u0442\u044B"
            })
          })]
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_components_Header_Location_Location__WEBPACK_IMPORTED_MODULE_3__["default"], {}), isAuth ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_components_Profile_Profile__WEBPACK_IMPORTED_MODULE_5__["default"], {}) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_components_Header_Signin_Signin__WEBPACK_IMPORTED_MODULE_4__["default"], {})]
    })
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Header);

/***/ }),

/***/ "./src/components/Header/Location/Location.jsx":
/*!*****************************************************!*\
  !*** ./src/components/Header/Location/Location.jsx ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _location_m_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./location.m.css */ "./src/components/Header/Location/location.m.css");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");






var Location = function Location() {
  var location = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector)(function (state) {
    return state.main.location;
  });
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
    className: _location_m_css__WEBPACK_IMPORTED_MODULE_1__["default"].location,
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("svg", {
      className: _location_m_css__WEBPACK_IMPORTED_MODULE_1__["default"].locationIcon,
      enableBackground: "new 0 0 512 512",
      height: "512",
      viewBox: "0 0 512 512",
      width: "512",
      xmlns: "http://www.w3.org/2000/svg",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("g", {
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("path", {
          d: "m407.579 87.677c-31.073-53.624-86.265-86.385-147.64-87.637-2.62-.054-5.257-.054-7.878 0-61.374 1.252-116.566 34.013-147.64 87.637-31.762 54.812-32.631 120.652-2.325 176.123l126.963 232.387c.057.103.114.206.173.308 5.586 9.709 15.593 15.505 26.77 15.505 11.176 0 21.183-5.797 26.768-15.505.059-.102.116-.205.173-.308l126.963-232.387c30.304-55.471 29.435-121.311-2.327-176.123zm-151.579 144.323c-39.701 0-72-32.299-72-72s32.299-72 72-72 72 32.299 72 72-32.298 72-72 72z"
        })
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("span", {
      className: _location_m_css__WEBPACK_IMPORTED_MODULE_1__["default"].cityText,
      children: location
    })]
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Location);

/***/ }),

/***/ "./src/components/Header/Signin/Signin.jsx":
/*!*************************************************!*\
  !*** ./src/components/Header/Signin/Signin.jsx ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _signin_m_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./signin.m.css */ "./src/components/Header/Signin/signin.m.css");
/* harmony import */ var _redux_actions_auth_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/redux/actions/auth.js */ "./src/redux/actions/auth.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");






var Signin = function Signin() {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
    className: _signin_m_css__WEBPACK_IMPORTED_MODULE_1__["default"].login,
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("svg", {
      className: _signin_m_css__WEBPACK_IMPORTED_MODULE_1__["default"].loginIcon,
      height: "512pt",
      viewBox: "0 0 512 512",
      width: "512pt",
      xmlns: "http://www.w3.org/2000/svg",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("path", {
        d: "m403.777344 147.917969c0-81.5625-66.359375-147.917969-147.917969-147.917969-81.5625 0-147.917969 66.355469-147.917969 147.917969 0 50.519531 25.464844 95.199219 64.222656 121.894531-36.1875 12.488281-69.359374 33.117188-97.226562 60.984375-48.324219 48.324219-74.9375 112.578125-74.9375 180.917969h39.976562c0-119.035156 96.84375-215.878906 215.882813-215.878906 81.558594 0 147.917969-66.355469 147.917969-147.917969zm-147.917969 107.941406c-59.519531 0-107.941406-48.421875-107.941406-107.941406s48.421875-107.941407 107.941406-107.941407c59.515625 0 107.9375 48.421876 107.9375 107.941407s-48.421875 107.941406-107.9375 107.941406zm256.140625 111.9375-94.089844 94.089844-28.269531-28.269531 46.832031-46.832032h-34.671875c-47.898437 0-86.902343 38.972656-86.941406 86.871094l-.035156 38.074219-39.976563-.03125.03125-38.078125c.058594-69.925782 56.996094-126.816406 126.921875-126.816406h32.671875l-44.832031-44.832032 28.269531-28.265625zm0 0"
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("a", {
      className: _signin_m_css__WEBPACK_IMPORTED_MODULE_1__["default"].loginSignin,
      href: _redux_actions_auth_js__WEBPACK_IMPORTED_MODULE_2__.unsplashAuthLink,
      children: "\u0412\u043E\u0439\u0442\u0438"
    })]
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Signin);

/***/ }),

/***/ "./src/components/Layout/Layout.jsx":
/*!******************************************!*\
  !*** ./src/components/Layout/Layout.jsx ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/index.js");
/* harmony import */ var _components_Header_Header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @components/Header/Header */ "./src/components/Header/Header.jsx");
/* harmony import */ var _components_Footer_Footer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @components/Footer/Footer */ "./src/components/Footer/Footer.jsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");








var Layout = function Layout() {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components_Header_Header__WEBPACK_IMPORTED_MODULE_1__["default"], {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("main", {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_4__.Outlet, {})
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components_Footer_Footer__WEBPACK_IMPORTED_MODULE_2__["default"], {})]
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Layout);

/***/ }),

/***/ "./src/components/Profile/Profile.jsx":
/*!********************************************!*\
  !*** ./src/components/Profile/Profile.jsx ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _profile_m_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./profile.m.css */ "./src/components/Profile/profile.m.css");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _redux_reducers_auth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/redux/reducers/auth */ "./src/redux/reducers/auth.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/index.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");









var Profile = function Profile() {
  var _user$profile_image;

  var user = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.useSelector)(function (state) {
    return state.auth.currentUser;
  }),
      dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.useDispatch)(),
      navigate = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_6__.useNavigate)();

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false),
      _useState2 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState, 2),
      isProfileBtnsShow = _useState2[0],
      setProfileBtnsShow = _useState2[1],
      userProfileRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);

  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {
    var handleClickOutside = function handleClickOutside(event) {
      if (userProfileRef.current && !userProfileRef.current.contains(event.target)) {
        setProfileBtnsShow(false);
      }
    };

    document.addEventListener('click', handleClickOutside, true);
    return function () {
      document.removeEventListener('click', handleClickOutside, true);
    };
  }, [isProfileBtnsShow]);

  var showExitBtn = function showExitBtn() {
    setProfileBtnsShow(!isProfileBtnsShow);
  };

  var goToProfile = function goToProfile(e) {
    e.stopPropagation();
    setProfileBtnsShow(false);
    navigate('photos');
  };

  var goOut = function goOut() {
    dispatch((0,_redux_reducers_auth__WEBPACK_IMPORTED_MODULE_4__.logout)());
    navigate('/');
  };

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
    className: _profile_m_css__WEBPACK_IMPORTED_MODULE_2__["default"].userProfile,
    ref: userProfileRef,
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
      className: _profile_m_css__WEBPACK_IMPORTED_MODULE_2__["default"].userBaseInfo,
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("span", {
        children: user.first_name
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
        className: _profile_m_css__WEBPACK_IMPORTED_MODULE_2__["default"].profileImage,
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("img", {
          src: (_user$profile_image = user.profile_image) === null || _user$profile_image === void 0 ? void 0 : _user$profile_image.small,
          alt: "user photo",
          onClick: showExitBtn
        })
      })]
    }), isProfileBtnsShow && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
      className: _profile_m_css__WEBPACK_IMPORTED_MODULE_2__["default"].profileBtns,
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("button", {
        type: "button",
        className: _profile_m_css__WEBPACK_IMPORTED_MODULE_2__["default"].profileBtn + ' ' + 'btn-reset',
        onClick: goToProfile,
        children: "\u041F\u0440\u043E\u0444\u0438\u043B\u044C"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("button", {
        type: "button",
        className: _profile_m_css__WEBPACK_IMPORTED_MODULE_2__["default"].logoutBtn + ' ' + 'btn-reset',
        onClick: function onClick() {
          return goOut();
        },
        children: ["\u0412\u044B\u0439\u0442\u0438", ' ']
      })]
    })]
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Profile);

/***/ }),

/***/ "./src/components/Spinner/Spinner.jsx":
/*!********************************************!*\
  !*** ./src/components/Spinner/Spinner.jsx ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _spinner_m_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./spinner.m.css */ "./src/components/Spinner/spinner.m.css");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");





var Spinner = function Spinner() {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
    className: "loaderWrapper",
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
      className: _spinner_m_css__WEBPACK_IMPORTED_MODULE_1__["default"].loader + ' ' + _spinner_m_css__WEBPACK_IMPORTED_MODULE_1__["default"].loader2,
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("svg", {
        className: _spinner_m_css__WEBPACK_IMPORTED_MODULE_1__["default"].loaderStar,
        version: "1.1",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("polygon", {
          points: "29.8 0.3 22.8 21.8 0 21.8 18.5 35.2 11.5 56.7 29.8 43.4 48.2 56.7 41.2 35.1 59.6 21.8 36.8 21.8 ",
          fill: "#662d91"
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
        className: _spinner_m_css__WEBPACK_IMPORTED_MODULE_1__["default"].loaderCircles
      })]
    })
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Spinner);

/***/ }),

/***/ "./src/helpers/preloadAsBlob.js":
/*!**************************************!*\
  !*** ./src/helpers/preloadAsBlob.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "preloadAsBlob": () => (/* binding */ preloadAsBlob)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);


function preloadAsBlob(_x) {
  return _preloadAsBlob.apply(this, arguments);
}

function _preloadAsBlob() {
  _preloadAsBlob = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee(url) {
    var response, blob, reader, promise;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            if (url) {
              _context.next = 2;
              break;
            }

            return _context.abrupt("return", new Promise(function (resolve) {
              resolve('');
            }));

          case 2:
            _context.next = 4;
            return fetch(url);

          case 4:
            response = _context.sent;
            _context.next = 7;
            return response.blob();

          case 7:
            blob = _context.sent;
            reader = new FileReader();
            reader.readAsDataURL(blob);
            promise = new Promise(function (resolve) {
              return reader.onload = function () {
                resolve(reader.result);
              };
            });
            return _context.abrupt("return", promise);

          case 12:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _preloadAsBlob.apply(this, arguments);
}

/***/ }),

/***/ "./src/hoc/PrivateAuth.jsx":
/*!*********************************!*\
  !*** ./src/hoc/PrivateAuth.jsx ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PrivateAuth": () => (/* binding */ PrivateAuth)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/index.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");




var PrivateAuth = function PrivateAuth(_ref) {
  var children = _ref.children,
      isAuth = _ref.isAuth;

  if (!isAuth) {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_2__.Navigate, {
      to: "/"
    });
  }

  return children;
};



/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app */ "./src/app.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _redux_reducers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./redux/reducers */ "./src/redux/reducers/index.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* module decorator */ module = __webpack_require__.hmd(module);







(0,react_dom__WEBPACK_IMPORTED_MODULE_2__.render)( /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(react_redux__WEBPACK_IMPORTED_MODULE_3__.Provider, {
  store: _redux_reducers__WEBPACK_IMPORTED_MODULE_4__.store,
  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_6__.HashRouter, {
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_app__WEBPACK_IMPORTED_MODULE_0__["default"], {})
  })
}), document.getElementById('root'));
var devMode = "development" === 'development';

if (devMode && module && module.hot) {
  module.hot.accept();
}

/***/ }),

/***/ "./src/pages/MainPage/MainPage.jsx":
/*!*****************************************!*\
  !*** ./src/pages/MainPage/MainPage.jsx ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _mainPage_m_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mainPage.m.css */ "./src/pages/MainPage/mainPage.m.css");
/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! swiper */ "./node_modules/swiper/esm/components/core/core-class.js");
/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! swiper */ "./node_modules/swiper/esm/components/pagination/pagination.js");
/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! swiper */ "./node_modules/swiper/esm/components/navigation/navigation.js");
/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! swiper */ "./node_modules/swiper/esm/components/a11y/a11y.js");
/* harmony import */ var swiper_react__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! swiper/react */ "./node_modules/swiper/esm/react/swiper.js");
/* harmony import */ var swiper_react__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! swiper/react */ "./node_modules/swiper/esm/react/swiper-slide.js");
/* harmony import */ var _import_swiper_swiper_bundle_min_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @import/swiper/swiper-bundle.min.css */ "./node_modules/swiper/swiper-bundle.min.css");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/index.js");
/* harmony import */ var _redux_actions_auth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/redux/actions/auth */ "./src/redux/actions/auth.js");
/* harmony import */ var _components_Spinner_Spinner__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @components/Spinner/Spinner */ "./src/components/Spinner/Spinner.jsx");
/* harmony import */ var _redux_actions_main__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/redux/actions/main */ "./src/redux/actions/main.js");
/* harmony import */ var _redux_actions_photos__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/redux/actions/photos */ "./src/redux/actions/photos.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");













swiper__WEBPACK_IMPORTED_MODULE_9__["default"].use([swiper__WEBPACK_IMPORTED_MODULE_10__["default"], swiper__WEBPACK_IMPORTED_MODULE_11__["default"], swiper__WEBPACK_IMPORTED_MODULE_12__["default"]]);

var MainPage = function MainPage() {
  var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.useDispatch)();
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    dispatch((0,_redux_actions_main__WEBPACK_IMPORTED_MODULE_6__.getLocation)());
    dispatch((0,_redux_actions_photos__WEBPACK_IMPORTED_MODULE_7__.getPhotos)(1, true));
  }, []);
  var photos = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.useSelector)(function (state) {
    return state.photos.content.slice(0, 9);
  }),
      isAuth = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.useSelector)(function (state) {
    return state.auth.isAuth;
  }),
      isLoading = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.useSelector)(function (state) {
    return state.photos.isLoading;
  });
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("section", {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div", {
      className: _mainPage_m_css__WEBPACK_IMPORTED_MODULE_1__["default"].photosContainer,
      style: {
        height: isLoading ? '100px' : '544px'
      },
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div", {
        className: _mainPage_m_css__WEBPACK_IMPORTED_MODULE_1__["default"].mainContainer,
        children: isLoading ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_components_Spinner_Spinner__WEBPACK_IMPORTED_MODULE_5__["default"], {}) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(swiper_react__WEBPACK_IMPORTED_MODULE_13__.Swiper, {
          pagination: {
            clickable: true,
            dynamicBullets: true,
            dynamicMainBullets: 4
          },
          spaceBetween: 30,
          navigation: true,
          slidesPerView: 1,
          children: photos.map(function (el) {
            return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(swiper_react__WEBPACK_IMPORTED_MODULE_14__.SwiperSlide, {
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("img", {
                src: el.urls.full,
                alt: ""
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("span", {
                className: _mainPage_m_css__WEBPACK_IMPORTED_MODULE_1__["default"].mainTitle,
                children: "\u041F\u0440\u0438\u043B\u043E\u0436\u0435\u043D\u0438\u0435 \u0434\u043B\u044F\xA0\u043F\u0440\u043E\u0441\u043C\u043E\u0442\u0440\u0430 \u0444\u043E\u0442\u043E\u0433\u0440\u0430\u0444\u0438\u0439"
              })]
            }, el.id);
          })
        })
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
      className: "container",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
        className: _mainPage_m_css__WEBPACK_IMPORTED_MODULE_1__["default"].aboutContainer,
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
          className: _mainPage_m_css__WEBPACK_IMPORTED_MODULE_1__["default"].about,
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("h2", {
            className: _mainPage_m_css__WEBPACK_IMPORTED_MODULE_1__["default"].aboutTitle,
            children: "O \u043D\u0430\u0441"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("span", {
            className: _mainPage_m_css__WEBPACK_IMPORTED_MODULE_1__["default"].aboutTitleText,
            children: "\u041F\u0440\u0438\u043B\u043E\u0436\u0435\u043D\u0438\u0435 \u0434\u043B\u044F \u043F\u0440\u043E\u0441\u043C\u043E\u0442\u0440\u0430 \u0444\u043E\u0442\u043E\u0433\u0440\u0430\u0444\u0438\u0439"
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
          className: _mainPage_m_css__WEBPACK_IMPORTED_MODULE_1__["default"].dosmth,
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("h3", {
            className: _mainPage_m_css__WEBPACK_IMPORTED_MODULE_1__["default"].dosmthTitle,
            children: "\u0412 \u044D\u0442\u043E\u043C \u043F\u0440\u0438\u043B\u043E\u0436\u0435\u043D\u0438\u0438 \u0432\u044B \u043C\u043E\u0436\u0435\u0442\u0435:"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("ul", {
            className: _mainPage_m_css__WEBPACK_IMPORTED_MODULE_1__["default"].dosmthList,
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("li", {
              className: _mainPage_m_css__WEBPACK_IMPORTED_MODULE_1__["default"].dosmthItem,
              children: ["\u041F\u043E\u0441\u043C\u043E\u0442\u0440\u0435\u0442\u044C \u0444\u043E\u0442\u043E\u0433\u0440\u0430\u0444\u0438\u0438 \u0441 \u0441\u0430\u0439\u0442\u0430", ' ', /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("a", {
                href: "https://unsplash.com/",
                className: _mainPage_m_css__WEBPACK_IMPORTED_MODULE_1__["default"].unsplashLink,
                children: "unsplash.com"
              }), "."]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("li", {
              className: _mainPage_m_css__WEBPACK_IMPORTED_MODULE_1__["default"].dosmthItem,
              children: "\u041F\u043E\u0441\u043C\u043E\u0442\u0440\u0435\u0442\u044C \u0438\u043C\u044F \u0430\u0432\u0442\u043E\u0440\u0430 \u0438 \u0434\u0430\u0442\u0443 \u043F\u0443\u0431\u043B\u0438\u043A\u0430\u0446\u0438\u0438."
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("li", {
              className: _mainPage_m_css__WEBPACK_IMPORTED_MODULE_1__["default"].dosmthItem,
              children: "\u041F\u043E\u0441\u0442\u0430\u0432\u0438\u0442\u044C \u043B\u0430\u0439\u043A \u043F\u043E\u043D\u0440\u0430\u0432\u0438\u0432\u0448\u0435\u0439\u0441\u044F \u0444\u043E\u0442\u043E\u0433\u0440\u0430\u0444\u0438\u0438."
            })]
          })]
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
        className: _mainPage_m_css__WEBPACK_IMPORTED_MODULE_1__["default"].lookPhoto,
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("span", {
          className: _mainPage_m_css__WEBPACK_IMPORTED_MODULE_1__["default"].lookPhotoText,
          children: "\u0427\u0442\u043E\u0431\u044B \u043F\u0440\u043E\u0441\u043C\u043E\u0442\u0440\u0435\u0442\u044C \u043B\u0435\u043D\u0442\u0443 \u0444\u043E\u0442\u043E\u0433\u0440\u0430\u0444\u0438\u0439 \u043D\u0430\u0436\u043C\u0438\u0442\u0435 \xAB\u0421\u043C\u043E\u0442\u0440\u0435\u0442\u044C \u043B\u0435\u043D\u0442\u0443\xBB"
        }), isAuth ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_15__.Link, {
          to: "photos",
          className: _mainPage_m_css__WEBPACK_IMPORTED_MODULE_1__["default"].lookPhotoButton,
          children: "\u0421\u043C\u043E\u0442\u0440\u0435\u0442\u044C \u043B\u0435\u043D\u0442\u0443"
        }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("a", {
          href: _redux_actions_auth__WEBPACK_IMPORTED_MODULE_4__.unsplashAuthLink,
          className: _mainPage_m_css__WEBPACK_IMPORTED_MODULE_1__["default"].lookPhotoButton,
          children: "\u0421\u043C\u043E\u0442\u0440\u0435\u0442\u044C \u043B\u0435\u043D\u0442\u0443"
        })]
      })]
    })]
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MainPage);

/***/ }),

/***/ "./src/pages/NotFound/NotFound.jsx":
/*!*****************************************!*\
  !*** ./src/pages/NotFound/NotFound.jsx ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");



var NotFound = function NotFound() {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
    children: "page not found"
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (NotFound);

/***/ }),

/***/ "./src/redux/actions/auth.js":
/*!***********************************!*\
  !*** ./src/redux/actions/auth.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "unsplashAuthLink": () => (/* binding */ unsplashAuthLink),
/* harmony export */   "login": () => (/* binding */ login),
/* harmony export */   "auth": () => (/* binding */ auth)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _reducers_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../reducers/auth */ "./src/redux/reducers/auth.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var dotenv__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! dotenv */ "./node_modules/dotenv/lib/main.js");
/* harmony import */ var dotenv__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(dotenv__WEBPACK_IMPORTED_MODULE_4__);





dotenv__WEBPACK_IMPORTED_MODULE_4__.config();
var production = "development" === 'production';
var oauthUrl = 'https://unsplash.com/oauth/token',
    client_id = "avGYLy8xj-R8I3tiRSkeVZvRV0R39Ws34mZod3qn3Zo",
    client_secret = "5mvRrbXVYQDCpa7fYclguxWgFypVpz5ByKxI4CMAHoA",
    redirect_uri = production ? 'https://paukasha.github.io/course-js/' : 'http://localhost:3001/',
    grant_type = 'authorization_code',
    scope = 'public+read_user+write_user+read_photos+write_photos+write_likes+write_followers+read_collections+write_collections',
    response_type = 'code';
var unsplashAuthLink = "https://unsplash.com/oauth/authorize/?client_id=".concat(client_id, "&redirect_uri=").concat(redirect_uri, "&response_type=").concat(response_type, "&scope=").concat(scope);
var login = function login() {
  var accessToken = localStorage.getItem('accessToken');
  return /*#__PURE__*/function () {
    var _ref = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee(dispatch) {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              if (!accessToken) {
                _context.next = 11;
                break;
              }

              _context.prev = 1;
              _context.next = 4;
              return axios__WEBPACK_IMPORTED_MODULE_3___default().get('https://api.unsplash.com/me', {
                headers: {
                  Authorization: "Bearer ".concat(accessToken)
                }
              }).then(function (res) {
                dispatch((0,_reducers_auth__WEBPACK_IMPORTED_MODULE_2__.setUser)(res.data));
              });

            case 4:
              return _context.abrupt("return", _context.sent);

            case 7:
              _context.prev = 7;
              _context.t0 = _context["catch"](1);
              localStorage.removeItem('accessToken');
              console.log(_context.t0);

            case 11:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[1, 7]]);
    }));

    return function (_x) {
      return _ref.apply(this, arguments);
    };
  }();
};
var auth = function auth(codeSearchParam, cback) {
  var accessToken = localStorage.getItem('accessToken');
  return /*#__PURE__*/function () {
    var _ref2 = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee2(dispatch) {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              if (!codeSearchParam) {
                _context2.next = 13;
                break;
              }

              _context2.prev = 1;
              _context2.next = 4;
              return axios__WEBPACK_IMPORTED_MODULE_3___default().post(oauthUrl, null, {
                params: {
                  client_id: client_id,
                  client_secret: client_secret,
                  redirect_uri: redirect_uri,
                  code: codeSearchParam,
                  grant_type: grant_type
                }
              }).then(function (response) {
                localStorage.setItem('accessToken', response.data.access_token);
                return axios__WEBPACK_IMPORTED_MODULE_3___default().get('https://api.unsplash.com/me', {
                  headers: {
                    Authorization: "Bearer ".concat(localStorage.getItem('accessToken'))
                  }
                }).then(function (response) {
                  dispatch((0,_reducers_auth__WEBPACK_IMPORTED_MODULE_2__.setUser)(response.data));
                  cback();
                });
              });

            case 4:
              return _context2.abrupt("return", _context2.sent);

            case 7:
              _context2.prev = 7;
              _context2.t0 = _context2["catch"](1);
              localStorage.removeItem('accessToken');
              console.log(_context2.t0);

            case 11:
              _context2.next = 14;
              break;

            case 13:
              if (accessToken) {
                dispatch(login());
              }

            case 14:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, null, [[1, 7]]);
    }));

    return function (_x2) {
      return _ref2.apply(this, arguments);
    };
  }();
};

/***/ }),

/***/ "./src/redux/actions/main.js":
/*!***********************************!*\
  !*** ./src/redux/actions/main.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getLocation": () => (/* binding */ getLocation)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _reducers_main__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../reducers/main */ "./src/redux/reducers/main.js");




var getLocation = function getLocation() {
  var url = 'https://ipinfo.io?token=e2f6ce2220f5e9';
  return /*#__PURE__*/function () {
    var _ref = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee(dispatch) {
      var res;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              _context.next = 3;
              return axios__WEBPACK_IMPORTED_MODULE_2___default().get(url);

            case 3:
              res = _context.sent;
              dispatch((0,_reducers_main__WEBPACK_IMPORTED_MODULE_3__.setLocation)(res.data.city));
              _context.next = 10;
              break;

            case 7:
              _context.prev = 7;
              _context.t0 = _context["catch"](0);
              console.log(_context.t0);

            case 10:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[0, 7]]);
    }));

    return function (_x) {
      return _ref.apply(this, arguments);
    };
  }();
};

/***/ }),

/***/ "./src/redux/actions/photos.js":
/*!*************************************!*\
  !*** ./src/redux/actions/photos.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "setOrDeleteLikeByUser": () => (/* binding */ setOrDeleteLikeByUser),
/* harmony export */   "getCurrentPhoto": () => (/* binding */ getCurrentPhoto),
/* harmony export */   "getPhotos": () => (/* binding */ getPhotos)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _reducers_photos__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../reducers/photos */ "./src/redux/reducers/photos.js");
/* harmony import */ var _reducers_auth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../reducers/auth */ "./src/redux/reducers/auth.js");
/* harmony import */ var _helpers_preloadAsBlob__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/helpers/preloadAsBlob */ "./src/helpers/preloadAsBlob.js");






var setOrDeleteLikeByUser = function setOrDeleteLikeByUser(photo) {
  var accessToken = localStorage.getItem('accessToken');
  return /*#__PURE__*/function () {
    var _ref = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee(dispatch) {
      var res, _res;

      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;

              if (!(photo.liked_by_user == false)) {
                _context.next = 9;
                break;
              }

              _context.next = 4;
              return axios__WEBPACK_IMPORTED_MODULE_2___default().post("https://api.unsplash.com/photos/".concat(photo.id, "/like/"), null, {
                headers: {
                  Authorization: "Bearer ".concat(accessToken)
                }
              });

            case 4:
              res = _context.sent;
              dispatch((0,_reducers_photos__WEBPACK_IMPORTED_MODULE_3__.setOrDeleteLike)(res.data.photo));
              dispatch((0,_reducers_photos__WEBPACK_IMPORTED_MODULE_3__.setCurrentPhoto)(res.data.photo));
              _context.next = 14;
              break;

            case 9:
              _context.next = 11;
              return axios__WEBPACK_IMPORTED_MODULE_2___default()["delete"]("https://api.unsplash.com/photos/".concat(photo.id, "/like/"), {
                headers: {
                  Authorization: "Bearer ".concat(accessToken)
                }
              });

            case 11:
              _res = _context.sent;
              dispatch((0,_reducers_photos__WEBPACK_IMPORTED_MODULE_3__.setOrDeleteLike)(_res.data.photo));
              dispatch((0,_reducers_photos__WEBPACK_IMPORTED_MODULE_3__.setCurrentPhoto)(_res.data.photo));

            case 14:
              _context.next = 19;
              break;

            case 16:
              _context.prev = 16;
              _context.t0 = _context["catch"](0);
              console.log(_context.t0);

            case 19:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[0, 16]]);
    }));

    return function (_x) {
      return _ref.apply(this, arguments);
    };
  }();
};
var getCurrentPhoto = function getCurrentPhoto(id) {
  var accessToken = localStorage.getItem('accessToken');
  return /*#__PURE__*/function () {
    var _ref2 = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee3(dispatch) {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              _context3.prev = 0;
              _context3.next = 3;
              return axios__WEBPACK_IMPORTED_MODULE_2___default().get("https://api.unsplash.com/photos/".concat(id), {
                headers: {
                  Authorization: "Bearer ".concat(accessToken)
                }
              }).then( /*#__PURE__*/function () {
                var _ref3 = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee2(res) {
                  var currentPhoto, result;
                  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee2$(_context2) {
                    while (1) {
                      switch (_context2.prev = _context2.next) {
                        case 0:
                          currentPhoto = res.data;
                          _context2.next = 3;
                          return (0,_helpers_preloadAsBlob__WEBPACK_IMPORTED_MODULE_5__.preloadAsBlob)(currentPhoto.urls.full);

                        case 3:
                          result = _context2.sent;
                          currentPhoto.urls.full = result;
                          return _context2.abrupt("return", dispatch((0,_reducers_photos__WEBPACK_IMPORTED_MODULE_3__.setCurrentPhoto)(currentPhoto)));

                        case 6:
                        case "end":
                          return _context2.stop();
                      }
                    }
                  }, _callee2);
                }));

                return function (_x3) {
                  return _ref3.apply(this, arguments);
                };
              }());

            case 3:
              return _context3.abrupt("return", _context3.sent);

            case 6:
              _context3.prev = 6;
              _context3.t0 = _context3["catch"](0);
              console.log(_context3.t0);

            case 9:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3, null, [[0, 6]]);
    }));

    return function (_x2) {
      return _ref2.apply(this, arguments);
    };
  }();
};
var getPhotos = function getPhotos(currentPage, isLoading) {
  return /*#__PURE__*/function () {
    var _ref4 = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee6(dispatch) {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee6$(_context6) {
        while (1) {
          switch (_context6.prev = _context6.next) {
            case 0:
              if (isLoading) {
                axios__WEBPACK_IMPORTED_MODULE_2___default().get("https://api.unsplash.com/photos/?page=".concat(currentPage, "&per_page=10"), {
                  headers: {
                    Authorization: "Client-ID avGYLy8xj-R8I3tiRSkeVZvRV0R39Ws34mZod3qn3Zo"
                  }
                }).then( /*#__PURE__*/function () {
                  var _ref5 = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee5(res) {
                    var photos, asyncArray, result;
                    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee5$(_context5) {
                      while (1) {
                        switch (_context5.prev = _context5.next) {
                          case 0:
                            photos = res.data;
                            asyncArray = photos.map(function (el) {
                              return /*#__PURE__*/(0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee4() {
                                var result, image;
                                return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee4$(_context4) {
                                  while (1) {
                                    switch (_context4.prev = _context4.next) {
                                      case 0:
                                        _context4.next = 2;
                                        return (0,_helpers_preloadAsBlob__WEBPACK_IMPORTED_MODULE_5__.preloadAsBlob)(el.urls.full);

                                      case 2:
                                        result = _context4.sent;
                                        image = new Image();
                                        image.src = result;
                                        return _context4.abrupt("return", image.src);

                                      case 6:
                                      case "end":
                                        return _context4.stop();
                                    }
                                  }
                                }, _callee4);
                              }));
                            });
                            _context5.next = 4;
                            return Promise.all(asyncArray.map(function (fn) {
                              return fn();
                            }));

                          case 4:
                            result = _context5.sent;
                            photos = photos.map(function (el, index) {
                              el.urls.small = result[index];
                              return el;
                            });
                            currentPage += 1;
                            dispatch((0,_reducers_photos__WEBPACK_IMPORTED_MODULE_3__.setPhotos)(photos, currentPage, res.headers['x-total']));

                          case 8:
                          case "end":
                            return _context5.stop();
                        }
                      }
                    }, _callee5);
                  }));

                  return function (_x5) {
                    return _ref5.apply(this, arguments);
                  };
                }())["catch"](function (e) {
                  console.log(e);
                })["finally"](function () {
                  (0,_reducers_auth__WEBPACK_IMPORTED_MODULE_4__.setIsLoading)(false);
                });
              }

            case 1:
            case "end":
              return _context6.stop();
          }
        }
      }, _callee6);
    }));

    return function (_x4) {
      return _ref4.apply(this, arguments);
    };
  }();
};

/***/ }),

/***/ "./src/redux/reducers/auth.js":
/*!************************************!*\
  !*** ./src/redux/reducers/auth.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ auth),
/* harmony export */   "setUser": () => (/* binding */ setUser),
/* harmony export */   "logout": () => (/* binding */ logout),
/* harmony export */   "setIsLoading": () => (/* binding */ setIsLoading)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

var LOGIN = 'LOGIN',
    LOGOUT = 'LOGOUT',
    IS_LOADING = 'IS_LOADING';
var defaultState = {
  currentUser: null,
  isAuth: false,
  isLoading: true
};
function auth() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case LOGIN:
      {
        return _objectSpread(_objectSpread({}, state), {}, {
          currentUser: action.payload,
          isAuth: true
        });
      }

    case LOGOUT:
      localStorage.removeItem('accessToken');
      return _objectSpread(_objectSpread({}, state), {}, {
        currentUser: {},
        isAuth: false,
        isLoading: false
      });

    case IS_LOADING:
      return _objectSpread(_objectSpread({}, state), {}, {
        isLoading: action.payload
      });

    default:
      return state;
  }
}
var setUser = function setUser(user) {
  return {
    type: LOGIN,
    payload: user
  };
};
var logout = function logout() {
  return {
    type: LOGOUT
  };
};
var setIsLoading = function setIsLoading(bool) {
  return {
    type: IS_LOADING,
    payload: bool
  };
};

/***/ }),

/***/ "./src/redux/reducers/index.js":
/*!*************************************!*\
  !*** ./src/redux/reducers/index.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "store": () => (/* binding */ store)
/* harmony export */ });
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var _auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./auth */ "./src/redux/reducers/auth.js");
/* harmony import */ var _redux_devtools_extension__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @redux-devtools/extension */ "./node_modules/@redux-devtools/extension/lib/esm/index.js");
/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! redux-thunk */ "./node_modules/redux-thunk/es/index.js");
/* harmony import */ var _main__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./main */ "./src/redux/reducers/main.js");
/* harmony import */ var _photos__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./photos */ "./src/redux/reducers/photos.js");






var rootReducer = (0,redux__WEBPACK_IMPORTED_MODULE_3__.combineReducers)({
  auth: _auth__WEBPACK_IMPORTED_MODULE_0__["default"],
  main: _main__WEBPACK_IMPORTED_MODULE_1__["default"],
  photos: _photos__WEBPACK_IMPORTED_MODULE_2__["default"]
});
var store = (0,redux__WEBPACK_IMPORTED_MODULE_3__.createStore)(rootReducer, (0,_redux_devtools_extension__WEBPACK_IMPORTED_MODULE_4__.composeWithDevTools)((0,redux__WEBPACK_IMPORTED_MODULE_3__.applyMiddleware)(redux_thunk__WEBPACK_IMPORTED_MODULE_5__["default"])));

/***/ }),

/***/ "./src/redux/reducers/main.js":
/*!************************************!*\
  !*** ./src/redux/reducers/main.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ main),
/* harmony export */   "setLocation": () => (/* binding */ setLocation),
/* harmony export */   "setIsLoading": () => (/* binding */ setIsLoading)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

var GET_PHOTOS = 'GET_PHOTOS',
    GET_LOCATION = 'GET_LOCATION',
    IS_LOADING = 'IS_LOADING';
var defaultState = {
  location: '',
  isLoading: true
};
function main() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case GET_LOCATION:
      return _objectSpread(_objectSpread({}, state), {}, {
        location: action.payload
      });

    case IS_LOADING:
      return _objectSpread(_objectSpread({}, state), {}, {
        isLoading: action.payload
      });

    default:
      return state;
  }
}
var setLocation = function setLocation(location) {
  return {
    type: GET_LOCATION,
    payload: location
  };
};
var setIsLoading = function setIsLoading(bool) {
  return {
    type: IS_LOADING,
    payload: bool
  };
};

/***/ }),

/***/ "./src/redux/reducers/photos.js":
/*!**************************************!*\
  !*** ./src/redux/reducers/photos.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ photos),
/* harmony export */   "setPhotos": () => (/* binding */ setPhotos),
/* harmony export */   "setOrDeleteLike": () => (/* binding */ setOrDeleteLike),
/* harmony export */   "setCurrentPhoto": () => (/* binding */ setCurrentPhoto)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

var SET_CONTENT = 'GET_CONTENT',
    SET_OR_DELETE_LIKE = 'SET_OR_DELETE_LIKE',
    SET_CURRENT_PHOTO = 'SET_CURRENT_PHOTO',
    IS_LOADING = 'IS_LOADING';
var defaultState = {
  content: [],
  photoTotalCount: 0,
  setLikeClassName: '',
  currentPhoto: '',
  currentPage: 1,
  isLoading: true
};
function photos() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case SET_CONTENT:
      return _objectSpread(_objectSpread({}, state), {}, {
        content: [].concat((0,_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(state.content), (0,_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(action.payload.content)).reduce(function (prevEl, nextEl) {
          if (!prevEl.find(function (item) {
            return item.id === nextEl.id;
          })) {
            prevEl.push(nextEl);
          }

          return prevEl;
        }, []),
        currentPage: action.payload.currentPage,
        photoTotalCount: action.payload.photoTotalCount,
        isLoading: false
      });

    case SET_OR_DELETE_LIKE:
      return _objectSpread(_objectSpread({}, state), {}, {
        content: state.content.map(function (photo) {
          if (photo.id === action.payload.id) {
            return action.payload;
          }

          return photo;
        }),
        currentPhoto: action.payload
      });

    case IS_LOADING:
      return _objectSpread(_objectSpread({}, state), {}, {
        isLoading: action.payload
      });

    case SET_CURRENT_PHOTO:
      return _objectSpread(_objectSpread({}, state), {}, {
        currentPhoto: action.payload
      });

    default:
      return state;
  }
}
var setPhotos = function setPhotos(content, currentPage, photoTotalCount) {
  return {
    type: SET_CONTENT,
    payload: {
      content: content,
      currentPage: currentPage,
      photoTotalCount: photoTotalCount
    }
  };
};
var setOrDeleteLike = function setOrDeleteLike(photo) {
  return {
    type: SET_OR_DELETE_LIKE,
    payload: photo
  };
};
var setCurrentPhoto = function setCurrentPhoto(photo) {
  return {
    type: SET_CURRENT_PHOTO,
    payload: photo
  };
};

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles.css":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles.css ***!
  \**************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! assets/fonts/Montserrat-Regular.woff */ "./src/assets/fonts/Montserrat-Regular.woff"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/images/svg/right-chevron.svg */ "./src/assets/images/svg/right-chevron.svg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "@font-face {\n  font-family: 'Montserrat', sans-serif;\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") format('woff');\n  font-weight: 400;\n  font-style: normal;\n}\n\n.container {\n  max-width: 1440px;\n  margin: 0 auto;\n  padding: 0 100px;\n}\n\n:root {\n  --color-wildsand: #f4f4f4;\n  --color-white: #fff;\n  --color-black: #000;\n  --color-eminence: #662d91;\n  --color-eucalyptus: #4fd1c5;\n  --color-gray: #858585;\n  --color-tundora: #454545;\n  --color-bright-turquoise: #00ffcb;\n  --color-background: #45454552;\n  --color-main-title: #11d9b0;\n  --color-backgr-img: rgba(48, 45, 45, 0.59);\n  --color-profile-btns-background: #625656;\n  --color-liked-by-user: #8f4cc1;\n  --color-dark-bgc: #1e1a1a59;\n}\n\nhtml {\n  box-sizing: border-box;\n}\n\n*,\n*::before,\n*::after {\n  box-sizing: inherit;\n}\n\nbody {\n  /*overflow-anchor: none;*/\n  margin: 0;\n  padding: 0;\n  font-family: 'Montserrat', sans-serif;\n  font-weight: 400;\n  font-size: 16px;\n  color: var(--color-black);\n}\n\nimg {\n  width: 100%;\n  object-fit: cover;\n}\n\na {\n  text-decoration: none;\n  color: inherit;\n}\n\nul {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n}\n\n.visually-hidden {\n  position: absolute !important;\n  clip: rect(1px 1px 1px 1px);\n  clip: rect(1px, 1px, 1px, 1px);\n  padding: 0 !important;\n  border: 0 !important;\n  height: 1px !important;\n  width: 1px !important;\n  overflow: hidden;\n}\n\n.btn-reset {\n  outline: none;\n  background-color: transparent;\n  border: none;\n  cursor: pointer;\n}\n\n.swiper-container {\n  height: 544px;\n  background-color: var(--color-background);\n}\n\n.swiper-pagination-bullet {\n  width: 8px;\n  height: 8px;\n  display: inline-block;\n  border-radius: 50%;\n  background: #000;\n  opacity: 0.2;\n}\n\n.swiper-pagination-fraction,\n.swiper-pagination-custom,\n.swiper-container-horizontal > .swiper-pagination-bullets {\n  bottom: 25px;\n}\n\n.swiper-container-horizontal > .swiper-pagination-bullets .swiper-pagination-bullet {\n  margin: 0 15px;\n}\n\n.swiper-pagination-bullet {\n  margin: 0 40px;\n  width: 6px;\n  height: 6px;\n  background: var(--color-white);\n  opacity: 0.7;\n}\n\n.swiper-pagination-bullet-active {\n  position: relative;\n  background-color: var(--color-black);\n  opacity: 1;\n}\n\n\n.swiper-pagination-bullet-active::before {\n  content: \"\";\n  position: absolute;\n  left: 50%;\n  top: 50%;\n  z-index: -1;\n  border-radius: 100%;\n  width: 20px;\n  height: 20px;\n  background-color: var(--color-white);\n  transform: translate(-50%, -50%);\n}\n\n.swiper-pagination-fraction,\n.swiper-pagination-custom,\n.swiper-container-horizontal > .swiper-pagination-bullets {\n  bottom: 25px;\n}\n\n.swiper-container-horizontal > .swiper-pagination-bullets .swiper-pagination-bullet {\n  margin: 0 15px;\n}\n\n.swiper-pagination-bullet {\n  margin: 0 40px;\n  width: 6px;\n  height: 6px;\n  background: var(--color-white);\n  opacity: 0.7;\n}\n\n\n.swiper-pagination-bullet-active {\n  position: relative;\n  background-color: var(--color-black);\n  opacity: 1;\n}\n\n.swiper-button-next,\n.swiper-button-prev {\n  display: none;\n}\n\n\n.swiper-button-next,\n.swiper-button-prev {\n  width: 40px !important;\n  height: 52px !important;\n  margin-top: 0 !important;\n\n  background-size: cover;\n  background-repeat: no-repeat;\n  opacity: 0.6;\n}\n\n.swiper-button-next {\n  right: 44px !important;\n  transform: translate(50%, -50%);\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");\n}\n\n.swiper-button-prev {\n  left: 44px !important;\n  transform: rotate(180deg) translate(50%, 50%);\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");\n}\n\n.swiper-button-next:hover,\n.swiper-button-prev:hover {\n  opacity: 1;\n}\n\n.swiper-button-next:after,\n.swiper-button-prev:after {\n  content: '' !important;\n}\n\n@media (max-width: 1024px) {\n  .container {\n    padding: 0 20px;\n  }\n}\n\n@media (min-width: 768px) {\n  .swiper-pagination {\n    display: none;\n  }\n\n  .swiper-button-next,\n  .swiper-button-prev {\n    display: flex;\n  }\n}\n\n\n@media (max-width: 576px) {\n  .swiper-container {\n    height: 100%;\n  }\n\n  .swiper-button-next,\n  .swiper-button-prev {\n    display: none !important;\n  }\n}\n\n\n", "",{"version":3,"sources":["webpack://./src/styles.css"],"names":[],"mappings":"AAAA;EACE,qCAAqC;EACrC,2DAA+D;EAC/D,gBAAgB;EAChB,kBAAkB;AACpB;;AAEA;EACE,iBAAiB;EACjB,cAAc;EACd,gBAAgB;AAClB;;AAEA;EACE,yBAAyB;EACzB,mBAAmB;EACnB,mBAAmB;EACnB,yBAAyB;EACzB,2BAA2B;EAC3B,qBAAqB;EACrB,wBAAwB;EACxB,iCAAiC;EACjC,6BAA6B;EAC7B,2BAA2B;EAC3B,0CAA0C;EAC1C,wCAAwC;EACxC,8BAA8B;EAC9B,2BAA2B;AAC7B;;AAEA;EACE,sBAAsB;AACxB;;AAEA;;;EAGE,mBAAmB;AACrB;;AAEA;EACE,yBAAyB;EACzB,SAAS;EACT,UAAU;EACV,qCAAqC;EACrC,gBAAgB;EAChB,eAAe;EACf,yBAAyB;AAC3B;;AAEA;EACE,WAAW;EACX,iBAAiB;AACnB;;AAEA;EACE,qBAAqB;EACrB,cAAc;AAChB;;AAEA;EACE,gBAAgB;EAChB,SAAS;EACT,UAAU;AACZ;;AAEA;EACE,6BAA6B;EAC7B,2BAA2B;EAC3B,8BAA8B;EAC9B,qBAAqB;EACrB,oBAAoB;EACpB,sBAAsB;EACtB,qBAAqB;EACrB,gBAAgB;AAClB;;AAEA;EACE,aAAa;EACb,6BAA6B;EAC7B,YAAY;EACZ,eAAe;AACjB;;AAEA;EACE,aAAa;EACb,yCAAyC;AAC3C;;AAEA;EACE,UAAU;EACV,WAAW;EACX,qBAAqB;EACrB,kBAAkB;EAClB,gBAAgB;EAChB,YAAY;AACd;;AAEA;;;EAGE,YAAY;AACd;;AAEA;EACE,cAAc;AAChB;;AAEA;EACE,cAAc;EACd,UAAU;EACV,WAAW;EACX,8BAA8B;EAC9B,YAAY;AACd;;AAEA;EACE,kBAAkB;EAClB,oCAAoC;EACpC,UAAU;AACZ;;;AAGA;EACE,WAAW;EACX,kBAAkB;EAClB,SAAS;EACT,QAAQ;EACR,WAAW;EACX,mBAAmB;EACnB,WAAW;EACX,YAAY;EACZ,oCAAoC;EACpC,gCAAgC;AAClC;;AAEA;;;EAGE,YAAY;AACd;;AAEA;EACE,cAAc;AAChB;;AAEA;EACE,cAAc;EACd,UAAU;EACV,WAAW;EACX,8BAA8B;EAC9B,YAAY;AACd;;;AAGA;EACE,kBAAkB;EAClB,oCAAoC;EACpC,UAAU;AACZ;;AAEA;;EAEE,aAAa;AACf;;;AAGA;;EAEE,sBAAsB;EACtB,uBAAuB;EACvB,wBAAwB;;EAExB,sBAAsB;EACtB,4BAA4B;EAC5B,YAAY;AACd;;AAEA;EACE,sBAAsB;EACtB,+BAA+B;EAC/B,yDAA4D;AAC9D;;AAEA;EACE,qBAAqB;EACrB,6CAA6C;EAC7C,yDAA4D;AAC9D;;AAEA;;EAEE,UAAU;AACZ;;AAEA;;EAEE,sBAAsB;AACxB;;AAEA;EACE;IACE,eAAe;EACjB;AACF;;AAEA;EACE;IACE,aAAa;EACf;;EAEA;;IAEE,aAAa;EACf;AACF;;;AAGA;EACE;IACE,YAAY;EACd;;EAEA;;IAEE,wBAAwB;EAC1B;AACF","sourcesContent":["@font-face {\n  font-family: 'Montserrat', sans-serif;\n  src: url('assets/fonts/Montserrat-Regular.woff') format('woff');\n  font-weight: 400;\n  font-style: normal;\n}\n\n.container {\n  max-width: 1440px;\n  margin: 0 auto;\n  padding: 0 100px;\n}\n\n:root {\n  --color-wildsand: #f4f4f4;\n  --color-white: #fff;\n  --color-black: #000;\n  --color-eminence: #662d91;\n  --color-eucalyptus: #4fd1c5;\n  --color-gray: #858585;\n  --color-tundora: #454545;\n  --color-bright-turquoise: #00ffcb;\n  --color-background: #45454552;\n  --color-main-title: #11d9b0;\n  --color-backgr-img: rgba(48, 45, 45, 0.59);\n  --color-profile-btns-background: #625656;\n  --color-liked-by-user: #8f4cc1;\n  --color-dark-bgc: #1e1a1a59;\n}\n\nhtml {\n  box-sizing: border-box;\n}\n\n*,\n*::before,\n*::after {\n  box-sizing: inherit;\n}\n\nbody {\n  /*overflow-anchor: none;*/\n  margin: 0;\n  padding: 0;\n  font-family: 'Montserrat', sans-serif;\n  font-weight: 400;\n  font-size: 16px;\n  color: var(--color-black);\n}\n\nimg {\n  width: 100%;\n  object-fit: cover;\n}\n\na {\n  text-decoration: none;\n  color: inherit;\n}\n\nul {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n}\n\n.visually-hidden {\n  position: absolute !important;\n  clip: rect(1px 1px 1px 1px);\n  clip: rect(1px, 1px, 1px, 1px);\n  padding: 0 !important;\n  border: 0 !important;\n  height: 1px !important;\n  width: 1px !important;\n  overflow: hidden;\n}\n\n.btn-reset {\n  outline: none;\n  background-color: transparent;\n  border: none;\n  cursor: pointer;\n}\n\n.swiper-container {\n  height: 544px;\n  background-color: var(--color-background);\n}\n\n.swiper-pagination-bullet {\n  width: 8px;\n  height: 8px;\n  display: inline-block;\n  border-radius: 50%;\n  background: #000;\n  opacity: 0.2;\n}\n\n.swiper-pagination-fraction,\n.swiper-pagination-custom,\n.swiper-container-horizontal > .swiper-pagination-bullets {\n  bottom: 25px;\n}\n\n.swiper-container-horizontal > .swiper-pagination-bullets .swiper-pagination-bullet {\n  margin: 0 15px;\n}\n\n.swiper-pagination-bullet {\n  margin: 0 40px;\n  width: 6px;\n  height: 6px;\n  background: var(--color-white);\n  opacity: 0.7;\n}\n\n.swiper-pagination-bullet-active {\n  position: relative;\n  background-color: var(--color-black);\n  opacity: 1;\n}\n\n\n.swiper-pagination-bullet-active::before {\n  content: \"\";\n  position: absolute;\n  left: 50%;\n  top: 50%;\n  z-index: -1;\n  border-radius: 100%;\n  width: 20px;\n  height: 20px;\n  background-color: var(--color-white);\n  transform: translate(-50%, -50%);\n}\n\n.swiper-pagination-fraction,\n.swiper-pagination-custom,\n.swiper-container-horizontal > .swiper-pagination-bullets {\n  bottom: 25px;\n}\n\n.swiper-container-horizontal > .swiper-pagination-bullets .swiper-pagination-bullet {\n  margin: 0 15px;\n}\n\n.swiper-pagination-bullet {\n  margin: 0 40px;\n  width: 6px;\n  height: 6px;\n  background: var(--color-white);\n  opacity: 0.7;\n}\n\n\n.swiper-pagination-bullet-active {\n  position: relative;\n  background-color: var(--color-black);\n  opacity: 1;\n}\n\n.swiper-button-next,\n.swiper-button-prev {\n  display: none;\n}\n\n\n.swiper-button-next,\n.swiper-button-prev {\n  width: 40px !important;\n  height: 52px !important;\n  margin-top: 0 !important;\n\n  background-size: cover;\n  background-repeat: no-repeat;\n  opacity: 0.6;\n}\n\n.swiper-button-next {\n  right: 44px !important;\n  transform: translate(50%, -50%);\n  background-image: url(./assets/images/svg/right-chevron.svg);\n}\n\n.swiper-button-prev {\n  left: 44px !important;\n  transform: rotate(180deg) translate(50%, 50%);\n  background-image: url(./assets/images/svg/right-chevron.svg);\n}\n\n.swiper-button-next:hover,\n.swiper-button-prev:hover {\n  opacity: 1;\n}\n\n.swiper-button-next:after,\n.swiper-button-prev:after {\n  content: '' !important;\n}\n\n@media (max-width: 1024px) {\n  .container {\n    padding: 0 20px;\n  }\n}\n\n@media (min-width: 768px) {\n  .swiper-pagination {\n    display: none;\n  }\n\n  .swiper-button-next,\n  .swiper-button-prev {\n    display: flex;\n  }\n}\n\n\n@media (max-width: 576px) {\n  .swiper-container {\n    height: 100%;\n  }\n\n  .swiper-button-next,\n  .swiper-button-prev {\n    display: none !important;\n  }\n}\n\n\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./src/components/Footer/footer.m.css":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./src/components/Footer/footer.m.css ***!
  \**************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../../assets/images/svg/telephone.svg */ "./src/assets/images/svg/telephone.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ../../assets/images/svg/mail.svg */ "./src/assets/images/svg/mail.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ../../assets/images/svg/vk.svg */ "./src/assets/images/svg/vk.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_3___ = new URL(/* asset import */ __webpack_require__(/*! ../../assets/images/svg/google.svg */ "./src/assets/images/svg/google.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_4___ = new URL(/* asset import */ __webpack_require__(/*! ../../assets/images/svg/ok-logo.svg */ "./src/assets/images/svg/ok-logo.svg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);
var ___CSS_LOADER_URL_REPLACEMENT_3___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_3___);
var ___CSS_LOADER_URL_REPLACEMENT_4___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_4___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".footer-m__footer--GYRdm {\n  color: var(--color-white);\n  background-color: var(--color-eminence);\n}\n\n.footer-m__footer--GYRdm span {\n  font-size: 22px;\n}\n\n.footer-m__container--wLzCC {\n  margin: 0 auto;\n  padding: 0 20px;\n  max-width: 1060px;\n}\n\n.footer-m__footerTop--NCQtC {\n  display: flex;\n  justify-content: space-between;\n  padding: 60px 0;\n}\n\n.footer-m__footerTop--NCQtC img {\n  display: block;\n  width: 100px;\n  height: 54px;\n}\n\n.footer-m__contacts--ttIeK span {\n  font-size: 22px;\n}\n\n.footer-m__contactsList--MZ05G {\n  margin-top: 20px;\n}\n\n.footer-m__contactsList--MZ05G li:not(:last-child) {\n  margin-bottom: 20px;\n}\n\n.footer-m__contactsList--MZ05G a {\n  transition: text-decoration 0.3s ease-in;\n}\n\n.footer-m__contactsList--MZ05G a:hover {\n  text-decoration: underline;\n  transition: text-decoration 0.3s ease-in;\n}\n\n.footer-m__listItemTel--Mojt3,\n.footer-m__listItemMail--bPSew {\n  position: relative;\n  padding-left: 30px;\n}\n\n.footer-m__listItemTel--Mojt3::before {\n  content: '';\n  position: absolute;\n  left: 0;\n  top: 0;\n  width: 16px;\n  height: 16px;\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n  background-position: center;\n  background-repeat: no-repeat;\n}\n\n.footer-m__listItemMail--bPSew::before {\n  content: '';\n  position: absolute;\n  left: 0;\n  top: 0;\n  width: 16px;\n  height: 16px;\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");\n  background-position: center;\n  background-repeat: no-repeat;\n}\n\n.footer-m__socialList--LQwRx {\n  display: flex;\n  justify-content: space-between;\n  margin-top: 20px;\n}\n\n.footer-m__link--Wxj8P {\n  display: block;\n  border: 1px solid var(--color-white);\n  border-radius: 100%;\n  width: 40px;\n  height: 40px;\n  background-position: center;\n  background-size: 20px 20px;\n  background-repeat: no-repeat;\n}\n\n.footer-m__link--Wxj8P:hover {\n  border: 1px solid #3b5998;\n  box-shadow: 0 0 15px var(--color-bright-turquoise);\n  transition: all 0.5s ease;\n}\n\n.footer-m__vk--R_gaH {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ");\n}\n\n.footer-m__google--hk2Ze {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_3___ + ");\n}\n\n.footer-m__ok--nZRNa {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_4___ + ");\n}\n\n.footer-m__footerBottom--vIbs5 {\n  border-top: 1px solid rgba(255, 255, 255, 0.4);\n  padding: 20px 0;\n  text-align: center;\n}\n\n@media (max-width: 576px) {\n  .footer-m__footerTop--NCQtC {\n    padding: 20px 0;\n    flex-direction: column;\n  }\n\n  .footer-m__footerTop--NCQtC img,\n  .footer-m__inSocialText--On39C {\n    display: none;\n  }\n\n  .footer-m__contacts--ttIeK {\n    margin-bottom: 20px;\n  }\n\n\n}\n", "",{"version":3,"sources":["webpack://./src/components/Footer/footer.m.css"],"names":[],"mappings":"AAAA;EACE,yBAAyB;EACzB,uCAAuC;AACzC;;AAEA;EACE,eAAe;AACjB;;AAEA;EACE,cAAc;EACd,eAAe;EACf,iBAAiB;AACnB;;AAEA;EACE,aAAa;EACb,8BAA8B;EAC9B,eAAe;AACjB;;AAEA;EACE,cAAc;EACd,YAAY;EACZ,YAAY;AACd;;AAEA;EACE,eAAe;AACjB;;AAEA;EACE,gBAAgB;AAClB;;AAEA;EACE,mBAAmB;AACrB;;AAEA;EACE,wCAAwC;AAC1C;;AAEA;EACE,0BAA0B;EAC1B,wCAAwC;AAC1C;;AAEA;;EAEE,kBAAkB;EAClB,kBAAkB;AACpB;;AAEA;EACE,WAAW;EACX,kBAAkB;EAClB,OAAO;EACP,MAAM;EACN,WAAW;EACX,YAAY;EACZ,yDAA8D;EAC9D,2BAA2B;EAC3B,4BAA4B;AAC9B;;AAEA;EACE,WAAW;EACX,kBAAkB;EAClB,OAAO;EACP,MAAM;EACN,WAAW;EACX,YAAY;EACZ,yDAAyD;EACzD,2BAA2B;EAC3B,4BAA4B;AAC9B;;AAEA;EACE,aAAa;EACb,8BAA8B;EAC9B,gBAAgB;AAClB;;AAEA;EACE,cAAc;EACd,oCAAoC;EACpC,mBAAmB;EACnB,WAAW;EACX,YAAY;EACZ,2BAA2B;EAC3B,0BAA0B;EAC1B,4BAA4B;AAC9B;;AAEA;EACE,yBAAyB;EACzB,kDAAkD;EAClD,yBAAyB;AAC3B;;AAEA;EACE,yDAAuD;AACzD;;AAEA;EACE,yDAA2D;AAC7D;;AAEA;EACE,yDAA4D;AAC9D;;AAEA;EACE,8CAA8C;EAC9C,eAAe;EACf,kBAAkB;AACpB;;AAEA;EACE;IACE,eAAe;IACf,sBAAsB;EACxB;;EAEA;;IAEE,aAAa;EACf;;EAEA;IACE,mBAAmB;EACrB;;;AAGF","sourcesContent":[".footer {\n  color: var(--color-white);\n  background-color: var(--color-eminence);\n}\n\n.footer span {\n  font-size: 22px;\n}\n\n.container {\n  margin: 0 auto;\n  padding: 0 20px;\n  max-width: 1060px;\n}\n\n.footerTop {\n  display: flex;\n  justify-content: space-between;\n  padding: 60px 0;\n}\n\n.footerTop img {\n  display: block;\n  width: 100px;\n  height: 54px;\n}\n\n.contacts span {\n  font-size: 22px;\n}\n\n.contactsList {\n  margin-top: 20px;\n}\n\n.contactsList li:not(:last-child) {\n  margin-bottom: 20px;\n}\n\n.contactsList a {\n  transition: text-decoration 0.3s ease-in;\n}\n\n.contactsList a:hover {\n  text-decoration: underline;\n  transition: text-decoration 0.3s ease-in;\n}\n\n.listItemTel,\n.listItemMail {\n  position: relative;\n  padding-left: 30px;\n}\n\n.listItemTel::before {\n  content: '';\n  position: absolute;\n  left: 0;\n  top: 0;\n  width: 16px;\n  height: 16px;\n  background-image: url('../../assets/images/svg/telephone.svg');\n  background-position: center;\n  background-repeat: no-repeat;\n}\n\n.listItemMail::before {\n  content: '';\n  position: absolute;\n  left: 0;\n  top: 0;\n  width: 16px;\n  height: 16px;\n  background-image: url('../../assets/images/svg/mail.svg');\n  background-position: center;\n  background-repeat: no-repeat;\n}\n\n.socialList {\n  display: flex;\n  justify-content: space-between;\n  margin-top: 20px;\n}\n\n.link {\n  display: block;\n  border: 1px solid var(--color-white);\n  border-radius: 100%;\n  width: 40px;\n  height: 40px;\n  background-position: center;\n  background-size: 20px 20px;\n  background-repeat: no-repeat;\n}\n\n.link:hover {\n  border: 1px solid #3b5998;\n  box-shadow: 0 0 15px var(--color-bright-turquoise);\n  transition: all 0.5s ease;\n}\n\n.vk {\n  background-image: url('../../assets/images/svg/vk.svg');\n}\n\n.google {\n  background-image: url('../../assets/images/svg/google.svg');\n}\n\n.ok {\n  background-image: url('../../assets/images/svg/ok-logo.svg');\n}\n\n.footerBottom {\n  border-top: 1px solid rgba(255, 255, 255, 0.4);\n  padding: 20px 0;\n  text-align: center;\n}\n\n@media (max-width: 576px) {\n  .footerTop {\n    padding: 20px 0;\n    flex-direction: column;\n  }\n\n  .footerTop img,\n  .inSocialText {\n    display: none;\n  }\n\n  .contacts {\n    margin-bottom: 20px;\n  }\n\n\n}\n"],"sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"footer": "footer-m__footer--GYRdm",
	"container": "footer-m__container--wLzCC",
	"footerTop": "footer-m__footerTop--NCQtC",
	"contacts": "footer-m__contacts--ttIeK",
	"contactsList": "footer-m__contactsList--MZ05G",
	"listItemTel": "footer-m__listItemTel--Mojt3",
	"listItemMail": "footer-m__listItemMail--bPSew",
	"socialList": "footer-m__socialList--LQwRx",
	"link": "footer-m__link--Wxj8P",
	"vk": "footer-m__vk--R_gaH",
	"google": "footer-m__google--hk2Ze",
	"ok": "footer-m__ok--nZRNa",
	"footerBottom": "footer-m__footerBottom--vIbs5",
	"inSocialText": "footer-m__inSocialText--On39C"
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./src/components/Header/Location/location.m.css":
/*!*************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./src/components/Header/Location/location.m.css ***!
  \*************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../../../assets/images/svg/down-arrow.svg */ "./src/assets/images/svg/down-arrow.svg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".location-m__location--UVDoP {\n  position: relative;\n  display: flex;\n  align-items: center;\n}\n\n.location-m__locationIcon--V4EOU {\n  width: 18px;\n  height: 18px;\n  fill: var(--color-eminence)\n}\n\n.location-m__locationSelect--Yb0q_ {\n  appearance: none;\n  outline: none;\n  border: none;\n  font-size: 16px;\n  color: var(--color-eminence);\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n  background-position: 90% 50%;\n  background-size: 10px 10px;\n  background-repeat: no-repeat;\n}\n\n.location-m__cityText--Z6LjN {\n  color: var(--color-eminence);\n  font-weight: bold;\n}\n", "",{"version":3,"sources":["webpack://./src/components/Header/Location/location.m.css"],"names":[],"mappings":"AAAA;EACE,kBAAkB;EAClB,aAAa;EACb,mBAAmB;AACrB;;AAEA;EACE,WAAW;EACX,YAAY;EACZ;AACF;;AAEA;EACE,gBAAgB;EAChB,aAAa;EACb,YAAY;EACZ,eAAe;EACf,4BAA4B;EAC5B,yDAAkE;EAClE,4BAA4B;EAC5B,0BAA0B;EAC1B,4BAA4B;AAC9B;;AAEA;EACE,4BAA4B;EAC5B,iBAAiB;AACnB","sourcesContent":[".location {\n  position: relative;\n  display: flex;\n  align-items: center;\n}\n\n.locationIcon {\n  width: 18px;\n  height: 18px;\n  fill: var(--color-eminence)\n}\n\n.locationSelect {\n  appearance: none;\n  outline: none;\n  border: none;\n  font-size: 16px;\n  color: var(--color-eminence);\n  background-image: url('../../../assets/images/svg/down-arrow.svg');\n  background-position: 90% 50%;\n  background-size: 10px 10px;\n  background-repeat: no-repeat;\n}\n\n.cityText {\n  color: var(--color-eminence);\n  font-weight: bold;\n}\n"],"sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"location": "location-m__location--UVDoP",
	"locationIcon": "location-m__locationIcon--V4EOU",
	"locationSelect": "location-m__locationSelect--Yb0q_",
	"cityText": "location-m__cityText--Z6LjN"
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./src/components/Header/Signin/signin.m.css":
/*!*********************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./src/components/Header/Signin/signin.m.css ***!
  \*********************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".signin-m__loginIcon--la0O4 {\n  margin-right: 5px;\n  width: 20px;\n  height: 20px;\n}\n\n.signin-m__loginSignin--CceGl {\n  font-weight: 500;\n  font-size: 20px;\n  color: var(--color-eminence);\n  cursor: pointer;\n}\n\n.signin-m__loginSignin--CceGl:hover {\n  color: var(--color-eucalyptus);\n}\n", "",{"version":3,"sources":["webpack://./src/components/Header/Signin/signin.m.css"],"names":[],"mappings":"AAAA;EACE,iBAAiB;EACjB,WAAW;EACX,YAAY;AACd;;AAEA;EACE,gBAAgB;EAChB,eAAe;EACf,4BAA4B;EAC5B,eAAe;AACjB;;AAEA;EACE,8BAA8B;AAChC","sourcesContent":[".loginIcon {\n  margin-right: 5px;\n  width: 20px;\n  height: 20px;\n}\n\n.loginSignin {\n  font-weight: 500;\n  font-size: 20px;\n  color: var(--color-eminence);\n  cursor: pointer;\n}\n\n.loginSignin:hover {\n  color: var(--color-eucalyptus);\n}\n"],"sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"loginIcon": "signin-m__loginIcon--la0O4",
	"loginSignin": "signin-m__loginSignin--CceGl"
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./src/components/Header/header.m.css":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./src/components/Header/header.m.css ***!
  \**************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".header-m__header--1beiP {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 30px 0;\n  background-color: var(--color-white);\n}\n\n.header-m__logo--Bf694 {\n  width: 100px;\n  height: 60px;\n}\n\n.header-m__list--evQfU {\n  display: flex;\n  justify-content: space-between;\n  margin-right: 200px;\n  width: 200px;\n}\n\n.header-m__link--wtW9s {\n  font-size: 20px;\n  color: var(--color-eminence);\n  text-transform: uppercase;\n  font-weight: bold;\n}\n\n.header-m__link--wtW9s:hover {\n  color: var(--color-eucalyptus);\n}\n\n\n@media (max-width: 1024px) {\n  .header-m__list--evQfU {\n    margin-right: 0;\n  }\n\n}\n\n\n@media (max-width: 576px) {\n\n  .header-m__header--1beiP {\n    padding: 10px;\n  }\n\n  .header-m__list--evQfU {\n    display: none;\n  }\n\n  .header-m__logo--Bf694 {\n    width: 50px;\n    height: 30px;\n  }\n}\n\n\n", "",{"version":3,"sources":["webpack://./src/components/Header/header.m.css"],"names":[],"mappings":"AAAA;EACE,aAAa;EACb,mBAAmB;EACnB,8BAA8B;EAC9B,eAAe;EACf,oCAAoC;AACtC;;AAEA;EACE,YAAY;EACZ,YAAY;AACd;;AAEA;EACE,aAAa;EACb,8BAA8B;EAC9B,mBAAmB;EACnB,YAAY;AACd;;AAEA;EACE,eAAe;EACf,4BAA4B;EAC5B,yBAAyB;EACzB,iBAAiB;AACnB;;AAEA;EACE,8BAA8B;AAChC;;;AAGA;EACE;IACE,eAAe;EACjB;;AAEF;;;AAGA;;EAEE;IACE,aAAa;EACf;;EAEA;IACE,aAAa;EACf;;EAEA;IACE,WAAW;IACX,YAAY;EACd;AACF","sourcesContent":[".header {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 30px 0;\n  background-color: var(--color-white);\n}\n\n.logo {\n  width: 100px;\n  height: 60px;\n}\n\n.list {\n  display: flex;\n  justify-content: space-between;\n  margin-right: 200px;\n  width: 200px;\n}\n\n.link {\n  font-size: 20px;\n  color: var(--color-eminence);\n  text-transform: uppercase;\n  font-weight: bold;\n}\n\n.link:hover {\n  color: var(--color-eucalyptus);\n}\n\n\n@media (max-width: 1024px) {\n  .list {\n    margin-right: 0;\n  }\n\n}\n\n\n@media (max-width: 576px) {\n\n  .header {\n    padding: 10px;\n  }\n\n  .list {\n    display: none;\n  }\n\n  .logo {\n    width: 50px;\n    height: 30px;\n  }\n}\n\n\n"],"sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"header": "header-m__header--1beiP",
	"logo": "header-m__logo--Bf694",
	"list": "header-m__list--evQfU",
	"link": "header-m__link--wtW9s"
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./src/components/Profile/profile.m.css":
/*!****************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./src/components/Profile/profile.m.css ***!
  \****************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".profile-m__userProfile--Oevxs {\n  position: relative;\n  border-radius: 2px;\n}\n\n.profile-m__userBaseInfo--Cg_Dp {\n  display: flex;\n  align-items: center;\n}\n\n.profile-m__profileImage--RqIbd {\n  width: 40px;\n  height: 40px;\n  border: 1px solid var(--color-gray);\n  border-radius: 100%;\n  overflow: hidden;\n  margin-left: 10px;\n}\n\n.profile-m__profileImage--RqIbd img {\n  object-fit: cover;\n}\n\n.profile-m__profileBtns--EpVdj {\n  position: absolute;\n  right: 0;\n  width: 160px;\n  margin-top: 5px;\n  display: flex;\n  flex-direction: column;\n  z-index: 5;\n  background-color: var(--color-white);\n  padding: 2px 0;\n  border: 1px solid var(--color-gray);\n  border-radius: 2px;\n  box-shadow: 0 8px 16px #00000029;\n}\n\n.profile-m__logoutBtn--Gajyg,\n.profile-m__profileBtn--t7g5E {\n  display: inline-block;\n  position: relative;\n  width: 100%;\n  padding: 10px 16px;\n  margin: 2px 0;\n  color: var(--color-gray);\n  text-align: left;\n}\n\n.profile-m__logoutBtn--Gajyg:hover,\n.profile-m__profileBtn--t7g5E:hover {\n  background-color: #f5f5f5;\n  color: #111;\n}\n", "",{"version":3,"sources":["webpack://./src/components/Profile/profile.m.css"],"names":[],"mappings":"AAAA;EACE,kBAAkB;EAClB,kBAAkB;AACpB;;AAEA;EACE,aAAa;EACb,mBAAmB;AACrB;;AAEA;EACE,WAAW;EACX,YAAY;EACZ,mCAAmC;EACnC,mBAAmB;EACnB,gBAAgB;EAChB,iBAAiB;AACnB;;AAEA;EACE,iBAAiB;AACnB;;AAEA;EACE,kBAAkB;EAClB,QAAQ;EACR,YAAY;EACZ,eAAe;EACf,aAAa;EACb,sBAAsB;EACtB,UAAU;EACV,oCAAoC;EACpC,cAAc;EACd,mCAAmC;EACnC,kBAAkB;EAClB,gCAAgC;AAClC;;AAEA;;EAEE,qBAAqB;EACrB,kBAAkB;EAClB,WAAW;EACX,kBAAkB;EAClB,aAAa;EACb,wBAAwB;EACxB,gBAAgB;AAClB;;AAEA;;EAEE,yBAAyB;EACzB,WAAW;AACb","sourcesContent":[".userProfile {\n  position: relative;\n  border-radius: 2px;\n}\n\n.userBaseInfo {\n  display: flex;\n  align-items: center;\n}\n\n.profileImage {\n  width: 40px;\n  height: 40px;\n  border: 1px solid var(--color-gray);\n  border-radius: 100%;\n  overflow: hidden;\n  margin-left: 10px;\n}\n\n.profileImage img {\n  object-fit: cover;\n}\n\n.profileBtns {\n  position: absolute;\n  right: 0;\n  width: 160px;\n  margin-top: 5px;\n  display: flex;\n  flex-direction: column;\n  z-index: 5;\n  background-color: var(--color-white);\n  padding: 2px 0;\n  border: 1px solid var(--color-gray);\n  border-radius: 2px;\n  box-shadow: 0 8px 16px #00000029;\n}\n\n.logoutBtn,\n.profileBtn {\n  display: inline-block;\n  position: relative;\n  width: 100%;\n  padding: 10px 16px;\n  margin: 2px 0;\n  color: var(--color-gray);\n  text-align: left;\n}\n\n.logoutBtn:hover,\n.profileBtn:hover {\n  background-color: #f5f5f5;\n  color: #111;\n}\n"],"sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"userProfile": "profile-m__userProfile--Oevxs",
	"userBaseInfo": "profile-m__userBaseInfo--Cg_Dp",
	"profileImage": "profile-m__profileImage--RqIbd",
	"profileBtns": "profile-m__profileBtns--EpVdj",
	"logoutBtn": "profile-m__logoutBtn--Gajyg",
	"profileBtn": "profile-m__profileBtn--t7g5E"
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./src/components/Spinner/spinner.m.css":
/*!****************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./src/components/Spinner/spinner.m.css ***!
  \****************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".loaderWrapper {\n}\n\n.spinner-m__loader--AAeto {\n  position: relative;\n  width: 60px;\n  height: 60px;\n  border-radius: 50%;\n  margin: 20px;\n  display: inline-block;\n  vertical-align: middle;\n}\n\n.loaderStar {\n  position: absolute;\n  top: calc(50% - 12px);\n}\n\n.spinner-m__loader2--obAi5 .spinner-m__loaderStar--GHpPp {\n  position: static;\n  width: 60px;\n  height: 60px;\n  -webkit-transform: scale(0.7);\n  -ms-transform: scale(0.7);\n  transform: scale(0.7);\n  -webkit-animation: spinner-m__loader-2-star--fTH7o 1s ease alternate infinite;\n  animation: spinner-m__loader-2-star--fTH7o 1s ease alternate infinite;\n}\n\n.spinner-m__loader2--obAi5 .spinner-m__loaderCircles--PDNOr {\n  width: 8px;\n  height: 8px;\n  background: var(--color-eminence);\n  border-radius: 50%;\n  position: absolute;\n  left: calc(50% - 4px);\n  top: calc(50% - 4px);\n  -webkit-transition: all 1s ease;\n  -o-transition: all 1s ease;\n  transition: all 1s ease;\n  -webkit-animation: spinner-m__loader-2-circles--JRbUP 1s ease-in-out alternate infinite;\n  animation: spinner-m__loader-2-circles--JRbUP 1s ease-in-out alternate infinite;\n}\n\n@-webkit-keyframes spinner-m__loader-2-circles--JRbUP {\n  0% {\n    -webkit-box-shadow: 0 0 0 var(--color-eminence);\n    box-shadow: 0 0 0 var(--color-eminence);\n    opacity: 1;\n    -webkit-transform: rotate(0deg);\n    transform: rotate(0deg);\n  }\n  50% {\n    -webkit-box-shadow: 24px -22px var(--color-eminence),\n    30px -15px 0 -3px var(--color-eminence),\n    31px 0px var(--color-eminence),\n    29px 9px 0 -3px var(--color-eminence),\n    24px 23px var(--color-eminence), 17px 30px 0 -3px var(--color-eminence),\n    0px 33px var(--color-eminence), -10px 28px 0 -3px var(--color-eminence),\n    -24px 22px var(--color-eminence), -29px 14px 0 -3px var(--color-eminence),\n    -31px -3px var(--color-eminence), -30px -11px 0 -3px var(--color-eminence),\n    -20px -25px var(--color-eminence),\n    -12px -30px 0 -3px var(--color-eminence),\n    5px -29px var(--color-eminence),\n    13px -25px 0 -3px var(--color-eminence);\n    box-shadow: 24px -22px var(--color-eminence), 30px -15px 0 -3px var(--color-eminence), 31px 0px var(--color-eminence), 29px 9px 0 -3px var(--color-eminence), 24px 23px var(--color-eminence), 17px 30px 0 -3px var(--color-eminence), 0px 33px var(--color-eminence), -10px 28px 0 -3px var(--color-eminence), -24px 22px var(--color-eminence), -29px 14px 0 -3px var(--color-eminence), -31px -3px var(--color-eminence), -30px -11px 0 -3px var(--color-eminence), -20px -25px var(--color-eminence), -12px -30px 0 -3px var(--color-eminence), 5px -29px var(--color-eminence), 13px -25px 0 -3px var(--color-eminence);\n    -webkit-transform: rotate(180deg);\n    transform: rotate(180deg);\n  }\n  100% {\n    opacity: 0;\n    -webkit-transform: rotate(360deg);\n    transform: rotate(360deg);\n    -webkit-box-shadow: 25px -22px var(--color-eminence),\n    15px -22px 0 -3px black,\n    31px 2px var(--color-eminence),\n    21px 2px 0 -3px black, 23px 25px var(--color-eminence),\n    13px 25px 0 -3px black, 0px 33px var(--color-eminence),\n    -10px 33px 0 -3px black, -26px 24px var(--color-eminence),\n    -19px 17px 0 -3px black, -32px 0px var(--color-eminence),\n    -23px 0px 0 -3px black, -25px -23px var(--color-eminence),\n    -16px -23px 0 -3px black, 0px -31px var(--color-eminence),\n    -2px -23px 0 -3px black;\n    box-shadow: 25px -22px var(--color-eminence),\n    15px -22px 0 -3px black, 31px 2px var(--color-eminence),\n    21px 2px 0 -3px black, 23px 25px var(--color-eminence),\n    13px 25px 0 -3px black, 0px 33px var(--color-eminence),\n    -10px 33px 0 -3px black, -26px 24px var(--color-eminence),\n    -19px 17px 0 -3px black, -32px 0px var(--color-eminence),\n    -23px 0px 0 -3px black, -25px -23px var(--color-eminence),\n    -16px -23px 0 -3px black, 0px -31px var(--color-eminence),\n    -2px -23px 0 -3px black;\n  }\n}\n\n@keyframes spinner-m__loader-2-circles--JRbUP {\n  0% {\n    -webkit-box-shadow: 0 0 0 var(--color-eminence);\n    box-shadow: 0 0 0 var(--color-eminence);\n    opacity: 1;\n    -webkit-transform: rotate(0deg);\n    transform: rotate(0deg);\n  }\n  50% {\n    -webkit-box-shadow: 24px -22px var(--color-eminence),\n    30px -15px 0 -3px var(--color-eminence),\n    31px 0px var(--color-eminence),\n    29px 9px 0 -3px var(--color-eminence),\n    24px 23px var(--color-eminence),\n    17px 30px 0 -3px var(--color-eminence),\n    0px 33px var(--color-eminence),\n    -10px 28px 0 -3px var(--color-eminence),\n    -24px 22px var(--color-eminence),\n    -29px 14px 0 -3px var(--color-eminence),\n    -31px -3px #e11a2b,\n    -30px -11px 0 -3px var(--color-eminence),\n    -20px -25px var(--color-eminence),\n    -12px -30px 0 -3px var(--color-eminence),\n    5px -29px var(--color-eminence),\n    13px -25px 0 -3px var(--color-eminence);\n    box-shadow: 24px -22px var(--color-eminence),\n    30px -15px 0 -3px var(--color-eminence),\n    31px 0px var(--color-eminence),\n    29px 9px 0 -3px var(--color-eminence),\n    24px 23px var(--color-eminence),\n    17px 30px 0 -3px var(--color-eminence),\n    0px 33px var(--color-eminence),\n    -10px 28px 0 -3px var(--color-eminence),\n    -24px 22px var(--color-eminence),\n    -29px 14px 0 -3px var(--color-eminence),\n    -31px -3px var(--color-eminence),\n    -30px -11px 0 -3px var(--color-eminence),\n    -20px -25px var(--color-eminence),\n    -12px -30px 0 -3px var(--color-eminence),\n    5px -29px var(--color-eminence),\n    13px -25px 0 -3px var(--color-eminence);\n    -webkit-transform: rotate(180deg);\n    transform: rotate(180deg);\n  }\n  100% {\n    opacity: 0;\n    -webkit-transform: rotate(360deg);\n    transform: rotate(360deg);\n    -webkit-box-shadow: 25px -22px var(--color-eminence),\n    15px -22px 0 -3px black, 31px 2px var(--color-eminence),\n    21px 2px 0 -3px black, 23px 25px var(--color-eminence),\n    13px 25px 0 -3px black, 0px 33px var(--color-eminence),\n    -10px 33px 0 -3px black, -26px 24px var(--color-eminence),\n    -19px 17px 0 -3px black, -32px 0px var(--color-eminence),\n    -23px 0px 0 -3px black, -25px -23px var(--color-eminence),\n    -16px -23px 0 -3px black, 0px -31px var(--color-eminence),\n    -2px -23px 0 -3px black;\n    box-shadow: 25px -22px var(--color-eminence),\n    15px -22px 0 -3px black, 31px 2px var(--color-eminence),\n    21px 2px 0 -3px black, 23px 25px var(--color-eminence),\n    13px 25px 0 -3px black, 0px 33px var(--color-eminence),\n    -10px 33px 0 -3px black, -26px 24px var(--color-eminence),\n    -19px 17px 0 -3px black, -32px 0px var(--color-eminence),\n    -23px 0px 0 -3px black, -25px -23px var(--color-eminence),\n    -16px -23px 0 -3px black, 0px -31px var(--color-eminence),\n    -2px -23px 0 -3px black;\n  }\n}\n\n@-webkit-keyframes spinner-m__loader-2-star--fTH7o {\n  0% {\n    -webkit-transform: scale(0) rotate(0deg);\n    transform: scale(0) rotate(0deg);\n  }\n  100% {\n    -webkit-transform: scale(0.7) rotate(360deg);\n    transform: scale(0.7) rotate(360deg);\n  }\n}\n\n@-webkit-keyframes spinner-m__dot-jump--_bZe8 {\n  0% {\n    -webkit-transform: translateY(0);\n    transform: translateY(0);\n  }\n  100% {\n    -webkit-transform: translateY(-15px);\n    transform: translateY(-15px);\n  }\n}\n\n", "",{"version":3,"sources":["webpack://./src/components/Spinner/spinner.m.css"],"names":[],"mappings":"AAAA;AACA;;AAEA;EACE,kBAAkB;EAClB,WAAW;EACX,YAAY;EACZ,kBAAkB;EAClB,YAAY;EACZ,qBAAqB;EACrB,sBAAsB;AACxB;;AAEA;EACE,kBAAkB;EAClB,qBAAqB;AACvB;;AAEA;EACE,gBAAgB;EAChB,WAAW;EACX,YAAY;EACZ,6BAA6B;EAC7B,yBAAyB;EACzB,qBAAqB;EACrB,6EAA2D;EAC3D,qEAAmD;AACrD;;AAEA;EACE,UAAU;EACV,WAAW;EACX,iCAAiC;EACjC,kBAAkB;EAClB,kBAAkB;EAClB,qBAAqB;EACrB,oBAAoB;EACpB,+BAA+B;EAC/B,0BAA0B;EAC1B,uBAAuB;EACvB,uFAAqE;EACrE,+EAA6D;AAC/D;;AAEA;EACE;IACE,+CAA+C;IAC/C,uCAAuC;IACvC,UAAU;IACV,+BAA+B;IAC/B,uBAAuB;EACzB;EACA;IACE;;;;;;;;;;;2CAWuC;IACvC,4lBAA4lB;IAC5lB,iCAAiC;IACjC,yBAAyB;EAC3B;EACA;IACE,UAAU;IACV,iCAAiC;IACjC,yBAAyB;IACzB;;;;;;;;;2BASuB;IACvB;;;;;;;;2BAQuB;EACzB;AACF;;AAEA;EACE;IACE,+CAA+C;IAC/C,uCAAuC;IACvC,UAAU;IACV,+BAA+B;IAC/B,uBAAuB;EACzB;EACA;IACE;;;;;;;;;;;;;;;2CAeuC;IACvC;;;;;;;;;;;;;;;2CAeuC;IACvC,iCAAiC;IACjC,yBAAyB;EAC3B;EACA;IACE,UAAU;IACV,iCAAiC;IACjC,yBAAyB;IACzB;;;;;;;;2BAQuB;IACvB;;;;;;;;2BAQuB;EACzB;AACF;;AAEA;EACE;IACE,wCAAwC;IACxC,gCAAgC;EAClC;EACA;IACE,4CAA4C;IAC5C,oCAAoC;EACtC;AACF;;AAEA;EACE;IACE,gCAAgC;IAChC,wBAAwB;EAC1B;EACA;IACE,oCAAoC;IACpC,4BAA4B;EAC9B;AACF","sourcesContent":[":global(.loaderWrapper) {\n}\n\n.loader {\n  position: relative;\n  width: 60px;\n  height: 60px;\n  border-radius: 50%;\n  margin: 20px;\n  display: inline-block;\n  vertical-align: middle;\n}\n\n:global(.loaderStar) {\n  position: absolute;\n  top: calc(50% - 12px);\n}\n\n.loader2 .loaderStar {\n  position: static;\n  width: 60px;\n  height: 60px;\n  -webkit-transform: scale(0.7);\n  -ms-transform: scale(0.7);\n  transform: scale(0.7);\n  -webkit-animation: loader-2-star 1s ease alternate infinite;\n  animation: loader-2-star 1s ease alternate infinite;\n}\n\n.loader2 .loaderCircles {\n  width: 8px;\n  height: 8px;\n  background: var(--color-eminence);\n  border-radius: 50%;\n  position: absolute;\n  left: calc(50% - 4px);\n  top: calc(50% - 4px);\n  -webkit-transition: all 1s ease;\n  -o-transition: all 1s ease;\n  transition: all 1s ease;\n  -webkit-animation: loader-2-circles 1s ease-in-out alternate infinite;\n  animation: loader-2-circles 1s ease-in-out alternate infinite;\n}\n\n@-webkit-keyframes loader-2-circles {\n  0% {\n    -webkit-box-shadow: 0 0 0 var(--color-eminence);\n    box-shadow: 0 0 0 var(--color-eminence);\n    opacity: 1;\n    -webkit-transform: rotate(0deg);\n    transform: rotate(0deg);\n  }\n  50% {\n    -webkit-box-shadow: 24px -22px var(--color-eminence),\n    30px -15px 0 -3px var(--color-eminence),\n    31px 0px var(--color-eminence),\n    29px 9px 0 -3px var(--color-eminence),\n    24px 23px var(--color-eminence), 17px 30px 0 -3px var(--color-eminence),\n    0px 33px var(--color-eminence), -10px 28px 0 -3px var(--color-eminence),\n    -24px 22px var(--color-eminence), -29px 14px 0 -3px var(--color-eminence),\n    -31px -3px var(--color-eminence), -30px -11px 0 -3px var(--color-eminence),\n    -20px -25px var(--color-eminence),\n    -12px -30px 0 -3px var(--color-eminence),\n    5px -29px var(--color-eminence),\n    13px -25px 0 -3px var(--color-eminence);\n    box-shadow: 24px -22px var(--color-eminence), 30px -15px 0 -3px var(--color-eminence), 31px 0px var(--color-eminence), 29px 9px 0 -3px var(--color-eminence), 24px 23px var(--color-eminence), 17px 30px 0 -3px var(--color-eminence), 0px 33px var(--color-eminence), -10px 28px 0 -3px var(--color-eminence), -24px 22px var(--color-eminence), -29px 14px 0 -3px var(--color-eminence), -31px -3px var(--color-eminence), -30px -11px 0 -3px var(--color-eminence), -20px -25px var(--color-eminence), -12px -30px 0 -3px var(--color-eminence), 5px -29px var(--color-eminence), 13px -25px 0 -3px var(--color-eminence);\n    -webkit-transform: rotate(180deg);\n    transform: rotate(180deg);\n  }\n  100% {\n    opacity: 0;\n    -webkit-transform: rotate(360deg);\n    transform: rotate(360deg);\n    -webkit-box-shadow: 25px -22px var(--color-eminence),\n    15px -22px 0 -3px black,\n    31px 2px var(--color-eminence),\n    21px 2px 0 -3px black, 23px 25px var(--color-eminence),\n    13px 25px 0 -3px black, 0px 33px var(--color-eminence),\n    -10px 33px 0 -3px black, -26px 24px var(--color-eminence),\n    -19px 17px 0 -3px black, -32px 0px var(--color-eminence),\n    -23px 0px 0 -3px black, -25px -23px var(--color-eminence),\n    -16px -23px 0 -3px black, 0px -31px var(--color-eminence),\n    -2px -23px 0 -3px black;\n    box-shadow: 25px -22px var(--color-eminence),\n    15px -22px 0 -3px black, 31px 2px var(--color-eminence),\n    21px 2px 0 -3px black, 23px 25px var(--color-eminence),\n    13px 25px 0 -3px black, 0px 33px var(--color-eminence),\n    -10px 33px 0 -3px black, -26px 24px var(--color-eminence),\n    -19px 17px 0 -3px black, -32px 0px var(--color-eminence),\n    -23px 0px 0 -3px black, -25px -23px var(--color-eminence),\n    -16px -23px 0 -3px black, 0px -31px var(--color-eminence),\n    -2px -23px 0 -3px black;\n  }\n}\n\n@keyframes loader-2-circles {\n  0% {\n    -webkit-box-shadow: 0 0 0 var(--color-eminence);\n    box-shadow: 0 0 0 var(--color-eminence);\n    opacity: 1;\n    -webkit-transform: rotate(0deg);\n    transform: rotate(0deg);\n  }\n  50% {\n    -webkit-box-shadow: 24px -22px var(--color-eminence),\n    30px -15px 0 -3px var(--color-eminence),\n    31px 0px var(--color-eminence),\n    29px 9px 0 -3px var(--color-eminence),\n    24px 23px var(--color-eminence),\n    17px 30px 0 -3px var(--color-eminence),\n    0px 33px var(--color-eminence),\n    -10px 28px 0 -3px var(--color-eminence),\n    -24px 22px var(--color-eminence),\n    -29px 14px 0 -3px var(--color-eminence),\n    -31px -3px #e11a2b,\n    -30px -11px 0 -3px var(--color-eminence),\n    -20px -25px var(--color-eminence),\n    -12px -30px 0 -3px var(--color-eminence),\n    5px -29px var(--color-eminence),\n    13px -25px 0 -3px var(--color-eminence);\n    box-shadow: 24px -22px var(--color-eminence),\n    30px -15px 0 -3px var(--color-eminence),\n    31px 0px var(--color-eminence),\n    29px 9px 0 -3px var(--color-eminence),\n    24px 23px var(--color-eminence),\n    17px 30px 0 -3px var(--color-eminence),\n    0px 33px var(--color-eminence),\n    -10px 28px 0 -3px var(--color-eminence),\n    -24px 22px var(--color-eminence),\n    -29px 14px 0 -3px var(--color-eminence),\n    -31px -3px var(--color-eminence),\n    -30px -11px 0 -3px var(--color-eminence),\n    -20px -25px var(--color-eminence),\n    -12px -30px 0 -3px var(--color-eminence),\n    5px -29px var(--color-eminence),\n    13px -25px 0 -3px var(--color-eminence);\n    -webkit-transform: rotate(180deg);\n    transform: rotate(180deg);\n  }\n  100% {\n    opacity: 0;\n    -webkit-transform: rotate(360deg);\n    transform: rotate(360deg);\n    -webkit-box-shadow: 25px -22px var(--color-eminence),\n    15px -22px 0 -3px black, 31px 2px var(--color-eminence),\n    21px 2px 0 -3px black, 23px 25px var(--color-eminence),\n    13px 25px 0 -3px black, 0px 33px var(--color-eminence),\n    -10px 33px 0 -3px black, -26px 24px var(--color-eminence),\n    -19px 17px 0 -3px black, -32px 0px var(--color-eminence),\n    -23px 0px 0 -3px black, -25px -23px var(--color-eminence),\n    -16px -23px 0 -3px black, 0px -31px var(--color-eminence),\n    -2px -23px 0 -3px black;\n    box-shadow: 25px -22px var(--color-eminence),\n    15px -22px 0 -3px black, 31px 2px var(--color-eminence),\n    21px 2px 0 -3px black, 23px 25px var(--color-eminence),\n    13px 25px 0 -3px black, 0px 33px var(--color-eminence),\n    -10px 33px 0 -3px black, -26px 24px var(--color-eminence),\n    -19px 17px 0 -3px black, -32px 0px var(--color-eminence),\n    -23px 0px 0 -3px black, -25px -23px var(--color-eminence),\n    -16px -23px 0 -3px black, 0px -31px var(--color-eminence),\n    -2px -23px 0 -3px black;\n  }\n}\n\n@-webkit-keyframes loader-2-star {\n  0% {\n    -webkit-transform: scale(0) rotate(0deg);\n    transform: scale(0) rotate(0deg);\n  }\n  100% {\n    -webkit-transform: scale(0.7) rotate(360deg);\n    transform: scale(0.7) rotate(360deg);\n  }\n}\n\n@-webkit-keyframes dot-jump {\n  0% {\n    -webkit-transform: translateY(0);\n    transform: translateY(0);\n  }\n  100% {\n    -webkit-transform: translateY(-15px);\n    transform: translateY(-15px);\n  }\n}\n\n"],"sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"loader": "spinner-m__loader--AAeto",
	"loader2": "spinner-m__loader2--obAi5",
	"loaderStar": "spinner-m__loaderStar--GHpPp",
	"loader-2-star": "spinner-m__loader-2-star--fTH7o",
	"loaderCircles": "spinner-m__loaderCircles--PDNOr",
	"loader-2-circles": "spinner-m__loader-2-circles--JRbUP",
	"dot-jump": "spinner-m__dot-jump--_bZe8"
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./src/pages/MainPage/mainPage.m.css":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./src/pages/MainPage/mainPage.m.css ***!
  \*************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../../assets/images/arrow-list.png */ "./src/assets/images/arrow-list.png"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".mainPage-m__mainscreenContainer--DhP3N {\n  width: 100%;\n  height: 544px;\n  margin-bottom: 100px;\n}\n\n\n.mainPage-m__photosContainer--_RtbJ {\n  position: relative;\n  height: 544px;\n  margin-bottom: 40px;\n}\n\n.mainPage-m__photosContainer--_RtbJ .loaderWrapper {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n}\n\n.mainPage-m__photosContainer--_RtbJ img {\n  height: 100%;\n}\n\n.mainPage-m__mainContainer--ZH1Iz {\n  position: absolute;\n  left: 0;\n  top: 0;\n  bottom: 0;\n  right: 0;\n  margin: 0;\n  padding: 0;\n  width: 100%;\n}\n\n.mainPage-m__mainTitle--QPuO8 {\n  position: absolute;\n  left: 0;\n  top: 0;\n  margin: 0;\n  padding: 142px 140px 0;\n  max-width: 539px;\n  font-weight: 600;\n  font-size: 72px;\n  line-height: 82px;\n  color: var(--color-main-title);\n  text-shadow: -1px 0 3px black, -2px -1px 2px white;\n}\n\n.mainPage-m__aboutContainer--mxifP {\n  margin-bottom: 100px;\n}\n\n\n.mainPage-m__about--TGBIX {\n  position: relative;\n  margin-bottom: 100px;\n  padding: 20px;\n}\n\n.mainPage-m__about--TGBIX::before {\n  content: '';\n  position: absolute;\n  left: 0;\n  top: 0;\n  width: 3px;\n  height: 100%;\n  background-color: var(--color-eucalyptus);\n}\n\n.mainPage-m__aboutTitle--wvN7a {\n  position: relative;\n  margin: 0;\n  margin-bottom: 20px;\n  font-weight: 600;\n  font-size: 30px;\n}\n\n.mainPage-m__aboutTitleText--FmW7d {\n  font-weight: 400;\n  font-size: 18px;\n  line-height: 28px;\n}\n\n.mainPage-m__dosmth--ekeEL {\n  padding: 0 20px;\n}\n\n.mainPage-m__dosmthTitle--sEMIF {\n  margin: 0;\n  margin-bottom: 20px;\n  font-weight: 600;\n  font-size: 22px;\n}\n\n.mainPage-m__dosmthList--VUpMO {\n  position: relative;\n  background-size: 100px 100px;\n}\n\n.mainPage-m__dosmthItem--chAdZ {\n  position: relative;\n  padding-left: 40px;\n  font-weight: 400;\n  font-size: 18px;\n}\n\n.mainPage-m__dosmthItem--chAdZ::before {\n  content: '';\n  position: absolute;\n  left: 0;\n  top: 0;\n  width: 20px;\n  height: 20px;\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n  background-position: center;\n  background-repeat: no-repeat;\n}\n\n.mainPage-m__dosmthItem--chAdZ:not(:last-child) {\n  margin-bottom: 20px;\n}\n\n.mainPage-m__unsplashLink--mgPrc {\n  color: var(--color-eminence);\n  transition: text-decoration 0.3s ease-in;\n}\n\n.mainPage-m__unsplashLink--mgPrc:hover {\n  text-decoration: underline;\n  transition: text-decoration 0.3s ease-in;\n}\n\n.mainPage-m__lookPhoto--LfByT {\n  margin-bottom: 100px;\n  text-align: center;\n}\n\n.mainPage-m__lookPhotoText--CsexC {\n  display: block;\n  margin-bottom: 50px;\n  font-size: 24px;\n}\n\n.mainPage-m__lookPhotoButton--vx7G2 {\n  position: relative;\n  margin-bottom: 20px;\n  outline: none;\n  border: 2px solid transparent;\n  border-radius: 5px;\n  padding: 16px 30px;\n  box-shadow: 6px 6px 12px rgba(79, 209, 197, 0.64);\n  font-size: 22px;\n  color: var(--color-white);\n  background: var(--color-eucalyptus);\n  transition: all 0.3s ease-in-out 0s;\n  cursor: pointer;\n}\n\n.mainPage-m__lookPhotoButton--vx7G2::before {\n  content: '';\n  position: absolute;\n  left: 50%;\n  top: 50%;\n  opacity: 0;\n  transform: translate(-50%, -50%);\n  transition: all 0.3s ease-in-out 0s;\n}\n\n.mainPage-m__lookPhotoButton--vx7G2:hover {\n  border: 2px solid var(--color-eucalyptus);\n  color: var(--color-eucalyptus);\n  background-color: var(--color-white);\n}\n\n.mainPage-m__lookPhotoButton--vx7G2::after {\n  content: '';\n  position: absolute;\n  left: 50%;\n  top: 50%;\n  z-index: -1;\n  border: 5px solid var(--color-bright-turquoise);\n  border-radius: 15px;\n  transform: translate(-50%, -50%);\n  animation: mainPage-m__ring--Hh13j 1.5s infinite;\n}\n\n.mainPage-m__lookPhotoButton--vx7G2:hover::after,\n.mainPage-m__lookPhotoButton--vx7G2:focus::after {\n  display: none;\n  animation: none;\n}\n\n@keyframes mainPage-m__ring--Hh13j {\n  0% {\n    padding: 16px 30px;\n    opacity: 1;\n  }\n\n  100% {\n    padding: 50px 150px;\n    opacity: 0;\n  }\n}\n\n@media (max-width: 576px) {\n  .mainPage-m__mainTitle--QPuO8 {\n    font-size: 32px;\n    line-height: 52px;\n    padding: 20px;\n  }\n\n  .mainPage-m__photosContainer--_RtbJ {\n    height: 320px;\n    margin-bottom: 10px;\n  }\n\n  .mainPage-m__about--TGBIX {\n    margin-bottom: 20px;\n  }\n\n  .mainPage-m__aboutTitle--wvN7a {\n    font-size: 22px;\n    margin-bottom: 10px;\n  }\n\n  .mainPage-m__aboutTitleText--FmW7d {\n    font-size: 16px;\n  }\n\n  .mainPage-m__aboutContainer--mxifP {\n    margin-bottom: 60px;\n  }\n\n  .mainPage-m__dosmthTitle--sEMIF {\n    font-size: 22px;\n  }\n\n  .mainPage-m__dosmth--ekeEL {\n    padding: 0;\n    margin-bottom: 20px;\n  }\n\n  .mainPage-m__lookPhotoText--CsexC {\n    display: none;\n  }\n\n  .mainPage-m__lookPhoto--LfByT {\n    margin-bottom: 40px;\n  }\n}\n\n\n", "",{"version":3,"sources":["webpack://./src/pages/MainPage/mainPage.m.css"],"names":[],"mappings":"AAAA;EACE,WAAW;EACX,aAAa;EACb,oBAAoB;AACtB;;;AAGA;EACE,kBAAkB;EAClB,aAAa;EACb,mBAAmB;AACrB;;AAEA;EACE,kBAAkB;EAClB,QAAQ;EACR,SAAS;EACT,gCAAgC;AAClC;;AAEA;EACE,YAAY;AACd;;AAEA;EACE,kBAAkB;EAClB,OAAO;EACP,MAAM;EACN,SAAS;EACT,QAAQ;EACR,SAAS;EACT,UAAU;EACV,WAAW;AACb;;AAEA;EACE,kBAAkB;EAClB,OAAO;EACP,MAAM;EACN,SAAS;EACT,sBAAsB;EACtB,gBAAgB;EAChB,gBAAgB;EAChB,eAAe;EACf,iBAAiB;EACjB,8BAA8B;EAC9B,kDAAkD;AACpD;;AAEA;EACE,oBAAoB;AACtB;;;AAGA;EACE,kBAAkB;EAClB,oBAAoB;EACpB,aAAa;AACf;;AAEA;EACE,WAAW;EACX,kBAAkB;EAClB,OAAO;EACP,MAAM;EACN,UAAU;EACV,YAAY;EACZ,yCAAyC;AAC3C;;AAEA;EACE,kBAAkB;EAClB,SAAS;EACT,mBAAmB;EACnB,gBAAgB;EAChB,eAAe;AACjB;;AAEA;EACE,gBAAgB;EAChB,eAAe;EACf,iBAAiB;AACnB;;AAEA;EACE,eAAe;AACjB;;AAEA;EACE,SAAS;EACT,mBAAmB;EACnB,gBAAgB;EAChB,eAAe;AACjB;;AAEA;EACE,kBAAkB;EAClB,4BAA4B;AAC9B;;AAEA;EACE,kBAAkB;EAClB,kBAAkB;EAClB,gBAAgB;EAChB,eAAe;AACjB;;AAEA;EACE,WAAW;EACX,kBAAkB;EAClB,OAAO;EACP,MAAM;EACN,WAAW;EACX,YAAY;EACZ,yDAA2D;EAC3D,2BAA2B;EAC3B,4BAA4B;AAC9B;;AAEA;EACE,mBAAmB;AACrB;;AAEA;EACE,4BAA4B;EAC5B,wCAAwC;AAC1C;;AAEA;EACE,0BAA0B;EAC1B,wCAAwC;AAC1C;;AAEA;EACE,oBAAoB;EACpB,kBAAkB;AACpB;;AAEA;EACE,cAAc;EACd,mBAAmB;EACnB,eAAe;AACjB;;AAEA;EACE,kBAAkB;EAClB,mBAAmB;EACnB,aAAa;EACb,6BAA6B;EAC7B,kBAAkB;EAClB,kBAAkB;EAClB,iDAAiD;EACjD,eAAe;EACf,yBAAyB;EACzB,mCAAmC;EACnC,mCAAmC;EACnC,eAAe;AACjB;;AAEA;EACE,WAAW;EACX,kBAAkB;EAClB,SAAS;EACT,QAAQ;EACR,UAAU;EACV,gCAAgC;EAChC,mCAAmC;AACrC;;AAEA;EACE,yCAAyC;EACzC,8BAA8B;EAC9B,oCAAoC;AACtC;;AAEA;EACE,WAAW;EACX,kBAAkB;EAClB,SAAS;EACT,QAAQ;EACR,WAAW;EACX,+CAA+C;EAC/C,mBAAmB;EACnB,gCAAgC;EAChC,gDAA6B;AAC/B;;AAEA;;EAEE,aAAa;EACb,eAAe;AACjB;;AAEA;EACE;IACE,kBAAkB;IAClB,UAAU;EACZ;;EAEA;IACE,mBAAmB;IACnB,UAAU;EACZ;AACF;;AAEA;EACE;IACE,eAAe;IACf,iBAAiB;IACjB,aAAa;EACf;;EAEA;IACE,aAAa;IACb,mBAAmB;EACrB;;EAEA;IACE,mBAAmB;EACrB;;EAEA;IACE,eAAe;IACf,mBAAmB;EACrB;;EAEA;IACE,eAAe;EACjB;;EAEA;IACE,mBAAmB;EACrB;;EAEA;IACE,eAAe;EACjB;;EAEA;IACE,UAAU;IACV,mBAAmB;EACrB;;EAEA;IACE,aAAa;EACf;;EAEA;IACE,mBAAmB;EACrB;AACF","sourcesContent":[".mainscreenContainer {\n  width: 100%;\n  height: 544px;\n  margin-bottom: 100px;\n}\n\n\n.photosContainer {\n  position: relative;\n  height: 544px;\n  margin-bottom: 40px;\n}\n\n.photosContainer :global(.loaderWrapper) {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n}\n\n.photosContainer img {\n  height: 100%;\n}\n\n.mainContainer {\n  position: absolute;\n  left: 0;\n  top: 0;\n  bottom: 0;\n  right: 0;\n  margin: 0;\n  padding: 0;\n  width: 100%;\n}\n\n.mainTitle {\n  position: absolute;\n  left: 0;\n  top: 0;\n  margin: 0;\n  padding: 142px 140px 0;\n  max-width: 539px;\n  font-weight: 600;\n  font-size: 72px;\n  line-height: 82px;\n  color: var(--color-main-title);\n  text-shadow: -1px 0 3px black, -2px -1px 2px white;\n}\n\n.aboutContainer {\n  margin-bottom: 100px;\n}\n\n\n.about {\n  position: relative;\n  margin-bottom: 100px;\n  padding: 20px;\n}\n\n.about::before {\n  content: '';\n  position: absolute;\n  left: 0;\n  top: 0;\n  width: 3px;\n  height: 100%;\n  background-color: var(--color-eucalyptus);\n}\n\n.aboutTitle {\n  position: relative;\n  margin: 0;\n  margin-bottom: 20px;\n  font-weight: 600;\n  font-size: 30px;\n}\n\n.aboutTitleText {\n  font-weight: 400;\n  font-size: 18px;\n  line-height: 28px;\n}\n\n.dosmth {\n  padding: 0 20px;\n}\n\n.dosmthTitle {\n  margin: 0;\n  margin-bottom: 20px;\n  font-weight: 600;\n  font-size: 22px;\n}\n\n.dosmthList {\n  position: relative;\n  background-size: 100px 100px;\n}\n\n.dosmthItem {\n  position: relative;\n  padding-left: 40px;\n  font-weight: 400;\n  font-size: 18px;\n}\n\n.dosmthItem::before {\n  content: '';\n  position: absolute;\n  left: 0;\n  top: 0;\n  width: 20px;\n  height: 20px;\n  background-image: url('../../assets/images/arrow-list.png');\n  background-position: center;\n  background-repeat: no-repeat;\n}\n\n.dosmthItem:not(:last-child) {\n  margin-bottom: 20px;\n}\n\n.unsplashLink {\n  color: var(--color-eminence);\n  transition: text-decoration 0.3s ease-in;\n}\n\n.unsplashLink:hover {\n  text-decoration: underline;\n  transition: text-decoration 0.3s ease-in;\n}\n\n.lookPhoto {\n  margin-bottom: 100px;\n  text-align: center;\n}\n\n.lookPhotoText {\n  display: block;\n  margin-bottom: 50px;\n  font-size: 24px;\n}\n\n.lookPhotoButton {\n  position: relative;\n  margin-bottom: 20px;\n  outline: none;\n  border: 2px solid transparent;\n  border-radius: 5px;\n  padding: 16px 30px;\n  box-shadow: 6px 6px 12px rgba(79, 209, 197, 0.64);\n  font-size: 22px;\n  color: var(--color-white);\n  background: var(--color-eucalyptus);\n  transition: all 0.3s ease-in-out 0s;\n  cursor: pointer;\n}\n\n.lookPhotoButton::before {\n  content: '';\n  position: absolute;\n  left: 50%;\n  top: 50%;\n  opacity: 0;\n  transform: translate(-50%, -50%);\n  transition: all 0.3s ease-in-out 0s;\n}\n\n.lookPhotoButton:hover {\n  border: 2px solid var(--color-eucalyptus);\n  color: var(--color-eucalyptus);\n  background-color: var(--color-white);\n}\n\n.lookPhotoButton::after {\n  content: '';\n  position: absolute;\n  left: 50%;\n  top: 50%;\n  z-index: -1;\n  border: 5px solid var(--color-bright-turquoise);\n  border-radius: 15px;\n  transform: translate(-50%, -50%);\n  animation: ring 1.5s infinite;\n}\n\n.lookPhotoButton:hover::after,\n.lookPhotoButton:focus::after {\n  display: none;\n  animation: none;\n}\n\n@keyframes ring {\n  0% {\n    padding: 16px 30px;\n    opacity: 1;\n  }\n\n  100% {\n    padding: 50px 150px;\n    opacity: 0;\n  }\n}\n\n@media (max-width: 576px) {\n  .mainTitle {\n    font-size: 32px;\n    line-height: 52px;\n    padding: 20px;\n  }\n\n  .photosContainer {\n    height: 320px;\n    margin-bottom: 10px;\n  }\n\n  .about {\n    margin-bottom: 20px;\n  }\n\n  .aboutTitle {\n    font-size: 22px;\n    margin-bottom: 10px;\n  }\n\n  .aboutTitleText {\n    font-size: 16px;\n  }\n\n  .aboutContainer {\n    margin-bottom: 60px;\n  }\n\n  .dosmthTitle {\n    font-size: 22px;\n  }\n\n  .dosmth {\n    padding: 0;\n    margin-bottom: 20px;\n  }\n\n  .lookPhotoText {\n    display: none;\n  }\n\n  .lookPhoto {\n    margin-bottom: 40px;\n  }\n}\n\n\n"],"sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"mainscreenContainer": "mainPage-m__mainscreenContainer--DhP3N",
	"photosContainer": "mainPage-m__photosContainer--_RtbJ",
	"mainContainer": "mainPage-m__mainContainer--ZH1Iz",
	"mainTitle": "mainPage-m__mainTitle--QPuO8",
	"aboutContainer": "mainPage-m__aboutContainer--mxifP",
	"about": "mainPage-m__about--TGBIX",
	"aboutTitle": "mainPage-m__aboutTitle--wvN7a",
	"aboutTitleText": "mainPage-m__aboutTitleText--FmW7d",
	"dosmth": "mainPage-m__dosmth--ekeEL",
	"dosmthTitle": "mainPage-m__dosmthTitle--sEMIF",
	"dosmthList": "mainPage-m__dosmthList--VUpMO",
	"dosmthItem": "mainPage-m__dosmthItem--chAdZ",
	"unsplashLink": "mainPage-m__unsplashLink--mgPrc",
	"lookPhoto": "mainPage-m__lookPhoto--LfByT",
	"lookPhotoText": "mainPage-m__lookPhotoText--CsexC",
	"lookPhotoButton": "mainPage-m__lookPhotoButton--vx7G2",
	"ring": "mainPage-m__ring--Hh13j"
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./styles.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);


if (true) {
  if (!_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals || module.hot.invalidate) {
    var isEqualLocals = function isEqualLocals(a, b, isNamedExport) {
  if (!a && b || a && !b) {
    return false;
  }

  var p;

  for (p in a) {
    if (isNamedExport && p === "default") {
      // eslint-disable-next-line no-continue
      continue;
    }

    if (a[p] !== b[p]) {
      return false;
    }
  }

  for (p in b) {
    if (isNamedExport && p === "default") {
      // eslint-disable-next-line no-continue
      continue;
    }

    if (!a[p]) {
      return false;
    }
  }

  return true;
};
    var isNamedExport = !_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals;
    var oldLocals = isNamedExport ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ : _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals;

    module.hot.accept(
      /*! !!../node_modules/css-loader/dist/cjs.js!./styles.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles.css",
      __WEBPACK_OUTDATED_DEPENDENCIES__ => { /* harmony import */ _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./styles.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles.css");
(function () {
        if (!isEqualLocals(oldLocals, isNamedExport ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ : _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals, isNamedExport)) {
                module.hot.invalidate();

                return;
              }

              oldLocals = isNamedExport ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ : _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals;

              update(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"]);
      })(__WEBPACK_OUTDATED_DEPENDENCIES__); }
    )
  }

  module.hot.dispose(function() {
    update();
  });
}



       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/components/Footer/footer.m.css":
/*!********************************************!*\
  !*** ./src/components/Footer/footer.m.css ***!
  \********************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_footer_m_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./footer.m.css */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./src/components/Footer/footer.m.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_footer_m_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);


if (true) {
  if (!_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_footer_m_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals || module.hot.invalidate) {
    var isEqualLocals = function isEqualLocals(a, b, isNamedExport) {
  if (!a && b || a && !b) {
    return false;
  }

  var p;

  for (p in a) {
    if (isNamedExport && p === "default") {
      // eslint-disable-next-line no-continue
      continue;
    }

    if (a[p] !== b[p]) {
      return false;
    }
  }

  for (p in b) {
    if (isNamedExport && p === "default") {
      // eslint-disable-next-line no-continue
      continue;
    }

    if (!a[p]) {
      return false;
    }
  }

  return true;
};
    var isNamedExport = !_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_footer_m_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals;
    var oldLocals = isNamedExport ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_footer_m_css__WEBPACK_IMPORTED_MODULE_6__ : _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_footer_m_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals;

    module.hot.accept(
      /*! !!../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./footer.m.css */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./src/components/Footer/footer.m.css",
      __WEBPACK_OUTDATED_DEPENDENCIES__ => { /* harmony import */ _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_footer_m_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./footer.m.css */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./src/components/Footer/footer.m.css");
(function () {
        if (!isEqualLocals(oldLocals, isNamedExport ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_footer_m_css__WEBPACK_IMPORTED_MODULE_6__ : _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_footer_m_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals, isNamedExport)) {
                module.hot.invalidate();

                return;
              }

              oldLocals = isNamedExport ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_footer_m_css__WEBPACK_IMPORTED_MODULE_6__ : _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_footer_m_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals;

              update(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_footer_m_css__WEBPACK_IMPORTED_MODULE_6__["default"]);
      })(__WEBPACK_OUTDATED_DEPENDENCIES__); }
    )
  }

  module.hot.dispose(function() {
    update();
  });
}



       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_footer_m_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_footer_m_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_footer_m_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/components/Header/Location/location.m.css":
/*!*******************************************************!*\
  !*** ./src/components/Header/Location/location.m.css ***!
  \*******************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_location_m_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./location.m.css */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./src/components/Header/Location/location.m.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_location_m_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);


if (true) {
  if (!_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_location_m_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals || module.hot.invalidate) {
    var isEqualLocals = function isEqualLocals(a, b, isNamedExport) {
  if (!a && b || a && !b) {
    return false;
  }

  var p;

  for (p in a) {
    if (isNamedExport && p === "default") {
      // eslint-disable-next-line no-continue
      continue;
    }

    if (a[p] !== b[p]) {
      return false;
    }
  }

  for (p in b) {
    if (isNamedExport && p === "default") {
      // eslint-disable-next-line no-continue
      continue;
    }

    if (!a[p]) {
      return false;
    }
  }

  return true;
};
    var isNamedExport = !_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_location_m_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals;
    var oldLocals = isNamedExport ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_location_m_css__WEBPACK_IMPORTED_MODULE_6__ : _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_location_m_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals;

    module.hot.accept(
      /*! !!../../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./location.m.css */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./src/components/Header/Location/location.m.css",
      __WEBPACK_OUTDATED_DEPENDENCIES__ => { /* harmony import */ _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_location_m_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./location.m.css */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./src/components/Header/Location/location.m.css");
(function () {
        if (!isEqualLocals(oldLocals, isNamedExport ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_location_m_css__WEBPACK_IMPORTED_MODULE_6__ : _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_location_m_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals, isNamedExport)) {
                module.hot.invalidate();

                return;
              }

              oldLocals = isNamedExport ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_location_m_css__WEBPACK_IMPORTED_MODULE_6__ : _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_location_m_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals;

              update(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_location_m_css__WEBPACK_IMPORTED_MODULE_6__["default"]);
      })(__WEBPACK_OUTDATED_DEPENDENCIES__); }
    )
  }

  module.hot.dispose(function() {
    update();
  });
}



       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_location_m_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_location_m_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_location_m_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/components/Header/Signin/signin.m.css":
/*!***************************************************!*\
  !*** ./src/components/Header/Signin/signin.m.css ***!
  \***************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_signin_m_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./signin.m.css */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./src/components/Header/Signin/signin.m.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_signin_m_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);


if (true) {
  if (!_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_signin_m_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals || module.hot.invalidate) {
    var isEqualLocals = function isEqualLocals(a, b, isNamedExport) {
  if (!a && b || a && !b) {
    return false;
  }

  var p;

  for (p in a) {
    if (isNamedExport && p === "default") {
      // eslint-disable-next-line no-continue
      continue;
    }

    if (a[p] !== b[p]) {
      return false;
    }
  }

  for (p in b) {
    if (isNamedExport && p === "default") {
      // eslint-disable-next-line no-continue
      continue;
    }

    if (!a[p]) {
      return false;
    }
  }

  return true;
};
    var isNamedExport = !_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_signin_m_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals;
    var oldLocals = isNamedExport ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_signin_m_css__WEBPACK_IMPORTED_MODULE_6__ : _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_signin_m_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals;

    module.hot.accept(
      /*! !!../../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./signin.m.css */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./src/components/Header/Signin/signin.m.css",
      __WEBPACK_OUTDATED_DEPENDENCIES__ => { /* harmony import */ _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_signin_m_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./signin.m.css */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./src/components/Header/Signin/signin.m.css");
(function () {
        if (!isEqualLocals(oldLocals, isNamedExport ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_signin_m_css__WEBPACK_IMPORTED_MODULE_6__ : _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_signin_m_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals, isNamedExport)) {
                module.hot.invalidate();

                return;
              }

              oldLocals = isNamedExport ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_signin_m_css__WEBPACK_IMPORTED_MODULE_6__ : _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_signin_m_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals;

              update(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_signin_m_css__WEBPACK_IMPORTED_MODULE_6__["default"]);
      })(__WEBPACK_OUTDATED_DEPENDENCIES__); }
    )
  }

  module.hot.dispose(function() {
    update();
  });
}



       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_signin_m_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_signin_m_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_signin_m_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/components/Header/header.m.css":
/*!********************************************!*\
  !*** ./src/components/Header/header.m.css ***!
  \********************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_header_m_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./header.m.css */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./src/components/Header/header.m.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_header_m_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);


if (true) {
  if (!_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_header_m_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals || module.hot.invalidate) {
    var isEqualLocals = function isEqualLocals(a, b, isNamedExport) {
  if (!a && b || a && !b) {
    return false;
  }

  var p;

  for (p in a) {
    if (isNamedExport && p === "default") {
      // eslint-disable-next-line no-continue
      continue;
    }

    if (a[p] !== b[p]) {
      return false;
    }
  }

  for (p in b) {
    if (isNamedExport && p === "default") {
      // eslint-disable-next-line no-continue
      continue;
    }

    if (!a[p]) {
      return false;
    }
  }

  return true;
};
    var isNamedExport = !_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_header_m_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals;
    var oldLocals = isNamedExport ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_header_m_css__WEBPACK_IMPORTED_MODULE_6__ : _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_header_m_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals;

    module.hot.accept(
      /*! !!../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./header.m.css */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./src/components/Header/header.m.css",
      __WEBPACK_OUTDATED_DEPENDENCIES__ => { /* harmony import */ _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_header_m_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./header.m.css */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./src/components/Header/header.m.css");
(function () {
        if (!isEqualLocals(oldLocals, isNamedExport ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_header_m_css__WEBPACK_IMPORTED_MODULE_6__ : _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_header_m_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals, isNamedExport)) {
                module.hot.invalidate();

                return;
              }

              oldLocals = isNamedExport ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_header_m_css__WEBPACK_IMPORTED_MODULE_6__ : _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_header_m_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals;

              update(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_header_m_css__WEBPACK_IMPORTED_MODULE_6__["default"]);
      })(__WEBPACK_OUTDATED_DEPENDENCIES__); }
    )
  }

  module.hot.dispose(function() {
    update();
  });
}



       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_header_m_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_header_m_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_header_m_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/components/Profile/profile.m.css":
/*!**********************************************!*\
  !*** ./src/components/Profile/profile.m.css ***!
  \**********************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_profile_m_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./profile.m.css */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./src/components/Profile/profile.m.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_profile_m_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);


if (true) {
  if (!_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_profile_m_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals || module.hot.invalidate) {
    var isEqualLocals = function isEqualLocals(a, b, isNamedExport) {
  if (!a && b || a && !b) {
    return false;
  }

  var p;

  for (p in a) {
    if (isNamedExport && p === "default") {
      // eslint-disable-next-line no-continue
      continue;
    }

    if (a[p] !== b[p]) {
      return false;
    }
  }

  for (p in b) {
    if (isNamedExport && p === "default") {
      // eslint-disable-next-line no-continue
      continue;
    }

    if (!a[p]) {
      return false;
    }
  }

  return true;
};
    var isNamedExport = !_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_profile_m_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals;
    var oldLocals = isNamedExport ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_profile_m_css__WEBPACK_IMPORTED_MODULE_6__ : _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_profile_m_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals;

    module.hot.accept(
      /*! !!../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./profile.m.css */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./src/components/Profile/profile.m.css",
      __WEBPACK_OUTDATED_DEPENDENCIES__ => { /* harmony import */ _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_profile_m_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./profile.m.css */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./src/components/Profile/profile.m.css");
(function () {
        if (!isEqualLocals(oldLocals, isNamedExport ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_profile_m_css__WEBPACK_IMPORTED_MODULE_6__ : _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_profile_m_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals, isNamedExport)) {
                module.hot.invalidate();

                return;
              }

              oldLocals = isNamedExport ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_profile_m_css__WEBPACK_IMPORTED_MODULE_6__ : _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_profile_m_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals;

              update(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_profile_m_css__WEBPACK_IMPORTED_MODULE_6__["default"]);
      })(__WEBPACK_OUTDATED_DEPENDENCIES__); }
    )
  }

  module.hot.dispose(function() {
    update();
  });
}



       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_profile_m_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_profile_m_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_profile_m_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/components/Spinner/spinner.m.css":
/*!**********************************************!*\
  !*** ./src/components/Spinner/spinner.m.css ***!
  \**********************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_spinner_m_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./spinner.m.css */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./src/components/Spinner/spinner.m.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_spinner_m_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);


if (true) {
  if (!_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_spinner_m_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals || module.hot.invalidate) {
    var isEqualLocals = function isEqualLocals(a, b, isNamedExport) {
  if (!a && b || a && !b) {
    return false;
  }

  var p;

  for (p in a) {
    if (isNamedExport && p === "default") {
      // eslint-disable-next-line no-continue
      continue;
    }

    if (a[p] !== b[p]) {
      return false;
    }
  }

  for (p in b) {
    if (isNamedExport && p === "default") {
      // eslint-disable-next-line no-continue
      continue;
    }

    if (!a[p]) {
      return false;
    }
  }

  return true;
};
    var isNamedExport = !_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_spinner_m_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals;
    var oldLocals = isNamedExport ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_spinner_m_css__WEBPACK_IMPORTED_MODULE_6__ : _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_spinner_m_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals;

    module.hot.accept(
      /*! !!../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./spinner.m.css */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./src/components/Spinner/spinner.m.css",
      __WEBPACK_OUTDATED_DEPENDENCIES__ => { /* harmony import */ _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_spinner_m_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./spinner.m.css */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./src/components/Spinner/spinner.m.css");
(function () {
        if (!isEqualLocals(oldLocals, isNamedExport ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_spinner_m_css__WEBPACK_IMPORTED_MODULE_6__ : _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_spinner_m_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals, isNamedExport)) {
                module.hot.invalidate();

                return;
              }

              oldLocals = isNamedExport ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_spinner_m_css__WEBPACK_IMPORTED_MODULE_6__ : _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_spinner_m_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals;

              update(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_spinner_m_css__WEBPACK_IMPORTED_MODULE_6__["default"]);
      })(__WEBPACK_OUTDATED_DEPENDENCIES__); }
    )
  }

  module.hot.dispose(function() {
    update();
  });
}



       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_spinner_m_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_spinner_m_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_spinner_m_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/pages/MainPage/mainPage.m.css":
/*!*******************************************!*\
  !*** ./src/pages/MainPage/mainPage.m.css ***!
  \*******************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_mainPage_m_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./mainPage.m.css */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./src/pages/MainPage/mainPage.m.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_mainPage_m_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);


if (true) {
  if (!_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_mainPage_m_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals || module.hot.invalidate) {
    var isEqualLocals = function isEqualLocals(a, b, isNamedExport) {
  if (!a && b || a && !b) {
    return false;
  }

  var p;

  for (p in a) {
    if (isNamedExport && p === "default") {
      // eslint-disable-next-line no-continue
      continue;
    }

    if (a[p] !== b[p]) {
      return false;
    }
  }

  for (p in b) {
    if (isNamedExport && p === "default") {
      // eslint-disable-next-line no-continue
      continue;
    }

    if (!a[p]) {
      return false;
    }
  }

  return true;
};
    var isNamedExport = !_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_mainPage_m_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals;
    var oldLocals = isNamedExport ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_mainPage_m_css__WEBPACK_IMPORTED_MODULE_6__ : _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_mainPage_m_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals;

    module.hot.accept(
      /*! !!../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./mainPage.m.css */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./src/pages/MainPage/mainPage.m.css",
      __WEBPACK_OUTDATED_DEPENDENCIES__ => { /* harmony import */ _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_mainPage_m_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./mainPage.m.css */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./src/pages/MainPage/mainPage.m.css");
(function () {
        if (!isEqualLocals(oldLocals, isNamedExport ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_mainPage_m_css__WEBPACK_IMPORTED_MODULE_6__ : _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_mainPage_m_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals, isNamedExport)) {
                module.hot.invalidate();

                return;
              }

              oldLocals = isNamedExport ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_mainPage_m_css__WEBPACK_IMPORTED_MODULE_6__ : _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_mainPage_m_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals;

              update(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_mainPage_m_css__WEBPACK_IMPORTED_MODULE_6__["default"]);
      })(__WEBPACK_OUTDATED_DEPENDENCIES__); }
    )
  }

  module.hot.dispose(function() {
    update();
  });
}



       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_mainPage_m_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_mainPage_m_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_mainPage_m_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "data:application/font-woff;charset=utf-8;base64, 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":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** data:application/font-woff;charset=utf-8;base64, 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 ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "data:application/font-woff;charset=utf-8;base64, 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";

/***/ }),

/***/ "./src/assets/fonts/Montserrat-Regular.woff":
/*!**************************************************!*\
  !*** ./src/assets/fonts/Montserrat-Regular.woff ***!
  \**************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "3db65dc4b858f0fed4fb.woff";

/***/ }),

/***/ "./src/assets/images/arrow-list.png":
/*!******************************************!*\
  !*** ./src/assets/images/arrow-list.png ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "c181bd383cd77f46e95b.png";

/***/ }),

/***/ "./src/assets/images/logo-footer.png":
/*!*******************************************!*\
  !*** ./src/assets/images/logo-footer.png ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "15e405f7e1850543179c.png";

/***/ }),

/***/ "./src/assets/images/logo.png":
/*!************************************!*\
  !*** ./src/assets/images/logo.png ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "efe29ed19144da613f8d.png";

/***/ }),

/***/ "./src/assets/images/svg/down-arrow.svg":
/*!**********************************************!*\
  !*** ./src/assets/images/svg/down-arrow.svg ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "1b57139fae6e4e599092.svg";

/***/ }),

/***/ "./src/assets/images/svg/google.svg":
/*!******************************************!*\
  !*** ./src/assets/images/svg/google.svg ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "3a148532b2653a02b406.svg";

/***/ }),

/***/ "./src/assets/images/svg/mail.svg":
/*!****************************************!*\
  !*** ./src/assets/images/svg/mail.svg ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "a5184cbf4fcd53b83f3c.svg";

/***/ }),

/***/ "./src/assets/images/svg/ok-logo.svg":
/*!*******************************************!*\
  !*** ./src/assets/images/svg/ok-logo.svg ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "3328c2390f00abf6d278.svg";

/***/ }),

/***/ "./src/assets/images/svg/right-chevron.svg":
/*!*************************************************!*\
  !*** ./src/assets/images/svg/right-chevron.svg ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "ecabb2c86cf10d926492.svg";

/***/ }),

/***/ "./src/assets/images/svg/telephone.svg":
/*!*********************************************!*\
  !*** ./src/assets/images/svg/telephone.svg ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "65d125bfefe06ec71578.svg";

/***/ }),

/***/ "./src/assets/images/svg/vk.svg":
/*!**************************************!*\
  !*** ./src/assets/images/svg/vk.svg ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "e8bfb0d5698cab57752f.svg";

/***/ }),

/***/ "?d546":
/*!************************!*\
  !*** buffer (ignored) ***!
  \************************/
/***/ (() => {

/* (ignored) */

/***/ }),

/***/ "?8131":
/*!************************!*\
  !*** buffer (ignored) ***!
  \************************/
/***/ (() => {

/* (ignored) */

/***/ }),

/***/ "?3fc0":
/*!************************!*\
  !*** crypto (ignored) ***!
  \************************/
/***/ (() => {

/* (ignored) */

/***/ }),

/***/ "?4068":
/*!************************!*\
  !*** buffer (ignored) ***!
  \************************/
/***/ (() => {

/* (ignored) */

/***/ }),

/***/ "?e7e4":
/*!************************!*\
  !*** buffer (ignored) ***!
  \************************/
/***/ (() => {

/* (ignored) */

/***/ }),

/***/ "?a0c3":
/*!********************!*\
  !*** fs (ignored) ***!
  \********************/
/***/ (() => {

/* (ignored) */

/***/ }),

/***/ "?7bec":
/*!************************!*\
  !*** buffer (ignored) ***!
  \************************/
/***/ (() => {

/* (ignored) */

/***/ }),

/***/ "?0aec":
/*!************************!*\
  !*** buffer (ignored) ***!
  \************************/
/***/ (() => {

/* (ignored) */

/***/ }),

/***/ "?fbf1":
/*!************************!*\
  !*** buffer (ignored) ***!
  \************************/
/***/ (() => {

/* (ignored) */

/***/ }),

/***/ "?ed1b":
/*!**********************!*\
  !*** util (ignored) ***!
  \**********************/
/***/ (() => {

/* (ignored) */

/***/ }),

/***/ "?d17e":
/*!**********************!*\
  !*** util (ignored) ***!
  \**********************/
/***/ (() => {

/* (ignored) */

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			if (cachedModule.error !== undefined) throw cachedModule.error;
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			loaded: false,
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		try {
/******/ 			var execOptions = { id: moduleId, module: module, factory: __webpack_modules__[moduleId], require: __webpack_require__ };
/******/ 			__webpack_require__.i.forEach(function(handler) { handler(execOptions); });
/******/ 			module = execOptions.module;
/******/ 			execOptions.factory.call(module.exports, module, module.exports, execOptions.require);
/******/ 		} catch(e) {
/******/ 			module.error = e;
/******/ 			throw e;
/******/ 		}
/******/ 	
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = __webpack_module_cache__;
/******/ 	
/******/ 	// expose the module execution interceptor
/******/ 	__webpack_require__.i = [];
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/ensure chunk */
/******/ 	(() => {
/******/ 		__webpack_require__.f = {};
/******/ 		// This file contains only the entry chunk.
/******/ 		// The chunk loading function for additional chunks
/******/ 		__webpack_require__.e = (chunkId) => {
/******/ 			return Promise.all(Object.keys(__webpack_require__.f).reduce((promises, key) => {
/******/ 				__webpack_require__.f[key](chunkId, promises);
/******/ 				return promises;
/******/ 			}, []));
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/get javascript chunk filename */
/******/ 	(() => {
/******/ 		// This function allow to reference async chunks
/******/ 		__webpack_require__.u = (chunkId) => {
/******/ 			// return url for filenames based on template
/******/ 			return "" + chunkId + ".js";
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/get javascript update chunk filename */
/******/ 	(() => {
/******/ 		// This function allow to reference all chunks
/******/ 		__webpack_require__.hu = (chunkId) => {
/******/ 			// return url for filenames based on template
/******/ 			return "" + chunkId + "." + __webpack_require__.h() + ".hot-update.js";
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/get mini-css chunk filename */
/******/ 	(() => {
/******/ 		// This function allow to reference async chunks
/******/ 		__webpack_require__.miniCssF = (chunkId) => {
/******/ 			// return url for filenames based on template
/******/ 			return undefined;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/get update manifest filename */
/******/ 	(() => {
/******/ 		__webpack_require__.hmrF = () => ("main." + __webpack_require__.h() + ".hot-update.json");
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/getFullHash */
/******/ 	(() => {
/******/ 		__webpack_require__.h = () => ("0fa8e139e8cd9db1f40c")
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/harmony module decorator */
/******/ 	(() => {
/******/ 		__webpack_require__.hmd = (module) => {
/******/ 			module = Object.create(module);
/******/ 			if (!module.children) module.children = [];
/******/ 			Object.defineProperty(module, 'exports', {
/******/ 				enumerable: true,
/******/ 				set: () => {
/******/ 					throw new Error('ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: ' + module.id);
/******/ 				}
/******/ 			});
/******/ 			return module;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/load script */
/******/ 	(() => {
/******/ 		var inProgress = {};
/******/ 		var dataWebpackPrefix = "webpack:";
/******/ 		// loadScript function to load a script via script tag
/******/ 		__webpack_require__.l = (url, done, key, chunkId) => {
/******/ 			if(inProgress[url]) { inProgress[url].push(done); return; }
/******/ 			var script, needAttach;
/******/ 			if(key !== undefined) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				for(var i = 0; i < scripts.length; i++) {
/******/ 					var s = scripts[i];
/******/ 					if(s.getAttribute("src") == url || s.getAttribute("data-webpack") == dataWebpackPrefix + key) { script = s; break; }
/******/ 				}
/******/ 			}
/******/ 			if(!script) {
/******/ 				needAttach = true;
/******/ 				script = document.createElement('script');
/******/ 		
/******/ 				script.charset = 'utf-8';
/******/ 				script.timeout = 120;
/******/ 				if (__webpack_require__.nc) {
/******/ 					script.setAttribute("nonce", __webpack_require__.nc);
/******/ 				}
/******/ 				script.setAttribute("data-webpack", dataWebpackPrefix + key);
/******/ 				script.src = url;
/******/ 			}
/******/ 			inProgress[url] = [done];
/******/ 			var onScriptComplete = (prev, event) => {
/******/ 				// avoid mem leaks in IE.
/******/ 				script.onerror = script.onload = null;
/******/ 				clearTimeout(timeout);
/******/ 				var doneFns = inProgress[url];
/******/ 				delete inProgress[url];
/******/ 				script.parentNode && script.parentNode.removeChild(script);
/******/ 				doneFns && doneFns.forEach((fn) => (fn(event)));
/******/ 				if(prev) return prev(event);
/******/ 			}
/******/ 			;
/******/ 			var timeout = setTimeout(onScriptComplete.bind(null, undefined, { type: 'timeout', target: script }), 120000);
/******/ 			script.onerror = onScriptComplete.bind(null, script.onerror);
/******/ 			script.onload = onScriptComplete.bind(null, script.onload);
/******/ 			needAttach && document.head.appendChild(script);
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/node module decorator */
/******/ 	(() => {
/******/ 		__webpack_require__.nmd = (module) => {
/******/ 			module.paths = [];
/******/ 			if (!module.children) module.children = [];
/******/ 			return module;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hot module replacement */
/******/ 	(() => {
/******/ 		var currentModuleData = {};
/******/ 		var installedModules = __webpack_require__.c;
/******/ 		
/******/ 		// module and require creation
/******/ 		var currentChildModule;
/******/ 		var currentParents = [];
/******/ 		
/******/ 		// status
/******/ 		var registeredStatusHandlers = [];
/******/ 		var currentStatus = "idle";
/******/ 		
/******/ 		// while downloading
/******/ 		var blockingPromises;
/******/ 		
/******/ 		// The update info
/******/ 		var currentUpdateApplyHandlers;
/******/ 		var queuedInvalidatedModules;
/******/ 		
/******/ 		// eslint-disable-next-line no-unused-vars
/******/ 		__webpack_require__.hmrD = currentModuleData;
/******/ 		
/******/ 		__webpack_require__.i.push(function (options) {
/******/ 			var module = options.module;
/******/ 			var require = createRequire(options.require, options.id);
/******/ 			module.hot = createModuleHotObject(options.id, module);
/******/ 			module.parents = currentParents;
/******/ 			module.children = [];
/******/ 			currentParents = [];
/******/ 			options.require = require;
/******/ 		});
/******/ 		
/******/ 		__webpack_require__.hmrC = {};
/******/ 		__webpack_require__.hmrI = {};
/******/ 		
/******/ 		function createRequire(require, moduleId) {
/******/ 			var me = installedModules[moduleId];
/******/ 			if (!me) return require;
/******/ 			var fn = function (request) {
/******/ 				if (me.hot.active) {
/******/ 					if (installedModules[request]) {
/******/ 						var parents = installedModules[request].parents;
/******/ 						if (parents.indexOf(moduleId) === -1) {
/******/ 							parents.push(moduleId);
/******/ 						}
/******/ 					} else {
/******/ 						currentParents = [moduleId];
/******/ 						currentChildModule = request;
/******/ 					}
/******/ 					if (me.children.indexOf(request) === -1) {
/******/ 						me.children.push(request);
/******/ 					}
/******/ 				} else {
/******/ 					console.warn(
/******/ 						"[HMR] unexpected require(" +
/******/ 							request +
/******/ 							") from disposed module " +
/******/ 							moduleId
/******/ 					);
/******/ 					currentParents = [];
/******/ 				}
/******/ 				return require(request);
/******/ 			};
/******/ 			var createPropertyDescriptor = function (name) {
/******/ 				return {
/******/ 					configurable: true,
/******/ 					enumerable: true,
/******/ 					get: function () {
/******/ 						return require[name];
/******/ 					},
/******/ 					set: function (value) {
/******/ 						require[name] = value;
/******/ 					}
/******/ 				};
/******/ 			};
/******/ 			for (var name in require) {
/******/ 				if (Object.prototype.hasOwnProperty.call(require, name) && name !== "e") {
/******/ 					Object.defineProperty(fn, name, createPropertyDescriptor(name));
/******/ 				}
/******/ 			}
/******/ 			fn.e = function (chunkId) {
/******/ 				return trackBlockingPromise(require.e(chunkId));
/******/ 			};
/******/ 			return fn;
/******/ 		}
/******/ 		
/******/ 		function createModuleHotObject(moduleId, me) {
/******/ 			var _main = currentChildModule !== moduleId;
/******/ 			var hot = {
/******/ 				// private stuff
/******/ 				_acceptedDependencies: {},
/******/ 				_acceptedErrorHandlers: {},
/******/ 				_declinedDependencies: {},
/******/ 				_selfAccepted: false,
/******/ 				_selfDeclined: false,
/******/ 				_selfInvalidated: false,
/******/ 				_disposeHandlers: [],
/******/ 				_main: _main,
/******/ 				_requireSelf: function () {
/******/ 					currentParents = me.parents.slice();
/******/ 					currentChildModule = _main ? undefined : moduleId;
/******/ 					__webpack_require__(moduleId);
/******/ 				},
/******/ 		
/******/ 				// Module API
/******/ 				active: true,
/******/ 				accept: function (dep, callback, errorHandler) {
/******/ 					if (dep === undefined) hot._selfAccepted = true;
/******/ 					else if (typeof dep === "function") hot._selfAccepted = dep;
/******/ 					else if (typeof dep === "object" && dep !== null) {
/******/ 						for (var i = 0; i < dep.length; i++) {
/******/ 							hot._acceptedDependencies[dep[i]] = callback || function () {};
/******/ 							hot._acceptedErrorHandlers[dep[i]] = errorHandler;
/******/ 						}
/******/ 					} else {
/******/ 						hot._acceptedDependencies[dep] = callback || function () {};
/******/ 						hot._acceptedErrorHandlers[dep] = errorHandler;
/******/ 					}
/******/ 				},
/******/ 				decline: function (dep) {
/******/ 					if (dep === undefined) hot._selfDeclined = true;
/******/ 					else if (typeof dep === "object" && dep !== null)
/******/ 						for (var i = 0; i < dep.length; i++)
/******/ 							hot._declinedDependencies[dep[i]] = true;
/******/ 					else hot._declinedDependencies[dep] = true;
/******/ 				},
/******/ 				dispose: function (callback) {
/******/ 					hot._disposeHandlers.push(callback);
/******/ 				},
/******/ 				addDisposeHandler: function (callback) {
/******/ 					hot._disposeHandlers.push(callback);
/******/ 				},
/******/ 				removeDisposeHandler: function (callback) {
/******/ 					var idx = hot._disposeHandlers.indexOf(callback);
/******/ 					if (idx >= 0) hot._disposeHandlers.splice(idx, 1);
/******/ 				},
/******/ 				invalidate: function () {
/******/ 					this._selfInvalidated = true;
/******/ 					switch (currentStatus) {
/******/ 						case "idle":
/******/ 							currentUpdateApplyHandlers = [];
/******/ 							Object.keys(__webpack_require__.hmrI).forEach(function (key) {
/******/ 								__webpack_require__.hmrI[key](
/******/ 									moduleId,
/******/ 									currentUpdateApplyHandlers
/******/ 								);
/******/ 							});
/******/ 							setStatus("ready");
/******/ 							break;
/******/ 						case "ready":
/******/ 							Object.keys(__webpack_require__.hmrI).forEach(function (key) {
/******/ 								__webpack_require__.hmrI[key](
/******/ 									moduleId,
/******/ 									currentUpdateApplyHandlers
/******/ 								);
/******/ 							});
/******/ 							break;
/******/ 						case "prepare":
/******/ 						case "check":
/******/ 						case "dispose":
/******/ 						case "apply":
/******/ 							(queuedInvalidatedModules = queuedInvalidatedModules || []).push(
/******/ 								moduleId
/******/ 							);
/******/ 							break;
/******/ 						default:
/******/ 							// ignore requests in error states
/******/ 							break;
/******/ 					}
/******/ 				},
/******/ 		
/******/ 				// Management API
/******/ 				check: hotCheck,
/******/ 				apply: hotApply,
/******/ 				status: function (l) {
/******/ 					if (!l) return currentStatus;
/******/ 					registeredStatusHandlers.push(l);
/******/ 				},
/******/ 				addStatusHandler: function (l) {
/******/ 					registeredStatusHandlers.push(l);
/******/ 				},
/******/ 				removeStatusHandler: function (l) {
/******/ 					var idx = registeredStatusHandlers.indexOf(l);
/******/ 					if (idx >= 0) registeredStatusHandlers.splice(idx, 1);
/******/ 				},
/******/ 		
/******/ 				//inherit from previous dispose call
/******/ 				data: currentModuleData[moduleId]
/******/ 			};
/******/ 			currentChildModule = undefined;
/******/ 			return hot;
/******/ 		}
/******/ 		
/******/ 		function setStatus(newStatus) {
/******/ 			currentStatus = newStatus;
/******/ 			var results = [];
/******/ 		
/******/ 			for (var i = 0; i < registeredStatusHandlers.length; i++)
/******/ 				results[i] = registeredStatusHandlers[i].call(null, newStatus);
/******/ 		
/******/ 			return Promise.all(results);
/******/ 		}
/******/ 		
/******/ 		function trackBlockingPromise(promise) {
/******/ 			switch (currentStatus) {
/******/ 				case "ready":
/******/ 					setStatus("prepare");
/******/ 					blockingPromises.push(promise);
/******/ 					waitForBlockingPromises(function () {
/******/ 						return setStatus("ready");
/******/ 					});
/******/ 					return promise;
/******/ 				case "prepare":
/******/ 					blockingPromises.push(promise);
/******/ 					return promise;
/******/ 				default:
/******/ 					return promise;
/******/ 			}
/******/ 		}
/******/ 		
/******/ 		function waitForBlockingPromises(fn) {
/******/ 			if (blockingPromises.length === 0) return fn();
/******/ 			var blocker = blockingPromises;
/******/ 			blockingPromises = [];
/******/ 			return Promise.all(blocker).then(function () {
/******/ 				return waitForBlockingPromises(fn);
/******/ 			});
/******/ 		}
/******/ 		
/******/ 		function hotCheck(applyOnUpdate) {
/******/ 			if (currentStatus !== "idle") {
/******/ 				throw new Error("check() is only allowed in idle status");
/******/ 			}
/******/ 			return setStatus("check")
/******/ 				.then(__webpack_require__.hmrM)
/******/ 				.then(function (update) {
/******/ 					if (!update) {
/******/ 						return setStatus(applyInvalidatedModules() ? "ready" : "idle").then(
/******/ 							function () {
/******/ 								return null;
/******/ 							}
/******/ 						);
/******/ 					}
/******/ 		
/******/ 					return setStatus("prepare").then(function () {
/******/ 						var updatedModules = [];
/******/ 						blockingPromises = [];
/******/ 						currentUpdateApplyHandlers = [];
/******/ 		
/******/ 						return Promise.all(
/******/ 							Object.keys(__webpack_require__.hmrC).reduce(function (
/******/ 								promises,
/******/ 								key
/******/ 							) {
/******/ 								__webpack_require__.hmrC[key](
/******/ 									update.c,
/******/ 									update.r,
/******/ 									update.m,
/******/ 									promises,
/******/ 									currentUpdateApplyHandlers,
/******/ 									updatedModules
/******/ 								);
/******/ 								return promises;
/******/ 							},
/******/ 							[])
/******/ 						).then(function () {
/******/ 							return waitForBlockingPromises(function () {
/******/ 								if (applyOnUpdate) {
/******/ 									return internalApply(applyOnUpdate);
/******/ 								} else {
/******/ 									return setStatus("ready").then(function () {
/******/ 										return updatedModules;
/******/ 									});
/******/ 								}
/******/ 							});
/******/ 						});
/******/ 					});
/******/ 				});
/******/ 		}
/******/ 		
/******/ 		function hotApply(options) {
/******/ 			if (currentStatus !== "ready") {
/******/ 				return Promise.resolve().then(function () {
/******/ 					throw new Error("apply() is only allowed in ready status");
/******/ 				});
/******/ 			}
/******/ 			return internalApply(options);
/******/ 		}
/******/ 		
/******/ 		function internalApply(options) {
/******/ 			options = options || {};
/******/ 		
/******/ 			applyInvalidatedModules();
/******/ 		
/******/ 			var results = currentUpdateApplyHandlers.map(function (handler) {
/******/ 				return handler(options);
/******/ 			});
/******/ 			currentUpdateApplyHandlers = undefined;
/******/ 		
/******/ 			var errors = results
/******/ 				.map(function (r) {
/******/ 					return r.error;
/******/ 				})
/******/ 				.filter(Boolean);
/******/ 		
/******/ 			if (errors.length > 0) {
/******/ 				return setStatus("abort").then(function () {
/******/ 					throw errors[0];
/******/ 				});
/******/ 			}
/******/ 		
/******/ 			// Now in "dispose" phase
/******/ 			var disposePromise = setStatus("dispose");
/******/ 		
/******/ 			results.forEach(function (result) {
/******/ 				if (result.dispose) result.dispose();
/******/ 			});
/******/ 		
/******/ 			// Now in "apply" phase
/******/ 			var applyPromise = setStatus("apply");
/******/ 		
/******/ 			var error;
/******/ 			var reportError = function (err) {
/******/ 				if (!error) error = err;
/******/ 			};
/******/ 		
/******/ 			var outdatedModules = [];
/******/ 			results.forEach(function (result) {
/******/ 				if (result.apply) {
/******/ 					var modules = result.apply(reportError);
/******/ 					if (modules) {
/******/ 						for (var i = 0; i < modules.length; i++) {
/******/ 							outdatedModules.push(modules[i]);
/******/ 						}
/******/ 					}
/******/ 				}
/******/ 			});
/******/ 		
/******/ 			return Promise.all([disposePromise, applyPromise]).then(function () {
/******/ 				// handle errors in accept handlers and self accepted module load
/******/ 				if (error) {
/******/ 					return setStatus("fail").then(function () {
/******/ 						throw error;
/******/ 					});
/******/ 				}
/******/ 		
/******/ 				if (queuedInvalidatedModules) {
/******/ 					return internalApply(options).then(function (list) {
/******/ 						outdatedModules.forEach(function (moduleId) {
/******/ 							if (list.indexOf(moduleId) < 0) list.push(moduleId);
/******/ 						});
/******/ 						return list;
/******/ 					});
/******/ 				}
/******/ 		
/******/ 				return setStatus("idle").then(function () {
/******/ 					return outdatedModules;
/******/ 				});
/******/ 			});
/******/ 		}
/******/ 		
/******/ 		function applyInvalidatedModules() {
/******/ 			if (queuedInvalidatedModules) {
/******/ 				if (!currentUpdateApplyHandlers) currentUpdateApplyHandlers = [];
/******/ 				Object.keys(__webpack_require__.hmrI).forEach(function (key) {
/******/ 					queuedInvalidatedModules.forEach(function (moduleId) {
/******/ 						__webpack_require__.hmrI[key](
/******/ 							moduleId,
/******/ 							currentUpdateApplyHandlers
/******/ 						);
/******/ 					});
/******/ 				});
/******/ 				queuedInvalidatedModules = undefined;
/******/ 				return true;
/******/ 			}
/******/ 		}
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		__webpack_require__.p = "/";
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/css loading */
/******/ 	(() => {
/******/ 		var createStylesheet = (chunkId, fullhref, resolve, reject) => {
/******/ 			var linkTag = document.createElement("link");
/******/ 		
/******/ 			linkTag.rel = "stylesheet";
/******/ 			linkTag.type = "text/css";
/******/ 			var onLinkComplete = (event) => {
/******/ 				// avoid mem leaks.
/******/ 				linkTag.onerror = linkTag.onload = null;
/******/ 				if (event.type === 'load') {
/******/ 					resolve();
/******/ 				} else {
/******/ 					var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 					var realHref = event && event.target && event.target.href || fullhref;
/******/ 					var err = new Error("Loading CSS chunk " + chunkId + " failed.\n(" + realHref + ")");
/******/ 					err.code = "CSS_CHUNK_LOAD_FAILED";
/******/ 					err.type = errorType;
/******/ 					err.request = realHref;
/******/ 					linkTag.parentNode.removeChild(linkTag)
/******/ 					reject(err);
/******/ 				}
/******/ 			}
/******/ 			linkTag.onerror = linkTag.onload = onLinkComplete;
/******/ 			linkTag.href = fullhref;
/******/ 		
/******/ 			document.head.appendChild(linkTag);
/******/ 			return linkTag;
/******/ 		};
/******/ 		var findStylesheet = (href, fullhref) => {
/******/ 			var existingLinkTags = document.getElementsByTagName("link");
/******/ 			for(var i = 0; i < existingLinkTags.length; i++) {
/******/ 				var tag = existingLinkTags[i];
/******/ 				var dataHref = tag.getAttribute("data-href") || tag.getAttribute("href");
/******/ 				if(tag.rel === "stylesheet" && (dataHref === href || dataHref === fullhref)) return tag;
/******/ 			}
/******/ 			var existingStyleTags = document.getElementsByTagName("style");
/******/ 			for(var i = 0; i < existingStyleTags.length; i++) {
/******/ 				var tag = existingStyleTags[i];
/******/ 				var dataHref = tag.getAttribute("data-href");
/******/ 				if(dataHref === href || dataHref === fullhref) return tag;
/******/ 			}
/******/ 		};
/******/ 		var loadStylesheet = (chunkId) => {
/******/ 			return new Promise((resolve, reject) => {
/******/ 				var href = __webpack_require__.miniCssF(chunkId);
/******/ 				var fullhref = __webpack_require__.p + href;
/******/ 				if(findStylesheet(href, fullhref)) return resolve();
/******/ 				createStylesheet(chunkId, fullhref, resolve, reject);
/******/ 			});
/******/ 		}
/******/ 		// no chunk loading
/******/ 		
/******/ 		var oldTags = [];
/******/ 		var newTags = [];
/******/ 		var applyHandler = (options) => {
/******/ 			return { dispose: () => {
/******/ 				for(var i = 0; i < oldTags.length; i++) {
/******/ 					var oldTag = oldTags[i];
/******/ 					if(oldTag.parentNode) oldTag.parentNode.removeChild(oldTag);
/******/ 				}
/******/ 				oldTags.length = 0;
/******/ 			}, apply: () => {
/******/ 				for(var i = 0; i < newTags.length; i++) newTags[i].rel = "stylesheet";
/******/ 				newTags.length = 0;
/******/ 			} };
/******/ 		}
/******/ 		__webpack_require__.hmrC.miniCss = (chunkIds, removedChunks, removedModules, promises, applyHandlers, updatedModulesList) => {
/******/ 			applyHandlers.push(applyHandler);
/******/ 			chunkIds.forEach((chunkId) => {
/******/ 				var href = __webpack_require__.miniCssF(chunkId);
/******/ 				var fullhref = __webpack_require__.p + href;
/******/ 				var oldTag = findStylesheet(href, fullhref);
/******/ 				if(!oldTag) return;
/******/ 				promises.push(new Promise((resolve, reject) => {
/******/ 					var tag = createStylesheet(chunkId, fullhref, () => {
/******/ 						tag.as = "style";
/******/ 						tag.rel = "preload";
/******/ 						resolve();
/******/ 					}, reject);
/******/ 					oldTags.push(oldTag);
/******/ 					newTags.push(tag);
/******/ 				}));
/******/ 			});
/******/ 		}
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = __webpack_require__.hmrS_jsonp = __webpack_require__.hmrS_jsonp || {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		__webpack_require__.f.j = (chunkId, promises) => {
/******/ 				// JSONP chunk loading for javascript
/******/ 				var installedChunkData = __webpack_require__.o(installedChunks, chunkId) ? installedChunks[chunkId] : undefined;
/******/ 				if(installedChunkData !== 0) { // 0 means "already installed".
/******/ 		
/******/ 					// a Promise means "currently loading".
/******/ 					if(installedChunkData) {
/******/ 						promises.push(installedChunkData[2]);
/******/ 					} else {
/******/ 						if(true) { // all chunks have JS
/******/ 							// setup Promise in chunk cache
/******/ 							var promise = new Promise((resolve, reject) => (installedChunkData = installedChunks[chunkId] = [resolve, reject]));
/******/ 							promises.push(installedChunkData[2] = promise);
/******/ 		
/******/ 							// start chunk loading
/******/ 							var url = __webpack_require__.p + __webpack_require__.u(chunkId);
/******/ 							// create error before stack unwound to get useful stacktrace later
/******/ 							var error = new Error();
/******/ 							var loadingEnded = (event) => {
/******/ 								if(__webpack_require__.o(installedChunks, chunkId)) {
/******/ 									installedChunkData = installedChunks[chunkId];
/******/ 									if(installedChunkData !== 0) installedChunks[chunkId] = undefined;
/******/ 									if(installedChunkData) {
/******/ 										var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 										var realSrc = event && event.target && event.target.src;
/******/ 										error.message = 'Loading chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')';
/******/ 										error.name = 'ChunkLoadError';
/******/ 										error.type = errorType;
/******/ 										error.request = realSrc;
/******/ 										installedChunkData[1](error);
/******/ 									}
/******/ 								}
/******/ 							};
/******/ 							__webpack_require__.l(url, loadingEnded, "chunk-" + chunkId, chunkId);
/******/ 						} else installedChunks[chunkId] = 0;
/******/ 					}
/******/ 				}
/******/ 		};
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		var currentUpdatedModulesList;
/******/ 		var waitingUpdateResolves = {};
/******/ 		function loadUpdateChunk(chunkId) {
/******/ 			return new Promise((resolve, reject) => {
/******/ 				waitingUpdateResolves[chunkId] = resolve;
/******/ 				// start update chunk loading
/******/ 				var url = __webpack_require__.p + __webpack_require__.hu(chunkId);
/******/ 				// create error before stack unwound to get useful stacktrace later
/******/ 				var error = new Error();
/******/ 				var loadingEnded = (event) => {
/******/ 					if(waitingUpdateResolves[chunkId]) {
/******/ 						waitingUpdateResolves[chunkId] = undefined
/******/ 						var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 						var realSrc = event && event.target && event.target.src;
/******/ 						error.message = 'Loading hot update chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')';
/******/ 						error.name = 'ChunkLoadError';
/******/ 						error.type = errorType;
/******/ 						error.request = realSrc;
/******/ 						reject(error);
/******/ 					}
/******/ 				};
/******/ 				__webpack_require__.l(url, loadingEnded);
/******/ 			});
/******/ 		}
/******/ 		
/******/ 		self["webpackHotUpdatewebpack"] = (chunkId, moreModules, runtime) => {
/******/ 			for(var moduleId in moreModules) {
/******/ 				if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 					currentUpdate[moduleId] = moreModules[moduleId];
/******/ 					if(currentUpdatedModulesList) currentUpdatedModulesList.push(moduleId);
/******/ 				}
/******/ 			}
/******/ 			if(runtime) currentUpdateRuntime.push(runtime);
/******/ 			if(waitingUpdateResolves[chunkId]) {
/******/ 				waitingUpdateResolves[chunkId]();
/******/ 				waitingUpdateResolves[chunkId] = undefined;
/******/ 			}
/******/ 		};
/******/ 		
/******/ 		var currentUpdateChunks;
/******/ 		var currentUpdate;
/******/ 		var currentUpdateRemovedChunks;
/******/ 		var currentUpdateRuntime;
/******/ 		function applyHandler(options) {
/******/ 			if (__webpack_require__.f) delete __webpack_require__.f.jsonpHmr;
/******/ 			currentUpdateChunks = undefined;
/******/ 			function getAffectedModuleEffects(updateModuleId) {
/******/ 				var outdatedModules = [updateModuleId];
/******/ 				var outdatedDependencies = {};
/******/ 		
/******/ 				var queue = outdatedModules.map(function (id) {
/******/ 					return {
/******/ 						chain: [id],
/******/ 						id: id
/******/ 					};
/******/ 				});
/******/ 				while (queue.length > 0) {
/******/ 					var queueItem = queue.pop();
/******/ 					var moduleId = queueItem.id;
/******/ 					var chain = queueItem.chain;
/******/ 					var module = __webpack_require__.c[moduleId];
/******/ 					if (
/******/ 						!module ||
/******/ 						(module.hot._selfAccepted && !module.hot._selfInvalidated)
/******/ 					)
/******/ 						continue;
/******/ 					if (module.hot._selfDeclined) {
/******/ 						return {
/******/ 							type: "self-declined",
/******/ 							chain: chain,
/******/ 							moduleId: moduleId
/******/ 						};
/******/ 					}
/******/ 					if (module.hot._main) {
/******/ 						return {
/******/ 							type: "unaccepted",
/******/ 							chain: chain,
/******/ 							moduleId: moduleId
/******/ 						};
/******/ 					}
/******/ 					for (var i = 0; i < module.parents.length; i++) {
/******/ 						var parentId = module.parents[i];
/******/ 						var parent = __webpack_require__.c[parentId];
/******/ 						if (!parent) continue;
/******/ 						if (parent.hot._declinedDependencies[moduleId]) {
/******/ 							return {
/******/ 								type: "declined",
/******/ 								chain: chain.concat([parentId]),
/******/ 								moduleId: moduleId,
/******/ 								parentId: parentId
/******/ 							};
/******/ 						}
/******/ 						if (outdatedModules.indexOf(parentId) !== -1) continue;
/******/ 						if (parent.hot._acceptedDependencies[moduleId]) {
/******/ 							if (!outdatedDependencies[parentId])
/******/ 								outdatedDependencies[parentId] = [];
/******/ 							addAllToSet(outdatedDependencies[parentId], [moduleId]);
/******/ 							continue;
/******/ 						}
/******/ 						delete outdatedDependencies[parentId];
/******/ 						outdatedModules.push(parentId);
/******/ 						queue.push({
/******/ 							chain: chain.concat([parentId]),
/******/ 							id: parentId
/******/ 						});
/******/ 					}
/******/ 				}
/******/ 		
/******/ 				return {
/******/ 					type: "accepted",
/******/ 					moduleId: updateModuleId,
/******/ 					outdatedModules: outdatedModules,
/******/ 					outdatedDependencies: outdatedDependencies
/******/ 				};
/******/ 			}
/******/ 		
/******/ 			function addAllToSet(a, b) {
/******/ 				for (var i = 0; i < b.length; i++) {
/******/ 					var item = b[i];
/******/ 					if (a.indexOf(item) === -1) a.push(item);
/******/ 				}
/******/ 			}
/******/ 		
/******/ 			// at begin all updates modules are outdated
/******/ 			// the "outdated" status can propagate to parents if they don't accept the children
/******/ 			var outdatedDependencies = {};
/******/ 			var outdatedModules = [];
/******/ 			var appliedUpdate = {};
/******/ 		
/******/ 			var warnUnexpectedRequire = function warnUnexpectedRequire(module) {
/******/ 				console.warn(
/******/ 					"[HMR] unexpected require(" + module.id + ") to disposed module"
/******/ 				);
/******/ 			};
/******/ 		
/******/ 			for (var moduleId in currentUpdate) {
/******/ 				if (__webpack_require__.o(currentUpdate, moduleId)) {
/******/ 					var newModuleFactory = currentUpdate[moduleId];
/******/ 					/** @type {TODO} */
/******/ 					var result;
/******/ 					if (newModuleFactory) {
/******/ 						result = getAffectedModuleEffects(moduleId);
/******/ 					} else {
/******/ 						result = {
/******/ 							type: "disposed",
/******/ 							moduleId: moduleId
/******/ 						};
/******/ 					}
/******/ 					/** @type {Error|false} */
/******/ 					var abortError = false;
/******/ 					var doApply = false;
/******/ 					var doDispose = false;
/******/ 					var chainInfo = "";
/******/ 					if (result.chain) {
/******/ 						chainInfo = "\nUpdate propagation: " + result.chain.join(" -> ");
/******/ 					}
/******/ 					switch (result.type) {
/******/ 						case "self-declined":
/******/ 							if (options.onDeclined) options.onDeclined(result);
/******/ 							if (!options.ignoreDeclined)
/******/ 								abortError = new Error(
/******/ 									"Aborted because of self decline: " +
/******/ 										result.moduleId +
/******/ 										chainInfo
/******/ 								);
/******/ 							break;
/******/ 						case "declined":
/******/ 							if (options.onDeclined) options.onDeclined(result);
/******/ 							if (!options.ignoreDeclined)
/******/ 								abortError = new Error(
/******/ 									"Aborted because of declined dependency: " +
/******/ 										result.moduleId +
/******/ 										" in " +
/******/ 										result.parentId +
/******/ 										chainInfo
/******/ 								);
/******/ 							break;
/******/ 						case "unaccepted":
/******/ 							if (options.onUnaccepted) options.onUnaccepted(result);
/******/ 							if (!options.ignoreUnaccepted)
/******/ 								abortError = new Error(
/******/ 									"Aborted because " + moduleId + " is not accepted" + chainInfo
/******/ 								);
/******/ 							break;
/******/ 						case "accepted":
/******/ 							if (options.onAccepted) options.onAccepted(result);
/******/ 							doApply = true;
/******/ 							break;
/******/ 						case "disposed":
/******/ 							if (options.onDisposed) options.onDisposed(result);
/******/ 							doDispose = true;
/******/ 							break;
/******/ 						default:
/******/ 							throw new Error("Unexception type " + result.type);
/******/ 					}
/******/ 					if (abortError) {
/******/ 						return {
/******/ 							error: abortError
/******/ 						};
/******/ 					}
/******/ 					if (doApply) {
/******/ 						appliedUpdate[moduleId] = newModuleFactory;
/******/ 						addAllToSet(outdatedModules, result.outdatedModules);
/******/ 						for (moduleId in result.outdatedDependencies) {
/******/ 							if (__webpack_require__.o(result.outdatedDependencies, moduleId)) {
/******/ 								if (!outdatedDependencies[moduleId])
/******/ 									outdatedDependencies[moduleId] = [];
/******/ 								addAllToSet(
/******/ 									outdatedDependencies[moduleId],
/******/ 									result.outdatedDependencies[moduleId]
/******/ 								);
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 					if (doDispose) {
/******/ 						addAllToSet(outdatedModules, [result.moduleId]);
/******/ 						appliedUpdate[moduleId] = warnUnexpectedRequire;
/******/ 					}
/******/ 				}
/******/ 			}
/******/ 			currentUpdate = undefined;
/******/ 		
/******/ 			// Store self accepted outdated modules to require them later by the module system
/******/ 			var outdatedSelfAcceptedModules = [];
/******/ 			for (var j = 0; j < outdatedModules.length; j++) {
/******/ 				var outdatedModuleId = outdatedModules[j];
/******/ 				var module = __webpack_require__.c[outdatedModuleId];
/******/ 				if (
/******/ 					module &&
/******/ 					(module.hot._selfAccepted || module.hot._main) &&
/******/ 					// removed self-accepted modules should not be required
/******/ 					appliedUpdate[outdatedModuleId] !== warnUnexpectedRequire &&
/******/ 					// when called invalidate self-accepting is not possible
/******/ 					!module.hot._selfInvalidated
/******/ 				) {
/******/ 					outdatedSelfAcceptedModules.push({
/******/ 						module: outdatedModuleId,
/******/ 						require: module.hot._requireSelf,
/******/ 						errorHandler: module.hot._selfAccepted
/******/ 					});
/******/ 				}
/******/ 			}
/******/ 		
/******/ 			var moduleOutdatedDependencies;
/******/ 		
/******/ 			return {
/******/ 				dispose: function () {
/******/ 					currentUpdateRemovedChunks.forEach(function (chunkId) {
/******/ 						delete installedChunks[chunkId];
/******/ 					});
/******/ 					currentUpdateRemovedChunks = undefined;
/******/ 		
/******/ 					var idx;
/******/ 					var queue = outdatedModules.slice();
/******/ 					while (queue.length > 0) {
/******/ 						var moduleId = queue.pop();
/******/ 						var module = __webpack_require__.c[moduleId];
/******/ 						if (!module) continue;
/******/ 		
/******/ 						var data = {};
/******/ 		
/******/ 						// Call dispose handlers
/******/ 						var disposeHandlers = module.hot._disposeHandlers;
/******/ 						for (j = 0; j < disposeHandlers.length; j++) {
/******/ 							disposeHandlers[j].call(null, data);
/******/ 						}
/******/ 						__webpack_require__.hmrD[moduleId] = data;
/******/ 		
/******/ 						// disable module (this disables requires from this module)
/******/ 						module.hot.active = false;
/******/ 		
/******/ 						// remove module from cache
/******/ 						delete __webpack_require__.c[moduleId];
/******/ 		
/******/ 						// when disposing there is no need to call dispose handler
/******/ 						delete outdatedDependencies[moduleId];
/******/ 		
/******/ 						// remove "parents" references from all children
/******/ 						for (j = 0; j < module.children.length; j++) {
/******/ 							var child = __webpack_require__.c[module.children[j]];
/******/ 							if (!child) continue;
/******/ 							idx = child.parents.indexOf(moduleId);
/******/ 							if (idx >= 0) {
/******/ 								child.parents.splice(idx, 1);
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 		
/******/ 					// remove outdated dependency from module children
/******/ 					var dependency;
/******/ 					for (var outdatedModuleId in outdatedDependencies) {
/******/ 						if (__webpack_require__.o(outdatedDependencies, outdatedModuleId)) {
/******/ 							module = __webpack_require__.c[outdatedModuleId];
/******/ 							if (module) {
/******/ 								moduleOutdatedDependencies =
/******/ 									outdatedDependencies[outdatedModuleId];
/******/ 								for (j = 0; j < moduleOutdatedDependencies.length; j++) {
/******/ 									dependency = moduleOutdatedDependencies[j];
/******/ 									idx = module.children.indexOf(dependency);
/******/ 									if (idx >= 0) module.children.splice(idx, 1);
/******/ 								}
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 				},
/******/ 				apply: function (reportError) {
/******/ 					// insert new code
/******/ 					for (var updateModuleId in appliedUpdate) {
/******/ 						if (__webpack_require__.o(appliedUpdate, updateModuleId)) {
/******/ 							__webpack_require__.m[updateModuleId] = appliedUpdate[updateModuleId];
/******/ 						}
/******/ 					}
/******/ 		
/******/ 					// run new runtime modules
/******/ 					for (var i = 0; i < currentUpdateRuntime.length; i++) {
/******/ 						currentUpdateRuntime[i](__webpack_require__);
/******/ 					}
/******/ 		
/******/ 					// call accept handlers
/******/ 					for (var outdatedModuleId in outdatedDependencies) {
/******/ 						if (__webpack_require__.o(outdatedDependencies, outdatedModuleId)) {
/******/ 							var module = __webpack_require__.c[outdatedModuleId];
/******/ 							if (module) {
/******/ 								moduleOutdatedDependencies =
/******/ 									outdatedDependencies[outdatedModuleId];
/******/ 								var callbacks = [];
/******/ 								var errorHandlers = [];
/******/ 								var dependenciesForCallbacks = [];
/******/ 								for (var j = 0; j < moduleOutdatedDependencies.length; j++) {
/******/ 									var dependency = moduleOutdatedDependencies[j];
/******/ 									var acceptCallback =
/******/ 										module.hot._acceptedDependencies[dependency];
/******/ 									var errorHandler =
/******/ 										module.hot._acceptedErrorHandlers[dependency];
/******/ 									if (acceptCallback) {
/******/ 										if (callbacks.indexOf(acceptCallback) !== -1) continue;
/******/ 										callbacks.push(acceptCallback);
/******/ 										errorHandlers.push(errorHandler);
/******/ 										dependenciesForCallbacks.push(dependency);
/******/ 									}
/******/ 								}
/******/ 								for (var k = 0; k < callbacks.length; k++) {
/******/ 									try {
/******/ 										callbacks[k].call(null, moduleOutdatedDependencies);
/******/ 									} catch (err) {
/******/ 										if (typeof errorHandlers[k] === "function") {
/******/ 											try {
/******/ 												errorHandlers[k](err, {
/******/ 													moduleId: outdatedModuleId,
/******/ 													dependencyId: dependenciesForCallbacks[k]
/******/ 												});
/******/ 											} catch (err2) {
/******/ 												if (options.onErrored) {
/******/ 													options.onErrored({
/******/ 														type: "accept-error-handler-errored",
/******/ 														moduleId: outdatedModuleId,
/******/ 														dependencyId: dependenciesForCallbacks[k],
/******/ 														error: err2,
/******/ 														originalError: err
/******/ 													});
/******/ 												}
/******/ 												if (!options.ignoreErrored) {
/******/ 													reportError(err2);
/******/ 													reportError(err);
/******/ 												}
/******/ 											}
/******/ 										} else {
/******/ 											if (options.onErrored) {
/******/ 												options.onErrored({
/******/ 													type: "accept-errored",
/******/ 													moduleId: outdatedModuleId,
/******/ 													dependencyId: dependenciesForCallbacks[k],
/******/ 													error: err
/******/ 												});
/******/ 											}
/******/ 											if (!options.ignoreErrored) {
/******/ 												reportError(err);
/******/ 											}
/******/ 										}
/******/ 									}
/******/ 								}
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 		
/******/ 					// Load self accepted modules
/******/ 					for (var o = 0; o < outdatedSelfAcceptedModules.length; o++) {
/******/ 						var item = outdatedSelfAcceptedModules[o];
/******/ 						var moduleId = item.module;
/******/ 						try {
/******/ 							item.require(moduleId);
/******/ 						} catch (err) {
/******/ 							if (typeof item.errorHandler === "function") {
/******/ 								try {
/******/ 									item.errorHandler(err, {
/******/ 										moduleId: moduleId,
/******/ 										module: __webpack_require__.c[moduleId]
/******/ 									});
/******/ 								} catch (err2) {
/******/ 									if (options.onErrored) {
/******/ 										options.onErrored({
/******/ 											type: "self-accept-error-handler-errored",
/******/ 											moduleId: moduleId,
/******/ 											error: err2,
/******/ 											originalError: err
/******/ 										});
/******/ 									}
/******/ 									if (!options.ignoreErrored) {
/******/ 										reportError(err2);
/******/ 										reportError(err);
/******/ 									}
/******/ 								}
/******/ 							} else {
/******/ 								if (options.onErrored) {
/******/ 									options.onErrored({
/******/ 										type: "self-accept-errored",
/******/ 										moduleId: moduleId,
/******/ 										error: err
/******/ 									});
/******/ 								}
/******/ 								if (!options.ignoreErrored) {
/******/ 									reportError(err);
/******/ 								}
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 		
/******/ 					return outdatedModules;
/******/ 				}
/******/ 			};
/******/ 		}
/******/ 		__webpack_require__.hmrI.jsonp = function (moduleId, applyHandlers) {
/******/ 			if (!currentUpdate) {
/******/ 				currentUpdate = {};
/******/ 				currentUpdateRuntime = [];
/******/ 				currentUpdateRemovedChunks = [];
/******/ 				applyHandlers.push(applyHandler);
/******/ 			}
/******/ 			if (!__webpack_require__.o(currentUpdate, moduleId)) {
/******/ 				currentUpdate[moduleId] = __webpack_require__.m[moduleId];
/******/ 			}
/******/ 		};
/******/ 		__webpack_require__.hmrC.jsonp = function (
/******/ 			chunkIds,
/******/ 			removedChunks,
/******/ 			removedModules,
/******/ 			promises,
/******/ 			applyHandlers,
/******/ 			updatedModulesList
/******/ 		) {
/******/ 			applyHandlers.push(applyHandler);
/******/ 			currentUpdateChunks = {};
/******/ 			currentUpdateRemovedChunks = removedChunks;
/******/ 			currentUpdate = removedModules.reduce(function (obj, key) {
/******/ 				obj[key] = false;
/******/ 				return obj;
/******/ 			}, {});
/******/ 			currentUpdateRuntime = [];
/******/ 			chunkIds.forEach(function (chunkId) {
/******/ 				if (
/******/ 					__webpack_require__.o(installedChunks, chunkId) &&
/******/ 					installedChunks[chunkId] !== undefined
/******/ 				) {
/******/ 					promises.push(loadUpdateChunk(chunkId, updatedModulesList));
/******/ 					currentUpdateChunks[chunkId] = true;
/******/ 				}
/******/ 			});
/******/ 			if (__webpack_require__.f) {
/******/ 				__webpack_require__.f.jsonpHmr = function (chunkId, promises) {
/******/ 					if (
/******/ 						currentUpdateChunks &&
/******/ 						!__webpack_require__.o(currentUpdateChunks, chunkId) &&
/******/ 						__webpack_require__.o(installedChunks, chunkId) &&
/******/ 						installedChunks[chunkId] !== undefined
/******/ 					) {
/******/ 						promises.push(loadUpdateChunk(chunkId));
/******/ 						currentUpdateChunks[chunkId] = true;
/******/ 					}
/******/ 				};
/******/ 			}
/******/ 		};
/******/ 		
/******/ 		__webpack_require__.hmrM = () => {
/******/ 			if (typeof fetch === "undefined") throw new Error("No browser support: need fetch API");
/******/ 			return fetch(__webpack_require__.p + __webpack_require__.hmrF()).then((response) => {
/******/ 				if(response.status === 404) return; // no update available
/******/ 				if(!response.ok) throw new Error("Failed to fetch update manifest " + response.statusText);
/******/ 				return response.json();
/******/ 			});
/******/ 		};
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkIds[i]] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkwebpack"] = self["webpackChunkwebpack"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// module cache are used so entry inlining is disabled
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["vendors-node_modules_babel_runtime_regenerator_index_js-node_modules_redux-devtools_extension-eb8580"], () => (__webpack_require__("./src/index.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLG1CQUFtQiwyQkFBMkI7V0FDOUM7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEtBQUs7V0FDTDtXQUNBOztXQUVBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBO1dBQ0Esa0JBQWtCLGNBQWM7V0FDaEM7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7V0FFQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBO1dBQ0E7V0FDQTtXQUNBLGNBQWMsTUFBTTtXQUNwQjtXQUNBO1dBQ0E7V0FDQSxLQUFLO1dBQ0w7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGNBQWMsYUFBYTtXQUMzQjtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7V0FDQTtXQUNBLGlCQUFpQiw0QkFBNEI7V0FDN0M7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLElBQUk7V0FDSjtXQUNBOztXQUVBOztXQUVBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsSUFBSTtXQUNKOztXQUVBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7V0FFQTs7V0FFQTtXQUNBO1dBQ0EsZ0JBQWdCLDRCQUE0QjtXQUM1QztXQUNBO1dBQ0E7O1dBRUE7V0FDQTs7V0FFQTtXQUNBOztXQUVBO1dBQ0E7O1dBRUE7V0FDQSxnQkFBZ0IsNEJBQTRCO1dBQzVDO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGtCQUFrQix1Q0FBdUM7V0FDekQ7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxHQUFHO1dBQ0g7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7V0FDQSxtQkFBbUIsaUNBQWlDO1dBQ3BEO1dBQ0E7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxzQkFBc0IsdUNBQXVDO1dBQzdEO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHNCQUFzQixzQkFBc0I7V0FDNUM7V0FDQTtXQUNBLFNBQVM7V0FDVDtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsV0FBVztXQUNYLFdBQVc7V0FDWDtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLFlBQVk7V0FDWjtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxVQUFVO1dBQ1Y7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsV0FBVztXQUNYO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBO1dBQ0EsbUJBQW1CLHdDQUF3QztXQUMzRDtXQUNBO1dBQ0E7V0FDQTtXQUNBLE1BQU07V0FDTjtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsUUFBUTtXQUNSLFFBQVE7V0FDUjtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxTQUFTO1dBQ1Q7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsT0FBTztXQUNQO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxRQUFRO1dBQ1I7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEVBQUUsSUFBSTtXQUNOO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEVBQUU7V0FDRjtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBO1dBQ0E7V0FDQTtXQUNBLHNDQUFzQztXQUN0QztXQUNBO1dBQ0EsRUFBRTtXQUNGOztXQUVBOztXQUVBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLE1BQU0scUJBQXFCO1dBQzNCO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7V0FDQTtXQUNBOzs7OztVRTVqQkE7VUFDQTtVQUNBO1VBQ0E7VUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYnBhY2svLi9zcmMvYXBwLmpzIiwid2VicGFjazovL3dlYnBhY2svLi9zcmMvY29tcG9uZW50cy9Gb290ZXIvRm9vdGVyLmpzeCIsIndlYnBhY2s6Ly93ZWJwYWNrLy4vc3JjL2NvbXBvbmVudHMvSGVhZGVyL0hlYWRlci5qc3giLCJ3ZWJwYWNrOi8vd2VicGFjay8uL3NyYy9jb21wb25lbnRzL0hlYWRlci9Mb2NhdGlvbi9Mb2NhdGlvbi5qc3giLCJ3ZWJwYWNrOi8vd2VicGFjay8uL3NyYy9jb21wb25lbnRzL0hlYWRlci9TaWduaW4vU2lnbmluLmpzeCIsIndlYnBhY2s6Ly93ZWJwYWNrLy4vc3JjL2NvbXBvbmVudHMvTGF5b3V0L0xheW91dC5qc3giLCJ3ZWJwYWNrOi8vd2VicGFjay8uL3NyYy9jb21wb25lbnRzL1Byb2ZpbGUvUHJvZmlsZS5qc3giLCJ3ZWJwYWNrOi8vd2VicGFjay8uL3NyYy9jb21wb25lbnRzL1NwaW5uZXIvU3Bpbm5lci5qc3giLCJ3ZWJwYWNrOi8vd2VicGFjay8uL3NyYy9oZWxwZXJzL3ByZWxvYWRBc0Jsb2IuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay8uL3NyYy9ob2MvUHJpdmF0ZUF1dGguanN4Iiwid2VicGFjazovL3dlYnBhY2svLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vd2VicGFjay8uL3NyYy9wYWdlcy9NYWluUGFnZS9NYWluUGFnZS5qc3giLCJ3ZWJwYWNrOi8vd2VicGFjay8uL3NyYy9wYWdlcy9Ob3RGb3VuZC9Ob3RGb3VuZC5qc3giLCJ3ZWJwYWNrOi8vd2VicGFjay8uL3NyYy9yZWR1eC9hY3Rpb25zL2F1dGguanMiLCJ3ZWJwYWNrOi8vd2VicGFjay8uL3NyYy9yZWR1eC9hY3Rpb25zL21haW4uanMiLCJ3ZWJwYWNrOi8vd2VicGFjay8uL3NyYy9yZWR1eC9hY3Rpb25zL3Bob3Rvcy5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLy4vc3JjL3JlZHV4L3JlZHVjZXJzL2F1dGguanMiLCJ3ZWJwYWNrOi8vd2VicGFjay8uL3NyYy9yZWR1eC9yZWR1Y2Vycy9pbmRleC5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLy4vc3JjL3JlZHV4L3JlZHVjZXJzL21haW4uanMiLCJ3ZWJwYWNrOi8vd2VicGFjay8uL3NyYy9yZWR1eC9yZWR1Y2Vycy9waG90b3MuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay8uL3NyYy9zdHlsZXMuY3NzIiwid2VicGFjazovL3dlYnBhY2svLi9zcmMvY29tcG9uZW50cy9Gb290ZXIvZm9vdGVyLm0uY3NzIiwid2VicGFjazovL3dlYnBhY2svLi9zcmMvY29tcG9uZW50cy9IZWFkZXIvTG9jYXRpb24vbG9jYXRpb24ubS5jc3MiLCJ3ZWJwYWNrOi8vd2VicGFjay8uL3NyYy9jb21wb25lbnRzL0hlYWRlci9TaWduaW4vc2lnbmluLm0uY3NzIiwid2VicGFjazovL3dlYnBhY2svLi9zcmMvY29tcG9uZW50cy9IZWFkZXIvaGVhZGVyLm0uY3NzIiwid2VicGFjazovL3dlYnBhY2svLi9zcmMvY29tcG9uZW50cy9Qcm9maWxlL3Byb2ZpbGUubS5jc3MiLCJ3ZWJwYWNrOi8vd2VicGFjay8uL3NyYy9jb21wb25lbnRzL1NwaW5uZXIvc3Bpbm5lci5tLmNzcyIsIndlYnBhY2s6Ly93ZWJwYWNrLy4vc3JjL3BhZ2VzL01haW5QYWdlL21haW5QYWdlLm0uY3NzIiwid2VicGFjazovL3dlYnBhY2svLi9zcmMvc3R5bGVzLmNzcz80NGIyIiwid2VicGFjazovL3dlYnBhY2svLi9zcmMvY29tcG9uZW50cy9Gb290ZXIvZm9vdGVyLm0uY3NzPzY0YmIiLCJ3ZWJwYWNrOi8vd2VicGFjay8uL3NyYy9jb21wb25lbnRzL0hlYWRlci9Mb2NhdGlvbi9sb2NhdGlvbi5tLmNzcz9mMzI1Iiwid2VicGFjazovL3dlYnBhY2svLi9zcmMvY29tcG9uZW50cy9IZWFkZXIvU2lnbmluL3NpZ25pbi5tLmNzcz9iYzM4Iiwid2VicGFjazovL3dlYnBhY2svLi9zcmMvY29tcG9uZW50cy9IZWFkZXIvaGVhZGVyLm0uY3NzP2U2ZTMiLCJ3ZWJwYWNrOi8vd2VicGFjay8uL3NyYy9jb21wb25lbnRzL1Byb2ZpbGUvcHJvZmlsZS5tLmNzcz9lNjQ2Iiwid2VicGFjazovL3dlYnBhY2svLi9zcmMvY29tcG9uZW50cy9TcGlubmVyL3NwaW5uZXIubS5jc3M/ZWY1NCIsIndlYnBhY2s6Ly93ZWJwYWNrLy4vc3JjL3BhZ2VzL01haW5QYWdlL21haW5QYWdlLm0uY3NzPzMzMWQiLCJ3ZWJwYWNrOi8vd2VicGFjay9pZ25vcmVkfC9ob21lL2RhcnlhL1Byb2plY3RzL2NvdXJzZS1qcy9ub2RlX21vZHVsZXMvYXNuMS5qcy9ub2RlX21vZHVsZXMvYm4uanMvbGlifGJ1ZmZlciIsIndlYnBhY2s6Ly93ZWJwYWNrL2lnbm9yZWR8L2hvbWUvZGFyeWEvUHJvamVjdHMvY291cnNlLWpzL25vZGVfbW9kdWxlcy9ibi5qcy9saWJ8YnVmZmVyIiwid2VicGFjazovL3dlYnBhY2svaWdub3JlZHwvaG9tZS9kYXJ5YS9Qcm9qZWN0cy9jb3Vyc2UtanMvbm9kZV9tb2R1bGVzL2Jyb3JhbmR8Y3J5cHRvIiwid2VicGFjazovL3dlYnBhY2svaWdub3JlZHwvaG9tZS9kYXJ5YS9Qcm9qZWN0cy9jb3Vyc2UtanMvbm9kZV9tb2R1bGVzL2NyZWF0ZS1lY2RoL25vZGVfbW9kdWxlcy9ibi5qcy9saWJ8YnVmZmVyIiwid2VicGFjazovL3dlYnBhY2svaWdub3JlZHwvaG9tZS9kYXJ5YS9Qcm9qZWN0cy9jb3Vyc2UtanMvbm9kZV9tb2R1bGVzL2RpZmZpZS1oZWxsbWFuL25vZGVfbW9kdWxlcy9ibi5qcy9saWJ8YnVmZmVyIiwid2VicGFjazovL3dlYnBhY2svaWdub3JlZHwvaG9tZS9kYXJ5YS9Qcm9qZWN0cy9jb3Vyc2UtanMvbm9kZV9tb2R1bGVzL2RvdGVudi9saWJ8ZnMiLCJ3ZWJwYWNrOi8vd2VicGFjay9pZ25vcmVkfC9ob21lL2RhcnlhL1Byb2plY3RzL2NvdXJzZS1qcy9ub2RlX21vZHVsZXMvZWxsaXB0aWMvbm9kZV9tb2R1bGVzL2JuLmpzL2xpYnxidWZmZXIiLCJ3ZWJwYWNrOi8vd2VicGFjay9pZ25vcmVkfC9ob21lL2RhcnlhL1Byb2plY3RzL2NvdXJzZS1qcy9ub2RlX21vZHVsZXMvbWlsbGVyLXJhYmluL25vZGVfbW9kdWxlcy9ibi5qcy9saWJ8YnVmZmVyIiwid2VicGFjazovL3dlYnBhY2svaWdub3JlZHwvaG9tZS9kYXJ5YS9Qcm9qZWN0cy9jb3Vyc2UtanMvbm9kZV9tb2R1bGVzL3B1YmxpYy1lbmNyeXB0L25vZGVfbW9kdWxlcy9ibi5qcy9saWJ8YnVmZmVyIiwid2VicGFjazovL3dlYnBhY2svaWdub3JlZHwvaG9tZS9kYXJ5YS9Qcm9qZWN0cy9jb3Vyc2UtanMvbm9kZV9tb2R1bGVzL3JlYWRhYmxlLXN0cmVhbS9saWIvaW50ZXJuYWwvc3RyZWFtc3x1dGlsIiwid2VicGFjazovL3dlYnBhY2svaWdub3JlZHwvaG9tZS9kYXJ5YS9Qcm9qZWN0cy9jb3Vyc2UtanMvbm9kZV9tb2R1bGVzL3JlYWRhYmxlLXN0cmVhbS9saWJ8dXRpbCIsIndlYnBhY2s6Ly93ZWJwYWNrL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3dlYnBhY2svd2VicGFjay9ydW50aW1lL2NodW5rIGxvYWRlZCIsIndlYnBhY2s6Ly93ZWJwYWNrL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3dlYnBhY2svd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3dlYnBhY2svd2VicGFjay9ydW50aW1lL2Vuc3VyZSBjaHVuayIsIndlYnBhY2s6Ly93ZWJwYWNrL3dlYnBhY2svcnVudGltZS9nZXQgamF2YXNjcmlwdCBjaHVuayBmaWxlbmFtZSIsIndlYnBhY2s6Ly93ZWJwYWNrL3dlYnBhY2svcnVudGltZS9nZXQgamF2YXNjcmlwdCB1cGRhdGUgY2h1bmsgZmlsZW5hbWUiLCJ3ZWJwYWNrOi8vd2VicGFjay93ZWJwYWNrL3J1bnRpbWUvZ2V0IG1pbmktY3NzIGNodW5rIGZpbGVuYW1lIiwid2VicGFjazovL3dlYnBhY2svd2VicGFjay9ydW50aW1lL2dldCB1cGRhdGUgbWFuaWZlc3QgZmlsZW5hbWUiLCJ3ZWJwYWNrOi8vd2VicGFjay93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giLCJ3ZWJwYWNrOi8vd2VicGFjay93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3dlYnBhY2svd2VicGFjay9ydW50aW1lL2hhcm1vbnkgbW9kdWxlIGRlY29yYXRvciIsIndlYnBhY2s6Ly93ZWJwYWNrL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vd2VicGFjay93ZWJwYWNrL3J1bnRpbWUvbG9hZCBzY3JpcHQiLCJ3ZWJwYWNrOi8vd2VicGFjay93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3dlYnBhY2svd2VicGFjay9ydW50aW1lL25vZGUgbW9kdWxlIGRlY29yYXRvciIsIndlYnBhY2s6Ly93ZWJwYWNrL3dlYnBhY2svcnVudGltZS9ob3QgbW9kdWxlIHJlcGxhY2VtZW50Iiwid2VicGFjazovL3dlYnBhY2svd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vd2VicGFjay93ZWJwYWNrL3J1bnRpbWUvY3NzIGxvYWRpbmciLCJ3ZWJwYWNrOi8vd2VicGFjay93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly93ZWJwYWNrL3dlYnBhY2svYmVmb3JlLXN0YXJ0dXAiLCJ3ZWJwYWNrOi8vd2VicGFjay93ZWJwYWNrL3N0YXJ0dXAiLCJ3ZWJwYWNrOi8vd2VicGFjay93ZWJwYWNrL2FmdGVyLXN0YXJ0dXAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7U3VzcGVuc2UsIHVzZUVmZmVjdH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0ICcuL3N0eWxlcy5jc3MnO1xuaW1wb3J0IHtSb3V0ZSwgUm91dGVzLCB1c2VOYXZpZ2F0ZX0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XG5pbXBvcnQge3VzZURpc3BhdGNofSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQge2F1dGh9IGZyb20gJ0AvcmVkdXgvYWN0aW9ucy9hdXRoJztcbmltcG9ydCBOb3RGb3VuZCBmcm9tICdAL3BhZ2VzL05vdEZvdW5kL05vdEZvdW5kJztcbmltcG9ydCBNYWluUGFnZSBmcm9tICdAL3BhZ2VzL01haW5QYWdlL01haW5QYWdlJztcbmltcG9ydCBMYXlvdXQgZnJvbSAnQGNvbXBvbmVudHMvTGF5b3V0L0xheW91dCc7XG5pbXBvcnQgU3Bpbm5lciBmcm9tICdAY29tcG9uZW50cy9TcGlubmVyL1NwaW5uZXInO1xuaW1wb3J0IHtQcml2YXRlQXV0aH0gZnJvbSAnLi9ob2MvUHJpdmF0ZUF1dGgnO1xuXG5jb25zdCBQcm9maWxlQ29udGVudCA9IFJlYWN0LmxhenkoKCkgPT4gaW1wb3J0KCdAL3BhZ2VzL1Byb2ZpbGVDb250ZW50L1Byb2ZpbGVDb250ZW50JykpO1xuY29uc3QgUGhvdG9QYWdlID0gUmVhY3QubGF6eSgoKSA9PiBpbXBvcnQoJ0AvcGFnZXMvUGhvdG9QYWdlL1Bob3RvUGFnZScpKTtcbmNvbnN0IEFwcCA9ICgpID0+IHtcbiAgY29uc3QgbmF2aWdhdGUgPSB1c2VOYXZpZ2F0ZSgpLFxuICAgIGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcblxuICBjb25zdCBhY2Nlc3NUb2tlbiA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdhY2Nlc3NUb2tlbicpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgbGV0IHVybFNlYXJjaFBhcmFtcyA9IG5ldyBVUkxTZWFyY2hQYXJhbXMod2luZG93LmxvY2F0aW9uLnNlYXJjaCk7XG4gICAgbGV0IHBhcmFtcyA9IE9iamVjdC5mcm9tRW50cmllcyh1cmxTZWFyY2hQYXJhbXMuZW50cmllcygpKTtcblxuICAgIGRpc3BhdGNoKFxuICAgICAgYXV0aChwYXJhbXM/LmNvZGUsICgpID0+IHtcbiAgICAgICAgcGFyYW1zLnRvU3RyaW5nKCk7XG4gICAgICAgIHdpbmRvdy5oaXN0b3J5LnB1c2hTdGF0ZSh7fSwgZG9jdW1lbnQudGl0bGUsIHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZSk7XG4gICAgICAgIG5hdmlnYXRlKCdwaG90b3MnKTtcbiAgICAgIH0pXG4gICAgKTtcbiAgfSwgW10pO1xuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxSb3V0ZXM+XG4gICAgICAgIDxSb3V0ZSBwYXRoPVwiL2NvdXJjZS1qcy9cIiBlbGVtZW50PXs8TGF5b3V0Lz59PlxuICAgICAgICAgIDxSb3V0ZSBpbmRleCBlbGVtZW50PXs8TWFpblBhZ2UvPn0vPlxuICAgICAgICAgIDxSb3V0ZVxuICAgICAgICAgICAgcGF0aD1cInBob3Rvc1wiXG4gICAgICAgICAgICBlbGVtZW50PXtcbiAgICAgICAgICAgICAgPFByaXZhdGVBdXRoIGlzQXV0aD17YWNjZXNzVG9rZW59PlxuICAgICAgICAgICAgICAgIDxTdXNwZW5zZSBmYWxsYmFjaz17PFNwaW5uZXIvPn0+XG4gICAgICAgICAgICAgICAgICA8UHJvZmlsZUNvbnRlbnQvPlxuICAgICAgICAgICAgICAgIDwvU3VzcGVuc2U+XG4gICAgICAgICAgICAgIDwvUHJpdmF0ZUF1dGg+XG4gICAgICAgICAgICB9XG4gICAgICAgICAgLz5cblxuICAgICAgICAgIDxSb3V0ZVxuICAgICAgICAgICAgcGF0aD1cInBob3Rvcy86cGhvdG9JZFwiXG4gICAgICAgICAgICBlbGVtZW50PXtcbiAgICAgICAgICAgICAgPFByaXZhdGVBdXRoIGlzQXV0aD17YWNjZXNzVG9rZW59PlxuICAgICAgICAgICAgICAgIDxTdXNwZW5zZSBmYWxsYmFjaz17PFNwaW5uZXIvPn0+XG4gICAgICAgICAgICAgICAgICA8UGhvdG9QYWdlLz5cbiAgICAgICAgICAgICAgICA8L1N1c3BlbnNlPlxuICAgICAgICAgICAgICA8L1ByaXZhdGVBdXRoPlxuICAgICAgICAgICAgfVxuICAgICAgICAgIC8+XG4gICAgICAgICAgPFJvdXRlIHBhdGg9XCIqXCIgZWxlbWVudD17PE5vdEZvdW5kLz59Lz5cbiAgICAgICAgPC9Sb3V0ZT5cbiAgICAgIDwvUm91dGVzPlxuICAgIDwvPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQXBwO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9mb290ZXIubS5jc3MnO1xuaW1wb3J0IGxvZ28gZnJvbSAnQGltYWdlcy9sb2dvLWZvb3Rlci5wbmcnO1xuXG5jb25zdCBGb290ZXIgPSAoKSA9PiB7XG4gIGNvbnN0IHllYXIgPSBuZXcgRGF0ZSgpLmdldEZ1bGxZZWFyKClcbiAgcmV0dXJuIChcbiAgICA8Zm9vdGVyIGNsYXNzTmFtZT17c3R5bGVzLmZvb3Rlcn0+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhaW5lcn0+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZm9vdGVyVG9wfT5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhY3RzfT5cbiAgICAgICAgICAgIDxzcGFuPtCa0L7QvdGC0LDQutGC0Ys8L3NwYW4+XG4gICAgICAgICAgICA8dWwgY2xhc3NOYW1lPXtzdHlsZXMuY29udGFjdHNMaXN0fT5cbiAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT17c3R5bGVzLmxpc3RJdGVtVGVsfT5cbiAgICAgICAgICAgICAgICA8YSBocmVmPVwidGVsOis3OTk5OTk5OTk5OVwiPis3KDk5OSktOTk5LTk5LTk5PC9hPlxuICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPXtzdHlsZXMubGlzdEl0ZW1NYWlsfT5cbiAgICAgICAgICAgICAgICA8YSBocmVmPVwiZW1haWw6dGVzdEBtYWlsLnJ1XCI+dGVzdEBtYWlsLnJ1PC9hPlxuICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgIDxpbWcgc3JjPXtsb2dvfSBhbHQ9e2xvZ299Lz5cblxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuc29jaWFsfT5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17c3R5bGVzLmluU29jaWFsVGV4dH0+0JzRiyDQsiDRgdC+0YbRgdC10YLRj9GFPC9zcGFuPlxuICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT17c3R5bGVzLnNvY2lhbExpc3R9PlxuICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPXtzdHlsZXMuc29jaWFsTG9zdEl0ZW19PlxuICAgICAgICAgICAgICAgIDxhXG4gICAgICAgICAgICAgICAgICBocmVmPVwiaHR0cHM6Ly92ay5jb20vXCJcbiAgICAgICAgICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e1tzdHlsZXMubGluaywgc3R5bGVzLnZrXS5qb2luKCcgJyl9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT17c3R5bGVzLnNvY2lhbExvc3RJdGVtfT5cbiAgICAgICAgICAgICAgICA8YVxuICAgICAgICAgICAgICAgICAgaHJlZj1cImh0dHBzOi8vd3d3Lmdvb2dsZS5jb20vXCJcbiAgICAgICAgICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e1tzdHlsZXMubGluaywgc3R5bGVzLmdvb2dsZV0uam9pbignICcpfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9e3N0eWxlcy5zb2NpYWxMb3N0SXRlbX0+XG4gICAgICAgICAgICAgICAgPGFcbiAgICAgICAgICAgICAgICAgIGhyZWY9XCJodHRwczovL29rLnJ1L1wiXG4gICAgICAgICAgICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtbc3R5bGVzLmxpbmssIHN0eWxlcy5va10uam9pbignICcpfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICA8L3VsPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5mb290ZXJCb3R0b219PlxuICAgICAgICA8c21hbGwgY2xhc3NOYW1lPXtzdHlsZXMuZm9vdGVyQ29weX0+wql7eWVhcn0gUGF2bGVua28gRGFyeWE8L3NtYWxsPlxuICAgICAgPC9kaXY+XG4gICAgPC9mb290ZXI+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBGb290ZXI7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHN0eWxlcyBmcm9tICcuL2hlYWRlci5tLmNzcyc7XG5pbXBvcnQgbG9nbyBmcm9tICdAaW1hZ2VzL2xvZ28ucG5nJztcbmltcG9ydCBMb2NhdGlvbiBmcm9tICdAY29tcG9uZW50cy9IZWFkZXIvTG9jYXRpb24vTG9jYXRpb24nO1xuaW1wb3J0IFNpZ25JbiBmcm9tICdAY29tcG9uZW50cy9IZWFkZXIvU2lnbmluL1NpZ25pbic7XG5pbXBvcnQgUHJvZmlsZSBmcm9tICdAY29tcG9uZW50cy9Qcm9maWxlL1Byb2ZpbGUnO1xuaW1wb3J0IHt1c2VTZWxlY3Rvcn0gZnJvbSAncmVhY3QtcmVkdXgnO1xuaW1wb3J0IHtMaW5rfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcblxuY29uc3QgSGVhZGVyID0gKCkgPT4ge1xuICBjb25zdCBpc0F1dGggPSB1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLmF1dGguaXNBdXRoKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XG4gICAgICA8aGVhZGVyIGNsYXNzTmFtZT17c3R5bGVzLmhlYWRlcn0+XG4gICAgICAgIDxMaW5rIHRvPVwiL1wiPlxuICAgICAgICAgIDxpbWcgc3JjPXtsb2dvfSBjbGFzc05hbWU9e3N0eWxlcy5sb2dvfSBhbHQ9XCJsb2dvXCIvPlxuICAgICAgICA8L0xpbms+XG4gICAgICAgIDxuYXY+XG4gICAgICAgICAgPHVsIGNsYXNzTmFtZT17c3R5bGVzLmxpc3R9PlxuICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9e3N0eWxlcy5saW5rfSBocmVmPVwiI1wiPlxuICAgICAgICAgICAgICAgINCeINC90LDRgVxuICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9e3N0eWxlcy5saW5rfSBocmVmPVwiI1wiPlxuICAgICAgICAgICAgICAgINCa0L7QvdGC0LDQutGC0YtcbiAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICA8L3VsPlxuICAgICAgICA8L25hdj5cbiAgICAgICAgPExvY2F0aW9uLz5cbiAgICAgICAge2lzQXV0aCA/IDxQcm9maWxlLz4gOiA8U2lnbkluLz59XG4gICAgICA8L2hlYWRlcj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEhlYWRlcjtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vbG9jYXRpb24ubS5jc3MnO1xuaW1wb3J0IHt1c2VTZWxlY3Rvcn0gZnJvbSAncmVhY3QtcmVkdXgnO1xuXG5jb25zdCBMb2NhdGlvbiA9ICgpID0+IHtcbiAgY29uc3QgbG9jYXRpb24gPSB1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLm1haW4ubG9jYXRpb24pO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5sb2NhdGlvbn0+XG4gICAgICA8c3ZnXG4gICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLmxvY2F0aW9uSWNvbn1cbiAgICAgICAgZW5hYmxlQmFja2dyb3VuZD1cIm5ldyAwIDAgNTEyIDUxMlwiXG4gICAgICAgIGhlaWdodD1cIjUxMlwiXG4gICAgICAgIHZpZXdCb3g9XCIwIDAgNTEyIDUxMlwiXG4gICAgICAgIHdpZHRoPVwiNTEyXCJcbiAgICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXG4gICAgICA+XG4gICAgICAgIDxnPlxuICAgICAgICAgIDxwYXRoXG4gICAgICAgICAgICBkPVwibTQwNy41NzkgODcuNjc3Yy0zMS4wNzMtNTMuNjI0LTg2LjI2NS04Ni4zODUtMTQ3LjY0LTg3LjYzNy0yLjYyLS4wNTQtNS4yNTctLjA1NC03Ljg3OCAwLTYxLjM3NCAxLjI1Mi0xMTYuNTY2IDM0LjAxMy0xNDcuNjQgODcuNjM3LTMxLjc2MiA1NC44MTItMzIuNjMxIDEyMC42NTItMi4zMjUgMTc2LjEyM2wxMjYuOTYzIDIzMi4zODdjLjA1Ny4xMDMuMTE0LjIwNi4xNzMuMzA4IDUuNTg2IDkuNzA5IDE1LjU5MyAxNS41MDUgMjYuNzcgMTUuNTA1IDExLjE3NiAwIDIxLjE4My01Ljc5NyAyNi43NjgtMTUuNTA1LjA1OS0uMTAyLjExNi0uMjA1LjE3My0uMzA4bDEyNi45NjMtMjMyLjM4N2MzMC4zMDQtNTUuNDcxIDI5LjQzNS0xMjEuMzExLTIuMzI3LTE3Ni4xMjN6bS0xNTEuNTc5IDE0NC4zMjNjLTM5LjcwMSAwLTcyLTMyLjI5OS03Mi03MnMzMi4yOTktNzIgNzItNzIgNzIgMzIuMjk5IDcyIDcyLTMyLjI5OCA3Mi03MiA3MnpcIi8+XG4gICAgICAgIDwvZz5cbiAgICAgIDwvc3ZnPlxuICAgICAgPHNwYW4gY2xhc3NOYW1lPXtzdHlsZXMuY2l0eVRleHR9Pntsb2NhdGlvbn08L3NwYW4+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBMb2NhdGlvbjtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vc2lnbmluLm0uY3NzJztcbmltcG9ydCB7dW5zcGxhc2hBdXRoTGlua30gZnJvbSAnQC9yZWR1eC9hY3Rpb25zL2F1dGguanMnO1xuXG5jb25zdCBTaWduaW4gPSAoKSA9PiB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5sb2dpbn0+XG4gICAgICA8c3ZnXG4gICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLmxvZ2luSWNvbn1cbiAgICAgICAgaGVpZ2h0PVwiNTEycHRcIlxuICAgICAgICB2aWV3Qm94PVwiMCAwIDUxMiA1MTJcIlxuICAgICAgICB3aWR0aD1cIjUxMnB0XCJcbiAgICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXG4gICAgICA+XG4gICAgICAgIDxwYXRoXG4gICAgICAgICAgZD1cIm00MDMuNzc3MzQ0IDE0Ny45MTc5NjljMC04MS41NjI1LTY2LjM1OTM3NS0xNDcuOTE3OTY5LTE0Ny45MTc5NjktMTQ3LjkxNzk2OS04MS41NjI1IDAtMTQ3LjkxNzk2OSA2Ni4zNTU0NjktMTQ3LjkxNzk2OSAxNDcuOTE3OTY5IDAgNTAuNTE5NTMxIDI1LjQ2NDg0NCA5NS4xOTkyMTkgNjQuMjIyNjU2IDEyMS44OTQ1MzEtMzYuMTg3NSAxMi40ODgyODEtNjkuMzU5Mzc0IDMzLjExNzE4OC05Ny4yMjY1NjIgNjAuOTg0Mzc1LTQ4LjMyNDIxOSA0OC4zMjQyMTktNzQuOTM3NSAxMTIuNTc4MTI1LTc0LjkzNzUgMTgwLjkxNzk2OWgzOS45NzY1NjJjMC0xMTkuMDM1MTU2IDk2Ljg0Mzc1LTIxNS44Nzg5MDYgMjE1Ljg4MjgxMy0yMTUuODc4OTA2IDgxLjU1ODU5NCAwIDE0Ny45MTc5NjktNjYuMzU1NDY5IDE0Ny45MTc5NjktMTQ3LjkxNzk2OXptLTE0Ny45MTc5NjkgMTA3Ljk0MTQwNmMtNTkuNTE5NTMxIDAtMTA3Ljk0MTQwNi00OC40MjE4NzUtMTA3Ljk0MTQwNi0xMDcuOTQxNDA2czQ4LjQyMTg3NS0xMDcuOTQxNDA3IDEwNy45NDE0MDYtMTA3Ljk0MTQwN2M1OS41MTU2MjUgMCAxMDcuOTM3NSA0OC40MjE4NzYgMTA3LjkzNzUgMTA3Ljk0MTQwN3MtNDguNDIxODc1IDEwNy45NDE0MDYtMTA3LjkzNzUgMTA3Ljk0MTQwNnptMjU2LjE0MDYyNSAxMTEuOTM3NS05NC4wODk4NDQgOTQuMDg5ODQ0LTI4LjI2OTUzMS0yOC4yNjk1MzEgNDYuODMyMDMxLTQ2LjgzMjAzMmgtMzQuNjcxODc1Yy00Ny44OTg0MzcgMC04Ni45MDIzNDMgMzguOTcyNjU2LTg2Ljk0MTQwNiA4Ni44NzEwOTRsLS4wMzUxNTYgMzguMDc0MjE5LTM5Ljk3NjU2My0uMDMxMjUuMDMxMjUtMzguMDc4MTI1Yy4wNTg1OTQtNjkuOTI1NzgyIDU2Ljk5NjA5NC0xMjYuODE2NDA2IDEyNi45MjE4NzUtMTI2LjgxNjQwNmgzMi42NzE4NzVsLTQ0LjgzMjAzMS00NC44MzIwMzIgMjguMjY5NTMxLTI4LjI2NTYyNXptMCAwXCIvPlxuICAgICAgPC9zdmc+XG4gICAgICA8YSBjbGFzc05hbWU9e3N0eWxlcy5sb2dpblNpZ25pbn0gaHJlZj17dW5zcGxhc2hBdXRoTGlua30+XG4gICAgICAgINCS0L7QudGC0LhcbiAgICAgIDwvYT5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFNpZ25pbjtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQge091dGxldH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XG5pbXBvcnQgSGVhZGVyIGZyb20gJ0Bjb21wb25lbnRzL0hlYWRlci9IZWFkZXInO1xuaW1wb3J0IEZvb3RlciBmcm9tICdAY29tcG9uZW50cy9Gb290ZXIvRm9vdGVyJztcblxuY29uc3QgTGF5b3V0ID0gKCkgPT4ge1xuICByZXR1cm4gKDw+XG4gICAgICA8SGVhZGVyLz5cbiAgICAgIDxtYWluPlxuICAgICAgICA8T3V0bGV0Lz5cbiAgICAgIDwvbWFpbj5cbiAgICAgIDxGb290ZXIvPlxuICAgIDwvPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgTGF5b3V0O1xuIiwiaW1wb3J0IFJlYWN0LCB7dXNlRWZmZWN0LCB1c2VSZWYsIHVzZVN0YXRlfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vcHJvZmlsZS5tLmNzcyc7XG5pbXBvcnQge3VzZURpc3BhdGNoLCB1c2VTZWxlY3Rvcn0gZnJvbSAncmVhY3QtcmVkdXgnO1xuaW1wb3J0IHtsb2dvdXR9IGZyb20gJ0AvcmVkdXgvcmVkdWNlcnMvYXV0aCc7XG5pbXBvcnQge3VzZU5hdmlnYXRlfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcblxuY29uc3QgUHJvZmlsZSA9ICgpID0+IHtcbiAgY29uc3QgdXNlciA9IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUuYXV0aC5jdXJyZW50VXNlciksXG4gICAgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpLFxuICAgIG5hdmlnYXRlID0gdXNlTmF2aWdhdGUoKTtcblxuICBjb25zdCBbaXNQcm9maWxlQnRuc1Nob3csIHNldFByb2ZpbGVCdG5zU2hvd10gPSB1c2VTdGF0ZShmYWxzZSksXG4gICAgdXNlclByb2ZpbGVSZWYgPSB1c2VSZWYobnVsbCk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBoYW5kbGVDbGlja091dHNpZGUgPSAoZXZlbnQpID0+IHtcbiAgICAgIGlmIChcbiAgICAgICAgdXNlclByb2ZpbGVSZWYuY3VycmVudCAmJlxuICAgICAgICAhdXNlclByb2ZpbGVSZWYuY3VycmVudC5jb250YWlucyhldmVudC50YXJnZXQpXG4gICAgICApIHtcbiAgICAgICAgc2V0UHJvZmlsZUJ0bnNTaG93KGZhbHNlKTtcbiAgICAgIH1cbiAgICB9O1xuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgaGFuZGxlQ2xpY2tPdXRzaWRlLCB0cnVlKTtcbiAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCBoYW5kbGVDbGlja091dHNpZGUsIHRydWUpO1xuICAgIH07XG4gIH0sIFtpc1Byb2ZpbGVCdG5zU2hvd10pO1xuXG4gIGNvbnN0IHNob3dFeGl0QnRuID0gKCkgPT4ge1xuICAgIHNldFByb2ZpbGVCdG5zU2hvdyghaXNQcm9maWxlQnRuc1Nob3cpO1xuICB9O1xuXG4gIGNvbnN0IGdvVG9Qcm9maWxlID0gKGUpID0+IHtcbiAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIHNldFByb2ZpbGVCdG5zU2hvdyhmYWxzZSk7XG4gICAgbmF2aWdhdGUoJ3Bob3RvcycpO1xuICB9O1xuXG4gIGNvbnN0IGdvT3V0ID0gKCkgPT4ge1xuICAgIGRpc3BhdGNoKGxvZ291dCgpKTtcbiAgICBuYXZpZ2F0ZSgnLycpO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy51c2VyUHJvZmlsZX0gcmVmPXt1c2VyUHJvZmlsZVJlZn0+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnVzZXJCYXNlSW5mb30+XG4gICAgICAgIDxzcGFuPnt1c2VyLmZpcnN0X25hbWV9PC9zcGFuPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnByb2ZpbGVJbWFnZX0+XG4gICAgICAgICAgPGltZ1xuICAgICAgICAgICAgc3JjPXt1c2VyLnByb2ZpbGVfaW1hZ2U/LnNtYWxsfVxuICAgICAgICAgICAgYWx0PVwidXNlciBwaG90b1wiXG4gICAgICAgICAgICBvbkNsaWNrPXtzaG93RXhpdEJ0bn1cbiAgICAgICAgICAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuXG4gICAgICB7aXNQcm9maWxlQnRuc1Nob3cgJiYgKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnByb2ZpbGVCdG5zfT5cbiAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLnByb2ZpbGVCdG4gKyAnICcgKyAnYnRuLXJlc2V0J31cbiAgICAgICAgICAgIG9uQ2xpY2s9e2dvVG9Qcm9maWxlfVxuICAgICAgICAgID5cbiAgICAgICAgICAgINCf0YDQvtGE0LjQu9GMXG4gICAgICAgICAgPC9idXR0b24+XG5cbiAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLmxvZ291dEJ0biArICcgJyArICdidG4tcmVzZXQnfVxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4gZ29PdXQoKX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICDQktGL0LnRgtC4eycgJ31cbiAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICApfVxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgUHJvZmlsZTtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vc3Bpbm5lci5tLmNzcyc7XG5cbmNvbnN0IFNwaW5uZXIgPSAoKSA9PiB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJsb2FkZXJXcmFwcGVyXCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmxvYWRlciArICcgJyArIHN0eWxlcy5sb2FkZXIyfT5cbiAgICAgICAgPHN2ZyBjbGFzc05hbWU9e3N0eWxlcy5sb2FkZXJTdGFyfSB2ZXJzaW9uPVwiMS4xXCI+XG4gICAgICAgICAgPHBvbHlnb25cbiAgICAgICAgICAgIHBvaW50cz1cIjI5LjggMC4zIDIyLjggMjEuOCAwIDIxLjggMTguNSAzNS4yIDExLjUgNTYuNyAyOS44IDQzLjQgNDguMiA1Ni43IDQxLjIgMzUuMSA1OS42IDIxLjggMzYuOCAyMS44IFwiXG4gICAgICAgICAgICBmaWxsPVwiIzY2MmQ5MVwiXG4gICAgICAgICAgLz5cbiAgICAgICAgPC9zdmc+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubG9hZGVyQ2lyY2xlc30vPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBTcGlubmVyO1xuIiwiXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gcHJlbG9hZEFzQmxvYih1cmwpIHtcbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcbiAgICAgIHJlc29sdmUoJycpO1xuICAgIH0pO1xuICB9XG5cbiAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCh1cmwpO1xuXG4gIGNvbnN0IGJsb2IgPSBhd2FpdCByZXNwb25zZS5ibG9iKCk7XG5cbiAgY29uc3QgcmVhZGVyID0gbmV3IEZpbGVSZWFkZXIoKTtcblxuICByZWFkZXIucmVhZEFzRGF0YVVSTChibG9iKTtcblxuICBjb25zdCBwcm9taXNlID0gbmV3IFByb21pc2UoXG4gICAgKHJlc29sdmUpID0+XG4gICAgICAocmVhZGVyLm9ubG9hZCA9ICgpID0+IHtcbiAgICAgICAgcmVzb2x2ZShyZWFkZXIucmVzdWx0KTtcbiAgICAgIH0pLFxuICApO1xuXG4gIHJldHVybiBwcm9taXNlO1xufVxuXG5cbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQge05hdmlnYXRlfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJ1xuXG5jb25zdCBQcml2YXRlQXV0aCA9ICh7Y2hpbGRyZW4sIGlzQXV0aH0pID0+IHtcblxuICBpZiAoIWlzQXV0aCkge1xuICAgIHJldHVybiAoPE5hdmlnYXRlIHRvPVwiL1wiLz4pXG4gIH1cbiAgcmV0dXJuIGNoaWxkcmVuXG59O1xuXG5leHBvcnQge1ByaXZhdGVBdXRofTtcbiIsImltcG9ydCBBcHAgZnJvbSAnLi9hcHAnO1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuXG5pbXBvcnQge3JlbmRlcn0gZnJvbSAncmVhY3QtZG9tJztcbmltcG9ydCB7SGFzaFJvdXRlcn0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XG5pbXBvcnQge1Byb3ZpZGVyfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQge3N0b3JlfSBmcm9tICcuL3JlZHV4L3JlZHVjZXJzJztcblxucmVuZGVyKDxQcm92aWRlciBzdG9yZT17c3RvcmV9PlxuICAgICAgICA8SGFzaFJvdXRlciA+XG4gICAgICAgICAgICA8QXBwLz5cbiAgICAgICAgPC9IYXNoUm91dGVyPlxuICA8L1Byb3ZpZGVyPiwgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyb290JylcbilcblxuY29uc3QgZGV2TW9kZSA9IHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAnZGV2ZWxvcG1lbnQnO1xuaWYgKGRldk1vZGUgJiYgbW9kdWxlICYmIG1vZHVsZS5ob3QpIHtcbiAgbW9kdWxlLmhvdC5hY2NlcHQoKTtcbn1cblxuIiwiaW1wb3J0IFJlYWN0LCB7dXNlRWZmZWN0fSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vbWFpblBhZ2UubS5jc3MnO1xuaW1wb3J0IFN3aXBlckNvcmUsIHtBMTF5LCBOYXZpZ2F0aW9uLCBQYWdpbmF0aW9ufSBmcm9tICdzd2lwZXInO1xuaW1wb3J0IHtTd2lwZXIsIFN3aXBlclNsaWRlfSBmcm9tICdzd2lwZXIvcmVhY3QnO1xuaW1wb3J0ICdAaW1wb3J0L3N3aXBlci9zd2lwZXItYnVuZGxlLm1pbi5jc3MnO1xuaW1wb3J0IHt1c2VEaXNwYXRjaCwgdXNlU2VsZWN0b3J9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCB7TGlua30gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XG5pbXBvcnQge3Vuc3BsYXNoQXV0aExpbmt9IGZyb20gJ0AvcmVkdXgvYWN0aW9ucy9hdXRoJztcbmltcG9ydCBTcGlubmVyIGZyb20gJ0Bjb21wb25lbnRzL1NwaW5uZXIvU3Bpbm5lcic7XG5pbXBvcnQge2dldExvY2F0aW9ufSBmcm9tICdAL3JlZHV4L2FjdGlvbnMvbWFpbic7XG5pbXBvcnQge2dldFBob3Rvc30gZnJvbSAnQC9yZWR1eC9hY3Rpb25zL3Bob3Rvcyc7XG5cblN3aXBlckNvcmUudXNlKFtQYWdpbmF0aW9uLCBOYXZpZ2F0aW9uLCBBMTF5XSk7XG5cbmNvbnN0IE1haW5QYWdlID0gKCkgPT4ge1xuICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKClcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBkaXNwYXRjaChnZXRMb2NhdGlvbigpKTtcbiAgICBkaXNwYXRjaChnZXRQaG90b3MoMSwgdHJ1ZSkpO1xuICB9LCBbXSlcblxuICBjb25zdCBwaG90b3MgPSB1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLnBob3Rvcy5jb250ZW50LnNsaWNlKDAsIDkpKSxcbiAgICBpc0F1dGggPSB1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLmF1dGguaXNBdXRoKSxcbiAgICBpc0xvYWRpbmcgPSB1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLnBob3Rvcy5pc0xvYWRpbmcpO1xuXG4gIHJldHVybiAoPHNlY3Rpb24+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnBob3Rvc0NvbnRhaW5lcn0gc3R5bGU9e3toZWlnaHQ6IGlzTG9hZGluZyA/ICcxMDBweCcgOiAnNTQ0cHgnfX0+XG5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5tYWluQ29udGFpbmVyfT5cbiAgICAgICAgICB7aXNMb2FkaW5nID8gPFNwaW5uZXIvPiA6XG4gICAgICAgICAgICA8U3dpcGVyXG4gICAgICAgICAgICAgIHBhZ2luYXRpb249e3tcbiAgICAgICAgICAgICAgICBjbGlja2FibGU6IHRydWUsXG4gICAgICAgICAgICAgICAgZHluYW1pY0J1bGxldHM6IHRydWUsXG4gICAgICAgICAgICAgICAgZHluYW1pY01haW5CdWxsZXRzOiA0LFxuICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICBzcGFjZUJldHdlZW49ezMwfVxuICAgICAgICAgICAgICBuYXZpZ2F0aW9uPXt0cnVlfVxuICAgICAgICAgICAgICBzbGlkZXNQZXJWaWV3PXsxfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICB7cGhvdG9zLm1hcCgoZWwpID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gKDxTd2lwZXJTbGlkZSBrZXk9e2VsLmlkfT5cbiAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e2VsLnVybHMuZnVsbH0gYWx0PVwiXCIvPlxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e3N0eWxlcy5tYWluVGl0bGV9PlxuICAgICAgICAgICAgICAgICAgICDQn9GA0LjQu9C+0LbQtdC90LjQtSDQtNC70Y8mbmJzcDvQv9GA0L7RgdC80L7RgtGA0LAg0YTQvtGC0L7Qs9GA0LDRhNC40LlcbiAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgIDwvU3dpcGVyU2xpZGU+XG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICA8L1N3aXBlcj5cbiAgICAgICAgICB9XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICA8L2Rpdj5cblxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5hYm91dENvbnRhaW5lcn0+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5hYm91dH0+XG4gICAgICAgICAgICA8aDIgY2xhc3NOYW1lPXtzdHlsZXMuYWJvdXRUaXRsZX0+TyDQvdCw0YE8L2gyPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtzdHlsZXMuYWJvdXRUaXRsZVRleHR9PlxuICAgICAgICAgICAgICDQn9GA0LjQu9C+0LbQtdC90LjQtSDQtNC70Y8g0L/RgNC+0YHQvNC+0YLRgNCwINGE0L7RgtC+0LPRgNCw0YTQuNC5XG4gICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmRvc210aH0+XG4gICAgICAgICAgICA8aDMgY2xhc3NOYW1lPXtzdHlsZXMuZG9zbXRoVGl0bGV9PtCSINGN0YLQvtC8INC/0YDQuNC70L7QttC10L3QuNC4INCy0Ysg0LzQvtC20LXRgtC1OjwvaDM+XG4gICAgICAgICAgICA8dWwgY2xhc3NOYW1lPXtzdHlsZXMuZG9zbXRoTGlzdH0+XG4gICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9e3N0eWxlcy5kb3NtdGhJdGVtfT5cbiAgICAgICAgICAgICAgICDQn9C+0YHQvNC+0YLRgNC10YLRjCDRhNC+0YLQvtCz0YDQsNGE0LjQuCDRgSDRgdCw0LnRgtCweycgJ31cbiAgICAgICAgICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly91bnNwbGFzaC5jb20vXCIgY2xhc3NOYW1lPXtzdHlsZXMudW5zcGxhc2hMaW5rfT5cbiAgICAgICAgICAgICAgICAgIHVuc3BsYXNoLmNvbVxuICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAuXG4gICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9e3N0eWxlcy5kb3NtdGhJdGVtfT5cbiAgICAgICAgICAgICAgICDQn9C+0YHQvNC+0YLRgNC10YLRjCDQuNC80Y8g0LDQstGC0L7RgNCwINC4INC00LDRgtGDINC/0YPQsdC70LjQutCw0YbQuNC4LlxuICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPXtzdHlsZXMuZG9zbXRoSXRlbX0+XG4gICAgICAgICAgICAgICAg0J/QvtGB0YLQsNCy0LjRgtGMINC70LDQudC6INC/0L7QvdGA0LDQstC40LLRiNC10LnRgdGPINGE0L7RgtC+0LPRgNCw0YTQuNC4LlxuICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubG9va1Bob3RvfT5cbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e3N0eWxlcy5sb29rUGhvdG9UZXh0fT5cbiAgICAgICAgICAgINCn0YLQvtCx0Ysg0L/RgNC+0YHQvNC+0YLRgNC10YLRjCDQu9C10L3RgtGDINGE0L7RgtC+0LPRgNCw0YTQuNC5INC90LDQttC80LjRgtC1IMKr0KHQvNC+0YLRgNC10YLRjCDQu9C10L3RgtGDwrtcbiAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAge2lzQXV0aCA/IChcbiAgICAgICAgICAgIDxMaW5rIHRvPVwicGhvdG9zXCIgY2xhc3NOYW1lPXtzdHlsZXMubG9va1Bob3RvQnV0dG9ufT5cbiAgICAgICAgICAgICAg0KHQvNC+0YLRgNC10YLRjCDQu9C10L3RgtGDXG4gICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgKSA6IChcbiAgICAgICAgICAgIDxhIGhyZWY9e3Vuc3BsYXNoQXV0aExpbmt9IGNsYXNzTmFtZT17c3R5bGVzLmxvb2tQaG90b0J1dHRvbn0+XG4gICAgICAgICAgICAgINCh0LzQvtGC0YDQtdGC0Ywg0LvQtdC90YLRg1xuICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICl9XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9zZWN0aW9uPlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBNYWluUGFnZTtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmNvbnN0IE5vdEZvdW5kID0gKCkgPT4ge1xuICByZXR1cm4gKDxkaXY+XG4gICAgICBwYWdlIG5vdCBmb3VuZFxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgTm90Rm91bmQ7IiwiaW1wb3J0IHtzZXRVc2VyfSBmcm9tICcuLi9yZWR1Y2Vycy9hdXRoJ1xuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcbmltcG9ydCAqIGFzIGRvdGVudiBmcm9tIFwiZG90ZW52XCI7XG5kb3RlbnYuY29uZmlnKCk7XG5jb25zdCBwcm9kdWN0aW9uID0gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdwcm9kdWN0aW9uJztcblxubGV0IG9hdXRoVXJsID0gJ2h0dHBzOi8vdW5zcGxhc2guY29tL29hdXRoL3Rva2VuJyxcbiAgY2xpZW50X2lkID0gcHJvY2Vzcy5lbnYuUkVBQ1RfQVBQX0NMSUVOVF9JRCxcbiAgY2xpZW50X3NlY3JldCA9IHByb2Nlc3MuZW52LlJFQUNUX0FQUF9DTElFTlRfU0VDUkVULFxuICByZWRpcmVjdF91cmkgPSBwcm9kdWN0aW9uID8gJ2h0dHBzOi8vcGF1a2FzaGEuZ2l0aHViLmlvL2NvdXJzZS1qcy8nIDogJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMS8nLFxuICBncmFudF90eXBlID0gJ2F1dGhvcml6YXRpb25fY29kZScsXG4gIHNjb3BlID0gJ3B1YmxpYytyZWFkX3VzZXIrd3JpdGVfdXNlcityZWFkX3Bob3Rvcyt3cml0ZV9waG90b3Mrd3JpdGVfbGlrZXMrd3JpdGVfZm9sbG93ZXJzK3JlYWRfY29sbGVjdGlvbnMrd3JpdGVfY29sbGVjdGlvbnMnLFxuICByZXNwb25zZV90eXBlID0gJ2NvZGUnO1xuZXhwb3J0IGNvbnN0IHVuc3BsYXNoQXV0aExpbmsgPSBgaHR0cHM6Ly91bnNwbGFzaC5jb20vb2F1dGgvYXV0aG9yaXplLz9jbGllbnRfaWQ9JHtjbGllbnRfaWR9JnJlZGlyZWN0X3VyaT0ke3JlZGlyZWN0X3VyaX0mcmVzcG9uc2VfdHlwZT0ke3Jlc3BvbnNlX3R5cGV9JnNjb3BlPSR7c2NvcGV9YFxuXG5cbmV4cG9ydCBjb25zdCBsb2dpbiA9ICgpID0+IHtcbiAgbGV0IGFjY2Vzc1Rva2VuID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2FjY2Vzc1Rva2VuJylcbiAgcmV0dXJuIGFzeW5jIGRpc3BhdGNoID0+IHtcbiAgICBpZiAoYWNjZXNzVG9rZW4pIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIHJldHVybiBhd2FpdCBheGlvcy5nZXQoJ2h0dHBzOi8vYXBpLnVuc3BsYXNoLmNvbS9tZScsIHtcbiAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICBBdXRob3JpemF0aW9uOiBgQmVhcmVyICR7YWNjZXNzVG9rZW59YFxuICAgICAgICAgIH1cbiAgICAgICAgfSkudGhlbihyZXMgPT4ge1xuICAgICAgICAgIGRpc3BhdGNoKHNldFVzZXIocmVzLmRhdGEpKVxuICAgICAgICB9KVxuXG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKCdhY2Nlc3NUb2tlbicpXG4gICAgICAgIGNvbnNvbGUubG9nKGUpXG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cblxuZXhwb3J0IGNvbnN0IGF1dGggPSAoY29kZVNlYXJjaFBhcmFtLCBjYmFjaykgPT4ge1xuICBsZXQgYWNjZXNzVG9rZW4gPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnYWNjZXNzVG9rZW4nKVxuICByZXR1cm4gYXN5bmMgZGlzcGF0Y2ggPT4ge1xuICAgIGlmIChjb2RlU2VhcmNoUGFyYW0pIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIHJldHVybiBhd2FpdCBheGlvcy5wb3N0KG9hdXRoVXJsLCBudWxsLCB7XG4gICAgICAgICAgICBwYXJhbXM6IHtcbiAgICAgICAgICAgICAgY2xpZW50X2lkOiBjbGllbnRfaWQsXG4gICAgICAgICAgICAgIGNsaWVudF9zZWNyZXQ6IGNsaWVudF9zZWNyZXQsXG4gICAgICAgICAgICAgIHJlZGlyZWN0X3VyaTogcmVkaXJlY3RfdXJpLFxuICAgICAgICAgICAgICBjb2RlOiBjb2RlU2VhcmNoUGFyYW0sXG4gICAgICAgICAgICAgIGdyYW50X3R5cGU6IGdyYW50X3R5cGVcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICkudGhlbihyZXNwb25zZSA9PiB7XG4gICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2FjY2Vzc1Rva2VuJywgcmVzcG9uc2UuZGF0YS5hY2Nlc3NfdG9rZW4pXG4gICAgICAgICAgcmV0dXJuIGF4aW9zLmdldCgnaHR0cHM6Ly9hcGkudW5zcGxhc2guY29tL21lJywge1xuICAgICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgICBBdXRob3JpemF0aW9uOiBgQmVhcmVyICR7bG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2FjY2Vzc1Rva2VuJyl9YFxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pLnRoZW4ocmVzcG9uc2UgPT4ge1xuICAgICAgICAgICAgZGlzcGF0Y2goc2V0VXNlcihyZXNwb25zZS5kYXRhKSlcbiAgICAgICAgICAgIGNiYWNrKClcbiAgICAgICAgICB9KVxuICAgICAgICB9KVxuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbSgnYWNjZXNzVG9rZW4nKVxuICAgICAgICBjb25zb2xlLmxvZyhlKVxuICAgICAgfVxuICAgIH0gZWxzZSBpZiAoYWNjZXNzVG9rZW4pIHtcbiAgICAgIGRpc3BhdGNoKGxvZ2luKCkpXG4gICAgfVxuICB9XG59XG5cblxuXG5cblxuIiwiaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcbmltcG9ydCB7c2V0TG9jYXRpb259IGZyb20gJy4uL3JlZHVjZXJzL21haW4nO1xuXG5leHBvcnQgY29uc3QgZ2V0TG9jYXRpb24gPSAoKSA9PiB7XG4gIGxldCB1cmwgPSAnaHR0cHM6Ly9pcGluZm8uaW8/dG9rZW49ZTJmNmNlMjIyMGY1ZTknO1xuICByZXR1cm4gYXN5bmMgKGRpc3BhdGNoKSA9PiB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGF4aW9zLmdldCh1cmwpO1xuICAgICAgZGlzcGF0Y2goc2V0TG9jYXRpb24ocmVzLmRhdGEuY2l0eSkpO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIGNvbnNvbGUubG9nKGUpO1xuICAgIH1cbiAgfTtcbn07XG4iLCJpbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xuaW1wb3J0IHtzZXRDdXJyZW50UGhvdG8sIHNldE9yRGVsZXRlTGlrZSwgc2V0UGhvdG9zfSBmcm9tICcuLi9yZWR1Y2Vycy9waG90b3MnO1xuaW1wb3J0IHtzZXRJc0xvYWRpbmd9IGZyb20gJy4uL3JlZHVjZXJzL2F1dGgnO1xuaW1wb3J0IHtwcmVsb2FkQXNCbG9ifSBmcm9tICdAL2hlbHBlcnMvcHJlbG9hZEFzQmxvYic7XG5cbmV4cG9ydCBjb25zdCBzZXRPckRlbGV0ZUxpa2VCeVVzZXIgPSAocGhvdG8pID0+IHtcbiAgbGV0IGFjY2Vzc1Rva2VuID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2FjY2Vzc1Rva2VuJyk7XG4gIHJldHVybiBhc3luYyBkaXNwYXRjaCA9PiB7XG4gICAgdHJ5IHtcbiAgICAgIGlmIChwaG90by5saWtlZF9ieV91c2VyID09IGZhbHNlKSB7XG4gICAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGF4aW9zLnBvc3QoYGh0dHBzOi8vYXBpLnVuc3BsYXNoLmNvbS9waG90b3MvJHtwaG90by5pZH0vbGlrZS9gLCBudWxsLCB7XG4gICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgQXV0aG9yaXphdGlvbjogYEJlYXJlciAke2FjY2Vzc1Rva2VufWBcbiAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICAgIGRpc3BhdGNoKHNldE9yRGVsZXRlTGlrZShyZXMuZGF0YS5waG90bykpXG4gICAgICAgIGRpc3BhdGNoKHNldEN1cnJlbnRQaG90byhyZXMuZGF0YS5waG90bykpXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zdCByZXMgPSBhd2FpdCBheGlvcy5kZWxldGUoYGh0dHBzOi8vYXBpLnVuc3BsYXNoLmNvbS9waG90b3MvJHtwaG90by5pZH0vbGlrZS9gLCB7XG4gICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgQXV0aG9yaXphdGlvbjogYEJlYXJlciAke2FjY2Vzc1Rva2VufWBcbiAgICAgICAgICB9XG4gICAgICAgIH0pXG5cbiAgICAgICAgZGlzcGF0Y2goc2V0T3JEZWxldGVMaWtlKHJlcy5kYXRhLnBob3RvKSk7XG4gICAgICAgIGRpc3BhdGNoKHNldEN1cnJlbnRQaG90byhyZXMuZGF0YS5waG90bykpO1xuICAgICAgfVxuXG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgY29uc29sZS5sb2coZSk7XG4gICAgfVxuICB9XG59XG5cblxuZXhwb3J0IGNvbnN0IGdldEN1cnJlbnRQaG90byA9IChpZCkgPT4ge1xuICBsZXQgYWNjZXNzVG9rZW4gPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnYWNjZXNzVG9rZW4nKVxuICByZXR1cm4gYXN5bmMgZGlzcGF0Y2ggPT4ge1xuICAgIHRyeSB7XG4gICAgICByZXR1cm4gYXdhaXQgYXhpb3MuZ2V0KGBodHRwczovL2FwaS51bnNwbGFzaC5jb20vcGhvdG9zLyR7aWR9YCwge1xuICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgQXV0aG9yaXphdGlvbjogYEJlYXJlciAke2FjY2Vzc1Rva2VufWBcbiAgICAgICAgfVxuICAgICAgfSkudGhlbihhc3luYyAocmVzKSA9PiB7XG4gICAgICAgIGxldCBjdXJyZW50UGhvdG8gPSByZXMuZGF0YVxuICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBwcmVsb2FkQXNCbG9iKGN1cnJlbnRQaG90by51cmxzLmZ1bGwpO1xuICAgICAgICBjdXJyZW50UGhvdG8udXJscy5mdWxsID0gcmVzdWx0O1xuICAgICAgICByZXR1cm4gZGlzcGF0Y2goc2V0Q3VycmVudFBob3RvKGN1cnJlbnRQaG90bykpXG4gICAgICB9KVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIGNvbnNvbGUubG9nKGUpO1xuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgY29uc3QgZ2V0UGhvdG9zID0gKGN1cnJlbnRQYWdlLCBpc0xvYWRpbmcpID0+IHtcbiAgcmV0dXJuIGFzeW5jIGRpc3BhdGNoID0+IHtcbiAgICBpZiAoaXNMb2FkaW5nKSB7XG4gICAgICBheGlvcy5nZXQoYGh0dHBzOi8vYXBpLnVuc3BsYXNoLmNvbS9waG90b3MvP3BhZ2U9JHtjdXJyZW50UGFnZX0mcGVyX3BhZ2U9MTBgLCB7XG4gICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICBBdXRob3JpemF0aW9uOiBgQ2xpZW50LUlEIGF2R1lMeTh4ai1SOEkzdGlSU2tlVlp2UlYwUjM5V3MzNG1ab2QzcW4zWm9gLFxuICAgICAgICB9XG4gICAgICB9KS50aGVuKGFzeW5jIChyZXMpID0+IHtcbiAgICAgICAgbGV0IHBob3RvcyA9IHJlcy5kYXRhO1xuXG4gICAgICAgIGNvbnN0IGFzeW5jQXJyYXkgPSBwaG90b3MubWFwKChlbCkgPT4gYXN5bmMgKCkgPT4ge1xuICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHByZWxvYWRBc0Jsb2IoZWwudXJscy5mdWxsKTtcbiAgICAgICAgICBjb25zdCBpbWFnZSA9IG5ldyBJbWFnZSgpO1xuICAgICAgICAgIGltYWdlLnNyYyA9IHJlc3VsdDtcbiAgICAgICAgICByZXR1cm4gaW1hZ2Uuc3JjO1xuICAgICAgICB9KTtcblxuICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBQcm9taXNlLmFsbChhc3luY0FycmF5Lm1hcCgoZm4pID0+IGZuKCkpKTtcblxuICAgICAgICBwaG90b3MgPSBwaG90b3MubWFwKChlbCwgaW5kZXgpID0+IHtcbiAgICAgICAgICBlbC51cmxzLnNtYWxsID0gcmVzdWx0W2luZGV4XTtcbiAgICAgICAgICByZXR1cm4gZWxcbiAgICAgICAgfSlcblxuICAgICAgICBjdXJyZW50UGFnZSArPSAxXG4gICAgICAgIGRpc3BhdGNoKHNldFBob3RvcyhwaG90b3MsIGN1cnJlbnRQYWdlLCByZXMuaGVhZGVyc1sneC10b3RhbCddKSlcblxuICAgICAgfSkuY2F0Y2goZSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKGUpXG4gICAgICB9KS5maW5hbGx5KCgpID0+IHtcbiAgICAgICAgc2V0SXNMb2FkaW5nKGZhbHNlKVxuICAgICAgfSlcbiAgICB9XG4gIH1cbn1cblxuIiwiY29uc3QgTE9HSU4gPSAnTE9HSU4nLFxuICBMT0dPVVQgPSAnTE9HT1VUJyxcbiAgSVNfTE9BRElORyA9ICdJU19MT0FESU5HJztcblxuY29uc3QgZGVmYXVsdFN0YXRlID0ge1xuICBjdXJyZW50VXNlcjogbnVsbCxcbiAgaXNBdXRoOiBmYWxzZSxcbiAgaXNMb2FkaW5nOiB0cnVlXG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGF1dGgoc3RhdGUgPSBkZWZhdWx0U3RhdGUsIGFjdGlvbikge1xuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gICAgY2FzZSBMT0dJTjoge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIGN1cnJlbnRVc2VyOiBhY3Rpb24ucGF5bG9hZCxcbiAgICAgICAgaXNBdXRoOiB0cnVlLFxuICAgICAgfVxuICAgIH1cblxuICAgIGNhc2UgTE9HT1VUOlxuICAgICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oJ2FjY2Vzc1Rva2VuJylcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBjdXJyZW50VXNlcjoge30sXG4gICAgICAgIGlzQXV0aDogZmFsc2UsXG4gICAgICAgIGlzTG9hZGluZzogZmFsc2VcbiAgICAgIH1cblxuICAgIGNhc2UgSVNfTE9BRElORzpcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBpc0xvYWRpbmc6IGFjdGlvbi5wYXlsb2FkXG4gICAgICB9XG5cbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIHN0YXRlXG4gIH1cbn1cblxuZXhwb3J0IGNvbnN0IHNldFVzZXIgPSB1c2VyID0+ICh7dHlwZTogTE9HSU4sIHBheWxvYWQ6IHVzZXJ9KTtcbmV4cG9ydCBjb25zdCBsb2dvdXQgPSAoKSA9PiAoe3R5cGU6IExPR09VVH0pO1xuZXhwb3J0IGNvbnN0IHNldElzTG9hZGluZyA9IChib29sKSA9PiAoe3R5cGU6IElTX0xPQURJTkcsIHBheWxvYWQ6IGJvb2x9KTtcblxuXG5cbiIsImltcG9ydCB7YXBwbHlNaWRkbGV3YXJlLCBjb21iaW5lUmVkdWNlcnMsIGNyZWF0ZVN0b3JlfSBmcm9tICdyZWR1eCc7XG5pbXBvcnQgYXV0aCBmcm9tICcuL2F1dGgnO1xuaW1wb3J0IHtjb21wb3NlV2l0aERldlRvb2xzfSBmcm9tICdAcmVkdXgtZGV2dG9vbHMvZXh0ZW5zaW9uJztcbmltcG9ydCB0aHVuayBmcm9tICdyZWR1eC10aHVuayc7XG5pbXBvcnQgbWFpbiBmcm9tICcuL21haW4nO1xuaW1wb3J0IHBob3RvcyBmcm9tICcuL3Bob3Rvcyc7XG5cbmNvbnN0IHJvb3RSZWR1Y2VyID0gY29tYmluZVJlZHVjZXJzKHtcbiAgYXV0aCxcbiAgbWFpbixcbiAgcGhvdG9zXG59KVxuXG5leHBvcnQgY29uc3Qgc3RvcmUgPSBjcmVhdGVTdG9yZShyb290UmVkdWNlciwgY29tcG9zZVdpdGhEZXZUb29scyhhcHBseU1pZGRsZXdhcmUodGh1bmspKSlcbiIsImNvbnN0IEdFVF9QSE9UT1MgPSAnR0VUX1BIT1RPUycsXG4gIEdFVF9MT0NBVElPTiA9ICdHRVRfTE9DQVRJT04nLFxuICBJU19MT0FESU5HID0gJ0lTX0xPQURJTkcnXG5cbmNvbnN0IGRlZmF1bHRTdGF0ZSA9IHtcbiAgbG9jYXRpb246ICcnLFxuICBpc0xvYWRpbmc6IHRydWUsXG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIG1haW4oc3RhdGUgPSBkZWZhdWx0U3RhdGUsIGFjdGlvbikge1xuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gICAgY2FzZSBHRVRfTE9DQVRJT046XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgbG9jYXRpb246IGFjdGlvbi5wYXlsb2FkXG4gICAgICB9XG4gICAgY2FzZSBJU19MT0FESU5HOlxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIGlzTG9hZGluZzogYWN0aW9uLnBheWxvYWRcbiAgICAgIH1cbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIHN0YXRlXG4gIH1cbn1cblxuZXhwb3J0IGNvbnN0IHNldExvY2F0aW9uID0gbG9jYXRpb24gPT4gKHt0eXBlOiBHRVRfTE9DQVRJT04sIHBheWxvYWQ6IGxvY2F0aW9ufSlcbmV4cG9ydCBjb25zdCBzZXRJc0xvYWRpbmcgPSAoYm9vbCkgPT4gKHt0eXBlOiBJU19MT0FESU5HLCBwYXlsb2FkOiBib29sfSlcbiIsImNvbnN0IFNFVF9DT05URU5UID0gJ0dFVF9DT05URU5UJyxcbiAgU0VUX09SX0RFTEVURV9MSUtFID0gJ1NFVF9PUl9ERUxFVEVfTElLRScsXG4gIFNFVF9DVVJSRU5UX1BIT1RPID0gJ1NFVF9DVVJSRU5UX1BIT1RPJyxcbiAgSVNfTE9BRElORyA9ICdJU19MT0FESU5HJztcblxuY29uc3QgZGVmYXVsdFN0YXRlID0ge1xuICBjb250ZW50OiBbXSxcbiAgcGhvdG9Ub3RhbENvdW50OiAwLFxuICBzZXRMaWtlQ2xhc3NOYW1lOiAnJyxcbiAgY3VycmVudFBob3RvOiAnJyxcbiAgY3VycmVudFBhZ2U6IDEsXG4gIGlzTG9hZGluZzogdHJ1ZVxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBwaG90b3Moc3RhdGUgPSBkZWZhdWx0U3RhdGUsIGFjdGlvbikge1xuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gICAgY2FzZSBTRVRfQ09OVEVOVDpcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBjb250ZW50OiBbLi4uc3RhdGUuY29udGVudCwgLi4uYWN0aW9uLnBheWxvYWQuY29udGVudF0ucmVkdWNlKChwcmV2RWwsIG5leHRFbCkgPT4ge1xuICAgICAgICAgIGlmICghcHJldkVsLmZpbmQoaXRlbSA9PiBpdGVtLmlkID09PSBuZXh0RWwuaWQpKSB7XG4gICAgICAgICAgICBwcmV2RWwucHVzaChuZXh0RWwpO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gcHJldkVsO1xuICAgICAgICB9LCBbXSksXG4gICAgICAgIGN1cnJlbnRQYWdlOiBhY3Rpb24ucGF5bG9hZC5jdXJyZW50UGFnZSxcbiAgICAgICAgcGhvdG9Ub3RhbENvdW50OiBhY3Rpb24ucGF5bG9hZC5waG90b1RvdGFsQ291bnQsXG4gICAgICAgIGlzTG9hZGluZzogZmFsc2VcbiAgICAgIH1cblxuICAgIGNhc2UgU0VUX09SX0RFTEVURV9MSUtFOlxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIGNvbnRlbnQ6IHN0YXRlLmNvbnRlbnQubWFwKHBob3RvID0+IHtcbiAgICAgICAgICBpZiAocGhvdG8uaWQgPT09IGFjdGlvbi5wYXlsb2FkLmlkKSB7XG4gICAgICAgICAgICByZXR1cm4gYWN0aW9uLnBheWxvYWRcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIHBob3RvXG4gICAgICAgIH0pLFxuICAgICAgICBjdXJyZW50UGhvdG86IGFjdGlvbi5wYXlsb2FkXG4gICAgICB9XG5cbiAgICBjYXNlIElTX0xPQURJTkc6XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgaXNMb2FkaW5nOiBhY3Rpb24ucGF5bG9hZFxuICAgICAgfVxuXG4gICAgY2FzZSBTRVRfQ1VSUkVOVF9QSE9UTzpcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBjdXJyZW50UGhvdG86IGFjdGlvbi5wYXlsb2FkXG4gICAgICB9XG5cbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIHN0YXRlXG4gIH1cbn1cblxuXG5leHBvcnQgY29uc3Qgc2V0UGhvdG9zID0gKGNvbnRlbnQsIGN1cnJlbnRQYWdlLCBwaG90b1RvdGFsQ291bnQpID0+ICh7XG4gIHR5cGU6IFNFVF9DT05URU5ULFxuICBwYXlsb2FkOiB7Y29udGVudCwgY3VycmVudFBhZ2UsIHBob3RvVG90YWxDb3VudH1cbn0pXG5cbmV4cG9ydCBjb25zdCBzZXRPckRlbGV0ZUxpa2UgPSAocGhvdG8pID0+ICh7dHlwZTogU0VUX09SX0RFTEVURV9MSUtFLCBwYXlsb2FkOiBwaG90b30pO1xuZXhwb3J0IGNvbnN0IHNldEN1cnJlbnRQaG90byA9IHBob3RvID0+ICh7dHlwZTogU0VUX0NVUlJFTlRfUEhPVE8sIHBheWxvYWQ6IHBob3RvfSk7XG5cblxuXG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiYXNzZXRzL2ZvbnRzL01vbnRzZXJyYXQtUmVndWxhci53b2ZmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18gPSBuZXcgVVJMKFwiLi9hc3NldHMvaW1hZ2VzL3N2Zy9yaWdodC1jaGV2cm9uLnN2Z1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiAnTW9udHNlcnJhdCcsIHNhbnMtc2VyaWY7XFxuICBzcmM6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gKyBcIikgZm9ybWF0KCd3b2ZmJyk7XFxuICBmb250LXdlaWdodDogNDAwO1xcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xcbn1cXG5cXG4uY29udGFpbmVyIHtcXG4gIG1heC13aWR0aDogMTQ0MHB4O1xcbiAgbWFyZ2luOiAwIGF1dG87XFxuICBwYWRkaW5nOiAwIDEwMHB4O1xcbn1cXG5cXG46cm9vdCB7XFxuICAtLWNvbG9yLXdpbGRzYW5kOiAjZjRmNGY0O1xcbiAgLS1jb2xvci13aGl0ZTogI2ZmZjtcXG4gIC0tY29sb3ItYmxhY2s6ICMwMDA7XFxuICAtLWNvbG9yLWVtaW5lbmNlOiAjNjYyZDkxO1xcbiAgLS1jb2xvci1ldWNhbHlwdHVzOiAjNGZkMWM1O1xcbiAgLS1jb2xvci1ncmF5OiAjODU4NTg1O1xcbiAgLS1jb2xvci10dW5kb3JhOiAjNDU0NTQ1O1xcbiAgLS1jb2xvci1icmlnaHQtdHVycXVvaXNlOiAjMDBmZmNiO1xcbiAgLS1jb2xvci1iYWNrZ3JvdW5kOiAjNDU0NTQ1NTI7XFxuICAtLWNvbG9yLW1haW4tdGl0bGU6ICMxMWQ5YjA7XFxuICAtLWNvbG9yLWJhY2tnci1pbWc6IHJnYmEoNDgsIDQ1LCA0NSwgMC41OSk7XFxuICAtLWNvbG9yLXByb2ZpbGUtYnRucy1iYWNrZ3JvdW5kOiAjNjI1NjU2O1xcbiAgLS1jb2xvci1saWtlZC1ieS11c2VyOiAjOGY0Y2MxO1xcbiAgLS1jb2xvci1kYXJrLWJnYzogIzFlMWExYTU5O1xcbn1cXG5cXG5odG1sIHtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbiosXFxuKjo6YmVmb3JlLFxcbio6OmFmdGVyIHtcXG4gIGJveC1zaXppbmc6IGluaGVyaXQ7XFxufVxcblxcbmJvZHkge1xcbiAgLypvdmVyZmxvdy1hbmNob3I6IG5vbmU7Ki9cXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQnLCBzYW5zLXNlcmlmO1xcbiAgZm9udC13ZWlnaHQ6IDQwMDtcXG4gIGZvbnQtc2l6ZTogMTZweDtcXG4gIGNvbG9yOiB2YXIoLS1jb2xvci1ibGFjayk7XFxufVxcblxcbmltZyB7XFxuICB3aWR0aDogMTAwJTtcXG4gIG9iamVjdC1maXQ6IGNvdmVyO1xcbn1cXG5cXG5hIHtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gIGNvbG9yOiBpbmhlcml0O1xcbn1cXG5cXG51bCB7XFxuICBsaXN0LXN0eWxlOiBub25lO1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG59XFxuXFxuLnZpc3VhbGx5LWhpZGRlbiB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGUgIWltcG9ydGFudDtcXG4gIGNsaXA6IHJlY3QoMXB4IDFweCAxcHggMXB4KTtcXG4gIGNsaXA6IHJlY3QoMXB4LCAxcHgsIDFweCwgMXB4KTtcXG4gIHBhZGRpbmc6IDAgIWltcG9ydGFudDtcXG4gIGJvcmRlcjogMCAhaW1wb3J0YW50O1xcbiAgaGVpZ2h0OiAxcHggIWltcG9ydGFudDtcXG4gIHdpZHRoOiAxcHggIWltcG9ydGFudDtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxufVxcblxcbi5idG4tcmVzZXQge1xcbiAgb3V0bGluZTogbm9uZTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgYm9yZGVyOiBub25lO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uc3dpcGVyLWNvbnRhaW5lciB7XFxuICBoZWlnaHQ6IDU0NHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItYmFja2dyb3VuZCk7XFxufVxcblxcbi5zd2lwZXItcGFnaW5hdGlvbi1idWxsZXQge1xcbiAgd2lkdGg6IDhweDtcXG4gIGhlaWdodDogOHB4O1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgYmFja2dyb3VuZDogIzAwMDtcXG4gIG9wYWNpdHk6IDAuMjtcXG59XFxuXFxuLnN3aXBlci1wYWdpbmF0aW9uLWZyYWN0aW9uLFxcbi5zd2lwZXItcGFnaW5hdGlvbi1jdXN0b20sXFxuLnN3aXBlci1jb250YWluZXItaG9yaXpvbnRhbCA+IC5zd2lwZXItcGFnaW5hdGlvbi1idWxsZXRzIHtcXG4gIGJvdHRvbTogMjVweDtcXG59XFxuXFxuLnN3aXBlci1jb250YWluZXItaG9yaXpvbnRhbCA+IC5zd2lwZXItcGFnaW5hdGlvbi1idWxsZXRzIC5zd2lwZXItcGFnaW5hdGlvbi1idWxsZXQge1xcbiAgbWFyZ2luOiAwIDE1cHg7XFxufVxcblxcbi5zd2lwZXItcGFnaW5hdGlvbi1idWxsZXQge1xcbiAgbWFyZ2luOiAwIDQwcHg7XFxuICB3aWR0aDogNnB4O1xcbiAgaGVpZ2h0OiA2cHg7XFxuICBiYWNrZ3JvdW5kOiB2YXIoLS1jb2xvci13aGl0ZSk7XFxuICBvcGFjaXR5OiAwLjc7XFxufVxcblxcbi5zd2lwZXItcGFnaW5hdGlvbi1idWxsZXQtYWN0aXZlIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLWJsYWNrKTtcXG4gIG9wYWNpdHk6IDE7XFxufVxcblxcblxcbi5zd2lwZXItcGFnaW5hdGlvbi1idWxsZXQtYWN0aXZlOjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXCI7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBsZWZ0OiA1MCU7XFxuICB0b3A6IDUwJTtcXG4gIHotaW5kZXg6IC0xO1xcbiAgYm9yZGVyLXJhZGl1czogMTAwJTtcXG4gIHdpZHRoOiAyMHB4O1xcbiAgaGVpZ2h0OiAyMHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3Itd2hpdGUpO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XFxufVxcblxcbi5zd2lwZXItcGFnaW5hdGlvbi1mcmFjdGlvbixcXG4uc3dpcGVyLXBhZ2luYXRpb24tY3VzdG9tLFxcbi5zd2lwZXItY29udGFpbmVyLWhvcml6b250YWwgPiAuc3dpcGVyLXBhZ2luYXRpb24tYnVsbGV0cyB7XFxuICBib3R0b206IDI1cHg7XFxufVxcblxcbi5zd2lwZXItY29udGFpbmVyLWhvcml6b250YWwgPiAuc3dpcGVyLXBhZ2luYXRpb24tYnVsbGV0cyAuc3dpcGVyLXBhZ2luYXRpb24tYnVsbGV0IHtcXG4gIG1hcmdpbjogMCAxNXB4O1xcbn1cXG5cXG4uc3dpcGVyLXBhZ2luYXRpb24tYnVsbGV0IHtcXG4gIG1hcmdpbjogMCA0MHB4O1xcbiAgd2lkdGg6IDZweDtcXG4gIGhlaWdodDogNnB4O1xcbiAgYmFja2dyb3VuZDogdmFyKC0tY29sb3Itd2hpdGUpO1xcbiAgb3BhY2l0eTogMC43O1xcbn1cXG5cXG5cXG4uc3dpcGVyLXBhZ2luYXRpb24tYnVsbGV0LWFjdGl2ZSB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1ibGFjayk7XFxuICBvcGFjaXR5OiAxO1xcbn1cXG5cXG4uc3dpcGVyLWJ1dHRvbi1uZXh0LFxcbi5zd2lwZXItYnV0dG9uLXByZXYge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuXFxuLnN3aXBlci1idXR0b24tbmV4dCxcXG4uc3dpcGVyLWJ1dHRvbi1wcmV2IHtcXG4gIHdpZHRoOiA0MHB4ICFpbXBvcnRhbnQ7XFxuICBoZWlnaHQ6IDUycHggIWltcG9ydGFudDtcXG4gIG1hcmdpbi10b3A6IDAgIWltcG9ydGFudDtcXG5cXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbiAgb3BhY2l0eTogMC42O1xcbn1cXG5cXG4uc3dpcGVyLWJ1dHRvbi1uZXh0IHtcXG4gIHJpZ2h0OiA0NHB4ICFpbXBvcnRhbnQ7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSg1MCUsIC01MCUpO1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyArIFwiKTtcXG59XFxuXFxuLnN3aXBlci1idXR0b24tcHJldiB7XFxuICBsZWZ0OiA0NHB4ICFpbXBvcnRhbnQ7XFxuICB0cmFuc2Zvcm06IHJvdGF0ZSgxODBkZWcpIHRyYW5zbGF0ZSg1MCUsIDUwJSk7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fICsgXCIpO1xcbn1cXG5cXG4uc3dpcGVyLWJ1dHRvbi1uZXh0OmhvdmVyLFxcbi5zd2lwZXItYnV0dG9uLXByZXY6aG92ZXIge1xcbiAgb3BhY2l0eTogMTtcXG59XFxuXFxuLnN3aXBlci1idXR0b24tbmV4dDphZnRlcixcXG4uc3dpcGVyLWJ1dHRvbi1wcmV2OmFmdGVyIHtcXG4gIGNvbnRlbnQ6ICcnICFpbXBvcnRhbnQ7XFxufVxcblxcbkBtZWRpYSAobWF4LXdpZHRoOiAxMDI0cHgpIHtcXG4gIC5jb250YWluZXIge1xcbiAgICBwYWRkaW5nOiAwIDIwcHg7XFxuICB9XFxufVxcblxcbkBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkge1xcbiAgLnN3aXBlci1wYWdpbmF0aW9uIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gIH1cXG5cXG4gIC5zd2lwZXItYnV0dG9uLW5leHQsXFxuICAuc3dpcGVyLWJ1dHRvbi1wcmV2IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gIH1cXG59XFxuXFxuXFxuQG1lZGlhIChtYXgtd2lkdGg6IDU3NnB4KSB7XFxuICAuc3dpcGVyLWNvbnRhaW5lciB7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gIH1cXG5cXG4gIC5zd2lwZXItYnV0dG9uLW5leHQsXFxuICAuc3dpcGVyLWJ1dHRvbi1wcmV2IHtcXG4gICAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xcbiAgfVxcbn1cXG5cXG5cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLHFDQUFxQztFQUNyQywyREFBK0Q7RUFDL0QsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixjQUFjO0VBQ2QsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLG1CQUFtQjtFQUNuQixtQkFBbUI7RUFDbkIseUJBQXlCO0VBQ3pCLDJCQUEyQjtFQUMzQixxQkFBcUI7RUFDckIsd0JBQXdCO0VBQ3hCLGlDQUFpQztFQUNqQyw2QkFBNkI7RUFDN0IsMkJBQTJCO0VBQzNCLDBDQUEwQztFQUMxQyx3Q0FBd0M7RUFDeEMsOEJBQThCO0VBQzlCLDJCQUEyQjtBQUM3Qjs7QUFFQTtFQUNFLHNCQUFzQjtBQUN4Qjs7QUFFQTs7O0VBR0UsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLFNBQVM7RUFDVCxVQUFVO0VBQ1YscUNBQXFDO0VBQ3JDLGdCQUFnQjtFQUNoQixlQUFlO0VBQ2YseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UsV0FBVztFQUNYLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLHFCQUFxQjtFQUNyQixjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLFNBQVM7RUFDVCxVQUFVO0FBQ1o7O0FBRUE7RUFDRSw2QkFBNkI7RUFDN0IsMkJBQTJCO0VBQzNCLDhCQUE4QjtFQUM5QixxQkFBcUI7RUFDckIsb0JBQW9CO0VBQ3BCLHNCQUFzQjtFQUN0QixxQkFBcUI7RUFDckIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLDZCQUE2QjtFQUM3QixZQUFZO0VBQ1osZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGFBQWE7RUFDYix5Q0FBeUM7QUFDM0M7O0FBRUE7RUFDRSxVQUFVO0VBQ1YsV0FBVztFQUNYLHFCQUFxQjtFQUNyQixrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLFlBQVk7QUFDZDs7QUFFQTs7O0VBR0UsWUFBWTtBQUNkOztBQUVBO0VBQ0UsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGNBQWM7RUFDZCxVQUFVO0VBQ1YsV0FBVztFQUNYLDhCQUE4QjtFQUM5QixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsb0NBQW9DO0VBQ3BDLFVBQVU7QUFDWjs7O0FBR0E7RUFDRSxXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLFNBQVM7RUFDVCxRQUFRO0VBQ1IsV0FBVztFQUNYLG1CQUFtQjtFQUNuQixXQUFXO0VBQ1gsWUFBWTtFQUNaLG9DQUFvQztFQUNwQyxnQ0FBZ0M7QUFDbEM7O0FBRUE7OztFQUdFLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxjQUFjO0VBQ2QsVUFBVTtFQUNWLFdBQVc7RUFDWCw4QkFBOEI7RUFDOUIsWUFBWTtBQUNkOzs7QUFHQTtFQUNFLGtCQUFrQjtFQUNsQixvQ0FBb0M7RUFDcEMsVUFBVTtBQUNaOztBQUVBOztFQUVFLGFBQWE7QUFDZjs7O0FBR0E7O0VBRUUsc0JBQXNCO0VBQ3RCLHVCQUF1QjtFQUN2Qix3QkFBd0I7O0VBRXhCLHNCQUFzQjtFQUN0Qiw0QkFBNEI7RUFDNUIsWUFBWTtBQUNkOztBQUVBO0VBQ0Usc0JBQXNCO0VBQ3RCLCtCQUErQjtFQUMvQix5REFBNEQ7QUFDOUQ7O0FBRUE7RUFDRSxxQkFBcUI7RUFDckIsNkNBQTZDO0VBQzdDLHlEQUE0RDtBQUM5RDs7QUFFQTs7RUFFRSxVQUFVO0FBQ1o7O0FBRUE7O0VBRUUsc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0U7SUFDRSxlQUFlO0VBQ2pCO0FBQ0Y7O0FBRUE7RUFDRTtJQUNFLGFBQWE7RUFDZjs7RUFFQTs7SUFFRSxhQUFhO0VBQ2Y7QUFDRjs7O0FBR0E7RUFDRTtJQUNFLFlBQVk7RUFDZDs7RUFFQTs7SUFFRSx3QkFBd0I7RUFDMUI7QUFDRlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiAnTW9udHNlcnJhdCcsIHNhbnMtc2VyaWY7XFxuICBzcmM6IHVybCgnYXNzZXRzL2ZvbnRzL01vbnRzZXJyYXQtUmVndWxhci53b2ZmJykgZm9ybWF0KCd3b2ZmJyk7XFxuICBmb250LXdlaWdodDogNDAwO1xcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xcbn1cXG5cXG4uY29udGFpbmVyIHtcXG4gIG1heC13aWR0aDogMTQ0MHB4O1xcbiAgbWFyZ2luOiAwIGF1dG87XFxuICBwYWRkaW5nOiAwIDEwMHB4O1xcbn1cXG5cXG46cm9vdCB7XFxuICAtLWNvbG9yLXdpbGRzYW5kOiAjZjRmNGY0O1xcbiAgLS1jb2xvci13aGl0ZTogI2ZmZjtcXG4gIC0tY29sb3ItYmxhY2s6ICMwMDA7XFxuICAtLWNvbG9yLWVtaW5lbmNlOiAjNjYyZDkxO1xcbiAgLS1jb2xvci1ldWNhbHlwdHVzOiAjNGZkMWM1O1xcbiAgLS1jb2xvci1ncmF5OiAjODU4NTg1O1xcbiAgLS1jb2xvci10dW5kb3JhOiAjNDU0NTQ1O1xcbiAgLS1jb2xvci1icmlnaHQtdHVycXVvaXNlOiAjMDBmZmNiO1xcbiAgLS1jb2xvci1iYWNrZ3JvdW5kOiAjNDU0NTQ1NTI7XFxuICAtLWNvbG9yLW1haW4tdGl0bGU6ICMxMWQ5YjA7XFxuICAtLWNvbG9yLWJhY2tnci1pbWc6IHJnYmEoNDgsIDQ1LCA0NSwgMC41OSk7XFxuICAtLWNvbG9yLXByb2ZpbGUtYnRucy1iYWNrZ3JvdW5kOiAjNjI1NjU2O1xcbiAgLS1jb2xvci1saWtlZC1ieS11c2VyOiAjOGY0Y2MxO1xcbiAgLS1jb2xvci1kYXJrLWJnYzogIzFlMWExYTU5O1xcbn1cXG5cXG5odG1sIHtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbiosXFxuKjo6YmVmb3JlLFxcbio6OmFmdGVyIHtcXG4gIGJveC1zaXppbmc6IGluaGVyaXQ7XFxufVxcblxcbmJvZHkge1xcbiAgLypvdmVyZmxvdy1hbmNob3I6IG5vbmU7Ki9cXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQnLCBzYW5zLXNlcmlmO1xcbiAgZm9udC13ZWlnaHQ6IDQwMDtcXG4gIGZvbnQtc2l6ZTogMTZweDtcXG4gIGNvbG9yOiB2YXIoLS1jb2xvci1ibGFjayk7XFxufVxcblxcbmltZyB7XFxuICB3aWR0aDogMTAwJTtcXG4gIG9iamVjdC1maXQ6IGNvdmVyO1xcbn1cXG5cXG5hIHtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gIGNvbG9yOiBpbmhlcml0O1xcbn1cXG5cXG51bCB7XFxuICBsaXN0LXN0eWxlOiBub25lO1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG59XFxuXFxuLnZpc3VhbGx5LWhpZGRlbiB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGUgIWltcG9ydGFudDtcXG4gIGNsaXA6IHJlY3QoMXB4IDFweCAxcHggMXB4KTtcXG4gIGNsaXA6IHJlY3QoMXB4LCAxcHgsIDFweCwgMXB4KTtcXG4gIHBhZGRpbmc6IDAgIWltcG9ydGFudDtcXG4gIGJvcmRlcjogMCAhaW1wb3J0YW50O1xcbiAgaGVpZ2h0OiAxcHggIWltcG9ydGFudDtcXG4gIHdpZHRoOiAxcHggIWltcG9ydGFudDtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxufVxcblxcbi5idG4tcmVzZXQge1xcbiAgb3V0bGluZTogbm9uZTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgYm9yZGVyOiBub25lO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uc3dpcGVyLWNvbnRhaW5lciB7XFxuICBoZWlnaHQ6IDU0NHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItYmFja2dyb3VuZCk7XFxufVxcblxcbi5zd2lwZXItcGFnaW5hdGlvbi1idWxsZXQge1xcbiAgd2lkdGg6IDhweDtcXG4gIGhlaWdodDogOHB4O1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgYmFja2dyb3VuZDogIzAwMDtcXG4gIG9wYWNpdHk6IDAuMjtcXG59XFxuXFxuLnN3aXBlci1wYWdpbmF0aW9uLWZyYWN0aW9uLFxcbi5zd2lwZXItcGFnaW5hdGlvbi1jdXN0b20sXFxuLnN3aXBlci1jb250YWluZXItaG9yaXpvbnRhbCA+IC5zd2lwZXItcGFnaW5hdGlvbi1idWxsZXRzIHtcXG4gIGJvdHRvbTogMjVweDtcXG59XFxuXFxuLnN3aXBlci1jb250YWluZXItaG9yaXpvbnRhbCA+IC5zd2lwZXItcGFnaW5hdGlvbi1idWxsZXRzIC5zd2lwZXItcGFnaW5hdGlvbi1idWxsZXQge1xcbiAgbWFyZ2luOiAwIDE1cHg7XFxufVxcblxcbi5zd2lwZXItcGFnaW5hdGlvbi1idWxsZXQge1xcbiAgbWFyZ2luOiAwIDQwcHg7XFxuICB3aWR0aDogNnB4O1xcbiAgaGVpZ2h0OiA2cHg7XFxuICBiYWNrZ3JvdW5kOiB2YXIoLS1jb2xvci13aGl0ZSk7XFxuICBvcGFjaXR5OiAwLjc7XFxufVxcblxcbi5zd2lwZXItcGFnaW5hdGlvbi1idWxsZXQtYWN0aXZlIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLWJsYWNrKTtcXG4gIG9wYWNpdHk6IDE7XFxufVxcblxcblxcbi5zd2lwZXItcGFnaW5hdGlvbi1idWxsZXQtYWN0aXZlOjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXCI7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBsZWZ0OiA1MCU7XFxuICB0b3A6IDUwJTtcXG4gIHotaW5kZXg6IC0xO1xcbiAgYm9yZGVyLXJhZGl1czogMTAwJTtcXG4gIHdpZHRoOiAyMHB4O1xcbiAgaGVpZ2h0OiAyMHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3Itd2hpdGUpO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XFxufVxcblxcbi5zd2lwZXItcGFnaW5hdGlvbi1mcmFjdGlvbixcXG4uc3dpcGVyLXBhZ2luYXRpb24tY3VzdG9tLFxcbi5zd2lwZXItY29udGFpbmVyLWhvcml6b250YWwgPiAuc3dpcGVyLXBhZ2luYXRpb24tYnVsbGV0cyB7XFxuICBib3R0b206IDI1cHg7XFxufVxcblxcbi5zd2lwZXItY29udGFpbmVyLWhvcml6b250YWwgPiAuc3dpcGVyLXBhZ2luYXRpb24tYnVsbGV0cyAuc3dpcGVyLXBhZ2luYXRpb24tYnVsbGV0IHtcXG4gIG1hcmdpbjogMCAxNXB4O1xcbn1cXG5cXG4uc3dpcGVyLXBhZ2luYXRpb24tYnVsbGV0IHtcXG4gIG1hcmdpbjogMCA0MHB4O1xcbiAgd2lkdGg6IDZweDtcXG4gIGhlaWdodDogNnB4O1xcbiAgYmFja2dyb3VuZDogdmFyKC0tY29sb3Itd2hpdGUpO1xcbiAgb3BhY2l0eTogMC43O1xcbn1cXG5cXG5cXG4uc3dpcGVyLXBhZ2luYXRpb24tYnVsbGV0LWFjdGl2ZSB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1ibGFjayk7XFxuICBvcGFjaXR5OiAxO1xcbn1cXG5cXG4uc3dpcGVyLWJ1dHRvbi1uZXh0LFxcbi5zd2lwZXItYnV0dG9uLXByZXYge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuXFxuLnN3aXBlci1idXR0b24tbmV4dCxcXG4uc3dpcGVyLWJ1dHRvbi1wcmV2IHtcXG4gIHdpZHRoOiA0MHB4ICFpbXBvcnRhbnQ7XFxuICBoZWlnaHQ6IDUycHggIWltcG9ydGFudDtcXG4gIG1hcmdpbi10b3A6IDAgIWltcG9ydGFudDtcXG5cXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbiAgb3BhY2l0eTogMC42O1xcbn1cXG5cXG4uc3dpcGVyLWJ1dHRvbi1uZXh0IHtcXG4gIHJpZ2h0OiA0NHB4ICFpbXBvcnRhbnQ7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSg1MCUsIC01MCUpO1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4vYXNzZXRzL2ltYWdlcy9zdmcvcmlnaHQtY2hldnJvbi5zdmcpO1xcbn1cXG5cXG4uc3dpcGVyLWJ1dHRvbi1wcmV2IHtcXG4gIGxlZnQ6IDQ0cHggIWltcG9ydGFudDtcXG4gIHRyYW5zZm9ybTogcm90YXRlKDE4MGRlZykgdHJhbnNsYXRlKDUwJSwgNTAlKTtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCguL2Fzc2V0cy9pbWFnZXMvc3ZnL3JpZ2h0LWNoZXZyb24uc3ZnKTtcXG59XFxuXFxuLnN3aXBlci1idXR0b24tbmV4dDpob3ZlcixcXG4uc3dpcGVyLWJ1dHRvbi1wcmV2OmhvdmVyIHtcXG4gIG9wYWNpdHk6IDE7XFxufVxcblxcbi5zd2lwZXItYnV0dG9uLW5leHQ6YWZ0ZXIsXFxuLnN3aXBlci1idXR0b24tcHJldjphZnRlciB7XFxuICBjb250ZW50OiAnJyAhaW1wb3J0YW50O1xcbn1cXG5cXG5AbWVkaWEgKG1heC13aWR0aDogMTAyNHB4KSB7XFxuICAuY29udGFpbmVyIHtcXG4gICAgcGFkZGluZzogMCAyMHB4O1xcbiAgfVxcbn1cXG5cXG5AbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcXG4gIC5zd2lwZXItcGFnaW5hdGlvbiB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICB9XFxuXFxuICAuc3dpcGVyLWJ1dHRvbi1uZXh0LFxcbiAgLnN3aXBlci1idXR0b24tcHJldiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICB9XFxufVxcblxcblxcbkBtZWRpYSAobWF4LXdpZHRoOiA1NzZweCkge1xcbiAgLnN3aXBlci1jb250YWluZXIge1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICB9XFxuXFxuICAuc3dpcGVyLWJ1dHRvbi1uZXh0LFxcbiAgLnN3aXBlci1idXR0b24tcHJldiB7XFxuICAgIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcXG4gIH1cXG59XFxuXFxuXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuLi8uLi9hc3NldHMvaW1hZ2VzL3N2Zy90ZWxlcGhvbmUuc3ZnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18gPSBuZXcgVVJMKFwiLi4vLi4vYXNzZXRzL2ltYWdlcy9zdmcvbWFpbC5zdmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMl9fXyA9IG5ldyBVUkwoXCIuLi8uLi9hc3NldHMvaW1hZ2VzL3N2Zy92ay5zdmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfM19fXyA9IG5ldyBVUkwoXCIuLi8uLi9hc3NldHMvaW1hZ2VzL3N2Zy9nb29nbGUuc3ZnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzRfX18gPSBuZXcgVVJMKFwiLi4vLi4vYXNzZXRzL2ltYWdlcy9zdmcvb2stbG9nby5zdmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzJfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8zX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfM19fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfNF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLmZvb3Rlci1tX19mb290ZXItLUdZUmRtIHtcXG4gIGNvbG9yOiB2YXIoLS1jb2xvci13aGl0ZSk7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1lbWluZW5jZSk7XFxufVxcblxcbi5mb290ZXItbV9fZm9vdGVyLS1HWVJkbSBzcGFuIHtcXG4gIGZvbnQtc2l6ZTogMjJweDtcXG59XFxuXFxuLmZvb3Rlci1tX19jb250YWluZXItLXdMekNDIHtcXG4gIG1hcmdpbjogMCBhdXRvO1xcbiAgcGFkZGluZzogMCAyMHB4O1xcbiAgbWF4LXdpZHRoOiAxMDYwcHg7XFxufVxcblxcbi5mb290ZXItbV9fZm9vdGVyVG9wLS1OQ1F0QyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgcGFkZGluZzogNjBweCAwO1xcbn1cXG5cXG4uZm9vdGVyLW1fX2Zvb3RlclRvcC0tTkNRdEMgaW1nIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgd2lkdGg6IDEwMHB4O1xcbiAgaGVpZ2h0OiA1NHB4O1xcbn1cXG5cXG4uZm9vdGVyLW1fX2NvbnRhY3RzLS10dEllSyBzcGFuIHtcXG4gIGZvbnQtc2l6ZTogMjJweDtcXG59XFxuXFxuLmZvb3Rlci1tX19jb250YWN0c0xpc3QtLU1aMDVHIHtcXG4gIG1hcmdpbi10b3A6IDIwcHg7XFxufVxcblxcbi5mb290ZXItbV9fY29udGFjdHNMaXN0LS1NWjA1RyBsaTpub3QoOmxhc3QtY2hpbGQpIHtcXG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XFxufVxcblxcbi5mb290ZXItbV9fY29udGFjdHNMaXN0LS1NWjA1RyBhIHtcXG4gIHRyYW5zaXRpb246IHRleHQtZGVjb3JhdGlvbiAwLjNzIGVhc2UtaW47XFxufVxcblxcbi5mb290ZXItbV9fY29udGFjdHNMaXN0LS1NWjA1RyBhOmhvdmVyIHtcXG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xcbiAgdHJhbnNpdGlvbjogdGV4dC1kZWNvcmF0aW9uIDAuM3MgZWFzZS1pbjtcXG59XFxuXFxuLmZvb3Rlci1tX19saXN0SXRlbVRlbC0tTW9qdDMsXFxuLmZvb3Rlci1tX19saXN0SXRlbU1haWwtLWJQU2V3IHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHBhZGRpbmctbGVmdDogMzBweDtcXG59XFxuXFxuLmZvb3Rlci1tX19saXN0SXRlbVRlbC0tTW9qdDM6OmJlZm9yZSB7XFxuICBjb250ZW50OiAnJztcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGxlZnQ6IDA7XFxuICB0b3A6IDA7XFxuICB3aWR0aDogMTZweDtcXG4gIGhlaWdodDogMTZweDtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gKyBcIik7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XFxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbn1cXG5cXG4uZm9vdGVyLW1fX2xpc3RJdGVtTWFpbC0tYlBTZXc6OmJlZm9yZSB7XFxuICBjb250ZW50OiAnJztcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGxlZnQ6IDA7XFxuICB0b3A6IDA7XFxuICB3aWR0aDogMTZweDtcXG4gIGhlaWdodDogMTZweDtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gKyBcIik7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XFxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbn1cXG5cXG4uZm9vdGVyLW1fX3NvY2lhbExpc3QtLUxRd1J4IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBtYXJnaW4tdG9wOiAyMHB4O1xcbn1cXG5cXG4uZm9vdGVyLW1fX2xpbmstLVd4ajhQIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tY29sb3Itd2hpdGUpO1xcbiAgYm9yZGVyLXJhZGl1czogMTAwJTtcXG4gIHdpZHRoOiA0MHB4O1xcbiAgaGVpZ2h0OiA0MHB4O1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xcbiAgYmFja2dyb3VuZC1zaXplOiAyMHB4IDIwcHg7XFxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbn1cXG5cXG4uZm9vdGVyLW1fX2xpbmstLVd4ajhQOmhvdmVyIHtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICMzYjU5OTg7XFxuICBib3gtc2hhZG93OiAwIDAgMTVweCB2YXIoLS1jb2xvci1icmlnaHQtdHVycXVvaXNlKTtcXG4gIHRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2U7XFxufVxcblxcbi5mb290ZXItbV9fdmstLVJfZ2FIIHtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzJfX18gKyBcIik7XFxufVxcblxcbi5mb290ZXItbV9fZ29vZ2xlLS1oazJaZSB7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8zX19fICsgXCIpO1xcbn1cXG5cXG4uZm9vdGVyLW1fX29rLS1uWlJOYSB7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF80X19fICsgXCIpO1xcbn1cXG5cXG4uZm9vdGVyLW1fX2Zvb3RlckJvdHRvbS0tdkliczUge1xcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC40KTtcXG4gIHBhZGRpbmc6IDIwcHggMDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuQG1lZGlhIChtYXgtd2lkdGg6IDU3NnB4KSB7XFxuICAuZm9vdGVyLW1fX2Zvb3RlclRvcC0tTkNRdEMge1xcbiAgICBwYWRkaW5nOiAyMHB4IDA7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICB9XFxuXFxuICAuZm9vdGVyLW1fX2Zvb3RlclRvcC0tTkNRdEMgaW1nLFxcbiAgLmZvb3Rlci1tX19pblNvY2lhbFRleHQtLU9uMzlDIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gIH1cXG5cXG4gIC5mb290ZXItbV9fY29udGFjdHMtLXR0SWVLIHtcXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcXG4gIH1cXG5cXG5cXG59XFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2NvbXBvbmVudHMvRm9vdGVyL2Zvb3Rlci5tLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLHlCQUF5QjtFQUN6Qix1Q0FBdUM7QUFDekM7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsY0FBYztFQUNkLGVBQWU7RUFDZixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsOEJBQThCO0VBQzlCLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxjQUFjO0VBQ2QsWUFBWTtFQUNaLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSx3Q0FBd0M7QUFDMUM7O0FBRUE7RUFDRSwwQkFBMEI7RUFDMUIsd0NBQXdDO0FBQzFDOztBQUVBOztFQUVFLGtCQUFrQjtFQUNsQixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLE9BQU87RUFDUCxNQUFNO0VBQ04sV0FBVztFQUNYLFlBQVk7RUFDWix5REFBOEQ7RUFDOUQsMkJBQTJCO0VBQzNCLDRCQUE0QjtBQUM5Qjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsT0FBTztFQUNQLE1BQU07RUFDTixXQUFXO0VBQ1gsWUFBWTtFQUNaLHlEQUF5RDtFQUN6RCwyQkFBMkI7RUFDM0IsNEJBQTRCO0FBQzlCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLDhCQUE4QjtFQUM5QixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxjQUFjO0VBQ2Qsb0NBQW9DO0VBQ3BDLG1CQUFtQjtFQUNuQixXQUFXO0VBQ1gsWUFBWTtFQUNaLDJCQUEyQjtFQUMzQiwwQkFBMEI7RUFDMUIsNEJBQTRCO0FBQzlCOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLGtEQUFrRDtFQUNsRCx5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSx5REFBdUQ7QUFDekQ7O0FBRUE7RUFDRSx5REFBMkQ7QUFDN0Q7O0FBRUE7RUFDRSx5REFBNEQ7QUFDOUQ7O0FBRUE7RUFDRSw4Q0FBOEM7RUFDOUMsZUFBZTtFQUNmLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFO0lBQ0UsZUFBZTtJQUNmLHNCQUFzQjtFQUN4Qjs7RUFFQTs7SUFFRSxhQUFhO0VBQ2Y7O0VBRUE7SUFDRSxtQkFBbUI7RUFDckI7OztBQUdGXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi5mb290ZXIge1xcbiAgY29sb3I6IHZhcigtLWNvbG9yLXdoaXRlKTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLWVtaW5lbmNlKTtcXG59XFxuXFxuLmZvb3RlciBzcGFuIHtcXG4gIGZvbnQtc2l6ZTogMjJweDtcXG59XFxuXFxuLmNvbnRhaW5lciB7XFxuICBtYXJnaW46IDAgYXV0bztcXG4gIHBhZGRpbmc6IDAgMjBweDtcXG4gIG1heC13aWR0aDogMTA2MHB4O1xcbn1cXG5cXG4uZm9vdGVyVG9wIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBwYWRkaW5nOiA2MHB4IDA7XFxufVxcblxcbi5mb290ZXJUb3AgaW1nIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgd2lkdGg6IDEwMHB4O1xcbiAgaGVpZ2h0OiA1NHB4O1xcbn1cXG5cXG4uY29udGFjdHMgc3BhbiB7XFxuICBmb250LXNpemU6IDIycHg7XFxufVxcblxcbi5jb250YWN0c0xpc3Qge1xcbiAgbWFyZ2luLXRvcDogMjBweDtcXG59XFxuXFxuLmNvbnRhY3RzTGlzdCBsaTpub3QoOmxhc3QtY2hpbGQpIHtcXG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XFxufVxcblxcbi5jb250YWN0c0xpc3QgYSB7XFxuICB0cmFuc2l0aW9uOiB0ZXh0LWRlY29yYXRpb24gMC4zcyBlYXNlLWluO1xcbn1cXG5cXG4uY29udGFjdHNMaXN0IGE6aG92ZXIge1xcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XFxuICB0cmFuc2l0aW9uOiB0ZXh0LWRlY29yYXRpb24gMC4zcyBlYXNlLWluO1xcbn1cXG5cXG4ubGlzdEl0ZW1UZWwsXFxuLmxpc3RJdGVtTWFpbCB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBwYWRkaW5nLWxlZnQ6IDMwcHg7XFxufVxcblxcbi5saXN0SXRlbVRlbDo6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6ICcnO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgbGVmdDogMDtcXG4gIHRvcDogMDtcXG4gIHdpZHRoOiAxNnB4O1xcbiAgaGVpZ2h0OiAxNnB4O1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi8uLi9hc3NldHMvaW1hZ2VzL3N2Zy90ZWxlcGhvbmUuc3ZnJyk7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XFxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbn1cXG5cXG4ubGlzdEl0ZW1NYWlsOjpiZWZvcmUge1xcbiAgY29udGVudDogJyc7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBsZWZ0OiAwO1xcbiAgdG9wOiAwO1xcbiAgd2lkdGg6IDE2cHg7XFxuICBoZWlnaHQ6IDE2cHg7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uLy4uL2Fzc2V0cy9pbWFnZXMvc3ZnL21haWwuc3ZnJyk7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XFxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbn1cXG5cXG4uc29jaWFsTGlzdCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgbWFyZ2luLXRvcDogMjBweDtcXG59XFxuXFxuLmxpbmsge1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1jb2xvci13aGl0ZSk7XFxuICBib3JkZXItcmFkaXVzOiAxMDAlO1xcbiAgd2lkdGg6IDQwcHg7XFxuICBoZWlnaHQ6IDQwcHg7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XFxuICBiYWNrZ3JvdW5kLXNpemU6IDIwcHggMjBweDtcXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxufVxcblxcbi5saW5rOmhvdmVyIHtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICMzYjU5OTg7XFxuICBib3gtc2hhZG93OiAwIDAgMTVweCB2YXIoLS1jb2xvci1icmlnaHQtdHVycXVvaXNlKTtcXG4gIHRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2U7XFxufVxcblxcbi52ayB7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uLy4uL2Fzc2V0cy9pbWFnZXMvc3ZnL3ZrLnN2ZycpO1xcbn1cXG5cXG4uZ29vZ2xlIHtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vLi4vYXNzZXRzL2ltYWdlcy9zdmcvZ29vZ2xlLnN2ZycpO1xcbn1cXG5cXG4ub2sge1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi8uLi9hc3NldHMvaW1hZ2VzL3N2Zy9vay1sb2dvLnN2ZycpO1xcbn1cXG5cXG4uZm9vdGVyQm90dG9tIHtcXG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNCk7XFxuICBwYWRkaW5nOiAyMHB4IDA7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbkBtZWRpYSAobWF4LXdpZHRoOiA1NzZweCkge1xcbiAgLmZvb3RlclRvcCB7XFxuICAgIHBhZGRpbmc6IDIwcHggMDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIH1cXG5cXG4gIC5mb290ZXJUb3AgaW1nLFxcbiAgLmluU29jaWFsVGV4dCB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICB9XFxuXFxuICAuY29udGFjdHMge1xcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xcbiAgfVxcblxcblxcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLmxvY2FscyA9IHtcblx0XCJmb290ZXJcIjogXCJmb290ZXItbV9fZm9vdGVyLS1HWVJkbVwiLFxuXHRcImNvbnRhaW5lclwiOiBcImZvb3Rlci1tX19jb250YWluZXItLXdMekNDXCIsXG5cdFwiZm9vdGVyVG9wXCI6IFwiZm9vdGVyLW1fX2Zvb3RlclRvcC0tTkNRdENcIixcblx0XCJjb250YWN0c1wiOiBcImZvb3Rlci1tX19jb250YWN0cy0tdHRJZUtcIixcblx0XCJjb250YWN0c0xpc3RcIjogXCJmb290ZXItbV9fY29udGFjdHNMaXN0LS1NWjA1R1wiLFxuXHRcImxpc3RJdGVtVGVsXCI6IFwiZm9vdGVyLW1fX2xpc3RJdGVtVGVsLS1Nb2p0M1wiLFxuXHRcImxpc3RJdGVtTWFpbFwiOiBcImZvb3Rlci1tX19saXN0SXRlbU1haWwtLWJQU2V3XCIsXG5cdFwic29jaWFsTGlzdFwiOiBcImZvb3Rlci1tX19zb2NpYWxMaXN0LS1MUXdSeFwiLFxuXHRcImxpbmtcIjogXCJmb290ZXItbV9fbGluay0tV3hqOFBcIixcblx0XCJ2a1wiOiBcImZvb3Rlci1tX192ay0tUl9nYUhcIixcblx0XCJnb29nbGVcIjogXCJmb290ZXItbV9fZ29vZ2xlLS1oazJaZVwiLFxuXHRcIm9rXCI6IFwiZm9vdGVyLW1fX29rLS1uWlJOYVwiLFxuXHRcImZvb3RlckJvdHRvbVwiOiBcImZvb3Rlci1tX19mb290ZXJCb3R0b20tLXZJYnM1XCIsXG5cdFwiaW5Tb2NpYWxUZXh0XCI6IFwiZm9vdGVyLW1fX2luU29jaWFsVGV4dC0tT24zOUNcIlxufTtcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvc3ZnL2Rvd24tYXJyb3cuc3ZnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLmxvY2F0aW9uLW1fX2xvY2F0aW9uLS1VVkRvUCB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmxvY2F0aW9uLW1fX2xvY2F0aW9uSWNvbi0tVjRFT1Uge1xcbiAgd2lkdGg6IDE4cHg7XFxuICBoZWlnaHQ6IDE4cHg7XFxuICBmaWxsOiB2YXIoLS1jb2xvci1lbWluZW5jZSlcXG59XFxuXFxuLmxvY2F0aW9uLW1fX2xvY2F0aW9uU2VsZWN0LS1ZYjBxXyB7XFxuICBhcHBlYXJhbmNlOiBub25lO1xcbiAgb3V0bGluZTogbm9uZTtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGZvbnQtc2l6ZTogMTZweDtcXG4gIGNvbG9yOiB2YXIoLS1jb2xvci1lbWluZW5jZSk7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fICsgXCIpO1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogOTAlIDUwJTtcXG4gIGJhY2tncm91bmQtc2l6ZTogMTBweCAxMHB4O1xcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG59XFxuXFxuLmxvY2F0aW9uLW1fX2NpdHlUZXh0LS1aNkxqTiB7XFxuICBjb2xvcjogdmFyKC0tY29sb3ItZW1pbmVuY2UpO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9jb21wb25lbnRzL0hlYWRlci9Mb2NhdGlvbi9sb2NhdGlvbi5tLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2IsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWjtBQUNGOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGFBQWE7RUFDYixZQUFZO0VBQ1osZUFBZTtFQUNmLDRCQUE0QjtFQUM1Qix5REFBa0U7RUFDbEUsNEJBQTRCO0VBQzVCLDBCQUEwQjtFQUMxQiw0QkFBNEI7QUFDOUI7O0FBRUE7RUFDRSw0QkFBNEI7RUFDNUIsaUJBQWlCO0FBQ25CXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi5sb2NhdGlvbiB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmxvY2F0aW9uSWNvbiB7XFxuICB3aWR0aDogMThweDtcXG4gIGhlaWdodDogMThweDtcXG4gIGZpbGw6IHZhcigtLWNvbG9yLWVtaW5lbmNlKVxcbn1cXG5cXG4ubG9jYXRpb25TZWxlY3Qge1xcbiAgYXBwZWFyYW5jZTogbm9uZTtcXG4gIG91dGxpbmU6IG5vbmU7XFxuICBib3JkZXI6IG5vbmU7XFxuICBmb250LXNpemU6IDE2cHg7XFxuICBjb2xvcjogdmFyKC0tY29sb3ItZW1pbmVuY2UpO1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi8uLi8uLi9hc3NldHMvaW1hZ2VzL3N2Zy9kb3duLWFycm93LnN2ZycpO1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogOTAlIDUwJTtcXG4gIGJhY2tncm91bmQtc2l6ZTogMTBweCAxMHB4O1xcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG59XFxuXFxuLmNpdHlUZXh0IHtcXG4gIGNvbG9yOiB2YXIoLS1jb2xvci1lbWluZW5jZSk7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5sb2NhbHMgPSB7XG5cdFwibG9jYXRpb25cIjogXCJsb2NhdGlvbi1tX19sb2NhdGlvbi0tVVZEb1BcIixcblx0XCJsb2NhdGlvbkljb25cIjogXCJsb2NhdGlvbi1tX19sb2NhdGlvbkljb24tLVY0RU9VXCIsXG5cdFwibG9jYXRpb25TZWxlY3RcIjogXCJsb2NhdGlvbi1tX19sb2NhdGlvblNlbGVjdC0tWWIwcV9cIixcblx0XCJjaXR5VGV4dFwiOiBcImxvY2F0aW9uLW1fX2NpdHlUZXh0LS1aNkxqTlwiXG59O1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi5zaWduaW4tbV9fbG9naW5JY29uLS1sYTBPNCB7XFxuICBtYXJnaW4tcmlnaHQ6IDVweDtcXG4gIHdpZHRoOiAyMHB4O1xcbiAgaGVpZ2h0OiAyMHB4O1xcbn1cXG5cXG4uc2lnbmluLW1fX2xvZ2luU2lnbmluLS1DY2VHbCB7XFxuICBmb250LXdlaWdodDogNTAwO1xcbiAgZm9udC1zaXplOiAyMHB4O1xcbiAgY29sb3I6IHZhcigtLWNvbG9yLWVtaW5lbmNlKTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLnNpZ25pbi1tX19sb2dpblNpZ25pbi0tQ2NlR2w6aG92ZXIge1xcbiAgY29sb3I6IHZhcigtLWNvbG9yLWV1Y2FseXB0dXMpO1xcbn1cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvY29tcG9uZW50cy9IZWFkZXIvU2lnbmluL3NpZ25pbi5tLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLGlCQUFpQjtFQUNqQixXQUFXO0VBQ1gsWUFBWTtBQUNkOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGVBQWU7RUFDZiw0QkFBNEI7RUFDNUIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLDhCQUE4QjtBQUNoQ1wiLFwic291cmNlc0NvbnRlbnRcIjpbXCIubG9naW5JY29uIHtcXG4gIG1hcmdpbi1yaWdodDogNXB4O1xcbiAgd2lkdGg6IDIwcHg7XFxuICBoZWlnaHQ6IDIwcHg7XFxufVxcblxcbi5sb2dpblNpZ25pbiB7XFxuICBmb250LXdlaWdodDogNTAwO1xcbiAgZm9udC1zaXplOiAyMHB4O1xcbiAgY29sb3I6IHZhcigtLWNvbG9yLWVtaW5lbmNlKTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLmxvZ2luU2lnbmluOmhvdmVyIHtcXG4gIGNvbG9yOiB2YXIoLS1jb2xvci1ldWNhbHlwdHVzKTtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5sb2NhbHMgPSB7XG5cdFwibG9naW5JY29uXCI6IFwic2lnbmluLW1fX2xvZ2luSWNvbi0tbGEwTzRcIixcblx0XCJsb2dpblNpZ25pblwiOiBcInNpZ25pbi1tX19sb2dpblNpZ25pbi0tQ2NlR2xcIlxufTtcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIuaGVhZGVyLW1fX2hlYWRlci0tMWJlaVAge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBwYWRkaW5nOiAzMHB4IDA7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci13aGl0ZSk7XFxufVxcblxcbi5oZWFkZXItbV9fbG9nby0tQmY2OTQge1xcbiAgd2lkdGg6IDEwMHB4O1xcbiAgaGVpZ2h0OiA2MHB4O1xcbn1cXG5cXG4uaGVhZGVyLW1fX2xpc3QtLWV2UWZVIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBtYXJnaW4tcmlnaHQ6IDIwMHB4O1xcbiAgd2lkdGg6IDIwMHB4O1xcbn1cXG5cXG4uaGVhZGVyLW1fX2xpbmstLXd0VzlzIHtcXG4gIGZvbnQtc2l6ZTogMjBweDtcXG4gIGNvbG9yOiB2YXIoLS1jb2xvci1lbWluZW5jZSk7XFxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcblxcbi5oZWFkZXItbV9fbGluay0td3RXOXM6aG92ZXIge1xcbiAgY29sb3I6IHZhcigtLWNvbG9yLWV1Y2FseXB0dXMpO1xcbn1cXG5cXG5cXG5AbWVkaWEgKG1heC13aWR0aDogMTAyNHB4KSB7XFxuICAuaGVhZGVyLW1fX2xpc3QtLWV2UWZVIHtcXG4gICAgbWFyZ2luLXJpZ2h0OiAwO1xcbiAgfVxcblxcbn1cXG5cXG5cXG5AbWVkaWEgKG1heC13aWR0aDogNTc2cHgpIHtcXG5cXG4gIC5oZWFkZXItbV9faGVhZGVyLS0xYmVpUCB7XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxuICB9XFxuXFxuICAuaGVhZGVyLW1fX2xpc3QtLWV2UWZVIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gIH1cXG5cXG4gIC5oZWFkZXItbV9fbG9nby0tQmY2OTQge1xcbiAgICB3aWR0aDogNTBweDtcXG4gICAgaGVpZ2h0OiAzMHB4O1xcbiAgfVxcbn1cXG5cXG5cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvY29tcG9uZW50cy9IZWFkZXIvaGVhZGVyLm0uY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQiw4QkFBOEI7RUFDOUIsZUFBZTtFQUNmLG9DQUFvQztBQUN0Qzs7QUFFQTtFQUNFLFlBQVk7RUFDWixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsOEJBQThCO0VBQzlCLG1CQUFtQjtFQUNuQixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsNEJBQTRCO0VBQzVCLHlCQUF5QjtFQUN6QixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSw4QkFBOEI7QUFDaEM7OztBQUdBO0VBQ0U7SUFDRSxlQUFlO0VBQ2pCOztBQUVGOzs7QUFHQTs7RUFFRTtJQUNFLGFBQWE7RUFDZjs7RUFFQTtJQUNFLGFBQWE7RUFDZjs7RUFFQTtJQUNFLFdBQVc7SUFDWCxZQUFZO0VBQ2Q7QUFDRlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIuaGVhZGVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgcGFkZGluZzogMzBweCAwO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3Itd2hpdGUpO1xcbn1cXG5cXG4ubG9nbyB7XFxuICB3aWR0aDogMTAwcHg7XFxuICBoZWlnaHQ6IDYwcHg7XFxufVxcblxcbi5saXN0IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBtYXJnaW4tcmlnaHQ6IDIwMHB4O1xcbiAgd2lkdGg6IDIwMHB4O1xcbn1cXG5cXG4ubGluayB7XFxuICBmb250LXNpemU6IDIwcHg7XFxuICBjb2xvcjogdmFyKC0tY29sb3ItZW1pbmVuY2UpO1xcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG5cXG4ubGluazpob3ZlciB7XFxuICBjb2xvcjogdmFyKC0tY29sb3ItZXVjYWx5cHR1cyk7XFxufVxcblxcblxcbkBtZWRpYSAobWF4LXdpZHRoOiAxMDI0cHgpIHtcXG4gIC5saXN0IHtcXG4gICAgbWFyZ2luLXJpZ2h0OiAwO1xcbiAgfVxcblxcbn1cXG5cXG5cXG5AbWVkaWEgKG1heC13aWR0aDogNTc2cHgpIHtcXG5cXG4gIC5oZWFkZXIge1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbiAgfVxcblxcbiAgLmxpc3Qge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgfVxcblxcbiAgLmxvZ28ge1xcbiAgICB3aWR0aDogNTBweDtcXG4gICAgaGVpZ2h0OiAzMHB4O1xcbiAgfVxcbn1cXG5cXG5cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLmxvY2FscyA9IHtcblx0XCJoZWFkZXJcIjogXCJoZWFkZXItbV9faGVhZGVyLS0xYmVpUFwiLFxuXHRcImxvZ29cIjogXCJoZWFkZXItbV9fbG9nby0tQmY2OTRcIixcblx0XCJsaXN0XCI6IFwiaGVhZGVyLW1fX2xpc3QtLWV2UWZVXCIsXG5cdFwibGlua1wiOiBcImhlYWRlci1tX19saW5rLS13dFc5c1wiXG59O1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi5wcm9maWxlLW1fX3VzZXJQcm9maWxlLS1PZXZ4cyB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBib3JkZXItcmFkaXVzOiAycHg7XFxufVxcblxcbi5wcm9maWxlLW1fX3VzZXJCYXNlSW5mby0tQ2dfRHAge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5wcm9maWxlLW1fX3Byb2ZpbGVJbWFnZS0tUnFJYmQge1xcbiAgd2lkdGg6IDQwcHg7XFxuICBoZWlnaHQ6IDQwcHg7XFxuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1jb2xvci1ncmF5KTtcXG4gIGJvcmRlci1yYWRpdXM6IDEwMCU7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XFxufVxcblxcbi5wcm9maWxlLW1fX3Byb2ZpbGVJbWFnZS0tUnFJYmQgaW1nIHtcXG4gIG9iamVjdC1maXQ6IGNvdmVyO1xcbn1cXG5cXG4ucHJvZmlsZS1tX19wcm9maWxlQnRucy0tRXBWZGoge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgcmlnaHQ6IDA7XFxuICB3aWR0aDogMTYwcHg7XFxuICBtYXJnaW4tdG9wOiA1cHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIHotaW5kZXg6IDU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci13aGl0ZSk7XFxuICBwYWRkaW5nOiAycHggMDtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWNvbG9yLWdyYXkpO1xcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xcbiAgYm94LXNoYWRvdzogMCA4cHggMTZweCAjMDAwMDAwMjk7XFxufVxcblxcbi5wcm9maWxlLW1fX2xvZ291dEJ0bi0tR2FqeWcsXFxuLnByb2ZpbGUtbV9fcHJvZmlsZUJ0bi0tdDdnNUUge1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBwYWRkaW5nOiAxMHB4IDE2cHg7XFxuICBtYXJnaW46IDJweCAwO1xcbiAgY29sb3I6IHZhcigtLWNvbG9yLWdyYXkpO1xcbiAgdGV4dC1hbGlnbjogbGVmdDtcXG59XFxuXFxuLnByb2ZpbGUtbV9fbG9nb3V0QnRuLS1HYWp5Zzpob3ZlcixcXG4ucHJvZmlsZS1tX19wcm9maWxlQnRuLS10N2c1RTpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjVmNWY1O1xcbiAgY29sb3I6ICMxMTE7XFxufVxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9jb21wb25lbnRzL1Byb2ZpbGUvcHJvZmlsZS5tLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLGtCQUFrQjtFQUNsQixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWixtQ0FBbUM7RUFDbkMsbUJBQW1CO0VBQ25CLGdCQUFnQjtFQUNoQixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsUUFBUTtFQUNSLFlBQVk7RUFDWixlQUFlO0VBQ2YsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixVQUFVO0VBQ1Ysb0NBQW9DO0VBQ3BDLGNBQWM7RUFDZCxtQ0FBbUM7RUFDbkMsa0JBQWtCO0VBQ2xCLGdDQUFnQztBQUNsQzs7QUFFQTs7RUFFRSxxQkFBcUI7RUFDckIsa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLHdCQUF3QjtFQUN4QixnQkFBZ0I7QUFDbEI7O0FBRUE7O0VBRUUseUJBQXlCO0VBQ3pCLFdBQVc7QUFDYlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIudXNlclByb2ZpbGUge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xcbn1cXG5cXG4udXNlckJhc2VJbmZvIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4ucHJvZmlsZUltYWdlIHtcXG4gIHdpZHRoOiA0MHB4O1xcbiAgaGVpZ2h0OiA0MHB4O1xcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tY29sb3ItZ3JheSk7XFxuICBib3JkZXItcmFkaXVzOiAxMDAlO1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xcbn1cXG5cXG4ucHJvZmlsZUltYWdlIGltZyB7XFxuICBvYmplY3QtZml0OiBjb3ZlcjtcXG59XFxuXFxuLnByb2ZpbGVCdG5zIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHJpZ2h0OiAwO1xcbiAgd2lkdGg6IDE2MHB4O1xcbiAgbWFyZ2luLXRvcDogNXB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICB6LWluZGV4OiA1O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3Itd2hpdGUpO1xcbiAgcGFkZGluZzogMnB4IDA7XFxuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1jb2xvci1ncmF5KTtcXG4gIGJvcmRlci1yYWRpdXM6IDJweDtcXG4gIGJveC1zaGFkb3c6IDAgOHB4IDE2cHggIzAwMDAwMDI5O1xcbn1cXG5cXG4ubG9nb3V0QnRuLFxcbi5wcm9maWxlQnRuIHtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgcGFkZGluZzogMTBweCAxNnB4O1xcbiAgbWFyZ2luOiAycHggMDtcXG4gIGNvbG9yOiB2YXIoLS1jb2xvci1ncmF5KTtcXG4gIHRleHQtYWxpZ246IGxlZnQ7XFxufVxcblxcbi5sb2dvdXRCdG46aG92ZXIsXFxuLnByb2ZpbGVCdG46aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y1ZjVmNTtcXG4gIGNvbG9yOiAjMTExO1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLmxvY2FscyA9IHtcblx0XCJ1c2VyUHJvZmlsZVwiOiBcInByb2ZpbGUtbV9fdXNlclByb2ZpbGUtLU9ldnhzXCIsXG5cdFwidXNlckJhc2VJbmZvXCI6IFwicHJvZmlsZS1tX191c2VyQmFzZUluZm8tLUNnX0RwXCIsXG5cdFwicHJvZmlsZUltYWdlXCI6IFwicHJvZmlsZS1tX19wcm9maWxlSW1hZ2UtLVJxSWJkXCIsXG5cdFwicHJvZmlsZUJ0bnNcIjogXCJwcm9maWxlLW1fX3Byb2ZpbGVCdG5zLS1FcFZkalwiLFxuXHRcImxvZ291dEJ0blwiOiBcInByb2ZpbGUtbV9fbG9nb3V0QnRuLS1HYWp5Z1wiLFxuXHRcInByb2ZpbGVCdG5cIjogXCJwcm9maWxlLW1fX3Byb2ZpbGVCdG4tLXQ3ZzVFXCJcbn07XG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLmxvYWRlcldyYXBwZXIge1xcbn1cXG5cXG4uc3Bpbm5lci1tX19sb2FkZXItLUFBZXRvIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHdpZHRoOiA2MHB4O1xcbiAgaGVpZ2h0OiA2MHB4O1xcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgbWFyZ2luOiAyMHB4O1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcXG59XFxuXFxuLmxvYWRlclN0YXIge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiBjYWxjKDUwJSAtIDEycHgpO1xcbn1cXG5cXG4uc3Bpbm5lci1tX19sb2FkZXIyLS1vYkFpNSAuc3Bpbm5lci1tX19sb2FkZXJTdGFyLS1HSHBQcCB7XFxuICBwb3NpdGlvbjogc3RhdGljO1xcbiAgd2lkdGg6IDYwcHg7XFxuICBoZWlnaHQ6IDYwcHg7XFxuICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMC43KTtcXG4gIC1tcy10cmFuc2Zvcm06IHNjYWxlKDAuNyk7XFxuICB0cmFuc2Zvcm06IHNjYWxlKDAuNyk7XFxuICAtd2Via2l0LWFuaW1hdGlvbjogc3Bpbm5lci1tX19sb2FkZXItMi1zdGFyLS1mVEg3byAxcyBlYXNlIGFsdGVybmF0ZSBpbmZpbml0ZTtcXG4gIGFuaW1hdGlvbjogc3Bpbm5lci1tX19sb2FkZXItMi1zdGFyLS1mVEg3byAxcyBlYXNlIGFsdGVybmF0ZSBpbmZpbml0ZTtcXG59XFxuXFxuLnNwaW5uZXItbV9fbG9hZGVyMi0tb2JBaTUgLnNwaW5uZXItbV9fbG9hZGVyQ2lyY2xlcy0tUEROT3Ige1xcbiAgd2lkdGg6IDhweDtcXG4gIGhlaWdodDogOHB4O1xcbiAgYmFja2dyb3VuZDogdmFyKC0tY29sb3ItZW1pbmVuY2UpO1xcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgbGVmdDogY2FsYyg1MCUgLSA0cHgpO1xcbiAgdG9wOiBjYWxjKDUwJSAtIDRweCk7XFxuICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAxcyBlYXNlO1xcbiAgLW8tdHJhbnNpdGlvbjogYWxsIDFzIGVhc2U7XFxuICB0cmFuc2l0aW9uOiBhbGwgMXMgZWFzZTtcXG4gIC13ZWJraXQtYW5pbWF0aW9uOiBzcGlubmVyLW1fX2xvYWRlci0yLWNpcmNsZXMtLUpSYlVQIDFzIGVhc2UtaW4tb3V0IGFsdGVybmF0ZSBpbmZpbml0ZTtcXG4gIGFuaW1hdGlvbjogc3Bpbm5lci1tX19sb2FkZXItMi1jaXJjbGVzLS1KUmJVUCAxcyBlYXNlLWluLW91dCBhbHRlcm5hdGUgaW5maW5pdGU7XFxufVxcblxcbkAtd2Via2l0LWtleWZyYW1lcyBzcGlubmVyLW1fX2xvYWRlci0yLWNpcmNsZXMtLUpSYlVQIHtcXG4gIDAlIHtcXG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiAwIDAgMCB2YXIoLS1jb2xvci1lbWluZW5jZSk7XFxuICAgIGJveC1zaGFkb3c6IDAgMCAwIHZhcigtLWNvbG9yLWVtaW5lbmNlKTtcXG4gICAgb3BhY2l0eTogMTtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XFxuICB9XFxuICA1MCUge1xcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6IDI0cHggLTIycHggdmFyKC0tY29sb3ItZW1pbmVuY2UpLFxcbiAgICAzMHB4IC0xNXB4IDAgLTNweCB2YXIoLS1jb2xvci1lbWluZW5jZSksXFxuICAgIDMxcHggMHB4IHZhcigtLWNvbG9yLWVtaW5lbmNlKSxcXG4gICAgMjlweCA5cHggMCAtM3B4IHZhcigtLWNvbG9yLWVtaW5lbmNlKSxcXG4gICAgMjRweCAyM3B4IHZhcigtLWNvbG9yLWVtaW5lbmNlKSwgMTdweCAzMHB4IDAgLTNweCB2YXIoLS1jb2xvci1lbWluZW5jZSksXFxuICAgIDBweCAzM3B4IHZhcigtLWNvbG9yLWVtaW5lbmNlKSwgLTEwcHggMjhweCAwIC0zcHggdmFyKC0tY29sb3ItZW1pbmVuY2UpLFxcbiAgICAtMjRweCAyMnB4IHZhcigtLWNvbG9yLWVtaW5lbmNlKSwgLTI5cHggMTRweCAwIC0zcHggdmFyKC0tY29sb3ItZW1pbmVuY2UpLFxcbiAgICAtMzFweCAtM3B4IHZhcigtLWNvbG9yLWVtaW5lbmNlKSwgLTMwcHggLTExcHggMCAtM3B4IHZhcigtLWNvbG9yLWVtaW5lbmNlKSxcXG4gICAgLTIwcHggLTI1cHggdmFyKC0tY29sb3ItZW1pbmVuY2UpLFxcbiAgICAtMTJweCAtMzBweCAwIC0zcHggdmFyKC0tY29sb3ItZW1pbmVuY2UpLFxcbiAgICA1cHggLTI5cHggdmFyKC0tY29sb3ItZW1pbmVuY2UpLFxcbiAgICAxM3B4IC0yNXB4IDAgLTNweCB2YXIoLS1jb2xvci1lbWluZW5jZSk7XFxuICAgIGJveC1zaGFkb3c6IDI0cHggLTIycHggdmFyKC0tY29sb3ItZW1pbmVuY2UpLCAzMHB4IC0xNXB4IDAgLTNweCB2YXIoLS1jb2xvci1lbWluZW5jZSksIDMxcHggMHB4IHZhcigtLWNvbG9yLWVtaW5lbmNlKSwgMjlweCA5cHggMCAtM3B4IHZhcigtLWNvbG9yLWVtaW5lbmNlKSwgMjRweCAyM3B4IHZhcigtLWNvbG9yLWVtaW5lbmNlKSwgMTdweCAzMHB4IDAgLTNweCB2YXIoLS1jb2xvci1lbWluZW5jZSksIDBweCAzM3B4IHZhcigtLWNvbG9yLWVtaW5lbmNlKSwgLTEwcHggMjhweCAwIC0zcHggdmFyKC0tY29sb3ItZW1pbmVuY2UpLCAtMjRweCAyMnB4IHZhcigtLWNvbG9yLWVtaW5lbmNlKSwgLTI5cHggMTRweCAwIC0zcHggdmFyKC0tY29sb3ItZW1pbmVuY2UpLCAtMzFweCAtM3B4IHZhcigtLWNvbG9yLWVtaW5lbmNlKSwgLTMwcHggLTExcHggMCAtM3B4IHZhcigtLWNvbG9yLWVtaW5lbmNlKSwgLTIwcHggLTI1cHggdmFyKC0tY29sb3ItZW1pbmVuY2UpLCAtMTJweCAtMzBweCAwIC0zcHggdmFyKC0tY29sb3ItZW1pbmVuY2UpLCA1cHggLTI5cHggdmFyKC0tY29sb3ItZW1pbmVuY2UpLCAxM3B4IC0yNXB4IDAgLTNweCB2YXIoLS1jb2xvci1lbWluZW5jZSk7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMTgwZGVnKTtcXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMTgwZGVnKTtcXG4gIH1cXG4gIDEwMCUge1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XFxuICAgIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XFxuICAgIC13ZWJraXQtYm94LXNoYWRvdzogMjVweCAtMjJweCB2YXIoLS1jb2xvci1lbWluZW5jZSksXFxuICAgIDE1cHggLTIycHggMCAtM3B4IGJsYWNrLFxcbiAgICAzMXB4IDJweCB2YXIoLS1jb2xvci1lbWluZW5jZSksXFxuICAgIDIxcHggMnB4IDAgLTNweCBibGFjaywgMjNweCAyNXB4IHZhcigtLWNvbG9yLWVtaW5lbmNlKSxcXG4gICAgMTNweCAyNXB4IDAgLTNweCBibGFjaywgMHB4IDMzcHggdmFyKC0tY29sb3ItZW1pbmVuY2UpLFxcbiAgICAtMTBweCAzM3B4IDAgLTNweCBibGFjaywgLTI2cHggMjRweCB2YXIoLS1jb2xvci1lbWluZW5jZSksXFxuICAgIC0xOXB4IDE3cHggMCAtM3B4IGJsYWNrLCAtMzJweCAwcHggdmFyKC0tY29sb3ItZW1pbmVuY2UpLFxcbiAgICAtMjNweCAwcHggMCAtM3B4IGJsYWNrLCAtMjVweCAtMjNweCB2YXIoLS1jb2xvci1lbWluZW5jZSksXFxuICAgIC0xNnB4IC0yM3B4IDAgLTNweCBibGFjaywgMHB4IC0zMXB4IHZhcigtLWNvbG9yLWVtaW5lbmNlKSxcXG4gICAgLTJweCAtMjNweCAwIC0zcHggYmxhY2s7XFxuICAgIGJveC1zaGFkb3c6IDI1cHggLTIycHggdmFyKC0tY29sb3ItZW1pbmVuY2UpLFxcbiAgICAxNXB4IC0yMnB4IDAgLTNweCBibGFjaywgMzFweCAycHggdmFyKC0tY29sb3ItZW1pbmVuY2UpLFxcbiAgICAyMXB4IDJweCAwIC0zcHggYmxhY2ssIDIzcHggMjVweCB2YXIoLS1jb2xvci1lbWluZW5jZSksXFxuICAgIDEzcHggMjVweCAwIC0zcHggYmxhY2ssIDBweCAzM3B4IHZhcigtLWNvbG9yLWVtaW5lbmNlKSxcXG4gICAgLTEwcHggMzNweCAwIC0zcHggYmxhY2ssIC0yNnB4IDI0cHggdmFyKC0tY29sb3ItZW1pbmVuY2UpLFxcbiAgICAtMTlweCAxN3B4IDAgLTNweCBibGFjaywgLTMycHggMHB4IHZhcigtLWNvbG9yLWVtaW5lbmNlKSxcXG4gICAgLTIzcHggMHB4IDAgLTNweCBibGFjaywgLTI1cHggLTIzcHggdmFyKC0tY29sb3ItZW1pbmVuY2UpLFxcbiAgICAtMTZweCAtMjNweCAwIC0zcHggYmxhY2ssIDBweCAtMzFweCB2YXIoLS1jb2xvci1lbWluZW5jZSksXFxuICAgIC0ycHggLTIzcHggMCAtM3B4IGJsYWNrO1xcbiAgfVxcbn1cXG5cXG5Aa2V5ZnJhbWVzIHNwaW5uZXItbV9fbG9hZGVyLTItY2lyY2xlcy0tSlJiVVAge1xcbiAgMCUge1xcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6IDAgMCAwIHZhcigtLWNvbG9yLWVtaW5lbmNlKTtcXG4gICAgYm94LXNoYWRvdzogMCAwIDAgdmFyKC0tY29sb3ItZW1pbmVuY2UpO1xcbiAgICBvcGFjaXR5OiAxO1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcXG4gIH1cXG4gIDUwJSB7XFxuICAgIC13ZWJraXQtYm94LXNoYWRvdzogMjRweCAtMjJweCB2YXIoLS1jb2xvci1lbWluZW5jZSksXFxuICAgIDMwcHggLTE1cHggMCAtM3B4IHZhcigtLWNvbG9yLWVtaW5lbmNlKSxcXG4gICAgMzFweCAwcHggdmFyKC0tY29sb3ItZW1pbmVuY2UpLFxcbiAgICAyOXB4IDlweCAwIC0zcHggdmFyKC0tY29sb3ItZW1pbmVuY2UpLFxcbiAgICAyNHB4IDIzcHggdmFyKC0tY29sb3ItZW1pbmVuY2UpLFxcbiAgICAxN3B4IDMwcHggMCAtM3B4IHZhcigtLWNvbG9yLWVtaW5lbmNlKSxcXG4gICAgMHB4IDMzcHggdmFyKC0tY29sb3ItZW1pbmVuY2UpLFxcbiAgICAtMTBweCAyOHB4IDAgLTNweCB2YXIoLS1jb2xvci1lbWluZW5jZSksXFxuICAgIC0yNHB4IDIycHggdmFyKC0tY29sb3ItZW1pbmVuY2UpLFxcbiAgICAtMjlweCAxNHB4IDAgLTNweCB2YXIoLS1jb2xvci1lbWluZW5jZSksXFxuICAgIC0zMXB4IC0zcHggI2UxMWEyYixcXG4gICAgLTMwcHggLTExcHggMCAtM3B4IHZhcigtLWNvbG9yLWVtaW5lbmNlKSxcXG4gICAgLTIwcHggLTI1cHggdmFyKC0tY29sb3ItZW1pbmVuY2UpLFxcbiAgICAtMTJweCAtMzBweCAwIC0zcHggdmFyKC0tY29sb3ItZW1pbmVuY2UpLFxcbiAgICA1cHggLTI5cHggdmFyKC0tY29sb3ItZW1pbmVuY2UpLFxcbiAgICAxM3B4IC0yNXB4IDAgLTNweCB2YXIoLS1jb2xvci1lbWluZW5jZSk7XFxuICAgIGJveC1zaGFkb3c6IDI0cHggLTIycHggdmFyKC0tY29sb3ItZW1pbmVuY2UpLFxcbiAgICAzMHB4IC0xNXB4IDAgLTNweCB2YXIoLS1jb2xvci1lbWluZW5jZSksXFxuICAgIDMxcHggMHB4IHZhcigtLWNvbG9yLWVtaW5lbmNlKSxcXG4gICAgMjlweCA5cHggMCAtM3B4IHZhcigtLWNvbG9yLWVtaW5lbmNlKSxcXG4gICAgMjRweCAyM3B4IHZhcigtLWNvbG9yLWVtaW5lbmNlKSxcXG4gICAgMTdweCAzMHB4IDAgLTNweCB2YXIoLS1jb2xvci1lbWluZW5jZSksXFxuICAgIDBweCAzM3B4IHZhcigtLWNvbG9yLWVtaW5lbmNlKSxcXG4gICAgLTEwcHggMjhweCAwIC0zcHggdmFyKC0tY29sb3ItZW1pbmVuY2UpLFxcbiAgICAtMjRweCAyMnB4IHZhcigtLWNvbG9yLWVtaW5lbmNlKSxcXG4gICAgLTI5cHggMTRweCAwIC0zcHggdmFyKC0tY29sb3ItZW1pbmVuY2UpLFxcbiAgICAtMzFweCAtM3B4IHZhcigtLWNvbG9yLWVtaW5lbmNlKSxcXG4gICAgLTMwcHggLTExcHggMCAtM3B4IHZhcigtLWNvbG9yLWVtaW5lbmNlKSxcXG4gICAgLTIwcHggLTI1cHggdmFyKC0tY29sb3ItZW1pbmVuY2UpLFxcbiAgICAtMTJweCAtMzBweCAwIC0zcHggdmFyKC0tY29sb3ItZW1pbmVuY2UpLFxcbiAgICA1cHggLTI5cHggdmFyKC0tY29sb3ItZW1pbmVuY2UpLFxcbiAgICAxM3B4IC0yNXB4IDAgLTNweCB2YXIoLS1jb2xvci1lbWluZW5jZSk7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMTgwZGVnKTtcXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMTgwZGVnKTtcXG4gIH1cXG4gIDEwMCUge1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XFxuICAgIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XFxuICAgIC13ZWJraXQtYm94LXNoYWRvdzogMjVweCAtMjJweCB2YXIoLS1jb2xvci1lbWluZW5jZSksXFxuICAgIDE1cHggLTIycHggMCAtM3B4IGJsYWNrLCAzMXB4IDJweCB2YXIoLS1jb2xvci1lbWluZW5jZSksXFxuICAgIDIxcHggMnB4IDAgLTNweCBibGFjaywgMjNweCAyNXB4IHZhcigtLWNvbG9yLWVtaW5lbmNlKSxcXG4gICAgMTNweCAyNXB4IDAgLTNweCBibGFjaywgMHB4IDMzcHggdmFyKC0tY29sb3ItZW1pbmVuY2UpLFxcbiAgICAtMTBweCAzM3B4IDAgLTNweCBibGFjaywgLTI2cHggMjRweCB2YXIoLS1jb2xvci1lbWluZW5jZSksXFxuICAgIC0xOXB4IDE3cHggMCAtM3B4IGJsYWNrLCAtMzJweCAwcHggdmFyKC0tY29sb3ItZW1pbmVuY2UpLFxcbiAgICAtMjNweCAwcHggMCAtM3B4IGJsYWNrLCAtMjVweCAtMjNweCB2YXIoLS1jb2xvci1lbWluZW5jZSksXFxuICAgIC0xNnB4IC0yM3B4IDAgLTNweCBibGFjaywgMHB4IC0zMXB4IHZhcigtLWNvbG9yLWVtaW5lbmNlKSxcXG4gICAgLTJweCAtMjNweCAwIC0zcHggYmxhY2s7XFxuICAgIGJveC1zaGFkb3c6IDI1cHggLTIycHggdmFyKC0tY29sb3ItZW1pbmVuY2UpLFxcbiAgICAxNXB4IC0yMnB4IDAgLTNweCBibGFjaywgMzFweCAycHggdmFyKC0tY29sb3ItZW1pbmVuY2UpLFxcbiAgICAyMXB4IDJweCAwIC0zcHggYmxhY2ssIDIzcHggMjVweCB2YXIoLS1jb2xvci1lbWluZW5jZSksXFxuICAgIDEzcHggMjVweCAwIC0zcHggYmxhY2ssIDBweCAzM3B4IHZhcigtLWNvbG9yLWVtaW5lbmNlKSxcXG4gICAgLTEwcHggMzNweCAwIC0zcHggYmxhY2ssIC0yNnB4IDI0cHggdmFyKC0tY29sb3ItZW1pbmVuY2UpLFxcbiAgICAtMTlweCAxN3B4IDAgLTNweCBibGFjaywgLTMycHggMHB4IHZhcigtLWNvbG9yLWVtaW5lbmNlKSxcXG4gICAgLTIzcHggMHB4IDAgLTNweCBibGFjaywgLTI1cHggLTIzcHggdmFyKC0tY29sb3ItZW1pbmVuY2UpLFxcbiAgICAtMTZweCAtMjNweCAwIC0zcHggYmxhY2ssIDBweCAtMzFweCB2YXIoLS1jb2xvci1lbWluZW5jZSksXFxuICAgIC0ycHggLTIzcHggMCAtM3B4IGJsYWNrO1xcbiAgfVxcbn1cXG5cXG5ALXdlYmtpdC1rZXlmcmFtZXMgc3Bpbm5lci1tX19sb2FkZXItMi1zdGFyLS1mVEg3byB7XFxuICAwJSB7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgwKSByb3RhdGUoMGRlZyk7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMCkgcm90YXRlKDBkZWcpO1xcbiAgfVxcbiAgMTAwJSB7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgwLjcpIHJvdGF0ZSgzNjBkZWcpO1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDAuNykgcm90YXRlKDM2MGRlZyk7XFxuICB9XFxufVxcblxcbkAtd2Via2l0LWtleWZyYW1lcyBzcGlubmVyLW1fX2RvdC1qdW1wLS1fYlplOCB7XFxuICAwJSB7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XFxuICB9XFxuICAxMDAlIHtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTE1cHgpO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTE1cHgpO1xcbiAgfVxcbn1cXG5cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvY29tcG9uZW50cy9TcGlubmVyL3NwaW5uZXIubS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7QUFDQTs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1oscUJBQXFCO0VBQ3JCLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsV0FBVztFQUNYLFlBQVk7RUFDWiw2QkFBNkI7RUFDN0IseUJBQXlCO0VBQ3pCLHFCQUFxQjtFQUNyQiw2RUFBMkQ7RUFDM0QscUVBQW1EO0FBQ3JEOztBQUVBO0VBQ0UsVUFBVTtFQUNWLFdBQVc7RUFDWCxpQ0FBaUM7RUFDakMsa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixxQkFBcUI7RUFDckIsb0JBQW9CO0VBQ3BCLCtCQUErQjtFQUMvQiwwQkFBMEI7RUFDMUIsdUJBQXVCO0VBQ3ZCLHVGQUFxRTtFQUNyRSwrRUFBNkQ7QUFDL0Q7O0FBRUE7RUFDRTtJQUNFLCtDQUErQztJQUMvQyx1Q0FBdUM7SUFDdkMsVUFBVTtJQUNWLCtCQUErQjtJQUMvQix1QkFBdUI7RUFDekI7RUFDQTtJQUNFOzs7Ozs7Ozs7OzsyQ0FXdUM7SUFDdkMsNGxCQUE0bEI7SUFDNWxCLGlDQUFpQztJQUNqQyx5QkFBeUI7RUFDM0I7RUFDQTtJQUNFLFVBQVU7SUFDVixpQ0FBaUM7SUFDakMseUJBQXlCO0lBQ3pCOzs7Ozs7Ozs7MkJBU3VCO0lBQ3ZCOzs7Ozs7OzsyQkFRdUI7RUFDekI7QUFDRjs7QUFFQTtFQUNFO0lBQ0UsK0NBQStDO0lBQy9DLHVDQUF1QztJQUN2QyxVQUFVO0lBQ1YsK0JBQStCO0lBQy9CLHVCQUF1QjtFQUN6QjtFQUNBO0lBQ0U7Ozs7Ozs7Ozs7Ozs7OzsyQ0FldUM7SUFDdkM7Ozs7Ozs7Ozs7Ozs7OzsyQ0FldUM7SUFDdkMsaUNBQWlDO0lBQ2pDLHlCQUF5QjtFQUMzQjtFQUNBO0lBQ0UsVUFBVTtJQUNWLGlDQUFpQztJQUNqQyx5QkFBeUI7SUFDekI7Ozs7Ozs7OzJCQVF1QjtJQUN2Qjs7Ozs7Ozs7MkJBUXVCO0VBQ3pCO0FBQ0Y7O0FBRUE7RUFDRTtJQUNFLHdDQUF3QztJQUN4QyxnQ0FBZ0M7RUFDbEM7RUFDQTtJQUNFLDRDQUE0QztJQUM1QyxvQ0FBb0M7RUFDdEM7QUFDRjs7QUFFQTtFQUNFO0lBQ0UsZ0NBQWdDO0lBQ2hDLHdCQUF3QjtFQUMxQjtFQUNBO0lBQ0Usb0NBQW9DO0lBQ3BDLDRCQUE0QjtFQUM5QjtBQUNGXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIjpnbG9iYWwoLmxvYWRlcldyYXBwZXIpIHtcXG59XFxuXFxuLmxvYWRlciB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICB3aWR0aDogNjBweDtcXG4gIGhlaWdodDogNjBweDtcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gIG1hcmdpbjogMjBweDtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XFxufVxcblxcbjpnbG9iYWwoLmxvYWRlclN0YXIpIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogY2FsYyg1MCUgLSAxMnB4KTtcXG59XFxuXFxuLmxvYWRlcjIgLmxvYWRlclN0YXIge1xcbiAgcG9zaXRpb246IHN0YXRpYztcXG4gIHdpZHRoOiA2MHB4O1xcbiAgaGVpZ2h0OiA2MHB4O1xcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDAuNyk7XFxuICAtbXMtdHJhbnNmb3JtOiBzY2FsZSgwLjcpO1xcbiAgdHJhbnNmb3JtOiBzY2FsZSgwLjcpO1xcbiAgLXdlYmtpdC1hbmltYXRpb246IGxvYWRlci0yLXN0YXIgMXMgZWFzZSBhbHRlcm5hdGUgaW5maW5pdGU7XFxuICBhbmltYXRpb246IGxvYWRlci0yLXN0YXIgMXMgZWFzZSBhbHRlcm5hdGUgaW5maW5pdGU7XFxufVxcblxcbi5sb2FkZXIyIC5sb2FkZXJDaXJjbGVzIHtcXG4gIHdpZHRoOiA4cHg7XFxuICBoZWlnaHQ6IDhweDtcXG4gIGJhY2tncm91bmQ6IHZhcigtLWNvbG9yLWVtaW5lbmNlKTtcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGxlZnQ6IGNhbGMoNTAlIC0gNHB4KTtcXG4gIHRvcDogY2FsYyg1MCUgLSA0cHgpO1xcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMXMgZWFzZTtcXG4gIC1vLXRyYW5zaXRpb246IGFsbCAxcyBlYXNlO1xcbiAgdHJhbnNpdGlvbjogYWxsIDFzIGVhc2U7XFxuICAtd2Via2l0LWFuaW1hdGlvbjogbG9hZGVyLTItY2lyY2xlcyAxcyBlYXNlLWluLW91dCBhbHRlcm5hdGUgaW5maW5pdGU7XFxuICBhbmltYXRpb246IGxvYWRlci0yLWNpcmNsZXMgMXMgZWFzZS1pbi1vdXQgYWx0ZXJuYXRlIGluZmluaXRlO1xcbn1cXG5cXG5ALXdlYmtpdC1rZXlmcmFtZXMgbG9hZGVyLTItY2lyY2xlcyB7XFxuICAwJSB7XFxuICAgIC13ZWJraXQtYm94LXNoYWRvdzogMCAwIDAgdmFyKC0tY29sb3ItZW1pbmVuY2UpO1xcbiAgICBib3gtc2hhZG93OiAwIDAgMCB2YXIoLS1jb2xvci1lbWluZW5jZSk7XFxuICAgIG9wYWNpdHk6IDE7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XFxuICAgIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xcbiAgfVxcbiAgNTAlIHtcXG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiAyNHB4IC0yMnB4IHZhcigtLWNvbG9yLWVtaW5lbmNlKSxcXG4gICAgMzBweCAtMTVweCAwIC0zcHggdmFyKC0tY29sb3ItZW1pbmVuY2UpLFxcbiAgICAzMXB4IDBweCB2YXIoLS1jb2xvci1lbWluZW5jZSksXFxuICAgIDI5cHggOXB4IDAgLTNweCB2YXIoLS1jb2xvci1lbWluZW5jZSksXFxuICAgIDI0cHggMjNweCB2YXIoLS1jb2xvci1lbWluZW5jZSksIDE3cHggMzBweCAwIC0zcHggdmFyKC0tY29sb3ItZW1pbmVuY2UpLFxcbiAgICAwcHggMzNweCB2YXIoLS1jb2xvci1lbWluZW5jZSksIC0xMHB4IDI4cHggMCAtM3B4IHZhcigtLWNvbG9yLWVtaW5lbmNlKSxcXG4gICAgLTI0cHggMjJweCB2YXIoLS1jb2xvci1lbWluZW5jZSksIC0yOXB4IDE0cHggMCAtM3B4IHZhcigtLWNvbG9yLWVtaW5lbmNlKSxcXG4gICAgLTMxcHggLTNweCB2YXIoLS1jb2xvci1lbWluZW5jZSksIC0zMHB4IC0xMXB4IDAgLTNweCB2YXIoLS1jb2xvci1lbWluZW5jZSksXFxuICAgIC0yMHB4IC0yNXB4IHZhcigtLWNvbG9yLWVtaW5lbmNlKSxcXG4gICAgLTEycHggLTMwcHggMCAtM3B4IHZhcigtLWNvbG9yLWVtaW5lbmNlKSxcXG4gICAgNXB4IC0yOXB4IHZhcigtLWNvbG9yLWVtaW5lbmNlKSxcXG4gICAgMTNweCAtMjVweCAwIC0zcHggdmFyKC0tY29sb3ItZW1pbmVuY2UpO1xcbiAgICBib3gtc2hhZG93OiAyNHB4IC0yMnB4IHZhcigtLWNvbG9yLWVtaW5lbmNlKSwgMzBweCAtMTVweCAwIC0zcHggdmFyKC0tY29sb3ItZW1pbmVuY2UpLCAzMXB4IDBweCB2YXIoLS1jb2xvci1lbWluZW5jZSksIDI5cHggOXB4IDAgLTNweCB2YXIoLS1jb2xvci1lbWluZW5jZSksIDI0cHggMjNweCB2YXIoLS1jb2xvci1lbWluZW5jZSksIDE3cHggMzBweCAwIC0zcHggdmFyKC0tY29sb3ItZW1pbmVuY2UpLCAwcHggMzNweCB2YXIoLS1jb2xvci1lbWluZW5jZSksIC0xMHB4IDI4cHggMCAtM3B4IHZhcigtLWNvbG9yLWVtaW5lbmNlKSwgLTI0cHggMjJweCB2YXIoLS1jb2xvci1lbWluZW5jZSksIC0yOXB4IDE0cHggMCAtM3B4IHZhcigtLWNvbG9yLWVtaW5lbmNlKSwgLTMxcHggLTNweCB2YXIoLS1jb2xvci1lbWluZW5jZSksIC0zMHB4IC0xMXB4IDAgLTNweCB2YXIoLS1jb2xvci1lbWluZW5jZSksIC0yMHB4IC0yNXB4IHZhcigtLWNvbG9yLWVtaW5lbmNlKSwgLTEycHggLTMwcHggMCAtM3B4IHZhcigtLWNvbG9yLWVtaW5lbmNlKSwgNXB4IC0yOXB4IHZhcigtLWNvbG9yLWVtaW5lbmNlKSwgMTNweCAtMjVweCAwIC0zcHggdmFyKC0tY29sb3ItZW1pbmVuY2UpO1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDE4MGRlZyk7XFxuICAgIHRyYW5zZm9ybTogcm90YXRlKDE4MGRlZyk7XFxuICB9XFxuICAxMDAlIHtcXG4gICAgb3BhY2l0eTogMDtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6IDI1cHggLTIycHggdmFyKC0tY29sb3ItZW1pbmVuY2UpLFxcbiAgICAxNXB4IC0yMnB4IDAgLTNweCBibGFjayxcXG4gICAgMzFweCAycHggdmFyKC0tY29sb3ItZW1pbmVuY2UpLFxcbiAgICAyMXB4IDJweCAwIC0zcHggYmxhY2ssIDIzcHggMjVweCB2YXIoLS1jb2xvci1lbWluZW5jZSksXFxuICAgIDEzcHggMjVweCAwIC0zcHggYmxhY2ssIDBweCAzM3B4IHZhcigtLWNvbG9yLWVtaW5lbmNlKSxcXG4gICAgLTEwcHggMzNweCAwIC0zcHggYmxhY2ssIC0yNnB4IDI0cHggdmFyKC0tY29sb3ItZW1pbmVuY2UpLFxcbiAgICAtMTlweCAxN3B4IDAgLTNweCBibGFjaywgLTMycHggMHB4IHZhcigtLWNvbG9yLWVtaW5lbmNlKSxcXG4gICAgLTIzcHggMHB4IDAgLTNweCBibGFjaywgLTI1cHggLTIzcHggdmFyKC0tY29sb3ItZW1pbmVuY2UpLFxcbiAgICAtMTZweCAtMjNweCAwIC0zcHggYmxhY2ssIDBweCAtMzFweCB2YXIoLS1jb2xvci1lbWluZW5jZSksXFxuICAgIC0ycHggLTIzcHggMCAtM3B4IGJsYWNrO1xcbiAgICBib3gtc2hhZG93OiAyNXB4IC0yMnB4IHZhcigtLWNvbG9yLWVtaW5lbmNlKSxcXG4gICAgMTVweCAtMjJweCAwIC0zcHggYmxhY2ssIDMxcHggMnB4IHZhcigtLWNvbG9yLWVtaW5lbmNlKSxcXG4gICAgMjFweCAycHggMCAtM3B4IGJsYWNrLCAyM3B4IDI1cHggdmFyKC0tY29sb3ItZW1pbmVuY2UpLFxcbiAgICAxM3B4IDI1cHggMCAtM3B4IGJsYWNrLCAwcHggMzNweCB2YXIoLS1jb2xvci1lbWluZW5jZSksXFxuICAgIC0xMHB4IDMzcHggMCAtM3B4IGJsYWNrLCAtMjZweCAyNHB4IHZhcigtLWNvbG9yLWVtaW5lbmNlKSxcXG4gICAgLTE5cHggMTdweCAwIC0zcHggYmxhY2ssIC0zMnB4IDBweCB2YXIoLS1jb2xvci1lbWluZW5jZSksXFxuICAgIC0yM3B4IDBweCAwIC0zcHggYmxhY2ssIC0yNXB4IC0yM3B4IHZhcigtLWNvbG9yLWVtaW5lbmNlKSxcXG4gICAgLTE2cHggLTIzcHggMCAtM3B4IGJsYWNrLCAwcHggLTMxcHggdmFyKC0tY29sb3ItZW1pbmVuY2UpLFxcbiAgICAtMnB4IC0yM3B4IDAgLTNweCBibGFjaztcXG4gIH1cXG59XFxuXFxuQGtleWZyYW1lcyBsb2FkZXItMi1jaXJjbGVzIHtcXG4gIDAlIHtcXG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiAwIDAgMCB2YXIoLS1jb2xvci1lbWluZW5jZSk7XFxuICAgIGJveC1zaGFkb3c6IDAgMCAwIHZhcigtLWNvbG9yLWVtaW5lbmNlKTtcXG4gICAgb3BhY2l0eTogMTtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XFxuICB9XFxuICA1MCUge1xcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6IDI0cHggLTIycHggdmFyKC0tY29sb3ItZW1pbmVuY2UpLFxcbiAgICAzMHB4IC0xNXB4IDAgLTNweCB2YXIoLS1jb2xvci1lbWluZW5jZSksXFxuICAgIDMxcHggMHB4IHZhcigtLWNvbG9yLWVtaW5lbmNlKSxcXG4gICAgMjlweCA5cHggMCAtM3B4IHZhcigtLWNvbG9yLWVtaW5lbmNlKSxcXG4gICAgMjRweCAyM3B4IHZhcigtLWNvbG9yLWVtaW5lbmNlKSxcXG4gICAgMTdweCAzMHB4IDAgLTNweCB2YXIoLS1jb2xvci1lbWluZW5jZSksXFxuICAgIDBweCAzM3B4IHZhcigtLWNvbG9yLWVtaW5lbmNlKSxcXG4gICAgLTEwcHggMjhweCAwIC0zcHggdmFyKC0tY29sb3ItZW1pbmVuY2UpLFxcbiAgICAtMjRweCAyMnB4IHZhcigtLWNvbG9yLWVtaW5lbmNlKSxcXG4gICAgLTI5cHggMTRweCAwIC0zcHggdmFyKC0tY29sb3ItZW1pbmVuY2UpLFxcbiAgICAtMzFweCAtM3B4ICNlMTFhMmIsXFxuICAgIC0zMHB4IC0xMXB4IDAgLTNweCB2YXIoLS1jb2xvci1lbWluZW5jZSksXFxuICAgIC0yMHB4IC0yNXB4IHZhcigtLWNvbG9yLWVtaW5lbmNlKSxcXG4gICAgLTEycHggLTMwcHggMCAtM3B4IHZhcigtLWNvbG9yLWVtaW5lbmNlKSxcXG4gICAgNXB4IC0yOXB4IHZhcigtLWNvbG9yLWVtaW5lbmNlKSxcXG4gICAgMTNweCAtMjVweCAwIC0zcHggdmFyKC0tY29sb3ItZW1pbmVuY2UpO1xcbiAgICBib3gtc2hhZG93OiAyNHB4IC0yMnB4IHZhcigtLWNvbG9yLWVtaW5lbmNlKSxcXG4gICAgMzBweCAtMTVweCAwIC0zcHggdmFyKC0tY29sb3ItZW1pbmVuY2UpLFxcbiAgICAzMXB4IDBweCB2YXIoLS1jb2xvci1lbWluZW5jZSksXFxuICAgIDI5cHggOXB4IDAgLTNweCB2YXIoLS1jb2xvci1lbWluZW5jZSksXFxuICAgIDI0cHggMjNweCB2YXIoLS1jb2xvci1lbWluZW5jZSksXFxuICAgIDE3cHggMzBweCAwIC0zcHggdmFyKC0tY29sb3ItZW1pbmVuY2UpLFxcbiAgICAwcHggMzNweCB2YXIoLS1jb2xvci1lbWluZW5jZSksXFxuICAgIC0xMHB4IDI4cHggMCAtM3B4IHZhcigtLWNvbG9yLWVtaW5lbmNlKSxcXG4gICAgLTI0cHggMjJweCB2YXIoLS1jb2xvci1lbWluZW5jZSksXFxuICAgIC0yOXB4IDE0cHggMCAtM3B4IHZhcigtLWNvbG9yLWVtaW5lbmNlKSxcXG4gICAgLTMxcHggLTNweCB2YXIoLS1jb2xvci1lbWluZW5jZSksXFxuICAgIC0zMHB4IC0xMXB4IDAgLTNweCB2YXIoLS1jb2xvci1lbWluZW5jZSksXFxuICAgIC0yMHB4IC0yNXB4IHZhcigtLWNvbG9yLWVtaW5lbmNlKSxcXG4gICAgLTEycHggLTMwcHggMCAtM3B4IHZhcigtLWNvbG9yLWVtaW5lbmNlKSxcXG4gICAgNXB4IC0yOXB4IHZhcigtLWNvbG9yLWVtaW5lbmNlKSxcXG4gICAgMTNweCAtMjVweCAwIC0zcHggdmFyKC0tY29sb3ItZW1pbmVuY2UpO1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDE4MGRlZyk7XFxuICAgIHRyYW5zZm9ybTogcm90YXRlKDE4MGRlZyk7XFxuICB9XFxuICAxMDAlIHtcXG4gICAgb3BhY2l0eTogMDtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6IDI1cHggLTIycHggdmFyKC0tY29sb3ItZW1pbmVuY2UpLFxcbiAgICAxNXB4IC0yMnB4IDAgLTNweCBibGFjaywgMzFweCAycHggdmFyKC0tY29sb3ItZW1pbmVuY2UpLFxcbiAgICAyMXB4IDJweCAwIC0zcHggYmxhY2ssIDIzcHggMjVweCB2YXIoLS1jb2xvci1lbWluZW5jZSksXFxuICAgIDEzcHggMjVweCAwIC0zcHggYmxhY2ssIDBweCAzM3B4IHZhcigtLWNvbG9yLWVtaW5lbmNlKSxcXG4gICAgLTEwcHggMzNweCAwIC0zcHggYmxhY2ssIC0yNnB4IDI0cHggdmFyKC0tY29sb3ItZW1pbmVuY2UpLFxcbiAgICAtMTlweCAxN3B4IDAgLTNweCBibGFjaywgLTMycHggMHB4IHZhcigtLWNvbG9yLWVtaW5lbmNlKSxcXG4gICAgLTIzcHggMHB4IDAgLTNweCBibGFjaywgLTI1cHggLTIzcHggdmFyKC0tY29sb3ItZW1pbmVuY2UpLFxcbiAgICAtMTZweCAtMjNweCAwIC0zcHggYmxhY2ssIDBweCAtMzFweCB2YXIoLS1jb2xvci1lbWluZW5jZSksXFxuICAgIC0ycHggLTIzcHggMCAtM3B4IGJsYWNrO1xcbiAgICBib3gtc2hhZG93OiAyNXB4IC0yMnB4IHZhcigtLWNvbG9yLWVtaW5lbmNlKSxcXG4gICAgMTVweCAtMjJweCAwIC0zcHggYmxhY2ssIDMxcHggMnB4IHZhcigtLWNvbG9yLWVtaW5lbmNlKSxcXG4gICAgMjFweCAycHggMCAtM3B4IGJsYWNrLCAyM3B4IDI1cHggdmFyKC0tY29sb3ItZW1pbmVuY2UpLFxcbiAgICAxM3B4IDI1cHggMCAtM3B4IGJsYWNrLCAwcHggMzNweCB2YXIoLS1jb2xvci1lbWluZW5jZSksXFxuICAgIC0xMHB4IDMzcHggMCAtM3B4IGJsYWNrLCAtMjZweCAyNHB4IHZhcigtLWNvbG9yLWVtaW5lbmNlKSxcXG4gICAgLTE5cHggMTdweCAwIC0zcHggYmxhY2ssIC0zMnB4IDBweCB2YXIoLS1jb2xvci1lbWluZW5jZSksXFxuICAgIC0yM3B4IDBweCAwIC0zcHggYmxhY2ssIC0yNXB4IC0yM3B4IHZhcigtLWNvbG9yLWVtaW5lbmNlKSxcXG4gICAgLTE2cHggLTIzcHggMCAtM3B4IGJsYWNrLCAwcHggLTMxcHggdmFyKC0tY29sb3ItZW1pbmVuY2UpLFxcbiAgICAtMnB4IC0yM3B4IDAgLTNweCBibGFjaztcXG4gIH1cXG59XFxuXFxuQC13ZWJraXQta2V5ZnJhbWVzIGxvYWRlci0yLXN0YXIge1xcbiAgMCUge1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMCkgcm90YXRlKDBkZWcpO1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDApIHJvdGF0ZSgwZGVnKTtcXG4gIH1cXG4gIDEwMCUge1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMC43KSByb3RhdGUoMzYwZGVnKTtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgwLjcpIHJvdGF0ZSgzNjBkZWcpO1xcbiAgfVxcbn1cXG5cXG5ALXdlYmtpdC1rZXlmcmFtZXMgZG90LWp1bXAge1xcbiAgMCUge1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xcbiAgfVxcbiAgMTAwJSB7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xNXB4KTtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xNXB4KTtcXG4gIH1cXG59XFxuXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5sb2NhbHMgPSB7XG5cdFwibG9hZGVyXCI6IFwic3Bpbm5lci1tX19sb2FkZXItLUFBZXRvXCIsXG5cdFwibG9hZGVyMlwiOiBcInNwaW5uZXItbV9fbG9hZGVyMi0tb2JBaTVcIixcblx0XCJsb2FkZXJTdGFyXCI6IFwic3Bpbm5lci1tX19sb2FkZXJTdGFyLS1HSHBQcFwiLFxuXHRcImxvYWRlci0yLXN0YXJcIjogXCJzcGlubmVyLW1fX2xvYWRlci0yLXN0YXItLWZUSDdvXCIsXG5cdFwibG9hZGVyQ2lyY2xlc1wiOiBcInNwaW5uZXItbV9fbG9hZGVyQ2lyY2xlcy0tUEROT3JcIixcblx0XCJsb2FkZXItMi1jaXJjbGVzXCI6IFwic3Bpbm5lci1tX19sb2FkZXItMi1jaXJjbGVzLS1KUmJVUFwiLFxuXHRcImRvdC1qdW1wXCI6IFwic3Bpbm5lci1tX19kb3QtanVtcC0tX2JaZThcIlxufTtcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4uLy4uL2Fzc2V0cy9pbWFnZXMvYXJyb3ctbGlzdC5wbmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIubWFpblBhZ2UtbV9fbWFpbnNjcmVlbkNvbnRhaW5lci0tRGhQM04ge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDU0NHB4O1xcbiAgbWFyZ2luLWJvdHRvbTogMTAwcHg7XFxufVxcblxcblxcbi5tYWluUGFnZS1tX19waG90b3NDb250YWluZXItLV9SdGJKIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGhlaWdodDogNTQ0cHg7XFxuICBtYXJnaW4tYm90dG9tOiA0MHB4O1xcbn1cXG5cXG4ubWFpblBhZ2UtbV9fcGhvdG9zQ29udGFpbmVyLS1fUnRiSiAubG9hZGVyV3JhcHBlciB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDUwJTtcXG4gIGxlZnQ6IDUwJTtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xcbn1cXG5cXG4ubWFpblBhZ2UtbV9fcGhvdG9zQ29udGFpbmVyLS1fUnRiSiBpbWcge1xcbiAgaGVpZ2h0OiAxMDAlO1xcbn1cXG5cXG4ubWFpblBhZ2UtbV9fbWFpbkNvbnRhaW5lci0tWkgxSXoge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgbGVmdDogMDtcXG4gIHRvcDogMDtcXG4gIGJvdHRvbTogMDtcXG4gIHJpZ2h0OiAwO1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4ubWFpblBhZ2UtbV9fbWFpblRpdGxlLS1RUHVPOCB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBsZWZ0OiAwO1xcbiAgdG9wOiAwO1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMTQycHggMTQwcHggMDtcXG4gIG1heC13aWR0aDogNTM5cHg7XFxuICBmb250LXdlaWdodDogNjAwO1xcbiAgZm9udC1zaXplOiA3MnB4O1xcbiAgbGluZS1oZWlnaHQ6IDgycHg7XFxuICBjb2xvcjogdmFyKC0tY29sb3ItbWFpbi10aXRsZSk7XFxuICB0ZXh0LXNoYWRvdzogLTFweCAwIDNweCBibGFjaywgLTJweCAtMXB4IDJweCB3aGl0ZTtcXG59XFxuXFxuLm1haW5QYWdlLW1fX2Fib3V0Q29udGFpbmVyLS1teGlmUCB7XFxuICBtYXJnaW4tYm90dG9tOiAxMDBweDtcXG59XFxuXFxuXFxuLm1haW5QYWdlLW1fX2Fib3V0LS1UR0JJWCB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBtYXJnaW4tYm90dG9tOiAxMDBweDtcXG4gIHBhZGRpbmc6IDIwcHg7XFxufVxcblxcbi5tYWluUGFnZS1tX19hYm91dC0tVEdCSVg6OmJlZm9yZSB7XFxuICBjb250ZW50OiAnJztcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGxlZnQ6IDA7XFxuICB0b3A6IDA7XFxuICB3aWR0aDogM3B4O1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItZXVjYWx5cHR1cyk7XFxufVxcblxcbi5tYWluUGFnZS1tX19hYm91dFRpdGxlLS13dk43YSB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBtYXJnaW46IDA7XFxuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gIGZvbnQtc2l6ZTogMzBweDtcXG59XFxuXFxuLm1haW5QYWdlLW1fX2Fib3V0VGl0bGVUZXh0LS1GbVc3ZCB7XFxuICBmb250LXdlaWdodDogNDAwO1xcbiAgZm9udC1zaXplOiAxOHB4O1xcbiAgbGluZS1oZWlnaHQ6IDI4cHg7XFxufVxcblxcbi5tYWluUGFnZS1tX19kb3NtdGgtLWVrZUVMIHtcXG4gIHBhZGRpbmc6IDAgMjBweDtcXG59XFxuXFxuLm1haW5QYWdlLW1fX2Rvc210aFRpdGxlLS1zRU1JRiB7XFxuICBtYXJnaW46IDA7XFxuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gIGZvbnQtc2l6ZTogMjJweDtcXG59XFxuXFxuLm1haW5QYWdlLW1fX2Rvc210aExpc3QtLVZVcE1PIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGJhY2tncm91bmQtc2l6ZTogMTAwcHggMTAwcHg7XFxufVxcblxcbi5tYWluUGFnZS1tX19kb3NtdGhJdGVtLS1jaEFkWiB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBwYWRkaW5nLWxlZnQ6IDQwcHg7XFxuICBmb250LXdlaWdodDogNDAwO1xcbiAgZm9udC1zaXplOiAxOHB4O1xcbn1cXG5cXG4ubWFpblBhZ2UtbV9fZG9zbXRoSXRlbS0tY2hBZFo6OmJlZm9yZSB7XFxuICBjb250ZW50OiAnJztcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGxlZnQ6IDA7XFxuICB0b3A6IDA7XFxuICB3aWR0aDogMjBweDtcXG4gIGhlaWdodDogMjBweDtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gKyBcIik7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XFxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbn1cXG5cXG4ubWFpblBhZ2UtbV9fZG9zbXRoSXRlbS0tY2hBZFo6bm90KDpsYXN0LWNoaWxkKSB7XFxuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xcbn1cXG5cXG4ubWFpblBhZ2UtbV9fdW5zcGxhc2hMaW5rLS1tZ1ByYyB7XFxuICBjb2xvcjogdmFyKC0tY29sb3ItZW1pbmVuY2UpO1xcbiAgdHJhbnNpdGlvbjogdGV4dC1kZWNvcmF0aW9uIDAuM3MgZWFzZS1pbjtcXG59XFxuXFxuLm1haW5QYWdlLW1fX3Vuc3BsYXNoTGluay0tbWdQcmM6aG92ZXIge1xcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XFxuICB0cmFuc2l0aW9uOiB0ZXh0LWRlY29yYXRpb24gMC4zcyBlYXNlLWluO1xcbn1cXG5cXG4ubWFpblBhZ2UtbV9fbG9va1Bob3RvLS1MZkJ5VCB7XFxuICBtYXJnaW4tYm90dG9tOiAxMDBweDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLm1haW5QYWdlLW1fX2xvb2tQaG90b1RleHQtLUNzZXhDIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgbWFyZ2luLWJvdHRvbTogNTBweDtcXG4gIGZvbnQtc2l6ZTogMjRweDtcXG59XFxuXFxuLm1haW5QYWdlLW1fX2xvb2tQaG90b0J1dHRvbi0tdng3RzIge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcXG4gIG91dGxpbmU6IG5vbmU7XFxuICBib3JkZXI6IDJweCBzb2xpZCB0cmFuc3BhcmVudDtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIHBhZGRpbmc6IDE2cHggMzBweDtcXG4gIGJveC1zaGFkb3c6IDZweCA2cHggMTJweCByZ2JhKDc5LCAyMDksIDE5NywgMC42NCk7XFxuICBmb250LXNpemU6IDIycHg7XFxuICBjb2xvcjogdmFyKC0tY29sb3Itd2hpdGUpO1xcbiAgYmFja2dyb3VuZDogdmFyKC0tY29sb3ItZXVjYWx5cHR1cyk7XFxuICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLWluLW91dCAwcztcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLm1haW5QYWdlLW1fX2xvb2tQaG90b0J1dHRvbi0tdng3RzI6OmJlZm9yZSB7XFxuICBjb250ZW50OiAnJztcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGxlZnQ6IDUwJTtcXG4gIHRvcDogNTAlO1xcbiAgb3BhY2l0eTogMDtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1pbi1vdXQgMHM7XFxufVxcblxcbi5tYWluUGFnZS1tX19sb29rUGhvdG9CdXR0b24tLXZ4N0cyOmhvdmVyIHtcXG4gIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLWNvbG9yLWV1Y2FseXB0dXMpO1xcbiAgY29sb3I6IHZhcigtLWNvbG9yLWV1Y2FseXB0dXMpO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3Itd2hpdGUpO1xcbn1cXG5cXG4ubWFpblBhZ2UtbV9fbG9va1Bob3RvQnV0dG9uLS12eDdHMjo6YWZ0ZXIge1xcbiAgY29udGVudDogJyc7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBsZWZ0OiA1MCU7XFxuICB0b3A6IDUwJTtcXG4gIHotaW5kZXg6IC0xO1xcbiAgYm9yZGVyOiA1cHggc29saWQgdmFyKC0tY29sb3ItYnJpZ2h0LXR1cnF1b2lzZSk7XFxuICBib3JkZXItcmFkaXVzOiAxNXB4O1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XFxuICBhbmltYXRpb246IG1haW5QYWdlLW1fX3JpbmctLUhoMTNqIDEuNXMgaW5maW5pdGU7XFxufVxcblxcbi5tYWluUGFnZS1tX19sb29rUGhvdG9CdXR0b24tLXZ4N0cyOmhvdmVyOjphZnRlcixcXG4ubWFpblBhZ2UtbV9fbG9va1Bob3RvQnV0dG9uLS12eDdHMjpmb2N1czo6YWZ0ZXIge1xcbiAgZGlzcGxheTogbm9uZTtcXG4gIGFuaW1hdGlvbjogbm9uZTtcXG59XFxuXFxuQGtleWZyYW1lcyBtYWluUGFnZS1tX19yaW5nLS1IaDEzaiB7XFxuICAwJSB7XFxuICAgIHBhZGRpbmc6IDE2cHggMzBweDtcXG4gICAgb3BhY2l0eTogMTtcXG4gIH1cXG5cXG4gIDEwMCUge1xcbiAgICBwYWRkaW5nOiA1MHB4IDE1MHB4O1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgfVxcbn1cXG5cXG5AbWVkaWEgKG1heC13aWR0aDogNTc2cHgpIHtcXG4gIC5tYWluUGFnZS1tX19tYWluVGl0bGUtLVFQdU84IHtcXG4gICAgZm9udC1zaXplOiAzMnB4O1xcbiAgICBsaW5lLWhlaWdodDogNTJweDtcXG4gICAgcGFkZGluZzogMjBweDtcXG4gIH1cXG5cXG4gIC5tYWluUGFnZS1tX19waG90b3NDb250YWluZXItLV9SdGJKIHtcXG4gICAgaGVpZ2h0OiAzMjBweDtcXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcXG4gIH1cXG5cXG4gIC5tYWluUGFnZS1tX19hYm91dC0tVEdCSVgge1xcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xcbiAgfVxcblxcbiAgLm1haW5QYWdlLW1fX2Fib3V0VGl0bGUtLXd2TjdhIHtcXG4gICAgZm9udC1zaXplOiAyMnB4O1xcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xcbiAgfVxcblxcbiAgLm1haW5QYWdlLW1fX2Fib3V0VGl0bGVUZXh0LS1GbVc3ZCB7XFxuICAgIGZvbnQtc2l6ZTogMTZweDtcXG4gIH1cXG5cXG4gIC5tYWluUGFnZS1tX19hYm91dENvbnRhaW5lci0tbXhpZlAge1xcbiAgICBtYXJnaW4tYm90dG9tOiA2MHB4O1xcbiAgfVxcblxcbiAgLm1haW5QYWdlLW1fX2Rvc210aFRpdGxlLS1zRU1JRiB7XFxuICAgIGZvbnQtc2l6ZTogMjJweDtcXG4gIH1cXG5cXG4gIC5tYWluUGFnZS1tX19kb3NtdGgtLWVrZUVMIHtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcXG4gIH1cXG5cXG4gIC5tYWluUGFnZS1tX19sb29rUGhvdG9UZXh0LS1Dc2V4QyB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICB9XFxuXFxuICAubWFpblBhZ2UtbV9fbG9va1Bob3RvLS1MZkJ5VCB7XFxuICAgIG1hcmdpbi1ib3R0b206IDQwcHg7XFxuICB9XFxufVxcblxcblxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9wYWdlcy9NYWluUGFnZS9tYWluUGFnZS5tLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLFdBQVc7RUFDWCxhQUFhO0VBQ2Isb0JBQW9CO0FBQ3RCOzs7QUFHQTtFQUNFLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2IsbUJBQW1CO0FBQ3JCOztB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O0lBQ0UsVUFBVTtJQUNWLG1CQUFtQjtFQUNyQjs7RUFFQTtJQUNFLGFBQWE7RUFDZjs7RUFFQTtJQUNFLG1CQUFtQjtFQUNyQjtBQUNGXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi5tYWluc2NyZWVuQ29udGFpbmVyIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiA1NDRweDtcXG4gIG1hcmdpbi1ib3R0b206IDEwMHB4O1xcbn1cXG5cXG5cXG4ucGhvdG9zQ29udGFpbmVyIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGhlaWdodDogNTQ0cHg7XFxuICBtYXJnaW4tYm90dG9tOiA0MHB4O1xcbn1cXG5cXG4ucGhvdG9zQ29udGFpbmVyIDpnbG9iYWwoLmxvYWRlcldyYXBwZXIpIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogNTAlO1xcbiAgbGVmdDogNTAlO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XFxufVxcblxcbi5waG90b3NDb250YWluZXIgaW1nIHtcXG4gIGhlaWdodDogMTAwJTtcXG59XFxuXFxuLm1haW5Db250YWluZXIge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgbGVmdDogMDtcXG4gIHRvcDogMDtcXG4gIGJvdHRvbTogMDtcXG4gIHJpZ2h0OiAwO1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4ubWFpblRpdGxlIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGxlZnQ6IDA7XFxuICB0b3A6IDA7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAxNDJweCAxNDBweCAwO1xcbiAgbWF4LXdpZHRoOiA1MzlweDtcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICBmb250LXNpemU6IDcycHg7XFxuICBsaW5lLWhlaWdodDogODJweDtcXG4gIGNvbG9yOiB2YXIoLS1jb2xvci1tYWluLXRpdGxlKTtcXG4gIHRleHQtc2hhZG93OiAtMXB4IDAgM3B4IGJsYWNrLCAtMnB4IC0xcHggMnB4IHdoaXRlO1xcbn1cXG5cXG4uYWJvdXRDb250YWluZXIge1xcbiAgbWFyZ2luLWJvdHRvbTogMTAwcHg7XFxufVxcblxcblxcbi5hYm91dCB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBtYXJnaW4tYm90dG9tOiAxMDBweDtcXG4gIHBhZGRpbmc6IDIwcHg7XFxufVxcblxcbi5hYm91dDo6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6ICcnO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgbGVmdDogMDtcXG4gIHRvcDogMDtcXG4gIHdpZHRoOiAzcHg7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1ldWNhbHlwdHVzKTtcXG59XFxuXFxuLmFib3V0VGl0bGUge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgbWFyZ2luOiAwO1xcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICBmb250LXNpemU6IDMwcHg7XFxufVxcblxcbi5hYm91dFRpdGxlVGV4dCB7XFxuICBmb250LXdlaWdodDogNDAwO1xcbiAgZm9udC1zaXplOiAxOHB4O1xcbiAgbGluZS1oZWlnaHQ6IDI4cHg7XFxufVxcblxcbi5kb3NtdGgge1xcbiAgcGFkZGluZzogMCAyMHB4O1xcbn1cXG5cXG4uZG9zbXRoVGl0bGUge1xcbiAgbWFyZ2luOiAwO1xcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICBmb250LXNpemU6IDIycHg7XFxufVxcblxcbi5kb3NtdGhMaXN0IHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGJhY2tncm91bmQtc2l6ZTogMTAwcHggMTAwcHg7XFxufVxcblxcbi5kb3NtdGhJdGVtIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHBhZGRpbmctbGVmdDogNDBweDtcXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XFxuICBmb250LXNpemU6IDE4cHg7XFxufVxcblxcbi5kb3NtdGhJdGVtOjpiZWZvcmUge1xcbiAgY29udGVudDogJyc7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBsZWZ0OiAwO1xcbiAgdG9wOiAwO1xcbiAgd2lkdGg6IDIwcHg7XFxuICBoZWlnaHQ6IDIwcHg7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uLy4uL2Fzc2V0cy9pbWFnZXMvYXJyb3ctbGlzdC5wbmcnKTtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxufVxcblxcbi5kb3NtdGhJdGVtOm5vdCg6bGFzdC1jaGlsZCkge1xcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcXG59XFxuXFxuLnVuc3BsYXNoTGluayB7XFxuICBjb2xvcjogdmFyKC0tY29sb3ItZW1pbmVuY2UpO1xcbiAgdHJhbnNpdGlvbjogdGV4dC1kZWNvcmF0aW9uIDAuM3MgZWFzZS1pbjtcXG59XFxuXFxuLnVuc3BsYXNoTGluazpob3ZlciB7XFxuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcXG4gIHRyYW5zaXRpb246IHRleHQtZGVjb3JhdGlvbiAwLjNzIGVhc2UtaW47XFxufVxcblxcbi5sb29rUGhvdG8ge1xcbiAgbWFyZ2luLWJvdHRvbTogMTAwcHg7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi5sb29rUGhvdG9UZXh0IHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgbWFyZ2luLWJvdHRvbTogNTBweDtcXG4gIGZvbnQtc2l6ZTogMjRweDtcXG59XFxuXFxuLmxvb2tQaG90b0J1dHRvbiB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xcbiAgb3V0bGluZTogbm9uZTtcXG4gIGJvcmRlcjogMnB4IHNvbGlkIHRyYW5zcGFyZW50O1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgcGFkZGluZzogMTZweCAzMHB4O1xcbiAgYm94LXNoYWRvdzogNnB4IDZweCAxMnB4IHJnYmEoNzksIDIwOSwgMTk3LCAwLjY0KTtcXG4gIGZvbnQtc2l6ZTogMjJweDtcXG4gIGNvbG9yOiB2YXIoLS1jb2xvci13aGl0ZSk7XFxuICBiYWNrZ3JvdW5kOiB2YXIoLS1jb2xvci1ldWNhbHlwdHVzKTtcXG4gIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UtaW4tb3V0IDBzO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4ubG9va1Bob3RvQnV0dG9uOjpiZWZvcmUge1xcbiAgY29udGVudDogJyc7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBsZWZ0OiA1MCU7XFxuICB0b3A6IDUwJTtcXG4gIG9wYWNpdHk6IDA7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcXG4gIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UtaW4tb3V0IDBzO1xcbn1cXG5cXG4ubG9va1Bob3RvQnV0dG9uOmhvdmVyIHtcXG4gIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLWNvbG9yLWV1Y2FseXB0dXMpO1xcbiAgY29sb3I6IHZhcigtLWNvbG9yLWV1Y2FseXB0dXMpO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3Itd2hpdGUpO1xcbn1cXG5cXG4ubG9va1Bob3RvQnV0dG9uOjphZnRlciB7XFxuICBjb250ZW50OiAnJztcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGxlZnQ6IDUwJTtcXG4gIHRvcDogNTAlO1xcbiAgei1pbmRleDogLTE7XFxuICBib3JkZXI6IDVweCBzb2xpZCB2YXIoLS1jb2xvci1icmlnaHQtdHVycXVvaXNlKTtcXG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcXG4gIGFuaW1hdGlvbjogcmluZyAxLjVzIGluZmluaXRlO1xcbn1cXG5cXG4ubG9va1Bob3RvQnV0dG9uOmhvdmVyOjphZnRlcixcXG4ubG9va1Bob3RvQnV0dG9uOmZvY3VzOjphZnRlciB7XFxuICBkaXNwbGF5OiBub25lO1xcbiAgYW5pbWF0aW9uOiBub25lO1xcbn1cXG5cXG5Aa2V5ZnJhbWVzIHJpbmcge1xcbiAgMCUge1xcbiAgICBwYWRkaW5nOiAxNnB4IDMwcHg7XFxuICAgIG9wYWNpdHk6IDE7XFxuICB9XFxuXFxuICAxMDAlIHtcXG4gICAgcGFkZGluZzogNTBweCAxNTBweDtcXG4gICAgb3BhY2l0eTogMDtcXG4gIH1cXG59XFxuXFxuQG1lZGlhIChtYXgtd2lkdGg6IDU3NnB4KSB7XFxuICAubWFpblRpdGxlIHtcXG4gICAgZm9udC1zaXplOiAzMnB4O1xcbiAgICBsaW5lLWhlaWdodDogNTJweDtcXG4gICAgcGFkZGluZzogMjBweDtcXG4gIH1cXG5cXG4gIC5waG90b3NDb250YWluZXIge1xcbiAgICBoZWlnaHQ6IDMyMHB4O1xcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xcbiAgfVxcblxcbiAgLmFib3V0IHtcXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcXG4gIH1cXG5cXG4gIC5hYm91dFRpdGxlIHtcXG4gICAgZm9udC1zaXplOiAyMnB4O1xcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xcbiAgfVxcblxcbiAgLmFib3V0VGl0bGVUZXh0IHtcXG4gICAgZm9udC1zaXplOiAxNnB4O1xcbiAgfVxcblxcbiAgLmFib3V0Q29udGFpbmVyIHtcXG4gICAgbWFyZ2luLWJvdHRvbTogNjBweDtcXG4gIH1cXG5cXG4gIC5kb3NtdGhUaXRsZSB7XFxuICAgIGZvbnQtc2l6ZTogMjJweDtcXG4gIH1cXG5cXG4gIC5kb3NtdGgge1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xcbiAgfVxcblxcbiAgLmxvb2tQaG90b1RleHQge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgfVxcblxcbiAgLmxvb2tQaG90byB7XFxuICAgIG1hcmdpbi1ib3R0b206IDQwcHg7XFxuICB9XFxufVxcblxcblxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ubG9jYWxzID0ge1xuXHRcIm1haW5zY3JlZW5Db250YWluZXJcIjogXCJtYWluUGFnZS1tX19tYWluc2NyZWVuQ29udGFpbmVyLS1EaFAzTlwiLFxuXHRcInBob3Rvc0NvbnRhaW5lclwiOiBcIm1haW5QYWdlLW1fX3Bob3Rvc0NvbnRhaW5lci0tX1J0YkpcIixcblx0XCJtYWluQ29udGFpbmVyXCI6IFwibWFpblBhZ2UtbV9fbWFpbkNvbnRhaW5lci0tWkgxSXpcIixcblx0XCJtYWluVGl0bGVcIjogXCJtYWluUGFnZS1tX19tYWluVGl0bGUtLVFQdU84XCIsXG5cdFwiYWJvdXRDb250YWluZXJcIjogXCJtYWluUGFnZS1tX19hYm91dENvbnRhaW5lci0tbXhpZlBcIixcblx0XCJhYm91dFwiOiBcIm1haW5QYWdlLW1fX2Fib3V0LS1UR0JJWFwiLFxuXHRcImFib3V0VGl0bGVcIjogXCJtYWluUGFnZS1tX19hYm91dFRpdGxlLS13dk43YVwiLFxuXHRcImFib3V0VGl0bGVUZXh0XCI6IFwibWFpblBhZ2UtbV9fYWJvdXRUaXRsZVRleHQtLUZtVzdkXCIsXG5cdFwiZG9zbXRoXCI6IFwibWFpblBhZ2UtbV9fZG9zbXRoLS1la2VFTFwiLFxuXHRcImRvc210aFRpdGxlXCI6IFwibWFpblBhZ2UtbV9fZG9zbXRoVGl0bGUtLXNFTUlGXCIsXG5cdFwiZG9zbXRoTGlzdFwiOiBcIm1haW5QYWdlLW1fX2Rvc210aExpc3QtLVZVcE1PXCIsXG5cdFwiZG9zbXRoSXRlbVwiOiBcIm1haW5QYWdlLW1fX2Rvc210aEl0ZW0tLWNoQWRaXCIsXG5cdFwidW5zcGxhc2hMaW5rXCI6IFwibWFpblBhZ2UtbV9fdW5zcGxhc2hMaW5rLS1tZ1ByY1wiLFxuXHRcImxvb2tQaG90b1wiOiBcIm1haW5QYWdlLW1fX2xvb2tQaG90by0tTGZCeVRcIixcblx0XCJsb29rUGhvdG9UZXh0XCI6IFwibWFpblBhZ2UtbV9fbG9va1Bob3RvVGV4dC0tQ3NleENcIixcblx0XCJsb29rUGhvdG9CdXR0b25cIjogXCJtYWluUGFnZS1tX19sb29rUGhvdG9CdXR0b24tLXZ4N0cyXCIsXG5cdFwicmluZ1wiOiBcIm1haW5QYWdlLW1fX3JpbmctLUhoMTNqXCJcbn07XG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZXMuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cbmlmIChtb2R1bGUuaG90KSB7XG4gIGlmICghY29udGVudC5sb2NhbHMgfHwgbW9kdWxlLmhvdC5pbnZhbGlkYXRlKSB7XG4gICAgdmFyIGlzRXF1YWxMb2NhbHMgPSBmdW5jdGlvbiBpc0VxdWFsTG9jYWxzKGEsIGIsIGlzTmFtZWRFeHBvcnQpIHtcbiAgaWYgKCFhICYmIGIgfHwgYSAmJiAhYikge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHZhciBwO1xuXG4gIGZvciAocCBpbiBhKSB7XG4gICAgaWYgKGlzTmFtZWRFeHBvcnQgJiYgcCA9PT0gXCJkZWZhdWx0XCIpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb250aW51ZVxuICAgICAgY29udGludWU7XG4gICAgfVxuXG4gICAgaWYgKGFbcF0gIT09IGJbcF0pIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cblxuICBmb3IgKHAgaW4gYikge1xuICAgIGlmIChpc05hbWVkRXhwb3J0ICYmIHAgPT09IFwiZGVmYXVsdFwiKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29udGludWVcbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cblxuICAgIGlmICghYVtwXSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB0cnVlO1xufTtcbiAgICB2YXIgaXNOYW1lZEV4cG9ydCA9ICFjb250ZW50LmxvY2FscztcbiAgICB2YXIgb2xkTG9jYWxzID0gaXNOYW1lZEV4cG9ydCA/IG5hbWVkRXhwb3J0IDogY29udGVudC5sb2NhbHM7XG5cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcbiAgICAgIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5jc3NcIixcbiAgICAgIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKCFpc0VxdWFsTG9jYWxzKG9sZExvY2FscywgaXNOYW1lZEV4cG9ydCA/IG5hbWVkRXhwb3J0IDogY29udGVudC5sb2NhbHMsIGlzTmFtZWRFeHBvcnQpKSB7XG4gICAgICAgICAgICAgICAgbW9kdWxlLmhvdC5pbnZhbGlkYXRlKCk7XG5cbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICBvbGRMb2NhbHMgPSBpc05hbWVkRXhwb3J0ID8gbmFtZWRFeHBvcnQgOiBjb250ZW50LmxvY2FscztcblxuICAgICAgICAgICAgICB1cGRhdGUoY29udGVudCk7XG4gICAgICB9XG4gICAgKVxuICB9XG5cbiAgbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkge1xuICAgIHVwZGF0ZSgpO1xuICB9KTtcbn1cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzFdLnVzZVsxXSEuL2Zvb3Rlci5tLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5pZiAobW9kdWxlLmhvdCkge1xuICBpZiAoIWNvbnRlbnQubG9jYWxzIHx8IG1vZHVsZS5ob3QuaW52YWxpZGF0ZSkge1xuICAgIHZhciBpc0VxdWFsTG9jYWxzID0gZnVuY3Rpb24gaXNFcXVhbExvY2FscyhhLCBiLCBpc05hbWVkRXhwb3J0KSB7XG4gIGlmICghYSAmJiBiIHx8IGEgJiYgIWIpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICB2YXIgcDtcblxuICBmb3IgKHAgaW4gYSkge1xuICAgIGlmIChpc05hbWVkRXhwb3J0ICYmIHAgPT09IFwiZGVmYXVsdFwiKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29udGludWVcbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cblxuICAgIGlmIChhW3BdICE9PSBiW3BdKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgZm9yIChwIGluIGIpIHtcbiAgICBpZiAoaXNOYW1lZEV4cG9ydCAmJiBwID09PSBcImRlZmF1bHRcIikge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnRpbnVlXG4gICAgICBjb250aW51ZTtcbiAgICB9XG5cbiAgICBpZiAoIWFbcF0pIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gdHJ1ZTtcbn07XG4gICAgdmFyIGlzTmFtZWRFeHBvcnQgPSAhY29udGVudC5sb2NhbHM7XG4gICAgdmFyIG9sZExvY2FscyA9IGlzTmFtZWRFeHBvcnQgPyBuYW1lZEV4cG9ydCA6IGNvbnRlbnQubG9jYWxzO1xuXG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXG4gICAgICBcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbMV0udXNlWzFdIS4vZm9vdGVyLm0uY3NzXCIsXG4gICAgICBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICghaXNFcXVhbExvY2FscyhvbGRMb2NhbHMsIGlzTmFtZWRFeHBvcnQgPyBuYW1lZEV4cG9ydCA6IGNvbnRlbnQubG9jYWxzLCBpc05hbWVkRXhwb3J0KSkge1xuICAgICAgICAgICAgICAgIG1vZHVsZS5ob3QuaW52YWxpZGF0ZSgpO1xuXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgb2xkTG9jYWxzID0gaXNOYW1lZEV4cG9ydCA/IG5hbWVkRXhwb3J0IDogY29udGVudC5sb2NhbHM7XG5cbiAgICAgICAgICAgICAgdXBkYXRlKGNvbnRlbnQpO1xuICAgICAgfVxuICAgIClcbiAgfVxuXG4gIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHtcbiAgICB1cGRhdGUoKTtcbiAgfSk7XG59XG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbMV0udXNlWzFdIS4vZm9vdGVyLm0uY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1sxXS51c2VbMV0hLi9sb2NhdGlvbi5tLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5pZiAobW9kdWxlLmhvdCkge1xuICBpZiAoIWNvbnRlbnQubG9jYWxzIHx8IG1vZHVsZS5ob3QuaW52YWxpZGF0ZSkge1xuICAgIHZhciBpc0VxdWFsTG9jYWxzID0gZnVuY3Rpb24gaXNFcXVhbExvY2FscyhhLCBiLCBpc05hbWVkRXhwb3J0KSB7XG4gIGlmICghYSAmJiBiIHx8IGEgJiYgIWIpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICB2YXIgcDtcblxuICBmb3IgKHAgaW4gYSkge1xuICAgIGlmIChpc05hbWVkRXhwb3J0ICYmIHAgPT09IFwiZGVmYXVsdFwiKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29udGludWVcbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cblxuICAgIGlmIChhW3BdICE9PSBiW3BdKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgZm9yIChwIGluIGIpIHtcbiAgICBpZiAoaXNOYW1lZEV4cG9ydCAmJiBwID09PSBcImRlZmF1bHRcIikge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnRpbnVlXG4gICAgICBjb250aW51ZTtcbiAgICB9XG5cbiAgICBpZiAoIWFbcF0pIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gdHJ1ZTtcbn07XG4gICAgdmFyIGlzTmFtZWRFeHBvcnQgPSAhY29udGVudC5sb2NhbHM7XG4gICAgdmFyIG9sZExvY2FscyA9IGlzTmFtZWRFeHBvcnQgPyBuYW1lZEV4cG9ydCA6IGNvbnRlbnQubG9jYWxzO1xuXG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXG4gICAgICBcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbMV0udXNlWzFdIS4vbG9jYXRpb24ubS5jc3NcIixcbiAgICAgIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKCFpc0VxdWFsTG9jYWxzKG9sZExvY2FscywgaXNOYW1lZEV4cG9ydCA/IG5hbWVkRXhwb3J0IDogY29udGVudC5sb2NhbHMsIGlzTmFtZWRFeHBvcnQpKSB7XG4gICAgICAgICAgICAgICAgbW9kdWxlLmhvdC5pbnZhbGlkYXRlKCk7XG5cbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICBvbGRMb2NhbHMgPSBpc05hbWVkRXhwb3J0ID8gbmFtZWRFeHBvcnQgOiBjb250ZW50LmxvY2FscztcblxuICAgICAgICAgICAgICB1cGRhdGUoY29udGVudCk7XG4gICAgICB9XG4gICAgKVxuICB9XG5cbiAgbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkge1xuICAgIHVwZGF0ZSgpO1xuICB9KTtcbn1cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1sxXS51c2VbMV0hLi9sb2NhdGlvbi5tLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbMV0udXNlWzFdIS4vc2lnbmluLm0uY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cbmlmIChtb2R1bGUuaG90KSB7XG4gIGlmICghY29udGVudC5sb2NhbHMgfHwgbW9kdWxlLmhvdC5pbnZhbGlkYXRlKSB7XG4gICAgdmFyIGlzRXF1YWxMb2NhbHMgPSBmdW5jdGlvbiBpc0VxdWFsTG9jYWxzKGEsIGIsIGlzTmFtZWRFeHBvcnQpIHtcbiAgaWYgKCFhICYmIGIgfHwgYSAmJiAhYikge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHZhciBwO1xuXG4gIGZvciAocCBpbiBhKSB7XG4gICAgaWYgKGlzTmFtZWRFeHBvcnQgJiYgcCA9PT0gXCJkZWZhdWx0XCIpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb250aW51ZVxuICAgICAgY29udGludWU7XG4gICAgfVxuXG4gICAgaWYgKGFbcF0gIT09IGJbcF0pIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cblxuICBmb3IgKHAgaW4gYikge1xuICAgIGlmIChpc05hbWVkRXhwb3J0ICYmIHAgPT09IFwiZGVmYXVsdFwiKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29udGludWVcbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cblxuICAgIGlmICghYVtwXSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB0cnVlO1xufTtcbiAgICB2YXIgaXNOYW1lZEV4cG9ydCA9ICFjb250ZW50LmxvY2FscztcbiAgICB2YXIgb2xkTG9jYWxzID0gaXNOYW1lZEV4cG9ydCA/IG5hbWVkRXhwb3J0IDogY29udGVudC5sb2NhbHM7XG5cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcbiAgICAgIFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1sxXS51c2VbMV0hLi9zaWduaW4ubS5jc3NcIixcbiAgICAgIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKCFpc0VxdWFsTG9jYWxzKG9sZExvY2FscywgaXNOYW1lZEV4cG9ydCA/IG5hbWVkRXhwb3J0IDogY29udGVudC5sb2NhbHMsIGlzTmFtZWRFeHBvcnQpKSB7XG4gICAgICAgICAgICAgICAgbW9kdWxlLmhvdC5pbnZhbGlkYXRlKCk7XG5cbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICBvbGRMb2NhbHMgPSBpc05hbWVkRXhwb3J0ID8gbmFtZWRFeHBvcnQgOiBjb250ZW50LmxvY2FscztcblxuICAgICAgICAgICAgICB1cGRhdGUoY29udGVudCk7XG4gICAgICB9XG4gICAgKVxuICB9XG5cbiAgbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkge1xuICAgIHVwZGF0ZSgpO1xuICB9KTtcbn1cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1sxXS51c2VbMV0hLi9zaWduaW4ubS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzFdLnVzZVsxXSEuL2hlYWRlci5tLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5pZiAobW9kdWxlLmhvdCkge1xuICBpZiAoIWNvbnRlbnQubG9jYWxzIHx8IG1vZHVsZS5ob3QuaW52YWxpZGF0ZSkge1xuICAgIHZhciBpc0VxdWFsTG9jYWxzID0gZnVuY3Rpb24gaXNFcXVhbExvY2FscyhhLCBiLCBpc05hbWVkRXhwb3J0KSB7XG4gIGlmICghYSAmJiBiIHx8IGEgJiYgIWIpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICB2YXIgcDtcblxuICBmb3IgKHAgaW4gYSkge1xuICAgIGlmIChpc05hbWVkRXhwb3J0ICYmIHAgPT09IFwiZGVmYXVsdFwiKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29udGludWVcbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cblxuICAgIGlmIChhW3BdICE9PSBiW3BdKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgZm9yIChwIGluIGIpIHtcbiAgICBpZiAoaXNOYW1lZEV4cG9ydCAmJiBwID09PSBcImRlZmF1bHRcIikge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnRpbnVlXG4gICAgICBjb250aW51ZTtcbiAgICB9XG5cbiAgICBpZiAoIWFbcF0pIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gdHJ1ZTtcbn07XG4gICAgdmFyIGlzTmFtZWRFeHBvcnQgPSAhY29udGVudC5sb2NhbHM7XG4gICAgdmFyIG9sZExvY2FscyA9IGlzTmFtZWRFeHBvcnQgPyBuYW1lZEV4cG9ydCA6IGNvbnRlbnQubG9jYWxzO1xuXG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXG4gICAgICBcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbMV0udXNlWzFdIS4vaGVhZGVyLm0uY3NzXCIsXG4gICAgICBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICghaXNFcXVhbExvY2FscyhvbGRMb2NhbHMsIGlzTmFtZWRFeHBvcnQgPyBuYW1lZEV4cG9ydCA6IGNvbnRlbnQubG9jYWxzLCBpc05hbWVkRXhwb3J0KSkge1xuICAgICAgICAgICAgICAgIG1vZHVsZS5ob3QuaW52YWxpZGF0ZSgpO1xuXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgb2xkTG9jYWxzID0gaXNOYW1lZEV4cG9ydCA/IG5hbWVkRXhwb3J0IDogY29udGVudC5sb2NhbHM7XG5cbiAgICAgICAgICAgICAgdXBkYXRlKGNvbnRlbnQpO1xuICAgICAgfVxuICAgIClcbiAgfVxuXG4gIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHtcbiAgICB1cGRhdGUoKTtcbiAgfSk7XG59XG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbMV0udXNlWzFdIS4vaGVhZGVyLm0uY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1sxXS51c2VbMV0hLi9wcm9maWxlLm0uY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cbmlmIChtb2R1bGUuaG90KSB7XG4gIGlmICghY29udGVudC5sb2NhbHMgfHwgbW9kdWxlLmhvdC5pbnZhbGlkYXRlKSB7XG4gICAgdmFyIGlzRXF1YWxMb2NhbHMgPSBmdW5jdGlvbiBpc0VxdWFsTG9jYWxzKGEsIGIsIGlzTmFtZWRFeHBvcnQpIHtcbiAgaWYgKCFhICYmIGIgfHwgYSAmJiAhYikge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHZhciBwO1xuXG4gIGZvciAocCBpbiBhKSB7XG4gICAgaWYgKGlzTmFtZWRFeHBvcnQgJiYgcCA9PT0gXCJkZWZhdWx0XCIpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb250aW51ZVxuICAgICAgY29udGludWU7XG4gICAgfVxuXG4gICAgaWYgKGFbcF0gIT09IGJbcF0pIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cblxuICBmb3IgKHAgaW4gYikge1xuICAgIGlmIChpc05hbWVkRXhwb3J0ICYmIHAgPT09IFwiZGVmYXVsdFwiKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29udGludWVcbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cblxuICAgIGlmICghYVtwXSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB0cnVlO1xufTtcbiAgICB2YXIgaXNOYW1lZEV4cG9ydCA9ICFjb250ZW50LmxvY2FscztcbiAgICB2YXIgb2xkTG9jYWxzID0gaXNOYW1lZEV4cG9ydCA/IG5hbWVkRXhwb3J0IDogY29udGVudC5sb2NhbHM7XG5cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcbiAgICAgIFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1sxXS51c2VbMV0hLi9wcm9maWxlLm0uY3NzXCIsXG4gICAgICBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICghaXNFcXVhbExvY2FscyhvbGRMb2NhbHMsIGlzTmFtZWRFeHBvcnQgPyBuYW1lZEV4cG9ydCA6IGNvbnRlbnQubG9jYWxzLCBpc05hbWVkRXhwb3J0KSkge1xuICAgICAgICAgICAgICAgIG1vZHVsZS5ob3QuaW52YWxpZGF0ZSgpO1xuXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgb2xkTG9jYWxzID0gaXNOYW1lZEV4cG9ydCA/IG5hbWVkRXhwb3J0IDogY29udGVudC5sb2NhbHM7XG5cbiAgICAgICAgICAgICAgdXBkYXRlKGNvbnRlbnQpO1xuICAgICAgfVxuICAgIClcbiAgfVxuXG4gIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHtcbiAgICB1cGRhdGUoKTtcbiAgfSk7XG59XG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbMV0udXNlWzFdIS4vcHJvZmlsZS5tLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbMV0udXNlWzFdIS4vc3Bpbm5lci5tLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5pZiAobW9kdWxlLmhvdCkge1xuICBpZiAoIWNvbnRlbnQubG9jYWxzIHx8IG1vZHVsZS5ob3QuaW52YWxpZGF0ZSkge1xuICAgIHZhciBpc0VxdWFsTG9jYWxzID0gZnVuY3Rpb24gaXNFcXVhbExvY2FscyhhLCBiLCBpc05hbWVkRXhwb3J0KSB7XG4gIGlmICghYSAmJiBiIHx8IGEgJiYgIWIpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICB2YXIgcDtcblxuICBmb3IgKHAgaW4gYSkge1xuICAgIGlmIChpc05hbWVkRXhwb3J0ICYmIHAgPT09IFwiZGVmYXVsdFwiKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29udGludWVcbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cblxuICAgIGlmIChhW3BdICE9PSBiW3BdKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgZm9yIChwIGluIGIpIHtcbiAgICBpZiAoaXNOYW1lZEV4cG9ydCAmJiBwID09PSBcImRlZmF1bHRcIikge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnRpbnVlXG4gICAgICBjb250aW51ZTtcbiAgICB9XG5cbiAgICBpZiAoIWFbcF0pIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gdHJ1ZTtcbn07XG4gICAgdmFyIGlzTmFtZWRFeHBvcnQgPSAhY29udGVudC5sb2NhbHM7XG4gICAgdmFyIG9sZExvY2FscyA9IGlzTmFtZWRFeHBvcnQgPyBuYW1lZEV4cG9ydCA6IGNvbnRlbnQubG9jYWxzO1xuXG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXG4gICAgICBcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbMV0udXNlWzFdIS4vc3Bpbm5lci5tLmNzc1wiLFxuICAgICAgZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAoIWlzRXF1YWxMb2NhbHMob2xkTG9jYWxzLCBpc05hbWVkRXhwb3J0ID8gbmFtZWRFeHBvcnQgOiBjb250ZW50LmxvY2FscywgaXNOYW1lZEV4cG9ydCkpIHtcbiAgICAgICAgICAgICAgICBtb2R1bGUuaG90LmludmFsaWRhdGUoKTtcblxuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIG9sZExvY2FscyA9IGlzTmFtZWRFeHBvcnQgPyBuYW1lZEV4cG9ydCA6IGNvbnRlbnQubG9jYWxzO1xuXG4gICAgICAgICAgICAgIHVwZGF0ZShjb250ZW50KTtcbiAgICAgIH1cbiAgICApXG4gIH1cblxuICBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7XG4gICAgdXBkYXRlKCk7XG4gIH0pO1xufVxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzFdLnVzZVsxXSEuL3NwaW5uZXIubS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzFdLnVzZVsxXSEuL21haW5QYWdlLm0uY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cbmlmIChtb2R1bGUuaG90KSB7XG4gIGlmICghY29udGVudC5sb2NhbHMgfHwgbW9kdWxlLmhvdC5pbnZhbGlkYXRlKSB7XG4gICAgdmFyIGlzRXF1YWxMb2NhbHMgPSBmdW5jdGlvbiBpc0VxdWFsTG9jYWxzKGEsIGIsIGlzTmFtZWRFeHBvcnQpIHtcbiAgaWYgKCFhICYmIGIgfHwgYSAmJiAhYikge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHZhciBwO1xuXG4gIGZvciAocCBpbiBhKSB7XG4gICAgaWYgKGlzTmFtZWRFeHBvcnQgJiYgcCA9PT0gXCJkZWZhdWx0XCIpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb250aW51ZVxuICAgICAgY29udGludWU7XG4gICAgfVxuXG4gICAgaWYgKGFbcF0gIT09IGJbcF0pIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cblxuICBmb3IgKHAgaW4gYikge1xuICAgIGlmIChpc05hbWVkRXhwb3J0ICYmIHAgPT09IFwiZGVmYXVsdFwiKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29udGludWVcbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cblxuICAgIGlmICghYVtwXSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB0cnVlO1xufTtcbiAgICB2YXIgaXNOYW1lZEV4cG9ydCA9ICFjb250ZW50LmxvY2FscztcbiAgICB2YXIgb2xkTG9jYWxzID0gaXNOYW1lZEV4cG9ydCA/IG5hbWVkRXhwb3J0IDogY29udGVudC5sb2NhbHM7XG5cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcbiAgICAgIFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1sxXS51c2VbMV0hLi9tYWluUGFnZS5tLmNzc1wiLFxuICAgICAgZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAoIWlzRXF1YWxMb2NhbHMob2xkTG9jYWxzLCBpc05hbWVkRXhwb3J0ID8gbmFtZWRFeHBvcnQgOiBjb250ZW50LmxvY2FscywgaXNOYW1lZEV4cG9ydCkpIHtcbiAgICAgICAgICAgICAgICBtb2R1bGUuaG90LmludmFsaWRhdGUoKTtcblxuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIG9sZExvY2FscyA9IGlzTmFtZWRFeHBvcnQgPyBuYW1lZEV4cG9ydCA6IGNvbnRlbnQubG9jYWxzO1xuXG4gICAgICAgICAgICAgIHVwZGF0ZShjb250ZW50KTtcbiAgICAgIH1cbiAgICApXG4gIH1cblxuICBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7XG4gICAgdXBkYXRlKCk7XG4gIH0pO1xufVxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzFdLnVzZVsxXSEuL21haW5QYWdlLm0uY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiLyogKGlnbm9yZWQpICovIiwiLyogKGlnbm9yZWQpICovIiwiLyogKGlnbm9yZWQpICovIiwiLyogKGlnbm9yZWQpICovIiwiLyogKGlnbm9yZWQpICovIiwiLyogKGlnbm9yZWQpICovIiwiLyogKGlnbm9yZWQpICovIiwiLyogKGlnbm9yZWQpICovIiwiLyogKGlnbm9yZWQpICovIiwiLyogKGlnbm9yZWQpICovIiwiLyogKGlnbm9yZWQpICovIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdGlmIChjYWNoZWRNb2R1bGUuZXJyb3IgIT09IHVuZGVmaW5lZCkgdGhyb3cgY2FjaGVkTW9kdWxlLmVycm9yO1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0bG9hZGVkOiBmYWxzZSxcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHR0cnkge1xuXHRcdHZhciBleGVjT3B0aW9ucyA9IHsgaWQ6IG1vZHVsZUlkLCBtb2R1bGU6IG1vZHVsZSwgZmFjdG9yeTogX193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0sIHJlcXVpcmU6IF9fd2VicGFja19yZXF1aXJlX18gfTtcblx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmkuZm9yRWFjaChmdW5jdGlvbihoYW5kbGVyKSB7IGhhbmRsZXIoZXhlY09wdGlvbnMpOyB9KTtcblx0XHRtb2R1bGUgPSBleGVjT3B0aW9ucy5tb2R1bGU7XG5cdFx0ZXhlY09wdGlvbnMuZmFjdG9yeS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBleGVjT3B0aW9ucy5yZXF1aXJlKTtcblx0fSBjYXRjaChlKSB7XG5cdFx0bW9kdWxlLmVycm9yID0gZTtcblx0XHR0aHJvdyBlO1xuXHR9XG5cblx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuXHRtb2R1bGUubG9hZGVkID0gdHJ1ZTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4vLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuX193ZWJwYWNrX3JlcXVpcmVfXy5jID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fO1xuXG4vLyBleHBvc2UgdGhlIG1vZHVsZSBleGVjdXRpb24gaW50ZXJjZXB0b3Jcbl9fd2VicGFja19yZXF1aXJlX18uaSA9IFtdO1xuXG4iLCJ2YXIgZGVmZXJyZWQgPSBbXTtcbl9fd2VicGFja19yZXF1aXJlX18uTyA9IChyZXN1bHQsIGNodW5rSWRzLCBmbiwgcHJpb3JpdHkpID0+IHtcblx0aWYoY2h1bmtJZHMpIHtcblx0XHRwcmlvcml0eSA9IHByaW9yaXR5IHx8IDA7XG5cdFx0Zm9yKHZhciBpID0gZGVmZXJyZWQubGVuZ3RoOyBpID4gMCAmJiBkZWZlcnJlZFtpIC0gMV1bMl0gPiBwcmlvcml0eTsgaS0tKSBkZWZlcnJlZFtpXSA9IGRlZmVycmVkW2kgLSAxXTtcblx0XHRkZWZlcnJlZFtpXSA9IFtjaHVua0lkcywgZm4sIHByaW9yaXR5XTtcblx0XHRyZXR1cm47XG5cdH1cblx0dmFyIG5vdEZ1bGZpbGxlZCA9IEluZmluaXR5O1xuXHRmb3IgKHZhciBpID0gMDsgaSA8IGRlZmVycmVkLmxlbmd0aDsgaSsrKSB7XG5cdFx0dmFyIFtjaHVua0lkcywgZm4sIHByaW9yaXR5XSA9IGRlZmVycmVkW2ldO1xuXHRcdHZhciBmdWxmaWxsZWQgPSB0cnVlO1xuXHRcdGZvciAodmFyIGogPSAwOyBqIDwgY2h1bmtJZHMubGVuZ3RoOyBqKyspIHtcblx0XHRcdGlmICgocHJpb3JpdHkgJiAxID09PSAwIHx8IG5vdEZ1bGZpbGxlZCA+PSBwcmlvcml0eSkgJiYgT2JqZWN0LmtleXMoX193ZWJwYWNrX3JlcXVpcmVfXy5PKS5ldmVyeSgoa2V5KSA9PiAoX193ZWJwYWNrX3JlcXVpcmVfXy5PW2tleV0oY2h1bmtJZHNbal0pKSkpIHtcblx0XHRcdFx0Y2h1bmtJZHMuc3BsaWNlKGotLSwgMSk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRmdWxmaWxsZWQgPSBmYWxzZTtcblx0XHRcdFx0aWYocHJpb3JpdHkgPCBub3RGdWxmaWxsZWQpIG5vdEZ1bGZpbGxlZCA9IHByaW9yaXR5O1xuXHRcdFx0fVxuXHRcdH1cblx0XHRpZihmdWxmaWxsZWQpIHtcblx0XHRcdGRlZmVycmVkLnNwbGljZShpLS0sIDEpXG5cdFx0XHR2YXIgciA9IGZuKCk7XG5cdFx0XHRpZiAociAhPT0gdW5kZWZpbmVkKSByZXN1bHQgPSByO1xuXHRcdH1cblx0fVxuXHRyZXR1cm4gcmVzdWx0O1xufTsiLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZiA9IHt9O1xuLy8gVGhpcyBmaWxlIGNvbnRhaW5zIG9ubHkgdGhlIGVudHJ5IGNodW5rLlxuLy8gVGhlIGNodW5rIGxvYWRpbmcgZnVuY3Rpb24gZm9yIGFkZGl0aW9uYWwgY2h1bmtzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmUgPSAoY2h1bmtJZCkgPT4ge1xuXHRyZXR1cm4gUHJvbWlzZS5hbGwoT2JqZWN0LmtleXMoX193ZWJwYWNrX3JlcXVpcmVfXy5mKS5yZWR1Y2UoKHByb21pc2VzLCBrZXkpID0+IHtcblx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmZba2V5XShjaHVua0lkLCBwcm9taXNlcyk7XG5cdFx0cmV0dXJuIHByb21pc2VzO1xuXHR9LCBbXSkpO1xufTsiLCIvLyBUaGlzIGZ1bmN0aW9uIGFsbG93IHRvIHJlZmVyZW5jZSBhc3luYyBjaHVua3Ncbl9fd2VicGFja19yZXF1aXJlX18udSA9IChjaHVua0lkKSA9PiB7XG5cdC8vIHJldHVybiB1cmwgZm9yIGZpbGVuYW1lcyBiYXNlZCBvbiB0ZW1wbGF0ZVxuXHRyZXR1cm4gXCJcIiArIGNodW5rSWQgKyBcIi5qc1wiO1xufTsiLCIvLyBUaGlzIGZ1bmN0aW9uIGFsbG93IHRvIHJlZmVyZW5jZSBhbGwgY2h1bmtzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmh1ID0gKGNodW5rSWQpID0+IHtcblx0Ly8gcmV0dXJuIHVybCBmb3IgZmlsZW5hbWVzIGJhc2VkIG9uIHRlbXBsYXRlXG5cdHJldHVybiBcIlwiICsgY2h1bmtJZCArIFwiLlwiICsgX193ZWJwYWNrX3JlcXVpcmVfXy5oKCkgKyBcIi5ob3QtdXBkYXRlLmpzXCI7XG59OyIsIi8vIFRoaXMgZnVuY3Rpb24gYWxsb3cgdG8gcmVmZXJlbmNlIGFzeW5jIGNodW5rc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5taW5pQ3NzRiA9IChjaHVua0lkKSA9PiB7XG5cdC8vIHJldHVybiB1cmwgZm9yIGZpbGVuYW1lcyBiYXNlZCBvbiB0ZW1wbGF0ZVxuXHRyZXR1cm4gdW5kZWZpbmVkO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmhtckYgPSAoKSA9PiAoXCJtYWluLlwiICsgX193ZWJwYWNrX3JlcXVpcmVfXy5oKCkgKyBcIi5ob3QtdXBkYXRlLmpzb25cIik7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiMGZhOGUxMzllOGNkOWRiMWY0MGNcIikiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18uaG1kID0gKG1vZHVsZSkgPT4ge1xuXHRtb2R1bGUgPSBPYmplY3QuY3JlYXRlKG1vZHVsZSk7XG5cdGlmICghbW9kdWxlLmNoaWxkcmVuKSBtb2R1bGUuY2hpbGRyZW4gPSBbXTtcblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG1vZHVsZSwgJ2V4cG9ydHMnLCB7XG5cdFx0ZW51bWVyYWJsZTogdHJ1ZSxcblx0XHRzZXQ6ICgpID0+IHtcblx0XHRcdHRocm93IG5ldyBFcnJvcignRVMgTW9kdWxlcyBtYXkgbm90IGFzc2lnbiBtb2R1bGUuZXhwb3J0cyBvciBleHBvcnRzLiosIFVzZSBFU00gZXhwb3J0IHN5bnRheCwgaW5zdGVhZDogJyArIG1vZHVsZS5pZCk7XG5cdFx0fVxuXHR9KTtcblx0cmV0dXJuIG1vZHVsZTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsInZhciBpblByb2dyZXNzID0ge307XG52YXIgZGF0YVdlYnBhY2tQcmVmaXggPSBcIndlYnBhY2s6XCI7XG4vLyBsb2FkU2NyaXB0IGZ1bmN0aW9uIHRvIGxvYWQgYSBzY3JpcHQgdmlhIHNjcmlwdCB0YWdcbl9fd2VicGFja19yZXF1aXJlX18ubCA9ICh1cmwsIGRvbmUsIGtleSwgY2h1bmtJZCkgPT4ge1xuXHRpZihpblByb2dyZXNzW3VybF0pIHsgaW5Qcm9ncmVzc1t1cmxdLnB1c2goZG9uZSk7IHJldHVybjsgfVxuXHR2YXIgc2NyaXB0LCBuZWVkQXR0YWNoO1xuXHRpZihrZXkgIT09IHVuZGVmaW5lZCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0Zm9yKHZhciBpID0gMDsgaSA8IHNjcmlwdHMubGVuZ3RoOyBpKyspIHtcblx0XHRcdHZhciBzID0gc2NyaXB0c1tpXTtcblx0XHRcdGlmKHMuZ2V0QXR0cmlidXRlKFwic3JjXCIpID09IHVybCB8fCBzLmdldEF0dHJpYnV0ZShcImRhdGEtd2VicGFja1wiKSA9PSBkYXRhV2VicGFja1ByZWZpeCArIGtleSkgeyBzY3JpcHQgPSBzOyBicmVhazsgfVxuXHRcdH1cblx0fVxuXHRpZighc2NyaXB0KSB7XG5cdFx0bmVlZEF0dGFjaCA9IHRydWU7XG5cdFx0c2NyaXB0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2NyaXB0Jyk7XG5cblx0XHRzY3JpcHQuY2hhcnNldCA9ICd1dGYtOCc7XG5cdFx0c2NyaXB0LnRpbWVvdXQgPSAxMjA7XG5cdFx0aWYgKF9fd2VicGFja19yZXF1aXJlX18ubmMpIHtcblx0XHRcdHNjcmlwdC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBfX3dlYnBhY2tfcmVxdWlyZV9fLm5jKTtcblx0XHR9XG5cdFx0c2NyaXB0LnNldEF0dHJpYnV0ZShcImRhdGEtd2VicGFja1wiLCBkYXRhV2VicGFja1ByZWZpeCArIGtleSk7XG5cdFx0c2NyaXB0LnNyYyA9IHVybDtcblx0fVxuXHRpblByb2dyZXNzW3VybF0gPSBbZG9uZV07XG5cdHZhciBvblNjcmlwdENvbXBsZXRlID0gKHByZXYsIGV2ZW50KSA9PiB7XG5cdFx0Ly8gYXZvaWQgbWVtIGxlYWtzIGluIElFLlxuXHRcdHNjcmlwdC5vbmVycm9yID0gc2NyaXB0Lm9ubG9hZCA9IG51bGw7XG5cdFx0Y2xlYXJUaW1lb3V0KHRpbWVvdXQpO1xuXHRcdHZhciBkb25lRm5zID0gaW5Qcm9ncmVzc1t1cmxdO1xuXHRcdGRlbGV0ZSBpblByb2dyZXNzW3VybF07XG5cdFx0c2NyaXB0LnBhcmVudE5vZGUgJiYgc2NyaXB0LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc2NyaXB0KTtcblx0XHRkb25lRm5zICYmIGRvbmVGbnMuZm9yRWFjaCgoZm4pID0+IChmbihldmVudCkpKTtcblx0XHRpZihwcmV2KSByZXR1cm4gcHJldihldmVudCk7XG5cdH1cblx0O1xuXHR2YXIgdGltZW91dCA9IHNldFRpbWVvdXQob25TY3JpcHRDb21wbGV0ZS5iaW5kKG51bGwsIHVuZGVmaW5lZCwgeyB0eXBlOiAndGltZW91dCcsIHRhcmdldDogc2NyaXB0IH0pLCAxMjAwMDApO1xuXHRzY3JpcHQub25lcnJvciA9IG9uU2NyaXB0Q29tcGxldGUuYmluZChudWxsLCBzY3JpcHQub25lcnJvcik7XG5cdHNjcmlwdC5vbmxvYWQgPSBvblNjcmlwdENvbXBsZXRlLmJpbmQobnVsbCwgc2NyaXB0Lm9ubG9hZCk7XG5cdG5lZWRBdHRhY2ggJiYgZG9jdW1lbnQuaGVhZC5hcHBlbmRDaGlsZChzY3JpcHQpO1xufTsiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5tZCA9IChtb2R1bGUpID0+IHtcblx0bW9kdWxlLnBhdGhzID0gW107XG5cdGlmICghbW9kdWxlLmNoaWxkcmVuKSBtb2R1bGUuY2hpbGRyZW4gPSBbXTtcblx0cmV0dXJuIG1vZHVsZTtcbn07IiwidmFyIGN1cnJlbnRNb2R1bGVEYXRhID0ge307XG52YXIgaW5zdGFsbGVkTW9kdWxlcyA9IF9fd2VicGFja19yZXF1aXJlX18uYztcblxuLy8gbW9kdWxlIGFuZCByZXF1aXJlIGNyZWF0aW9uXG52YXIgY3VycmVudENoaWxkTW9kdWxlO1xudmFyIGN1cnJlbnRQYXJlbnRzID0gW107XG5cbi8vIHN0YXR1c1xudmFyIHJlZ2lzdGVyZWRTdGF0dXNIYW5kbGVycyA9IFtdO1xudmFyIGN1cnJlbnRTdGF0dXMgPSBcImlkbGVcIjtcblxuLy8gd2hpbGUgZG93bmxvYWRpbmdcbnZhciBibG9ja2luZ1Byb21pc2VzO1xuXG4vLyBUaGUgdXBkYXRlIGluZm9cbnZhciBjdXJyZW50VXBkYXRlQXBwbHlIYW5kbGVycztcbnZhciBxdWV1ZWRJbnZhbGlkYXRlZE1vZHVsZXM7XG5cbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bnVzZWQtdmFyc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5obXJEID0gY3VycmVudE1vZHVsZURhdGE7XG5cbl9fd2VicGFja19yZXF1aXJlX18uaS5wdXNoKGZ1bmN0aW9uIChvcHRpb25zKSB7XG5cdHZhciBtb2R1bGUgPSBvcHRpb25zLm1vZHVsZTtcblx0dmFyIHJlcXVpcmUgPSBjcmVhdGVSZXF1aXJlKG9wdGlvbnMucmVxdWlyZSwgb3B0aW9ucy5pZCk7XG5cdG1vZHVsZS5ob3QgPSBjcmVhdGVNb2R1bGVIb3RPYmplY3Qob3B0aW9ucy5pZCwgbW9kdWxlKTtcblx0bW9kdWxlLnBhcmVudHMgPSBjdXJyZW50UGFyZW50cztcblx0bW9kdWxlLmNoaWxkcmVuID0gW107XG5cdGN1cnJlbnRQYXJlbnRzID0gW107XG5cdG9wdGlvbnMucmVxdWlyZSA9IHJlcXVpcmU7XG59KTtcblxuX193ZWJwYWNrX3JlcXVpcmVfXy5obXJDID0ge307XG5fX3dlYnBhY2tfcmVxdWlyZV9fLmhtckkgPSB7fTtcblxuZnVuY3Rpb24gY3JlYXRlUmVxdWlyZShyZXF1aXJlLCBtb2R1bGVJZCkge1xuXHR2YXIgbWUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcblx0aWYgKCFtZSkgcmV0dXJuIHJlcXVpcmU7XG5cdHZhciBmbiA9IGZ1bmN0aW9uIChyZXF1ZXN0KSB7XG5cdFx0aWYgKG1lLmhvdC5hY3RpdmUpIHtcblx0XHRcdGlmIChpbnN0YWxsZWRNb2R1bGVzW3JlcXVlc3RdKSB7XG5cdFx0XHRcdHZhciBwYXJlbnRzID0gaW5zdGFsbGVkTW9kdWxlc1tyZXF1ZXN0XS5wYXJlbnRzO1xuXHRcdFx0XHRpZiAocGFyZW50cy5pbmRleE9mKG1vZHVsZUlkKSA9PT0gLTEpIHtcblx0XHRcdFx0XHRwYXJlbnRzLnB1c2gobW9kdWxlSWQpO1xuXHRcdFx0XHR9XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRjdXJyZW50UGFyZW50cyA9IFttb2R1bGVJZF07XG5cdFx0XHRcdGN1cnJlbnRDaGlsZE1vZHVsZSA9IHJlcXVlc3Q7XG5cdFx0XHR9XG5cdFx0XHRpZiAobWUuY2hpbGRyZW4uaW5kZXhPZihyZXF1ZXN0KSA9PT0gLTEpIHtcblx0XHRcdFx0bWUuY2hpbGRyZW4ucHVzaChyZXF1ZXN0KTtcblx0XHRcdH1cblx0XHR9IGVsc2Uge1xuXHRcdFx0Y29uc29sZS53YXJuKFxuXHRcdFx0XHRcIltITVJdIHVuZXhwZWN0ZWQgcmVxdWlyZShcIiArXG5cdFx0XHRcdFx0cmVxdWVzdCArXG5cdFx0XHRcdFx0XCIpIGZyb20gZGlzcG9zZWQgbW9kdWxlIFwiICtcblx0XHRcdFx0XHRtb2R1bGVJZFxuXHRcdFx0KTtcblx0XHRcdGN1cnJlbnRQYXJlbnRzID0gW107XG5cdFx0fVxuXHRcdHJldHVybiByZXF1aXJlKHJlcXVlc3QpO1xuXHR9O1xuXHR2YXIgY3JlYXRlUHJvcGVydHlEZXNjcmlwdG9yID0gZnVuY3Rpb24gKG5hbWUpIHtcblx0XHRyZXR1cm4ge1xuXHRcdFx0Y29uZmlndXJhYmxlOiB0cnVlLFxuXHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcblx0XHRcdGdldDogZnVuY3Rpb24gKCkge1xuXHRcdFx0XHRyZXR1cm4gcmVxdWlyZVtuYW1lXTtcblx0XHRcdH0sXG5cdFx0XHRzZXQ6IGZ1bmN0aW9uICh2YWx1ZSkge1xuXHRcdFx0XHRyZXF1aXJlW25hbWVdID0gdmFsdWU7XG5cdFx0XHR9XG5cdFx0fTtcblx0fTtcblx0Zm9yICh2YXIgbmFtZSBpbiByZXF1aXJlKSB7XG5cdFx0aWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChyZXF1aXJlLCBuYW1lKSAmJiBuYW1lICE9PSBcImVcIikge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGZuLCBuYW1lLCBjcmVhdGVQcm9wZXJ0eURlc2NyaXB0b3IobmFtZSkpO1xuXHRcdH1cblx0fVxuXHRmbi5lID0gZnVuY3Rpb24gKGNodW5rSWQpIHtcblx0XHRyZXR1cm4gdHJhY2tCbG9ja2luZ1Byb21pc2UocmVxdWlyZS5lKGNodW5rSWQpKTtcblx0fTtcblx0cmV0dXJuIGZuO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVNb2R1bGVIb3RPYmplY3QobW9kdWxlSWQsIG1lKSB7XG5cdHZhciBfbWFpbiA9IGN1cnJlbnRDaGlsZE1vZHVsZSAhPT0gbW9kdWxlSWQ7XG5cdHZhciBob3QgPSB7XG5cdFx0Ly8gcHJpdmF0ZSBzdHVmZlxuXHRcdF9hY2NlcHRlZERlcGVuZGVuY2llczoge30sXG5cdFx0X2FjY2VwdGVkRXJyb3JIYW5kbGVyczoge30sXG5cdFx0X2RlY2xpbmVkRGVwZW5kZW5jaWVzOiB7fSxcblx0XHRfc2VsZkFjY2VwdGVkOiBmYWxzZSxcblx0XHRfc2VsZkRlY2xpbmVkOiBmYWxzZSxcblx0XHRfc2VsZkludmFsaWRhdGVkOiBmYWxzZSxcblx0XHRfZGlzcG9zZUhhbmRsZXJzOiBbXSxcblx0XHRfbWFpbjogX21haW4sXG5cdFx0X3JlcXVpcmVTZWxmOiBmdW5jdGlvbiAoKSB7XG5cdFx0XHRjdXJyZW50UGFyZW50cyA9IG1lLnBhcmVudHMuc2xpY2UoKTtcblx0XHRcdGN1cnJlbnRDaGlsZE1vZHVsZSA9IF9tYWluID8gdW5kZWZpbmVkIDogbW9kdWxlSWQ7XG5cdFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKTtcblx0XHR9LFxuXG5cdFx0Ly8gTW9kdWxlIEFQSVxuXHRcdGFjdGl2ZTogdHJ1ZSxcblx0XHRhY2NlcHQ6IGZ1bmN0aW9uIChkZXAsIGNhbGxiYWNrLCBlcnJvckhhbmRsZXIpIHtcblx0XHRcdGlmIChkZXAgPT09IHVuZGVmaW5lZCkgaG90Ll9zZWxmQWNjZXB0ZWQgPSB0cnVlO1xuXHRcdFx0ZWxzZSBpZiAodHlwZW9mIGRlcCA9PT0gXCJmdW5jdGlvblwiKSBob3QuX3NlbGZBY2NlcHRlZCA9IGRlcDtcblx0XHRcdGVsc2UgaWYgKHR5cGVvZiBkZXAgPT09IFwib2JqZWN0XCIgJiYgZGVwICE9PSBudWxsKSB7XG5cdFx0XHRcdGZvciAodmFyIGkgPSAwOyBpIDwgZGVwLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRcdFx0aG90Ll9hY2NlcHRlZERlcGVuZGVuY2llc1tkZXBbaV1dID0gY2FsbGJhY2sgfHwgZnVuY3Rpb24gKCkge307XG5cdFx0XHRcdFx0aG90Ll9hY2NlcHRlZEVycm9ySGFuZGxlcnNbZGVwW2ldXSA9IGVycm9ySGFuZGxlcjtcblx0XHRcdFx0fVxuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0aG90Ll9hY2NlcHRlZERlcGVuZGVuY2llc1tkZXBdID0gY2FsbGJhY2sgfHwgZnVuY3Rpb24gKCkge307XG5cdFx0XHRcdGhvdC5fYWNjZXB0ZWRFcnJvckhhbmRsZXJzW2RlcF0gPSBlcnJvckhhbmRsZXI7XG5cdFx0XHR9XG5cdFx0fSxcblx0XHRkZWNsaW5lOiBmdW5jdGlvbiAoZGVwKSB7XG5cdFx0XHRpZiAoZGVwID09PSB1bmRlZmluZWQpIGhvdC5fc2VsZkRlY2xpbmVkID0gdHJ1ZTtcblx0XHRcdGVsc2UgaWYgKHR5cGVvZiBkZXAgPT09IFwib2JqZWN0XCIgJiYgZGVwICE9PSBudWxsKVxuXHRcdFx0XHRmb3IgKHZhciBpID0gMDsgaSA8IGRlcC5sZW5ndGg7IGkrKylcblx0XHRcdFx0XHRob3QuX2RlY2xpbmVkRGVwZW5kZW5jaWVzW2RlcFtpXV0gPSB0cnVlO1xuXHRcdFx0ZWxzZSBob3QuX2RlY2xpbmVkRGVwZW5kZW5jaWVzW2RlcF0gPSB0cnVlO1xuXHRcdH0sXG5cdFx0ZGlzcG9zZTogZnVuY3Rpb24gKGNhbGxiYWNrKSB7XG5cdFx0XHRob3QuX2Rpc3Bvc2VIYW5kbGVycy5wdXNoKGNhbGxiYWNrKTtcblx0XHR9LFxuXHRcdGFkZERpc3Bvc2VIYW5kbGVyOiBmdW5jdGlvbiAoY2FsbGJhY2spIHtcblx0XHRcdGhvdC5fZGlzcG9zZUhhbmRsZXJzLnB1c2goY2FsbGJhY2spO1xuXHRcdH0sXG5cdFx0cmVtb3ZlRGlzcG9zZUhhbmRsZXI6IGZ1bmN0aW9uIChjYWxsYmFjaykge1xuXHRcdFx0dmFyIGlkeCA9IGhvdC5fZGlzcG9zZUhhbmRsZXJzLmluZGV4T2YoY2FsbGJhY2spO1xuXHRcdFx0aWYgKGlkeCA+PSAwKSBob3QuX2Rpc3Bvc2VIYW5kbGVycy5zcGxpY2UoaWR4LCAxKTtcblx0XHR9LFxuXHRcdGludmFsaWRhdGU6IGZ1bmN0aW9uICgpIHtcblx0XHRcdHRoaXMuX3NlbGZJbnZhbGlkYXRlZCA9IHRydWU7XG5cdFx0XHRzd2l0Y2ggKGN1cnJlbnRTdGF0dXMpIHtcblx0XHRcdFx0Y2FzZSBcImlkbGVcIjpcblx0XHRcdFx0XHRjdXJyZW50VXBkYXRlQXBwbHlIYW5kbGVycyA9IFtdO1xuXHRcdFx0XHRcdE9iamVjdC5rZXlzKF9fd2VicGFja19yZXF1aXJlX18uaG1ySSkuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG5cdFx0XHRcdFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmhtcklba2V5XShcblx0XHRcdFx0XHRcdFx0bW9kdWxlSWQsXG5cdFx0XHRcdFx0XHRcdGN1cnJlbnRVcGRhdGVBcHBseUhhbmRsZXJzXG5cdFx0XHRcdFx0XHQpO1xuXHRcdFx0XHRcdH0pO1xuXHRcdFx0XHRcdHNldFN0YXR1cyhcInJlYWR5XCIpO1xuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRjYXNlIFwicmVhZHlcIjpcblx0XHRcdFx0XHRPYmplY3Qua2V5cyhfX3dlYnBhY2tfcmVxdWlyZV9fLmhtckkpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuXHRcdFx0XHRcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5obXJJW2tleV0oXG5cdFx0XHRcdFx0XHRcdG1vZHVsZUlkLFxuXHRcdFx0XHRcdFx0XHRjdXJyZW50VXBkYXRlQXBwbHlIYW5kbGVyc1xuXHRcdFx0XHRcdFx0KTtcblx0XHRcdFx0XHR9KTtcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0Y2FzZSBcInByZXBhcmVcIjpcblx0XHRcdFx0Y2FzZSBcImNoZWNrXCI6XG5cdFx0XHRcdGNhc2UgXCJkaXNwb3NlXCI6XG5cdFx0XHRcdGNhc2UgXCJhcHBseVwiOlxuXHRcdFx0XHRcdChxdWV1ZWRJbnZhbGlkYXRlZE1vZHVsZXMgPSBxdWV1ZWRJbnZhbGlkYXRlZE1vZHVsZXMgfHwgW10pLnB1c2goXG5cdFx0XHRcdFx0XHRtb2R1bGVJZFxuXHRcdFx0XHRcdCk7XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdGRlZmF1bHQ6XG5cdFx0XHRcdFx0Ly8gaWdub3JlIHJlcXVlc3RzIGluIGVycm9yIHN0YXRlc1xuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0fVxuXHRcdH0sXG5cblx0XHQvLyBNYW5hZ2VtZW50IEFQSVxuXHRcdGNoZWNrOiBob3RDaGVjayxcblx0XHRhcHBseTogaG90QXBwbHksXG5cdFx0c3RhdHVzOiBmdW5jdGlvbiAobCkge1xuXHRcdFx0aWYgKCFsKSByZXR1cm4gY3VycmVudFN0YXR1cztcblx0XHRcdHJlZ2lzdGVyZWRTdGF0dXNIYW5kbGVycy5wdXNoKGwpO1xuXHRcdH0sXG5cdFx0YWRkU3RhdHVzSGFuZGxlcjogZnVuY3Rpb24gKGwpIHtcblx0XHRcdHJlZ2lzdGVyZWRTdGF0dXNIYW5kbGVycy5wdXNoKGwpO1xuXHRcdH0sXG5cdFx0cmVtb3ZlU3RhdHVzSGFuZGxlcjogZnVuY3Rpb24gKGwpIHtcblx0XHRcdHZhciBpZHggPSByZWdpc3RlcmVkU3RhdHVzSGFuZGxlcnMuaW5kZXhPZihsKTtcblx0XHRcdGlmIChpZHggPj0gMCkgcmVnaXN0ZXJlZFN0YXR1c0hhbmRsZXJzLnNwbGljZShpZHgsIDEpO1xuXHRcdH0sXG5cblx0XHQvL2luaGVyaXQgZnJvbSBwcmV2aW91cyBkaXNwb3NlIGNhbGxcblx0XHRkYXRhOiBjdXJyZW50TW9kdWxlRGF0YVttb2R1bGVJZF1cblx0fTtcblx0Y3VycmVudENoaWxkTW9kdWxlID0gdW5kZWZpbmVkO1xuXHRyZXR1cm4gaG90O1xufVxuXG5mdW5jdGlvbiBzZXRTdGF0dXMobmV3U3RhdHVzKSB7XG5cdGN1cnJlbnRTdGF0dXMgPSBuZXdTdGF0dXM7XG5cdHZhciByZXN1bHRzID0gW107XG5cblx0Zm9yICh2YXIgaSA9IDA7IGkgPCByZWdpc3RlcmVkU3RhdHVzSGFuZGxlcnMubGVuZ3RoOyBpKyspXG5cdFx0cmVzdWx0c1tpXSA9IHJlZ2lzdGVyZWRTdGF0dXNIYW5kbGVyc1tpXS5jYWxsKG51bGwsIG5ld1N0YXR1cyk7XG5cblx0cmV0dXJuIFByb21pc2UuYWxsKHJlc3VsdHMpO1xufVxuXG5mdW5jdGlvbiB0cmFja0Jsb2NraW5nUHJvbWlzZShwcm9taXNlKSB7XG5cdHN3aXRjaCAoY3VycmVudFN0YXR1cykge1xuXHRcdGNhc2UgXCJyZWFkeVwiOlxuXHRcdFx0c2V0U3RhdHVzKFwicHJlcGFyZVwiKTtcblx0XHRcdGJsb2NraW5nUHJvbWlzZXMucHVzaChwcm9taXNlKTtcblx0XHRcdHdhaXRGb3JCbG9ja2luZ1Byb21pc2VzKGZ1bmN0aW9uICgpIHtcblx0XHRcdFx0cmV0dXJuIHNldFN0YXR1cyhcInJlYWR5XCIpO1xuXHRcdFx0fSk7XG5cdFx0XHRyZXR1cm4gcHJvbWlzZTtcblx0XHRjYXNlIFwicHJlcGFyZVwiOlxuXHRcdFx0YmxvY2tpbmdQcm9taXNlcy5wdXNoKHByb21pc2UpO1xuXHRcdFx0cmV0dXJuIHByb21pc2U7XG5cdFx0ZGVmYXVsdDpcblx0XHRcdHJldHVybiBwcm9taXNlO1xuXHR9XG59XG5cbmZ1bmN0aW9uIHdhaXRGb3JCbG9ja2luZ1Byb21pc2VzKGZuKSB7XG5cdGlmIChibG9ja2luZ1Byb21pc2VzLmxlbmd0aCA9PT0gMCkgcmV0dXJuIGZuKCk7XG5cdHZhciBibG9ja2VyID0gYmxvY2tpbmdQcm9taXNlcztcblx0YmxvY2tpbmdQcm9taXNlcyA9IFtdO1xuXHRyZXR1cm4gUHJvbWlzZS5hbGwoYmxvY2tlcikudGhlbihmdW5jdGlvbiAoKSB7XG5cdFx0cmV0dXJuIHdhaXRGb3JCbG9ja2luZ1Byb21pc2VzKGZuKTtcblx0fSk7XG59XG5cbmZ1bmN0aW9uIGhvdENoZWNrKGFwcGx5T25VcGRhdGUpIHtcblx0aWYgKGN1cnJlbnRTdGF0dXMgIT09IFwiaWRsZVwiKSB7XG5cdFx0dGhyb3cgbmV3IEVycm9yKFwiY2hlY2soKSBpcyBvbmx5IGFsbG93ZWQgaW4gaWRsZSBzdGF0dXNcIik7XG5cdH1cblx0cmV0dXJuIHNldFN0YXR1cyhcImNoZWNrXCIpXG5cdFx0LnRoZW4oX193ZWJwYWNrX3JlcXVpcmVfXy5obXJNKVxuXHRcdC50aGVuKGZ1bmN0aW9uICh1cGRhdGUpIHtcblx0XHRcdGlmICghdXBkYXRlKSB7XG5cdFx0XHRcdHJldHVybiBzZXRTdGF0dXMoYXBwbHlJbnZhbGlkYXRlZE1vZHVsZXMoKSA/IFwicmVhZHlcIiA6IFwiaWRsZVwiKS50aGVuKFxuXHRcdFx0XHRcdGZ1bmN0aW9uICgpIHtcblx0XHRcdFx0XHRcdHJldHVybiBudWxsO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0KTtcblx0XHRcdH1cblxuXHRcdFx0cmV0dXJuIHNldFN0YXR1cyhcInByZXBhcmVcIikudGhlbihmdW5jdGlvbiAoKSB7XG5cdFx0XHRcdHZhciB1cGRhdGVkTW9kdWxlcyA9IFtdO1xuXHRcdFx0XHRibG9ja2luZ1Byb21pc2VzID0gW107XG5cdFx0XHRcdGN1cnJlbnRVcGRhdGVBcHBseUhhbmRsZXJzID0gW107XG5cblx0XHRcdFx0cmV0dXJuIFByb21pc2UuYWxsKFxuXHRcdFx0XHRcdE9iamVjdC5rZXlzKF9fd2VicGFja19yZXF1aXJlX18uaG1yQykucmVkdWNlKGZ1bmN0aW9uIChcblx0XHRcdFx0XHRcdHByb21pc2VzLFxuXHRcdFx0XHRcdFx0a2V5XG5cdFx0XHRcdFx0KSB7XG5cdFx0XHRcdFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmhtckNba2V5XShcblx0XHRcdFx0XHRcdFx0dXBkYXRlLmMsXG5cdFx0XHRcdFx0XHRcdHVwZGF0ZS5yLFxuXHRcdFx0XHRcdFx0XHR1cGRhdGUubSxcblx0XHRcdFx0XHRcdFx0cHJvbWlzZXMsXG5cdFx0XHRcdFx0XHRcdGN1cnJlbnRVcGRhdGVBcHBseUhhbmRsZXJzLFxuXHRcdFx0XHRcdFx0XHR1cGRhdGVkTW9kdWxlc1xuXHRcdFx0XHRcdFx0KTtcblx0XHRcdFx0XHRcdHJldHVybiBwcm9taXNlcztcblx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdFtdKVxuXHRcdFx0XHQpLnRoZW4oZnVuY3Rpb24gKCkge1xuXHRcdFx0XHRcdHJldHVybiB3YWl0Rm9yQmxvY2tpbmdQcm9taXNlcyhmdW5jdGlvbiAoKSB7XG5cdFx0XHRcdFx0XHRpZiAoYXBwbHlPblVwZGF0ZSkge1xuXHRcdFx0XHRcdFx0XHRyZXR1cm4gaW50ZXJuYWxBcHBseShhcHBseU9uVXBkYXRlKTtcblx0XHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRcdHJldHVybiBzZXRTdGF0dXMoXCJyZWFkeVwiKS50aGVuKGZ1bmN0aW9uICgpIHtcblx0XHRcdFx0XHRcdFx0XHRyZXR1cm4gdXBkYXRlZE1vZHVsZXM7XG5cdFx0XHRcdFx0XHRcdH0pO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH0pO1xuXHRcdFx0XHR9KTtcblx0XHRcdH0pO1xuXHRcdH0pO1xufVxuXG5mdW5jdGlvbiBob3RBcHBseShvcHRpb25zKSB7XG5cdGlmIChjdXJyZW50U3RhdHVzICE9PSBcInJlYWR5XCIpIHtcblx0XHRyZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCkudGhlbihmdW5jdGlvbiAoKSB7XG5cdFx0XHR0aHJvdyBuZXcgRXJyb3IoXCJhcHBseSgpIGlzIG9ubHkgYWxsb3dlZCBpbiByZWFkeSBzdGF0dXNcIik7XG5cdFx0fSk7XG5cdH1cblx0cmV0dXJuIGludGVybmFsQXBwbHkob3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIGludGVybmFsQXBwbHkob3B0aW9ucykge1xuXHRvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcblxuXHRhcHBseUludmFsaWRhdGVkTW9kdWxlcygpO1xuXG5cdHZhciByZXN1bHRzID0gY3VycmVudFVwZGF0ZUFwcGx5SGFuZGxlcnMubWFwKGZ1bmN0aW9uIChoYW5kbGVyKSB7XG5cdFx0cmV0dXJuIGhhbmRsZXIob3B0aW9ucyk7XG5cdH0pO1xuXHRjdXJyZW50VXBkYXRlQXBwbHlIYW5kbGVycyA9IHVuZGVmaW5lZDtcblxuXHR2YXIgZXJyb3JzID0gcmVzdWx0c1xuXHRcdC5tYXAoZnVuY3Rpb24gKHIpIHtcblx0XHRcdHJldHVybiByLmVycm9yO1xuXHRcdH0pXG5cdFx0LmZpbHRlcihCb29sZWFuKTtcblxuXHRpZiAoZXJyb3JzLmxlbmd0aCA+IDApIHtcblx0XHRyZXR1cm4gc2V0U3RhdHVzKFwiYWJvcnRcIikudGhlbihmdW5jdGlvbiAoKSB7XG5cdFx0XHR0aHJvdyBlcnJvcnNbMF07XG5cdFx0fSk7XG5cdH1cblxuXHQvLyBOb3cgaW4gXCJkaXNwb3NlXCIgcGhhc2Vcblx0dmFyIGRpc3Bvc2VQcm9taXNlID0gc2V0U3RhdHVzKFwiZGlzcG9zZVwiKTtcblxuXHRyZXN1bHRzLmZvckVhY2goZnVuY3Rpb24gKHJlc3VsdCkge1xuXHRcdGlmIChyZXN1bHQuZGlzcG9zZSkgcmVzdWx0LmRpc3Bvc2UoKTtcblx0fSk7XG5cblx0Ly8gTm93IGluIFwiYXBwbHlcIiBwaGFzZVxuXHR2YXIgYXBwbHlQcm9taXNlID0gc2V0U3RhdHVzKFwiYXBwbHlcIik7XG5cblx0dmFyIGVycm9yO1xuXHR2YXIgcmVwb3J0RXJyb3IgPSBmdW5jdGlvbiAoZXJyKSB7XG5cdFx0aWYgKCFlcnJvcikgZXJyb3IgPSBlcnI7XG5cdH07XG5cblx0dmFyIG91dGRhdGVkTW9kdWxlcyA9IFtdO1xuXHRyZXN1bHRzLmZvckVhY2goZnVuY3Rpb24gKHJlc3VsdCkge1xuXHRcdGlmIChyZXN1bHQuYXBwbHkpIHtcblx0XHRcdHZhciBtb2R1bGVzID0gcmVzdWx0LmFwcGx5KHJlcG9ydEVycm9yKTtcblx0XHRcdGlmIChtb2R1bGVzKSB7XG5cdFx0XHRcdGZvciAodmFyIGkgPSAwOyBpIDwgbW9kdWxlcy5sZW5ndGg7IGkrKykge1xuXHRcdFx0XHRcdG91dGRhdGVkTW9kdWxlcy5wdXNoKG1vZHVsZXNbaV0pO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHR9KTtcblxuXHRyZXR1cm4gUHJvbWlzZS5hbGwoW2Rpc3Bvc2VQcm9taXNlLCBhcHBseVByb21pc2VdKS50aGVuKGZ1bmN0aW9uICgpIHtcblx0XHQvLyBoYW5kbGUgZXJyb3JzIGluIGFjY2VwdCBoYW5kbGVycyBhbmQgc2VsZiBhY2NlcHRlZCBtb2R1bGUgbG9hZFxuXHRcdGlmIChlcnJvcikge1xuXHRcdFx0cmV0dXJuIHNldFN0YXR1cyhcImZhaWxcIikudGhlbihmdW5jdGlvbiAoKSB7XG5cdFx0XHRcdHRocm93IGVycm9yO1xuXHRcdFx0fSk7XG5cdFx0fVxuXG5cdFx0aWYgKHF1ZXVlZEludmFsaWRhdGVkTW9kdWxlcykge1xuXHRcdFx0cmV0dXJuIGludGVybmFsQXBwbHkob3B0aW9ucykudGhlbihmdW5jdGlvbiAobGlzdCkge1xuXHRcdFx0XHRvdXRkYXRlZE1vZHVsZXMuZm9yRWFjaChmdW5jdGlvbiAobW9kdWxlSWQpIHtcblx0XHRcdFx0XHRpZiAobGlzdC5pbmRleE9mKG1vZHVsZUlkKSA8IDApIGxpc3QucHVzaChtb2R1bGVJZCk7XG5cdFx0XHRcdH0pO1xuXHRcdFx0XHRyZXR1cm4gbGlzdDtcblx0XHRcdH0pO1xuXHRcdH1cblxuXHRcdHJldHVybiBzZXRTdGF0dXMoXCJpZGxlXCIpLnRoZW4oZnVuY3Rpb24gKCkge1xuXHRcdFx0cmV0dXJuIG91dGRhdGVkTW9kdWxlcztcblx0XHR9KTtcblx0fSk7XG59XG5cbmZ1bmN0aW9uIGFwcGx5SW52YWxpZGF0ZWRNb2R1bGVzKCkge1xuXHRpZiAocXVldWVkSW52YWxpZGF0ZWRNb2R1bGVzKSB7XG5cdFx0aWYgKCFjdXJyZW50VXBkYXRlQXBwbHlIYW5kbGVycykgY3VycmVudFVwZGF0ZUFwcGx5SGFuZGxlcnMgPSBbXTtcblx0XHRPYmplY3Qua2V5cyhfX3dlYnBhY2tfcmVxdWlyZV9fLmhtckkpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuXHRcdFx0cXVldWVkSW52YWxpZGF0ZWRNb2R1bGVzLmZvckVhY2goZnVuY3Rpb24gKG1vZHVsZUlkKSB7XG5cdFx0XHRcdF9fd2VicGFja19yZXF1aXJlX18uaG1ySVtrZXldKFxuXHRcdFx0XHRcdG1vZHVsZUlkLFxuXHRcdFx0XHRcdGN1cnJlbnRVcGRhdGVBcHBseUhhbmRsZXJzXG5cdFx0XHRcdCk7XG5cdFx0XHR9KTtcblx0XHR9KTtcblx0XHRxdWV1ZWRJbnZhbGlkYXRlZE1vZHVsZXMgPSB1bmRlZmluZWQ7XG5cdFx0cmV0dXJuIHRydWU7XG5cdH1cbn0iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi9cIjsiLCJ2YXIgY3JlYXRlU3R5bGVzaGVldCA9IChjaHVua0lkLCBmdWxsaHJlZiwgcmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG5cdHZhciBsaW5rVGFnID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpbmtcIik7XG5cblx0bGlua1RhZy5yZWwgPSBcInN0eWxlc2hlZXRcIjtcblx0bGlua1RhZy50eXBlID0gXCJ0ZXh0L2Nzc1wiO1xuXHR2YXIgb25MaW5rQ29tcGxldGUgPSAoZXZlbnQpID0+IHtcblx0XHQvLyBhdm9pZCBtZW0gbGVha3MuXG5cdFx0bGlua1RhZy5vbmVycm9yID0gbGlua1RhZy5vbmxvYWQgPSBudWxsO1xuXHRcdGlmIChldmVudC50eXBlID09PSAnbG9hZCcpIHtcblx0XHRcdHJlc29sdmUoKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0dmFyIGVycm9yVHlwZSA9IGV2ZW50ICYmIChldmVudC50eXBlID09PSAnbG9hZCcgPyAnbWlzc2luZycgOiBldmVudC50eXBlKTtcblx0XHRcdHZhciByZWFsSHJlZiA9IGV2ZW50ICYmIGV2ZW50LnRhcmdldCAmJiBldmVudC50YXJnZXQuaHJlZiB8fCBmdWxsaHJlZjtcblx0XHRcdHZhciBlcnIgPSBuZXcgRXJyb3IoXCJMb2FkaW5nIENTUyBjaHVuayBcIiArIGNodW5rSWQgKyBcIiBmYWlsZWQuXFxuKFwiICsgcmVhbEhyZWYgKyBcIilcIik7XG5cdFx0XHRlcnIuY29kZSA9IFwiQ1NTX0NIVU5LX0xPQURfRkFJTEVEXCI7XG5cdFx0XHRlcnIudHlwZSA9IGVycm9yVHlwZTtcblx0XHRcdGVyci5yZXF1ZXN0ID0gcmVhbEhyZWY7XG5cdFx0XHRsaW5rVGFnLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQobGlua1RhZylcblx0XHRcdHJlamVjdChlcnIpO1xuXHRcdH1cblx0fVxuXHRsaW5rVGFnLm9uZXJyb3IgPSBsaW5rVGFnLm9ubG9hZCA9IG9uTGlua0NvbXBsZXRlO1xuXHRsaW5rVGFnLmhyZWYgPSBmdWxsaHJlZjtcblxuXHRkb2N1bWVudC5oZWFkLmFwcGVuZENoaWxkKGxpbmtUYWcpO1xuXHRyZXR1cm4gbGlua1RhZztcbn07XG52YXIgZmluZFN0eWxlc2hlZXQgPSAoaHJlZiwgZnVsbGhyZWYpID0+IHtcblx0dmFyIGV4aXN0aW5nTGlua1RhZ3MgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcImxpbmtcIik7XG5cdGZvcih2YXIgaSA9IDA7IGkgPCBleGlzdGluZ0xpbmtUYWdzLmxlbmd0aDsgaSsrKSB7XG5cdFx0dmFyIHRhZyA9IGV4aXN0aW5nTGlua1RhZ3NbaV07XG5cdFx0dmFyIGRhdGFIcmVmID0gdGFnLmdldEF0dHJpYnV0ZShcImRhdGEtaHJlZlwiKSB8fCB0YWcuZ2V0QXR0cmlidXRlKFwiaHJlZlwiKTtcblx0XHRpZih0YWcucmVsID09PSBcInN0eWxlc2hlZXRcIiAmJiAoZGF0YUhyZWYgPT09IGhyZWYgfHwgZGF0YUhyZWYgPT09IGZ1bGxocmVmKSkgcmV0dXJuIHRhZztcblx0fVxuXHR2YXIgZXhpc3RpbmdTdHlsZVRhZ3MgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInN0eWxlXCIpO1xuXHRmb3IodmFyIGkgPSAwOyBpIDwgZXhpc3RpbmdTdHlsZVRhZ3MubGVuZ3RoOyBpKyspIHtcblx0XHR2YXIgdGFnID0gZXhpc3RpbmdTdHlsZVRhZ3NbaV07XG5cdFx0dmFyIGRhdGFIcmVmID0gdGFnLmdldEF0dHJpYnV0ZShcImRhdGEtaHJlZlwiKTtcblx0XHRpZihkYXRhSHJlZiA9PT0gaHJlZiB8fCBkYXRhSHJlZiA9PT0gZnVsbGhyZWYpIHJldHVybiB0YWc7XG5cdH1cbn07XG52YXIgbG9hZFN0eWxlc2hlZXQgPSAoY2h1bmtJZCkgPT4ge1xuXHRyZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuXHRcdHZhciBocmVmID0gX193ZWJwYWNrX3JlcXVpcmVfXy5taW5pQ3NzRihjaHVua0lkKTtcblx0XHR2YXIgZnVsbGhyZWYgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLnAgKyBocmVmO1xuXHRcdGlmKGZpbmRTdHlsZXNoZWV0KGhyZWYsIGZ1bGxocmVmKSkgcmV0dXJuIHJlc29sdmUoKTtcblx0XHRjcmVhdGVTdHlsZXNoZWV0KGNodW5rSWQsIGZ1bGxocmVmLCByZXNvbHZlLCByZWplY3QpO1xuXHR9KTtcbn1cbi8vIG5vIGNodW5rIGxvYWRpbmdcblxudmFyIG9sZFRhZ3MgPSBbXTtcbnZhciBuZXdUYWdzID0gW107XG52YXIgYXBwbHlIYW5kbGVyID0gKG9wdGlvbnMpID0+IHtcblx0cmV0dXJuIHsgZGlzcG9zZTogKCkgPT4ge1xuXHRcdGZvcih2YXIgaSA9IDA7IGkgPCBvbGRUYWdzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHR2YXIgb2xkVGFnID0gb2xkVGFnc1tpXTtcblx0XHRcdGlmKG9sZFRhZy5wYXJlbnROb2RlKSBvbGRUYWcucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChvbGRUYWcpO1xuXHRcdH1cblx0XHRvbGRUYWdzLmxlbmd0aCA9IDA7XG5cdH0sIGFwcGx5OiAoKSA9PiB7XG5cdFx0Zm9yKHZhciBpID0gMDsgaSA8IG5ld1RhZ3MubGVuZ3RoOyBpKyspIG5ld1RhZ3NbaV0ucmVsID0gXCJzdHlsZXNoZWV0XCI7XG5cdFx0bmV3VGFncy5sZW5ndGggPSAwO1xuXHR9IH07XG59XG5fX3dlYnBhY2tfcmVxdWlyZV9fLmhtckMubWluaUNzcyA9IChjaHVua0lkcywgcmVtb3ZlZENodW5rcywgcmVtb3ZlZE1vZHVsZXMsIHByb21pc2VzLCBhcHBseUhhbmRsZXJzLCB1cGRhdGVkTW9kdWxlc0xpc3QpID0+IHtcblx0YXBwbHlIYW5kbGVycy5wdXNoKGFwcGx5SGFuZGxlcik7XG5cdGNodW5rSWRzLmZvckVhY2goKGNodW5rSWQpID0+IHtcblx0XHR2YXIgaHJlZiA9IF9fd2VicGFja19yZXF1aXJlX18ubWluaUNzc0YoY2h1bmtJZCk7XG5cdFx0dmFyIGZ1bGxocmVmID0gX193ZWJwYWNrX3JlcXVpcmVfXy5wICsgaHJlZjtcblx0XHR2YXIgb2xkVGFnID0gZmluZFN0eWxlc2hlZXQoaHJlZiwgZnVsbGhyZWYpO1xuXHRcdGlmKCFvbGRUYWcpIHJldHVybjtcblx0XHRwcm9taXNlcy5wdXNoKG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcblx0XHRcdHZhciB0YWcgPSBjcmVhdGVTdHlsZXNoZWV0KGNodW5rSWQsIGZ1bGxocmVmLCAoKSA9PiB7XG5cdFx0XHRcdHRhZy5hcyA9IFwic3R5bGVcIjtcblx0XHRcdFx0dGFnLnJlbCA9IFwicHJlbG9hZFwiO1xuXHRcdFx0XHRyZXNvbHZlKCk7XG5cdFx0XHR9LCByZWplY3QpO1xuXHRcdFx0b2xkVGFncy5wdXNoKG9sZFRhZyk7XG5cdFx0XHRuZXdUYWdzLnB1c2godGFnKTtcblx0XHR9KSk7XG5cdH0pO1xufSIsIl9fd2VicGFja19yZXF1aXJlX18uYiA9IGRvY3VtZW50LmJhc2VVUkkgfHwgc2VsZi5sb2NhdGlvbi5ocmVmO1xuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmhtclNfanNvbnAgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmhtclNfanNvbnAgfHwge1xuXHRcIm1haW5cIjogMFxufTtcblxuX193ZWJwYWNrX3JlcXVpcmVfXy5mLmogPSAoY2h1bmtJZCwgcHJvbWlzZXMpID0+IHtcblx0XHQvLyBKU09OUCBjaHVuayBsb2FkaW5nIGZvciBqYXZhc2NyaXB0XG5cdFx0dmFyIGluc3RhbGxlZENodW5rRGF0YSA9IF9fd2VicGFja19yZXF1aXJlX18ubyhpbnN0YWxsZWRDaHVua3MsIGNodW5rSWQpID8gaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdIDogdW5kZWZpbmVkO1xuXHRcdGlmKGluc3RhbGxlZENodW5rRGF0YSAhPT0gMCkgeyAvLyAwIG1lYW5zIFwiYWxyZWFkeSBpbnN0YWxsZWRcIi5cblxuXHRcdFx0Ly8gYSBQcm9taXNlIG1lYW5zIFwiY3VycmVudGx5IGxvYWRpbmdcIi5cblx0XHRcdGlmKGluc3RhbGxlZENodW5rRGF0YSkge1xuXHRcdFx0XHRwcm9taXNlcy5wdXNoKGluc3RhbGxlZENodW5rRGF0YVsyXSk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRpZih0cnVlKSB7IC8vIGFsbCBjaHVua3MgaGF2ZSBKU1xuXHRcdFx0XHRcdC8vIHNldHVwIFByb21pc2UgaW4gY2h1bmsgY2FjaGVcblx0XHRcdFx0XHR2YXIgcHJvbWlzZSA9IG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IChpbnN0YWxsZWRDaHVua0RhdGEgPSBpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gPSBbcmVzb2x2ZSwgcmVqZWN0XSkpO1xuXHRcdFx0XHRcdHByb21pc2VzLnB1c2goaW5zdGFsbGVkQ2h1bmtEYXRhWzJdID0gcHJvbWlzZSk7XG5cblx0XHRcdFx0XHQvLyBzdGFydCBjaHVuayBsb2FkaW5nXG5cdFx0XHRcdFx0dmFyIHVybCA9IF9fd2VicGFja19yZXF1aXJlX18ucCArIF9fd2VicGFja19yZXF1aXJlX18udShjaHVua0lkKTtcblx0XHRcdFx0XHQvLyBjcmVhdGUgZXJyb3IgYmVmb3JlIHN0YWNrIHVud291bmQgdG8gZ2V0IHVzZWZ1bCBzdGFja3RyYWNlIGxhdGVyXG5cdFx0XHRcdFx0dmFyIGVycm9yID0gbmV3IEVycm9yKCk7XG5cdFx0XHRcdFx0dmFyIGxvYWRpbmdFbmRlZCA9IChldmVudCkgPT4ge1xuXHRcdFx0XHRcdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGluc3RhbGxlZENodW5rcywgY2h1bmtJZCkpIHtcblx0XHRcdFx0XHRcdFx0aW5zdGFsbGVkQ2h1bmtEYXRhID0gaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdO1xuXHRcdFx0XHRcdFx0XHRpZihpbnN0YWxsZWRDaHVua0RhdGEgIT09IDApIGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA9IHVuZGVmaW5lZDtcblx0XHRcdFx0XHRcdFx0aWYoaW5zdGFsbGVkQ2h1bmtEYXRhKSB7XG5cdFx0XHRcdFx0XHRcdFx0dmFyIGVycm9yVHlwZSA9IGV2ZW50ICYmIChldmVudC50eXBlID09PSAnbG9hZCcgPyAnbWlzc2luZycgOiBldmVudC50eXBlKTtcblx0XHRcdFx0XHRcdFx0XHR2YXIgcmVhbFNyYyA9IGV2ZW50ICYmIGV2ZW50LnRhcmdldCAmJiBldmVudC50YXJnZXQuc3JjO1xuXHRcdFx0XHRcdFx0XHRcdGVycm9yLm1lc3NhZ2UgPSAnTG9hZGluZyBjaHVuayAnICsgY2h1bmtJZCArICcgZmFpbGVkLlxcbignICsgZXJyb3JUeXBlICsgJzogJyArIHJlYWxTcmMgKyAnKSc7XG5cdFx0XHRcdFx0XHRcdFx0ZXJyb3IubmFtZSA9ICdDaHVua0xvYWRFcnJvcic7XG5cdFx0XHRcdFx0XHRcdFx0ZXJyb3IudHlwZSA9IGVycm9yVHlwZTtcblx0XHRcdFx0XHRcdFx0XHRlcnJvci5yZXF1ZXN0ID0gcmVhbFNyYztcblx0XHRcdFx0XHRcdFx0XHRpbnN0YWxsZWRDaHVua0RhdGFbMV0oZXJyb3IpO1xuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fTtcblx0XHRcdFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmwodXJsLCBsb2FkaW5nRW5kZWQsIFwiY2h1bmstXCIgKyBjaHVua0lkLCBjaHVua0lkKTtcblx0XHRcdFx0fSBlbHNlIGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA9IDA7XG5cdFx0XHR9XG5cdFx0fVxufTtcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbnZhciBjdXJyZW50VXBkYXRlZE1vZHVsZXNMaXN0O1xudmFyIHdhaXRpbmdVcGRhdGVSZXNvbHZlcyA9IHt9O1xuZnVuY3Rpb24gbG9hZFVwZGF0ZUNodW5rKGNodW5rSWQpIHtcblx0cmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcblx0XHR3YWl0aW5nVXBkYXRlUmVzb2x2ZXNbY2h1bmtJZF0gPSByZXNvbHZlO1xuXHRcdC8vIHN0YXJ0IHVwZGF0ZSBjaHVuayBsb2FkaW5nXG5cdFx0dmFyIHVybCA9IF9fd2VicGFja19yZXF1aXJlX18ucCArIF9fd2VicGFja19yZXF1aXJlX18uaHUoY2h1bmtJZCk7XG5cdFx0Ly8gY3JlYXRlIGVycm9yIGJlZm9yZSBzdGFjayB1bndvdW5kIHRvIGdldCB1c2VmdWwgc3RhY2t0cmFjZSBsYXRlclxuXHRcdHZhciBlcnJvciA9IG5ldyBFcnJvcigpO1xuXHRcdHZhciBsb2FkaW5nRW5kZWQgPSAoZXZlbnQpID0+IHtcblx0XHRcdGlmKHdhaXRpbmdVcGRhdGVSZXNvbHZlc1tjaHVua0lkXSkge1xuXHRcdFx0XHR3YWl0aW5nVXBkYXRlUmVzb2x2ZXNbY2h1bmtJZF0gPSB1bmRlZmluZWRcblx0XHRcdFx0dmFyIGVycm9yVHlwZSA9IGV2ZW50ICYmIChldmVudC50eXBlID09PSAnbG9hZCcgPyAnbWlzc2luZycgOiBldmVudC50eXBlKTtcblx0XHRcdFx0dmFyIHJlYWxTcmMgPSBldmVudCAmJiBldmVudC50YXJnZXQgJiYgZXZlbnQudGFyZ2V0LnNyYztcblx0XHRcdFx0ZXJyb3IubWVzc2FnZSA9ICdMb2FkaW5nIGhvdCB1cGRhdGUgY2h1bmsgJyArIGNodW5rSWQgKyAnIGZhaWxlZC5cXG4oJyArIGVycm9yVHlwZSArICc6ICcgKyByZWFsU3JjICsgJyknO1xuXHRcdFx0XHRlcnJvci5uYW1lID0gJ0NodW5rTG9hZEVycm9yJztcblx0XHRcdFx0ZXJyb3IudHlwZSA9IGVycm9yVHlwZTtcblx0XHRcdFx0ZXJyb3IucmVxdWVzdCA9IHJlYWxTcmM7XG5cdFx0XHRcdHJlamVjdChlcnJvcik7XG5cdFx0XHR9XG5cdFx0fTtcblx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmwodXJsLCBsb2FkaW5nRW5kZWQpO1xuXHR9KTtcbn1cblxuc2VsZltcIndlYnBhY2tIb3RVcGRhdGV3ZWJwYWNrXCJdID0gKGNodW5rSWQsIG1vcmVNb2R1bGVzLCBydW50aW1lKSA9PiB7XG5cdGZvcih2YXIgbW9kdWxlSWQgaW4gbW9yZU1vZHVsZXMpIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8obW9yZU1vZHVsZXMsIG1vZHVsZUlkKSkge1xuXHRcdFx0Y3VycmVudFVwZGF0ZVttb2R1bGVJZF0gPSBtb3JlTW9kdWxlc1ttb2R1bGVJZF07XG5cdFx0XHRpZihjdXJyZW50VXBkYXRlZE1vZHVsZXNMaXN0KSBjdXJyZW50VXBkYXRlZE1vZHVsZXNMaXN0LnB1c2gobW9kdWxlSWQpO1xuXHRcdH1cblx0fVxuXHRpZihydW50aW1lKSBjdXJyZW50VXBkYXRlUnVudGltZS5wdXNoKHJ1bnRpbWUpO1xuXHRpZih3YWl0aW5nVXBkYXRlUmVzb2x2ZXNbY2h1bmtJZF0pIHtcblx0XHR3YWl0aW5nVXBkYXRlUmVzb2x2ZXNbY2h1bmtJZF0oKTtcblx0XHR3YWl0aW5nVXBkYXRlUmVzb2x2ZXNbY2h1bmtJZF0gPSB1bmRlZmluZWQ7XG5cdH1cbn07XG5cbnZhciBjdXJyZW50VXBkYXRlQ2h1bmtzO1xudmFyIGN1cnJlbnRVcGRhdGU7XG52YXIgY3VycmVudFVwZGF0ZVJlbW92ZWRDaHVua3M7XG52YXIgY3VycmVudFVwZGF0ZVJ1bnRpbWU7XG5mdW5jdGlvbiBhcHBseUhhbmRsZXIob3B0aW9ucykge1xuXHRpZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5mKSBkZWxldGUgX193ZWJwYWNrX3JlcXVpcmVfXy5mLmpzb25wSG1yO1xuXHRjdXJyZW50VXBkYXRlQ2h1bmtzID0gdW5kZWZpbmVkO1xuXHRmdW5jdGlvbiBnZXRBZmZlY3RlZE1vZHVsZUVmZmVjdHModXBkYXRlTW9kdWxlSWQpIHtcblx0XHR2YXIgb3V0ZGF0ZWRNb2R1bGVzID0gW3VwZGF0ZU1vZHVsZUlkXTtcblx0XHR2YXIgb3V0ZGF0ZWREZXBlbmRlbmNpZXMgPSB7fTtcblxuXHRcdHZhciBxdWV1ZSA9IG91dGRhdGVkTW9kdWxlcy5tYXAoZnVuY3Rpb24gKGlkKSB7XG5cdFx0XHRyZXR1cm4ge1xuXHRcdFx0XHRjaGFpbjogW2lkXSxcblx0XHRcdFx0aWQ6IGlkXG5cdFx0XHR9O1xuXHRcdH0pO1xuXHRcdHdoaWxlIChxdWV1ZS5sZW5ndGggPiAwKSB7XG5cdFx0XHR2YXIgcXVldWVJdGVtID0gcXVldWUucG9wKCk7XG5cdFx0XHR2YXIgbW9kdWxlSWQgPSBxdWV1ZUl0ZW0uaWQ7XG5cdFx0XHR2YXIgY2hhaW4gPSBxdWV1ZUl0ZW0uY2hhaW47XG5cdFx0XHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX3JlcXVpcmVfXy5jW21vZHVsZUlkXTtcblx0XHRcdGlmIChcblx0XHRcdFx0IW1vZHVsZSB8fFxuXHRcdFx0XHQobW9kdWxlLmhvdC5fc2VsZkFjY2VwdGVkICYmICFtb2R1bGUuaG90Ll9zZWxmSW52YWxpZGF0ZWQpXG5cdFx0XHQpXG5cdFx0XHRcdGNvbnRpbnVlO1xuXHRcdFx0aWYgKG1vZHVsZS5ob3QuX3NlbGZEZWNsaW5lZCkge1xuXHRcdFx0XHRyZXR1cm4ge1xuXHRcdFx0XHRcdHR5cGU6IFwic2VsZi1kZWNsaW5lZFwiLFxuXHRcdFx0XHRcdGNoYWluOiBjaGFpbixcblx0XHRcdFx0XHRtb2R1bGVJZDogbW9kdWxlSWRcblx0XHRcdFx0fTtcblx0XHRcdH1cblx0XHRcdGlmIChtb2R1bGUuaG90Ll9tYWluKSB7XG5cdFx0XHRcdHJldHVybiB7XG5cdFx0XHRcdFx0dHlwZTogXCJ1bmFjY2VwdGVkXCIsXG5cdFx0XHRcdFx0Y2hhaW46IGNoYWluLFxuXHRcdFx0XHRcdG1vZHVsZUlkOiBtb2R1bGVJZFxuXHRcdFx0XHR9O1xuXHRcdFx0fVxuXHRcdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBtb2R1bGUucGFyZW50cy5sZW5ndGg7IGkrKykge1xuXHRcdFx0XHR2YXIgcGFyZW50SWQgPSBtb2R1bGUucGFyZW50c1tpXTtcblx0XHRcdFx0dmFyIHBhcmVudCA9IF9fd2VicGFja19yZXF1aXJlX18uY1twYXJlbnRJZF07XG5cdFx0XHRcdGlmICghcGFyZW50KSBjb250aW51ZTtcblx0XHRcdFx0aWYgKHBhcmVudC5ob3QuX2RlY2xpbmVkRGVwZW5kZW5jaWVzW21vZHVsZUlkXSkge1xuXHRcdFx0XHRcdHJldHVybiB7XG5cdFx0XHRcdFx0XHR0eXBlOiBcImRlY2xpbmVkXCIsXG5cdFx0XHRcdFx0XHRjaGFpbjogY2hhaW4uY29uY2F0KFtwYXJlbnRJZF0pLFxuXHRcdFx0XHRcdFx0bW9kdWxlSWQ6IG1vZHVsZUlkLFxuXHRcdFx0XHRcdFx0cGFyZW50SWQ6IHBhcmVudElkXG5cdFx0XHRcdFx0fTtcblx0XHRcdFx0fVxuXHRcdFx0XHRpZiAob3V0ZGF0ZWRNb2R1bGVzLmluZGV4T2YocGFyZW50SWQpICE9PSAtMSkgY29udGludWU7XG5cdFx0XHRcdGlmIChwYXJlbnQuaG90Ll9hY2NlcHRlZERlcGVuZGVuY2llc1ttb2R1bGVJZF0pIHtcblx0XHRcdFx0XHRpZiAoIW91dGRhdGVkRGVwZW5kZW5jaWVzW3BhcmVudElkXSlcblx0XHRcdFx0XHRcdG91dGRhdGVkRGVwZW5kZW5jaWVzW3BhcmVudElkXSA9IFtdO1xuXHRcdFx0XHRcdGFkZEFsbFRvU2V0KG91dGRhdGVkRGVwZW5kZW5jaWVzW3BhcmVudElkXSwgW21vZHVsZUlkXSk7XG5cdFx0XHRcdFx0Y29udGludWU7XG5cdFx0XHRcdH1cblx0XHRcdFx0ZGVsZXRlIG91dGRhdGVkRGVwZW5kZW5jaWVzW3BhcmVudElkXTtcblx0XHRcdFx0b3V0ZGF0ZWRNb2R1bGVzLnB1c2gocGFyZW50SWQpO1xuXHRcdFx0XHRxdWV1ZS5wdXNoKHtcblx0XHRcdFx0XHRjaGFpbjogY2hhaW4uY29uY2F0KFtwYXJlbnRJZF0pLFxuXHRcdFx0XHRcdGlkOiBwYXJlbnRJZFxuXHRcdFx0XHR9KTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHRyZXR1cm4ge1xuXHRcdFx0dHlwZTogXCJhY2NlcHRlZFwiLFxuXHRcdFx0bW9kdWxlSWQ6IHVwZGF0ZU1vZHVsZUlkLFxuXHRcdFx0b3V0ZGF0ZWRNb2R1bGVzOiBvdXRkYXRlZE1vZHVsZXMsXG5cdFx0XHRvdXRkYXRlZERlcGVuZGVuY2llczogb3V0ZGF0ZWREZXBlbmRlbmNpZXNcblx0XHR9O1xuXHR9XG5cblx0ZnVuY3Rpb24gYWRkQWxsVG9TZXQoYSwgYikge1xuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgYi5sZW5ndGg7IGkrKykge1xuXHRcdFx0dmFyIGl0ZW0gPSBiW2ldO1xuXHRcdFx0aWYgKGEuaW5kZXhPZihpdGVtKSA9PT0gLTEpIGEucHVzaChpdGVtKTtcblx0XHR9XG5cdH1cblxuXHQvLyBhdCBiZWdpbiBhbGwgdXBkYXRlcyBtb2R1bGVzIGFyZSBvdXRkYXRlZFxuXHQvLyB0aGUgXCJvdXRkYXRlZFwiIHN0YXR1cyBjYW4gcHJvcGFnYXRlIHRvIHBhcmVudHMgaWYgdGhleSBkb24ndCBhY2NlcHQgdGhlIGNoaWxkcmVuXG5cdHZhciBvdXRkYXRlZERlcGVuZGVuY2llcyA9IHt9O1xuXHR2YXIgb3V0ZGF0ZWRNb2R1bGVzID0gW107XG5cdHZhciBhcHBsaWVkVXBkYXRlID0ge307XG5cblx0dmFyIHdhcm5VbmV4cGVjdGVkUmVxdWlyZSA9IGZ1bmN0aW9uIHdhcm5VbmV4cGVjdGVkUmVxdWlyZShtb2R1bGUpIHtcblx0XHRjb25zb2xlLndhcm4oXG5cdFx0XHRcIltITVJdIHVuZXhwZWN0ZWQgcmVxdWlyZShcIiArIG1vZHVsZS5pZCArIFwiKSB0byBkaXNwb3NlZCBtb2R1bGVcIlxuXHRcdCk7XG5cdH07XG5cblx0Zm9yICh2YXIgbW9kdWxlSWQgaW4gY3VycmVudFVwZGF0ZSkge1xuXHRcdGlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLm8oY3VycmVudFVwZGF0ZSwgbW9kdWxlSWQpKSB7XG5cdFx0XHR2YXIgbmV3TW9kdWxlRmFjdG9yeSA9IGN1cnJlbnRVcGRhdGVbbW9kdWxlSWRdO1xuXHRcdFx0LyoqIEB0eXBlIHtUT0RPfSAqL1xuXHRcdFx0dmFyIHJlc3VsdDtcblx0XHRcdGlmIChuZXdNb2R1bGVGYWN0b3J5KSB7XG5cdFx0XHRcdHJlc3VsdCA9IGdldEFmZmVjdGVkTW9kdWxlRWZmZWN0cyhtb2R1bGVJZCk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRyZXN1bHQgPSB7XG5cdFx0XHRcdFx0dHlwZTogXCJkaXNwb3NlZFwiLFxuXHRcdFx0XHRcdG1vZHVsZUlkOiBtb2R1bGVJZFxuXHRcdFx0XHR9O1xuXHRcdFx0fVxuXHRcdFx0LyoqIEB0eXBlIHtFcnJvcnxmYWxzZX0gKi9cblx0XHRcdHZhciBhYm9ydEVycm9yID0gZmFsc2U7XG5cdFx0XHR2YXIgZG9BcHBseSA9IGZhbHNlO1xuXHRcdFx0dmFyIGRvRGlzcG9zZSA9IGZhbHNlO1xuXHRcdFx0dmFyIGNoYWluSW5mbyA9IFwiXCI7XG5cdFx0XHRpZiAocmVzdWx0LmNoYWluKSB7XG5cdFx0XHRcdGNoYWluSW5mbyA9IFwiXFxuVXBkYXRlIHByb3BhZ2F0aW9uOiBcIiArIHJlc3VsdC5jaGFpbi5qb2luKFwiIC0+IFwiKTtcblx0XHRcdH1cblx0XHRcdHN3aXRjaCAocmVzdWx0LnR5cGUpIHtcblx0XHRcdFx0Y2FzZSBcInNlbGYtZGVjbGluZWRcIjpcblx0XHRcdFx0XHRpZiAob3B0aW9ucy5vbkRlY2xpbmVkKSBvcHRpb25zLm9uRGVjbGluZWQocmVzdWx0KTtcblx0XHRcdFx0XHRpZiAoIW9wdGlvbnMuaWdub3JlRGVjbGluZWQpXG5cdFx0XHRcdFx0XHRhYm9ydEVycm9yID0gbmV3IEVycm9yKFxuXHRcdFx0XHRcdFx0XHRcIkFib3J0ZWQgYmVjYXVzZSBvZiBzZWxmIGRlY2xpbmU6IFwiICtcblx0XHRcdFx0XHRcdFx0XHRyZXN1bHQubW9kdWxlSWQgK1xuXHRcdFx0XHRcdFx0XHRcdGNoYWluSW5mb1xuXHRcdFx0XHRcdFx0KTtcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0Y2FzZSBcImRlY2xpbmVkXCI6XG5cdFx0XHRcdFx0aWYgKG9wdGlvbnMub25EZWNsaW5lZCkgb3B0aW9ucy5vbkRlY2xpbmVkKHJlc3VsdCk7XG5cdFx0XHRcdFx0aWYgKCFvcHRpb25zLmlnbm9yZURlY2xpbmVkKVxuXHRcdFx0XHRcdFx0YWJvcnRFcnJvciA9IG5ldyBFcnJvcihcblx0XHRcdFx0XHRcdFx0XCJBYm9ydGVkIGJlY2F1c2Ugb2YgZGVjbGluZWQgZGVwZW5kZW5jeTogXCIgK1xuXHRcdFx0XHRcdFx0XHRcdHJlc3VsdC5tb2R1bGVJZCArXG5cdFx0XHRcdFx0XHRcdFx0XCIgaW4gXCIgK1xuXHRcdFx0XHRcdFx0XHRcdHJlc3VsdC5wYXJlbnRJZCArXG5cdFx0XHRcdFx0XHRcdFx0Y2hhaW5JbmZvXG5cdFx0XHRcdFx0XHQpO1xuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRjYXNlIFwidW5hY2NlcHRlZFwiOlxuXHRcdFx0XHRcdGlmIChvcHRpb25zLm9uVW5hY2NlcHRlZCkgb3B0aW9ucy5vblVuYWNjZXB0ZWQocmVzdWx0KTtcblx0XHRcdFx0XHRpZiAoIW9wdGlvbnMuaWdub3JlVW5hY2NlcHRlZClcblx0XHRcdFx0XHRcdGFib3J0RXJyb3IgPSBuZXcgRXJyb3IoXG5cdFx0XHRcdFx0XHRcdFwiQWJvcnRlZCBiZWNhdXNlIFwiICsgbW9kdWxlSWQgKyBcIiBpcyBub3QgYWNjZXB0ZWRcIiArIGNoYWluSW5mb1xuXHRcdFx0XHRcdFx0KTtcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0Y2FzZSBcImFjY2VwdGVkXCI6XG5cdFx0XHRcdFx0aWYgKG9wdGlvbnMub25BY2NlcHRlZCkgb3B0aW9ucy5vbkFjY2VwdGVkKHJlc3VsdCk7XG5cdFx0XHRcdFx0ZG9BcHBseSA9IHRydWU7XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdGNhc2UgXCJkaXNwb3NlZFwiOlxuXHRcdFx0XHRcdGlmIChvcHRpb25zLm9uRGlzcG9zZWQpIG9wdGlvbnMub25EaXNwb3NlZChyZXN1bHQpO1xuXHRcdFx0XHRcdGRvRGlzcG9zZSA9IHRydWU7XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdGRlZmF1bHQ6XG5cdFx0XHRcdFx0dGhyb3cgbmV3IEVycm9yKFwiVW5leGNlcHRpb24gdHlwZSBcIiArIHJlc3VsdC50eXBlKTtcblx0XHRcdH1cblx0XHRcdGlmIChhYm9ydEVycm9yKSB7XG5cdFx0XHRcdHJldHVybiB7XG5cdFx0XHRcdFx0ZXJyb3I6IGFib3J0RXJyb3Jcblx0XHRcdFx0fTtcblx0XHRcdH1cblx0XHRcdGlmIChkb0FwcGx5KSB7XG5cdFx0XHRcdGFwcGxpZWRVcGRhdGVbbW9kdWxlSWRdID0gbmV3TW9kdWxlRmFjdG9yeTtcblx0XHRcdFx0YWRkQWxsVG9TZXQob3V0ZGF0ZWRNb2R1bGVzLCByZXN1bHQub3V0ZGF0ZWRNb2R1bGVzKTtcblx0XHRcdFx0Zm9yIChtb2R1bGVJZCBpbiByZXN1bHQub3V0ZGF0ZWREZXBlbmRlbmNpZXMpIHtcblx0XHRcdFx0XHRpZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5vKHJlc3VsdC5vdXRkYXRlZERlcGVuZGVuY2llcywgbW9kdWxlSWQpKSB7XG5cdFx0XHRcdFx0XHRpZiAoIW91dGRhdGVkRGVwZW5kZW5jaWVzW21vZHVsZUlkXSlcblx0XHRcdFx0XHRcdFx0b3V0ZGF0ZWREZXBlbmRlbmNpZXNbbW9kdWxlSWRdID0gW107XG5cdFx0XHRcdFx0XHRhZGRBbGxUb1NldChcblx0XHRcdFx0XHRcdFx0b3V0ZGF0ZWREZXBlbmRlbmNpZXNbbW9kdWxlSWRdLFxuXHRcdFx0XHRcdFx0XHRyZXN1bHQub3V0ZGF0ZWREZXBlbmRlbmNpZXNbbW9kdWxlSWRdXG5cdFx0XHRcdFx0XHQpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0aWYgKGRvRGlzcG9zZSkge1xuXHRcdFx0XHRhZGRBbGxUb1NldChvdXRkYXRlZE1vZHVsZXMsIFtyZXN1bHQubW9kdWxlSWRdKTtcblx0XHRcdFx0YXBwbGllZFVwZGF0ZVttb2R1bGVJZF0gPSB3YXJuVW5leHBlY3RlZFJlcXVpcmU7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cdGN1cnJlbnRVcGRhdGUgPSB1bmRlZmluZWQ7XG5cblx0Ly8gU3RvcmUgc2VsZiBhY2NlcHRlZCBvdXRkYXRlZCBtb2R1bGVzIHRvIHJlcXVpcmUgdGhlbSBsYXRlciBieSB0aGUgbW9kdWxlIHN5c3RlbVxuXHR2YXIgb3V0ZGF0ZWRTZWxmQWNjZXB0ZWRNb2R1bGVzID0gW107XG5cdGZvciAodmFyIGogPSAwOyBqIDwgb3V0ZGF0ZWRNb2R1bGVzLmxlbmd0aDsgaisrKSB7XG5cdFx0dmFyIG91dGRhdGVkTW9kdWxlSWQgPSBvdXRkYXRlZE1vZHVsZXNbal07XG5cdFx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19yZXF1aXJlX18uY1tvdXRkYXRlZE1vZHVsZUlkXTtcblx0XHRpZiAoXG5cdFx0XHRtb2R1bGUgJiZcblx0XHRcdChtb2R1bGUuaG90Ll9zZWxmQWNjZXB0ZWQgfHwgbW9kdWxlLmhvdC5fbWFpbikgJiZcblx0XHRcdC8vIHJlbW92ZWQgc2VsZi1hY2NlcHRlZCBtb2R1bGVzIHNob3VsZCBub3QgYmUgcmVxdWlyZWRcblx0XHRcdGFwcGxpZWRVcGRhdGVbb3V0ZGF0ZWRNb2R1bGVJZF0gIT09IHdhcm5VbmV4cGVjdGVkUmVxdWlyZSAmJlxuXHRcdFx0Ly8gd2hlbiBjYWxsZWQgaW52YWxpZGF0ZSBzZWxmLWFjY2VwdGluZyBpcyBub3QgcG9zc2libGVcblx0XHRcdCFtb2R1bGUuaG90Ll9zZWxmSW52YWxpZGF0ZWRcblx0XHQpIHtcblx0XHRcdG91dGRhdGVkU2VsZkFjY2VwdGVkTW9kdWxlcy5wdXNoKHtcblx0XHRcdFx0bW9kdWxlOiBvdXRkYXRlZE1vZHVsZUlkLFxuXHRcdFx0XHRyZXF1aXJlOiBtb2R1bGUuaG90Ll9yZXF1aXJlU2VsZixcblx0XHRcdFx0ZXJyb3JIYW5kbGVyOiBtb2R1bGUuaG90Ll9zZWxmQWNjZXB0ZWRcblx0XHRcdH0pO1xuXHRcdH1cblx0fVxuXG5cdHZhciBtb2R1bGVPdXRkYXRlZERlcGVuZGVuY2llcztcblxuXHRyZXR1cm4ge1xuXHRcdGRpc3Bvc2U6IGZ1bmN0aW9uICgpIHtcblx0XHRcdGN1cnJlbnRVcGRhdGVSZW1vdmVkQ2h1bmtzLmZvckVhY2goZnVuY3Rpb24gKGNodW5rSWQpIHtcblx0XHRcdFx0ZGVsZXRlIGluc3RhbGxlZENodW5rc1tjaHVua0lkXTtcblx0XHRcdH0pO1xuXHRcdFx0Y3VycmVudFVwZGF0ZVJlbW92ZWRDaHVua3MgPSB1bmRlZmluZWQ7XG5cblx0XHRcdHZhciBpZHg7XG5cdFx0XHR2YXIgcXVldWUgPSBvdXRkYXRlZE1vZHVsZXMuc2xpY2UoKTtcblx0XHRcdHdoaWxlIChxdWV1ZS5sZW5ndGggPiAwKSB7XG5cdFx0XHRcdHZhciBtb2R1bGVJZCA9IHF1ZXVlLnBvcCgpO1xuXHRcdFx0XHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX3JlcXVpcmVfXy5jW21vZHVsZUlkXTtcblx0XHRcdFx0aWYgKCFtb2R1bGUpIGNvbnRpbnVlO1xuXG5cdFx0XHRcdHZhciBkYXRhID0ge307XG5cblx0XHRcdFx0Ly8gQ2FsbCBkaXNwb3NlIGhhbmRsZXJzXG5cdFx0XHRcdHZhciBkaXNwb3NlSGFuZGxlcnMgPSBtb2R1bGUuaG90Ll9kaXNwb3NlSGFuZGxlcnM7XG5cdFx0XHRcdGZvciAoaiA9IDA7IGogPCBkaXNwb3NlSGFuZGxlcnMubGVuZ3RoOyBqKyspIHtcblx0XHRcdFx0XHRkaXNwb3NlSGFuZGxlcnNbal0uY2FsbChudWxsLCBkYXRhKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmhtckRbbW9kdWxlSWRdID0gZGF0YTtcblxuXHRcdFx0XHQvLyBkaXNhYmxlIG1vZHVsZSAodGhpcyBkaXNhYmxlcyByZXF1aXJlcyBmcm9tIHRoaXMgbW9kdWxlKVxuXHRcdFx0XHRtb2R1bGUuaG90LmFjdGl2ZSA9IGZhbHNlO1xuXG5cdFx0XHRcdC8vIHJlbW92ZSBtb2R1bGUgZnJvbSBjYWNoZVxuXHRcdFx0XHRkZWxldGUgX193ZWJwYWNrX3JlcXVpcmVfXy5jW21vZHVsZUlkXTtcblxuXHRcdFx0XHQvLyB3aGVuIGRpc3Bvc2luZyB0aGVyZSBpcyBubyBuZWVkIHRvIGNhbGwgZGlzcG9zZSBoYW5kbGVyXG5cdFx0XHRcdGRlbGV0ZSBvdXRkYXRlZERlcGVuZGVuY2llc1ttb2R1bGVJZF07XG5cblx0XHRcdFx0Ly8gcmVtb3ZlIFwicGFyZW50c1wiIHJlZmVyZW5jZXMgZnJvbSBhbGwgY2hpbGRyZW5cblx0XHRcdFx0Zm9yIChqID0gMDsgaiA8IG1vZHVsZS5jaGlsZHJlbi5sZW5ndGg7IGorKykge1xuXHRcdFx0XHRcdHZhciBjaGlsZCA9IF9fd2VicGFja19yZXF1aXJlX18uY1ttb2R1bGUuY2hpbGRyZW5bal1dO1xuXHRcdFx0XHRcdGlmICghY2hpbGQpIGNvbnRpbnVlO1xuXHRcdFx0XHRcdGlkeCA9IGNoaWxkLnBhcmVudHMuaW5kZXhPZihtb2R1bGVJZCk7XG5cdFx0XHRcdFx0aWYgKGlkeCA+PSAwKSB7XG5cdFx0XHRcdFx0XHRjaGlsZC5wYXJlbnRzLnNwbGljZShpZHgsIDEpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0XHQvLyByZW1vdmUgb3V0ZGF0ZWQgZGVwZW5kZW5jeSBmcm9tIG1vZHVsZSBjaGlsZHJlblxuXHRcdFx0dmFyIGRlcGVuZGVuY3k7XG5cdFx0XHRmb3IgKHZhciBvdXRkYXRlZE1vZHVsZUlkIGluIG91dGRhdGVkRGVwZW5kZW5jaWVzKSB7XG5cdFx0XHRcdGlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLm8ob3V0ZGF0ZWREZXBlbmRlbmNpZXMsIG91dGRhdGVkTW9kdWxlSWQpKSB7XG5cdFx0XHRcdFx0bW9kdWxlID0gX193ZWJwYWNrX3JlcXVpcmVfXy5jW291dGRhdGVkTW9kdWxlSWRdO1xuXHRcdFx0XHRcdGlmIChtb2R1bGUpIHtcblx0XHRcdFx0XHRcdG1vZHVsZU91dGRhdGVkRGVwZW5kZW5jaWVzID1cblx0XHRcdFx0XHRcdFx0b3V0ZGF0ZWREZXBlbmRlbmNpZXNbb3V0ZGF0ZWRNb2R1bGVJZF07XG5cdFx0XHRcdFx0XHRmb3IgKGogPSAwOyBqIDwgbW9kdWxlT3V0ZGF0ZWREZXBlbmRlbmNpZXMubGVuZ3RoOyBqKyspIHtcblx0XHRcdFx0XHRcdFx0ZGVwZW5kZW5jeSA9IG1vZHVsZU91dGRhdGVkRGVwZW5kZW5jaWVzW2pdO1xuXHRcdFx0XHRcdFx0XHRpZHggPSBtb2R1bGUuY2hpbGRyZW4uaW5kZXhPZihkZXBlbmRlbmN5KTtcblx0XHRcdFx0XHRcdFx0aWYgKGlkeCA+PSAwKSBtb2R1bGUuY2hpbGRyZW4uc3BsaWNlKGlkeCwgMSk7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fSxcblx0XHRhcHBseTogZnVuY3Rpb24gKHJlcG9ydEVycm9yKSB7XG5cdFx0XHQvLyBpbnNlcnQgbmV3IGNvZGVcblx0XHRcdGZvciAodmFyIHVwZGF0ZU1vZHVsZUlkIGluIGFwcGxpZWRVcGRhdGUpIHtcblx0XHRcdFx0aWYgKF9fd2VicGFja19yZXF1aXJlX18ubyhhcHBsaWVkVXBkYXRlLCB1cGRhdGVNb2R1bGVJZCkpIHtcblx0XHRcdFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLm1bdXBkYXRlTW9kdWxlSWRdID0gYXBwbGllZFVwZGF0ZVt1cGRhdGVNb2R1bGVJZF07XG5cdFx0XHRcdH1cblx0XHRcdH1cblxuXHRcdFx0Ly8gcnVuIG5ldyBydW50aW1lIG1vZHVsZXNcblx0XHRcdGZvciAodmFyIGkgPSAwOyBpIDwgY3VycmVudFVwZGF0ZVJ1bnRpbWUubGVuZ3RoOyBpKyspIHtcblx0XHRcdFx0Y3VycmVudFVwZGF0ZVJ1bnRpbWVbaV0oX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cdFx0XHR9XG5cblx0XHRcdC8vIGNhbGwgYWNjZXB0IGhhbmRsZXJzXG5cdFx0XHRmb3IgKHZhciBvdXRkYXRlZE1vZHVsZUlkIGluIG91dGRhdGVkRGVwZW5kZW5jaWVzKSB7XG5cdFx0XHRcdGlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLm8ob3V0ZGF0ZWREZXBlbmRlbmNpZXMsIG91dGRhdGVkTW9kdWxlSWQpKSB7XG5cdFx0XHRcdFx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19yZXF1aXJlX18uY1tvdXRkYXRlZE1vZHVsZUlkXTtcblx0XHRcdFx0XHRpZiAobW9kdWxlKSB7XG5cdFx0XHRcdFx0XHRtb2R1bGVPdXRkYXRlZERlcGVuZGVuY2llcyA9XG5cdFx0XHRcdFx0XHRcdG91dGRhdGVkRGVwZW5kZW5jaWVzW291dGRhdGVkTW9kdWxlSWRdO1xuXHRcdFx0XHRcdFx0dmFyIGNhbGxiYWNrcyA9IFtdO1xuXHRcdFx0XHRcdFx0dmFyIGVycm9ySGFuZGxlcnMgPSBbXTtcblx0XHRcdFx0XHRcdHZhciBkZXBlbmRlbmNpZXNGb3JDYWxsYmFja3MgPSBbXTtcblx0XHRcdFx0XHRcdGZvciAodmFyIGogPSAwOyBqIDwgbW9kdWxlT3V0ZGF0ZWREZXBlbmRlbmNpZXMubGVuZ3RoOyBqKyspIHtcblx0XHRcdFx0XHRcdFx0dmFyIGRlcGVuZGVuY3kgPSBtb2R1bGVPdXRkYXRlZERlcGVuZGVuY2llc1tqXTtcblx0XHRcdFx0XHRcdFx0dmFyIGFjY2VwdENhbGxiYWNrID1cblx0XHRcdFx0XHRcdFx0XHRtb2R1bGUuaG90Ll9hY2NlcHRlZERlcGVuZGVuY2llc1tkZXBlbmRlbmN5XTtcblx0XHRcdFx0XHRcdFx0dmFyIGVycm9ySGFuZGxlciA9XG5cdFx0XHRcdFx0XHRcdFx0bW9kdWxlLmhvdC5fYWNjZXB0ZWRFcnJvckhhbmRsZXJzW2RlcGVuZGVuY3ldO1xuXHRcdFx0XHRcdFx0XHRpZiAoYWNjZXB0Q2FsbGJhY2spIHtcblx0XHRcdFx0XHRcdFx0XHRpZiAoY2FsbGJhY2tzLmluZGV4T2YoYWNjZXB0Q2FsbGJhY2spICE9PSAtMSkgY29udGludWU7XG5cdFx0XHRcdFx0XHRcdFx0Y2FsbGJhY2tzLnB1c2goYWNjZXB0Q2FsbGJhY2spO1xuXHRcdFx0XHRcdFx0XHRcdGVycm9ySGFuZGxlcnMucHVzaChlcnJvckhhbmRsZXIpO1xuXHRcdFx0XHRcdFx0XHRcdGRlcGVuZGVuY2llc0ZvckNhbGxiYWNrcy5wdXNoKGRlcGVuZGVuY3kpO1xuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRmb3IgKHZhciBrID0gMDsgayA8IGNhbGxiYWNrcy5sZW5ndGg7IGsrKykge1xuXHRcdFx0XHRcdFx0XHR0cnkge1xuXHRcdFx0XHRcdFx0XHRcdGNhbGxiYWNrc1trXS5jYWxsKG51bGwsIG1vZHVsZU91dGRhdGVkRGVwZW5kZW5jaWVzKTtcblx0XHRcdFx0XHRcdFx0fSBjYXRjaCAoZXJyKSB7XG5cdFx0XHRcdFx0XHRcdFx0aWYgKHR5cGVvZiBlcnJvckhhbmRsZXJzW2tdID09PSBcImZ1bmN0aW9uXCIpIHtcblx0XHRcdFx0XHRcdFx0XHRcdHRyeSB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdGVycm9ySGFuZGxlcnNba10oZXJyLCB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0bW9kdWxlSWQ6IG91dGRhdGVkTW9kdWxlSWQsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0ZGVwZW5kZW5jeUlkOiBkZXBlbmRlbmNpZXNGb3JDYWxsYmFja3Nba11cblx0XHRcdFx0XHRcdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0XHRcdFx0XHR9IGNhdGNoIChlcnIyKSB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdGlmIChvcHRpb25zLm9uRXJyb3JlZCkge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdG9wdGlvbnMub25FcnJvcmVkKHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHR5cGU6IFwiYWNjZXB0LWVycm9yLWhhbmRsZXItZXJyb3JlZFwiLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0bW9kdWxlSWQ6IG91dGRhdGVkTW9kdWxlSWQsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRkZXBlbmRlbmN5SWQ6IGRlcGVuZGVuY2llc0ZvckNhbGxiYWNrc1trXSxcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGVycm9yOiBlcnIyLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0b3JpZ2luYWxFcnJvcjogZXJyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0XHRcdFx0aWYgKCFvcHRpb25zLmlnbm9yZUVycm9yZWQpIHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRyZXBvcnRFcnJvcihlcnIyKTtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRyZXBvcnRFcnJvcihlcnIpO1xuXHRcdFx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdFx0XHRcdGlmIChvcHRpb25zLm9uRXJyb3JlZCkge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRvcHRpb25zLm9uRXJyb3JlZCh7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0dHlwZTogXCJhY2NlcHQtZXJyb3JlZFwiLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdG1vZHVsZUlkOiBvdXRkYXRlZE1vZHVsZUlkLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGRlcGVuZGVuY3lJZDogZGVwZW5kZW5jaWVzRm9yQ2FsbGJhY2tzW2tdLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGVycm9yOiBlcnJcblx0XHRcdFx0XHRcdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdFx0XHRpZiAoIW9wdGlvbnMuaWdub3JlRXJyb3JlZCkge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRyZXBvcnRFcnJvcihlcnIpO1xuXHRcdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0XHQvLyBMb2FkIHNlbGYgYWNjZXB0ZWQgbW9kdWxlc1xuXHRcdFx0Zm9yICh2YXIgbyA9IDA7IG8gPCBvdXRkYXRlZFNlbGZBY2NlcHRlZE1vZHVsZXMubGVuZ3RoOyBvKyspIHtcblx0XHRcdFx0dmFyIGl0ZW0gPSBvdXRkYXRlZFNlbGZBY2NlcHRlZE1vZHVsZXNbb107XG5cdFx0XHRcdHZhciBtb2R1bGVJZCA9IGl0ZW0ubW9kdWxlO1xuXHRcdFx0XHR0cnkge1xuXHRcdFx0XHRcdGl0ZW0ucmVxdWlyZShtb2R1bGVJZCk7XG5cdFx0XHRcdH0gY2F0Y2ggKGVycikge1xuXHRcdFx0XHRcdGlmICh0eXBlb2YgaXRlbS5lcnJvckhhbmRsZXIgPT09IFwiZnVuY3Rpb25cIikge1xuXHRcdFx0XHRcdFx0dHJ5IHtcblx0XHRcdFx0XHRcdFx0aXRlbS5lcnJvckhhbmRsZXIoZXJyLCB7XG5cdFx0XHRcdFx0XHRcdFx0bW9kdWxlSWQ6IG1vZHVsZUlkLFxuXHRcdFx0XHRcdFx0XHRcdG1vZHVsZTogX193ZWJwYWNrX3JlcXVpcmVfXy5jW21vZHVsZUlkXVxuXHRcdFx0XHRcdFx0XHR9KTtcblx0XHRcdFx0XHRcdH0gY2F0Y2ggKGVycjIpIHtcblx0XHRcdFx0XHRcdFx0aWYgKG9wdGlvbnMub25FcnJvcmVkKSB7XG5cdFx0XHRcdFx0XHRcdFx0b3B0aW9ucy5vbkVycm9yZWQoe1xuXHRcdFx0XHRcdFx0XHRcdFx0dHlwZTogXCJzZWxmLWFjY2VwdC1lcnJvci1oYW5kbGVyLWVycm9yZWRcIixcblx0XHRcdFx0XHRcdFx0XHRcdG1vZHVsZUlkOiBtb2R1bGVJZCxcblx0XHRcdFx0XHRcdFx0XHRcdGVycm9yOiBlcnIyLFxuXHRcdFx0XHRcdFx0XHRcdFx0b3JpZ2luYWxFcnJvcjogZXJyXG5cdFx0XHRcdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0aWYgKCFvcHRpb25zLmlnbm9yZUVycm9yZWQpIHtcblx0XHRcdFx0XHRcdFx0XHRyZXBvcnRFcnJvcihlcnIyKTtcblx0XHRcdFx0XHRcdFx0XHRyZXBvcnRFcnJvcihlcnIpO1xuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdGlmIChvcHRpb25zLm9uRXJyb3JlZCkge1xuXHRcdFx0XHRcdFx0XHRvcHRpb25zLm9uRXJyb3JlZCh7XG5cdFx0XHRcdFx0XHRcdFx0dHlwZTogXCJzZWxmLWFjY2VwdC1lcnJvcmVkXCIsXG5cdFx0XHRcdFx0XHRcdFx0bW9kdWxlSWQ6IG1vZHVsZUlkLFxuXHRcdFx0XHRcdFx0XHRcdGVycm9yOiBlcnJcblx0XHRcdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRpZiAoIW9wdGlvbnMuaWdub3JlRXJyb3JlZCkge1xuXHRcdFx0XHRcdFx0XHRyZXBvcnRFcnJvcihlcnIpO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0XHRyZXR1cm4gb3V0ZGF0ZWRNb2R1bGVzO1xuXHRcdH1cblx0fTtcbn1cbl9fd2VicGFja19yZXF1aXJlX18uaG1ySS5qc29ucCA9IGZ1bmN0aW9uIChtb2R1bGVJZCwgYXBwbHlIYW5kbGVycykge1xuXHRpZiAoIWN1cnJlbnRVcGRhdGUpIHtcblx0XHRjdXJyZW50VXBkYXRlID0ge307XG5cdFx0Y3VycmVudFVwZGF0ZVJ1bnRpbWUgPSBbXTtcblx0XHRjdXJyZW50VXBkYXRlUmVtb3ZlZENodW5rcyA9IFtdO1xuXHRcdGFwcGx5SGFuZGxlcnMucHVzaChhcHBseUhhbmRsZXIpO1xuXHR9XG5cdGlmICghX193ZWJwYWNrX3JlcXVpcmVfXy5vKGN1cnJlbnRVcGRhdGUsIG1vZHVsZUlkKSkge1xuXHRcdGN1cnJlbnRVcGRhdGVbbW9kdWxlSWRdID0gX193ZWJwYWNrX3JlcXVpcmVfXy5tW21vZHVsZUlkXTtcblx0fVxufTtcbl9fd2VicGFja19yZXF1aXJlX18uaG1yQy5qc29ucCA9IGZ1bmN0aW9uIChcblx0Y2h1bmtJZHMsXG5cdHJlbW92ZWRDaHVua3MsXG5cdHJlbW92ZWRNb2R1bGVzLFxuXHRwcm9taXNlcyxcblx0YXBwbHlIYW5kbGVycyxcblx0dXBkYXRlZE1vZHVsZXNMaXN0XG4pIHtcblx0YXBwbHlIYW5kbGVycy5wdXNoKGFwcGx5SGFuZGxlcik7XG5cdGN1cnJlbnRVcGRhdGVDaHVua3MgPSB7fTtcblx0Y3VycmVudFVwZGF0ZVJlbW92ZWRDaHVua3MgPSByZW1vdmVkQ2h1bmtzO1xuXHRjdXJyZW50VXBkYXRlID0gcmVtb3ZlZE1vZHVsZXMucmVkdWNlKGZ1bmN0aW9uIChvYmosIGtleSkge1xuXHRcdG9ialtrZXldID0gZmFsc2U7XG5cdFx0cmV0dXJuIG9iajtcblx0fSwge30pO1xuXHRjdXJyZW50VXBkYXRlUnVudGltZSA9IFtdO1xuXHRjaHVua0lkcy5mb3JFYWNoKGZ1bmN0aW9uIChjaHVua0lkKSB7XG5cdFx0aWYgKFxuXHRcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vKGluc3RhbGxlZENodW5rcywgY2h1bmtJZCkgJiZcblx0XHRcdGluc3RhbGxlZENodW5rc1tjaHVua0lkXSAhPT0gdW5kZWZpbmVkXG5cdFx0KSB7XG5cdFx0XHRwcm9taXNlcy5wdXNoKGxvYWRVcGRhdGVDaHVuayhjaHVua0lkLCB1cGRhdGVkTW9kdWxlc0xpc3QpKTtcblx0XHRcdGN1cnJlbnRVcGRhdGVDaHVua3NbY2h1bmtJZF0gPSB0cnVlO1xuXHRcdH1cblx0fSk7XG5cdGlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmYpIHtcblx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmYuanNvbnBIbXIgPSBmdW5jdGlvbiAoY2h1bmtJZCwgcHJvbWlzZXMpIHtcblx0XHRcdGlmIChcblx0XHRcdFx0Y3VycmVudFVwZGF0ZUNodW5rcyAmJlxuXHRcdFx0XHQhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGN1cnJlbnRVcGRhdGVDaHVua3MsIGNodW5rSWQpICYmXG5cdFx0XHRcdF9fd2VicGFja19yZXF1aXJlX18ubyhpbnN0YWxsZWRDaHVua3MsIGNodW5rSWQpICYmXG5cdFx0XHRcdGluc3RhbGxlZENodW5rc1tjaHVua0lkXSAhPT0gdW5kZWZpbmVkXG5cdFx0XHQpIHtcblx0XHRcdFx0cHJvbWlzZXMucHVzaChsb2FkVXBkYXRlQ2h1bmsoY2h1bmtJZCkpO1xuXHRcdFx0XHRjdXJyZW50VXBkYXRlQ2h1bmtzW2NodW5rSWRdID0gdHJ1ZTtcblx0XHRcdH1cblx0XHR9O1xuXHR9XG59O1xuXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmhtck0gPSAoKSA9PiB7XG5cdGlmICh0eXBlb2YgZmV0Y2ggPT09IFwidW5kZWZpbmVkXCIpIHRocm93IG5ldyBFcnJvcihcIk5vIGJyb3dzZXIgc3VwcG9ydDogbmVlZCBmZXRjaCBBUElcIik7XG5cdHJldHVybiBmZXRjaChfX3dlYnBhY2tfcmVxdWlyZV9fLnAgKyBfX3dlYnBhY2tfcmVxdWlyZV9fLmhtckYoKSkudGhlbigocmVzcG9uc2UpID0+IHtcblx0XHRpZihyZXNwb25zZS5zdGF0dXMgPT09IDQwNCkgcmV0dXJuOyAvLyBubyB1cGRhdGUgYXZhaWxhYmxlXG5cdFx0aWYoIXJlc3BvbnNlLm9rKSB0aHJvdyBuZXcgRXJyb3IoXCJGYWlsZWQgdG8gZmV0Y2ggdXBkYXRlIG1hbmlmZXN0IFwiICsgcmVzcG9uc2Uuc3RhdHVzVGV4dCk7XG5cdFx0cmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcblx0fSk7XG59O1xuXG5fX3dlYnBhY2tfcmVxdWlyZV9fLk8uaiA9IChjaHVua0lkKSA9PiAoaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdID09PSAwKTtcblxuLy8gaW5zdGFsbCBhIEpTT05QIGNhbGxiYWNrIGZvciBjaHVuayBsb2FkaW5nXG52YXIgd2VicGFja0pzb25wQ2FsbGJhY2sgPSAocGFyZW50Q2h1bmtMb2FkaW5nRnVuY3Rpb24sIGRhdGEpID0+IHtcblx0dmFyIFtjaHVua0lkcywgbW9yZU1vZHVsZXMsIHJ1bnRpbWVdID0gZGF0YTtcblx0Ly8gYWRkIFwibW9yZU1vZHVsZXNcIiB0byB0aGUgbW9kdWxlcyBvYmplY3QsXG5cdC8vIHRoZW4gZmxhZyBhbGwgXCJjaHVua0lkc1wiIGFzIGxvYWRlZCBhbmQgZmlyZSBjYWxsYmFja1xuXHR2YXIgbW9kdWxlSWQsIGNodW5rSWQsIGkgPSAwO1xuXHRpZihjaHVua0lkcy5zb21lKChpZCkgPT4gKGluc3RhbGxlZENodW5rc1tpZF0gIT09IDApKSkge1xuXHRcdGZvcihtb2R1bGVJZCBpbiBtb3JlTW9kdWxlcykge1xuXHRcdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKG1vcmVNb2R1bGVzLCBtb2R1bGVJZCkpIHtcblx0XHRcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tW21vZHVsZUlkXSA9IG1vcmVNb2R1bGVzW21vZHVsZUlkXTtcblx0XHRcdH1cblx0XHR9XG5cdFx0aWYocnVudGltZSkgdmFyIHJlc3VsdCA9IHJ1bnRpbWUoX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cdH1cblx0aWYocGFyZW50Q2h1bmtMb2FkaW5nRnVuY3Rpb24pIHBhcmVudENodW5rTG9hZGluZ0Z1bmN0aW9uKGRhdGEpO1xuXHRmb3IoO2kgPCBjaHVua0lkcy5sZW5ndGg7IGkrKykge1xuXHRcdGNodW5rSWQgPSBjaHVua0lkc1tpXTtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oaW5zdGFsbGVkQ2h1bmtzLCBjaHVua0lkKSAmJiBpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0pIHtcblx0XHRcdGluc3RhbGxlZENodW5rc1tjaHVua0lkXVswXSgpO1xuXHRcdH1cblx0XHRpbnN0YWxsZWRDaHVua3NbY2h1bmtJZHNbaV1dID0gMDtcblx0fVxuXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXy5PKHJlc3VsdCk7XG59XG5cbnZhciBjaHVua0xvYWRpbmdHbG9iYWwgPSBzZWxmW1wid2VicGFja0NodW5rd2VicGFja1wiXSA9IHNlbGZbXCJ3ZWJwYWNrQ2h1bmt3ZWJwYWNrXCJdIHx8IFtdO1xuY2h1bmtMb2FkaW5nR2xvYmFsLmZvckVhY2god2VicGFja0pzb25wQ2FsbGJhY2suYmluZChudWxsLCAwKSk7XG5jaHVua0xvYWRpbmdHbG9iYWwucHVzaCA9IHdlYnBhY2tKc29ucENhbGxiYWNrLmJpbmQobnVsbCwgY2h1bmtMb2FkaW5nR2xvYmFsLnB1c2guYmluZChjaHVua0xvYWRpbmdHbG9iYWwpKTsiLCIiLCIvLyBtb2R1bGUgY2FjaGUgYXJlIHVzZWQgc28gZW50cnkgaW5saW5pbmcgaXMgZGlzYWJsZWRcbi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xudmFyIF9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fLk8odW5kZWZpbmVkLCBbXCJ2ZW5kb3JzLW5vZGVfbW9kdWxlc19iYWJlbF9ydW50aW1lX3JlZ2VuZXJhdG9yX2luZGV4X2pzLW5vZGVfbW9kdWxlc19yZWR1eC1kZXZ0b29sc19leHRlbnNpb24tZWI4NTgwXCJdLCAoKSA9PiAoX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL2luZGV4LmpzXCIpKSlcbl9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fLk8oX193ZWJwYWNrX2V4cG9ydHNfXyk7XG4iLCIiXSwibmFtZXMiOlsiUmVhY3QiLCJTdXNwZW5zZSIsInVzZUVmZmVjdCIsIlJvdXRlIiwiUm91dGVzIiwidXNlTmF2aWdhdGUiLCJ1c2VEaXNwYXRjaCIsImF1dGgiLCJOb3RGb3VuZCIsIk1haW5QYWdlIiwiTGF5b3V0IiwiU3Bpbm5lciIsIlByaXZhdGVBdXRoIiwiUHJvZmlsZUNvbnRlbnQiLCJsYXp5IiwiUGhvdG9QYWdlIiwiQXBwIiwibmF2aWdhdGUiLCJkaXNwYXRjaCIsImFjY2Vzc1Rva2VuIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsInVybFNlYXJjaFBhcmFtcyIsIlVSTFNlYXJjaFBhcmFtcyIsIndpbmRvdyIsImxvY2F0aW9uIiwic2VhcmNoIiwicGFyYW1zIiwiT2JqZWN0IiwiZnJvbUVudHJpZXMiLCJlbnRyaWVzIiwiY29kZSIsInRvU3RyaW5nIiwiaGlzdG9yeSIsInB1c2hTdGF0ZSIsImRvY3VtZW50IiwidGl0bGUiLCJwYXRobmFtZSIsInN0eWxlcyIsImxvZ28iLCJGb290ZXIiLCJ5ZWFyIiwiRGF0ZSIsImdldEZ1bGxZZWFyIiwiZm9vdGVyIiwiY29udGFpbmVyIiwiZm9vdGVyVG9wIiwiY29udGFjdHMiLCJjb250YWN0c0xpc3QiLCJsaXN0SXRlbVRlbCIsImxpc3RJdGVtTWFpbCIsInNvY2lhbCIsImluU29jaWFsVGV4dCIsInNvY2lhbExpc3QiLCJzb2NpYWxMb3N0SXRlbSIsImxpbmsiLCJ2ayIsImpvaW4iLCJnb29nbGUiLCJvayIsImZvb3RlckJvdHRvbSIsImZvb3RlckNvcHkiLCJMb2NhdGlvbiIsIlNpZ25JbiIsIlByb2ZpbGUiLCJ1c2VTZWxlY3RvciIsIkxpbmsiLCJIZWFkZXIiLCJpc0F1dGgiLCJzdGF0ZSIsImhlYWRlciIsImxpc3QiLCJtYWluIiwibG9jYXRpb25JY29uIiwiY2l0eVRleHQiLCJ1bnNwbGFzaEF1dGhMaW5rIiwiU2lnbmluIiwibG9naW4iLCJsb2dpbkljb24iLCJsb2dpblNpZ25pbiIsIk91dGxldCIsInVzZVJlZiIsInVzZVN0YXRlIiwibG9nb3V0IiwidXNlciIsImN1cnJlbnRVc2VyIiwiaXNQcm9maWxlQnRuc1Nob3ciLCJzZXRQcm9maWxlQnRuc1Nob3ciLCJ1c2VyUHJvZmlsZVJlZiIsImhhbmRsZUNsaWNrT3V0c2lkZSIsImV2ZW50IiwiY3VycmVudCIsImNvbnRhaW5zIiwidGFyZ2V0IiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJzaG93RXhpdEJ0biIsImdvVG9Qcm9maWxlIiwiZSIsInN0b3BQcm9wYWdhdGlvbiIsImdvT3V0IiwidXNlclByb2ZpbGUiLCJ1c2VyQmFzZUluZm8iLCJmaXJzdF9uYW1lIiwicHJvZmlsZUltYWdlIiwicHJvZmlsZV9pbWFnZSIsInNtYWxsIiwicHJvZmlsZUJ0bnMiLCJwcm9maWxlQnRuIiwibG9nb3V0QnRuIiwibG9hZGVyIiwibG9hZGVyMiIsImxvYWRlclN0YXIiLCJsb2FkZXJDaXJjbGVzIiwicHJlbG9hZEFzQmxvYiIsInVybCIsIlByb21pc2UiLCJyZXNvbHZlIiwiZmV0Y2giLCJyZXNwb25zZSIsImJsb2IiLCJyZWFkZXIiLCJGaWxlUmVhZGVyIiwicmVhZEFzRGF0YVVSTCIsInByb21pc2UiLCJvbmxvYWQiLCJyZXN1bHQiLCJOYXZpZ2F0ZSIsImNoaWxkcmVuIiwicmVuZGVyIiwiSGFzaFJvdXRlciIsIlByb3ZpZGVyIiwic3RvcmUiLCJnZXRFbGVtZW50QnlJZCIsImRldk1vZGUiLCJwcm9jZXNzIiwiZW52IiwiTk9ERV9FTlYiLCJtb2R1bGUiLCJob3QiLCJhY2NlcHQiLCJTd2lwZXJDb3JlIiwiQTExeSIsIk5hdmlnYXRpb24iLCJQYWdpbmF0aW9uIiwiU3dpcGVyIiwiU3dpcGVyU2xpZGUiLCJnZXRMb2NhdGlvbiIsImdldFBob3RvcyIsInVzZSIsInBob3RvcyIsImNvbnRlbnQiLCJzbGljZSIsImlzTG9hZGluZyIsInBob3Rvc0NvbnRhaW5lciIsImhlaWdodCIsIm1haW5Db250YWluZXIiLCJjbGlja2FibGUiLCJkeW5hbWljQnVsbGV0cyIsImR5bmFtaWNNYWluQnVsbGV0cyIsIm1hcCIsImVsIiwidXJscyIsImZ1bGwiLCJtYWluVGl0bGUiLCJpZCIsImFib3V0Q29udGFpbmVyIiwiYWJvdXQiLCJhYm91dFRpdGxlIiwiYWJvdXRUaXRsZVRleHQiLCJkb3NtdGgiLCJkb3NtdGhUaXRsZSIsImRvc210aExpc3QiLCJkb3NtdGhJdGVtIiwidW5zcGxhc2hMaW5rIiwibG9va1Bob3RvIiwibG9va1Bob3RvVGV4dCIsImxvb2tQaG90b0J1dHRvbiIsInNldFVzZXIiLCJheGlvcyIsImRvdGVudiIsImNvbmZpZyIsInByb2R1Y3Rpb24iLCJvYXV0aFVybCIsImNsaWVudF9pZCIsIlJFQUNUX0FQUF9DTElFTlRfSUQiLCJjbGllbnRfc2VjcmV0IiwiUkVBQ1RfQVBQX0NMSUVOVF9TRUNSRVQiLCJyZWRpcmVjdF91cmkiLCJncmFudF90eXBlIiwic2NvcGUiLCJyZXNwb25zZV90eXBlIiwiZ2V0IiwiaGVhZGVycyIsIkF1dGhvcml6YXRpb24iLCJ0aGVuIiwicmVzIiwiZGF0YSIsInJlbW92ZUl0ZW0iLCJjb25zb2xlIiwibG9nIiwiY29kZVNlYXJjaFBhcmFtIiwiY2JhY2siLCJwb3N0Iiwic2V0SXRlbSIsImFjY2Vzc190b2tlbiIsInNldExvY2F0aW9uIiwiY2l0eSIsInNldEN1cnJlbnRQaG90byIsInNldE9yRGVsZXRlTGlrZSIsInNldFBob3RvcyIsInNldElzTG9hZGluZyIsInNldE9yRGVsZXRlTGlrZUJ5VXNlciIsInBob3RvIiwibGlrZWRfYnlfdXNlciIsImdldEN1cnJlbnRQaG90byIsImN1cnJlbnRQaG90byIsImN1cnJlbnRQYWdlIiwiYXN5bmNBcnJheSIsImltYWdlIiwiSW1hZ2UiLCJzcmMiLCJhbGwiLCJmbiIsImluZGV4IiwiTE9HSU4iLCJMT0dPVVQiLCJJU19MT0FESU5HIiwiZGVmYXVsdFN0YXRlIiwiYWN0aW9uIiwidHlwZSIsInBheWxvYWQiLCJib29sIiwiYXBwbHlNaWRkbGV3YXJlIiwiY29tYmluZVJlZHVjZXJzIiwiY3JlYXRlU3RvcmUiLCJjb21wb3NlV2l0aERldlRvb2xzIiwidGh1bmsiLCJyb290UmVkdWNlciIsIkdFVF9QSE9UT1MiLCJHRVRfTE9DQVRJT04iLCJTRVRfQ09OVEVOVCIsIlNFVF9PUl9ERUxFVEVfTElLRSIsIlNFVF9DVVJSRU5UX1BIT1RPIiwicGhvdG9Ub3RhbENvdW50Iiwic2V0TGlrZUNsYXNzTmFtZSIsInJlZHVjZSIsInByZXZFbCIsIm5leHRFbCIsImZpbmQiLCJpdGVtIiwicHVzaCJdLCJzb3VyY2VSb290IjoiIn0=