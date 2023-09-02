"use strict";
(self["webpackChunkwebpack"] = self["webpackChunkwebpack"] || []).push([["src_pages_ProfileContent_ProfileContent_jsx"],{

/***/ "./src/pages/ProfileContent/ProfileContent.jsx":
/*!*****************************************************!*\
  !*** ./src/pages/ProfileContent/ProfileContent.jsx ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _profileContent_m_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./profileContent.m.css */ "./src/pages/ProfileContent/profileContent.m.css");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _redux_actions_photos__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/redux/actions/photos */ "./src/redux/actions/photos.js");
/* harmony import */ var _redux_reducers_auth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/redux/reducers/auth */ "./src/redux/reducers/auth.js");
/* harmony import */ var _components_Spinner_Spinner__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @components/Spinner/Spinner */ "./src/components/Spinner/Spinner.jsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");








var Photo = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.lazy(function () {
  return __webpack_require__.e(/*! import() */ "src_components_Photo_Photo_jsx").then(__webpack_require__.bind(__webpack_require__, /*! @components/Photo/Photo */ "./src/components/Photo/Photo.jsx"));
});

function ProfileContent() {
  var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useDispatch)();
  var isLoading = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector)(function (state) {
    return state.photos.isLoading;
  }),
      currentPage = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector)(function (state) {
    return state.photos.currentPage;
  }),
      photos = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector)(function (state) {
    return state.photos.content;
  });
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    dispatch((0,_redux_actions_photos__WEBPACK_IMPORTED_MODULE_3__.getPhotos)(currentPage, isLoading));
  }, [isLoading]);

  var loadMore = function loadMore() {
    dispatch((0,_redux_reducers_auth__WEBPACK_IMPORTED_MODULE_4__.setIsLoading)(true));
  };

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
    className: "container",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
      className: _profileContent_m_css__WEBPACK_IMPORTED_MODULE_1__["default"].content,
      children: photos.map(function (photo) {
        return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(react__WEBPACK_IMPORTED_MODULE_0__.Suspense, {
          fallback: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_components_Spinner_Spinner__WEBPACK_IMPORTED_MODULE_5__["default"], {}),
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(Photo, {
            photo: photo,
            loading: isLoading
          })
        }, photo.id);
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("button", {
      className: 'btn-reset loadMore',
      onClick: function onClick() {
        return loadMore();
      },
      children: "\u0417\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044C \u0435\u0449\u0435"
    })]
  });
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ProfileContent);

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./src/pages/ProfileContent/profileContent.m.css":
/*!*************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./src/pages/ProfileContent/profileContent.m.css ***!
  \*************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, ".profileContent-m__content--Hx7R2 {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  grid-auto-rows: minmax(400px, auto);\n  gap: 20px;\n  max-width: 100%;\n  margin-bottom: 20px;\n}\n\n.loadMore {\n  display: block;\n  margin: 0 auto 20px;\n  max-width: 180px;\n  font-size: 16px;\n  border-radius: 5px;\n  background-color: var(--color-eminence);\n  color: var(--color-white);\n  padding: 6px 10px;\n  opacity: 0.8;\n  transition: opacity .3s ease-in-out;\n}\n\n.profileContent-m__loadMore--SjSNe:hover {\n  opacity: 1;\n  transition: opacity .3s ease-in-out;\n}\n\n@media (max-width: 768px) {\n  .profileContent-m__content--Hx7R2 {\n    grid-auto-rows: minmax(200px, auto);\n  }\n}\n\n@media (max-width: 576px) {\n  .profileContent-m__content--Hx7R2 {\n    grid-template-columns: repeat(1, 1fr);\n  }\n}\n\n\n\n\n\n", "",{"version":3,"sources":["webpack://./src/pages/ProfileContent/profileContent.m.css"],"names":[],"mappings":"AAAA;EACE,aAAa;EACb,qCAAqC;EACrC,mCAAmC;EACnC,SAAS;EACT,eAAe;EACf,mBAAmB;AACrB;;AAEA;EACE,cAAc;EACd,mBAAmB;EACnB,gBAAgB;EAChB,eAAe;EACf,kBAAkB;EAClB,uCAAuC;EACvC,yBAAyB;EACzB,iBAAiB;EACjB,YAAY;EACZ,mCAAmC;AACrC;;AAEA;EACE,UAAU;EACV,mCAAmC;AACrC;;AAEA;EACE;IACE,mCAAmC;EACrC;AACF;;AAEA;EACE;IACE,qCAAqC;EACvC;AACF","sourcesContent":[".content {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  grid-auto-rows: minmax(400px, auto);\n  gap: 20px;\n  max-width: 100%;\n  margin-bottom: 20px;\n}\n\n:global(.loadMore) {\n  display: block;\n  margin: 0 auto 20px;\n  max-width: 180px;\n  font-size: 16px;\n  border-radius: 5px;\n  background-color: var(--color-eminence);\n  color: var(--color-white);\n  padding: 6px 10px;\n  opacity: 0.8;\n  transition: opacity .3s ease-in-out;\n}\n\n.loadMore:hover {\n  opacity: 1;\n  transition: opacity .3s ease-in-out;\n}\n\n@media (max-width: 768px) {\n  .content {\n    grid-auto-rows: minmax(200px, auto);\n  }\n}\n\n@media (max-width: 576px) {\n  .content {\n    grid-template-columns: repeat(1, 1fr);\n  }\n}\n\n\n\n\n\n"],"sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"content": "profileContent-m__content--Hx7R2",
	"loadMore": "profileContent-m__loadMore--SjSNe"
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./src/pages/ProfileContent/profileContent.m.css":
/*!*******************************************************!*\
  !*** ./src/pages/ProfileContent/profileContent.m.css ***!
  \*******************************************************/
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_profileContent_m_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./profileContent.m.css */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./src/pages/ProfileContent/profileContent.m.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_profileContent_m_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);


if (true) {
  if (!_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_profileContent_m_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals || module.hot.invalidate) {
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
    var isNamedExport = !_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_profileContent_m_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals;
    var oldLocals = isNamedExport ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_profileContent_m_css__WEBPACK_IMPORTED_MODULE_6__ : _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_profileContent_m_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals;

    module.hot.accept(
      /*! !!../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./profileContent.m.css */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./src/pages/ProfileContent/profileContent.m.css",
      __WEBPACK_OUTDATED_DEPENDENCIES__ => { /* harmony import */ _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_profileContent_m_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./profileContent.m.css */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./src/pages/ProfileContent/profileContent.m.css");
(function () {
        if (!isEqualLocals(oldLocals, isNamedExport ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_profileContent_m_css__WEBPACK_IMPORTED_MODULE_6__ : _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_profileContent_m_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals, isNamedExport)) {
                module.hot.invalidate();

                return;
              }

              oldLocals = isNamedExport ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_profileContent_m_css__WEBPACK_IMPORTED_MODULE_6__ : _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_profileContent_m_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals;

              update(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_profileContent_m_css__WEBPACK_IMPORTED_MODULE_6__["default"]);
      })(__WEBPACK_OUTDATED_DEPENDENCIES__); }
    )
  }

  module.hot.dispose(function() {
    update();
  });
}



       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_profileContent_m_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_profileContent_m_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_profileContent_m_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3JjX3BhZ2VzX1Byb2ZpbGVDb250ZW50X1Byb2ZpbGVDb250ZW50X2pzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUEsSUFBTVMsS0FBSyxnQkFBR1QsdUNBQUEsQ0FBVztBQUFBLFNBQU0sOExBQU47QUFBQSxDQUFYLENBQWQ7O0FBRUEsU0FBU1csY0FBVCxHQUEwQjtBQUN4QixNQUFNQyxRQUFRLEdBQUdSLHdEQUFXLEVBQTVCO0FBRUEsTUFBTVMsU0FBUyxHQUFHUix3REFBVyxDQUFDLFVBQUNTLEtBQUQ7QUFBQSxXQUFXQSxLQUFLLENBQUNDLE1BQU4sQ0FBYUYsU0FBeEI7QUFBQSxHQUFELENBQTdCO0FBQUEsTUFDRUcsV0FBVyxHQUFHWCx3REFBVyxDQUFDLFVBQUNTLEtBQUQ7QUFBQSxXQUFXQSxLQUFLLENBQUNDLE1BQU4sQ0FBYUMsV0FBeEI7QUFBQSxHQUFELENBRDNCO0FBQUEsTUFFRUQsTUFBTSxHQUFHVix3REFBVyxDQUFDLFVBQUNTLEtBQUQ7QUFBQSxXQUFXQSxLQUFLLENBQUNDLE1BQU4sQ0FBYUUsT0FBeEI7QUFBQSxHQUFELENBRnRCO0FBSUFmLEVBQUFBLGdEQUFTLENBQUMsWUFBTTtBQUNaVSxJQUFBQSxRQUFRLENBQUNOLGdFQUFTLENBQUNVLFdBQUQsRUFBY0gsU0FBZCxDQUFWLENBQVI7QUFDSCxHQUZRLEVBRU4sQ0FBQ0EsU0FBRCxDQUZNLENBQVQ7O0FBSUEsTUFBTUssUUFBUSxHQUFHLFNBQVhBLFFBQVcsR0FBTTtBQUNyQk4sSUFBQUEsUUFBUSxDQUFDTCxrRUFBWSxDQUFDLElBQUQsQ0FBYixDQUFSO0FBQ0QsR0FGRDs7QUFLQSxzQkFDRTtBQUFLLGFBQVMsRUFBQyxXQUFmO0FBQUEsNEJBQ0U7QUFBSyxlQUFTLEVBQUVKLHFFQUFoQjtBQUFBLGdCQUNHWSxNQUFNLENBQUNJLEdBQVAsQ0FBVyxVQUFDQyxLQUFEO0FBQUEsNEJBQ1YsdURB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c291cmNlcyI6WyJ3ZWJwYWNrOi8vd2VicGFjay8uL3NyYy9wYWdlcy9Qcm9maWxlQ29udGVudC9Qcm9maWxlQ29udGVudC5qc3giLCJ3ZWJwYWNrOi8vd2VicGFjay8uL3NyYy9wYWdlcy9Qcm9maWxlQ29udGVudC9wcm9maWxlQ29udGVudC5tLmNzcyIsIndlYnBhY2s6Ly93ZWJwYWNrLy4vc3JjL3BhZ2VzL1Byb2ZpbGVDb250ZW50L3Byb2ZpbGVDb250ZW50Lm0uY3NzPzAxZTUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7U3VzcGVuc2UsIHVzZUVmZmVjdH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHN0eWxlcyBmcm9tICcuL3Byb2ZpbGVDb250ZW50Lm0uY3NzJztcblxuaW1wb3J0IHt1c2VEaXNwYXRjaCwgdXNlU2VsZWN0b3J9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCB7Z2V0UGhvdG9zfSBmcm9tICdAL3JlZHV4L2FjdGlvbnMvcGhvdG9zJztcbmltcG9ydCB7c2V0SXNMb2FkaW5nfSBmcm9tICdAL3JlZHV4L3JlZHVjZXJzL2F1dGgnO1xuaW1wb3J0IFNwaW5uZXIgZnJvbSAnQGNvbXBvbmVudHMvU3Bpbm5lci9TcGlubmVyJztcblxuY29uc3QgUGhvdG8gPSBSZWFjdC5sYXp5KCgpID0+IGltcG9ydCgnQGNvbXBvbmVudHMvUGhvdG8vUGhvdG8nKSk7XG5cbmZ1bmN0aW9uIFByb2ZpbGVDb250ZW50KCkge1xuICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XG5cbiAgY29uc3QgaXNMb2FkaW5nID0gdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS5waG90b3MuaXNMb2FkaW5nKSxcbiAgICBjdXJyZW50UGFnZSA9IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUucGhvdG9zLmN1cnJlbnRQYWdlKSxcbiAgICBwaG90b3MgPSB1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLnBob3Rvcy5jb250ZW50KTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgZGlzcGF0Y2goZ2V0UGhvdG9zKGN1cnJlbnRQYWdlLCBpc0xvYWRpbmcpKTtcbiAgfSwgW2lzTG9hZGluZ10pO1xuXG4gIGNvbnN0IGxvYWRNb3JlID0gKCkgPT4ge1xuICAgIGRpc3BhdGNoKHNldElzTG9hZGluZyh0cnVlKSk7XG4gIH07XG5cblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRlbnR9PlxuICAgICAgICB7cGhvdG9zLm1hcCgocGhvdG8pID0+IChcbiAgICAgICAgICA8U3VzcGVuc2UgZmFsbGJhY2s9ezxTcGlubmVyLz59IGtleT17cGhvdG8uaWR9PlxuICAgICAgICAgICAgPFBob3RvIHBob3RvPXtwaG90b30gbG9hZGluZz17aXNMb2FkaW5nfS8+XG4gICAgICAgICAgPC9TdXNwZW5zZT5cbiAgICAgICAgKSl9XG4gICAgICA8L2Rpdj5cbiAgICAgIDxidXR0b24gY2xhc3NOYW1lPXsnYnRuLXJlc2V0IGxvYWRNb3JlJ30gb25DbGljaz17KCkgPT4gbG9hZE1vcmUoKX0+XG4gICAgICAgINCX0LDQs9GA0YPQt9C40YLRjCDQtdGJ0LVcbiAgICAgIDwvYnV0dG9uPlxuICAgIDwvZGl2PlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBQcm9maWxlQ29udGVudDtcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLnByb2ZpbGVDb250ZW50LW1fX2NvbnRlbnQtLUh4N1IyIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgzLCAxZnIpO1xcbiAgZ3JpZC1hdXRvLXJvd3M6IG1pbm1heCg0MDBweCwgYXV0byk7XFxuICBnYXA6IDIwcHg7XFxuICBtYXgtd2lkdGg6IDEwMCU7XFxuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xcbn1cXG5cXG4ubG9hZE1vcmUge1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBtYXJnaW46IDAgYXV0byAyMHB4O1xcbiAgbWF4LXdpZHRoOiAxODBweDtcXG4gIGZvbnQtc2l6ZTogMTZweDtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLWVtaW5lbmNlKTtcXG4gIGNvbG9yOiB2YXIoLS1jb2xvci13aGl0ZSk7XFxuICBwYWRkaW5nOiA2cHggMTBweDtcXG4gIG9wYWNpdHk6IDAuODtcXG4gIHRyYW5zaXRpb246IG9wYWNpdHkgLjNzIGVhc2UtaW4tb3V0O1xcbn1cXG5cXG4ucHJvZmlsZUNvbnRlbnQtbV9fbG9hZE1vcmUtLVNqU05lOmhvdmVyIHtcXG4gIG9wYWNpdHk6IDE7XFxuICB0cmFuc2l0aW9uOiBvcGFjaXR5IC4zcyBlYXNlLWluLW91dDtcXG59XFxuXFxuQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XFxuICAucHJvZmlsZUNvbnRlbnQtbV9fY29udGVudC0tSHg3UjIge1xcbiAgICBncmlkLWF1dG8tcm93czogbWlubWF4KDIwMHB4LCBhdXRvKTtcXG4gIH1cXG59XFxuXFxuQG1lZGlhIChtYXgtd2lkdGg6IDU3NnB4KSB7XFxuICAucHJvZmlsZUNvbnRlbnQtbV9fY29udGVudC0tSHg3UjIge1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxLCAxZnIpO1xcbiAgfVxcbn1cXG5cXG5cXG5cXG5cXG5cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvcGFnZXMvUHJvZmlsZUNvbnRlbnQvcHJvZmlsZUNvbnRlbnQubS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSxhQUFhO0VBQ2IscUNBQXFDO0VBQ3JDLG1DQUFtQztFQUNuQyxTQUFTO0VBQ1QsZUFBZTtFQUNmLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGNBQWM7RUFDZCxtQkFBbUI7RUFDbkIsZ0JBQWdCO0VBQ2hCLGVBQWU7RUFDZixrQkFBa0I7RUFDbEIsdUNBQXVDO0VBQ3ZDLHlCQUF5QjtFQUN6QixpQkFBaUI7RUFDakIsWUFBWTtFQUNaLG1DQUFtQztBQUNyQzs7QUFFQTtFQUNFLFVBQVU7RUFDVixtQ0FBbUM7QUFDckM7O0FBRUE7RUFDRTtJQUNFLG1DQUFtQztFQUNyQztBQUNGOztBQUVBO0VBQ0U7SUFDRSxxQ0FBcUM7RUFDdkM7QUFDRlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIuY29udGVudCB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMywgMWZyKTtcXG4gIGdyaWQtYXV0by1yb3dzOiBtaW5tYXgoNDAwcHgsIGF1dG8pO1xcbiAgZ2FwOiAyMHB4O1xcbiAgbWF4LXdpZHRoOiAxMDAlO1xcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcXG59XFxuXFxuOmdsb2JhbCgubG9hZE1vcmUpIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgbWFyZ2luOiAwIGF1dG8gMjBweDtcXG4gIG1heC13aWR0aDogMTgwcHg7XFxuICBmb250LXNpemU6IDE2cHg7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1lbWluZW5jZSk7XFxuICBjb2xvcjogdmFyKC0tY29sb3Itd2hpdGUpO1xcbiAgcGFkZGluZzogNnB4IDEwcHg7XFxuICBvcGFjaXR5OiAwLjg7XFxuICB0cmFuc2l0aW9uOiBvcGFjaXR5IC4zcyBlYXNlLWluLW91dDtcXG59XFxuXFxuLmxvYWRNb3JlOmhvdmVyIHtcXG4gIG9wYWNpdHk6IDE7XFxuICB0cmFuc2l0aW9uOiBvcGFjaXR5IC4zcyBlYXNlLWluLW91dDtcXG59XFxuXFxuQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XFxuICAuY29udGVudCB7XFxuICAgIGdyaWQtYXV0by1yb3dzOiBtaW5tYXgoMjAwcHgsIGF1dG8pO1xcbiAgfVxcbn1cXG5cXG5AbWVkaWEgKG1heC13aWR0aDogNTc2cHgpIHtcXG4gIC5jb250ZW50IHtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMSwgMWZyKTtcXG4gIH1cXG59XFxuXFxuXFxuXFxuXFxuXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5sb2NhbHMgPSB7XG5cdFwiY29udGVudFwiOiBcInByb2ZpbGVDb250ZW50LW1fX2NvbnRlbnQtLUh4N1IyXCIsXG5cdFwibG9hZE1vcmVcIjogXCJwcm9maWxlQ29udGVudC1tX19sb2FkTW9yZS0tU2pTTmVcIlxufTtcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1sxXS51c2VbMV0hLi9wcm9maWxlQ29udGVudC5tLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5pZiAobW9kdWxlLmhvdCkge1xuICBpZiAoIWNvbnRlbnQubG9jYWxzIHx8IG1vZHVsZS5ob3QuaW52YWxpZGF0ZSkge1xuICAgIHZhciBpc0VxdWFsTG9jYWxzID0gZnVuY3Rpb24gaXNFcXVhbExvY2FscyhhLCBiLCBpc05hbWVkRXhwb3J0KSB7XG4gIGlmICghYSAmJiBiIHx8IGEgJiYgIWIpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICB2YXIgcDtcblxuICBmb3IgKHAgaW4gYSkge1xuICAgIGlmIChpc05hbWVkRXhwb3J0ICYmIHAgPT09IFwiZGVmYXVsdFwiKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29udGludWVcbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cblxuICAgIGlmIChhW3BdICE9PSBiW3BdKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgZm9yIChwIGluIGIpIHtcbiAgICBpZiAoaXNOYW1lZEV4cG9ydCAmJiBwID09PSBcImRlZmF1bHRcIikge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnRpbnVlXG4gICAgICBjb250aW51ZTtcbiAgICB9XG5cbiAgICBpZiAoIWFbcF0pIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gdHJ1ZTtcbn07XG4gICAgdmFyIGlzTmFtZWRFeHBvcnQgPSAhY29udGVudC5sb2NhbHM7XG4gICAgdmFyIG9sZExvY2FscyA9IGlzTmFtZWRFeHBvcnQgPyBuYW1lZEV4cG9ydCA6IGNvbnRlbnQubG9jYWxzO1xuXG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXG4gICAgICBcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbMV0udXNlWzFdIS4vcHJvZmlsZUNvbnRlbnQubS5jc3NcIixcbiAgICAgIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKCFpc0VxdWFsTG9jYWxzKG9sZExvY2FscywgaXNOYW1lZEV4cG9ydCA/IG5hbWVkRXhwb3J0IDogY29udGVudC5sb2NhbHMsIGlzTmFtZWRFeHBvcnQpKSB7XG4gICAgICAgICAgICAgICAgbW9kdWxlLmhvdC5pbnZhbGlkYXRlKCk7XG5cbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICBvbGRMb2NhbHMgPSBpc05hbWVkRXhwb3J0ID8gbmFtZWRFeHBvcnQgOiBjb250ZW50LmxvY2FscztcblxuICAgICAgICAgICAgICB1cGRhdGUoY29udGVudCk7XG4gICAgICB9XG4gICAgKVxuICB9XG5cbiAgbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkge1xuICAgIHVwZGF0ZSgpO1xuICB9KTtcbn1cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1sxXS51c2VbMV0hLi9wcm9maWxlQ29udGVudC5tLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsIlN1c3BlbnNlIiwidXNlRWZmZWN0Iiwic3R5bGVzIiwidXNlRGlzcGF0Y2giLCJ1c2VTZWxlY3RvciIsImdldFBob3RvcyIsInNldElzTG9hZGluZyIsIlNwaW5uZXIiLCJQaG90byIsImxhenkiLCJQcm9maWxlQ29udGVudCIsImRpc3BhdGNoIiwiaXNMb2FkaW5nIiwic3RhdGUiLCJwaG90b3MiLCJjdXJyZW50UGFnZSIsImNvbnRlbnQiLCJsb2FkTW9yZSIsIm1hcCIsInBob3RvIiwiaWQiXSwic291cmNlUm9vdCI6IiJ9