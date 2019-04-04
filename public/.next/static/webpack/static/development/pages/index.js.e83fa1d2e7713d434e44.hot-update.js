webpackHotUpdate("static/development/pages/index.js",{

/***/ "./styles/theme.js":
/*!*************************!*\
  !*** ./styles/theme.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var _material_ui_core_colors_grey__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/colors/grey */ "./node_modules/@material-ui/core/colors/grey.js");
/* harmony import */ var _material_ui_core_colors_grey__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_colors_grey__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_colors_green__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/colors/green */ "./node_modules/@material-ui/core/colors/green.js");
/* harmony import */ var _material_ui_core_colors_green__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_colors_green__WEBPACK_IMPORTED_MODULE_2__);



var drawerWidth = 300;

var styles = function styles(theme) {
  var _baseline;

  return {
    "@global": {
      body: {
        backgroundImage: 'url(/static/images/pattern.png)'
      }
    },
    root: {
      display: 'flex'
    },
    drawer: Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({}, theme.breakpoints.up('md'), {
      width: drawerWidth,
      flexShrink: 0
    }),
    drawerPaper: {
      width: drawerWidth
    },
    logo: {
      padding: 20
    },
    content: {
      position: 'relative',
      flexGrow: 1
    },
    burger: Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({
      position: 'fixed',
      left: 0,
      top: 0,
      width: '100%',
      padding: 20,
      zIndex: 20,
      backgroundColor: _material_ui_core_colors_grey__WEBPACK_IMPORTED_MODULE_1___default.a[700]
    }, theme.breakpoints.up('md'), {
      display: 'none'
    }),
    menuButton: {
      color: '#fff'
    },
    photo: Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({
      position: 'relative',
      height: '100vh',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: '85% top',
      backgroundSize: 'cover'
    }, theme.breakpoints.down('md'), {
      marginBottom: '-88px'
    }),
    baseline: (_baseline = {
      position: 'absolute',
      left: 0,
      bottom: 0,
      width: '100%',
      height: '100%',
      padding: 20,
      backgroundColor: 'rgba(0,0,0,.3)',
      fontSize: 28,
      color: '#fff',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'flex-end'
    }, Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_baseline, theme.breakpoints.up('md'), {
      justifyContent: 'flex-start',
      padding: 40
    }), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_baseline, theme.breakpoints.down('xs'), {
      fontSize: 22
    }), _baseline),
    markdown: Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({}, theme.breakpoints.up('md'), {
      width: '50%'
    }),
    nav: {
      padding: 0
    },
    navlink: {
      display: 'flex',
      padding: '10px 20px',
      alignItems: 'center',
      color: _material_ui_core_colors_grey__WEBPACK_IMPORTED_MODULE_1___default.a[700],
      textDecoration: 'none',
      '&:hover': {
        borderLeft: "3px solid ".concat(_material_ui_core_colors_green__WEBPACK_IMPORTED_MODULE_2___default.a[500])
      }
    },
    navlinktext: {
      color: _material_ui_core_colors_grey__WEBPACK_IMPORTED_MODULE_1___default.a[700]
    },
    navicon: {
      marginRight: 0,
      color: _material_ui_core_colors_green__WEBPACK_IMPORTED_MODULE_2___default.a[400]
    },
    appbar: Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({
      fontSize: 36,
      color: '#fff',
      textTransform: 'uppercase',
      padding: 25
    }, theme.breakpoints.down('md'), {
      position: 'relative',
      top: 88,
      zIndex: 5
    }),
    fullheight: {
      height: '100vh'
    }
  };
};

/* harmony default export */ __webpack_exports__["default"] = (styles);

/***/ })

})
//# sourceMappingURL=index.js.e83fa1d2e7713d434e44.hot-update.js.map