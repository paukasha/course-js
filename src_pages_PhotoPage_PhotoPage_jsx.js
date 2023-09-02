"use strict";
(self["webpackChunkwebpack"] = self["webpackChunkwebpack"] || []).push([["src_pages_PhotoPage_PhotoPage_jsx"],{

/***/ "./src/components/Like/Like.jsx":
/*!**************************************!*\
  !*** ./src/components/Like/Like.jsx ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _like_m_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./like.m.css */ "./src/components/Like/like.m.css");
/* harmony import */ var _images_svg_heart_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @images/svg/heart.svg */ "./src/assets/images/svg/heart.svg");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _redux_actions_photos__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/redux/actions/photos */ "./src/redux/actions/photos.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");









var Like = function Like(_ref) {
  var currentPhoto = _ref.currentPhoto;

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(''),
      _useState2 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState, 2),
      likeByUser = _useState2[0],
      setLikeByUser = _useState2[1];

  var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_4__.useDispatch)();
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {
    currentPhoto.liked_by_user ? setLikeByUser('likeByUser') : setLikeByUser('');
  }, [currentPhoto.liked_by_user]);

  var setLike = function setLike() {
    dispatch((0,_redux_actions_photos__WEBPACK_IMPORTED_MODULE_5__.setOrDeleteLikeByUser)(currentPhoto));
  };

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
    className: 'photoLike ' + likeByUser,
    onClick: function onClick() {
      return setLike();
    },
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("img", {
      src: _images_svg_heart_svg__WEBPACK_IMPORTED_MODULE_3__,
      alt: "like"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("span", {
      children: currentPhoto.likes
    })]
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Like);

/***/ }),

/***/ "./src/pages/PhotoPage/PhotoPage.jsx":
/*!*******************************************!*\
  !*** ./src/pages/PhotoPage/PhotoPage.jsx ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _photoPage_m_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./photoPage.m.css */ "./src/pages/PhotoPage/photoPage.m.css");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _components_Like_Like__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @components/Like/Like */ "./src/components/Like/Like.jsx");
/* harmony import */ var _components_Spinner_Spinner__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @components/Spinner/Spinner */ "./src/components/Spinner/Spinner.jsx");
/* harmony import */ var _redux_actions_photos__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/redux/actions/photos */ "./src/redux/actions/photos.js");
/* harmony import */ var _redux_reducers_photos__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/redux/reducers/photos */ "./src/redux/reducers/photos.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");











var PhotoPage = function PhotoPage() {
  var _currentPhoto$promote, _currentPhoto$user, _currentPhoto$user2;

  var _useParams = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_8__.useParams)(),
      photoId = _useParams.photoId,
      dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useDispatch)(),
      navigate = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_8__.useNavigate)();

  var currentPhoto = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector)(function (state) {
    return state.photos.currentPhoto;
  });

  var goBack = function goBack() {
    navigate(-1);
    dispatch((0,_redux_reducers_photos__WEBPACK_IMPORTED_MODULE_6__.setCurrentPhoto)(''));
  };

  var promotedAt = currentPhoto === null || currentPhoto === void 0 ? void 0 : (_currentPhoto$promote = currentPhoto.promoted_at) === null || _currentPhoto$promote === void 0 ? void 0 : _currentPhoto$promote.split('T')[0].split('-').reverse().join('.');
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    dispatch((0,_redux_actions_photos__WEBPACK_IMPORTED_MODULE_5__.getCurrentPhoto)(photoId));
  }, []);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
    className: "container",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("button", {
      onClick: goBack,
      className: 'btn-reset ' + _photoPage_m_css__WEBPACK_IMPORTED_MODULE_1__["default"].backBtn,
      children: "\u0412\u0435\u0440\u043D\u0443\u0442\u044C\u0441\u044F \u043D\u0430\u0437\u0430\u0434"
    }), currentPhoto ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
      className: _photoPage_m_css__WEBPACK_IMPORTED_MODULE_1__["default"].fullPhotoWrapper,
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("img", {
        src: currentPhoto.urls.full,
        alt: ""
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
        className: _photoPage_m_css__WEBPACK_IMPORTED_MODULE_1__["default"].fullPhotoInfo,
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
          className: _photoPage_m_css__WEBPACK_IMPORTED_MODULE_1__["default"].fullPhotoDescr,
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("span", {
            className: _photoPage_m_css__WEBPACK_IMPORTED_MODULE_1__["default"].fullPhotoDescr,
            children: "\u0410\u0432\u0442\u043E\u0440"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("br", {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("a", {
            target: "_blanks",
            href: (_currentPhoto$user = currentPhoto.user) === null || _currentPhoto$user === void 0 ? void 0 : _currentPhoto$user.links.html,
            children: currentPhoto === null || currentPhoto === void 0 ? void 0 : (_currentPhoto$user2 = currentPhoto.user) === null || _currentPhoto$user2 === void 0 ? void 0 : _currentPhoto$user2.name
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
          className: _photoPage_m_css__WEBPACK_IMPORTED_MODULE_1__["default"].fullPhotoDescr,
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("span", {
            children: "\u0414\u0430\u0442\u0430 \u043F\u0443\u0431\u043B\u0438\u043A\u0430\u0446\u0438\u0438"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("br", {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("span", {
            className: _photoPage_m_css__WEBPACK_IMPORTED_MODULE_1__["default"].dateOfCreated,
            children: promotedAt
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("div", {
          className: "".concat(_photoPage_m_css__WEBPACK_IMPORTED_MODULE_1__["default"].fullPhotoDescr, " ").concat(_photoPage_m_css__WEBPACK_IMPORTED_MODULE_1__["default"].fullPhotoLikeBlock),
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_components_Like_Like__WEBPACK_IMPORTED_MODULE_3__["default"], {
            currentPhoto: currentPhoto
          })
        })]
      })]
    }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_components_Spinner_Spinner__WEBPACK_IMPORTED_MODULE_4__["default"], {})]
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PhotoPage);

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./src/components/Like/like.m.css":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./src/components/Like/like.m.css ***!
  \**********************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, ".photoLike {\n  display: flex;\n  height: 26px;\n  justify-content: center;\n  align-items: center;\n  background-color: var(--color-white);\n  border-radius: 2px;\n  cursor: pointer;\n  transition: opacity .3s linear;\n  z-index: 10;\n  opacity: 0;\n}\n\n.photoLike img {\n  width: 20px;\n  height: 20px;\n}\n\n.photoLike:hover {\n  z-index: 20;\n  opacity: 1 !important;\n  transition: opacity .3s linear;\n}\n\n.likeByUser {\n  opacity: 1;\n  background-color: var(--color-liked-by-user);\n}\n", "",{"version":3,"sources":["webpack://./src/components/Like/like.m.css"],"names":[],"mappings":"AAAA;EACE,aAAa;EACb,YAAY;EACZ,uBAAuB;EACvB,mBAAmB;EACnB,oCAAoC;EACpC,kBAAkB;EAClB,eAAe;EACf,8BAA8B;EAC9B,WAAW;EACX,UAAU;AACZ;;AAEA;EACE,WAAW;EACX,YAAY;AACd;;AAEA;EACE,WAAW;EACX,qBAAqB;EACrB,8BAA8B;AAChC;;AAEA;EACE,UAAU;EACV,4CAA4C;AAC9C","sourcesContent":[":global(.photoLike) {\n  display: flex;\n  height: 26px;\n  justify-content: center;\n  align-items: center;\n  background-color: var(--color-white);\n  border-radius: 2px;\n  cursor: pointer;\n  transition: opacity .3s linear;\n  z-index: 10;\n  opacity: 0;\n}\n\n:global(.photoLike) img {\n  width: 20px;\n  height: 20px;\n}\n\n:global(.photoLike):hover {\n  z-index: 20;\n  opacity: 1 !important;\n  transition: opacity .3s linear;\n}\n\n:global(.likeByUser) {\n  opacity: 1;\n  background-color: var(--color-liked-by-user);\n}\n"],"sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./src/pages/PhotoPage/photoPage.m.css":
/*!***************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./src/pages/PhotoPage/photoPage.m.css ***!
  \***************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, ".photoPage-m__fullPhotoWrapper--pcdWH {\n  position: relative;\n  border-radius: 4px;\n  overflow: hidden;\n  z-index: 5;\n  margin-bottom: 20px;\n}\n\n.photoPage-m__fullPhotoInfo--euY1e {\n  position: absolute;\n  left: 0;\n  top: 0;\n  right: 0;\n  display: flex;\n  padding: 10px 20px;\n  height: 80px;\n  background-color: rgb(82 73 73 / 60%);\n  opacity: 0;\n  z-index: 15;\n  transition: opacity .4s ease-in-out;\n  color: var(--color-white);\n  font-size: 20px;\n  line-height: 30px;\n}\n\n.photoPage-m__fullPhotoDescr--aljOM span {\n  display: inline-block;\n  font-size: 14px;\n}\n\n.photoPage-m__fullPhotoDescr--aljOM {\n  line-height: 24px;\n}\n\n.photoPage-m__fullPhotoDescr--aljOM:not(:last-child) {\n  margin-right: 60px;\n}\n\n.photoPage-m__fullPhotoDescr--aljOM:last-child {\n  margin-left: auto;\n  display: flex;\n  align-items: center;\n}\n\n.photoPage-m__fullPhotoDescr--aljOM:last-child > span {\n  display: inline-block;\n  margin-right: 10px;\n  font-size: 16px;\n  opacity: 0.6;\n  transition: opacity .3s linear;\n}\n\n/*.fullPhotoInfo > span:last-child {*/\n/*  margin-left: auto;*/\n/*}*/\n.photoLike {\n  width: initial !important;\n  padding: 0 5px;\n  z-index: 20;\n}\n\n.photoLike {\n  position: relative;\n  width: 40px;\n  height: 26px;\n  opacity: 0.6;\n  z-index: 20;\n  color: var(--color-black);\n  font-size: 16px;\n}\n\n.photoPage-m__fullPhotoLikeBlock--w9xoW:hover span {\n  transition: opacity .3s linear;\n  opacity: 1;\n}\n\n.photoPage-m__fullPhotoWrapper--pcdWH:hover .photoLike {\n  transition: opacity .3s linear;\n  opacity: 1;\n}\n\n.photoPage-m__fullPhotoWrapper--pcdWH:hover > .photoPage-m__fullPhotoInfo--euY1e {\n  opacity: 1;\n  z-index: 15;\n  transition: opacity .4s ease-in-out;\n}\n\n.photoPage-m__backBtn--WMIV7 {\n  margin-bottom: 20px;\n  font-size: 16px;\n  border-radius: 5px;\n  background-color: var(--color-white);\n  color: var(--color-eminence);\n  padding: 6px 10px;\n  transition: color .3s ease-in-out, background-color .3s ease-in-out;\n}\n\n.photoPage-m__backBtn--WMIV7:hover {\n  background-color: var(--color-eminence);\n  color: var(--color-white);\n  transition: color .3s ease-in-out, background-color .3s ease-in-out;\n}\n\n\n@media (max-width: 768px) {\n  .photoPage-m__fullPhotoInfo--euY1e,\n  .photoPage-m__fullPhotoLikeBlock--w9xoW .photoLike {\n    opacity: 1;\n  }\n\n  .photoPage-m__fullPhotoInfo--euY1e {\n    align-items: flex-start;\n    height: 60px;\n  }\n\n  .photoPage-m__fullPhotoDescr--aljOM {\n    line-height: 16px;\n    white-space: nowrap;\n  }\n\n  .photoPage-m__fullPhotoDescr--aljOM span {\n    font-size: 12px;\n  }\n\n  .photoPage-m__fullPhotoDescr--aljOM:not(:last-child) {\n    margin-right: 20px;\n  }\n\n  .photoPage-m__fullPhotoDescr--aljOM a,\n  .photoPage-m__dateOfCreated--WEnci {\n    font-size: 12px;\n  }\n\n\n}\n\n@media (max-width: 576px) {\n  .photoPage-m__backBtn--WMIV7 {\n    font-size: 12px;\n    margin-bottom: 6px;\n  }\n}\n", "",{"version":3,"sources":["webpack://./src/pages/PhotoPage/photoPage.m.css"],"names":[],"mappings":"AAAA;EACE,kBAAkB;EAClB,kBAAkB;EAClB,gBAAgB;EAChB,UAAU;EACV,mBAAmB;AACrB;;AAEA;EACE,kBAAkB;EAClB,OAAO;EACP,MAAM;EACN,QAAQ;EACR,aAAa;EACb,kBAAkB;EAClB,YAAY;EACZ,qCAAqC;EACrC,UAAU;EACV,WAAW;EACX,mCAAmC;EACnC,yBAAyB;EACzB,eAAe;EACf,iBAAiB;AACnB;;AAEA;EACE,qBAAqB;EACrB,eAAe;AACjB;;AAEA;EACE,iBAAiB;AACnB;;AAEA;EACE,kBAAkB;AACpB;;AAEA;EACE,iBAAiB;EACjB,aAAa;EACb,mBAAmB;AACrB;;AAEA;EACE,qBAAqB;EACrB,kBAAkB;EAClB,eAAe;EACf,YAAY;EACZ,8BAA8B;AAChC;;AAEA,qCAAqC;AACrC,uBAAuB;AACvB,IAAI;AACJ;EACE,yBAAyB;EACzB,cAAc;EACd,WAAW;AACb;;AAEA;EACE,kBAAkB;EAClB,WAAW;EACX,YAAY;EACZ,YAAY;EACZ,WAAW;EACX,yBAAyB;EACzB,eAAe;AACjB;;AAEA;EACE,8BAA8B;EAC9B,UAAU;AACZ;;AAEA;EACE,8BAA8B;EAC9B,UAAU;AACZ;;AAEA;EACE,UAAU;EACV,WAAW;EACX,mCAAmC;AACrC;;AAEA;EACE,mBAAmB;EACnB,eAAe;EACf,kBAAkB;EAClB,oCAAoC;EACpC,4BAA4B;EAC5B,iBAAiB;EACjB,mEAAmE;AACrE;;AAEA;EACE,uCAAuC;EACvC,yBAAyB;EACzB,mEAAmE;AACrE;;;AAGA;EACE;;IAEE,UAAU;EACZ;;EAEA;IACE,uBAAuB;IACvB,YAAY;EACd;;EAEA;IACE,iBAAiB;IACjB,mBAAmB;EACrB;;EAEA;IACE,eAAe;EACjB;;EAEA;IACE,kBAAkB;EACpB;;EAEA;;IAEE,eAAe;EACjB;;;AAGF;;AAEA;EACE;IACE,eAAe;IACf,kBAAkB;EACpB;AACF","sourcesContent":[".fullPhotoWrapper {\n  position: relative;\n  border-radius: 4px;\n  overflow: hidden;\n  z-index: 5;\n  margin-bottom: 20px;\n}\n\n.fullPhotoInfo {\n  position: absolute;\n  left: 0;\n  top: 0;\n  right: 0;\n  display: flex;\n  padding: 10px 20px;\n  height: 80px;\n  background-color: rgb(82 73 73 / 60%);\n  opacity: 0;\n  z-index: 15;\n  transition: opacity .4s ease-in-out;\n  color: var(--color-white);\n  font-size: 20px;\n  line-height: 30px;\n}\n\n.fullPhotoDescr span {\n  display: inline-block;\n  font-size: 14px;\n}\n\n.fullPhotoDescr {\n  line-height: 24px;\n}\n\n.fullPhotoDescr:not(:last-child) {\n  margin-right: 60px;\n}\n\n.fullPhotoDescr:last-child {\n  margin-left: auto;\n  display: flex;\n  align-items: center;\n}\n\n.fullPhotoDescr:last-child > span {\n  display: inline-block;\n  margin-right: 10px;\n  font-size: 16px;\n  opacity: 0.6;\n  transition: opacity .3s linear;\n}\n\n/*.fullPhotoInfo > span:last-child {*/\n/*  margin-left: auto;*/\n/*}*/\n:global(.photoLike) {\n  width: initial !important;\n  padding: 0 5px;\n  z-index: 20;\n}\n\n:global(.photoLike) {\n  position: relative;\n  width: 40px;\n  height: 26px;\n  opacity: 0.6;\n  z-index: 20;\n  color: var(--color-black);\n  font-size: 16px;\n}\n\n.fullPhotoLikeBlock:hover span {\n  transition: opacity .3s linear;\n  opacity: 1;\n}\n\n.fullPhotoWrapper:hover :global(.photoLike) {\n  transition: opacity .3s linear;\n  opacity: 1;\n}\n\n.fullPhotoWrapper:hover > .fullPhotoInfo {\n  opacity: 1;\n  z-index: 15;\n  transition: opacity .4s ease-in-out;\n}\n\n.backBtn {\n  margin-bottom: 20px;\n  font-size: 16px;\n  border-radius: 5px;\n  background-color: var(--color-white);\n  color: var(--color-eminence);\n  padding: 6px 10px;\n  transition: color .3s ease-in-out, background-color .3s ease-in-out;\n}\n\n.backBtn:hover {\n  background-color: var(--color-eminence);\n  color: var(--color-white);\n  transition: color .3s ease-in-out, background-color .3s ease-in-out;\n}\n\n\n@media (max-width: 768px) {\n  .fullPhotoInfo,\n  .fullPhotoLikeBlock :global(.photoLike) {\n    opacity: 1;\n  }\n\n  .fullPhotoInfo {\n    align-items: flex-start;\n    height: 60px;\n  }\n\n  .fullPhotoDescr {\n    line-height: 16px;\n    white-space: nowrap;\n  }\n\n  .fullPhotoDescr span {\n    font-size: 12px;\n  }\n\n  .fullPhotoDescr:not(:last-child) {\n    margin-right: 20px;\n  }\n\n  .fullPhotoDescr a,\n  .dateOfCreated {\n    font-size: 12px;\n  }\n\n\n}\n\n@media (max-width: 576px) {\n  .backBtn {\n    font-size: 12px;\n    margin-bottom: 6px;\n  }\n}\n"],"sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"fullPhotoWrapper": "photoPage-m__fullPhotoWrapper--pcdWH",
	"fullPhotoInfo": "photoPage-m__fullPhotoInfo--euY1e",
	"fullPhotoDescr": "photoPage-m__fullPhotoDescr--aljOM",
	"fullPhotoLikeBlock": "photoPage-m__fullPhotoLikeBlock--w9xoW",
	"backBtn": "photoPage-m__backBtn--WMIV7",
	"dateOfCreated": "photoPage-m__dateOfCreated--WEnci"
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./src/components/Like/like.m.css":
/*!****************************************!*\
  !*** ./src/components/Like/like.m.css ***!
  \****************************************/
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_like_m_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./like.m.css */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./src/components/Like/like.m.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_like_m_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);


if (true) {
  if (!_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_like_m_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals || module.hot.invalidate) {
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
    var isNamedExport = !_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_like_m_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals;
    var oldLocals = isNamedExport ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_like_m_css__WEBPACK_IMPORTED_MODULE_6__ : _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_like_m_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals;

    module.hot.accept(
      /*! !!../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./like.m.css */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./src/components/Like/like.m.css",
      __WEBPACK_OUTDATED_DEPENDENCIES__ => { /* harmony import */ _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_like_m_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./like.m.css */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./src/components/Like/like.m.css");
(function () {
        if (!isEqualLocals(oldLocals, isNamedExport ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_like_m_css__WEBPACK_IMPORTED_MODULE_6__ : _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_like_m_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals, isNamedExport)) {
                module.hot.invalidate();

                return;
              }

              oldLocals = isNamedExport ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_like_m_css__WEBPACK_IMPORTED_MODULE_6__ : _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_like_m_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals;

              update(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_like_m_css__WEBPACK_IMPORTED_MODULE_6__["default"]);
      })(__WEBPACK_OUTDATED_DEPENDENCIES__); }
    )
  }

  module.hot.dispose(function() {
    update();
  });
}



       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_like_m_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_like_m_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_like_m_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/pages/PhotoPage/photoPage.m.css":
/*!*********************************************!*\
  !*** ./src/pages/PhotoPage/photoPage.m.css ***!
  \*********************************************/
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_photoPage_m_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./photoPage.m.css */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./src/pages/PhotoPage/photoPage.m.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_photoPage_m_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);


if (true) {
  if (!_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_photoPage_m_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals || module.hot.invalidate) {
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
    var isNamedExport = !_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_photoPage_m_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals;
    var oldLocals = isNamedExport ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_photoPage_m_css__WEBPACK_IMPORTED_MODULE_6__ : _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_photoPage_m_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals;

    module.hot.accept(
      /*! !!../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./photoPage.m.css */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./src/pages/PhotoPage/photoPage.m.css",
      __WEBPACK_OUTDATED_DEPENDENCIES__ => { /* harmony import */ _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_photoPage_m_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./photoPage.m.css */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./src/pages/PhotoPage/photoPage.m.css");
(function () {
        if (!isEqualLocals(oldLocals, isNamedExport ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_photoPage_m_css__WEBPACK_IMPORTED_MODULE_6__ : _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_photoPage_m_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals, isNamedExport)) {
                module.hot.invalidate();

                return;
              }

              oldLocals = isNamedExport ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_photoPage_m_css__WEBPACK_IMPORTED_MODULE_6__ : _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_photoPage_m_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals;

              update(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_photoPage_m_css__WEBPACK_IMPORTED_MODULE_6__["default"]);
      })(__WEBPACK_OUTDATED_DEPENDENCIES__); }
    )
  }

  module.hot.dispose(function() {
    update();
  });
}



       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_photoPage_m_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_photoPage_m_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_photoPage_m_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/assets/images/svg/heart.svg":
/*!*****************************************!*\
  !*** ./src/assets/images/svg/heart.svg ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "e5a1815b0457ef15ccb4.svg";

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHlCQUF5QiwySEFBYztBQUN2QyxvQ0FBb0MseUdBQVcsR0FBRywySEFBYzs7QUFFaEUsSUFBSSxpQkFBaUI7QUFDckIsTUFBTSw2TUFBOEY7QUFDcEcsTUFBTTtBQUFBO0FBQ04sc0RBQXNELHlHQUFXLEdBQUcsMkhBQWM7QUFDbEYsZ0JBQWdCLFVBQVU7O0FBRTFCO0FBQ0E7O0FBRUEsMENBQTBDLHlHQUFXLEdBQUcsMkhBQWM7O0FBRXRFLHFCQUFxQixvSEFBTztBQUM1QixPQUFPO0FBQ1A7QUFDQTs7QUFFQSxFQUFFLFVBQVU7QUFDWjtBQUNBLEdBQUc7QUFDSDs7O0FBRzZHO0FBQzdHLE9BQU8saUVBQWUsb0hBQU8sSUFBSSwySEFBYyxHQUFHLDJIQUFjLFlBQVksRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYnBhY2svLi9zcmMvY29tcG9uZW50cy9MaWtlL0xpa2UuanN4Iiwid2VicGFjazovL3dlYnBhY2svLi9zcmMvcGFnZXMvUGhvdG9QYWdlL1Bob3RvUGFnZS5qc3giLCJ3ZWJwYWNrOi8vd2VicGFjay8uL3NyYy9jb21wb25lbnRzL0xpa2UvbGlrZS5tLmNzcyIsIndlYnBhY2s6Ly93ZWJwYWNrLy4vc3JjL3BhZ2VzL1Bob3RvUGFnZS9waG90b1BhZ2UubS5jc3MiLCJ3ZWJwYWNrOi8vd2VicGFjay8uL3NyYy9jb21wb25lbnRzL0xpa2UvbGlrZS5tLmNzcz82NjlhIiwid2VicGFjazovL3dlYnBhY2svLi9zcmMvcGFnZXMvUGhvdG9QYWdlL3Bob3RvUGFnZS5tLmNzcz80OGM5Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge3VzZUVmZmVjdCwgdXNlU3RhdGV9IGZyb20gJ3JlYWN0JztcbmltcG9ydCAnLi9saWtlLm0uY3NzJztcbmltcG9ydCBsaWtlIGZyb20gJ0BpbWFnZXMvc3ZnL2hlYXJ0LnN2Zyc7XG5pbXBvcnQge3VzZURpc3BhdGNofSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQge3NldE9yRGVsZXRlTGlrZUJ5VXNlcn0gZnJvbSAnQC9yZWR1eC9hY3Rpb25zL3Bob3Rvcyc7XG5cblxuY29uc3QgTGlrZSA9ICh7Y3VycmVudFBob3RvfSkgPT4ge1xuXG4gIGNvbnN0IFtsaWtlQnlVc2VyLCBzZXRMaWtlQnlVc2VyXSA9IHVzZVN0YXRlKCcnKTtcbiAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY3VycmVudFBob3RvLmxpa2VkX2J5X3VzZXIgPyBzZXRMaWtlQnlVc2VyKCdsaWtlQnlVc2VyJykgOiBzZXRMaWtlQnlVc2VyKCcnKVxuXG4gIH0sIFtjdXJyZW50UGhvdG8ubGlrZWRfYnlfdXNlcl0pXG5cbiAgY29uc3Qgc2V0TGlrZSA9ICgpID0+IHtcbiAgICBkaXNwYXRjaChzZXRPckRlbGV0ZUxpa2VCeVVzZXIoY3VycmVudFBob3RvKSlcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9eydwaG90b0xpa2UgJyArIGxpa2VCeVVzZXJ9IG9uQ2xpY2s9eygpID0+IHNldExpa2UoKX0+XG4gICAgICA8aW1nIHNyYz17bGlrZX0gYWx0PVwibGlrZVwiLz5cbiAgICAgIDxzcGFuPntjdXJyZW50UGhvdG8ubGlrZXN9PC9zcGFuPlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgTGlrZTtcbiIsImltcG9ydCBSZWFjdCwge3VzZUVmZmVjdH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHN0eWxlcyBmcm9tICcuL3Bob3RvUGFnZS5tLmNzcyc7XG5pbXBvcnQge3VzZU5hdmlnYXRlLCB1c2VQYXJhbXN9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xuaW1wb3J0IHt1c2VEaXNwYXRjaCwgdXNlU2VsZWN0b3J9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCBMaWtlIGZyb20gJ0Bjb21wb25lbnRzL0xpa2UvTGlrZSc7XG5pbXBvcnQgU3Bpbm5lciBmcm9tICdAY29tcG9uZW50cy9TcGlubmVyL1NwaW5uZXInO1xuaW1wb3J0IHtnZXRDdXJyZW50UGhvdG99IGZyb20gJ0AvcmVkdXgvYWN0aW9ucy9waG90b3MnO1xuaW1wb3J0IHtzZXRDdXJyZW50UGhvdG99IGZyb20gJ0AvcmVkdXgvcmVkdWNlcnMvcGhvdG9zJztcblxuY29uc3QgUGhvdG9QYWdlID0gKCkgPT4ge1xuICBjb25zdCB7cGhvdG9JZH0gPSB1c2VQYXJhbXMoKSxcbiAgICBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCksXG4gICAgbmF2aWdhdGUgPSB1c2VOYXZpZ2F0ZSgpO1xuXG4gIGNvbnN0IGN1cnJlbnRQaG90byA9IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUucGhvdG9zLmN1cnJlbnRQaG90byk7XG5cbiAgY29uc3QgZ29CYWNrID0gKCkgPT4ge1xuICAgIG5hdmlnYXRlKC0xKTtcbiAgICBkaXNwYXRjaChzZXRDdXJyZW50UGhvdG8oJycpKVxuICB9O1xuXG4gIGxldCBwcm9tb3RlZEF0ID0gY3VycmVudFBob3RvPy5wcm9tb3RlZF9hdFxuICAgID8uc3BsaXQoJ1QnKVswXVxuICAgIC5zcGxpdCgnLScpXG4gICAgLnJldmVyc2UoKVxuICAgIC5qb2luKCcuJyk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBkaXNwYXRjaChnZXRDdXJyZW50UGhvdG8ocGhvdG9JZCkpO1xuICB9LCBbXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxuICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtnb0JhY2t9IGNsYXNzTmFtZT17J2J0bi1yZXNldCAnICsgc3R5bGVzLmJhY2tCdG59PlxuICAgICAgICDQktC10YDQvdGD0YLRjNGB0Y8g0L3QsNC30LDQtFxuICAgICAgPC9idXR0b24+XG4gICAgICB7Y3VycmVudFBob3RvID8gKDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZnVsbFBob3RvV3JhcHBlcn0+XG4gICAgICAgICAgPGltZyBzcmM9e2N1cnJlbnRQaG90by51cmxzLmZ1bGx9IGFsdD1cIlwiLz5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmZ1bGxQaG90b0luZm99PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5mdWxsUGhvdG9EZXNjcn0+XG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17c3R5bGVzLmZ1bGxQaG90b0Rlc2NyfT7QkNCy0YLQvtGAPC9zcGFuPlxuICAgICAgICAgICAgICA8YnIvPlxuICAgICAgICAgICAgICA8YSB0YXJnZXQ9XCJfYmxhbmtzXCIgaHJlZj17Y3VycmVudFBob3RvLnVzZXI/LmxpbmtzLmh0bWx9PlxuICAgICAgICAgICAgICAgIHtjdXJyZW50UGhvdG8/LnVzZXI/Lm5hbWV9XG4gICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5mdWxsUGhvdG9EZXNjcn0+XG4gICAgICAgICAgICAgIDxzcGFuPtCU0LDRgtCwINC/0YPQsdC70LjQutCw0YbQuNC4PC9zcGFuPlxuICAgICAgICAgICAgICA8YnIvPlxuICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e3N0eWxlcy5kYXRlT2ZDcmVhdGVkfT57cHJvbW90ZWRBdH08L3NwYW4+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgJHtzdHlsZXMuZnVsbFBob3RvRGVzY3J9ICR7c3R5bGVzLmZ1bGxQaG90b0xpa2VCbG9ja31gfT5cbiAgICAgICAgICAgICAgPExpa2UgY3VycmVudFBob3RvPXtjdXJyZW50UGhvdG99Lz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICkgOiA8U3Bpbm5lci8+fVxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgUGhvdG9QYWdlO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIucGhvdG9MaWtlIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBoZWlnaHQ6IDI2cHg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci13aGl0ZSk7XFxuICBib3JkZXItcmFkaXVzOiAycHg7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICB0cmFuc2l0aW9uOiBvcGFjaXR5IC4zcyBsaW5lYXI7XFxuICB6LWluZGV4OiAxMDtcXG4gIG9wYWNpdHk6IDA7XFxufVxcblxcbi5waG90b0xpa2UgaW1nIHtcXG4gIHdpZHRoOiAyMHB4O1xcbiAgaGVpZ2h0OiAyMHB4O1xcbn1cXG5cXG4ucGhvdG9MaWtlOmhvdmVyIHtcXG4gIHotaW5kZXg6IDIwO1xcbiAgb3BhY2l0eTogMSAhaW1wb3J0YW50O1xcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAuM3MgbGluZWFyO1xcbn1cXG5cXG4ubGlrZUJ5VXNlciB7XFxuICBvcGFjaXR5OiAxO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItbGlrZWQtYnktdXNlcik7XFxufVxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9jb21wb25lbnRzL0xpa2UvbGlrZS5tLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLGFBQWE7RUFDYixZQUFZO0VBQ1osdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixvQ0FBb0M7RUFDcEMsa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZiw4QkFBOEI7RUFDOUIsV0FBVztFQUNYLFVBQVU7QUFDWjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxXQUFXO0VBQ1gscUJBQXFCO0VBQ3JCLDhCQUE4QjtBQUNoQzs7QUFFQTtFQUNFLFVBQVU7RUFDViw0Q0FBNEM7QUFDOUNcIixcInNvdXJjZXNDb250ZW50XCI6W1wiOmdsb2JhbCgucGhvdG9MaWtlKSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgaGVpZ2h0OiAyNnB4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3Itd2hpdGUpO1xcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAuM3MgbGluZWFyO1xcbiAgei1pbmRleDogMTA7XFxuICBvcGFjaXR5OiAwO1xcbn1cXG5cXG46Z2xvYmFsKC5waG90b0xpa2UpIGltZyB7XFxuICB3aWR0aDogMjBweDtcXG4gIGhlaWdodDogMjBweDtcXG59XFxuXFxuOmdsb2JhbCgucGhvdG9MaWtlKTpob3ZlciB7XFxuICB6LWluZGV4OiAyMDtcXG4gIG9wYWNpdHk6IDEgIWltcG9ydGFudDtcXG4gIHRyYW5zaXRpb246IG9wYWNpdHkgLjNzIGxpbmVhcjtcXG59XFxuXFxuOmdsb2JhbCgubGlrZUJ5VXNlcikge1xcbiAgb3BhY2l0eTogMTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLWxpa2VkLWJ5LXVzZXIpO1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLmxvY2FscyA9IHt9O1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi5waG90b1BhZ2UtbV9fZnVsbFBob3RvV3JhcHBlci0tcGNkV0gge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gIHotaW5kZXg6IDU7XFxuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xcbn1cXG5cXG4ucGhvdG9QYWdlLW1fX2Z1bGxQaG90b0luZm8tLWV1WTFlIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGxlZnQ6IDA7XFxuICB0b3A6IDA7XFxuICByaWdodDogMDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBwYWRkaW5nOiAxMHB4IDIwcHg7XFxuICBoZWlnaHQ6IDgwcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoODIgNzMgNzMgLyA2MCUpO1xcbiAgb3BhY2l0eTogMDtcXG4gIHotaW5kZXg6IDE1O1xcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAuNHMgZWFzZS1pbi1vdXQ7XFxuICBjb2xvcjogdmFyKC0tY29sb3Itd2hpdGUpO1xcbiAgZm9udC1zaXplOiAyMHB4O1xcbiAgbGluZS1oZWlnaHQ6IDMwcHg7XFxufVxcblxcbi5waG90b1BhZ2UtbV9fZnVsbFBob3RvRGVzY3ItLWFsak9NIHNwYW4ge1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgZm9udC1zaXplOiAxNHB4O1xcbn1cXG5cXG4ucGhvdG9QYWdlLW1fX2Z1bGxQaG90b0Rlc2NyLS1hbGpPTSB7XFxuICBsaW5lLWhlaWdodDogMjRweDtcXG59XFxuXFxuLnBob3RvUGFnZS1tX19mdWxsUGhvdG9EZXNjci0tYWxqT006bm90KDpsYXN0LWNoaWxkKSB7XFxuICBtYXJnaW4tcmlnaHQ6IDYwcHg7XFxufVxcblxcbi5waG90b1BhZ2UtbV9fZnVsbFBob3RvRGVzY3ItLWFsak9NOmxhc3QtY2hpbGQge1xcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLnBob3RvUGFnZS1tX19mdWxsUGhvdG9EZXNjci0tYWxqT006bGFzdC1jaGlsZCA+IHNwYW4ge1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xcbiAgZm9udC1zaXplOiAxNnB4O1xcbiAgb3BhY2l0eTogMC42O1xcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAuM3MgbGluZWFyO1xcbn1cXG5cXG4vKi5mdWxsUGhvdG9JbmZvID4gc3BhbjpsYXN0LWNoaWxkIHsqL1xcbi8qICBtYXJnaW4tbGVmdDogYXV0bzsqL1xcbi8qfSovXFxuLnBob3RvTGlrZSB7XFxuICB3aWR0aDogaW5pdGlhbCAhaW1wb3J0YW50O1xcbiAgcGFkZGluZzogMCA1cHg7XFxuICB6LWluZGV4OiAyMDtcXG59XFxuXFxuLnBob3RvTGlrZSB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICB3aWR0aDogNDBweDtcXG4gIGhlaWdodDogMjZweDtcXG4gIG9wYWNpdHk6IDAuNjtcXG4gIHotaW5kZXg6IDIwO1xcbiAgY29sb3I6IHZhcigtLWNvbG9yLWJsYWNrKTtcXG4gIGZvbnQtc2l6ZTogMTZweDtcXG59XFxuXFxuLnBob3RvUGFnZS1tX19mdWxsUGhvdG9MaWtlQmxvY2stLXc5eG9XOmhvdmVyIHNwYW4ge1xcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAuM3MgbGluZWFyO1xcbiAgb3BhY2l0eTogMTtcXG59XFxuXFxuLnBob3RvUGFnZS1tX19mdWxsUGhvdG9XcmFwcGVyLS1wY2RXSDpob3ZlciAucGhvdG9MaWtlIHtcXG4gIHRyYW5zaXRpb246IG9wYWNpdHkgLjNzIGxpbmVhcjtcXG4gIG9wYWNpdHk6IDE7XFxufVxcblxcbi5waG90b1BhZ2UtbV9fZnVsbFBob3RvV3JhcHBlci0tcGNkV0g6aG92ZXIgPiAucGhvdG9QYWdlLW1fX2Z1bGxQaG90b0luZm8tLWV1WTFlIHtcXG4gIG9wYWNpdHk6IDE7XFxuICB6LWluZGV4OiAxNTtcXG4gIHRyYW5zaXRpb246IG9wYWNpdHkgLjRzIGVhc2UtaW4tb3V0O1xcbn1cXG5cXG4ucGhvdG9QYWdlLW1fX2JhY2tCdG4tLVdNSVY3IHtcXG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XFxuICBmb250LXNpemU6IDE2cHg7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci13aGl0ZSk7XFxuICBjb2xvcjogdmFyKC0tY29sb3ItZW1pbmVuY2UpO1xcbiAgcGFkZGluZzogNnB4IDEwcHg7XFxuICB0cmFuc2l0aW9uOiBjb2xvciAuM3MgZWFzZS1pbi1vdXQsIGJhY2tncm91bmQtY29sb3IgLjNzIGVhc2UtaW4tb3V0O1xcbn1cXG5cXG4ucGhvdG9QYWdlLW1fX2JhY2tCdG4tLVdNSVY3OmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLWVtaW5lbmNlKTtcXG4gIGNvbG9yOiB2YXIoLS1jb2xvci13aGl0ZSk7XFxuICB0cmFuc2l0aW9uOiBjb2xvciAuM3MgZWFzZS1pbi1vdXQsIGJhY2tncm91bmQtY29sb3IgLjNzIGVhc2UtaW4tb3V0O1xcbn1cXG5cXG5cXG5AbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcXG4gIC5waG90b1BhZ2UtbV9fZnVsbFBob3RvSW5mby0tZXVZMWUsXFxuICAucGhvdG9QYWdlLW1fX2Z1bGxQaG90b0xpa2VCbG9jay0tdzl4b1cgLnBob3RvTGlrZSB7XFxuICAgIG9wYWNpdHk6IDE7XFxuICB9XFxuXFxuICAucGhvdG9QYWdlLW1fX2Z1bGxQaG90b0luZm8tLWV1WTFlIHtcXG4gICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XFxuICAgIGhlaWdodDogNjBweDtcXG4gIH1cXG5cXG4gIC5waG90b1BhZ2UtbV9fZnVsbFBob3RvRGVzY3ItLWFsak9NIHtcXG4gICAgbGluZS1oZWlnaHQ6IDE2cHg7XFxuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XFxuICB9XFxuXFxuICAucGhvdG9QYWdlLW1fX2Z1bGxQaG90b0Rlc2NyLS1hbGpPTSBzcGFuIHtcXG4gICAgZm9udC1zaXplOiAxMnB4O1xcbiAgfVxcblxcbiAgLnBob3RvUGFnZS1tX19mdWxsUGhvdG9EZXNjci0tYWxqT006bm90KDpsYXN0LWNoaWxkKSB7XFxuICAgIG1hcmdpbi1yaWdodDogMjBweDtcXG4gIH1cXG5cXG4gIC5waG90b1BhZ2UtbV9fZnVsbFBob3RvRGVzY3ItLWFsak9NIGEsXFxuICAucGhvdG9QYWdlLW1fX2RhdGVPZkNyZWF0ZWQtLVdFbmNpIHtcXG4gICAgZm9udC1zaXplOiAxMnB4O1xcbiAgfVxcblxcblxcbn1cXG5cXG5AbWVkaWEgKG1heC13aWR0aDogNTc2cHgpIHtcXG4gIC5waG90b1BhZ2UtbV9fYmFja0J0bi0tV01JVjcge1xcbiAgICBmb250LXNpemU6IDEycHg7XFxuICAgIG1hcmdpbi1ib3R0b206IDZweDtcXG4gIH1cXG59XFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3BhZ2VzL1Bob3RvUGFnZS9waG90b1BhZ2UubS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSxrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQixVQUFVO0VBQ1YsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLE9BQU87RUFDUCxNQUFNO0VBQ04sUUFBUTtFQUNSLGFBQWE7RUFDYixrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLHFDQUFxQztFQUNyQyxVQUFVO0VBQ1YsV0FBVztFQUNYLG1DQUFtQztFQUNuQyx5QkFBeUI7RUFDekIsZUFBZTtFQUNmLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLHFCQUFxQjtFQUNyQixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLGFBQWE7RUFDYixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxxQkFBcUI7RUFDckIsa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZixZQUFZO0VBQ1osOEJBQThCO0FBQ2hDOztBQUVBLHFDQUFxQztBQUNyQyx1QkFBdUI7QUFDdkIsSUFBSTtBQUNKO0VBQ0UseUJBQXlCO0VBQ3pCLGNBQWM7RUFDZCxXQUFXO0FBQ2I7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsV0FBVztFQUNYLFlBQVk7RUFDWixZQUFZO0VBQ1osV0FBVztFQUNYLHlCQUF5QjtFQUN6QixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsOEJBQThCO0VBQzlCLFVBQVU7QUFDWjs7QUFFQTtFQUNFLDhCQUE4QjtFQUM5QixVQUFVO0FBQ1o7O0FBRUE7RUFDRSxVQUFVO0VBQ1YsV0FBVztFQUNYLG1DQUFtQztBQUNyQzs7QUFFQTtFQUNFLG1CQUFtQjtFQUNuQixlQUFlO0VBQ2Ysa0JBQWtCO0VBQ2xCLG9DQUFvQztFQUNwQyw0QkFBNEI7RUFDNUIsaUJBQWlCO0VBQ2pCLG1FQUFtRTtBQUNyRTs7QUFFQTtFQUNFLHVDQUF1QztFQUN2Qyx5QkFBeUI7RUFDekIsbUVBQW1FO0FBQ3JFOzs7QUFHQTtFQUNFOztJQUVFLFVBQVU7RUFDWjs7RUFFQTtJQUNFLHVCQUF1QjtJQUN2QixZQUFZO0VBQ2Q7O0VBRUE7SUFDRSxpQkFBaUI7SUFDakIsbUJBQW1CO0VBQ3JCOztFQUVBO0lBQ0UsZUFBZTtFQUNqQjs7RUFFQTtJQUNFLGtCQUFrQjtFQUNwQjs7RUFFQTs7SUFFRSxlQUFlO0VBQ2pCOzs7QUFHRjs7QUFFQTtFQUNFO0lBQ0UsZUFBZTtJQUNmLGtCQUFrQjtFQUNwQjtBQUNGXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi5mdWxsUGhvdG9XcmFwcGVyIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxuICB6LWluZGV4OiA1O1xcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcXG59XFxuXFxuLmZ1bGxQaG90b0luZm8ge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgbGVmdDogMDtcXG4gIHRvcDogMDtcXG4gIHJpZ2h0OiAwO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIHBhZGRpbmc6IDEwcHggMjBweDtcXG4gIGhlaWdodDogODBweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYig4MiA3MyA3MyAvIDYwJSk7XFxuICBvcGFjaXR5OiAwO1xcbiAgei1pbmRleDogMTU7XFxuICB0cmFuc2l0aW9uOiBvcGFjaXR5IC40cyBlYXNlLWluLW91dDtcXG4gIGNvbG9yOiB2YXIoLS1jb2xvci13aGl0ZSk7XFxuICBmb250LXNpemU6IDIwcHg7XFxuICBsaW5lLWhlaWdodDogMzBweDtcXG59XFxuXFxuLmZ1bGxQaG90b0Rlc2NyIHNwYW4ge1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgZm9udC1zaXplOiAxNHB4O1xcbn1cXG5cXG4uZnVsbFBob3RvRGVzY3Ige1xcbiAgbGluZS1oZWlnaHQ6IDI0cHg7XFxufVxcblxcbi5mdWxsUGhvdG9EZXNjcjpub3QoOmxhc3QtY2hpbGQpIHtcXG4gIG1hcmdpbi1yaWdodDogNjBweDtcXG59XFxuXFxuLmZ1bGxQaG90b0Rlc2NyOmxhc3QtY2hpbGQge1xcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmZ1bGxQaG90b0Rlc2NyOmxhc3QtY2hpbGQgPiBzcGFuIHtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIG1hcmdpbi1yaWdodDogMTBweDtcXG4gIGZvbnQtc2l6ZTogMTZweDtcXG4gIG9wYWNpdHk6IDAuNjtcXG4gIHRyYW5zaXRpb246IG9wYWNpdHkgLjNzIGxpbmVhcjtcXG59XFxuXFxuLyouZnVsbFBob3RvSW5mbyA+IHNwYW46bGFzdC1jaGlsZCB7Ki9cXG4vKiAgbWFyZ2luLWxlZnQ6IGF1dG87Ki9cXG4vKn0qL1xcbjpnbG9iYWwoLnBob3RvTGlrZSkge1xcbiAgd2lkdGg6IGluaXRpYWwgIWltcG9ydGFudDtcXG4gIHBhZGRpbmc6IDAgNXB4O1xcbiAgei1pbmRleDogMjA7XFxufVxcblxcbjpnbG9iYWwoLnBob3RvTGlrZSkge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgd2lkdGg6IDQwcHg7XFxuICBoZWlnaHQ6IDI2cHg7XFxuICBvcGFjaXR5OiAwLjY7XFxuICB6LWluZGV4OiAyMDtcXG4gIGNvbG9yOiB2YXIoLS1jb2xvci1ibGFjayk7XFxuICBmb250LXNpemU6IDE2cHg7XFxufVxcblxcbi5mdWxsUGhvdG9MaWtlQmxvY2s6aG92ZXIgc3BhbiB7XFxuICB0cmFuc2l0aW9uOiBvcGFjaXR5IC4zcyBsaW5lYXI7XFxuICBvcGFjaXR5OiAxO1xcbn1cXG5cXG4uZnVsbFBob3RvV3JhcHBlcjpob3ZlciA6Z2xvYmFsKC5waG90b0xpa2UpIHtcXG4gIHRyYW5zaXRpb246IG9wYWNpdHkgLjNzIGxpbmVhcjtcXG4gIG9wYWNpdHk6IDE7XFxufVxcblxcbi5mdWxsUGhvdG9XcmFwcGVyOmhvdmVyID4gLmZ1bGxQaG90b0luZm8ge1xcbiAgb3BhY2l0eTogMTtcXG4gIHotaW5kZXg6IDE1O1xcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAuNHMgZWFzZS1pbi1vdXQ7XFxufVxcblxcbi5iYWNrQnRuIHtcXG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XFxuICBmb250LXNpemU6IDE2cHg7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci13aGl0ZSk7XFxuICBjb2xvcjogdmFyKC0tY29sb3ItZW1pbmVuY2UpO1xcbiAgcGFkZGluZzogNnB4IDEwcHg7XFxuICB0cmFuc2l0aW9uOiBjb2xvciAuM3MgZWFzZS1pbi1vdXQsIGJhY2tncm91bmQtY29sb3IgLjNzIGVhc2UtaW4tb3V0O1xcbn1cXG5cXG4uYmFja0J0bjpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1lbWluZW5jZSk7XFxuICBjb2xvcjogdmFyKC0tY29sb3Itd2hpdGUpO1xcbiAgdHJhbnNpdGlvbjogY29sb3IgLjNzIGVhc2UtaW4tb3V0LCBiYWNrZ3JvdW5kLWNvbG9yIC4zcyBlYXNlLWluLW91dDtcXG59XFxuXFxuXFxuQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XFxuICAuZnVsbFBob3RvSW5mbyxcXG4gIC5mdWxsUGhvdG9MaWtlQmxvY2sgOmdsb2JhbCgucGhvdG9MaWtlKSB7XFxuICAgIG9wYWNpdHk6IDE7XFxuICB9XFxuXFxuICAuZnVsbFBob3RvSW5mbyB7XFxuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xcbiAgICBoZWlnaHQ6IDYwcHg7XFxuICB9XFxuXFxuICAuZnVsbFBob3RvRGVzY3Ige1xcbiAgICBsaW5lLWhlaWdodDogMTZweDtcXG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcXG4gIH1cXG5cXG4gIC5mdWxsUGhvdG9EZXNjciBzcGFuIHtcXG4gICAgZm9udC1zaXplOiAxMnB4O1xcbiAgfVxcblxcbiAgLmZ1bGxQaG90b0Rlc2NyOm5vdCg6bGFzdC1jaGlsZCkge1xcbiAgICBtYXJnaW4tcmlnaHQ6IDIwcHg7XFxuICB9XFxuXFxuICAuZnVsbFBob3RvRGVzY3IgYSxcXG4gIC5kYXRlT2ZDcmVhdGVkIHtcXG4gICAgZm9udC1zaXplOiAxMnB4O1xcbiAgfVxcblxcblxcbn1cXG5cXG5AbWVkaWEgKG1heC13aWR0aDogNTc2cHgpIHtcXG4gIC5iYWNrQnRuIHtcXG4gICAgZm9udC1zaXplOiAxMnB4O1xcbiAgICBtYXJnaW4tYm90dG9tOiA2cHg7XFxuICB9XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ubG9jYWxzID0ge1xuXHRcImZ1bGxQaG90b1dyYXBwZXJcIjogXCJwaG90b1BhZ2UtbV9fZnVsbFBob3RvV3JhcHBlci0tcGNkV0hcIixcblx0XCJmdWxsUGhvdG9JbmZvXCI6IFwicGhvdG9QYWdlLW1fX2Z1bGxQaG90b0luZm8tLWV1WTFlXCIsXG5cdFwiZnVsbFBob3RvRGVzY3JcIjogXCJwaG90b1BhZ2UtbV9fZnVsbFBob3RvRGVzY3ItLWFsak9NXCIsXG5cdFwiZnVsbFBob3RvTGlrZUJsb2NrXCI6IFwicGhvdG9QYWdlLW1fX2Z1bGxQaG90b0xpa2VCbG9jay0tdzl4b1dcIixcblx0XCJiYWNrQnRuXCI6IFwicGhvdG9QYWdlLW1fX2JhY2tCdG4tLVdNSVY3XCIsXG5cdFwiZGF0ZU9mQ3JlYXRlZFwiOiBcInBob3RvUGFnZS1tX19kYXRlT2ZDcmVhdGVkLS1XRW5jaVwiXG59O1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzFdLnVzZVsxXSEuL2xpa2UubS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuaWYgKG1vZHVsZS5ob3QpIHtcbiAgaWYgKCFjb250ZW50LmxvY2FscyB8fCBtb2R1bGUuaG90LmludmFsaWRhdGUpIHtcbiAgICB2YXIgaXNFcXVhbExvY2FscyA9IGZ1bmN0aW9uIGlzRXF1YWxMb2NhbHMoYSwgYiwgaXNOYW1lZEV4cG9ydCkge1xuICBpZiAoIWEgJiYgYiB8fCBhICYmICFiKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgdmFyIHA7XG5cbiAgZm9yIChwIGluIGEpIHtcbiAgICBpZiAoaXNOYW1lZEV4cG9ydCAmJiBwID09PSBcImRlZmF1bHRcIikge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnRpbnVlXG4gICAgICBjb250aW51ZTtcbiAgICB9XG5cbiAgICBpZiAoYVtwXSAhPT0gYltwXSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIGZvciAocCBpbiBiKSB7XG4gICAgaWYgKGlzTmFtZWRFeHBvcnQgJiYgcCA9PT0gXCJkZWZhdWx0XCIpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb250aW51ZVxuICAgICAgY29udGludWU7XG4gICAgfVxuXG4gICAgaWYgKCFhW3BdKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHRydWU7XG59O1xuICAgIHZhciBpc05hbWVkRXhwb3J0ID0gIWNvbnRlbnQubG9jYWxzO1xuICAgIHZhciBvbGRMb2NhbHMgPSBpc05hbWVkRXhwb3J0ID8gbmFtZWRFeHBvcnQgOiBjb250ZW50LmxvY2FscztcblxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFxuICAgICAgXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzFdLnVzZVsxXSEuL2xpa2UubS5jc3NcIixcbiAgICAgIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKCFpc0VxdWFsTG9jYWxzKG9sZExvY2FscywgaXNOYW1lZEV4cG9ydCA/IG5hbWVkRXhwb3J0IDogY29udGVudC5sb2NhbHMsIGlzTmFtZWRFeHBvcnQpKSB7XG4gICAgICAgICAgICAgICAgbW9kdWxlLmhvdC5pbnZhbGlkYXRlKCk7XG5cbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICBvbGRMb2NhbHMgPSBpc05hbWVkRXhwb3J0ID8gbmFtZWRFeHBvcnQgOiBjb250ZW50LmxvY2FscztcblxuICAgICAgICAgICAgICB1cGRhdGUoY29udGVudCk7XG4gICAgICB9XG4gICAgKVxuICB9XG5cbiAgbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkge1xuICAgIHVwZGF0ZSgpO1xuICB9KTtcbn1cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1sxXS51c2VbMV0hLi9saWtlLm0uY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1sxXS51c2VbMV0hLi9waG90b1BhZ2UubS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuaWYgKG1vZHVsZS5ob3QpIHtcbiAgaWYgKCFjb250ZW50LmxvY2FscyB8fCBtb2R1bGUuaG90LmludmFsaWRhdGUpIHtcbiAgICB2YXIgaXNFcXVhbExvY2FscyA9IGZ1bmN0aW9uIGlzRXF1YWxMb2NhbHMoYSwgYiwgaXNOYW1lZEV4cG9ydCkge1xuICBpZiAoIWEgJiYgYiB8fCBhICYmICFiKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgdmFyIHA7XG5cbiAgZm9yIChwIGluIGEpIHtcbiAgICBpZiAoaXNOYW1lZEV4cG9ydCAmJiBwID09PSBcImRlZmF1bHRcIikge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnRpbnVlXG4gICAgICBjb250aW51ZTtcbiAgICB9XG5cbiAgICBpZiAoYVtwXSAhPT0gYltwXSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIGZvciAocCBpbiBiKSB7XG4gICAgaWYgKGlzTmFtZWRFeHBvcnQgJiYgcCA9PT0gXCJkZWZhdWx0XCIpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb250aW51ZVxuICAgICAgY29udGludWU7XG4gICAgfVxuXG4gICAgaWYgKCFhW3BdKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHRydWU7XG59O1xuICAgIHZhciBpc05hbWVkRXhwb3J0ID0gIWNvbnRlbnQubG9jYWxzO1xuICAgIHZhciBvbGRMb2NhbHMgPSBpc05hbWVkRXhwb3J0ID8gbmFtZWRFeHBvcnQgOiBjb250ZW50LmxvY2FscztcblxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFxuICAgICAgXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzFdLnVzZVsxXSEuL3Bob3RvUGFnZS5tLmNzc1wiLFxuICAgICAgZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAoIWlzRXF1YWxMb2NhbHMob2xkTG9jYWxzLCBpc05hbWVkRXhwb3J0ID8gbmFtZWRFeHBvcnQgOiBjb250ZW50LmxvY2FscywgaXNOYW1lZEV4cG9ydCkpIHtcbiAgICAgICAgICAgICAgICBtb2R1bGUuaG90LmludmFsaWRhdGUoKTtcblxuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIG9sZExvY2FscyA9IGlzTmFtZWRFeHBvcnQgPyBuYW1lZEV4cG9ydCA6IGNvbnRlbnQubG9jYWxzO1xuXG4gICAgICAgICAgICAgIHVwZGF0ZShjb250ZW50KTtcbiAgICAgIH1cbiAgICApXG4gIH1cblxuICBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7XG4gICAgdXBkYXRlKCk7XG4gIH0pO1xufVxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzFdLnVzZVsxXSEuL3Bob3RvUGFnZS5tLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwibGlrZSIsInVzZURpc3BhdGNoIiwic2V0T3JEZWxldGVMaWtlQnlVc2VyIiwiTGlrZSIsImN1cnJlbnRQaG90byIsImxpa2VCeVVzZXIiLCJzZXRMaWtlQnlVc2VyIiwiZGlzcGF0Y2giLCJsaWtlZF9ieV91c2VyIiwic2V0TGlrZSIsImxpa2VzIiwic3R5bGVzIiwidXNlTmF2aWdhdGUiLCJ1c2VQYXJhbXMiLCJ1c2VTZWxlY3RvciIsIlNwaW5uZXIiLCJnZXRDdXJyZW50UGhvdG8iLCJzZXRDdXJyZW50UGhvdG8iLCJQaG90b1BhZ2UiLCJwaG90b0lkIiwibmF2aWdhdGUiLCJzdGF0ZSIsInBob3RvcyIsImdvQmFjayIsInByb21vdGVkQXQiLCJwcm9tb3RlZF9hdCIsInNwbGl0IiwicmV2ZXJzZSIsImpvaW4iLCJiYWNrQnRuIiwiZnVsbFBob3RvV3JhcHBlciIsInVybHMiLCJmdWxsIiwiZnVsbFBob3RvSW5mbyIsImZ1bGxQaG90b0Rlc2NyIiwidXNlciIsImxpbmtzIiwiaHRtbCIsIm5hbWUiLCJkYXRlT2ZDcmVhdGVkIiwiZnVsbFBob3RvTGlrZUJsb2NrIl0sInNvdXJjZVJvb3QiOiIifQ==