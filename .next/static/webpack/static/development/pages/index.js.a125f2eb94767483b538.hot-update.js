webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Page; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_native__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-native */ "./node_modules/react-native-web/dist/index.js");
/* harmony import */ var material_bread__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! material-bread */ "./node_modules/material-bread/dist/index.js");
/* harmony import */ var material_bread__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(material_bread__WEBPACK_IMPORTED_MODULE_7__);





var _jsxFileName = "/Users/forte/Downloads/material-bread-next/pages/index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement;




var styles = {
  container: {
    flex: 1,
    paddingTop: 30
  },
  backdropHeader: {
    height: 56,
    flexDirection: 'row',
    alignItems: 'center'
  },
  backdropHeaderTitle: {
    fontSize: 18,
    color: 'white',
    fontWeight: '500',
    marginLeft: 72
  }
};

var backLayerRevealed = __jsx(react_native__WEBPACK_IMPORTED_MODULE_6__["View"], {
  style: {
    flex: 1,
    width: '100%'
  },
  __source: {
    fileName: _jsxFileName,
    lineNumber: 24
  },
  __self: undefined
}, __jsx(react_native__WEBPACK_IMPORTED_MODULE_6__["View"], {
  style: styles.backdropHeader,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 25
  },
  __self: undefined
}, __jsx(react_native__WEBPACK_IMPORTED_MODULE_6__["Text"], {
  style: styles.backdropHeaderTitle,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 26
  },
  __self: undefined
}, "Navigation")), __jsx(material_bread__WEBPACK_IMPORTED_MODULE_7__["List"], {
  style: {
    width: '100%',
    backgroundColor: 'transparent'
  },
  __source: {
    fileName: _jsxFileName,
    lineNumber: 29
  },
  __self: undefined
}, __jsx(material_bread__WEBPACK_IMPORTED_MODULE_7__["ListItem"], {
  text: 'Home',
  textStyle: {
    color: 'white'
  },
  selected: true,
  style: {
    backgroundColor: 'transparent'
  },
  icon: __jsx(material_bread__WEBPACK_IMPORTED_MODULE_7__["Icon"], {
    name: 'home',
    size: 24,
    color: 'white',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: undefined
  }),
  __source: {
    fileName: _jsxFileName,
    lineNumber: 34
  },
  __self: undefined
}), __jsx(material_bread__WEBPACK_IMPORTED_MODULE_7__["ListItem"], {
  text: 'Music',
  textStyle: {
    color: 'white'
  },
  style: {
    backgroundColor: 'transparent'
  },
  icon: __jsx(material_bread__WEBPACK_IMPORTED_MODULE_7__["Icon"], {
    name: 'music-note',
    size: 24,
    color: 'white',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: undefined
  }),
  __source: {
    fileName: _jsxFileName,
    lineNumber: 41
  },
  __self: undefined
}), __jsx(material_bread__WEBPACK_IMPORTED_MODULE_7__["ListItem"], {
  text: 'Favorites',
  textStyle: {
    color: 'white'
  },
  style: {
    backgroundColor: 'transparent'
  },
  icon: __jsx(material_bread__WEBPACK_IMPORTED_MODULE_7__["Icon"], {
    name: 'favorite',
    size: 24,
    color: 'white',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: undefined
  }),
  __source: {
    fileName: _jsxFileName,
    lineNumber: 47
  },
  __self: undefined
}), __jsx(material_bread__WEBPACK_IMPORTED_MODULE_7__["ListItem"], {
  text: 'Settings',
  textStyle: {
    color: 'white'
  },
  style: {
    backgroundColor: 'transparent'
  },
  icon: __jsx(material_bread__WEBPACK_IMPORTED_MODULE_7__["Icon"], {
    name: 'settings',
    size: 24,
    color: 'white',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57
    },
    __self: undefined
  }),
  __source: {
    fileName: _jsxFileName,
    lineNumber: 53
  },
  __self: undefined
})));

var album = __jsx(material_bread__WEBPACK_IMPORTED_MODULE_7__["Avatar"], {
  type: "icon",
  content: "album",
  contentColor: '#ececec',
  color: '#a3a3a3',
  size: 40,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 63
  },
  __self: undefined
});

var iconFav = __jsx(material_bread__WEBPACK_IMPORTED_MODULE_7__["Icon"], {
  name: "settings",
  size: 24,
  color: "#6e6e6e",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 64
  },
  __self: undefined
});

var Page =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(Page, _React$Component);

  function Page() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Page);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Page).apply(this, arguments));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Page, [{
    key: "render",
    value: function render() {
      return __jsx(material_bread__WEBPACK_IMPORTED_MODULE_7__["BreadProvider"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 69
        },
        __self: this
      }, __jsx(react_native__WEBPACK_IMPORTED_MODULE_6__["View"], {
        style: {
          marginBottom: 80
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 70
        },
        __self: this
      }, __jsx(material_bread__WEBPACK_IMPORTED_MODULE_7__["Backdrop"], {
        backLayerConcealed: __jsx(react_native__WEBPACK_IMPORTED_MODULE_6__["View"], {
          style: styles.backdropHeader,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 73
          },
          __self: this
        }, __jsx(react_native__WEBPACK_IMPORTED_MODULE_6__["Text"], {
          style: styles.backdropHeaderTitle,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 74
          },
          __self: this
        }, "App")),
        backLayerRevealed: backLayerRevealed,
        offset: 260,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 71
        },
        __self: this
      }, __jsx(react_native__WEBPACK_IMPORTED_MODULE_6__["View"], {
        style: {
          flex: 1,
          width: '100%'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 79
        },
        __self: this
      }, __jsx(react_native__WEBPACK_IMPORTED_MODULE_6__["View"], {
        style: styles.backdropHeader,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 80
        },
        __self: this
      }, __jsx(react_native__WEBPACK_IMPORTED_MODULE_6__["Text"], {
        style: styles.backdropHeaderTitle,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 81
        },
        __self: this
      }, "Navigation")), __jsx(material_bread__WEBPACK_IMPORTED_MODULE_7__["List"], {
        style: {
          width: '100%',
          backgroundColor: 'transparent'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 83
        },
        __self: this
      }, __jsx(material_bread__WEBPACK_IMPORTED_MODULE_7__["ListItem"], {
        text: 'Home',
        textStyle: {
          color: 'white'
        },
        selected: true,
        style: {
          backgroundColor: 'transparent'
        },
        icon: __jsx(material_bread__WEBPACK_IMPORTED_MODULE_7__["Icon"], {
          name: 'home',
          size: 24,
          color: 'white',
          __source: {
            fileName: _jsxFileName,
            lineNumber: 93
          },
          __self: this
        }),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 88
        },
        __self: this
      }), __jsx(material_bread__WEBPACK_IMPORTED_MODULE_7__["ListItem"], {
        text: 'Music',
        textStyle: {
          color: 'white'
        },
        style: {
          backgroundColor: 'transparent'
        },
        icon: __jsx(material_bread__WEBPACK_IMPORTED_MODULE_7__["Icon"], {
          name: 'music-note',
          size: 24,
          color: 'white',
          __source: {
            fileName: _jsxFileName,
            lineNumber: 99
          },
          __self: this
        }),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 95
        },
        __self: this
      }), __jsx(material_bread__WEBPACK_IMPORTED_MODULE_7__["ListItem"], {
        text: 'Favorites',
        textStyle: {
          color: 'white'
        },
        style: {
          backgroundColor: 'transparent'
        },
        icon: __jsx(material_bread__WEBPACK_IMPORTED_MODULE_7__["Icon"], {
          name: 'favorite',
          size: 24,
          color: 'white',
          __source: {
            fileName: _jsxFileName,
            lineNumber: 105
          },
          __self: this
        }),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 101
        },
        __self: this
      }), __jsx(material_bread__WEBPACK_IMPORTED_MODULE_7__["ListItem"], {
        text: 'Settings',
        textStyle: {
          color: 'white'
        },
        style: {
          backgroundColor: 'transparent'
        },
        icon: __jsx(material_bread__WEBPACK_IMPORTED_MODULE_7__["Icon"], {
          name: 'settings',
          size: 24,
          color: 'white',
          __source: {
            fileName: _jsxFileName,
            lineNumber: 111
          },
          __self: this
        }),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 107
        },
        __self: this
      }))))));
    }
  }]);

  return Page;
}(react__WEBPACK_IMPORTED_MODULE_5___default.a.Component);



/***/ })

})
//# sourceMappingURL=index.js.a125f2eb94767483b538.hot-update.js.map