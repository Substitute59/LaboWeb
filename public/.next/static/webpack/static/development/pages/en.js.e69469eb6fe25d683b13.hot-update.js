webpackHotUpdate("static/development/pages/en.js",{

/***/ "./pages/en.js":
/*!*********************!*\
  !*** ./pages/en.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! isomorphic-unfetch */ "./node_modules/isomorphic-unfetch/browser.js");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _components_site__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/site */ "./components/site.js");







var _jsxFileName = "/Users/jonathandebaere/Labo Web France/Interne/Projets/newsite/public/pages/en.js";



var strapiUrl = 'http://localhost:1337';

var En =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__["default"])(En, _React$Component);

  function En() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, En);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(En).apply(this, arguments));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(En, [{
    key: "render",
    value: function render() {
      var apiDatas = this.props.apiDatas;
      return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_components_site__WEBPACK_IMPORTED_MODULE_9__["default"], {
        lang: "en",
        strapiUrl: strapiUrl,
        apiDatas: apiDatas,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 12
        },
        __self: this
      });
    }
  }]);

  return En;
}(react__WEBPACK_IMPORTED_MODULE_7___default.a.Component);

En.getInitialProps =
/*#__PURE__*/
Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
/*#__PURE__*/
_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
  var resHp, hp, resHobbies, hobbies, resDomains, domains, resSkills, skills, resProjects, projects, resExperiences, experiences, resFormations, formations;
  return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_8___default()("".concat(strapiUrl, "/homepages/5c823abbf844280cc880d81f"));

        case 2:
          resHp = _context.sent;
          _context.next = 5;
          return resHp.json();

        case 5:
          hp = _context.sent;
          _context.next = 8;
          return isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_8___default()("".concat(strapiUrl, "/loisirs?_sort=Ordre:ASC"));

        case 8:
          resHobbies = _context.sent;
          _context.next = 11;
          return resHobbies.json();

        case 11:
          hobbies = _context.sent;
          _context.next = 14;
          return isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_8___default()("".concat(strapiUrl, "/domaines?_sort=Ordre:ASC"));

        case 14:
          resDomains = _context.sent;
          _context.next = 17;
          return resDomains.json();

        case 17:
          domains = _context.sent;
          _context.next = 20;
          return isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_8___default()("".concat(strapiUrl, "/competences?_sort=Ordre:ASC"));

        case 20:
          resSkills = _context.sent;
          _context.next = 23;
          return resSkills.json();

        case 23:
          skills = _context.sent;
          _context.next = 26;
          return isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_8___default()("".concat(strapiUrl, "/works?_sort=Ordre:ASC"));

        case 26:
          resProjects = _context.sent;
          _context.next = 29;
          return resProjects.json();

        case 29:
          projects = _context.sent;
          _context.next = 32;
          return isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_8___default()("".concat(strapiUrl, "/experiences?_sort=Ordre:ASC"));

        case 32:
          resExperiences = _context.sent;
          _context.next = 35;
          return resExperiences.json();

        case 35:
          experiences = _context.sent;
          _context.next = 38;
          return isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_8___default()("".concat(strapiUrl, "/formations?_sort=Ordre:ASC"));

        case 38:
          resFormations = _context.sent;
          _context.next = 41;
          return resFormations.json();

        case 41:
          formations = _context.sent;
          return _context.abrupt("return", {
            apiDatas: {
              hp: hp,
              hobbies: hobbies,
              domains: domains,
              skills: skills,
              projects: projects,
              experiences: experiences,
              formations: formations
            }
          });

        case 43:
        case "end":
          return _context.stop();
      }
    }
  }, _callee);
}));
/* harmony default export */ __webpack_exports__["default"] = (En);

/***/ })

})
//# sourceMappingURL=en.js.e69469eb6fe25d683b13.hot-update.js.map