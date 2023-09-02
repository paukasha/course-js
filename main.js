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
/******/ 		__webpack_require__.h = () => ("0eec2cc333ec7f87481d")
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QTtXQUNBLEdBQUc7V0FDSDtXQUNBO1dBQ0EsR0FBRztXQUNIO1dBQ0E7V0FDQTtXQUNBLEdBQUc7V0FDSDtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLE1BQU07V0FDTjtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsTUFBTTtXQUNOO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsR0FBRzs7V0FFSDtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxHQUFHO1dBQ0g7V0FDQTtXQUNBLEdBQUc7V0FDSDtXQUNBO1dBQ0E7V0FDQSxHQUFHOztXQUVIO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7V0FFQTtXQUNBO1dBQ0E7O1dBRUEsaUJBQWlCLHFDQUFxQztXQUN0RDs7V0FFQTtXQUNBOztXQUVBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsSUFBSTtXQUNKO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsRUFBRTtXQUNGOztXQUVBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLE1BQU07V0FDTjtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsUUFBUTtXQUNSO1dBQ0E7V0FDQSxRQUFRO1dBQ1I7V0FDQSxNQUFNO1dBQ04sS0FBSztXQUNMLElBQUk7V0FDSixHQUFHO1dBQ0g7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQSxHQUFHO1dBQ0g7V0FDQTtXQUNBOztXQUVBO1dBQ0E7O1dBRUE7O1dBRUE7V0FDQTtXQUNB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QTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsRUFBRSxJQUFJO1dBQ047V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsRUFBRTtXQUNGO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7V0FDQTtXQUNBO1dBQ0Esc0NBQXNDO1dBQ3RDO1dBQ0E7V0FDQSxFQUFFO1dBQ0Y7O1dBRUE7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsTUFBTSxxQkFBcUI7V0FDM0I7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7V0FFQTtXQUNBO1dBQ0E7Ozs7O1VFNWpCQTtVQUNBO1VBQ0E7VUFDQTtVQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2VicGFjay8uL3NyYy9hcHAuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay8uL3NyYy9jb21wb25lbnRzL0Zvb3Rlci9Gb290ZXIuanN4Iiwid2VicGFjazovL3dlYnBhY2svLi9zcmMvY29tcG9uZW50cy9IZWFkZXIvSGVhZGVyLmpzeCIsIndlYnBhY2s6Ly93ZWJwYWNrLy4vc3JjL2NvbXBvbmVudHMvSGVhZGVyL0xvY2F0aW9uL0xvY2F0aW9uLmpzeCIsIndlYnBhY2s6Ly93ZWJwYWNrLy4vc3JjL2NvbXBvbmVudHMvSGVhZGVyL1NpZ25pbi9TaWduaW4uanN4Iiwid2VicGFjazovL3dlYnBhY2svLi9zcmMvY29tcG9uZW50cy9MYXlvdXQvTGF5b3V0LmpzeCIsIndlYnBhY2s6Ly93ZWJwYWNrLy4vc3JjL2NvbXBvbmVudHMvUHJvZmlsZS9Qcm9maWxlLmpzeCIsIndlYnBhY2s6Ly93ZWJwYWNrLy4vc3JjL2NvbXBvbmVudHMvU3Bpbm5lci9TcGlubmVyLmpzeCIsIndlYnBhY2s6Ly93ZWJwYWNrLy4vc3JjL2hlbHBlcnMvcHJlbG9hZEFzQmxvYi5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLy4vc3JjL2hvYy9Qcml2YXRlQXV0aC5qc3giLCJ3ZWJwYWNrOi8vd2VicGFjay8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLy4vc3JjL3BhZ2VzL01haW5QYWdlL01haW5QYWdlLmpzeCIsIndlYnBhY2s6Ly93ZWJwYWNrLy4vc3JjL3BhZ2VzL05vdEZvdW5kL05vdEZvdW5kLmpzeCIsIndlYnBhY2s6Ly93ZWJwYWNrLy4vc3JjL3JlZHV4L2FjdGlvbnMvYXV0aC5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLy4vc3JjL3JlZHV4L2FjdGlvbnMvbWFpbi5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLy4vc3JjL3JlZHV4L2FjdGlvbnMvcGhvdG9zLmpzIiwid2VicGFjazovL3dlYnBhY2svLi9zcmMvcmVkdXgvcmVkdWNlcnMvYXV0aC5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLy4vc3JjL3JlZHV4L3JlZHVjZXJzL2luZGV4LmpzIiwid2VicGFjazovL3dlYnBhY2svLi9zcmMvcmVkdXgvcmVkdWNlcnMvbWFpbi5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLy4vc3JjL3JlZHV4L3JlZHVjZXJzL3Bob3Rvcy5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLy4vc3JjL3N0eWxlcy5jc3MiLCJ3ZWJwYWNrOi8vd2VicGFjay8uL3NyYy9jb21wb25lbnRzL0Zvb3Rlci9mb290ZXIubS5jc3MiLCJ3ZWJwYWNrOi8vd2VicGFjay8uL3NyYy9jb21wb25lbnRzL0hlYWRlci9Mb2NhdGlvbi9sb2NhdGlvbi5tLmNzcyIsIndlYnBhY2s6Ly93ZWJwYWNrLy4vc3JjL2NvbXBvbmVudHMvSGVhZGVyL1NpZ25pbi9zaWduaW4ubS5jc3MiLCJ3ZWJwYWNrOi8vd2VicGFjay8uL3NyYy9jb21wb25lbnRzL0hlYWRlci9oZWFkZXIubS5jc3MiLCJ3ZWJwYWNrOi8vd2VicGFjay8uL3NyYy9jb21wb25lbnRzL1Byb2ZpbGUvcHJvZmlsZS5tLmNzcyIsIndlYnBhY2s6Ly93ZWJwYWNrLy4vc3JjL2NvbXBvbmVudHMvU3Bpbm5lci9zcGlubmVyLm0uY3NzIiwid2VicGFjazovL3dlYnBhY2svLi9zcmMvcGFnZXMvTWFpblBhZ2UvbWFpblBhZ2UubS5jc3MiLCJ3ZWJwYWNrOi8vd2VicGFjay8uL3NyYy9zdHlsZXMuY3NzPzQ0YjIiLCJ3ZWJwYWNrOi8vd2VicGFjay8uL3NyYy9jb21wb25lbnRzL0Zvb3Rlci9mb290ZXIubS5jc3M/NjRiYiIsIndlYnBhY2s6Ly93ZWJwYWNrLy4vc3JjL2NvbXBvbmVudHMvSGVhZGVyL0xvY2F0aW9uL2xvY2F0aW9uLm0uY3NzP2YzMjUiLCJ3ZWJwYWNrOi8vd2VicGFjay8uL3NyYy9jb21wb25lbnRzL0hlYWRlci9TaWduaW4vc2lnbmluLm0uY3NzP2JjMzgiLCJ3ZWJwYWNrOi8vd2VicGFjay8uL3NyYy9jb21wb25lbnRzL0hlYWRlci9oZWFkZXIubS5jc3M/ZTZlMyIsIndlYnBhY2s6Ly93ZWJwYWNrLy4vc3JjL2NvbXBvbmVudHMvUHJvZmlsZS9wcm9maWxlLm0uY3NzP2U2NDYiLCJ3ZWJwYWNrOi8vd2VicGFjay8uL3NyYy9jb21wb25lbnRzL1NwaW5uZXIvc3Bpbm5lci5tLmNzcz9lZjU0Iiwid2VicGFjazovL3dlYnBhY2svLi9zcmMvcGFnZXMvTWFpblBhZ2UvbWFpblBhZ2UubS5jc3M/MzMxZCIsIndlYnBhY2s6Ly93ZWJwYWNrL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3dlYnBhY2svd2VicGFjay9ydW50aW1lL2NodW5rIGxvYWRlZCIsIndlYnBhY2s6Ly93ZWJwYWNrL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3dlYnBhY2svd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3dlYnBhY2svd2VicGFjay9ydW50aW1lL2Vuc3VyZSBjaHVuayIsIndlYnBhY2s6Ly93ZWJwYWNrL3dlYnBhY2svcnVudGltZS9nZXQgamF2YXNjcmlwdCBjaHVuayBmaWxlbmFtZSIsIndlYnBhY2s6Ly93ZWJwYWNrL3dlYnBhY2svcnVudGltZS9nZXQgamF2YXNjcmlwdCB1cGRhdGUgY2h1bmsgZmlsZW5hbWUiLCJ3ZWJwYWNrOi8vd2VicGFjay93ZWJwYWNrL3J1bnRpbWUvZ2V0IG1pbmktY3NzIGNodW5rIGZpbGVuYW1lIiwid2VicGFjazovL3dlYnBhY2svd2VicGFjay9ydW50aW1lL2dldCB1cGRhdGUgbWFuaWZlc3QgZmlsZW5hbWUiLCJ3ZWJwYWNrOi8vd2VicGFjay93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giLCJ3ZWJwYWNrOi8vd2VicGFjay93ZWJwYWNrL3J1bnRpbWUvaGFybW9ueSBtb2R1bGUgZGVjb3JhdG9yIiwid2VicGFjazovL3dlYnBhY2svd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly93ZWJwYWNrL3dlYnBhY2svcnVudGltZS9sb2FkIHNjcmlwdCIsIndlYnBhY2s6Ly93ZWJwYWNrL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vd2VicGFjay93ZWJwYWNrL3J1bnRpbWUvaG90IG1vZHVsZSByZXBsYWNlbWVudCIsIndlYnBhY2s6Ly93ZWJwYWNrL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3dlYnBhY2svd2VicGFjay9ydW50aW1lL2NzcyBsb2FkaW5nIiwid2VicGFjazovL3dlYnBhY2svd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vd2VicGFjay93ZWJwYWNrL2JlZm9yZS1zdGFydHVwIiwid2VicGFjazovL3dlYnBhY2svd2VicGFjay9zdGFydHVwIiwid2VicGFjazovL3dlYnBhY2svd2VicGFjay9hZnRlci1zdGFydHVwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge1N1c3BlbnNlLCB1c2VFZmZlY3R9IGZyb20gJ3JlYWN0JztcbmltcG9ydCAnLi9zdHlsZXMuY3NzJztcbmltcG9ydCB7Um91dGUsIFJvdXRlcywgdXNlTmF2aWdhdGV9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xuaW1wb3J0IHt1c2VEaXNwYXRjaH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuaW1wb3J0IHthdXRofSBmcm9tICdAL3JlZHV4L2FjdGlvbnMvYXV0aCc7XG5pbXBvcnQgTm90Rm91bmQgZnJvbSAnQC9wYWdlcy9Ob3RGb3VuZC9Ob3RGb3VuZCc7XG5pbXBvcnQgTWFpblBhZ2UgZnJvbSAnQC9wYWdlcy9NYWluUGFnZS9NYWluUGFnZSc7XG5pbXBvcnQgTGF5b3V0IGZyb20gJ0Bjb21wb25lbnRzL0xheW91dC9MYXlvdXQnO1xuaW1wb3J0IFNwaW5uZXIgZnJvbSAnQGNvbXBvbmVudHMvU3Bpbm5lci9TcGlubmVyJztcbmltcG9ydCB7UHJpdmF0ZUF1dGh9IGZyb20gJy4vaG9jL1ByaXZhdGVBdXRoJztcblxuY29uc3QgUHJvZmlsZUNvbnRlbnQgPSBSZWFjdC5sYXp5KCgpID0+IGltcG9ydCgnQC9wYWdlcy9Qcm9maWxlQ29udGVudC9Qcm9maWxlQ29udGVudCcpKTtcbmNvbnN0IFBob3RvUGFnZSA9IFJlYWN0LmxhenkoKCkgPT4gaW1wb3J0KCdAL3BhZ2VzL1Bob3RvUGFnZS9QaG90b1BhZ2UnKSk7XG5cbmNvbnN0IEFwcCA9ICgpID0+IHtcbiAgY29uc3QgbmF2aWdhdGUgPSB1c2VOYXZpZ2F0ZSgpLFxuICAgIGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcblxuICBjb25zdCBhY2Nlc3NUb2tlbiA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdhY2Nlc3NUb2tlbicpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgbGV0IHVybFNlYXJjaFBhcmFtcyA9IG5ldyBVUkxTZWFyY2hQYXJhbXMod2luZG93LmxvY2F0aW9uLnNlYXJjaCk7XG4gICAgbGV0IHBhcmFtcyA9IE9iamVjdC5mcm9tRW50cmllcyh1cmxTZWFyY2hQYXJhbXMuZW50cmllcygpKTtcblxuICAgIGRpc3BhdGNoKFxuICAgICAgYXV0aChwYXJhbXM/LmNvZGUsICgpID0+IHtcbiAgICAgICAgcGFyYW1zLnRvU3RyaW5nKCk7XG4gICAgICAgIHdpbmRvdy5oaXN0b3J5LnB1c2hTdGF0ZSh7fSwgZG9jdW1lbnQudGl0bGUsIHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZSk7XG4gICAgICAgIG5hdmlnYXRlKCdwaG90b3MnKTtcbiAgICAgIH0pXG4gICAgKTtcbiAgfSwgW10pO1xuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxSb3V0ZXM+XG4gICAgICAgIDxSb3V0ZSBwYXRoPVwiL1wiIGVsZW1lbnQ9ezxMYXlvdXQvPn0+XG4gICAgICAgICAgPFJvdXRlIGluZGV4IGVsZW1lbnQ9ezxNYWluUGFnZS8+fS8+XG4gICAgICAgICAgPFJvdXRlXG4gICAgICAgICAgICBwYXRoPVwicGhvdG9zXCJcbiAgICAgICAgICAgIGVsZW1lbnQ9e1xuICAgICAgICAgICAgICA8UHJpdmF0ZUF1dGggaXNBdXRoPXthY2Nlc3NUb2tlbn0+XG4gICAgICAgICAgICAgICAgPFN1c3BlbnNlIGZhbGxiYWNrPXs8U3Bpbm5lci8+fT5cbiAgICAgICAgICAgICAgICAgIDxQcm9maWxlQ29udGVudC8+XG4gICAgICAgICAgICAgICAgPC9TdXNwZW5zZT5cbiAgICAgICAgICAgICAgPC9Qcml2YXRlQXV0aD5cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAvPlxuXG4gICAgICAgICAgPFJvdXRlXG4gICAgICAgICAgICBwYXRoPVwicGhvdG9zLzpwaG90b0lkXCJcbiAgICAgICAgICAgIGVsZW1lbnQ9e1xuICAgICAgICAgICAgICA8UHJpdmF0ZUF1dGggaXNBdXRoPXthY2Nlc3NUb2tlbn0+XG4gICAgICAgICAgICAgICAgPFN1c3BlbnNlIGZhbGxiYWNrPXs8U3Bpbm5lci8+fT5cbiAgICAgICAgICAgICAgICAgIDxQaG90b1BhZ2UvPlxuICAgICAgICAgICAgICAgIDwvU3VzcGVuc2U+XG4gICAgICAgICAgICAgIDwvUHJpdmF0ZUF1dGg+XG4gICAgICAgICAgICB9XG4gICAgICAgICAgLz5cbiAgICAgICAgICA8Um91dGUgcGF0aD1cIipcIiBlbGVtZW50PXs8Tm90Rm91bmQvPn0vPlxuICAgICAgICA8L1JvdXRlPlxuICAgICAgPC9Sb3V0ZXM+XG4gICAgPC8+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBBcHA7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHN0eWxlcyBmcm9tICcuL2Zvb3Rlci5tLmNzcyc7XG5pbXBvcnQgbG9nbyBmcm9tICdAaW1hZ2VzL2xvZ28tZm9vdGVyLnBuZyc7XG5cbmNvbnN0IEZvb3RlciA9ICgpID0+IHtcbiAgY29uc3QgeWVhciA9IG5ldyBEYXRlKCkuZ2V0RnVsbFllYXIoKVxuICByZXR1cm4gKFxuICAgIDxmb290ZXIgY2xhc3NOYW1lPXtzdHlsZXMuZm9vdGVyfT5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyfT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5mb290ZXJUb3B9PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGFjdHN9PlxuICAgICAgICAgICAgPHNwYW4+0JrQvtC90YLQsNC60YLRizwvc3Bhbj5cbiAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9e3N0eWxlcy5jb250YWN0c0xpc3R9PlxuICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPXtzdHlsZXMubGlzdEl0ZW1UZWx9PlxuICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJ0ZWw6Kzc5OTk5OTk5OTk5XCI+KzcoOTk5KS05OTktOTktOTk8L2E+XG4gICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9e3N0eWxlcy5saXN0SXRlbU1haWx9PlxuICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJlbWFpbDp0ZXN0QG1haWwucnVcIj50ZXN0QG1haWwucnU8L2E+XG4gICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICA8L3VsPlxuICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgPGltZyBzcmM9e2xvZ299IGFsdD17bG9nb30vPlxuXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5zb2NpYWx9PlxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtzdHlsZXMuaW5Tb2NpYWxUZXh0fT7QnNGLINCyINGB0L7RhtGB0LXRgtGP0YU8L3NwYW4+XG4gICAgICAgICAgICA8dWwgY2xhc3NOYW1lPXtzdHlsZXMuc29jaWFsTGlzdH0+XG4gICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9e3N0eWxlcy5zb2NpYWxMb3N0SXRlbX0+XG4gICAgICAgICAgICAgICAgPGFcbiAgICAgICAgICAgICAgICAgIGhyZWY9XCJodHRwczovL3ZrLmNvbS9cIlxuICAgICAgICAgICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17W3N0eWxlcy5saW5rLCBzdHlsZXMudmtdLmpvaW4oJyAnKX1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPXtzdHlsZXMuc29jaWFsTG9zdEl0ZW19PlxuICAgICAgICAgICAgICAgIDxhXG4gICAgICAgICAgICAgICAgICBocmVmPVwiaHR0cHM6Ly93d3cuZ29vZ2xlLmNvbS9cIlxuICAgICAgICAgICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17W3N0eWxlcy5saW5rLCBzdHlsZXMuZ29vZ2xlXS5qb2luKCcgJyl9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT17c3R5bGVzLnNvY2lhbExvc3RJdGVtfT5cbiAgICAgICAgICAgICAgICA8YVxuICAgICAgICAgICAgICAgICAgaHJlZj1cImh0dHBzOi8vb2sucnUvXCJcbiAgICAgICAgICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e1tzdHlsZXMubGluaywgc3R5bGVzLm9rXS5qb2luKCcgJyl9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmZvb3RlckJvdHRvbX0+XG4gICAgICAgIDxzbWFsbCBjbGFzc05hbWU9e3N0eWxlcy5mb290ZXJDb3B5fT7CqXt5ZWFyfSBQYXZsZW5rbyBEYXJ5YTwvc21hbGw+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Zvb3Rlcj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEZvb3RlcjtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vaGVhZGVyLm0uY3NzJztcbmltcG9ydCBsb2dvIGZyb20gJ0BpbWFnZXMvbG9nby5wbmcnO1xuaW1wb3J0IExvY2F0aW9uIGZyb20gJ0Bjb21wb25lbnRzL0hlYWRlci9Mb2NhdGlvbi9Mb2NhdGlvbic7XG5pbXBvcnQgU2lnbkluIGZyb20gJ0Bjb21wb25lbnRzL0hlYWRlci9TaWduaW4vU2lnbmluJztcbmltcG9ydCBQcm9maWxlIGZyb20gJ0Bjb21wb25lbnRzL1Byb2ZpbGUvUHJvZmlsZSc7XG5pbXBvcnQge3VzZVNlbGVjdG9yfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQge0xpbmt9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xuXG5jb25zdCBIZWFkZXIgPSAoKSA9PiB7XG4gIGNvbnN0IGlzQXV0aCA9IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUuYXV0aC5pc0F1dGgpO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cbiAgICAgIDxoZWFkZXIgY2xhc3NOYW1lPXtzdHlsZXMuaGVhZGVyfT5cbiAgICAgICAgPExpbmsgdG89XCIvXCI+XG4gICAgICAgICAgPGltZyBzcmM9e2xvZ299IGNsYXNzTmFtZT17c3R5bGVzLmxvZ299IGFsdD1cImxvZ29cIi8+XG4gICAgICAgIDwvTGluaz5cbiAgICAgICAgPG5hdj5cbiAgICAgICAgICA8dWwgY2xhc3NOYW1lPXtzdHlsZXMubGlzdH0+XG4gICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT17c3R5bGVzLmxpbmt9IGhyZWY9XCIjXCI+XG4gICAgICAgICAgICAgICAg0J4g0L3QsNGBXG4gICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT17c3R5bGVzLmxpbmt9IGhyZWY9XCIjXCI+XG4gICAgICAgICAgICAgICAg0JrQvtC90YLQsNC60YLRi1xuICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICA8L2xpPlxuICAgICAgICAgIDwvdWw+XG4gICAgICAgIDwvbmF2PlxuICAgICAgICA8TG9jYXRpb24vPlxuICAgICAgICB7aXNBdXRoID8gPFByb2ZpbGUvPiA6IDxTaWduSW4vPn1cbiAgICAgIDwvaGVhZGVyPlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgSGVhZGVyO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9sb2NhdGlvbi5tLmNzcyc7XG5pbXBvcnQge3VzZVNlbGVjdG9yfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5cbmNvbnN0IExvY2F0aW9uID0gKCkgPT4ge1xuICBjb25zdCBsb2NhdGlvbiA9IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUubWFpbi5sb2NhdGlvbik7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmxvY2F0aW9ufT5cbiAgICAgIDxzdmdcbiAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMubG9jYXRpb25JY29ufVxuICAgICAgICBlbmFibGVCYWNrZ3JvdW5kPVwibmV3IDAgMCA1MTIgNTEyXCJcbiAgICAgICAgaGVpZ2h0PVwiNTEyXCJcbiAgICAgICAgdmlld0JveD1cIjAgMCA1MTIgNTEyXCJcbiAgICAgICAgd2lkdGg9XCI1MTJcIlxuICAgICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcbiAgICAgID5cbiAgICAgICAgPGc+XG4gICAgICAgICAgPHBhdGhcbiAgICAgICAgICAgIGQ9XCJtNDA3LjU3OSA4Ny42NzdjLTMxLjA3My01My42MjQtODYuMjY1LTg2LjM4NS0xNDcuNjQtODcuNjM3LTIuNjItLjA1NC01LjI1Ny0uMDU0LTcuODc4IDAtNjEuMzc0IDEuMjUyLTExNi41NjYgMzQuMDEzLTE0Ny42NCA4Ny42MzctMzEuNzYyIDU0LjgxMi0zMi42MzEgMTIwLjY1Mi0yLjMyNSAxNzYuMTIzbDEyNi45NjMgMjMyLjM4N2MuMDU3LjEwMy4xMTQuMjA2LjE3My4zMDggNS41ODYgOS43MDkgMTUuNTkzIDE1LjUwNSAyNi43NyAxNS41MDUgMTEuMTc2IDAgMjEuMTgzLTUuNzk3IDI2Ljc2OC0xNS41MDUuMDU5LS4xMDIuMTE2LS4yMDUuMTczLS4zMDhsMTI2Ljk2My0yMzIuMzg3YzMwLjMwNC01NS40NzEgMjkuNDM1LTEyMS4zMTEtMi4zMjctMTc2LjEyM3ptLTE1MS41NzkgMTQ0LjMyM2MtMzkuNzAxIDAtNzItMzIuMjk5LTcyLTcyczMyLjI5OS03MiA3Mi03MiA3MiAzMi4yOTkgNzIgNzItMzIuMjk4IDcyLTcyIDcyelwiLz5cbiAgICAgICAgPC9nPlxuICAgICAgPC9zdmc+XG4gICAgICA8c3BhbiBjbGFzc05hbWU9e3N0eWxlcy5jaXR5VGV4dH0+e2xvY2F0aW9ufTwvc3Bhbj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IExvY2F0aW9uO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9zaWduaW4ubS5jc3MnO1xuaW1wb3J0IHt1bnNwbGFzaEF1dGhMaW5rfSBmcm9tICdAL3JlZHV4L2FjdGlvbnMvYXV0aC5qcyc7XG5cbmNvbnN0IFNpZ25pbiA9ICgpID0+IHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmxvZ2lufT5cbiAgICAgIDxzdmdcbiAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMubG9naW5JY29ufVxuICAgICAgICBoZWlnaHQ9XCI1MTJwdFwiXG4gICAgICAgIHZpZXdCb3g9XCIwIDAgNTEyIDUxMlwiXG4gICAgICAgIHdpZHRoPVwiNTEycHRcIlxuICAgICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcbiAgICAgID5cbiAgICAgICAgPHBhdGhcbiAgICAgICAgICBkPVwibTQwMy43NzczNDQgMTQ3LjkxNzk2OWMwLTgxLjU2MjUtNjYuMzU5Mzc1LTE0Ny45MTc5NjktMTQ3LjkxNzk2OS0xNDcuOTE3OTY5LTgxLjU2MjUgMC0xNDcuOTE3OTY5IDY2LjM1NTQ2OS0xNDcuOTE3OTY5IDE0Ny45MTc5NjkgMCA1MC41MTk1MzEgMjUuNDY0ODQ0IDk1LjE5OTIxOSA2NC4yMjI2NTYgMTIxLjg5NDUzMS0zNi4xODc1IDEyLjQ4ODI4MS02OS4zNTkzNzQgMzMuMTE3MTg4LTk3LjIyNjU2MiA2MC45ODQzNzUtNDguMzI0MjE5IDQ4LjMyNDIxOS03NC45Mzc1IDExMi41NzgxMjUtNzQuOTM3NSAxODAuOTE3OTY5aDM5Ljk3NjU2MmMwLTExOS4wMzUxNTYgOTYuODQzNzUtMjE1Ljg3ODkwNiAyMTUuODgyODEzLTIxNS44Nzg5MDYgODEuNTU4NTk0IDAgMTQ3LjkxNzk2OS02Ni4zNTU0NjkgMTQ3LjkxNzk2OS0xNDcuOTE3OTY5em0tMTQ3LjkxNzk2OSAxMDcuOTQxNDA2Yy01OS41MTk1MzEgMC0xMDcuOTQxNDA2LTQ4LjQyMTg3NS0xMDcuOTQxNDA2LTEwNy45NDE0MDZzNDguNDIxODc1LTEwNy45NDE0MDcgMTA3Ljk0MTQwNi0xMDcuOTQxNDA3YzU5LjUxNTYyNSAwIDEwNy45Mzc1IDQ4LjQyMTg3NiAxMDcuOTM3NSAxMDcuOTQxNDA3cy00OC40MjE4NzUgMTA3Ljk0MTQwNi0xMDcuOTM3NSAxMDcuOTQxNDA2em0yNTYuMTQwNjI1IDExMS45Mzc1LTk0LjA4OTg0NCA5NC4wODk4NDQtMjguMjY5NTMxLTI4LjI2OTUzMSA0Ni44MzIwMzEtNDYuODMyMDMyaC0zNC42NzE4NzVjLTQ3Ljg5ODQzNyAwLTg2LjkwMjM0MyAzOC45NzI2NTYtODYuOTQxNDA2IDg2Ljg3MTA5NGwtLjAzNTE1NiAzOC4wNzQyMTktMzkuOTc2NTYzLS4wMzEyNS4wMzEyNS0zOC4wNzgxMjVjLjA1ODU5NC02OS45MjU3ODIgNTYuOTk2MDk0LTEyNi44MTY0MDYgMTI2LjkyMTg3NS0xMjYuODE2NDA2aDMyLjY3MTg3NWwtNDQuODMyMDMxLTQ0LjgzMjAzMiAyOC4yNjk1MzEtMjguMjY1NjI1em0wIDBcIi8+XG4gICAgICA8L3N2Zz5cbiAgICAgIDxhIGNsYXNzTmFtZT17c3R5bGVzLmxvZ2luU2lnbmlufSBocmVmPXt1bnNwbGFzaEF1dGhMaW5rfT5cbiAgICAgICAg0JLQvtC50YLQuFxuICAgICAgPC9hPlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgU2lnbmluO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7T3V0bGV0fSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcbmltcG9ydCBIZWFkZXIgZnJvbSAnQGNvbXBvbmVudHMvSGVhZGVyL0hlYWRlcic7XG5pbXBvcnQgRm9vdGVyIGZyb20gJ0Bjb21wb25lbnRzL0Zvb3Rlci9Gb290ZXInO1xuXG5jb25zdCBMYXlvdXQgPSAoKSA9PiB7XG4gIHJldHVybiAoPD5cbiAgICAgIDxIZWFkZXIvPlxuICAgICAgPG1haW4+XG4gICAgICAgIDxPdXRsZXQvPlxuICAgICAgPC9tYWluPlxuICAgICAgPEZvb3Rlci8+XG4gICAgPC8+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBMYXlvdXQ7XG4iLCJpbXBvcnQgUmVhY3QsIHt1c2VFZmZlY3QsIHVzZVJlZiwgdXNlU3RhdGV9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9wcm9maWxlLm0uY3NzJztcbmltcG9ydCB7dXNlRGlzcGF0Y2gsIHVzZVNlbGVjdG9yfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQge2xvZ291dH0gZnJvbSAnQC9yZWR1eC9yZWR1Y2Vycy9hdXRoJztcbmltcG9ydCB7dXNlTmF2aWdhdGV9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xuXG5jb25zdCBQcm9maWxlID0gKCkgPT4ge1xuICBjb25zdCB1c2VyID0gdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS5hdXRoLmN1cnJlbnRVc2VyKSxcbiAgICBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCksXG4gICAgbmF2aWdhdGUgPSB1c2VOYXZpZ2F0ZSgpO1xuXG4gIGNvbnN0IFtpc1Byb2ZpbGVCdG5zU2hvdywgc2V0UHJvZmlsZUJ0bnNTaG93XSA9IHVzZVN0YXRlKGZhbHNlKSxcbiAgICB1c2VyUHJvZmlsZVJlZiA9IHVzZVJlZihudWxsKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IGhhbmRsZUNsaWNrT3V0c2lkZSA9IChldmVudCkgPT4ge1xuICAgICAgaWYgKFxuICAgICAgICB1c2VyUHJvZmlsZVJlZi5jdXJyZW50ICYmXG4gICAgICAgICF1c2VyUHJvZmlsZVJlZi5jdXJyZW50LmNvbnRhaW5zKGV2ZW50LnRhcmdldClcbiAgICAgICkge1xuICAgICAgICBzZXRQcm9maWxlQnRuc1Nob3coZmFsc2UpO1xuICAgICAgfVxuICAgIH07XG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBoYW5kbGVDbGlja091dHNpZGUsIHRydWUpO1xuICAgIHJldHVybiAoKSA9PiB7XG4gICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIGhhbmRsZUNsaWNrT3V0c2lkZSwgdHJ1ZSk7XG4gICAgfTtcbiAgfSwgW2lzUHJvZmlsZUJ0bnNTaG93XSk7XG5cbiAgY29uc3Qgc2hvd0V4aXRCdG4gPSAoKSA9PiB7XG4gICAgc2V0UHJvZmlsZUJ0bnNTaG93KCFpc1Byb2ZpbGVCdG5zU2hvdyk7XG4gIH07XG5cbiAgY29uc3QgZ29Ub1Byb2ZpbGUgPSAoZSkgPT4ge1xuICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgc2V0UHJvZmlsZUJ0bnNTaG93KGZhbHNlKTtcbiAgICBuYXZpZ2F0ZSgncGhvdG9zJyk7XG4gIH07XG5cbiAgY29uc3QgZ29PdXQgPSAoKSA9PiB7XG4gICAgZGlzcGF0Y2gobG9nb3V0KCkpO1xuICAgIG5hdmlnYXRlKCcvJyk7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnVzZXJQcm9maWxlfSByZWY9e3VzZXJQcm9maWxlUmVmfT5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMudXNlckJhc2VJbmZvfT5cbiAgICAgICAgPHNwYW4+e3VzZXIuZmlyc3RfbmFtZX08L3NwYW4+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMucHJvZmlsZUltYWdlfT5cbiAgICAgICAgICA8aW1nXG4gICAgICAgICAgICBzcmM9e3VzZXIucHJvZmlsZV9pbWFnZT8uc21hbGx9XG4gICAgICAgICAgICBhbHQ9XCJ1c2VyIHBob3RvXCJcbiAgICAgICAgICAgIG9uQ2xpY2s9e3Nob3dFeGl0QnRufVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG5cbiAgICAgIHtpc1Byb2ZpbGVCdG5zU2hvdyAmJiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMucHJvZmlsZUJ0bnN9PlxuICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMucHJvZmlsZUJ0biArICcgJyArICdidG4tcmVzZXQnfVxuICAgICAgICAgICAgb25DbGljaz17Z29Ub1Byb2ZpbGV9XG4gICAgICAgICAgPlxuICAgICAgICAgICAg0J/RgNC+0YTQuNC70YxcbiAgICAgICAgICA8L2J1dHRvbj5cblxuICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMubG9nb3V0QnRuICsgJyAnICsgJ2J0bi1yZXNldCd9XG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBnb091dCgpfVxuICAgICAgICAgID5cbiAgICAgICAgICAgINCS0YvQudGC0Lh7JyAnfVxuICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICl9XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBQcm9maWxlO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9zcGlubmVyLm0uY3NzJztcblxuY29uc3QgU3Bpbm5lciA9ICgpID0+IHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImxvYWRlcldyYXBwZXJcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubG9hZGVyICsgJyAnICsgc3R5bGVzLmxvYWRlcjJ9PlxuICAgICAgICA8c3ZnIGNsYXNzTmFtZT17c3R5bGVzLmxvYWRlclN0YXJ9IHZlcnNpb249XCIxLjFcIj5cbiAgICAgICAgICA8cG9seWdvblxuICAgICAgICAgICAgcG9pbnRzPVwiMjkuOCAwLjMgMjIuOCAyMS44IDAgMjEuOCAxOC41IDM1LjIgMTEuNSA1Ni43IDI5LjggNDMuNCA0OC4yIDU2LjcgNDEuMiAzNS4xIDU5LjYgMjEuOCAzNi44IDIxLjggXCJcbiAgICAgICAgICAgIGZpbGw9XCIjNjYyZDkxXCJcbiAgICAgICAgICAvPlxuICAgICAgICA8L3N2Zz5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5sb2FkZXJDaXJjbGVzfS8+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFNwaW5uZXI7XG4iLCJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBwcmVsb2FkQXNCbG9iKHVybCkge1xuICBpZiAoIXVybCkge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xuICAgICAgcmVzb2x2ZSgnJyk7XG4gICAgfSk7XG4gIH1cblxuICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKHVybCk7XG5cbiAgY29uc3QgYmxvYiA9IGF3YWl0IHJlc3BvbnNlLmJsb2IoKTtcblxuICBjb25zdCByZWFkZXIgPSBuZXcgRmlsZVJlYWRlcigpO1xuXG4gIHJlYWRlci5yZWFkQXNEYXRhVVJMKGJsb2IpO1xuXG4gIGNvbnN0IHByb21pc2UgPSBuZXcgUHJvbWlzZShcbiAgICAocmVzb2x2ZSkgPT5cbiAgICAgIChyZWFkZXIub25sb2FkID0gKCkgPT4ge1xuICAgICAgICByZXNvbHZlKHJlYWRlci5yZXN1bHQpO1xuICAgICAgfSksXG4gICk7XG5cbiAgcmV0dXJuIHByb21pc2U7XG59XG5cblxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7TmF2aWdhdGV9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nXG5cbmNvbnN0IFByaXZhdGVBdXRoID0gKHtjaGlsZHJlbiwgaXNBdXRofSkgPT4ge1xuXG4gIGlmICghaXNBdXRoKSB7XG4gICAgcmV0dXJuICg8TmF2aWdhdGUgdG89XCIvXCIvPilcbiAgfVxuICByZXR1cm4gY2hpbGRyZW5cbn07XG5cbmV4cG9ydCB7UHJpdmF0ZUF1dGh9O1xuIiwiaW1wb3J0IEFwcCBmcm9tICcuL2FwcCc7XG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5cbmltcG9ydCB7cmVuZGVyfSBmcm9tICdyZWFjdC1kb20nO1xuaW1wb3J0IHtIYXNoUm91dGVyfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcbmltcG9ydCB7UHJvdmlkZXJ9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCB7c3RvcmV9IGZyb20gJy4vcmVkdXgvcmVkdWNlcnMnO1xuXG5yZW5kZXIoPFByb3ZpZGVyIHN0b3JlPXtzdG9yZX0+XG4gICAgICAgIDxIYXNoUm91dGVyID5cbiAgICAgICAgICAgIDxBcHAvPlxuICAgICAgICA8L0hhc2hSb3V0ZXI+XG4gIDwvUHJvdmlkZXI+LCAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Jvb3QnKVxuKVxuXG5jb25zdCBkZXZNb2RlID0gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdkZXZlbG9wbWVudCc7XG5pZiAoZGV2TW9kZSAmJiBtb2R1bGUgJiYgbW9kdWxlLmhvdCkge1xuICBtb2R1bGUuaG90LmFjY2VwdCgpO1xufVxuXG4iLCJpbXBvcnQgUmVhY3QsIHt1c2VFZmZlY3R9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9tYWluUGFnZS5tLmNzcyc7XG5pbXBvcnQgU3dpcGVyQ29yZSwge0ExMXksIE5hdmlnYXRpb24sIFBhZ2luYXRpb259IGZyb20gJ3N3aXBlcic7XG5pbXBvcnQge1N3aXBlciwgU3dpcGVyU2xpZGV9IGZyb20gJ3N3aXBlci9yZWFjdCc7XG5pbXBvcnQgJ0BpbXBvcnQvc3dpcGVyL3N3aXBlci1idW5kbGUubWluLmNzcyc7XG5pbXBvcnQge3VzZURpc3BhdGNoLCB1c2VTZWxlY3Rvcn0gZnJvbSAncmVhY3QtcmVkdXgnO1xuaW1wb3J0IHtMaW5rfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcbmltcG9ydCB7dW5zcGxhc2hBdXRoTGlua30gZnJvbSAnQC9yZWR1eC9hY3Rpb25zL2F1dGgnO1xuaW1wb3J0IFNwaW5uZXIgZnJvbSAnQGNvbXBvbmVudHMvU3Bpbm5lci9TcGlubmVyJztcbmltcG9ydCB7Z2V0TG9jYXRpb259IGZyb20gJ0AvcmVkdXgvYWN0aW9ucy9tYWluJztcbmltcG9ydCB7Z2V0UGhvdG9zfSBmcm9tICdAL3JlZHV4L2FjdGlvbnMvcGhvdG9zJztcblxuU3dpcGVyQ29yZS51c2UoW1BhZ2luYXRpb24sIE5hdmlnYXRpb24sIEExMXldKTtcblxuY29uc3QgTWFpblBhZ2UgPSAoKSA9PiB7XG4gIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKVxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGRpc3BhdGNoKGdldExvY2F0aW9uKCkpO1xuICAgIGRpc3BhdGNoKGdldFBob3RvcygxLCB0cnVlKSk7XG4gIH0sIFtdKVxuXG4gIGNvbnN0IHBob3RvcyA9IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUucGhvdG9zLmNvbnRlbnQuc2xpY2UoMCwgOSkpLFxuICAgIGlzQXV0aCA9IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUuYXV0aC5pc0F1dGgpLFxuICAgIGlzTG9hZGluZyA9IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUucGhvdG9zLmlzTG9hZGluZyk7XG5cbiAgcmV0dXJuICg8c2VjdGlvbj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMucGhvdG9zQ29udGFpbmVyfSBzdHlsZT17e2hlaWdodDogaXNMb2FkaW5nID8gJzEwMHB4JyA6ICc1NDRweCd9fT5cblxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLm1haW5Db250YWluZXJ9PlxuICAgICAgICAgIHtpc0xvYWRpbmcgPyA8U3Bpbm5lci8+IDpcbiAgICAgICAgICAgIDxTd2lwZXJcbiAgICAgICAgICAgICAgcGFnaW5hdGlvbj17e1xuICAgICAgICAgICAgICAgIGNsaWNrYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICBkeW5hbWljQnVsbGV0czogdHJ1ZSxcbiAgICAgICAgICAgICAgICBkeW5hbWljTWFpbkJ1bGxldHM6IDQsXG4gICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgIHNwYWNlQmV0d2Vlbj17MzB9XG4gICAgICAgICAgICAgIG5hdmlnYXRpb249e3RydWV9XG4gICAgICAgICAgICAgIHNsaWRlc1BlclZpZXc9ezF9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIHtwaG90b3MubWFwKChlbCkgPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiAoPFN3aXBlclNsaWRlIGtleT17ZWwuaWR9PlxuICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17ZWwudXJscy5mdWxsfSBhbHQ9XCJcIi8+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17c3R5bGVzLm1haW5UaXRsZX0+XG4gICAgICAgICAgICAgICAgICAgINCf0YDQuNC70L7QttC10L3QuNC1INC00LvRjyZuYnNwO9C/0YDQvtGB0LzQvtGC0YDQsCDRhNC+0YLQvtCz0YDQsNGE0LjQuVxuICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgPC9Td2lwZXJTbGlkZT5cbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgIDwvU3dpcGVyPlxuICAgICAgICAgIH1cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgIDwvZGl2PlxuXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmFib3V0Q29udGFpbmVyfT5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmFib3V0fT5cbiAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9e3N0eWxlcy5hYm91dFRpdGxlfT5PINC90LDRgTwvaDI+XG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e3N0eWxlcy5hYm91dFRpdGxlVGV4dH0+XG4gICAgICAgICAgICAgINCf0YDQuNC70L7QttC10L3QuNC1INC00LvRjyDQv9GA0L7RgdC80L7RgtGA0LAg0YTQvtGC0L7Qs9GA0LDRhNC40LlcbiAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZG9zbXRofT5cbiAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9e3N0eWxlcy5kb3NtdGhUaXRsZX0+0JIg0Y3RgtC+0Lwg0L/RgNC40LvQvtC20LXQvdC40Lgg0LLRiyDQvNC+0LbQtdGC0LU6PC9oMz5cbiAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9e3N0eWxlcy5kb3NtdGhMaXN0fT5cbiAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT17c3R5bGVzLmRvc210aEl0ZW19PlxuICAgICAgICAgICAgICAgINCf0L7RgdC80L7RgtGA0LXRgtGMINGE0L7RgtC+0LPRgNCw0YTQuNC4INGBINGB0LDQudGC0LB7JyAnfVxuICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJodHRwczovL3Vuc3BsYXNoLmNvbS9cIiBjbGFzc05hbWU9e3N0eWxlcy51bnNwbGFzaExpbmt9PlxuICAgICAgICAgICAgICAgICAgdW5zcGxhc2guY29tXG4gICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgIC5cbiAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT17c3R5bGVzLmRvc210aEl0ZW19PlxuICAgICAgICAgICAgICAgINCf0L7RgdC80L7RgtGA0LXRgtGMINC40LzRjyDQsNCy0YLQvtGA0LAg0Lgg0LTQsNGC0YMg0L/Rg9Cx0LvQuNC60LDRhtC40LguXG4gICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9e3N0eWxlcy5kb3NtdGhJdGVtfT5cbiAgICAgICAgICAgICAgICDQn9C+0YHRgtCw0LLQuNGC0Ywg0LvQsNC50Log0L/QvtC90YDQsNCy0LjQstGI0LXQudGB0Y8g0YTQvtGC0L7Qs9GA0LDRhNC40LguXG4gICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICA8L3VsPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5sb29rUGhvdG99PlxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17c3R5bGVzLmxvb2tQaG90b1RleHR9PlxuICAgICAgICAgICAg0KfRgtC+0LHRiyDQv9GA0L7RgdC80L7RgtGA0LXRgtGMINC70LXQvdGC0YMg0YTQvtGC0L7Qs9GA0LDRhNC40Lkg0L3QsNC20LzQuNGC0LUgwqvQodC80L7RgtGA0LXRgtGMINC70LXQvdGC0YPCu1xuICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICB7aXNBdXRoID8gKFxuICAgICAgICAgICAgPExpbmsgdG89XCJwaG90b3NcIiBjbGFzc05hbWU9e3N0eWxlcy5sb29rUGhvdG9CdXR0b259PlxuICAgICAgICAgICAgICDQodC80L7RgtGA0LXRgtGMINC70LXQvdGC0YNcbiAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICApIDogKFxuICAgICAgICAgICAgPGEgaHJlZj17dW5zcGxhc2hBdXRoTGlua30gY2xhc3NOYW1lPXtzdHlsZXMubG9va1Bob3RvQnV0dG9ufT5cbiAgICAgICAgICAgICAg0KHQvNC+0YLRgNC10YLRjCDQu9C10L3RgtGDXG4gICAgICAgICAgICA8L2E+XG4gICAgICAgICAgKX1cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L3NlY3Rpb24+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IE1haW5QYWdlO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuY29uc3QgTm90Rm91bmQgPSAoKSA9PiB7XG4gIHJldHVybiAoPGRpdj5cbiAgICAgIHBhZ2Ugbm90IGZvdW5kXG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBOb3RGb3VuZDsiLCJpbXBvcnQge3NldFVzZXJ9IGZyb20gJy4uL3JlZHVjZXJzL2F1dGgnXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xuXG5jb25zdCBwcm9kdWN0aW9uID0gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdwcm9kdWN0aW9uJztcblxubGV0IG9hdXRoVXJsID0gJ2h0dHBzOi8vdW5zcGxhc2guY29tL29hdXRoL3Rva2VuJyxcbiAgY2xpZW50X2lkID0gJ2F2R1lMeTh4ai1SOEkzdGlSU2tlVlp2UlYwUjM5V3MzNG1ab2QzcW4zWm8nLFxuICBjbGllbnRfc2VjcmV0ID0gJzVtdlJyYlhWWVFEQ3BhN2ZZY2xndXhXZ0Z5cFZwejVCeUt4STRDTUFIb0EnLFxuICByZWRpcmVjdF91cmkgPSBwcm9kdWN0aW9uID8gJ2h0dHBzOi8vcGF1a2FzaGEuZ2l0aHViLmlvL2NvdXJzZS1qcy8nIDogJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMS8nLFxuICBncmFudF90eXBlID0gJ2F1dGhvcml6YXRpb25fY29kZScsXG4gIHNjb3BlID0gJ3B1YmxpYytyZWFkX3VzZXIrd3JpdGVfdXNlcityZWFkX3Bob3Rvcyt3cml0ZV9waG90b3Mrd3JpdGVfbGlrZXMrd3JpdGVfZm9sbG93ZXJzK3JlYWRfY29sbGVjdGlvbnMrd3JpdGVfY29sbGVjdGlvbnMnLFxuICByZXNwb25zZV90eXBlID0gJ2NvZGUnO1xuZXhwb3J0IGNvbnN0IHVuc3BsYXNoQXV0aExpbmsgPSBgaHR0cHM6Ly91bnNwbGFzaC5jb20vb2F1dGgvYXV0aG9yaXplLz9jbGllbnRfaWQ9JHtjbGllbnRfaWR9JnJlZGlyZWN0X3VyaT0ke3JlZGlyZWN0X3VyaX0mcmVzcG9uc2VfdHlwZT0ke3Jlc3BvbnNlX3R5cGV9JnNjb3BlPSR7c2NvcGV9YFxuXG5cbmV4cG9ydCBjb25zdCBsb2dpbiA9ICgpID0+IHtcbiAgbGV0IGFjY2Vzc1Rva2VuID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2FjY2Vzc1Rva2VuJylcbiAgcmV0dXJuIGFzeW5jIGRpc3BhdGNoID0+IHtcbiAgICBpZiAoYWNjZXNzVG9rZW4pIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIHJldHVybiBhd2FpdCBheGlvcy5nZXQoJ2h0dHBzOi8vYXBpLnVuc3BsYXNoLmNvbS9tZScsIHtcbiAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICBBdXRob3JpemF0aW9uOiBgQmVhcmVyICR7YWNjZXNzVG9rZW59YFxuICAgICAgICAgIH1cbiAgICAgICAgfSkudGhlbihyZXMgPT4ge1xuICAgICAgICAgIGRpc3BhdGNoKHNldFVzZXIocmVzLmRhdGEpKVxuICAgICAgICB9KVxuXG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKCdhY2Nlc3NUb2tlbicpXG4gICAgICAgIGNvbnNvbGUubG9nKGUpXG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cblxuZXhwb3J0IGNvbnN0IGF1dGggPSAoY29kZVNlYXJjaFBhcmFtLCBjYmFjaykgPT4ge1xuICBsZXQgYWNjZXNzVG9rZW4gPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnYWNjZXNzVG9rZW4nKVxuICByZXR1cm4gYXN5bmMgZGlzcGF0Y2ggPT4ge1xuICAgIGlmIChjb2RlU2VhcmNoUGFyYW0pIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIHJldHVybiBhd2FpdCBheGlvcy5wb3N0KG9hdXRoVXJsLCBudWxsLCB7XG4gICAgICAgICAgICBwYXJhbXM6IHtcbiAgICAgICAgICAgICAgY2xpZW50X2lkOiBjbGllbnRfaWQsXG4gICAgICAgICAgICAgIGNsaWVudF9zZWNyZXQ6IGNsaWVudF9zZWNyZXQsXG4gICAgICAgICAgICAgIHJlZGlyZWN0X3VyaTogcmVkaXJlY3RfdXJpLFxuICAgICAgICAgICAgICBjb2RlOiBjb2RlU2VhcmNoUGFyYW0sXG4gICAgICAgICAgICAgIGdyYW50X3R5cGU6IGdyYW50X3R5cGVcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICkudGhlbihyZXNwb25zZSA9PiB7XG4gICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2FjY2Vzc1Rva2VuJywgcmVzcG9uc2UuZGF0YS5hY2Nlc3NfdG9rZW4pXG4gICAgICAgICAgcmV0dXJuIGF4aW9zLmdldCgnaHR0cHM6Ly9hcGkudW5zcGxhc2guY29tL21lJywge1xuICAgICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgICBBdXRob3JpemF0aW9uOiBgQmVhcmVyICR7bG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2FjY2Vzc1Rva2VuJyl9YFxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pLnRoZW4ocmVzcG9uc2UgPT4ge1xuICAgICAgICAgICAgZGlzcGF0Y2goc2V0VXNlcihyZXNwb25zZS5kYXRhKSlcbiAgICAgICAgICAgIGNiYWNrKClcbiAgICAgICAgICB9KVxuICAgICAgICB9KVxuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbSgnYWNjZXNzVG9rZW4nKVxuICAgICAgICBjb25zb2xlLmxvZyhlKVxuICAgICAgfVxuICAgIH0gZWxzZSBpZiAoYWNjZXNzVG9rZW4pIHtcbiAgICAgIGRpc3BhdGNoKGxvZ2luKCkpXG4gICAgfVxuICB9XG59XG5cblxuXG5cblxuIiwiaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcbmltcG9ydCB7c2V0TG9jYXRpb259IGZyb20gJy4uL3JlZHVjZXJzL21haW4nO1xuXG5leHBvcnQgY29uc3QgZ2V0TG9jYXRpb24gPSAoKSA9PiB7XG4gIGxldCB1cmwgPSAnaHR0cHM6Ly9pcGluZm8uaW8/dG9rZW49ZTJmNmNlMjIyMGY1ZTknO1xuICByZXR1cm4gYXN5bmMgKGRpc3BhdGNoKSA9PiB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGF4aW9zLmdldCh1cmwpO1xuICAgICAgZGlzcGF0Y2goc2V0TG9jYXRpb24ocmVzLmRhdGEuY2l0eSkpO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIGNvbnNvbGUubG9nKGUpO1xuICAgIH1cbiAgfTtcbn07XG4iLCJpbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xuaW1wb3J0IHtzZXRDdXJyZW50UGhvdG8sIHNldE9yRGVsZXRlTGlrZSwgc2V0UGhvdG9zfSBmcm9tICcuLi9yZWR1Y2Vycy9waG90b3MnO1xuaW1wb3J0IHtzZXRJc0xvYWRpbmd9IGZyb20gJy4uL3JlZHVjZXJzL2F1dGgnO1xuaW1wb3J0IHtwcmVsb2FkQXNCbG9ifSBmcm9tICdAL2hlbHBlcnMvcHJlbG9hZEFzQmxvYic7XG5cbmV4cG9ydCBjb25zdCBzZXRPckRlbGV0ZUxpa2VCeVVzZXIgPSAocGhvdG8pID0+IHtcbiAgbGV0IGFjY2Vzc1Rva2VuID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2FjY2Vzc1Rva2VuJyk7XG4gIHJldHVybiBhc3luYyBkaXNwYXRjaCA9PiB7XG4gICAgdHJ5IHtcbiAgICAgIGlmIChwaG90by5saWtlZF9ieV91c2VyID09IGZhbHNlKSB7XG4gICAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGF4aW9zLnBvc3QoYGh0dHBzOi8vYXBpLnVuc3BsYXNoLmNvbS9waG90b3MvJHtwaG90by5pZH0vbGlrZS9gLCBudWxsLCB7XG4gICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgQXV0aG9yaXphdGlvbjogYEJlYXJlciAke2FjY2Vzc1Rva2VufWBcbiAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICAgIGRpc3BhdGNoKHNldE9yRGVsZXRlTGlrZShyZXMuZGF0YS5waG90bykpXG4gICAgICAgIGRpc3BhdGNoKHNldEN1cnJlbnRQaG90byhyZXMuZGF0YS5waG90bykpXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zdCByZXMgPSBhd2FpdCBheGlvcy5kZWxldGUoYGh0dHBzOi8vYXBpLnVuc3BsYXNoLmNvbS9waG90b3MvJHtwaG90by5pZH0vbGlrZS9gLCB7XG4gICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgQXV0aG9yaXphdGlvbjogYEJlYXJlciAke2FjY2Vzc1Rva2VufWBcbiAgICAgICAgICB9XG4gICAgICAgIH0pXG5cbiAgICAgICAgZGlzcGF0Y2goc2V0T3JEZWxldGVMaWtlKHJlcy5kYXRhLnBob3RvKSk7XG4gICAgICAgIGRpc3BhdGNoKHNldEN1cnJlbnRQaG90byhyZXMuZGF0YS5waG90bykpO1xuICAgICAgfVxuXG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgY29uc29sZS5sb2coZSk7XG4gICAgfVxuICB9XG59XG5cblxuZXhwb3J0IGNvbnN0IGdldEN1cnJlbnRQaG90byA9IChpZCkgPT4ge1xuICBsZXQgYWNjZXNzVG9rZW4gPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnYWNjZXNzVG9rZW4nKVxuICByZXR1cm4gYXN5bmMgZGlzcGF0Y2ggPT4ge1xuICAgIHRyeSB7XG4gICAgICByZXR1cm4gYXdhaXQgYXhpb3MuZ2V0KGBodHRwczovL2FwaS51bnNwbGFzaC5jb20vcGhvdG9zLyR7aWR9YCwge1xuICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgQXV0aG9yaXphdGlvbjogYEJlYXJlciAke2FjY2Vzc1Rva2VufWBcbiAgICAgICAgfVxuICAgICAgfSkudGhlbihhc3luYyAocmVzKSA9PiB7XG4gICAgICAgIGxldCBjdXJyZW50UGhvdG8gPSByZXMuZGF0YVxuICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBwcmVsb2FkQXNCbG9iKGN1cnJlbnRQaG90by51cmxzLmZ1bGwpO1xuICAgICAgICBjdXJyZW50UGhvdG8udXJscy5mdWxsID0gcmVzdWx0O1xuICAgICAgICByZXR1cm4gZGlzcGF0Y2goc2V0Q3VycmVudFBob3RvKGN1cnJlbnRQaG90bykpXG4gICAgICB9KVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIGNvbnNvbGUubG9nKGUpO1xuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgY29uc3QgZ2V0UGhvdG9zID0gKGN1cnJlbnRQYWdlLCBpc0xvYWRpbmcpID0+IHtcbiAgcmV0dXJuIGFzeW5jIGRpc3BhdGNoID0+IHtcbiAgICBpZiAoaXNMb2FkaW5nKSB7XG4gICAgICBheGlvcy5nZXQoYGh0dHBzOi8vYXBpLnVuc3BsYXNoLmNvbS9waG90b3MvP3BhZ2U9JHtjdXJyZW50UGFnZX0mcGVyX3BhZ2U9MTBgLCB7XG4gICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICBBdXRob3JpemF0aW9uOiBgQ2xpZW50LUlEIGF2R1lMeTh4ai1SOEkzdGlSU2tlVlp2UlYwUjM5V3MzNG1ab2QzcW4zWm9gLFxuICAgICAgICB9XG4gICAgICB9KS50aGVuKGFzeW5jIChyZXMpID0+IHtcbiAgICAgICAgbGV0IHBob3RvcyA9IHJlcy5kYXRhO1xuXG4gICAgICAgIGNvbnN0IGFzeW5jQXJyYXkgPSBwaG90b3MubWFwKChlbCkgPT4gYXN5bmMgKCkgPT4ge1xuICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHByZWxvYWRBc0Jsb2IoZWwudXJscy5mdWxsKTtcbiAgICAgICAgICBjb25zdCBpbWFnZSA9IG5ldyBJbWFnZSgpO1xuICAgICAgICAgIGltYWdlLnNyYyA9IHJlc3VsdDtcbiAgICAgICAgICByZXR1cm4gaW1hZ2Uuc3JjO1xuICAgICAgICB9KTtcblxuICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBQcm9taXNlLmFsbChhc3luY0FycmF5Lm1hcCgoZm4pID0+IGZuKCkpKTtcblxuICAgICAgICBwaG90b3MgPSBwaG90b3MubWFwKChlbCwgaW5kZXgpID0+IHtcbiAgICAgICAgICBlbC51cmxzLnNtYWxsID0gcmVzdWx0W2luZGV4XTtcbiAgICAgICAgICByZXR1cm4gZWxcbiAgICAgICAgfSlcblxuICAgICAgICBjdXJyZW50UGFnZSArPSAxXG4gICAgICAgIGRpc3BhdGNoKHNldFBob3RvcyhwaG90b3MsIGN1cnJlbnRQYWdlLCByZXMuaGVhZGVyc1sneC10b3RhbCddKSlcblxuICAgICAgfSkuY2F0Y2goZSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKGUpXG4gICAgICB9KS5maW5hbGx5KCgpID0+IHtcbiAgICAgICAgc2V0SXNMb2FkaW5nKGZhbHNlKVxuICAgICAgfSlcbiAgICB9XG4gIH1cbn1cblxuIiwiY29uc3QgTE9HSU4gPSAnTE9HSU4nLFxuICBMT0dPVVQgPSAnTE9HT1VUJyxcbiAgSVNfTE9BRElORyA9ICdJU19MT0FESU5HJztcblxuY29uc3QgZGVmYXVsdFN0YXRlID0ge1xuICBjdXJyZW50VXNlcjogbnVsbCxcbiAgaXNBdXRoOiBmYWxzZSxcbiAgaXNMb2FkaW5nOiB0cnVlXG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGF1dGgoc3RhdGUgPSBkZWZhdWx0U3RhdGUsIGFjdGlvbikge1xuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gICAgY2FzZSBMT0dJTjoge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIGN1cnJlbnRVc2VyOiBhY3Rpb24ucGF5bG9hZCxcbiAgICAgICAgaXNBdXRoOiB0cnVlLFxuICAgICAgfVxuICAgIH1cblxuICAgIGNhc2UgTE9HT1VUOlxuICAgICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oJ2FjY2Vzc1Rva2VuJylcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBjdXJyZW50VXNlcjoge30sXG4gICAgICAgIGlzQXV0aDogZmFsc2UsXG4gICAgICAgIGlzTG9hZGluZzogZmFsc2VcbiAgICAgIH1cblxuICAgIGNhc2UgSVNfTE9BRElORzpcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBpc0xvYWRpbmc6IGFjdGlvbi5wYXlsb2FkXG4gICAgICB9XG5cbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIHN0YXRlXG4gIH1cbn1cblxuZXhwb3J0IGNvbnN0IHNldFVzZXIgPSB1c2VyID0+ICh7dHlwZTogTE9HSU4sIHBheWxvYWQ6IHVzZXJ9KTtcbmV4cG9ydCBjb25zdCBsb2dvdXQgPSAoKSA9PiAoe3R5cGU6IExPR09VVH0pO1xuZXhwb3J0IGNvbnN0IHNldElzTG9hZGluZyA9IChib29sKSA9PiAoe3R5cGU6IElTX0xPQURJTkcsIHBheWxvYWQ6IGJvb2x9KTtcblxuXG5cbiIsImltcG9ydCB7YXBwbHlNaWRkbGV3YXJlLCBjb21iaW5lUmVkdWNlcnMsIGNyZWF0ZVN0b3JlfSBmcm9tICdyZWR1eCc7XG5pbXBvcnQgYXV0aCBmcm9tICcuL2F1dGgnO1xuaW1wb3J0IHtjb21wb3NlV2l0aERldlRvb2xzfSBmcm9tICdAcmVkdXgtZGV2dG9vbHMvZXh0ZW5zaW9uJztcbmltcG9ydCB0aHVuayBmcm9tICdyZWR1eC10aHVuayc7XG5pbXBvcnQgbWFpbiBmcm9tICcuL21haW4nO1xuaW1wb3J0IHBob3RvcyBmcm9tICcuL3Bob3Rvcyc7XG5cbmNvbnN0IHJvb3RSZWR1Y2VyID0gY29tYmluZVJlZHVjZXJzKHtcbiAgYXV0aCxcbiAgbWFpbixcbiAgcGhvdG9zXG59KVxuXG5leHBvcnQgY29uc3Qgc3RvcmUgPSBjcmVhdGVTdG9yZShyb290UmVkdWNlciwgY29tcG9zZVdpdGhEZXZUb29scyhhcHBseU1pZGRsZXdhcmUodGh1bmspKSlcbiIsImNvbnN0IEdFVF9QSE9UT1MgPSAnR0VUX1BIT1RPUycsXG4gIEdFVF9MT0NBVElPTiA9ICdHRVRfTE9DQVRJT04nLFxuICBJU19MT0FESU5HID0gJ0lTX0xPQURJTkcnXG5cbmNvbnN0IGRlZmF1bHRTdGF0ZSA9IHtcbiAgbG9jYXRpb246ICcnLFxuICBpc0xvYWRpbmc6IHRydWUsXG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIG1haW4oc3RhdGUgPSBkZWZhdWx0U3RhdGUsIGFjdGlvbikge1xuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gICAgY2FzZSBHRVRfTE9DQVRJT046XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgbG9jYXRpb246IGFjdGlvbi5wYXlsb2FkXG4gICAgICB9XG4gICAgY2FzZSBJU19MT0FESU5HOlxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIGlzTG9hZGluZzogYWN0aW9uLnBheWxvYWRcbiAgICAgIH1cbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIHN0YXRlXG4gIH1cbn1cblxuZXhwb3J0IGNvbnN0IHNldExvY2F0aW9uID0gbG9jYXRpb24gPT4gKHt0eXBlOiBHRVRfTE9DQVRJT04sIHBheWxvYWQ6IGxvY2F0aW9ufSlcbmV4cG9ydCBjb25zdCBzZXRJc0xvYWRpbmcgPSAoYm9vbCkgPT4gKHt0eXBlOiBJU19MT0FESU5HLCBwYXlsb2FkOiBib29sfSlcbiIsImNvbnN0IFNFVF9DT05URU5UID0gJ0dFVF9DT05URU5UJyxcbiAgU0VUX09SX0RFTEVURV9MSUtFID0gJ1NFVF9PUl9ERUxFVEVfTElLRScsXG4gIFNFVF9DVVJSRU5UX1BIT1RPID0gJ1NFVF9DVVJSRU5UX1BIT1RPJyxcbiAgSVNfTE9BRElORyA9ICdJU19MT0FESU5HJztcblxuY29uc3QgZGVmYXVsdFN0YXRlID0ge1xuICBjb250ZW50OiBbXSxcbiAgcGhvdG9Ub3RhbENvdW50OiAwLFxuICBzZXRMaWtlQ2xhc3NOYW1lOiAnJyxcbiAgY3VycmVudFBob3RvOiAnJyxcbiAgY3VycmVudFBhZ2U6IDEsXG4gIGlzTG9hZGluZzogdHJ1ZVxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBwaG90b3Moc3RhdGUgPSBkZWZhdWx0U3RhdGUsIGFjdGlvbikge1xuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gICAgY2FzZSBTRVRfQ09OVEVOVDpcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBjb250ZW50OiBbLi4uc3RhdGUuY29udGVudCwgLi4uYWN0aW9uLnBheWxvYWQuY29udGVudF0ucmVkdWNlKChwcmV2RWwsIG5leHRFbCkgPT4ge1xuICAgICAgICAgIGlmICghcHJldkVsLmZpbmQoaXRlbSA9PiBpdGVtLmlkID09PSBuZXh0RWwuaWQpKSB7XG4gICAgICAgICAgICBwcmV2RWwucHVzaChuZXh0RWwpO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gcHJldkVsO1xuICAgICAgICB9LCBbXSksXG4gICAgICAgIGN1cnJlbnRQYWdlOiBhY3Rpb24ucGF5bG9hZC5jdXJyZW50UGFnZSxcbiAgICAgICAgcGhvdG9Ub3RhbENvdW50OiBhY3Rpb24ucGF5bG9hZC5waG90b1RvdGFsQ291bnQsXG4gICAgICAgIGlzTG9hZGluZzogZmFsc2VcbiAgICAgIH1cblxuICAgIGNhc2UgU0VUX09SX0RFTEVURV9MSUtFOlxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIGNvbnRlbnQ6IHN0YXRlLmNvbnRlbnQubWFwKHBob3RvID0+IHtcbiAgICAgICAgICBpZiAocGhvdG8uaWQgPT09IGFjdGlvbi5wYXlsb2FkLmlkKSB7XG4gICAgICAgICAgICByZXR1cm4gYWN0aW9uLnBheWxvYWRcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIHBob3RvXG4gICAgICAgIH0pLFxuICAgICAgICBjdXJyZW50UGhvdG86IGFjdGlvbi5wYXlsb2FkXG4gICAgICB9XG5cbiAgICBjYXNlIElTX0xPQURJTkc6XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgaXNMb2FkaW5nOiBhY3Rpb24ucGF5bG9hZFxuICAgICAgfVxuXG4gICAgY2FzZSBTRVRfQ1VSUkVOVF9QSE9UTzpcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBjdXJyZW50UGhvdG86IGFjdGlvbi5wYXlsb2FkXG4gICAgICB9XG5cbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIHN0YXRlXG4gIH1cbn1cblxuXG5leHBvcnQgY29uc3Qgc2V0UGhvdG9zID0gKGNvbnRlbnQsIGN1cnJlbnRQYWdlLCBwaG90b1RvdGFsQ291bnQpID0+ICh7XG4gIHR5cGU6IFNFVF9DT05URU5ULFxuICBwYXlsb2FkOiB7Y29udGVudCwgY3VycmVudFBhZ2UsIHBob3RvVG90YWxDb3VudH1cbn0pXG5cbmV4cG9ydCBjb25zdCBzZXRPckRlbGV0ZUxpa2UgPSAocGhvdG8pID0+ICh7dHlwZTogU0VUX09SX0RFTEVURV9MSUtFLCBwYXlsb2FkOiBwaG90b30pO1xuZXhwb3J0IGNvbnN0IHNldEN1cnJlbnRQaG90byA9IHBob3RvID0+ICh7dHlwZTogU0VUX0NVUlJFTlRfUEhPVE8sIHBheWxvYWQ6IHBob3RvfSk7XG5cblxuXG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiYXNzZXRzL2ZvbnRzL01vbnRzZXJyYXQtUmVndWxhci53b2ZmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18gPSBuZXcgVVJMKFwiLi9hc3NldHMvaW1hZ2VzL3N2Zy9yaWdodC1jaGV2cm9uLnN2Z1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiAnTW9udHNlcnJhdCcsIHNhbnMtc2VyaWY7XFxuICBzcmM6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gKyBcIikgZm9ybWF0KCd3b2ZmJyk7XFxuICBmb250LXdlaWdodDogNDAwO1xcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xcbn1cXG5cXG4uY29udGFpbmVyIHtcXG4gIG1heC13aWR0aDogMTQ0MHB4O1xcbiAgbWFyZ2luOiAwIGF1dG87XFxuICBwYWRkaW5nOiAwIDEwMHB4O1xcbn1cXG5cXG46cm9vdCB7XFxuICAtLWNvbG9yLXdpbGRzYW5kOiAjZjRmNGY0O1xcbiAgLS1jb2xvci13aGl0ZTogI2ZmZjtcXG4gIC0tY29sb3ItYmxhY2s6ICMwMDA7XFxuICAtLWNvbG9yLWVtaW5lbmNlOiAjNjYyZDkxO1xcbiAgLS1jb2xvci1ldWNhbHlwdHVzOiAjNGZkMWM1O1xcbiAgLS1jb2xvci1ncmF5OiAjODU4NTg1O1xcbiAgLS1jb2xvci10dW5kb3JhOiAjNDU0NTQ1O1xcbiAgLS1jb2xvci1icmlnaHQtdHVycXVvaXNlOiAjMDBmZmNiO1xcbiAgLS1jb2xvci1iYWNrZ3JvdW5kOiAjNDU0NTQ1NTI7XFxuICAtLWNvbG9yLW1haW4tdGl0bGU6ICMxMWQ5YjA7XFxuICAtLWNvbG9yLWJhY2tnci1pbWc6IHJnYmEoNDgsIDQ1LCA0NSwgMC41OSk7XFxuICAtLWNvbG9yLXByb2ZpbGUtYnRucy1iYWNrZ3JvdW5kOiAjNjI1NjU2O1xcbiAgLS1jb2xvci1saWtlZC1ieS11c2VyOiAjOGY0Y2MxO1xcbiAgLS1jb2xvci1kYXJrLWJnYzogIzFlMWExYTU5O1xcbn1cXG5cXG5odG1sIHtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbiosXFxuKjo6YmVmb3JlLFxcbio6OmFmdGVyIHtcXG4gIGJveC1zaXppbmc6IGluaGVyaXQ7XFxufVxcblxcbmJvZHkge1xcbiAgLypvdmVyZmxvdy1hbmNob3I6IG5vbmU7Ki9cXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQnLCBzYW5zLXNlcmlmO1xcbiAgZm9udC13ZWlnaHQ6IDQwMDtcXG4gIGZvbnQtc2l6ZTogMTZweDtcXG4gIGNvbG9yOiB2YXIoLS1jb2xvci1ibGFjayk7XFxufVxcblxcbmltZyB7XFxuICB3aWR0aDogMTAwJTtcXG4gIG9iamVjdC1maXQ6IGNvdmVyO1xcbn1cXG5cXG5hIHtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gIGNvbG9yOiBpbmhlcml0O1xcbn1cXG5cXG51bCB7XFxuICBsaXN0LXN0eWxlOiBub25lO1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG59XFxuXFxuLnZpc3VhbGx5LWhpZGRlbiB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGUgIWltcG9ydGFudDtcXG4gIGNsaXA6IHJlY3QoMXB4IDFweCAxcHggMXB4KTtcXG4gIGNsaXA6IHJlY3QoMXB4LCAxcHgsIDFweCwgMXB4KTtcXG4gIHBhZGRpbmc6IDAgIWltcG9ydGFudDtcXG4gIGJvcmRlcjogMCAhaW1wb3J0YW50O1xcbiAgaGVpZ2h0OiAxcHggIWltcG9ydGFudDtcXG4gIHdpZHRoOiAxcHggIWltcG9ydGFudDtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxufVxcblxcbi5idG4tcmVzZXQge1xcbiAgb3V0bGluZTogbm9uZTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgYm9yZGVyOiBub25lO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uc3dpcGVyLWNvbnRhaW5lciB7XFxuICBoZWlnaHQ6IDU0NHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItYmFja2dyb3VuZCk7XFxufVxcblxcbi5zd2lwZXItcGFnaW5hdGlvbi1idWxsZXQge1xcbiAgd2lkdGg6IDhweDtcXG4gIGhlaWdodDogOHB4O1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgYmFja2dyb3VuZDogIzAwMDtcXG4gIG9wYWNpdHk6IDAuMjtcXG59XFxuXFxuLnN3aXBlci1wYWdpbmF0aW9uLWZyYWN0aW9uLFxcbi5zd2lwZXItcGFnaW5hdGlvbi1jdXN0b20sXFxuLnN3aXBlci1jb250YWluZXItaG9yaXpvbnRhbCA+IC5zd2lwZXItcGFnaW5hdGlvbi1idWxsZXRzIHtcXG4gIGJvdHRvbTogMjVweDtcXG59XFxuXFxuLnN3aXBlci1jb250YWluZXItaG9yaXpvbnRhbCA+IC5zd2lwZXItcGFnaW5hdGlvbi1idWxsZXRzIC5zd2lwZXItcGFnaW5hdGlvbi1idWxsZXQge1xcbiAgbWFyZ2luOiAwIDE1cHg7XFxufVxcblxcbi5zd2lwZXItcGFnaW5hdGlvbi1idWxsZXQge1xcbiAgbWFyZ2luOiAwIDQwcHg7XFxuICB3aWR0aDogNnB4O1xcbiAgaGVpZ2h0OiA2cHg7XFxuICBiYWNrZ3JvdW5kOiB2YXIoLS1jb2xvci13aGl0ZSk7XFxuICBvcGFjaXR5OiAwLjc7XFxufVxcblxcbi5zd2lwZXItcGFnaW5hdGlvbi1idWxsZXQtYWN0aXZlIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLWJsYWNrKTtcXG4gIG9wYWNpdHk6IDE7XFxufVxcblxcblxcbi5zd2lwZXItcGFnaW5hdGlvbi1idWxsZXQtYWN0aXZlOjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXCI7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBsZWZ0OiA1MCU7XFxuICB0b3A6IDUwJTtcXG4gIHotaW5kZXg6IC0xO1xcbiAgYm9yZGVyLXJhZGl1czogMTAwJTtcXG4gIHdpZHRoOiAyMHB4O1xcbiAgaGVpZ2h0OiAyMHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3Itd2hpdGUpO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XFxufVxcblxcbi5zd2lwZXItcGFnaW5hdGlvbi1mcmFjdGlvbixcXG4uc3dpcGVyLXBhZ2luYXRpb24tY3VzdG9tLFxcbi5zd2lwZXItY29udGFpbmVyLWhvcml6b250YWwgPiAuc3dpcGVyLXBhZ2luYXRpb24tYnVsbGV0cyB7XFxuICBib3R0b206IDI1cHg7XFxufVxcblxcbi5zd2lwZXItY29udGFpbmVyLWhvcml6b250YWwgPiAuc3dpcGVyLXBhZ2luYXRpb24tYnVsbGV0cyAuc3dpcGVyLXBhZ2luYXRpb24tYnVsbGV0IHtcXG4gIG1hcmdpbjogMCAxNXB4O1xcbn1cXG5cXG4uc3dpcGVyLXBhZ2luYXRpb24tYnVsbGV0IHtcXG4gIG1hcmdpbjogMCA0MHB4O1xcbiAgd2lkdGg6IDZweDtcXG4gIGhlaWdodDogNnB4O1xcbiAgYmFja2dyb3VuZDogdmFyKC0tY29sb3Itd2hpdGUpO1xcbiAgb3BhY2l0eTogMC43O1xcbn1cXG5cXG5cXG4uc3dpcGVyLXBhZ2luYXRpb24tYnVsbGV0LWFjdGl2ZSB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1ibGFjayk7XFxuICBvcGFjaXR5OiAxO1xcbn1cXG5cXG4uc3dpcGVyLWJ1dHRvbi1uZXh0LFxcbi5zd2lwZXItYnV0dG9uLXByZXYge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuXFxuLnN3aXBlci1idXR0b24tbmV4dCxcXG4uc3dpcGVyLWJ1dHRvbi1wcmV2IHtcXG4gIHdpZHRoOiA0MHB4ICFpbXBvcnRhbnQ7XFxuICBoZWlnaHQ6IDUycHggIWltcG9ydGFudDtcXG4gIG1hcmdpbi10b3A6IDAgIWltcG9ydGFudDtcXG5cXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbiAgb3BhY2l0eTogMC42O1xcbn1cXG5cXG4uc3dpcGVyLWJ1dHRvbi1uZXh0IHtcXG4gIHJpZ2h0OiA0NHB4ICFpbXBvcnRhbnQ7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSg1MCUsIC01MCUpO1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyArIFwiKTtcXG59XFxuXFxuLnN3aXBlci1idXR0b24tcHJldiB7XFxuICBsZWZ0OiA0NHB4ICFpbXBvcnRhbnQ7XFxuICB0cmFuc2Zvcm06IHJvdGF0ZSgxODBkZWcpIHRyYW5zbGF0ZSg1MCUsIDUwJSk7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fICsgXCIpO1xcbn1cXG5cXG4uc3dpcGVyLWJ1dHRvbi1uZXh0OmhvdmVyLFxcbi5zd2lwZXItYnV0dG9uLXByZXY6aG92ZXIge1xcbiAgb3BhY2l0eTogMTtcXG59XFxuXFxuLnN3aXBlci1idXR0b24tbmV4dDphZnRlcixcXG4uc3dpcGVyLWJ1dHRvbi1wcmV2OmFmdGVyIHtcXG4gIGNvbnRlbnQ6ICcnICFpbXBvcnRhbnQ7XFxufVxcblxcbkBtZWRpYSAobWF4LXdpZHRoOiAxMDI0cHgpIHtcXG4gIC5jb250YWluZXIge1xcbiAgICBwYWRkaW5nOiAwIDIwcHg7XFxuICB9XFxufVxcblxcbkBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkge1xcbiAgLnN3aXBlci1wYWdpbmF0aW9uIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gIH1cXG5cXG4gIC5zd2lwZXItYnV0dG9uLW5leHQsXFxuICAuc3dpcGVyLWJ1dHRvbi1wcmV2IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gIH1cXG59XFxuXFxuXFxuQG1lZGlhIChtYXgtd2lkdGg6IDU3NnB4KSB7XFxuICAuc3dpcGVyLWNvbnRhaW5lciB7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gIH1cXG5cXG4gIC5zd2lwZXItYnV0dG9uLW5leHQsXFxuICAuc3dpcGVyLWJ1dHRvbi1wcmV2IHtcXG4gICAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xcbiAgfVxcbn1cXG5cXG5cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLHFDQUFxQztFQUNyQywyREFBK0Q7RUFDL0QsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixjQUFjO0VBQ2QsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLG1CQUFtQjtFQUNuQixtQkFBbUI7RUFDbkIseUJBQXlCO0VBQ3pCLDJCQUEyQjtFQUMzQixxQkFBcUI7RUFDckIsd0JBQXdCO0VBQ3hCLGlDQUFpQztFQUNqQyw2QkFBNkI7RUFDN0IsMkJBQTJCO0VBQzNCLDBDQUEwQztFQUMxQyx3Q0FBd0M7RUFDeEMsOEJBQThCO0VBQzlCLDJCQUEyQjtBQUM3Qjs7QUFFQTtFQUNFLHNCQUFzQjtBQUN4Qjs7QUFFQTs7O0VBR0UsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLFNBQVM7RUFDVCxVQUFVO0VBQ1YscUNBQXFDO0VBQ3JDLGdCQUFnQjtFQUNoQixlQUFlO0VBQ2YseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UsV0FBVztFQUNYLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLHFCQUFxQjtFQUNyQixjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLFNBQVM7RUFDVCxVQUFVO0FBQ1o7O0FBRUE7RUFDRSw2QkFBNkI7RUFDN0IsMkJBQTJCO0VBQzNCLDhCQUE4QjtFQUM5QixxQkFBcUI7RUFDckIsb0JBQW9CO0VBQ3BCLHNCQUFzQjtFQUN0QixxQkFBcUI7RUFDckIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLDZCQUE2QjtFQUM3QixZQUFZO0VBQ1osZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGFBQWE7RUFDYix5Q0FBeUM7QUFDM0M7O0FBRUE7RUFDRSxVQUFVO0VBQ1YsV0FBVztFQUNYLHFCQUFxQjtFQUNyQixrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLFlBQVk7QUFDZDs7QUFFQTs7O0VBR0UsWUFBWTtBQUNkOztBQUVBO0VBQ0UsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGNBQWM7RUFDZCxVQUFVO0VBQ1YsV0FBVztFQUNYLDhCQUE4QjtFQUM5QixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsb0NBQW9DO0VBQ3BDLFVBQVU7QUFDWjs7O0FBR0E7RUFDRSxXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLFNBQVM7RUFDVCxRQUFRO0VBQ1IsV0FBVztFQUNYLG1CQUFtQjtFQUNuQixXQUFXO0VBQ1gsWUFBWTtFQUNaLG9DQUFvQztFQUNwQyxnQ0FBZ0M7QUFDbEM7O0FBRUE7OztFQUdFLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxjQUFjO0VBQ2QsVUFBVTtFQUNWLFdBQVc7RUFDWCw4QkFBOEI7RUFDOUIsWUFBWTtBQUNkOzs7QUFHQTtFQUNFLGtCQUFrQjtFQUNsQixvQ0FBb0M7RUFDcEMsVUFBVTtBQUNaOztBQUVBOztFQUVFLGFBQWE7QUFDZjs7O0FBR0E7O0VBRUUsc0JBQXNCO0VBQ3RCLHVCQUF1QjtFQUN2Qix3QkFBd0I7O0VBRXhCLHNCQUFzQjtFQUN0Qiw0QkFBNEI7RUFDNUIsWUFBWTtBQUNkOztBQUVBO0VBQ0Usc0JBQXNCO0VBQ3RCLCtCQUErQjtFQUMvQix5REFBNEQ7QUFDOUQ7O0FBRUE7RUFDRSxxQkFBcUI7RUFDckIsNkNBQTZDO0VBQzdDLHlEQUE0RDtBQUM5RDs7QUFFQTs7RUFFRSxVQUFVO0FBQ1o7O0FBRUE7O0VBRUUsc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0U7SUFDRSxlQUFlO0VBQ2pCO0FBQ0Y7O0FBRUE7RUFDRTtJQUNFLGFBQWE7RUFDZjs7RUFFQTs7SUFFRSxhQUFhO0VBQ2Y7QUFDRjs7O0FBR0E7RUFDRTtJQUNFLFlBQVk7RUFDZDs7RUFFQTs7SUFFRSx3QkFBd0I7RUFDMUI7QUFDRlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiAnTW9udHNlcnJhdCcsIHNhbnMtc2VyaWY7XFxuICBzcmM6IHVybCgnYXNzZXRzL2ZvbnRzL01vbnRzZXJyYXQtUmVndWxhci53b2ZmJykgZm9ybWF0KCd3b2ZmJyk7XFxuICBmb250LXdlaWdodDogNDAwO1xcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xcbn1cXG5cXG4uY29udGFpbmVyIHtcXG4gIG1heC13aWR0aDogMTQ0MHB4O1xcbiAgbWFyZ2luOiAwIGF1dG87XFxuICBwYWRkaW5nOiAwIDEwMHB4O1xcbn1cXG5cXG46cm9vdCB7XFxuICAtLWNvbG9yLXdpbGRzYW5kOiAjZjRmNGY0O1xcbiAgLS1jb2xvci13aGl0ZTogI2ZmZjtcXG4gIC0tY29sb3ItYmxhY2s6ICMwMDA7XFxuICAtLWNvbG9yLWVtaW5lbmNlOiAjNjYyZDkxO1xcbiAgLS1jb2xvci1ldWNhbHlwdHVzOiAjNGZkMWM1O1xcbiAgLS1jb2xvci1ncmF5OiAjODU4NTg1O1xcbiAgLS1jb2xvci10dW5kb3JhOiAjNDU0NTQ1O1xcbiAgLS1jb2xvci1icmlnaHQtdHVycXVvaXNlOiAjMDBmZmNiO1xcbiAgLS1jb2xvci1iYWNrZ3JvdW5kOiAjNDU0NTQ1NTI7XFxuICAtLWNvbG9yLW1haW4tdGl0bGU6ICMxMWQ5YjA7XFxuICAtLWNvbG9yLWJhY2tnci1pbWc6IHJnYmEoNDgsIDQ1LCA0NSwgMC41OSk7XFxuICAtLWNvbG9yLXByb2ZpbGUtYnRucy1iYWNrZ3JvdW5kOiAjNjI1NjU2O1xcbiAgLS1jb2xvci1saWtlZC1ieS11c2VyOiAjOGY0Y2MxO1xcbiAgLS1jb2xvci1kYXJrLWJnYzogIzFlMWExYTU5O1xcbn1cXG5cXG5odG1sIHtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbiosXFxuKjo6YmVmb3JlLFxcbio6OmFmdGVyIHtcXG4gIGJveC1zaXppbmc6IGluaGVyaXQ7XFxufVxcblxcbmJvZHkge1xcbiAgLypvdmVyZmxvdy1hbmNob3I6IG5vbmU7Ki9cXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQnLCBzYW5zLXNlcmlmO1xcbiAgZm9udC13ZWlnaHQ6IDQwMDtcXG4gIGZvbnQtc2l6ZTogMTZweDtcXG4gIGNvbG9yOiB2YXIoLS1jb2xvci1ibGFjayk7XFxufVxcblxcbmltZyB7XFxuICB3aWR0aDogMTAwJTtcXG4gIG9iamVjdC1maXQ6IGNvdmVyO1xcbn1cXG5cXG5hIHtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gIGNvbG9yOiBpbmhlcml0O1xcbn1cXG5cXG51bCB7XFxuICBsaXN0LXN0eWxlOiBub25lO1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG59XFxuXFxuLnZpc3VhbGx5LWhpZGRlbiB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGUgIWltcG9ydGFudDtcXG4gIGNsaXA6IHJlY3QoMXB4IDFweCAxcHggMXB4KTtcXG4gIGNsaXA6IHJlY3QoMXB4LCAxcHgsIDFweCwgMXB4KTtcXG4gIHBhZGRpbmc6IDAgIWltcG9ydGFudDtcXG4gIGJvcmRlcjogMCAhaW1wb3J0YW50O1xcbiAgaGVpZ2h0OiAxcHggIWltcG9ydGFudDtcXG4gIHdpZHRoOiAxcHggIWltcG9ydGFudDtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxufVxcblxcbi5idG4tcmVzZXQge1xcbiAgb3V0bGluZTogbm9uZTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgYm9yZGVyOiBub25lO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uc3dpcGVyLWNvbnRhaW5lciB7XFxuICBoZWlnaHQ6IDU0NHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItYmFja2dyb3VuZCk7XFxufVxcblxcbi5zd2lwZXItcGFnaW5hdGlvbi1idWxsZXQge1xcbiAgd2lkdGg6IDhweDtcXG4gIGhlaWdodDogOHB4O1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgYmFja2dyb3VuZDogIzAwMDtcXG4gIG9wYWNpdHk6IDAuMjtcXG59XFxuXFxuLnN3aXBlci1wYWdpbmF0aW9uLWZyYWN0aW9uLFxcbi5zd2lwZXItcGFnaW5hdGlvbi1jdXN0b20sXFxuLnN3aXBlci1jb250YWluZXItaG9yaXpvbnRhbCA+IC5zd2lwZXItcGFnaW5hdGlvbi1idWxsZXRzIHtcXG4gIGJvdHRvbTogMjVweDtcXG59XFxuXFxuLnN3aXBlci1jb250YWluZXItaG9yaXpvbnRhbCA+IC5zd2lwZXItcGFnaW5hdGlvbi1idWxsZXRzIC5zd2lwZXItcGFnaW5hdGlvbi1idWxsZXQge1xcbiAgbWFyZ2luOiAwIDE1cHg7XFxufVxcblxcbi5zd2lwZXItcGFnaW5hdGlvbi1idWxsZXQge1xcbiAgbWFyZ2luOiAwIDQwcHg7XFxuICB3aWR0aDogNnB4O1xcbiAgaGVpZ2h0OiA2cHg7XFxuICBiYWNrZ3JvdW5kOiB2YXIoLS1jb2xvci13aGl0ZSk7XFxuICBvcGFjaXR5OiAwLjc7XFxufVxcblxcbi5zd2lwZXItcGFnaW5hdGlvbi1idWxsZXQtYWN0aXZlIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLWJsYWNrKTtcXG4gIG9wYWNpdHk6IDE7XFxufVxcblxcblxcbi5zd2lwZXItcGFnaW5hdGlvbi1idWxsZXQtYWN0aXZlOjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXCI7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBsZWZ0OiA1MCU7XFxuICB0b3A6IDUwJTtcXG4gIHotaW5kZXg6IC0xO1xcbiAgYm9yZGVyLXJhZGl1czogMTAwJTtcXG4gIHdpZHRoOiAyMHB4O1xcbiAgaGVpZ2h0OiAyMHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3Itd2hpdGUpO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XFxufVxcblxcbi5zd2lwZXItcGFnaW5hdGlvbi1mcmFjdGlvbixcXG4uc3dpcGVyLXBhZ2luYXRpb24tY3VzdG9tLFxcbi5zd2lwZXItY29udGFpbmVyLWhvcml6b250YWwgPiAuc3dpcGVyLXBhZ2luYXRpb24tYnVsbGV0cyB7XFxuICBib3R0b206IDI1cHg7XFxufVxcblxcbi5zd2lwZXItY29udGFpbmVyLWhvcml6b250YWwgPiAuc3dpcGVyLXBhZ2luYXRpb24tYnVsbGV0cyAuc3dpcGVyLXBhZ2luYXRpb24tYnVsbGV0IHtcXG4gIG1hcmdpbjogMCAxNXB4O1xcbn1cXG5cXG4uc3dpcGVyLXBhZ2luYXRpb24tYnVsbGV0IHtcXG4gIG1hcmdpbjogMCA0MHB4O1xcbiAgd2lkdGg6IDZweDtcXG4gIGhlaWdodDogNnB4O1xcbiAgYmFja2dyb3VuZDogdmFyKC0tY29sb3Itd2hpdGUpO1xcbiAgb3BhY2l0eTogMC43O1xcbn1cXG5cXG5cXG4uc3dpcGVyLXBhZ2luYXRpb24tYnVsbGV0LWFjdGl2ZSB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1ibGFjayk7XFxuICBvcGFjaXR5OiAxO1xcbn1cXG5cXG4uc3dpcGVyLWJ1dHRvbi1uZXh0LFxcbi5zd2lwZXItYnV0dG9uLXByZXYge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuXFxuLnN3aXBlci1idXR0b24tbmV4dCxcXG4uc3dpcGVyLWJ1dHRvbi1wcmV2IHtcXG4gIHdpZHRoOiA0MHB4ICFpbXBvcnRhbnQ7XFxuICBoZWlnaHQ6IDUycHggIWltcG9ydGFudDtcXG4gIG1hcmdpbi10b3A6IDAgIWltcG9ydGFudDtcXG5cXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbiAgb3BhY2l0eTogMC42O1xcbn1cXG5cXG4uc3dpcGVyLWJ1dHRvbi1uZXh0IHtcXG4gIHJpZ2h0OiA0NHB4ICFpbXBvcnRhbnQ7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSg1MCUsIC01MCUpO1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4vYXNzZXRzL2ltYWdlcy9zdmcvcmlnaHQtY2hldnJvbi5zdmcpO1xcbn1cXG5cXG4uc3dpcGVyLWJ1dHRvbi1wcmV2IHtcXG4gIGxlZnQ6IDQ0cHggIWltcG9ydGFudDtcXG4gIHRyYW5zZm9ybTogcm90YXRlKDE4MGRlZykgdHJhbnNsYXRlKDUwJSwgNTAlKTtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCguL2Fzc2V0cy9pbWFnZXMvc3ZnL3JpZ2h0LWNoZXZyb24uc3ZnKTtcXG59XFxuXFxuLnN3aXBlci1idXR0b24tbmV4dDpob3ZlcixcXG4uc3dpcGVyLWJ1dHRvbi1wcmV2OmhvdmVyIHtcXG4gIG9wYWNpdHk6IDE7XFxufVxcblxcbi5zd2lwZXItYnV0dG9uLW5leHQ6YWZ0ZXIsXFxuLnN3aXBlci1idXR0b24tcHJldjphZnRlciB7XFxuICBjb250ZW50OiAnJyAhaW1wb3J0YW50O1xcbn1cXG5cXG5AbWVkaWEgKG1heC13aWR0aDogMTAyNHB4KSB7XFxuICAuY29udGFpbmVyIHtcXG4gICAgcGFkZGluZzogMCAyMHB4O1xcbiAgfVxcbn1cXG5cXG5AbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcXG4gIC5zd2lwZXItcGFnaW5hdGlvbiB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICB9XFxuXFxuICAuc3dpcGVyLWJ1dHRvbi1uZXh0LFxcbiAgLnN3aXBlci1idXR0b24tcHJldiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICB9XFxufVxcblxcblxcbkBtZWRpYSAobWF4LXdpZHRoOiA1NzZweCkge1xcbiAgLnN3aXBlci1jb250YWluZXIge1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICB9XFxuXFxuICAuc3dpcGVyLWJ1dHRvbi1uZXh0LFxcbiAgLnN3aXBlci1idXR0b24tcHJldiB7XFxuICAgIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcXG4gIH1cXG59XFxuXFxuXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuLi8uLi9hc3NldHMvaW1hZ2VzL3N2Zy90ZWxlcGhvbmUuc3ZnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18gPSBuZXcgVVJMKFwiLi4vLi4vYXNzZXRzL2ltYWdlcy9zdmcvbWFpbC5zdmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMl9fXyA9IG5ldyBVUkwoXCIuLi8uLi9hc3NldHMvaW1hZ2VzL3N2Zy92ay5zdmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfM19fXyA9IG5ldyBVUkwoXCIuLi8uLi9hc3NldHMvaW1hZ2VzL3N2Zy9nb29nbGUuc3ZnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzRfX18gPSBuZXcgVVJMKFwiLi4vLi4vYXNzZXRzL2ltYWdlcy9zdmcvb2stbG9nby5zdmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzJfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8zX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfM19fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfNF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLmZvb3Rlci1tX19mb290ZXItLUdZUmRtIHtcXG4gIGNvbG9yOiB2YXIoLS1jb2xvci13aGl0ZSk7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1lbWluZW5jZSk7XFxufVxcblxcbi5mb290ZXItbV9fZm9vdGVyLS1HWVJkbSBzcGFuIHtcXG4gIGZvbnQtc2l6ZTogMjJweDtcXG59XFxuXFxuLmZvb3Rlci1tX19jb250YWluZXItLXdMekNDIHtcXG4gIG1hcmdpbjogMCBhdXRvO1xcbiAgcGFkZGluZzogMCAyMHB4O1xcbiAgbWF4LXdpZHRoOiAxMDYwcHg7XFxufVxcblxcbi5mb290ZXItbV9fZm9vdGVyVG9wLS1OQ1F0QyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgcGFkZGluZzogNjBweCAwO1xcbn1cXG5cXG4uZm9vdGVyLW1fX2Zvb3RlclRvcC0tTkNRdEMgaW1nIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgd2lkdGg6IDEwMHB4O1xcbiAgaGVpZ2h0OiA1NHB4O1xcbn1cXG5cXG4uZm9vdGVyLW1fX2NvbnRhY3RzLS10dEllSyBzcGFuIHtcXG4gIGZvbnQtc2l6ZTogMjJweDtcXG59XFxuXFxuLmZvb3Rlci1tX19jb250YWN0c0xpc3QtLU1aMDVHIHtcXG4gIG1hcmdpbi10b3A6IDIwcHg7XFxufVxcblxcbi5mb290ZXItbV9fY29udGFjdHNMaXN0LS1NWjA1RyBsaTpub3QoOmxhc3QtY2hpbGQpIHtcXG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XFxufVxcblxcbi5mb290ZXItbV9fY29udGFjdHNMaXN0LS1NWjA1RyBhIHtcXG4gIHRyYW5zaXRpb246IHRleHQtZGVjb3JhdGlvbiAwLjNzIGVhc2UtaW47XFxufVxcblxcbi5mb290ZXItbV9fY29udGFjdHNMaXN0LS1NWjA1RyBhOmhvdmVyIHtcXG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xcbiAgdHJhbnNpdGlvbjogdGV4dC1kZWNvcmF0aW9uIDAuM3MgZWFzZS1pbjtcXG59XFxuXFxuLmZvb3Rlci1tX19saXN0SXRlbVRlbC0tTW9qdDMsXFxuLmZvb3Rlci1tX19saXN0SXRlbU1haWwtLWJQU2V3IHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHBhZGRpbmctbGVmdDogMzBweDtcXG59XFxuXFxuLmZvb3Rlci1tX19saXN0SXRlbVRlbC0tTW9qdDM6OmJlZm9yZSB7XFxuICBjb250ZW50OiAnJztcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGxlZnQ6IDA7XFxuICB0b3A6IDA7XFxuICB3aWR0aDogMTZweDtcXG4gIGhlaWdodDogMTZweDtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gKyBcIik7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XFxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbn1cXG5cXG4uZm9vdGVyLW1fX2xpc3RJdGVtTWFpbC0tYlBTZXc6OmJlZm9yZSB7XFxuICBjb250ZW50OiAnJztcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGxlZnQ6IDA7XFxuICB0b3A6IDA7XFxuICB3aWR0aDogMTZweDtcXG4gIGhlaWdodDogMTZweDtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gKyBcIik7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XFxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbn1cXG5cXG4uZm9vdGVyLW1fX3NvY2lhbExpc3QtLUxRd1J4IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBtYXJnaW4tdG9wOiAyMHB4O1xcbn1cXG5cXG4uZm9vdGVyLW1fX2xpbmstLVd4ajhQIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tY29sb3Itd2hpdGUpO1xcbiAgYm9yZGVyLXJhZGl1czogMTAwJTtcXG4gIHdpZHRoOiA0MHB4O1xcbiAgaGVpZ2h0OiA0MHB4O1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xcbiAgYmFja2dyb3VuZC1zaXplOiAyMHB4IDIwcHg7XFxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbn1cXG5cXG4uZm9vdGVyLW1fX2xpbmstLVd4ajhQOmhvdmVyIHtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICMzYjU5OTg7XFxuICBib3gtc2hhZG93OiAwIDAgMTVweCB2YXIoLS1jb2xvci1icmlnaHQtdHVycXVvaXNlKTtcXG4gIHRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2U7XFxufVxcblxcbi5mb290ZXItbV9fdmstLVJfZ2FIIHtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzJfX18gKyBcIik7XFxufVxcblxcbi5mb290ZXItbV9fZ29vZ2xlLS1oazJaZSB7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8zX19fICsgXCIpO1xcbn1cXG5cXG4uZm9vdGVyLW1fX29rLS1uWlJOYSB7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF80X19fICsgXCIpO1xcbn1cXG5cXG4uZm9vdGVyLW1fX2Zvb3RlckJvdHRvbS0tdkliczUge1xcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC40KTtcXG4gIHBhZGRpbmc6IDIwcHggMDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuQG1lZGlhIChtYXgtd2lkdGg6IDU3NnB4KSB7XFxuICAuZm9vdGVyLW1fX2Zvb3RlclRvcC0tTkNRdEMge1xcbiAgICBwYWRkaW5nOiAyMHB4IDA7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICB9XFxuXFxuICAuZm9vdGVyLW1fX2Zvb3RlclRvcC0tTkNRdEMgaW1nLFxcbiAgLmZvb3Rlci1tX19pblNvY2lhbFRleHQtLU9uMzlDIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gIH1cXG5cXG4gIC5mb290ZXItbV9fY29udGFjdHMtLXR0SWVLIHtcXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcXG4gIH1cXG5cXG5cXG59XFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2NvbXBvbmVudHMvRm9vdGVyL2Zvb3Rlci5tLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLHlCQUF5QjtFQUN6Qix1Q0FBdUM7QUFDekM7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsY0FBYztFQUNkLGVBQWU7RUFDZixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsOEJBQThCO0VBQzlCLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxjQUFjO0VBQ2QsWUFBWTtFQUNaLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSx3Q0FBd0M7QUFDMUM7O0FBRUE7RUFDRSwwQkFBMEI7RUFDMUIsd0NBQXdDO0FBQzFDOztBQUVBOztFQUVFLGtCQUFrQjtFQUNsQixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLE9BQU87RUFDUCxNQUFNO0VBQ04sV0FBVztFQUNYLFlBQVk7RUFDWix5REFBOEQ7RUFDOUQsMkJBQTJCO0VBQzNCLDRCQUE0QjtBQUM5Qjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsT0FBTztFQUNQLE1BQU07RUFDTixXQUFXO0VBQ1gsWUFBWTtFQUNaLHlEQUF5RDtFQUN6RCwyQkFBMkI7RUFDM0IsNEJBQTRCO0FBQzlCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLDhCQUE4QjtFQUM5QixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxjQUFjO0VBQ2Qsb0NBQW9DO0VBQ3BDLG1CQUFtQjtFQUNuQixXQUFXO0VBQ1gsWUFBWTtFQUNaLDJCQUEyQjtFQUMzQiwwQkFBMEI7RUFDMUIsNEJBQTRCO0FBQzlCOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLGtEQUFrRDtFQUNsRCx5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSx5REFBdUQ7QUFDekQ7O0FBRUE7RUFDRSx5REFBMkQ7QUFDN0Q7O0FBRUE7RUFDRSx5REFBNEQ7QUFDOUQ7O0FBRUE7RUFDRSw4Q0FBOEM7RUFDOUMsZUFBZTtFQUNmLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFO0lBQ0UsZUFBZTtJQUNmLHNCQUFzQjtFQUN4Qjs7RUFFQTs7SUFFRSxhQUFhO0VBQ2Y7O0VBRUE7SUFDRSxtQkFBbUI7RUFDckI7OztBQUdGXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi5mb290ZXIge1xcbiAgY29sb3I6IHZhcigtLWNvbG9yLXdoaXRlKTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLWVtaW5lbmNlKTtcXG59XFxuXFxuLmZvb3RlciBzcGFuIHtcXG4gIGZvbnQtc2l6ZTogMjJweDtcXG59XFxuXFxuLmNvbnRhaW5lciB7XFxuICBtYXJnaW46IDAgYXV0bztcXG4gIHBhZGRpbmc6IDAgMjBweDtcXG4gIG1heC13aWR0aDogMTA2MHB4O1xcbn1cXG5cXG4uZm9vdGVyVG9wIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBwYWRkaW5nOiA2MHB4IDA7XFxufVxcblxcbi5mb290ZXJUb3AgaW1nIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgd2lkdGg6IDEwMHB4O1xcbiAgaGVpZ2h0OiA1NHB4O1xcbn1cXG5cXG4uY29udGFjdHMgc3BhbiB7XFxuICBmb250LXNpemU6IDIycHg7XFxufVxcblxcbi5jb250YWN0c0xpc3Qge1xcbiAgbWFyZ2luLXRvcDogMjBweDtcXG59XFxuXFxuLmNvbnRhY3RzTGlzdCBsaTpub3QoOmxhc3QtY2hpbGQpIHtcXG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XFxufVxcblxcbi5jb250YWN0c0xpc3QgYSB7XFxuICB0cmFuc2l0aW9uOiB0ZXh0LWRlY29yYXRpb24gMC4zcyBlYXNlLWluO1xcbn1cXG5cXG4uY29udGFjdHNMaXN0IGE6aG92ZXIge1xcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XFxuICB0cmFuc2l0aW9uOiB0ZXh0LWRlY29yYXRpb24gMC4zcyBlYXNlLWluO1xcbn1cXG5cXG4ubGlzdEl0ZW1UZWwsXFxuLmxpc3RJdGVtTWFpbCB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBwYWRkaW5nLWxlZnQ6IDMwcHg7XFxufVxcblxcbi5saXN0SXRlbVRlbDo6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6ICcnO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgbGVmdDogMDtcXG4gIHRvcDogMDtcXG4gIHdpZHRoOiAxNnB4O1xcbiAgaGVpZ2h0OiAxNnB4O1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi8uLi9hc3NldHMvaW1hZ2VzL3N2Zy90ZWxlcGhvbmUuc3ZnJyk7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XFxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbn1cXG5cXG4ubGlzdEl0ZW1NYWlsOjpiZWZvcmUge1xcbiAgY29udGVudDogJyc7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBsZWZ0OiAwO1xcbiAgdG9wOiAwO1xcbiAgd2lkdGg6IDE2cHg7XFxuICBoZWlnaHQ6IDE2cHg7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uLy4uL2Fzc2V0cy9pbWFnZXMvc3ZnL21haWwuc3ZnJyk7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XFxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbn1cXG5cXG4uc29jaWFsTGlzdCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgbWFyZ2luLXRvcDogMjBweDtcXG59XFxuXFxuLmxpbmsge1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1jb2xvci13aGl0ZSk7XFxuICBib3JkZXItcmFkaXVzOiAxMDAlO1xcbiAgd2lkdGg6IDQwcHg7XFxuICBoZWlnaHQ6IDQwcHg7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XFxuICBiYWNrZ3JvdW5kLXNpemU6IDIwcHggMjBweDtcXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxufVxcblxcbi5saW5rOmhvdmVyIHtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICMzYjU5OTg7XFxuICBib3gtc2hhZG93OiAwIDAgMTVweCB2YXIoLS1jb2xvci1icmlnaHQtdHVycXVvaXNlKTtcXG4gIHRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2U7XFxufVxcblxcbi52ayB7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uLy4uL2Fzc2V0cy9pbWFnZXMvc3ZnL3ZrLnN2ZycpO1xcbn1cXG5cXG4uZ29vZ2xlIHtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vLi4vYXNzZXRzL2ltYWdlcy9zdmcvZ29vZ2xlLnN2ZycpO1xcbn1cXG5cXG4ub2sge1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi8uLi9hc3NldHMvaW1hZ2VzL3N2Zy9vay1sb2dvLnN2ZycpO1xcbn1cXG5cXG4uZm9vdGVyQm90dG9tIHtcXG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNCk7XFxuICBwYWRkaW5nOiAyMHB4IDA7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbkBtZWRpYSAobWF4LXdpZHRoOiA1NzZweCkge1xcbiAgLmZvb3RlclRvcCB7XFxuICAgIHBhZGRpbmc6IDIwcHggMDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIH1cXG5cXG4gIC5mb290ZXJUb3AgaW1nLFxcbiAgLmluU29jaWFsVGV4dCB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICB9XFxuXFxuICAuY29udGFjdHMge1xcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xcbiAgfVxcblxcblxcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLmxvY2FscyA9IHtcblx0XCJmb290ZXJcIjogXCJmb290ZXItbV9fZm9vdGVyLS1HWVJkbVwiLFxuXHRcImNvbnRhaW5lclwiOiBcImZvb3Rlci1tX19jb250YWluZXItLXdMekNDXCIsXG5cdFwiZm9vdGVyVG9wXCI6IFwiZm9vdGVyLW1fX2Zvb3RlclRvcC0tTkNRdENcIixcblx0XCJjb250YWN0c1wiOiBcImZvb3Rlci1tX19jb250YWN0cy0tdHRJZUtcIixcblx0XCJjb250YWN0c0xpc3RcIjogXCJmb290ZXItbV9fY29udGFjdHNMaXN0LS1NWjA1R1wiLFxuXHRcImxpc3RJdGVtVGVsXCI6IFwiZm9vdGVyLW1fX2xpc3RJdGVtVGVsLS1Nb2p0M1wiLFxuXHRcImxpc3RJdGVtTWFpbFwiOiBcImZvb3Rlci1tX19saXN0SXRlbU1haWwtLWJQU2V3XCIsXG5cdFwic29jaWFsTGlzdFwiOiBcImZvb3Rlci1tX19zb2NpYWxMaXN0LS1MUXdSeFwiLFxuXHRcImxpbmtcIjogXCJmb290ZXItbV9fbGluay0tV3hqOFBcIixcblx0XCJ2a1wiOiBcImZvb3Rlci1tX192ay0tUl9nYUhcIixcblx0XCJnb29nbGVcIjogXCJmb290ZXItbV9fZ29vZ2xlLS1oazJaZVwiLFxuXHRcIm9rXCI6IFwiZm9vdGVyLW1fX29rLS1uWlJOYVwiLFxuXHRcImZvb3RlckJvdHRvbVwiOiBcImZvb3Rlci1tX19mb290ZXJCb3R0b20tLXZJYnM1XCIsXG5cdFwiaW5Tb2NpYWxUZXh0XCI6IFwiZm9vdGVyLW1fX2luU29jaWFsVGV4dC0tT24zOUNcIlxufTtcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvc3ZnL2Rvd24tYXJyb3cuc3ZnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLmxvY2F0aW9uLW1fX2xvY2F0aW9uLS1VVkRvUCB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmxvY2F0aW9uLW1fX2xvY2F0aW9uSWNvbi0tVjRFT1Uge1xcbiAgd2lkdGg6IDE4cHg7XFxuICBoZWlnaHQ6IDE4cHg7XFxuICBmaWxsOiB2YXIoLS1jb2xvci1lbWluZW5jZSlcXG59XFxuXFxuLmxvY2F0aW9uLW1fX2xvY2F0aW9uU2VsZWN0LS1ZYjBxXyB7XFxuICBhcHBlYXJhbmNlOiBub25lO1xcbiAgb3V0bGluZTogbm9uZTtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGZvbnQtc2l6ZTogMTZweDtcXG4gIGNvbG9yOiB2YXIoLS1jb2xvci1lbWluZW5jZSk7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fICsgXCIpO1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogOTAlIDUwJTtcXG4gIGJhY2tncm91bmQtc2l6ZTogMTBweCAxMHB4O1xcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG59XFxuXFxuLmxvY2F0aW9uLW1fX2NpdHlUZXh0LS1aNkxqTiB7XFxuICBjb2xvcjogdmFyKC0tY29sb3ItZW1pbmVuY2UpO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9jb21wb25lbnRzL0hlYWRlci9Mb2NhdGlvbi9sb2NhdGlvbi5tLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2IsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWjtBQUNGOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGFBQWE7RUFDYixZQUFZO0VBQ1osZUFBZTtFQUNmLDRCQUE0QjtFQUM1Qix5REFBa0U7RUFDbEUsNEJBQTRCO0VBQzVCLDBCQUEwQjtFQUMxQiw0QkFBNEI7QUFDOUI7O0FBRUE7RUFDRSw0QkFBNEI7RUFDNUIsaUJBQWlCO0FBQ25CXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi5sb2NhdGlvbiB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmxvY2F0aW9uSWNvbiB7XFxuICB3aWR0aDogMThweDtcXG4gIGhlaWdodDogMThweDtcXG4gIGZpbGw6IHZhcigtLWNvbG9yLWVtaW5lbmNlKVxcbn1cXG5cXG4ubG9jYXRpb25TZWxlY3Qge1xcbiAgYXBwZWFyYW5jZTogbm9uZTtcXG4gIG91dGxpbmU6IG5vbmU7XFxuICBib3JkZXI6IG5vbmU7XFxuICBmb250LXNpemU6IDE2cHg7XFxuICBjb2xvcjogdmFyKC0tY29sb3ItZW1pbmVuY2UpO1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi8uLi8uLi9hc3NldHMvaW1hZ2VzL3N2Zy9kb3duLWFycm93LnN2ZycpO1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogOTAlIDUwJTtcXG4gIGJhY2tncm91bmQtc2l6ZTogMTBweCAxMHB4O1xcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG59XFxuXFxuLmNpdHlUZXh0IHtcXG4gIGNvbG9yOiB2YXIoLS1jb2xvci1lbWluZW5jZSk7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5sb2NhbHMgPSB7XG5cdFwibG9jYXRpb25cIjogXCJsb2NhdGlvbi1tX19sb2NhdGlvbi0tVVZEb1BcIixcblx0XCJsb2NhdGlvbkljb25cIjogXCJsb2NhdGlvbi1tX19sb2NhdGlvbkljb24tLVY0RU9VXCIsXG5cdFwibG9jYXRpb25TZWxlY3RcIjogXCJsb2NhdGlvbi1tX19sb2NhdGlvblNlbGVjdC0tWWIwcV9cIixcblx0XCJjaXR5VGV4dFwiOiBcImxvY2F0aW9uLW1fX2NpdHlUZXh0LS1aNkxqTlwiXG59O1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi5zaWduaW4tbV9fbG9naW5JY29uLS1sYTBPNCB7XFxuICBtYXJnaW4tcmlnaHQ6IDVweDtcXG4gIHdpZHRoOiAyMHB4O1xcbiAgaGVpZ2h0OiAyMHB4O1xcbn1cXG5cXG4uc2lnbmluLW1fX2xvZ2luU2lnbmluLS1DY2VHbCB7XFxuICBmb250LXdlaWdodDogNTAwO1xcbiAgZm9udC1zaXplOiAyMHB4O1xcbiAgY29sb3I6IHZhcigtLWNvbG9yLWVtaW5lbmNlKTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLnNpZ25pbi1tX19sb2dpblNpZ25pbi0tQ2NlR2w6aG92ZXIge1xcbiAgY29sb3I6IHZhcigtLWNvbG9yLWV1Y2FseXB0dXMpO1xcbn1cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvY29tcG9uZW50cy9IZWFkZXIvU2lnbmluL3NpZ25pbi5tLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLGlCQUFpQjtFQUNqQixXQUFXO0VBQ1gsWUFBWTtBQUNkOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGVBQWU7RUFDZiw0QkFBNEI7RUFDNUIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLDhCQUE4QjtBQUNoQ1wiLFwic291cmNlc0NvbnRlbnRcIjpbXCIubG9naW5JY29uIHtcXG4gIG1hcmdpbi1yaWdodDogNXB4O1xcbiAgd2lkdGg6IDIwcHg7XFxuICBoZWlnaHQ6IDIwcHg7XFxufVxcblxcbi5sb2dpblNpZ25pbiB7XFxuICBmb250LXdlaWdodDogNTAwO1xcbiAgZm9udC1zaXplOiAyMHB4O1xcbiAgY29sb3I6IHZhcigtLWNvbG9yLWVtaW5lbmNlKTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLmxvZ2luU2lnbmluOmhvdmVyIHtcXG4gIGNvbG9yOiB2YXIoLS1jb2xvci1ldWNhbHlwdHVzKTtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5sb2NhbHMgPSB7XG5cdFwibG9naW5JY29uXCI6IFwic2lnbmluLW1fX2xvZ2luSWNvbi0tbGEwTzRcIixcblx0XCJsb2dpblNpZ25pblwiOiBcInNpZ25pbi1tX19sb2dpblNpZ25pbi0tQ2NlR2xcIlxufTtcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIuaGVhZGVyLW1fX2hlYWRlci0tMWJlaVAge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBwYWRkaW5nOiAzMHB4IDA7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci13aGl0ZSk7XFxufVxcblxcbi5oZWFkZXItbV9fbG9nby0tQmY2OTQge1xcbiAgd2lkdGg6IDEwMHB4O1xcbiAgaGVpZ2h0OiA2MHB4O1xcbn1cXG5cXG4uaGVhZGVyLW1fX2xpc3QtLWV2UWZVIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBtYXJnaW4tcmlnaHQ6IDIwMHB4O1xcbiAgd2lkdGg6IDIwMHB4O1xcbn1cXG5cXG4uaGVhZGVyLW1fX2xpbmstLXd0VzlzIHtcXG4gIGZvbnQtc2l6ZTogMjBweDtcXG4gIGNvbG9yOiB2YXIoLS1jb2xvci1lbWluZW5jZSk7XFxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcblxcbi5oZWFkZXItbV9fbGluay0td3RXOXM6aG92ZXIge1xcbiAgY29sb3I6IHZhcigtLWNvbG9yLWV1Y2FseXB0dXMpO1xcbn1cXG5cXG5cXG5AbWVkaWEgKG1heC13aWR0aDogMTAyNHB4KSB7XFxuICAuaGVhZGVyLW1fX2xpc3QtLWV2UWZVIHtcXG4gICAgbWFyZ2luLXJpZ2h0OiAwO1xcbiAgfVxcblxcbn1cXG5cXG5cXG5AbWVkaWEgKG1heC13aWR0aDogNTc2cHgpIHtcXG5cXG4gIC5oZWFkZXItbV9faGVhZGVyLS0xYmVpUCB7XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxuICB9XFxuXFxuICAuaGVhZGVyLW1fX2xpc3QtLWV2UWZVIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gIH1cXG5cXG4gIC5oZWFkZXItbV9fbG9nby0tQmY2OTQge1xcbiAgICB3aWR0aDogNTBweDtcXG4gICAgaGVpZ2h0OiAzMHB4O1xcbiAgfVxcbn1cXG5cXG5cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvY29tcG9uZW50cy9IZWFkZXIvaGVhZGVyLm0uY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQiw4QkFBOEI7RUFDOUIsZUFBZTtFQUNmLG9DQUFvQztBQUN0Qzs7QUFFQTtFQUNFLFlBQVk7RUFDWixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsOEJBQThCO0VBQzlCLG1CQUFtQjtFQUNuQixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsNEJBQTRCO0VBQzVCLHlCQUF5QjtFQUN6QixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSw4QkFBOEI7QUFDaEM7OztBQUdBO0VBQ0U7SUFDRSxlQUFlO0VBQ2pCOztBQUVGOzs7QUFHQTs7RUFFRTtJQUNFLGFBQWE7RUFDZjs7RUFFQTtJQUNFLGFBQWE7RUFDZjs7RUFFQTtJQUNFLFdBQVc7SUFDWCxZQUFZO0VBQ2Q7QUFDRlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIuaGVhZGVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgcGFkZGluZzogMzBweCAwO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3Itd2hpdGUpO1xcbn1cXG5cXG4ubG9nbyB7XFxuICB3aWR0aDogMTAwcHg7XFxuICBoZWlnaHQ6IDYwcHg7XFxufVxcblxcbi5saXN0IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBtYXJnaW4tcmlnaHQ6IDIwMHB4O1xcbiAgd2lkdGg6IDIwMHB4O1xcbn1cXG5cXG4ubGluayB7XFxuICBmb250LXNpemU6IDIwcHg7XFxuICBjb2xvcjogdmFyKC0tY29sb3ItZW1pbmVuY2UpO1xcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG5cXG4ubGluazpob3ZlciB7XFxuICBjb2xvcjogdmFyKC0tY29sb3ItZXVjYWx5cHR1cyk7XFxufVxcblxcblxcbkBtZWRpYSAobWF4LXdpZHRoOiAxMDI0cHgpIHtcXG4gIC5saXN0IHtcXG4gICAgbWFyZ2luLXJpZ2h0OiAwO1xcbiAgfVxcblxcbn1cXG5cXG5cXG5AbWVkaWEgKG1heC13aWR0aDogNTc2cHgpIHtcXG5cXG4gIC5oZWFkZXIge1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbiAgfVxcblxcbiAgLmxpc3Qge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgfVxcblxcbiAgLmxvZ28ge1xcbiAgICB3aWR0aDogNTBweDtcXG4gICAgaGVpZ2h0OiAzMHB4O1xcbiAgfVxcbn1cXG5cXG5cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLmxvY2FscyA9IHtcblx0XCJoZWFkZXJcIjogXCJoZWFkZXItbV9faGVhZGVyLS0xYmVpUFwiLFxuXHRcImxvZ29cIjogXCJoZWFkZXItbV9fbG9nby0tQmY2OTRcIixcblx0XCJsaXN0XCI6IFwiaGVhZGVyLW1fX2xpc3QtLWV2UWZVXCIsXG5cdFwibGlua1wiOiBcImhlYWRlci1tX19saW5rLS13dFc5c1wiXG59O1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi5wcm9maWxlLW1fX3VzZXJQcm9maWxlLS1PZXZ4cyB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBib3JkZXItcmFkaXVzOiAycHg7XFxufVxcblxcbi5wcm9maWxlLW1fX3VzZXJCYXNlSW5mby0tQ2dfRHAge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5wcm9maWxlLW1fX3Byb2ZpbGVJbWFnZS0tUnFJYmQge1xcbiAgd2lkdGg6IDQwcHg7XFxuICBoZWlnaHQ6IDQwcHg7XFxuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1jb2xvci1ncmF5KTtcXG4gIGJvcmRlci1yYWRpdXM6IDEwMCU7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XFxufVxcblxcbi5wcm9maWxlLW1fX3Byb2ZpbGVJbWFnZS0tUnFJYmQgaW1nIHtcXG4gIG9iamVjdC1maXQ6IGNvdmVyO1xcbn1cXG5cXG4ucHJvZmlsZS1tX19wcm9maWxlQnRucy0tRXBWZGoge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgcmlnaHQ6IDA7XFxuICB3aWR0aDogMTYwcHg7XFxuICBtYXJnaW4tdG9wOiA1cHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIHotaW5kZXg6IDU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci13aGl0ZSk7XFxuICBwYWRkaW5nOiAycHggMDtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWNvbG9yLWdyYXkpO1xcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xcbiAgYm94LXNoYWRvdzogMCA4cHggMTZweCAjMDAwMDAwMjk7XFxufVxcblxcbi5wcm9maWxlLW1fX2xvZ291dEJ0bi0tR2FqeWcsXFxuLnByb2ZpbGUtbV9fcHJvZmlsZUJ0bi0tdDdnNUUge1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBwYWRkaW5nOiAxMHB4IDE2cHg7XFxuICBtYXJnaW46IDJweCAwO1xcbiAgY29sb3I6IHZhcigtLWNvbG9yLWdyYXkpO1xcbiAgdGV4dC1hbGlnbjogbGVmdDtcXG59XFxuXFxuLnByb2ZpbGUtbV9fbG9nb3V0QnRuLS1HYWp5Zzpob3ZlcixcXG4ucHJvZmlsZS1tX19wcm9maWxlQnRuLS10N2c1RTpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjVmNWY1O1xcbiAgY29sb3I6ICMxMTE7XFxufVxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9jb21wb25lbnRzL1Byb2ZpbGUvcHJvZmlsZS5tLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLGtCQUFrQjtFQUNsQixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWixtQ0FBbUM7RUFDbkMsbUJBQW1CO0VBQ25CLGdCQUFnQjtFQUNoQixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsUUFBUTtFQUNSLFlBQVk7RUFDWixlQUFlO0VBQ2YsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixVQUFVO0VBQ1Ysb0NBQW9DO0VBQ3BDLGNBQWM7RUFDZCxtQ0FBbUM7RUFDbkMsa0JBQWtCO0VBQ2xCLGdDQUFnQztBQUNsQzs7QUFFQTs7RUFFRSxxQkFBcUI7RUFDckIsa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLHdCQUF3QjtFQUN4QixnQkFBZ0I7QUFDbEI7O0FBRUE7O0VBRUUseUJBQXlCO0VBQ3pCLFdBQVc7QUFDYlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIudXNlclByb2ZpbGUge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xcbn1cXG5cXG4udXNlckJhc2VJbmZvIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4ucHJvZmlsZUltYWdlIHtcXG4gIHdpZHRoOiA0MHB4O1xcbiAgaGVpZ2h0OiA0MHB4O1xcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tY29sb3ItZ3JheSk7XFxuICBib3JkZXItcmFkaXVzOiAxMDAlO1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xcbn1cXG5cXG4ucHJvZmlsZUltYWdlIGltZyB7XFxuICBvYmplY3QtZml0OiBjb3ZlcjtcXG59XFxuXFxuLnByb2ZpbGVCdG5zIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHJpZ2h0OiAwO1xcbiAgd2lkdGg6IDE2MHB4O1xcbiAgbWFyZ2luLXRvcDogNXB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICB6LWluZGV4OiA1O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3Itd2hpdGUpO1xcbiAgcGFkZGluZzogMnB4IDA7XFxuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1jb2xvci1ncmF5KTtcXG4gIGJvcmRlci1yYWRpdXM6IDJweDtcXG4gIGJveC1zaGFkb3c6IDAgOHB4IDE2cHggIzAwMDAwMDI5O1xcbn1cXG5cXG4ubG9nb3V0QnRuLFxcbi5wcm9maWxlQnRuIHtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgcGFkZGluZzogMTBweCAxNnB4O1xcbiAgbWFyZ2luOiAycHggMDtcXG4gIGNvbG9yOiB2YXIoLS1jb2xvci1ncmF5KTtcXG4gIHRleHQtYWxpZ246IGxlZnQ7XFxufVxcblxcbi5sb2dvdXRCdG46aG92ZXIsXFxuLnByb2ZpbGVCdG46aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y1ZjVmNTtcXG4gIGNvbG9yOiAjMTExO1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLmxvY2FscyA9IHtcblx0XCJ1c2VyUHJvZmlsZVwiOiBcInByb2ZpbGUtbV9fdXNlclByb2ZpbGUtLU9ldnhzXCIsXG5cdFwidXNlckJhc2VJbmZvXCI6IFwicHJvZmlsZS1tX191c2VyQmFzZUluZm8tLUNnX0RwXCIsXG5cdFwicHJvZmlsZUltYWdlXCI6IFwicHJvZmlsZS1tX19wcm9maWxlSW1hZ2UtLVJxSWJkXCIsXG5cdFwicHJvZmlsZUJ0bnNcIjogXCJwcm9maWxlLW1fX3Byb2ZpbGVCdG5zLS1FcFZkalwiLFxuXHRcImxvZ291dEJ0blwiOiBcInByb2ZpbGUtbV9fbG9nb3V0QnRuLS1HYWp5Z1wiLFxuXHRcInByb2ZpbGVCdG5cIjogXCJwcm9maWxlLW1fX3Byb2ZpbGVCdG4tLXQ3ZzVFXCJcbn07XG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLmxvYWRlcldyYXBwZXIge1xcbn1cXG5cXG4uc3Bpbm5lci1tX19sb2FkZXItLUFBZXRvIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHdpZHRoOiA2MHB4O1xcbiAgaGVpZ2h0OiA2MHB4O1xcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgbWFyZ2luOiAyMHB4O1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcXG59XFxuXFxuLmxvYWRlclN0YXIge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiBjYWxjKDUwJSAtIDEycHgpO1xcbn1cXG5cXG4uc3Bpbm5lci1tX19sb2FkZXIyLS1vYkFpNSAuc3Bpbm5lci1tX19sb2FkZXJTdGFyLS1HSHBQcCB7XFxuICBwb3NpdGlvbjogc3RhdGljO1xcbiAgd2lkdGg6IDYwcHg7XFxuICBoZWlnaHQ6IDYwcHg7XFxuICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMC43KTtcXG4gIC1tcy10cmFuc2Zvcm06IHNjYWxlKDAuNyk7XFxuICB0cmFuc2Zvcm06IHNjYWxlKDAuNyk7XFxuICAtd2Via2l0LWFuaW1hdGlvbjogc3Bpbm5lci1tX19sb2FkZXItMi1zdGFyLS1mVEg3byAxcyBlYXNlIGFsdGVybmF0ZSBpbmZpbml0ZTtcXG4gIGFuaW1hdGlvbjogc3Bpbm5lci1tX19sb2FkZXItMi1zdGFyLS1mVEg3byAxcyBlYXNlIGFsdGVybmF0ZSBpbmZpbml0ZTtcXG59XFxuXFxuLnNwaW5uZXItbV9fbG9hZGVyMi0tb2JBaTUgLnNwaW5uZXItbV9fbG9hZGVyQ2lyY2xlcy0tUEROT3Ige1xcbiAgd2lkdGg6IDhweDtcXG4gIGhlaWdodDogOHB4O1xcbiAgYmFja2dyb3VuZDogdmFyKC0tY29sb3ItZW1pbmVuY2UpO1xcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgbGVmdDogY2FsYyg1MCUgLSA0cHgpO1xcbiAgdG9wOiBjYWxjKDUwJSAtIDRweCk7XFxuICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAxcyBlYXNlO1xcbiAgLW8tdHJhbnNpdGlvbjogYWxsIDFzIGVhc2U7XFxuICB0cmFuc2l0aW9uOiBhbGwgMXMgZWFzZTtcXG4gIC13ZWJraXQtYW5pbWF0aW9uOiBzcGlubmVyLW1fX2xvYWRlci0yLWNpcmNsZXMtLUpSYlVQIDFzIGVhc2UtaW4tb3V0IGFsdGVybmF0ZSBpbmZpbml0ZTtcXG4gIGFuaW1hdGlvbjogc3Bpbm5lci1tX19sb2FkZXItMi1jaXJjbGVzLS1KUmJVUCAxcyBlYXNlLWluLW91dCBhbHRlcm5hdGUgaW5maW5pdGU7XFxufVxcblxcbkAtd2Via2l0LWtleWZyYW1lcyBzcGlubmVyLW1fX2xvYWRlci0yLWNpcmNsZXMtLUpSYlVQIHtcXG4gIDAlIHtcXG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiAwIDAgMCB2YXIoLS1jb2xvci1lbWluZW5jZSk7XFxuICAgIGJveC1zaGFkb3c6IDAgMCAwIHZhcigtLWNvbG9yLWVtaW5lbmNlKTtcXG4gICAgb3BhY2l0eTogMTtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XFxuICB9XFxuICA1MCUge1xcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6IDI0cHggLTIycHggdmFyKC0tY29sb3ItZW1pbmVuY2UpLFxcbiAgICAzMHB4IC0xNXB4IDAgLTNweCB2YXIoLS1jb2xvci1lbWluZW5jZSksXFxuICAgIDMxcHggMHB4IHZhcigtLWNvbG9yLWVtaW5lbmNlKSxcXG4gICAgMjlweCA5cHggMCAtM3B4IHZhcigtLWNvbG9yLWVtaW5lbmNlKSxcXG4gICAgMjRweCAyM3B4IHZhcigtLWNvbG9yLWVtaW5lbmNlKSwgMTdweCAzMHB4IDAgLTNweCB2YXIoLS1jb2xvci1lbWluZW5jZSksXFxuICAgIDBweCAzM3B4IHZhcigtLWNvbG9yLWVtaW5lbmNlKSwgLTEwcHggMjhweCAwIC0zcHggdmFyKC0tY29sb3ItZW1pbmVuY2UpLFxcbiAgICAtMjRweCAyMnB4IHZhcigtLWNvbG9yLWVtaW5lbmNlKSwgLTI5cHggMTRweCAwIC0zcHggdmFyKC0tY29sb3ItZW1pbmVuY2UpLFxcbiAgICAtMzFweCAtM3B4IHZhcigtLWNvbG9yLWVtaW5lbmNlKSwgLTMwcHggLTExcHggMCAtM3B4IHZhcigtLWNvbG9yLWVtaW5lbmNlKSxcXG4gICAgLTIwcHggLTI1cHggdmFyKC0tY29sb3ItZW1pbmVuY2UpLFxcbiAgICAtMTJweCAtMzBweCAwIC0zcHggdmFyKC0tY29sb3ItZW1pbmVuY2UpLFxcbiAgICA1cHggLTI5cHggdmFyKC0tY29sb3ItZW1pbmVuY2UpLFxcbiAgICAxM3B4IC0yNXB4IDAgLTNweCB2YXIoLS1jb2xvci1lbWluZW5jZSk7XFxuICAgIGJveC1zaGFkb3c6IDI0cHggLTIycHggdmFyKC0tY29sb3ItZW1pbmVuY2UpLCAzMHB4IC0xNXB4IDAgLTNweCB2YXIoLS1jb2xvci1lbWluZW5jZSksIDMxcHggMHB4IHZhcigtLWNvbG9yLWVtaW5lbmNlKSwgMjlweCA5cHggMCAtM3B4IHZhcigtLWNvbG9yLWVtaW5lbmNlKSwgMjRweCAyM3B4IHZhcigtLWNvbG9yLWVtaW5lbmNlKSwgMTdweCAzMHB4IDAgLTNweCB2YXIoLS1jb2xvci1lbWluZW5jZSksIDBweCAzM3B4IHZhcigtLWNvbG9yLWVtaW5lbmNlKSwgLTEwcHggMjhweCAwIC0zcHggdmFyKC0tY29sb3ItZW1pbmVuY2UpLCAtMjRweCAyMnB4IHZhcigtLWNvbG9yLWVtaW5lbmNlKSwgLTI5cHggMTRweCAwIC0zcHggdmFyKC0tY29sb3ItZW1pbmVuY2UpLCAtMzFweCAtM3B4IHZhcigtLWNvbG9yLWVtaW5lbmNlKSwgLTMwcHggLTExcHggMCAtM3B4IHZhcigtLWNvbG9yLWVtaW5lbmNlKSwgLTIwcHggLTI1cHggdmFyKC0tY29sb3ItZW1pbmVuY2UpLCAtMTJweCAtMzBweCAwIC0zcHggdmFyKC0tY29sb3ItZW1pbmVuY2UpLCA1cHggLTI5cHggdmFyKC0tY29sb3ItZW1pbmVuY2UpLCAxM3B4IC0yNXB4IDAgLTNweCB2YXIoLS1jb2xvci1lbWluZW5jZSk7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMTgwZGVnKTtcXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMTgwZGVnKTtcXG4gIH1cXG4gIDEwMCUge1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XFxuICAgIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XFxuICAgIC13ZWJraXQtYm94LXNoYWRvdzogMjVweCAtMjJweCB2YXIoLS1jb2xvci1lbWluZW5jZSksXFxuICAgIDE1cHggLTIycHggMCAtM3B4IGJsYWNrLFxcbiAgICAzMXB4IDJweCB2YXIoLS1jb2xvci1lbWluZW5jZSksXFxuICAgIDIxcHggMnB4IDAgLTNweCBibGFjaywgMjNweCAyNXB4IHZhcigtLWNvbG9yLWVtaW5lbmNlKSxcXG4gICAgMTNweCAyNXB4IDAgLTNweCBibGFjaywgMHB4IDMzcHggdmFyKC0tY29sb3ItZW1pbmVuY2UpLFxcbiAgICAtMTBweCAzM3B4IDAgLTNweCBibGFjaywgLTI2cHggMjRweCB2YXIoLS1jb2xvci1lbWluZW5jZSksXFxuICAgIC0xOXB4IDE3cHggMCAtM3B4IGJsYWNrLCAtMzJweCAwcHggdmFyKC0tY29sb3ItZW1pbmVuY2UpLFxcbiAgICAtMjNweCAwcHggMCAtM3B4IGJsYWNrLCAtMjVweCAtMjNweCB2YXIoLS1jb2xvci1lbWluZW5jZSksXFxuICAgIC0xNnB4IC0yM3B4IDAgLTNweCBibGFjaywgMHB4IC0zMXB4IHZhcigtLWNvbG9yLWVtaW5lbmNlKSxcXG4gICAgLTJweCAtMjNweCAwIC0zcHggYmxhY2s7XFxuICAgIGJveC1zaGFkb3c6IDI1cHggLTIycHggdmFyKC0tY29sb3ItZW1pbmVuY2UpLFxcbiAgICAxNXB4IC0yMnB4IDAgLTNweCBibGFjaywgMzFweCAycHggdmFyKC0tY29sb3ItZW1pbmVuY2UpLFxcbiAgICAyMXB4IDJweCAwIC0zcHggYmxhY2ssIDIzcHggMjVweCB2YXIoLS1jb2xvci1lbWluZW5jZSksXFxuICAgIDEzcHggMjVweCAwIC0zcHggYmxhY2ssIDBweCAzM3B4IHZhcigtLWNvbG9yLWVtaW5lbmNlKSxcXG4gICAgLTEwcHggMzNweCAwIC0zcHggYmxhY2ssIC0yNnB4IDI0cHggdmFyKC0tY29sb3ItZW1pbmVuY2UpLFxcbiAgICAtMTlweCAxN3B4IDAgLTNweCBibGFjaywgLTMycHggMHB4IHZhcigtLWNvbG9yLWVtaW5lbmNlKSxcXG4gICAgLTIzcHggMHB4IDAgLTNweCBibGFjaywgLTI1cHggLTIzcHggdmFyKC0tY29sb3ItZW1pbmVuY2UpLFxcbiAgICAtMTZweCAtMjNweCAwIC0zcHggYmxhY2ssIDBweCAtMzFweCB2YXIoLS1jb2xvci1lbWluZW5jZSksXFxuICAgIC0ycHggLTIzcHggMCAtM3B4IGJsYWNrO1xcbiAgfVxcbn1cXG5cXG5Aa2V5ZnJhbWVzIHNwaW5uZXItbV9fbG9hZGVyLTItY2lyY2xlcy0tSlJiVVAge1xcbiAgMCUge1xcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6IDAgMCAwIHZhcigtLWNvbG9yLWVtaW5lbmNlKTtcXG4gICAgYm94LXNoYWRvdzogMCAwIDAgdmFyKC0tY29sb3ItZW1pbmVuY2UpO1xcbiAgICBvcGFjaXR5OiAxO1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcXG4gIH1cXG4gIDUwJSB7XFxuICAgIC13ZWJraXQtYm94LXNoYWRvdzogMjRweCAtMjJweCB2YXIoLS1jb2xvci1lbWluZW5jZSksXFxuICAgIDMwcHggLTE1cHggMCAtM3B4IHZhcigtLWNvbG9yLWVtaW5lbmNlKSxcXG4gICAgMzFweCAwcHggdmFyKC0tY29sb3ItZW1pbmVuY2UpLFxcbiAgICAyOXB4IDlweCAwIC0zcHggdmFyKC0tY29sb3ItZW1pbmVuY2UpLFxcbiAgICAyNHB4IDIzcHggdmFyKC0tY29sb3ItZW1pbmVuY2UpLFxcbiAgICAxN3B4IDMwcHggMCAtM3B4IHZhcigtLWNvbG9yLWVtaW5lbmNlKSxcXG4gICAgMHB4IDMzcHggdmFyKC0tY29sb3ItZW1pbmVuY2UpLFxcbiAgICAtMTBweCAyOHB4IDAgLTNweCB2YXIoLS1jb2xvci1lbWluZW5jZSksXFxuICAgIC0yNHB4IDIycHggdmFyKC0tY29sb3ItZW1pbmVuY2UpLFxcbiAgICAtMjlweCAxNHB4IDAgLTNweCB2YXIoLS1jb2xvci1lbWluZW5jZSksXFxuICAgIC0zMXB4IC0zcHggI2UxMWEyYixcXG4gICAgLTMwcHggLTExcHggMCAtM3B4IHZhcigtLWNvbG9yLWVtaW5lbmNlKSxcXG4gICAgLTIwcHggLTI1cHggdmFyKC0tY29sb3ItZW1pbmVuY2UpLFxcbiAgICAtMTJweCAtMzBweCAwIC0zcHggdmFyKC0tY29sb3ItZW1pbmVuY2UpLFxcbiAgICA1cHggLTI5cHggdmFyKC0tY29sb3ItZW1pbmVuY2UpLFxcbiAgICAxM3B4IC0yNXB4IDAgLTNweCB2YXIoLS1jb2xvci1lbWluZW5jZSk7XFxuICAgIGJveC1zaGFkb3c6IDI0cHggLTIycHggdmFyKC0tY29sb3ItZW1pbmVuY2UpLFxcbiAgICAzMHB4IC0xNXB4IDAgLTNweCB2YXIoLS1jb2xvci1lbWluZW5jZSksXFxuICAgIDMxcHggMHB4IHZhcigtLWNvbG9yLWVtaW5lbmNlKSxcXG4gICAgMjlweCA5cHggMCAtM3B4IHZhcigtLWNvbG9yLWVtaW5lbmNlKSxcXG4gICAgMjRweCAyM3B4IHZhcigtLWNvbG9yLWVtaW5lbmNlKSxcXG4gICAgMTdweCAzMHB4IDAgLTNweCB2YXIoLS1jb2xvci1lbWluZW5jZSksXFxuICAgIDBweCAzM3B4IHZhcigtLWNvbG9yLWVtaW5lbmNlKSxcXG4gICAgLTEwcHggMjhweCAwIC0zcHggdmFyKC0tY29sb3ItZW1pbmVuY2UpLFxcbiAgICAtMjRweCAyMnB4IHZhcigtLWNvbG9yLWVtaW5lbmNlKSxcXG4gICAgLTI5cHggMTRweCAwIC0zcHggdmFyKC0tY29sb3ItZW1pbmVuY2UpLFxcbiAgICAtMzFweCAtM3B4IHZhcigtLWNvbG9yLWVtaW5lbmNlKSxcXG4gICAgLTMwcHggLTExcHggMCAtM3B4IHZhcigtLWNvbG9yLWVtaW5lbmNlKSxcXG4gICAgLTIwcHggLTI1cHggdmFyKC0tY29sb3ItZW1pbmVuY2UpLFxcbiAgICAtMTJweCAtMzBweCAwIC0zcHggdmFyKC0tY29sb3ItZW1pbmVuY2UpLFxcbiAgICA1cHggLTI5cHggdmFyKC0tY29sb3ItZW1pbmVuY2UpLFxcbiAgICAxM3B4IC0yNXB4IDAgLTNweCB2YXIoLS1jb2xvci1lbWluZW5jZSk7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMTgwZGVnKTtcXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMTgwZGVnKTtcXG4gIH1cXG4gIDEwMCUge1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XFxuICAgIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XFxuICAgIC13ZWJraXQtYm94LXNoYWRvdzogMjVweCAtMjJweCB2YXIoLS1jb2xvci1lbWluZW5jZSksXFxuICAgIDE1cHggLTIycHggMCAtM3B4IGJsYWNrLCAzMXB4IDJweCB2YXIoLS1jb2xvci1lbWluZW5jZSksXFxuICAgIDIxcHggMnB4IDAgLTNweCBibGFjaywgMjNweCAyNXB4IHZhcigtLWNvbG9yLWVtaW5lbmNlKSxcXG4gICAgMTNweCAyNXB4IDAgLTNweCBibGFjaywgMHB4IDMzcHggdmFyKC0tY29sb3ItZW1pbmVuY2UpLFxcbiAgICAtMTBweCAzM3B4IDAgLTNweCBibGFjaywgLTI2cHggMjRweCB2YXIoLS1jb2xvci1lbWluZW5jZSksXFxuICAgIC0xOXB4IDE3cHggMCAtM3B4IGJsYWNrLCAtMzJweCAwcHggdmFyKC0tY29sb3ItZW1pbmVuY2UpLFxcbiAgICAtMjNweCAwcHggMCAtM3B4IGJsYWNrLCAtMjVweCAtMjNweCB2YXIoLS1jb2xvci1lbWluZW5jZSksXFxuICAgIC0xNnB4IC0yM3B4IDAgLTNweCBibGFjaywgMHB4IC0zMXB4IHZhcigtLWNvbG9yLWVtaW5lbmNlKSxcXG4gICAgLTJweCAtMjNweCAwIC0zcHggYmxhY2s7XFxuICAgIGJveC1zaGFkb3c6IDI1cHggLTIycHggdmFyKC0tY29sb3ItZW1pbmVuY2UpLFxcbiAgICAxNXB4IC0yMnB4IDAgLTNweCBibGFjaywgMzFweCAycHggdmFyKC0tY29sb3ItZW1pbmVuY2UpLFxcbiAgICAyMXB4IDJweCAwIC0zcHggYmxhY2ssIDIzcHggMjVweCB2YXIoLS1jb2xvci1lbWluZW5jZSksXFxuICAgIDEzcHggMjVweCAwIC0zcHggYmxhY2ssIDBweCAzM3B4IHZhcigtLWNvbG9yLWVtaW5lbmNlKSxcXG4gICAgLTEwcHggMzNweCAwIC0zcHggYmxhY2ssIC0yNnB4IDI0cHggdmFyKC0tY29sb3ItZW1pbmVuY2UpLFxcbiAgICAtMTlweCAxN3B4IDAgLTNweCBibGFjaywgLTMycHggMHB4IHZhcigtLWNvbG9yLWVtaW5lbmNlKSxcXG4gICAgLTIzcHggMHB4IDAgLTNweCBibGFjaywgLTI1cHggLTIzcHggdmFyKC0tY29sb3ItZW1pbmVuY2UpLFxcbiAgICAtMTZweCAtMjNweCAwIC0zcHggYmxhY2ssIDBweCAtMzFweCB2YXIoLS1jb2xvci1lbWluZW5jZSksXFxuICAgIC0ycHggLTIzcHggMCAtM3B4IGJsYWNrO1xcbiAgfVxcbn1cXG5cXG5ALXdlYmtpdC1rZXlmcmFtZXMgc3Bpbm5lci1tX19sb2FkZXItMi1zdGFyLS1mVEg3byB7XFxuICAwJSB7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgwKSByb3RhdGUoMGRlZyk7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMCkgcm90YXRlKDBkZWcpO1xcbiAgfVxcbiAgMTAwJSB7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgwLjcpIHJvdGF0ZSgzNjBkZWcpO1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDAuNykgcm90YXRlKDM2MGRlZyk7XFxuICB9XFxufVxcblxcbkAtd2Via2l0LWtleWZyYW1lcyBzcGlubmVyLW1fX2RvdC1qdW1wLS1fYlplOCB7XFxuICAwJSB7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XFxuICB9XFxuICAxMDAlIHtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTE1cHgpO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTE1cHgpO1xcbiAgfVxcbn1cXG5cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvY29tcG9uZW50cy9TcGlubmVyL3NwaW5uZXIubS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7QUFDQTs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1oscUJBQXFCO0VBQ3JCLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsV0FBVztFQUNYLFlBQVk7RUFDWiw2QkFBNkI7RUFDN0IseUJBQXlCO0VBQ3pCLHFCQUFxQjtFQUNyQiw2RUFBMkQ7RUFDM0QscUVBQW1EO0FBQ3JEOztBQUVBO0VBQ0UsVUFBVTtFQUNWLFdBQVc7RUFDWCxpQ0FBaUM7RUFDakMsa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixxQkFBcUI7RUFDckIsb0JBQW9CO0VBQ3BCLCtCQUErQjtFQUMvQiwwQkFBMEI7RUFDMUIsdUJBQXVCO0VBQ3ZCLHVGQUFxRTtFQUNyRSwrRUFBNkQ7QUFDL0Q7O0FBRUE7RUFDRTtJQUNFLCtDQUErQztJQUMvQyx1Q0FBdUM7SUFDdkMsVUFBVTtJQUNWLCtCQUErQjtJQUMvQix1QkFBdUI7RUFDekI7RUFDQTtJQUNFOzs7Ozs7Ozs7OzsyQ0FXdUM7SUFDdkMsNGxCQUE0bEI7SUFDNWxCLGlDQUFpQztJQUNqQyx5QkFBeUI7RUFDM0I7RUFDQTtJQUNFLFVBQVU7SUFDVixpQ0FBaUM7SUFDakMseUJBQXlCO0lBQ3pCOzs7Ozs7Ozs7MkJBU3VCO0lBQ3ZCOzs7Ozs7OzsyQkFRdUI7RUFDekI7QUFDRjs7QUFFQTtFQUNFO0lBQ0UsK0NBQStDO0lBQy9DLHVDQUF1QztJQUN2QyxVQUFVO0lBQ1YsK0JBQStCO0lBQy9CLHVCQUF1QjtFQUN6QjtFQUNBO0lBQ0U7Ozs7Ozs7Ozs7Ozs7OzsyQ0FldUM7SUFDdkM7Ozs7Ozs7Ozs7Ozs7OzsyQ0FldUM7SUFDdkMsaUNBQWlDO0lBQ2pDLHlCQUF5QjtFQUMzQjtFQUNBO0lBQ0UsVUFBVTtJQUNWLGlDQUFpQztJQUNqQyx5QkFBeUI7SUFDekI7Ozs7Ozs7OzJCQVF1QjtJQUN2Qjs7Ozs7Ozs7MkJBUXVCO0VBQ3pCO0FBQ0Y7O0FBRUE7RUFDRTtJQUNFLHdDQUF3QztJQUN4QyxnQ0FBZ0M7RUFDbEM7RUFDQTtJQUNFLDRDQUE0QztJQUM1QyxvQ0FBb0M7RUFDdEM7QUFDRjs7QUFFQTtFQUNFO0lBQ0UsZ0NBQWdDO0lBQ2hDLHdCQUF3QjtFQUMxQjtFQUNBO0lBQ0Usb0NBQW9DO0lBQ3BDLDRCQUE0QjtFQUM5QjtBQUNGXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIjpnbG9iYWwoLmxvYWRlcldyYXBwZXIpIHtcXG59XFxuXFxuLmxvYWRlciB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICB3aWR0aDogNjBweDtcXG4gIGhlaWdodDogNjBweDtcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gIG1hcmdpbjogMjBweDtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XFxufVxcblxcbjpnbG9iYWwoLmxvYWRlclN0YXIpIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogY2FsYyg1MCUgLSAxMnB4KTtcXG59XFxuXFxuLmxvYWRlcjIgLmxvYWRlclN0YXIge1xcbiAgcG9zaXRpb246IHN0YXRpYztcXG4gIHdpZHRoOiA2MHB4O1xcbiAgaGVpZ2h0OiA2MHB4O1xcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDAuNyk7XFxuICAtbXMtdHJhbnNmb3JtOiBzY2FsZSgwLjcpO1xcbiAgdHJhbnNmb3JtOiBzY2FsZSgwLjcpO1xcbiAgLXdlYmtpdC1hbmltYXRpb246IGxvYWRlci0yLXN0YXIgMXMgZWFzZSBhbHRlcm5hdGUgaW5maW5pdGU7XFxuICBhbmltYXRpb246IGxvYWRlci0yLXN0YXIgMXMgZWFzZSBhbHRlcm5hdGUgaW5maW5pdGU7XFxufVxcblxcbi5sb2FkZXIyIC5sb2FkZXJDaXJjbGVzIHtcXG4gIHdpZHRoOiA4cHg7XFxuICBoZWlnaHQ6IDhweDtcXG4gIGJhY2tncm91bmQ6IHZhcigtLWNvbG9yLWVtaW5lbmNlKTtcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGxlZnQ6IGNhbGMoNTAlIC0gNHB4KTtcXG4gIHRvcDogY2FsYyg1MCUgLSA0cHgpO1xcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMXMgZWFzZTtcXG4gIC1vLXRyYW5zaXRpb246IGFsbCAxcyBlYXNlO1xcbiAgdHJhbnNpdGlvbjogYWxsIDFzIGVhc2U7XFxuICAtd2Via2l0LWFuaW1hdGlvbjogbG9hZGVyLTItY2lyY2xlcyAxcyBlYXNlLWluLW91dCBhbHRlcm5hdGUgaW5maW5pdGU7XFxuICBhbmltYXRpb246IGxvYWRlci0yLWNpcmNsZXMgMXMgZWFzZS1pbi1vdXQgYWx0ZXJuYXRlIGluZmluaXRlO1xcbn1cXG5cXG5ALXdlYmtpdC1rZXlmcmFtZXMgbG9hZGVyLTItY2lyY2xlcyB7XFxuICAwJSB7XFxuICAgIC13ZWJraXQtYm94LXNoYWRvdzogMCAwIDAgdmFyKC0tY29sb3ItZW1pbmVuY2UpO1xcbiAgICBib3gtc2hhZG93OiAwIDAgMCB2YXIoLS1jb2xvci1lbWluZW5jZSk7XFxuICAgIG9wYWNpdHk6IDE7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XFxuICAgIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xcbiAgfVxcbiAgNTAlIHtcXG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiAyNHB4IC0yMnB4IHZhcigtLWNvbG9yLWVtaW5lbmNlKSxcXG4gICAgMzBweCAtMTVweCAwIC0zcHggdmFyKC0tY29sb3ItZW1pbmVuY2UpLFxcbiAgICAzMXB4IDBweCB2YXIoLS1jb2xvci1lbWluZW5jZSksXFxuICAgIDI5cHggOXB4IDAgLTNweCB2YXIoLS1jb2xvci1lbWluZW5jZSksXFxuICAgIDI0cHggMjNweCB2YXIoLS1jb2xvci1lbWluZW5jZSksIDE3cHggMzBweCAwIC0zcHggdmFyKC0tY29sb3ItZW1pbmVuY2UpLFxcbiAgICAwcHggMzNweCB2YXIoLS1jb2xvci1lbWluZW5jZSksIC0xMHB4IDI4cHggMCAtM3B4IHZhcigtLWNvbG9yLWVtaW5lbmNlKSxcXG4gICAgLTI0cHggMjJweCB2YXIoLS1jb2xvci1lbWluZW5jZSksIC0yOXB4IDE0cHggMCAtM3B4IHZhcigtLWNvbG9yLWVtaW5lbmNlKSxcXG4gICAgLTMxcHggLTNweCB2YXIoLS1jb2xvci1lbWluZW5jZSksIC0zMHB4IC0xMXB4IDAgLTNweCB2YXIoLS1jb2xvci1lbWluZW5jZSksXFxuICAgIC0yMHB4IC0yNXB4IHZhcigtLWNvbG9yLWVtaW5lbmNlKSxcXG4gICAgLTEycHggLTMwcHggMCAtM3B4IHZhcigtLWNvbG9yLWVtaW5lbmNlKSxcXG4gICAgNXB4IC0yOXB4IHZhcigtLWNvbG9yLWVtaW5lbmNlKSxcXG4gICAgMTNweCAtMjVweCAwIC0zcHggdmFyKC0tY29sb3ItZW1pbmVuY2UpO1xcbiAgICBib3gtc2hhZG93OiAyNHB4IC0yMnB4IHZhcigtLWNvbG9yLWVtaW5lbmNlKSwgMzBweCAtMTVweCAwIC0zcHggdmFyKC0tY29sb3ItZW1pbmVuY2UpLCAzMXB4IDBweCB2YXIoLS1jb2xvci1lbWluZW5jZSksIDI5cHggOXB4IDAgLTNweCB2YXIoLS1jb2xvci1lbWluZW5jZSksIDI0cHggMjNweCB2YXIoLS1jb2xvci1lbWluZW5jZSksIDE3cHggMzBweCAwIC0zcHggdmFyKC0tY29sb3ItZW1pbmVuY2UpLCAwcHggMzNweCB2YXIoLS1jb2xvci1lbWluZW5jZSksIC0xMHB4IDI4cHggMCAtM3B4IHZhcigtLWNvbG9yLWVtaW5lbmNlKSwgLTI0cHggMjJweCB2YXIoLS1jb2xvci1lbWluZW5jZSksIC0yOXB4IDE0cHggMCAtM3B4IHZhcigtLWNvbG9yLWVtaW5lbmNlKSwgLTMxcHggLTNweCB2YXIoLS1jb2xvci1lbWluZW5jZSksIC0zMHB4IC0xMXB4IDAgLTNweCB2YXIoLS1jb2xvci1lbWluZW5jZSksIC0yMHB4IC0yNXB4IHZhcigtLWNvbG9yLWVtaW5lbmNlKSwgLTEycHggLTMwcHggMCAtM3B4IHZhcigtLWNvbG9yLWVtaW5lbmNlKSwgNXB4IC0yOXB4IHZhcigtLWNvbG9yLWVtaW5lbmNlKSwgMTNweCAtMjVweCAwIC0zcHggdmFyKC0tY29sb3ItZW1pbmVuY2UpO1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDE4MGRlZyk7XFxuICAgIHRyYW5zZm9ybTogcm90YXRlKDE4MGRlZyk7XFxuICB9XFxuICAxMDAlIHtcXG4gICAgb3BhY2l0eTogMDtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6IDI1cHggLTIycHggdmFyKC0tY29sb3ItZW1pbmVuY2UpLFxcbiAgICAxNXB4IC0yMnB4IDAgLTNweCBibGFjayxcXG4gICAgMzFweCAycHggdmFyKC0tY29sb3ItZW1pbmVuY2UpLFxcbiAgICAyMXB4IDJweCAwIC0zcHggYmxhY2ssIDIzcHggMjVweCB2YXIoLS1jb2xvci1lbWluZW5jZSksXFxuICAgIDEzcHggMjVweCAwIC0zcHggYmxhY2ssIDBweCAzM3B4IHZhcigtLWNvbG9yLWVtaW5lbmNlKSxcXG4gICAgLTEwcHggMzNweCAwIC0zcHggYmxhY2ssIC0yNnB4IDI0cHggdmFyKC0tY29sb3ItZW1pbmVuY2UpLFxcbiAgICAtMTlweCAxN3B4IDAgLTNweCBibGFjaywgLTMycHggMHB4IHZhcigtLWNvbG9yLWVtaW5lbmNlKSxcXG4gICAgLTIzcHggMHB4IDAgLTNweCBibGFjaywgLTI1cHggLTIzcHggdmFyKC0tY29sb3ItZW1pbmVuY2UpLFxcbiAgICAtMTZweCAtMjNweCAwIC0zcHggYmxhY2ssIDBweCAtMzFweCB2YXIoLS1jb2xvci1lbWluZW5jZSksXFxuICAgIC0ycHggLTIzcHggMCAtM3B4IGJsYWNrO1xcbiAgICBib3gtc2hhZG93OiAyNXB4IC0yMnB4IHZhcigtLWNvbG9yLWVtaW5lbmNlKSxcXG4gICAgMTVweCAtMjJweCAwIC0zcHggYmxhY2ssIDMxcHggMnB4IHZhcigtLWNvbG9yLWVtaW5lbmNlKSxcXG4gICAgMjFweCAycHggMCAtM3B4IGJsYWNrLCAyM3B4IDI1cHggdmFyKC0tY29sb3ItZW1pbmVuY2UpLFxcbiAgICAxM3B4IDI1cHggMCAtM3B4IGJsYWNrLCAwcHggMzNweCB2YXIoLS1jb2xvci1lbWluZW5jZSksXFxuICAgIC0xMHB4IDMzcHggMCAtM3B4IGJsYWNrLCAtMjZweCAyNHB4IHZhcigtLWNvbG9yLWVtaW5lbmNlKSxcXG4gICAgLTE5cHggMTdweCAwIC0zcHggYmxhY2ssIC0zMnB4IDBweCB2YXIoLS1jb2xvci1lbWluZW5jZSksXFxuICAgIC0yM3B4IDBweCAwIC0zcHggYmxhY2ssIC0yNXB4IC0yM3B4IHZhcigtLWNvbG9yLWVtaW5lbmNlKSxcXG4gICAgLTE2cHggLTIzcHggMCAtM3B4IGJsYWNrLCAwcHggLTMxcHggdmFyKC0tY29sb3ItZW1pbmVuY2UpLFxcbiAgICAtMnB4IC0yM3B4IDAgLTNweCBibGFjaztcXG4gIH1cXG59XFxuXFxuQGtleWZyYW1lcyBsb2FkZXItMi1jaXJjbGVzIHtcXG4gIDAlIHtcXG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiAwIDAgMCB2YXIoLS1jb2xvci1lbWluZW5jZSk7XFxuICAgIGJveC1zaGFkb3c6IDAgMCAwIHZhcigtLWNvbG9yLWVtaW5lbmNlKTtcXG4gICAgb3BhY2l0eTogMTtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XFxuICB9XFxuICA1MCUge1xcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6IDI0cHggLTIycHggdmFyKC0tY29sb3ItZW1pbmVuY2UpLFxcbiAgICAzMHB4IC0xNXB4IDAgLTNweCB2YXIoLS1jb2xvci1lbWluZW5jZSksXFxuICAgIDMxcHggMHB4IHZhcigtLWNvbG9yLWVtaW5lbmNlKSxcXG4gICAgMjlweCA5cHggMCAtM3B4IHZhcigtLWNvbG9yLWVtaW5lbmNlKSxcXG4gICAgMjRweCAyM3B4IHZhcigtLWNvbG9yLWVtaW5lbmNlKSxcXG4gICAgMTdweCAzMHB4IDAgLTNweCB2YXIoLS1jb2xvci1lbWluZW5jZSksXFxuICAgIDBweCAzM3B4IHZhcigtLWNvbG9yLWVtaW5lbmNlKSxcXG4gICAgLTEwcHggMjhweCAwIC0zcHggdmFyKC0tY29sb3ItZW1pbmVuY2UpLFxcbiAgICAtMjRweCAyMnB4IHZhcigtLWNvbG9yLWVtaW5lbmNlKSxcXG4gICAgLTI5cHggMTRweCAwIC0zcHggdmFyKC0tY29sb3ItZW1pbmVuY2UpLFxcbiAgICAtMzFweCAtM3B4ICNlMTFhMmIsXFxuICAgIC0zMHB4IC0xMXB4IDAgLTNweCB2YXIoLS1jb2xvci1lbWluZW5jZSksXFxuICAgIC0yMHB4IC0yNXB4IHZhcigtLWNvbG9yLWVtaW5lbmNlKSxcXG4gICAgLTEycHggLTMwcHggMCAtM3B4IHZhcigtLWNvbG9yLWVtaW5lbmNlKSxcXG4gICAgNXB4IC0yOXB4IHZhcigtLWNvbG9yLWVtaW5lbmNlKSxcXG4gICAgMTNweCAtMjVweCAwIC0zcHggdmFyKC0tY29sb3ItZW1pbmVuY2UpO1xcbiAgICBib3gtc2hhZG93OiAyNHB4IC0yMnB4IHZhcigtLWNvbG9yLWVtaW5lbmNlKSxcXG4gICAgMzBweCAtMTVweCAwIC0zcHggdmFyKC0tY29sb3ItZW1pbmVuY2UpLFxcbiAgICAzMXB4IDBweCB2YXIoLS1jb2xvci1lbWluZW5jZSksXFxuICAgIDI5cHggOXB4IDAgLTNweCB2YXIoLS1jb2xvci1lbWluZW5jZSksXFxuICAgIDI0cHggMjNweCB2YXIoLS1jb2xvci1lbWluZW5jZSksXFxuICAgIDE3cHggMzBweCAwIC0zcHggdmFyKC0tY29sb3ItZW1pbmVuY2UpLFxcbiAgICAwcHggMzNweCB2YXIoLS1jb2xvci1lbWluZW5jZSksXFxuICAgIC0xMHB4IDI4cHggMCAtM3B4IHZhcigtLWNvbG9yLWVtaW5lbmNlKSxcXG4gICAgLTI0cHggMjJweCB2YXIoLS1jb2xvci1lbWluZW5jZSksXFxuICAgIC0yOXB4IDE0cHggMCAtM3B4IHZhcigtLWNvbG9yLWVtaW5lbmNlKSxcXG4gICAgLTMxcHggLTNweCB2YXIoLS1jb2xvci1lbWluZW5jZSksXFxuICAgIC0zMHB4IC0xMXB4IDAgLTNweCB2YXIoLS1jb2xvci1lbWluZW5jZSksXFxuICAgIC0yMHB4IC0yNXB4IHZhcigtLWNvbG9yLWVtaW5lbmNlKSxcXG4gICAgLTEycHggLTMwcHggMCAtM3B4IHZhcigtLWNvbG9yLWVtaW5lbmNlKSxcXG4gICAgNXB4IC0yOXB4IHZhcigtLWNvbG9yLWVtaW5lbmNlKSxcXG4gICAgMTNweCAtMjVweCAwIC0zcHggdmFyKC0tY29sb3ItZW1pbmVuY2UpO1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDE4MGRlZyk7XFxuICAgIHRyYW5zZm9ybTogcm90YXRlKDE4MGRlZyk7XFxuICB9XFxuICAxMDAlIHtcXG4gICAgb3BhY2l0eTogMDtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6IDI1cHggLTIycHggdmFyKC0tY29sb3ItZW1pbmVuY2UpLFxcbiAgICAxNXB4IC0yMnB4IDAgLTNweCBibGFjaywgMzFweCAycHggdmFyKC0tY29sb3ItZW1pbmVuY2UpLFxcbiAgICAyMXB4IDJweCAwIC0zcHggYmxhY2ssIDIzcHggMjVweCB2YXIoLS1jb2xvci1lbWluZW5jZSksXFxuICAgIDEzcHggMjVweCAwIC0zcHggYmxhY2ssIDBweCAzM3B4IHZhcigtLWNvbG9yLWVtaW5lbmNlKSxcXG4gICAgLTEwcHggMzNweCAwIC0zcHggYmxhY2ssIC0yNnB4IDI0cHggdmFyKC0tY29sb3ItZW1pbmVuY2UpLFxcbiAgICAtMTlweCAxN3B4IDAgLTNweCBibGFjaywgLTMycHggMHB4IHZhcigtLWNvbG9yLWVtaW5lbmNlKSxcXG4gICAgLTIzcHggMHB4IDAgLTNweCBibGFjaywgLTI1cHggLTIzcHggdmFyKC0tY29sb3ItZW1pbmVuY2UpLFxcbiAgICAtMTZweCAtMjNweCAwIC0zcHggYmxhY2ssIDBweCAtMzFweCB2YXIoLS1jb2xvci1lbWluZW5jZSksXFxuICAgIC0ycHggLTIzcHggMCAtM3B4IGJsYWNrO1xcbiAgICBib3gtc2hhZG93OiAyNXB4IC0yMnB4IHZhcigtLWNvbG9yLWVtaW5lbmNlKSxcXG4gICAgMTVweCAtMjJweCAwIC0zcHggYmxhY2ssIDMxcHggMnB4IHZhcigtLWNvbG9yLWVtaW5lbmNlKSxcXG4gICAgMjFweCAycHggMCAtM3B4IGJsYWNrLCAyM3B4IDI1cHggdmFyKC0tY29sb3ItZW1pbmVuY2UpLFxcbiAgICAxM3B4IDI1cHggMCAtM3B4IGJsYWNrLCAwcHggMzNweCB2YXIoLS1jb2xvci1lbWluZW5jZSksXFxuICAgIC0xMHB4IDMzcHggMCAtM3B4IGJsYWNrLCAtMjZweCAyNHB4IHZhcigtLWNvbG9yLWVtaW5lbmNlKSxcXG4gICAgLTE5cHggMTdweCAwIC0zcHggYmxhY2ssIC0zMnB4IDBweCB2YXIoLS1jb2xvci1lbWluZW5jZSksXFxuICAgIC0yM3B4IDBweCAwIC0zcHggYmxhY2ssIC0yNXB4IC0yM3B4IHZhcigtLWNvbG9yLWVtaW5lbmNlKSxcXG4gICAgLTE2cHggLTIzcHggMCAtM3B4IGJsYWNrLCAwcHggLTMxcHggdmFyKC0tY29sb3ItZW1pbmVuY2UpLFxcbiAgICAtMnB4IC0yM3B4IDAgLTNweCBibGFjaztcXG4gIH1cXG59XFxuXFxuQC13ZWJraXQta2V5ZnJhbWVzIGxvYWRlci0yLXN0YXIge1xcbiAgMCUge1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMCkgcm90YXRlKDBkZWcpO1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDApIHJvdGF0ZSgwZGVnKTtcXG4gIH1cXG4gIDEwMCUge1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMC43KSByb3RhdGUoMzYwZGVnKTtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgwLjcpIHJvdGF0ZSgzNjBkZWcpO1xcbiAgfVxcbn1cXG5cXG5ALXdlYmtpdC1rZXlmcmFtZXMgZG90LWp1bXAge1xcbiAgMCUge1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xcbiAgfVxcbiAgMTAwJSB7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xNXB4KTtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xNXB4KTtcXG4gIH1cXG59XFxuXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5sb2NhbHMgPSB7XG5cdFwibG9hZGVyXCI6IFwic3Bpbm5lci1tX19sb2FkZXItLUFBZXRvXCIsXG5cdFwibG9hZGVyMlwiOiBcInNwaW5uZXItbV9fbG9hZGVyMi0tb2JBaTVcIixcblx0XCJsb2FkZXJTdGFyXCI6IFwic3Bpbm5lci1tX19sb2FkZXJTdGFyLS1HSHBQcFwiLFxuXHRcImxvYWRlci0yLXN0YXJcIjogXCJzcGlubmVyLW1fX2xvYWRlci0yLXN0YXItLWZUSDdvXCIsXG5cdFwibG9hZGVyQ2lyY2xlc1wiOiBcInNwaW5uZXItbV9fbG9hZGVyQ2lyY2xlcy0tUEROT3JcIixcblx0XCJsb2FkZXItMi1jaXJjbGVzXCI6IFwic3Bpbm5lci1tX19sb2FkZXItMi1jaXJjbGVzLS1KUmJVUFwiLFxuXHRcImRvdC1qdW1wXCI6IFwic3Bpbm5lci1tX19kb3QtanVtcC0tX2JaZThcIlxufTtcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4uLy4uL2Fzc2V0cy9pbWFnZXMvYXJyb3ctbGlzdC5wbmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIubWFpblBhZ2UtbV9fbWFpbnNjcmVlbkNvbnRhaW5lci0tRGhQM04ge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDU0NHB4O1xcbiAgbWFyZ2luLWJvdHRvbTogMTAwcHg7XFxufVxcblxcblxcbi5tYWluUGFnZS1tX19waG90b3NDb250YWluZXItLV9SdGJKIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGhlaWdodDogNTQ0cHg7XFxuICBtYXJnaW4tYm90dG9tOiA0MHB4O1xcbn1cXG5cXG4ubWFpblBhZ2UtbV9fcGhvdG9zQ29udGFpbmVyLS1fUnRiSiAubG9hZGVyV3JhcHBlciB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDUwJTtcXG4gIGxlZnQ6IDUwJTtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xcbn1cXG5cXG4ubWFpblBhZ2UtbV9fcGhvdG9zQ29udGFpbmVyLS1fUnRiSiBpbWcge1xcbiAgaGVpZ2h0OiAxMDAlO1xcbn1cXG5cXG4ubWFpblBhZ2UtbV9fbWFpbkNvbnRhaW5lci0tWkgxSXoge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgbGVmdDogMDtcXG4gIHRvcDogMDtcXG4gIGJvdHRvbTogMDtcXG4gIHJpZ2h0OiAwO1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4ubWFpblBhZ2UtbV9fbWFpblRpdGxlLS1RUHVPOCB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBsZWZ0OiAwO1xcbiAgdG9wOiAwO1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMTQycHggMTQwcHggMDtcXG4gIG1heC13aWR0aDogNTM5cHg7XFxuICBmb250LXdlaWdodDogNjAwO1xcbiAgZm9udC1zaXplOiA3MnB4O1xcbiAgbGluZS1oZWlnaHQ6IDgycHg7XFxuICBjb2xvcjogdmFyKC0tY29sb3ItbWFpbi10aXRsZSk7XFxuICB0ZXh0LXNoYWRvdzogLTFweCAwIDNweCBibGFjaywgLTJweCAtMXB4IDJweCB3aGl0ZTtcXG59XFxuXFxuLm1haW5QYWdlLW1fX2Fib3V0Q29udGFpbmVyLS1teGlmUCB7XFxuICBtYXJnaW4tYm90dG9tOiAxMDBweDtcXG59XFxuXFxuXFxuLm1haW5QYWdlLW1fX2Fib3V0LS1UR0JJWCB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBtYXJnaW4tYm90dG9tOiAxMDBweDtcXG4gIHBhZGRpbmc6IDIwcHg7XFxufVxcblxcbi5tYWluUGFnZS1tX19hYm91dC0tVEdCSVg6OmJlZm9yZSB7XFxuICBjb250ZW50OiAnJztcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGxlZnQ6IDA7XFxuICB0b3A6IDA7XFxuICB3aWR0aDogM3B4O1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItZXVjYWx5cHR1cyk7XFxufVxcblxcbi5tYWluUGFnZS1tX19hYm91dFRpdGxlLS13dk43YSB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBtYXJnaW46IDA7XFxuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gIGZvbnQtc2l6ZTogMzBweDtcXG59XFxuXFxuLm1haW5QYWdlLW1fX2Fib3V0VGl0bGVUZXh0LS1GbVc3ZCB7XFxuICBmb250LXdlaWdodDogNDAwO1xcbiAgZm9udC1zaXplOiAxOHB4O1xcbiAgbGluZS1oZWlnaHQ6IDI4cHg7XFxufVxcblxcbi5tYWluUGFnZS1tX19kb3NtdGgtLWVrZUVMIHtcXG4gIHBhZGRpbmc6IDAgMjBweDtcXG59XFxuXFxuLm1haW5QYWdlLW1fX2Rvc210aFRpdGxlLS1zRU1JRiB7XFxuICBtYXJnaW46IDA7XFxuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gIGZvbnQtc2l6ZTogMjJweDtcXG59XFxuXFxuLm1haW5QYWdlLW1fX2Rvc210aExpc3QtLVZVcE1PIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGJhY2tncm91bmQtc2l6ZTogMTAwcHggMTAwcHg7XFxufVxcblxcbi5tYWluUGFnZS1tX19kb3NtdGhJdGVtLS1jaEFkWiB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBwYWRkaW5nLWxlZnQ6IDQwcHg7XFxuICBmb250LXdlaWdodDogNDAwO1xcbiAgZm9udC1zaXplOiAxOHB4O1xcbn1cXG5cXG4ubWFpblBhZ2UtbV9fZG9zbXRoSXRlbS0tY2hBZFo6OmJlZm9yZSB7XFxuICBjb250ZW50OiAnJztcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGxlZnQ6IDA7XFxuICB0b3A6IDA7XFxuICB3aWR0aDogMjBweDtcXG4gIGhlaWdodDogMjBweDtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gKyBcIik7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XFxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbn1cXG5cXG4ubWFpblBhZ2UtbV9fZG9zbXRoSXRlbS0tY2hBZFo6bm90KDpsYXN0LWNoaWxkKSB7XFxuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xcbn1cXG5cXG4ubWFpblBhZ2UtbV9fdW5zcGxhc2hMaW5rLS1tZ1ByYyB7XFxuICBjb2xvcjogdmFyKC0tY29sb3ItZW1pbmVuY2UpO1xcbiAgdHJhbnNpdGlvbjogdGV4dC1kZWNvcmF0aW9uIDAuM3MgZWFzZS1pbjtcXG59XFxuXFxuLm1haW5QYWdlLW1fX3Vuc3BsYXNoTGluay0tbWdQcmM6aG92ZXIge1xcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XFxuICB0cmFuc2l0aW9uOiB0ZXh0LWRlY29yYXRpb24gMC4zcyBlYXNlLWluO1xcbn1cXG5cXG4ubWFpblBhZ2UtbV9fbG9va1Bob3RvLS1MZkJ5VCB7XFxuICBtYXJnaW4tYm90dG9tOiAxMDBweDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLm1haW5QYWdlLW1fX2xvb2tQaG90b1RleHQtLUNzZXhDIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgbWFyZ2luLWJvdHRvbTogNTBweDtcXG4gIGZvbnQtc2l6ZTogMjRweDtcXG59XFxuXFxuLm1haW5QYWdlLW1fX2xvb2tQaG90b0J1dHRvbi0tdng3RzIge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcXG4gIG91dGxpbmU6IG5vbmU7XFxuICBib3JkZXI6IDJweCBzb2xpZCB0cmFuc3BhcmVudDtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIHBhZGRpbmc6IDE2cHggMzBweDtcXG4gIGJveC1zaGFkb3c6IDZweCA2cHggMTJweCByZ2JhKDc5LCAyMDksIDE5NywgMC42NCk7XFxuICBmb250LXNpemU6IDIycHg7XFxuICBjb2xvcjogdmFyKC0tY29sb3Itd2hpdGUpO1xcbiAgYmFja2dyb3VuZDogdmFyKC0tY29sb3ItZXVjYWx5cHR1cyk7XFxuICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLWluLW91dCAwcztcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLm1haW5QYWdlLW1fX2xvb2tQaG90b0J1dHRvbi0tdng3RzI6OmJlZm9yZSB7XFxuICBjb250ZW50OiAnJztcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGxlZnQ6IDUwJTtcXG4gIHRvcDogNTAlO1xcbiAgb3BhY2l0eTogMDtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1pbi1vdXQgMHM7XFxufVxcblxcbi5tYWluUGFnZS1tX19sb29rUGhvdG9CdXR0b24tLXZ4N0cyOmhvdmVyIHtcXG4gIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLWNvbG9yLWV1Y2FseXB0dXMpO1xcbiAgY29sb3I6IHZhcigtLWNvbG9yLWV1Y2FseXB0dXMpO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3Itd2hpdGUpO1xcbn1cXG5cXG4ubWFpblBhZ2UtbV9fbG9va1Bob3RvQnV0dG9uLS12eDdHMjo6YWZ0ZXIge1xcbiAgY29udGVudDogJyc7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBsZWZ0OiA1MCU7XFxuICB0b3A6IDUwJTtcXG4gIHotaW5kZXg6IC0xO1xcbiAgYm9yZGVyOiA1cHggc29saWQgdmFyKC0tY29sb3ItYnJpZ2h0LXR1cnF1b2lzZSk7XFxuICBib3JkZXItcmFkaXVzOiAxNXB4O1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XFxuICBhbmltYXRpb246IG1haW5QYWdlLW1fX3JpbmctLUhoMTNqIDEuNXMgaW5maW5pdGU7XFxufVxcblxcbi5tYWluUGFnZS1tX19sb29rUGhvdG9CdXR0b24tLXZ4N0cyOmhvdmVyOjphZnRlcixcXG4ubWFpblBhZ2UtbV9fbG9va1Bob3RvQnV0dG9uLS12eDdHMjpmb2N1czo6YWZ0ZXIge1xcbiAgZGlzcGxheTogbm9uZTtcXG4gIGFuaW1hdGlvbjogbm9uZTtcXG59XFxuXFxuQGtleWZyYW1lcyBtYWluUGFnZS1tX19yaW5nLS1IaDEzaiB7XFxuICAwJSB7XFxuICAgIHBhZGRpbmc6IDE2cHggMzBweDtcXG4gICAgb3BhY2l0eTogMTtcXG4gIH1cXG5cXG4gIDEwMCUge1xcbiAgICBwYWRkaW5nOiA1MHB4IDE1MHB4O1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgfVxcbn1cXG5cXG5AbWVkaWEgKG1heC13aWR0aDogNTc2cHgpIHtcXG4gIC5tYWluUGFnZS1tX19tYWluVGl0bGUtLVFQdU84IHtcXG4gICAgZm9udC1zaXplOiAzMnB4O1xcbiAgICBsaW5lLWhlaWdodDogNTJweDtcXG4gICAgcGFkZGluZzogMjBweDtcXG4gIH1cXG5cXG4gIC5tYWluUGFnZS1tX19waG90b3NDb250YWluZXItLV9SdGJKIHtcXG4gICAgaGVpZ2h0OiAzMjBweDtcXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcXG4gIH1cXG5cXG4gIC5tYWluUGFnZS1tX19hYm91dC0tVEdCSVgge1xcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xcbiAgfVxcblxcbiAgLm1haW5QYWdlLW1fX2Fib3V0VGl0bGUtLXd2TjdhIHtcXG4gICAgZm9udC1zaXplOiAyMnB4O1xcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xcbiAgfVxcblxcbiAgLm1haW5QYWdlLW1fX2Fib3V0VGl0bGVUZXh0LS1GbVc3ZCB7XFxuICAgIGZvbnQtc2l6ZTogMTZweDtcXG4gIH1cXG5cXG4gIC5tYWluUGFnZS1tX19hYm91dENvbnRhaW5lci0tbXhpZlAge1xcbiAgICBtYXJnaW4tYm90dG9tOiA2MHB4O1xcbiAgfVxcblxcbiAgLm1haW5QYWdlLW1fX2Rvc210aFRpdGxlLS1zRU1JRiB7XFxuICAgIGZvbnQtc2l6ZTogMjJweDtcXG4gIH1cXG5cXG4gIC5tYWluUGFnZS1tX19kb3NtdGgtLWVrZUVMIHtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcXG4gIH1cXG5cXG4gIC5tYWluUGFnZS1tX19sb29rUGhvdG9UZXh0LS1Dc2V4QyB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICB9XFxuXFxuICAubWFpblBhZ2UtbV9fbG9va1Bob3RvLS1MZkJ5VCB7XFxuICAgIG1hcmdpbi1ib3R0b206IDQwcHg7XFxuICB9XFxufVxcblxcblxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9wYWdlcy9NYWluUGFnZS9tYWluUGFnZS5tLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLFdBQVc7RUFDWCxhQUFhO0VBQ2Isb0JBQW9CO0FBQ3RCOzs7QUFHQTtFQUNFLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2IsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFFBQVE7RUFDUixTQUFTO0VBQ1QsZ0NBQWdDO0FBQ2xDOztBQUVBO0VBQ0UsWUFBWTtBQUNkOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLE9BQU87RUFDUCxNQUFNO0VBQ04sU0FBUztFQUNULFFBQVE7RUFDUixTQUFTO0VBQ1QsVUFBVTtFQUNWLFdBQVc7QUFDYjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixPQUFPO0VBQ1AsTUFBTTtFQUNOLFNBQVM7RUFDVCxzQkFBc0I7RUFDdEIsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtFQUNoQixlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLDhCQUE4QjtFQUM5QixrREFBa0Q7QUFDcEQ7O0FBRUE7RUFDRSxvQkFBb0I7QUFDdEI7OztBQUdBO0VBQ0Usa0JBQWtCO0VBQ2xCLG9CQUFvQjtFQUNwQixhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLE9BQU87RUFDUCxNQUFNO0VBQ04sVUFBVTtFQUNWLFlBQVk7RUFDWix5Q0FBeUM7QUFDM0M7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsU0FBUztFQUNULG1CQUFtQjtFQUNuQixnQkFBZ0I7RUFDaEIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixlQUFlO0VBQ2YsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLFNBQVM7RUFDVCxtQkFBbUI7RUFDbkIsZ0JBQWdCO0VBQ2hCLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsNEJBQTRCO0FBQzlCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsT0FBTztFQUNQLE1BQU07RUFDTixXQUFXO0VBQ1gsWUFBWTtFQUNaLHlEQUEyRDtFQUMzRCwyQkFBMkI7RUFDM0IsNEJBQTRCO0FBQzlCOztBQUVBO0VBQ0UsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsNEJBQTRCO0VBQzVCLHdDQUF3QztBQUMxQzs7QUFFQTtFQUNFLDBCQUEwQjtFQUMxQix3Q0FBd0M7QUFDMUM7O0FBRUE7RUFDRSxvQkFBb0I7RUFDcEIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsY0FBYztFQUNkLG1CQUFtQjtFQUNuQixlQUFlO0FBQ2pCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLG1CQUFtQjtFQUNuQixhQUFhO0VBQ2IsNkJBQTZCO0VBQzdCLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIsaURBQWlEO0VBQ2pELGVBQWU7RUFDZix5QkFBeUI7RUFDekIsbUNBQW1DO0VBQ25DLG1DQUFtQztFQUNuQyxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsV0FBVztFQUNYLGtCQUFrQjtFQUNsQixTQUFTO0VBQ1QsUUFBUTtFQUNSLFVBQVU7RUFDVixnQ0FBZ0M7RUFDaEMsbUNBQW1DO0FBQ3JDOztBQUVBO0VBQ0UseUNBQXlDO0VBQ3pDLDhCQUE4QjtFQUM5QixvQ0FBb0M7QUFDdEM7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLFNBQVM7RUFDVCxRQUFRO0VBQ1IsV0FBVztFQUNYLCtDQUErQztFQUMvQyxtQkFBbUI7RUFDbkIsZ0NBQWdDO0VBQ2hDLGdEQUE2QjtBQUMvQjs7QUFFQTs7RUFFRSxhQUFhO0VBQ2IsZUFBZTtBQUNqQjs7QUFFQTtFQUNFO0lBQ0Usa0JBQWtCO0lBQ2xCLFVBQVU7RUFDWjs7RUFFQTtJQUNFLG1CQUFtQjtJQUNuQixVQUFVO0VBQ1o7QUFDRjs7QUFFQTtFQUNFO0lBQ0UsZUFBZTtJQUNmLGlCQUFpQjtJQUNqQixhQUFhO0VBQ2Y7O0VBRUE7SUFDRSxhQUFhO0lBQ2IsbUJBQW1CO0VBQ3JCOztFQUVBO0lBQ0UsbUJBQW1CO0VBQ3JCOztFQUVBO0lBQ0UsZUFBZTtJQUNmLG1CQUFtQjtFQUNyQjs7RUFFQTtJQUNFLGVBQWU7RUFDakI7O0VBRUE7SUFDRSxtQkFBbUI7RUFDckI7O0VBRUE7SUFDRSxlQUFlO0VBQ2pCOztFQUVBO0lBQ0UsVUFBVTtJQUNWLG1CQUFtQjtFQUNyQjs7RUFFQTtJQUNFLGFBQWE7RUFDZjs7RUFFQTtJQUNFLG1CQUFtQjtFQUNyQjtBQUNGXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi5tYWluc2NyZWVuQ29udGFpbmVyIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiA1NDRweDtcXG4gIG1hcmdpbi1ib3R0b206IDEwMHB4O1xcbn1cXG5cXG5cXG4ucGhvdG9zQ29udGFpbmVyIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGhlaWdodDogNTQ0cHg7XFxuICBtYXJnaW4tYm90dG9tOiA0MHB4O1xcbn1cXG5cXG4ucGhvdG9zQ29udGFpbmVyIDpnbG9iYWwoLmxvYWRlcldyYXBwZXIpIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogNTAlO1xcbiAgbGVmdDogNTAlO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XFxufVxcblxcbi5waG90b3NDb250YWluZXIgaW1nIHtcXG4gIGhlaWdodDogMTAwJTtcXG59XFxuXFxuLm1haW5Db250YWluZXIge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgbGVmdDogMDtcXG4gIHRvcDogMDtcXG4gIGJvdHRvbTogMDtcXG4gIHJpZ2h0OiAwO1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4ubWFpblRpdGxlIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGxlZnQ6IDA7XFxuICB0b3A6IDA7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAxNDJweCAxNDBweCAwO1xcbiAgbWF4LXdpZHRoOiA1MzlweDtcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICBmb250LXNpemU6IDcycHg7XFxuICBsaW5lLWhlaWdodDogODJweDtcXG4gIGNvbG9yOiB2YXIoLS1jb2xvci1tYWluLXRpdGxlKTtcXG4gIHRleHQtc2hhZG93OiAtMXB4IDAgM3B4IGJsYWNrLCAtMnB4IC0xcHggMnB4IHdoaXRlO1xcbn1cXG5cXG4uYWJvdXRDb250YWluZXIge1xcbiAgbWFyZ2luLWJvdHRvbTogMTAwcHg7XFxufVxcblxcblxcbi5hYm91dCB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBtYXJnaW4tYm90dG9tOiAxMDBweDtcXG4gIHBhZGRpbmc6IDIwcHg7XFxufVxcblxcbi5hYm91dDo6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6ICcnO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgbGVmdDogMDtcXG4gIHRvcDogMDtcXG4gIHdpZHRoOiAzcHg7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1ldWNhbHlwdHVzKTtcXG59XFxuXFxuLmFib3V0VGl0bGUge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgbWFyZ2luOiAwO1xcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICBmb250LXNpemU6IDMwcHg7XFxufVxcblxcbi5hYm91dFRpdGxlVGV4dCB7XFxuICBmb250LXdlaWdodDogNDAwO1xcbiAgZm9udC1zaXplOiAxOHB4O1xcbiAgbGluZS1oZWlnaHQ6IDI4cHg7XFxufVxcblxcbi5kb3NtdGgge1xcbiAgcGFkZGluZzogMCAyMHB4O1xcbn1cXG5cXG4uZG9zbXRoVGl0bGUge1xcbiAgbWFyZ2luOiAwO1xcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICBmb250LXNpemU6IDIycHg7XFxufVxcblxcbi5kb3NtdGhMaXN0IHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGJhY2tncm91bmQtc2l6ZTogMTAwcHggMTAwcHg7XFxufVxcblxcbi5kb3NtdGhJdGVtIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHBhZGRpbmctbGVmdDogNDBweDtcXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XFxuICBmb250LXNpemU6IDE4cHg7XFxufVxcblxcbi5kb3NtdGhJdGVtOjpiZWZvcmUge1xcbiAgY29udGVudDogJyc7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBsZWZ0OiAwO1xcbiAgdG9wOiAwO1xcbiAgd2lkdGg6IDIwcHg7XFxuICBoZWlnaHQ6IDIwcHg7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uLy4uL2Fzc2V0cy9pbWFnZXMvYXJyb3ctbGlzdC5wbmcnKTtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxufVxcblxcbi5kb3NtdGhJdGVtOm5vdCg6bGFzdC1jaGlsZCkge1xcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcXG59XFxuXFxuLnVuc3BsYXNoTGluayB7XFxuICBjb2xvcjogdmFyKC0tY29sb3ItZW1pbmVuY2UpO1xcbiAgdHJhbnNpdGlvbjogdGV4dC1kZWNvcmF0aW9uIDAuM3MgZWFzZS1pbjtcXG59XFxuXFxuLnVuc3BsYXNoTGluazpob3ZlciB7XFxuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcXG4gIHRyYW5zaXRpb246IHRleHQtZGVjb3JhdGlvbiAwLjNzIGVhc2UtaW47XFxufVxcblxcbi5sb29rUGhvdG8ge1xcbiAgbWFyZ2luLWJvdHRvbTogMTAwcHg7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi5sb29rUGhvdG9UZXh0IHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgbWFyZ2luLWJvdHRvbTogNTBweDtcXG4gIGZvbnQtc2l6ZTogMjRweDtcXG59XFxuXFxuLmxvb2tQaG90b0J1dHRvbiB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xcbiAgb3V0bGluZTogbm9uZTtcXG4gIGJvcmRlcjogMnB4IHNvbGlkIHRyYW5zcGFyZW50O1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgcGFkZGluZzogMTZweCAzMHB4O1xcbiAgYm94LXNoYWRvdzogNnB4IDZweCAxMnB4IHJnYmEoNzksIDIwOSwgMTk3LCAwLjY0KTtcXG4gIGZvbnQtc2l6ZTogMjJweDtcXG4gIGNvbG9yOiB2YXIoLS1jb2xvci13aGl0ZSk7XFxuICBiYWNrZ3JvdW5kOiB2YXIoLS1jb2xvci1ldWNhbHlwdHVzKTtcXG4gIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UtaW4tb3V0IDBzO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4ubG9va1Bob3RvQnV0dG9uOjpiZWZvcmUge1xcbiAgY29udGVudDogJyc7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBsZWZ0OiA1MCU7XFxuICB0b3A6IDUwJTtcXG4gIG9wYWNpdHk6IDA7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcXG4gIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UtaW4tb3V0IDBzO1xcbn1cXG5cXG4ubG9va1Bob3RvQnV0dG9uOmhvdmVyIHtcXG4gIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLWNvbG9yLWV1Y2FseXB0dXMpO1xcbiAgY29sb3I6IHZhcigtLWNvbG9yLWV1Y2FseXB0dXMpO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3Itd2hpdGUpO1xcbn1cXG5cXG4ubG9va1Bob3RvQnV0dG9uOjphZnRlciB7XFxuICBjb250ZW50OiAnJztcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGxlZnQ6IDUwJTtcXG4gIHRvcDogNTAlO1xcbiAgei1pbmRleDogLTE7XFxuICBib3JkZXI6IDVweCBzb2xpZCB2YXIoLS1jb2xvci1icmlnaHQtdHVycXVvaXNlKTtcXG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcXG4gIGFuaW1hdGlvbjogcmluZyAxLjVzIGluZmluaXRlO1xcbn1cXG5cXG4ubG9va1Bob3RvQnV0dG9uOmhvdmVyOjphZnRlcixcXG4ubG9va1Bob3RvQnV0dG9uOmZvY3VzOjphZnRlciB7XFxuICBkaXNwbGF5OiBub25lO1xcbiAgYW5pbWF0aW9uOiBub25lO1xcbn1cXG5cXG5Aa2V5ZnJhbWVzIHJpbmcge1xcbiAgMCUge1xcbiAgICBwYWRkaW5nOiAxNnB4IDMwcHg7XFxuICAgIG9wYWNpdHk6IDE7XFxuICB9XFxuXFxuICAxMDAlIHtcXG4gICAgcGFkZGluZzogNTBweCAxNTBweDtcXG4gICAgb3BhY2l0eTogMDtcXG4gIH1cXG59XFxuXFxuQG1lZGlhIChtYXgtd2lkdGg6IDU3NnB4KSB7XFxuICAubWFpblRpdGxlIHtcXG4gICAgZm9udC1zaXplOiAzMnB4O1xcbiAgICBsaW5lLWhlaWdodDogNTJweDtcXG4gICAgcGFkZGluZzogMjBweDtcXG4gIH1cXG5cXG4gIC5waG90b3NDb250YWluZXIge1xcbiAgICBoZWlnaHQ6IDMyMHB4O1xcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xcbiAgfVxcblxcbiAgLmFib3V0IHtcXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcXG4gIH1cXG5cXG4gIC5hYm91dFRpdGxlIHtcXG4gICAgZm9udC1zaXplOiAyMnB4O1xcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xcbiAgfVxcblxcbiAgLmFib3V0VGl0bGVUZXh0IHtcXG4gICAgZm9udC1zaXplOiAxNnB4O1xcbiAgfVxcblxcbiAgLmFib3V0Q29udGFpbmVyIHtcXG4gICAgbWFyZ2luLWJvdHRvbTogNjBweDtcXG4gIH1cXG5cXG4gIC5kb3NtdGhUaXRsZSB7XFxuICAgIGZvbnQtc2l6ZTogMjJweDtcXG4gIH1cXG5cXG4gIC5kb3NtdGgge1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xcbiAgfVxcblxcbiAgLmxvb2tQaG90b1RleHQge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgfVxcblxcbiAgLmxvb2tQaG90byB7XFxuICAgIG1hcmdpbi1ib3R0b206IDQwcHg7XFxuICB9XFxufVxcblxcblxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ubG9jYWxzID0ge1xuXHRcIm1haW5zY3JlZW5Db250YWluZXJcIjogXCJtYWluUGFnZS1tX19tYWluc2NyZWVuQ29udGFpbmVyLS1EaFAzTlwiLFxuXHRcInBob3Rvc0NvbnRhaW5lclwiOiBcIm1haW5QYWdlLW1fX3Bob3Rvc0NvbnRhaW5lci0tX1J0YkpcIixcblx0XCJtYWluQ29udGFpbmVyXCI6IFwibWFpblBhZ2UtbV9fbWFpbkNvbnRhaW5lci0tWkgxSXpcIixcblx0XCJtYWluVGl0bGVcIjogXCJtYWluUGFnZS1tX19tYWluVGl0bGUtLVFQdU84XCIsXG5cdFwiYWJvdXRDb250YWluZXJcIjogXCJtYWluUGFnZS1tX19hYm91dENvbnRhaW5lci0tbXhpZlBcIixcblx0XCJhYm91dFwiOiBcIm1haW5QYWdlLW1fX2Fib3V0LS1UR0JJWFwiLFxuXHRcImFib3V0VGl0bGVcIjogXCJtYWluUGFnZS1tX19hYm91dFRpdGxlLS13dk43YVwiLFxuXHRcImFib3V0VGl0bGVUZXh0XCI6IFwibWFpblBhZ2UtbV9fYWJvdXRUaXRsZVRleHQtLUZtVzdkXCIsXG5cdFwiZG9zbXRoXCI6IFwibWFpblBhZ2UtbV9fZG9zbXRoLS1la2VFTFwiLFxuXHRcImRvc210aFRpdGxlXCI6IFwibWFpblBhZ2UtbV9fZG9zbXRoVGl0bGUtLXNFTUlGXCIsXG5cdFwiZG9zbXRoTGlzdFwiOiBcIm1haW5QYWdlLW1fX2Rvc210aExpc3QtLVZVcE1PXCIsXG5cdFwiZG9zbXRoSXRlbVwiOiBcIm1haW5QYWdlLW1fX2Rvc210aEl0ZW0tLWNoQWRaXCIsXG5cdFwidW5zcGxhc2hMaW5rXCI6IFwibWFpblBhZ2UtbV9fdW5zcGxhc2hMaW5rLS1tZ1ByY1wiLFxuXHRcImxvb2tQaG90b1wiOiBcIm1haW5QYWdlLW1fX2xvb2tQaG90by0tTGZCeVRcIixcblx0XCJsb29rUGhvdG9UZXh0XCI6IFwibWFpblBhZ2UtbV9fbG9va1Bob3RvVGV4dC0tQ3NleENcIixcblx0XCJsb29rUGhvdG9CdXR0b25cIjogXCJtYWluUGFnZS1tX19sb29rUGhvdG9CdXR0b24tLXZ4N0cyXCIsXG5cdFwicmluZ1wiOiBcIm1haW5QYWdlLW1fX3JpbmctLUhoMTNqXCJcbn07XG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZXMuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cbmlmIChtb2R1bGUuaG90KSB7XG4gIGlmICghY29udGVudC5sb2NhbHMgfHwgbW9kdWxlLmhvdC5pbnZhbGlkYXRlKSB7XG4gICAgdmFyIGlzRXF1YWxMb2NhbHMgPSBmdW5jdGlvbiBpc0VxdWFsTG9jYWxzKGEsIGIsIGlzTmFtZWRFeHBvcnQpIHtcbiAgaWYgKCFhICYmIGIgfHwgYSAmJiAhYikge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHZhciBwO1xuXG4gIGZvciAocCBpbiBhKSB7XG4gICAgaWYgKGlzTmFtZWRFeHBvcnQgJiYgcCA9PT0gXCJkZWZhdWx0XCIpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb250aW51ZVxuICAgICAgY29udGludWU7XG4gICAgfVxuXG4gICAgaWYgKGFbcF0gIT09IGJbcF0pIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cblxuICBmb3IgKHAgaW4gYikge1xuICAgIGlmIChpc05hbWVkRXhwb3J0ICYmIHAgPT09IFwiZGVmYXVsdFwiKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29udGludWVcbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cblxuICAgIGlmICghYVtwXSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB0cnVlO1xufTtcbiAgICB2YXIgaXNOYW1lZEV4cG9ydCA9ICFjb250ZW50LmxvY2FscztcbiAgICB2YXIgb2xkTG9jYWxzID0gaXNOYW1lZEV4cG9ydCA/IG5hbWVkRXhwb3J0IDogY29udGVudC5sb2NhbHM7XG5cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcbiAgICAgIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5jc3NcIixcbiAgICAgIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKCFpc0VxdWFsTG9jYWxzKG9sZExvY2FscywgaXNOYW1lZEV4cG9ydCA/IG5hbWVkRXhwb3J0IDogY29udGVudC5sb2NhbHMsIGlzTmFtZWRFeHBvcnQpKSB7XG4gICAgICAgICAgICAgICAgbW9kdWxlLmhvdC5pbnZhbGlkYXRlKCk7XG5cbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICBvbGRMb2NhbHMgPSBpc05hbWVkRXhwb3J0ID8gbmFtZWRFeHBvcnQgOiBjb250ZW50LmxvY2FscztcblxuICAgICAgICAgICAgICB1cGRhdGUoY29udGVudCk7XG4gICAgICB9XG4gICAgKVxuICB9XG5cbiAgbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkge1xuICAgIHVwZGF0ZSgpO1xuICB9KTtcbn1cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzFdLnVzZVsxXSEuL2Zvb3Rlci5tLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5pZiAobW9kdWxlLmhvdCkge1xuICBpZiAoIWNvbnRlbnQubG9jYWxzIHx8IG1vZHVsZS5ob3QuaW52YWxpZGF0ZSkge1xuICAgIHZhciBpc0VxdWFsTG9jYWxzID0gZnVuY3Rpb24gaXNFcXVhbExvY2FscyhhLCBiLCBpc05hbWVkRXhwb3J0KSB7XG4gIGlmICghYSAmJiBiIHx8IGEgJiYgIWIpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICB2YXIgcDtcblxuICBmb3IgKHAgaW4gYSkge1xuICAgIGlmIChpc05hbWVkRXhwb3J0ICYmIHAgPT09IFwiZGVmYXVsdFwiKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29udGludWVcbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cblxuICAgIGlmIChhW3BdICE9PSBiW3BdKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgZm9yIChwIGluIGIpIHtcbiAgICBpZiAoaXNOYW1lZEV4cG9ydCAmJiBwID09PSBcImRlZmF1bHRcIikge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnRpbnVlXG4gICAgICBjb250aW51ZTtcbiAgICB9XG5cbiAgICBpZiAoIWFbcF0pIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gdHJ1ZTtcbn07XG4gICAgdmFyIGlzTmFtZWRFeHBvcnQgPSAhY29udGVudC5sb2NhbHM7XG4gICAgdmFyIG9sZExvY2FscyA9IGlzTmFtZWRFeHBvcnQgPyBuYW1lZEV4cG9ydCA6IGNvbnRlbnQubG9jYWxzO1xuXG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXG4gICAgICBcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbMV0udXNlWzFdIS4vZm9vdGVyLm0uY3NzXCIsXG4gICAgICBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICghaXNFcXVhbExvY2FscyhvbGRMb2NhbHMsIGlzTmFtZWRFeHBvcnQgPyBuYW1lZEV4cG9ydCA6IGNvbnRlbnQubG9jYWxzLCBpc05hbWVkRXhwb3J0KSkge1xuICAgICAgICAgICAgICAgIG1vZHVsZS5ob3QuaW52YWxpZGF0ZSgpO1xuXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgb2xkTG9jYWxzID0gaXNOYW1lZEV4cG9ydCA/IG5hbWVkRXhwb3J0IDogY29udGVudC5sb2NhbHM7XG5cbiAgICAgICAgICAgICAgdXBkYXRlKGNvbnRlbnQpO1xuICAgICAgfVxuICAgIClcbiAgfVxuXG4gIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHtcbiAgICB1cGRhdGUoKTtcbiAgfSk7XG59XG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbMV0udXNlWzFdIS4vZm9vdGVyLm0uY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1sxXS51c2VbMV0hLi9sb2NhdGlvbi5tLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5pZiAobW9kdWxlLmhvdCkge1xuICBpZiAoIWNvbnRlbnQubG9jYWxzIHx8IG1vZHVsZS5ob3QuaW52YWxpZGF0ZSkge1xuICAgIHZhciBpc0VxdWFsTG9jYWxzID0gZnVuY3Rpb24gaXNFcXVhbExvY2FscyhhLCBiLCBpc05hbWVkRXhwb3J0KSB7XG4gIGlmICghYSAmJiBiIHx8IGEgJiYgIWIpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICB2YXIgcDtcblxuICBmb3IgKHAgaW4gYSkge1xuICAgIGlmIChpc05hbWVkRXhwb3J0ICYmIHAgPT09IFwiZGVmYXVsdFwiKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29udGludWVcbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cblxuICAgIGlmIChhW3BdICE9PSBiW3BdKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgZm9yIChwIGluIGIpIHtcbiAgICBpZiAoaXNOYW1lZEV4cG9ydCAmJiBwID09PSBcImRlZmF1bHRcIikge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnRpbnVlXG4gICAgICBjb250aW51ZTtcbiAgICB9XG5cbiAgICBpZiAoIWFbcF0pIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gdHJ1ZTtcbn07XG4gICAgdmFyIGlzTmFtZWRFeHBvcnQgPSAhY29udGVudC5sb2NhbHM7XG4gICAgdmFyIG9sZExvY2FscyA9IGlzTmFtZWRFeHBvcnQgPyBuYW1lZEV4cG9ydCA6IGNvbnRlbnQubG9jYWxzO1xuXG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXG4gICAgICBcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbMV0udXNlWzFdIS4vbG9jYXRpb24ubS5jc3NcIixcbiAgICAgIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKCFpc0VxdWFsTG9jYWxzKG9sZExvY2FscywgaXNOYW1lZEV4cG9ydCA/IG5hbWVkRXhwb3J0IDogY29udGVudC5sb2NhbHMsIGlzTmFtZWRFeHBvcnQpKSB7XG4gICAgICAgICAgICAgICAgbW9kdWxlLmhvdC5pbnZhbGlkYXRlKCk7XG5cbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICBvbGRMb2NhbHMgPSBpc05hbWVkRXhwb3J0ID8gbmFtZWRFeHBvcnQgOiBjb250ZW50LmxvY2FscztcblxuICAgICAgICAgICAgICB1cGRhdGUoY29udGVudCk7XG4gICAgICB9XG4gICAgKVxuICB9XG5cbiAgbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkge1xuICAgIHVwZGF0ZSgpO1xuICB9KTtcbn1cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1sxXS51c2VbMV0hLi9sb2NhdGlvbi5tLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbMV0udXNlWzFdIS4vc2lnbmluLm0uY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cbmlmIChtb2R1bGUuaG90KSB7XG4gIGlmICghY29udGVudC5sb2NhbHMgfHwgbW9kdWxlLmhvdC5pbnZhbGlkYXRlKSB7XG4gICAgdmFyIGlzRXF1YWxMb2NhbHMgPSBmdW5jdGlvbiBpc0VxdWFsTG9jYWxzKGEsIGIsIGlzTmFtZWRFeHBvcnQpIHtcbiAgaWYgKCFhICYmIGIgfHwgYSAmJiAhYikge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHZhciBwO1xuXG4gIGZvciAocCBpbiBhKSB7XG4gICAgaWYgKGlzTmFtZWRFeHBvcnQgJiYgcCA9PT0gXCJkZWZhdWx0XCIpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb250aW51ZVxuICAgICAgY29udGludWU7XG4gICAgfVxuXG4gICAgaWYgKGFbcF0gIT09IGJbcF0pIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cblxuICBmb3IgKHAgaW4gYikge1xuICAgIGlmIChpc05hbWVkRXhwb3J0ICYmIHAgPT09IFwiZGVmYXVsdFwiKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29udGludWVcbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cblxuICAgIGlmICghYVtwXSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB0cnVlO1xufTtcbiAgICB2YXIgaXNOYW1lZEV4cG9ydCA9ICFjb250ZW50LmxvY2FscztcbiAgICB2YXIgb2xkTG9jYWxzID0gaXNOYW1lZEV4cG9ydCA/IG5hbWVkRXhwb3J0IDogY29udGVudC5sb2NhbHM7XG5cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcbiAgICAgIFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1sxXS51c2VbMV0hLi9zaWduaW4ubS5jc3NcIixcbiAgICAgIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKCFpc0VxdWFsTG9jYWxzKG9sZExvY2FscywgaXNOYW1lZEV4cG9ydCA/IG5hbWVkRXhwb3J0IDogY29udGVudC5sb2NhbHMsIGlzTmFtZWRFeHBvcnQpKSB7XG4gICAgICAgICAgICAgICAgbW9kdWxlLmhvdC5pbnZhbGlkYXRlKCk7XG5cbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICBvbGRMb2NhbHMgPSBpc05hbWVkRXhwb3J0ID8gbmFtZWRFeHBvcnQgOiBjb250ZW50LmxvY2FscztcblxuICAgICAgICAgICAgICB1cGRhdGUoY29udGVudCk7XG4gICAgICB9XG4gICAgKVxuICB9XG5cbiAgbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkge1xuICAgIHVwZGF0ZSgpO1xuICB9KTtcbn1cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1sxXS51c2VbMV0hLi9zaWduaW4ubS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzFdLnVzZVsxXSEuL2hlYWRlci5tLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5pZiAobW9kdWxlLmhvdCkge1xuICBpZiAoIWNvbnRlbnQubG9jYWxzIHx8IG1vZHVsZS5ob3QuaW52YWxpZGF0ZSkge1xuICAgIHZhciBpc0VxdWFsTG9jYWxzID0gZnVuY3Rpb24gaXNFcXVhbExvY2FscyhhLCBiLCBpc05hbWVkRXhwb3J0KSB7XG4gIGlmICghYSAmJiBiIHx8IGEgJiYgIWIpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICB2YXIgcDtcblxuICBmb3IgKHAgaW4gYSkge1xuICAgIGlmIChpc05hbWVkRXhwb3J0ICYmIHAgPT09IFwiZGVmYXVsdFwiKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29udGludWVcbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cblxuICAgIGlmIChhW3BdICE9PSBiW3BdKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgZm9yIChwIGluIGIpIHtcbiAgICBpZiAoaXNOYW1lZEV4cG9ydCAmJiBwID09PSBcImRlZmF1bHRcIikge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnRpbnVlXG4gICAgICBjb250aW51ZTtcbiAgICB9XG5cbiAgICBpZiAoIWFbcF0pIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gdHJ1ZTtcbn07XG4gICAgdmFyIGlzTmFtZWRFeHBvcnQgPSAhY29udGVudC5sb2NhbHM7XG4gICAgdmFyIG9sZExvY2FscyA9IGlzTmFtZWRFeHBvcnQgPyBuYW1lZEV4cG9ydCA6IGNvbnRlbnQubG9jYWxzO1xuXG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXG4gICAgICBcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbMV0udXNlWzFdIS4vaGVhZGVyLm0uY3NzXCIsXG4gICAgICBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICghaXNFcXVhbExvY2FscyhvbGRMb2NhbHMsIGlzTmFtZWRFeHBvcnQgPyBuYW1lZEV4cG9ydCA6IGNvbnRlbnQubG9jYWxzLCBpc05hbWVkRXhwb3J0KSkge1xuICAgICAgICAgICAgICAgIG1vZHVsZS5ob3QuaW52YWxpZGF0ZSgpO1xuXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgb2xkTG9jYWxzID0gaXNOYW1lZEV4cG9ydCA/IG5hbWVkRXhwb3J0IDogY29udGVudC5sb2NhbHM7XG5cbiAgICAgICAgICAgICAgdXBkYXRlKGNvbnRlbnQpO1xuICAgICAgfVxuICAgIClcbiAgfVxuXG4gIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHtcbiAgICB1cGRhdGUoKTtcbiAgfSk7XG59XG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbMV0udXNlWzFdIS4vaGVhZGVyLm0uY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1sxXS51c2VbMV0hLi9wcm9maWxlLm0uY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cbmlmIChtb2R1bGUuaG90KSB7XG4gIGlmICghY29udGVudC5sb2NhbHMgfHwgbW9kdWxlLmhvdC5pbnZhbGlkYXRlKSB7XG4gICAgdmFyIGlzRXF1YWxMb2NhbHMgPSBmdW5jdGlvbiBpc0VxdWFsTG9jYWxzKGEsIGIsIGlzTmFtZWRFeHBvcnQpIHtcbiAgaWYgKCFhICYmIGIgfHwgYSAmJiAhYikge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHZhciBwO1xuXG4gIGZvciAocCBpbiBhKSB7XG4gICAgaWYgKGlzTmFtZWRFeHBvcnQgJiYgcCA9PT0gXCJkZWZhdWx0XCIpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb250aW51ZVxuICAgICAgY29udGludWU7XG4gICAgfVxuXG4gICAgaWYgKGFbcF0gIT09IGJbcF0pIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cblxuICBmb3IgKHAgaW4gYikge1xuICAgIGlmIChpc05hbWVkRXhwb3J0ICYmIHAgPT09IFwiZGVmYXVsdFwiKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29udGludWVcbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cblxuICAgIGlmICghYVtwXSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB0cnVlO1xufTtcbiAgICB2YXIgaXNOYW1lZEV4cG9ydCA9ICFjb250ZW50LmxvY2FscztcbiAgICB2YXIgb2xkTG9jYWxzID0gaXNOYW1lZEV4cG9ydCA/IG5hbWVkRXhwb3J0IDogY29udGVudC5sb2NhbHM7XG5cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcbiAgICAgIFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1sxXS51c2VbMV0hLi9wcm9maWxlLm0uY3NzXCIsXG4gICAgICBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICghaXNFcXVhbExvY2FscyhvbGRMb2NhbHMsIGlzTmFtZWRFeHBvcnQgPyBuYW1lZEV4cG9ydCA6IGNvbnRlbnQubG9jYWxzLCBpc05hbWVkRXhwb3J0KSkge1xuICAgICAgICAgICAgICAgIG1vZHVsZS5ob3QuaW52YWxpZGF0ZSgpO1xuXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgb2xkTG9jYWxzID0gaXNOYW1lZEV4cG9ydCA/IG5hbWVkRXhwb3J0IDogY29udGVudC5sb2NhbHM7XG5cbiAgICAgICAgICAgICAgdXBkYXRlKGNvbnRlbnQpO1xuICAgICAgfVxuICAgIClcbiAgfVxuXG4gIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHtcbiAgICB1cGRhdGUoKTtcbiAgfSk7XG59XG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbMV0udXNlWzFdIS4vcHJvZmlsZS5tLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbMV0udXNlWzFdIS4vc3Bpbm5lci5tLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5pZiAobW9kdWxlLmhvdCkge1xuICBpZiAoIWNvbnRlbnQubG9jYWxzIHx8IG1vZHVsZS5ob3QuaW52YWxpZGF0ZSkge1xuICAgIHZhciBpc0VxdWFsTG9jYWxzID0gZnVuY3Rpb24gaXNFcXVhbExvY2FscyhhLCBiLCBpc05hbWVkRXhwb3J0KSB7XG4gIGlmICghYSAmJiBiIHx8IGEgJiYgIWIpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICB2YXIgcDtcblxuICBmb3IgKHAgaW4gYSkge1xuICAgIGlmIChpc05hbWVkRXhwb3J0ICYmIHAgPT09IFwiZGVmYXVsdFwiKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29udGludWVcbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cblxuICAgIGlmIChhW3BdICE9PSBiW3BdKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgZm9yIChwIGluIGIpIHtcbiAgICBpZiAoaXNOYW1lZEV4cG9ydCAmJiBwID09PSBcImRlZmF1bHRcIikge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnRpbnVlXG4gICAgICBjb250aW51ZTtcbiAgICB9XG5cbiAgICBpZiAoIWFbcF0pIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gdHJ1ZTtcbn07XG4gICAgdmFyIGlzTmFtZWRFeHBvcnQgPSAhY29udGVudC5sb2NhbHM7XG4gICAgdmFyIG9sZExvY2FscyA9IGlzTmFtZWRFeHBvcnQgPyBuYW1lZEV4cG9ydCA6IGNvbnRlbnQubG9jYWxzO1xuXG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXG4gICAgICBcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbMV0udXNlWzFdIS4vc3Bpbm5lci5tLmNzc1wiLFxuICAgICAgZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAoIWlzRXF1YWxMb2NhbHMob2xkTG9jYWxzLCBpc05hbWVkRXhwb3J0ID8gbmFtZWRFeHBvcnQgOiBjb250ZW50LmxvY2FscywgaXNOYW1lZEV4cG9ydCkpIHtcbiAgICAgICAgICAgICAgICBtb2R1bGUuaG90LmludmFsaWRhdGUoKTtcblxuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIG9sZExvY2FscyA9IGlzTmFtZWRFeHBvcnQgPyBuYW1lZEV4cG9ydCA6IGNvbnRlbnQubG9jYWxzO1xuXG4gICAgICAgICAgICAgIHVwZGF0ZShjb250ZW50KTtcbiAgICAgIH1cbiAgICApXG4gIH1cblxuICBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7XG4gICAgdXBkYXRlKCk7XG4gIH0pO1xufVxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzFdLnVzZVsxXSEuL3NwaW5uZXIubS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzFdLnVzZVsxXSEuL21haW5QYWdlLm0uY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cbmlmIChtb2R1bGUuaG90KSB7XG4gIGlmICghY29udGVudC5sb2NhbHMgfHwgbW9kdWxlLmhvdC5pbnZhbGlkYXRlKSB7XG4gICAgdmFyIGlzRXF1YWxMb2NhbHMgPSBmdW5jdGlvbiBpc0VxdWFsTG9jYWxzKGEsIGIsIGlzTmFtZWRFeHBvcnQpIHtcbiAgaWYgKCFhICYmIGIgfHwgYSAmJiAhYikge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHZhciBwO1xuXG4gIGZvciAocCBpbiBhKSB7XG4gICAgaWYgKGlzTmFtZWRFeHBvcnQgJiYgcCA9PT0gXCJkZWZhdWx0XCIpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb250aW51ZVxuICAgICAgY29udGludWU7XG4gICAgfVxuXG4gICAgaWYgKGFbcF0gIT09IGJbcF0pIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cblxuICBmb3IgKHAgaW4gYikge1xuICAgIGlmIChpc05hbWVkRXhwb3J0ICYmIHAgPT09IFwiZGVmYXVsdFwiKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29udGludWVcbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cblxuICAgIGlmICghYVtwXSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB0cnVlO1xufTtcbiAgICB2YXIgaXNOYW1lZEV4cG9ydCA9ICFjb250ZW50LmxvY2FscztcbiAgICB2YXIgb2xkTG9jYWxzID0gaXNOYW1lZEV4cG9ydCA/IG5hbWVkRXhwb3J0IDogY29udGVudC5sb2NhbHM7XG5cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcbiAgICAgIFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1sxXS51c2VbMV0hLi9tYWluUGFnZS5tLmNzc1wiLFxuICAgICAgZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAoIWlzRXF1YWxMb2NhbHMob2xkTG9jYWxzLCBpc05hbWVkRXhwb3J0ID8gbmFtZWRFeHBvcnQgOiBjb250ZW50LmxvY2FscywgaXNOYW1lZEV4cG9ydCkpIHtcbiAgICAgICAgICAgICAgICBtb2R1bGUuaG90LmludmFsaWRhdGUoKTtcblxuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIG9sZExvY2FscyA9IGlzTmFtZWRFeHBvcnQgPyBuYW1lZEV4cG9ydCA6IGNvbnRlbnQubG9jYWxzO1xuXG4gICAgICAgICAgICAgIHVwZGF0ZShjb250ZW50KTtcbiAgICAgIH1cbiAgICApXG4gIH1cblxuICBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7XG4gICAgdXBkYXRlKCk7XG4gIH0pO1xufVxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzFdLnVzZVsxXSEuL21haW5QYWdlLm0uY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdGlmIChjYWNoZWRNb2R1bGUuZXJyb3IgIT09IHVuZGVmaW5lZCkgdGhyb3cgY2FjaGVkTW9kdWxlLmVycm9yO1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0bG9hZGVkOiBmYWxzZSxcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHR0cnkge1xuXHRcdHZhciBleGVjT3B0aW9ucyA9IHsgaWQ6IG1vZHVsZUlkLCBtb2R1bGU6IG1vZHVsZSwgZmFjdG9yeTogX193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0sIHJlcXVpcmU6IF9fd2VicGFja19yZXF1aXJlX18gfTtcblx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmkuZm9yRWFjaChmdW5jdGlvbihoYW5kbGVyKSB7IGhhbmRsZXIoZXhlY09wdGlvbnMpOyB9KTtcblx0XHRtb2R1bGUgPSBleGVjT3B0aW9ucy5tb2R1bGU7XG5cdFx0ZXhlY09wdGlvbnMuZmFjdG9yeS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBleGVjT3B0aW9ucy5yZXF1aXJlKTtcblx0fSBjYXRjaChlKSB7XG5cdFx0bW9kdWxlLmVycm9yID0gZTtcblx0XHR0aHJvdyBlO1xuXHR9XG5cblx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuXHRtb2R1bGUubG9hZGVkID0gdHJ1ZTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4vLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuX193ZWJwYWNrX3JlcXVpcmVfXy5jID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fO1xuXG4vLyBleHBvc2UgdGhlIG1vZHVsZSBleGVjdXRpb24gaW50ZXJjZXB0b3Jcbl9fd2VicGFja19yZXF1aXJlX18uaSA9IFtdO1xuXG4iLCJ2YXIgZGVmZXJyZWQgPSBbXTtcbl9fd2VicGFja19yZXF1aXJlX18uTyA9IChyZXN1bHQsIGNodW5rSWRzLCBmbiwgcHJpb3JpdHkpID0+IHtcblx0aWYoY2h1bmtJZHMpIHtcblx0XHRwcmlvcml0eSA9IHByaW9yaXR5IHx8IDA7XG5cdFx0Zm9yKHZhciBpID0gZGVmZXJyZWQubGVuZ3RoOyBpID4gMCAmJiBkZWZlcnJlZFtpIC0gMV1bMl0gPiBwcmlvcml0eTsgaS0tKSBkZWZlcnJlZFtpXSA9IGRlZmVycmVkW2kgLSAxXTtcblx0XHRkZWZlcnJlZFtpXSA9IFtjaHVua0lkcywgZm4sIHByaW9yaXR5XTtcblx0XHRyZXR1cm47XG5cdH1cblx0dmFyIG5vdEZ1bGZpbGxlZCA9IEluZmluaXR5O1xuXHRmb3IgKHZhciBpID0gMDsgaSA8IGRlZmVycmVkLmxlbmd0aDsgaSsrKSB7XG5cdFx0dmFyIFtjaHVua0lkcywgZm4sIHByaW9yaXR5XSA9IGRlZmVycmVkW2ldO1xuXHRcdHZhciBmdWxmaWxsZWQgPSB0cnVlO1xuXHRcdGZvciAodmFyIGogPSAwOyBqIDwgY2h1bmtJZHMubGVuZ3RoOyBqKyspIHtcblx0XHRcdGlmICgocHJpb3JpdHkgJiAxID09PSAwIHx8IG5vdEZ1bGZpbGxlZCA+PSBwcmlvcml0eSkgJiYgT2JqZWN0LmtleXMoX193ZWJwYWNrX3JlcXVpcmVfXy5PKS5ldmVyeSgoa2V5KSA9PiAoX193ZWJwYWNrX3JlcXVpcmVfXy5PW2tleV0oY2h1bmtJZHNbal0pKSkpIHtcblx0XHRcdFx0Y2h1bmtJZHMuc3BsaWNlKGotLSwgMSk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRmdWxmaWxsZWQgPSBmYWxzZTtcblx0XHRcdFx0aWYocHJpb3JpdHkgPCBub3RGdWxmaWxsZWQpIG5vdEZ1bGZpbGxlZCA9IHByaW9yaXR5O1xuXHRcdFx0fVxuXHRcdH1cblx0XHRpZihmdWxmaWxsZWQpIHtcblx0XHRcdGRlZmVycmVkLnNwbGljZShpLS0sIDEpXG5cdFx0XHR2YXIgciA9IGZuKCk7XG5cdFx0XHRpZiAociAhPT0gdW5kZWZpbmVkKSByZXN1bHQgPSByO1xuXHRcdH1cblx0fVxuXHRyZXR1cm4gcmVzdWx0O1xufTsiLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZiA9IHt9O1xuLy8gVGhpcyBmaWxlIGNvbnRhaW5zIG9ubHkgdGhlIGVudHJ5IGNodW5rLlxuLy8gVGhlIGNodW5rIGxvYWRpbmcgZnVuY3Rpb24gZm9yIGFkZGl0aW9uYWwgY2h1bmtzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmUgPSAoY2h1bmtJZCkgPT4ge1xuXHRyZXR1cm4gUHJvbWlzZS5hbGwoT2JqZWN0LmtleXMoX193ZWJwYWNrX3JlcXVpcmVfXy5mKS5yZWR1Y2UoKHByb21pc2VzLCBrZXkpID0+IHtcblx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmZba2V5XShjaHVua0lkLCBwcm9taXNlcyk7XG5cdFx0cmV0dXJuIHByb21pc2VzO1xuXHR9LCBbXSkpO1xufTsiLCIvLyBUaGlzIGZ1bmN0aW9uIGFsbG93IHRvIHJlZmVyZW5jZSBhc3luYyBjaHVua3Ncbl9fd2VicGFja19yZXF1aXJlX18udSA9IChjaHVua0lkKSA9PiB7XG5cdC8vIHJldHVybiB1cmwgZm9yIGZpbGVuYW1lcyBiYXNlZCBvbiB0ZW1wbGF0ZVxuXHRyZXR1cm4gXCJcIiArIGNodW5rSWQgKyBcIi5qc1wiO1xufTsiLCIvLyBUaGlzIGZ1bmN0aW9uIGFsbG93IHRvIHJlZmVyZW5jZSBhbGwgY2h1bmtzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmh1ID0gKGNodW5rSWQpID0+IHtcblx0Ly8gcmV0dXJuIHVybCBmb3IgZmlsZW5hbWVzIGJhc2VkIG9uIHRlbXBsYXRlXG5cdHJldHVybiBcIlwiICsgY2h1bmtJZCArIFwiLlwiICsgX193ZWJwYWNrX3JlcXVpcmVfXy5oKCkgKyBcIi5ob3QtdXBkYXRlLmpzXCI7XG59OyIsIi8vIFRoaXMgZnVuY3Rpb24gYWxsb3cgdG8gcmVmZXJlbmNlIGFzeW5jIGNodW5rc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5taW5pQ3NzRiA9IChjaHVua0lkKSA9PiB7XG5cdC8vIHJldHVybiB1cmwgZm9yIGZpbGVuYW1lcyBiYXNlZCBvbiB0ZW1wbGF0ZVxuXHRyZXR1cm4gdW5kZWZpbmVkO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmhtckYgPSAoKSA9PiAoXCJtYWluLlwiICsgX193ZWJwYWNrX3JlcXVpcmVfXy5oKCkgKyBcIi5ob3QtdXBkYXRlLmpzb25cIik7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiMGVlYzJjYzMzM2VjN2Y4NzQ4MWRcIikiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmhtZCA9IChtb2R1bGUpID0+IHtcblx0bW9kdWxlID0gT2JqZWN0LmNyZWF0ZShtb2R1bGUpO1xuXHRpZiAoIW1vZHVsZS5jaGlsZHJlbikgbW9kdWxlLmNoaWxkcmVuID0gW107XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShtb2R1bGUsICdleHBvcnRzJywge1xuXHRcdGVudW1lcmFibGU6IHRydWUsXG5cdFx0c2V0OiAoKSA9PiB7XG5cdFx0XHR0aHJvdyBuZXcgRXJyb3IoJ0VTIE1vZHVsZXMgbWF5IG5vdCBhc3NpZ24gbW9kdWxlLmV4cG9ydHMgb3IgZXhwb3J0cy4qLCBVc2UgRVNNIGV4cG9ydCBzeW50YXgsIGluc3RlYWQ6ICcgKyBtb2R1bGUuaWQpO1xuXHRcdH1cblx0fSk7XG5cdHJldHVybiBtb2R1bGU7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCJ2YXIgaW5Qcm9ncmVzcyA9IHt9O1xudmFyIGRhdGFXZWJwYWNrUHJlZml4ID0gXCJ3ZWJwYWNrOlwiO1xuLy8gbG9hZFNjcmlwdCBmdW5jdGlvbiB0byBsb2FkIGEgc2NyaXB0IHZpYSBzY3JpcHQgdGFnXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmwgPSAodXJsLCBkb25lLCBrZXksIGNodW5rSWQpID0+IHtcblx0aWYoaW5Qcm9ncmVzc1t1cmxdKSB7IGluUHJvZ3Jlc3NbdXJsXS5wdXNoKGRvbmUpOyByZXR1cm47IH1cblx0dmFyIHNjcmlwdCwgbmVlZEF0dGFjaDtcblx0aWYoa2V5ICE9PSB1bmRlZmluZWQpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGZvcih2YXIgaSA9IDA7IGkgPCBzY3JpcHRzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHR2YXIgcyA9IHNjcmlwdHNbaV07XG5cdFx0XHRpZihzLmdldEF0dHJpYnV0ZShcInNyY1wiKSA9PSB1cmwgfHwgcy5nZXRBdHRyaWJ1dGUoXCJkYXRhLXdlYnBhY2tcIikgPT0gZGF0YVdlYnBhY2tQcmVmaXggKyBrZXkpIHsgc2NyaXB0ID0gczsgYnJlYWs7IH1cblx0XHR9XG5cdH1cblx0aWYoIXNjcmlwdCkge1xuXHRcdG5lZWRBdHRhY2ggPSB0cnVlO1xuXHRcdHNjcmlwdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NjcmlwdCcpO1xuXG5cdFx0c2NyaXB0LmNoYXJzZXQgPSAndXRmLTgnO1xuXHRcdHNjcmlwdC50aW1lb3V0ID0gMTIwO1xuXHRcdGlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLm5jKSB7XG5cdFx0XHRzY3JpcHQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgX193ZWJwYWNrX3JlcXVpcmVfXy5uYyk7XG5cdFx0fVxuXHRcdHNjcmlwdC5zZXRBdHRyaWJ1dGUoXCJkYXRhLXdlYnBhY2tcIiwgZGF0YVdlYnBhY2tQcmVmaXggKyBrZXkpO1xuXHRcdHNjcmlwdC5zcmMgPSB1cmw7XG5cdH1cblx0aW5Qcm9ncmVzc1t1cmxdID0gW2RvbmVdO1xuXHR2YXIgb25TY3JpcHRDb21wbGV0ZSA9IChwcmV2LCBldmVudCkgPT4ge1xuXHRcdC8vIGF2b2lkIG1lbSBsZWFrcyBpbiBJRS5cblx0XHRzY3JpcHQub25lcnJvciA9IHNjcmlwdC5vbmxvYWQgPSBudWxsO1xuXHRcdGNsZWFyVGltZW91dCh0aW1lb3V0KTtcblx0XHR2YXIgZG9uZUZucyA9IGluUHJvZ3Jlc3NbdXJsXTtcblx0XHRkZWxldGUgaW5Qcm9ncmVzc1t1cmxdO1xuXHRcdHNjcmlwdC5wYXJlbnROb2RlICYmIHNjcmlwdC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHNjcmlwdCk7XG5cdFx0ZG9uZUZucyAmJiBkb25lRm5zLmZvckVhY2goKGZuKSA9PiAoZm4oZXZlbnQpKSk7XG5cdFx0aWYocHJldikgcmV0dXJuIHByZXYoZXZlbnQpO1xuXHR9XG5cdDtcblx0dmFyIHRpbWVvdXQgPSBzZXRUaW1lb3V0KG9uU2NyaXB0Q29tcGxldGUuYmluZChudWxsLCB1bmRlZmluZWQsIHsgdHlwZTogJ3RpbWVvdXQnLCB0YXJnZXQ6IHNjcmlwdCB9KSwgMTIwMDAwKTtcblx0c2NyaXB0Lm9uZXJyb3IgPSBvblNjcmlwdENvbXBsZXRlLmJpbmQobnVsbCwgc2NyaXB0Lm9uZXJyb3IpO1xuXHRzY3JpcHQub25sb2FkID0gb25TY3JpcHRDb21wbGV0ZS5iaW5kKG51bGwsIHNjcmlwdC5vbmxvYWQpO1xuXHRuZWVkQXR0YWNoICYmIGRvY3VtZW50LmhlYWQuYXBwZW5kQ2hpbGQoc2NyaXB0KTtcbn07IiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIGN1cnJlbnRNb2R1bGVEYXRhID0ge307XG52YXIgaW5zdGFsbGVkTW9kdWxlcyA9IF9fd2VicGFja19yZXF1aXJlX18uYztcblxuLy8gbW9kdWxlIGFuZCByZXF1aXJlIGNyZWF0aW9uXG52YXIgY3VycmVudENoaWxkTW9kdWxlO1xudmFyIGN1cnJlbnRQYXJlbnRzID0gW107XG5cbi8vIHN0YXR1c1xudmFyIHJlZ2lzdGVyZWRTdGF0dXNIYW5kbGVycyA9IFtdO1xudmFyIGN1cnJlbnRTdGF0dXMgPSBcImlkbGVcIjtcblxuLy8gd2hpbGUgZG93bmxvYWRpbmdcbnZhciBibG9ja2luZ1Byb21pc2VzO1xuXG4vLyBUaGUgdXBkYXRlIGluZm9cbnZhciBjdXJyZW50VXBkYXRlQXBwbHlIYW5kbGVycztcbnZhciBxdWV1ZWRJbnZhbGlkYXRlZE1vZHVsZXM7XG5cbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bnVzZWQtdmFyc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5obXJEID0gY3VycmVudE1vZHVsZURhdGE7XG5cbl9fd2VicGFja19yZXF1aXJlX18uaS5wdXNoKGZ1bmN0aW9uIChvcHRpb25zKSB7XG5cdHZhciBtb2R1bGUgPSBvcHRpb25zLm1vZHVsZTtcblx0dmFyIHJlcXVpcmUgPSBjcmVhdGVSZXF1aXJlKG9wdGlvbnMucmVxdWlyZSwgb3B0aW9ucy5pZCk7XG5cdG1vZHVsZS5ob3QgPSBjcmVhdGVNb2R1bGVIb3RPYmplY3Qob3B0aW9ucy5pZCwgbW9kdWxlKTtcblx0bW9kdWxlLnBhcmVudHMgPSBjdXJyZW50UGFyZW50cztcblx0bW9kdWxlLmNoaWxkcmVuID0gW107XG5cdGN1cnJlbnRQYXJlbnRzID0gW107XG5cdG9wdGlvbnMucmVxdWlyZSA9IHJlcXVpcmU7XG59KTtcblxuX193ZWJwYWNrX3JlcXVpcmVfXy5obXJDID0ge307XG5fX3dlYnBhY2tfcmVxdWlyZV9fLmhtckkgPSB7fTtcblxuZnVuY3Rpb24gY3JlYXRlUmVxdWlyZShyZXF1aXJlLCBtb2R1bGVJZCkge1xuXHR2YXIgbWUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcblx0aWYgKCFtZSkgcmV0dXJuIHJlcXVpcmU7XG5cdHZhciBmbiA9IGZ1bmN0aW9uIChyZXF1ZXN0KSB7XG5cdFx0aWYgKG1lLmhvdC5hY3RpdmUpIHtcblx0XHRcdGlmIChpbnN0YWxsZWRNb2R1bGVzW3JlcXVlc3RdKSB7XG5cdFx0XHRcdHZhciBwYXJlbnRzID0gaW5zdGFsbGVkTW9kdWxlc1tyZXF1ZXN0XS5wYXJlbnRzO1xuXHRcdFx0XHRpZiAocGFyZW50cy5pbmRleE9mKG1vZHVsZUlkKSA9PT0gLTEpIHtcblx0XHRcdFx0XHRwYXJlbnRzLnB1c2gobW9kdWxlSWQpO1xuXHRcdFx0XHR9XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRjdXJyZW50UGFyZW50cyA9IFttb2R1bGVJZF07XG5cdFx0XHRcdGN1cnJlbnRDaGlsZE1vZHVsZSA9IHJlcXVlc3Q7XG5cdFx0XHR9XG5cdFx0XHRpZiAobWUuY2hpbGRyZW4uaW5kZXhPZihyZXF1ZXN0KSA9PT0gLTEpIHtcblx0XHRcdFx0bWUuY2hpbGRyZW4ucHVzaChyZXF1ZXN0KTtcblx0XHRcdH1cblx0XHR9IGVsc2Uge1xuXHRcdFx0Y29uc29sZS53YXJuKFxuXHRcdFx0XHRcIltITVJdIHVuZXhwZWN0ZWQgcmVxdWlyZShcIiArXG5cdFx0XHRcdFx0cmVxdWVzdCArXG5cdFx0XHRcdFx0XCIpIGZyb20gZGlzcG9zZWQgbW9kdWxlIFwiICtcblx0XHRcdFx0XHRtb2R1bGVJZFxuXHRcdFx0KTtcblx0XHRcdGN1cnJlbnRQYXJlbnRzID0gW107XG5cdFx0fVxuXHRcdHJldHVybiByZXF1aXJlKHJlcXVlc3QpO1xuXHR9O1xuXHR2YXIgY3JlYXRlUHJvcGVydHlEZXNjcmlwdG9yID0gZnVuY3Rpb24gKG5hbWUpIHtcblx0XHRyZXR1cm4ge1xuXHRcdFx0Y29uZmlndXJhYmxlOiB0cnVlLFxuXHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcblx0XHRcdGdldDogZnVuY3Rpb24gKCkge1xuXHRcdFx0XHRyZXR1cm4gcmVxdWlyZVtuYW1lXTtcblx0XHRcdH0sXG5cdFx0XHRzZXQ6IGZ1bmN0aW9uICh2YWx1ZSkge1xuXHRcdFx0XHRyZXF1aXJlW25hbWVdID0gdmFsdWU7XG5cdFx0XHR9XG5cdFx0fTtcblx0fTtcblx0Zm9yICh2YXIgbmFtZSBpbiByZXF1aXJlKSB7XG5cdFx0aWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChyZXF1aXJlLCBuYW1lKSAmJiBuYW1lICE9PSBcImVcIikge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGZuLCBuYW1lLCBjcmVhdGVQcm9wZXJ0eURlc2NyaXB0b3IobmFtZSkpO1xuXHRcdH1cblx0fVxuXHRmbi5lID0gZnVuY3Rpb24gKGNodW5rSWQpIHtcblx0XHRyZXR1cm4gdHJhY2tCbG9ja2luZ1Byb21pc2UocmVxdWlyZS5lKGNodW5rSWQpKTtcblx0fTtcblx0cmV0dXJuIGZuO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVNb2R1bGVIb3RPYmplY3QobW9kdWxlSWQsIG1lKSB7XG5cdHZhciBfbWFpbiA9IGN1cnJlbnRDaGlsZE1vZHVsZSAhPT0gbW9kdWxlSWQ7XG5cdHZhciBob3QgPSB7XG5cdFx0Ly8gcHJpdmF0ZSBzdHVmZlxuXHRcdF9hY2NlcHRlZERlcGVuZGVuY2llczoge30sXG5cdFx0X2FjY2VwdGVkRXJyb3JIYW5kbGVyczoge30sXG5cdFx0X2RlY2xpbmVkRGVwZW5kZW5jaWVzOiB7fSxcblx0XHRfc2VsZkFjY2VwdGVkOiBmYWxzZSxcblx0XHRfc2VsZkRlY2xpbmVkOiBmYWxzZSxcblx0XHRfc2VsZkludmFsaWRhdGVkOiBmYWxzZSxcblx0XHRfZGlzcG9zZUhhbmRsZXJzOiBbXSxcblx0XHRfbWFpbjogX21haW4sXG5cdFx0X3JlcXVpcmVTZWxmOiBmdW5jdGlvbiAoKSB7XG5cdFx0XHRjdXJyZW50UGFyZW50cyA9IG1lLnBhcmVudHMuc2xpY2UoKTtcblx0XHRcdGN1cnJlbnRDaGlsZE1vZHVsZSA9IF9tYWluID8gdW5kZWZpbmVkIDogbW9kdWxlSWQ7XG5cdFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKTtcblx0XHR9LFxuXG5cdFx0Ly8gTW9kdWxlIEFQSVxuXHRcdGFjdGl2ZTogdHJ1ZSxcblx0XHRhY2NlcHQ6IGZ1bmN0aW9uIChkZXAsIGNhbGxiYWNrLCBlcnJvckhhbmRsZXIpIHtcblx0XHRcdGlmIChkZXAgPT09IHVuZGVmaW5lZCkgaG90Ll9zZWxmQWNjZXB0ZWQgPSB0cnVlO1xuXHRcdFx0ZWxzZSBpZiAodHlwZW9mIGRlcCA9PT0gXCJmdW5jdGlvblwiKSBob3QuX3NlbGZBY2NlcHRlZCA9IGRlcDtcblx0XHRcdGVsc2UgaWYgKHR5cGVvZiBkZXAgPT09IFwib2JqZWN0XCIgJiYgZGVwICE9PSBudWxsKSB7XG5cdFx0XHRcdGZvciAodmFyIGkgPSAwOyBpIDwgZGVwLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRcdFx0aG90Ll9hY2NlcHRlZERlcGVuZGVuY2llc1tkZXBbaV1dID0gY2FsbGJhY2sgfHwgZnVuY3Rpb24gKCkge307XG5cdFx0XHRcdFx0aG90Ll9hY2NlcHRlZEVycm9ySGFuZGxlcnNbZGVwW2ldXSA9IGVycm9ySGFuZGxlcjtcblx0XHRcdFx0fVxuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0aG90Ll9hY2NlcHRlZERlcGVuZGVuY2llc1tkZXBdID0gY2FsbGJhY2sgfHwgZnVuY3Rpb24gKCkge307XG5cdFx0XHRcdGhvdC5fYWNjZXB0ZWRFcnJvckhhbmRsZXJzW2RlcF0gPSBlcnJvckhhbmRsZXI7XG5cdFx0XHR9XG5cdFx0fSxcblx0XHRkZWNsaW5lOiBmdW5jdGlvbiAoZGVwKSB7XG5cdFx0XHRpZiAoZGVwID09PSB1bmRlZmluZWQpIGhvdC5fc2VsZkRlY2xpbmVkID0gdHJ1ZTtcblx0XHRcdGVsc2UgaWYgKHR5cGVvZiBkZXAgPT09IFwib2JqZWN0XCIgJiYgZGVwICE9PSBudWxsKVxuXHRcdFx0XHRmb3IgKHZhciBpID0gMDsgaSA8IGRlcC5sZW5ndGg7IGkrKylcblx0XHRcdFx0XHRob3QuX2RlY2xpbmVkRGVwZW5kZW5jaWVzW2RlcFtpXV0gPSB0cnVlO1xuXHRcdFx0ZWxzZSBob3QuX2RlY2xpbmVkRGVwZW5kZW5jaWVzW2RlcF0gPSB0cnVlO1xuXHRcdH0sXG5cdFx0ZGlzcG9zZTogZnVuY3Rpb24gKGNhbGxiYWNrKSB7XG5cdFx0XHRob3QuX2Rpc3Bvc2VIYW5kbGVycy5wdXNoKGNhbGxiYWNrKTtcblx0XHR9LFxuXHRcdGFkZERpc3Bvc2VIYW5kbGVyOiBmdW5jdGlvbiAoY2FsbGJhY2spIHtcblx0XHRcdGhvdC5fZGlzcG9zZUhhbmRsZXJzLnB1c2goY2FsbGJhY2spO1xuXHRcdH0sXG5cdFx0cmVtb3ZlRGlzcG9zZUhhbmRsZXI6IGZ1bmN0aW9uIChjYWxsYmFjaykge1xuXHRcdFx0dmFyIGlkeCA9IGhvdC5fZGlzcG9zZUhhbmRsZXJzLmluZGV4T2YoY2FsbGJhY2spO1xuXHRcdFx0aWYgKGlkeCA+PSAwKSBob3QuX2Rpc3Bvc2VIYW5kbGVycy5zcGxpY2UoaWR4LCAxKTtcblx0XHR9LFxuXHRcdGludmFsaWRhdGU6IGZ1bmN0aW9uICgpIHtcblx0XHRcdHRoaXMuX3NlbGZJbnZhbGlkYXRlZCA9IHRydWU7XG5cdFx0XHRzd2l0Y2ggKGN1cnJlbnRTdGF0dXMpIHtcblx0XHRcdFx0Y2FzZSBcImlkbGVcIjpcblx0XHRcdFx0XHRjdXJyZW50VXBkYXRlQXBwbHlIYW5kbGVycyA9IFtdO1xuXHRcdFx0XHRcdE9iamVjdC5rZXlzKF9fd2VicGFja19yZXF1aXJlX18uaG1ySSkuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG5cdFx0XHRcdFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmhtcklba2V5XShcblx0XHRcdFx0XHRcdFx0bW9kdWxlSWQsXG5cdFx0XHRcdFx0XHRcdGN1cnJlbnRVcGRhdGVBcHBseUhhbmRsZXJzXG5cdFx0XHRcdFx0XHQpO1xuXHRcdFx0XHRcdH0pO1xuXHRcdFx0XHRcdHNldFN0YXR1cyhcInJlYWR5XCIpO1xuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRjYXNlIFwicmVhZHlcIjpcblx0XHRcdFx0XHRPYmplY3Qua2V5cyhfX3dlYnBhY2tfcmVxdWlyZV9fLmhtckkpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuXHRcdFx0XHRcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5obXJJW2tleV0oXG5cdFx0XHRcdFx0XHRcdG1vZHVsZUlkLFxuXHRcdFx0XHRcdFx0XHRjdXJyZW50VXBkYXRlQXBwbHlIYW5kbGVyc1xuXHRcdFx0XHRcdFx0KTtcblx0XHRcdFx0XHR9KTtcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0Y2FzZSBcInByZXBhcmVcIjpcblx0XHRcdFx0Y2FzZSBcImNoZWNrXCI6XG5cdFx0XHRcdGNhc2UgXCJkaXNwb3NlXCI6XG5cdFx0XHRcdGNhc2UgXCJhcHBseVwiOlxuXHRcdFx0XHRcdChxdWV1ZWRJbnZhbGlkYXRlZE1vZHVsZXMgPSBxdWV1ZWRJbnZhbGlkYXRlZE1vZHVsZXMgfHwgW10pLnB1c2goXG5cdFx0XHRcdFx0XHRtb2R1bGVJZFxuXHRcdFx0XHRcdCk7XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdGRlZmF1bHQ6XG5cdFx0XHRcdFx0Ly8gaWdub3JlIHJlcXVlc3RzIGluIGVycm9yIHN0YXRlc1xuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0fVxuXHRcdH0sXG5cblx0XHQvLyBNYW5hZ2VtZW50IEFQSVxuXHRcdGNoZWNrOiBob3RDaGVjayxcblx0XHRhcHBseTogaG90QXBwbHksXG5cdFx0c3RhdHVzOiBmdW5jdGlvbiAobCkge1xuXHRcdFx0aWYgKCFsKSByZXR1cm4gY3VycmVudFN0YXR1cztcblx0XHRcdHJlZ2lzdGVyZWRTdGF0dXNIYW5kbGVycy5wdXNoKGwpO1xuXHRcdH0sXG5cdFx0YWRkU3RhdHVzSGFuZGxlcjogZnVuY3Rpb24gKGwpIHtcblx0XHRcdHJlZ2lzdGVyZWRTdGF0dXNIYW5kbGVycy5wdXNoKGwpO1xuXHRcdH0sXG5cdFx0cmVtb3ZlU3RhdHVzSGFuZGxlcjogZnVuY3Rpb24gKGwpIHtcblx0XHRcdHZhciBpZHggPSByZWdpc3RlcmVkU3RhdHVzSGFuZGxlcnMuaW5kZXhPZihsKTtcblx0XHRcdGlmIChpZHggPj0gMCkgcmVnaXN0ZXJlZFN0YXR1c0hhbmRsZXJzLnNwbGljZShpZHgsIDEpO1xuXHRcdH0sXG5cblx0XHQvL2luaGVyaXQgZnJvbSBwcmV2aW91cyBkaXNwb3NlIGNhbGxcblx0XHRkYXRhOiBjdXJyZW50TW9kdWxlRGF0YVttb2R1bGVJZF1cblx0fTtcblx0Y3VycmVudENoaWxkTW9kdWxlID0gdW5kZWZpbmVkO1xuXHRyZXR1cm4gaG90O1xufVxuXG5mdW5jdGlvbiBzZXRTdGF0dXMobmV3U3RhdHVzKSB7XG5cdGN1cnJlbnRTdGF0dXMgPSBuZXdTdGF0dXM7XG5cdHZhciByZXN1bHRzID0gW107XG5cblx0Zm9yICh2YXIgaSA9IDA7IGkgPCByZWdpc3RlcmVkU3RhdHVzSGFuZGxlcnMubGVuZ3RoOyBpKyspXG5cdFx0cmVzdWx0c1tpXSA9IHJlZ2lzdGVyZWRTdGF0dXNIYW5kbGVyc1tpXS5jYWxsKG51bGwsIG5ld1N0YXR1cyk7XG5cblx0cmV0dXJuIFByb21pc2UuYWxsKHJlc3VsdHMpO1xufVxuXG5mdW5jdGlvbiB0cmFja0Jsb2NraW5nUHJvbWlzZShwcm9taXNlKSB7XG5cdHN3aXRjaCAoY3VycmVudFN0YXR1cykge1xuXHRcdGNhc2UgXCJyZWFkeVwiOlxuXHRcdFx0c2V0U3RhdHVzKFwicHJlcGFyZVwiKTtcblx0XHRcdGJsb2NraW5nUHJvbWlzZXMucHVzaChwcm9taXNlKTtcblx0XHRcdHdhaXRGb3JCbG9ja2luZ1Byb21pc2VzKGZ1bmN0aW9uICgpIHtcblx0XHRcdFx0cmV0dXJuIHNldFN0YXR1cyhcInJlYWR5XCIpO1xuXHRcdFx0fSk7XG5cdFx0XHRyZXR1cm4gcHJvbWlzZTtcblx0XHRjYXNlIFwicHJlcGFyZVwiOlxuXHRcdFx0YmxvY2tpbmdQcm9taXNlcy5wdXNoKHByb21pc2UpO1xuXHRcdFx0cmV0dXJuIHByb21pc2U7XG5cdFx0ZGVmYXVsdDpcblx0XHRcdHJldHVybiBwcm9taXNlO1xuXHR9XG59XG5cbmZ1bmN0aW9uIHdhaXRGb3JCbG9ja2luZ1Byb21pc2VzKGZuKSB7XG5cdGlmIChibG9ja2luZ1Byb21pc2VzLmxlbmd0aCA9PT0gMCkgcmV0dXJuIGZuKCk7XG5cdHZhciBibG9ja2VyID0gYmxvY2tpbmdQcm9taXNlcztcblx0YmxvY2tpbmdQcm9taXNlcyA9IFtdO1xuXHRyZXR1cm4gUHJvbWlzZS5hbGwoYmxvY2tlcikudGhlbihmdW5jdGlvbiAoKSB7XG5cdFx0cmV0dXJuIHdhaXRGb3JCbG9ja2luZ1Byb21pc2VzKGZuKTtcblx0fSk7XG59XG5cbmZ1bmN0aW9uIGhvdENoZWNrKGFwcGx5T25VcGRhdGUpIHtcblx0aWYgKGN1cnJlbnRTdGF0dXMgIT09IFwiaWRsZVwiKSB7XG5cdFx0dGhyb3cgbmV3IEVycm9yKFwiY2hlY2soKSBpcyBvbmx5IGFsbG93ZWQgaW4gaWRsZSBzdGF0dXNcIik7XG5cdH1cblx0cmV0dXJuIHNldFN0YXR1cyhcImNoZWNrXCIpXG5cdFx0LnRoZW4oX193ZWJwYWNrX3JlcXVpcmVfXy5obXJNKVxuXHRcdC50aGVuKGZ1bmN0aW9uICh1cGRhdGUpIHtcblx0XHRcdGlmICghdXBkYXRlKSB7XG5cdFx0XHRcdHJldHVybiBzZXRTdGF0dXMoYXBwbHlJbnZhbGlkYXRlZE1vZHVsZXMoKSA/IFwicmVhZHlcIiA6IFwiaWRsZVwiKS50aGVuKFxuXHRcdFx0XHRcdGZ1bmN0aW9uICgpIHtcblx0XHRcdFx0XHRcdHJldHVybiBudWxsO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0KTtcblx0XHRcdH1cblxuXHRcdFx0cmV0dXJuIHNldFN0YXR1cyhcInByZXBhcmVcIikudGhlbihmdW5jdGlvbiAoKSB7XG5cdFx0XHRcdHZhciB1cGRhdGVkTW9kdWxlcyA9IFtdO1xuXHRcdFx0XHRibG9ja2luZ1Byb21pc2VzID0gW107XG5cdFx0XHRcdGN1cnJlbnRVcGRhdGVBcHBseUhhbmRsZXJzID0gW107XG5cblx0XHRcdFx0cmV0dXJuIFByb21pc2UuYWxsKFxuXHRcdFx0XHRcdE9iamVjdC5rZXlzKF9fd2VicGFja19yZXF1aXJlX18uaG1yQykucmVkdWNlKGZ1bmN0aW9uIChcblx0XHRcdFx0XHRcdHByb21pc2VzLFxuXHRcdFx0XHRcdFx0a2V5XG5cdFx0XHRcdFx0KSB7XG5cdFx0XHRcdFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmhtckNba2V5XShcblx0XHRcdFx0XHRcdFx0dXBkYXRlLmMsXG5cdFx0XHRcdFx0XHRcdHVwZGF0ZS5yLFxuXHRcdFx0XHRcdFx0XHR1cGRhdGUubSxcblx0XHRcdFx0XHRcdFx0cHJvbWlzZXMsXG5cdFx0XHRcdFx0XHRcdGN1cnJlbnRVcGRhdGVBcHBseUhhbmRsZXJzLFxuXHRcdFx0XHRcdFx0XHR1cGRhdGVkTW9kdWxlc1xuXHRcdFx0XHRcdFx0KTtcblx0XHRcdFx0XHRcdHJldHVybiBwcm9taXNlcztcblx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdFtdKVxuXHRcdFx0XHQpLnRoZW4oZnVuY3Rpb24gKCkge1xuXHRcdFx0XHRcdHJldHVybiB3YWl0Rm9yQmxvY2tpbmdQcm9taXNlcyhmdW5jdGlvbiAoKSB7XG5cdFx0XHRcdFx0XHRpZiAoYXBwbHlPblVwZGF0ZSkge1xuXHRcdFx0XHRcdFx0XHRyZXR1cm4gaW50ZXJuYWxBcHBseShhcHBseU9uVXBkYXRlKTtcblx0XHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRcdHJldHVybiBzZXRTdGF0dXMoXCJyZWFkeVwiKS50aGVuKGZ1bmN0aW9uICgpIHtcblx0XHRcdFx0XHRcdFx0XHRyZXR1cm4gdXBkYXRlZE1vZHVsZXM7XG5cdFx0XHRcdFx0XHRcdH0pO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH0pO1xuXHRcdFx0XHR9KTtcblx0XHRcdH0pO1xuXHRcdH0pO1xufVxuXG5mdW5jdGlvbiBob3RBcHBseShvcHRpb25zKSB7XG5cdGlmIChjdXJyZW50U3RhdHVzICE9PSBcInJlYWR5XCIpIHtcblx0XHRyZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCkudGhlbihmdW5jdGlvbiAoKSB7XG5cdFx0XHR0aHJvdyBuZXcgRXJyb3IoXCJhcHBseSgpIGlzIG9ubHkgYWxsb3dlZCBpbiByZWFkeSBzdGF0dXNcIik7XG5cdFx0fSk7XG5cdH1cblx0cmV0dXJuIGludGVybmFsQXBwbHkob3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIGludGVybmFsQXBwbHkob3B0aW9ucykge1xuXHRvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcblxuXHRhcHBseUludmFsaWRhdGVkTW9kdWxlcygpO1xuXG5cdHZhciByZXN1bHRzID0gY3VycmVudFVwZGF0ZUFwcGx5SGFuZGxlcnMubWFwKGZ1bmN0aW9uIChoYW5kbGVyKSB7XG5cdFx0cmV0dXJuIGhhbmRsZXIob3B0aW9ucyk7XG5cdH0pO1xuXHRjdXJyZW50VXBkYXRlQXBwbHlIYW5kbGVycyA9IHVuZGVmaW5lZDtcblxuXHR2YXIgZXJyb3JzID0gcmVzdWx0c1xuXHRcdC5tYXAoZnVuY3Rpb24gKHIpIHtcblx0XHRcdHJldHVybiByLmVycm9yO1xuXHRcdH0pXG5cdFx0LmZpbHRlcihCb29sZWFuKTtcblxuXHRpZiAoZXJyb3JzLmxlbmd0aCA+IDApIHtcblx0XHRyZXR1cm4gc2V0U3RhdHVzKFwiYWJvcnRcIikudGhlbihmdW5jdGlvbiAoKSB7XG5cdFx0XHR0aHJvdyBlcnJvcnNbMF07XG5cdFx0fSk7XG5cdH1cblxuXHQvLyBOb3cgaW4gXCJkaXNwb3NlXCIgcGhhc2Vcblx0dmFyIGRpc3Bvc2VQcm9taXNlID0gc2V0U3RhdHVzKFwiZGlzcG9zZVwiKTtcblxuXHRyZXN1bHRzLmZvckVhY2goZnVuY3Rpb24gKHJlc3VsdCkge1xuXHRcdGlmIChyZXN1bHQuZGlzcG9zZSkgcmVzdWx0LmRpc3Bvc2UoKTtcblx0fSk7XG5cblx0Ly8gTm93IGluIFwiYXBwbHlcIiBwaGFzZVxuXHR2YXIgYXBwbHlQcm9taXNlID0gc2V0U3RhdHVzKFwiYXBwbHlcIik7XG5cblx0dmFyIGVycm9yO1xuXHR2YXIgcmVwb3J0RXJyb3IgPSBmdW5jdGlvbiAoZXJyKSB7XG5cdFx0aWYgKCFlcnJvcikgZXJyb3IgPSBlcnI7XG5cdH07XG5cblx0dmFyIG91dGRhdGVkTW9kdWxlcyA9IFtdO1xuXHRyZXN1bHRzLmZvckVhY2goZnVuY3Rpb24gKHJlc3VsdCkge1xuXHRcdGlmIChyZXN1bHQuYXBwbHkpIHtcblx0XHRcdHZhciBtb2R1bGVzID0gcmVzdWx0LmFwcGx5KHJlcG9ydEVycm9yKTtcblx0XHRcdGlmIChtb2R1bGVzKSB7XG5cdFx0XHRcdGZvciAodmFyIGkgPSAwOyBpIDwgbW9kdWxlcy5sZW5ndGg7IGkrKykge1xuXHRcdFx0XHRcdG91dGRhdGVkTW9kdWxlcy5wdXNoKG1vZHVsZXNbaV0pO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHR9KTtcblxuXHRyZXR1cm4gUHJvbWlzZS5hbGwoW2Rpc3Bvc2VQcm9taXNlLCBhcHBseVByb21pc2VdKS50aGVuKGZ1bmN0aW9uICgpIHtcblx0XHQvLyBoYW5kbGUgZXJyb3JzIGluIGFjY2VwdCBoYW5kbGVycyBhbmQgc2VsZiBhY2NlcHRlZCBtb2R1bGUgbG9hZFxuXHRcdGlmIChlcnJvcikge1xuXHRcdFx0cmV0dXJuIHNldFN0YXR1cyhcImZhaWxcIikudGhlbihmdW5jdGlvbiAoKSB7XG5cdFx0XHRcdHRocm93IGVycm9yO1xuXHRcdFx0fSk7XG5cdFx0fVxuXG5cdFx0aWYgKHF1ZXVlZEludmFsaWRhdGVkTW9kdWxlcykge1xuXHRcdFx0cmV0dXJuIGludGVybmFsQXBwbHkob3B0aW9ucykudGhlbihmdW5jdGlvbiAobGlzdCkge1xuXHRcdFx0XHRvdXRkYXRlZE1vZHVsZXMuZm9yRWFjaChmdW5jdGlvbiAobW9kdWxlSWQpIHtcblx0XHRcdFx0XHRpZiAobGlzdC5pbmRleE9mKG1vZHVsZUlkKSA8IDApIGxpc3QucHVzaChtb2R1bGVJZCk7XG5cdFx0XHRcdH0pO1xuXHRcdFx0XHRyZXR1cm4gbGlzdDtcblx0XHRcdH0pO1xuXHRcdH1cblxuXHRcdHJldHVybiBzZXRTdGF0dXMoXCJpZGxlXCIpLnRoZW4oZnVuY3Rpb24gKCkge1xuXHRcdFx0cmV0dXJuIG91dGRhdGVkTW9kdWxlcztcblx0XHR9KTtcblx0fSk7XG59XG5cbmZ1bmN0aW9uIGFwcGx5SW52YWxpZGF0ZWRNb2R1bGVzKCkge1xuXHRpZiAocXVldWVkSW52YWxpZGF0ZWRNb2R1bGVzKSB7XG5cdFx0aWYgKCFjdXJyZW50VXBkYXRlQXBwbHlIYW5kbGVycykgY3VycmVudFVwZGF0ZUFwcGx5SGFuZGxlcnMgPSBbXTtcblx0XHRPYmplY3Qua2V5cyhfX3dlYnBhY2tfcmVxdWlyZV9fLmhtckkpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuXHRcdFx0cXVldWVkSW52YWxpZGF0ZWRNb2R1bGVzLmZvckVhY2goZnVuY3Rpb24gKG1vZHVsZUlkKSB7XG5cdFx0XHRcdF9fd2VicGFja19yZXF1aXJlX18uaG1ySVtrZXldKFxuXHRcdFx0XHRcdG1vZHVsZUlkLFxuXHRcdFx0XHRcdGN1cnJlbnRVcGRhdGVBcHBseUhhbmRsZXJzXG5cdFx0XHRcdCk7XG5cdFx0XHR9KTtcblx0XHR9KTtcblx0XHRxdWV1ZWRJbnZhbGlkYXRlZE1vZHVsZXMgPSB1bmRlZmluZWQ7XG5cdFx0cmV0dXJuIHRydWU7XG5cdH1cbn0iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi9jb3Vyc2UtanMvXCI7IiwidmFyIGNyZWF0ZVN0eWxlc2hlZXQgPSAoY2h1bmtJZCwgZnVsbGhyZWYsIHJlc29sdmUsIHJlamVjdCkgPT4ge1xuXHR2YXIgbGlua1RhZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaW5rXCIpO1xuXG5cdGxpbmtUYWcucmVsID0gXCJzdHlsZXNoZWV0XCI7XG5cdGxpbmtUYWcudHlwZSA9IFwidGV4dC9jc3NcIjtcblx0dmFyIG9uTGlua0NvbXBsZXRlID0gKGV2ZW50KSA9PiB7XG5cdFx0Ly8gYXZvaWQgbWVtIGxlYWtzLlxuXHRcdGxpbmtUYWcub25lcnJvciA9IGxpbmtUYWcub25sb2FkID0gbnVsbDtcblx0XHRpZiAoZXZlbnQudHlwZSA9PT0gJ2xvYWQnKSB7XG5cdFx0XHRyZXNvbHZlKCk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHZhciBlcnJvclR5cGUgPSBldmVudCAmJiAoZXZlbnQudHlwZSA9PT0gJ2xvYWQnID8gJ21pc3NpbmcnIDogZXZlbnQudHlwZSk7XG5cdFx0XHR2YXIgcmVhbEhyZWYgPSBldmVudCAmJiBldmVudC50YXJnZXQgJiYgZXZlbnQudGFyZ2V0LmhyZWYgfHwgZnVsbGhyZWY7XG5cdFx0XHR2YXIgZXJyID0gbmV3IEVycm9yKFwiTG9hZGluZyBDU1MgY2h1bmsgXCIgKyBjaHVua0lkICsgXCIgZmFpbGVkLlxcbihcIiArIHJlYWxIcmVmICsgXCIpXCIpO1xuXHRcdFx0ZXJyLmNvZGUgPSBcIkNTU19DSFVOS19MT0FEX0ZBSUxFRFwiO1xuXHRcdFx0ZXJyLnR5cGUgPSBlcnJvclR5cGU7XG5cdFx0XHRlcnIucmVxdWVzdCA9IHJlYWxIcmVmO1xuXHRcdFx0bGlua1RhZy5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKGxpbmtUYWcpXG5cdFx0XHRyZWplY3QoZXJyKTtcblx0XHR9XG5cdH1cblx0bGlua1RhZy5vbmVycm9yID0gbGlua1RhZy5vbmxvYWQgPSBvbkxpbmtDb21wbGV0ZTtcblx0bGlua1RhZy5ocmVmID0gZnVsbGhyZWY7XG5cblx0ZG9jdW1lbnQuaGVhZC5hcHBlbmRDaGlsZChsaW5rVGFnKTtcblx0cmV0dXJuIGxpbmtUYWc7XG59O1xudmFyIGZpbmRTdHlsZXNoZWV0ID0gKGhyZWYsIGZ1bGxocmVmKSA9PiB7XG5cdHZhciBleGlzdGluZ0xpbmtUYWdzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJsaW5rXCIpO1xuXHRmb3IodmFyIGkgPSAwOyBpIDwgZXhpc3RpbmdMaW5rVGFncy5sZW5ndGg7IGkrKykge1xuXHRcdHZhciB0YWcgPSBleGlzdGluZ0xpbmtUYWdzW2ldO1xuXHRcdHZhciBkYXRhSHJlZiA9IHRhZy5nZXRBdHRyaWJ1dGUoXCJkYXRhLWhyZWZcIikgfHwgdGFnLmdldEF0dHJpYnV0ZShcImhyZWZcIik7XG5cdFx0aWYodGFnLnJlbCA9PT0gXCJzdHlsZXNoZWV0XCIgJiYgKGRhdGFIcmVmID09PSBocmVmIHx8IGRhdGFIcmVmID09PSBmdWxsaHJlZikpIHJldHVybiB0YWc7XG5cdH1cblx0dmFyIGV4aXN0aW5nU3R5bGVUYWdzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzdHlsZVwiKTtcblx0Zm9yKHZhciBpID0gMDsgaSA8IGV4aXN0aW5nU3R5bGVUYWdzLmxlbmd0aDsgaSsrKSB7XG5cdFx0dmFyIHRhZyA9IGV4aXN0aW5nU3R5bGVUYWdzW2ldO1xuXHRcdHZhciBkYXRhSHJlZiA9IHRhZy5nZXRBdHRyaWJ1dGUoXCJkYXRhLWhyZWZcIik7XG5cdFx0aWYoZGF0YUhyZWYgPT09IGhyZWYgfHwgZGF0YUhyZWYgPT09IGZ1bGxocmVmKSByZXR1cm4gdGFnO1xuXHR9XG59O1xudmFyIGxvYWRTdHlsZXNoZWV0ID0gKGNodW5rSWQpID0+IHtcblx0cmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcblx0XHR2YXIgaHJlZiA9IF9fd2VicGFja19yZXF1aXJlX18ubWluaUNzc0YoY2h1bmtJZCk7XG5cdFx0dmFyIGZ1bGxocmVmID0gX193ZWJwYWNrX3JlcXVpcmVfXy5wICsgaHJlZjtcblx0XHRpZihmaW5kU3R5bGVzaGVldChocmVmLCBmdWxsaHJlZikpIHJldHVybiByZXNvbHZlKCk7XG5cdFx0Y3JlYXRlU3R5bGVzaGVldChjaHVua0lkLCBmdWxsaHJlZiwgcmVzb2x2ZSwgcmVqZWN0KTtcblx0fSk7XG59XG4vLyBubyBjaHVuayBsb2FkaW5nXG5cbnZhciBvbGRUYWdzID0gW107XG52YXIgbmV3VGFncyA9IFtdO1xudmFyIGFwcGx5SGFuZGxlciA9IChvcHRpb25zKSA9PiB7XG5cdHJldHVybiB7IGRpc3Bvc2U6ICgpID0+IHtcblx0XHRmb3IodmFyIGkgPSAwOyBpIDwgb2xkVGFncy5sZW5ndGg7IGkrKykge1xuXHRcdFx0dmFyIG9sZFRhZyA9IG9sZFRhZ3NbaV07XG5cdFx0XHRpZihvbGRUYWcucGFyZW50Tm9kZSkgb2xkVGFnLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQob2xkVGFnKTtcblx0XHR9XG5cdFx0b2xkVGFncy5sZW5ndGggPSAwO1xuXHR9LCBhcHBseTogKCkgPT4ge1xuXHRcdGZvcih2YXIgaSA9IDA7IGkgPCBuZXdUYWdzLmxlbmd0aDsgaSsrKSBuZXdUYWdzW2ldLnJlbCA9IFwic3R5bGVzaGVldFwiO1xuXHRcdG5ld1RhZ3MubGVuZ3RoID0gMDtcblx0fSB9O1xufVxuX193ZWJwYWNrX3JlcXVpcmVfXy5obXJDLm1pbmlDc3MgPSAoY2h1bmtJZHMsIHJlbW92ZWRDaHVua3MsIHJlbW92ZWRNb2R1bGVzLCBwcm9taXNlcywgYXBwbHlIYW5kbGVycywgdXBkYXRlZE1vZHVsZXNMaXN0KSA9PiB7XG5cdGFwcGx5SGFuZGxlcnMucHVzaChhcHBseUhhbmRsZXIpO1xuXHRjaHVua0lkcy5mb3JFYWNoKChjaHVua0lkKSA9PiB7XG5cdFx0dmFyIGhyZWYgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLm1pbmlDc3NGKGNodW5rSWQpO1xuXHRcdHZhciBmdWxsaHJlZiA9IF9fd2VicGFja19yZXF1aXJlX18ucCArIGhyZWY7XG5cdFx0dmFyIG9sZFRhZyA9IGZpbmRTdHlsZXNoZWV0KGhyZWYsIGZ1bGxocmVmKTtcblx0XHRpZighb2xkVGFnKSByZXR1cm47XG5cdFx0cHJvbWlzZXMucHVzaChuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG5cdFx0XHR2YXIgdGFnID0gY3JlYXRlU3R5bGVzaGVldChjaHVua0lkLCBmdWxsaHJlZiwgKCkgPT4ge1xuXHRcdFx0XHR0YWcuYXMgPSBcInN0eWxlXCI7XG5cdFx0XHRcdHRhZy5yZWwgPSBcInByZWxvYWRcIjtcblx0XHRcdFx0cmVzb2x2ZSgpO1xuXHRcdFx0fSwgcmVqZWN0KTtcblx0XHRcdG9sZFRhZ3MucHVzaChvbGRUYWcpO1xuXHRcdFx0bmV3VGFncy5wdXNoKHRhZyk7XG5cdFx0fSkpO1xuXHR9KTtcbn0iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmIgPSBkb2N1bWVudC5iYXNlVVJJIHx8IHNlbGYubG9jYXRpb24uaHJlZjtcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0gX193ZWJwYWNrX3JlcXVpcmVfXy5obXJTX2pzb25wID0gX193ZWJwYWNrX3JlcXVpcmVfXy5obXJTX2pzb25wIHx8IHtcblx0XCJtYWluXCI6IDBcbn07XG5cbl9fd2VicGFja19yZXF1aXJlX18uZi5qID0gKGNodW5rSWQsIHByb21pc2VzKSA9PiB7XG5cdFx0Ly8gSlNPTlAgY2h1bmsgbG9hZGluZyBmb3IgamF2YXNjcmlwdFxuXHRcdHZhciBpbnN0YWxsZWRDaHVua0RhdGEgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLm8oaW5zdGFsbGVkQ2h1bmtzLCBjaHVua0lkKSA/IGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA6IHVuZGVmaW5lZDtcblx0XHRpZihpbnN0YWxsZWRDaHVua0RhdGEgIT09IDApIHsgLy8gMCBtZWFucyBcImFscmVhZHkgaW5zdGFsbGVkXCIuXG5cblx0XHRcdC8vIGEgUHJvbWlzZSBtZWFucyBcImN1cnJlbnRseSBsb2FkaW5nXCIuXG5cdFx0XHRpZihpbnN0YWxsZWRDaHVua0RhdGEpIHtcblx0XHRcdFx0cHJvbWlzZXMucHVzaChpbnN0YWxsZWRDaHVua0RhdGFbMl0pO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0aWYodHJ1ZSkgeyAvLyBhbGwgY2h1bmtzIGhhdmUgSlNcblx0XHRcdFx0XHQvLyBzZXR1cCBQcm9taXNlIGluIGNodW5rIGNhY2hlXG5cdFx0XHRcdFx0dmFyIHByb21pc2UgPSBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiAoaW5zdGFsbGVkQ2h1bmtEYXRhID0gaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdID0gW3Jlc29sdmUsIHJlamVjdF0pKTtcblx0XHRcdFx0XHRwcm9taXNlcy5wdXNoKGluc3RhbGxlZENodW5rRGF0YVsyXSA9IHByb21pc2UpO1xuXG5cdFx0XHRcdFx0Ly8gc3RhcnQgY2h1bmsgbG9hZGluZ1xuXHRcdFx0XHRcdHZhciB1cmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLnAgKyBfX3dlYnBhY2tfcmVxdWlyZV9fLnUoY2h1bmtJZCk7XG5cdFx0XHRcdFx0Ly8gY3JlYXRlIGVycm9yIGJlZm9yZSBzdGFjayB1bndvdW5kIHRvIGdldCB1c2VmdWwgc3RhY2t0cmFjZSBsYXRlclxuXHRcdFx0XHRcdHZhciBlcnJvciA9IG5ldyBFcnJvcigpO1xuXHRcdFx0XHRcdHZhciBsb2FkaW5nRW5kZWQgPSAoZXZlbnQpID0+IHtcblx0XHRcdFx0XHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhpbnN0YWxsZWRDaHVua3MsIGNodW5rSWQpKSB7XG5cdFx0XHRcdFx0XHRcdGluc3RhbGxlZENodW5rRGF0YSA9IGluc3RhbGxlZENodW5rc1tjaHVua0lkXTtcblx0XHRcdFx0XHRcdFx0aWYoaW5zdGFsbGVkQ2h1bmtEYXRhICE9PSAwKSBpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gPSB1bmRlZmluZWQ7XG5cdFx0XHRcdFx0XHRcdGlmKGluc3RhbGxlZENodW5rRGF0YSkge1xuXHRcdFx0XHRcdFx0XHRcdHZhciBlcnJvclR5cGUgPSBldmVudCAmJiAoZXZlbnQudHlwZSA9PT0gJ2xvYWQnID8gJ21pc3NpbmcnIDogZXZlbnQudHlwZSk7XG5cdFx0XHRcdFx0XHRcdFx0dmFyIHJlYWxTcmMgPSBldmVudCAmJiBldmVudC50YXJnZXQgJiYgZXZlbnQudGFyZ2V0LnNyYztcblx0XHRcdFx0XHRcdFx0XHRlcnJvci5tZXNzYWdlID0gJ0xvYWRpbmcgY2h1bmsgJyArIGNodW5rSWQgKyAnIGZhaWxlZC5cXG4oJyArIGVycm9yVHlwZSArICc6ICcgKyByZWFsU3JjICsgJyknO1xuXHRcdFx0XHRcdFx0XHRcdGVycm9yLm5hbWUgPSAnQ2h1bmtMb2FkRXJyb3InO1xuXHRcdFx0XHRcdFx0XHRcdGVycm9yLnR5cGUgPSBlcnJvclR5cGU7XG5cdFx0XHRcdFx0XHRcdFx0ZXJyb3IucmVxdWVzdCA9IHJlYWxTcmM7XG5cdFx0XHRcdFx0XHRcdFx0aW5zdGFsbGVkQ2h1bmtEYXRhWzFdKGVycm9yKTtcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH07XG5cdFx0XHRcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5sKHVybCwgbG9hZGluZ0VuZGVkLCBcImNodW5rLVwiICsgY2h1bmtJZCwgY2h1bmtJZCk7XG5cdFx0XHRcdH0gZWxzZSBpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gPSAwO1xuXHRcdFx0fVxuXHRcdH1cbn07XG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG52YXIgY3VycmVudFVwZGF0ZWRNb2R1bGVzTGlzdDtcbnZhciB3YWl0aW5nVXBkYXRlUmVzb2x2ZXMgPSB7fTtcbmZ1bmN0aW9uIGxvYWRVcGRhdGVDaHVuayhjaHVua0lkKSB7XG5cdHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG5cdFx0d2FpdGluZ1VwZGF0ZVJlc29sdmVzW2NodW5rSWRdID0gcmVzb2x2ZTtcblx0XHQvLyBzdGFydCB1cGRhdGUgY2h1bmsgbG9hZGluZ1xuXHRcdHZhciB1cmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLnAgKyBfX3dlYnBhY2tfcmVxdWlyZV9fLmh1KGNodW5rSWQpO1xuXHRcdC8vIGNyZWF0ZSBlcnJvciBiZWZvcmUgc3RhY2sgdW53b3VuZCB0byBnZXQgdXNlZnVsIHN0YWNrdHJhY2UgbGF0ZXJcblx0XHR2YXIgZXJyb3IgPSBuZXcgRXJyb3IoKTtcblx0XHR2YXIgbG9hZGluZ0VuZGVkID0gKGV2ZW50KSA9PiB7XG5cdFx0XHRpZih3YWl0aW5nVXBkYXRlUmVzb2x2ZXNbY2h1bmtJZF0pIHtcblx0XHRcdFx0d2FpdGluZ1VwZGF0ZVJlc29sdmVzW2NodW5rSWRdID0gdW5kZWZpbmVkXG5cdFx0XHRcdHZhciBlcnJvclR5cGUgPSBldmVudCAmJiAoZXZlbnQudHlwZSA9PT0gJ2xvYWQnID8gJ21pc3NpbmcnIDogZXZlbnQudHlwZSk7XG5cdFx0XHRcdHZhciByZWFsU3JjID0gZXZlbnQgJiYgZXZlbnQudGFyZ2V0ICYmIGV2ZW50LnRhcmdldC5zcmM7XG5cdFx0XHRcdGVycm9yLm1lc3NhZ2UgPSAnTG9hZGluZyBob3QgdXBkYXRlIGNodW5rICcgKyBjaHVua0lkICsgJyBmYWlsZWQuXFxuKCcgKyBlcnJvclR5cGUgKyAnOiAnICsgcmVhbFNyYyArICcpJztcblx0XHRcdFx0ZXJyb3IubmFtZSA9ICdDaHVua0xvYWRFcnJvcic7XG5cdFx0XHRcdGVycm9yLnR5cGUgPSBlcnJvclR5cGU7XG5cdFx0XHRcdGVycm9yLnJlcXVlc3QgPSByZWFsU3JjO1xuXHRcdFx0XHRyZWplY3QoZXJyb3IpO1xuXHRcdFx0fVxuXHRcdH07XG5cdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5sKHVybCwgbG9hZGluZ0VuZGVkKTtcblx0fSk7XG59XG5cbnNlbGZbXCJ3ZWJwYWNrSG90VXBkYXRld2VicGFja1wiXSA9IChjaHVua0lkLCBtb3JlTW9kdWxlcywgcnVudGltZSkgPT4ge1xuXHRmb3IodmFyIG1vZHVsZUlkIGluIG1vcmVNb2R1bGVzKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKG1vcmVNb2R1bGVzLCBtb2R1bGVJZCkpIHtcblx0XHRcdGN1cnJlbnRVcGRhdGVbbW9kdWxlSWRdID0gbW9yZU1vZHVsZXNbbW9kdWxlSWRdO1xuXHRcdFx0aWYoY3VycmVudFVwZGF0ZWRNb2R1bGVzTGlzdCkgY3VycmVudFVwZGF0ZWRNb2R1bGVzTGlzdC5wdXNoKG1vZHVsZUlkKTtcblx0XHR9XG5cdH1cblx0aWYocnVudGltZSkgY3VycmVudFVwZGF0ZVJ1bnRpbWUucHVzaChydW50aW1lKTtcblx0aWYod2FpdGluZ1VwZGF0ZVJlc29sdmVzW2NodW5rSWRdKSB7XG5cdFx0d2FpdGluZ1VwZGF0ZVJlc29sdmVzW2NodW5rSWRdKCk7XG5cdFx0d2FpdGluZ1VwZGF0ZVJlc29sdmVzW2NodW5rSWRdID0gdW5kZWZpbmVkO1xuXHR9XG59O1xuXG52YXIgY3VycmVudFVwZGF0ZUNodW5rcztcbnZhciBjdXJyZW50VXBkYXRlO1xudmFyIGN1cnJlbnRVcGRhdGVSZW1vdmVkQ2h1bmtzO1xudmFyIGN1cnJlbnRVcGRhdGVSdW50aW1lO1xuZnVuY3Rpb24gYXBwbHlIYW5kbGVyKG9wdGlvbnMpIHtcblx0aWYgKF9fd2VicGFja19yZXF1aXJlX18uZikgZGVsZXRlIF9fd2VicGFja19yZXF1aXJlX18uZi5qc29ucEhtcjtcblx0Y3VycmVudFVwZGF0ZUNodW5rcyA9IHVuZGVmaW5lZDtcblx0ZnVuY3Rpb24gZ2V0QWZmZWN0ZWRNb2R1bGVFZmZlY3RzKHVwZGF0ZU1vZHVsZUlkKSB7XG5cdFx0dmFyIG91dGRhdGVkTW9kdWxlcyA9IFt1cGRhdGVNb2R1bGVJZF07XG5cdFx0dmFyIG91dGRhdGVkRGVwZW5kZW5jaWVzID0ge307XG5cblx0XHR2YXIgcXVldWUgPSBvdXRkYXRlZE1vZHVsZXMubWFwKGZ1bmN0aW9uIChpZCkge1xuXHRcdFx0cmV0dXJuIHtcblx0XHRcdFx0Y2hhaW46IFtpZF0sXG5cdFx0XHRcdGlkOiBpZFxuXHRcdFx0fTtcblx0XHR9KTtcblx0XHR3aGlsZSAocXVldWUubGVuZ3RoID4gMCkge1xuXHRcdFx0dmFyIHF1ZXVlSXRlbSA9IHF1ZXVlLnBvcCgpO1xuXHRcdFx0dmFyIG1vZHVsZUlkID0gcXVldWVJdGVtLmlkO1xuXHRcdFx0dmFyIGNoYWluID0gcXVldWVJdGVtLmNoYWluO1xuXHRcdFx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19yZXF1aXJlX18uY1ttb2R1bGVJZF07XG5cdFx0XHRpZiAoXG5cdFx0XHRcdCFtb2R1bGUgfHxcblx0XHRcdFx0KG1vZHVsZS5ob3QuX3NlbGZBY2NlcHRlZCAmJiAhbW9kdWxlLmhvdC5fc2VsZkludmFsaWRhdGVkKVxuXHRcdFx0KVxuXHRcdFx0XHRjb250aW51ZTtcblx0XHRcdGlmIChtb2R1bGUuaG90Ll9zZWxmRGVjbGluZWQpIHtcblx0XHRcdFx0cmV0dXJuIHtcblx0XHRcdFx0XHR0eXBlOiBcInNlbGYtZGVjbGluZWRcIixcblx0XHRcdFx0XHRjaGFpbjogY2hhaW4sXG5cdFx0XHRcdFx0bW9kdWxlSWQ6IG1vZHVsZUlkXG5cdFx0XHRcdH07XG5cdFx0XHR9XG5cdFx0XHRpZiAobW9kdWxlLmhvdC5fbWFpbikge1xuXHRcdFx0XHRyZXR1cm4ge1xuXHRcdFx0XHRcdHR5cGU6IFwidW5hY2NlcHRlZFwiLFxuXHRcdFx0XHRcdGNoYWluOiBjaGFpbixcblx0XHRcdFx0XHRtb2R1bGVJZDogbW9kdWxlSWRcblx0XHRcdFx0fTtcblx0XHRcdH1cblx0XHRcdGZvciAodmFyIGkgPSAwOyBpIDwgbW9kdWxlLnBhcmVudHMubGVuZ3RoOyBpKyspIHtcblx0XHRcdFx0dmFyIHBhcmVudElkID0gbW9kdWxlLnBhcmVudHNbaV07XG5cdFx0XHRcdHZhciBwYXJlbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmNbcGFyZW50SWRdO1xuXHRcdFx0XHRpZiAoIXBhcmVudCkgY29udGludWU7XG5cdFx0XHRcdGlmIChwYXJlbnQuaG90Ll9kZWNsaW5lZERlcGVuZGVuY2llc1ttb2R1bGVJZF0pIHtcblx0XHRcdFx0XHRyZXR1cm4ge1xuXHRcdFx0XHRcdFx0dHlwZTogXCJkZWNsaW5lZFwiLFxuXHRcdFx0XHRcdFx0Y2hhaW46IGNoYWluLmNvbmNhdChbcGFyZW50SWRdKSxcblx0XHRcdFx0XHRcdG1vZHVsZUlkOiBtb2R1bGVJZCxcblx0XHRcdFx0XHRcdHBhcmVudElkOiBwYXJlbnRJZFxuXHRcdFx0XHRcdH07XG5cdFx0XHRcdH1cblx0XHRcdFx0aWYgKG91dGRhdGVkTW9kdWxlcy5pbmRleE9mKHBhcmVudElkKSAhPT0gLTEpIGNvbnRpbnVlO1xuXHRcdFx0XHRpZiAocGFyZW50LmhvdC5fYWNjZXB0ZWREZXBlbmRlbmNpZXNbbW9kdWxlSWRdKSB7XG5cdFx0XHRcdFx0aWYgKCFvdXRkYXRlZERlcGVuZGVuY2llc1twYXJlbnRJZF0pXG5cdFx0XHRcdFx0XHRvdXRkYXRlZERlcGVuZGVuY2llc1twYXJlbnRJZF0gPSBbXTtcblx0XHRcdFx0XHRhZGRBbGxUb1NldChvdXRkYXRlZERlcGVuZGVuY2llc1twYXJlbnRJZF0sIFttb2R1bGVJZF0pO1xuXHRcdFx0XHRcdGNvbnRpbnVlO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGRlbGV0ZSBvdXRkYXRlZERlcGVuZGVuY2llc1twYXJlbnRJZF07XG5cdFx0XHRcdG91dGRhdGVkTW9kdWxlcy5wdXNoKHBhcmVudElkKTtcblx0XHRcdFx0cXVldWUucHVzaCh7XG5cdFx0XHRcdFx0Y2hhaW46IGNoYWluLmNvbmNhdChbcGFyZW50SWRdKSxcblx0XHRcdFx0XHRpZDogcGFyZW50SWRcblx0XHRcdFx0fSk7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHtcblx0XHRcdHR5cGU6IFwiYWNjZXB0ZWRcIixcblx0XHRcdG1vZHVsZUlkOiB1cGRhdGVNb2R1bGVJZCxcblx0XHRcdG91dGRhdGVkTW9kdWxlczogb3V0ZGF0ZWRNb2R1bGVzLFxuXHRcdFx0b3V0ZGF0ZWREZXBlbmRlbmNpZXM6IG91dGRhdGVkRGVwZW5kZW5jaWVzXG5cdFx0fTtcblx0fVxuXG5cdGZ1bmN0aW9uIGFkZEFsbFRvU2V0KGEsIGIpIHtcblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IGIubGVuZ3RoOyBpKyspIHtcblx0XHRcdHZhciBpdGVtID0gYltpXTtcblx0XHRcdGlmIChhLmluZGV4T2YoaXRlbSkgPT09IC0xKSBhLnB1c2goaXRlbSk7XG5cdFx0fVxuXHR9XG5cblx0Ly8gYXQgYmVnaW4gYWxsIHVwZGF0ZXMgbW9kdWxlcyBhcmUgb3V0ZGF0ZWRcblx0Ly8gdGhlIFwib3V0ZGF0ZWRcIiBzdGF0dXMgY2FuIHByb3BhZ2F0ZSB0byBwYXJlbnRzIGlmIHRoZXkgZG9uJ3QgYWNjZXB0IHRoZSBjaGlsZHJlblxuXHR2YXIgb3V0ZGF0ZWREZXBlbmRlbmNpZXMgPSB7fTtcblx0dmFyIG91dGRhdGVkTW9kdWxlcyA9IFtdO1xuXHR2YXIgYXBwbGllZFVwZGF0ZSA9IHt9O1xuXG5cdHZhciB3YXJuVW5leHBlY3RlZFJlcXVpcmUgPSBmdW5jdGlvbiB3YXJuVW5leHBlY3RlZFJlcXVpcmUobW9kdWxlKSB7XG5cdFx0Y29uc29sZS53YXJuKFxuXHRcdFx0XCJbSE1SXSB1bmV4cGVjdGVkIHJlcXVpcmUoXCIgKyBtb2R1bGUuaWQgKyBcIikgdG8gZGlzcG9zZWQgbW9kdWxlXCJcblx0XHQpO1xuXHR9O1xuXG5cdGZvciAodmFyIG1vZHVsZUlkIGluIGN1cnJlbnRVcGRhdGUpIHtcblx0XHRpZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGN1cnJlbnRVcGRhdGUsIG1vZHVsZUlkKSkge1xuXHRcdFx0dmFyIG5ld01vZHVsZUZhY3RvcnkgPSBjdXJyZW50VXBkYXRlW21vZHVsZUlkXTtcblx0XHRcdC8qKiBAdHlwZSB7VE9ET30gKi9cblx0XHRcdHZhciByZXN1bHQ7XG5cdFx0XHRpZiAobmV3TW9kdWxlRmFjdG9yeSkge1xuXHRcdFx0XHRyZXN1bHQgPSBnZXRBZmZlY3RlZE1vZHVsZUVmZmVjdHMobW9kdWxlSWQpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0cmVzdWx0ID0ge1xuXHRcdFx0XHRcdHR5cGU6IFwiZGlzcG9zZWRcIixcblx0XHRcdFx0XHRtb2R1bGVJZDogbW9kdWxlSWRcblx0XHRcdFx0fTtcblx0XHRcdH1cblx0XHRcdC8qKiBAdHlwZSB7RXJyb3J8ZmFsc2V9ICovXG5cdFx0XHR2YXIgYWJvcnRFcnJvciA9IGZhbHNlO1xuXHRcdFx0dmFyIGRvQXBwbHkgPSBmYWxzZTtcblx0XHRcdHZhciBkb0Rpc3Bvc2UgPSBmYWxzZTtcblx0XHRcdHZhciBjaGFpbkluZm8gPSBcIlwiO1xuXHRcdFx0aWYgKHJlc3VsdC5jaGFpbikge1xuXHRcdFx0XHRjaGFpbkluZm8gPSBcIlxcblVwZGF0ZSBwcm9wYWdhdGlvbjogXCIgKyByZXN1bHQuY2hhaW4uam9pbihcIiAtPiBcIik7XG5cdFx0XHR9XG5cdFx0XHRzd2l0Y2ggKHJlc3VsdC50eXBlKSB7XG5cdFx0XHRcdGNhc2UgXCJzZWxmLWRlY2xpbmVkXCI6XG5cdFx0XHRcdFx0aWYgKG9wdGlvbnMub25EZWNsaW5lZCkgb3B0aW9ucy5vbkRlY2xpbmVkKHJlc3VsdCk7XG5cdFx0XHRcdFx0aWYgKCFvcHRpb25zLmlnbm9yZURlY2xpbmVkKVxuXHRcdFx0XHRcdFx0YWJvcnRFcnJvciA9IG5ldyBFcnJvcihcblx0XHRcdFx0XHRcdFx0XCJBYm9ydGVkIGJlY2F1c2Ugb2Ygc2VsZiBkZWNsaW5lOiBcIiArXG5cdFx0XHRcdFx0XHRcdFx0cmVzdWx0Lm1vZHVsZUlkICtcblx0XHRcdFx0XHRcdFx0XHRjaGFpbkluZm9cblx0XHRcdFx0XHRcdCk7XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdGNhc2UgXCJkZWNsaW5lZFwiOlxuXHRcdFx0XHRcdGlmIChvcHRpb25zLm9uRGVjbGluZWQpIG9wdGlvbnMub25EZWNsaW5lZChyZXN1bHQpO1xuXHRcdFx0XHRcdGlmICghb3B0aW9ucy5pZ25vcmVEZWNsaW5lZClcblx0XHRcdFx0XHRcdGFib3J0RXJyb3IgPSBuZXcgRXJyb3IoXG5cdFx0XHRcdFx0XHRcdFwiQWJvcnRlZCBiZWNhdXNlIG9mIGRlY2xpbmVkIGRlcGVuZGVuY3k6IFwiICtcblx0XHRcdFx0XHRcdFx0XHRyZXN1bHQubW9kdWxlSWQgK1xuXHRcdFx0XHRcdFx0XHRcdFwiIGluIFwiICtcblx0XHRcdFx0XHRcdFx0XHRyZXN1bHQucGFyZW50SWQgK1xuXHRcdFx0XHRcdFx0XHRcdGNoYWluSW5mb1xuXHRcdFx0XHRcdFx0KTtcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0Y2FzZSBcInVuYWNjZXB0ZWRcIjpcblx0XHRcdFx0XHRpZiAob3B0aW9ucy5vblVuYWNjZXB0ZWQpIG9wdGlvbnMub25VbmFjY2VwdGVkKHJlc3VsdCk7XG5cdFx0XHRcdFx0aWYgKCFvcHRpb25zLmlnbm9yZVVuYWNjZXB0ZWQpXG5cdFx0XHRcdFx0XHRhYm9ydEVycm9yID0gbmV3IEVycm9yKFxuXHRcdFx0XHRcdFx0XHRcIkFib3J0ZWQgYmVjYXVzZSBcIiArIG1vZHVsZUlkICsgXCIgaXMgbm90IGFjY2VwdGVkXCIgKyBjaGFpbkluZm9cblx0XHRcdFx0XHRcdCk7XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdGNhc2UgXCJhY2NlcHRlZFwiOlxuXHRcdFx0XHRcdGlmIChvcHRpb25zLm9uQWNjZXB0ZWQpIG9wdGlvbnMub25BY2NlcHRlZChyZXN1bHQpO1xuXHRcdFx0XHRcdGRvQXBwbHkgPSB0cnVlO1xuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRjYXNlIFwiZGlzcG9zZWRcIjpcblx0XHRcdFx0XHRpZiAob3B0aW9ucy5vbkRpc3Bvc2VkKSBvcHRpb25zLm9uRGlzcG9zZWQocmVzdWx0KTtcblx0XHRcdFx0XHRkb0Rpc3Bvc2UgPSB0cnVlO1xuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRkZWZhdWx0OlxuXHRcdFx0XHRcdHRocm93IG5ldyBFcnJvcihcIlVuZXhjZXB0aW9uIHR5cGUgXCIgKyByZXN1bHQudHlwZSk7XG5cdFx0XHR9XG5cdFx0XHRpZiAoYWJvcnRFcnJvcikge1xuXHRcdFx0XHRyZXR1cm4ge1xuXHRcdFx0XHRcdGVycm9yOiBhYm9ydEVycm9yXG5cdFx0XHRcdH07XG5cdFx0XHR9XG5cdFx0XHRpZiAoZG9BcHBseSkge1xuXHRcdFx0XHRhcHBsaWVkVXBkYXRlW21vZHVsZUlkXSA9IG5ld01vZHVsZUZhY3Rvcnk7XG5cdFx0XHRcdGFkZEFsbFRvU2V0KG91dGRhdGVkTW9kdWxlcywgcmVzdWx0Lm91dGRhdGVkTW9kdWxlcyk7XG5cdFx0XHRcdGZvciAobW9kdWxlSWQgaW4gcmVzdWx0Lm91dGRhdGVkRGVwZW5kZW5jaWVzKSB7XG5cdFx0XHRcdFx0aWYgKF9fd2VicGFja19yZXF1aXJlX18ubyhyZXN1bHQub3V0ZGF0ZWREZXBlbmRlbmNpZXMsIG1vZHVsZUlkKSkge1xuXHRcdFx0XHRcdFx0aWYgKCFvdXRkYXRlZERlcGVuZGVuY2llc1ttb2R1bGVJZF0pXG5cdFx0XHRcdFx0XHRcdG91dGRhdGVkRGVwZW5kZW5jaWVzW21vZHVsZUlkXSA9IFtdO1xuXHRcdFx0XHRcdFx0YWRkQWxsVG9TZXQoXG5cdFx0XHRcdFx0XHRcdG91dGRhdGVkRGVwZW5kZW5jaWVzW21vZHVsZUlkXSxcblx0XHRcdFx0XHRcdFx0cmVzdWx0Lm91dGRhdGVkRGVwZW5kZW5jaWVzW21vZHVsZUlkXVxuXHRcdFx0XHRcdFx0KTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdGlmIChkb0Rpc3Bvc2UpIHtcblx0XHRcdFx0YWRkQWxsVG9TZXQob3V0ZGF0ZWRNb2R1bGVzLCBbcmVzdWx0Lm1vZHVsZUlkXSk7XG5cdFx0XHRcdGFwcGxpZWRVcGRhdGVbbW9kdWxlSWRdID0gd2FyblVuZXhwZWN0ZWRSZXF1aXJlO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxuXHRjdXJyZW50VXBkYXRlID0gdW5kZWZpbmVkO1xuXG5cdC8vIFN0b3JlIHNlbGYgYWNjZXB0ZWQgb3V0ZGF0ZWQgbW9kdWxlcyB0byByZXF1aXJlIHRoZW0gbGF0ZXIgYnkgdGhlIG1vZHVsZSBzeXN0ZW1cblx0dmFyIG91dGRhdGVkU2VsZkFjY2VwdGVkTW9kdWxlcyA9IFtdO1xuXHRmb3IgKHZhciBqID0gMDsgaiA8IG91dGRhdGVkTW9kdWxlcy5sZW5ndGg7IGorKykge1xuXHRcdHZhciBvdXRkYXRlZE1vZHVsZUlkID0gb3V0ZGF0ZWRNb2R1bGVzW2pdO1xuXHRcdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmNbb3V0ZGF0ZWRNb2R1bGVJZF07XG5cdFx0aWYgKFxuXHRcdFx0bW9kdWxlICYmXG5cdFx0XHQobW9kdWxlLmhvdC5fc2VsZkFjY2VwdGVkIHx8IG1vZHVsZS5ob3QuX21haW4pICYmXG5cdFx0XHQvLyByZW1vdmVkIHNlbGYtYWNjZXB0ZWQgbW9kdWxlcyBzaG91bGQgbm90IGJlIHJlcXVpcmVkXG5cdFx0XHRhcHBsaWVkVXBkYXRlW291dGRhdGVkTW9kdWxlSWRdICE9PSB3YXJuVW5leHBlY3RlZFJlcXVpcmUgJiZcblx0XHRcdC8vIHdoZW4gY2FsbGVkIGludmFsaWRhdGUgc2VsZi1hY2NlcHRpbmcgaXMgbm90IHBvc3NpYmxlXG5cdFx0XHQhbW9kdWxlLmhvdC5fc2VsZkludmFsaWRhdGVkXG5cdFx0KSB7XG5cdFx0XHRvdXRkYXRlZFNlbGZBY2NlcHRlZE1vZHVsZXMucHVzaCh7XG5cdFx0XHRcdG1vZHVsZTogb3V0ZGF0ZWRNb2R1bGVJZCxcblx0XHRcdFx0cmVxdWlyZTogbW9kdWxlLmhvdC5fcmVxdWlyZVNlbGYsXG5cdFx0XHRcdGVycm9ySGFuZGxlcjogbW9kdWxlLmhvdC5fc2VsZkFjY2VwdGVkXG5cdFx0XHR9KTtcblx0XHR9XG5cdH1cblxuXHR2YXIgbW9kdWxlT3V0ZGF0ZWREZXBlbmRlbmNpZXM7XG5cblx0cmV0dXJuIHtcblx0XHRkaXNwb3NlOiBmdW5jdGlvbiAoKSB7XG5cdFx0XHRjdXJyZW50VXBkYXRlUmVtb3ZlZENodW5rcy5mb3JFYWNoKGZ1bmN0aW9uIChjaHVua0lkKSB7XG5cdFx0XHRcdGRlbGV0ZSBpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF07XG5cdFx0XHR9KTtcblx0XHRcdGN1cnJlbnRVcGRhdGVSZW1vdmVkQ2h1bmtzID0gdW5kZWZpbmVkO1xuXG5cdFx0XHR2YXIgaWR4O1xuXHRcdFx0dmFyIHF1ZXVlID0gb3V0ZGF0ZWRNb2R1bGVzLnNsaWNlKCk7XG5cdFx0XHR3aGlsZSAocXVldWUubGVuZ3RoID4gMCkge1xuXHRcdFx0XHR2YXIgbW9kdWxlSWQgPSBxdWV1ZS5wb3AoKTtcblx0XHRcdFx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19yZXF1aXJlX18uY1ttb2R1bGVJZF07XG5cdFx0XHRcdGlmICghbW9kdWxlKSBjb250aW51ZTtcblxuXHRcdFx0XHR2YXIgZGF0YSA9IHt9O1xuXG5cdFx0XHRcdC8vIENhbGwgZGlzcG9zZSBoYW5kbGVyc1xuXHRcdFx0XHR2YXIgZGlzcG9zZUhhbmRsZXJzID0gbW9kdWxlLmhvdC5fZGlzcG9zZUhhbmRsZXJzO1xuXHRcdFx0XHRmb3IgKGogPSAwOyBqIDwgZGlzcG9zZUhhbmRsZXJzLmxlbmd0aDsgaisrKSB7XG5cdFx0XHRcdFx0ZGlzcG9zZUhhbmRsZXJzW2pdLmNhbGwobnVsbCwgZGF0YSk7XG5cdFx0XHRcdH1cblx0XHRcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5obXJEW21vZHVsZUlkXSA9IGRhdGE7XG5cblx0XHRcdFx0Ly8gZGlzYWJsZSBtb2R1bGUgKHRoaXMgZGlzYWJsZXMgcmVxdWlyZXMgZnJvbSB0aGlzIG1vZHVsZSlcblx0XHRcdFx0bW9kdWxlLmhvdC5hY3RpdmUgPSBmYWxzZTtcblxuXHRcdFx0XHQvLyByZW1vdmUgbW9kdWxlIGZyb20gY2FjaGVcblx0XHRcdFx0ZGVsZXRlIF9fd2VicGFja19yZXF1aXJlX18uY1ttb2R1bGVJZF07XG5cblx0XHRcdFx0Ly8gd2hlbiBkaXNwb3NpbmcgdGhlcmUgaXMgbm8gbmVlZCB0byBjYWxsIGRpc3Bvc2UgaGFuZGxlclxuXHRcdFx0XHRkZWxldGUgb3V0ZGF0ZWREZXBlbmRlbmNpZXNbbW9kdWxlSWRdO1xuXG5cdFx0XHRcdC8vIHJlbW92ZSBcInBhcmVudHNcIiByZWZlcmVuY2VzIGZyb20gYWxsIGNoaWxkcmVuXG5cdFx0XHRcdGZvciAoaiA9IDA7IGogPCBtb2R1bGUuY2hpbGRyZW4ubGVuZ3RoOyBqKyspIHtcblx0XHRcdFx0XHR2YXIgY2hpbGQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmNbbW9kdWxlLmNoaWxkcmVuW2pdXTtcblx0XHRcdFx0XHRpZiAoIWNoaWxkKSBjb250aW51ZTtcblx0XHRcdFx0XHRpZHggPSBjaGlsZC5wYXJlbnRzLmluZGV4T2YobW9kdWxlSWQpO1xuXHRcdFx0XHRcdGlmIChpZHggPj0gMCkge1xuXHRcdFx0XHRcdFx0Y2hpbGQucGFyZW50cy5zcGxpY2UoaWR4LCAxKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH1cblxuXHRcdFx0Ly8gcmVtb3ZlIG91dGRhdGVkIGRlcGVuZGVuY3kgZnJvbSBtb2R1bGUgY2hpbGRyZW5cblx0XHRcdHZhciBkZXBlbmRlbmN5O1xuXHRcdFx0Zm9yICh2YXIgb3V0ZGF0ZWRNb2R1bGVJZCBpbiBvdXRkYXRlZERlcGVuZGVuY2llcykge1xuXHRcdFx0XHRpZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5vKG91dGRhdGVkRGVwZW5kZW5jaWVzLCBvdXRkYXRlZE1vZHVsZUlkKSkge1xuXHRcdFx0XHRcdG1vZHVsZSA9IF9fd2VicGFja19yZXF1aXJlX18uY1tvdXRkYXRlZE1vZHVsZUlkXTtcblx0XHRcdFx0XHRpZiAobW9kdWxlKSB7XG5cdFx0XHRcdFx0XHRtb2R1bGVPdXRkYXRlZERlcGVuZGVuY2llcyA9XG5cdFx0XHRcdFx0XHRcdG91dGRhdGVkRGVwZW5kZW5jaWVzW291dGRhdGVkTW9kdWxlSWRdO1xuXHRcdFx0XHRcdFx0Zm9yIChqID0gMDsgaiA8IG1vZHVsZU91dGRhdGVkRGVwZW5kZW5jaWVzLmxlbmd0aDsgaisrKSB7XG5cdFx0XHRcdFx0XHRcdGRlcGVuZGVuY3kgPSBtb2R1bGVPdXRkYXRlZERlcGVuZGVuY2llc1tqXTtcblx0XHRcdFx0XHRcdFx0aWR4ID0gbW9kdWxlLmNoaWxkcmVuLmluZGV4T2YoZGVwZW5kZW5jeSk7XG5cdFx0XHRcdFx0XHRcdGlmIChpZHggPj0gMCkgbW9kdWxlLmNoaWxkcmVuLnNwbGljZShpZHgsIDEpO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH0sXG5cdFx0YXBwbHk6IGZ1bmN0aW9uIChyZXBvcnRFcnJvcikge1xuXHRcdFx0Ly8gaW5zZXJ0IG5ldyBjb2RlXG5cdFx0XHRmb3IgKHZhciB1cGRhdGVNb2R1bGVJZCBpbiBhcHBsaWVkVXBkYXRlKSB7XG5cdFx0XHRcdGlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLm8oYXBwbGllZFVwZGF0ZSwgdXBkYXRlTW9kdWxlSWQpKSB7XG5cdFx0XHRcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tW3VwZGF0ZU1vZHVsZUlkXSA9IGFwcGxpZWRVcGRhdGVbdXBkYXRlTW9kdWxlSWRdO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblx0XHRcdC8vIHJ1biBuZXcgcnVudGltZSBtb2R1bGVzXG5cdFx0XHRmb3IgKHZhciBpID0gMDsgaSA8IGN1cnJlbnRVcGRhdGVSdW50aW1lLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRcdGN1cnJlbnRVcGRhdGVSdW50aW1lW2ldKF9fd2VicGFja19yZXF1aXJlX18pO1xuXHRcdFx0fVxuXG5cdFx0XHQvLyBjYWxsIGFjY2VwdCBoYW5kbGVyc1xuXHRcdFx0Zm9yICh2YXIgb3V0ZGF0ZWRNb2R1bGVJZCBpbiBvdXRkYXRlZERlcGVuZGVuY2llcykge1xuXHRcdFx0XHRpZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5vKG91dGRhdGVkRGVwZW5kZW5jaWVzLCBvdXRkYXRlZE1vZHVsZUlkKSkge1xuXHRcdFx0XHRcdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmNbb3V0ZGF0ZWRNb2R1bGVJZF07XG5cdFx0XHRcdFx0aWYgKG1vZHVsZSkge1xuXHRcdFx0XHRcdFx0bW9kdWxlT3V0ZGF0ZWREZXBlbmRlbmNpZXMgPVxuXHRcdFx0XHRcdFx0XHRvdXRkYXRlZERlcGVuZGVuY2llc1tvdXRkYXRlZE1vZHVsZUlkXTtcblx0XHRcdFx0XHRcdHZhciBjYWxsYmFja3MgPSBbXTtcblx0XHRcdFx0XHRcdHZhciBlcnJvckhhbmRsZXJzID0gW107XG5cdFx0XHRcdFx0XHR2YXIgZGVwZW5kZW5jaWVzRm9yQ2FsbGJhY2tzID0gW107XG5cdFx0XHRcdFx0XHRmb3IgKHZhciBqID0gMDsgaiA8IG1vZHVsZU91dGRhdGVkRGVwZW5kZW5jaWVzLmxlbmd0aDsgaisrKSB7XG5cdFx0XHRcdFx0XHRcdHZhciBkZXBlbmRlbmN5ID0gbW9kdWxlT3V0ZGF0ZWREZXBlbmRlbmNpZXNbal07XG5cdFx0XHRcdFx0XHRcdHZhciBhY2NlcHRDYWxsYmFjayA9XG5cdFx0XHRcdFx0XHRcdFx0bW9kdWxlLmhvdC5fYWNjZXB0ZWREZXBlbmRlbmNpZXNbZGVwZW5kZW5jeV07XG5cdFx0XHRcdFx0XHRcdHZhciBlcnJvckhhbmRsZXIgPVxuXHRcdFx0XHRcdFx0XHRcdG1vZHVsZS5ob3QuX2FjY2VwdGVkRXJyb3JIYW5kbGVyc1tkZXBlbmRlbmN5XTtcblx0XHRcdFx0XHRcdFx0aWYgKGFjY2VwdENhbGxiYWNrKSB7XG5cdFx0XHRcdFx0XHRcdFx0aWYgKGNhbGxiYWNrcy5pbmRleE9mKGFjY2VwdENhbGxiYWNrKSAhPT0gLTEpIGNvbnRpbnVlO1xuXHRcdFx0XHRcdFx0XHRcdGNhbGxiYWNrcy5wdXNoKGFjY2VwdENhbGxiYWNrKTtcblx0XHRcdFx0XHRcdFx0XHRlcnJvckhhbmRsZXJzLnB1c2goZXJyb3JIYW5kbGVyKTtcblx0XHRcdFx0XHRcdFx0XHRkZXBlbmRlbmNpZXNGb3JDYWxsYmFja3MucHVzaChkZXBlbmRlbmN5KTtcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0Zm9yICh2YXIgayA9IDA7IGsgPCBjYWxsYmFja3MubGVuZ3RoOyBrKyspIHtcblx0XHRcdFx0XHRcdFx0dHJ5IHtcblx0XHRcdFx0XHRcdFx0XHRjYWxsYmFja3Nba10uY2FsbChudWxsLCBtb2R1bGVPdXRkYXRlZERlcGVuZGVuY2llcyk7XG5cdFx0XHRcdFx0XHRcdH0gY2F0Y2ggKGVycikge1xuXHRcdFx0XHRcdFx0XHRcdGlmICh0eXBlb2YgZXJyb3JIYW5kbGVyc1trXSA9PT0gXCJmdW5jdGlvblwiKSB7XG5cdFx0XHRcdFx0XHRcdFx0XHR0cnkge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRlcnJvckhhbmRsZXJzW2tdKGVyciwge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdG1vZHVsZUlkOiBvdXRkYXRlZE1vZHVsZUlkLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGRlcGVuZGVuY3lJZDogZGVwZW5kZW5jaWVzRm9yQ2FsbGJhY2tzW2tdXG5cdFx0XHRcdFx0XHRcdFx0XHRcdH0pO1xuXHRcdFx0XHRcdFx0XHRcdFx0fSBjYXRjaCAoZXJyMikge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRpZiAob3B0aW9ucy5vbkVycm9yZWQpIHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRvcHRpb25zLm9uRXJyb3JlZCh7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR0eXBlOiBcImFjY2VwdC1lcnJvci1oYW5kbGVyLWVycm9yZWRcIixcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdG1vZHVsZUlkOiBvdXRkYXRlZE1vZHVsZUlkLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0ZGVwZW5kZW5jeUlkOiBkZXBlbmRlbmNpZXNGb3JDYWxsYmFja3Nba10sXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRlcnJvcjogZXJyMixcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdG9yaWdpbmFsRXJyb3I6IGVyclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdH0pO1xuXHRcdFx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdGlmICghb3B0aW9ucy5pZ25vcmVFcnJvcmVkKSB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0cmVwb3J0RXJyb3IoZXJyMik7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0cmVwb3J0RXJyb3IoZXJyKTtcblx0XHRcdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRcdFx0XHRpZiAob3B0aW9ucy5vbkVycm9yZWQpIHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0b3B0aW9ucy5vbkVycm9yZWQoe1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHR5cGU6IFwiYWNjZXB0LWVycm9yZWRcIixcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRtb2R1bGVJZDogb3V0ZGF0ZWRNb2R1bGVJZCxcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRkZXBlbmRlbmN5SWQ6IGRlcGVuZGVuY2llc0ZvckNhbGxiYWNrc1trXSxcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRlcnJvcjogZXJyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdH0pO1xuXHRcdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRcdFx0aWYgKCFvcHRpb25zLmlnbm9yZUVycm9yZWQpIHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0cmVwb3J0RXJyb3IoZXJyKTtcblx0XHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH1cblxuXHRcdFx0Ly8gTG9hZCBzZWxmIGFjY2VwdGVkIG1vZHVsZXNcblx0XHRcdGZvciAodmFyIG8gPSAwOyBvIDwgb3V0ZGF0ZWRTZWxmQWNjZXB0ZWRNb2R1bGVzLmxlbmd0aDsgbysrKSB7XG5cdFx0XHRcdHZhciBpdGVtID0gb3V0ZGF0ZWRTZWxmQWNjZXB0ZWRNb2R1bGVzW29dO1xuXHRcdFx0XHR2YXIgbW9kdWxlSWQgPSBpdGVtLm1vZHVsZTtcblx0XHRcdFx0dHJ5IHtcblx0XHRcdFx0XHRpdGVtLnJlcXVpcmUobW9kdWxlSWQpO1xuXHRcdFx0XHR9IGNhdGNoIChlcnIpIHtcblx0XHRcdFx0XHRpZiAodHlwZW9mIGl0ZW0uZXJyb3JIYW5kbGVyID09PSBcImZ1bmN0aW9uXCIpIHtcblx0XHRcdFx0XHRcdHRyeSB7XG5cdFx0XHRcdFx0XHRcdGl0ZW0uZXJyb3JIYW5kbGVyKGVyciwge1xuXHRcdFx0XHRcdFx0XHRcdG1vZHVsZUlkOiBtb2R1bGVJZCxcblx0XHRcdFx0XHRcdFx0XHRtb2R1bGU6IF9fd2VicGFja19yZXF1aXJlX18uY1ttb2R1bGVJZF1cblx0XHRcdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0XHR9IGNhdGNoIChlcnIyKSB7XG5cdFx0XHRcdFx0XHRcdGlmIChvcHRpb25zLm9uRXJyb3JlZCkge1xuXHRcdFx0XHRcdFx0XHRcdG9wdGlvbnMub25FcnJvcmVkKHtcblx0XHRcdFx0XHRcdFx0XHRcdHR5cGU6IFwic2VsZi1hY2NlcHQtZXJyb3ItaGFuZGxlci1lcnJvcmVkXCIsXG5cdFx0XHRcdFx0XHRcdFx0XHRtb2R1bGVJZDogbW9kdWxlSWQsXG5cdFx0XHRcdFx0XHRcdFx0XHRlcnJvcjogZXJyMixcblx0XHRcdFx0XHRcdFx0XHRcdG9yaWdpbmFsRXJyb3I6IGVyclxuXHRcdFx0XHRcdFx0XHRcdH0pO1xuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdGlmICghb3B0aW9ucy5pZ25vcmVFcnJvcmVkKSB7XG5cdFx0XHRcdFx0XHRcdFx0cmVwb3J0RXJyb3IoZXJyMik7XG5cdFx0XHRcdFx0XHRcdFx0cmVwb3J0RXJyb3IoZXJyKTtcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRpZiAob3B0aW9ucy5vbkVycm9yZWQpIHtcblx0XHRcdFx0XHRcdFx0b3B0aW9ucy5vbkVycm9yZWQoe1xuXHRcdFx0XHRcdFx0XHRcdHR5cGU6IFwic2VsZi1hY2NlcHQtZXJyb3JlZFwiLFxuXHRcdFx0XHRcdFx0XHRcdG1vZHVsZUlkOiBtb2R1bGVJZCxcblx0XHRcdFx0XHRcdFx0XHRlcnJvcjogZXJyXG5cdFx0XHRcdFx0XHRcdH0pO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0aWYgKCFvcHRpb25zLmlnbm9yZUVycm9yZWQpIHtcblx0XHRcdFx0XHRcdFx0cmVwb3J0RXJyb3IoZXJyKTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH1cblxuXHRcdFx0cmV0dXJuIG91dGRhdGVkTW9kdWxlcztcblx0XHR9XG5cdH07XG59XG5fX3dlYnBhY2tfcmVxdWlyZV9fLmhtckkuanNvbnAgPSBmdW5jdGlvbiAobW9kdWxlSWQsIGFwcGx5SGFuZGxlcnMpIHtcblx0aWYgKCFjdXJyZW50VXBkYXRlKSB7XG5cdFx0Y3VycmVudFVwZGF0ZSA9IHt9O1xuXHRcdGN1cnJlbnRVcGRhdGVSdW50aW1lID0gW107XG5cdFx0Y3VycmVudFVwZGF0ZVJlbW92ZWRDaHVua3MgPSBbXTtcblx0XHRhcHBseUhhbmRsZXJzLnB1c2goYXBwbHlIYW5kbGVyKTtcblx0fVxuXHRpZiAoIV9fd2VicGFja19yZXF1aXJlX18ubyhjdXJyZW50VXBkYXRlLCBtb2R1bGVJZCkpIHtcblx0XHRjdXJyZW50VXBkYXRlW21vZHVsZUlkXSA9IF9fd2VicGFja19yZXF1aXJlX18ubVttb2R1bGVJZF07XG5cdH1cbn07XG5fX3dlYnBhY2tfcmVxdWlyZV9fLmhtckMuanNvbnAgPSBmdW5jdGlvbiAoXG5cdGNodW5rSWRzLFxuXHRyZW1vdmVkQ2h1bmtzLFxuXHRyZW1vdmVkTW9kdWxlcyxcblx0cHJvbWlzZXMsXG5cdGFwcGx5SGFuZGxlcnMsXG5cdHVwZGF0ZWRNb2R1bGVzTGlzdFxuKSB7XG5cdGFwcGx5SGFuZGxlcnMucHVzaChhcHBseUhhbmRsZXIpO1xuXHRjdXJyZW50VXBkYXRlQ2h1bmtzID0ge307XG5cdGN1cnJlbnRVcGRhdGVSZW1vdmVkQ2h1bmtzID0gcmVtb3ZlZENodW5rcztcblx0Y3VycmVudFVwZGF0ZSA9IHJlbW92ZWRNb2R1bGVzLnJlZHVjZShmdW5jdGlvbiAob2JqLCBrZXkpIHtcblx0XHRvYmpba2V5XSA9IGZhbHNlO1xuXHRcdHJldHVybiBvYmo7XG5cdH0sIHt9KTtcblx0Y3VycmVudFVwZGF0ZVJ1bnRpbWUgPSBbXTtcblx0Y2h1bmtJZHMuZm9yRWFjaChmdW5jdGlvbiAoY2h1bmtJZCkge1xuXHRcdGlmIChcblx0XHRcdF9fd2VicGFja19yZXF1aXJlX18ubyhpbnN0YWxsZWRDaHVua3MsIGNodW5rSWQpICYmXG5cdFx0XHRpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gIT09IHVuZGVmaW5lZFxuXHRcdCkge1xuXHRcdFx0cHJvbWlzZXMucHVzaChsb2FkVXBkYXRlQ2h1bmsoY2h1bmtJZCwgdXBkYXRlZE1vZHVsZXNMaXN0KSk7XG5cdFx0XHRjdXJyZW50VXBkYXRlQ2h1bmtzW2NodW5rSWRdID0gdHJ1ZTtcblx0XHR9XG5cdH0pO1xuXHRpZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5mKSB7XG5cdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5mLmpzb25wSG1yID0gZnVuY3Rpb24gKGNodW5rSWQsIHByb21pc2VzKSB7XG5cdFx0XHRpZiAoXG5cdFx0XHRcdGN1cnJlbnRVcGRhdGVDaHVua3MgJiZcblx0XHRcdFx0IV9fd2VicGFja19yZXF1aXJlX18ubyhjdXJyZW50VXBkYXRlQ2h1bmtzLCBjaHVua0lkKSAmJlxuXHRcdFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8oaW5zdGFsbGVkQ2h1bmtzLCBjaHVua0lkKSAmJlxuXHRcdFx0XHRpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gIT09IHVuZGVmaW5lZFxuXHRcdFx0KSB7XG5cdFx0XHRcdHByb21pc2VzLnB1c2gobG9hZFVwZGF0ZUNodW5rKGNodW5rSWQpKTtcblx0XHRcdFx0Y3VycmVudFVwZGF0ZUNodW5rc1tjaHVua0lkXSA9IHRydWU7XG5cdFx0XHR9XG5cdFx0fTtcblx0fVxufTtcblxuX193ZWJwYWNrX3JlcXVpcmVfXy5obXJNID0gKCkgPT4ge1xuXHRpZiAodHlwZW9mIGZldGNoID09PSBcInVuZGVmaW5lZFwiKSB0aHJvdyBuZXcgRXJyb3IoXCJObyBicm93c2VyIHN1cHBvcnQ6IG5lZWQgZmV0Y2ggQVBJXCIpO1xuXHRyZXR1cm4gZmV0Y2goX193ZWJwYWNrX3JlcXVpcmVfXy5wICsgX193ZWJwYWNrX3JlcXVpcmVfXy5obXJGKCkpLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG5cdFx0aWYocmVzcG9uc2Uuc3RhdHVzID09PSA0MDQpIHJldHVybjsgLy8gbm8gdXBkYXRlIGF2YWlsYWJsZVxuXHRcdGlmKCFyZXNwb25zZS5vaykgdGhyb3cgbmV3IEVycm9yKFwiRmFpbGVkIHRvIGZldGNoIHVwZGF0ZSBtYW5pZmVzdCBcIiArIHJlc3BvbnNlLnN0YXR1c1RleHQpO1xuXHRcdHJldHVybiByZXNwb25zZS5qc29uKCk7XG5cdH0pO1xufTtcblxuX193ZWJwYWNrX3JlcXVpcmVfXy5PLmogPSAoY2h1bmtJZCkgPT4gKGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA9PT0gMCk7XG5cbi8vIGluc3RhbGwgYSBKU09OUCBjYWxsYmFjayBmb3IgY2h1bmsgbG9hZGluZ1xudmFyIHdlYnBhY2tKc29ucENhbGxiYWNrID0gKHBhcmVudENodW5rTG9hZGluZ0Z1bmN0aW9uLCBkYXRhKSA9PiB7XG5cdHZhciBbY2h1bmtJZHMsIG1vcmVNb2R1bGVzLCBydW50aW1lXSA9IGRhdGE7XG5cdC8vIGFkZCBcIm1vcmVNb2R1bGVzXCIgdG8gdGhlIG1vZHVsZXMgb2JqZWN0LFxuXHQvLyB0aGVuIGZsYWcgYWxsIFwiY2h1bmtJZHNcIiBhcyBsb2FkZWQgYW5kIGZpcmUgY2FsbGJhY2tcblx0dmFyIG1vZHVsZUlkLCBjaHVua0lkLCBpID0gMDtcblx0aWYoY2h1bmtJZHMuc29tZSgoaWQpID0+IChpbnN0YWxsZWRDaHVua3NbaWRdICE9PSAwKSkpIHtcblx0XHRmb3IobW9kdWxlSWQgaW4gbW9yZU1vZHVsZXMpIHtcblx0XHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhtb3JlTW9kdWxlcywgbW9kdWxlSWQpKSB7XG5cdFx0XHRcdF9fd2VicGFja19yZXF1aXJlX18ubVttb2R1bGVJZF0gPSBtb3JlTW9kdWxlc1ttb2R1bGVJZF07XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGlmKHJ1bnRpbWUpIHZhciByZXN1bHQgPSBydW50aW1lKF9fd2VicGFja19yZXF1aXJlX18pO1xuXHR9XG5cdGlmKHBhcmVudENodW5rTG9hZGluZ0Z1bmN0aW9uKSBwYXJlbnRDaHVua0xvYWRpbmdGdW5jdGlvbihkYXRhKTtcblx0Zm9yKDtpIDwgY2h1bmtJZHMubGVuZ3RoOyBpKyspIHtcblx0XHRjaHVua0lkID0gY2h1bmtJZHNbaV07XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGluc3RhbGxlZENodW5rcywgY2h1bmtJZCkgJiYgaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdKSB7XG5cdFx0XHRpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF1bMF0oKTtcblx0XHR9XG5cdFx0aW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRzW2ldXSA9IDA7XG5cdH1cblx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18uTyhyZXN1bHQpO1xufVxuXG52YXIgY2h1bmtMb2FkaW5nR2xvYmFsID0gc2VsZltcIndlYnBhY2tDaHVua3dlYnBhY2tcIl0gPSBzZWxmW1wid2VicGFja0NodW5rd2VicGFja1wiXSB8fCBbXTtcbmNodW5rTG9hZGluZ0dsb2JhbC5mb3JFYWNoKHdlYnBhY2tKc29ucENhbGxiYWNrLmJpbmQobnVsbCwgMCkpO1xuY2h1bmtMb2FkaW5nR2xvYmFsLnB1c2ggPSB3ZWJwYWNrSnNvbnBDYWxsYmFjay5iaW5kKG51bGwsIGNodW5rTG9hZGluZ0dsb2JhbC5wdXNoLmJpbmQoY2h1bmtMb2FkaW5nR2xvYmFsKSk7IiwiIiwiLy8gbW9kdWxlIGNhY2hlIGFyZSB1c2VkIHNvIGVudHJ5IGlubGluaW5nIGlzIGRpc2FibGVkXG4vLyBzdGFydHVwXG4vLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbnZhciBfX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXy5PKHVuZGVmaW5lZCwgW1widmVuZG9ycy1ub2RlX21vZHVsZXNfYmFiZWxfcnVudGltZV9yZWdlbmVyYXRvcl9pbmRleF9qcy1ub2RlX21vZHVsZXNfcmVkdXgtZGV2dG9vbHNfZXh0ZW5zaW9uLTM4ZWNkYlwiXSwgKCkgPT4gKF9fd2VicGFja19yZXF1aXJlX18oXCIuL3NyYy9pbmRleC5qc1wiKSkpXG5fX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXy5PKF9fd2VicGFja19leHBvcnRzX18pO1xuIiwiIl0sIm5hbWVzIjpbIlJlYWN0IiwiU3VzcGVuc2UiLCJ1c2VFZmZlY3QiLCJSb3V0ZSIsIlJvdXRlcyIsInVzZU5hdmlnYXRlIiwidXNlRGlzcGF0Y2giLCJhdXRoIiwiTm90Rm91bmQiLCJNYWluUGFnZSIsIkxheW91dCIsIlNwaW5uZXIiLCJQcml2YXRlQXV0aCIsIlByb2ZpbGVDb250ZW50IiwibGF6eSIsIlBob3RvUGFnZSIsIkFwcCIsIm5hdmlnYXRlIiwiZGlzcGF0Y2giLCJhY2Nlc3NUb2tlbiIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJ1cmxTZWFyY2hQYXJhbXMiLCJVUkxTZWFyY2hQYXJhbXMiLCJ3aW5kb3ciLCJsb2NhdGlvbiIsInNlYXJjaCIsInBhcmFtcyIsIk9iamVjdCIsImZyb21FbnRyaWVzIiwiZW50cmllcyIsImNvZGUiLCJ0b1N0cmluZyIsImhpc3RvcnkiLCJwdXNoU3RhdGUiLCJkb2N1bWVudCIsInRpdGxlIiwicGF0aG5hbWUiLCJzdHlsZXMiLCJsb2dvIiwiRm9vdGVyIiwieWVhciIsIkRhdGUiLCJnZXRGdWxsWWVhciIsImZvb3RlciIsImNvbnRhaW5lciIsImZvb3RlclRvcCIsImNvbnRhY3RzIiwiY29udGFjdHNMaXN0IiwibGlzdEl0ZW1UZWwiLCJsaXN0SXRlbU1haWwiLCJzb2NpYWwiLCJpblNvY2lhbFRleHQiLCJzb2NpYWxMaXN0Iiwic29jaWFsTG9zdEl0ZW0iLCJsaW5rIiwidmsiLCJqb2luIiwiZ29vZ2xlIiwib2siLCJmb290ZXJCb3R0b20iLCJmb290ZXJDb3B5IiwiTG9jYXRpb24iLCJTaWduSW4iLCJQcm9maWxlIiwidXNlU2VsZWN0b3IiLCJMaW5rIiwiSGVhZGVyIiwiaXNBdXRoIiwic3RhdGUiLCJoZWFkZXIiLCJsaXN0IiwibWFpbiIsImxvY2F0aW9uSWNvbiIsImNpdHlUZXh0IiwidW5zcGxhc2hBdXRoTGluayIsIlNpZ25pbiIsImxvZ2luIiwibG9naW5JY29uIiwibG9naW5TaWduaW4iLCJPdXRsZXQiLCJ1c2VSZWYiLCJ1c2VTdGF0ZSIsImxvZ291dCIsInVzZXIiLCJjdXJyZW50VXNlciIsImlzUHJvZmlsZUJ0bnNTaG93Iiwic2V0UHJvZmlsZUJ0bnNTaG93IiwidXNlclByb2ZpbGVSZWYiLCJoYW5kbGVDbGlja091dHNpZGUiLCJldmVudCIsImN1cnJlbnQiLCJjb250YWlucyIsInRhcmdldCIsImFkZEV2ZW50TGlzdGVuZXIiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwic2hvd0V4aXRCdG4iLCJnb1RvUHJvZmlsZSIsImUiLCJzdG9wUHJvcGFnYXRpb24iLCJnb091dCIsInVzZXJQcm9maWxlIiwidXNlckJhc2VJbmZvIiwiZmlyc3RfbmFtZSIsInByb2ZpbGVJbWFnZSIsInByb2ZpbGVfaW1hZ2UiLCJzbWFsbCIsInByb2ZpbGVCdG5zIiwicHJvZmlsZUJ0biIsImxvZ291dEJ0biIsImxvYWRlciIsImxvYWRlcjIiLCJsb2FkZXJTdGFyIiwibG9hZGVyQ2lyY2xlcyIsInByZWxvYWRBc0Jsb2IiLCJ1cmwiLCJQcm9taXNlIiwicmVzb2x2ZSIsImZldGNoIiwicmVzcG9uc2UiLCJibG9iIiwicmVhZGVyIiwiRmlsZVJlYWRlciIsInJlYWRBc0RhdGFVUkwiLCJwcm9taXNlIiwib25sb2FkIiwicmVzdWx0IiwiTmF2aWdhdGUiLCJjaGlsZHJlbiIsInJlbmRlciIsIkhhc2hSb3V0ZXIiLCJQcm92aWRlciIsInN0b3JlIiwiZ2V0RWxlbWVudEJ5SWQiLCJkZXZNb2RlIiwicHJvY2VzcyIsImVudiIsIk5PREVfRU5WIiwibW9kdWxlIiwiaG90IiwiYWNjZXB0IiwiU3dpcGVyQ29yZSIsIkExMXkiLCJOYXZpZ2F0aW9uIiwiUGFnaW5hdGlvbiIsIlN3aXBlciIsIlN3aXBlclNsaWRlIiwiZ2V0TG9jYXRpb24iLCJnZXRQaG90b3MiLCJ1c2UiLCJwaG90b3MiLCJjb250ZW50Iiwic2xpY2UiLCJpc0xvYWRpbmciLCJwaG90b3NDb250YWluZXIiLCJoZWlnaHQiLCJtYWluQ29udGFpbmVyIiwiY2xpY2thYmxlIiwiZHluYW1pY0J1bGxldHMiLCJkeW5hbWljTWFpbkJ1bGxldHMiLCJtYXAiLCJlbCIsInVybHMiLCJmdWxsIiwibWFpblRpdGxlIiwiaWQiLCJhYm91dENvbnRhaW5lciIsImFib3V0IiwiYWJvdXRUaXRsZSIsImFib3V0VGl0bGVUZXh0IiwiZG9zbXRoIiwiZG9zbXRoVGl0bGUiLCJkb3NtdGhMaXN0IiwiZG9zbXRoSXRlbSIsInVuc3BsYXNoTGluayIsImxvb2tQaG90byIsImxvb2tQaG90b1RleHQiLCJsb29rUGhvdG9CdXR0b24iLCJzZXRVc2VyIiwiYXhpb3MiLCJwcm9kdWN0aW9uIiwib2F1dGhVcmwiLCJjbGllbnRfaWQiLCJjbGllbnRfc2VjcmV0IiwicmVkaXJlY3RfdXJpIiwiZ3JhbnRfdHlwZSIsInNjb3BlIiwicmVzcG9uc2VfdHlwZSIsImdldCIsImhlYWRlcnMiLCJBdXRob3JpemF0aW9uIiwidGhlbiIsInJlcyIsImRhdGEiLCJyZW1vdmVJdGVtIiwiY29uc29sZSIsImxvZyIsImNvZGVTZWFyY2hQYXJhbSIsImNiYWNrIiwicG9zdCIsInNldEl0ZW0iLCJhY2Nlc3NfdG9rZW4iLCJzZXRMb2NhdGlvbiIsImNpdHkiLCJzZXRDdXJyZW50UGhvdG8iLCJzZXRPckRlbGV0ZUxpa2UiLCJzZXRQaG90b3MiLCJzZXRJc0xvYWRpbmciLCJzZXRPckRlbGV0ZUxpa2VCeVVzZXIiLCJwaG90byIsImxpa2VkX2J5X3VzZXIiLCJnZXRDdXJyZW50UGhvdG8iLCJjdXJyZW50UGhvdG8iLCJjdXJyZW50UGFnZSIsImFzeW5jQXJyYXkiLCJpbWFnZSIsIkltYWdlIiwic3JjIiwiYWxsIiwiZm4iLCJpbmRleCIsIkxPR0lOIiwiTE9HT1VUIiwiSVNfTE9BRElORyIsImRlZmF1bHRTdGF0ZSIsImFjdGlvbiIsInR5cGUiLCJwYXlsb2FkIiwiYm9vbCIsImFwcGx5TWlkZGxld2FyZSIsImNvbWJpbmVSZWR1Y2VycyIsImNyZWF0ZVN0b3JlIiwiY29tcG9zZVdpdGhEZXZUb29scyIsInRodW5rIiwicm9vdFJlZHVjZXIiLCJHRVRfUEhPVE9TIiwiR0VUX0xPQ0FUSU9OIiwiU0VUX0NPTlRFTlQiLCJTRVRfT1JfREVMRVRFX0xJS0UiLCJTRVRfQ1VSUkVOVF9QSE9UTyIsInBob3RvVG90YWxDb3VudCIsInNldExpa2VDbGFzc05hbWUiLCJyZWR1Y2UiLCJwcmV2RWwiLCJuZXh0RWwiLCJmaW5kIiwiaXRlbSIsInB1c2giXSwic291cmNlUm9vdCI6IiJ9