webpackHotUpdate_N_E("pages/index",{

/***/ "./components/Dropzone.jsx":
/*!*********************************!*\
  !*** ./components/Dropzone.jsx ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_dropzone__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-dropzone */ "./node_modules/react-dropzone/dist/es/index.js");
/* harmony import */ var _context_app_appContext__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../context/app/appContext */ "./context/app/appContext.js");
/* harmony import */ var _context_auth_authContext__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../context/auth/authContext */ "./context/auth/authContext.js");
/* harmony import */ var _Form__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Form */ "./components/Form.jsx");




var _this = undefined,
    _jsxFileName = "C:\\Users\\Danell\\Desktop\\Proyectos_React\\NodeSend(Mern_Stack)\\sendmimg\\components\\Dropzone.jsx",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;




 //use calback usado para multiples rendering de la app

var Dropzone = function Dropzone() {
  _s();

  // Context de la app
  var AppContext = Object(react__WEBPACK_IMPORTED_MODULE_3__["useContext"])(_context_app_appContext__WEBPACK_IMPORTED_MODULE_5__["default"]);
  var cargando = AppContext.cargando,
      mostrarAlerta = AppContext.mostrarAlerta,
      subirArchivo = AppContext.subirArchivo,
      crearEnlace = AppContext.crearEnlace; // Context de autenticación

  var AuthContext = Object(react__WEBPACK_IMPORTED_MODULE_3__["useContext"])(_context_auth_authContext__WEBPACK_IMPORTED_MODULE_6__["default"]);
  var usuario = AuthContext.usuario,
      autenticado = AuthContext.autenticado;

  var onDropRejected = function onDropRejected() {
    mostrarAlerta('No se pudo subir, el Limite es 1MB, obten una cuenta gratis para subir archivos más grandes');
  };

  var onDropAccepted = Object(react__WEBPACK_IMPORTED_MODULE_3__["useCallback"])( /*#__PURE__*/function () {
    var _ref = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee(acceptedFiles) {
      var formData;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              // Crear un form Data
              formData = new FormData(); //crea el formdata

              formData.append('archivo', acceptedFiles[0]);
              subirArchivo(formData, acceptedFiles[0].path);

            case 3:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function (_x) {
      return _ref.apply(this, arguments);
    };
  }(), []);
  var maxSize = autenticado ? 1000000000000 : 1000000; // Extraer contenido de Dropzone

  var _useDropzone = Object(react_dropzone__WEBPACK_IMPORTED_MODULE_4__["useDropzone"])({
    onDropAccepted: onDropAccepted,
    onDropRejected: onDropRejected,
    maxSize: maxSize
  }),
      getRootProps = _useDropzone.getRootProps,
      getInputProps = _useDropzone.getInputProps,
      isDragActive = _useDropzone.isDragActive,
      acceptedFiles = _useDropzone.acceptedFiles;

  var archivos = acceptedFiles.map(function (archivo) {
    return __jsx("li", {
      key: archivo.lastModified,
      className: "",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 39,
        columnNumber: 9
      }
    }, __jsx("p", {
      className: "",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 40,
        columnNumber: 13
      }
    }, archivo.path), __jsx("p", {
      className: "",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 41,
        columnNumber: 13
      }
    }, //mostrar en MB
    (archivo.size / Math.pow(1024, 2)).toFixed(2), " MB"));
  });
  return __jsx("div", {
    className: "",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 9
    }
  }, __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 1
    }
  }), __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 21
    }
  }), //Si tengo ya un archivo subido, se mostrara el listado de archivos para ponerle configuracion
  //en caso contrario, subir un archivo
  acceptedFiles.length > 0 ? __jsx("div", {
    className: " text-center",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 17
    }
  }, __jsx("h4", {
    className: "headline",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 21
    }
  }, "Archivos"), __jsx("ul", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 21
    }
  }, archivos), autenticado ? __jsx(_Form__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 39
    }
  }) : "", //spinner  
  cargando ? __jsx("p", {
    className: "",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 33
    }
  }, "Subiendo Archivo...") : __jsx("button", {
    className: "paper-btn btn-block button",
    onClick: function onClick() {
      return crearEnlace();
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 22
    }
  }, "Crear Enlace")) : __jsx("div", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, getRootProps({
    className: 'dropzone  paper container-lg card anchor align-middle padding-left-large'
  }), {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 17
    }
  }), __jsx("div", {
    className: "border-dotted border-thick margin-top-small padding-left-large \r padding-right-large padding-top-large padding-bottom-large",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 20
    }
  }, __jsx("input", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    className: "card-body"
  }, getInputProps(), {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 21
    }
  })), isDragActive ? __jsx("p", {
    className: "",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 44
    }
  }, " Suelta el archivo ") : __jsx("div", {
    className: "",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 29
    }
  }, __jsx("p", {
    className: "button-text",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91,
      columnNumber: 33
    }
  }, "Selecciona un archivo y arrastralo aqu\xED"), __jsx("button", {
    className: "paper-btn btn-block button",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92,
      columnNumber: 33
    }
  }, "Selecciona archivos para subir")))));
};

_s(Dropzone, "kwQnK7tG9AzcGColoizl2K3ELkI=", false, function () {
  return [react_dropzone__WEBPACK_IMPORTED_MODULE_4__["useDropzone"]];
});

_c = Dropzone;
/* harmony default export */ __webpack_exports__["default"] = (Dropzone);

var _c;

$RefreshReg$(_c, "Dropzone");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Ecm9wem9uZS5qc3giXSwibmFtZXMiOlsiRHJvcHpvbmUiLCJBcHBDb250ZXh0IiwidXNlQ29udGV4dCIsImFwcENvbnRleHQiLCJjYXJnYW5kbyIsIm1vc3RyYXJBbGVydGEiLCJzdWJpckFyY2hpdm8iLCJjcmVhckVubGFjZSIsIkF1dGhDb250ZXh0IiwiYXV0aENvbnRleHQiLCJ1c3VhcmlvIiwiYXV0ZW50aWNhZG8iLCJvbkRyb3BSZWplY3RlZCIsIm9uRHJvcEFjY2VwdGVkIiwidXNlQ2FsbGJhY2siLCJhY2NlcHRlZEZpbGVzIiwiZm9ybURhdGEiLCJGb3JtRGF0YSIsImFwcGVuZCIsInBhdGgiLCJtYXhTaXplIiwidXNlRHJvcHpvbmUiLCJnZXRSb290UHJvcHMiLCJnZXRJbnB1dFByb3BzIiwiaXNEcmFnQWN0aXZlIiwiYXJjaGl2b3MiLCJtYXAiLCJhcmNoaXZvIiwibGFzdE1vZGlmaWVkIiwic2l6ZSIsIk1hdGgiLCJwb3ciLCJ0b0ZpeGVkIiwibGVuZ3RoIiwiY2xhc3NOYW1lIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtDQUlBOztBQUNBLElBQU1BLFFBQVEsR0FBRyxTQUFYQSxRQUFXLEdBQU07QUFBQTs7QUFFbkI7QUFDQSxNQUFNQyxVQUFVLEdBQUdDLHdEQUFVLENBQUNDLCtEQUFELENBQTdCO0FBSG1CLE1BSVhDLFFBSlcsR0FJNENILFVBSjVDLENBSVhHLFFBSlc7QUFBQSxNQUlEQyxhQUpDLEdBSTRDSixVQUo1QyxDQUlESSxhQUpDO0FBQUEsTUFJY0MsWUFKZCxHQUk0Q0wsVUFKNUMsQ0FJY0ssWUFKZDtBQUFBLE1BSTRCQyxXQUo1QixHQUk0Q04sVUFKNUMsQ0FJNEJNLFdBSjVCLEVBTW5COztBQUNBLE1BQU1DLFdBQVcsR0FBR04sd0RBQVUsQ0FBQ08saUVBQUQsQ0FBOUI7QUFQbUIsTUFRWEMsT0FSVyxH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QjtBQUVPLFdBQU8sRUFBRztBQUFBLGFBQU1HLFdBQVcsRUFBakI7QUFBQSxLQUZqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQWRMLENBREosR0EyQkksb0dBQVVlLFlBQVksQ0FBQztBQUFFWSxhQUFTLEVBQUU7QUFBYixHQUFELENBQXRCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFDRztBQUFLLGFBQVMsRUFBQyw4SEFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBRUM7QUFBTyxhQUFTLEVBQUM7QUFBakIsS0FBa0NYLGFBQWEsRUFBL0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUZELEVBSVNDLFlBQVksR0FBRztBQUFHLGFBQVMsRUFBQyxFQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsMkJBQUgsR0FDWjtBQUFLLGFBQVMsRUFBQyxFQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSTtBQUFHLGFBQVMsRUFBQyxhQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0RBREosRUFFSTtBQUFRLGFBQVMsRUFBQyw0QkFBbEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxzQ0FGSixDQUxULENBREgsQ0FqQ1IsQ0FESjtBQW9ESCxDQTdGRDs7R0FBTXhCLFE7VUEyQm1FcUIsMEQ7OztLQTNCbkVyQixRO0FBK0ZTQSx1RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC5lOWI2YmMyN2U0NjgyNzQ4MjYwZC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7ICB1c2VDYWxsYmFjaywgdXNlQ29udGV4dCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgdXNlRHJvcHpvbmUgfSBmcm9tICdyZWFjdC1kcm9wem9uZSc7XHJcbmltcG9ydCBhcHBDb250ZXh0IGZyb20gJy4uL2NvbnRleHQvYXBwL2FwcENvbnRleHQnO1xyXG5pbXBvcnQgYXV0aENvbnRleHQgZnJvbSAnLi4vY29udGV4dC9hdXRoL2F1dGhDb250ZXh0JztcclxuaW1wb3J0IEZvcm11bGFyaW8gZnJvbSAnLi9Gb3JtJztcclxuXHJcblxyXG4vL3VzZSBjYWxiYWNrIHVzYWRvIHBhcmEgbXVsdGlwbGVzIHJlbmRlcmluZyBkZSBsYSBhcHBcclxuY29uc3QgRHJvcHpvbmUgPSAoKSA9PiB7XHJcblxyXG4gICAgLy8gQ29udGV4dCBkZSBsYSBhcHBcclxuICAgIGNvbnN0IEFwcENvbnRleHQgPSB1c2VDb250ZXh0KGFwcENvbnRleHQpO1xyXG4gICAgY29uc3QgeyBjYXJnYW5kbywgbW9zdHJhckFsZXJ0YSwgc3ViaXJBcmNoaXZvLCBjcmVhckVubGFjZcKgfSA9IEFwcENvbnRleHQ7XHJcblxyXG4gICAgLy8gQ29udGV4dCBkZSBhdXRlbnRpY2FjacOzblxyXG4gICAgY29uc3QgQXV0aENvbnRleHQgPSB1c2VDb250ZXh0KGF1dGhDb250ZXh0KTtcclxuICAgIGNvbnN0IHsgdXN1YXJpbywgYXV0ZW50aWNhZG/CoH0gPSBBdXRoQ29udGV4dDtcclxuXHJcbiAgICBjb25zdCBvbkRyb3BSZWplY3RlZCA9ICgpID0+IHtcclxuICAgICAgICBtb3N0cmFyQWxlcnRhKCdObyBzZSBwdWRvIHN1YmlyLCBlbCBMaW1pdGUgZXMgMU1CLCBvYnRlbiB1bmEgY3VlbnRhIGdyYXRpcyBwYXJhIHN1YmlyIGFyY2hpdm9zIG3DoXMgZ3JhbmRlcycpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IG9uRHJvcEFjY2VwdGVkID0gdXNlQ2FsbGJhY2soIGFzeW5jIChhY2NlcHRlZEZpbGVzKSA9PiB7XHJcbiAgICAgICAgLy8gQ3JlYXIgdW4gZm9ybSBEYXRhXHJcbiAgICAgICAgY29uc3QgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoKTtcclxuICAgICAgICAvL2NyZWEgZWwgZm9ybWRhdGFcclxuICAgICAgICBmb3JtRGF0YS5hcHBlbmQoJ2FyY2hpdm8nLCBhY2NlcHRlZEZpbGVzWzBdKTtcclxuXHJcbiAgICAgICAgc3ViaXJBcmNoaXZvKGZvcm1EYXRhLCBhY2NlcHRlZEZpbGVzWzBdLnBhdGgpO1xyXG4gICAgfSwgW10pO1xyXG5cclxuXHJcbiAgICBjb25zdCBtYXhTaXplID0gYXV0ZW50aWNhZG8gPyAxMDAwMDAwMDAwMDAwIDogMTAwMDAwMDtcclxuXHJcbiAgICAvLyBFeHRyYWVyIGNvbnRlbmlkbyBkZSBEcm9wem9uZVxyXG4gICAgY29uc3QgeyBnZXRSb290UHJvcHMsIGdldElucHV0UHJvcHMsIGlzRHJhZ0FjdGl2ZSwgYWNjZXB0ZWRGaWxlcyB9ID0gdXNlRHJvcHpvbmUoe29uRHJvcEFjY2VwdGVkLCBvbkRyb3BSZWplY3RlZCwgbWF4U2l6ZX0pO1xyXG5cclxuICAgIGNvbnN0IGFyY2hpdm9zID0gYWNjZXB0ZWRGaWxlcy5tYXAoIGFyY2hpdm8gPT4gKFxyXG4gICAgICAgIDxsaSBrZXk9e2FyY2hpdm8ubGFzdE1vZGlmaWVkfSBjbGFzc05hbWU9XCJcIj5cclxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiXCI+e2FyY2hpdm8ucGF0aH08L3A+IFxyXG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJcIj57XHJcbiAgICAgICAgICAgIC8vbW9zdHJhciBlbiBNQlxyXG4gICAgICAgICAgICAoYXJjaGl2by5zaXplIC8gTWF0aC5wb3coMTAyNCwgMikpLnRvRml4ZWQoMikgfSBNQjwvcD5cclxuICAgICAgICA8L2xpPlxyXG4gICAgKSApO1xyXG5cclxuXHJcblxyXG5cclxuICAgIHJldHVybiAoIFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiXCI+XHJcbjxici8+XHJcbiAgICAgICAgICAgICAgICAgICAgPGJyLz5cclxuICAgICAgICAgICAgeyBcclxuICAgICAgICAgICAgLy9TaSB0ZW5nbyB5YSB1biBhcmNoaXZvIHN1Ymlkbywgc2UgbW9zdHJhcmEgZWwgbGlzdGFkbyBkZSBhcmNoaXZvcyBwYXJhIHBvbmVybGUgY29uZmlndXJhY2lvblxyXG4gICAgICAgICAgICAvL2VuIGNhc28gY29udHJhcmlvLCBzdWJpciB1biBhcmNoaXZvXHJcbiAgICAgICAgICAgIGFjY2VwdGVkRmlsZXMubGVuZ3RoID4gMCA/IChcclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiIHRleHQtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgPGg0IGNsYXNzTmFtZT1cImhlYWRsaW5lXCI+QXJjaGl2b3M8L2g0PlxyXG4gICAgICAgICAgICAgICAgICAgIDx1bD5cclxuICAgICAgICAgICAgICAgICAgICAgICAge2FyY2hpdm9zfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvdWw+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYXV0ZW50aWNhZG8gPyA8Rm9ybXVsYXJpbyAvPiA6IFwiXCJcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICB7IC8vc3Bpbm5lciAgXHJcbiAgICAgICAgICAgICAgICAgICAgIGNhcmdhbmRvID8gPHAgY2xhc3NOYW1lPVwiXCI+U3ViaWVuZG8gQXJjaGl2by4uLjwvcD4gOiAoXHJcbiAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJwYXBlci1idG4gYnRuLWJsb2NrIGJ1dHRvblwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsgKCkgPT4gY3JlYXJFbmxhY2UoKSAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBDcmVhciBFbmxhY2VcclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgKX1cclxuXHJcblxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgICAgPGRpdiB7IC4uLmdldFJvb3RQcm9wcyh7IGNsYXNzTmFtZTogJ2Ryb3B6b25lICBwYXBlciBjb250YWluZXItbGcgY2FyZCBhbmNob3IgYWxpZ24tbWlkZGxlIHBhZGRpbmctbGVmdC1sYXJnZScgIH0pIH0+XHJcbiAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJvcmRlci1kb3R0ZWQgYm9yZGVyLXRoaWNrIG1hcmdpbi10b3Atc21hbGwgcGFkZGluZy1sZWZ0LWxhcmdlIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmctcmlnaHQtbGFyZ2UgcGFkZGluZy10b3AtbGFyZ2UgcGFkZGluZy1ib3R0b20tbGFyZ2VcIj5cclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgY2xhc3NOYW1lPVwiY2FyZC1ib2R5XCIgeyAuLi5nZXRJbnB1dFByb3BzKCkgfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpc0RyYWdBY3RpdmUgPyA8cCBjbGFzc05hbWU9XCJcIj4gU3VlbHRhIGVsIGFyY2hpdm8gPC9wPiA6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImJ1dHRvbi10ZXh0XCI+U2VsZWNjaW9uYSB1biBhcmNoaXZvIHkgYXJyYXN0cmFsbyBhcXXDrTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cInBhcGVyLWJ0biBidG4tYmxvY2sgYnV0dG9uXCIgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBTZWxlY2Npb25hIGFyY2hpdm9zIHBhcmEgc3ViaXJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICkgfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICk7XHJcbn1cclxuIFxyXG5leHBvcnQgZGVmYXVsdCBEcm9wem9uZTsiXSwic291cmNlUm9vdCI6IiJ9