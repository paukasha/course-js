/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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
        path: "/",
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




var production = "development" === 'production';
var oauthUrl = 'https://unsplash.com/oauth/token',
    client_id = 'avGYLy8xj-R8I3tiRSkeVZvRV0R39Ws34mZod3qn3Zo',
    client_secret = '5mvRrbXVYQDCpa7fYclguxWgFypVpz5ByKxI4CMAHoA',
    redirect_uri = production ? 'http://c914428q.beget.tech/' : 'http://localhost:3001/',
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

/***/ "data:application/font-woff;charset=utf-8;base64, d09GRgABAAAAAAZgABAAAAAADAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABGRlRNAAAGRAAAABoAAAAci6qHkUdERUYAAAWgAAAAIwAAACQAYABXR1BPUwAABhQAAAAuAAAANuAY7+xHU1VCAAAFxAAAAFAAAABm2fPczU9TLzIAAAHcAAAASgAAAGBP9V5RY21hcAAAAkQAAACIAAABYt6F0cBjdnQgAAACzAAAAAQAAAAEABEBRGdhc3AAAAWYAAAACAAAAAj//wADZ2x5ZgAAAywAAADMAAAD2MHtryVoZWFkAAABbAAAADAAAAA2E2+eoWhoZWEAAAGcAAAAHwAAACQC9gDzaG10eAAAAigAAAAZAAAArgJkABFsb2NhAAAC0AAAAFoAAABaFQAUGG1heHAAAAG8AAAAHwAAACAAcABAbmFtZQAAA/gAAAE5AAACXvFdBwlwb3N0AAAFNAAAAGIAAACE5s74hXjaY2BkYGAAYpf5Hu/j+W2+MnAzMYDAzaX6QjD6/4//Bxj5GA8AuRwMYGkAPywL13jaY2BkYGA88P8Agx4j+/8fQDYfA1AEBWgDAIB2BOoAeNpjYGRgYNBh4GdgYgABEMnIABJzYNADCQAACWgAsQB42mNgYfzCOIGBlYGB0YcxjYGBwR1Kf2WQZGhhYGBiYGVmgAFGBiQQkOaawtDAoMBQxXjg/wEGPcYDDA4wNUA2CCgwsAAAO4EL6gAAeNpj2M0gyAACqxgGNWBkZ2D4/wMA+xkDdgAAAHjaY2BgYGaAYBkGRgYQiAHyGMF8FgYHIM3DwMHABGQrMOgyWDLEM1T9/w8UBfEMgLzE////P/5//f/V/xv+r4eaAAeMbAxwIUYmIMHEgKYAYjUcsDAwsLKxc3BycfPw8jEQA/gZBASFhEVExcQlJKWkZWTl5BUUlZRVVNXUNTQZBgMAAMR+E+gAEQFEAAAAKgAqACoANAA+AEgAUgBcAGYAcAB6AIQAjgCYAKIArAC2AMAAygDUAN4A6ADyAPwBBgEQARoBJAEuATgBQgFMAVYBYAFqAXQBfgGIAZIBnAGmAbIBzgHsAAB42u2NMQ6CUAyGW568x9AneYYgm4MJbhKFaExIOAVX8ApewSt4Bic4AfeAid3VOBixDxfPYEza5O+Xfi04YADggiUIULCuEJK8VhO4bSvpdnktHI5QCYtdi2sl8ZnXaHlqUrNKzdKcT8cjlq+rwZSvIVczNiezsfnP/uznmfPFBNODM2K7MTQ45YEAZqGP81AmGGcF3iPqOop0r1SPTaTbVkfUe4HXj97wYE+yNwWYxwWu4v1ugWHgo3S1XdZEVqWM7ET0cfnLGxWfkgR42o2PvWrDMBSFj/IHLaF0zKjRgdiVMwScNRAoWUoH78Y2icB/yIY09An6AH2Bdu/UB+yxopYshQiEvnvu0dURgDt8QeC8PDw7Fpji3fEA4z/PEJ6YOB5hKh4dj3EvXhxPqH/SKUY3rJ7srZ4FZnh1PMAtPhwP6fl2PMJMPDgeQ4rY8YT6Gzao0eAEA409DuggmTnFnOcSCiEiLMgxCiTI6Cq5DZUd3Qmp10vO0LaLTd2cjN4fOumlc7lUYbSQcZFkutRG7g6JKZKy0RmdLY680CDnEJ+UMkpFFe1RN7nxdVpXrC4aTtnaurOnYercZg2YVmLN/d/gczfEimrE/fs/bOuq29Zmn8tloORaXgZgGa78yO9/cnXm2BpaGvq25Dv9S4E9+5SIc9PqupJKhYFSSl47+Qcr1mYNAAAAeNptw0cKwkAAAMDZJA8Q7OUJvkLsPfZ6zFVERPy8qHh2YER+3i/BP83vIBLLySsoKimrqKqpa2hp6+jq6RsYGhmbmJqZSy0sraxtbO3sHRydnEMU4uR6yx7JJXveP7WrDycAAAAAAAH//wACeNpjYGRgYOABYhkgZgJCZgZNBkYGLQZtIJsFLMYAAAw3ALgAeNolizEKgDAQBCchRbC2sFER0YD6qVQiBCv/H9ezGI6Z5XBAw8CBK/m5iQQVauVbXLnOrMZv2oLdKFa8Pjuru2hJzGabmOSLzNMzvutpB3N42mNgZGBg4GKQYzBhYMxJLMlj4GBgAYow/P/PAJJhLM6sSoWKfWCAAwDAjgbRAAB42mNgYGBkAIIbCZo5IPrmUn0hGA0AO8EFTQAA":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** data:application/font-woff;charset=utf-8;base64, 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 ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module) => {

module.exports = "data:application/font-woff;charset=utf-8;base64, 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";

/***/ }),

/***/ "./src/assets/fonts/Montserrat-Regular.woff":
/*!**************************************************!*\
  !*** ./src/assets/fonts/Montserrat-Regular.woff ***!
  \**************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "3db65dc4b858f0fed4fb.woff";

/***/ }),

/***/ "./src/assets/images/arrow-list.png":
/*!******************************************!*\
  !*** ./src/assets/images/arrow-list.png ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "c181bd383cd77f46e95b.png";

/***/ }),

/***/ "./src/assets/images/logo-footer.png":
/*!*******************************************!*\
  !*** ./src/assets/images/logo-footer.png ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "15e405f7e1850543179c.png";

/***/ }),

/***/ "./src/assets/images/logo.png":
/*!************************************!*\
  !*** ./src/assets/images/logo.png ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "efe29ed19144da613f8d.png";

/***/ }),

/***/ "./src/assets/images/svg/down-arrow.svg":
/*!**********************************************!*\
  !*** ./src/assets/images/svg/down-arrow.svg ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "1b57139fae6e4e599092.svg";

/***/ }),

/***/ "./src/assets/images/svg/google.svg":
/*!******************************************!*\
  !*** ./src/assets/images/svg/google.svg ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "3a148532b2653a02b406.svg";

/***/ }),

/***/ "./src/assets/images/svg/mail.svg":
/*!****************************************!*\
  !*** ./src/assets/images/svg/mail.svg ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "a5184cbf4fcd53b83f3c.svg";

/***/ }),

/***/ "./src/assets/images/svg/ok-logo.svg":
/*!*******************************************!*\
  !*** ./src/assets/images/svg/ok-logo.svg ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "3328c2390f00abf6d278.svg";

/***/ }),

/***/ "./src/assets/images/svg/right-chevron.svg":
/*!*************************************************!*\
  !*** ./src/assets/images/svg/right-chevron.svg ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "ecabb2c86cf10d926492.svg";

/***/ }),

/***/ "./src/assets/images/svg/telephone.svg":
/*!*********************************************!*\
  !*** ./src/assets/images/svg/telephone.svg ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "65d125bfefe06ec71578.svg";

/***/ }),

/***/ "./src/assets/images/svg/vk.svg":
/*!**************************************!*\
  !*** ./src/assets/images/svg/vk.svg ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "e8bfb0d5698cab57752f.svg";

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
/******/ 		__webpack_require__.h = () => ("8069af2882b48f2d764b")
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
/******/ 		__webpack_require__.p = "/course-js/";
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
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["vendors-node_modules_babel_runtime_regenerator_index_js-node_modules_redux-devtools_extension-38ecdb"], () => (__webpack_require__("./src/index.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QTtXQUNBLEdBQUc7V0FDSDtXQUNBO1dBQ0EsR0FBRztXQUNIO1dBQ0E7V0FDQTtXQUNBLEdBQUc7V0FDSDtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLE1BQU07V0FDTjtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsTUFBTTtXQUNOO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsR0FBRzs7V0FFSDtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxHQUFHO1dBQ0g7V0FDQTtXQUNBLEdBQUc7V0FDSDtXQUNBO1dBQ0E7V0FDQSxHQUFHOztXQUVIO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7V0FFQTtXQUNBO1dBQ0E7O1dBRUEsaUJBQWlCLHFDQUFxQztXQUN0RDs7V0FFQTtXQUNBOztXQUVBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsSUFBSTtXQUNKO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsRUFBRTtXQUNGOztXQUVBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLE1BQU07V0FDTjtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsUUFBUTtXQUNSO1dBQ0E7V0FDQSxRQUFRO1dBQ1I7V0FDQSxNQUFNO1dBQ04sS0FBSztXQUNMLElBQUk7V0FDSixHQUFHO1dBQ0g7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQSxHQUFHO1dBQ0g7V0FDQTtXQUNBOztXQUVBO1dBQ0E7O1dBRUE7O1dBRUE7V0FDQTtXQUNB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QTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsRUFBRSxJQUFJO1dBQ047V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsRUFBRTtXQUNGO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7V0FDQTtXQUNBO1dBQ0Esc0NBQXNDO1dBQ3RDO1dBQ0E7V0FDQSxFQUFFO1dBQ0Y7O1dBRUE7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsTUFBTSxxQkFBcUI7V0FDM0I7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7V0FFQTtXQUNBO1dBQ0E7Ozs7O1VFNWpCQTtVQUNBO1VBQ0E7VUFDQTtVQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2VicGFjay8uL3NyYy9hcHAuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay8uL3NyYy9jb21wb25lbnRzL0Zvb3Rlci9Gb290ZXIuanN4Iiwid2VicGFjazovL3dlYnBhY2svLi9zcmMvY29tcG9uZW50cy9IZWFkZXIvSGVhZGVyLmpzeCIsIndlYnBhY2s6Ly93ZWJwYWNrLy4vc3JjL2NvbXBvbmVudHMvSGVhZGVyL0xvY2F0aW9uL0xvY2F0aW9uLmpzeCIsIndlYnBhY2s6Ly93ZWJwYWNrLy4vc3JjL2NvbXBvbmVudHMvSGVhZGVyL1NpZ25pbi9TaWduaW4uanN4Iiwid2VicGFjazovL3dlYnBhY2svLi9zcmMvY29tcG9uZW50cy9MYXlvdXQvTGF5b3V0LmpzeCIsIndlYnBhY2s6Ly93ZWJwYWNrLy4vc3JjL2NvbXBvbmVudHMvUHJvZmlsZS9Qcm9maWxlLmpzeCIsIndlYnBhY2s6Ly93ZWJwYWNrLy4vc3JjL2NvbXBvbmVudHMvU3Bpbm5lci9TcGlubmVyLmpzeCIsIndlYnBhY2s6Ly93ZWJwYWNrLy4vc3JjL2hlbHBlcnMvcHJlbG9hZEFzQmxvYi5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLy4vc3JjL2hvYy9Qcml2YXRlQXV0aC5qc3giLCJ3ZWJwYWNrOi8vd2VicGFjay8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLy4vc3JjL3BhZ2VzL01haW5QYWdlL01haW5QYWdlLmpzeCIsIndlYnBhY2s6Ly93ZWJwYWNrLy4vc3JjL3BhZ2VzL05vdEZvdW5kL05vdEZvdW5kLmpzeCIsIndlYnBhY2s6Ly93ZWJwYWNrLy4vc3JjL3JlZHV4L2FjdGlvbnMvYXV0aC5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLy4vc3JjL3JlZHV4L2FjdGlvbnMvbWFpbi5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLy4vc3JjL3JlZHV4L2FjdGlvbnMvcGhvdG9zLmpzIiwid2VicGFjazovL3dlYnBhY2svLi9zcmMvcmVkdXgvcmVkdWNlcnMvYXV0aC5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLy4vc3JjL3JlZHV4L3JlZHVjZXJzL2luZGV4LmpzIiwid2VicGFjazovL3dlYnBhY2svLi9zcmMvcmVkdXgvcmVkdWNlcnMvbWFpbi5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLy4vc3JjL3JlZHV4L3JlZHVjZXJzL3Bob3Rvcy5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLy4vc3JjL3N0eWxlcy5jc3MiLCJ3ZWJwYWNrOi8vd2VicGFjay8uL3NyYy9jb21wb25lbnRzL0Zvb3Rlci9mb290ZXIubS5jc3MiLCJ3ZWJwYWNrOi8vd2VicGFjay8uL3NyYy9jb21wb25lbnRzL0hlYWRlci9Mb2NhdGlvbi9sb2NhdGlvbi5tLmNzcyIsIndlYnBhY2s6Ly93ZWJwYWNrLy4vc3JjL2NvbXBvbmVudHMvSGVhZGVyL1NpZ25pbi9zaWduaW4ubS5jc3MiLCJ3ZWJwYWNrOi8vd2VicGFjay8uL3NyYy9jb21wb25lbnRzL0hlYWRlci9oZWFkZXIubS5jc3MiLCJ3ZWJwYWNrOi8vd2VicGFjay8uL3NyYy9jb21wb25lbnRzL1Byb2ZpbGUvcHJvZmlsZS5tLmNzcyIsIndlYnBhY2s6Ly93ZWJwYWNrLy4vc3JjL2NvbXBvbmVudHMvU3Bpbm5lci9zcGlubmVyLm0uY3NzIiwid2VicGFjazovL3dlYnBhY2svLi9zcmMvcGFnZXMvTWFpblBhZ2UvbWFpblBhZ2UubS5jc3MiLCJ3ZWJwYWNrOi8vd2VicGFjay8uL3NyYy9zdHlsZXMuY3NzPzQ0YjIiLCJ3ZWJwYWNrOi8vd2VicGFjay8uL3NyYy9jb21wb25lbnRzL0Zvb3Rlci9mb290ZXIubS5jc3M/NjRiYiIsIndlYnBhY2s6Ly93ZWJwYWNrLy4vc3JjL2NvbXBvbmVudHMvSGVhZGVyL0xvY2F0aW9uL2xvY2F0aW9uLm0uY3NzP2YzMjUiLCJ3ZWJwYWNrOi8vd2VicGFjay8uL3NyYy9jb21wb25lbnRzL0hlYWRlci9TaWduaW4vc2lnbmluLm0uY3NzP2JjMzgiLCJ3ZWJwYWNrOi8vd2VicGFjay8uL3NyYy9jb21wb25lbnRzL0hlYWRlci9oZWFkZXIubS5jc3M/ZTZlMyIsIndlYnBhY2s6Ly93ZWJwYWNrLy4vc3JjL2NvbXBvbmVudHMvUHJvZmlsZS9wcm9maWxlLm0uY3NzP2U2NDYiLCJ3ZWJwYWNrOi8vd2VicGFjay8uL3NyYy9jb21wb25lbnRzL1NwaW5uZXIvc3Bpbm5lci5tLmNzcz9lZjU0Iiwid2VicGFjazovL3dlYnBhY2svLi9zcmMvcGFnZXMvTWFpblBhZ2UvbWFpblBhZ2UubS5jc3M/MzMxZCIsIndlYnBhY2s6Ly93ZWJwYWNrL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3dlYnBhY2svd2VicGFjay9ydW50aW1lL2NodW5rIGxvYWRlZCIsIndlYnBhY2s6Ly93ZWJwYWNrL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3dlYnBhY2svd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3dlYnBhY2svd2VicGFjay9ydW50aW1lL2Vuc3VyZSBjaHVuayIsIndlYnBhY2s6Ly93ZWJwYWNrL3dlYnBhY2svcnVudGltZS9nZXQgamF2YXNjcmlwdCBjaHVuayBmaWxlbmFtZSIsIndlYnBhY2s6Ly93ZWJwYWNrL3dlYnBhY2svcnVudGltZS9nZXQgamF2YXNjcmlwdCB1cGRhdGUgY2h1bmsgZmlsZW5hbWUiLCJ3ZWJwYWNrOi8vd2VicGFjay93ZWJwYWNrL3J1bnRpbWUvZ2V0IG1pbmktY3NzIGNodW5rIGZpbGVuYW1lIiwid2VicGFjazovL3dlYnBhY2svd2VicGFjay9ydW50aW1lL2dldCB1cGRhdGUgbWFuaWZlc3QgZmlsZW5hbWUiLCJ3ZWJwYWNrOi8vd2VicGFjay93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giLCJ3ZWJwYWNrOi8vd2VicGFjay93ZWJwYWNrL3J1bnRpbWUvaGFybW9ueSBtb2R1bGUgZGVjb3JhdG9yIiwid2VicGFjazovL3dlYnBhY2svd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly93ZWJwYWNrL3dlYnBhY2svcnVudGltZS9sb2FkIHNjcmlwdCIsIndlYnBhY2s6Ly93ZWJwYWNrL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vd2VicGFjay93ZWJwYWNrL3J1bnRpbWUvaG90IG1vZHVsZSByZXBsYWNlbWVudCIsIndlYnBhY2s6Ly93ZWJwYWNrL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3dlYnBhY2svd2VicGFjay9ydW50aW1lL2NzcyBsb2FkaW5nIiwid2VicGFjazovL3dlYnBhY2svd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vd2VicGFjay93ZWJwYWNrL2JlZm9yZS1zdGFydHVwIiwid2VicGFjazovL3dlYnBhY2svd2VicGFjay9zdGFydHVwIiwid2VicGFjazovL3dlYnBhY2svd2VicGFjay9hZnRlci1zdGFydHVwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge1N1c3BlbnNlLCB1c2VFZmZlY3R9IGZyb20gJ3JlYWN0JztcbmltcG9ydCAnLi9zdHlsZXMuY3NzJztcbmltcG9ydCB7Um91dGUsIFJvdXRlcywgdXNlTmF2aWdhdGV9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xuaW1wb3J0IHt1c2VEaXNwYXRjaH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuaW1wb3J0IHthdXRofSBmcm9tICdAL3JlZHV4L2FjdGlvbnMvYXV0aCc7XG5pbXBvcnQgTm90Rm91bmQgZnJvbSAnQC9wYWdlcy9Ob3RGb3VuZC9Ob3RGb3VuZCc7XG5pbXBvcnQgTWFpblBhZ2UgZnJvbSAnQC9wYWdlcy9NYWluUGFnZS9NYWluUGFnZSc7XG5pbXBvcnQgTGF5b3V0IGZyb20gJ0Bjb21wb25lbnRzL0xheW91dC9MYXlvdXQnO1xuaW1wb3J0IFNwaW5uZXIgZnJvbSAnQGNvbXBvbmVudHMvU3Bpbm5lci9TcGlubmVyJztcbmltcG9ydCB7UHJpdmF0ZUF1dGh9IGZyb20gJy4vaG9jL1ByaXZhdGVBdXRoJztcblxuY29uc3QgUHJvZmlsZUNvbnRlbnQgPSBSZWFjdC5sYXp5KCgpID0+IGltcG9ydCgnQC9wYWdlcy9Qcm9maWxlQ29udGVudC9Qcm9maWxlQ29udGVudCcpKTtcbmNvbnN0IFBob3RvUGFnZSA9IFJlYWN0LmxhenkoKCkgPT4gaW1wb3J0KCdAL3BhZ2VzL1Bob3RvUGFnZS9QaG90b1BhZ2UnKSk7XG5cbmNvbnN0IEFwcCA9ICgpID0+IHtcbiAgY29uc3QgbmF2aWdhdGUgPSB1c2VOYXZpZ2F0ZSgpLFxuICAgIGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcblxuICBjb25zdCBhY2Nlc3NUb2tlbiA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdhY2Nlc3NUb2tlbicpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgbGV0IHVybFNlYXJjaFBhcmFtcyA9IG5ldyBVUkxTZWFyY2hQYXJhbXMod2luZG93LmxvY2F0aW9uLnNlYXJjaCk7XG4gICAgbGV0IHBhcmFtcyA9IE9iamVjdC5mcm9tRW50cmllcyh1cmxTZWFyY2hQYXJhbXMuZW50cmllcygpKTtcblxuICAgIGRpc3BhdGNoKFxuICAgICAgYXV0aChwYXJhbXM/LmNvZGUsICgpID0+IHtcbiAgICAgICAgcGFyYW1zLnRvU3RyaW5nKCk7XG4gICAgICAgIHdpbmRvdy5oaXN0b3J5LnB1c2hTdGF0ZSh7fSwgZG9jdW1lbnQudGl0bGUsIHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZSk7XG4gICAgICAgIG5hdmlnYXRlKCdwaG90b3MnKTtcbiAgICAgIH0pXG4gICAgKTtcbiAgfSwgW10pO1xuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxSb3V0ZXM+XG4gICAgICAgIDxSb3V0ZSBwYXRoPVwiL1wiIGVsZW1lbnQ9ezxMYXlvdXQvPn0+XG4gICAgICAgICAgPFJvdXRlIGluZGV4IGVsZW1lbnQ9ezxNYWluUGFnZS8+fS8+XG4gICAgICAgICAgPFJvdXRlXG4gICAgICAgICAgICBwYXRoPVwicGhvdG9zXCJcbiAgICAgICAgICAgIGVsZW1lbnQ9e1xuICAgICAgICAgICAgICA8UHJpdmF0ZUF1dGggaXNBdXRoPXthY2Nlc3NUb2tlbn0+XG4gICAgICAgICAgICAgICAgPFN1c3BlbnNlIGZhbGxiYWNrPXs8U3Bpbm5lci8+fT5cbiAgICAgICAgICAgICAgICAgIDxQcm9maWxlQ29udGVudC8+XG4gICAgICAgICAgICAgICAgPC9TdXNwZW5zZT5cbiAgICAgICAgICAgICAgPC9Qcml2YXRlQXV0aD5cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAvPlxuXG4gICAgICAgICAgPFJvdXRlXG4gICAgICAgICAgICBwYXRoPVwicGhvdG9zLzpwaG90b0lkXCJcbiAgICAgICAgICAgIGVsZW1lbnQ9e1xuICAgICAgICAgICAgICA8UHJpdmF0ZUF1dGggaXNBdXRoPXthY2Nlc3NUb2tlbn0+XG4gICAgICAgICAgICAgICAgPFN1c3BlbnNlIGZhbGxiYWNrPXs8U3Bpbm5lci8+fT5cbiAgICAgICAgICAgICAgICAgIDxQaG90b1BhZ2UvPlxuICAgICAgICAgICAgICAgIDwvU3VzcGVuc2U+XG4gICAgICAgICAgICAgIDwvUHJpdmF0ZUF1dGg+XG4gICAgICAgICAgICB9XG4gICAgICAgICAgLz5cbiAgICAgICAgICA8Um91dGUgcGF0aD1cIipcIiBlbGVtZW50PXs8Tm90Rm91bmQvPn0vPlxuICAgICAgICA8L1JvdXRlPlxuICAgICAgPC9Sb3V0ZXM+XG4gICAgPC8+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBBcHA7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHN0eWxlcyBmcm9tICcuL2Zvb3Rlci5tLmNzcyc7XG5pbXBvcnQgbG9nbyBmcm9tICdAaW1hZ2VzL2xvZ28tZm9vdGVyLnBuZyc7XG5cbmNvbnN0IEZvb3RlciA9ICgpID0+IHtcbiAgY29uc3QgeWVhciA9IG5ldyBEYXRlKCkuZ2V0RnVsbFllYXIoKVxuICByZXR1cm4gKFxuICAgIDxmb290ZXIgY2xhc3NOYW1lPXtzdHlsZXMuZm9vdGVyfT5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyfT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5mb290ZXJUb3B9PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGFjdHN9PlxuICAgICAgICAgICAgPHNwYW4+0JrQvtC90YLQsNC60YLRizwvc3Bhbj5cbiAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9e3N0eWxlcy5jb250YWN0c0xpc3R9PlxuICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPXtzdHlsZXMubGlzdEl0ZW1UZWx9PlxuICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJ0ZWw6Kzc5OTk5OTk5OTk5XCI+KzcoOTk5KS05OTktOTktOTk8L2E+XG4gICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9e3N0eWxlcy5saXN0SXRlbU1haWx9PlxuICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJlbWFpbDp0ZXN0QG1haWwucnVcIj50ZXN0QG1haWwucnU8L2E+XG4gICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICA8L3VsPlxuICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgPGltZyBzcmM9e2xvZ299IGFsdD17bG9nb30vPlxuXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5zb2NpYWx9PlxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtzdHlsZXMuaW5Tb2NpYWxUZXh0fT7QnNGLINCyINGB0L7RhtGB0LXRgtGP0YU8L3NwYW4+XG4gICAgICAgICAgICA8dWwgY2xhc3NOYW1lPXtzdHlsZXMuc29jaWFsTGlzdH0+XG4gICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9e3N0eWxlcy5zb2NpYWxMb3N0SXRlbX0+XG4gICAgICAgICAgICAgICAgPGFcbiAgICAgICAgICAgICAgICAgIGhyZWY9XCJodHRwczovL3ZrLmNvbS9cIlxuICAgICAgICAgICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17W3N0eWxlcy5saW5rLCBzdHlsZXMudmtdLmpvaW4oJyAnKX1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPXtzdHlsZXMuc29jaWFsTG9zdEl0ZW19PlxuICAgICAgICAgICAgICAgIDxhXG4gICAgICAgICAgICAgICAgICBocmVmPVwiaHR0cHM6Ly93d3cuZ29vZ2xlLmNvbS9cIlxuICAgICAgICAgICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17W3N0eWxlcy5saW5rLCBzdHlsZXMuZ29vZ2xlXS5qb2luKCcgJyl9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT17c3R5bGVzLnNvY2lhbExvc3RJdGVtfT5cbiAgICAgICAgICAgICAgICA8YVxuICAgICAgICAgICAgICAgICAgaHJlZj1cImh0dHBzOi8vb2sucnUvXCJcbiAgICAgICAgICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e1tzdHlsZXMubGluaywgc3R5bGVzLm9rXS5qb2luKCcgJyl9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmZvb3RlckJvdHRvbX0+XG4gICAgICAgIDxzbWFsbCBjbGFzc05hbWU9e3N0eWxlcy5mb290ZXJDb3B5fT7CqXt5ZWFyfSBQYXZsZW5rbyBEYXJ5YTwvc21hbGw+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Zvb3Rlcj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEZvb3RlcjtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vaGVhZGVyLm0uY3NzJztcbmltcG9ydCBsb2dvIGZyb20gJ0BpbWFnZXMvbG9nby5wbmcnO1xuaW1wb3J0IExvY2F0aW9uIGZyb20gJ0Bjb21wb25lbnRzL0hlYWRlci9Mb2NhdGlvbi9Mb2NhdGlvbic7XG5pbXBvcnQgU2lnbkluIGZyb20gJ0Bjb21wb25lbnRzL0hlYWRlci9TaWduaW4vU2lnbmluJztcbmltcG9ydCBQcm9maWxlIGZyb20gJ0Bjb21wb25lbnRzL1Byb2ZpbGUvUHJvZmlsZSc7XG5pbXBvcnQge3VzZVNlbGVjdG9yfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQge0xpbmt9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xuXG5jb25zdCBIZWFkZXIgPSAoKSA9PiB7XG4gIGNvbnN0IGlzQXV0aCA9IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUuYXV0aC5pc0F1dGgpO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cbiAgICAgIDxoZWFkZXIgY2xhc3NOYW1lPXtzdHlsZXMuaGVhZGVyfT5cbiAgICAgICAgPExpbmsgdG89XCIvXCI+XG4gICAgICAgICAgPGltZyBzcmM9e2xvZ299IGNsYXNzTmFtZT17c3R5bGVzLmxvZ299IGFsdD1cImxvZ29cIi8+XG4gICAgICAgIDwvTGluaz5cbiAgICAgICAgPG5hdj5cbiAgICAgICAgICA8dWwgY2xhc3NOYW1lPXtzdHlsZXMubGlzdH0+XG4gICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT17c3R5bGVzLmxpbmt9IGhyZWY9XCIjXCI+XG4gICAgICAgICAgICAgICAg0J4g0L3QsNGBXG4gICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT17c3R5bGVzLmxpbmt9IGhyZWY9XCIjXCI+XG4gICAgICAgICAgICAgICAg0JrQvtC90YLQsNC60YLRi1xuICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICA8L2xpPlxuICAgICAgICAgIDwvdWw+XG4gICAgICAgIDwvbmF2PlxuICAgICAgICA8TG9jYXRpb24vPlxuICAgICAgICB7aXNBdXRoID8gPFByb2ZpbGUvPiA6IDxTaWduSW4vPn1cbiAgICAgIDwvaGVhZGVyPlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgSGVhZGVyO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9sb2NhdGlvbi5tLmNzcyc7XG5pbXBvcnQge3VzZVNlbGVjdG9yfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5cbmNvbnN0IExvY2F0aW9uID0gKCkgPT4ge1xuICBjb25zdCBsb2NhdGlvbiA9IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUubWFpbi5sb2NhdGlvbik7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmxvY2F0aW9ufT5cbiAgICAgIDxzdmdcbiAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMubG9jYXRpb25JY29ufVxuICAgICAgICBlbmFibGVCYWNrZ3JvdW5kPVwibmV3IDAgMCA1MTIgNTEyXCJcbiAgICAgICAgaGVpZ2h0PVwiNTEyXCJcbiAgICAgICAgdmlld0JveD1cIjAgMCA1MTIgNTEyXCJcbiAgICAgICAgd2lkdGg9XCI1MTJcIlxuICAgICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcbiAgICAgID5cbiAgICAgICAgPGc+XG4gICAgICAgICAgPHBhdGhcbiAgICAgICAgICAgIGQ9XCJtNDA3LjU3OSA4Ny42NzdjLTMxLjA3My01My42MjQtODYuMjY1LTg2LjM4NS0xNDcuNjQtODcuNjM3LTIuNjItLjA1NC01LjI1Ny0uMDU0LTcuODc4IDAtNjEuMzc0IDEuMjUyLTExNi41NjYgMzQuMDEzLTE0Ny42NCA4Ny42MzctMzEuNzYyIDU0LjgxMi0zMi42MzEgMTIwLjY1Mi0yLjMyNSAxNzYuMTIzbDEyNi45NjMgMjMyLjM4N2MuMDU3LjEwMy4xMTQuMjA2LjE3My4zMDggNS41ODYgOS43MDkgMTUuNTkzIDE1LjUwNSAyNi43NyAxNS41MDUgMTEuMTc2IDAgMjEuMTgzLTUuNzk3IDI2Ljc2OC0xNS41MDUuMDU5LS4xMDIuMTE2LS4yMDUuMTczLS4zMDhsMTI2Ljk2My0yMzIuMzg3YzMwLjMwNC01NS40NzEgMjkuNDM1LTEyMS4zMTEtMi4zMjctMTc2LjEyM3ptLTE1MS41NzkgMTQ0LjMyM2MtMzkuNzAxIDAtNzItMzIuMjk5LTcyLTcyczMyLjI5OS03MiA3Mi03MiA3MiAzMi4yOTkgNzIgNzItMzIuMjk4IDcyLTcyIDcyelwiLz5cbiAgICAgICAgPC9nPlxuICAgICAgPC9zdmc+XG4gICAgICA8c3BhbiBjbGFzc05hbWU9e3N0eWxlcy5jaXR5VGV4dH0+e2xvY2F0aW9ufTwvc3Bhbj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IExvY2F0aW9uO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9zaWduaW4ubS5jc3MnO1xuaW1wb3J0IHt1bnNwbGFzaEF1dGhMaW5rfSBmcm9tICdAL3JlZHV4L2FjdGlvbnMvYXV0aC5qcyc7XG5cbmNvbnN0IFNpZ25pbiA9ICgpID0+IHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmxvZ2lufT5cbiAgICAgIDxzdmdcbiAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMubG9naW5JY29ufVxuICAgICAgICBoZWlnaHQ9XCI1MTJwdFwiXG4gICAgICAgIHZpZXdCb3g9XCIwIDAgNTEyIDUxMlwiXG4gICAgICAgIHdpZHRoPVwiNTEycHRcIlxuICAgICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcbiAgICAgID5cbiAgICAgICAgPHBhdGhcbiAgICAgICAgICBkPVwibTQwMy43NzczNDQgMTQ3LjkxNzk2OWMwLTgxLjU2MjUtNjYuMzU5Mzc1LTE0Ny45MTc5NjktMTQ3LjkxNzk2OS0xNDcuOTE3OTY5LTgxLjU2MjUgMC0xNDcuOTE3OTY5IDY2LjM1NTQ2OS0xNDcuOTE3OTY5IDE0Ny45MTc5NjkgMCA1MC41MTk1MzEgMjUuNDY0ODQ0IDk1LjE5OTIxOSA2NC4yMjI2NTYgMTIxLjg5NDUzMS0zNi4xODc1IDEyLjQ4ODI4MS02OS4zNTkzNzQgMzMuMTE3MTg4LTk3LjIyNjU2MiA2MC45ODQzNzUtNDguMzI0MjE5IDQ4LjMyNDIxOS03NC45Mzc1IDExMi41NzgxMjUtNzQuOTM3NSAxODAuOTE3OTY5aDM5Ljk3NjU2MmMwLTExOS4wMzUxNTYgOTYuODQzNzUtMjE1Ljg3ODkwNiAyMTUuODgyODEzLTIxNS44Nzg5MDYgODEuNTU4NTk0IDAgMTQ3LjkxNzk2OS02Ni4zNTU0NjkgMTQ3LjkxNzk2OS0xNDcuOTE3OTY5em0tMTQ3LjkxNzk2OSAxMDcuOTQxNDA2Yy01OS41MTk1MzEgMC0xMDcuOTQxNDA2LTQ4LjQyMTg3NS0xMDcuOTQxNDA2LTEwNy45NDE0MDZzNDguNDIxODc1LTEwNy45NDE0MDcgMTA3Ljk0MTQwNi0xMDcuOTQxNDA3YzU5LjUxNTYyNSAwIDEwNy45Mzc1IDQ4LjQyMTg3NiAxMDcuOTM3NSAxMDcuOTQxNDA3cy00OC40MjE4NzUgMTA3Ljk0MTQwNi0xMDcuOTM3NSAxMDcuOTQxNDA2em0yNTYuMTQwNjI1IDExMS45Mzc1LTk0LjA4OTg0NCA5NC4wODk4NDQtMjguMjY5NTMxLTI4LjI2OTUzMSA0Ni44MzIwMzEtNDYuODMyMDMyaC0zNC42NzE4NzVjLTQ3Ljg5ODQzNyAwLTg2LjkwMjM0MyAzOC45NzI2NTYtODYuOTQxNDA2IDg2Ljg3MTA5NGwtLjAzNTE1NiAzOC4wNzQyMTktMzkuOTc2NTYzLS4wMzEyNS4wMzEyNS0zOC4wNzgxMjVjLjA1ODU5NC02OS45MjU3ODIgNTYuOTk2MDk0LTEyNi44MTY0MDYgMTI2LjkyMTg3NS0xMjYuODE2NDA2aDMyLjY3MTg3NWwtNDQuODMyMDMxLTQ0LjgzMjAzMiAyOC4yNjk1MzEtMjguMjY1NjI1em0wIDBcIi8+XG4gICAgICA8L3N2Zz5cbiAgICAgIDxhIGNsYXNzTmFtZT17c3R5bGVzLmxvZ2luU2lnbmlufSBocmVmPXt1bnNwbGFzaEF1dGhMaW5rfT5cbiAgICAgICAg0JLQvtC50YLQuFxuICAgICAgPC9hPlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgU2lnbmluO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7T3V0bGV0fSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcbmltcG9ydCBIZWFkZXIgZnJvbSAnQGNvbXBvbmVudHMvSGVhZGVyL0hlYWRlcic7XG5pbXBvcnQgRm9vdGVyIGZyb20gJ0Bjb21wb25lbnRzL0Zvb3Rlci9Gb290ZXInO1xuXG5jb25zdCBMYXlvdXQgPSAoKSA9PiB7XG4gIHJldHVybiAoPD5cbiAgICAgIDxIZWFkZXIvPlxuICAgICAgPG1haW4+XG4gICAgICAgIDxPdXRsZXQvPlxuICAgICAgPC9tYWluPlxuICAgICAgPEZvb3Rlci8+XG4gICAgPC8+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBMYXlvdXQ7XG4iLCJpbXBvcnQgUmVhY3QsIHt1c2VFZmZlY3QsIHVzZVJlZiwgdXNlU3RhdGV9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9wcm9maWxlLm0uY3NzJztcbmltcG9ydCB7dXNlRGlzcGF0Y2gsIHVzZVNlbGVjdG9yfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQge2xvZ291dH0gZnJvbSAnQC9yZWR1eC9yZWR1Y2Vycy9hdXRoJztcbmltcG9ydCB7dXNlTmF2aWdhdGV9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xuXG5jb25zdCBQcm9maWxlID0gKCkgPT4ge1xuICBjb25zdCB1c2VyID0gdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS5hdXRoLmN1cnJlbnRVc2VyKSxcbiAgICBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCksXG4gICAgbmF2aWdhdGUgPSB1c2VOYXZpZ2F0ZSgpO1xuXG4gIGNvbnN0IFtpc1Byb2ZpbGVCdG5zU2hvdywgc2V0UHJvZmlsZUJ0bnNTaG93XSA9IHVzZVN0YXRlKGZhbHNlKSxcbiAgICB1c2VyUHJvZmlsZVJlZiA9IHVzZVJlZihudWxsKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IGhhbmRsZUNsaWNrT3V0c2lkZSA9IChldmVudCkgPT4ge1xuICAgICAgaWYgKFxuICAgICAgICB1c2VyUHJvZmlsZVJlZi5jdXJyZW50ICYmXG4gICAgICAgICF1c2VyUHJvZmlsZVJlZi5jdXJyZW50LmNvbnRhaW5zKGV2ZW50LnRhcmdldClcbiAgICAgICkge1xuICAgICAgICBzZXRQcm9maWxlQnRuc1Nob3coZmFsc2UpO1xuICAgICAgfVxuICAgIH07XG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBoYW5kbGVDbGlja091dHNpZGUsIHRydWUpO1xuICAgIHJldHVybiAoKSA9PiB7XG4gICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIGhhbmRsZUNsaWNrT3V0c2lkZSwgdHJ1ZSk7XG4gICAgfTtcbiAgfSwgW2lzUHJvZmlsZUJ0bnNTaG93XSk7XG5cbiAgY29uc3Qgc2hvd0V4aXRCdG4gPSAoKSA9PiB7XG4gICAgc2V0UHJvZmlsZUJ0bnNTaG93KCFpc1Byb2ZpbGVCdG5zU2hvdyk7XG4gIH07XG5cbiAgY29uc3QgZ29Ub1Byb2ZpbGUgPSAoZSkgPT4ge1xuICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgc2V0UHJvZmlsZUJ0bnNTaG93KGZhbHNlKTtcbiAgICBuYXZpZ2F0ZSgncGhvdG9zJyk7XG4gIH07XG5cbiAgY29uc3QgZ29PdXQgPSAoKSA9PiB7XG4gICAgZGlzcGF0Y2gobG9nb3V0KCkpO1xuICAgIG5hdmlnYXRlKCcvJyk7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnVzZXJQcm9maWxlfSByZWY9e3VzZXJQcm9maWxlUmVmfT5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMudXNlckJhc2VJbmZvfT5cbiAgICAgICAgPHNwYW4+e3VzZXIuZmlyc3RfbmFtZX08L3NwYW4+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMucHJvZmlsZUltYWdlfT5cbiAgICAgICAgICA8aW1nXG4gICAgICAgICAgICBzcmM9e3VzZXIucHJvZmlsZV9pbWFnZT8uc21hbGx9XG4gICAgICAgICAgICBhbHQ9XCJ1c2VyIHBob3RvXCJcbiAgICAgICAgICAgIG9uQ2xpY2s9e3Nob3dFeGl0QnRufVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG5cbiAgICAgIHtpc1Byb2ZpbGVCdG5zU2hvdyAmJiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMucHJvZmlsZUJ0bnN9PlxuICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMucHJvZmlsZUJ0biArICcgJyArICdidG4tcmVzZXQnfVxuICAgICAgICAgICAgb25DbGljaz17Z29Ub1Byb2ZpbGV9XG4gICAgICAgICAgPlxuICAgICAgICAgICAg0J/RgNC+0YTQuNC70YxcbiAgICAgICAgICA8L2J1dHRvbj5cblxuICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMubG9nb3V0QnRuICsgJyAnICsgJ2J0bi1yZXNldCd9XG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBnb091dCgpfVxuICAgICAgICAgID5cbiAgICAgICAgICAgINCS0YvQudGC0Lh7JyAnfVxuICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICl9XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBQcm9maWxlO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9zcGlubmVyLm0uY3NzJztcblxuY29uc3QgU3Bpbm5lciA9ICgpID0+IHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImxvYWRlcldyYXBwZXJcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubG9hZGVyICsgJyAnICsgc3R5bGVzLmxvYWRlcjJ9PlxuICAgICAgICA8c3ZnIGNsYXNzTmFtZT17c3R5bGVzLmxvYWRlclN0YXJ9IHZlcnNpb249XCIxLjFcIj5cbiAgICAgICAgICA8cG9seWdvblxuICAgICAgICAgICAgcG9pbnRzPVwiMjkuOCAwLjMgMjIuOCAyMS44IDAgMjEuOCAxOC41IDM1LjIgMTEuNSA1Ni43IDI5LjggNDMuNCA0OC4yIDU2LjcgNDEuMiAzNS4xIDU5LjYgMjEuOCAzNi44IDIxLjggXCJcbiAgICAgICAgICAgIGZpbGw9XCIjNjYyZDkxXCJcbiAgICAgICAgICAvPlxuICAgICAgICA8L3N2Zz5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5sb2FkZXJDaXJjbGVzfS8+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFNwaW5uZXI7XG4iLCJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBwcmVsb2FkQXNCbG9iKHVybCkge1xuICBpZiAoIXVybCkge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xuICAgICAgcmVzb2x2ZSgnJyk7XG4gICAgfSk7XG4gIH1cblxuICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKHVybCk7XG5cbiAgY29uc3QgYmxvYiA9IGF3YWl0IHJlc3BvbnNlLmJsb2IoKTtcblxuICBjb25zdCByZWFkZXIgPSBuZXcgRmlsZVJlYWRlcigpO1xuXG4gIHJlYWRlci5yZWFkQXNEYXRhVVJMKGJsb2IpO1xuXG4gIGNvbnN0IHByb21pc2UgPSBuZXcgUHJvbWlzZShcbiAgICAocmVzb2x2ZSkgPT5cbiAgICAgIChyZWFkZXIub25sb2FkID0gKCkgPT4ge1xuICAgICAgICByZXNvbHZlKHJlYWRlci5yZXN1bHQpO1xuICAgICAgfSksXG4gICk7XG5cbiAgcmV0dXJuIHByb21pc2U7XG59XG5cblxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7TmF2aWdhdGV9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nXG5cbmNvbnN0IFByaXZhdGVBdXRoID0gKHtjaGlsZHJlbiwgaXNBdXRofSkgPT4ge1xuXG4gIGlmICghaXNBdXRoKSB7XG4gICAgcmV0dXJuICg8TmF2aWdhdGUgdG89XCIvXCIvPilcbiAgfVxuICByZXR1cm4gY2hpbGRyZW5cbn07XG5cbmV4cG9ydCB7UHJpdmF0ZUF1dGh9O1xuIiwiaW1wb3J0IEFwcCBmcm9tICcuL2FwcCc7XG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5cbmltcG9ydCB7cmVuZGVyfSBmcm9tICdyZWFjdC1kb20nO1xuaW1wb3J0IHtIYXNoUm91dGVyfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcbmltcG9ydCB7UHJvdmlkZXJ9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCB7c3RvcmV9IGZyb20gJy4vcmVkdXgvcmVkdWNlcnMnO1xuXG5yZW5kZXIoPFByb3ZpZGVyIHN0b3JlPXtzdG9yZX0+XG4gICAgICAgIDxIYXNoUm91dGVyID5cbiAgICAgICAgICAgIDxBcHAvPlxuICAgICAgICA8L0hhc2hSb3V0ZXI+XG4gIDwvUHJvdmlkZXI+LCAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Jvb3QnKVxuKVxuXG5jb25zdCBkZXZNb2RlID0gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdkZXZlbG9wbWVudCc7XG5pZiAoZGV2TW9kZSAmJiBtb2R1bGUgJiYgbW9kdWxlLmhvdCkge1xuICBtb2R1bGUuaG90LmFjY2VwdCgpO1xufVxuXG4iLCJpbXBvcnQgUmVhY3QsIHt1c2VFZmZlY3R9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9tYWluUGFnZS5tLmNzcyc7XG5pbXBvcnQgU3dpcGVyQ29yZSwge0ExMXksIE5hdmlnYXRpb24sIFBhZ2luYXRpb259IGZyb20gJ3N3aXBlcic7XG5pbXBvcnQge1N3aXBlciwgU3dpcGVyU2xpZGV9IGZyb20gJ3N3aXBlci9yZWFjdCc7XG5pbXBvcnQgJ0BpbXBvcnQvc3dpcGVyL3N3aXBlci1idW5kbGUubWluLmNzcyc7XG5pbXBvcnQge3VzZURpc3BhdGNoLCB1c2VTZWxlY3Rvcn0gZnJvbSAncmVhY3QtcmVkdXgnO1xuaW1wb3J0IHtMaW5rfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcbmltcG9ydCB7dW5zcGxhc2hBdXRoTGlua30gZnJvbSAnQC9yZWR1eC9hY3Rpb25zL2F1dGgnO1xuaW1wb3J0IFNwaW5uZXIgZnJvbSAnQGNvbXBvbmVudHMvU3Bpbm5lci9TcGlubmVyJztcbmltcG9ydCB7Z2V0TG9jYXRpb259IGZyb20gJ0AvcmVkdXgvYWN0aW9ucy9tYWluJztcbmltcG9ydCB7Z2V0UGhvdG9zfSBmcm9tICdAL3JlZHV4L2FjdGlvbnMvcGhvdG9zJztcblxuU3dpcGVyQ29yZS51c2UoW1BhZ2luYXRpb24sIE5hdmlnYXRpb24sIEExMXldKTtcblxuY29uc3QgTWFpblBhZ2UgPSAoKSA9PiB7XG4gIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKVxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGRpc3BhdGNoKGdldExvY2F0aW9uKCkpO1xuICAgIGRpc3BhdGNoKGdldFBob3RvcygxLCB0cnVlKSk7XG4gIH0sIFtdKVxuXG4gIGNvbnN0IHBob3RvcyA9IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUucGhvdG9zLmNvbnRlbnQuc2xpY2UoMCwgOSkpLFxuICAgIGlzQXV0aCA9IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUuYXV0aC5pc0F1dGgpLFxuICAgIGlzTG9hZGluZyA9IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUucGhvdG9zLmlzTG9hZGluZyk7XG5cbiAgcmV0dXJuICg8c2VjdGlvbj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMucGhvdG9zQ29udGFpbmVyfSBzdHlsZT17e2hlaWdodDogaXNMb2FkaW5nID8gJzEwMHB4JyA6ICc1NDRweCd9fT5cblxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLm1haW5Db250YWluZXJ9PlxuICAgICAgICAgIHtpc0xvYWRpbmcgPyA8U3Bpbm5lci8+IDpcbiAgICAgICAgICAgIDxTd2lwZXJcbiAgICAgICAgICAgICAgcGFnaW5hdGlvbj17e1xuICAgICAgICAgICAgICAgIGNsaWNrYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICBkeW5hbWljQnVsbGV0czogdHJ1ZSxcbiAgICAgICAgICAgICAgICBkeW5hbWljTWFpbkJ1bGxldHM6IDQsXG4gICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgIHNwYWNlQmV0d2Vlbj17MzB9XG4gICAgICAgICAgICAgIG5hdmlnYXRpb249e3RydWV9XG4gICAgICAgICAgICAgIHNsaWRlc1BlclZpZXc9ezF9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIHtwaG90b3MubWFwKChlbCkgPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiAoPFN3aXBlclNsaWRlIGtleT17ZWwuaWR9PlxuICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17ZWwudXJscy5mdWxsfSBhbHQ9XCJcIi8+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17c3R5bGVzLm1haW5UaXRsZX0+XG4gICAgICAgICAgICAgICAgICAgINCf0YDQuNC70L7QttC10L3QuNC1INC00LvRjyZuYnNwO9C/0YDQvtGB0LzQvtGC0YDQsCDRhNC+0YLQvtCz0YDQsNGE0LjQuVxuICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgPC9Td2lwZXJTbGlkZT5cbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgIDwvU3dpcGVyPlxuICAgICAgICAgIH1cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgIDwvZGl2PlxuXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmFib3V0Q29udGFpbmVyfT5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmFib3V0fT5cbiAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9e3N0eWxlcy5hYm91dFRpdGxlfT5PINC90LDRgTwvaDI+XG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e3N0eWxlcy5hYm91dFRpdGxlVGV4dH0+XG4gICAgICAgICAgICAgINCf0YDQuNC70L7QttC10L3QuNC1INC00LvRjyDQv9GA0L7RgdC80L7RgtGA0LAg0YTQvtGC0L7Qs9GA0LDRhNC40LlcbiAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZG9zbXRofT5cbiAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9e3N0eWxlcy5kb3NtdGhUaXRsZX0+0JIg0Y3RgtC+0Lwg0L/RgNC40LvQvtC20LXQvdC40Lgg0LLRiyDQvNC+0LbQtdGC0LU6PC9oMz5cbiAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9e3N0eWxlcy5kb3NtdGhMaXN0fT5cbiAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT17c3R5bGVzLmRvc210aEl0ZW19PlxuICAgICAgICAgICAgICAgINCf0L7RgdC80L7RgtGA0LXRgtGMINGE0L7RgtC+0LPRgNCw0YTQuNC4INGBINGB0LDQudGC0LB7JyAnfVxuICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJodHRwczovL3Vuc3BsYXNoLmNvbS9cIiBjbGFzc05hbWU9e3N0eWxlcy51bnNwbGFzaExpbmt9PlxuICAgICAgICAgICAgICAgICAgdW5zcGxhc2guY29tXG4gICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgIC5cbiAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT17c3R5bGVzLmRvc210aEl0ZW19PlxuICAgICAgICAgICAgICAgINCf0L7RgdC80L7RgtGA0LXRgtGMINC40LzRjyDQsNCy0YLQvtGA0LAg0Lgg0LTQsNGC0YMg0L/Rg9Cx0LvQuNC60LDRhtC40LguXG4gICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9e3N0eWxlcy5kb3NtdGhJdGVtfT5cbiAgICAgICAgICAgICAgICDQn9C+0YHRgtCw0LLQuNGC0Ywg0LvQsNC50Log0L/QvtC90YDQsNCy0LjQstGI0LXQudGB0Y8g0YTQvtGC0L7Qs9GA0LDRhNC40LguXG4gICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICA8L3VsPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5sb29rUGhvdG99PlxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17c3R5bGVzLmxvb2tQaG90b1RleHR9PlxuICAgICAgICAgICAg0KfRgtC+0LHRiyDQv9GA0L7RgdC80L7RgtGA0LXRgtGMINC70LXQvdGC0YMg0YTQvtGC0L7Qs9GA0LDRhNC40Lkg0L3QsNC20LzQuNGC0LUgwqvQodC80L7RgtGA0LXRgtGMINC70LXQvdGC0YPCu1xuICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICB7aXNBdXRoID8gKFxuICAgICAgICAgICAgPExpbmsgdG89XCJwaG90b3NcIiBjbGFzc05hbWU9e3N0eWxlcy5sb29rUGhvdG9CdXR0b259PlxuICAgICAgICAgICAgICDQodC80L7RgtGA0LXRgtGMINC70LXQvdGC0YNcbiAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICApIDogKFxuICAgICAgICAgICAgPGEgaHJlZj17dW5zcGxhc2hBdXRoTGlua30gY2xhc3NOYW1lPXtzdHlsZXMubG9va1Bob3RvQnV0dG9ufT5cbiAgICAgICAgICAgICAg0KHQvNC+0YLRgNC10YLRjCDQu9C10L3RgtGDXG4gICAgICAgICAgICA8L2E+XG4gICAgICAgICAgKX1cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L3NlY3Rpb24+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IE1haW5QYWdlO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuY29uc3QgTm90Rm91bmQgPSAoKSA9PiB7XG4gIHJldHVybiAoPGRpdj5cbiAgICAgIHBhZ2Ugbm90IGZvdW5kXG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBOb3RGb3VuZDsiLCJpbXBvcnQge3NldFVzZXJ9IGZyb20gJy4uL3JlZHVjZXJzL2F1dGgnXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xuXG5jb25zdCBwcm9kdWN0aW9uID0gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdwcm9kdWN0aW9uJztcblxubGV0IG9hdXRoVXJsID0gJ2h0dHBzOi8vdW5zcGxhc2guY29tL29hdXRoL3Rva2VuJyxcbiAgY2xpZW50X2lkID0gJ2F2R1lMeTh4ai1SOEkzdGlSU2tlVlp2UlYwUjM5V3MzNG1ab2QzcW4zWm8nLFxuICBjbGllbnRfc2VjcmV0ID0gJzVtdlJyYlhWWVFEQ3BhN2ZZY2xndXhXZ0Z5cFZwejVCeUt4STRDTUFIb0EnLFxuICByZWRpcmVjdF91cmkgPSBwcm9kdWN0aW9uID8gJ2h0dHA6Ly9jOTE0NDI4cS5iZWdldC50ZWNoLycgOiAnaHR0cDovL2xvY2FsaG9zdDozMDAxLycsXG4gIGdyYW50X3R5cGUgPSAnYXV0aG9yaXphdGlvbl9jb2RlJyxcbiAgc2NvcGUgPSAncHVibGljK3JlYWRfdXNlcit3cml0ZV91c2VyK3JlYWRfcGhvdG9zK3dyaXRlX3Bob3Rvcyt3cml0ZV9saWtlcyt3cml0ZV9mb2xsb3dlcnMrcmVhZF9jb2xsZWN0aW9ucyt3cml0ZV9jb2xsZWN0aW9ucycsXG4gIHJlc3BvbnNlX3R5cGUgPSAnY29kZSc7XG5leHBvcnQgY29uc3QgdW5zcGxhc2hBdXRoTGluayA9IGBodHRwczovL3Vuc3BsYXNoLmNvbS9vYXV0aC9hdXRob3JpemUvP2NsaWVudF9pZD0ke2NsaWVudF9pZH0mcmVkaXJlY3RfdXJpPSR7cmVkaXJlY3RfdXJpfSZyZXNwb25zZV90eXBlPSR7cmVzcG9uc2VfdHlwZX0mc2NvcGU9JHtzY29wZX1gXG5cblxuZXhwb3J0IGNvbnN0IGxvZ2luID0gKCkgPT4ge1xuICBsZXQgYWNjZXNzVG9rZW4gPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnYWNjZXNzVG9rZW4nKVxuICByZXR1cm4gYXN5bmMgZGlzcGF0Y2ggPT4ge1xuICAgIGlmIChhY2Nlc3NUb2tlbikge1xuICAgICAgdHJ5IHtcbiAgICAgICAgcmV0dXJuIGF3YWl0IGF4aW9zLmdldCgnaHR0cHM6Ly9hcGkudW5zcGxhc2guY29tL21lJywge1xuICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgIEF1dGhvcml6YXRpb246IGBCZWFyZXIgJHthY2Nlc3NUb2tlbn1gXG4gICAgICAgICAgfVxuICAgICAgICB9KS50aGVuKHJlcyA9PiB7XG4gICAgICAgICAgZGlzcGF0Y2goc2V0VXNlcihyZXMuZGF0YSkpXG4gICAgICAgIH0pXG5cbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oJ2FjY2Vzc1Rva2VuJylcbiAgICAgICAgY29uc29sZS5sb2coZSlcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuXG5leHBvcnQgY29uc3QgYXV0aCA9IChjb2RlU2VhcmNoUGFyYW0sIGNiYWNrKSA9PiB7XG4gIGxldCBhY2Nlc3NUb2tlbiA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdhY2Nlc3NUb2tlbicpXG4gIHJldHVybiBhc3luYyBkaXNwYXRjaCA9PiB7XG4gICAgaWYgKGNvZGVTZWFyY2hQYXJhbSkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgcmV0dXJuIGF3YWl0IGF4aW9zLnBvc3Qob2F1dGhVcmwsIG51bGwsIHtcbiAgICAgICAgICAgIHBhcmFtczoge1xuICAgICAgICAgICAgICBjbGllbnRfaWQ6IGNsaWVudF9pZCxcbiAgICAgICAgICAgICAgY2xpZW50X3NlY3JldDogY2xpZW50X3NlY3JldCxcbiAgICAgICAgICAgICAgcmVkaXJlY3RfdXJpOiByZWRpcmVjdF91cmksXG4gICAgICAgICAgICAgIGNvZGU6IGNvZGVTZWFyY2hQYXJhbSxcbiAgICAgICAgICAgICAgZ3JhbnRfdHlwZTogZ3JhbnRfdHlwZVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgKS50aGVuKHJlc3BvbnNlID0+IHtcbiAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnYWNjZXNzVG9rZW4nLCByZXNwb25zZS5kYXRhLmFjY2Vzc190b2tlbilcbiAgICAgICAgICByZXR1cm4gYXhpb3MuZ2V0KCdodHRwczovL2FwaS51bnNwbGFzaC5jb20vbWUnLCB7XG4gICAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAgIEF1dGhvcml6YXRpb246IGBCZWFyZXIgJHtsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnYWNjZXNzVG9rZW4nKX1gXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSkudGhlbihyZXNwb25zZSA9PiB7XG4gICAgICAgICAgICBkaXNwYXRjaChzZXRVc2VyKHJlc3BvbnNlLmRhdGEpKVxuICAgICAgICAgICAgY2JhY2soKVxuICAgICAgICAgIH0pXG4gICAgICAgIH0pXG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKCdhY2Nlc3NUb2tlbicpXG4gICAgICAgIGNvbnNvbGUubG9nKGUpXG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChhY2Nlc3NUb2tlbikge1xuICAgICAgZGlzcGF0Y2gobG9naW4oKSlcbiAgICB9XG4gIH1cbn1cblxuXG5cblxuXG4iLCJpbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xuaW1wb3J0IHtzZXRMb2NhdGlvbn0gZnJvbSAnLi4vcmVkdWNlcnMvbWFpbic7XG5cbmV4cG9ydCBjb25zdCBnZXRMb2NhdGlvbiA9ICgpID0+IHtcbiAgbGV0IHVybCA9ICdodHRwczovL2lwaW5mby5pbz90b2tlbj1lMmY2Y2UyMjIwZjVlOSc7XG4gIHJldHVybiBhc3luYyAoZGlzcGF0Y2gpID0+IHtcbiAgICB0cnkge1xuICAgICAgY29uc3QgcmVzID0gYXdhaXQgYXhpb3MuZ2V0KHVybCk7XG4gICAgICBkaXNwYXRjaChzZXRMb2NhdGlvbihyZXMuZGF0YS5jaXR5KSk7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgY29uc29sZS5sb2coZSk7XG4gICAgfVxuICB9O1xufTtcbiIsImltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XG5pbXBvcnQge3NldEN1cnJlbnRQaG90bywgc2V0T3JEZWxldGVMaWtlLCBzZXRQaG90b3N9IGZyb20gJy4uL3JlZHVjZXJzL3Bob3Rvcyc7XG5pbXBvcnQge3NldElzTG9hZGluZ30gZnJvbSAnLi4vcmVkdWNlcnMvYXV0aCc7XG5pbXBvcnQge3ByZWxvYWRBc0Jsb2J9IGZyb20gJ0AvaGVscGVycy9wcmVsb2FkQXNCbG9iJztcblxuZXhwb3J0IGNvbnN0IHNldE9yRGVsZXRlTGlrZUJ5VXNlciA9IChwaG90bykgPT4ge1xuICBsZXQgYWNjZXNzVG9rZW4gPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnYWNjZXNzVG9rZW4nKTtcbiAgcmV0dXJuIGFzeW5jIGRpc3BhdGNoID0+IHtcbiAgICB0cnkge1xuICAgICAgaWYgKHBob3RvLmxpa2VkX2J5X3VzZXIgPT0gZmFsc2UpIHtcbiAgICAgICAgY29uc3QgcmVzID0gYXdhaXQgYXhpb3MucG9zdChgaHR0cHM6Ly9hcGkudW5zcGxhc2guY29tL3Bob3Rvcy8ke3Bob3RvLmlkfS9saWtlL2AsIG51bGwsIHtcbiAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICBBdXRob3JpemF0aW9uOiBgQmVhcmVyICR7YWNjZXNzVG9rZW59YFxuICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgICAgZGlzcGF0Y2goc2V0T3JEZWxldGVMaWtlKHJlcy5kYXRhLnBob3RvKSlcbiAgICAgICAgZGlzcGF0Y2goc2V0Q3VycmVudFBob3RvKHJlcy5kYXRhLnBob3RvKSlcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGF4aW9zLmRlbGV0ZShgaHR0cHM6Ly9hcGkudW5zcGxhc2guY29tL3Bob3Rvcy8ke3Bob3RvLmlkfS9saWtlL2AsIHtcbiAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICBBdXRob3JpemF0aW9uOiBgQmVhcmVyICR7YWNjZXNzVG9rZW59YFxuICAgICAgICAgIH1cbiAgICAgICAgfSlcblxuICAgICAgICBkaXNwYXRjaChzZXRPckRlbGV0ZUxpa2UocmVzLmRhdGEucGhvdG8pKTtcbiAgICAgICAgZGlzcGF0Y2goc2V0Q3VycmVudFBob3RvKHJlcy5kYXRhLnBob3RvKSk7XG4gICAgICB9XG5cbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICBjb25zb2xlLmxvZyhlKTtcbiAgICB9XG4gIH1cbn1cblxuXG5leHBvcnQgY29uc3QgZ2V0Q3VycmVudFBob3RvID0gKGlkKSA9PiB7XG4gIGxldCBhY2Nlc3NUb2tlbiA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdhY2Nlc3NUb2tlbicpXG4gIHJldHVybiBhc3luYyBkaXNwYXRjaCA9PiB7XG4gICAgdHJ5IHtcbiAgICAgIHJldHVybiBhd2FpdCBheGlvcy5nZXQoYGh0dHBzOi8vYXBpLnVuc3BsYXNoLmNvbS9waG90b3MvJHtpZH1gLCB7XG4gICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICBBdXRob3JpemF0aW9uOiBgQmVhcmVyICR7YWNjZXNzVG9rZW59YFxuICAgICAgICB9XG4gICAgICB9KS50aGVuKGFzeW5jIChyZXMpID0+IHtcbiAgICAgICAgbGV0IGN1cnJlbnRQaG90byA9IHJlcy5kYXRhXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHByZWxvYWRBc0Jsb2IoY3VycmVudFBob3RvLnVybHMuZnVsbCk7XG4gICAgICAgIGN1cnJlbnRQaG90by51cmxzLmZ1bGwgPSByZXN1bHQ7XG4gICAgICAgIHJldHVybiBkaXNwYXRjaChzZXRDdXJyZW50UGhvdG8oY3VycmVudFBob3RvKSlcbiAgICAgIH0pXG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgY29uc29sZS5sb2coZSk7XG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBjb25zdCBnZXRQaG90b3MgPSAoY3VycmVudFBhZ2UsIGlzTG9hZGluZykgPT4ge1xuICByZXR1cm4gYXN5bmMgZGlzcGF0Y2ggPT4ge1xuICAgIGlmIChpc0xvYWRpbmcpIHtcbiAgICAgIGF4aW9zLmdldChgaHR0cHM6Ly9hcGkudW5zcGxhc2guY29tL3Bob3Rvcy8/cGFnZT0ke2N1cnJlbnRQYWdlfSZwZXJfcGFnZT0xMGAsIHtcbiAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgIEF1dGhvcml6YXRpb246IGBDbGllbnQtSUQgYXZHWUx5OHhqLVI4STN0aVJTa2VWWnZSVjBSMzlXczM0bVpvZDNxbjNab2AsXG4gICAgICAgIH1cbiAgICAgIH0pLnRoZW4oYXN5bmMgKHJlcykgPT4ge1xuICAgICAgICBsZXQgcGhvdG9zID0gcmVzLmRhdGE7XG5cbiAgICAgICAgY29uc3QgYXN5bmNBcnJheSA9IHBob3Rvcy5tYXAoKGVsKSA9PiBhc3luYyAoKSA9PiB7XG4gICAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgcHJlbG9hZEFzQmxvYihlbC51cmxzLmZ1bGwpO1xuICAgICAgICAgIGNvbnN0IGltYWdlID0gbmV3IEltYWdlKCk7XG4gICAgICAgICAgaW1hZ2Uuc3JjID0gcmVzdWx0O1xuICAgICAgICAgIHJldHVybiBpbWFnZS5zcmM7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IFByb21pc2UuYWxsKGFzeW5jQXJyYXkubWFwKChmbikgPT4gZm4oKSkpO1xuXG4gICAgICAgIHBob3RvcyA9IHBob3Rvcy5tYXAoKGVsLCBpbmRleCkgPT4ge1xuICAgICAgICAgIGVsLnVybHMuc21hbGwgPSByZXN1bHRbaW5kZXhdO1xuICAgICAgICAgIHJldHVybiBlbFxuICAgICAgICB9KVxuXG4gICAgICAgIGN1cnJlbnRQYWdlICs9IDFcbiAgICAgICAgZGlzcGF0Y2goc2V0UGhvdG9zKHBob3RvcywgY3VycmVudFBhZ2UsIHJlcy5oZWFkZXJzWyd4LXRvdGFsJ10pKVxuXG4gICAgICB9KS5jYXRjaChlID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coZSlcbiAgICAgIH0pLmZpbmFsbHkoKCkgPT4ge1xuICAgICAgICBzZXRJc0xvYWRpbmcoZmFsc2UpXG4gICAgICB9KVxuICAgIH1cbiAgfVxufVxuXG4iLCJjb25zdCBMT0dJTiA9ICdMT0dJTicsXG4gIExPR09VVCA9ICdMT0dPVVQnLFxuICBJU19MT0FESU5HID0gJ0lTX0xPQURJTkcnO1xuXG5jb25zdCBkZWZhdWx0U3RhdGUgPSB7XG4gIGN1cnJlbnRVc2VyOiBudWxsLFxuICBpc0F1dGg6IGZhbHNlLFxuICBpc0xvYWRpbmc6IHRydWVcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYXV0aChzdGF0ZSA9IGRlZmF1bHRTdGF0ZSwgYWN0aW9uKSB7XG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICBjYXNlIExPR0lOOiB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgY3VycmVudFVzZXI6IGFjdGlvbi5wYXlsb2FkLFxuICAgICAgICBpc0F1dGg6IHRydWUsXG4gICAgICB9XG4gICAgfVxuXG4gICAgY2FzZSBMT0dPVVQ6XG4gICAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbSgnYWNjZXNzVG9rZW4nKVxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIGN1cnJlbnRVc2VyOiB7fSxcbiAgICAgICAgaXNBdXRoOiBmYWxzZSxcbiAgICAgICAgaXNMb2FkaW5nOiBmYWxzZVxuICAgICAgfVxuXG4gICAgY2FzZSBJU19MT0FESU5HOlxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIGlzTG9hZGluZzogYWN0aW9uLnBheWxvYWRcbiAgICAgIH1cblxuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gc3RhdGVcbiAgfVxufVxuXG5leHBvcnQgY29uc3Qgc2V0VXNlciA9IHVzZXIgPT4gKHt0eXBlOiBMT0dJTiwgcGF5bG9hZDogdXNlcn0pO1xuZXhwb3J0IGNvbnN0IGxvZ291dCA9ICgpID0+ICh7dHlwZTogTE9HT1VUfSk7XG5leHBvcnQgY29uc3Qgc2V0SXNMb2FkaW5nID0gKGJvb2wpID0+ICh7dHlwZTogSVNfTE9BRElORywgcGF5bG9hZDogYm9vbH0pO1xuXG5cblxuIiwiaW1wb3J0IHthcHBseU1pZGRsZXdhcmUsIGNvbWJpbmVSZWR1Y2VycywgY3JlYXRlU3RvcmV9IGZyb20gJ3JlZHV4JztcbmltcG9ydCBhdXRoIGZyb20gJy4vYXV0aCc7XG5pbXBvcnQge2NvbXBvc2VXaXRoRGV2VG9vbHN9IGZyb20gJ0ByZWR1eC1kZXZ0b29scy9leHRlbnNpb24nO1xuaW1wb3J0IHRodW5rIGZyb20gJ3JlZHV4LXRodW5rJztcbmltcG9ydCBtYWluIGZyb20gJy4vbWFpbic7XG5pbXBvcnQgcGhvdG9zIGZyb20gJy4vcGhvdG9zJztcblxuY29uc3Qgcm9vdFJlZHVjZXIgPSBjb21iaW5lUmVkdWNlcnMoe1xuICBhdXRoLFxuICBtYWluLFxuICBwaG90b3Ncbn0pXG5cbmV4cG9ydCBjb25zdCBzdG9yZSA9IGNyZWF0ZVN0b3JlKHJvb3RSZWR1Y2VyLCBjb21wb3NlV2l0aERldlRvb2xzKGFwcGx5TWlkZGxld2FyZSh0aHVuaykpKVxuIiwiY29uc3QgR0VUX1BIT1RPUyA9ICdHRVRfUEhPVE9TJyxcbiAgR0VUX0xPQ0FUSU9OID0gJ0dFVF9MT0NBVElPTicsXG4gIElTX0xPQURJTkcgPSAnSVNfTE9BRElORydcblxuY29uc3QgZGVmYXVsdFN0YXRlID0ge1xuICBsb2NhdGlvbjogJycsXG4gIGlzTG9hZGluZzogdHJ1ZSxcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbWFpbihzdGF0ZSA9IGRlZmF1bHRTdGF0ZSwgYWN0aW9uKSB7XG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICBjYXNlIEdFVF9MT0NBVElPTjpcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBsb2NhdGlvbjogYWN0aW9uLnBheWxvYWRcbiAgICAgIH1cbiAgICBjYXNlIElTX0xPQURJTkc6XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgaXNMb2FkaW5nOiBhY3Rpb24ucGF5bG9hZFxuICAgICAgfVxuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gc3RhdGVcbiAgfVxufVxuXG5leHBvcnQgY29uc3Qgc2V0TG9jYXRpb24gPSBsb2NhdGlvbiA9PiAoe3R5cGU6IEdFVF9MT0NBVElPTiwgcGF5bG9hZDogbG9jYXRpb259KVxuZXhwb3J0IGNvbnN0IHNldElzTG9hZGluZyA9IChib29sKSA9PiAoe3R5cGU6IElTX0xPQURJTkcsIHBheWxvYWQ6IGJvb2x9KVxuIiwiY29uc3QgU0VUX0NPTlRFTlQgPSAnR0VUX0NPTlRFTlQnLFxuICBTRVRfT1JfREVMRVRFX0xJS0UgPSAnU0VUX09SX0RFTEVURV9MSUtFJyxcbiAgU0VUX0NVUlJFTlRfUEhPVE8gPSAnU0VUX0NVUlJFTlRfUEhPVE8nLFxuICBJU19MT0FESU5HID0gJ0lTX0xPQURJTkcnO1xuXG5jb25zdCBkZWZhdWx0U3RhdGUgPSB7XG4gIGNvbnRlbnQ6IFtdLFxuICBwaG90b1RvdGFsQ291bnQ6IDAsXG4gIHNldExpa2VDbGFzc05hbWU6ICcnLFxuICBjdXJyZW50UGhvdG86ICcnLFxuICBjdXJyZW50UGFnZTogMSxcbiAgaXNMb2FkaW5nOiB0cnVlXG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHBob3RvcyhzdGF0ZSA9IGRlZmF1bHRTdGF0ZSwgYWN0aW9uKSB7XG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICBjYXNlIFNFVF9DT05URU5UOlxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIGNvbnRlbnQ6IFsuLi5zdGF0ZS5jb250ZW50LCAuLi5hY3Rpb24ucGF5bG9hZC5jb250ZW50XS5yZWR1Y2UoKHByZXZFbCwgbmV4dEVsKSA9PiB7XG4gICAgICAgICAgaWYgKCFwcmV2RWwuZmluZChpdGVtID0+IGl0ZW0uaWQgPT09IG5leHRFbC5pZCkpIHtcbiAgICAgICAgICAgIHByZXZFbC5wdXNoKG5leHRFbCk7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiBwcmV2RWw7XG4gICAgICAgIH0sIFtdKSxcbiAgICAgICAgY3VycmVudFBhZ2U6IGFjdGlvbi5wYXlsb2FkLmN1cnJlbnRQYWdlLFxuICAgICAgICBwaG90b1RvdGFsQ291bnQ6IGFjdGlvbi5wYXlsb2FkLnBob3RvVG90YWxDb3VudCxcbiAgICAgICAgaXNMb2FkaW5nOiBmYWxzZVxuICAgICAgfVxuXG4gICAgY2FzZSBTRVRfT1JfREVMRVRFX0xJS0U6XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgY29udGVudDogc3RhdGUuY29udGVudC5tYXAocGhvdG8gPT4ge1xuICAgICAgICAgIGlmIChwaG90by5pZCA9PT0gYWN0aW9uLnBheWxvYWQuaWQpIHtcbiAgICAgICAgICAgIHJldHVybiBhY3Rpb24ucGF5bG9hZFxuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gcGhvdG9cbiAgICAgICAgfSksXG4gICAgICAgIGN1cnJlbnRQaG90bzogYWN0aW9uLnBheWxvYWRcbiAgICAgIH1cblxuICAgIGNhc2UgSVNfTE9BRElORzpcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBpc0xvYWRpbmc6IGFjdGlvbi5wYXlsb2FkXG4gICAgICB9XG5cbiAgICBjYXNlIFNFVF9DVVJSRU5UX1BIT1RPOlxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIGN1cnJlbnRQaG90bzogYWN0aW9uLnBheWxvYWRcbiAgICAgIH1cblxuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gc3RhdGVcbiAgfVxufVxuXG5cbmV4cG9ydCBjb25zdCBzZXRQaG90b3MgPSAoY29udGVudCwgY3VycmVudFBhZ2UsIHBob3RvVG90YWxDb3VudCkgPT4gKHtcbiAgdHlwZTogU0VUX0NPTlRFTlQsXG4gIHBheWxvYWQ6IHtjb250ZW50LCBjdXJyZW50UGFnZSwgcGhvdG9Ub3RhbENvdW50fVxufSlcblxuZXhwb3J0IGNvbnN0IHNldE9yRGVsZXRlTGlrZSA9IChwaG90bykgPT4gKHt0eXBlOiBTRVRfT1JfREVMRVRFX0xJS0UsIHBheWxvYWQ6IHBob3RvfSk7XG5leHBvcnQgY29uc3Qgc2V0Q3VycmVudFBob3RvID0gcGhvdG8gPT4gKHt0eXBlOiBTRVRfQ1VSUkVOVF9QSE9UTywgcGF5bG9hZDogcGhvdG99KTtcblxuXG5cbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCJhc3NldHMvZm9udHMvTW9udHNlcnJhdC1SZWd1bGFyLndvZmZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyA9IG5ldyBVUkwoXCIuL2Fzc2V0cy9pbWFnZXMvc3ZnL3JpZ2h0LWNoZXZyb24uc3ZnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6ICdNb250c2VycmF0Jywgc2Fucy1zZXJpZjtcXG4gIHNyYzogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyArIFwiKSBmb3JtYXQoJ3dvZmYnKTtcXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XFxuICBmb250LXN0eWxlOiBub3JtYWw7XFxufVxcblxcbi5jb250YWluZXIge1xcbiAgbWF4LXdpZHRoOiAxNDQwcHg7XFxuICBtYXJnaW46IDAgYXV0bztcXG4gIHBhZGRpbmc6IDAgMTAwcHg7XFxufVxcblxcbjpyb290IHtcXG4gIC0tY29sb3Itd2lsZHNhbmQ6ICNmNGY0ZjQ7XFxuICAtLWNvbG9yLXdoaXRlOiAjZmZmO1xcbiAgLS1jb2xvci1ibGFjazogIzAwMDtcXG4gIC0tY29sb3ItZW1pbmVuY2U6ICM2NjJkOTE7XFxuICAtLWNvbG9yLWV1Y2FseXB0dXM6ICM0ZmQxYzU7XFxuICAtLWNvbG9yLWdyYXk6ICM4NTg1ODU7XFxuICAtLWNvbG9yLXR1bmRvcmE6ICM0NTQ1NDU7XFxuICAtLWNvbG9yLWJyaWdodC10dXJxdW9pc2U6ICMwMGZmY2I7XFxuICAtLWNvbG9yLWJhY2tncm91bmQ6ICM0NTQ1NDU1MjtcXG4gIC0tY29sb3ItbWFpbi10aXRsZTogIzExZDliMDtcXG4gIC0tY29sb3ItYmFja2dyLWltZzogcmdiYSg0OCwgNDUsIDQ1LCAwLjU5KTtcXG4gIC0tY29sb3ItcHJvZmlsZS1idG5zLWJhY2tncm91bmQ6ICM2MjU2NTY7XFxuICAtLWNvbG9yLWxpa2VkLWJ5LXVzZXI6ICM4ZjRjYzE7XFxuICAtLWNvbG9yLWRhcmstYmdjOiAjMWUxYTFhNTk7XFxufVxcblxcbmh0bWwge1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuKixcXG4qOjpiZWZvcmUsXFxuKjo6YWZ0ZXIge1xcbiAgYm94LXNpemluZzogaW5oZXJpdDtcXG59XFxuXFxuYm9keSB7XFxuICAvKm92ZXJmbG93LWFuY2hvcjogbm9uZTsqL1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG4gIGZvbnQtZmFtaWx5OiAnTW9udHNlcnJhdCcsIHNhbnMtc2VyaWY7XFxuICBmb250LXdlaWdodDogNDAwO1xcbiAgZm9udC1zaXplOiAxNnB4O1xcbiAgY29sb3I6IHZhcigtLWNvbG9yLWJsYWNrKTtcXG59XFxuXFxuaW1nIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgb2JqZWN0LWZpdDogY292ZXI7XFxufVxcblxcbmEge1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgY29sb3I6IGluaGVyaXQ7XFxufVxcblxcbnVsIHtcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbn1cXG5cXG4udmlzdWFsbHktaGlkZGVuIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZSAhaW1wb3J0YW50O1xcbiAgY2xpcDogcmVjdCgxcHggMXB4IDFweCAxcHgpO1xcbiAgY2xpcDogcmVjdCgxcHgsIDFweCwgMXB4LCAxcHgpO1xcbiAgcGFkZGluZzogMCAhaW1wb3J0YW50O1xcbiAgYm9yZGVyOiAwICFpbXBvcnRhbnQ7XFxuICBoZWlnaHQ6IDFweCAhaW1wb3J0YW50O1xcbiAgd2lkdGg6IDFweCAhaW1wb3J0YW50O1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG59XFxuXFxuLmJ0bi1yZXNldCB7XFxuICBvdXRsaW5lOiBub25lO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICBib3JkZXI6IG5vbmU7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5zd2lwZXItY29udGFpbmVyIHtcXG4gIGhlaWdodDogNTQ0cHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1iYWNrZ3JvdW5kKTtcXG59XFxuXFxuLnN3aXBlci1wYWdpbmF0aW9uLWJ1bGxldCB7XFxuICB3aWR0aDogOHB4O1xcbiAgaGVpZ2h0OiA4cHg7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICBiYWNrZ3JvdW5kOiAjMDAwO1xcbiAgb3BhY2l0eTogMC4yO1xcbn1cXG5cXG4uc3dpcGVyLXBhZ2luYXRpb24tZnJhY3Rpb24sXFxuLnN3aXBlci1wYWdpbmF0aW9uLWN1c3RvbSxcXG4uc3dpcGVyLWNvbnRhaW5lci1ob3Jpem9udGFsID4gLnN3aXBlci1wYWdpbmF0aW9uLWJ1bGxldHMge1xcbiAgYm90dG9tOiAyNXB4O1xcbn1cXG5cXG4uc3dpcGVyLWNvbnRhaW5lci1ob3Jpem9udGFsID4gLnN3aXBlci1wYWdpbmF0aW9uLWJ1bGxldHMgLnN3aXBlci1wYWdpbmF0aW9uLWJ1bGxldCB7XFxuICBtYXJnaW46IDAgMTVweDtcXG59XFxuXFxuLnN3aXBlci1wYWdpbmF0aW9uLWJ1bGxldCB7XFxuICBtYXJnaW46IDAgNDBweDtcXG4gIHdpZHRoOiA2cHg7XFxuICBoZWlnaHQ6IDZweDtcXG4gIGJhY2tncm91bmQ6IHZhcigtLWNvbG9yLXdoaXRlKTtcXG4gIG9wYWNpdHk6IDAuNztcXG59XFxuXFxuLnN3aXBlci1wYWdpbmF0aW9uLWJ1bGxldC1hY3RpdmUge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItYmxhY2spO1xcbiAgb3BhY2l0eTogMTtcXG59XFxuXFxuXFxuLnN3aXBlci1wYWdpbmF0aW9uLWJ1bGxldC1hY3RpdmU6OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcIjtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGxlZnQ6IDUwJTtcXG4gIHRvcDogNTAlO1xcbiAgei1pbmRleDogLTE7XFxuICBib3JkZXItcmFkaXVzOiAxMDAlO1xcbiAgd2lkdGg6IDIwcHg7XFxuICBoZWlnaHQ6IDIwcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci13aGl0ZSk7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcXG59XFxuXFxuLnN3aXBlci1wYWdpbmF0aW9uLWZyYWN0aW9uLFxcbi5zd2lwZXItcGFnaW5hdGlvbi1jdXN0b20sXFxuLnN3aXBlci1jb250YWluZXItaG9yaXpvbnRhbCA+IC5zd2lwZXItcGFnaW5hdGlvbi1idWxsZXRzIHtcXG4gIGJvdHRvbTogMjVweDtcXG59XFxuXFxuLnN3aXBlci1jb250YWluZXItaG9yaXpvbnRhbCA+IC5zd2lwZXItcGFnaW5hdGlvbi1idWxsZXRzIC5zd2lwZXItcGFnaW5hdGlvbi1idWxsZXQge1xcbiAgbWFyZ2luOiAwIDE1cHg7XFxufVxcblxcbi5zd2lwZXItcGFnaW5hdGlvbi1idWxsZXQge1xcbiAgbWFyZ2luOiAwIDQwcHg7XFxuICB3aWR0aDogNnB4O1xcbiAgaGVpZ2h0OiA2cHg7XFxuICBiYWNrZ3JvdW5kOiB2YXIoLS1jb2xvci13aGl0ZSk7XFxuICBvcGFjaXR5OiAwLjc7XFxufVxcblxcblxcbi5zd2lwZXItcGFnaW5hdGlvbi1idWxsZXQtYWN0aXZlIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLWJsYWNrKTtcXG4gIG9wYWNpdHk6IDE7XFxufVxcblxcbi5zd2lwZXItYnV0dG9uLW5leHQsXFxuLnN3aXBlci1idXR0b24tcHJldiB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG5cXG4uc3dpcGVyLWJ1dHRvbi1uZXh0LFxcbi5zd2lwZXItYnV0dG9uLXByZXYge1xcbiAgd2lkdGg6IDQwcHggIWltcG9ydGFudDtcXG4gIGhlaWdodDogNTJweCAhaW1wb3J0YW50O1xcbiAgbWFyZ2luLXRvcDogMCAhaW1wb3J0YW50O1xcblxcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxuICBvcGFjaXR5OiAwLjY7XFxufVxcblxcbi5zd2lwZXItYnV0dG9uLW5leHQge1xcbiAgcmlnaHQ6IDQ0cHggIWltcG9ydGFudDtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKDUwJSwgLTUwJSk7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fICsgXCIpO1xcbn1cXG5cXG4uc3dpcGVyLWJ1dHRvbi1wcmV2IHtcXG4gIGxlZnQ6IDQ0cHggIWltcG9ydGFudDtcXG4gIHRyYW5zZm9ybTogcm90YXRlKDE4MGRlZykgdHJhbnNsYXRlKDUwJSwgNTAlKTtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gKyBcIik7XFxufVxcblxcbi5zd2lwZXItYnV0dG9uLW5leHQ6aG92ZXIsXFxuLnN3aXBlci1idXR0b24tcHJldjpob3ZlciB7XFxuICBvcGFjaXR5OiAxO1xcbn1cXG5cXG4uc3dpcGVyLWJ1dHRvbi1uZXh0OmFmdGVyLFxcbi5zd2lwZXItYnV0dG9uLXByZXY6YWZ0ZXIge1xcbiAgY29udGVudDogJycgIWltcG9ydGFudDtcXG59XFxuXFxuQG1lZGlhIChtYXgtd2lkdGg6IDEwMjRweCkge1xcbiAgLmNvbnRhaW5lciB7XFxuICAgIHBhZGRpbmc6IDAgMjBweDtcXG4gIH1cXG59XFxuXFxuQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7XFxuICAuc3dpcGVyLXBhZ2luYXRpb24ge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgfVxcblxcbiAgLnN3aXBlci1idXR0b24tbmV4dCxcXG4gIC5zd2lwZXItYnV0dG9uLXByZXYge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgfVxcbn1cXG5cXG5cXG5AbWVkaWEgKG1heC13aWR0aDogNTc2cHgpIHtcXG4gIC5zd2lwZXItY29udGFpbmVyIHtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgfVxcblxcbiAgLnN3aXBlci1idXR0b24tbmV4dCxcXG4gIC5zd2lwZXItYnV0dG9uLXByZXYge1xcbiAgICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XFxuICB9XFxufVxcblxcblxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UscUNBQXFDO0VBQ3JDLDJEQUErRDtFQUMvRCxnQkFBZ0I7RUFDaEIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLGNBQWM7RUFDZCxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsbUJBQW1CO0VBQ25CLG1CQUFtQjtFQUNuQix5QkFBeUI7RUFDekIsMkJBQTJCO0VBQzNCLHFCQUFxQjtFQUNyQix3QkFBd0I7RUFDeEIsaUNBQWlDO0VBQ2pDLDZCQUE2QjtFQUM3QiwyQkFBMkI7RUFDM0IsMENBQTBDO0VBQzFDLHdDQUF3QztFQUN4Qyw4QkFBOEI7RUFDOUIsMkJBQTJCO0FBQzdCOztBQUVBO0VBQ0Usc0JBQXNCO0FBQ3hCOztBQUVBOzs7RUFHRSxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsU0FBUztFQUNULFVBQVU7RUFDVixxQ0FBcUM7RUFDckMsZ0JBQWdCO0VBQ2hCLGVBQWU7RUFDZix5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UscUJBQXFCO0VBQ3JCLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsU0FBUztFQUNULFVBQVU7QUFDWjs7QUFFQTtFQUNFLDZCQUE2QjtFQUM3QiwyQkFBMkI7RUFDM0IsOEJBQThCO0VBQzlCLHFCQUFxQjtFQUNyQixvQkFBb0I7RUFDcEIsc0JBQXNCO0VBQ3RCLHFCQUFxQjtFQUNyQixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsNkJBQTZCO0VBQzdCLFlBQVk7RUFDWixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHlDQUF5QztBQUMzQzs7QUFFQTtFQUNFLFVBQVU7RUFDVixXQUFXO0VBQ1gscUJBQXFCO0VBQ3JCLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsWUFBWTtBQUNkOztBQUVBOzs7RUFHRSxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsY0FBYztFQUNkLFVBQVU7RUFDVixXQUFXO0VBQ1gsOEJBQThCO0VBQzlCLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixvQ0FBb0M7RUFDcEMsVUFBVTtBQUNaOzs7QUFHQTtFQUNFLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsU0FBUztFQUNULFFBQVE7RUFDUixXQUFXO0VBQ1gsbUJBQW1CO0VBQ25CLFdBQVc7RUFDWCxZQUFZO0VBQ1osb0NBQW9DO0VBQ3BDLGdDQUFnQztBQUNsQzs7QUFFQTs7O0VBR0UsWUFBWTtBQUNkOztBQUVBO0VBQ0UsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGNBQWM7RUFDZCxVQUFVO0VBQ1YsV0FBVztFQUNYLDhCQUE4QjtFQUM5QixZQUFZO0FBQ2Q7OztBQUdBO0VBQ0Usa0JBQWtCO0VBQ2xCLG9DQUFvQztFQUNwQyxVQUFVO0FBQ1o7O0FBRUE7O0VBRUUsYUFBYTtBQUNmOzs7QUFHQTs7RUFFRSxzQkFBc0I7RUFDdEIsdUJBQXVCO0VBQ3ZCLHdCQUF3Qjs7RUFFeEIsc0JBQXNCO0VBQ3RCLDRCQUE0QjtFQUM1QixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxzQkFBc0I7RUFDdEIsK0JBQStCO0VBQy9CLHlEQUE0RDtBQUM5RDs7QUFFQTtFQUNFLHFCQUFxQjtFQUNyQiw2Q0FBNkM7RUFDN0MseURBQTREO0FBQzlEOztBQUVBOztFQUVFLFVBQVU7QUFDWjs7QUFFQTs7RUFFRSxzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRTtJQUNFLGVBQWU7RUFDakI7QUFDRjs7QUFFQTtFQUNFO0lBQ0UsYUFBYTtFQUNmOztFQUVBOztJQUVFLGFBQWE7RUFDZjtBQUNGOzs7QUFHQTtFQUNFO0lBQ0UsWUFBWTtFQUNkOztFQUVBOztJQUVFLHdCQUF3QjtFQUMxQjtBQUNGXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6ICdNb250c2VycmF0Jywgc2Fucy1zZXJpZjtcXG4gIHNyYzogdXJsKCdhc3NldHMvZm9udHMvTW9udHNlcnJhdC1SZWd1bGFyLndvZmYnKSBmb3JtYXQoJ3dvZmYnKTtcXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XFxuICBmb250LXN0eWxlOiBub3JtYWw7XFxufVxcblxcbi5jb250YWluZXIge1xcbiAgbWF4LXdpZHRoOiAxNDQwcHg7XFxuICBtYXJnaW46IDAgYXV0bztcXG4gIHBhZGRpbmc6IDAgMTAwcHg7XFxufVxcblxcbjpyb290IHtcXG4gIC0tY29sb3Itd2lsZHNhbmQ6ICNmNGY0ZjQ7XFxuICAtLWNvbG9yLXdoaXRlOiAjZmZmO1xcbiAgLS1jb2xvci1ibGFjazogIzAwMDtcXG4gIC0tY29sb3ItZW1pbmVuY2U6ICM2NjJkOTE7XFxuICAtLWNvbG9yLWV1Y2FseXB0dXM6ICM0ZmQxYzU7XFxuICAtLWNvbG9yLWdyYXk6ICM4NTg1ODU7XFxuICAtLWNvbG9yLXR1bmRvcmE6ICM0NTQ1NDU7XFxuICAtLWNvbG9yLWJyaWdodC10dXJxdW9pc2U6ICMwMGZmY2I7XFxuICAtLWNvbG9yLWJhY2tncm91bmQ6ICM0NTQ1NDU1MjtcXG4gIC0tY29sb3ItbWFpbi10aXRsZTogIzExZDliMDtcXG4gIC0tY29sb3ItYmFja2dyLWltZzogcmdiYSg0OCwgNDUsIDQ1LCAwLjU5KTtcXG4gIC0tY29sb3ItcHJvZmlsZS1idG5zLWJhY2tncm91bmQ6ICM2MjU2NTY7XFxuICAtLWNvbG9yLWxpa2VkLWJ5LXVzZXI6ICM4ZjRjYzE7XFxuICAtLWNvbG9yLWRhcmstYmdjOiAjMWUxYTFhNTk7XFxufVxcblxcbmh0bWwge1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuKixcXG4qOjpiZWZvcmUsXFxuKjo6YWZ0ZXIge1xcbiAgYm94LXNpemluZzogaW5oZXJpdDtcXG59XFxuXFxuYm9keSB7XFxuICAvKm92ZXJmbG93LWFuY2hvcjogbm9uZTsqL1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG4gIGZvbnQtZmFtaWx5OiAnTW9udHNlcnJhdCcsIHNhbnMtc2VyaWY7XFxuICBmb250LXdlaWdodDogNDAwO1xcbiAgZm9udC1zaXplOiAxNnB4O1xcbiAgY29sb3I6IHZhcigtLWNvbG9yLWJsYWNrKTtcXG59XFxuXFxuaW1nIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgb2JqZWN0LWZpdDogY292ZXI7XFxufVxcblxcbmEge1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgY29sb3I6IGluaGVyaXQ7XFxufVxcblxcbnVsIHtcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbn1cXG5cXG4udmlzdWFsbHktaGlkZGVuIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZSAhaW1wb3J0YW50O1xcbiAgY2xpcDogcmVjdCgxcHggMXB4IDFweCAxcHgpO1xcbiAgY2xpcDogcmVjdCgxcHgsIDFweCwgMXB4LCAxcHgpO1xcbiAgcGFkZGluZzogMCAhaW1wb3J0YW50O1xcbiAgYm9yZGVyOiAwICFpbXBvcnRhbnQ7XFxuICBoZWlnaHQ6IDFweCAhaW1wb3J0YW50O1xcbiAgd2lkdGg6IDFweCAhaW1wb3J0YW50O1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG59XFxuXFxuLmJ0bi1yZXNldCB7XFxuICBvdXRsaW5lOiBub25lO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICBib3JkZXI6IG5vbmU7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5zd2lwZXItY29udGFpbmVyIHtcXG4gIGhlaWdodDogNTQ0cHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1iYWNrZ3JvdW5kKTtcXG59XFxuXFxuLnN3aXBlci1wYWdpbmF0aW9uLWJ1bGxldCB7XFxuICB3aWR0aDogOHB4O1xcbiAgaGVpZ2h0OiA4cHg7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICBiYWNrZ3JvdW5kOiAjMDAwO1xcbiAgb3BhY2l0eTogMC4yO1xcbn1cXG5cXG4uc3dpcGVyLXBhZ2luYXRpb24tZnJhY3Rpb24sXFxuLnN3aXBlci1wYWdpbmF0aW9uLWN1c3RvbSxcXG4uc3dpcGVyLWNvbnRhaW5lci1ob3Jpem9udGFsID4gLnN3aXBlci1wYWdpbmF0aW9uLWJ1bGxldHMge1xcbiAgYm90dG9tOiAyNXB4O1xcbn1cXG5cXG4uc3dpcGVyLWNvbnRhaW5lci1ob3Jpem9udGFsID4gLnN3aXBlci1wYWdpbmF0aW9uLWJ1bGxldHMgLnN3aXBlci1wYWdpbmF0aW9uLWJ1bGxldCB7XFxuICBtYXJnaW46IDAgMTVweDtcXG59XFxuXFxuLnN3aXBlci1wYWdpbmF0aW9uLWJ1bGxldCB7XFxuICBtYXJnaW46IDAgNDBweDtcXG4gIHdpZHRoOiA2cHg7XFxuICBoZWlnaHQ6IDZweDtcXG4gIGJhY2tncm91bmQ6IHZhcigtLWNvbG9yLXdoaXRlKTtcXG4gIG9wYWNpdHk6IDAuNztcXG59XFxuXFxuLnN3aXBlci1wYWdpbmF0aW9uLWJ1bGxldC1hY3RpdmUge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItYmxhY2spO1xcbiAgb3BhY2l0eTogMTtcXG59XFxuXFxuXFxuLnN3aXBlci1wYWdpbmF0aW9uLWJ1bGxldC1hY3RpdmU6OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcIjtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGxlZnQ6IDUwJTtcXG4gIHRvcDogNTAlO1xcbiAgei1pbmRleDogLTE7XFxuICBib3JkZXItcmFkaXVzOiAxMDAlO1xcbiAgd2lkdGg6IDIwcHg7XFxuICBoZWlnaHQ6IDIwcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci13aGl0ZSk7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcXG59XFxuXFxuLnN3aXBlci1wYWdpbmF0aW9uLWZyYWN0aW9uLFxcbi5zd2lwZXItcGFnaW5hdGlvbi1jdXN0b20sXFxuLnN3aXBlci1jb250YWluZXItaG9yaXpvbnRhbCA+IC5zd2lwZXItcGFnaW5hdGlvbi1idWxsZXRzIHtcXG4gIGJvdHRvbTogMjVweDtcXG59XFxuXFxuLnN3aXBlci1jb250YWluZXItaG9yaXpvbnRhbCA+IC5zd2lwZXItcGFnaW5hdGlvbi1idWxsZXRzIC5zd2lwZXItcGFnaW5hdGlvbi1idWxsZXQge1xcbiAgbWFyZ2luOiAwIDE1cHg7XFxufVxcblxcbi5zd2lwZXItcGFnaW5hdGlvbi1idWxsZXQge1xcbiAgbWFyZ2luOiAwIDQwcHg7XFxuICB3aWR0aDogNnB4O1xcbiAgaGVpZ2h0OiA2cHg7XFxuICBiYWNrZ3JvdW5kOiB2YXIoLS1jb2xvci13aGl0ZSk7XFxuICBvcGFjaXR5OiAwLjc7XFxufVxcblxcblxcbi5zd2lwZXItcGFnaW5hdGlvbi1idWxsZXQtYWN0aXZlIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLWJsYWNrKTtcXG4gIG9wYWNpdHk6IDE7XFxufVxcblxcbi5zd2lwZXItYnV0dG9uLW5leHQsXFxuLnN3aXBlci1idXR0b24tcHJldiB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG5cXG4uc3dpcGVyLWJ1dHRvbi1uZXh0LFxcbi5zd2lwZXItYnV0dG9uLXByZXYge1xcbiAgd2lkdGg6IDQwcHggIWltcG9ydGFudDtcXG4gIGhlaWdodDogNTJweCAhaW1wb3J0YW50O1xcbiAgbWFyZ2luLXRvcDogMCAhaW1wb3J0YW50O1xcblxcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxuICBvcGFjaXR5OiAwLjY7XFxufVxcblxcbi5zd2lwZXItYnV0dG9uLW5leHQge1xcbiAgcmlnaHQ6IDQ0cHggIWltcG9ydGFudDtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKDUwJSwgLTUwJSk7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi9hc3NldHMvaW1hZ2VzL3N2Zy9yaWdodC1jaGV2cm9uLnN2Zyk7XFxufVxcblxcbi5zd2lwZXItYnV0dG9uLXByZXYge1xcbiAgbGVmdDogNDRweCAhaW1wb3J0YW50O1xcbiAgdHJhbnNmb3JtOiByb3RhdGUoMTgwZGVnKSB0cmFuc2xhdGUoNTAlLCA1MCUpO1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4vYXNzZXRzL2ltYWdlcy9zdmcvcmlnaHQtY2hldnJvbi5zdmcpO1xcbn1cXG5cXG4uc3dpcGVyLWJ1dHRvbi1uZXh0OmhvdmVyLFxcbi5zd2lwZXItYnV0dG9uLXByZXY6aG92ZXIge1xcbiAgb3BhY2l0eTogMTtcXG59XFxuXFxuLnN3aXBlci1idXR0b24tbmV4dDphZnRlcixcXG4uc3dpcGVyLWJ1dHRvbi1wcmV2OmFmdGVyIHtcXG4gIGNvbnRlbnQ6ICcnICFpbXBvcnRhbnQ7XFxufVxcblxcbkBtZWRpYSAobWF4LXdpZHRoOiAxMDI0cHgpIHtcXG4gIC5jb250YWluZXIge1xcbiAgICBwYWRkaW5nOiAwIDIwcHg7XFxuICB9XFxufVxcblxcbkBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkge1xcbiAgLnN3aXBlci1wYWdpbmF0aW9uIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gIH1cXG5cXG4gIC5zd2lwZXItYnV0dG9uLW5leHQsXFxuICAuc3dpcGVyLWJ1dHRvbi1wcmV2IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gIH1cXG59XFxuXFxuXFxuQG1lZGlhIChtYXgtd2lkdGg6IDU3NnB4KSB7XFxuICAuc3dpcGVyLWNvbnRhaW5lciB7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gIH1cXG5cXG4gIC5zd2lwZXItYnV0dG9uLW5leHQsXFxuICAuc3dpcGVyLWJ1dHRvbi1wcmV2IHtcXG4gICAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xcbiAgfVxcbn1cXG5cXG5cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4uLy4uL2Fzc2V0cy9pbWFnZXMvc3ZnL3RlbGVwaG9uZS5zdmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyA9IG5ldyBVUkwoXCIuLi8uLi9hc3NldHMvaW1hZ2VzL3N2Zy9tYWlsLnN2Z1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yX19fID0gbmV3IFVSTChcIi4uLy4uL2Fzc2V0cy9pbWFnZXMvc3ZnL3ZrLnN2Z1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8zX19fID0gbmV3IFVSTChcIi4uLy4uL2Fzc2V0cy9pbWFnZXMvc3ZnL2dvb2dsZS5zdmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfNF9fXyA9IG5ldyBVUkwoXCIuLi8uLi9hc3NldHMvaW1hZ2VzL3N2Zy9vay1sb2dvLnN2Z1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMl9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzJfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzNfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8zX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF80X19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfNF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIuZm9vdGVyLW1fX2Zvb3Rlci0tR1lSZG0ge1xcbiAgY29sb3I6IHZhcigtLWNvbG9yLXdoaXRlKTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLWVtaW5lbmNlKTtcXG59XFxuXFxuLmZvb3Rlci1tX19mb290ZXItLUdZUmRtIHNwYW4ge1xcbiAgZm9udC1zaXplOiAyMnB4O1xcbn1cXG5cXG4uZm9vdGVyLW1fX2NvbnRhaW5lci0td0x6Q0Mge1xcbiAgbWFyZ2luOiAwIGF1dG87XFxuICBwYWRkaW5nOiAwIDIwcHg7XFxuICBtYXgtd2lkdGg6IDEwNjBweDtcXG59XFxuXFxuLmZvb3Rlci1tX19mb290ZXJUb3AtLU5DUXRDIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBwYWRkaW5nOiA2MHB4IDA7XFxufVxcblxcbi5mb290ZXItbV9fZm9vdGVyVG9wLS1OQ1F0QyBpbWcge1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICB3aWR0aDogMTAwcHg7XFxuICBoZWlnaHQ6IDU0cHg7XFxufVxcblxcbi5mb290ZXItbV9fY29udGFjdHMtLXR0SWVLIHNwYW4ge1xcbiAgZm9udC1zaXplOiAyMnB4O1xcbn1cXG5cXG4uZm9vdGVyLW1fX2NvbnRhY3RzTGlzdC0tTVowNUcge1xcbiAgbWFyZ2luLXRvcDogMjBweDtcXG59XFxuXFxuLmZvb3Rlci1tX19jb250YWN0c0xpc3QtLU1aMDVHIGxpOm5vdCg6bGFzdC1jaGlsZCkge1xcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcXG59XFxuXFxuLmZvb3Rlci1tX19jb250YWN0c0xpc3QtLU1aMDVHIGEge1xcbiAgdHJhbnNpdGlvbjogdGV4dC1kZWNvcmF0aW9uIDAuM3MgZWFzZS1pbjtcXG59XFxuXFxuLmZvb3Rlci1tX19jb250YWN0c0xpc3QtLU1aMDVHIGE6aG92ZXIge1xcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XFxuICB0cmFuc2l0aW9uOiB0ZXh0LWRlY29yYXRpb24gMC4zcyBlYXNlLWluO1xcbn1cXG5cXG4uZm9vdGVyLW1fX2xpc3RJdGVtVGVsLS1Nb2p0MyxcXG4uZm9vdGVyLW1fX2xpc3RJdGVtTWFpbC0tYlBTZXcge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgcGFkZGluZy1sZWZ0OiAzMHB4O1xcbn1cXG5cXG4uZm9vdGVyLW1fX2xpc3RJdGVtVGVsLS1Nb2p0Mzo6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6ICcnO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgbGVmdDogMDtcXG4gIHRvcDogMDtcXG4gIHdpZHRoOiAxNnB4O1xcbiAgaGVpZ2h0OiAxNnB4O1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyArIFwiKTtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxufVxcblxcbi5mb290ZXItbV9fbGlzdEl0ZW1NYWlsLS1iUFNldzo6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6ICcnO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgbGVmdDogMDtcXG4gIHRvcDogMDtcXG4gIHdpZHRoOiAxNnB4O1xcbiAgaGVpZ2h0OiAxNnB4O1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyArIFwiKTtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxufVxcblxcbi5mb290ZXItbV9fc29jaWFsTGlzdC0tTFF3Ungge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIG1hcmdpbi10b3A6IDIwcHg7XFxufVxcblxcbi5mb290ZXItbV9fbGluay0tV3hqOFAge1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1jb2xvci13aGl0ZSk7XFxuICBib3JkZXItcmFkaXVzOiAxMDAlO1xcbiAgd2lkdGg6IDQwcHg7XFxuICBoZWlnaHQ6IDQwcHg7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XFxuICBiYWNrZ3JvdW5kLXNpemU6IDIwcHggMjBweDtcXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxufVxcblxcbi5mb290ZXItbV9fbGluay0tV3hqOFA6aG92ZXIge1xcbiAgYm9yZGVyOiAxcHggc29saWQgIzNiNTk5ODtcXG4gIGJveC1zaGFkb3c6IDAgMCAxNXB4IHZhcigtLWNvbG9yLWJyaWdodC10dXJxdW9pc2UpO1xcbiAgdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZTtcXG59XFxuXFxuLmZvb3Rlci1tX192ay0tUl9nYUgge1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMl9fXyArIFwiKTtcXG59XFxuXFxuLmZvb3Rlci1tX19nb29nbGUtLWhrMlplIHtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzNfX18gKyBcIik7XFxufVxcblxcbi5mb290ZXItbV9fb2stLW5aUk5hIHtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzRfX18gKyBcIik7XFxufVxcblxcbi5mb290ZXItbV9fZm9vdGVyQm90dG9tLS12SWJzNSB7XFxuICBib3JkZXItdG9wOiAxcHggc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjQpO1xcbiAgcGFkZGluZzogMjBweCAwO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG5AbWVkaWEgKG1heC13aWR0aDogNTc2cHgpIHtcXG4gIC5mb290ZXItbV9fZm9vdGVyVG9wLS1OQ1F0QyB7XFxuICAgIHBhZGRpbmc6IDIwcHggMDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIH1cXG5cXG4gIC5mb290ZXItbV9fZm9vdGVyVG9wLS1OQ1F0QyBpbWcsXFxuICAuZm9vdGVyLW1fX2luU29jaWFsVGV4dC0tT24zOUMge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgfVxcblxcbiAgLmZvb3Rlci1tX19jb250YWN0cy0tdHRJZUsge1xcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xcbiAgfVxcblxcblxcbn1cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvY29tcG9uZW50cy9Gb290ZXIvZm9vdGVyLm0uY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UseUJBQXlCO0VBQ3pCLHVDQUF1QztBQUN6Qzs7QUFFQTtFQUNFLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxjQUFjO0VBQ2QsZUFBZTtFQUNmLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGFBQWE7RUFDYiw4QkFBOEI7RUFDOUIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGNBQWM7RUFDZCxZQUFZO0VBQ1osWUFBWTtBQUNkOztBQUVBO0VBQ0UsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLHdDQUF3QztBQUMxQzs7QUFFQTtFQUNFLDBCQUEwQjtFQUMxQix3Q0FBd0M7QUFDMUM7O0FBRUE7O0VBRUUsa0JBQWtCO0VBQ2xCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsT0FBTztFQUNQLE1BQU07RUFDTixXQUFXO0VBQ1gsWUFBWTtFQUNaLHlEQUE4RDtFQUM5RCwyQkFBMkI7RUFDM0IsNEJBQTRCO0FBQzlCOztBQUVBO0VBQ0UsV0FBVztFQUNYLGtCQUFrQjtFQUNsQixPQUFPO0VBQ1AsTUFBTTtFQUNOLFdBQVc7RUFDWCxZQUFZO0VBQ1oseURBQXlEO0VBQ3pELDJCQUEyQjtFQUMzQiw0QkFBNEI7QUFDOUI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsOEJBQThCO0VBQzlCLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGNBQWM7RUFDZCxvQ0FBb0M7RUFDcEMsbUJBQW1CO0VBQ25CLFdBQVc7RUFDWCxZQUFZO0VBQ1osMkJBQTJCO0VBQzNCLDBCQUEwQjtFQUMxQiw0QkFBNEI7QUFDOUI7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsa0RBQWtEO0VBQ2xELHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLHlEQUF1RDtBQUN6RDs7QUFFQTtFQUNFLHlEQUEyRDtBQUM3RDs7QUFFQTtFQUNFLHlEQUE0RDtBQUM5RDs7QUFFQTtFQUNFLDhDQUE4QztFQUM5QyxlQUFlO0VBQ2Ysa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0U7SUFDRSxlQUFlO0lBQ2Ysc0JBQXNCO0VBQ3hCOztFQUVBOztJQUVFLGFBQWE7RUFDZjs7RUFFQTtJQUNFLG1CQUFtQjtFQUNyQjs7O0FBR0ZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLmZvb3RlciB7XFxuICBjb2xvcjogdmFyKC0tY29sb3Itd2hpdGUpO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItZW1pbmVuY2UpO1xcbn1cXG5cXG4uZm9vdGVyIHNwYW4ge1xcbiAgZm9udC1zaXplOiAyMnB4O1xcbn1cXG5cXG4uY29udGFpbmVyIHtcXG4gIG1hcmdpbjogMCBhdXRvO1xcbiAgcGFkZGluZzogMCAyMHB4O1xcbiAgbWF4LXdpZHRoOiAxMDYwcHg7XFxufVxcblxcbi5mb290ZXJUb3Age1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIHBhZGRpbmc6IDYwcHggMDtcXG59XFxuXFxuLmZvb3RlclRvcCBpbWcge1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICB3aWR0aDogMTAwcHg7XFxuICBoZWlnaHQ6IDU0cHg7XFxufVxcblxcbi5jb250YWN0cyBzcGFuIHtcXG4gIGZvbnQtc2l6ZTogMjJweDtcXG59XFxuXFxuLmNvbnRhY3RzTGlzdCB7XFxuICBtYXJnaW4tdG9wOiAyMHB4O1xcbn1cXG5cXG4uY29udGFjdHNMaXN0IGxpOm5vdCg6bGFzdC1jaGlsZCkge1xcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcXG59XFxuXFxuLmNvbnRhY3RzTGlzdCBhIHtcXG4gIHRyYW5zaXRpb246IHRleHQtZGVjb3JhdGlvbiAwLjNzIGVhc2UtaW47XFxufVxcblxcbi5jb250YWN0c0xpc3QgYTpob3ZlciB7XFxuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcXG4gIHRyYW5zaXRpb246IHRleHQtZGVjb3JhdGlvbiAwLjNzIGVhc2UtaW47XFxufVxcblxcbi5saXN0SXRlbVRlbCxcXG4ubGlzdEl0ZW1NYWlsIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHBhZGRpbmctbGVmdDogMzBweDtcXG59XFxuXFxuLmxpc3RJdGVtVGVsOjpiZWZvcmUge1xcbiAgY29udGVudDogJyc7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBsZWZ0OiAwO1xcbiAgdG9wOiAwO1xcbiAgd2lkdGg6IDE2cHg7XFxuICBoZWlnaHQ6IDE2cHg7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uLy4uL2Fzc2V0cy9pbWFnZXMvc3ZnL3RlbGVwaG9uZS5zdmcnKTtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxufVxcblxcbi5saXN0SXRlbU1haWw6OmJlZm9yZSB7XFxuICBjb250ZW50OiAnJztcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGxlZnQ6IDA7XFxuICB0b3A6IDA7XFxuICB3aWR0aDogMTZweDtcXG4gIGhlaWdodDogMTZweDtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vLi4vYXNzZXRzL2ltYWdlcy9zdmcvbWFpbC5zdmcnKTtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxufVxcblxcbi5zb2NpYWxMaXN0IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBtYXJnaW4tdG9wOiAyMHB4O1xcbn1cXG5cXG4ubGluayB7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWNvbG9yLXdoaXRlKTtcXG4gIGJvcmRlci1yYWRpdXM6IDEwMCU7XFxuICB3aWR0aDogNDBweDtcXG4gIGhlaWdodDogNDBweDtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcXG4gIGJhY2tncm91bmQtc2l6ZTogMjBweCAyMHB4O1xcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG59XFxuXFxuLmxpbms6aG92ZXIge1xcbiAgYm9yZGVyOiAxcHggc29saWQgIzNiNTk5ODtcXG4gIGJveC1zaGFkb3c6IDAgMCAxNXB4IHZhcigtLWNvbG9yLWJyaWdodC10dXJxdW9pc2UpO1xcbiAgdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZTtcXG59XFxuXFxuLnZrIHtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vLi4vYXNzZXRzL2ltYWdlcy9zdmcvdmsuc3ZnJyk7XFxufVxcblxcbi5nb29nbGUge1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi8uLi9hc3NldHMvaW1hZ2VzL3N2Zy9nb29nbGUuc3ZnJyk7XFxufVxcblxcbi5vayB7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uLy4uL2Fzc2V0cy9pbWFnZXMvc3ZnL29rLWxvZ28uc3ZnJyk7XFxufVxcblxcbi5mb290ZXJCb3R0b20ge1xcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC40KTtcXG4gIHBhZGRpbmc6IDIwcHggMDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuQG1lZGlhIChtYXgtd2lkdGg6IDU3NnB4KSB7XFxuICAuZm9vdGVyVG9wIHtcXG4gICAgcGFkZGluZzogMjBweCAwO1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgfVxcblxcbiAgLmZvb3RlclRvcCBpbWcsXFxuICAuaW5Tb2NpYWxUZXh0IHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gIH1cXG5cXG4gIC5jb250YWN0cyB7XFxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XFxuICB9XFxuXFxuXFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ubG9jYWxzID0ge1xuXHRcImZvb3RlclwiOiBcImZvb3Rlci1tX19mb290ZXItLUdZUmRtXCIsXG5cdFwiY29udGFpbmVyXCI6IFwiZm9vdGVyLW1fX2NvbnRhaW5lci0td0x6Q0NcIixcblx0XCJmb290ZXJUb3BcIjogXCJmb290ZXItbV9fZm9vdGVyVG9wLS1OQ1F0Q1wiLFxuXHRcImNvbnRhY3RzXCI6IFwiZm9vdGVyLW1fX2NvbnRhY3RzLS10dEllS1wiLFxuXHRcImNvbnRhY3RzTGlzdFwiOiBcImZvb3Rlci1tX19jb250YWN0c0xpc3QtLU1aMDVHXCIsXG5cdFwibGlzdEl0ZW1UZWxcIjogXCJmb290ZXItbV9fbGlzdEl0ZW1UZWwtLU1vanQzXCIsXG5cdFwibGlzdEl0ZW1NYWlsXCI6IFwiZm9vdGVyLW1fX2xpc3RJdGVtTWFpbC0tYlBTZXdcIixcblx0XCJzb2NpYWxMaXN0XCI6IFwiZm9vdGVyLW1fX3NvY2lhbExpc3QtLUxRd1J4XCIsXG5cdFwibGlua1wiOiBcImZvb3Rlci1tX19saW5rLS1XeGo4UFwiLFxuXHRcInZrXCI6IFwiZm9vdGVyLW1fX3ZrLS1SX2dhSFwiLFxuXHRcImdvb2dsZVwiOiBcImZvb3Rlci1tX19nb29nbGUtLWhrMlplXCIsXG5cdFwib2tcIjogXCJmb290ZXItbV9fb2stLW5aUk5hXCIsXG5cdFwiZm9vdGVyQm90dG9tXCI6IFwiZm9vdGVyLW1fX2Zvb3RlckJvdHRvbS0tdkliczVcIixcblx0XCJpblNvY2lhbFRleHRcIjogXCJmb290ZXItbV9faW5Tb2NpYWxUZXh0LS1PbjM5Q1wiXG59O1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9zdmcvZG93bi1hcnJvdy5zdmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIubG9jYXRpb24tbV9fbG9jYXRpb24tLVVWRG9QIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4ubG9jYXRpb24tbV9fbG9jYXRpb25JY29uLS1WNEVPVSB7XFxuICB3aWR0aDogMThweDtcXG4gIGhlaWdodDogMThweDtcXG4gIGZpbGw6IHZhcigtLWNvbG9yLWVtaW5lbmNlKVxcbn1cXG5cXG4ubG9jYXRpb24tbV9fbG9jYXRpb25TZWxlY3QtLVliMHFfIHtcXG4gIGFwcGVhcmFuY2U6IG5vbmU7XFxuICBvdXRsaW5lOiBub25lO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgZm9udC1zaXplOiAxNnB4O1xcbiAgY29sb3I6IHZhcigtLWNvbG9yLWVtaW5lbmNlKTtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gKyBcIik7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiA5MCUgNTAlO1xcbiAgYmFja2dyb3VuZC1zaXplOiAxMHB4IDEwcHg7XFxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbn1cXG5cXG4ubG9jYXRpb24tbV9fY2l0eVRleHQtLVo2TGpOIHtcXG4gIGNvbG9yOiB2YXIoLS1jb2xvci1lbWluZW5jZSk7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2NvbXBvbmVudHMvSGVhZGVyL0xvY2F0aW9uL2xvY2F0aW9uLm0uY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0Usa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaO0FBQ0Y7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsYUFBYTtFQUNiLFlBQVk7RUFDWixlQUFlO0VBQ2YsNEJBQTRCO0VBQzVCLHlEQUFrRTtFQUNsRSw0QkFBNEI7RUFDNUIsMEJBQTBCO0VBQzFCLDRCQUE0QjtBQUM5Qjs7QUFFQTtFQUNFLDRCQUE0QjtFQUM1QixpQkFBaUI7QUFDbkJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLmxvY2F0aW9uIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4ubG9jYXRpb25JY29uIHtcXG4gIHdpZHRoOiAxOHB4O1xcbiAgaGVpZ2h0OiAxOHB4O1xcbiAgZmlsbDogdmFyKC0tY29sb3ItZW1pbmVuY2UpXFxufVxcblxcbi5sb2NhdGlvblNlbGVjdCB7XFxuICBhcHBlYXJhbmNlOiBub25lO1xcbiAgb3V0bGluZTogbm9uZTtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGZvbnQtc2l6ZTogMTZweDtcXG4gIGNvbG9yOiB2YXIoLS1jb2xvci1lbWluZW5jZSk7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvc3ZnL2Rvd24tYXJyb3cuc3ZnJyk7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiA5MCUgNTAlO1xcbiAgYmFja2dyb3VuZC1zaXplOiAxMHB4IDEwcHg7XFxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbn1cXG5cXG4uY2l0eVRleHQge1xcbiAgY29sb3I6IHZhcigtLWNvbG9yLWVtaW5lbmNlKTtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLmxvY2FscyA9IHtcblx0XCJsb2NhdGlvblwiOiBcImxvY2F0aW9uLW1fX2xvY2F0aW9uLS1VVkRvUFwiLFxuXHRcImxvY2F0aW9uSWNvblwiOiBcImxvY2F0aW9uLW1fX2xvY2F0aW9uSWNvbi0tVjRFT1VcIixcblx0XCJsb2NhdGlvblNlbGVjdFwiOiBcImxvY2F0aW9uLW1fX2xvY2F0aW9uU2VsZWN0LS1ZYjBxX1wiLFxuXHRcImNpdHlUZXh0XCI6IFwibG9jYXRpb24tbV9fY2l0eVRleHQtLVo2TGpOXCJcbn07XG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLnNpZ25pbi1tX19sb2dpbkljb24tLWxhME80IHtcXG4gIG1hcmdpbi1yaWdodDogNXB4O1xcbiAgd2lkdGg6IDIwcHg7XFxuICBoZWlnaHQ6IDIwcHg7XFxufVxcblxcbi5zaWduaW4tbV9fbG9naW5TaWduaW4tLUNjZUdsIHtcXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XFxuICBmb250LXNpemU6IDIwcHg7XFxuICBjb2xvcjogdmFyKC0tY29sb3ItZW1pbmVuY2UpO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uc2lnbmluLW1fX2xvZ2luU2lnbmluLS1DY2VHbDpob3ZlciB7XFxuICBjb2xvcjogdmFyKC0tY29sb3ItZXVjYWx5cHR1cyk7XFxufVxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9jb21wb25lbnRzL0hlYWRlci9TaWduaW4vc2lnbmluLm0uY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UsaUJBQWlCO0VBQ2pCLFdBQVc7RUFDWCxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsZUFBZTtFQUNmLDRCQUE0QjtFQUM1QixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsOEJBQThCO0FBQ2hDXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi5sb2dpbkljb24ge1xcbiAgbWFyZ2luLXJpZ2h0OiA1cHg7XFxuICB3aWR0aDogMjBweDtcXG4gIGhlaWdodDogMjBweDtcXG59XFxuXFxuLmxvZ2luU2lnbmluIHtcXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XFxuICBmb250LXNpemU6IDIwcHg7XFxuICBjb2xvcjogdmFyKC0tY29sb3ItZW1pbmVuY2UpO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4ubG9naW5TaWduaW46aG92ZXIge1xcbiAgY29sb3I6IHZhcigtLWNvbG9yLWV1Y2FseXB0dXMpO1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLmxvY2FscyA9IHtcblx0XCJsb2dpbkljb25cIjogXCJzaWduaW4tbV9fbG9naW5JY29uLS1sYTBPNFwiLFxuXHRcImxvZ2luU2lnbmluXCI6IFwic2lnbmluLW1fX2xvZ2luU2lnbmluLS1DY2VHbFwiXG59O1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi5oZWFkZXItbV9faGVhZGVyLS0xYmVpUCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIHBhZGRpbmc6IDMwcHggMDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLXdoaXRlKTtcXG59XFxuXFxuLmhlYWRlci1tX19sb2dvLS1CZjY5NCB7XFxuICB3aWR0aDogMTAwcHg7XFxuICBoZWlnaHQ6IDYwcHg7XFxufVxcblxcbi5oZWFkZXItbV9fbGlzdC0tZXZRZlUge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIG1hcmdpbi1yaWdodDogMjAwcHg7XFxuICB3aWR0aDogMjAwcHg7XFxufVxcblxcbi5oZWFkZXItbV9fbGluay0td3RXOXMge1xcbiAgZm9udC1zaXplOiAyMHB4O1xcbiAgY29sb3I6IHZhcigtLWNvbG9yLWVtaW5lbmNlKTtcXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuXFxuLmhlYWRlci1tX19saW5rLS13dFc5czpob3ZlciB7XFxuICBjb2xvcjogdmFyKC0tY29sb3ItZXVjYWx5cHR1cyk7XFxufVxcblxcblxcbkBtZWRpYSAobWF4LXdpZHRoOiAxMDI0cHgpIHtcXG4gIC5oZWFkZXItbV9fbGlzdC0tZXZRZlUge1xcbiAgICBtYXJnaW4tcmlnaHQ6IDA7XFxuICB9XFxuXFxufVxcblxcblxcbkBtZWRpYSAobWF4LXdpZHRoOiA1NzZweCkge1xcblxcbiAgLmhlYWRlci1tX19oZWFkZXItLTFiZWlQIHtcXG4gICAgcGFkZGluZzogMTBweDtcXG4gIH1cXG5cXG4gIC5oZWFkZXItbV9fbGlzdC0tZXZRZlUge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgfVxcblxcbiAgLmhlYWRlci1tX19sb2dvLS1CZjY5NCB7XFxuICAgIHdpZHRoOiA1MHB4O1xcbiAgICBoZWlnaHQ6IDMwcHg7XFxuICB9XFxufVxcblxcblxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9jb21wb25lbnRzL0hlYWRlci9oZWFkZXIubS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLDhCQUE4QjtFQUM5QixlQUFlO0VBQ2Ysb0NBQW9DO0FBQ3RDOztBQUVBO0VBQ0UsWUFBWTtFQUNaLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGFBQWE7RUFDYiw4QkFBOEI7RUFDOUIsbUJBQW1CO0VBQ25CLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGVBQWU7RUFDZiw0QkFBNEI7RUFDNUIseUJBQXlCO0VBQ3pCLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLDhCQUE4QjtBQUNoQzs7O0FBR0E7RUFDRTtJQUNFLGVBQWU7RUFDakI7O0FBRUY7OztBQUdBOztFQUVFO0lBQ0UsYUFBYTtFQUNmOztFQUVBO0lBQ0UsYUFBYTtFQUNmOztFQUVBO0lBQ0UsV0FBVztJQUNYLFlBQVk7RUFDZDtBQUNGXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi5oZWFkZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBwYWRkaW5nOiAzMHB4IDA7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci13aGl0ZSk7XFxufVxcblxcbi5sb2dvIHtcXG4gIHdpZHRoOiAxMDBweDtcXG4gIGhlaWdodDogNjBweDtcXG59XFxuXFxuLmxpc3Qge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIG1hcmdpbi1yaWdodDogMjAwcHg7XFxuICB3aWR0aDogMjAwcHg7XFxufVxcblxcbi5saW5rIHtcXG4gIGZvbnQtc2l6ZTogMjBweDtcXG4gIGNvbG9yOiB2YXIoLS1jb2xvci1lbWluZW5jZSk7XFxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcblxcbi5saW5rOmhvdmVyIHtcXG4gIGNvbG9yOiB2YXIoLS1jb2xvci1ldWNhbHlwdHVzKTtcXG59XFxuXFxuXFxuQG1lZGlhIChtYXgtd2lkdGg6IDEwMjRweCkge1xcbiAgLmxpc3Qge1xcbiAgICBtYXJnaW4tcmlnaHQ6IDA7XFxuICB9XFxuXFxufVxcblxcblxcbkBtZWRpYSAobWF4LXdpZHRoOiA1NzZweCkge1xcblxcbiAgLmhlYWRlciB7XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxuICB9XFxuXFxuICAubGlzdCB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICB9XFxuXFxuICAubG9nbyB7XFxuICAgIHdpZHRoOiA1MHB4O1xcbiAgICBoZWlnaHQ6IDMwcHg7XFxuICB9XFxufVxcblxcblxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ubG9jYWxzID0ge1xuXHRcImhlYWRlclwiOiBcImhlYWRlci1tX19oZWFkZXItLTFiZWlQXCIsXG5cdFwibG9nb1wiOiBcImhlYWRlci1tX19sb2dvLS1CZjY5NFwiLFxuXHRcImxpc3RcIjogXCJoZWFkZXItbV9fbGlzdC0tZXZRZlVcIixcblx0XCJsaW5rXCI6IFwiaGVhZGVyLW1fX2xpbmstLXd0VzlzXCJcbn07XG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLnByb2ZpbGUtbV9fdXNlclByb2ZpbGUtLU9ldnhzIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGJvcmRlci1yYWRpdXM6IDJweDtcXG59XFxuXFxuLnByb2ZpbGUtbV9fdXNlckJhc2VJbmZvLS1DZ19EcCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLnByb2ZpbGUtbV9fcHJvZmlsZUltYWdlLS1ScUliZCB7XFxuICB3aWR0aDogNDBweDtcXG4gIGhlaWdodDogNDBweDtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWNvbG9yLWdyYXkpO1xcbiAgYm9yZGVyLXJhZGl1czogMTAwJTtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxuICBtYXJnaW4tbGVmdDogMTBweDtcXG59XFxuXFxuLnByb2ZpbGUtbV9fcHJvZmlsZUltYWdlLS1ScUliZCBpbWcge1xcbiAgb2JqZWN0LWZpdDogY292ZXI7XFxufVxcblxcbi5wcm9maWxlLW1fX3Byb2ZpbGVCdG5zLS1FcFZkaiB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICByaWdodDogMDtcXG4gIHdpZHRoOiAxNjBweDtcXG4gIG1hcmdpbi10b3A6IDVweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgei1pbmRleDogNTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLXdoaXRlKTtcXG4gIHBhZGRpbmc6IDJweCAwO1xcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tY29sb3ItZ3JheSk7XFxuICBib3JkZXItcmFkaXVzOiAycHg7XFxuICBib3gtc2hhZG93OiAwIDhweCAxNnB4ICMwMDAwMDAyOTtcXG59XFxuXFxuLnByb2ZpbGUtbV9fbG9nb3V0QnRuLS1HYWp5ZyxcXG4ucHJvZmlsZS1tX19wcm9maWxlQnRuLS10N2c1RSB7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICB3aWR0aDogMTAwJTtcXG4gIHBhZGRpbmc6IDEwcHggMTZweDtcXG4gIG1hcmdpbjogMnB4IDA7XFxuICBjb2xvcjogdmFyKC0tY29sb3ItZ3JheSk7XFxuICB0ZXh0LWFsaWduOiBsZWZ0O1xcbn1cXG5cXG4ucHJvZmlsZS1tX19sb2dvdXRCdG4tLUdhanlnOmhvdmVyLFxcbi5wcm9maWxlLW1fX3Byb2ZpbGVCdG4tLXQ3ZzVFOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmNWY1ZjU7XFxuICBjb2xvcjogIzExMTtcXG59XFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2NvbXBvbmVudHMvUHJvZmlsZS9wcm9maWxlLm0uY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0Usa0JBQWtCO0VBQ2xCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLG1DQUFtQztFQUNuQyxtQkFBbUI7RUFDbkIsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixRQUFRO0VBQ1IsWUFBWTtFQUNaLGVBQWU7RUFDZixhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLFVBQVU7RUFDVixvQ0FBb0M7RUFDcEMsY0FBYztFQUNkLG1DQUFtQztFQUNuQyxrQkFBa0I7RUFDbEIsZ0NBQWdDO0FBQ2xDOztBQUVBOztFQUVFLHFCQUFxQjtFQUNyQixrQkFBa0I7RUFDbEIsV0FBVztFQUNYLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2Isd0JBQXdCO0VBQ3hCLGdCQUFnQjtBQUNsQjs7QUFFQTs7RUFFRSx5QkFBeUI7RUFDekIsV0FBVztBQUNiXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi51c2VyUHJvZmlsZSB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBib3JkZXItcmFkaXVzOiAycHg7XFxufVxcblxcbi51c2VyQmFzZUluZm8ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5wcm9maWxlSW1hZ2Uge1xcbiAgd2lkdGg6IDQwcHg7XFxuICBoZWlnaHQ6IDQwcHg7XFxuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1jb2xvci1ncmF5KTtcXG4gIGJvcmRlci1yYWRpdXM6IDEwMCU7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XFxufVxcblxcbi5wcm9maWxlSW1hZ2UgaW1nIHtcXG4gIG9iamVjdC1maXQ6IGNvdmVyO1xcbn1cXG5cXG4ucHJvZmlsZUJ0bnMge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgcmlnaHQ6IDA7XFxuICB3aWR0aDogMTYwcHg7XFxuICBtYXJnaW4tdG9wOiA1cHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIHotaW5kZXg6IDU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci13aGl0ZSk7XFxuICBwYWRkaW5nOiAycHggMDtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWNvbG9yLWdyYXkpO1xcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xcbiAgYm94LXNoYWRvdzogMCA4cHggMTZweCAjMDAwMDAwMjk7XFxufVxcblxcbi5sb2dvdXRCdG4sXFxuLnByb2ZpbGVCdG4ge1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBwYWRkaW5nOiAxMHB4IDE2cHg7XFxuICBtYXJnaW46IDJweCAwO1xcbiAgY29sb3I6IHZhcigtLWNvbG9yLWdyYXkpO1xcbiAgdGV4dC1hbGlnbjogbGVmdDtcXG59XFxuXFxuLmxvZ291dEJ0bjpob3ZlcixcXG4ucHJvZmlsZUJ0bjpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjVmNWY1O1xcbiAgY29sb3I6ICMxMTE7XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ubG9jYWxzID0ge1xuXHRcInVzZXJQcm9maWxlXCI6IFwicHJvZmlsZS1tX191c2VyUHJvZmlsZS0tT2V2eHNcIixcblx0XCJ1c2VyQmFzZUluZm9cIjogXCJwcm9maWxlLW1fX3VzZXJCYXNlSW5mby0tQ2dfRHBcIixcblx0XCJwcm9maWxlSW1hZ2VcIjogXCJwcm9maWxlLW1fX3Byb2ZpbGVJbWFnZS0tUnFJYmRcIixcblx0XCJwcm9maWxlQnRuc1wiOiBcInByb2ZpbGUtbV9fcHJvZmlsZUJ0bnMtLUVwVmRqXCIsXG5cdFwibG9nb3V0QnRuXCI6IFwicHJvZmlsZS1tX19sb2dvdXRCdG4tLUdhanlnXCIsXG5cdFwicHJvZmlsZUJ0blwiOiBcInByb2ZpbGUtbV9fcHJvZmlsZUJ0bi0tdDdnNUVcIlxufTtcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIubG9hZGVyV3JhcHBlciB7XFxufVxcblxcbi5zcGlubmVyLW1fX2xvYWRlci0tQUFldG8ge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgd2lkdGg6IDYwcHg7XFxuICBoZWlnaHQ6IDYwcHg7XFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICBtYXJnaW46IDIwcHg7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xcbn1cXG5cXG4ubG9hZGVyU3RhciB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IGNhbGMoNTAlIC0gMTJweCk7XFxufVxcblxcbi5zcGlubmVyLW1fX2xvYWRlcjItLW9iQWk1IC5zcGlubmVyLW1fX2xvYWRlclN0YXItLUdIcFBwIHtcXG4gIHBvc2l0aW9uOiBzdGF0aWM7XFxuICB3aWR0aDogNjBweDtcXG4gIGhlaWdodDogNjBweDtcXG4gIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgwLjcpO1xcbiAgLW1zLXRyYW5zZm9ybTogc2NhbGUoMC43KTtcXG4gIHRyYW5zZm9ybTogc2NhbGUoMC43KTtcXG4gIC13ZWJraXQtYW5pbWF0aW9uOiBzcGlubmVyLW1fX2xvYWRlci0yLXN0YXItLWZUSDdvIDFzIGVhc2UgYWx0ZXJuYXRlIGluZmluaXRlO1xcbiAgYW5pbWF0aW9uOiBzcGlubmVyLW1fX2xvYWRlci0yLXN0YXItLWZUSDdvIDFzIGVhc2UgYWx0ZXJuYXRlIGluZmluaXRlO1xcbn1cXG5cXG4uc3Bpbm5lci1tX19sb2FkZXIyLS1vYkFpNSAuc3Bpbm5lci1tX19sb2FkZXJDaXJjbGVzLS1QRE5PciB7XFxuICB3aWR0aDogOHB4O1xcbiAgaGVpZ2h0OiA4cHg7XFxuICBiYWNrZ3JvdW5kOiB2YXIoLS1jb2xvci1lbWluZW5jZSk7XFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBsZWZ0OiBjYWxjKDUwJSAtIDRweCk7XFxuICB0b3A6IGNhbGMoNTAlIC0gNHB4KTtcXG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDFzIGVhc2U7XFxuICAtby10cmFuc2l0aW9uOiBhbGwgMXMgZWFzZTtcXG4gIHRyYW5zaXRpb246IGFsbCAxcyBlYXNlO1xcbiAgLXdlYmtpdC1hbmltYXRpb246IHNwaW5uZXItbV9fbG9hZGVyLTItY2lyY2xlcy0tSlJiVVAgMXMgZWFzZS1pbi1vdXQgYWx0ZXJuYXRlIGluZmluaXRlO1xcbiAgYW5pbWF0aW9uOiBzcGlubmVyLW1fX2xvYWRlci0yLWNpcmNsZXMtLUpSYlVQIDFzIGVhc2UtaW4tb3V0IGFsdGVybmF0ZSBpbmZpbml0ZTtcXG59XFxuXFxuQC13ZWJraXQta2V5ZnJhbWVzIHNwaW5uZXItbV9fbG9hZGVyLTItY2lyY2xlcy0tSlJiVVAge1xcbiAgMCUge1xcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6IDAgMCAwIHZhcigtLWNvbG9yLWVtaW5lbmNlKTtcXG4gICAgYm94LXNoYWRvdzogMCAwIDAgdmFyKC0tY29sb3ItZW1pbmVuY2UpO1xcbiAgICBvcGFjaXR5OiAxO1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcXG4gIH1cXG4gIDUwJSB7XFxuICAgIC13ZWJraXQtYm94LXNoYWRvdzogMjRweCAtMjJweCB2YXIoLS1jb2xvci1lbWluZW5jZSksXFxuICAgIDMwcHggLTE1cHggMCAtM3B4IHZhcigtLWNvbG9yLWVtaW5lbmNlKSxcXG4gICAgMzFweCAwcHggdmFyKC0tY29sb3ItZW1pbmVuY2UpLFxcbiAgICAyOXB4IDlweCAwIC0zcHggdmFyKC0tY29sb3ItZW1pbmVuY2UpLFxcbiAgICAyNHB4IDIzcHggdmFyKC0tY29sb3ItZW1pbmVuY2UpLCAxN3B4IDMwcHggMCAtM3B4IHZhcigtLWNvbG9yLWVtaW5lbmNlKSxcXG4gICAgMHB4IDMzcHggdmFyKC0tY29sb3ItZW1pbmVuY2UpLCAtMTBweCAyOHB4IDAgLTNweCB2YXIoLS1jb2xvci1lbWluZW5jZSksXFxuICAgIC0yNHB4IDIycHggdmFyKC0tY29sb3ItZW1pbmVuY2UpLCAtMjlweCAxNHB4IDAgLTNweCB2YXIoLS1jb2xvci1lbWluZW5jZSksXFxuICAgIC0zMXB4IC0zcHggdmFyKC0tY29sb3ItZW1pbmVuY2UpLCAtMzBweCAtMTFweCAwIC0zcHggdmFyKC0tY29sb3ItZW1pbmVuY2UpLFxcbiAgICAtMjBweCAtMjVweCB2YXIoLS1jb2xvci1lbWluZW5jZSksXFxuICAgIC0xMnB4IC0zMHB4IDAgLTNweCB2YXIoLS1jb2xvci1lbWluZW5jZSksXFxuICAgIDVweCAtMjlweCB2YXIoLS1jb2xvci1lbWluZW5jZSksXFxuICAgIDEzcHggLTI1cHggMCAtM3B4IHZhcigtLWNvbG9yLWVtaW5lbmNlKTtcXG4gICAgYm94LXNoYWRvdzogMjRweCAtMjJweCB2YXIoLS1jb2xvci1lbWluZW5jZSksIDMwcHggLTE1cHggMCAtM3B4IHZhcigtLWNvbG9yLWVtaW5lbmNlKSwgMzFweCAwcHggdmFyKC0tY29sb3ItZW1pbmVuY2UpLCAyOXB4IDlweCAwIC0zcHggdmFyKC0tY29sb3ItZW1pbmVuY2UpLCAyNHB4IDIzcHggdmFyKC0tY29sb3ItZW1pbmVuY2UpLCAxN3B4IDMwcHggMCAtM3B4IHZhcigtLWNvbG9yLWVtaW5lbmNlKSwgMHB4IDMzcHggdmFyKC0tY29sb3ItZW1pbmVuY2UpLCAtMTBweCAyOHB4IDAgLTNweCB2YXIoLS1jb2xvci1lbWluZW5jZSksIC0yNHB4IDIycHggdmFyKC0tY29sb3ItZW1pbmVuY2UpLCAtMjlweCAxNHB4IDAgLTNweCB2YXIoLS1jb2xvci1lbWluZW5jZSksIC0zMXB4IC0zcHggdmFyKC0tY29sb3ItZW1pbmVuY2UpLCAtMzBweCAtMTFweCAwIC0zcHggdmFyKC0tY29sb3ItZW1pbmVuY2UpLCAtMjBweCAtMjVweCB2YXIoLS1jb2xvci1lbWluZW5jZSksIC0xMnB4IC0zMHB4IDAgLTNweCB2YXIoLS1jb2xvci1lbWluZW5jZSksIDVweCAtMjlweCB2YXIoLS1jb2xvci1lbWluZW5jZSksIDEzcHggLTI1cHggMCAtM3B4IHZhcigtLWNvbG9yLWVtaW5lbmNlKTtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgxODBkZWcpO1xcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgxODBkZWcpO1xcbiAgfVxcbiAgMTAwJSB7XFxuICAgIG9wYWNpdHk6IDA7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcXG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiAyNXB4IC0yMnB4IHZhcigtLWNvbG9yLWVtaW5lbmNlKSxcXG4gICAgMTVweCAtMjJweCAwIC0zcHggYmxhY2ssXFxuICAgIDMxcHggMnB4IHZhcigtLWNvbG9yLWVtaW5lbmNlKSxcXG4gICAgMjFweCAycHggMCAtM3B4IGJsYWNrLCAyM3B4IDI1cHggdmFyKC0tY29sb3ItZW1pbmVuY2UpLFxcbiAgICAxM3B4IDI1cHggMCAtM3B4IGJsYWNrLCAwcHggMzNweCB2YXIoLS1jb2xvci1lbWluZW5jZSksXFxuICAgIC0xMHB4IDMzcHggMCAtM3B4IGJsYWNrLCAtMjZweCAyNHB4IHZhcigtLWNvbG9yLWVtaW5lbmNlKSxcXG4gICAgLTE5cHggMTdweCAwIC0zcHggYmxhY2ssIC0zMnB4IDBweCB2YXIoLS1jb2xvci1lbWluZW5jZSksXFxuICAgIC0yM3B4IDBweCAwIC0zcHggYmxhY2ssIC0yNXB4IC0yM3B4IHZhcigtLWNvbG9yLWVtaW5lbmNlKSxcXG4gICAgLTE2cHggLTIzcHggMCAtM3B4IGJsYWNrLCAwcHggLTMxcHggdmFyKC0tY29sb3ItZW1pbmVuY2UpLFxcbiAgICAtMnB4IC0yM3B4IDAgLTNweCBibGFjaztcXG4gICAgYm94LXNoYWRvdzogMjVweCAtMjJweCB2YXIoLS1jb2xvci1lbWluZW5jZSksXFxuICAgIDE1cHggLTIycHggMCAtM3B4IGJsYWNrLCAzMXB4IDJweCB2YXIoLS1jb2xvci1lbWluZW5jZSksXFxuICAgIDIxcHggMnB4IDAgLTNweCBibGFjaywgMjNweCAyNXB4IHZhcigtLWNvbG9yLWVtaW5lbmNlKSxcXG4gICAgMTNweCAyNXB4IDAgLTNweCBibGFjaywgMHB4IDMzcHggdmFyKC0tY29sb3ItZW1pbmVuY2UpLFxcbiAgICAtMTBweCAzM3B4IDAgLTNweCBibGFjaywgLTI2cHggMjRweCB2YXIoLS1jb2xvci1lbWluZW5jZSksXFxuICAgIC0xOXB4IDE3cHggMCAtM3B4IGJsYWNrLCAtMzJweCAwcHggdmFyKC0tY29sb3ItZW1pbmVuY2UpLFxcbiAgICAtMjNweCAwcHggMCAtM3B4IGJsYWNrLCAtMjVweCAtMjNweCB2YXIoLS1jb2xvci1lbWluZW5jZSksXFxuICAgIC0xNnB4IC0yM3B4IDAgLTNweCBibGFjaywgMHB4IC0zMXB4IHZhcigtLWNvbG9yLWVtaW5lbmNlKSxcXG4gICAgLTJweCAtMjNweCAwIC0zcHggYmxhY2s7XFxuICB9XFxufVxcblxcbkBrZXlmcmFtZXMgc3Bpbm5lci1tX19sb2FkZXItMi1jaXJjbGVzLS1KUmJVUCB7XFxuICAwJSB7XFxuICAgIC13ZWJraXQtYm94LXNoYWRvdzogMCAwIDAgdmFyKC0tY29sb3ItZW1pbmVuY2UpO1xcbiAgICBib3gtc2hhZG93OiAwIDAgMCB2YXIoLS1jb2xvci1lbWluZW5jZSk7XFxuICAgIG9wYWNpdHk6IDE7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XFxuICAgIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xcbiAgfVxcbiAgNTAlIHtcXG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiAyNHB4IC0yMnB4IHZhcigtLWNvbG9yLWVtaW5lbmNlKSxcXG4gICAgMzBweCAtMTVweCAwIC0zcHggdmFyKC0tY29sb3ItZW1pbmVuY2UpLFxcbiAgICAzMXB4IDBweCB2YXIoLS1jb2xvci1lbWluZW5jZSksXFxuICAgIDI5cHggOXB4IDAgLTNweCB2YXIoLS1jb2xvci1lbWluZW5jZSksXFxuICAgIDI0cHggMjNweCB2YXIoLS1jb2xvci1lbWluZW5jZSksXFxuICAgIDE3cHggMzBweCAwIC0zcHggdmFyKC0tY29sb3ItZW1pbmVuY2UpLFxcbiAgICAwcHggMzNweCB2YXIoLS1jb2xvci1lbWluZW5jZSksXFxuICAgIC0xMHB4IDI4cHggMCAtM3B4IHZhcigtLWNvbG9yLWVtaW5lbmNlKSxcXG4gICAgLTI0cHggMjJweCB2YXIoLS1jb2xvci1lbWluZW5jZSksXFxuICAgIC0yOXB4IDE0cHggMCAtM3B4IHZhcigtLWNvbG9yLWVtaW5lbmNlKSxcXG4gICAgLTMxcHggLTNweCAjZTExYTJiLFxcbiAgICAtMzBweCAtMTFweCAwIC0zcHggdmFyKC0tY29sb3ItZW1pbmVuY2UpLFxcbiAgICAtMjBweCAtMjVweCB2YXIoLS1jb2xvci1lbWluZW5jZSksXFxuICAgIC0xMnB4IC0zMHB4IDAgLTNweCB2YXIoLS1jb2xvci1lbWluZW5jZSksXFxuICAgIDVweCAtMjlweCB2YXIoLS1jb2xvci1lbWluZW5jZSksXFxuICAgIDEzcHggLTI1cHggMCAtM3B4IHZhcigtLWNvbG9yLWVtaW5lbmNlKTtcXG4gICAgYm94LXNoYWRvdzogMjRweCAtMjJweCB2YXIoLS1jb2xvci1lbWluZW5jZSksXFxuICAgIDMwcHggLTE1cHggMCAtM3B4IHZhcigtLWNvbG9yLWVtaW5lbmNlKSxcXG4gICAgMzFweCAwcHggdmFyKC0tY29sb3ItZW1pbmVuY2UpLFxcbiAgICAyOXB4IDlweCAwIC0zcHggdmFyKC0tY29sb3ItZW1pbmVuY2UpLFxcbiAgICAyNHB4IDIzcHggdmFyKC0tY29sb3ItZW1pbmVuY2UpLFxcbiAgICAxN3B4IDMwcHggMCAtM3B4IHZhcigtLWNvbG9yLWVtaW5lbmNlKSxcXG4gICAgMHB4IDMzcHggdmFyKC0tY29sb3ItZW1pbmVuY2UpLFxcbiAgICAtMTBweCAyOHB4IDAgLTNweCB2YXIoLS1jb2xvci1lbWluZW5jZSksXFxuICAgIC0yNHB4IDIycHggdmFyKC0tY29sb3ItZW1pbmVuY2UpLFxcbiAgICAtMjlweCAxNHB4IDAgLTNweCB2YXIoLS1jb2xvci1lbWluZW5jZSksXFxuICAgIC0zMXB4IC0zcHggdmFyKC0tY29sb3ItZW1pbmVuY2UpLFxcbiAgICAtMzBweCAtMTFweCAwIC0zcHggdmFyKC0tY29sb3ItZW1pbmVuY2UpLFxcbiAgICAtMjBweCAtMjVweCB2YXIoLS1jb2xvci1lbWluZW5jZSksXFxuICAgIC0xMnB4IC0zMHB4IDAgLTNweCB2YXIoLS1jb2xvci1lbWluZW5jZSksXFxuICAgIDVweCAtMjlweCB2YXIoLS1jb2xvci1lbWluZW5jZSksXFxuICAgIDEzcHggLTI1cHggMCAtM3B4IHZhcigtLWNvbG9yLWVtaW5lbmNlKTtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgxODBkZWcpO1xcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgxODBkZWcpO1xcbiAgfVxcbiAgMTAwJSB7XFxuICAgIG9wYWNpdHk6IDA7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcXG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiAyNXB4IC0yMnB4IHZhcigtLWNvbG9yLWVtaW5lbmNlKSxcXG4gICAgMTVweCAtMjJweCAwIC0zcHggYmxhY2ssIDMxcHggMnB4IHZhcigtLWNvbG9yLWVtaW5lbmNlKSxcXG4gICAgMjFweCAycHggMCAtM3B4IGJsYWNrLCAyM3B4IDI1cHggdmFyKC0tY29sb3ItZW1pbmVuY2UpLFxcbiAgICAxM3B4IDI1cHggMCAtM3B4IGJsYWNrLCAwcHggMzNweCB2YXIoLS1jb2xvci1lbWluZW5jZSksXFxuICAgIC0xMHB4IDMzcHggMCAtM3B4IGJsYWNrLCAtMjZweCAyNHB4IHZhcigtLWNvbG9yLWVtaW5lbmNlKSxcXG4gICAgLTE5cHggMTdweCAwIC0zcHggYmxhY2ssIC0zMnB4IDBweCB2YXIoLS1jb2xvci1lbWluZW5jZSksXFxuICAgIC0yM3B4IDBweCAwIC0zcHggYmxhY2ssIC0yNXB4IC0yM3B4IHZhcigtLWNvbG9yLWVtaW5lbmNlKSxcXG4gICAgLTE2cHggLTIzcHggMCAtM3B4IGJsYWNrLCAwcHggLTMxcHggdmFyKC0tY29sb3ItZW1pbmVuY2UpLFxcbiAgICAtMnB4IC0yM3B4IDAgLTNweCBibGFjaztcXG4gICAgYm94LXNoYWRvdzogMjVweCAtMjJweCB2YXIoLS1jb2xvci1lbWluZW5jZSksXFxuICAgIDE1cHggLTIycHggMCAtM3B4IGJsYWNrLCAzMXB4IDJweCB2YXIoLS1jb2xvci1lbWluZW5jZSksXFxuICAgIDIxcHggMnB4IDAgLTNweCBibGFjaywgMjNweCAyNXB4IHZhcigtLWNvbG9yLWVtaW5lbmNlKSxcXG4gICAgMTNweCAyNXB4IDAgLTNweCBibGFjaywgMHB4IDMzcHggdmFyKC0tY29sb3ItZW1pbmVuY2UpLFxcbiAgICAtMTBweCAzM3B4IDAgLTNweCBibGFjaywgLTI2cHggMjRweCB2YXIoLS1jb2xvci1lbWluZW5jZSksXFxuICAgIC0xOXB4IDE3cHggMCAtM3B4IGJsYWNrLCAtMzJweCAwcHggdmFyKC0tY29sb3ItZW1pbmVuY2UpLFxcbiAgICAtMjNweCAwcHggMCAtM3B4IGJsYWNrLCAtMjVweCAtMjNweCB2YXIoLS1jb2xvci1lbWluZW5jZSksXFxuICAgIC0xNnB4IC0yM3B4IDAgLTNweCBibGFjaywgMHB4IC0zMXB4IHZhcigtLWNvbG9yLWVtaW5lbmNlKSxcXG4gICAgLTJweCAtMjNweCAwIC0zcHggYmxhY2s7XFxuICB9XFxufVxcblxcbkAtd2Via2l0LWtleWZyYW1lcyBzcGlubmVyLW1fX2xvYWRlci0yLXN0YXItLWZUSDdvIHtcXG4gIDAlIHtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDApIHJvdGF0ZSgwZGVnKTtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgwKSByb3RhdGUoMGRlZyk7XFxuICB9XFxuICAxMDAlIHtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDAuNykgcm90YXRlKDM2MGRlZyk7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMC43KSByb3RhdGUoMzYwZGVnKTtcXG4gIH1cXG59XFxuXFxuQC13ZWJraXQta2V5ZnJhbWVzIHNwaW5uZXItbV9fZG90LWp1bXAtLV9iWmU4IHtcXG4gIDAlIHtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcXG4gIH1cXG4gIDEwMCUge1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMTVweCk7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMTVweCk7XFxuICB9XFxufVxcblxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9jb21wb25lbnRzL1NwaW5uZXIvc3Bpbm5lci5tLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtBQUNBOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixxQkFBcUI7RUFDckIsc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixXQUFXO0VBQ1gsWUFBWTtFQUNaLDZCQUE2QjtFQUM3Qix5QkFBeUI7RUFDekIscUJBQXFCO0VBQ3JCLDZFQUEyRDtFQUMzRCxxRUFBbUQ7QUFDckQ7O0FBRUE7RUFDRSxVQUFVO0VBQ1YsV0FBVztFQUNYLGlDQUFpQztFQUNqQyxrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLHFCQUFxQjtFQUNyQixvQkFBb0I7RUFDcEIsK0JBQStCO0VBQy9CLDBCQUEwQjtFQUMxQix1QkFBdUI7RUFDdkIsdUZBQXFFO0VBQ3JFLCtFQUE2RDtBQUMvRDs7QUFFQTtFQUNFO0lBQ0UsK0NBQStDO0lBQy9DLHVDQUF1QztJQUN2QyxVQUFVO0lBQ1YsK0JBQStCO0lBQy9CLHVCQUF1QjtFQUN6QjtFQUNBO0lBQ0U7Ozs7Ozs7Ozs7OzJDQVd1QztJQUN2Qyw0bEJBQTRsQjtJQUM1bEIsaUNBQWlDO0lBQ2pDLHlCQUF5QjtFQUMzQjtFQUNBO0lBQ0UsVUFBVTtJQUNWLGlDQUFpQztJQUNqQyx5QkFBeUI7SUFDekI7Ozs7Ozs7OzsyQkFTdUI7SUFDdkI7Ozs7Ozs7OzJCQVF1QjtFQUN6QjtBQUNGOztBQUVBO0VBQ0U7SUFDRSwrQ0FBK0M7SUFDL0MsdUNBQXVDO0lBQ3ZDLFVBQVU7SUFDViwrQkFBK0I7SUFDL0IsdUJBQXVCO0VBQ3pCO0VBQ0E7SUFDRTs7Ozs7Ozs7Ozs7Ozs7OzJDQWV1QztJQUN2Qzs7Ozs7Ozs7Ozs7Ozs7OzJDQWV1QztJQUN2QyxpQ0FBaUM7SUFDakMseUJBQXlCO0VBQzNCO0VBQ0E7SUFDRSxVQUFVO0lBQ1YsaUNBQWlDO0lBQ2pDLHlCQUF5QjtJQUN6Qjs7Ozs7Ozs7MkJBUXVCO0lBQ3ZCOzs7Ozs7OzsyQkFRdUI7RUFDekI7QUFDRjs7QUFFQTtFQUNFO0lBQ0Usd0NBQXdDO0lBQ3hDLGdDQUFnQztFQUNsQztFQUNBO0lBQ0UsNENBQTRDO0lBQzVDLG9DQUFvQztFQUN0QztBQUNGOztBQUVBO0VBQ0U7SUFDRSxnQ0FBZ0M7SUFDaEMsd0JBQXdCO0VBQzFCO0VBQ0E7SUFDRSxvQ0FBb0M7SUFDcEMsNEJBQTRCO0VBQzlCO0FBQ0ZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiOmdsb2JhbCgubG9hZGVyV3JhcHBlcikge1xcbn1cXG5cXG4ubG9hZGVyIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHdpZHRoOiA2MHB4O1xcbiAgaGVpZ2h0OiA2MHB4O1xcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgbWFyZ2luOiAyMHB4O1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcXG59XFxuXFxuOmdsb2JhbCgubG9hZGVyU3Rhcikge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiBjYWxjKDUwJSAtIDEycHgpO1xcbn1cXG5cXG4ubG9hZGVyMiAubG9hZGVyU3RhciB7XFxuICBwb3NpdGlvbjogc3RhdGljO1xcbiAgd2lkdGg6IDYwcHg7XFxuICBoZWlnaHQ6IDYwcHg7XFxuICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMC43KTtcXG4gIC1tcy10cmFuc2Zvcm06IHNjYWxlKDAuNyk7XFxuICB0cmFuc2Zvcm06IHNjYWxlKDAuNyk7XFxuICAtd2Via2l0LWFuaW1hdGlvbjogbG9hZGVyLTItc3RhciAxcyBlYXNlIGFsdGVybmF0ZSBpbmZpbml0ZTtcXG4gIGFuaW1hdGlvbjogbG9hZGVyLTItc3RhciAxcyBlYXNlIGFsdGVybmF0ZSBpbmZpbml0ZTtcXG59XFxuXFxuLmxvYWRlcjIgLmxvYWRlckNpcmNsZXMge1xcbiAgd2lkdGg6IDhweDtcXG4gIGhlaWdodDogOHB4O1xcbiAgYmFja2dyb3VuZDogdmFyKC0tY29sb3ItZW1pbmVuY2UpO1xcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgbGVmdDogY2FsYyg1MCUgLSA0cHgpO1xcbiAgdG9wOiBjYWxjKDUwJSAtIDRweCk7XFxuICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAxcyBlYXNlO1xcbiAgLW8tdHJhbnNpdGlvbjogYWxsIDFzIGVhc2U7XFxuICB0cmFuc2l0aW9uOiBhbGwgMXMgZWFzZTtcXG4gIC13ZWJraXQtYW5pbWF0aW9uOiBsb2FkZXItMi1jaXJjbGVzIDFzIGVhc2UtaW4tb3V0IGFsdGVybmF0ZSBpbmZpbml0ZTtcXG4gIGFuaW1hdGlvbjogbG9hZGVyLTItY2lyY2xlcyAxcyBlYXNlLWluLW91dCBhbHRlcm5hdGUgaW5maW5pdGU7XFxufVxcblxcbkAtd2Via2l0LWtleWZyYW1lcyBsb2FkZXItMi1jaXJjbGVzIHtcXG4gIDAlIHtcXG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiAwIDAgMCB2YXIoLS1jb2xvci1lbWluZW5jZSk7XFxuICAgIGJveC1zaGFkb3c6IDAgMCAwIHZhcigtLWNvbG9yLWVtaW5lbmNlKTtcXG4gICAgb3BhY2l0eTogMTtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XFxuICB9XFxuICA1MCUge1xcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6IDI0cHggLTIycHggdmFyKC0tY29sb3ItZW1pbmVuY2UpLFxcbiAgICAzMHB4IC0xNXB4IDAgLTNweCB2YXIoLS1jb2xvci1lbWluZW5jZSksXFxuICAgIDMxcHggMHB4IHZhcigtLWNvbG9yLWVtaW5lbmNlKSxcXG4gICAgMjlweCA5cHggMCAtM3B4IHZhcigtLWNvbG9yLWVtaW5lbmNlKSxcXG4gICAgMjRweCAyM3B4IHZhcigtLWNvbG9yLWVtaW5lbmNlKSwgMTdweCAzMHB4IDAgLTNweCB2YXIoLS1jb2xvci1lbWluZW5jZSksXFxuICAgIDBweCAzM3B4IHZhcigtLWNvbG9yLWVtaW5lbmNlKSwgLTEwcHggMjhweCAwIC0zcHggdmFyKC0tY29sb3ItZW1pbmVuY2UpLFxcbiAgICAtMjRweCAyMnB4IHZhcigtLWNvbG9yLWVtaW5lbmNlKSwgLTI5cHggMTRweCAwIC0zcHggdmFyKC0tY29sb3ItZW1pbmVuY2UpLFxcbiAgICAtMzFweCAtM3B4IHZhcigtLWNvbG9yLWVtaW5lbmNlKSwgLTMwcHggLTExcHggMCAtM3B4IHZhcigtLWNvbG9yLWVtaW5lbmNlKSxcXG4gICAgLTIwcHggLTI1cHggdmFyKC0tY29sb3ItZW1pbmVuY2UpLFxcbiAgICAtMTJweCAtMzBweCAwIC0zcHggdmFyKC0tY29sb3ItZW1pbmVuY2UpLFxcbiAgICA1cHggLTI5cHggdmFyKC0tY29sb3ItZW1pbmVuY2UpLFxcbiAgICAxM3B4IC0yNXB4IDAgLTNweCB2YXIoLS1jb2xvci1lbWluZW5jZSk7XFxuICAgIGJveC1zaGFkb3c6IDI0cHggLTIycHggdmFyKC0tY29sb3ItZW1pbmVuY2UpLCAzMHB4IC0xNXB4IDAgLTNweCB2YXIoLS1jb2xvci1lbWluZW5jZSksIDMxcHggMHB4IHZhcigtLWNvbG9yLWVtaW5lbmNlKSwgMjlweCA5cHggMCAtM3B4IHZhcigtLWNvbG9yLWVtaW5lbmNlKSwgMjRweCAyM3B4IHZhcigtLWNvbG9yLWVtaW5lbmNlKSwgMTdweCAzMHB4IDAgLTNweCB2YXIoLS1jb2xvci1lbWluZW5jZSksIDBweCAzM3B4IHZhcigtLWNvbG9yLWVtaW5lbmNlKSwgLTEwcHggMjhweCAwIC0zcHggdmFyKC0tY29sb3ItZW1pbmVuY2UpLCAtMjRweCAyMnB4IHZhcigtLWNvbG9yLWVtaW5lbmNlKSwgLTI5cHggMTRweCAwIC0zcHggdmFyKC0tY29sb3ItZW1pbmVuY2UpLCAtMzFweCAtM3B4IHZhcigtLWNvbG9yLWVtaW5lbmNlKSwgLTMwcHggLTExcHggMCAtM3B4IHZhcigtLWNvbG9yLWVtaW5lbmNlKSwgLTIwcHggLTI1cHggdmFyKC0tY29sb3ItZW1pbmVuY2UpLCAtMTJweCAtMzBweCAwIC0zcHggdmFyKC0tY29sb3ItZW1pbmVuY2UpLCA1cHggLTI5cHggdmFyKC0tY29sb3ItZW1pbmVuY2UpLCAxM3B4IC0yNXB4IDAgLTNweCB2YXIoLS1jb2xvci1lbWluZW5jZSk7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMTgwZGVnKTtcXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMTgwZGVnKTtcXG4gIH1cXG4gIDEwMCUge1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XFxuICAgIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XFxuICAgIC13ZWJraXQtYm94LXNoYWRvdzogMjVweCAtMjJweCB2YXIoLS1jb2xvci1lbWluZW5jZSksXFxuICAgIDE1cHggLTIycHggMCAtM3B4IGJsYWNrLFxcbiAgICAzMXB4IDJweCB2YXIoLS1jb2xvci1lbWluZW5jZSksXFxuICAgIDIxcHggMnB4IDAgLTNweCBibGFjaywgMjNweCAyNXB4IHZhcigtLWNvbG9yLWVtaW5lbmNlKSxcXG4gICAgMTNweCAyNXB4IDAgLTNweCBibGFjaywgMHB4IDMzcHggdmFyKC0tY29sb3ItZW1pbmVuY2UpLFxcbiAgICAtMTBweCAzM3B4IDAgLTNweCBibGFjaywgLTI2cHggMjRweCB2YXIoLS1jb2xvci1lbWluZW5jZSksXFxuICAgIC0xOXB4IDE3cHggMCAtM3B4IGJsYWNrLCAtMzJweCAwcHggdmFyKC0tY29sb3ItZW1pbmVuY2UpLFxcbiAgICAtMjNweCAwcHggMCAtM3B4IGJsYWNrLCAtMjVweCAtMjNweCB2YXIoLS1jb2xvci1lbWluZW5jZSksXFxuICAgIC0xNnB4IC0yM3B4IDAgLTNweCBibGFjaywgMHB4IC0zMXB4IHZhcigtLWNvbG9yLWVtaW5lbmNlKSxcXG4gICAgLTJweCAtMjNweCAwIC0zcHggYmxhY2s7XFxuICAgIGJveC1zaGFkb3c6IDI1cHggLTIycHggdmFyKC0tY29sb3ItZW1pbmVuY2UpLFxcbiAgICAxNXB4IC0yMnB4IDAgLTNweCBibGFjaywgMzFweCAycHggdmFyKC0tY29sb3ItZW1pbmVuY2UpLFxcbiAgICAyMXB4IDJweCAwIC0zcHggYmxhY2ssIDIzcHggMjVweCB2YXIoLS1jb2xvci1lbWluZW5jZSksXFxuICAgIDEzcHggMjVweCAwIC0zcHggYmxhY2ssIDBweCAzM3B4IHZhcigtLWNvbG9yLWVtaW5lbmNlKSxcXG4gICAgLTEwcHggMzNweCAwIC0zcHggYmxhY2ssIC0yNnB4IDI0cHggdmFyKC0tY29sb3ItZW1pbmVuY2UpLFxcbiAgICAtMTlweCAxN3B4IDAgLTNweCBibGFjaywgLTMycHggMHB4IHZhcigtLWNvbG9yLWVtaW5lbmNlKSxcXG4gICAgLTIzcHggMHB4IDAgLTNweCBibGFjaywgLTI1cHggLTIzcHggdmFyKC0tY29sb3ItZW1pbmVuY2UpLFxcbiAgICAtMTZweCAtMjNweCAwIC0zcHggYmxhY2ssIDBweCAtMzFweCB2YXIoLS1jb2xvci1lbWluZW5jZSksXFxuICAgIC0ycHggLTIzcHggMCAtM3B4IGJsYWNrO1xcbiAgfVxcbn1cXG5cXG5Aa2V5ZnJhbWVzIGxvYWRlci0yLWNpcmNsZXMge1xcbiAgMCUge1xcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6IDAgMCAwIHZhcigtLWNvbG9yLWVtaW5lbmNlKTtcXG4gICAgYm94LXNoYWRvdzogMCAwIDAgdmFyKC0tY29sb3ItZW1pbmVuY2UpO1xcbiAgICBvcGFjaXR5OiAxO1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcXG4gIH1cXG4gIDUwJSB7XFxuICAgIC13ZWJraXQtYm94LXNoYWRvdzogMjRweCAtMjJweCB2YXIoLS1jb2xvci1lbWluZW5jZSksXFxuICAgIDMwcHggLTE1cHggMCAtM3B4IHZhcigtLWNvbG9yLWVtaW5lbmNlKSxcXG4gICAgMzFweCAwcHggdmFyKC0tY29sb3ItZW1pbmVuY2UpLFxcbiAgICAyOXB4IDlweCAwIC0zcHggdmFyKC0tY29sb3ItZW1pbmVuY2UpLFxcbiAgICAyNHB4IDIzcHggdmFyKC0tY29sb3ItZW1pbmVuY2UpLFxcbiAgICAxN3B4IDMwcHggMCAtM3B4IHZhcigtLWNvbG9yLWVtaW5lbmNlKSxcXG4gICAgMHB4IDMzcHggdmFyKC0tY29sb3ItZW1pbmVuY2UpLFxcbiAgICAtMTBweCAyOHB4IDAgLTNweCB2YXIoLS1jb2xvci1lbWluZW5jZSksXFxuICAgIC0yNHB4IDIycHggdmFyKC0tY29sb3ItZW1pbmVuY2UpLFxcbiAgICAtMjlweCAxNHB4IDAgLTNweCB2YXIoLS1jb2xvci1lbWluZW5jZSksXFxuICAgIC0zMXB4IC0zcHggI2UxMWEyYixcXG4gICAgLTMwcHggLTExcHggMCAtM3B4IHZhcigtLWNvbG9yLWVtaW5lbmNlKSxcXG4gICAgLTIwcHggLTI1cHggdmFyKC0tY29sb3ItZW1pbmVuY2UpLFxcbiAgICAtMTJweCAtMzBweCAwIC0zcHggdmFyKC0tY29sb3ItZW1pbmVuY2UpLFxcbiAgICA1cHggLTI5cHggdmFyKC0tY29sb3ItZW1pbmVuY2UpLFxcbiAgICAxM3B4IC0yNXB4IDAgLTNweCB2YXIoLS1jb2xvci1lbWluZW5jZSk7XFxuICAgIGJveC1zaGFkb3c6IDI0cHggLTIycHggdmFyKC0tY29sb3ItZW1pbmVuY2UpLFxcbiAgICAzMHB4IC0xNXB4IDAgLTNweCB2YXIoLS1jb2xvci1lbWluZW5jZSksXFxuICAgIDMxcHggMHB4IHZhcigtLWNvbG9yLWVtaW5lbmNlKSxcXG4gICAgMjlweCA5cHggMCAtM3B4IHZhcigtLWNvbG9yLWVtaW5lbmNlKSxcXG4gICAgMjRweCAyM3B4IHZhcigtLWNvbG9yLWVtaW5lbmNlKSxcXG4gICAgMTdweCAzMHB4IDAgLTNweCB2YXIoLS1jb2xvci1lbWluZW5jZSksXFxuICAgIDBweCAzM3B4IHZhcigtLWNvbG9yLWVtaW5lbmNlKSxcXG4gICAgLTEwcHggMjhweCAwIC0zcHggdmFyKC0tY29sb3ItZW1pbmVuY2UpLFxcbiAgICAtMjRweCAyMnB4IHZhcigtLWNvbG9yLWVtaW5lbmNlKSxcXG4gICAgLTI5cHggMTRweCAwIC0zcHggdmFyKC0tY29sb3ItZW1pbmVuY2UpLFxcbiAgICAtMzFweCAtM3B4IHZhcigtLWNvbG9yLWVtaW5lbmNlKSxcXG4gICAgLTMwcHggLTExcHggMCAtM3B4IHZhcigtLWNvbG9yLWVtaW5lbmNlKSxcXG4gICAgLTIwcHggLTI1cHggdmFyKC0tY29sb3ItZW1pbmVuY2UpLFxcbiAgICAtMTJweCAtMzBweCAwIC0zcHggdmFyKC0tY29sb3ItZW1pbmVuY2UpLFxcbiAgICA1cHggLTI5cHggdmFyKC0tY29sb3ItZW1pbmVuY2UpLFxcbiAgICAxM3B4IC0yNXB4IDAgLTNweCB2YXIoLS1jb2xvci1lbWluZW5jZSk7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMTgwZGVnKTtcXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMTgwZGVnKTtcXG4gIH1cXG4gIDEwMCUge1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XFxuICAgIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XFxuICAgIC13ZWJraXQtYm94LXNoYWRvdzogMjVweCAtMjJweCB2YXIoLS1jb2xvci1lbWluZW5jZSksXFxuICAgIDE1cHggLTIycHggMCAtM3B4IGJsYWNrLCAzMXB4IDJweCB2YXIoLS1jb2xvci1lbWluZW5jZSksXFxuICAgIDIxcHggMnB4IDAgLTNweCBibGFjaywgMjNweCAyNXB4IHZhcigtLWNvbG9yLWVtaW5lbmNlKSxcXG4gICAgMTNweCAyNXB4IDAgLTNweCBibGFjaywgMHB4IDMzcHggdmFyKC0tY29sb3ItZW1pbmVuY2UpLFxcbiAgICAtMTBweCAzM3B4IDAgLTNweCBibGFjaywgLTI2cHggMjRweCB2YXIoLS1jb2xvci1lbWluZW5jZSksXFxuICAgIC0xOXB4IDE3cHggMCAtM3B4IGJsYWNrLCAtMzJweCAwcHggdmFyKC0tY29sb3ItZW1pbmVuY2UpLFxcbiAgICAtMjNweCAwcHggMCAtM3B4IGJsYWNrLCAtMjVweCAtMjNweCB2YXIoLS1jb2xvci1lbWluZW5jZSksXFxuICAgIC0xNnB4IC0yM3B4IDAgLTNweCBibGFjaywgMHB4IC0zMXB4IHZhcigtLWNvbG9yLWVtaW5lbmNlKSxcXG4gICAgLTJweCAtMjNweCAwIC0zcHggYmxhY2s7XFxuICAgIGJveC1zaGFkb3c6IDI1cHggLTIycHggdmFyKC0tY29sb3ItZW1pbmVuY2UpLFxcbiAgICAxNXB4IC0yMnB4IDAgLTNweCBibGFjaywgMzFweCAycHggdmFyKC0tY29sb3ItZW1pbmVuY2UpLFxcbiAgICAyMXB4IDJweCAwIC0zcHggYmxhY2ssIDIzcHggMjVweCB2YXIoLS1jb2xvci1lbWluZW5jZSksXFxuICAgIDEzcHggMjVweCAwIC0zcHggYmxhY2ssIDBweCAzM3B4IHZhcigtLWNvbG9yLWVtaW5lbmNlKSxcXG4gICAgLTEwcHggMzNweCAwIC0zcHggYmxhY2ssIC0yNnB4IDI0cHggdmFyKC0tY29sb3ItZW1pbmVuY2UpLFxcbiAgICAtMTlweCAxN3B4IDAgLTNweCBibGFjaywgLTMycHggMHB4IHZhcigtLWNvbG9yLWVtaW5lbmNlKSxcXG4gICAgLTIzcHggMHB4IDAgLTNweCBibGFjaywgLTI1cHggLTIzcHggdmFyKC0tY29sb3ItZW1pbmVuY2UpLFxcbiAgICAtMTZweCAtMjNweCAwIC0zcHggYmxhY2ssIDBweCAtMzFweCB2YXIoLS1jb2xvci1lbWluZW5jZSksXFxuICAgIC0ycHggLTIzcHggMCAtM3B4IGJsYWNrO1xcbiAgfVxcbn1cXG5cXG5ALXdlYmtpdC1rZXlmcmFtZXMgbG9hZGVyLTItc3RhciB7XFxuICAwJSB7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgwKSByb3RhdGUoMGRlZyk7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMCkgcm90YXRlKDBkZWcpO1xcbiAgfVxcbiAgMTAwJSB7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgwLjcpIHJvdGF0ZSgzNjBkZWcpO1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDAuNykgcm90YXRlKDM2MGRlZyk7XFxuICB9XFxufVxcblxcbkAtd2Via2l0LWtleWZyYW1lcyBkb3QtanVtcCB7XFxuICAwJSB7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XFxuICB9XFxuICAxMDAlIHtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTE1cHgpO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTE1cHgpO1xcbiAgfVxcbn1cXG5cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLmxvY2FscyA9IHtcblx0XCJsb2FkZXJcIjogXCJzcGlubmVyLW1fX2xvYWRlci0tQUFldG9cIixcblx0XCJsb2FkZXIyXCI6IFwic3Bpbm5lci1tX19sb2FkZXIyLS1vYkFpNVwiLFxuXHRcImxvYWRlclN0YXJcIjogXCJzcGlubmVyLW1fX2xvYWRlclN0YXItLUdIcFBwXCIsXG5cdFwibG9hZGVyLTItc3RhclwiOiBcInNwaW5uZXItbV9fbG9hZGVyLTItc3Rhci0tZlRIN29cIixcblx0XCJsb2FkZXJDaXJjbGVzXCI6IFwic3Bpbm5lci1tX19sb2FkZXJDaXJjbGVzLS1QRE5PclwiLFxuXHRcImxvYWRlci0yLWNpcmNsZXNcIjogXCJzcGlubmVyLW1fX2xvYWRlci0yLWNpcmNsZXMtLUpSYlVQXCIsXG5cdFwiZG90LWp1bXBcIjogXCJzcGlubmVyLW1fX2RvdC1qdW1wLS1fYlplOFwiXG59O1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi4vLi4vYXNzZXRzL2ltYWdlcy9hcnJvdy1saXN0LnBuZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi5tYWluUGFnZS1tX19tYWluc2NyZWVuQ29udGFpbmVyLS1EaFAzTiB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogNTQ0cHg7XFxuICBtYXJnaW4tYm90dG9tOiAxMDBweDtcXG59XFxuXFxuXFxuLm1haW5QYWdlLW1fX3Bob3Rvc0NvbnRhaW5lci0tX1J0Ykoge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgaGVpZ2h0OiA1NDRweDtcXG4gIG1hcmdpbi1ib3R0b206IDQwcHg7XFxufVxcblxcbi5tYWluUGFnZS1tX19waG90b3NDb250YWluZXItLV9SdGJKIC5sb2FkZXJXcmFwcGVyIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogNTAlO1xcbiAgbGVmdDogNTAlO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XFxufVxcblxcbi5tYWluUGFnZS1tX19waG90b3NDb250YWluZXItLV9SdGJKIGltZyB7XFxuICBoZWlnaHQ6IDEwMCU7XFxufVxcblxcbi5tYWluUGFnZS1tX19tYWluQ29udGFpbmVyLS1aSDFJeiB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBsZWZ0OiAwO1xcbiAgdG9wOiAwO1xcbiAgYm90dG9tOiAwO1xcbiAgcmlnaHQ6IDA7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcblxcbi5tYWluUGFnZS1tX19tYWluVGl0bGUtLVFQdU84IHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGxlZnQ6IDA7XFxuICB0b3A6IDA7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAxNDJweCAxNDBweCAwO1xcbiAgbWF4LXdpZHRoOiA1MzlweDtcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICBmb250LXNpemU6IDcycHg7XFxuICBsaW5lLWhlaWdodDogODJweDtcXG4gIGNvbG9yOiB2YXIoLS1jb2xvci1tYWluLXRpdGxlKTtcXG4gIHRleHQtc2hhZG93OiAtMXB4IDAgM3B4IGJsYWNrLCAtMnB4IC0xcHggMnB4IHdoaXRlO1xcbn1cXG5cXG4ubWFpblBhZ2UtbV9fYWJvdXRDb250YWluZXItLW14aWZQIHtcXG4gIG1hcmdpbi1ib3R0b206IDEwMHB4O1xcbn1cXG5cXG5cXG4ubWFpblBhZ2UtbV9fYWJvdXQtLVRHQklYIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIG1hcmdpbi1ib3R0b206IDEwMHB4O1xcbiAgcGFkZGluZzogMjBweDtcXG59XFxuXFxuLm1haW5QYWdlLW1fX2Fib3V0LS1UR0JJWDo6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6ICcnO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgbGVmdDogMDtcXG4gIHRvcDogMDtcXG4gIHdpZHRoOiAzcHg7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1ldWNhbHlwdHVzKTtcXG59XFxuXFxuLm1haW5QYWdlLW1fX2Fib3V0VGl0bGUtLXd2TjdhIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIG1hcmdpbjogMDtcXG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XFxuICBmb250LXdlaWdodDogNjAwO1xcbiAgZm9udC1zaXplOiAzMHB4O1xcbn1cXG5cXG4ubWFpblBhZ2UtbV9fYWJvdXRUaXRsZVRleHQtLUZtVzdkIHtcXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XFxuICBmb250LXNpemU6IDE4cHg7XFxuICBsaW5lLWhlaWdodDogMjhweDtcXG59XFxuXFxuLm1haW5QYWdlLW1fX2Rvc210aC0tZWtlRUwge1xcbiAgcGFkZGluZzogMCAyMHB4O1xcbn1cXG5cXG4ubWFpblBhZ2UtbV9fZG9zbXRoVGl0bGUtLXNFTUlGIHtcXG4gIG1hcmdpbjogMDtcXG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XFxuICBmb250LXdlaWdodDogNjAwO1xcbiAgZm9udC1zaXplOiAyMnB4O1xcbn1cXG5cXG4ubWFpblBhZ2UtbV9fZG9zbXRoTGlzdC0tVlVwTU8ge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgYmFja2dyb3VuZC1zaXplOiAxMDBweCAxMDBweDtcXG59XFxuXFxuLm1haW5QYWdlLW1fX2Rvc210aEl0ZW0tLWNoQWRaIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHBhZGRpbmctbGVmdDogNDBweDtcXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XFxuICBmb250LXNpemU6IDE4cHg7XFxufVxcblxcbi5tYWluUGFnZS1tX19kb3NtdGhJdGVtLS1jaEFkWjo6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6ICcnO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgbGVmdDogMDtcXG4gIHRvcDogMDtcXG4gIHdpZHRoOiAyMHB4O1xcbiAgaGVpZ2h0OiAyMHB4O1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyArIFwiKTtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxufVxcblxcbi5tYWluUGFnZS1tX19kb3NtdGhJdGVtLS1jaEFkWjpub3QoOmxhc3QtY2hpbGQpIHtcXG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XFxufVxcblxcbi5tYWluUGFnZS1tX191bnNwbGFzaExpbmstLW1nUHJjIHtcXG4gIGNvbG9yOiB2YXIoLS1jb2xvci1lbWluZW5jZSk7XFxuICB0cmFuc2l0aW9uOiB0ZXh0LWRlY29yYXRpb24gMC4zcyBlYXNlLWluO1xcbn1cXG5cXG4ubWFpblBhZ2UtbV9fdW5zcGxhc2hMaW5rLS1tZ1ByYzpob3ZlciB7XFxuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcXG4gIHRyYW5zaXRpb246IHRleHQtZGVjb3JhdGlvbiAwLjNzIGVhc2UtaW47XFxufVxcblxcbi5tYWluUGFnZS1tX19sb29rUGhvdG8tLUxmQnlUIHtcXG4gIG1hcmdpbi1ib3R0b206IDEwMHB4O1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4ubWFpblBhZ2UtbV9fbG9va1Bob3RvVGV4dC0tQ3NleEMge1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBtYXJnaW4tYm90dG9tOiA1MHB4O1xcbiAgZm9udC1zaXplOiAyNHB4O1xcbn1cXG5cXG4ubWFpblBhZ2UtbV9fbG9va1Bob3RvQnV0dG9uLS12eDdHMiB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xcbiAgb3V0bGluZTogbm9uZTtcXG4gIGJvcmRlcjogMnB4IHNvbGlkIHRyYW5zcGFyZW50O1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgcGFkZGluZzogMTZweCAzMHB4O1xcbiAgYm94LXNoYWRvdzogNnB4IDZweCAxMnB4IHJnYmEoNzksIDIwOSwgMTk3LCAwLjY0KTtcXG4gIGZvbnQtc2l6ZTogMjJweDtcXG4gIGNvbG9yOiB2YXIoLS1jb2xvci13aGl0ZSk7XFxuICBiYWNrZ3JvdW5kOiB2YXIoLS1jb2xvci1ldWNhbHlwdHVzKTtcXG4gIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UtaW4tb3V0IDBzO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4ubWFpblBhZ2UtbV9fbG9va1Bob3RvQnV0dG9uLS12eDdHMjo6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6ICcnO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgbGVmdDogNTAlO1xcbiAgdG9wOiA1MCU7XFxuICBvcGFjaXR5OiAwO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XFxuICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLWluLW91dCAwcztcXG59XFxuXFxuLm1haW5QYWdlLW1fX2xvb2tQaG90b0J1dHRvbi0tdng3RzI6aG92ZXIge1xcbiAgYm9yZGVyOiAycHggc29saWQgdmFyKC0tY29sb3ItZXVjYWx5cHR1cyk7XFxuICBjb2xvcjogdmFyKC0tY29sb3ItZXVjYWx5cHR1cyk7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci13aGl0ZSk7XFxufVxcblxcbi5tYWluUGFnZS1tX19sb29rUGhvdG9CdXR0b24tLXZ4N0cyOjphZnRlciB7XFxuICBjb250ZW50OiAnJztcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGxlZnQ6IDUwJTtcXG4gIHRvcDogNTAlO1xcbiAgei1pbmRleDogLTE7XFxuICBib3JkZXI6IDVweCBzb2xpZCB2YXIoLS1jb2xvci1icmlnaHQtdHVycXVvaXNlKTtcXG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcXG4gIGFuaW1hdGlvbjogbWFpblBhZ2UtbV9fcmluZy0tSGgxM2ogMS41cyBpbmZpbml0ZTtcXG59XFxuXFxuLm1haW5QYWdlLW1fX2xvb2tQaG90b0J1dHRvbi0tdng3RzI6aG92ZXI6OmFmdGVyLFxcbi5tYWluUGFnZS1tX19sb29rUGhvdG9CdXR0b24tLXZ4N0cyOmZvY3VzOjphZnRlciB7XFxuICBkaXNwbGF5OiBub25lO1xcbiAgYW5pbWF0aW9uOiBub25lO1xcbn1cXG5cXG5Aa2V5ZnJhbWVzIG1haW5QYWdlLW1fX3JpbmctLUhoMTNqIHtcXG4gIDAlIHtcXG4gICAgcGFkZGluZzogMTZweCAzMHB4O1xcbiAgICBvcGFjaXR5OiAxO1xcbiAgfVxcblxcbiAgMTAwJSB7XFxuICAgIHBhZGRpbmc6IDUwcHggMTUwcHg7XFxuICAgIG9wYWNpdHk6IDA7XFxuICB9XFxufVxcblxcbkBtZWRpYSAobWF4LXdpZHRoOiA1NzZweCkge1xcbiAgLm1haW5QYWdlLW1fX21haW5UaXRsZS0tUVB1Tzgge1xcbiAgICBmb250LXNpemU6IDMycHg7XFxuICAgIGxpbmUtaGVpZ2h0OiA1MnB4O1xcbiAgICBwYWRkaW5nOiAyMHB4O1xcbiAgfVxcblxcbiAgLm1haW5QYWdlLW1fX3Bob3Rvc0NvbnRhaW5lci0tX1J0Ykoge1xcbiAgICBoZWlnaHQ6IDMyMHB4O1xcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xcbiAgfVxcblxcbiAgLm1haW5QYWdlLW1fX2Fib3V0LS1UR0JJWCB7XFxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XFxuICB9XFxuXFxuICAubWFpblBhZ2UtbV9fYWJvdXRUaXRsZS0td3ZON2Ege1xcbiAgICBmb250LXNpemU6IDIycHg7XFxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XFxuICB9XFxuXFxuICAubWFpblBhZ2UtbV9fYWJvdXRUaXRsZVRleHQtLUZtVzdkIHtcXG4gICAgZm9udC1zaXplOiAxNnB4O1xcbiAgfVxcblxcbiAgLm1haW5QYWdlLW1fX2Fib3V0Q29udGFpbmVyLS1teGlmUCB7XFxuICAgIG1hcmdpbi1ib3R0b206IDYwcHg7XFxuICB9XFxuXFxuICAubWFpblBhZ2UtbV9fZG9zbXRoVGl0bGUtLXNFTUlGIHtcXG4gICAgZm9udC1zaXplOiAyMnB4O1xcbiAgfVxcblxcbiAgLm1haW5QYWdlLW1fX2Rvc210aC0tZWtlRUwge1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xcbiAgfVxcblxcbiAgLm1haW5QYWdlLW1fX2xvb2tQaG90b1RleHQtLUNzZXhDIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gIH1cXG5cXG4gIC5tYWluUGFnZS1tX19sb29rUGhvdG8tLUxmQnlUIHtcXG4gICAgbWFyZ2luLWJvdHRvbTogNDBweDtcXG4gIH1cXG59XFxuXFxuXFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3BhZ2VzL01haW5QYWdlL21haW5QYWdlLm0uY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UsV0FBVztFQUNYLGFBQWE7RUFDYixvQkFBb0I7QUFDdEI7OztBQUdBO0VBQ0Usa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsUUFBUTtFQUNSLFNBQVM7RUFDVCxnQ0FBZ0M7QUFDbEM7O0FBRUE7RUFDRSxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsT0FBTztFQUNQLE1BQU07RUFDTixTQUFTO0VBQ1QsUUFBUTtFQUNSLFNBQVM7RUFDVCxVQUFVO0VBQ1YsV0FBVztBQUNiOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLE9BQU87RUFDUCxNQUFNO0VBQ04sU0FBUztFQUNULHNCQUFzQjtFQUN0QixnQkFBZ0I7RUFDaEIsZ0JBQWdCO0VBQ2hCLGVBQWU7RUFDZixpQkFBaUI7RUFDakIsOEJBQThCO0VBQzlCLGtEQUFrRDtBQUNwRDs7QUFFQTtFQUNFLG9CQUFvQjtBQUN0Qjs7O0FBR0E7RUFDRSxrQkFBa0I7RUFDbEIsb0JBQW9CO0VBQ3BCLGFBQWE7QUFDZjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsT0FBTztFQUNQLE1BQU07RUFDTixVQUFVO0VBQ1YsWUFBWTtFQUNaLHlDQUF5QztBQUMzQzs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixTQUFTO0VBQ1QsbUJBQW1CO0VBQ25CLGdCQUFnQjtFQUNoQixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGVBQWU7RUFDZixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsU0FBUztFQUNULG1CQUFtQjtFQUNuQixnQkFBZ0I7RUFDaEIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQiw0QkFBNEI7QUFDOUI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsV0FBVztFQUNYLGtCQUFrQjtFQUNsQixPQUFPO0VBQ1AsTUFBTTtFQUNOLFdBQVc7RUFDWCxZQUFZO0VBQ1oseURBQTJEO0VBQzNELDJCQUEyQjtFQUMzQiw0QkFBNEI7QUFDOUI7O0FBRUE7RUFDRSxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSw0QkFBNEI7RUFDNUIsd0NBQXdDO0FBQzFDOztBQUVBO0VBQ0UsMEJBQTBCO0VBQzFCLHdDQUF3QztBQUMxQzs7QUFFQTtFQUNFLG9CQUFvQjtFQUNwQixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxjQUFjO0VBQ2QsbUJBQW1CO0VBQ25CLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsbUJBQW1CO0VBQ25CLGFBQWE7RUFDYiw2QkFBNkI7RUFDN0Isa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixpREFBaUQ7RUFDakQsZUFBZTtFQUNmLHlCQUF5QjtFQUN6QixtQ0FBbUM7RUFDbkMsbUNBQW1DO0VBQ25DLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLFNBQVM7RUFDVCxRQUFRO0VBQ1IsVUFBVTtFQUNWLGdDQUFnQztFQUNoQyxtQ0FBbUM7QUFDckM7O0FBRUE7RUFDRSx5Q0FBeUM7RUFDekMsOEJBQThCO0VBQzlCLG9DQUFvQztBQUN0Qzs7QUFFQTtFQUNFLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsU0FBUztFQUNULFFBQVE7RUFDUixXQUFXO0VBQ1gsK0NBQStDO0VBQy9DLG1CQUFtQjtFQUNuQixnQ0FBZ0M7RUFDaEMsZ0RBQTZCO0FBQy9COztBQUVBOztFQUVFLGFBQWE7RUFDYixlQUFlO0FBQ2pCOztBQUVBO0VBQ0U7SUFDRSxrQkFBa0I7SUFDbEIsVUFBVTtFQUNaOztFQUVBO0lBQ0UsbUJBQW1CO0lBQ25CLFVBQVU7RUFDWjtBQUNGOztBQUVBO0VBQ0U7SUFDRSxlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLGFBQWE7RUFDZjs7RUFFQTtJQUNFLGFBQWE7SUFDYixtQkFBbUI7RUFDckI7O0VBRUE7SUFDRSxtQkFBbUI7RUFDckI7O0VBRUE7SUFDRSxlQUFlO0lBQ2YsbUJBQW1CO0VBQ3JCOztFQUVBO0lBQ0UsZUFBZTtFQUNqQjs7RUFFQTtJQUNFLG1CQUFtQjtFQUNyQjs7RUFFQTtJQUNFLGVBQWU7RUFDakI7O0VBRUE7SUFDRSxVQUFVO0lBQ1YsbUJBQW1CO0VBQ3JCOztFQUVBO0lBQ0UsYUFBYTtFQUNmOztFQUVBO0lBQ0UsbUJBQW1CO0VBQ3JCO0FBQ0ZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLm1haW5zY3JlZW5Db250YWluZXIge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDU0NHB4O1xcbiAgbWFyZ2luLWJvdHRvbTogMTAwcHg7XFxufVxcblxcblxcbi5waG90b3NDb250YWluZXIge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgaGVpZ2h0OiA1NDRweDtcXG4gIG1hcmdpbi1ib3R0b206IDQwcHg7XFxufVxcblxcbi5waG90b3NDb250YWluZXIgOmdsb2JhbCgubG9hZGVyV3JhcHBlcikge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiA1MCU7XFxuICBsZWZ0OiA1MCU7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcXG59XFxuXFxuLnBob3Rvc0NvbnRhaW5lciBpbWcge1xcbiAgaGVpZ2h0OiAxMDAlO1xcbn1cXG5cXG4ubWFpbkNvbnRhaW5lciB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBsZWZ0OiAwO1xcbiAgdG9wOiAwO1xcbiAgYm90dG9tOiAwO1xcbiAgcmlnaHQ6IDA7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcblxcbi5tYWluVGl0bGUge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgbGVmdDogMDtcXG4gIHRvcDogMDtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDE0MnB4IDE0MHB4IDA7XFxuICBtYXgtd2lkdGg6IDUzOXB4O1xcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gIGZvbnQtc2l6ZTogNzJweDtcXG4gIGxpbmUtaGVpZ2h0OiA4MnB4O1xcbiAgY29sb3I6IHZhcigtLWNvbG9yLW1haW4tdGl0bGUpO1xcbiAgdGV4dC1zaGFkb3c6IC0xcHggMCAzcHggYmxhY2ssIC0ycHggLTFweCAycHggd2hpdGU7XFxufVxcblxcbi5hYm91dENvbnRhaW5lciB7XFxuICBtYXJnaW4tYm90dG9tOiAxMDBweDtcXG59XFxuXFxuXFxuLmFib3V0IHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIG1hcmdpbi1ib3R0b206IDEwMHB4O1xcbiAgcGFkZGluZzogMjBweDtcXG59XFxuXFxuLmFib3V0OjpiZWZvcmUge1xcbiAgY29udGVudDogJyc7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBsZWZ0OiAwO1xcbiAgdG9wOiAwO1xcbiAgd2lkdGg6IDNweDtcXG4gIGhlaWdodDogMTAwJTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLWV1Y2FseXB0dXMpO1xcbn1cXG5cXG4uYWJvdXRUaXRsZSB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBtYXJnaW46IDA7XFxuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gIGZvbnQtc2l6ZTogMzBweDtcXG59XFxuXFxuLmFib3V0VGl0bGVUZXh0IHtcXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XFxuICBmb250LXNpemU6IDE4cHg7XFxuICBsaW5lLWhlaWdodDogMjhweDtcXG59XFxuXFxuLmRvc210aCB7XFxuICBwYWRkaW5nOiAwIDIwcHg7XFxufVxcblxcbi5kb3NtdGhUaXRsZSB7XFxuICBtYXJnaW46IDA7XFxuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gIGZvbnQtc2l6ZTogMjJweDtcXG59XFxuXFxuLmRvc210aExpc3Qge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgYmFja2dyb3VuZC1zaXplOiAxMDBweCAxMDBweDtcXG59XFxuXFxuLmRvc210aEl0ZW0ge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgcGFkZGluZy1sZWZ0OiA0MHB4O1xcbiAgZm9udC13ZWlnaHQ6IDQwMDtcXG4gIGZvbnQtc2l6ZTogMThweDtcXG59XFxuXFxuLmRvc210aEl0ZW06OmJlZm9yZSB7XFxuICBjb250ZW50OiAnJztcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGxlZnQ6IDA7XFxuICB0b3A6IDA7XFxuICB3aWR0aDogMjBweDtcXG4gIGhlaWdodDogMjBweDtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vLi4vYXNzZXRzL2ltYWdlcy9hcnJvdy1saXN0LnBuZycpO1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG59XFxuXFxuLmRvc210aEl0ZW06bm90KDpsYXN0LWNoaWxkKSB7XFxuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xcbn1cXG5cXG4udW5zcGxhc2hMaW5rIHtcXG4gIGNvbG9yOiB2YXIoLS1jb2xvci1lbWluZW5jZSk7XFxuICB0cmFuc2l0aW9uOiB0ZXh0LWRlY29yYXRpb24gMC4zcyBlYXNlLWluO1xcbn1cXG5cXG4udW5zcGxhc2hMaW5rOmhvdmVyIHtcXG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xcbiAgdHJhbnNpdGlvbjogdGV4dC1kZWNvcmF0aW9uIDAuM3MgZWFzZS1pbjtcXG59XFxuXFxuLmxvb2tQaG90byB7XFxuICBtYXJnaW4tYm90dG9tOiAxMDBweDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLmxvb2tQaG90b1RleHQge1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBtYXJnaW4tYm90dG9tOiA1MHB4O1xcbiAgZm9udC1zaXplOiAyNHB4O1xcbn1cXG5cXG4ubG9va1Bob3RvQnV0dG9uIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XFxuICBvdXRsaW5lOiBub25lO1xcbiAgYm9yZGVyOiAycHggc29saWQgdHJhbnNwYXJlbnQ7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICBwYWRkaW5nOiAxNnB4IDMwcHg7XFxuICBib3gtc2hhZG93OiA2cHggNnB4IDEycHggcmdiYSg3OSwgMjA5LCAxOTcsIDAuNjQpO1xcbiAgZm9udC1zaXplOiAyMnB4O1xcbiAgY29sb3I6IHZhcigtLWNvbG9yLXdoaXRlKTtcXG4gIGJhY2tncm91bmQ6IHZhcigtLWNvbG9yLWV1Y2FseXB0dXMpO1xcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1pbi1vdXQgMHM7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5sb29rUGhvdG9CdXR0b246OmJlZm9yZSB7XFxuICBjb250ZW50OiAnJztcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGxlZnQ6IDUwJTtcXG4gIHRvcDogNTAlO1xcbiAgb3BhY2l0eTogMDtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1pbi1vdXQgMHM7XFxufVxcblxcbi5sb29rUGhvdG9CdXR0b246aG92ZXIge1xcbiAgYm9yZGVyOiAycHggc29saWQgdmFyKC0tY29sb3ItZXVjYWx5cHR1cyk7XFxuICBjb2xvcjogdmFyKC0tY29sb3ItZXVjYWx5cHR1cyk7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci13aGl0ZSk7XFxufVxcblxcbi5sb29rUGhvdG9CdXR0b246OmFmdGVyIHtcXG4gIGNvbnRlbnQ6ICcnO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgbGVmdDogNTAlO1xcbiAgdG9wOiA1MCU7XFxuICB6LWluZGV4OiAtMTtcXG4gIGJvcmRlcjogNXB4IHNvbGlkIHZhcigtLWNvbG9yLWJyaWdodC10dXJxdW9pc2UpO1xcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xcbiAgYW5pbWF0aW9uOiByaW5nIDEuNXMgaW5maW5pdGU7XFxufVxcblxcbi5sb29rUGhvdG9CdXR0b246aG92ZXI6OmFmdGVyLFxcbi5sb29rUGhvdG9CdXR0b246Zm9jdXM6OmFmdGVyIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxuICBhbmltYXRpb246IG5vbmU7XFxufVxcblxcbkBrZXlmcmFtZXMgcmluZyB7XFxuICAwJSB7XFxuICAgIHBhZGRpbmc6IDE2cHggMzBweDtcXG4gICAgb3BhY2l0eTogMTtcXG4gIH1cXG5cXG4gIDEwMCUge1xcbiAgICBwYWRkaW5nOiA1MHB4IDE1MHB4O1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgfVxcbn1cXG5cXG5AbWVkaWEgKG1heC13aWR0aDogNTc2cHgpIHtcXG4gIC5tYWluVGl0bGUge1xcbiAgICBmb250LXNpemU6IDMycHg7XFxuICAgIGxpbmUtaGVpZ2h0OiA1MnB4O1xcbiAgICBwYWRkaW5nOiAyMHB4O1xcbiAgfVxcblxcbiAgLnBob3Rvc0NvbnRhaW5lciB7XFxuICAgIGhlaWdodDogMzIwcHg7XFxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XFxuICB9XFxuXFxuICAuYWJvdXQge1xcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xcbiAgfVxcblxcbiAgLmFib3V0VGl0bGUge1xcbiAgICBmb250LXNpemU6IDIycHg7XFxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XFxuICB9XFxuXFxuICAuYWJvdXRUaXRsZVRleHQge1xcbiAgICBmb250LXNpemU6IDE2cHg7XFxuICB9XFxuXFxuICAuYWJvdXRDb250YWluZXIge1xcbiAgICBtYXJnaW4tYm90dG9tOiA2MHB4O1xcbiAgfVxcblxcbiAgLmRvc210aFRpdGxlIHtcXG4gICAgZm9udC1zaXplOiAyMnB4O1xcbiAgfVxcblxcbiAgLmRvc210aCB7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XFxuICB9XFxuXFxuICAubG9va1Bob3RvVGV4dCB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICB9XFxuXFxuICAubG9va1Bob3RvIHtcXG4gICAgbWFyZ2luLWJvdHRvbTogNDBweDtcXG4gIH1cXG59XFxuXFxuXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5sb2NhbHMgPSB7XG5cdFwibWFpbnNjcmVlbkNvbnRhaW5lclwiOiBcIm1haW5QYWdlLW1fX21haW5zY3JlZW5Db250YWluZXItLURoUDNOXCIsXG5cdFwicGhvdG9zQ29udGFpbmVyXCI6IFwibWFpblBhZ2UtbV9fcGhvdG9zQ29udGFpbmVyLS1fUnRiSlwiLFxuXHRcIm1haW5Db250YWluZXJcIjogXCJtYWluUGFnZS1tX19tYWluQ29udGFpbmVyLS1aSDFJelwiLFxuXHRcIm1haW5UaXRsZVwiOiBcIm1haW5QYWdlLW1fX21haW5UaXRsZS0tUVB1TzhcIixcblx0XCJhYm91dENvbnRhaW5lclwiOiBcIm1haW5QYWdlLW1fX2Fib3V0Q29udGFpbmVyLS1teGlmUFwiLFxuXHRcImFib3V0XCI6IFwibWFpblBhZ2UtbV9fYWJvdXQtLVRHQklYXCIsXG5cdFwiYWJvdXRUaXRsZVwiOiBcIm1haW5QYWdlLW1fX2Fib3V0VGl0bGUtLXd2TjdhXCIsXG5cdFwiYWJvdXRUaXRsZVRleHRcIjogXCJtYWluUGFnZS1tX19hYm91dFRpdGxlVGV4dC0tRm1XN2RcIixcblx0XCJkb3NtdGhcIjogXCJtYWluUGFnZS1tX19kb3NtdGgtLWVrZUVMXCIsXG5cdFwiZG9zbXRoVGl0bGVcIjogXCJtYWluUGFnZS1tX19kb3NtdGhUaXRsZS0tc0VNSUZcIixcblx0XCJkb3NtdGhMaXN0XCI6IFwibWFpblBhZ2UtbV9fZG9zbXRoTGlzdC0tVlVwTU9cIixcblx0XCJkb3NtdGhJdGVtXCI6IFwibWFpblBhZ2UtbV9fZG9zbXRoSXRlbS0tY2hBZFpcIixcblx0XCJ1bnNwbGFzaExpbmtcIjogXCJtYWluUGFnZS1tX191bnNwbGFzaExpbmstLW1nUHJjXCIsXG5cdFwibG9va1Bob3RvXCI6IFwibWFpblBhZ2UtbV9fbG9va1Bob3RvLS1MZkJ5VFwiLFxuXHRcImxvb2tQaG90b1RleHRcIjogXCJtYWluUGFnZS1tX19sb29rUGhvdG9UZXh0LS1Dc2V4Q1wiLFxuXHRcImxvb2tQaG90b0J1dHRvblwiOiBcIm1haW5QYWdlLW1fX2xvb2tQaG90b0J1dHRvbi0tdng3RzJcIixcblx0XCJyaW5nXCI6IFwibWFpblBhZ2UtbV9fcmluZy0tSGgxM2pcIlxufTtcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuaWYgKG1vZHVsZS5ob3QpIHtcbiAgaWYgKCFjb250ZW50LmxvY2FscyB8fCBtb2R1bGUuaG90LmludmFsaWRhdGUpIHtcbiAgICB2YXIgaXNFcXVhbExvY2FscyA9IGZ1bmN0aW9uIGlzRXF1YWxMb2NhbHMoYSwgYiwgaXNOYW1lZEV4cG9ydCkge1xuICBpZiAoIWEgJiYgYiB8fCBhICYmICFiKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgdmFyIHA7XG5cbiAgZm9yIChwIGluIGEpIHtcbiAgICBpZiAoaXNOYW1lZEV4cG9ydCAmJiBwID09PSBcImRlZmF1bHRcIikge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnRpbnVlXG4gICAgICBjb250aW51ZTtcbiAgICB9XG5cbiAgICBpZiAoYVtwXSAhPT0gYltwXSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIGZvciAocCBpbiBiKSB7XG4gICAgaWYgKGlzTmFtZWRFeHBvcnQgJiYgcCA9PT0gXCJkZWZhdWx0XCIpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb250aW51ZVxuICAgICAgY29udGludWU7XG4gICAgfVxuXG4gICAgaWYgKCFhW3BdKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHRydWU7XG59O1xuICAgIHZhciBpc05hbWVkRXhwb3J0ID0gIWNvbnRlbnQubG9jYWxzO1xuICAgIHZhciBvbGRMb2NhbHMgPSBpc05hbWVkRXhwb3J0ID8gbmFtZWRFeHBvcnQgOiBjb250ZW50LmxvY2FscztcblxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFxuICAgICAgXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVzLmNzc1wiLFxuICAgICAgZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAoIWlzRXF1YWxMb2NhbHMob2xkTG9jYWxzLCBpc05hbWVkRXhwb3J0ID8gbmFtZWRFeHBvcnQgOiBjb250ZW50LmxvY2FscywgaXNOYW1lZEV4cG9ydCkpIHtcbiAgICAgICAgICAgICAgICBtb2R1bGUuaG90LmludmFsaWRhdGUoKTtcblxuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIG9sZExvY2FscyA9IGlzTmFtZWRFeHBvcnQgPyBuYW1lZEV4cG9ydCA6IGNvbnRlbnQubG9jYWxzO1xuXG4gICAgICAgICAgICAgIHVwZGF0ZShjb250ZW50KTtcbiAgICAgIH1cbiAgICApXG4gIH1cblxuICBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7XG4gICAgdXBkYXRlKCk7XG4gIH0pO1xufVxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVzLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbMV0udXNlWzFdIS4vZm9vdGVyLm0uY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cbmlmIChtb2R1bGUuaG90KSB7XG4gIGlmICghY29udGVudC5sb2NhbHMgfHwgbW9kdWxlLmhvdC5pbnZhbGlkYXRlKSB7XG4gICAgdmFyIGlzRXF1YWxMb2NhbHMgPSBmdW5jdGlvbiBpc0VxdWFsTG9jYWxzKGEsIGIsIGlzTmFtZWRFeHBvcnQpIHtcbiAgaWYgKCFhICYmIGIgfHwgYSAmJiAhYikge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHZhciBwO1xuXG4gIGZvciAocCBpbiBhKSB7XG4gICAgaWYgKGlzTmFtZWRFeHBvcnQgJiYgcCA9PT0gXCJkZWZhdWx0XCIpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb250aW51ZVxuICAgICAgY29udGludWU7XG4gICAgfVxuXG4gICAgaWYgKGFbcF0gIT09IGJbcF0pIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cblxuICBmb3IgKHAgaW4gYikge1xuICAgIGlmIChpc05hbWVkRXhwb3J0ICYmIHAgPT09IFwiZGVmYXVsdFwiKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29udGludWVcbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cblxuICAgIGlmICghYVtwXSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB0cnVlO1xufTtcbiAgICB2YXIgaXNOYW1lZEV4cG9ydCA9ICFjb250ZW50LmxvY2FscztcbiAgICB2YXIgb2xkTG9jYWxzID0gaXNOYW1lZEV4cG9ydCA/IG5hbWVkRXhwb3J0IDogY29udGVudC5sb2NhbHM7XG5cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcbiAgICAgIFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1sxXS51c2VbMV0hLi9mb290ZXIubS5jc3NcIixcbiAgICAgIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKCFpc0VxdWFsTG9jYWxzKG9sZExvY2FscywgaXNOYW1lZEV4cG9ydCA/IG5hbWVkRXhwb3J0IDogY29udGVudC5sb2NhbHMsIGlzTmFtZWRFeHBvcnQpKSB7XG4gICAgICAgICAgICAgICAgbW9kdWxlLmhvdC5pbnZhbGlkYXRlKCk7XG5cbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICBvbGRMb2NhbHMgPSBpc05hbWVkRXhwb3J0ID8gbmFtZWRFeHBvcnQgOiBjb250ZW50LmxvY2FscztcblxuICAgICAgICAgICAgICB1cGRhdGUoY29udGVudCk7XG4gICAgICB9XG4gICAgKVxuICB9XG5cbiAgbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkge1xuICAgIHVwZGF0ZSgpO1xuICB9KTtcbn1cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1sxXS51c2VbMV0hLi9mb290ZXIubS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzFdLnVzZVsxXSEuL2xvY2F0aW9uLm0uY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cbmlmIChtb2R1bGUuaG90KSB7XG4gIGlmICghY29udGVudC5sb2NhbHMgfHwgbW9kdWxlLmhvdC5pbnZhbGlkYXRlKSB7XG4gICAgdmFyIGlzRXF1YWxMb2NhbHMgPSBmdW5jdGlvbiBpc0VxdWFsTG9jYWxzKGEsIGIsIGlzTmFtZWRFeHBvcnQpIHtcbiAgaWYgKCFhICYmIGIgfHwgYSAmJiAhYikge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHZhciBwO1xuXG4gIGZvciAocCBpbiBhKSB7XG4gICAgaWYgKGlzTmFtZWRFeHBvcnQgJiYgcCA9PT0gXCJkZWZhdWx0XCIpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb250aW51ZVxuICAgICAgY29udGludWU7XG4gICAgfVxuXG4gICAgaWYgKGFbcF0gIT09IGJbcF0pIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cblxuICBmb3IgKHAgaW4gYikge1xuICAgIGlmIChpc05hbWVkRXhwb3J0ICYmIHAgPT09IFwiZGVmYXVsdFwiKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29udGludWVcbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cblxuICAgIGlmICghYVtwXSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB0cnVlO1xufTtcbiAgICB2YXIgaXNOYW1lZEV4cG9ydCA9ICFjb250ZW50LmxvY2FscztcbiAgICB2YXIgb2xkTG9jYWxzID0gaXNOYW1lZEV4cG9ydCA/IG5hbWVkRXhwb3J0IDogY29udGVudC5sb2NhbHM7XG5cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcbiAgICAgIFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1sxXS51c2VbMV0hLi9sb2NhdGlvbi5tLmNzc1wiLFxuICAgICAgZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAoIWlzRXF1YWxMb2NhbHMob2xkTG9jYWxzLCBpc05hbWVkRXhwb3J0ID8gbmFtZWRFeHBvcnQgOiBjb250ZW50LmxvY2FscywgaXNOYW1lZEV4cG9ydCkpIHtcbiAgICAgICAgICAgICAgICBtb2R1bGUuaG90LmludmFsaWRhdGUoKTtcblxuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIG9sZExvY2FscyA9IGlzTmFtZWRFeHBvcnQgPyBuYW1lZEV4cG9ydCA6IGNvbnRlbnQubG9jYWxzO1xuXG4gICAgICAgICAgICAgIHVwZGF0ZShjb250ZW50KTtcbiAgICAgIH1cbiAgICApXG4gIH1cblxuICBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7XG4gICAgdXBkYXRlKCk7XG4gIH0pO1xufVxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzFdLnVzZVsxXSEuL2xvY2F0aW9uLm0uY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1sxXS51c2VbMV0hLi9zaWduaW4ubS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuaWYgKG1vZHVsZS5ob3QpIHtcbiAgaWYgKCFjb250ZW50LmxvY2FscyB8fCBtb2R1bGUuaG90LmludmFsaWRhdGUpIHtcbiAgICB2YXIgaXNFcXVhbExvY2FscyA9IGZ1bmN0aW9uIGlzRXF1YWxMb2NhbHMoYSwgYiwgaXNOYW1lZEV4cG9ydCkge1xuICBpZiAoIWEgJiYgYiB8fCBhICYmICFiKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgdmFyIHA7XG5cbiAgZm9yIChwIGluIGEpIHtcbiAgICBpZiAoaXNOYW1lZEV4cG9ydCAmJiBwID09PSBcImRlZmF1bHRcIikge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnRpbnVlXG4gICAgICBjb250aW51ZTtcbiAgICB9XG5cbiAgICBpZiAoYVtwXSAhPT0gYltwXSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIGZvciAocCBpbiBiKSB7XG4gICAgaWYgKGlzTmFtZWRFeHBvcnQgJiYgcCA9PT0gXCJkZWZhdWx0XCIpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb250aW51ZVxuICAgICAgY29udGludWU7XG4gICAgfVxuXG4gICAgaWYgKCFhW3BdKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHRydWU7XG59O1xuICAgIHZhciBpc05hbWVkRXhwb3J0ID0gIWNvbnRlbnQubG9jYWxzO1xuICAgIHZhciBvbGRMb2NhbHMgPSBpc05hbWVkRXhwb3J0ID8gbmFtZWRFeHBvcnQgOiBjb250ZW50LmxvY2FscztcblxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFxuICAgICAgXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzFdLnVzZVsxXSEuL3NpZ25pbi5tLmNzc1wiLFxuICAgICAgZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAoIWlzRXF1YWxMb2NhbHMob2xkTG9jYWxzLCBpc05hbWVkRXhwb3J0ID8gbmFtZWRFeHBvcnQgOiBjb250ZW50LmxvY2FscywgaXNOYW1lZEV4cG9ydCkpIHtcbiAgICAgICAgICAgICAgICBtb2R1bGUuaG90LmludmFsaWRhdGUoKTtcblxuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIG9sZExvY2FscyA9IGlzTmFtZWRFeHBvcnQgPyBuYW1lZEV4cG9ydCA6IGNvbnRlbnQubG9jYWxzO1xuXG4gICAgICAgICAgICAgIHVwZGF0ZShjb250ZW50KTtcbiAgICAgIH1cbiAgICApXG4gIH1cblxuICBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7XG4gICAgdXBkYXRlKCk7XG4gIH0pO1xufVxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzFdLnVzZVsxXSEuL3NpZ25pbi5tLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbMV0udXNlWzFdIS4vaGVhZGVyLm0uY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cbmlmIChtb2R1bGUuaG90KSB7XG4gIGlmICghY29udGVudC5sb2NhbHMgfHwgbW9kdWxlLmhvdC5pbnZhbGlkYXRlKSB7XG4gICAgdmFyIGlzRXF1YWxMb2NhbHMgPSBmdW5jdGlvbiBpc0VxdWFsTG9jYWxzKGEsIGIsIGlzTmFtZWRFeHBvcnQpIHtcbiAgaWYgKCFhICYmIGIgfHwgYSAmJiAhYikge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHZhciBwO1xuXG4gIGZvciAocCBpbiBhKSB7XG4gICAgaWYgKGlzTmFtZWRFeHBvcnQgJiYgcCA9PT0gXCJkZWZhdWx0XCIpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb250aW51ZVxuICAgICAgY29udGludWU7XG4gICAgfVxuXG4gICAgaWYgKGFbcF0gIT09IGJbcF0pIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cblxuICBmb3IgKHAgaW4gYikge1xuICAgIGlmIChpc05hbWVkRXhwb3J0ICYmIHAgPT09IFwiZGVmYXVsdFwiKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29udGludWVcbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cblxuICAgIGlmICghYVtwXSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB0cnVlO1xufTtcbiAgICB2YXIgaXNOYW1lZEV4cG9ydCA9ICFjb250ZW50LmxvY2FscztcbiAgICB2YXIgb2xkTG9jYWxzID0gaXNOYW1lZEV4cG9ydCA/IG5hbWVkRXhwb3J0IDogY29udGVudC5sb2NhbHM7XG5cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcbiAgICAgIFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1sxXS51c2VbMV0hLi9oZWFkZXIubS5jc3NcIixcbiAgICAgIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKCFpc0VxdWFsTG9jYWxzKG9sZExvY2FscywgaXNOYW1lZEV4cG9ydCA/IG5hbWVkRXhwb3J0IDogY29udGVudC5sb2NhbHMsIGlzTmFtZWRFeHBvcnQpKSB7XG4gICAgICAgICAgICAgICAgbW9kdWxlLmhvdC5pbnZhbGlkYXRlKCk7XG5cbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICBvbGRMb2NhbHMgPSBpc05hbWVkRXhwb3J0ID8gbmFtZWRFeHBvcnQgOiBjb250ZW50LmxvY2FscztcblxuICAgICAgICAgICAgICB1cGRhdGUoY29udGVudCk7XG4gICAgICB9XG4gICAgKVxuICB9XG5cbiAgbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkge1xuICAgIHVwZGF0ZSgpO1xuICB9KTtcbn1cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1sxXS51c2VbMV0hLi9oZWFkZXIubS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzFdLnVzZVsxXSEuL3Byb2ZpbGUubS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuaWYgKG1vZHVsZS5ob3QpIHtcbiAgaWYgKCFjb250ZW50LmxvY2FscyB8fCBtb2R1bGUuaG90LmludmFsaWRhdGUpIHtcbiAgICB2YXIgaXNFcXVhbExvY2FscyA9IGZ1bmN0aW9uIGlzRXF1YWxMb2NhbHMoYSwgYiwgaXNOYW1lZEV4cG9ydCkge1xuICBpZiAoIWEgJiYgYiB8fCBhICYmICFiKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgdmFyIHA7XG5cbiAgZm9yIChwIGluIGEpIHtcbiAgICBpZiAoaXNOYW1lZEV4cG9ydCAmJiBwID09PSBcImRlZmF1bHRcIikge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnRpbnVlXG4gICAgICBjb250aW51ZTtcbiAgICB9XG5cbiAgICBpZiAoYVtwXSAhPT0gYltwXSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIGZvciAocCBpbiBiKSB7XG4gICAgaWYgKGlzTmFtZWRFeHBvcnQgJiYgcCA9PT0gXCJkZWZhdWx0XCIpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb250aW51ZVxuICAgICAgY29udGludWU7XG4gICAgfVxuXG4gICAgaWYgKCFhW3BdKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHRydWU7XG59O1xuICAgIHZhciBpc05hbWVkRXhwb3J0ID0gIWNvbnRlbnQubG9jYWxzO1xuICAgIHZhciBvbGRMb2NhbHMgPSBpc05hbWVkRXhwb3J0ID8gbmFtZWRFeHBvcnQgOiBjb250ZW50LmxvY2FscztcblxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFxuICAgICAgXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzFdLnVzZVsxXSEuL3Byb2ZpbGUubS5jc3NcIixcbiAgICAgIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKCFpc0VxdWFsTG9jYWxzKG9sZExvY2FscywgaXNOYW1lZEV4cG9ydCA/IG5hbWVkRXhwb3J0IDogY29udGVudC5sb2NhbHMsIGlzTmFtZWRFeHBvcnQpKSB7XG4gICAgICAgICAgICAgICAgbW9kdWxlLmhvdC5pbnZhbGlkYXRlKCk7XG5cbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICBvbGRMb2NhbHMgPSBpc05hbWVkRXhwb3J0ID8gbmFtZWRFeHBvcnQgOiBjb250ZW50LmxvY2FscztcblxuICAgICAgICAgICAgICB1cGRhdGUoY29udGVudCk7XG4gICAgICB9XG4gICAgKVxuICB9XG5cbiAgbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkge1xuICAgIHVwZGF0ZSgpO1xuICB9KTtcbn1cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1sxXS51c2VbMV0hLi9wcm9maWxlLm0uY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1sxXS51c2VbMV0hLi9zcGlubmVyLm0uY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cbmlmIChtb2R1bGUuaG90KSB7XG4gIGlmICghY29udGVudC5sb2NhbHMgfHwgbW9kdWxlLmhvdC5pbnZhbGlkYXRlKSB7XG4gICAgdmFyIGlzRXF1YWxMb2NhbHMgPSBmdW5jdGlvbiBpc0VxdWFsTG9jYWxzKGEsIGIsIGlzTmFtZWRFeHBvcnQpIHtcbiAgaWYgKCFhICYmIGIgfHwgYSAmJiAhYikge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHZhciBwO1xuXG4gIGZvciAocCBpbiBhKSB7XG4gICAgaWYgKGlzTmFtZWRFeHBvcnQgJiYgcCA9PT0gXCJkZWZhdWx0XCIpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb250aW51ZVxuICAgICAgY29udGludWU7XG4gICAgfVxuXG4gICAgaWYgKGFbcF0gIT09IGJbcF0pIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cblxuICBmb3IgKHAgaW4gYikge1xuICAgIGlmIChpc05hbWVkRXhwb3J0ICYmIHAgPT09IFwiZGVmYXVsdFwiKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29udGludWVcbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cblxuICAgIGlmICghYVtwXSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB0cnVlO1xufTtcbiAgICB2YXIgaXNOYW1lZEV4cG9ydCA9ICFjb250ZW50LmxvY2FscztcbiAgICB2YXIgb2xkTG9jYWxzID0gaXNOYW1lZEV4cG9ydCA/IG5hbWVkRXhwb3J0IDogY29udGVudC5sb2NhbHM7XG5cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcbiAgICAgIFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1sxXS51c2VbMV0hLi9zcGlubmVyLm0uY3NzXCIsXG4gICAgICBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICghaXNFcXVhbExvY2FscyhvbGRMb2NhbHMsIGlzTmFtZWRFeHBvcnQgPyBuYW1lZEV4cG9ydCA6IGNvbnRlbnQubG9jYWxzLCBpc05hbWVkRXhwb3J0KSkge1xuICAgICAgICAgICAgICAgIG1vZHVsZS5ob3QuaW52YWxpZGF0ZSgpO1xuXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgb2xkTG9jYWxzID0gaXNOYW1lZEV4cG9ydCA/IG5hbWVkRXhwb3J0IDogY29udGVudC5sb2NhbHM7XG5cbiAgICAgICAgICAgICAgdXBkYXRlKGNvbnRlbnQpO1xuICAgICAgfVxuICAgIClcbiAgfVxuXG4gIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHtcbiAgICB1cGRhdGUoKTtcbiAgfSk7XG59XG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbMV0udXNlWzFdIS4vc3Bpbm5lci5tLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbMV0udXNlWzFdIS4vbWFpblBhZ2UubS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuaWYgKG1vZHVsZS5ob3QpIHtcbiAgaWYgKCFjb250ZW50LmxvY2FscyB8fCBtb2R1bGUuaG90LmludmFsaWRhdGUpIHtcbiAgICB2YXIgaXNFcXVhbExvY2FscyA9IGZ1bmN0aW9uIGlzRXF1YWxMb2NhbHMoYSwgYiwgaXNOYW1lZEV4cG9ydCkge1xuICBpZiAoIWEgJiYgYiB8fCBhICYmICFiKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgdmFyIHA7XG5cbiAgZm9yIChwIGluIGEpIHtcbiAgICBpZiAoaXNOYW1lZEV4cG9ydCAmJiBwID09PSBcImRlZmF1bHRcIikge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnRpbnVlXG4gICAgICBjb250aW51ZTtcbiAgICB9XG5cbiAgICBpZiAoYVtwXSAhPT0gYltwXSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIGZvciAocCBpbiBiKSB7XG4gICAgaWYgKGlzTmFtZWRFeHBvcnQgJiYgcCA9PT0gXCJkZWZhdWx0XCIpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb250aW51ZVxuICAgICAgY29udGludWU7XG4gICAgfVxuXG4gICAgaWYgKCFhW3BdKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHRydWU7XG59O1xuICAgIHZhciBpc05hbWVkRXhwb3J0ID0gIWNvbnRlbnQubG9jYWxzO1xuICAgIHZhciBvbGRMb2NhbHMgPSBpc05hbWVkRXhwb3J0ID8gbmFtZWRFeHBvcnQgOiBjb250ZW50LmxvY2FscztcblxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFxuICAgICAgXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzFdLnVzZVsxXSEuL21haW5QYWdlLm0uY3NzXCIsXG4gICAgICBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICghaXNFcXVhbExvY2FscyhvbGRMb2NhbHMsIGlzTmFtZWRFeHBvcnQgPyBuYW1lZEV4cG9ydCA6IGNvbnRlbnQubG9jYWxzLCBpc05hbWVkRXhwb3J0KSkge1xuICAgICAgICAgICAgICAgIG1vZHVsZS5ob3QuaW52YWxpZGF0ZSgpO1xuXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgb2xkTG9jYWxzID0gaXNOYW1lZEV4cG9ydCA/IG5hbWVkRXhwb3J0IDogY29udGVudC5sb2NhbHM7XG5cbiAgICAgICAgICAgICAgdXBkYXRlKGNvbnRlbnQpO1xuICAgICAgfVxuICAgIClcbiAgfVxuXG4gIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHtcbiAgICB1cGRhdGUoKTtcbiAgfSk7XG59XG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbMV0udXNlWzFdIS4vbWFpblBhZ2UubS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0aWYgKGNhY2hlZE1vZHVsZS5lcnJvciAhPT0gdW5kZWZpbmVkKSB0aHJvdyBjYWNoZWRNb2R1bGUuZXJyb3I7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHRsb2FkZWQ6IGZhbHNlLFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdHRyeSB7XG5cdFx0dmFyIGV4ZWNPcHRpb25zID0geyBpZDogbW9kdWxlSWQsIG1vZHVsZTogbW9kdWxlLCBmYWN0b3J5OiBfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXSwgcmVxdWlyZTogX193ZWJwYWNrX3JlcXVpcmVfXyB9O1xuXHRcdF9fd2VicGFja19yZXF1aXJlX18uaS5mb3JFYWNoKGZ1bmN0aW9uKGhhbmRsZXIpIHsgaGFuZGxlcihleGVjT3B0aW9ucyk7IH0pO1xuXHRcdG1vZHVsZSA9IGV4ZWNPcHRpb25zLm1vZHVsZTtcblx0XHRleGVjT3B0aW9ucy5mYWN0b3J5LmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIGV4ZWNPcHRpb25zLnJlcXVpcmUpO1xuXHR9IGNhdGNoKGUpIHtcblx0XHRtb2R1bGUuZXJyb3IgPSBlO1xuXHRcdHRocm93IGU7XG5cdH1cblxuXHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG5cdG1vZHVsZS5sb2FkZWQgPSB0cnVlO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX187XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlIGV4ZWN1dGlvbiBpbnRlcmNlcHRvclxuX193ZWJwYWNrX3JlcXVpcmVfXy5pID0gW107XG5cbiIsInZhciBkZWZlcnJlZCA9IFtdO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5PID0gKHJlc3VsdCwgY2h1bmtJZHMsIGZuLCBwcmlvcml0eSkgPT4ge1xuXHRpZihjaHVua0lkcykge1xuXHRcdHByaW9yaXR5ID0gcHJpb3JpdHkgfHwgMDtcblx0XHRmb3IodmFyIGkgPSBkZWZlcnJlZC5sZW5ndGg7IGkgPiAwICYmIGRlZmVycmVkW2kgLSAxXVsyXSA+IHByaW9yaXR5OyBpLS0pIGRlZmVycmVkW2ldID0gZGVmZXJyZWRbaSAtIDFdO1xuXHRcdGRlZmVycmVkW2ldID0gW2NodW5rSWRzLCBmbiwgcHJpb3JpdHldO1xuXHRcdHJldHVybjtcblx0fVxuXHR2YXIgbm90RnVsZmlsbGVkID0gSW5maW5pdHk7XG5cdGZvciAodmFyIGkgPSAwOyBpIDwgZGVmZXJyZWQubGVuZ3RoOyBpKyspIHtcblx0XHR2YXIgW2NodW5rSWRzLCBmbiwgcHJpb3JpdHldID0gZGVmZXJyZWRbaV07XG5cdFx0dmFyIGZ1bGZpbGxlZCA9IHRydWU7XG5cdFx0Zm9yICh2YXIgaiA9IDA7IGogPCBjaHVua0lkcy5sZW5ndGg7IGorKykge1xuXHRcdFx0aWYgKChwcmlvcml0eSAmIDEgPT09IDAgfHwgbm90RnVsZmlsbGVkID49IHByaW9yaXR5KSAmJiBPYmplY3Qua2V5cyhfX3dlYnBhY2tfcmVxdWlyZV9fLk8pLmV2ZXJ5KChrZXkpID0+IChfX3dlYnBhY2tfcmVxdWlyZV9fLk9ba2V5XShjaHVua0lkc1tqXSkpKSkge1xuXHRcdFx0XHRjaHVua0lkcy5zcGxpY2Uoai0tLCAxKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGZ1bGZpbGxlZCA9IGZhbHNlO1xuXHRcdFx0XHRpZihwcmlvcml0eSA8IG5vdEZ1bGZpbGxlZCkgbm90RnVsZmlsbGVkID0gcHJpb3JpdHk7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGlmKGZ1bGZpbGxlZCkge1xuXHRcdFx0ZGVmZXJyZWQuc3BsaWNlKGktLSwgMSlcblx0XHRcdHZhciByID0gZm4oKTtcblx0XHRcdGlmIChyICE9PSB1bmRlZmluZWQpIHJlc3VsdCA9IHI7XG5cdFx0fVxuXHR9XG5cdHJldHVybiByZXN1bHQ7XG59OyIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5mID0ge307XG4vLyBUaGlzIGZpbGUgY29udGFpbnMgb25seSB0aGUgZW50cnkgY2h1bmsuXG4vLyBUaGUgY2h1bmsgbG9hZGluZyBmdW5jdGlvbiBmb3IgYWRkaXRpb25hbCBjaHVua3Ncbl9fd2VicGFja19yZXF1aXJlX18uZSA9IChjaHVua0lkKSA9PiB7XG5cdHJldHVybiBQcm9taXNlLmFsbChPYmplY3Qua2V5cyhfX3dlYnBhY2tfcmVxdWlyZV9fLmYpLnJlZHVjZSgocHJvbWlzZXMsIGtleSkgPT4ge1xuXHRcdF9fd2VicGFja19yZXF1aXJlX18uZltrZXldKGNodW5rSWQsIHByb21pc2VzKTtcblx0XHRyZXR1cm4gcHJvbWlzZXM7XG5cdH0sIFtdKSk7XG59OyIsIi8vIFRoaXMgZnVuY3Rpb24gYWxsb3cgdG8gcmVmZXJlbmNlIGFzeW5jIGNodW5rc1xuX193ZWJwYWNrX3JlcXVpcmVfXy51ID0gKGNodW5rSWQpID0+IHtcblx0Ly8gcmV0dXJuIHVybCBmb3IgZmlsZW5hbWVzIGJhc2VkIG9uIHRlbXBsYXRlXG5cdHJldHVybiBcIlwiICsgY2h1bmtJZCArIFwiLmpzXCI7XG59OyIsIi8vIFRoaXMgZnVuY3Rpb24gYWxsb3cgdG8gcmVmZXJlbmNlIGFsbCBjaHVua3Ncbl9fd2VicGFja19yZXF1aXJlX18uaHUgPSAoY2h1bmtJZCkgPT4ge1xuXHQvLyByZXR1cm4gdXJsIGZvciBmaWxlbmFtZXMgYmFzZWQgb24gdGVtcGxhdGVcblx0cmV0dXJuIFwiXCIgKyBjaHVua0lkICsgXCIuXCIgKyBfX3dlYnBhY2tfcmVxdWlyZV9fLmgoKSArIFwiLmhvdC11cGRhdGUuanNcIjtcbn07IiwiLy8gVGhpcyBmdW5jdGlvbiBhbGxvdyB0byByZWZlcmVuY2UgYXN5bmMgY2h1bmtzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm1pbmlDc3NGID0gKGNodW5rSWQpID0+IHtcblx0Ly8gcmV0dXJuIHVybCBmb3IgZmlsZW5hbWVzIGJhc2VkIG9uIHRlbXBsYXRlXG5cdHJldHVybiB1bmRlZmluZWQ7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uaG1yRiA9ICgpID0+IChcIm1haW4uXCIgKyBfX3dlYnBhY2tfcmVxdWlyZV9fLmgoKSArIFwiLmhvdC11cGRhdGUuanNvblwiKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCI4MDY5YWYyODgyYjQ4ZjJkNzY0YlwiKSIsIl9fd2VicGFja19yZXF1aXJlX18uaG1kID0gKG1vZHVsZSkgPT4ge1xuXHRtb2R1bGUgPSBPYmplY3QuY3JlYXRlKG1vZHVsZSk7XG5cdGlmICghbW9kdWxlLmNoaWxkcmVuKSBtb2R1bGUuY2hpbGRyZW4gPSBbXTtcblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG1vZHVsZSwgJ2V4cG9ydHMnLCB7XG5cdFx0ZW51bWVyYWJsZTogdHJ1ZSxcblx0XHRzZXQ6ICgpID0+IHtcblx0XHRcdHRocm93IG5ldyBFcnJvcignRVMgTW9kdWxlcyBtYXkgbm90IGFzc2lnbiBtb2R1bGUuZXhwb3J0cyBvciBleHBvcnRzLiosIFVzZSBFU00gZXhwb3J0IHN5bnRheCwgaW5zdGVhZDogJyArIG1vZHVsZS5pZCk7XG5cdFx0fVxuXHR9KTtcblx0cmV0dXJuIG1vZHVsZTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsInZhciBpblByb2dyZXNzID0ge307XG52YXIgZGF0YVdlYnBhY2tQcmVmaXggPSBcIndlYnBhY2s6XCI7XG4vLyBsb2FkU2NyaXB0IGZ1bmN0aW9uIHRvIGxvYWQgYSBzY3JpcHQgdmlhIHNjcmlwdCB0YWdcbl9fd2VicGFja19yZXF1aXJlX18ubCA9ICh1cmwsIGRvbmUsIGtleSwgY2h1bmtJZCkgPT4ge1xuXHRpZihpblByb2dyZXNzW3VybF0pIHsgaW5Qcm9ncmVzc1t1cmxdLnB1c2goZG9uZSk7IHJldHVybjsgfVxuXHR2YXIgc2NyaXB0LCBuZWVkQXR0YWNoO1xuXHRpZihrZXkgIT09IHVuZGVmaW5lZCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0Zm9yKHZhciBpID0gMDsgaSA8IHNjcmlwdHMubGVuZ3RoOyBpKyspIHtcblx0XHRcdHZhciBzID0gc2NyaXB0c1tpXTtcblx0XHRcdGlmKHMuZ2V0QXR0cmlidXRlKFwic3JjXCIpID09IHVybCB8fCBzLmdldEF0dHJpYnV0ZShcImRhdGEtd2VicGFja1wiKSA9PSBkYXRhV2VicGFja1ByZWZpeCArIGtleSkgeyBzY3JpcHQgPSBzOyBicmVhazsgfVxuXHRcdH1cblx0fVxuXHRpZighc2NyaXB0KSB7XG5cdFx0bmVlZEF0dGFjaCA9IHRydWU7XG5cdFx0c2NyaXB0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2NyaXB0Jyk7XG5cblx0XHRzY3JpcHQuY2hhcnNldCA9ICd1dGYtOCc7XG5cdFx0c2NyaXB0LnRpbWVvdXQgPSAxMjA7XG5cdFx0aWYgKF9fd2VicGFja19yZXF1aXJlX18ubmMpIHtcblx0XHRcdHNjcmlwdC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBfX3dlYnBhY2tfcmVxdWlyZV9fLm5jKTtcblx0XHR9XG5cdFx0c2NyaXB0LnNldEF0dHJpYnV0ZShcImRhdGEtd2VicGFja1wiLCBkYXRhV2VicGFja1ByZWZpeCArIGtleSk7XG5cdFx0c2NyaXB0LnNyYyA9IHVybDtcblx0fVxuXHRpblByb2dyZXNzW3VybF0gPSBbZG9uZV07XG5cdHZhciBvblNjcmlwdENvbXBsZXRlID0gKHByZXYsIGV2ZW50KSA9PiB7XG5cdFx0Ly8gYXZvaWQgbWVtIGxlYWtzIGluIElFLlxuXHRcdHNjcmlwdC5vbmVycm9yID0gc2NyaXB0Lm9ubG9hZCA9IG51bGw7XG5cdFx0Y2xlYXJUaW1lb3V0KHRpbWVvdXQpO1xuXHRcdHZhciBkb25lRm5zID0gaW5Qcm9ncmVzc1t1cmxdO1xuXHRcdGRlbGV0ZSBpblByb2dyZXNzW3VybF07XG5cdFx0c2NyaXB0LnBhcmVudE5vZGUgJiYgc2NyaXB0LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc2NyaXB0KTtcblx0XHRkb25lRm5zICYmIGRvbmVGbnMuZm9yRWFjaCgoZm4pID0+IChmbihldmVudCkpKTtcblx0XHRpZihwcmV2KSByZXR1cm4gcHJldihldmVudCk7XG5cdH1cblx0O1xuXHR2YXIgdGltZW91dCA9IHNldFRpbWVvdXQob25TY3JpcHRDb21wbGV0ZS5iaW5kKG51bGwsIHVuZGVmaW5lZCwgeyB0eXBlOiAndGltZW91dCcsIHRhcmdldDogc2NyaXB0IH0pLCAxMjAwMDApO1xuXHRzY3JpcHQub25lcnJvciA9IG9uU2NyaXB0Q29tcGxldGUuYmluZChudWxsLCBzY3JpcHQub25lcnJvcik7XG5cdHNjcmlwdC5vbmxvYWQgPSBvblNjcmlwdENvbXBsZXRlLmJpbmQobnVsbCwgc2NyaXB0Lm9ubG9hZCk7XG5cdG5lZWRBdHRhY2ggJiYgZG9jdW1lbnQuaGVhZC5hcHBlbmRDaGlsZChzY3JpcHQpO1xufTsiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgY3VycmVudE1vZHVsZURhdGEgPSB7fTtcbnZhciBpbnN0YWxsZWRNb2R1bGVzID0gX193ZWJwYWNrX3JlcXVpcmVfXy5jO1xuXG4vLyBtb2R1bGUgYW5kIHJlcXVpcmUgY3JlYXRpb25cbnZhciBjdXJyZW50Q2hpbGRNb2R1bGU7XG52YXIgY3VycmVudFBhcmVudHMgPSBbXTtcblxuLy8gc3RhdHVzXG52YXIgcmVnaXN0ZXJlZFN0YXR1c0hhbmRsZXJzID0gW107XG52YXIgY3VycmVudFN0YXR1cyA9IFwiaWRsZVwiO1xuXG4vLyB3aGlsZSBkb3dubG9hZGluZ1xudmFyIGJsb2NraW5nUHJvbWlzZXM7XG5cbi8vIFRoZSB1cGRhdGUgaW5mb1xudmFyIGN1cnJlbnRVcGRhdGVBcHBseUhhbmRsZXJzO1xudmFyIHF1ZXVlZEludmFsaWRhdGVkTW9kdWxlcztcblxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVudXNlZC12YXJzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmhtckQgPSBjdXJyZW50TW9kdWxlRGF0YTtcblxuX193ZWJwYWNrX3JlcXVpcmVfXy5pLnB1c2goZnVuY3Rpb24gKG9wdGlvbnMpIHtcblx0dmFyIG1vZHVsZSA9IG9wdGlvbnMubW9kdWxlO1xuXHR2YXIgcmVxdWlyZSA9IGNyZWF0ZVJlcXVpcmUob3B0aW9ucy5yZXF1aXJlLCBvcHRpb25zLmlkKTtcblx0bW9kdWxlLmhvdCA9IGNyZWF0ZU1vZHVsZUhvdE9iamVjdChvcHRpb25zLmlkLCBtb2R1bGUpO1xuXHRtb2R1bGUucGFyZW50cyA9IGN1cnJlbnRQYXJlbnRzO1xuXHRtb2R1bGUuY2hpbGRyZW4gPSBbXTtcblx0Y3VycmVudFBhcmVudHMgPSBbXTtcblx0b3B0aW9ucy5yZXF1aXJlID0gcmVxdWlyZTtcbn0pO1xuXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmhtckMgPSB7fTtcbl9fd2VicGFja19yZXF1aXJlX18uaG1ySSA9IHt9O1xuXG5mdW5jdGlvbiBjcmVhdGVSZXF1aXJlKHJlcXVpcmUsIG1vZHVsZUlkKSB7XG5cdHZhciBtZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuXHRpZiAoIW1lKSByZXR1cm4gcmVxdWlyZTtcblx0dmFyIGZuID0gZnVuY3Rpb24gKHJlcXVlc3QpIHtcblx0XHRpZiAobWUuaG90LmFjdGl2ZSkge1xuXHRcdFx0aWYgKGluc3RhbGxlZE1vZHVsZXNbcmVxdWVzdF0pIHtcblx0XHRcdFx0dmFyIHBhcmVudHMgPSBpbnN0YWxsZWRNb2R1bGVzW3JlcXVlc3RdLnBhcmVudHM7XG5cdFx0XHRcdGlmIChwYXJlbnRzLmluZGV4T2YobW9kdWxlSWQpID09PSAtMSkge1xuXHRcdFx0XHRcdHBhcmVudHMucHVzaChtb2R1bGVJZCk7XG5cdFx0XHRcdH1cblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGN1cnJlbnRQYXJlbnRzID0gW21vZHVsZUlkXTtcblx0XHRcdFx0Y3VycmVudENoaWxkTW9kdWxlID0gcmVxdWVzdDtcblx0XHRcdH1cblx0XHRcdGlmIChtZS5jaGlsZHJlbi5pbmRleE9mKHJlcXVlc3QpID09PSAtMSkge1xuXHRcdFx0XHRtZS5jaGlsZHJlbi5wdXNoKHJlcXVlc3QpO1xuXHRcdFx0fVxuXHRcdH0gZWxzZSB7XG5cdFx0XHRjb25zb2xlLndhcm4oXG5cdFx0XHRcdFwiW0hNUl0gdW5leHBlY3RlZCByZXF1aXJlKFwiICtcblx0XHRcdFx0XHRyZXF1ZXN0ICtcblx0XHRcdFx0XHRcIikgZnJvbSBkaXNwb3NlZCBtb2R1bGUgXCIgK1xuXHRcdFx0XHRcdG1vZHVsZUlkXG5cdFx0XHQpO1xuXHRcdFx0Y3VycmVudFBhcmVudHMgPSBbXTtcblx0XHR9XG5cdFx0cmV0dXJuIHJlcXVpcmUocmVxdWVzdCk7XG5cdH07XG5cdHZhciBjcmVhdGVQcm9wZXJ0eURlc2NyaXB0b3IgPSBmdW5jdGlvbiAobmFtZSkge1xuXHRcdHJldHVybiB7XG5cdFx0XHRjb25maWd1cmFibGU6IHRydWUsXG5cdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuXHRcdFx0Z2V0OiBmdW5jdGlvbiAoKSB7XG5cdFx0XHRcdHJldHVybiByZXF1aXJlW25hbWVdO1xuXHRcdFx0fSxcblx0XHRcdHNldDogZnVuY3Rpb24gKHZhbHVlKSB7XG5cdFx0XHRcdHJlcXVpcmVbbmFtZV0gPSB2YWx1ZTtcblx0XHRcdH1cblx0XHR9O1xuXHR9O1xuXHRmb3IgKHZhciBuYW1lIGluIHJlcXVpcmUpIHtcblx0XHRpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHJlcXVpcmUsIG5hbWUpICYmIG5hbWUgIT09IFwiZVwiKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZm4sIG5hbWUsIGNyZWF0ZVByb3BlcnR5RGVzY3JpcHRvcihuYW1lKSk7XG5cdFx0fVxuXHR9XG5cdGZuLmUgPSBmdW5jdGlvbiAoY2h1bmtJZCkge1xuXHRcdHJldHVybiB0cmFja0Jsb2NraW5nUHJvbWlzZShyZXF1aXJlLmUoY2h1bmtJZCkpO1xuXHR9O1xuXHRyZXR1cm4gZm47XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZU1vZHVsZUhvdE9iamVjdChtb2R1bGVJZCwgbWUpIHtcblx0dmFyIF9tYWluID0gY3VycmVudENoaWxkTW9kdWxlICE9PSBtb2R1bGVJZDtcblx0dmFyIGhvdCA9IHtcblx0XHQvLyBwcml2YXRlIHN0dWZmXG5cdFx0X2FjY2VwdGVkRGVwZW5kZW5jaWVzOiB7fSxcblx0XHRfYWNjZXB0ZWRFcnJvckhhbmRsZXJzOiB7fSxcblx0XHRfZGVjbGluZWREZXBlbmRlbmNpZXM6IHt9LFxuXHRcdF9zZWxmQWNjZXB0ZWQ6IGZhbHNlLFxuXHRcdF9zZWxmRGVjbGluZWQ6IGZhbHNlLFxuXHRcdF9zZWxmSW52YWxpZGF0ZWQ6IGZhbHNlLFxuXHRcdF9kaXNwb3NlSGFuZGxlcnM6IFtdLFxuXHRcdF9tYWluOiBfbWFpbixcblx0XHRfcmVxdWlyZVNlbGY6IGZ1bmN0aW9uICgpIHtcblx0XHRcdGN1cnJlbnRQYXJlbnRzID0gbWUucGFyZW50cy5zbGljZSgpO1xuXHRcdFx0Y3VycmVudENoaWxkTW9kdWxlID0gX21haW4gPyB1bmRlZmluZWQgOiBtb2R1bGVJZDtcblx0XHRcdF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpO1xuXHRcdH0sXG5cblx0XHQvLyBNb2R1bGUgQVBJXG5cdFx0YWN0aXZlOiB0cnVlLFxuXHRcdGFjY2VwdDogZnVuY3Rpb24gKGRlcCwgY2FsbGJhY2ssIGVycm9ySGFuZGxlcikge1xuXHRcdFx0aWYgKGRlcCA9PT0gdW5kZWZpbmVkKSBob3QuX3NlbGZBY2NlcHRlZCA9IHRydWU7XG5cdFx0XHRlbHNlIGlmICh0eXBlb2YgZGVwID09PSBcImZ1bmN0aW9uXCIpIGhvdC5fc2VsZkFjY2VwdGVkID0gZGVwO1xuXHRcdFx0ZWxzZSBpZiAodHlwZW9mIGRlcCA9PT0gXCJvYmplY3RcIiAmJiBkZXAgIT09IG51bGwpIHtcblx0XHRcdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBkZXAubGVuZ3RoOyBpKyspIHtcblx0XHRcdFx0XHRob3QuX2FjY2VwdGVkRGVwZW5kZW5jaWVzW2RlcFtpXV0gPSBjYWxsYmFjayB8fCBmdW5jdGlvbiAoKSB7fTtcblx0XHRcdFx0XHRob3QuX2FjY2VwdGVkRXJyb3JIYW5kbGVyc1tkZXBbaV1dID0gZXJyb3JIYW5kbGVyO1xuXHRcdFx0XHR9XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRob3QuX2FjY2VwdGVkRGVwZW5kZW5jaWVzW2RlcF0gPSBjYWxsYmFjayB8fCBmdW5jdGlvbiAoKSB7fTtcblx0XHRcdFx0aG90Ll9hY2NlcHRlZEVycm9ySGFuZGxlcnNbZGVwXSA9IGVycm9ySGFuZGxlcjtcblx0XHRcdH1cblx0XHR9LFxuXHRcdGRlY2xpbmU6IGZ1bmN0aW9uIChkZXApIHtcblx0XHRcdGlmIChkZXAgPT09IHVuZGVmaW5lZCkgaG90Ll9zZWxmRGVjbGluZWQgPSB0cnVlO1xuXHRcdFx0ZWxzZSBpZiAodHlwZW9mIGRlcCA9PT0gXCJvYmplY3RcIiAmJiBkZXAgIT09IG51bGwpXG5cdFx0XHRcdGZvciAodmFyIGkgPSAwOyBpIDwgZGVwLmxlbmd0aDsgaSsrKVxuXHRcdFx0XHRcdGhvdC5fZGVjbGluZWREZXBlbmRlbmNpZXNbZGVwW2ldXSA9IHRydWU7XG5cdFx0XHRlbHNlIGhvdC5fZGVjbGluZWREZXBlbmRlbmNpZXNbZGVwXSA9IHRydWU7XG5cdFx0fSxcblx0XHRkaXNwb3NlOiBmdW5jdGlvbiAoY2FsbGJhY2spIHtcblx0XHRcdGhvdC5fZGlzcG9zZUhhbmRsZXJzLnB1c2goY2FsbGJhY2spO1xuXHRcdH0sXG5cdFx0YWRkRGlzcG9zZUhhbmRsZXI6IGZ1bmN0aW9uIChjYWxsYmFjaykge1xuXHRcdFx0aG90Ll9kaXNwb3NlSGFuZGxlcnMucHVzaChjYWxsYmFjayk7XG5cdFx0fSxcblx0XHRyZW1vdmVEaXNwb3NlSGFuZGxlcjogZnVuY3Rpb24gKGNhbGxiYWNrKSB7XG5cdFx0XHR2YXIgaWR4ID0gaG90Ll9kaXNwb3NlSGFuZGxlcnMuaW5kZXhPZihjYWxsYmFjayk7XG5cdFx0XHRpZiAoaWR4ID49IDApIGhvdC5fZGlzcG9zZUhhbmRsZXJzLnNwbGljZShpZHgsIDEpO1xuXHRcdH0sXG5cdFx0aW52YWxpZGF0ZTogZnVuY3Rpb24gKCkge1xuXHRcdFx0dGhpcy5fc2VsZkludmFsaWRhdGVkID0gdHJ1ZTtcblx0XHRcdHN3aXRjaCAoY3VycmVudFN0YXR1cykge1xuXHRcdFx0XHRjYXNlIFwiaWRsZVwiOlxuXHRcdFx0XHRcdGN1cnJlbnRVcGRhdGVBcHBseUhhbmRsZXJzID0gW107XG5cdFx0XHRcdFx0T2JqZWN0LmtleXMoX193ZWJwYWNrX3JlcXVpcmVfXy5obXJJKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcblx0XHRcdFx0XHRcdF9fd2VicGFja19yZXF1aXJlX18uaG1ySVtrZXldKFxuXHRcdFx0XHRcdFx0XHRtb2R1bGVJZCxcblx0XHRcdFx0XHRcdFx0Y3VycmVudFVwZGF0ZUFwcGx5SGFuZGxlcnNcblx0XHRcdFx0XHRcdCk7XG5cdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0c2V0U3RhdHVzKFwicmVhZHlcIik7XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdGNhc2UgXCJyZWFkeVwiOlxuXHRcdFx0XHRcdE9iamVjdC5rZXlzKF9fd2VicGFja19yZXF1aXJlX18uaG1ySSkuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG5cdFx0XHRcdFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmhtcklba2V5XShcblx0XHRcdFx0XHRcdFx0bW9kdWxlSWQsXG5cdFx0XHRcdFx0XHRcdGN1cnJlbnRVcGRhdGVBcHBseUhhbmRsZXJzXG5cdFx0XHRcdFx0XHQpO1xuXHRcdFx0XHRcdH0pO1xuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRjYXNlIFwicHJlcGFyZVwiOlxuXHRcdFx0XHRjYXNlIFwiY2hlY2tcIjpcblx0XHRcdFx0Y2FzZSBcImRpc3Bvc2VcIjpcblx0XHRcdFx0Y2FzZSBcImFwcGx5XCI6XG5cdFx0XHRcdFx0KHF1ZXVlZEludmFsaWRhdGVkTW9kdWxlcyA9IHF1ZXVlZEludmFsaWRhdGVkTW9kdWxlcyB8fCBbXSkucHVzaChcblx0XHRcdFx0XHRcdG1vZHVsZUlkXG5cdFx0XHRcdFx0KTtcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0ZGVmYXVsdDpcblx0XHRcdFx0XHQvLyBpZ25vcmUgcmVxdWVzdHMgaW4gZXJyb3Igc3RhdGVzXG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHR9XG5cdFx0fSxcblxuXHRcdC8vIE1hbmFnZW1lbnQgQVBJXG5cdFx0Y2hlY2s6IGhvdENoZWNrLFxuXHRcdGFwcGx5OiBob3RBcHBseSxcblx0XHRzdGF0dXM6IGZ1bmN0aW9uIChsKSB7XG5cdFx0XHRpZiAoIWwpIHJldHVybiBjdXJyZW50U3RhdHVzO1xuXHRcdFx0cmVnaXN0ZXJlZFN0YXR1c0hhbmRsZXJzLnB1c2gobCk7XG5cdFx0fSxcblx0XHRhZGRTdGF0dXNIYW5kbGVyOiBmdW5jdGlvbiAobCkge1xuXHRcdFx0cmVnaXN0ZXJlZFN0YXR1c0hhbmRsZXJzLnB1c2gobCk7XG5cdFx0fSxcblx0XHRyZW1vdmVTdGF0dXNIYW5kbGVyOiBmdW5jdGlvbiAobCkge1xuXHRcdFx0dmFyIGlkeCA9IHJlZ2lzdGVyZWRTdGF0dXNIYW5kbGVycy5pbmRleE9mKGwpO1xuXHRcdFx0aWYgKGlkeCA+PSAwKSByZWdpc3RlcmVkU3RhdHVzSGFuZGxlcnMuc3BsaWNlKGlkeCwgMSk7XG5cdFx0fSxcblxuXHRcdC8vaW5oZXJpdCBmcm9tIHByZXZpb3VzIGRpc3Bvc2UgY2FsbFxuXHRcdGRhdGE6IGN1cnJlbnRNb2R1bGVEYXRhW21vZHVsZUlkXVxuXHR9O1xuXHRjdXJyZW50Q2hpbGRNb2R1bGUgPSB1bmRlZmluZWQ7XG5cdHJldHVybiBob3Q7XG59XG5cbmZ1bmN0aW9uIHNldFN0YXR1cyhuZXdTdGF0dXMpIHtcblx0Y3VycmVudFN0YXR1cyA9IG5ld1N0YXR1cztcblx0dmFyIHJlc3VsdHMgPSBbXTtcblxuXHRmb3IgKHZhciBpID0gMDsgaSA8IHJlZ2lzdGVyZWRTdGF0dXNIYW5kbGVycy5sZW5ndGg7IGkrKylcblx0XHRyZXN1bHRzW2ldID0gcmVnaXN0ZXJlZFN0YXR1c0hhbmRsZXJzW2ldLmNhbGwobnVsbCwgbmV3U3RhdHVzKTtcblxuXHRyZXR1cm4gUHJvbWlzZS5hbGwocmVzdWx0cyk7XG59XG5cbmZ1bmN0aW9uIHRyYWNrQmxvY2tpbmdQcm9taXNlKHByb21pc2UpIHtcblx0c3dpdGNoIChjdXJyZW50U3RhdHVzKSB7XG5cdFx0Y2FzZSBcInJlYWR5XCI6XG5cdFx0XHRzZXRTdGF0dXMoXCJwcmVwYXJlXCIpO1xuXHRcdFx0YmxvY2tpbmdQcm9taXNlcy5wdXNoKHByb21pc2UpO1xuXHRcdFx0d2FpdEZvckJsb2NraW5nUHJvbWlzZXMoZnVuY3Rpb24gKCkge1xuXHRcdFx0XHRyZXR1cm4gc2V0U3RhdHVzKFwicmVhZHlcIik7XG5cdFx0XHR9KTtcblx0XHRcdHJldHVybiBwcm9taXNlO1xuXHRcdGNhc2UgXCJwcmVwYXJlXCI6XG5cdFx0XHRibG9ja2luZ1Byb21pc2VzLnB1c2gocHJvbWlzZSk7XG5cdFx0XHRyZXR1cm4gcHJvbWlzZTtcblx0XHRkZWZhdWx0OlxuXHRcdFx0cmV0dXJuIHByb21pc2U7XG5cdH1cbn1cblxuZnVuY3Rpb24gd2FpdEZvckJsb2NraW5nUHJvbWlzZXMoZm4pIHtcblx0aWYgKGJsb2NraW5nUHJvbWlzZXMubGVuZ3RoID09PSAwKSByZXR1cm4gZm4oKTtcblx0dmFyIGJsb2NrZXIgPSBibG9ja2luZ1Byb21pc2VzO1xuXHRibG9ja2luZ1Byb21pc2VzID0gW107XG5cdHJldHVybiBQcm9taXNlLmFsbChibG9ja2VyKS50aGVuKGZ1bmN0aW9uICgpIHtcblx0XHRyZXR1cm4gd2FpdEZvckJsb2NraW5nUHJvbWlzZXMoZm4pO1xuXHR9KTtcbn1cblxuZnVuY3Rpb24gaG90Q2hlY2soYXBwbHlPblVwZGF0ZSkge1xuXHRpZiAoY3VycmVudFN0YXR1cyAhPT0gXCJpZGxlXCIpIHtcblx0XHR0aHJvdyBuZXcgRXJyb3IoXCJjaGVjaygpIGlzIG9ubHkgYWxsb3dlZCBpbiBpZGxlIHN0YXR1c1wiKTtcblx0fVxuXHRyZXR1cm4gc2V0U3RhdHVzKFwiY2hlY2tcIilcblx0XHQudGhlbihfX3dlYnBhY2tfcmVxdWlyZV9fLmhtck0pXG5cdFx0LnRoZW4oZnVuY3Rpb24gKHVwZGF0ZSkge1xuXHRcdFx0aWYgKCF1cGRhdGUpIHtcblx0XHRcdFx0cmV0dXJuIHNldFN0YXR1cyhhcHBseUludmFsaWRhdGVkTW9kdWxlcygpID8gXCJyZWFkeVwiIDogXCJpZGxlXCIpLnRoZW4oXG5cdFx0XHRcdFx0ZnVuY3Rpb24gKCkge1xuXHRcdFx0XHRcdFx0cmV0dXJuIG51bGw7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHQpO1xuXHRcdFx0fVxuXG5cdFx0XHRyZXR1cm4gc2V0U3RhdHVzKFwicHJlcGFyZVwiKS50aGVuKGZ1bmN0aW9uICgpIHtcblx0XHRcdFx0dmFyIHVwZGF0ZWRNb2R1bGVzID0gW107XG5cdFx0XHRcdGJsb2NraW5nUHJvbWlzZXMgPSBbXTtcblx0XHRcdFx0Y3VycmVudFVwZGF0ZUFwcGx5SGFuZGxlcnMgPSBbXTtcblxuXHRcdFx0XHRyZXR1cm4gUHJvbWlzZS5hbGwoXG5cdFx0XHRcdFx0T2JqZWN0LmtleXMoX193ZWJwYWNrX3JlcXVpcmVfXy5obXJDKS5yZWR1Y2UoZnVuY3Rpb24gKFxuXHRcdFx0XHRcdFx0cHJvbWlzZXMsXG5cdFx0XHRcdFx0XHRrZXlcblx0XHRcdFx0XHQpIHtcblx0XHRcdFx0XHRcdF9fd2VicGFja19yZXF1aXJlX18uaG1yQ1trZXldKFxuXHRcdFx0XHRcdFx0XHR1cGRhdGUuYyxcblx0XHRcdFx0XHRcdFx0dXBkYXRlLnIsXG5cdFx0XHRcdFx0XHRcdHVwZGF0ZS5tLFxuXHRcdFx0XHRcdFx0XHRwcm9taXNlcyxcblx0XHRcdFx0XHRcdFx0Y3VycmVudFVwZGF0ZUFwcGx5SGFuZGxlcnMsXG5cdFx0XHRcdFx0XHRcdHVwZGF0ZWRNb2R1bGVzXG5cdFx0XHRcdFx0XHQpO1xuXHRcdFx0XHRcdFx0cmV0dXJuIHByb21pc2VzO1xuXHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0W10pXG5cdFx0XHRcdCkudGhlbihmdW5jdGlvbiAoKSB7XG5cdFx0XHRcdFx0cmV0dXJuIHdhaXRGb3JCbG9ja2luZ1Byb21pc2VzKGZ1bmN0aW9uICgpIHtcblx0XHRcdFx0XHRcdGlmIChhcHBseU9uVXBkYXRlKSB7XG5cdFx0XHRcdFx0XHRcdHJldHVybiBpbnRlcm5hbEFwcGx5KGFwcGx5T25VcGRhdGUpO1xuXHRcdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdFx0cmV0dXJuIHNldFN0YXR1cyhcInJlYWR5XCIpLnRoZW4oZnVuY3Rpb24gKCkge1xuXHRcdFx0XHRcdFx0XHRcdHJldHVybiB1cGRhdGVkTW9kdWxlcztcblx0XHRcdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fSk7XG5cdFx0XHRcdH0pO1xuXHRcdFx0fSk7XG5cdFx0fSk7XG59XG5cbmZ1bmN0aW9uIGhvdEFwcGx5KG9wdGlvbnMpIHtcblx0aWYgKGN1cnJlbnRTdGF0dXMgIT09IFwicmVhZHlcIikge1xuXHRcdHJldHVybiBQcm9taXNlLnJlc29sdmUoKS50aGVuKGZ1bmN0aW9uICgpIHtcblx0XHRcdHRocm93IG5ldyBFcnJvcihcImFwcGx5KCkgaXMgb25seSBhbGxvd2VkIGluIHJlYWR5IHN0YXR1c1wiKTtcblx0XHR9KTtcblx0fVxuXHRyZXR1cm4gaW50ZXJuYWxBcHBseShvcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gaW50ZXJuYWxBcHBseShvcHRpb25zKSB7XG5cdG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuXG5cdGFwcGx5SW52YWxpZGF0ZWRNb2R1bGVzKCk7XG5cblx0dmFyIHJlc3VsdHMgPSBjdXJyZW50VXBkYXRlQXBwbHlIYW5kbGVycy5tYXAoZnVuY3Rpb24gKGhhbmRsZXIpIHtcblx0XHRyZXR1cm4gaGFuZGxlcihvcHRpb25zKTtcblx0fSk7XG5cdGN1cnJlbnRVcGRhdGVBcHBseUhhbmRsZXJzID0gdW5kZWZpbmVkO1xuXG5cdHZhciBlcnJvcnMgPSByZXN1bHRzXG5cdFx0Lm1hcChmdW5jdGlvbiAocikge1xuXHRcdFx0cmV0dXJuIHIuZXJyb3I7XG5cdFx0fSlcblx0XHQuZmlsdGVyKEJvb2xlYW4pO1xuXG5cdGlmIChlcnJvcnMubGVuZ3RoID4gMCkge1xuXHRcdHJldHVybiBzZXRTdGF0dXMoXCJhYm9ydFwiKS50aGVuKGZ1bmN0aW9uICgpIHtcblx0XHRcdHRocm93IGVycm9yc1swXTtcblx0XHR9KTtcblx0fVxuXG5cdC8vIE5vdyBpbiBcImRpc3Bvc2VcIiBwaGFzZVxuXHR2YXIgZGlzcG9zZVByb21pc2UgPSBzZXRTdGF0dXMoXCJkaXNwb3NlXCIpO1xuXG5cdHJlc3VsdHMuZm9yRWFjaChmdW5jdGlvbiAocmVzdWx0KSB7XG5cdFx0aWYgKHJlc3VsdC5kaXNwb3NlKSByZXN1bHQuZGlzcG9zZSgpO1xuXHR9KTtcblxuXHQvLyBOb3cgaW4gXCJhcHBseVwiIHBoYXNlXG5cdHZhciBhcHBseVByb21pc2UgPSBzZXRTdGF0dXMoXCJhcHBseVwiKTtcblxuXHR2YXIgZXJyb3I7XG5cdHZhciByZXBvcnRFcnJvciA9IGZ1bmN0aW9uIChlcnIpIHtcblx0XHRpZiAoIWVycm9yKSBlcnJvciA9IGVycjtcblx0fTtcblxuXHR2YXIgb3V0ZGF0ZWRNb2R1bGVzID0gW107XG5cdHJlc3VsdHMuZm9yRWFjaChmdW5jdGlvbiAocmVzdWx0KSB7XG5cdFx0aWYgKHJlc3VsdC5hcHBseSkge1xuXHRcdFx0dmFyIG1vZHVsZXMgPSByZXN1bHQuYXBwbHkocmVwb3J0RXJyb3IpO1xuXHRcdFx0aWYgKG1vZHVsZXMpIHtcblx0XHRcdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBtb2R1bGVzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRcdFx0b3V0ZGF0ZWRNb2R1bGVzLnB1c2gobW9kdWxlc1tpXSk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdH0pO1xuXG5cdHJldHVybiBQcm9taXNlLmFsbChbZGlzcG9zZVByb21pc2UsIGFwcGx5UHJvbWlzZV0pLnRoZW4oZnVuY3Rpb24gKCkge1xuXHRcdC8vIGhhbmRsZSBlcnJvcnMgaW4gYWNjZXB0IGhhbmRsZXJzIGFuZCBzZWxmIGFjY2VwdGVkIG1vZHVsZSBsb2FkXG5cdFx0aWYgKGVycm9yKSB7XG5cdFx0XHRyZXR1cm4gc2V0U3RhdHVzKFwiZmFpbFwiKS50aGVuKGZ1bmN0aW9uICgpIHtcblx0XHRcdFx0dGhyb3cgZXJyb3I7XG5cdFx0XHR9KTtcblx0XHR9XG5cblx0XHRpZiAocXVldWVkSW52YWxpZGF0ZWRNb2R1bGVzKSB7XG5cdFx0XHRyZXR1cm4gaW50ZXJuYWxBcHBseShvcHRpb25zKS50aGVuKGZ1bmN0aW9uIChsaXN0KSB7XG5cdFx0XHRcdG91dGRhdGVkTW9kdWxlcy5mb3JFYWNoKGZ1bmN0aW9uIChtb2R1bGVJZCkge1xuXHRcdFx0XHRcdGlmIChsaXN0LmluZGV4T2YobW9kdWxlSWQpIDwgMCkgbGlzdC5wdXNoKG1vZHVsZUlkKTtcblx0XHRcdFx0fSk7XG5cdFx0XHRcdHJldHVybiBsaXN0O1xuXHRcdFx0fSk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHNldFN0YXR1cyhcImlkbGVcIikudGhlbihmdW5jdGlvbiAoKSB7XG5cdFx0XHRyZXR1cm4gb3V0ZGF0ZWRNb2R1bGVzO1xuXHRcdH0pO1xuXHR9KTtcbn1cblxuZnVuY3Rpb24gYXBwbHlJbnZhbGlkYXRlZE1vZHVsZXMoKSB7XG5cdGlmIChxdWV1ZWRJbnZhbGlkYXRlZE1vZHVsZXMpIHtcblx0XHRpZiAoIWN1cnJlbnRVcGRhdGVBcHBseUhhbmRsZXJzKSBjdXJyZW50VXBkYXRlQXBwbHlIYW5kbGVycyA9IFtdO1xuXHRcdE9iamVjdC5rZXlzKF9fd2VicGFja19yZXF1aXJlX18uaG1ySSkuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG5cdFx0XHRxdWV1ZWRJbnZhbGlkYXRlZE1vZHVsZXMuZm9yRWFjaChmdW5jdGlvbiAobW9kdWxlSWQpIHtcblx0XHRcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5obXJJW2tleV0oXG5cdFx0XHRcdFx0bW9kdWxlSWQsXG5cdFx0XHRcdFx0Y3VycmVudFVwZGF0ZUFwcGx5SGFuZGxlcnNcblx0XHRcdFx0KTtcblx0XHRcdH0pO1xuXHRcdH0pO1xuXHRcdHF1ZXVlZEludmFsaWRhdGVkTW9kdWxlcyA9IHVuZGVmaW5lZDtcblx0XHRyZXR1cm4gdHJ1ZTtcblx0fVxufSIsIl9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiL2NvdXJzZS1qcy9cIjsiLCJ2YXIgY3JlYXRlU3R5bGVzaGVldCA9IChjaHVua0lkLCBmdWxsaHJlZiwgcmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG5cdHZhciBsaW5rVGFnID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpbmtcIik7XG5cblx0bGlua1RhZy5yZWwgPSBcInN0eWxlc2hlZXRcIjtcblx0bGlua1RhZy50eXBlID0gXCJ0ZXh0L2Nzc1wiO1xuXHR2YXIgb25MaW5rQ29tcGxldGUgPSAoZXZlbnQpID0+IHtcblx0XHQvLyBhdm9pZCBtZW0gbGVha3MuXG5cdFx0bGlua1RhZy5vbmVycm9yID0gbGlua1RhZy5vbmxvYWQgPSBudWxsO1xuXHRcdGlmIChldmVudC50eXBlID09PSAnbG9hZCcpIHtcblx0XHRcdHJlc29sdmUoKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0dmFyIGVycm9yVHlwZSA9IGV2ZW50ICYmIChldmVudC50eXBlID09PSAnbG9hZCcgPyAnbWlzc2luZycgOiBldmVudC50eXBlKTtcblx0XHRcdHZhciByZWFsSHJlZiA9IGV2ZW50ICYmIGV2ZW50LnRhcmdldCAmJiBldmVudC50YXJnZXQuaHJlZiB8fCBmdWxsaHJlZjtcblx0XHRcdHZhciBlcnIgPSBuZXcgRXJyb3IoXCJMb2FkaW5nIENTUyBjaHVuayBcIiArIGNodW5rSWQgKyBcIiBmYWlsZWQuXFxuKFwiICsgcmVhbEhyZWYgKyBcIilcIik7XG5cdFx0XHRlcnIuY29kZSA9IFwiQ1NTX0NIVU5LX0xPQURfRkFJTEVEXCI7XG5cdFx0XHRlcnIudHlwZSA9IGVycm9yVHlwZTtcblx0XHRcdGVyci5yZXF1ZXN0ID0gcmVhbEhyZWY7XG5cdFx0XHRsaW5rVGFnLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQobGlua1RhZylcblx0XHRcdHJlamVjdChlcnIpO1xuXHRcdH1cblx0fVxuXHRsaW5rVGFnLm9uZXJyb3IgPSBsaW5rVGFnLm9ubG9hZCA9IG9uTGlua0NvbXBsZXRlO1xuXHRsaW5rVGFnLmhyZWYgPSBmdWxsaHJlZjtcblxuXHRkb2N1bWVudC5oZWFkLmFwcGVuZENoaWxkKGxpbmtUYWcpO1xuXHRyZXR1cm4gbGlua1RhZztcbn07XG52YXIgZmluZFN0eWxlc2hlZXQgPSAoaHJlZiwgZnVsbGhyZWYpID0+IHtcblx0dmFyIGV4aXN0aW5nTGlua1RhZ3MgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcImxpbmtcIik7XG5cdGZvcih2YXIgaSA9IDA7IGkgPCBleGlzdGluZ0xpbmtUYWdzLmxlbmd0aDsgaSsrKSB7XG5cdFx0dmFyIHRhZyA9IGV4aXN0aW5nTGlua1RhZ3NbaV07XG5cdFx0dmFyIGRhdGFIcmVmID0gdGFnLmdldEF0dHJpYnV0ZShcImRhdGEtaHJlZlwiKSB8fCB0YWcuZ2V0QXR0cmlidXRlKFwiaHJlZlwiKTtcblx0XHRpZih0YWcucmVsID09PSBcInN0eWxlc2hlZXRcIiAmJiAoZGF0YUhyZWYgPT09IGhyZWYgfHwgZGF0YUhyZWYgPT09IGZ1bGxocmVmKSkgcmV0dXJuIHRhZztcblx0fVxuXHR2YXIgZXhpc3RpbmdTdHlsZVRhZ3MgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInN0eWxlXCIpO1xuXHRmb3IodmFyIGkgPSAwOyBpIDwgZXhpc3RpbmdTdHlsZVRhZ3MubGVuZ3RoOyBpKyspIHtcblx0XHR2YXIgdGFnID0gZXhpc3RpbmdTdHlsZVRhZ3NbaV07XG5cdFx0dmFyIGRhdGFIcmVmID0gdGFnLmdldEF0dHJpYnV0ZShcImRhdGEtaHJlZlwiKTtcblx0XHRpZihkYXRhSHJlZiA9PT0gaHJlZiB8fCBkYXRhSHJlZiA9PT0gZnVsbGhyZWYpIHJldHVybiB0YWc7XG5cdH1cbn07XG52YXIgbG9hZFN0eWxlc2hlZXQgPSAoY2h1bmtJZCkgPT4ge1xuXHRyZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuXHRcdHZhciBocmVmID0gX193ZWJwYWNrX3JlcXVpcmVfXy5taW5pQ3NzRihjaHVua0lkKTtcblx0XHR2YXIgZnVsbGhyZWYgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLnAgKyBocmVmO1xuXHRcdGlmKGZpbmRTdHlsZXNoZWV0KGhyZWYsIGZ1bGxocmVmKSkgcmV0dXJuIHJlc29sdmUoKTtcblx0XHRjcmVhdGVTdHlsZXNoZWV0KGNodW5rSWQsIGZ1bGxocmVmLCByZXNvbHZlLCByZWplY3QpO1xuXHR9KTtcbn1cbi8vIG5vIGNodW5rIGxvYWRpbmdcblxudmFyIG9sZFRhZ3MgPSBbXTtcbnZhciBuZXdUYWdzID0gW107XG52YXIgYXBwbHlIYW5kbGVyID0gKG9wdGlvbnMpID0+IHtcblx0cmV0dXJuIHsgZGlzcG9zZTogKCkgPT4ge1xuXHRcdGZvcih2YXIgaSA9IDA7IGkgPCBvbGRUYWdzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHR2YXIgb2xkVGFnID0gb2xkVGFnc1tpXTtcblx0XHRcdGlmKG9sZFRhZy5wYXJlbnROb2RlKSBvbGRUYWcucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChvbGRUYWcpO1xuXHRcdH1cblx0XHRvbGRUYWdzLmxlbmd0aCA9IDA7XG5cdH0sIGFwcGx5OiAoKSA9PiB7XG5cdFx0Zm9yKHZhciBpID0gMDsgaSA8IG5ld1RhZ3MubGVuZ3RoOyBpKyspIG5ld1RhZ3NbaV0ucmVsID0gXCJzdHlsZXNoZWV0XCI7XG5cdFx0bmV3VGFncy5sZW5ndGggPSAwO1xuXHR9IH07XG59XG5fX3dlYnBhY2tfcmVxdWlyZV9fLmhtckMubWluaUNzcyA9IChjaHVua0lkcywgcmVtb3ZlZENodW5rcywgcmVtb3ZlZE1vZHVsZXMsIHByb21pc2VzLCBhcHBseUhhbmRsZXJzLCB1cGRhdGVkTW9kdWxlc0xpc3QpID0+IHtcblx0YXBwbHlIYW5kbGVycy5wdXNoKGFwcGx5SGFuZGxlcik7XG5cdGNodW5rSWRzLmZvckVhY2goKGNodW5rSWQpID0+IHtcblx0XHR2YXIgaHJlZiA9IF9fd2VicGFja19yZXF1aXJlX18ubWluaUNzc0YoY2h1bmtJZCk7XG5cdFx0dmFyIGZ1bGxocmVmID0gX193ZWJwYWNrX3JlcXVpcmVfXy5wICsgaHJlZjtcblx0XHR2YXIgb2xkVGFnID0gZmluZFN0eWxlc2hlZXQoaHJlZiwgZnVsbGhyZWYpO1xuXHRcdGlmKCFvbGRUYWcpIHJldHVybjtcblx0XHRwcm9taXNlcy5wdXNoKG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcblx0XHRcdHZhciB0YWcgPSBjcmVhdGVTdHlsZXNoZWV0KGNodW5rSWQsIGZ1bGxocmVmLCAoKSA9PiB7XG5cdFx0XHRcdHRhZy5hcyA9IFwic3R5bGVcIjtcblx0XHRcdFx0dGFnLnJlbCA9IFwicHJlbG9hZFwiO1xuXHRcdFx0XHRyZXNvbHZlKCk7XG5cdFx0XHR9LCByZWplY3QpO1xuXHRcdFx0b2xkVGFncy5wdXNoKG9sZFRhZyk7XG5cdFx0XHRuZXdUYWdzLnB1c2godGFnKTtcblx0XHR9KSk7XG5cdH0pO1xufSIsIl9fd2VicGFja19yZXF1aXJlX18uYiA9IGRvY3VtZW50LmJhc2VVUkkgfHwgc2VsZi5sb2NhdGlvbi5ocmVmO1xuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmhtclNfanNvbnAgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmhtclNfanNvbnAgfHwge1xuXHRcIm1haW5cIjogMFxufTtcblxuX193ZWJwYWNrX3JlcXVpcmVfXy5mLmogPSAoY2h1bmtJZCwgcHJvbWlzZXMpID0+IHtcblx0XHQvLyBKU09OUCBjaHVuayBsb2FkaW5nIGZvciBqYXZhc2NyaXB0XG5cdFx0dmFyIGluc3RhbGxlZENodW5rRGF0YSA9IF9fd2VicGFja19yZXF1aXJlX18ubyhpbnN0YWxsZWRDaHVua3MsIGNodW5rSWQpID8gaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdIDogdW5kZWZpbmVkO1xuXHRcdGlmKGluc3RhbGxlZENodW5rRGF0YSAhPT0gMCkgeyAvLyAwIG1lYW5zIFwiYWxyZWFkeSBpbnN0YWxsZWRcIi5cblxuXHRcdFx0Ly8gYSBQcm9taXNlIG1lYW5zIFwiY3VycmVudGx5IGxvYWRpbmdcIi5cblx0XHRcdGlmKGluc3RhbGxlZENodW5rRGF0YSkge1xuXHRcdFx0XHRwcm9taXNlcy5wdXNoKGluc3RhbGxlZENodW5rRGF0YVsyXSk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRpZih0cnVlKSB7IC8vIGFsbCBjaHVua3MgaGF2ZSBKU1xuXHRcdFx0XHRcdC8vIHNldHVwIFByb21pc2UgaW4gY2h1bmsgY2FjaGVcblx0XHRcdFx0XHR2YXIgcHJvbWlzZSA9IG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IChpbnN0YWxsZWRDaHVua0RhdGEgPSBpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gPSBbcmVzb2x2ZSwgcmVqZWN0XSkpO1xuXHRcdFx0XHRcdHByb21pc2VzLnB1c2goaW5zdGFsbGVkQ2h1bmtEYXRhWzJdID0gcHJvbWlzZSk7XG5cblx0XHRcdFx0XHQvLyBzdGFydCBjaHVuayBsb2FkaW5nXG5cdFx0XHRcdFx0dmFyIHVybCA9IF9fd2VicGFja19yZXF1aXJlX18ucCArIF9fd2VicGFja19yZXF1aXJlX18udShjaHVua0lkKTtcblx0XHRcdFx0XHQvLyBjcmVhdGUgZXJyb3IgYmVmb3JlIHN0YWNrIHVud291bmQgdG8gZ2V0IHVzZWZ1bCBzdGFja3RyYWNlIGxhdGVyXG5cdFx0XHRcdFx0dmFyIGVycm9yID0gbmV3IEVycm9yKCk7XG5cdFx0XHRcdFx0dmFyIGxvYWRpbmdFbmRlZCA9IChldmVudCkgPT4ge1xuXHRcdFx0XHRcdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGluc3RhbGxlZENodW5rcywgY2h1bmtJZCkpIHtcblx0XHRcdFx0XHRcdFx0aW5zdGFsbGVkQ2h1bmtEYXRhID0gaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdO1xuXHRcdFx0XHRcdFx0XHRpZihpbnN0YWxsZWRDaHVua0RhdGEgIT09IDApIGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA9IHVuZGVmaW5lZDtcblx0XHRcdFx0XHRcdFx0aWYoaW5zdGFsbGVkQ2h1bmtEYXRhKSB7XG5cdFx0XHRcdFx0XHRcdFx0dmFyIGVycm9yVHlwZSA9IGV2ZW50ICYmIChldmVudC50eXBlID09PSAnbG9hZCcgPyAnbWlzc2luZycgOiBldmVudC50eXBlKTtcblx0XHRcdFx0XHRcdFx0XHR2YXIgcmVhbFNyYyA9IGV2ZW50ICYmIGV2ZW50LnRhcmdldCAmJiBldmVudC50YXJnZXQuc3JjO1xuXHRcdFx0XHRcdFx0XHRcdGVycm9yLm1lc3NhZ2UgPSAnTG9hZGluZyBjaHVuayAnICsgY2h1bmtJZCArICcgZmFpbGVkLlxcbignICsgZXJyb3JUeXBlICsgJzogJyArIHJlYWxTcmMgKyAnKSc7XG5cdFx0XHRcdFx0XHRcdFx0ZXJyb3IubmFtZSA9ICdDaHVua0xvYWRFcnJvcic7XG5cdFx0XHRcdFx0XHRcdFx0ZXJyb3IudHlwZSA9IGVycm9yVHlwZTtcblx0XHRcdFx0XHRcdFx0XHRlcnJvci5yZXF1ZXN0ID0gcmVhbFNyYztcblx0XHRcdFx0XHRcdFx0XHRpbnN0YWxsZWRDaHVua0RhdGFbMV0oZXJyb3IpO1xuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fTtcblx0XHRcdFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmwodXJsLCBsb2FkaW5nRW5kZWQsIFwiY2h1bmstXCIgKyBjaHVua0lkLCBjaHVua0lkKTtcblx0XHRcdFx0fSBlbHNlIGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA9IDA7XG5cdFx0XHR9XG5cdFx0fVxufTtcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbnZhciBjdXJyZW50VXBkYXRlZE1vZHVsZXNMaXN0O1xudmFyIHdhaXRpbmdVcGRhdGVSZXNvbHZlcyA9IHt9O1xuZnVuY3Rpb24gbG9hZFVwZGF0ZUNodW5rKGNodW5rSWQpIHtcblx0cmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcblx0XHR3YWl0aW5nVXBkYXRlUmVzb2x2ZXNbY2h1bmtJZF0gPSByZXNvbHZlO1xuXHRcdC8vIHN0YXJ0IHVwZGF0ZSBjaHVuayBsb2FkaW5nXG5cdFx0dmFyIHVybCA9IF9fd2VicGFja19yZXF1aXJlX18ucCArIF9fd2VicGFja19yZXF1aXJlX18uaHUoY2h1bmtJZCk7XG5cdFx0Ly8gY3JlYXRlIGVycm9yIGJlZm9yZSBzdGFjayB1bndvdW5kIHRvIGdldCB1c2VmdWwgc3RhY2t0cmFjZSBsYXRlclxuXHRcdHZhciBlcnJvciA9IG5ldyBFcnJvcigpO1xuXHRcdHZhciBsb2FkaW5nRW5kZWQgPSAoZXZlbnQpID0+IHtcblx0XHRcdGlmKHdhaXRpbmdVcGRhdGVSZXNvbHZlc1tjaHVua0lkXSkge1xuXHRcdFx0XHR3YWl0aW5nVXBkYXRlUmVzb2x2ZXNbY2h1bmtJZF0gPSB1bmRlZmluZWRcblx0XHRcdFx0dmFyIGVycm9yVHlwZSA9IGV2ZW50ICYmIChldmVudC50eXBlID09PSAnbG9hZCcgPyAnbWlzc2luZycgOiBldmVudC50eXBlKTtcblx0XHRcdFx0dmFyIHJlYWxTcmMgPSBldmVudCAmJiBldmVudC50YXJnZXQgJiYgZXZlbnQudGFyZ2V0LnNyYztcblx0XHRcdFx0ZXJyb3IubWVzc2FnZSA9ICdMb2FkaW5nIGhvdCB1cGRhdGUgY2h1bmsgJyArIGNodW5rSWQgKyAnIGZhaWxlZC5cXG4oJyArIGVycm9yVHlwZSArICc6ICcgKyByZWFsU3JjICsgJyknO1xuXHRcdFx0XHRlcnJvci5uYW1lID0gJ0NodW5rTG9hZEVycm9yJztcblx0XHRcdFx0ZXJyb3IudHlwZSA9IGVycm9yVHlwZTtcblx0XHRcdFx0ZXJyb3IucmVxdWVzdCA9IHJlYWxTcmM7XG5cdFx0XHRcdHJlamVjdChlcnJvcik7XG5cdFx0XHR9XG5cdFx0fTtcblx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmwodXJsLCBsb2FkaW5nRW5kZWQpO1xuXHR9KTtcbn1cblxuc2VsZltcIndlYnBhY2tIb3RVcGRhdGV3ZWJwYWNrXCJdID0gKGNodW5rSWQsIG1vcmVNb2R1bGVzLCBydW50aW1lKSA9PiB7XG5cdGZvcih2YXIgbW9kdWxlSWQgaW4gbW9yZU1vZHVsZXMpIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8obW9yZU1vZHVsZXMsIG1vZHVsZUlkKSkge1xuXHRcdFx0Y3VycmVudFVwZGF0ZVttb2R1bGVJZF0gPSBtb3JlTW9kdWxlc1ttb2R1bGVJZF07XG5cdFx0XHRpZihjdXJyZW50VXBkYXRlZE1vZHVsZXNMaXN0KSBjdXJyZW50VXBkYXRlZE1vZHVsZXNMaXN0LnB1c2gobW9kdWxlSWQpO1xuXHRcdH1cblx0fVxuXHRpZihydW50aW1lKSBjdXJyZW50VXBkYXRlUnVudGltZS5wdXNoKHJ1bnRpbWUpO1xuXHRpZih3YWl0aW5nVXBkYXRlUmVzb2x2ZXNbY2h1bmtJZF0pIHtcblx0XHR3YWl0aW5nVXBkYXRlUmVzb2x2ZXNbY2h1bmtJZF0oKTtcblx0XHR3YWl0aW5nVXBkYXRlUmVzb2x2ZXNbY2h1bmtJZF0gPSB1bmRlZmluZWQ7XG5cdH1cbn07XG5cbnZhciBjdXJyZW50VXBkYXRlQ2h1bmtzO1xudmFyIGN1cnJlbnRVcGRhdGU7XG52YXIgY3VycmVudFVwZGF0ZVJlbW92ZWRDaHVua3M7XG52YXIgY3VycmVudFVwZGF0ZVJ1bnRpbWU7XG5mdW5jdGlvbiBhcHBseUhhbmRsZXIob3B0aW9ucykge1xuXHRpZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5mKSBkZWxldGUgX193ZWJwYWNrX3JlcXVpcmVfXy5mLmpzb25wSG1yO1xuXHRjdXJyZW50VXBkYXRlQ2h1bmtzID0gdW5kZWZpbmVkO1xuXHRmdW5jdGlvbiBnZXRBZmZlY3RlZE1vZHVsZUVmZmVjdHModXBkYXRlTW9kdWxlSWQpIHtcblx0XHR2YXIgb3V0ZGF0ZWRNb2R1bGVzID0gW3VwZGF0ZU1vZHVsZUlkXTtcblx0XHR2YXIgb3V0ZGF0ZWREZXBlbmRlbmNpZXMgPSB7fTtcblxuXHRcdHZhciBxdWV1ZSA9IG91dGRhdGVkTW9kdWxlcy5tYXAoZnVuY3Rpb24gKGlkKSB7XG5cdFx0XHRyZXR1cm4ge1xuXHRcdFx0XHRjaGFpbjogW2lkXSxcblx0XHRcdFx0aWQ6IGlkXG5cdFx0XHR9O1xuXHRcdH0pO1xuXHRcdHdoaWxlIChxdWV1ZS5sZW5ndGggPiAwKSB7XG5cdFx0XHR2YXIgcXVldWVJdGVtID0gcXVldWUucG9wKCk7XG5cdFx0XHR2YXIgbW9kdWxlSWQgPSBxdWV1ZUl0ZW0uaWQ7XG5cdFx0XHR2YXIgY2hhaW4gPSBxdWV1ZUl0ZW0uY2hhaW47XG5cdFx0XHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX3JlcXVpcmVfXy5jW21vZHVsZUlkXTtcblx0XHRcdGlmIChcblx0XHRcdFx0IW1vZHVsZSB8fFxuXHRcdFx0XHQobW9kdWxlLmhvdC5fc2VsZkFjY2VwdGVkICYmICFtb2R1bGUuaG90Ll9zZWxmSW52YWxpZGF0ZWQpXG5cdFx0XHQpXG5cdFx0XHRcdGNvbnRpbnVlO1xuXHRcdFx0aWYgKG1vZHVsZS5ob3QuX3NlbGZEZWNsaW5lZCkge1xuXHRcdFx0XHRyZXR1cm4ge1xuXHRcdFx0XHRcdHR5cGU6IFwic2VsZi1kZWNsaW5lZFwiLFxuXHRcdFx0XHRcdGNoYWluOiBjaGFpbixcblx0XHRcdFx0XHRtb2R1bGVJZDogbW9kdWxlSWRcblx0XHRcdFx0fTtcblx0XHRcdH1cblx0XHRcdGlmIChtb2R1bGUuaG90Ll9tYWluKSB7XG5cdFx0XHRcdHJldHVybiB7XG5cdFx0XHRcdFx0dHlwZTogXCJ1bmFjY2VwdGVkXCIsXG5cdFx0XHRcdFx0Y2hhaW46IGNoYWluLFxuXHRcdFx0XHRcdG1vZHVsZUlkOiBtb2R1bGVJZFxuXHRcdFx0XHR9O1xuXHRcdFx0fVxuXHRcdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBtb2R1bGUucGFyZW50cy5sZW5ndGg7IGkrKykge1xuXHRcdFx0XHR2YXIgcGFyZW50SWQgPSBtb2R1bGUucGFyZW50c1tpXTtcblx0XHRcdFx0dmFyIHBhcmVudCA9IF9fd2VicGFja19yZXF1aXJlX18uY1twYXJlbnRJZF07XG5cdFx0XHRcdGlmICghcGFyZW50KSBjb250aW51ZTtcblx0XHRcdFx0aWYgKHBhcmVudC5ob3QuX2RlY2xpbmVkRGVwZW5kZW5jaWVzW21vZHVsZUlkXSkge1xuXHRcdFx0XHRcdHJldHVybiB7XG5cdFx0XHRcdFx0XHR0eXBlOiBcImRlY2xpbmVkXCIsXG5cdFx0XHRcdFx0XHRjaGFpbjogY2hhaW4uY29uY2F0KFtwYXJlbnRJZF0pLFxuXHRcdFx0XHRcdFx0bW9kdWxlSWQ6IG1vZHVsZUlkLFxuXHRcdFx0XHRcdFx0cGFyZW50SWQ6IHBhcmVudElkXG5cdFx0XHRcdFx0fTtcblx0XHRcdFx0fVxuXHRcdFx0XHRpZiAob3V0ZGF0ZWRNb2R1bGVzLmluZGV4T2YocGFyZW50SWQpICE9PSAtMSkgY29udGludWU7XG5cdFx0XHRcdGlmIChwYXJlbnQuaG90Ll9hY2NlcHRlZERlcGVuZGVuY2llc1ttb2R1bGVJZF0pIHtcblx0XHRcdFx0XHRpZiAoIW91dGRhdGVkRGVwZW5kZW5jaWVzW3BhcmVudElkXSlcblx0XHRcdFx0XHRcdG91dGRhdGVkRGVwZW5kZW5jaWVzW3BhcmVudElkXSA9IFtdO1xuXHRcdFx0XHRcdGFkZEFsbFRvU2V0KG91dGRhdGVkRGVwZW5kZW5jaWVzW3BhcmVudElkXSwgW21vZHVsZUlkXSk7XG5cdFx0XHRcdFx0Y29udGludWU7XG5cdFx0XHRcdH1cblx0XHRcdFx0ZGVsZXRlIG91dGRhdGVkRGVwZW5kZW5jaWVzW3BhcmVudElkXTtcblx0XHRcdFx0b3V0ZGF0ZWRNb2R1bGVzLnB1c2gocGFyZW50SWQpO1xuXHRcdFx0XHRxdWV1ZS5wdXNoKHtcblx0XHRcdFx0XHRjaGFpbjogY2hhaW4uY29uY2F0KFtwYXJlbnRJZF0pLFxuXHRcdFx0XHRcdGlkOiBwYXJlbnRJZFxuXHRcdFx0XHR9KTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHRyZXR1cm4ge1xuXHRcdFx0dHlwZTogXCJhY2NlcHRlZFwiLFxuXHRcdFx0bW9kdWxlSWQ6IHVwZGF0ZU1vZHVsZUlkLFxuXHRcdFx0b3V0ZGF0ZWRNb2R1bGVzOiBvdXRkYXRlZE1vZHVsZXMsXG5cdFx0XHRvdXRkYXRlZERlcGVuZGVuY2llczogb3V0ZGF0ZWREZXBlbmRlbmNpZXNcblx0XHR9O1xuXHR9XG5cblx0ZnVuY3Rpb24gYWRkQWxsVG9TZXQoYSwgYikge1xuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgYi5sZW5ndGg7IGkrKykge1xuXHRcdFx0dmFyIGl0ZW0gPSBiW2ldO1xuXHRcdFx0aWYgKGEuaW5kZXhPZihpdGVtKSA9PT0gLTEpIGEucHVzaChpdGVtKTtcblx0XHR9XG5cdH1cblxuXHQvLyBhdCBiZWdpbiBhbGwgdXBkYXRlcyBtb2R1bGVzIGFyZSBvdXRkYXRlZFxuXHQvLyB0aGUgXCJvdXRkYXRlZFwiIHN0YXR1cyBjYW4gcHJvcGFnYXRlIHRvIHBhcmVudHMgaWYgdGhleSBkb24ndCBhY2NlcHQgdGhlIGNoaWxkcmVuXG5cdHZhciBvdXRkYXRlZERlcGVuZGVuY2llcyA9IHt9O1xuXHR2YXIgb3V0ZGF0ZWRNb2R1bGVzID0gW107XG5cdHZhciBhcHBsaWVkVXBkYXRlID0ge307XG5cblx0dmFyIHdhcm5VbmV4cGVjdGVkUmVxdWlyZSA9IGZ1bmN0aW9uIHdhcm5VbmV4cGVjdGVkUmVxdWlyZShtb2R1bGUpIHtcblx0XHRjb25zb2xlLndhcm4oXG5cdFx0XHRcIltITVJdIHVuZXhwZWN0ZWQgcmVxdWlyZShcIiArIG1vZHVsZS5pZCArIFwiKSB0byBkaXNwb3NlZCBtb2R1bGVcIlxuXHRcdCk7XG5cdH07XG5cblx0Zm9yICh2YXIgbW9kdWxlSWQgaW4gY3VycmVudFVwZGF0ZSkge1xuXHRcdGlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLm8oY3VycmVudFVwZGF0ZSwgbW9kdWxlSWQpKSB7XG5cdFx0XHR2YXIgbmV3TW9kdWxlRmFjdG9yeSA9IGN1cnJlbnRVcGRhdGVbbW9kdWxlSWRdO1xuXHRcdFx0LyoqIEB0eXBlIHtUT0RPfSAqL1xuXHRcdFx0dmFyIHJlc3VsdDtcblx0XHRcdGlmIChuZXdNb2R1bGVGYWN0b3J5KSB7XG5cdFx0XHRcdHJlc3VsdCA9IGdldEFmZmVjdGVkTW9kdWxlRWZmZWN0cyhtb2R1bGVJZCk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRyZXN1bHQgPSB7XG5cdFx0XHRcdFx0dHlwZTogXCJkaXNwb3NlZFwiLFxuXHRcdFx0XHRcdG1vZHVsZUlkOiBtb2R1bGVJZFxuXHRcdFx0XHR9O1xuXHRcdFx0fVxuXHRcdFx0LyoqIEB0eXBlIHtFcnJvcnxmYWxzZX0gKi9cblx0XHRcdHZhciBhYm9ydEVycm9yID0gZmFsc2U7XG5cdFx0XHR2YXIgZG9BcHBseSA9IGZhbHNlO1xuXHRcdFx0dmFyIGRvRGlzcG9zZSA9IGZhbHNlO1xuXHRcdFx0dmFyIGNoYWluSW5mbyA9IFwiXCI7XG5cdFx0XHRpZiAocmVzdWx0LmNoYWluKSB7XG5cdFx0XHRcdGNoYWluSW5mbyA9IFwiXFxuVXBkYXRlIHByb3BhZ2F0aW9uOiBcIiArIHJlc3VsdC5jaGFpbi5qb2luKFwiIC0+IFwiKTtcblx0XHRcdH1cblx0XHRcdHN3aXRjaCAocmVzdWx0LnR5cGUpIHtcblx0XHRcdFx0Y2FzZSBcInNlbGYtZGVjbGluZWRcIjpcblx0XHRcdFx0XHRpZiAob3B0aW9ucy5vbkRlY2xpbmVkKSBvcHRpb25zLm9uRGVjbGluZWQocmVzdWx0KTtcblx0XHRcdFx0XHRpZiAoIW9wdGlvbnMuaWdub3JlRGVjbGluZWQpXG5cdFx0XHRcdFx0XHRhYm9ydEVycm9yID0gbmV3IEVycm9yKFxuXHRcdFx0XHRcdFx0XHRcIkFib3J0ZWQgYmVjYXVzZSBvZiBzZWxmIGRlY2xpbmU6IFwiICtcblx0XHRcdFx0XHRcdFx0XHRyZXN1bHQubW9kdWxlSWQgK1xuXHRcdFx0XHRcdFx0XHRcdGNoYWluSW5mb1xuXHRcdFx0XHRcdFx0KTtcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0Y2FzZSBcImRlY2xpbmVkXCI6XG5cdFx0XHRcdFx0aWYgKG9wdGlvbnMub25EZWNsaW5lZCkgb3B0aW9ucy5vbkRlY2xpbmVkKHJlc3VsdCk7XG5cdFx0XHRcdFx0aWYgKCFvcHRpb25zLmlnbm9yZURlY2xpbmVkKVxuXHRcdFx0XHRcdFx0YWJvcnRFcnJvciA9IG5ldyBFcnJvcihcblx0XHRcdFx0XHRcdFx0XCJBYm9ydGVkIGJlY2F1c2Ugb2YgZGVjbGluZWQgZGVwZW5kZW5jeTogXCIgK1xuXHRcdFx0XHRcdFx0XHRcdHJlc3VsdC5tb2R1bGVJZCArXG5cdFx0XHRcdFx0XHRcdFx0XCIgaW4gXCIgK1xuXHRcdFx0XHRcdFx0XHRcdHJlc3VsdC5wYXJlbnRJZCArXG5cdFx0XHRcdFx0XHRcdFx0Y2hhaW5JbmZvXG5cdFx0XHRcdFx0XHQpO1xuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRjYXNlIFwidW5hY2NlcHRlZFwiOlxuXHRcdFx0XHRcdGlmIChvcHRpb25zLm9uVW5hY2NlcHRlZCkgb3B0aW9ucy5vblVuYWNjZXB0ZWQocmVzdWx0KTtcblx0XHRcdFx0XHRpZiAoIW9wdGlvbnMuaWdub3JlVW5hY2NlcHRlZClcblx0XHRcdFx0XHRcdGFib3J0RXJyb3IgPSBuZXcgRXJyb3IoXG5cdFx0XHRcdFx0XHRcdFwiQWJvcnRlZCBiZWNhdXNlIFwiICsgbW9kdWxlSWQgKyBcIiBpcyBub3QgYWNjZXB0ZWRcIiArIGNoYWluSW5mb1xuXHRcdFx0XHRcdFx0KTtcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0Y2FzZSBcImFjY2VwdGVkXCI6XG5cdFx0XHRcdFx0aWYgKG9wdGlvbnMub25BY2NlcHRlZCkgb3B0aW9ucy5vbkFjY2VwdGVkKHJlc3VsdCk7XG5cdFx0XHRcdFx0ZG9BcHBseSA9IHRydWU7XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdGNhc2UgXCJkaXNwb3NlZFwiOlxuXHRcdFx0XHRcdGlmIChvcHRpb25zLm9uRGlzcG9zZWQpIG9wdGlvbnMub25EaXNwb3NlZChyZXN1bHQpO1xuXHRcdFx0XHRcdGRvRGlzcG9zZSA9IHRydWU7XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdGRlZmF1bHQ6XG5cdFx0XHRcdFx0dGhyb3cgbmV3IEVycm9yKFwiVW5leGNlcHRpb24gdHlwZSBcIiArIHJlc3VsdC50eXBlKTtcblx0XHRcdH1cblx0XHRcdGlmIChhYm9ydEVycm9yKSB7XG5cdFx0XHRcdHJldHVybiB7XG5cdFx0XHRcdFx0ZXJyb3I6IGFib3J0RXJyb3Jcblx0XHRcdFx0fTtcblx0XHRcdH1cblx0XHRcdGlmIChkb0FwcGx5KSB7XG5cdFx0XHRcdGFwcGxpZWRVcGRhdGVbbW9kdWxlSWRdID0gbmV3TW9kdWxlRmFjdG9yeTtcblx0XHRcdFx0YWRkQWxsVG9TZXQob3V0ZGF0ZWRNb2R1bGVzLCByZXN1bHQub3V0ZGF0ZWRNb2R1bGVzKTtcblx0XHRcdFx0Zm9yIChtb2R1bGVJZCBpbiByZXN1bHQub3V0ZGF0ZWREZXBlbmRlbmNpZXMpIHtcblx0XHRcdFx0XHRpZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5vKHJlc3VsdC5vdXRkYXRlZERlcGVuZGVuY2llcywgbW9kdWxlSWQpKSB7XG5cdFx0XHRcdFx0XHRpZiAoIW91dGRhdGVkRGVwZW5kZW5jaWVzW21vZHVsZUlkXSlcblx0XHRcdFx0XHRcdFx0b3V0ZGF0ZWREZXBlbmRlbmNpZXNbbW9kdWxlSWRdID0gW107XG5cdFx0XHRcdFx0XHRhZGRBbGxUb1NldChcblx0XHRcdFx0XHRcdFx0b3V0ZGF0ZWREZXBlbmRlbmNpZXNbbW9kdWxlSWRdLFxuXHRcdFx0XHRcdFx0XHRyZXN1bHQub3V0ZGF0ZWREZXBlbmRlbmNpZXNbbW9kdWxlSWRdXG5cdFx0XHRcdFx0XHQpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0aWYgKGRvRGlzcG9zZSkge1xuXHRcdFx0XHRhZGRBbGxUb1NldChvdXRkYXRlZE1vZHVsZXMsIFtyZXN1bHQubW9kdWxlSWRdKTtcblx0XHRcdFx0YXBwbGllZFVwZGF0ZVttb2R1bGVJZF0gPSB3YXJuVW5leHBlY3RlZFJlcXVpcmU7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cdGN1cnJlbnRVcGRhdGUgPSB1bmRlZmluZWQ7XG5cblx0Ly8gU3RvcmUgc2VsZiBhY2NlcHRlZCBvdXRkYXRlZCBtb2R1bGVzIHRvIHJlcXVpcmUgdGhlbSBsYXRlciBieSB0aGUgbW9kdWxlIHN5c3RlbVxuXHR2YXIgb3V0ZGF0ZWRTZWxmQWNjZXB0ZWRNb2R1bGVzID0gW107XG5cdGZvciAodmFyIGogPSAwOyBqIDwgb3V0ZGF0ZWRNb2R1bGVzLmxlbmd0aDsgaisrKSB7XG5cdFx0dmFyIG91dGRhdGVkTW9kdWxlSWQgPSBvdXRkYXRlZE1vZHVsZXNbal07XG5cdFx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19yZXF1aXJlX18uY1tvdXRkYXRlZE1vZHVsZUlkXTtcblx0XHRpZiAoXG5cdFx0XHRtb2R1bGUgJiZcblx0XHRcdChtb2R1bGUuaG90Ll9zZWxmQWNjZXB0ZWQgfHwgbW9kdWxlLmhvdC5fbWFpbikgJiZcblx0XHRcdC8vIHJlbW92ZWQgc2VsZi1hY2NlcHRlZCBtb2R1bGVzIHNob3VsZCBub3QgYmUgcmVxdWlyZWRcblx0XHRcdGFwcGxpZWRVcGRhdGVbb3V0ZGF0ZWRNb2R1bGVJZF0gIT09IHdhcm5VbmV4cGVjdGVkUmVxdWlyZSAmJlxuXHRcdFx0Ly8gd2hlbiBjYWxsZWQgaW52YWxpZGF0ZSBzZWxmLWFjY2VwdGluZyBpcyBub3QgcG9zc2libGVcblx0XHRcdCFtb2R1bGUuaG90Ll9zZWxmSW52YWxpZGF0ZWRcblx0XHQpIHtcblx0XHRcdG91dGRhdGVkU2VsZkFjY2VwdGVkTW9kdWxlcy5wdXNoKHtcblx0XHRcdFx0bW9kdWxlOiBvdXRkYXRlZE1vZHVsZUlkLFxuXHRcdFx0XHRyZXF1aXJlOiBtb2R1bGUuaG90Ll9yZXF1aXJlU2VsZixcblx0XHRcdFx0ZXJyb3JIYW5kbGVyOiBtb2R1bGUuaG90Ll9zZWxmQWNjZXB0ZWRcblx0XHRcdH0pO1xuXHRcdH1cblx0fVxuXG5cdHZhciBtb2R1bGVPdXRkYXRlZERlcGVuZGVuY2llcztcblxuXHRyZXR1cm4ge1xuXHRcdGRpc3Bvc2U6IGZ1bmN0aW9uICgpIHtcblx0XHRcdGN1cnJlbnRVcGRhdGVSZW1vdmVkQ2h1bmtzLmZvckVhY2goZnVuY3Rpb24gKGNodW5rSWQpIHtcblx0XHRcdFx0ZGVsZXRlIGluc3RhbGxlZENodW5rc1tjaHVua0lkXTtcblx0XHRcdH0pO1xuXHRcdFx0Y3VycmVudFVwZGF0ZVJlbW92ZWRDaHVua3MgPSB1bmRlZmluZWQ7XG5cblx0XHRcdHZhciBpZHg7XG5cdFx0XHR2YXIgcXVldWUgPSBvdXRkYXRlZE1vZHVsZXMuc2xpY2UoKTtcblx0XHRcdHdoaWxlIChxdWV1ZS5sZW5ndGggPiAwKSB7XG5cdFx0XHRcdHZhciBtb2R1bGVJZCA9IHF1ZXVlLnBvcCgpO1xuXHRcdFx0XHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX3JlcXVpcmVfXy5jW21vZHVsZUlkXTtcblx0XHRcdFx0aWYgKCFtb2R1bGUpIGNvbnRpbnVlO1xuXG5cdFx0XHRcdHZhciBkYXRhID0ge307XG5cblx0XHRcdFx0Ly8gQ2FsbCBkaXNwb3NlIGhhbmRsZXJzXG5cdFx0XHRcdHZhciBkaXNwb3NlSGFuZGxlcnMgPSBtb2R1bGUuaG90Ll9kaXNwb3NlSGFuZGxlcnM7XG5cdFx0XHRcdGZvciAoaiA9IDA7IGogPCBkaXNwb3NlSGFuZGxlcnMubGVuZ3RoOyBqKyspIHtcblx0XHRcdFx0XHRkaXNwb3NlSGFuZGxlcnNbal0uY2FsbChudWxsLCBkYXRhKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmhtckRbbW9kdWxlSWRdID0gZGF0YTtcblxuXHRcdFx0XHQvLyBkaXNhYmxlIG1vZHVsZSAodGhpcyBkaXNhYmxlcyByZXF1aXJlcyBmcm9tIHRoaXMgbW9kdWxlKVxuXHRcdFx0XHRtb2R1bGUuaG90LmFjdGl2ZSA9IGZhbHNlO1xuXG5cdFx0XHRcdC8vIHJlbW92ZSBtb2R1bGUgZnJvbSBjYWNoZVxuXHRcdFx0XHRkZWxldGUgX193ZWJwYWNrX3JlcXVpcmVfXy5jW21vZHVsZUlkXTtcblxuXHRcdFx0XHQvLyB3aGVuIGRpc3Bvc2luZyB0aGVyZSBpcyBubyBuZWVkIHRvIGNhbGwgZGlzcG9zZSBoYW5kbGVyXG5cdFx0XHRcdGRlbGV0ZSBvdXRkYXRlZERlcGVuZGVuY2llc1ttb2R1bGVJZF07XG5cblx0XHRcdFx0Ly8gcmVtb3ZlIFwicGFyZW50c1wiIHJlZmVyZW5jZXMgZnJvbSBhbGwgY2hpbGRyZW5cblx0XHRcdFx0Zm9yIChqID0gMDsgaiA8IG1vZHVsZS5jaGlsZHJlbi5sZW5ndGg7IGorKykge1xuXHRcdFx0XHRcdHZhciBjaGlsZCA9IF9fd2VicGFja19yZXF1aXJlX18uY1ttb2R1bGUuY2hpbGRyZW5bal1dO1xuXHRcdFx0XHRcdGlmICghY2hpbGQpIGNvbnRpbnVlO1xuXHRcdFx0XHRcdGlkeCA9IGNoaWxkLnBhcmVudHMuaW5kZXhPZihtb2R1bGVJZCk7XG5cdFx0XHRcdFx0aWYgKGlkeCA+PSAwKSB7XG5cdFx0XHRcdFx0XHRjaGlsZC5wYXJlbnRzLnNwbGljZShpZHgsIDEpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0XHQvLyByZW1vdmUgb3V0ZGF0ZWQgZGVwZW5kZW5jeSBmcm9tIG1vZHVsZSBjaGlsZHJlblxuXHRcdFx0dmFyIGRlcGVuZGVuY3k7XG5cdFx0XHRmb3IgKHZhciBvdXRkYXRlZE1vZHVsZUlkIGluIG91dGRhdGVkRGVwZW5kZW5jaWVzKSB7XG5cdFx0XHRcdGlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLm8ob3V0ZGF0ZWREZXBlbmRlbmNpZXMsIG91dGRhdGVkTW9kdWxlSWQpKSB7XG5cdFx0XHRcdFx0bW9kdWxlID0gX193ZWJwYWNrX3JlcXVpcmVfXy5jW291dGRhdGVkTW9kdWxlSWRdO1xuXHRcdFx0XHRcdGlmIChtb2R1bGUpIHtcblx0XHRcdFx0XHRcdG1vZHVsZU91dGRhdGVkRGVwZW5kZW5jaWVzID1cblx0XHRcdFx0XHRcdFx0b3V0ZGF0ZWREZXBlbmRlbmNpZXNbb3V0ZGF0ZWRNb2R1bGVJZF07XG5cdFx0XHRcdFx0XHRmb3IgKGogPSAwOyBqIDwgbW9kdWxlT3V0ZGF0ZWREZXBlbmRlbmNpZXMubGVuZ3RoOyBqKyspIHtcblx0XHRcdFx0XHRcdFx0ZGVwZW5kZW5jeSA9IG1vZHVsZU91dGRhdGVkRGVwZW5kZW5jaWVzW2pdO1xuXHRcdFx0XHRcdFx0XHRpZHggPSBtb2R1bGUuY2hpbGRyZW4uaW5kZXhPZihkZXBlbmRlbmN5KTtcblx0XHRcdFx0XHRcdFx0aWYgKGlkeCA+PSAwKSBtb2R1bGUuY2hpbGRyZW4uc3BsaWNlKGlkeCwgMSk7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fSxcblx0XHRhcHBseTogZnVuY3Rpb24gKHJlcG9ydEVycm9yKSB7XG5cdFx0XHQvLyBpbnNlcnQgbmV3IGNvZGVcblx0XHRcdGZvciAodmFyIHVwZGF0ZU1vZHVsZUlkIGluIGFwcGxpZWRVcGRhdGUpIHtcblx0XHRcdFx0aWYgKF9fd2VicGFja19yZXF1aXJlX18ubyhhcHBsaWVkVXBkYXRlLCB1cGRhdGVNb2R1bGVJZCkpIHtcblx0XHRcdFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLm1bdXBkYXRlTW9kdWxlSWRdID0gYXBwbGllZFVwZGF0ZVt1cGRhdGVNb2R1bGVJZF07XG5cdFx0XHRcdH1cblx0XHRcdH1cblxuXHRcdFx0Ly8gcnVuIG5ldyBydW50aW1lIG1vZHVsZXNcblx0XHRcdGZvciAodmFyIGkgPSAwOyBpIDwgY3VycmVudFVwZGF0ZVJ1bnRpbWUubGVuZ3RoOyBpKyspIHtcblx0XHRcdFx0Y3VycmVudFVwZGF0ZVJ1bnRpbWVbaV0oX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cdFx0XHR9XG5cblx0XHRcdC8vIGNhbGwgYWNjZXB0IGhhbmRsZXJzXG5cdFx0XHRmb3IgKHZhciBvdXRkYXRlZE1vZHVsZUlkIGluIG91dGRhdGVkRGVwZW5kZW5jaWVzKSB7XG5cdFx0XHRcdGlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLm8ob3V0ZGF0ZWREZXBlbmRlbmNpZXMsIG91dGRhdGVkTW9kdWxlSWQpKSB7XG5cdFx0XHRcdFx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19yZXF1aXJlX18uY1tvdXRkYXRlZE1vZHVsZUlkXTtcblx0XHRcdFx0XHRpZiAobW9kdWxlKSB7XG5cdFx0XHRcdFx0XHRtb2R1bGVPdXRkYXRlZERlcGVuZGVuY2llcyA9XG5cdFx0XHRcdFx0XHRcdG91dGRhdGVkRGVwZW5kZW5jaWVzW291dGRhdGVkTW9kdWxlSWRdO1xuXHRcdFx0XHRcdFx0dmFyIGNhbGxiYWNrcyA9IFtdO1xuXHRcdFx0XHRcdFx0dmFyIGVycm9ySGFuZGxlcnMgPSBbXTtcblx0XHRcdFx0XHRcdHZhciBkZXBlbmRlbmNpZXNGb3JDYWxsYmFja3MgPSBbXTtcblx0XHRcdFx0XHRcdGZvciAodmFyIGogPSAwOyBqIDwgbW9kdWxlT3V0ZGF0ZWREZXBlbmRlbmNpZXMubGVuZ3RoOyBqKyspIHtcblx0XHRcdFx0XHRcdFx0dmFyIGRlcGVuZGVuY3kgPSBtb2R1bGVPdXRkYXRlZERlcGVuZGVuY2llc1tqXTtcblx0XHRcdFx0XHRcdFx0dmFyIGFjY2VwdENhbGxiYWNrID1cblx0XHRcdFx0XHRcdFx0XHRtb2R1bGUuaG90Ll9hY2NlcHRlZERlcGVuZGVuY2llc1tkZXBlbmRlbmN5XTtcblx0XHRcdFx0XHRcdFx0dmFyIGVycm9ySGFuZGxlciA9XG5cdFx0XHRcdFx0XHRcdFx0bW9kdWxlLmhvdC5fYWNjZXB0ZWRFcnJvckhhbmRsZXJzW2RlcGVuZGVuY3ldO1xuXHRcdFx0XHRcdFx0XHRpZiAoYWNjZXB0Q2FsbGJhY2spIHtcblx0XHRcdFx0XHRcdFx0XHRpZiAoY2FsbGJhY2tzLmluZGV4T2YoYWNjZXB0Q2FsbGJhY2spICE9PSAtMSkgY29udGludWU7XG5cdFx0XHRcdFx0XHRcdFx0Y2FsbGJhY2tzLnB1c2goYWNjZXB0Q2FsbGJhY2spO1xuXHRcdFx0XHRcdFx0XHRcdGVycm9ySGFuZGxlcnMucHVzaChlcnJvckhhbmRsZXIpO1xuXHRcdFx0XHRcdFx0XHRcdGRlcGVuZGVuY2llc0ZvckNhbGxiYWNrcy5wdXNoKGRlcGVuZGVuY3kpO1xuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRmb3IgKHZhciBrID0gMDsgayA8IGNhbGxiYWNrcy5sZW5ndGg7IGsrKykge1xuXHRcdFx0XHRcdFx0XHR0cnkge1xuXHRcdFx0XHRcdFx0XHRcdGNhbGxiYWNrc1trXS5jYWxsKG51bGwsIG1vZHVsZU91dGRhdGVkRGVwZW5kZW5jaWVzKTtcblx0XHRcdFx0XHRcdFx0fSBjYXRjaCAoZXJyKSB7XG5cdFx0XHRcdFx0XHRcdFx0aWYgKHR5cGVvZiBlcnJvckhhbmRsZXJzW2tdID09PSBcImZ1bmN0aW9uXCIpIHtcblx0XHRcdFx0XHRcdFx0XHRcdHRyeSB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdGVycm9ySGFuZGxlcnNba10oZXJyLCB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0bW9kdWxlSWQ6IG91dGRhdGVkTW9kdWxlSWQsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0ZGVwZW5kZW5jeUlkOiBkZXBlbmRlbmNpZXNGb3JDYWxsYmFja3Nba11cblx0XHRcdFx0XHRcdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0XHRcdFx0XHR9IGNhdGNoIChlcnIyKSB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdGlmIChvcHRpb25zLm9uRXJyb3JlZCkge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdG9wdGlvbnMub25FcnJvcmVkKHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHR5cGU6IFwiYWNjZXB0LWVycm9yLWhhbmRsZXItZXJyb3JlZFwiLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0bW9kdWxlSWQ6IG91dGRhdGVkTW9kdWxlSWQsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRkZXBlbmRlbmN5SWQ6IGRlcGVuZGVuY2llc0ZvckNhbGxiYWNrc1trXSxcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGVycm9yOiBlcnIyLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0b3JpZ2luYWxFcnJvcjogZXJyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0XHRcdFx0aWYgKCFvcHRpb25zLmlnbm9yZUVycm9yZWQpIHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRyZXBvcnRFcnJvcihlcnIyKTtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRyZXBvcnRFcnJvcihlcnIpO1xuXHRcdFx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdFx0XHRcdGlmIChvcHRpb25zLm9uRXJyb3JlZCkge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRvcHRpb25zLm9uRXJyb3JlZCh7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0dHlwZTogXCJhY2NlcHQtZXJyb3JlZFwiLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdG1vZHVsZUlkOiBvdXRkYXRlZE1vZHVsZUlkLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGRlcGVuZGVuY3lJZDogZGVwZW5kZW5jaWVzRm9yQ2FsbGJhY2tzW2tdLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGVycm9yOiBlcnJcblx0XHRcdFx0XHRcdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdFx0XHRpZiAoIW9wdGlvbnMuaWdub3JlRXJyb3JlZCkge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRyZXBvcnRFcnJvcihlcnIpO1xuXHRcdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0XHQvLyBMb2FkIHNlbGYgYWNjZXB0ZWQgbW9kdWxlc1xuXHRcdFx0Zm9yICh2YXIgbyA9IDA7IG8gPCBvdXRkYXRlZFNlbGZBY2NlcHRlZE1vZHVsZXMubGVuZ3RoOyBvKyspIHtcblx0XHRcdFx0dmFyIGl0ZW0gPSBvdXRkYXRlZFNlbGZBY2NlcHRlZE1vZHVsZXNbb107XG5cdFx0XHRcdHZhciBtb2R1bGVJZCA9IGl0ZW0ubW9kdWxlO1xuXHRcdFx0XHR0cnkge1xuXHRcdFx0XHRcdGl0ZW0ucmVxdWlyZShtb2R1bGVJZCk7XG5cdFx0XHRcdH0gY2F0Y2ggKGVycikge1xuXHRcdFx0XHRcdGlmICh0eXBlb2YgaXRlbS5lcnJvckhhbmRsZXIgPT09IFwiZnVuY3Rpb25cIikge1xuXHRcdFx0XHRcdFx0dHJ5IHtcblx0XHRcdFx0XHRcdFx0aXRlbS5lcnJvckhhbmRsZXIoZXJyLCB7XG5cdFx0XHRcdFx0XHRcdFx0bW9kdWxlSWQ6IG1vZHVsZUlkLFxuXHRcdFx0XHRcdFx0XHRcdG1vZHVsZTogX193ZWJwYWNrX3JlcXVpcmVfXy5jW21vZHVsZUlkXVxuXHRcdFx0XHRcdFx0XHR9KTtcblx0XHRcdFx0XHRcdH0gY2F0Y2ggKGVycjIpIHtcblx0XHRcdFx0XHRcdFx0aWYgKG9wdGlvbnMub25FcnJvcmVkKSB7XG5cdFx0XHRcdFx0XHRcdFx0b3B0aW9ucy5vbkVycm9yZWQoe1xuXHRcdFx0XHRcdFx0XHRcdFx0dHlwZTogXCJzZWxmLWFjY2VwdC1lcnJvci1oYW5kbGVyLWVycm9yZWRcIixcblx0XHRcdFx0XHRcdFx0XHRcdG1vZHVsZUlkOiBtb2R1bGVJZCxcblx0XHRcdFx0XHRcdFx0XHRcdGVycm9yOiBlcnIyLFxuXHRcdFx0XHRcdFx0XHRcdFx0b3JpZ2luYWxFcnJvcjogZXJyXG5cdFx0XHRcdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0aWYgKCFvcHRpb25zLmlnbm9yZUVycm9yZWQpIHtcblx0XHRcdFx0XHRcdFx0XHRyZXBvcnRFcnJvcihlcnIyKTtcblx0XHRcdFx0XHRcdFx0XHRyZXBvcnRFcnJvcihlcnIpO1xuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdGlmIChvcHRpb25zLm9uRXJyb3JlZCkge1xuXHRcdFx0XHRcdFx0XHRvcHRpb25zLm9uRXJyb3JlZCh7XG5cdFx0XHRcdFx0XHRcdFx0dHlwZTogXCJzZWxmLWFjY2VwdC1lcnJvcmVkXCIsXG5cdFx0XHRcdFx0XHRcdFx0bW9kdWxlSWQ6IG1vZHVsZUlkLFxuXHRcdFx0XHRcdFx0XHRcdGVycm9yOiBlcnJcblx0XHRcdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRpZiAoIW9wdGlvbnMuaWdub3JlRXJyb3JlZCkge1xuXHRcdFx0XHRcdFx0XHRyZXBvcnRFcnJvcihlcnIpO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0XHRyZXR1cm4gb3V0ZGF0ZWRNb2R1bGVzO1xuXHRcdH1cblx0fTtcbn1cbl9fd2VicGFja19yZXF1aXJlX18uaG1ySS5qc29ucCA9IGZ1bmN0aW9uIChtb2R1bGVJZCwgYXBwbHlIYW5kbGVycykge1xuXHRpZiAoIWN1cnJlbnRVcGRhdGUpIHtcblx0XHRjdXJyZW50VXBkYXRlID0ge307XG5cdFx0Y3VycmVudFVwZGF0ZVJ1bnRpbWUgPSBbXTtcblx0XHRjdXJyZW50VXBkYXRlUmVtb3ZlZENodW5rcyA9IFtdO1xuXHRcdGFwcGx5SGFuZGxlcnMucHVzaChhcHBseUhhbmRsZXIpO1xuXHR9XG5cdGlmICghX193ZWJwYWNrX3JlcXVpcmVfXy5vKGN1cnJlbnRVcGRhdGUsIG1vZHVsZUlkKSkge1xuXHRcdGN1cnJlbnRVcGRhdGVbbW9kdWxlSWRdID0gX193ZWJwYWNrX3JlcXVpcmVfXy5tW21vZHVsZUlkXTtcblx0fVxufTtcbl9fd2VicGFja19yZXF1aXJlX18uaG1yQy5qc29ucCA9IGZ1bmN0aW9uIChcblx0Y2h1bmtJZHMsXG5cdHJlbW92ZWRDaHVua3MsXG5cdHJlbW92ZWRNb2R1bGVzLFxuXHRwcm9taXNlcyxcblx0YXBwbHlIYW5kbGVycyxcblx0dXBkYXRlZE1vZHVsZXNMaXN0XG4pIHtcblx0YXBwbHlIYW5kbGVycy5wdXNoKGFwcGx5SGFuZGxlcik7XG5cdGN1cnJlbnRVcGRhdGVDaHVua3MgPSB7fTtcblx0Y3VycmVudFVwZGF0ZVJlbW92ZWRDaHVua3MgPSByZW1vdmVkQ2h1bmtzO1xuXHRjdXJyZW50VXBkYXRlID0gcmVtb3ZlZE1vZHVsZXMucmVkdWNlKGZ1bmN0aW9uIChvYmosIGtleSkge1xuXHRcdG9ialtrZXldID0gZmFsc2U7XG5cdFx0cmV0dXJuIG9iajtcblx0fSwge30pO1xuXHRjdXJyZW50VXBkYXRlUnVudGltZSA9IFtdO1xuXHRjaHVua0lkcy5mb3JFYWNoKGZ1bmN0aW9uIChjaHVua0lkKSB7XG5cdFx0aWYgKFxuXHRcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vKGluc3RhbGxlZENodW5rcywgY2h1bmtJZCkgJiZcblx0XHRcdGluc3RhbGxlZENodW5rc1tjaHVua0lkXSAhPT0gdW5kZWZpbmVkXG5cdFx0KSB7XG5cdFx0XHRwcm9taXNlcy5wdXNoKGxvYWRVcGRhdGVDaHVuayhjaHVua0lkLCB1cGRhdGVkTW9kdWxlc0xpc3QpKTtcblx0XHRcdGN1cnJlbnRVcGRhdGVDaHVua3NbY2h1bmtJZF0gPSB0cnVlO1xuXHRcdH1cblx0fSk7XG5cdGlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmYpIHtcblx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmYuanNvbnBIbXIgPSBmdW5jdGlvbiAoY2h1bmtJZCwgcHJvbWlzZXMpIHtcblx0XHRcdGlmIChcblx0XHRcdFx0Y3VycmVudFVwZGF0ZUNodW5rcyAmJlxuXHRcdFx0XHQhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGN1cnJlbnRVcGRhdGVDaHVua3MsIGNodW5rSWQpICYmXG5cdFx0XHRcdF9fd2VicGFja19yZXF1aXJlX18ubyhpbnN0YWxsZWRDaHVua3MsIGNodW5rSWQpICYmXG5cdFx0XHRcdGluc3RhbGxlZENodW5rc1tjaHVua0lkXSAhPT0gdW5kZWZpbmVkXG5cdFx0XHQpIHtcblx0XHRcdFx0cHJvbWlzZXMucHVzaChsb2FkVXBkYXRlQ2h1bmsoY2h1bmtJZCkpO1xuXHRcdFx0XHRjdXJyZW50VXBkYXRlQ2h1bmtzW2NodW5rSWRdID0gdHJ1ZTtcblx0XHRcdH1cblx0XHR9O1xuXHR9XG59O1xuXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmhtck0gPSAoKSA9PiB7XG5cdGlmICh0eXBlb2YgZmV0Y2ggPT09IFwidW5kZWZpbmVkXCIpIHRocm93IG5ldyBFcnJvcihcIk5vIGJyb3dzZXIgc3VwcG9ydDogbmVlZCBmZXRjaCBBUElcIik7XG5cdHJldHVybiBmZXRjaChfX3dlYnBhY2tfcmVxdWlyZV9fLnAgKyBfX3dlYnBhY2tfcmVxdWlyZV9fLmhtckYoKSkudGhlbigocmVzcG9uc2UpID0+IHtcblx0XHRpZihyZXNwb25zZS5zdGF0dXMgPT09IDQwNCkgcmV0dXJuOyAvLyBubyB1cGRhdGUgYXZhaWxhYmxlXG5cdFx0aWYoIXJlc3BvbnNlLm9rKSB0aHJvdyBuZXcgRXJyb3IoXCJGYWlsZWQgdG8gZmV0Y2ggdXBkYXRlIG1hbmlmZXN0IFwiICsgcmVzcG9uc2Uuc3RhdHVzVGV4dCk7XG5cdFx0cmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcblx0fSk7XG59O1xuXG5fX3dlYnBhY2tfcmVxdWlyZV9fLk8uaiA9IChjaHVua0lkKSA9PiAoaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdID09PSAwKTtcblxuLy8gaW5zdGFsbCBhIEpTT05QIGNhbGxiYWNrIGZvciBjaHVuayBsb2FkaW5nXG52YXIgd2VicGFja0pzb25wQ2FsbGJhY2sgPSAocGFyZW50Q2h1bmtMb2FkaW5nRnVuY3Rpb24sIGRhdGEpID0+IHtcblx0dmFyIFtjaHVua0lkcywgbW9yZU1vZHVsZXMsIHJ1bnRpbWVdID0gZGF0YTtcblx0Ly8gYWRkIFwibW9yZU1vZHVsZXNcIiB0byB0aGUgbW9kdWxlcyBvYmplY3QsXG5cdC8vIHRoZW4gZmxhZyBhbGwgXCJjaHVua0lkc1wiIGFzIGxvYWRlZCBhbmQgZmlyZSBjYWxsYmFja1xuXHR2YXIgbW9kdWxlSWQsIGNodW5rSWQsIGkgPSAwO1xuXHRpZihjaHVua0lkcy5zb21lKChpZCkgPT4gKGluc3RhbGxlZENodW5rc1tpZF0gIT09IDApKSkge1xuXHRcdGZvcihtb2R1bGVJZCBpbiBtb3JlTW9kdWxlcykge1xuXHRcdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKG1vcmVNb2R1bGVzLCBtb2R1bGVJZCkpIHtcblx0XHRcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tW21vZHVsZUlkXSA9IG1vcmVNb2R1bGVzW21vZHVsZUlkXTtcblx0XHRcdH1cblx0XHR9XG5cdFx0aWYocnVudGltZSkgdmFyIHJlc3VsdCA9IHJ1bnRpbWUoX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cdH1cblx0aWYocGFyZW50Q2h1bmtMb2FkaW5nRnVuY3Rpb24pIHBhcmVudENodW5rTG9hZGluZ0Z1bmN0aW9uKGRhdGEpO1xuXHRmb3IoO2kgPCBjaHVua0lkcy5sZW5ndGg7IGkrKykge1xuXHRcdGNodW5rSWQgPSBjaHVua0lkc1tpXTtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oaW5zdGFsbGVkQ2h1bmtzLCBjaHVua0lkKSAmJiBpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0pIHtcblx0XHRcdGluc3RhbGxlZENodW5rc1tjaHVua0lkXVswXSgpO1xuXHRcdH1cblx0XHRpbnN0YWxsZWRDaHVua3NbY2h1bmtJZHNbaV1dID0gMDtcblx0fVxuXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXy5PKHJlc3VsdCk7XG59XG5cbnZhciBjaHVua0xvYWRpbmdHbG9iYWwgPSBzZWxmW1wid2VicGFja0NodW5rd2VicGFja1wiXSA9IHNlbGZbXCJ3ZWJwYWNrQ2h1bmt3ZWJwYWNrXCJdIHx8IFtdO1xuY2h1bmtMb2FkaW5nR2xvYmFsLmZvckVhY2god2VicGFja0pzb25wQ2FsbGJhY2suYmluZChudWxsLCAwKSk7XG5jaHVua0xvYWRpbmdHbG9iYWwucHVzaCA9IHdlYnBhY2tKc29ucENhbGxiYWNrLmJpbmQobnVsbCwgY2h1bmtMb2FkaW5nR2xvYmFsLnB1c2guYmluZChjaHVua0xvYWRpbmdHbG9iYWwpKTsiLCIiLCIvLyBtb2R1bGUgY2FjaGUgYXJlIHVzZWQgc28gZW50cnkgaW5saW5pbmcgaXMgZGlzYWJsZWRcbi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xudmFyIF9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fLk8odW5kZWZpbmVkLCBbXCJ2ZW5kb3JzLW5vZGVfbW9kdWxlc19iYWJlbF9ydW50aW1lX3JlZ2VuZXJhdG9yX2luZGV4X2pzLW5vZGVfbW9kdWxlc19yZWR1eC1kZXZ0b29sc19leHRlbnNpb24tMzhlY2RiXCJdLCAoKSA9PiAoX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL2luZGV4LmpzXCIpKSlcbl9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fLk8oX193ZWJwYWNrX2V4cG9ydHNfXyk7XG4iLCIiXSwibmFtZXMiOlsiUmVhY3QiLCJTdXNwZW5zZSIsInVzZUVmZmVjdCIsIlJvdXRlIiwiUm91dGVzIiwidXNlTmF2aWdhdGUiLCJ1c2VEaXNwYXRjaCIsImF1dGgiLCJOb3RGb3VuZCIsIk1haW5QYWdlIiwiTGF5b3V0IiwiU3Bpbm5lciIsIlByaXZhdGVBdXRoIiwiUHJvZmlsZUNvbnRlbnQiLCJsYXp5IiwiUGhvdG9QYWdlIiwiQXBwIiwibmF2aWdhdGUiLCJkaXNwYXRjaCIsImFjY2Vzc1Rva2VuIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsInVybFNlYXJjaFBhcmFtcyIsIlVSTFNlYXJjaFBhcmFtcyIsIndpbmRvdyIsImxvY2F0aW9uIiwic2VhcmNoIiwicGFyYW1zIiwiT2JqZWN0IiwiZnJvbUVudHJpZXMiLCJlbnRyaWVzIiwiY29kZSIsInRvU3RyaW5nIiwiaGlzdG9yeSIsInB1c2hTdGF0ZSIsImRvY3VtZW50IiwidGl0bGUiLCJwYXRobmFtZSIsInN0eWxlcyIsImxvZ28iLCJGb290ZXIiLCJ5ZWFyIiwiRGF0ZSIsImdldEZ1bGxZZWFyIiwiZm9vdGVyIiwiY29udGFpbmVyIiwiZm9vdGVyVG9wIiwiY29udGFjdHMiLCJjb250YWN0c0xpc3QiLCJsaXN0SXRlbVRlbCIsImxpc3RJdGVtTWFpbCIsInNvY2lhbCIsImluU29jaWFsVGV4dCIsInNvY2lhbExpc3QiLCJzb2NpYWxMb3N0SXRlbSIsImxpbmsiLCJ2ayIsImpvaW4iLCJnb29nbGUiLCJvayIsImZvb3RlckJvdHRvbSIsImZvb3RlckNvcHkiLCJMb2NhdGlvbiIsIlNpZ25JbiIsIlByb2ZpbGUiLCJ1c2VTZWxlY3RvciIsIkxpbmsiLCJIZWFkZXIiLCJpc0F1dGgiLCJzdGF0ZSIsImhlYWRlciIsImxpc3QiLCJtYWluIiwibG9jYXRpb25JY29uIiwiY2l0eVRleHQiLCJ1bnNwbGFzaEF1dGhMaW5rIiwiU2lnbmluIiwibG9naW4iLCJsb2dpbkljb24iLCJsb2dpblNpZ25pbiIsIk91dGxldCIsInVzZVJlZiIsInVzZVN0YXRlIiwibG9nb3V0IiwidXNlciIsImN1cnJlbnRVc2VyIiwiaXNQcm9maWxlQnRuc1Nob3ciLCJzZXRQcm9maWxlQnRuc1Nob3ciLCJ1c2VyUHJvZmlsZVJlZiIsImhhbmRsZUNsaWNrT3V0c2lkZSIsImV2ZW50IiwiY3VycmVudCIsImNvbnRhaW5zIiwidGFyZ2V0IiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJzaG93RXhpdEJ0biIsImdvVG9Qcm9maWxlIiwiZSIsInN0b3BQcm9wYWdhdGlvbiIsImdvT3V0IiwidXNlclByb2ZpbGUiLCJ1c2VyQmFzZUluZm8iLCJmaXJzdF9uYW1lIiwicHJvZmlsZUltYWdlIiwicHJvZmlsZV9pbWFnZSIsInNtYWxsIiwicHJvZmlsZUJ0bnMiLCJwcm9maWxlQnRuIiwibG9nb3V0QnRuIiwibG9hZGVyIiwibG9hZGVyMiIsImxvYWRlclN0YXIiLCJsb2FkZXJDaXJjbGVzIiwicHJlbG9hZEFzQmxvYiIsInVybCIsIlByb21pc2UiLCJyZXNvbHZlIiwiZmV0Y2giLCJyZXNwb25zZSIsImJsb2IiLCJyZWFkZXIiLCJGaWxlUmVhZGVyIiwicmVhZEFzRGF0YVVSTCIsInByb21pc2UiLCJvbmxvYWQiLCJyZXN1bHQiLCJOYXZpZ2F0ZSIsImNoaWxkcmVuIiwicmVuZGVyIiwiSGFzaFJvdXRlciIsIlByb3ZpZGVyIiwic3RvcmUiLCJnZXRFbGVtZW50QnlJZCIsImRldk1vZGUiLCJwcm9jZXNzIiwiZW52IiwiTk9ERV9FTlYiLCJtb2R1bGUiLCJob3QiLCJhY2NlcHQiLCJTd2lwZXJDb3JlIiwiQTExeSIsIk5hdmlnYXRpb24iLCJQYWdpbmF0aW9uIiwiU3dpcGVyIiwiU3dpcGVyU2xpZGUiLCJnZXRMb2NhdGlvbiIsImdldFBob3RvcyIsInVzZSIsInBob3RvcyIsImNvbnRlbnQiLCJzbGljZSIsImlzTG9hZGluZyIsInBob3Rvc0NvbnRhaW5lciIsImhlaWdodCIsIm1haW5Db250YWluZXIiLCJjbGlja2FibGUiLCJkeW5hbWljQnVsbGV0cyIsImR5bmFtaWNNYWluQnVsbGV0cyIsIm1hcCIsImVsIiwidXJscyIsImZ1bGwiLCJtYWluVGl0bGUiLCJpZCIsImFib3V0Q29udGFpbmVyIiwiYWJvdXQiLCJhYm91dFRpdGxlIiwiYWJvdXRUaXRsZVRleHQiLCJkb3NtdGgiLCJkb3NtdGhUaXRsZSIsImRvc210aExpc3QiLCJkb3NtdGhJdGVtIiwidW5zcGxhc2hMaW5rIiwibG9va1Bob3RvIiwibG9va1Bob3RvVGV4dCIsImxvb2tQaG90b0J1dHRvbiIsInNldFVzZXIiLCJheGlvcyIsInByb2R1Y3Rpb24iLCJvYXV0aFVybCIsImNsaWVudF9pZCIsImNsaWVudF9zZWNyZXQiLCJyZWRpcmVjdF91cmkiLCJncmFudF90eXBlIiwic2NvcGUiLCJyZXNwb25zZV90eXBlIiwiZ2V0IiwiaGVhZGVycyIsIkF1dGhvcml6YXRpb24iLCJ0aGVuIiwicmVzIiwiZGF0YSIsInJlbW92ZUl0ZW0iLCJjb25zb2xlIiwibG9nIiwiY29kZVNlYXJjaFBhcmFtIiwiY2JhY2siLCJwb3N0Iiwic2V0SXRlbSIsImFjY2Vzc190b2tlbiIsInNldExvY2F0aW9uIiwiY2l0eSIsInNldEN1cnJlbnRQaG90byIsInNldE9yRGVsZXRlTGlrZSIsInNldFBob3RvcyIsInNldElzTG9hZGluZyIsInNldE9yRGVsZXRlTGlrZUJ5VXNlciIsInBob3RvIiwibGlrZWRfYnlfdXNlciIsImdldEN1cnJlbnRQaG90byIsImN1cnJlbnRQaG90byIsImN1cnJlbnRQYWdlIiwiYXN5bmNBcnJheSIsImltYWdlIiwiSW1hZ2UiLCJzcmMiLCJhbGwiLCJmbiIsImluZGV4IiwiTE9HSU4iLCJMT0dPVVQiLCJJU19MT0FESU5HIiwiZGVmYXVsdFN0YXRlIiwiYWN0aW9uIiwidHlwZSIsInBheWxvYWQiLCJib29sIiwiYXBwbHlNaWRkbGV3YXJlIiwiY29tYmluZVJlZHVjZXJzIiwiY3JlYXRlU3RvcmUiLCJjb21wb3NlV2l0aERldlRvb2xzIiwidGh1bmsiLCJyb290UmVkdWNlciIsIkdFVF9QSE9UT1MiLCJHRVRfTE9DQVRJT04iLCJTRVRfQ09OVEVOVCIsIlNFVF9PUl9ERUxFVEVfTElLRSIsIlNFVF9DVVJSRU5UX1BIT1RPIiwicGhvdG9Ub3RhbENvdW50Iiwic2V0TGlrZUNsYXNzTmFtZSIsInJlZHVjZSIsInByZXZFbCIsIm5leHRFbCIsImZpbmQiLCJpdGVtIiwicHVzaCJdLCJzb3VyY2VSb290IjoiIn0=