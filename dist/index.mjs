var ji = Object.defineProperty;
var _i = (e, t, r) => t in e ? ji(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[t] = r;
var _ = (e, t, r) => (_i(e, typeof t != "symbol" ? t + "" : t, r), r);
import * as se from "react";
import O, { useLayoutEffect as Ei, useRef as Si, useCallback as Ci, createElement as Ne } from "react";
var ie = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function wi(e) {
  if (e.__esModule)
    return e;
  var t = e.default;
  if (typeof t == "function") {
    var r = function n() {
      return this instanceof n ? Reflect.construct(t, arguments, this.constructor) : t.apply(this, arguments);
    };
    r.prototype = t.prototype;
  } else
    r = {};
  return Object.defineProperty(r, "__esModule", { value: !0 }), Object.keys(e).forEach(function(n) {
    var a = Object.getOwnPropertyDescriptor(e, n);
    Object.defineProperty(r, n, a.get ? a : {
      enumerable: !0,
      get: function() {
        return e[n];
      }
    });
  }), r;
}
var or = { exports: {} }, Me = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var mn;
function Oi() {
  if (mn)
    return Me;
  mn = 1;
  var e = O, t = Symbol.for("react.element"), r = Symbol.for("react.fragment"), n = Object.prototype.hasOwnProperty, a = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, s = { key: !0, ref: !0, __self: !0, __source: !0 };
  function i(l, u, f) {
    var h, p = {}, g = null, m = null;
    f !== void 0 && (g = "" + f), u.key !== void 0 && (g = "" + u.key), u.ref !== void 0 && (m = u.ref);
    for (h in u)
      n.call(u, h) && !s.hasOwnProperty(h) && (p[h] = u[h]);
    if (l && l.defaultProps)
      for (h in u = l.defaultProps, u)
        p[h] === void 0 && (p[h] = u[h]);
    return { $$typeof: t, type: l, key: g, ref: m, props: p, _owner: a.current };
  }
  return Me.Fragment = r, Me.jsx = i, Me.jsxs = i, Me;
}
var $e = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var xn;
function Ri() {
  return xn || (xn = 1, process.env.NODE_ENV !== "production" && function() {
    var e = O, t = Symbol.for("react.element"), r = Symbol.for("react.portal"), n = Symbol.for("react.fragment"), a = Symbol.for("react.strict_mode"), s = Symbol.for("react.profiler"), i = Symbol.for("react.provider"), l = Symbol.for("react.context"), u = Symbol.for("react.forward_ref"), f = Symbol.for("react.suspense"), h = Symbol.for("react.suspense_list"), p = Symbol.for("react.memo"), g = Symbol.for("react.lazy"), m = Symbol.for("react.offscreen"), E = Symbol.iterator, C = "@@iterator";
    function x(o) {
      if (o === null || typeof o != "object")
        return null;
      var d = E && o[E] || o[C];
      return typeof d == "function" ? d : null;
    }
    var P = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function S(o) {
      {
        for (var d = arguments.length, y = new Array(d > 1 ? d - 1 : 0), j = 1; j < d; j++)
          y[j - 1] = arguments[j];
        T("error", o, y);
      }
    }
    function T(o, d, y) {
      {
        var j = P.ReactDebugCurrentFrame, A = j.getStackAddendum();
        A !== "" && (d += "%s", y = y.concat([A]));
        var F = y.map(function(R) {
          return String(R);
        });
        F.unshift("Warning: " + d), Function.prototype.apply.call(console[o], console, F);
      }
    }
    var J = !1, je = !1, ae = !1, _e = !1, ke = !1, Gr;
    Gr = Symbol.for("react.module.reference");
    function Gs(o) {
      return !!(typeof o == "string" || typeof o == "function" || o === n || o === s || ke || o === a || o === f || o === h || _e || o === m || J || je || ae || typeof o == "object" && o !== null && (o.$$typeof === g || o.$$typeof === p || o.$$typeof === i || o.$$typeof === l || o.$$typeof === u || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      o.$$typeof === Gr || o.getModuleId !== void 0));
    }
    function Ys(o, d, y) {
      var j = o.displayName;
      if (j)
        return j;
      var A = d.displayName || d.name || "";
      return A !== "" ? y + "(" + A + ")" : y;
    }
    function Yr(o) {
      return o.displayName || "Context";
    }
    function ee(o) {
      if (o == null)
        return null;
      if (typeof o.tag == "number" && S("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof o == "function")
        return o.displayName || o.name || null;
      if (typeof o == "string")
        return o;
      switch (o) {
        case n:
          return "Fragment";
        case r:
          return "Portal";
        case s:
          return "Profiler";
        case a:
          return "StrictMode";
        case f:
          return "Suspense";
        case h:
          return "SuspenseList";
      }
      if (typeof o == "object")
        switch (o.$$typeof) {
          case l:
            var d = o;
            return Yr(d) + ".Consumer";
          case i:
            var y = o;
            return Yr(y._context) + ".Provider";
          case u:
            return Ys(o, o.render, "ForwardRef");
          case p:
            var j = o.displayName || null;
            return j !== null ? j : ee(o.type) || "Memo";
          case g: {
            var A = o, F = A._payload, R = A._init;
            try {
              return ee(R(F));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var ue = Object.assign, De = 0, Jr, Xr, Zr, Qr, en, tn, rn;
    function nn() {
    }
    nn.__reactDisabledLog = !0;
    function Js() {
      {
        if (De === 0) {
          Jr = console.log, Xr = console.info, Zr = console.warn, Qr = console.error, en = console.group, tn = console.groupCollapsed, rn = console.groupEnd;
          var o = {
            configurable: !0,
            enumerable: !0,
            value: nn,
            writable: !0
          };
          Object.defineProperties(console, {
            info: o,
            log: o,
            warn: o,
            error: o,
            group: o,
            groupCollapsed: o,
            groupEnd: o
          });
        }
        De++;
      }
    }
    function Xs() {
      {
        if (De--, De === 0) {
          var o = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: ue({}, o, {
              value: Jr
            }),
            info: ue({}, o, {
              value: Xr
            }),
            warn: ue({}, o, {
              value: Zr
            }),
            error: ue({}, o, {
              value: Qr
            }),
            group: ue({}, o, {
              value: en
            }),
            groupCollapsed: ue({}, o, {
              value: tn
            }),
            groupEnd: ue({}, o, {
              value: rn
            })
          });
        }
        De < 0 && S("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var Dt = P.ReactCurrentDispatcher, Lt;
    function rt(o, d, y) {
      {
        if (Lt === void 0)
          try {
            throw Error();
          } catch (A) {
            var j = A.stack.trim().match(/\n( *(at )?)/);
            Lt = j && j[1] || "";
          }
        return `
` + Lt + o;
      }
    }
    var Mt = !1, nt;
    {
      var Zs = typeof WeakMap == "function" ? WeakMap : Map;
      nt = new Zs();
    }
    function an(o, d) {
      if (!o || Mt)
        return "";
      {
        var y = nt.get(o);
        if (y !== void 0)
          return y;
      }
      var j;
      Mt = !0;
      var A = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var F;
      F = Dt.current, Dt.current = null, Js();
      try {
        if (d) {
          var R = function() {
            throw Error();
          };
          if (Object.defineProperty(R.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(R, []);
            } catch (te) {
              j = te;
            }
            Reflect.construct(o, [], R);
          } else {
            try {
              R.call();
            } catch (te) {
              j = te;
            }
            o.call(R.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (te) {
            j = te;
          }
          o();
        }
      } catch (te) {
        if (te && j && typeof te.stack == "string") {
          for (var w = te.stack.split(`
`), N = j.stack.split(`
`), k = w.length - 1, D = N.length - 1; k >= 1 && D >= 0 && w[k] !== N[D]; )
            D--;
          for (; k >= 1 && D >= 0; k--, D--)
            if (w[k] !== N[D]) {
              if (k !== 1 || D !== 1)
                do
                  if (k--, D--, D < 0 || w[k] !== N[D]) {
                    var H = `
` + w[k].replace(" at new ", " at ");
                    return o.displayName && H.includes("<anonymous>") && (H = H.replace("<anonymous>", o.displayName)), typeof o == "function" && nt.set(o, H), H;
                  }
                while (k >= 1 && D >= 0);
              break;
            }
        }
      } finally {
        Mt = !1, Dt.current = F, Xs(), Error.prepareStackTrace = A;
      }
      var Se = o ? o.displayName || o.name : "", yn = Se ? rt(Se) : "";
      return typeof o == "function" && nt.set(o, yn), yn;
    }
    function Qs(o, d, y) {
      return an(o, !1);
    }
    function ei(o) {
      var d = o.prototype;
      return !!(d && d.isReactComponent);
    }
    function at(o, d, y) {
      if (o == null)
        return "";
      if (typeof o == "function")
        return an(o, ei(o));
      if (typeof o == "string")
        return rt(o);
      switch (o) {
        case f:
          return rt("Suspense");
        case h:
          return rt("SuspenseList");
      }
      if (typeof o == "object")
        switch (o.$$typeof) {
          case u:
            return Qs(o.render);
          case p:
            return at(o.type, d, y);
          case g: {
            var j = o, A = j._payload, F = j._init;
            try {
              return at(F(A), d, y);
            } catch {
            }
          }
        }
      return "";
    }
    var st = Object.prototype.hasOwnProperty, sn = {}, on = P.ReactDebugCurrentFrame;
    function it(o) {
      if (o) {
        var d = o._owner, y = at(o.type, o._source, d ? d.type : null);
        on.setExtraStackFrame(y);
      } else
        on.setExtraStackFrame(null);
    }
    function ti(o, d, y, j, A) {
      {
        var F = Function.call.bind(st);
        for (var R in o)
          if (F(o, R)) {
            var w = void 0;
            try {
              if (typeof o[R] != "function") {
                var N = Error((j || "React class") + ": " + y + " type `" + R + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof o[R] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw N.name = "Invariant Violation", N;
              }
              w = o[R](d, R, j, y, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (k) {
              w = k;
            }
            w && !(w instanceof Error) && (it(A), S("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", j || "React class", y, R, typeof w), it(null)), w instanceof Error && !(w.message in sn) && (sn[w.message] = !0, it(A), S("Failed %s type: %s", y, w.message), it(null));
          }
      }
    }
    var ri = Array.isArray;
    function $t(o) {
      return ri(o);
    }
    function ni(o) {
      {
        var d = typeof Symbol == "function" && Symbol.toStringTag, y = d && o[Symbol.toStringTag] || o.constructor.name || "Object";
        return y;
      }
    }
    function ai(o) {
      try {
        return cn(o), !1;
      } catch {
        return !0;
      }
    }
    function cn(o) {
      return "" + o;
    }
    function ln(o) {
      if (ai(o))
        return S("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", ni(o)), cn(o);
    }
    var Le = P.ReactCurrentOwner, si = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, un, dn, Bt;
    Bt = {};
    function ii(o) {
      if (st.call(o, "ref")) {
        var d = Object.getOwnPropertyDescriptor(o, "ref").get;
        if (d && d.isReactWarning)
          return !1;
      }
      return o.ref !== void 0;
    }
    function oi(o) {
      if (st.call(o, "key")) {
        var d = Object.getOwnPropertyDescriptor(o, "key").get;
        if (d && d.isReactWarning)
          return !1;
      }
      return o.key !== void 0;
    }
    function ci(o, d) {
      if (typeof o.ref == "string" && Le.current && d && Le.current.stateNode !== d) {
        var y = ee(Le.current.type);
        Bt[y] || (S('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', ee(Le.current.type), o.ref), Bt[y] = !0);
      }
    }
    function li(o, d) {
      {
        var y = function() {
          un || (un = !0, S("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", d));
        };
        y.isReactWarning = !0, Object.defineProperty(o, "key", {
          get: y,
          configurable: !0
        });
      }
    }
    function ui(o, d) {
      {
        var y = function() {
          dn || (dn = !0, S("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", d));
        };
        y.isReactWarning = !0, Object.defineProperty(o, "ref", {
          get: y,
          configurable: !0
        });
      }
    }
    var di = function(o, d, y, j, A, F, R) {
      var w = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: t,
        // Built-in properties that belong on the element
        type: o,
        key: d,
        ref: y,
        props: R,
        // Record the component responsible for creating this element.
        _owner: F
      };
      return w._store = {}, Object.defineProperty(w._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(w, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: j
      }), Object.defineProperty(w, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: A
      }), Object.freeze && (Object.freeze(w.props), Object.freeze(w)), w;
    };
    function fi(o, d, y, j, A) {
      {
        var F, R = {}, w = null, N = null;
        y !== void 0 && (ln(y), w = "" + y), oi(d) && (ln(d.key), w = "" + d.key), ii(d) && (N = d.ref, ci(d, A));
        for (F in d)
          st.call(d, F) && !si.hasOwnProperty(F) && (R[F] = d[F]);
        if (o && o.defaultProps) {
          var k = o.defaultProps;
          for (F in k)
            R[F] === void 0 && (R[F] = k[F]);
        }
        if (w || N) {
          var D = typeof o == "function" ? o.displayName || o.name || "Unknown" : o;
          w && li(R, D), N && ui(R, D);
        }
        return di(o, w, N, A, j, Le.current, R);
      }
    }
    var Nt = P.ReactCurrentOwner, fn = P.ReactDebugCurrentFrame;
    function Ee(o) {
      if (o) {
        var d = o._owner, y = at(o.type, o._source, d ? d.type : null);
        fn.setExtraStackFrame(y);
      } else
        fn.setExtraStackFrame(null);
    }
    var zt;
    zt = !1;
    function Vt(o) {
      return typeof o == "object" && o !== null && o.$$typeof === t;
    }
    function pn() {
      {
        if (Nt.current) {
          var o = ee(Nt.current.type);
          if (o)
            return `

Check the render method of \`` + o + "`.";
        }
        return "";
      }
    }
    function pi(o) {
      {
        if (o !== void 0) {
          var d = o.fileName.replace(/^.*[\\\/]/, ""), y = o.lineNumber;
          return `

Check your code at ` + d + ":" + y + ".";
        }
        return "";
      }
    }
    var bn = {};
    function bi(o) {
      {
        var d = pn();
        if (!d) {
          var y = typeof o == "string" ? o : o.displayName || o.name;
          y && (d = `

Check the top-level render call using <` + y + ">.");
        }
        return d;
      }
    }
    function hn(o, d) {
      {
        if (!o._store || o._store.validated || o.key != null)
          return;
        o._store.validated = !0;
        var y = bi(d);
        if (bn[y])
          return;
        bn[y] = !0;
        var j = "";
        o && o._owner && o._owner !== Nt.current && (j = " It was passed a child from " + ee(o._owner.type) + "."), Ee(o), S('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', y, j), Ee(null);
      }
    }
    function vn(o, d) {
      {
        if (typeof o != "object")
          return;
        if ($t(o))
          for (var y = 0; y < o.length; y++) {
            var j = o[y];
            Vt(j) && hn(j, d);
          }
        else if (Vt(o))
          o._store && (o._store.validated = !0);
        else if (o) {
          var A = x(o);
          if (typeof A == "function" && A !== o.entries)
            for (var F = A.call(o), R; !(R = F.next()).done; )
              Vt(R.value) && hn(R.value, d);
        }
      }
    }
    function hi(o) {
      {
        var d = o.type;
        if (d == null || typeof d == "string")
          return;
        var y;
        if (typeof d == "function")
          y = d.propTypes;
        else if (typeof d == "object" && (d.$$typeof === u || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        d.$$typeof === p))
          y = d.propTypes;
        else
          return;
        if (y) {
          var j = ee(d);
          ti(y, o.props, "prop", j, o);
        } else if (d.PropTypes !== void 0 && !zt) {
          zt = !0;
          var A = ee(d);
          S("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", A || "Unknown");
        }
        typeof d.getDefaultProps == "function" && !d.getDefaultProps.isReactClassApproved && S("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function vi(o) {
      {
        for (var d = Object.keys(o.props), y = 0; y < d.length; y++) {
          var j = d[y];
          if (j !== "children" && j !== "key") {
            Ee(o), S("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", j), Ee(null);
            break;
          }
        }
        o.ref !== null && (Ee(o), S("Invalid attribute `ref` supplied to `React.Fragment`."), Ee(null));
      }
    }
    function gn(o, d, y, j, A, F) {
      {
        var R = Gs(o);
        if (!R) {
          var w = "";
          (o === void 0 || typeof o == "object" && o !== null && Object.keys(o).length === 0) && (w += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var N = pi(A);
          N ? w += N : w += pn();
          var k;
          o === null ? k = "null" : $t(o) ? k = "array" : o !== void 0 && o.$$typeof === t ? (k = "<" + (ee(o.type) || "Unknown") + " />", w = " Did you accidentally export a JSX literal instead of a component?") : k = typeof o, S("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", k, w);
        }
        var D = fi(o, d, y, A, F);
        if (D == null)
          return D;
        if (R) {
          var H = d.children;
          if (H !== void 0)
            if (j)
              if ($t(H)) {
                for (var Se = 0; Se < H.length; Se++)
                  vn(H[Se], o);
                Object.freeze && Object.freeze(H);
              } else
                S("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              vn(H, o);
        }
        return o === n ? vi(D) : hi(D), D;
      }
    }
    function gi(o, d, y) {
      return gn(o, d, y, !0);
    }
    function yi(o, d, y) {
      return gn(o, d, y, !1);
    }
    var mi = yi, xi = gi;
    $e.Fragment = n, $e.jsx = mi, $e.jsxs = xi;
  }()), $e;
}
process.env.NODE_ENV === "production" ? or.exports = Oi() : or.exports = Ri();
var c = or.exports;
function Fa() {
  var e = this.constructor.getDerivedStateFromProps(this.props, this.state);
  e != null && this.setState(e);
}
function ka(e) {
  function t(r) {
    var n = this.constructor.getDerivedStateFromProps(e, r);
    return n ?? null;
  }
  this.setState(t.bind(this));
}
function Da(e, t) {
  try {
    var r = this.props, n = this.state;
    this.props = e, this.state = t, this.__reactInternalSnapshotFlag = !0, this.__reactInternalSnapshot = this.getSnapshotBeforeUpdate(
      r,
      n
    );
  } finally {
    this.props = r, this.state = n;
  }
}
Fa.__suppressDeprecationWarning = !0;
ka.__suppressDeprecationWarning = !0;
Da.__suppressDeprecationWarning = !0;
function La(e) {
  var t = e.prototype;
  if (!t || !t.isReactComponent)
    throw new Error("Can only polyfill class components");
  if (typeof e.getDerivedStateFromProps != "function" && typeof t.getSnapshotBeforeUpdate != "function")
    return e;
  var r = null, n = null, a = null;
  if (typeof t.componentWillMount == "function" ? r = "componentWillMount" : typeof t.UNSAFE_componentWillMount == "function" && (r = "UNSAFE_componentWillMount"), typeof t.componentWillReceiveProps == "function" ? n = "componentWillReceiveProps" : typeof t.UNSAFE_componentWillReceiveProps == "function" && (n = "UNSAFE_componentWillReceiveProps"), typeof t.componentWillUpdate == "function" ? a = "componentWillUpdate" : typeof t.UNSAFE_componentWillUpdate == "function" && (a = "UNSAFE_componentWillUpdate"), r !== null || n !== null || a !== null) {
    var s = e.displayName || e.name, i = typeof e.getDerivedStateFromProps == "function" ? "getDerivedStateFromProps()" : "getSnapshotBeforeUpdate()";
    throw Error(
      `Unsafe legacy lifecycles will not be called for components using new component APIs.

` + s + " uses " + i + " but also contains the following legacy lifecycles:" + (r !== null ? `
  ` + r : "") + (n !== null ? `
  ` + n : "") + (a !== null ? `
  ` + a : "") + `

The above lifecycles should be removed. Learn more about this warning here:
https://fb.me/react-async-component-lifecycle-hooks`
    );
  }
  if (typeof e.getDerivedStateFromProps == "function" && (t.componentWillMount = Fa, t.componentWillReceiveProps = ka), typeof t.getSnapshotBeforeUpdate == "function") {
    if (typeof t.componentDidUpdate != "function")
      throw new Error(
        "Cannot polyfill getSnapshotBeforeUpdate() for components that do not define componentDidUpdate() on the prototype"
      );
    t.componentWillUpdate = Da;
    var l = t.componentDidUpdate;
    t.componentDidUpdate = function(f, h, p) {
      var g = this.__reactInternalSnapshotFlag ? this.__reactInternalSnapshot : p;
      l.call(this, f, h, g);
    };
  }
  return e;
}
function K(e) {
  let t = Ai(e);
  return t === "number" && (isNaN(e) ? t = "nan" : (e | 0) != e ? t = "float" : t = "integer"), t;
}
function Ai(e) {
  return {}.toString.call(e).match(/\s([a-zA-Z]+)/)[1].toLowerCase();
}
function Pi(e) {
  const t = [
    "base00",
    "base01",
    "base02",
    "base03",
    "base04",
    "base05",
    "base06",
    "base07",
    "base08",
    "base09",
    "base0A",
    "base0B",
    "base0C",
    "base0D",
    "base0E",
    "base0F"
  ];
  if (K(e) === "object") {
    for (var r = 0; r < t.length; r++)
      if (!(t[r] in e))
        return !1;
    return !0;
  }
  return !1;
}
const Ii = {
  scheme: "rjv-default",
  author: "mac gainor",
  //transparent main background
  base00: "rgba(0, 0, 0, 0)",
  base01: "rgb(245, 245, 245)",
  base02: "rgb(235, 235, 235)",
  base03: "#93a1a1",
  base04: "rgba(0, 0, 0, 0.3)",
  base05: "#586e75",
  base06: "#073642",
  base07: "#002b36",
  base08: "#d33682",
  base09: "#cb4b16",
  base0A: "#dc322f",
  base0B: "#859900",
  base0C: "#6c71c4",
  base0D: "#586e75",
  base0E: "#2aa198",
  base0F: "#268bd2"
}, Ti = {
  scheme: "rjv-grey",
  author: "mac gainor",
  base00: "rgba(1, 1, 1, 0)",
  base01: "rgba(1, 1, 1, 0.1)",
  base02: "rgba(0, 0, 0, 0.2)",
  base03: "rgba(1, 1, 1, 0.3)",
  base04: "rgba(0, 0, 0, 0.4)",
  base05: "rgba(1, 1, 1, 0.5)",
  base06: "rgba(1, 1, 1, 0.6)",
  base07: "rgba(1, 1, 1, 0.7)",
  base08: "rgba(1, 1, 1, 0.8)",
  base09: "rgba(1, 1, 1, 0.8)",
  base0A: "rgba(1, 1, 1, 0.8)",
  base0B: "rgba(1, 1, 1, 0.8)",
  base0C: "rgba(1, 1, 1, 0.8)",
  base0D: "rgba(1, 1, 1, 0.8)",
  base0E: "rgba(1, 1, 1, 0.8)",
  base0F: "rgba(1, 1, 1, 0.8)"
}, b = {
  white: "#fff",
  black: "#000",
  transparent: "rgba(1, 1, 1, 0)",
  globalFontFamily: "monospace",
  globalCursor: "default",
  indentBlockWidth: "5px",
  braceFontWeight: "bold",
  braceCursor: "pointer",
  ellipsisFontSize: "18px",
  ellipsisLineHeight: "10px",
  ellipsisCursor: "pointer",
  keyMargin: "0px 5px",
  keyLetterSpacing: "0.5px",
  keyFontStyle: "none",
  keyBorderRadius: "3px",
  keyColonWeight: "bold",
  keyVerticalAlign: "top",
  keyOpacity: "0.85",
  keyOpacityHover: "1",
  keyValPaddingTop: "3px",
  keyValPaddingBottom: "3px",
  keyValPaddingRight: "5px",
  keyValBorderLeft: "1px solid",
  keyValBorderHover: "2px solid",
  keyValPaddingHover: "3px 5px 3px 4px",
  pushedContentMarginLeft: "6px",
  variableValuePaddingRight: "6px",
  nullFontSize: "11px",
  nullFontWeight: "bold",
  nullPadding: "1px 2px",
  nullBorderRadius: "3px",
  nanFontSize: "11px",
  nanFontWeight: "bold",
  nanPadding: "1px 2px",
  nanBorderRadius: "3px",
  undefinedFontSize: "11px",
  undefinedFontWeight: "bold",
  undefinedPadding: "1px 2px",
  undefinedBorderRadius: "3px",
  dataTypeFontSize: "11px",
  dataTypeMarginRight: "4px",
  datatypeOpacity: "0.8",
  objectSizeBorderRadius: "3px",
  objectSizeFontStyle: "italic",
  objectSizeMargin: "0px 6px 0px 0px",
  clipboardCursor: "pointer",
  clipboardCheckMarginLeft: "-12px",
  metaDataPadding: "0px 0px 0px 10px",
  arrayGroupMetaPadding: "0px 0px 0px 4px",
  iconContainerWidth: "17px",
  tooltipPadding: "4px",
  editInputMinWidth: "130px",
  editInputBorderRadius: "2px",
  editInputPadding: "5px",
  editInputMarginRight: "4px",
  editInputFontFamily: "monospace",
  iconCursor: "pointer",
  iconFontSize: "15px",
  iconPaddingRight: "1px",
  dateValueMarginLeft: "2px",
  iconMarginRight: "3px",
  detectedRowPaddingTop: "3px",
  addKeyCoverBackground: "rgba(255, 255, 255, 0.3)",
  addKeyCoverPosition: "absolute",
  addKeyCoverPositionPx: "0px",
  addKeyModalWidth: "200px",
  addKeyModalMargin: "auto",
  addKeyModalPadding: "10px",
  addKeyModalRadius: "3px"
};
var fe = {}, Er = {}, Fi = Math.ceil, ki = Math.floor, Sr = function(e) {
  return isNaN(e = +e) ? 0 : (e > 0 ? ki : Fi)(e);
}, Cr = function(e) {
  if (e == null)
    throw TypeError("Can't call method on  " + e);
  return e;
}, Di = Sr, Li = Cr, Mi = function(e) {
  return function(t, r) {
    var n = String(Li(t)), a = Di(r), s = n.length, i, l;
    return a < 0 || a >= s ? e ? "" : void 0 : (i = n.charCodeAt(a), i < 55296 || i > 56319 || a + 1 === s || (l = n.charCodeAt(a + 1)) < 56320 || l > 57343 ? e ? n.charAt(a) : i : e ? n.slice(a, a + 2) : (i - 55296 << 10) + (l - 56320) + 65536);
  };
}, $i = !0, Ma = { exports: {} }, Bi = Ma.exports = typeof window < "u" && window.Math == Math ? window : typeof self < "u" && self.Math == Math ? self : Function("return this")();
typeof __g == "number" && (__g = Bi);
var ve = Ma.exports, $a = { exports: {} }, Ni = $a.exports = { version: "2.6.12" };
typeof __e == "number" && (__e = Ni);
var Q = $a.exports, zi = function(e) {
  if (typeof e != "function")
    throw TypeError(e + " is not a function!");
  return e;
}, Vi = zi, qi = function(e, t, r) {
  if (Vi(e), t === void 0)
    return e;
  switch (r) {
    case 1:
      return function(n) {
        return e.call(t, n);
      };
    case 2:
      return function(n, a) {
        return e.call(t, n, a);
      };
    case 3:
      return function(n, a, s) {
        return e.call(t, n, a, s);
      };
  }
  return function() {
    return e.apply(t, arguments);
  };
}, ge = {}, Ue = function(e) {
  return typeof e == "object" ? e !== null : typeof e == "function";
}, Wi = Ue, Ge = function(e) {
  if (!Wi(e))
    throw TypeError(e + " is not an object!");
  return e;
}, Pe = function(e) {
  try {
    return !!e();
  } catch {
    return !0;
  }
}, ye = !Pe(function() {
  return Object.defineProperty({}, "a", { get: function() {
    return 7;
  } }).a != 7;
}), qt, jn;
function Ba() {
  if (jn)
    return qt;
  jn = 1;
  var e = Ue, t = ve.document, r = e(t) && e(t.createElement);
  return qt = function(n) {
    return r ? t.createElement(n) : {};
  }, qt;
}
var Na = !ye && !Pe(function() {
  return Object.defineProperty(Ba()("div"), "a", { get: function() {
    return 7;
  } }).a != 7;
}), ot = Ue, wr = function(e, t) {
  if (!ot(e))
    return e;
  var r, n;
  if (t && typeof (r = e.toString) == "function" && !ot(n = r.call(e)) || typeof (r = e.valueOf) == "function" && !ot(n = r.call(e)) || !t && typeof (r = e.toString) == "function" && !ot(n = r.call(e)))
    return n;
  throw TypeError("Can't convert object to primitive value");
}, _n = Ge, Ki = Na, Hi = wr, Ui = Object.defineProperty;
ge.f = ye ? Object.defineProperty : function(t, r, n) {
  if (_n(t), r = Hi(r, !0), _n(n), Ki)
    try {
      return Ui(t, r, n);
    } catch {
    }
  if ("get" in n || "set" in n)
    throw TypeError("Accessors not supported!");
  return "value" in n && (t[r] = n.value), t;
};
var xt = function(e, t) {
  return {
    enumerable: !(e & 1),
    configurable: !(e & 2),
    writable: !(e & 4),
    value: t
  };
}, Gi = ge, Yi = xt, Ie = ye ? function(e, t, r) {
  return Gi.f(e, t, Yi(1, r));
} : function(e, t, r) {
  return e[t] = r, e;
}, Ji = {}.hasOwnProperty, me = function(e, t) {
  return Ji.call(e, t);
}, ct = ve, Wt = Q, En = qi, Xi = Ie, Zi = me, lt = "prototype", M = function(e, t, r) {
  var n = e & M.F, a = e & M.G, s = e & M.S, i = e & M.P, l = e & M.B, u = e & M.W, f = a ? Wt : Wt[t] || (Wt[t] = {}), h = f[lt], p = a ? ct : s ? ct[t] : (ct[t] || {})[lt], g, m, E;
  a && (r = t);
  for (g in r)
    m = !n && p && p[g] !== void 0, !(m && Zi(f, g)) && (E = m ? p[g] : r[g], f[g] = a && typeof p[g] != "function" ? r[g] : l && m ? En(E, ct) : u && p[g] == E ? function(C) {
      var x = function(P, S, T) {
        if (this instanceof C) {
          switch (arguments.length) {
            case 0:
              return new C();
            case 1:
              return new C(P);
            case 2:
              return new C(P, S);
          }
          return new C(P, S, T);
        }
        return C.apply(this, arguments);
      };
      return x[lt] = C[lt], x;
    }(E) : i && typeof E == "function" ? En(Function.call, E) : E, i && ((f.virtual || (f.virtual = {}))[g] = E, e & M.R && h && !h[g] && Xi(h, g, E)));
};
M.F = 1;
M.G = 2;
M.S = 4;
M.P = 8;
M.B = 16;
M.W = 32;
M.U = 64;
M.R = 128;
var jt = M, za = Ie, Ye = {}, Qi = {}.toString, Or = function(e) {
  return Qi.call(e).slice(8, -1);
}, eo = Or, Va = Object("z").propertyIsEnumerable(0) ? Object : function(e) {
  return eo(e) == "String" ? e.split("") : Object(e);
}, to = Va, ro = Cr, Te = function(e) {
  return to(ro(e));
}, no = Sr, ao = Math.min, so = function(e) {
  return e > 0 ? ao(no(e), 9007199254740991) : 0;
}, io = Sr, oo = Math.max, co = Math.min, lo = function(e, t) {
  return e = io(e), e < 0 ? oo(e + t, 0) : co(e, t);
}, uo = Te, fo = so, po = lo, bo = function(e) {
  return function(t, r, n) {
    var a = uo(t), s = fo(a.length), i = po(n, s), l;
    if (e && r != r) {
      for (; s > i; )
        if (l = a[i++], l != l)
          return !0;
    } else
      for (; s > i; i++)
        if ((e || i in a) && a[i] === r)
          return e || i || 0;
    return !e && -1;
  };
}, qa = { exports: {} }, ho = Q, Sn = ve, Cn = "__core-js_shared__", wn = Sn[Cn] || (Sn[Cn] = {});
(qa.exports = function(e, t) {
  return wn[e] || (wn[e] = t !== void 0 ? t : {});
})("versions", []).push({
  version: ho.version,
  mode: "pure",
  copyright: "© 2020 Denis Pushkarev (zloirock.ru)"
});
var Rr = qa.exports, vo = 0, go = Math.random(), _t = function(e) {
  return "Symbol(".concat(e === void 0 ? "" : e, ")_", (++vo + go).toString(36));
}, On = Rr("keys"), yo = _t, Ar = function(e) {
  return On[e] || (On[e] = yo(e));
}, Rn = me, mo = Te, xo = bo(!1), jo = Ar("IE_PROTO"), Wa = function(e, t) {
  var r = mo(e), n = 0, a = [], s;
  for (s in r)
    s != jo && Rn(r, s) && a.push(s);
  for (; t.length > n; )
    Rn(r, s = t[n++]) && (~xo(a, s) || a.push(s));
  return a;
}, Pr = "constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(","), _o = Wa, Eo = Pr, Je = Object.keys || function(t) {
  return _o(t, Eo);
}, So = ge, Co = Ge, wo = Je, Oo = ye ? Object.defineProperties : function(t, r) {
  Co(t);
  for (var n = wo(r), a = n.length, s = 0, i; a > s; )
    So.f(t, i = n[s++], r[i]);
  return t;
}, Kt, An;
function Ro() {
  if (An)
    return Kt;
  An = 1;
  var e = ve.document;
  return Kt = e && e.documentElement, Kt;
}
var Ao = Ge, Po = Oo, Pn = Pr, Io = Ar("IE_PROTO"), Ht = function() {
}, cr = "prototype", bt = function() {
  var e = Ba()("iframe"), t = Pn.length, r = "<", n = ">", a;
  for (e.style.display = "none", Ro().appendChild(e), e.src = "javascript:", a = e.contentWindow.document, a.open(), a.write(r + "script" + n + "document.F=Object" + r + "/script" + n), a.close(), bt = a.F; t--; )
    delete bt[cr][Pn[t]];
  return bt();
}, Ka = Object.create || function(t, r) {
  var n;
  return t !== null ? (Ht[cr] = Ao(t), n = new Ht(), Ht[cr] = null, n[Io] = t) : n = bt(), r === void 0 ? n : Po(n, r);
}, Ha = { exports: {} }, lr = Rr("wks"), To = _t, ur = ve.Symbol, In = typeof ur == "function", Fo = Ha.exports = function(e) {
  return lr[e] || (lr[e] = In && ur[e] || (In ? ur : To)("Symbol." + e));
};
Fo.store = lr;
var ne = Ha.exports, ko = ge.f, Do = me, Tn = ne("toStringTag"), Ir = function(e, t, r) {
  e && !Do(e = r ? e : e.prototype, Tn) && ko(e, Tn, { configurable: !0, value: t });
}, Lo = Ka, Mo = xt, $o = Ir, Ua = {};
Ie(Ua, ne("iterator"), function() {
  return this;
});
var Bo = function(e, t, r) {
  e.prototype = Lo(Ua, { next: Mo(1, r) }), $o(e, t + " Iterator");
}, No = Cr, Et = function(e) {
  return Object(No(e));
}, zo = me, Vo = Et, Fn = Ar("IE_PROTO"), qo = Object.prototype, Wo = Object.getPrototypeOf || function(e) {
  return e = Vo(e), zo(e, Fn) ? e[Fn] : typeof e.constructor == "function" && e instanceof e.constructor ? e.constructor.prototype : e instanceof Object ? qo : null;
}, Ut = jt, Ko = za, Ho = Ie, kn = Ye, Uo = Bo, Go = Ir, Yo = Wo, Gt = ne("iterator"), Yt = !([].keys && "next" in [].keys()), Jo = "@@iterator", Dn = "keys", ut = "values", Xo = function() {
  return this;
}, Ga = function(e, t, r, n, a, s, i) {
  Uo(r, t, n);
  var l = function(T) {
    if (!Yt && T in p)
      return p[T];
    switch (T) {
      case Dn:
        return function() {
          return new r(this, T);
        };
      case ut:
        return function() {
          return new r(this, T);
        };
    }
    return function() {
      return new r(this, T);
    };
  }, u = t + " Iterator", f = a == ut, h = !1, p = e.prototype, g = p[Gt] || p[Jo] || a && p[a], m = g || l(a), E = a ? f ? l("entries") : m : void 0, C = t == "Array" && p.entries || g, x, P, S;
  if (C && (S = Yo(C.call(new e())), S !== Object.prototype && S.next && Go(S, u, !0)), f && g && g.name !== ut && (h = !0, m = function() {
    return g.call(this);
  }), i && (Yt || h || !p[Gt]) && Ho(p, Gt, m), kn[t] = m, kn[u] = Xo, a)
    if (x = {
      values: f ? m : l(ut),
      keys: s ? m : l(Dn),
      entries: E
    }, i)
      for (P in x)
        P in p || Ko(p, P, x[P]);
    else
      Ut(Ut.P + Ut.F * (Yt || h), t, x);
  return x;
}, Zo = Mi(!0);
Ga(String, "String", function(e) {
  this._t = String(e), this._i = 0;
}, function() {
  var e = this._t, t = this._i, r;
  return t >= e.length ? { value: void 0, done: !0 } : (r = Zo(e, t), this._i += r.length, { value: r, done: !1 });
});
var Qo = function(e, t) {
  return { value: t, done: !!e };
}, dt = Qo, Ln = Ye, ec = Te;
Ga(Array, "Array", function(e, t) {
  this._t = ec(e), this._i = 0, this._k = t;
}, function() {
  var e = this._t, t = this._k, r = this._i++;
  return !e || r >= e.length ? (this._t = void 0, dt(1)) : t == "keys" ? dt(0, r) : t == "values" ? dt(0, e[r]) : dt(0, [r, e[r]]);
}, "values");
Ln.Arguments = Ln.Array;
var tc = ve, rc = Ie, Mn = Ye, $n = ne("toStringTag"), Bn = "CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,TextTrackList,TouchList".split(",");
for (var Jt = 0; Jt < Bn.length; Jt++) {
  var Xt = Bn[Jt], Nn = tc[Xt], Zt = Nn && Nn.prototype;
  Zt && !Zt[$n] && rc(Zt, $n, Xt), Mn[Xt] = Mn.Array;
}
var St = {};
St.f = ne;
var nc = St.f("iterator"), ac = { default: nc, __esModule: !0 }, Ya = { exports: {} }, be = _t("meta"), sc = Ue, Tr = me, ic = ge.f, oc = 0, Ct = Object.isExtensible || function() {
  return !0;
}, cc = !Pe(function() {
  return Ct(Object.preventExtensions({}));
}), Fr = function(e) {
  ic(e, be, { value: {
    i: "O" + ++oc,
    // object ID
    w: {}
    // weak collections IDs
  } });
}, lc = function(e, t) {
  if (!sc(e))
    return typeof e == "symbol" ? e : (typeof e == "string" ? "S" : "P") + e;
  if (!Tr(e, be)) {
    if (!Ct(e))
      return "F";
    if (!t)
      return "E";
    Fr(e);
  }
  return e[be].i;
}, uc = function(e, t) {
  if (!Tr(e, be)) {
    if (!Ct(e))
      return !0;
    if (!t)
      return !1;
    Fr(e);
  }
  return e[be].w;
}, dc = function(e) {
  return cc && fc.NEED && Ct(e) && !Tr(e, be) && Fr(e), e;
}, fc = Ya.exports = {
  KEY: be,
  NEED: !1,
  fastKey: lc,
  getWeak: uc,
  onFreeze: dc
}, pc = Ya.exports, zn = Q, bc = St, hc = ge.f, kr = function(e) {
  var t = zn.Symbol || (zn.Symbol = {});
  e.charAt(0) != "_" && !(e in t) && hc(t, e, { value: bc.f(e) });
}, wt = {};
wt.f = Object.getOwnPropertySymbols;
var Xe = {};
Xe.f = {}.propertyIsEnumerable;
var vc = Je, gc = wt, yc = Xe, mc = function(e) {
  var t = vc(e), r = gc.f;
  if (r)
    for (var n = r(e), a = yc.f, s = 0, i; n.length > s; )
      a.call(e, i = n[s++]) && t.push(i);
  return t;
}, xc = Or, jc = Array.isArray || function(t) {
  return xc(t) == "Array";
}, Ja = {}, Dr = {}, _c = Wa, Ec = Pr.concat("length", "prototype");
Dr.f = Object.getOwnPropertyNames || function(t) {
  return _c(t, Ec);
};
var Sc = Te, Xa = Dr.f, Cc = {}.toString, Za = typeof window == "object" && window && Object.getOwnPropertyNames ? Object.getOwnPropertyNames(window) : [], wc = function(e) {
  try {
    return Xa(e);
  } catch {
    return Za.slice();
  }
};
Ja.f = function(t) {
  return Za && Cc.call(t) == "[object Window]" ? wc(t) : Xa(Sc(t));
};
var Qa = {}, Oc = Xe, Rc = xt, Ac = Te, Pc = wr, Ic = me, Tc = Na, Vn = Object.getOwnPropertyDescriptor;
Qa.f = ye ? Vn : function(t, r) {
  if (t = Ac(t), r = Pc(r, !0), Tc)
    try {
      return Vn(t, r);
    } catch {
    }
  if (Ic(t, r))
    return Rc(!Oc.f.call(t, r), t[r]);
};
var Ot = ve, L = me, dr = ye, B = jt, qn = za, Fc = pc.KEY, Lr = Pe, Mr = Rr, $r = Ir, kc = _t, Ze = ne, Dc = St, Lc = kr, Mc = mc, $c = jc, fr = Ge, Bc = Ue, Nc = Et, Rt = Te, Br = wr, pr = xt, qe = Ka, es = Ja, ts = Qa, At = wt, rs = ge, zc = Je, ns = ts.f, de = rs.f, as = es.f, q = Ot.Symbol, vt = Ot.JSON, ft = vt && vt.stringify, ce = "prototype", V = Ze("_hidden"), Wn = Ze("toPrimitive"), Vc = {}.propertyIsEnumerable, Be = Mr("symbol-registry"), re = Mr("symbols"), Qe = Mr("op-symbols"), G = Object[ce], Fe = typeof q == "function" && !!At.f, Qt = Ot.QObject, br = !Qt || !Qt[ce] || !Qt[ce].findChild, hr = dr && Lr(function() {
  return qe(de({}, "a", {
    get: function() {
      return de(this, "a", { value: 7 }).a;
    }
  })).a != 7;
}) ? function(e, t, r) {
  var n = ns(G, t);
  n && delete G[t], de(e, t, r), n && e !== G && de(G, t, n);
} : de, Kn = function(e) {
  var t = re[e] = qe(q[ce]);
  return t._k = e, t;
}, vr = Fe && typeof q.iterator == "symbol" ? function(e) {
  return typeof e == "symbol";
} : function(e) {
  return e instanceof q;
}, Pt = function(t, r, n) {
  return t === G && Pt(Qe, r, n), fr(t), r = Br(r, !0), fr(n), L(re, r) ? (n.enumerable ? (L(t, V) && t[V][r] && (t[V][r] = !1), n = qe(n, { enumerable: pr(0, !1) })) : (L(t, V) || de(t, V, pr(1, {})), t[V][r] = !0), hr(t, r, n)) : de(t, r, n);
}, ss = function(t, r) {
  fr(t);
  for (var n = Mc(r = Rt(r)), a = 0, s = n.length, i; s > a; )
    Pt(t, i = n[a++], r[i]);
  return t;
}, qc = function(t, r) {
  return r === void 0 ? qe(t) : ss(qe(t), r);
}, Hn = function(t) {
  var r = Vc.call(this, t = Br(t, !0));
  return this === G && L(re, t) && !L(Qe, t) ? !1 : r || !L(this, t) || !L(re, t) || L(this, V) && this[V][t] ? r : !0;
}, is = function(t, r) {
  if (t = Rt(t), r = Br(r, !0), !(t === G && L(re, r) && !L(Qe, r))) {
    var n = ns(t, r);
    return n && L(re, r) && !(L(t, V) && t[V][r]) && (n.enumerable = !0), n;
  }
}, os = function(t) {
  for (var r = as(Rt(t)), n = [], a = 0, s; r.length > a; )
    !L(re, s = r[a++]) && s != V && s != Fc && n.push(s);
  return n;
}, cs = function(t) {
  for (var r = t === G, n = as(r ? Qe : Rt(t)), a = [], s = 0, i; n.length > s; )
    L(re, i = n[s++]) && (!r || L(G, i)) && a.push(re[i]);
  return a;
};
Fe || (q = function() {
  if (this instanceof q)
    throw TypeError("Symbol is not a constructor!");
  var t = kc(arguments.length > 0 ? arguments[0] : void 0), r = function(n) {
    this === G && r.call(Qe, n), L(this, V) && L(this[V], t) && (this[V][t] = !1), hr(this, t, pr(1, n));
  };
  return dr && br && hr(G, t, { configurable: !0, set: r }), Kn(t);
}, qn(q[ce], "toString", function() {
  return this._k;
}), ts.f = is, rs.f = Pt, Dr.f = es.f = os, Xe.f = Hn, At.f = cs, dr && !$i && qn(G, "propertyIsEnumerable", Hn), Dc.f = function(e) {
  return Kn(Ze(e));
});
B(B.G + B.W + B.F * !Fe, { Symbol: q });
for (var Un = (
  // 19.4.2.2, 19.4.2.3, 19.4.2.4, 19.4.2.6, 19.4.2.8, 19.4.2.9, 19.4.2.10, 19.4.2.11, 19.4.2.12, 19.4.2.13, 19.4.2.14
  "hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables".split(",")
), Gn = 0; Un.length > Gn; )
  Ze(Un[Gn++]);
for (var Yn = zc(Ze.store), Jn = 0; Yn.length > Jn; )
  Lc(Yn[Jn++]);
B(B.S + B.F * !Fe, "Symbol", {
  // 19.4.2.1 Symbol.for(key)
  for: function(e) {
    return L(Be, e += "") ? Be[e] : Be[e] = q(e);
  },
  // 19.4.2.5 Symbol.keyFor(sym)
  keyFor: function(t) {
    if (!vr(t))
      throw TypeError(t + " is not a symbol!");
    for (var r in Be)
      if (Be[r] === t)
        return r;
  },
  useSetter: function() {
    br = !0;
  },
  useSimple: function() {
    br = !1;
  }
});
B(B.S + B.F * !Fe, "Object", {
  // 19.1.2.2 Object.create(O [, Properties])
  create: qc,
  // 19.1.2.4 Object.defineProperty(O, P, Attributes)
  defineProperty: Pt,
  // 19.1.2.3 Object.defineProperties(O, Properties)
  defineProperties: ss,
  // 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
  getOwnPropertyDescriptor: is,
  // 19.1.2.7 Object.getOwnPropertyNames(O)
  getOwnPropertyNames: os,
  // 19.1.2.8 Object.getOwnPropertySymbols(O)
  getOwnPropertySymbols: cs
});
var Wc = Lr(function() {
  At.f(1);
});
B(B.S + B.F * Wc, "Object", {
  getOwnPropertySymbols: function(t) {
    return At.f(Nc(t));
  }
});
vt && B(B.S + B.F * (!Fe || Lr(function() {
  var e = q();
  return ft([e]) != "[null]" || ft({ a: e }) != "{}" || ft(Object(e)) != "{}";
})), "JSON", {
  stringify: function(t) {
    for (var r = [t], n = 1, a, s; arguments.length > n; )
      r.push(arguments[n++]);
    if (s = a = r[1], !(!Bc(a) && t === void 0 || vr(t)))
      return $c(a) || (a = function(i, l) {
        if (typeof s == "function" && (l = s.call(this, i, l)), !vr(l))
          return l;
      }), r[1] = a, ft.apply(vt, r);
  }
});
q[ce][Wn] || Ie(q[ce], Wn, q[ce].valueOf);
$r(q, "Symbol");
$r(Math, "Math", !0);
$r(Ot.JSON, "JSON", !0);
kr("asyncIterator");
kr("observable");
var Kc = Q.Symbol, Hc = { default: Kc, __esModule: !0 };
Er.__esModule = !0;
var Uc = ac, ls = us(Uc), Gc = Hc, oe = us(Gc), er = typeof oe.default == "function" && typeof ls.default == "symbol" ? function(e) {
  return typeof e;
} : function(e) {
  return e && typeof oe.default == "function" && e.constructor === oe.default && e !== oe.default.prototype ? "symbol" : typeof e;
};
function us(e) {
  return e && e.__esModule ? e : { default: e };
}
Er.default = typeof oe.default == "function" && er(ls.default) === "symbol" ? function(e) {
  return typeof e > "u" ? "undefined" : er(e);
} : function(e) {
  return e && typeof oe.default == "function" && e.constructor === oe.default && e !== oe.default.prototype ? "symbol" : typeof e > "u" ? "undefined" : er(e);
};
var Nr = {}, tr, Xn;
function Yc() {
  if (Xn)
    return tr;
  Xn = 1;
  var e = ye, t = Je, r = wt, n = Xe, a = Et, s = Va, i = Object.assign;
  return tr = !i || Pe(function() {
    var l = {}, u = {}, f = Symbol(), h = "abcdefghijklmnopqrst";
    return l[f] = 7, h.split("").forEach(function(p) {
      u[p] = p;
    }), i({}, l)[f] != 7 || Object.keys(i({}, u)).join("") != h;
  }) ? function(u, f) {
    for (var h = a(u), p = arguments.length, g = 1, m = r.f, E = n.f; p > g; )
      for (var C = s(arguments[g++]), x = m ? t(C).concat(m(C)) : t(C), P = x.length, S = 0, T; P > S; )
        T = x[S++], (!e || E.call(C, T)) && (h[T] = C[T]);
    return h;
  } : i, tr;
}
var rr = jt;
rr(rr.S + rr.F, "Object", { assign: Yc() });
var Jc = Q.Object.assign, Xc = { default: Jc, __esModule: !0 };
Nr.__esModule = !0;
var Zc = Xc, Qc = el(Zc);
function el(e) {
  return e && e.__esModule ? e : { default: e };
}
Nr.default = Qc.default || function(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t];
    for (var n in r)
      Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
  }
  return e;
};
var zr = {}, gr = Or, tl = ne("toStringTag"), rl = gr(function() {
  return arguments;
}()) == "Arguments", nl = function(e, t) {
  try {
    return e[t];
  } catch {
  }
}, ds = function(e) {
  var t, r, n;
  return e === void 0 ? "Undefined" : e === null ? "Null" : typeof (r = nl(t = Object(e), tl)) == "string" ? r : rl ? gr(t) : (n = gr(t)) == "Object" && typeof t.callee == "function" ? "Arguments" : n;
}, al = ds, sl = ne("iterator"), il = Ye, ol = Q.isIterable = function(e) {
  var t = Object(e);
  return t[sl] !== void 0 || "@@iterator" in t || il.hasOwnProperty(al(t));
}, cl = ol, ll = { default: cl, __esModule: !0 }, ul = ds, dl = ne("iterator"), fl = Ye, pl = Q.getIteratorMethod = function(e) {
  if (e != null)
    return e[dl] || e["@@iterator"] || fl[ul(e)];
}, bl = Ge, hl = pl, vl = Q.getIterator = function(e) {
  var t = hl(e);
  if (typeof t != "function")
    throw TypeError(e + " is not iterable!");
  return bl(t.call(e));
}, gl = vl, yl = { default: gl, __esModule: !0 };
zr.__esModule = !0;
var ml = ll, xl = fs(ml), jl = yl, _l = fs(jl);
function fs(e) {
  return e && e.__esModule ? e : { default: e };
}
zr.default = function() {
  function e(t, r) {
    var n = [], a = !0, s = !1, i = void 0;
    try {
      for (var l = (0, _l.default)(t), u; !(a = (u = l.next()).done) && (n.push(u.value), !(r && n.length === r)); a = !0)
        ;
    } catch (f) {
      s = !0, i = f;
    } finally {
      try {
        !a && l.return && l.return();
      } finally {
        if (s)
          throw i;
      }
    }
    return n;
  }
  return function(t, r) {
    if (Array.isArray(t))
      return t;
    if ((0, xl.default)(Object(t)))
      return e(t, r);
    throw new TypeError("Invalid attempt to destructure non-iterable instance");
  };
}();
var nr = jt, El = Q, Sl = Pe, Cl = function(e, t) {
  var r = (El.Object || {})[e] || Object[e], n = {};
  n[e] = t(r), nr(nr.S + nr.F * Sl(function() {
    r(1);
  }), "Object", n);
}, wl = Et, Ol = Je;
Cl("keys", function() {
  return function(t) {
    return Ol(wl(t));
  };
});
var Rl = Q.Object.keys, Al = { default: Rl, __esModule: !0 }, Pl = "Expected a function", Zn = "__lodash_placeholder__", he = 1, It = 2, Il = 4, pe = 8, ze = 16, Oe = 32, We = 64, ps = 128, Tl = 256, bs = 512, Qn = 1 / 0, Fl = 9007199254740991, kl = 17976931348623157e292, ea = 0 / 0, Dl = [
  ["ary", ps],
  ["bind", he],
  ["bindKey", It],
  ["curry", pe],
  ["curryRight", ze],
  ["flip", bs],
  ["partial", Oe],
  ["partialRight", We],
  ["rearg", Tl]
], Ll = "[object Function]", Ml = "[object GeneratorFunction]", $l = "[object Symbol]", Bl = /[\\^$.*+?()[\]{}|]/g, Nl = /^\s+|\s+$/g, zl = /\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/, Vl = /\{\n\/\* \[wrapped with (.+)\] \*/, ql = /,? & /, Wl = /^[-+]0x[0-9a-f]+$/i, Kl = /^0b[01]+$/i, Hl = /^\[object .+?Constructor\]$/, Ul = /^0o[0-7]+$/i, Gl = /^(?:0|[1-9]\d*)$/, Yl = parseInt, Jl = typeof ie == "object" && ie && ie.Object === Object && ie, Xl = typeof self == "object" && self && self.Object === Object && self, et = Jl || Xl || Function("return this")();
function hs(e, t, r) {
  switch (r.length) {
    case 0:
      return e.call(t);
    case 1:
      return e.call(t, r[0]);
    case 2:
      return e.call(t, r[0], r[1]);
    case 3:
      return e.call(t, r[0], r[1], r[2]);
  }
  return e.apply(t, r);
}
function Zl(e, t) {
  for (var r = -1, n = e ? e.length : 0; ++r < n && t(e[r], r, e) !== !1; )
    ;
  return e;
}
function Ql(e, t) {
  var r = e ? e.length : 0;
  return !!r && tu(e, t, 0) > -1;
}
function eu(e, t, r, n) {
  for (var a = e.length, s = r + (n ? 1 : -1); n ? s-- : ++s < a; )
    if (t(e[s], s, e))
      return s;
  return -1;
}
function tu(e, t, r) {
  if (t !== t)
    return eu(e, ru, r);
  for (var n = r - 1, a = e.length; ++n < a; )
    if (e[n] === t)
      return n;
  return -1;
}
function ru(e) {
  return e !== e;
}
function nu(e, t) {
  for (var r = e.length, n = 0; r--; )
    e[r] === t && n++;
  return n;
}
function au(e, t) {
  return e == null ? void 0 : e[t];
}
function su(e) {
  var t = !1;
  if (e != null && typeof e.toString != "function")
    try {
      t = !!(e + "");
    } catch {
    }
  return t;
}
function vs(e, t) {
  for (var r = -1, n = e.length, a = 0, s = []; ++r < n; ) {
    var i = e[r];
    (i === t || i === Zn) && (e[r] = Zn, s[a++] = r);
  }
  return s;
}
var iu = Function.prototype, gs = Object.prototype, ar = et["__core-js_shared__"], ta = function() {
  var e = /[^.]+$/.exec(ar && ar.keys && ar.keys.IE_PROTO || "");
  return e ? "Symbol(src)_1." + e : "";
}(), ys = iu.toString, ou = gs.hasOwnProperty, ms = gs.toString, cu = RegExp(
  "^" + ys.call(ou).replace(Bl, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
), lu = Object.create, gt = Math.max, uu = Math.min, ra = function() {
  var e = na(Object, "defineProperty"), t = na.name;
  return t && t.length > 2 ? e : void 0;
}();
function du(e) {
  return Ae(e) ? lu(e) : {};
}
function fu(e) {
  if (!Ae(e) || Eu(e))
    return !1;
  var t = Ou(e) || su(e) ? cu : Hl;
  return t.test(Cu(e));
}
function pu(e, t, r, n) {
  for (var a = -1, s = e.length, i = r.length, l = -1, u = t.length, f = gt(s - i, 0), h = Array(u + f), p = !n; ++l < u; )
    h[l] = t[l];
  for (; ++a < i; )
    (p || a < s) && (h[r[a]] = e[a]);
  for (; f--; )
    h[l++] = e[a++];
  return h;
}
function bu(e, t, r, n) {
  for (var a = -1, s = e.length, i = -1, l = r.length, u = -1, f = t.length, h = gt(s - l, 0), p = Array(h + f), g = !n; ++a < h; )
    p[a] = e[a];
  for (var m = a; ++u < f; )
    p[m + u] = t[u];
  for (; ++i < l; )
    (g || a < s) && (p[m + r[i]] = e[a++]);
  return p;
}
function hu(e, t) {
  var r = -1, n = e.length;
  for (t || (t = Array(n)); ++r < n; )
    t[r] = e[r];
  return t;
}
function vu(e, t, r) {
  var n = t & he, a = Ke(e);
  function s() {
    var i = this && this !== et && this instanceof s ? a : e;
    return i.apply(n ? r : this, arguments);
  }
  return s;
}
function Ke(e) {
  return function() {
    var t = arguments;
    switch (t.length) {
      case 0:
        return new e();
      case 1:
        return new e(t[0]);
      case 2:
        return new e(t[0], t[1]);
      case 3:
        return new e(t[0], t[1], t[2]);
      case 4:
        return new e(t[0], t[1], t[2], t[3]);
      case 5:
        return new e(t[0], t[1], t[2], t[3], t[4]);
      case 6:
        return new e(t[0], t[1], t[2], t[3], t[4], t[5]);
      case 7:
        return new e(t[0], t[1], t[2], t[3], t[4], t[5], t[6]);
    }
    var r = du(e.prototype), n = e.apply(r, t);
    return Ae(n) ? n : r;
  };
}
function gu(e, t, r) {
  var n = Ke(e);
  function a() {
    for (var s = arguments.length, i = Array(s), l = s, u = js(a); l--; )
      i[l] = arguments[l];
    var f = s < 3 && i[0] !== u && i[s - 1] !== u ? [] : vs(i, u);
    if (s -= f.length, s < r)
      return xs(
        e,
        t,
        Vr,
        a.placeholder,
        void 0,
        i,
        f,
        void 0,
        void 0,
        r - s
      );
    var h = this && this !== et && this instanceof a ? n : e;
    return hs(h, this, i);
  }
  return a;
}
function Vr(e, t, r, n, a, s, i, l, u, f) {
  var h = t & ps, p = t & he, g = t & It, m = t & (pe | ze), E = t & bs, C = g ? void 0 : Ke(e);
  function x() {
    for (var P = arguments.length, S = Array(P), T = P; T--; )
      S[T] = arguments[T];
    if (m)
      var J = js(x), je = nu(S, J);
    if (n && (S = pu(S, n, a, m)), s && (S = bu(S, s, i, m)), P -= je, m && P < f) {
      var ae = vs(S, J);
      return xs(
        e,
        t,
        Vr,
        x.placeholder,
        r,
        S,
        ae,
        l,
        u,
        f - P
      );
    }
    var _e = p ? r : this, ke = g ? _e[e] : e;
    return P = S.length, l ? S = Su(S, l) : E && P > 1 && S.reverse(), h && u < P && (S.length = u), this && this !== et && this instanceof x && (ke = C || Ke(ke)), ke.apply(_e, S);
  }
  return x;
}
function yu(e, t, r, n) {
  var a = t & he, s = Ke(e);
  function i() {
    for (var l = -1, u = arguments.length, f = -1, h = n.length, p = Array(h + u), g = this && this !== et && this instanceof i ? s : e; ++f < h; )
      p[f] = n[f];
    for (; u--; )
      p[f++] = arguments[++l];
    return hs(g, a ? r : this, p);
  }
  return i;
}
function xs(e, t, r, n, a, s, i, l, u, f) {
  var h = t & pe, p = h ? i : void 0, g = h ? void 0 : i, m = h ? s : void 0, E = h ? void 0 : s;
  t |= h ? Oe : We, t &= ~(h ? We : Oe), t & Il || (t &= ~(he | It));
  var C = r(e, t, a, m, p, E, g, l, u, f);
  return C.placeholder = n, _s(C, e, t);
}
function mu(e, t, r, n, a, s, i, l) {
  var u = t & It;
  if (!u && typeof e != "function")
    throw new TypeError(Pl);
  var f = n ? n.length : 0;
  if (f || (t &= ~(Oe | We), n = a = void 0), i = i === void 0 ? i : gt(aa(i), 0), l = l === void 0 ? l : aa(l), f -= a ? a.length : 0, t & We) {
    var h = n, p = a;
    n = a = void 0;
  }
  var g = [
    e,
    t,
    r,
    n,
    a,
    h,
    p,
    s,
    i,
    l
  ];
  if (e = g[0], t = g[1], r = g[2], n = g[3], a = g[4], l = g[9] = g[9] == null ? u ? 0 : e.length : gt(g[9] - f, 0), !l && t & (pe | ze) && (t &= ~(pe | ze)), !t || t == he)
    var m = vu(e, t, r);
  else
    t == pe || t == ze ? m = gu(e, t, l) : (t == Oe || t == (he | Oe)) && !a.length ? m = yu(e, t, r, n) : m = Vr.apply(void 0, g);
  return _s(m, e, t);
}
function js(e) {
  var t = e;
  return t.placeholder;
}
function na(e, t) {
  var r = au(e, t);
  return fu(r) ? r : void 0;
}
function xu(e) {
  var t = e.match(Vl);
  return t ? t[1].split(ql) : [];
}
function ju(e, t) {
  var r = t.length, n = r - 1;
  return t[n] = (r > 1 ? "& " : "") + t[n], t = t.join(r > 2 ? ", " : " "), e.replace(zl, `{
/* [wrapped with ` + t + `] */
`);
}
function _u(e, t) {
  return t = t ?? Fl, !!t && (typeof e == "number" || Gl.test(e)) && e > -1 && e % 1 == 0 && e < t;
}
function Eu(e) {
  return !!ta && ta in e;
}
function Su(e, t) {
  for (var r = e.length, n = uu(t.length, r), a = hu(e); n--; ) {
    var s = t[n];
    e[n] = _u(s, r) ? a[s] : void 0;
  }
  return e;
}
var _s = ra ? function(e, t, r) {
  var n = t + "";
  return ra(e, "toString", {
    configurable: !0,
    enumerable: !1,
    value: Tu(ju(n, wu(xu(n), r)))
  });
} : Fu;
function Cu(e) {
  if (e != null) {
    try {
      return ys.call(e);
    } catch {
    }
    try {
      return e + "";
    } catch {
    }
  }
  return "";
}
function wu(e, t) {
  return Zl(Dl, function(r) {
    var n = "_." + r[0];
    t & r[1] && !Ql(e, n) && e.push(n);
  }), e.sort();
}
function qr(e, t, r) {
  t = r ? void 0 : t;
  var n = mu(e, pe, void 0, void 0, void 0, void 0, void 0, t);
  return n.placeholder = qr.placeholder, n;
}
function Ou(e) {
  var t = Ae(e) ? ms.call(e) : "";
  return t == Ll || t == Ml;
}
function Ae(e) {
  var t = typeof e;
  return !!e && (t == "object" || t == "function");
}
function Ru(e) {
  return !!e && typeof e == "object";
}
function Au(e) {
  return typeof e == "symbol" || Ru(e) && ms.call(e) == $l;
}
function Pu(e) {
  if (!e)
    return e === 0 ? e : 0;
  if (e = Iu(e), e === Qn || e === -Qn) {
    var t = e < 0 ? -1 : 1;
    return t * kl;
  }
  return e === e ? e : 0;
}
function aa(e) {
  var t = Pu(e), r = t % 1;
  return t === t ? r ? t - r : t : 0;
}
function Iu(e) {
  if (typeof e == "number")
    return e;
  if (Au(e))
    return ea;
  if (Ae(e)) {
    var t = typeof e.valueOf == "function" ? e.valueOf() : e;
    e = Ae(t) ? t + "" : t;
  }
  if (typeof e != "string")
    return e === 0 ? e : +e;
  e = e.replace(Nl, "");
  var r = Kl.test(e);
  return r || Ul.test(e) ? Yl(e.slice(2), r ? 2 : 8) : Wl.test(e) ? ea : +e;
}
function Tu(e) {
  return function() {
    return e;
  };
}
function Fu(e) {
  return e;
}
qr.placeholder = {};
var ku = qr;
const Du = {
  scheme: "threezerotwofour",
  author: "jan t. sott (http://github.com/idleberg)",
  base00: "#090300",
  base01: "#3a3432",
  base02: "#4a4543",
  base03: "#5c5855",
  base04: "#807d7c",
  base05: "#a5a2a2",
  base06: "#d6d5d4",
  base07: "#f7f7f7",
  base08: "#db2d20",
  base09: "#e8bbd0",
  base0A: "#fded02",
  base0B: "#01a252",
  base0C: "#b5e4f4",
  base0D: "#01a0e4",
  base0E: "#a16a94",
  base0F: "#cdab53"
}, Lu = {
  scheme: "apathy",
  author: "jannik siebert (https://github.com/janniks)",
  base00: "#031A16",
  base01: "#0B342D",
  base02: "#184E45",
  base03: "#2B685E",
  base04: "#5F9C92",
  base05: "#81B5AC",
  base06: "#A7CEC8",
  base07: "#D2E7E4",
  base08: "#3E9688",
  base09: "#3E7996",
  base0A: "#3E4C96",
  base0B: "#883E96",
  base0C: "#963E4C",
  base0D: "#96883E",
  base0E: "#4C963E",
  base0F: "#3E965B"
}, Mu = {
  scheme: "ashes",
  author: "jannik siebert (https://github.com/janniks)",
  base00: "#1C2023",
  base01: "#393F45",
  base02: "#565E65",
  base03: "#747C84",
  base04: "#ADB3BA",
  base05: "#C7CCD1",
  base06: "#DFE2E5",
  base07: "#F3F4F5",
  base08: "#C7AE95",
  base09: "#C7C795",
  base0A: "#AEC795",
  base0B: "#95C7AE",
  base0C: "#95AEC7",
  base0D: "#AE95C7",
  base0E: "#C795AE",
  base0F: "#C79595"
}, $u = {
  scheme: "atelier dune",
  author: "bram de haan (http://atelierbram.github.io/syntax-highlighting/atelier-schemes/dune)",
  base00: "#20201d",
  base01: "#292824",
  base02: "#6e6b5e",
  base03: "#7d7a68",
  base04: "#999580",
  base05: "#a6a28c",
  base06: "#e8e4cf",
  base07: "#fefbec",
  base08: "#d73737",
  base09: "#b65611",
  base0A: "#cfb017",
  base0B: "#60ac39",
  base0C: "#1fad83",
  base0D: "#6684e1",
  base0E: "#b854d4",
  base0F: "#d43552"
}, Bu = {
  scheme: "atelier forest",
  author: "bram de haan (http://atelierbram.github.io/syntax-highlighting/atelier-schemes/forest)",
  base00: "#1b1918",
  base01: "#2c2421",
  base02: "#68615e",
  base03: "#766e6b",
  base04: "#9c9491",
  base05: "#a8a19f",
  base06: "#e6e2e0",
  base07: "#f1efee",
  base08: "#f22c40",
  base09: "#df5320",
  base0A: "#d5911a",
  base0B: "#5ab738",
  base0C: "#00ad9c",
  base0D: "#407ee7",
  base0E: "#6666ea",
  base0F: "#c33ff3"
}, Nu = {
  scheme: "atelier heath",
  author: "bram de haan (http://atelierbram.github.io/syntax-highlighting/atelier-schemes/heath)",
  base00: "#1b181b",
  base01: "#292329",
  base02: "#695d69",
  base03: "#776977",
  base04: "#9e8f9e",
  base05: "#ab9bab",
  base06: "#d8cad8",
  base07: "#f7f3f7",
  base08: "#ca402b",
  base09: "#a65926",
  base0A: "#bb8a35",
  base0B: "#379a37",
  base0C: "#159393",
  base0D: "#516aec",
  base0E: "#7b59c0",
  base0F: "#cc33cc"
}, zu = {
  scheme: "atelier lakeside",
  author: "bram de haan (http://atelierbram.github.io/syntax-highlighting/atelier-schemes/lakeside/)",
  base00: "#161b1d",
  base01: "#1f292e",
  base02: "#516d7b",
  base03: "#5a7b8c",
  base04: "#7195a8",
  base05: "#7ea2b4",
  base06: "#c1e4f6",
  base07: "#ebf8ff",
  base08: "#d22d72",
  base09: "#935c25",
  base0A: "#8a8a0f",
  base0B: "#568c3b",
  base0C: "#2d8f6f",
  base0D: "#257fad",
  base0E: "#5d5db1",
  base0F: "#b72dd2"
}, Vu = {
  scheme: "atelier seaside",
  author: "bram de haan (http://atelierbram.github.io/syntax-highlighting/atelier-schemes/seaside/)",
  base00: "#131513",
  base01: "#242924",
  base02: "#5e6e5e",
  base03: "#687d68",
  base04: "#809980",
  base05: "#8ca68c",
  base06: "#cfe8cf",
  base07: "#f0fff0",
  base08: "#e6193c",
  base09: "#87711d",
  base0A: "#c3c322",
  base0B: "#29a329",
  base0C: "#1999b3",
  base0D: "#3d62f5",
  base0E: "#ad2bee",
  base0F: "#e619c3"
}, qu = {
  scheme: "bespin",
  author: "jan t. sott",
  base00: "#28211c",
  base01: "#36312e",
  base02: "#5e5d5c",
  base03: "#666666",
  base04: "#797977",
  base05: "#8a8986",
  base06: "#9d9b97",
  base07: "#baae9e",
  base08: "#cf6a4c",
  base09: "#cf7d34",
  base0A: "#f9ee98",
  base0B: "#54be0d",
  base0C: "#afc4db",
  base0D: "#5ea6ea",
  base0E: "#9b859d",
  base0F: "#937121"
}, Wu = {
  scheme: "brewer",
  author: "timothée poisot (http://github.com/tpoisot)",
  base00: "#0c0d0e",
  base01: "#2e2f30",
  base02: "#515253",
  base03: "#737475",
  base04: "#959697",
  base05: "#b7b8b9",
  base06: "#dadbdc",
  base07: "#fcfdfe",
  base08: "#e31a1c",
  base09: "#e6550d",
  base0A: "#dca060",
  base0B: "#31a354",
  base0C: "#80b1d3",
  base0D: "#3182bd",
  base0E: "#756bb1",
  base0F: "#b15928"
}, Ku = {
  scheme: "bright",
  author: "chris kempson (http://chriskempson.com)",
  base00: "#000000",
  base01: "#303030",
  base02: "#505050",
  base03: "#b0b0b0",
  base04: "#d0d0d0",
  base05: "#e0e0e0",
  base06: "#f5f5f5",
  base07: "#ffffff",
  base08: "#fb0120",
  base09: "#fc6d24",
  base0A: "#fda331",
  base0B: "#a1c659",
  base0C: "#76c7b7",
  base0D: "#6fb3d2",
  base0E: "#d381c3",
  base0F: "#be643c"
}, Hu = {
  scheme: "chalk",
  author: "chris kempson (http://chriskempson.com)",
  base00: "#151515",
  base01: "#202020",
  base02: "#303030",
  base03: "#505050",
  base04: "#b0b0b0",
  base05: "#d0d0d0",
  base06: "#e0e0e0",
  base07: "#f5f5f5",
  base08: "#fb9fb1",
  base09: "#eda987",
  base0A: "#ddb26f",
  base0B: "#acc267",
  base0C: "#12cfc0",
  base0D: "#6fc2ef",
  base0E: "#e1a3ee",
  base0F: "#deaf8f"
}, Uu = {
  scheme: "codeschool",
  author: "brettof86",
  base00: "#232c31",
  base01: "#1c3657",
  base02: "#2a343a",
  base03: "#3f4944",
  base04: "#84898c",
  base05: "#9ea7a6",
  base06: "#a7cfa3",
  base07: "#b5d8f6",
  base08: "#2a5491",
  base09: "#43820d",
  base0A: "#a03b1e",
  base0B: "#237986",
  base0C: "#b02f30",
  base0D: "#484d79",
  base0E: "#c59820",
  base0F: "#c98344"
}, Gu = {
  scheme: "colors",
  author: "mrmrs (http://clrs.cc)",
  base00: "#111111",
  base01: "#333333",
  base02: "#555555",
  base03: "#777777",
  base04: "#999999",
  base05: "#bbbbbb",
  base06: "#dddddd",
  base07: "#ffffff",
  base08: "#ff4136",
  base09: "#ff851b",
  base0A: "#ffdc00",
  base0B: "#2ecc40",
  base0C: "#7fdbff",
  base0D: "#0074d9",
  base0E: "#b10dc9",
  base0F: "#85144b"
}, Yu = {
  scheme: "default",
  author: "chris kempson (http://chriskempson.com)",
  base00: "#181818",
  base01: "#282828",
  base02: "#383838",
  base03: "#585858",
  base04: "#b8b8b8",
  base05: "#d8d8d8",
  base06: "#e8e8e8",
  base07: "#f8f8f8",
  base08: "#ab4642",
  base09: "#dc9656",
  base0A: "#f7ca88",
  base0B: "#a1b56c",
  base0C: "#86c1b9",
  base0D: "#7cafc2",
  base0E: "#ba8baf",
  base0F: "#a16946"
}, Ju = {
  scheme: "eighties",
  author: "chris kempson (http://chriskempson.com)",
  base00: "#2d2d2d",
  base01: "#393939",
  base02: "#515151",
  base03: "#747369",
  base04: "#a09f93",
  base05: "#d3d0c8",
  base06: "#e8e6df",
  base07: "#f2f0ec",
  base08: "#f2777a",
  base09: "#f99157",
  base0A: "#ffcc66",
  base0B: "#99cc99",
  base0C: "#66cccc",
  base0D: "#6699cc",
  base0E: "#cc99cc",
  base0F: "#d27b53"
}, Xu = {
  scheme: "embers",
  author: "jannik siebert (https://github.com/janniks)",
  base00: "#16130F",
  base01: "#2C2620",
  base02: "#433B32",
  base03: "#5A5047",
  base04: "#8A8075",
  base05: "#A39A90",
  base06: "#BEB6AE",
  base07: "#DBD6D1",
  base08: "#826D57",
  base09: "#828257",
  base0A: "#6D8257",
  base0B: "#57826D",
  base0C: "#576D82",
  base0D: "#6D5782",
  base0E: "#82576D",
  base0F: "#825757"
}, Zu = {
  scheme: "flat",
  author: "chris kempson (http://chriskempson.com)",
  base00: "#2C3E50",
  base01: "#34495E",
  base02: "#7F8C8D",
  base03: "#95A5A6",
  base04: "#BDC3C7",
  base05: "#e0e0e0",
  base06: "#f5f5f5",
  base07: "#ECF0F1",
  base08: "#E74C3C",
  base09: "#E67E22",
  base0A: "#F1C40F",
  base0B: "#2ECC71",
  base0C: "#1ABC9C",
  base0D: "#3498DB",
  base0E: "#9B59B6",
  base0F: "#be643c"
}, Qu = {
  scheme: "google",
  author: "seth wright (http://sethawright.com)",
  base00: "#1d1f21",
  base01: "#282a2e",
  base02: "#373b41",
  base03: "#969896",
  base04: "#b4b7b4",
  base05: "#c5c8c6",
  base06: "#e0e0e0",
  base07: "#ffffff",
  base08: "#CC342B",
  base09: "#F96A38",
  base0A: "#FBA922",
  base0B: "#198844",
  base0C: "#3971ED",
  base0D: "#3971ED",
  base0E: "#A36AC7",
  base0F: "#3971ED"
}, ed = {
  scheme: "grayscale",
  author: "alexandre gavioli (https://github.com/alexx2/)",
  base00: "#101010",
  base01: "#252525",
  base02: "#464646",
  base03: "#525252",
  base04: "#ababab",
  base05: "#b9b9b9",
  base06: "#e3e3e3",
  base07: "#f7f7f7",
  base08: "#7c7c7c",
  base09: "#999999",
  base0A: "#a0a0a0",
  base0B: "#8e8e8e",
  base0C: "#868686",
  base0D: "#686868",
  base0E: "#747474",
  base0F: "#5e5e5e"
}, td = {
  scheme: "green screen",
  author: "chris kempson (http://chriskempson.com)",
  base00: "#001100",
  base01: "#003300",
  base02: "#005500",
  base03: "#007700",
  base04: "#009900",
  base05: "#00bb00",
  base06: "#00dd00",
  base07: "#00ff00",
  base08: "#007700",
  base09: "#009900",
  base0A: "#007700",
  base0B: "#00bb00",
  base0C: "#005500",
  base0D: "#009900",
  base0E: "#00bb00",
  base0F: "#005500"
}, rd = {
  scheme: "harmonic16",
  author: "jannik siebert (https://github.com/janniks)",
  base00: "#0b1c2c",
  base01: "#223b54",
  base02: "#405c79",
  base03: "#627e99",
  base04: "#aabcce",
  base05: "#cbd6e2",
  base06: "#e5ebf1",
  base07: "#f7f9fb",
  base08: "#bf8b56",
  base09: "#bfbf56",
  base0A: "#8bbf56",
  base0B: "#56bf8b",
  base0C: "#568bbf",
  base0D: "#8b56bf",
  base0E: "#bf568b",
  base0F: "#bf5656"
}, nd = {
  scheme: "hopscotch",
  author: "jan t. sott",
  base00: "#322931",
  base01: "#433b42",
  base02: "#5c545b",
  base03: "#797379",
  base04: "#989498",
  base05: "#b9b5b8",
  base06: "#d5d3d5",
  base07: "#ffffff",
  base08: "#dd464c",
  base09: "#fd8b19",
  base0A: "#fdcc59",
  base0B: "#8fc13e",
  base0C: "#149b93",
  base0D: "#1290bf",
  base0E: "#c85e7c",
  base0F: "#b33508"
}, ad = {
  scheme: "isotope",
  author: "jan t. sott",
  base00: "#000000",
  base01: "#404040",
  base02: "#606060",
  base03: "#808080",
  base04: "#c0c0c0",
  base05: "#d0d0d0",
  base06: "#e0e0e0",
  base07: "#ffffff",
  base08: "#ff0000",
  base09: "#ff9900",
  base0A: "#ff0099",
  base0B: "#33ff00",
  base0C: "#00ffff",
  base0D: "#0066ff",
  base0E: "#cc00ff",
  base0F: "#3300ff"
}, sd = {
  scheme: "marrakesh",
  author: "alexandre gavioli (http://github.com/alexx2/)",
  base00: "#201602",
  base01: "#302e00",
  base02: "#5f5b17",
  base03: "#6c6823",
  base04: "#86813b",
  base05: "#948e48",
  base06: "#ccc37a",
  base07: "#faf0a5",
  base08: "#c35359",
  base09: "#b36144",
  base0A: "#a88339",
  base0B: "#18974e",
  base0C: "#75a738",
  base0D: "#477ca1",
  base0E: "#8868b3",
  base0F: "#b3588e"
}, id = {
  scheme: "mocha",
  author: "chris kempson (http://chriskempson.com)",
  base00: "#3B3228",
  base01: "#534636",
  base02: "#645240",
  base03: "#7e705a",
  base04: "#b8afad",
  base05: "#d0c8c6",
  base06: "#e9e1dd",
  base07: "#f5eeeb",
  base08: "#cb6077",
  base09: "#d28b71",
  base0A: "#f4bc87",
  base0B: "#beb55b",
  base0C: "#7bbda4",
  base0D: "#8ab3b5",
  base0E: "#a89bb9",
  base0F: "#bb9584"
}, od = {
  scheme: "monokai",
  author: "wimer hazenberg (http://www.monokai.nl)",
  base00: "#272822",
  base01: "#383830",
  base02: "#49483e",
  base03: "#75715e",
  base04: "#a59f85",
  base05: "#f8f8f2",
  base06: "#f5f4f1",
  base07: "#f9f8f5",
  base08: "#f92672",
  base09: "#fd971f",
  base0A: "#f4bf75",
  base0B: "#a6e22e",
  base0C: "#a1efe4",
  base0D: "#66d9ef",
  base0E: "#ae81ff",
  base0F: "#cc6633"
}, cd = {
  scheme: "ocean",
  author: "chris kempson (http://chriskempson.com)",
  base00: "#2b303b",
  base01: "#343d46",
  base02: "#4f5b66",
  base03: "#65737e",
  base04: "#a7adba",
  base05: "#c0c5ce",
  base06: "#dfe1e8",
  base07: "#eff1f5",
  base08: "#bf616a",
  base09: "#d08770",
  base0A: "#ebcb8b",
  base0B: "#a3be8c",
  base0C: "#96b5b4",
  base0D: "#8fa1b3",
  base0E: "#b48ead",
  base0F: "#ab7967"
}, ld = {
  scheme: "paraiso",
  author: "jan t. sott",
  base00: "#2f1e2e",
  base01: "#41323f",
  base02: "#4f424c",
  base03: "#776e71",
  base04: "#8d8687",
  base05: "#a39e9b",
  base06: "#b9b6b0",
  base07: "#e7e9db",
  base08: "#ef6155",
  base09: "#f99b15",
  base0A: "#fec418",
  base0B: "#48b685",
  base0C: "#5bc4bf",
  base0D: "#06b6ef",
  base0E: "#815ba4",
  base0F: "#e96ba8"
}, ud = {
  scheme: "pop",
  author: "chris kempson (http://chriskempson.com)",
  base00: "#000000",
  base01: "#202020",
  base02: "#303030",
  base03: "#505050",
  base04: "#b0b0b0",
  base05: "#d0d0d0",
  base06: "#e0e0e0",
  base07: "#ffffff",
  base08: "#eb008a",
  base09: "#f29333",
  base0A: "#f8ca12",
  base0B: "#37b349",
  base0C: "#00aabb",
  base0D: "#0e5a94",
  base0E: "#b31e8d",
  base0F: "#7a2d00"
}, dd = {
  scheme: "railscasts",
  author: "ryan bates (http://railscasts.com)",
  base00: "#2b2b2b",
  base01: "#272935",
  base02: "#3a4055",
  base03: "#5a647e",
  base04: "#d4cfc9",
  base05: "#e6e1dc",
  base06: "#f4f1ed",
  base07: "#f9f7f3",
  base08: "#da4939",
  base09: "#cc7833",
  base0A: "#ffc66d",
  base0B: "#a5c261",
  base0C: "#519f50",
  base0D: "#6d9cbe",
  base0E: "#b6b3eb",
  base0F: "#bc9458"
}, fd = {
  scheme: "shapeshifter",
  author: "tyler benziger (http://tybenz.com)",
  base00: "#000000",
  base01: "#040404",
  base02: "#102015",
  base03: "#343434",
  base04: "#555555",
  base05: "#ababab",
  base06: "#e0e0e0",
  base07: "#f9f9f9",
  base08: "#e92f2f",
  base09: "#e09448",
  base0A: "#dddd13",
  base0B: "#0ed839",
  base0C: "#23edda",
  base0D: "#3b48e3",
  base0E: "#f996e2",
  base0F: "#69542d"
}, pd = {
  scheme: "solarized",
  author: "ethan schoonover (http://ethanschoonover.com/solarized)",
  base00: "#002b36",
  base01: "#073642",
  base02: "#586e75",
  base03: "#657b83",
  base04: "#839496",
  base05: "#93a1a1",
  base06: "#eee8d5",
  base07: "#fdf6e3",
  base08: "#dc322f",
  base09: "#cb4b16",
  base0A: "#b58900",
  base0B: "#859900",
  base0C: "#2aa198",
  base0D: "#268bd2",
  base0E: "#6c71c4",
  base0F: "#d33682"
}, bd = {
  scheme: "summerfruit",
  author: "christopher corley (http://cscorley.github.io/)",
  base00: "#151515",
  base01: "#202020",
  base02: "#303030",
  base03: "#505050",
  base04: "#B0B0B0",
  base05: "#D0D0D0",
  base06: "#E0E0E0",
  base07: "#FFFFFF",
  base08: "#FF0086",
  base09: "#FD8900",
  base0A: "#ABA800",
  base0B: "#00C918",
  base0C: "#1faaaa",
  base0D: "#3777E6",
  base0E: "#AD00A1",
  base0F: "#cc6633"
}, hd = {
  scheme: "tomorrow",
  author: "chris kempson (http://chriskempson.com)",
  base00: "#1d1f21",
  base01: "#282a2e",
  base02: "#373b41",
  base03: "#969896",
  base04: "#b4b7b4",
  base05: "#c5c8c6",
  base06: "#e0e0e0",
  base07: "#ffffff",
  base08: "#cc6666",
  base09: "#de935f",
  base0A: "#f0c674",
  base0B: "#b5bd68",
  base0C: "#8abeb7",
  base0D: "#81a2be",
  base0E: "#b294bb",
  base0F: "#a3685a"
}, vd = {
  scheme: "london tube",
  author: "jan t. sott",
  base00: "#231f20",
  base01: "#1c3f95",
  base02: "#5a5758",
  base03: "#737171",
  base04: "#959ca1",
  base05: "#d9d8d8",
  base06: "#e7e7e8",
  base07: "#ffffff",
  base08: "#ee2e24",
  base09: "#f386a1",
  base0A: "#ffd204",
  base0B: "#00853e",
  base0C: "#85cebc",
  base0D: "#009ddc",
  base0E: "#98005d",
  base0F: "#b06110"
}, gd = {
  scheme: "twilight",
  author: "david hart (http://hart-dev.com)",
  base00: "#1e1e1e",
  base01: "#323537",
  base02: "#464b50",
  base03: "#5f5a60",
  base04: "#838184",
  base05: "#a7a7a7",
  base06: "#c3c3c3",
  base07: "#ffffff",
  base08: "#cf6a4c",
  base09: "#cda869",
  base0A: "#f9ee98",
  base0B: "#8f9d6a",
  base0C: "#afc4db",
  base0D: "#7587a6",
  base0E: "#9b859d",
  base0F: "#9b703f"
}, yd = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  apathy: Lu,
  ashes: Mu,
  atelierDune: $u,
  atelierForest: Bu,
  atelierHeath: Nu,
  atelierLakeside: zu,
  atelierSeaside: Vu,
  bespin: qu,
  brewer: Wu,
  bright: Ku,
  chalk: Hu,
  codeschool: Uu,
  colors: Gu,
  default: Yu,
  eighties: Ju,
  embers: Xu,
  flat: Zu,
  google: Qu,
  grayscale: ed,
  greenscreen: td,
  harmonic: rd,
  hopscotch: nd,
  isotope: ad,
  marrakesh: sd,
  mocha: id,
  monokai: od,
  ocean: cd,
  paraiso: ld,
  pop: ud,
  railscasts: dd,
  shapeshifter: fd,
  solarized: pd,
  summerfruit: bd,
  threezerotwofour: Du,
  tomorrow: hd,
  tube: vd,
  twilight: gd
}, Symbol.toStringTag, { value: "Module" })), md = /* @__PURE__ */ wi(yd);
function xd(e, t, r) {
  return Math.min(Math.max(e, t), r);
}
var Wr = xd, jd = Wr;
function pt(e) {
  var t = Math.round(jd(e, 0, 255)), r = t.toString(16);
  return r.length == 1 ? "0" + r : r;
}
function _d(e) {
  var t = e.length === 4 ? pt(e[3] * 255) : "";
  return "#" + pt(e[0]) + pt(e[1]) + pt(e[2]) + t;
}
var Ed = _d, Sd = /-?\d+(\.\d+)?%?/g;
function Cd(e) {
  return e.match(Sd);
}
var Es = Cd, wd = Es, sr = Wr;
function Od(e, t) {
  switch (e = parseFloat(e), t) {
    case 0:
      return sr(e, 0, 360);
    case 1:
    case 2:
      return sr(e, 0, 100);
    case 3:
      return sr(e, 0, 1);
  }
}
function Rd(e) {
  return wd(e).map(Od);
}
var Ad = Rd;
function Pd(e) {
  for (var t = "#", r = 1; r < e.length; r++) {
    var n = e.charAt(r);
    t += n + n;
  }
  return t;
}
function Id(e) {
  (e.length === 4 || e.length === 5) && (e = Pd(e));
  var t = [
    parseInt(e.substring(1, 3), 16),
    parseInt(e.substring(3, 5), 16),
    parseInt(e.substring(5, 7), 16)
  ];
  if (e.length === 9) {
    var r = parseFloat((parseInt(e.substring(7, 9), 16) / 255).toFixed(2));
    t.push(r);
  }
  return t;
}
var Td = Id, Fd = Es, ir = Wr;
function kd(e, t) {
  return t < 3 ? e.indexOf("%") != -1 ? Math.round(255 * ir(parseInt(e, 10), 0, 100) / 100) : ir(parseInt(e, 10), 0, 255) : ir(parseFloat(e), 0, 1);
}
function Dd(e) {
  return Fd(e).map(kd);
}
var Ld = Dd;
function Md(e) {
  var t = e[0] / 360, r = e[1] / 100, n = e[2] / 100, a, s, i, l, u;
  if (r == 0)
    return u = n * 255, [u, u, u];
  n < 0.5 ? s = n * (1 + r) : s = n + r - n * r, a = 2 * n - s, l = [0, 0, 0];
  for (var f = 0; f < 3; f++)
    i = t + 1 / 3 * -(f - 1), i < 0 && i++, i > 1 && i--, 6 * i < 1 ? u = a + (s - a) * 6 * i : 2 * i < 1 ? u = s : 3 * i < 2 ? u = a + (s - a) * (2 / 3 - i) * 6 : u = a, l[f] = u * 255;
  return l;
}
var $d = Md, Ss = Ad, Cs = Td, ws = Ld, Bd = $d;
function Nd(e) {
  var t = Ss(e), r = Bd(t);
  return t.length === 4 && r.push(t[3]), r;
}
var sa = {
  "#": Cs,
  hsl: Nd,
  rgb: ws
};
function Tt(e) {
  for (var t in sa)
    if (e.indexOf(t) === 0)
      return sa[t](e);
}
Tt.rgb = ws;
Tt.hsl = Ss;
Tt.hex = Cs;
var zd = Tt, Vd = "Expected a function", qd = 9007199254740991, Wd = "[object Arguments]", Kd = "[object Function]", Hd = "[object GeneratorFunction]", Ud = typeof ie == "object" && ie && ie.Object === Object && ie, Gd = typeof self == "object" && self && self.Object === Object && self, Yd = Ud || Gd || Function("return this")();
function Jd(e, t, r) {
  switch (r.length) {
    case 0:
      return e.call(t);
    case 1:
      return e.call(t, r[0]);
    case 2:
      return e.call(t, r[0], r[1]);
    case 3:
      return e.call(t, r[0], r[1], r[2]);
  }
  return e.apply(t, r);
}
function Xd(e, t) {
  for (var r = -1, n = t.length, a = e.length; ++r < n; )
    e[a + r] = t[r];
  return e;
}
var Kr = Object.prototype, Zd = Kr.hasOwnProperty, Os = Kr.toString, ia = Yd.Symbol, Qd = Kr.propertyIsEnumerable, oa = ia ? ia.isConcatSpreadable : void 0, ca = Math.max;
function Rs(e, t, r, n, a) {
  var s = -1, i = e.length;
  for (r || (r = rf), a || (a = []); ++s < i; ) {
    var l = e[s];
    t > 0 && r(l) ? t > 1 ? Rs(l, t - 1, r, n, a) : Xd(a, l) : n || (a[a.length] = l);
  }
  return a;
}
function ef(e, t) {
  return t = ca(t === void 0 ? e.length - 1 : t, 0), function() {
    for (var r = arguments, n = -1, a = ca(r.length - t, 0), s = Array(a); ++n < a; )
      s[n] = r[t + n];
    n = -1;
    for (var i = Array(t + 1); ++n < t; )
      i[n] = r[n];
    return i[t] = s, Jd(e, this, i);
  };
}
function tf(e) {
  return ef(function(t) {
    t = Rs(t, 1);
    var r = t.length, n = r;
    for (e && t.reverse(); n--; )
      if (typeof t[n] != "function")
        throw new TypeError(Vd);
    return function() {
      for (var a = 0, s = r ? t[a].apply(this, arguments) : arguments[0]; ++a < r; )
        s = t[a].call(this, s);
      return s;
    };
  });
}
function rf(e) {
  return af(e) || nf(e) || !!(oa && e && e[oa]);
}
function nf(e) {
  return of(e) && Zd.call(e, "callee") && (!Qd.call(e, "callee") || Os.call(e) == Wd);
}
var af = Array.isArray;
function sf(e) {
  return e != null && lf(e.length) && !cf(e);
}
function of(e) {
  return df(e) && sf(e);
}
function cf(e) {
  var t = uf(e) ? Os.call(e) : "";
  return t == Kd || t == Hd;
}
function lf(e) {
  return typeof e == "number" && e > -1 && e % 1 == 0 && e <= qd;
}
function uf(e) {
  var t = typeof e;
  return !!e && (t == "object" || t == "function");
}
function df(e) {
  return !!e && typeof e == "object";
}
var ff = tf(), pf = ff, Ft = {};
Object.defineProperty(Ft, "__esModule", {
  value: !0
});
Ft.yuv2rgb = bf;
Ft.rgb2yuv = hf;
function bf(e) {
  var t = e[0], r = e[1], n = e[2], a, s, i;
  return a = t * 1 + r * 0 + n * 1.13983, s = t * 1 + r * -0.39465 + n * -0.5806, i = t * 1 + r * 2.02311 + n * 0, a = Math.min(Math.max(0, a), 1), s = Math.min(Math.max(0, s), 1), i = Math.min(Math.max(0, i), 1), [a * 255, s * 255, i * 255];
}
function hf(e) {
  var t = e[0] / 255, r = e[1] / 255, n = e[2] / 255, a = t * 0.299 + r * 0.587 + n * 0.114, s = t * -0.14713 + r * -0.28886 + n * 0.436, i = t * 0.615 + r * -0.51499 + n * -0.10001;
  return [a, s, i];
}
var Hr;
Object.defineProperty(fe, "__esModule", {
  value: !0
});
fe.getBase16Theme = Hr = fe.createStyling = fe.invertTheme = void 0;
var vf = Er, yr = le(vf), gf = Nr, He = le(gf), yf = zr, As = le(yf), mf = Al, tt = le(mf), xf = ku, la = le(xf), jf = md, Ps = Rf(jf), _f = Ed, Ef = le(_f), Sf = zd, Cf = le(Sf), wf = pf, Of = le(wf), ua = Ft;
function Rf(e) {
  if (e && e.__esModule)
    return e;
  var t = {};
  if (e != null)
    for (var r in e)
      Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
  return t.default = e, t;
}
function le(e) {
  return e && e.__esModule ? e : { default: e };
}
var Is = Ps.default, da = (0, tt.default)(Is), Af = function(t) {
  return t < 0.25 ? 1 : t < 0.5 ? 0.9 - t : 1.1 - t;
}, Pf = (0, Of.default)(Cf.default, ua.rgb2yuv, function(e) {
  var t = (0, As.default)(e, 3), r = t[0], n = t[1], a = t[2];
  return [Af(r), n, a];
}, ua.yuv2rgb, Ef.default), Ce = function(t) {
  return function(r) {
    return {
      className: [r.className, t.className].filter(Boolean).join(" "),
      style: (0, He.default)({}, r.style || {}, t.style || {})
    };
  };
}, If = function(t, r) {
  if (t === void 0)
    return r;
  if (r === void 0)
    return t;
  var n = typeof t > "u" ? "undefined" : (0, yr.default)(t), a = typeof r > "u" ? "undefined" : (0, yr.default)(r);
  switch (n) {
    case "string":
      switch (a) {
        case "string":
          return [r, t].filter(Boolean).join(" ");
        case "object":
          return Ce({ className: t, style: r });
        case "function":
          return function(s) {
            for (var i = arguments.length, l = Array(i > 1 ? i - 1 : 0), u = 1; u < i; u++)
              l[u - 1] = arguments[u];
            return Ce({
              className: t
            })(r.apply(void 0, [s].concat(l)));
          };
      }
    case "object":
      switch (a) {
        case "string":
          return Ce({ className: r, style: t });
        case "object":
          return (0, He.default)({}, r, t);
        case "function":
          return function(s) {
            for (var i = arguments.length, l = Array(i > 1 ? i - 1 : 0), u = 1; u < i; u++)
              l[u - 1] = arguments[u];
            return Ce({
              style: t
            })(r.apply(void 0, [s].concat(l)));
          };
      }
    case "function":
      switch (a) {
        case "string":
          return function(s) {
            for (var i = arguments.length, l = Array(i > 1 ? i - 1 : 0), u = 1; u < i; u++)
              l[u - 1] = arguments[u];
            return t.apply(void 0, [Ce(s)({
              className: r
            })].concat(l));
          };
        case "object":
          return function(s) {
            for (var i = arguments.length, l = Array(i > 1 ? i - 1 : 0), u = 1; u < i; u++)
              l[u - 1] = arguments[u];
            return t.apply(void 0, [Ce(s)({
              style: r
            })].concat(l));
          };
        case "function":
          return function(s) {
            for (var i = arguments.length, l = Array(i > 1 ? i - 1 : 0), u = 1; u < i; u++)
              l[u - 1] = arguments[u];
            return t.apply(void 0, [r.apply(void 0, [s].concat(l))].concat(l));
          };
      }
  }
}, Tf = function(t, r) {
  var n = (0, tt.default)(r);
  for (var a in t)
    n.indexOf(a) === -1 && n.push(a);
  return n.reduce(function(s, i) {
    return s[i] = If(t[i], r[i]), s;
  }, {});
}, Ff = function(t, r) {
  for (var n = arguments.length, a = Array(n > 2 ? n - 2 : 0), s = 2; s < n; s++)
    a[s - 2] = arguments[s];
  if (r === null)
    return t;
  Array.isArray(r) || (r = [r]);
  var i = r.map(function(u) {
    return t[u];
  }).filter(Boolean), l = i.reduce(function(u, f) {
    return typeof f == "string" ? u.className = [u.className, f].filter(Boolean).join(" ") : (typeof f > "u" ? "undefined" : (0, yr.default)(f)) === "object" ? u.style = (0, He.default)({}, u.style, f) : typeof f == "function" && (u = (0, He.default)({}, u, f.apply(void 0, [u].concat(a)))), u;
  }, { className: "", style: {} });
  return l.className || delete l.className, (0, tt.default)(l.style).length === 0 && delete l.style, l;
}, kf = fe.invertTheme = function(t) {
  return (0, tt.default)(t).reduce(function(r, n) {
    return r[n] = /^base/.test(n) ? Pf(t[n]) : n === "scheme" ? t[n] + ":inverted" : t[n], r;
  }, {});
};
Hr = fe.createStyling = (0, la.default)(function(e) {
  for (var t = arguments.length, r = Array(t > 3 ? t - 3 : 0), n = 3; n < t; n++)
    r[n - 3] = arguments[n];
  var a = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, s = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, i = a.defaultBase16, l = i === void 0 ? Is : i, u = a.base16Themes, f = u === void 0 ? null : u, h = Df(s, f);
  h && (s = (0, He.default)({}, h, s));
  var p = da.reduce(function(C, x) {
    return C[x] = s[x] || l[x], C;
  }, {}), g = (0, tt.default)(s).reduce(function(C, x) {
    return da.indexOf(x) === -1 && (C[x] = s[x]), C;
  }, {}), m = e(p), E = Tf(g, m);
  return (0, la.default)(Ff, 2).apply(void 0, [E].concat(r));
}, 3);
var Df = fe.getBase16Theme = function(t, r) {
  if (t && t.extend && (t = t.extend), typeof t == "string") {
    var n = t.split(":"), a = (0, As.default)(n, 2), s = a[0], i = a[1];
    t = (r || {})[s] || Ps[s], i === "inverted" && (t = kf(t));
  }
  return t && t.hasOwnProperty("base00") ? t : void 0;
};
const Lf = (e) => ({
  backgroundColor: e.base00,
  ellipsisColor: e.base09,
  braceColor: e.base07,
  expandedIcon: e.base0D,
  collapsedIcon: e.base0E,
  keyColor: e.base07,
  arrayKeyColor: e.base0C,
  objectSize: e.base04,
  copyToClipboard: e.base0F,
  copyToClipboardCheck: e.base0D,
  objectBorder: e.base02,
  dataTypes: {
    boolean: e.base0E,
    date: e.base0D,
    float: e.base0B,
    function: e.base0D,
    integer: e.base0F,
    string: e.base09,
    nan: e.base08,
    null: e.base0A,
    undefined: e.base05,
    regexp: e.base0A,
    background: e.base02
  },
  editVariable: {
    editIcon: e.base0E,
    cancelIcon: e.base09,
    removeIcon: e.base09,
    addIcon: e.base0E,
    checkIcon: e.base0E,
    background: e.base01,
    color: e.base0A,
    border: e.base07
  },
  addKeyModal: {
    background: e.base05,
    border: e.base04,
    color: e.base0A,
    labelColor: e.base01
  },
  validationFailure: {
    background: e.base09,
    iconColor: e.base01,
    fontColor: e.base01
  }
}), Mf = (e) => {
  const t = Lf(e);
  return {
    "app-container": {
      fontFamily: b.globalFontFamily,
      cursor: b.globalCursor,
      backgroundColor: t.backgroundColor,
      position: "relative"
    },
    ellipsis: {
      display: "inline-block",
      color: t.ellipsisColor,
      fontSize: b.ellipsisFontSize,
      lineHeight: b.ellipsisLineHeight,
      cursor: b.ellipsisCursor
    },
    "brace-row": {
      display: "inline-block",
      cursor: "pointer"
    },
    brace: {
      display: "inline-block",
      cursor: b.braceCursor,
      fontWeight: b.braceFontWeight,
      color: t.braceColor
    },
    "expanded-icon": {
      color: t.expandedIcon
    },
    "collapsed-icon": {
      color: t.collapsedIcon
    },
    colon: {
      display: "inline-block",
      margin: b.keyMargin,
      color: t.keyColor,
      verticalAlign: "top"
    },
    objectKeyVal: (r, n) => ({
      style: {
        paddingTop: b.keyValPaddingTop,
        paddingRight: b.keyValPaddingRight,
        paddingBottom: b.keyValPaddingBottom,
        borderLeft: b.keyValBorderLeft + " " + t.objectBorder,
        ":hover": {
          paddingLeft: n.paddingLeft - 1 + "px",
          borderLeft: b.keyValBorderHover + " " + t.objectBorder
        },
        ...n
      }
    }),
    "object-key-val-no-border": {
      padding: b.keyValPadding
    },
    "pushed-content": {
      marginLeft: b.pushedContentMarginLeft
    },
    variableValue: (r, n) => ({
      style: {
        display: "inline-block",
        paddingRight: b.variableValuePaddingRight,
        position: "relative",
        ...n
      }
    }),
    "object-name": {
      display: "inline-block",
      color: t.keyColor,
      letterSpacing: b.keyLetterSpacing,
      fontStyle: b.keyFontStyle,
      verticalAlign: b.keyVerticalAlign,
      opacity: b.keyOpacity,
      ":hover": {
        opacity: b.keyOpacityHover
      }
    },
    "array-key": {
      display: "inline-block",
      color: t.arrayKeyColor,
      letterSpacing: b.keyLetterSpacing,
      fontStyle: b.keyFontStyle,
      verticalAlign: b.keyVerticalAlign,
      opacity: b.keyOpacity,
      ":hover": {
        opacity: b.keyOpacityHover
      }
    },
    "object-size": {
      color: t.objectSize,
      borderRadius: b.objectSizeBorderRadius,
      fontStyle: b.objectSizeFontStyle,
      margin: b.objectSizeMargin,
      cursor: "default"
    },
    "data-type-label": {
      fontSize: b.dataTypeFontSize,
      marginRight: b.dataTypeMarginRight,
      opacity: b.datatypeOpacity
    },
    boolean: {
      display: "inline-block",
      color: t.dataTypes.boolean
    },
    date: {
      display: "inline-block",
      color: t.dataTypes.date
    },
    "date-value": {
      marginLeft: b.dateValueMarginLeft
    },
    float: {
      display: "inline-block",
      color: t.dataTypes.float
    },
    function: {
      display: "inline-block",
      color: t.dataTypes.function,
      cursor: "pointer",
      whiteSpace: "pre-line"
    },
    "function-value": {
      fontStyle: "italic"
    },
    integer: {
      display: "inline-block",
      color: t.dataTypes.integer
    },
    string: {
      display: "inline-block",
      color: t.dataTypes.string
    },
    nan: {
      display: "inline-block",
      color: t.dataTypes.nan,
      fontSize: b.nanFontSize,
      fontWeight: b.nanFontWeight,
      backgroundColor: t.dataTypes.background,
      padding: b.nanPadding,
      borderRadius: b.nanBorderRadius
    },
    null: {
      display: "inline-block",
      color: t.dataTypes.null,
      fontSize: b.nullFontSize,
      fontWeight: b.nullFontWeight,
      backgroundColor: t.dataTypes.background,
      padding: b.nullPadding,
      borderRadius: b.nullBorderRadius
    },
    undefined: {
      display: "inline-block",
      color: t.dataTypes.undefined,
      fontSize: b.undefinedFontSize,
      padding: b.undefinedPadding,
      borderRadius: b.undefinedBorderRadius,
      backgroundColor: t.dataTypes.background
    },
    regexp: {
      display: "inline-block",
      color: t.dataTypes.regexp
    },
    "copy-to-clipboard": {
      cursor: b.clipboardCursor
    },
    "copy-icon": {
      color: t.copyToClipboard,
      fontSize: b.iconFontSize,
      marginRight: b.iconMarginRight,
      verticalAlign: "top"
    },
    "copy-icon-copied": {
      color: t.copyToClipboardCheck,
      marginLeft: b.clipboardCheckMarginLeft
    },
    "array-group-meta-data": {
      display: "inline-block",
      padding: b.arrayGroupMetaPadding
    },
    "object-meta-data": {
      display: "inline-block",
      padding: b.metaDataPadding
    },
    "icon-container": {
      display: "inline-block",
      width: b.iconContainerWidth
    },
    tooltip: {
      padding: b.tooltipPadding
    },
    removeVarIcon: {
      verticalAlign: "top",
      display: "inline-block",
      color: t.editVariable.removeIcon,
      cursor: b.iconCursor,
      fontSize: b.iconFontSize,
      marginRight: b.iconMarginRight
    },
    addVarIcon: {
      verticalAlign: "top",
      display: "inline-block",
      color: t.editVariable.addIcon,
      cursor: b.iconCursor,
      fontSize: b.iconFontSize,
      marginRight: b.iconMarginRight
    },
    editVarIcon: {
      verticalAlign: "top",
      display: "inline-block",
      color: t.editVariable.editIcon,
      cursor: b.iconCursor,
      fontSize: b.iconFontSize,
      marginRight: b.iconMarginRight
    },
    "edit-icon-container": {
      display: "inline-block",
      verticalAlign: "top"
    },
    "check-icon": {
      display: "inline-block",
      cursor: b.iconCursor,
      color: t.editVariable.checkIcon,
      fontSize: b.iconFontSize,
      paddingRight: b.iconPaddingRight
    },
    "cancel-icon": {
      display: "inline-block",
      cursor: b.iconCursor,
      color: t.editVariable.cancelIcon,
      fontSize: b.iconFontSize,
      paddingRight: b.iconPaddingRight
    },
    "edit-input": {
      display: "inline-block",
      minWidth: b.editInputMinWidth,
      borderRadius: b.editInputBorderRadius,
      backgroundColor: t.editVariable.background,
      color: t.editVariable.color,
      padding: b.editInputPadding,
      marginRight: b.editInputMarginRight,
      fontFamily: b.editInputFontFamily
    },
    "detected-row": {
      paddingTop: b.detectedRowPaddingTop
    },
    "key-modal-request": {
      position: b.addKeyCoverPosition,
      top: b.addKeyCoverPositionPx,
      left: b.addKeyCoverPositionPx,
      right: b.addKeyCoverPositionPx,
      bottom: b.addKeyCoverPositionPx,
      backgroundColor: b.addKeyCoverBackground
    },
    "key-modal": {
      width: b.addKeyModalWidth,
      backgroundColor: t.addKeyModal.background,
      marginLeft: b.addKeyModalMargin,
      marginRight: b.addKeyModalMargin,
      padding: b.addKeyModalPadding,
      borderRadius: b.addKeyModalRadius,
      marginTop: "15px",
      position: "relative"
    },
    "key-modal-label": {
      color: t.addKeyModal.labelColor,
      marginLeft: "2px",
      marginBottom: "5px",
      fontSize: "11px"
    },
    "key-modal-input-container": {
      overflow: "hidden"
    },
    "key-modal-input": {
      width: "100%",
      padding: "3px 6px",
      fontFamily: "monospace",
      color: t.addKeyModal.color,
      border: "none",
      boxSizing: "border-box",
      borderRadius: "2px"
    },
    "key-modal-cancel": {
      backgroundColor: t.editVariable.removeIcon,
      position: "absolute",
      top: "0px",
      right: "0px",
      borderRadius: "0px 3px 0px 3px",
      cursor: "pointer"
    },
    "key-modal-cancel-icon": {
      color: t.addKeyModal.labelColor,
      fontSize: b.iconFontSize,
      transform: "rotate(45deg)"
    },
    "key-modal-submit": {
      color: t.editVariable.addIcon,
      fontSize: b.iconFontSize,
      position: "absolute",
      right: "2px",
      top: "3px",
      cursor: "pointer"
    },
    "function-ellipsis": {
      display: "inline-block",
      color: t.ellipsisColor,
      fontSize: b.ellipsisFontSize,
      lineHeight: b.ellipsisLineHeight,
      cursor: b.ellipsisCursor
    },
    "validation-failure": {
      float: "right",
      padding: "3px 6px",
      borderRadius: "2px",
      cursor: "pointer",
      color: t.validationFailure.fontColor,
      backgroundColor: t.validationFailure.background
    },
    "validation-failure-label": {
      marginRight: "6px"
    },
    "validation-failure-clear": {
      position: "relative",
      verticalAlign: "top",
      cursor: "pointer",
      color: t.validationFailure.iconColor,
      fontSize: b.iconFontSize,
      transform: "rotate(45deg)"
    }
  };
}, $f = (e) => {
  let t = Ii;
  return (e === !1 || e === "none") && (t = Ti), Hr(Mf, { defaultBase16: t })(
    e
  );
};
function v(e, t, r) {
  return e || console.error("theme has not been set"), $f(e)(t, r);
}
class xe extends O.PureComponent {
  render() {
    const { rjvId: t, type_name: r, displayDataTypes: n, theme: a } = this.props;
    return n ? /* @__PURE__ */ c.jsx(
      "span",
      {
        class: "data-type-label",
        ...v(a, "data-type-label"),
        children: r
      }
    ) : null;
  }
}
class fa extends O.PureComponent {
  render() {
    const t = "bool", { props: r } = this;
    return /* @__PURE__ */ c.jsxs("div", { ...v(r.theme, "boolean"), children: [
      /* @__PURE__ */ c.jsx(xe, { type_name: t, ...r }),
      r.value ? "true" : "false"
    ] });
  }
}
class pa extends O.PureComponent {
  render() {
    const t = "date", { props: r } = this, n = {
      weekday: "short",
      year: "numeric",
      month: "short",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit"
    };
    return /* @__PURE__ */ c.jsxs("div", { ...v(r.theme, "date"), children: [
      /* @__PURE__ */ c.jsx(xe, { type_name: t, ...r }),
      /* @__PURE__ */ c.jsx("span", { class: "date-value", ...v(r.theme, "date-value"), children: r.value.toLocaleTimeString("en-us", n) })
    ] });
  }
}
class ba extends O.PureComponent {
  render() {
    const t = "float", { props: r } = this;
    return /* @__PURE__ */ c.jsxs("div", { ...v(r.theme, "float"), children: [
      /* @__PURE__ */ c.jsx(xe, { type_name: t, ...r }),
      this.props.value
    ] });
  }
}
var Ur = { exports: {} }, Re = typeof Reflect == "object" ? Reflect : null, ha = Re && typeof Re.apply == "function" ? Re.apply : function(t, r, n) {
  return Function.prototype.apply.call(t, r, n);
}, ht;
Re && typeof Re.ownKeys == "function" ? ht = Re.ownKeys : Object.getOwnPropertySymbols ? ht = function(t) {
  return Object.getOwnPropertyNames(t).concat(Object.getOwnPropertySymbols(t));
} : ht = function(t) {
  return Object.getOwnPropertyNames(t);
};
function Bf(e) {
  console && console.warn && console.warn(e);
}
var Ts = Number.isNaN || function(t) {
  return t !== t;
};
function I() {
  I.init.call(this);
}
Ur.exports = I;
Ur.exports.once = qf;
I.EventEmitter = I;
I.prototype._events = void 0;
I.prototype._eventsCount = 0;
I.prototype._maxListeners = void 0;
var va = 10;
function kt(e) {
  if (typeof e != "function")
    throw new TypeError('The "listener" argument must be of type Function. Received type ' + typeof e);
}
Object.defineProperty(I, "defaultMaxListeners", {
  enumerable: !0,
  get: function() {
    return va;
  },
  set: function(e) {
    if (typeof e != "number" || e < 0 || Ts(e))
      throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received ' + e + ".");
    va = e;
  }
});
I.init = function() {
  (this._events === void 0 || this._events === Object.getPrototypeOf(this)._events) && (this._events = /* @__PURE__ */ Object.create(null), this._eventsCount = 0), this._maxListeners = this._maxListeners || void 0;
};
I.prototype.setMaxListeners = function(t) {
  if (typeof t != "number" || t < 0 || Ts(t))
    throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received ' + t + ".");
  return this._maxListeners = t, this;
};
function Fs(e) {
  return e._maxListeners === void 0 ? I.defaultMaxListeners : e._maxListeners;
}
I.prototype.getMaxListeners = function() {
  return Fs(this);
};
I.prototype.emit = function(t) {
  for (var r = [], n = 1; n < arguments.length; n++)
    r.push(arguments[n]);
  var a = t === "error", s = this._events;
  if (s !== void 0)
    a = a && s.error === void 0;
  else if (!a)
    return !1;
  if (a) {
    var i;
    if (r.length > 0 && (i = r[0]), i instanceof Error)
      throw i;
    var l = new Error("Unhandled error." + (i ? " (" + i.message + ")" : ""));
    throw l.context = i, l;
  }
  var u = s[t];
  if (u === void 0)
    return !1;
  if (typeof u == "function")
    ha(u, this, r);
  else
    for (var f = u.length, h = $s(u, f), n = 0; n < f; ++n)
      ha(h[n], this, r);
  return !0;
};
function ks(e, t, r, n) {
  var a, s, i;
  if (kt(r), s = e._events, s === void 0 ? (s = e._events = /* @__PURE__ */ Object.create(null), e._eventsCount = 0) : (s.newListener !== void 0 && (e.emit(
    "newListener",
    t,
    r.listener ? r.listener : r
  ), s = e._events), i = s[t]), i === void 0)
    i = s[t] = r, ++e._eventsCount;
  else if (typeof i == "function" ? i = s[t] = n ? [r, i] : [i, r] : n ? i.unshift(r) : i.push(r), a = Fs(e), a > 0 && i.length > a && !i.warned) {
    i.warned = !0;
    var l = new Error("Possible EventEmitter memory leak detected. " + i.length + " " + String(t) + " listeners added. Use emitter.setMaxListeners() to increase limit");
    l.name = "MaxListenersExceededWarning", l.emitter = e, l.type = t, l.count = i.length, Bf(l);
  }
  return e;
}
I.prototype.addListener = function(t, r) {
  return ks(this, t, r, !1);
};
I.prototype.on = I.prototype.addListener;
I.prototype.prependListener = function(t, r) {
  return ks(this, t, r, !0);
};
function Nf() {
  if (!this.fired)
    return this.target.removeListener(this.type, this.wrapFn), this.fired = !0, arguments.length === 0 ? this.listener.call(this.target) : this.listener.apply(this.target, arguments);
}
function Ds(e, t, r) {
  var n = { fired: !1, wrapFn: void 0, target: e, type: t, listener: r }, a = Nf.bind(n);
  return a.listener = r, n.wrapFn = a, a;
}
I.prototype.once = function(t, r) {
  return kt(r), this.on(t, Ds(this, t, r)), this;
};
I.prototype.prependOnceListener = function(t, r) {
  return kt(r), this.prependListener(t, Ds(this, t, r)), this;
};
I.prototype.removeListener = function(t, r) {
  var n, a, s, i, l;
  if (kt(r), a = this._events, a === void 0)
    return this;
  if (n = a[t], n === void 0)
    return this;
  if (n === r || n.listener === r)
    --this._eventsCount === 0 ? this._events = /* @__PURE__ */ Object.create(null) : (delete a[t], a.removeListener && this.emit("removeListener", t, n.listener || r));
  else if (typeof n != "function") {
    for (s = -1, i = n.length - 1; i >= 0; i--)
      if (n[i] === r || n[i].listener === r) {
        l = n[i].listener, s = i;
        break;
      }
    if (s < 0)
      return this;
    s === 0 ? n.shift() : zf(n, s), n.length === 1 && (a[t] = n[0]), a.removeListener !== void 0 && this.emit("removeListener", t, l || r);
  }
  return this;
};
I.prototype.off = I.prototype.removeListener;
I.prototype.removeAllListeners = function(t) {
  var r, n, a;
  if (n = this._events, n === void 0)
    return this;
  if (n.removeListener === void 0)
    return arguments.length === 0 ? (this._events = /* @__PURE__ */ Object.create(null), this._eventsCount = 0) : n[t] !== void 0 && (--this._eventsCount === 0 ? this._events = /* @__PURE__ */ Object.create(null) : delete n[t]), this;
  if (arguments.length === 0) {
    var s = Object.keys(n), i;
    for (a = 0; a < s.length; ++a)
      i = s[a], i !== "removeListener" && this.removeAllListeners(i);
    return this.removeAllListeners("removeListener"), this._events = /* @__PURE__ */ Object.create(null), this._eventsCount = 0, this;
  }
  if (r = n[t], typeof r == "function")
    this.removeListener(t, r);
  else if (r !== void 0)
    for (a = r.length - 1; a >= 0; a--)
      this.removeListener(t, r[a]);
  return this;
};
function Ls(e, t, r) {
  var n = e._events;
  if (n === void 0)
    return [];
  var a = n[t];
  return a === void 0 ? [] : typeof a == "function" ? r ? [a.listener || a] : [a] : r ? Vf(a) : $s(a, a.length);
}
I.prototype.listeners = function(t) {
  return Ls(this, t, !0);
};
I.prototype.rawListeners = function(t) {
  return Ls(this, t, !1);
};
I.listenerCount = function(e, t) {
  return typeof e.listenerCount == "function" ? e.listenerCount(t) : Ms.call(e, t);
};
I.prototype.listenerCount = Ms;
function Ms(e) {
  var t = this._events;
  if (t !== void 0) {
    var r = t[e];
    if (typeof r == "function")
      return 1;
    if (r !== void 0)
      return r.length;
  }
  return 0;
}
I.prototype.eventNames = function() {
  return this._eventsCount > 0 ? ht(this._events) : [];
};
function $s(e, t) {
  for (var r = new Array(t), n = 0; n < t; ++n)
    r[n] = e[n];
  return r;
}
function zf(e, t) {
  for (; t + 1 < e.length; t++)
    e[t] = e[t + 1];
  e.pop();
}
function Vf(e) {
  for (var t = new Array(e.length), r = 0; r < t.length; ++r)
    t[r] = e[r].listener || e[r];
  return t;
}
function qf(e, t) {
  return new Promise(function(r, n) {
    function a(i) {
      e.removeListener(t, s), n(i);
    }
    function s() {
      typeof e.removeListener == "function" && e.removeListener("error", a), r([].slice.call(arguments));
    }
    Bs(e, t, s, { once: !0 }), t !== "error" && Wf(e, a, { once: !0 });
  });
}
function Wf(e, t, r) {
  typeof e.on == "function" && Bs(e, "error", t, r);
}
function Bs(e, t, r, n) {
  if (typeof e.on == "function")
    n.once ? e.once(t, r) : e.on(t, r);
  else if (typeof e.addEventListener == "function")
    e.addEventListener(t, function a(s) {
      n.once && e.removeEventListener(t, a), r(s);
    });
  else
    throw new TypeError('The "emitter" argument must be of type EventEmitter. Received type ' + typeof e);
}
var Kf = Ur.exports, Hf = process.env.NODE_ENV !== "production" ? function(e) {
  if (e === void 0)
    throw new Error("invariant(...): Second argument must be a string.");
} : function(e) {
};
function Uf(e, t) {
  for (var r = arguments.length, n = new Array(r > 2 ? r - 2 : 0), a = 2; a < r; a++)
    n[a - 2] = arguments[a];
  if (Hf(t), !e) {
    var s;
    if (t === void 0)
      s = new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");
    else {
      var i = 0;
      s = new Error(t.replace(/%s/g, function() {
        return String(n[i++]);
      })), s.name = "Invariant Violation";
    }
    throw s.framesToPop = 1, s;
  }
}
var Gf = Uf;
function we(e, t, r) {
  return t = Yf(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function Yf(e) {
  var t = Jf(e, "string");
  return typeof t == "symbol" ? t : String(t);
}
function Jf(e, t) {
  if (typeof e != "object" || e === null)
    return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (typeof n != "object")
      return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var X = Gf, Xf = "ID_", Zf = /* @__PURE__ */ function() {
  function e() {
    we(this, "_callbacks", void 0), we(this, "_isDispatching", void 0), we(this, "_isHandled", void 0), we(this, "_isPending", void 0), we(this, "_lastID", void 0), we(this, "_pendingPayload", void 0), this._callbacks = {}, this._isDispatching = !1, this._isHandled = {}, this._isPending = {}, this._lastID = 1;
  }
  var t = e.prototype;
  return t.register = function(n) {
    var a = Xf + this._lastID++;
    return this._callbacks[a] = n, a;
  }, t.unregister = function(n) {
    this._callbacks[n] || (process.env.NODE_ENV !== "production" ? X(!1, "Dispatcher.unregister(...): `%s` does not map to a registered callback.", n) : X(!1)), delete this._callbacks[n];
  }, t.waitFor = function(n) {
    this._isDispatching || (process.env.NODE_ENV !== "production" ? X(!1, "Dispatcher.waitFor(...): Must be invoked while dispatching.") : X(!1));
    for (var a = 0; a < n.length; a++) {
      var s = n[a];
      if (this._isPending[s]) {
        this._isHandled[s] || (process.env.NODE_ENV !== "production" ? X(!1, "Dispatcher.waitFor(...): Circular dependency detected while waiting for `%s`.", s) : X(!1));
        continue;
      }
      this._callbacks[s] || (process.env.NODE_ENV !== "production" ? X(!1, "Dispatcher.waitFor(...): `%s` does not map to a registered callback.", s) : X(!1)), this._invokeCallback(s);
    }
  }, t.dispatch = function(n) {
    this._isDispatching && (process.env.NODE_ENV !== "production" ? X(!1, "Dispatch.dispatch(...): Cannot dispatch in the middle of a dispatch.") : X(!1)), this._startDispatching(n);
    try {
      for (var a in this._callbacks)
        this._isPending[a] || this._invokeCallback(a);
    } finally {
      this._stopDispatching();
    }
  }, t.isDispatching = function() {
    return this._isDispatching;
  }, t._invokeCallback = function(n) {
    this._isPending[n] = !0, this._callbacks[n](this._pendingPayload), this._isHandled[n] = !0;
  }, t._startDispatching = function(n) {
    for (var a in this._callbacks)
      this._isPending[a] = !1, this._isHandled[a] = !1;
    this._pendingPayload = n, this._isDispatching = !0;
  }, t._stopDispatching = function() {
    delete this._pendingPayload, this._isDispatching = !1;
  }, e;
}(), Qf = Zf, ep = Qf;
const Z = new ep();
class tp extends Kf.EventEmitter {
  constructor() {
    super(...arguments);
    _(this, "objects", {});
    _(this, "set", (r, n, a, s) => {
      this.objects[r] === void 0 && (this.objects[r] = {}), this.objects[r][n] === void 0 && (this.objects[r][n] = {}), this.objects[r][n][a] = s;
    });
    _(this, "get", (r, n, a, s) => this.objects[r] === void 0 || this.objects[r][n] === void 0 || this.objects[r][n][a] == null ? s : this.objects[r][n][a]);
    _(this, "handleAction", (r) => {
      const { rjvId: n, data: a, name: s } = r;
      switch (s) {
        case "RESET":
          this.emit("reset-" + n);
          break;
        case "VARIABLE_UPDATED":
          r.data.updated_src = this.updateSrc(n, a), this.set(n, "action", "variable-update", {
            ...a,
            type: "variable-edited"
          }), this.emit("variable-update-" + n);
          break;
        case "VARIABLE_REMOVED":
          r.data.updated_src = this.updateSrc(n, a), this.set(n, "action", "variable-update", {
            ...a,
            type: "variable-removed"
          }), this.emit("variable-update-" + n);
          break;
        case "VARIABLE_ADDED":
          r.data.updated_src = this.updateSrc(n, a), this.set(n, "action", "variable-update", {
            ...a,
            type: "variable-added"
          }), this.emit("variable-update-" + n);
          break;
        case "ADD_VARIABLE_KEY_REQUEST":
          this.set(n, "action", "new-key-request", a), this.emit("add-key-request-" + n);
          break;
      }
    });
    _(this, "updateSrc", (r, n) => {
      let {
        name: a,
        namespace: s,
        new_value: i,
        existing_value: l,
        variable_removed: u
      } = n;
      s.shift();
      let f = this.get(r, "global", "src"), h = this.deepCopy(f, [...s]), p = h;
      for (const g of s)
        p = p[g];
      return u ? K(p) == "array" ? p.splice(a, 1) : delete p[a] : a !== null ? p[a] = i : h = i, this.set(r, "global", "src", h), h;
    });
    _(this, "deepCopy", (r, n) => {
      const a = K(r);
      let s, i = n.shift();
      return a == "array" ? s = [...r] : a == "object" && (s = { ...r }), i !== void 0 && (s[i] = this.deepCopy(r[i], n)), s;
    });
  }
}
const $ = new tp();
Z.register($.handleAction.bind($));
class ga extends O.PureComponent {
  constructor(r) {
    super(r);
    _(this, "toggleCollapsed", () => {
      this.setState(
        {
          collapsed: !this.state.collapsed
        },
        () => {
          $.set(
            this.props.rjvId,
            this.props.namespace,
            "collapsed",
            this.state.collapsed
          );
        }
      );
    });
    _(this, "getFunctionDisplay", (r) => {
      const { props: n } = this;
      return r ? /* @__PURE__ */ c.jsxs("span", { children: [
        this.props.value.toString().slice(9, -1).replace(/\{[\s\S]+/, ""),
        /* @__PURE__ */ c.jsxs(
          "span",
          {
            class: "function-collapsed",
            style: { fontWeight: "bold" },
            children: [
              /* @__PURE__ */ c.jsx("span", { children: "{" }),
              /* @__PURE__ */ c.jsx("span", { ...v(n.theme, "ellipsis"), children: "..." }),
              /* @__PURE__ */ c.jsx("span", { children: "}" })
            ]
          }
        )
      ] }) : this.props.value.toString().slice(9, -1);
    });
    this.state = {
      collapsed: $.get(
        r.rjvId,
        r.namespace,
        "collapsed",
        !0
      )
    };
  }
  render() {
    const r = "function", { props: n } = this, { collapsed: a } = this.state;
    return /* @__PURE__ */ c.jsxs("div", { ...v(n.theme, "function"), children: [
      /* @__PURE__ */ c.jsx(xe, { type_name: r, ...n }),
      /* @__PURE__ */ c.jsx(
        "span",
        {
          ...v(n.theme, "function-value"),
          class: "rjv-function-container",
          onClick: this.toggleCollapsed,
          children: this.getFunctionDisplay(a)
        }
      )
    ] });
  }
}
class ya extends O.PureComponent {
  render() {
    return /* @__PURE__ */ c.jsx("div", { ...v(this.props.theme, "nan"), children: "NaN" });
  }
}
class ma extends O.PureComponent {
  render() {
    return /* @__PURE__ */ c.jsx("div", { ...v(this.props.theme, "null"), children: "NULL" });
  }
}
class xa extends O.PureComponent {
  render() {
    const t = "int", { props: r } = this;
    return /* @__PURE__ */ c.jsxs("div", { ...v(r.theme, "integer"), children: [
      /* @__PURE__ */ c.jsx(xe, { type_name: t, ...r }),
      this.props.value
    ] });
  }
}
class rp extends O.PureComponent {
  render() {
    const t = "regexp", { props: r } = this;
    return /* @__PURE__ */ c.jsxs("div", { ...v(r.theme, "regexp"), children: [
      /* @__PURE__ */ c.jsx(xe, { type_name: t, ...r }),
      this.props.value.toString()
    ] });
  }
}
class ja extends O.PureComponent {
  constructor(r) {
    super(r);
    _(this, "toggleCollapsed", () => {
      this.setState(
        {
          collapsed: !this.state.collapsed
        },
        () => {
          $.set(
            this.props.rjvId,
            this.props.namespace,
            "collapsed",
            this.state.collapsed
          );
        }
      );
    });
    this.state = {
      collapsed: $.get(
        r.rjvId,
        r.namespace,
        "collapsed",
        !0
      )
    };
  }
  render() {
    const r = "string";
    this.state;
    const { props: n } = this, { collapseStringsAfterLength: a, theme: s } = n;
    let { value: i } = n, l = K(a) === "integer", u = { style: { cursor: "default" } };
    return l && i.length > a && (u.style.cursor = "pointer", this.state.collapsed && (i = /* @__PURE__ */ c.jsxs("span", { children: [
      i.substring(0, a),
      /* @__PURE__ */ c.jsx("span", { ...v(s, "ellipsis"), children: " ..." })
    ] }))), /* @__PURE__ */ c.jsxs("div", { ...v(s, "string"), children: [
      /* @__PURE__ */ c.jsx(xe, { type_name: r, ...n }),
      /* @__PURE__ */ c.jsxs(
        "span",
        {
          class: "string-value",
          ...u,
          onClick: this.toggleCollapsed,
          children: [
            '"',
            i,
            '"'
          ]
        }
      )
    ] });
  }
}
class _a extends O.PureComponent {
  render() {
    return /* @__PURE__ */ c.jsx("div", { ...v(this.props.theme, "undefined"), children: "undefined" });
  }
}
function mr() {
  return mr = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, mr.apply(this, arguments);
}
function np(e, t) {
  if (e == null)
    return {};
  var r = {}, n = Object.keys(e), a, s;
  for (s = 0; s < n.length; s++)
    a = n[s], !(t.indexOf(a) >= 0) && (r[a] = e[a]);
  return r;
}
var ap = Ei, sp = function(t) {
  var r = se.useRef(t);
  return ap(function() {
    r.current = t;
  }), r;
}, Ea = function(t, r) {
  if (typeof t == "function") {
    t(r);
    return;
  }
  t.current = r;
}, ip = function(t, r) {
  var n = Si();
  return Ci(function(a) {
    t.current = a, n.current && Ea(n.current, null), n.current = r, r && Ea(r, a);
  }, [r]);
}, Sa = {
  "min-height": "0",
  "max-height": "none",
  height: "0",
  visibility: "hidden",
  overflow: "hidden",
  position: "absolute",
  "z-index": "-1000",
  top: "0",
  right: "0"
}, op = function(t) {
  Object.keys(Sa).forEach(function(r) {
    t.style.setProperty(r, Sa[r], "important");
  });
}, Ca = op, z = null, wa = function(t, r) {
  var n = t.scrollHeight;
  return r.sizingStyle.boxSizing === "border-box" ? n + r.borderSize : n - r.paddingSize;
};
function cp(e, t, r, n) {
  r === void 0 && (r = 1), n === void 0 && (n = 1 / 0), z || (z = document.createElement("textarea"), z.setAttribute("tabindex", "-1"), z.setAttribute("aria-hidden", "true"), Ca(z)), z.parentNode === null && document.body.appendChild(z);
  var a = e.paddingSize, s = e.borderSize, i = e.sizingStyle, l = i.boxSizing;
  Object.keys(i).forEach(function(g) {
    var m = g;
    z.style[m] = i[m];
  }), Ca(z), z.value = t;
  var u = wa(z, e);
  z.value = t, u = wa(z, e), z.value = "x";
  var f = z.scrollHeight - a, h = f * r;
  l === "border-box" && (h = h + a + s), u = Math.max(h, u);
  var p = f * n;
  return l === "border-box" && (p = p + a + s), u = Math.min(p, u), [u, f];
}
var Oa = function() {
}, lp = function(t, r) {
  return t.reduce(function(n, a) {
    return n[a] = r[a], n;
  }, {});
}, up = [
  "borderBottomWidth",
  "borderLeftWidth",
  "borderRightWidth",
  "borderTopWidth",
  "boxSizing",
  "fontFamily",
  "fontSize",
  "fontStyle",
  "fontWeight",
  "letterSpacing",
  "lineHeight",
  "paddingBottom",
  "paddingLeft",
  "paddingRight",
  "paddingTop",
  // non-standard
  "tabSize",
  "textIndent",
  // non-standard
  "textRendering",
  "textTransform",
  "width",
  "wordBreak"
], dp = !!document.documentElement.currentStyle, fp = function(t) {
  var r = window.getComputedStyle(t);
  if (r === null)
    return null;
  var n = lp(up, r), a = n.boxSizing;
  if (a === "")
    return null;
  dp && a === "border-box" && (n.width = parseFloat(n.width) + parseFloat(n.borderRightWidth) + parseFloat(n.borderLeftWidth) + parseFloat(n.paddingRight) + parseFloat(n.paddingLeft) + "px");
  var s = parseFloat(n.paddingBottom) + parseFloat(n.paddingTop), i = parseFloat(n.borderBottomWidth) + parseFloat(n.borderTopWidth);
  return {
    sizingStyle: n,
    paddingSize: s,
    borderSize: i
  };
}, pp = fp;
function Ns(e, t, r) {
  var n = sp(r);
  se.useLayoutEffect(function() {
    var a = function(i) {
      return n.current(i);
    };
    if (e)
      return e.addEventListener(t, a), function() {
        return e.removeEventListener(t, a);
      };
  }, []);
}
var bp = function(t) {
  Ns(window, "resize", t);
}, hp = function(t) {
  Ns(document.fonts, "loadingdone", t);
}, vp = ["cacheMeasurements", "maxRows", "minRows", "onChange", "onHeightChange"], gp = function(t, r) {
  var n = t.cacheMeasurements, a = t.maxRows, s = t.minRows, i = t.onChange, l = i === void 0 ? Oa : i, u = t.onHeightChange, f = u === void 0 ? Oa : u, h = np(t, vp), p = h.value !== void 0, g = se.useRef(null), m = ip(g, r), E = se.useRef(0), C = se.useRef(), x = function() {
    var T = g.current, J = n && C.current ? C.current : pp(T);
    if (J) {
      C.current = J;
      var je = cp(J, T.value || T.placeholder || "x", s, a), ae = je[0], _e = je[1];
      E.current !== ae && (E.current = ae, T.style.setProperty("height", ae + "px", "important"), f(ae, {
        rowHeight: _e
      }));
    }
  }, P = function(T) {
    p || x(), l(T);
  };
  return se.useLayoutEffect(x), bp(x), hp(x), /* @__PURE__ */ se.createElement("textarea", mr({}, h, {
    onChange: P,
    ref: m
  }));
}, yp = /* @__PURE__ */ se.forwardRef(gp);
function Ra(e) {
  e = e.trim();
  try {
    if (e = JSON.stringify(JSON.parse(e)), e[0] === "[")
      return W("array", JSON.parse(e));
    if (e[0] === "{")
      return W("object", JSON.parse(e));
    if (e.match(/\-?\d+\.\d+/) && e.match(/\-?\d+\.\d+/)[0] === e)
      return W("float", parseFloat(e));
    if (e.match(/\-?\d+e-\d+/) && e.match(/\-?\d+e-\d+/)[0] === e)
      return W("float", Number(e));
    if (e.match(/\-?\d+/) && e.match(/\-?\d+/)[0] === e)
      return W("integer", parseInt(e));
    if (e.match(/\-?\d+e\+\d+/) && e.match(/\-?\d+e\+\d+/)[0] === e)
      return W("integer", Number(e));
  } catch {
  }
  switch (e = e.toLowerCase(), e) {
    case "undefined":
      return W("undefined", void 0);
    case "nan":
      return W("nan", NaN);
    case "null":
      return W("null", null);
    case "true":
      return W("boolean", !0);
    case "false":
      return W("boolean", !1);
    default:
      if (e = Date.parse(e), e)
        return W("date", new Date(e));
  }
  return W(!1, null);
}
function W(e, t) {
  return {
    type: e,
    value: t
  };
}
const mp = (e) => {
  const t = K(e);
  let r;
  switch (t) {
    case "undefined": {
      r = "undefined";
      break;
    }
    case "nan":
      r = "NaN";
      break;
    case "string":
      r = e;
      break;
    case "date":
      r = e.toString();
      break;
    case "function":
      r = e.toString();
      break;
    case "regexp":
      r = e.toString();
      break;
    default:
      try {
        r = JSON.stringify(e, null, "  ");
      } catch {
        r = "";
      }
  }
  return r;
}, xp = "#000000";
class jp extends O.PureComponent {
  render() {
    const { props: t } = this, { style: r, ...n } = t;
    return /* @__PURE__ */ c.jsx("span", { ...n, children: /* @__PURE__ */ c.jsx(
      "svg",
      {
        ...Y(r),
        viewBox: "0 0 24 24",
        fill: "currentColor",
        preserveAspectRatio: "xMidYMid meet",
        children: /* @__PURE__ */ c.jsx("path", { d: "M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20,12C20,16.41 16.41,20 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M7,13H17V11H7" })
      }
    ) });
  }
}
class _p extends O.PureComponent {
  render() {
    const { props: t } = this, { style: r, ...n } = t;
    return /* @__PURE__ */ c.jsx("span", { ...n, children: /* @__PURE__ */ c.jsx(
      "svg",
      {
        ...Y(r),
        viewBox: "0 0 24 24",
        fill: "currentColor",
        preserveAspectRatio: "xMidYMid meet",
        children: /* @__PURE__ */ c.jsx("path", { d: "M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20,12C20,16.41 16.41,20 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M13,7H11V11H7V13H11V17H13V13H17V11H13V7Z" })
      }
    ) });
  }
}
class Ep extends O.PureComponent {
  render() {
    const { props: t } = this, { style: r, ...n } = t, a = Y(r).style;
    return /* @__PURE__ */ c.jsx("span", { ...n, children: /* @__PURE__ */ c.jsx(
      "svg",
      {
        fill: a.color,
        width: a.height,
        height: a.width,
        style: a,
        viewBox: "0 0 1792 1792",
        children: /* @__PURE__ */ c.jsx("path", { d: "M1344 800v64q0 14-9 23t-23 9h-832q-14 0-23-9t-9-23v-64q0-14 9-23t23-9h832q14 0 23 9t9 23zm128 448v-832q0-66-47-113t-113-47h-832q-66 0-113 47t-47 113v832q0 66 47 113t113 47h832q66 0 113-47t47-113zm128-832v832q0 119-84.5 203.5t-203.5 84.5h-832q-119 0-203.5-84.5t-84.5-203.5v-832q0-119 84.5-203.5t203.5-84.5h832q119 0 203.5 84.5t84.5 203.5z" })
      }
    ) });
  }
}
class Sp extends O.PureComponent {
  render() {
    const { props: t } = this, { style: r, ...n } = t, a = Y(r).style;
    return /* @__PURE__ */ c.jsx("span", { ...n, children: /* @__PURE__ */ c.jsx(
      "svg",
      {
        fill: a.color,
        width: a.height,
        height: a.width,
        style: a,
        viewBox: "0 0 1792 1792",
        children: /* @__PURE__ */ c.jsx("path", { d: "M1344 800v64q0 14-9 23t-23 9h-352v352q0 14-9 23t-23 9h-64q-14 0-23-9t-9-23v-352h-352q-14 0-23-9t-9-23v-64q0-14 9-23t23-9h352v-352q0-14 9-23t23-9h64q14 0 23 9t9 23v352h352q14 0 23 9t9 23zm128 448v-832q0-66-47-113t-113-47h-832q-66 0-113 47t-47 113v832q0 66 47 113t113 47h832q66 0 113-47t47-113zm128-832v832q0 119-84.5 203.5t-203.5 84.5h-832q-119 0-203.5-84.5t-84.5-203.5v-832q0-119 84.5-203.5t203.5-84.5h832q119 0 203.5 84.5t84.5 203.5z" })
      }
    ) });
  }
}
class Cp extends O.PureComponent {
  render() {
    const { props: t } = this, { style: r, ...n } = t;
    return /* @__PURE__ */ c.jsx("span", { ...n, children: /* @__PURE__ */ c.jsx(
      "svg",
      {
        style: {
          ...Y(r).style,
          paddingLeft: "2px",
          verticalAlign: "top"
        },
        viewBox: "0 0 15 15",
        fill: "currentColor",
        children: /* @__PURE__ */ c.jsx("path", { d: "M0 14l6-6-6-6z" })
      }
    ) });
  }
}
class wp extends O.PureComponent {
  render() {
    const { props: t } = this, { style: r, ...n } = t;
    return /* @__PURE__ */ c.jsx("span", { ...n, children: /* @__PURE__ */ c.jsx(
      "svg",
      {
        style: {
          ...Y(r).style,
          paddingLeft: "2px",
          verticalAlign: "top"
        },
        viewBox: "0 0 15 15",
        fill: "currentColor",
        children: /* @__PURE__ */ c.jsx("path", { d: "M0 5l6 6 6-6z" })
      }
    ) });
  }
}
class Aa extends O.PureComponent {
  render() {
    const { props: t } = this, { style: r, ...n } = t;
    return /* @__PURE__ */ c.jsx("span", { ...n, children: /* @__PURE__ */ c.jsx(
      "svg",
      {
        ...Y(r),
        viewBox: "0 0 40 40",
        fill: "currentColor",
        preserveAspectRatio: "xMidYMid meet",
        children: /* @__PURE__ */ c.jsx("g", { children: /* @__PURE__ */ c.jsx("path", { d: "m30 35h-25v-22.5h25v7.5h2.5v-12.5c0-1.4-1.1-2.5-2.5-2.5h-7.5c0-2.8-2.2-5-5-5s-5 2.2-5 5h-7.5c-1.4 0-2.5 1.1-2.5 2.5v27.5c0 1.4 1.1 2.5 2.5 2.5h25c1.4 0 2.5-1.1 2.5-2.5v-5h-2.5v5z m-20-27.5h2.5s2.5-1.1 2.5-2.5 1.1-2.5 2.5-2.5 2.5 1.1 2.5 2.5 1.3 2.5 2.5 2.5h2.5s2.5 1.1 2.5 2.5h-20c0-1.5 1.1-2.5 2.5-2.5z m-2.5 20h5v-2.5h-5v2.5z m17.5-5v-5l-10 7.5 10 7.5v-5h12.5v-5h-12.5z m-17.5 10h7.5v-2.5h-7.5v2.5z m12.5-17.5h-12.5v2.5h12.5v-2.5z m-7.5 5h-5v2.5h5v-2.5z" }) })
      }
    ) });
  }
}
class xr extends O.PureComponent {
  render() {
    const { props: t } = this, { style: r, ...n } = t;
    return /* @__PURE__ */ c.jsx("span", { ...n, children: /* @__PURE__ */ c.jsx(
      "svg",
      {
        ...Y(r),
        viewBox: "0 0 40 40",
        fill: "currentColor",
        preserveAspectRatio: "xMidYMid meet",
        children: /* @__PURE__ */ c.jsx("g", { children: /* @__PURE__ */ c.jsx("path", { d: "m28.6 25q0-0.5-0.4-1l-4-4 4-4q0.4-0.5 0.4-1 0-0.6-0.4-1.1l-2-2q-0.4-0.4-1-0.4-0.6 0-1 0.4l-4.1 4.1-4-4.1q-0.4-0.4-1-0.4-0.6 0-1 0.4l-2 2q-0.5 0.5-0.5 1.1 0 0.5 0.5 1l4 4-4 4q-0.5 0.5-0.5 1 0 0.7 0.5 1.1l2 2q0.4 0.4 1 0.4 0.6 0 1-0.4l4-4.1 4.1 4.1q0.4 0.4 1 0.4 0.6 0 1-0.4l2-2q0.4-0.4 0.4-1z m8.7-5q0 4.7-2.3 8.6t-6.3 6.2-8.6 2.3-8.6-2.3-6.2-6.2-2.3-8.6 2.3-8.6 6.2-6.2 8.6-2.3 8.6 2.3 6.3 6.2 2.3 8.6z" }) })
      }
    ) });
  }
}
class Op extends O.PureComponent {
  render() {
    const { props: t } = this, { style: r, ...n } = t;
    return /* @__PURE__ */ c.jsx("span", { ...n, children: /* @__PURE__ */ c.jsx(
      "svg",
      {
        ...Y(r),
        viewBox: "0 0 40 40",
        fill: "currentColor",
        preserveAspectRatio: "xMidYMid meet",
        children: /* @__PURE__ */ c.jsx("g", { children: /* @__PURE__ */ c.jsx("path", { d: "m30.1 21.4v-2.8q0-0.6-0.4-1t-1-0.5h-5.7v-5.7q0-0.6-0.4-1t-1-0.4h-2.9q-0.6 0-1 0.4t-0.4 1v5.7h-5.7q-0.6 0-1 0.5t-0.5 1v2.8q0 0.6 0.5 1t1 0.5h5.7v5.7q0 0.5 0.4 1t1 0.4h2.9q0.6 0 1-0.4t0.4-1v-5.7h5.7q0.6 0 1-0.5t0.4-1z m7.2-1.4q0 4.7-2.3 8.6t-6.3 6.2-8.6 2.3-8.6-2.3-6.2-6.2-2.3-8.6 2.3-8.6 6.2-6.2 8.6-2.3 8.6 2.3 6.3 6.2 2.3 8.6z" }) })
      }
    ) });
  }
}
class zs extends O.PureComponent {
  render() {
    const { props: t } = this, { style: r, ...n } = t;
    return /* @__PURE__ */ c.jsx("span", { ...n, children: /* @__PURE__ */ c.jsx(
      "svg",
      {
        ...Y(r),
        viewBox: "0 0 40 40",
        fill: "currentColor",
        preserveAspectRatio: "xMidYMid meet",
        children: /* @__PURE__ */ c.jsx("g", { children: /* @__PURE__ */ c.jsx("path", { d: "m31.6 21.6h-10v10h-3.2v-10h-10v-3.2h10v-10h3.2v10h10v3.2z" }) })
      }
    ) });
  }
}
class Rp extends O.PureComponent {
  render() {
    const { props: t } = this, { style: r, ...n } = t;
    return /* @__PURE__ */ c.jsx("span", { ...n, children: /* @__PURE__ */ c.jsx(
      "svg",
      {
        ...Y(r),
        viewBox: "0 0 40 40",
        fill: "currentColor",
        preserveAspectRatio: "xMidYMid meet",
        children: /* @__PURE__ */ c.jsx("g", { children: /* @__PURE__ */ c.jsx("path", { d: "m19.8 26.4l2.6-2.6-3.4-3.4-2.6 2.6v1.3h2.2v2.1h1.2z m9.8-16q-0.3-0.4-0.7 0l-7.8 7.8q-0.4 0.4 0 0.7t0.7 0l7.8-7.8q0.4-0.4 0-0.7z m1.8 13.2v4.3q0 2.6-1.9 4.5t-4.5 1.9h-18.6q-2.6 0-4.5-1.9t-1.9-4.5v-18.6q0-2.7 1.9-4.6t4.5-1.8h18.6q1.4 0 2.6 0.5 0.3 0.2 0.4 0.5 0.1 0.4-0.2 0.7l-1.1 1.1q-0.3 0.3-0.7 0.1-0.5-0.1-1-0.1h-18.6q-1.4 0-2.5 1.1t-1 2.5v18.6q0 1.4 1 2.5t2.5 1h18.6q1.5 0 2.5-1t1.1-2.5v-2.9q0-0.2 0.2-0.4l1.4-1.5q0.3-0.3 0.8-0.1t0.4 0.6z m-2.1-16.5l6.4 6.5-15 15h-6.4v-6.5z m9.9 3l-2.1 2-6.4-6.4 2.1-2q0.6-0.7 1.5-0.7t1.5 0.7l3.4 3.4q0.6 0.6 0.6 1.5t-0.6 1.5z" }) })
      }
    ) });
  }
}
class jr extends O.PureComponent {
  render() {
    const { props: t } = this, { style: r, ...n } = t;
    return /* @__PURE__ */ c.jsx("span", { ...n, children: /* @__PURE__ */ c.jsx(
      "svg",
      {
        ...Y(r),
        viewBox: "0 0 40 40",
        fill: "currentColor",
        preserveAspectRatio: "xMidYMid meet",
        children: /* @__PURE__ */ c.jsx("g", { children: /* @__PURE__ */ c.jsx("path", { d: "m31.7 16.4q0-0.6-0.4-1l-2.1-2.1q-0.4-0.4-1-0.4t-1 0.4l-9.1 9.1-5-5q-0.5-0.4-1-0.4t-1 0.4l-2.1 2q-0.4 0.4-0.4 1 0 0.6 0.4 1l8.1 8.1q0.4 0.4 1 0.4 0.6 0 1-0.4l12.2-12.1q0.4-0.4 0.4-1z m5.6 3.6q0 4.7-2.3 8.6t-6.3 6.2-8.6 2.3-8.6-2.3-6.2-6.2-2.3-8.6 2.3-8.6 6.2-6.2 8.6-2.3 8.6 2.3 6.3 6.2 2.3 8.6z" }) })
      }
    ) });
  }
}
function Y(e) {
  return e || (e = {}), {
    style: {
      verticalAlign: "middle",
      ...e,
      color: e.color ? e.color : xp,
      height: "1em",
      width: "1em"
    }
  };
}
class Vs extends O.PureComponent {
  constructor(r) {
    super(r);
    _(this, "copiedTimer", null);
    _(this, "handleCopy", () => {
      const r = document.createElement("textarea"), { clickCallback: n, src: a, namespace: s } = this.props;
      r.innerHTML = JSON.stringify(
        this.clipboardValue(a),
        null,
        "  "
      ), document.body.appendChild(r), r.select(), document.execCommand("copy"), document.body.removeChild(r), this.copiedTimer = setTimeout(() => {
        this.setState({
          copied: !1
        });
      }, 5500), this.setState({ copied: !0 }, () => {
        typeof n == "function" && n({
          src: a,
          namespace: s,
          name: s[s.length - 1]
        });
      });
    });
    _(this, "getClippyIcon", () => {
      const { theme: r } = this.props;
      return this.state.copied ? /* @__PURE__ */ c.jsxs("span", { children: [
        /* @__PURE__ */ c.jsx(Aa, { class: "copy-icon", ...v(r, "copy-icon") }),
        /* @__PURE__ */ c.jsx("span", { ...v(r, "copy-icon-copied"), children: "✔" })
      ] }) : /* @__PURE__ */ c.jsx(Aa, { class: "copy-icon", ...v(r, "copy-icon") });
    });
    _(this, "clipboardValue", (r) => {
      switch (K(r)) {
        case "function":
        case "regexp":
          return r.toString();
        default:
          return r;
      }
    });
    this.state = {
      copied: !1
    };
  }
  componentWillUnmount() {
    this.copiedTimer && (clearTimeout(this.copiedTimer), this.copiedTimer = null);
  }
  render() {
    const { src: r, theme: n, hidden: a, rowHovered: s } = this.props;
    let i = v(n, "copy-to-clipboard").style, l = "inline";
    return a && (l = "none"), /* @__PURE__ */ c.jsx(
      "span",
      {
        className: "copy-to-clipboard-container",
        title: "Copy to clipboard",
        style: {
          verticalAlign: "top",
          display: s ? "inline-block" : "none"
        },
        children: /* @__PURE__ */ c.jsx(
          "span",
          {
            style: {
              ...i,
              display: l
            },
            onClick: this.handleCopy,
            children: this.getClippyIcon()
          }
        )
      }
    );
  }
}
class Ap extends O.PureComponent {
  constructor(r) {
    super(r);
    _(this, "getEditIcon", () => {
      const { variable: r, theme: n } = this.props;
      return /* @__PURE__ */ c.jsx(
        "div",
        {
          class: "click-to-edit",
          style: {
            verticalAlign: "top",
            display: this.state.hovered ? "inline-block" : "none"
          },
          children: /* @__PURE__ */ c.jsx(
            Rp,
            {
              class: "click-to-edit-icon",
              ...v(n, "editVarIcon"),
              onClick: () => {
                this.prepopInput(r);
              }
            }
          )
        }
      );
    });
    _(this, "prepopInput", (r) => {
      if (this.props.onEdit !== !1) {
        const n = mp(r.value), a = Ra(n);
        this.setState({
          editMode: !0,
          editValue: n,
          parsedInput: {
            type: a.type,
            value: a.value
          }
        });
      }
    });
    _(this, "getRemoveIcon", () => {
      const { variable: r, namespace: n, theme: a, rjvId: s } = this.props;
      return /* @__PURE__ */ c.jsx(
        "div",
        {
          class: "click-to-remove",
          style: {
            verticalAlign: "top",
            display: this.state.hovered ? "inline-block" : "none"
          },
          children: /* @__PURE__ */ c.jsx(
            xr,
            {
              class: "click-to-remove-icon",
              ...v(a, "removeVarIcon"),
              onClick: () => {
                Z.dispatch({
                  name: "VARIABLE_REMOVED",
                  rjvId: s,
                  data: {
                    name: r.name,
                    namespace: n,
                    existing_value: r.value,
                    variable_removed: !0
                  }
                });
              }
            }
          )
        }
      );
    });
    _(this, "getValue", (r, n) => {
      const a = n ? !1 : r.type, { props: s } = this;
      switch (a) {
        case !1:
          return this.getEditInput();
        case "string":
          return /* @__PURE__ */ c.jsx(ja, { value: r.value, ...s });
        case "integer":
          return /* @__PURE__ */ c.jsx(xa, { value: r.value, ...s });
        case "float":
          return /* @__PURE__ */ c.jsx(ba, { value: r.value, ...s });
        case "boolean":
          return /* @__PURE__ */ c.jsx(fa, { value: r.value, ...s });
        case "function":
          return /* @__PURE__ */ c.jsx(ga, { value: r.value, ...s });
        case "null":
          return /* @__PURE__ */ c.jsx(ma, { ...s });
        case "nan":
          return /* @__PURE__ */ c.jsx(ya, { ...s });
        case "undefined":
          return /* @__PURE__ */ c.jsx(_a, { ...s });
        case "date":
          return /* @__PURE__ */ c.jsx(pa, { value: r.value, ...s });
        case "regexp":
          return /* @__PURE__ */ c.jsx(rp, { value: r.value, ...s });
        default:
          return /* @__PURE__ */ c.jsx("div", { class: "object-value", children: JSON.stringify(r.value) });
      }
    });
    _(this, "getEditInput", () => {
      const { theme: r } = this.props, { editValue: n } = this.state;
      return /* @__PURE__ */ c.jsxs("div", { children: [
        /* @__PURE__ */ c.jsx(
          yp,
          {
            type: "text",
            inputRef: (a) => a && a.focus(),
            value: n,
            class: "variable-editor",
            onChange: (a) => {
              const s = a.target.value, i = Ra(s);
              this.setState({
                editValue: s,
                parsedInput: {
                  type: i.type,
                  value: i.value
                }
              });
            },
            onKeyDown: (a) => {
              switch (a.key) {
                case "Escape": {
                  this.setState({
                    editMode: !1,
                    editValue: ""
                  });
                  break;
                }
                case "Enter": {
                  (a.ctrlKey || a.metaKey) && this.submitEdit(!0);
                  break;
                }
              }
              a.stopPropagation();
            },
            placeholder: "update this value",
            minRows: 2,
            ...v(r, "edit-input")
          }
        ),
        /* @__PURE__ */ c.jsxs("div", { ...v(r, "edit-icon-container"), children: [
          /* @__PURE__ */ c.jsx(
            xr,
            {
              class: "edit-cancel",
              ...v(r, "cancel-icon"),
              onClick: () => {
                this.setState({ editMode: !1, editValue: "" });
              }
            }
          ),
          /* @__PURE__ */ c.jsx(
            jr,
            {
              class: "edit-check string-value",
              ...v(r, "check-icon"),
              onClick: () => {
                this.submitEdit();
              }
            }
          ),
          /* @__PURE__ */ c.jsx("div", { children: this.showDetected() })
        ] })
      ] });
    });
    _(this, "submitEdit", (r) => {
      const { variable: n, namespace: a, rjvId: s } = this.props, { editValue: i, parsedInput: l } = this.state;
      let u = i;
      r && l.type && (u = l.value), this.setState({
        editMode: !1
      }), Z.dispatch({
        name: "VARIABLE_UPDATED",
        rjvId: s,
        data: {
          name: n.name,
          namespace: a,
          existing_value: n.value,
          new_value: u,
          variable_removed: !1
        }
      });
    });
    _(this, "showDetected", () => {
      const { theme: r, variable: n, namespace: a, rjvId: s } = this.props;
      this.state.parsedInput;
      const i = this.getDetectedInput();
      if (i)
        return /* @__PURE__ */ c.jsx("div", { children: /* @__PURE__ */ c.jsxs("div", { ...v(r, "detected-row"), children: [
          i,
          /* @__PURE__ */ c.jsx(
            jr,
            {
              class: "edit-check detected",
              style: {
                verticalAlign: "top",
                paddingLeft: "3px",
                ...v(r, "check-icon").style
              },
              onClick: () => {
                this.submitEdit(!0);
              }
            }
          )
        ] }) });
    });
    _(this, "getDetectedInput", () => {
      const { parsedInput: r } = this.state, { type: n, value: a } = r, { props: s } = this, { theme: i } = s;
      if (n !== !1)
        switch (n.toLowerCase()) {
          case "object":
            return /* @__PURE__ */ c.jsxs("span", { children: [
              /* @__PURE__ */ c.jsx(
                "span",
                {
                  style: {
                    ...v(i, "brace").style,
                    cursor: "default"
                  },
                  children: "{"
                }
              ),
              /* @__PURE__ */ c.jsx(
                "span",
                {
                  style: {
                    ...v(i, "ellipsis").style,
                    cursor: "default"
                  },
                  children: "..."
                }
              ),
              /* @__PURE__ */ c.jsx(
                "span",
                {
                  style: {
                    ...v(i, "brace").style,
                    cursor: "default"
                  },
                  children: "}"
                }
              )
            ] });
          case "array":
            return /* @__PURE__ */ c.jsxs("span", { children: [
              /* @__PURE__ */ c.jsx(
                "span",
                {
                  style: {
                    ...v(i, "brace").style,
                    cursor: "default"
                  },
                  children: "["
                }
              ),
              /* @__PURE__ */ c.jsx(
                "span",
                {
                  style: {
                    ...v(i, "ellipsis").style,
                    cursor: "default"
                  },
                  children: "..."
                }
              ),
              /* @__PURE__ */ c.jsx(
                "span",
                {
                  style: {
                    ...v(i, "brace").style,
                    cursor: "default"
                  },
                  children: "]"
                }
              )
            ] });
          case "string":
            return /* @__PURE__ */ c.jsx(ja, { value: a, ...s });
          case "integer":
            return /* @__PURE__ */ c.jsx(xa, { value: a, ...s });
          case "float":
            return /* @__PURE__ */ c.jsx(ba, { value: a, ...s });
          case "boolean":
            return /* @__PURE__ */ c.jsx(fa, { value: a, ...s });
          case "function":
            return /* @__PURE__ */ c.jsx(ga, { value: a, ...s });
          case "null":
            return /* @__PURE__ */ c.jsx(ma, { ...s });
          case "nan":
            return /* @__PURE__ */ c.jsx(ya, { ...s });
          case "undefined":
            return /* @__PURE__ */ c.jsx(_a, { ...s });
          case "date":
            return /* @__PURE__ */ c.jsx(pa, { value: new Date(a), ...s });
        }
    });
    this.state = {
      editMode: !1,
      editValue: "",
      hovered: !1,
      renameKey: !1,
      parsedInput: {
        type: !1,
        value: null
      }
    };
  }
  render() {
    const {
      variable: r,
      singleIndent: n,
      type: a,
      theme: s,
      namespace: i,
      indentWidth: l,
      enableClipboard: u,
      onEdit: f,
      onDelete: h,
      onSelect: p,
      displayArrayKey: g,
      quotesOnKeys: m
    } = this.props, { editMode: E } = this.state;
    return /* @__PURE__ */ Ne(
      "div",
      {
        ...v(s, "objectKeyVal", {
          paddingLeft: l * n
        }),
        onMouseEnter: () => this.setState({ ...this.state, hovered: !0 }),
        onMouseLeave: () => this.setState({ ...this.state, hovered: !1 }),
        class: "variable-row",
        key: r.name
      },
      a == "array" ? g ? /* @__PURE__ */ Ne(
        "span",
        {
          ...v(s, "array-key"),
          key: r.name + "_" + i
        },
        r.name,
        /* @__PURE__ */ c.jsx("div", { ...v(s, "colon"), children: ":" })
      ) : null : /* @__PURE__ */ c.jsxs("span", { children: [
        /* @__PURE__ */ Ne(
          "span",
          {
            ...v(s, "object-name"),
            class: "object-key",
            key: r.name + "_" + i
          },
          !!m && /* @__PURE__ */ c.jsx("span", { style: { verticalAlign: "top" }, children: '"' }),
          /* @__PURE__ */ c.jsx("span", { style: { display: "inline-block" }, children: r.name }),
          !!m && /* @__PURE__ */ c.jsx("span", { style: { verticalAlign: "top" }, children: '"' })
        ),
        /* @__PURE__ */ c.jsx("span", { ...v(s, "colon"), children: ":" })
      ] }),
      /* @__PURE__ */ c.jsx(
        "div",
        {
          class: "variable-value",
          onClick: p === !1 && f === !1 ? null : (C) => {
            let x = [...i];
            (C.ctrlKey || C.metaKey) && f !== !1 ? this.prepopInput(r) : p !== !1 && (x.shift(), p({
              ...r,
              namespace: x
            }));
          },
          ...v(s, "variableValue", {
            cursor: p === !1 ? "default" : "pointer"
          }),
          children: this.getValue(r, E)
        }
      ),
      u ? /* @__PURE__ */ c.jsx(
        Vs,
        {
          rowHovered: this.state.hovered,
          hidden: E,
          src: r.value,
          clickCallback: u,
          theme: s,
          namespace: [...i, r.name]
        }
      ) : null,
      f !== !1 && E == !1 ? this.getEditIcon() : null,
      h !== !1 && E == !1 ? this.getRemoveIcon() : null
    );
  }
}
class qs extends O.PureComponent {
  constructor() {
    super(...arguments);
    _(this, "getObjectSize", () => {
      const { size: r, theme: n, displayObjectSize: a } = this.props;
      if (a)
        return /* @__PURE__ */ c.jsxs("span", { class: "object-size", ...v(n, "object-size"), children: [
          r,
          " item",
          r === 1 ? "" : "s"
        ] });
    });
    _(this, "getAddAttribute", (r) => {
      const { theme: n, namespace: a, name: s, src: i, rjvId: l, depth: u } = this.props;
      return /* @__PURE__ */ c.jsx(
        "span",
        {
          class: "click-to-add",
          style: {
            verticalAlign: "top",
            display: r ? "inline-block" : "none"
          },
          children: /* @__PURE__ */ c.jsx(
            Op,
            {
              class: "click-to-add-icon",
              ...v(n, "addVarIcon"),
              onClick: () => {
                const f = {
                  name: u > 0 ? s : null,
                  namespace: a.splice(
                    0,
                    a.length - 1
                  ),
                  existing_value: i,
                  variable_removed: !1,
                  key_name: null
                };
                K(i) === "object" ? Z.dispatch({
                  name: "ADD_VARIABLE_KEY_REQUEST",
                  rjvId: l,
                  data: f
                }) : Z.dispatch({
                  name: "VARIABLE_ADDED",
                  rjvId: l,
                  data: {
                    ...f,
                    new_value: [...i, null]
                  }
                });
              }
            }
          )
        }
      );
    });
    _(this, "getRemoveObject", (r) => {
      const { theme: n, hover: a, namespace: s, name: i, src: l, rjvId: u } = this.props;
      if (s.length !== 1)
        return /* @__PURE__ */ c.jsx(
          "span",
          {
            class: "click-to-remove",
            style: {
              display: r ? "inline-block" : "none"
            },
            children: /* @__PURE__ */ c.jsx(
              xr,
              {
                class: "click-to-remove-icon",
                ...v(n, "removeVarIcon"),
                onClick: () => {
                  Z.dispatch({
                    name: "VARIABLE_REMOVED",
                    rjvId: u,
                    data: {
                      name: i,
                      namespace: s.splice(
                        0,
                        s.length - 1
                      ),
                      existing_value: l,
                      variable_removed: !0
                    }
                  });
                }
              }
            )
          }
        );
    });
    _(this, "render", () => {
      const {
        theme: r,
        onDelete: n,
        onAdd: a,
        enableClipboard: s,
        src: i,
        namespace: l,
        rowHovered: u
      } = this.props;
      return /* @__PURE__ */ c.jsxs(
        "div",
        {
          ...v(r, "object-meta-data"),
          class: "object-meta-data",
          onClick: (f) => {
            f.stopPropagation();
          },
          children: [
            this.getObjectSize(),
            s ? /* @__PURE__ */ c.jsx(
              Vs,
              {
                rowHovered: u,
                clickCallback: s,
                src: i,
                theme: r,
                namespace: l
              }
            ) : null,
            a !== !1 ? this.getAddAttribute(u) : null,
            n !== !1 ? this.getRemoveObject(u) : null
          ]
        }
      );
    });
  }
}
function Ws(e) {
  const {
    parent_type: t,
    namespace: r,
    quotesOnKeys: n,
    theme: a,
    jsvRoot: s,
    name: i,
    displayArrayKey: l
  } = e, u = e.name ? e.name : "";
  return s && (i === !1 || i === null) ? /* @__PURE__ */ c.jsx("span", {}) : t == "array" ? l ? /* @__PURE__ */ Ne("span", { ...v(a, "array-key"), key: r }, /* @__PURE__ */ c.jsx("span", { class: "array-key", children: u }), /* @__PURE__ */ c.jsx("span", { ...v(a, "colon"), children: ":" })) : /* @__PURE__ */ c.jsx("span", {}) : /* @__PURE__ */ Ne("span", { ...v(a, "object-name"), key: r }, /* @__PURE__ */ c.jsxs("span", { class: "object-key", children: [
    n && /* @__PURE__ */ c.jsx("span", { style: { verticalAlign: "top" }, children: '"' }),
    /* @__PURE__ */ c.jsx("span", { children: u }),
    n && /* @__PURE__ */ c.jsx("span", { style: { verticalAlign: "top" }, children: '"' })
  ] }), /* @__PURE__ */ c.jsx("span", { ...v(a, "colon"), children: ":" }));
}
function Ks(e) {
  const { theme: t, iconStyle: r } = e;
  switch (r) {
    case "triangle":
      return /* @__PURE__ */ c.jsx(
        wp,
        {
          ...v(t, "expanded-icon"),
          class: "expanded-icon"
        }
      );
    case "square":
      return /* @__PURE__ */ c.jsx(
        Ep,
        {
          ...v(t, "expanded-icon"),
          class: "expanded-icon"
        }
      );
    default:
      return /* @__PURE__ */ c.jsx(
        jp,
        {
          ...v(t, "expanded-icon"),
          class: "expanded-icon"
        }
      );
  }
}
function Hs(e) {
  const { theme: t, iconStyle: r } = e;
  switch (r) {
    case "triangle":
      return /* @__PURE__ */ c.jsx(
        Cp,
        {
          ...v(t, "collapsed-icon"),
          class: "collapsed-icon"
        }
      );
    case "square":
      return /* @__PURE__ */ c.jsx(
        Sp,
        {
          ...v(t, "collapsed-icon"),
          class: "collapsed-icon"
        }
      );
    default:
      return /* @__PURE__ */ c.jsx(
        _p,
        {
          ...v(t, "collapsed-icon"),
          class: "collapsed-icon"
        }
      );
  }
}
const Pa = 5;
class Us extends O.PureComponent {
  constructor(r) {
    super(r);
    _(this, "toggleCollapsed", (r) => {
      const n = [];
      for (const a in this.state.expanded)
        n.push(this.state.expanded[a]);
      n[r] = !n[r], this.setState({
        expanded: n
      });
    });
    this.state = {
      expanded: []
    };
  }
  getExpandedIcon(r) {
    const { theme: n, iconStyle: a } = this.props;
    return this.state.expanded[r] ? /* @__PURE__ */ c.jsx(Ks, { theme: n, iconStyle: a }) : /* @__PURE__ */ c.jsx(Hs, { theme: n, iconStyle: a });
  }
  render() {
    const {
      src: r,
      groupArraysAfterLength: n,
      depth: a,
      name: s,
      theme: i,
      jsvRoot: l,
      namespace: u,
      parent_type: f,
      ...h
    } = this.props;
    let p = 0;
    const g = this.props.indentWidth * Pa;
    l || (p = this.props.indentWidth * Pa);
    const m = n, E = Math.ceil(r.length / m);
    return /* @__PURE__ */ c.jsxs(
      "div",
      {
        class: "object-key-val",
        ...v(i, l ? "jsv-root" : "objectKeyVal", {
          paddingLeft: p
        }),
        children: [
          /* @__PURE__ */ c.jsx(Ws, { ...this.props }),
          /* @__PURE__ */ c.jsx("span", { children: /* @__PURE__ */ c.jsx(qs, { size: r.length, ...this.props }) }),
          [...Array(E)].map((C, x) => /* @__PURE__ */ c.jsx(
            "div",
            {
              class: "object-key-val array-group",
              ...v(i, "objectKeyVal", {
                marginLeft: 6,
                paddingLeft: g
              }),
              children: /* @__PURE__ */ c.jsxs("span", { ...v(i, "brace-row"), children: [
                /* @__PURE__ */ c.jsx(
                  "div",
                  {
                    class: "icon-container",
                    ...v(i, "icon-container"),
                    onClick: (P) => {
                      this.toggleCollapsed(x);
                    },
                    children: this.getExpandedIcon(x)
                  }
                ),
                this.state.expanded[x] ? /* @__PURE__ */ c.jsx(
                  mt,
                  {
                    depth: 0,
                    name: !1,
                    collapsed: !1,
                    groupArraysAfterLength: m,
                    index_offset: x * m,
                    src: r.slice(x * m, x * m + m),
                    namespace: u,
                    type: "array",
                    parent_type: "array_group",
                    theme: i,
                    ...h
                  },
                  s + x
                ) : /* @__PURE__ */ c.jsxs(
                  "span",
                  {
                    ...v(i, "brace"),
                    onClick: (P) => {
                      this.toggleCollapsed(x);
                    },
                    class: "array-group-brace",
                    children: [
                      "[",
                      /* @__PURE__ */ c.jsx(
                        "div",
                        {
                          ...v(
                            i,
                            "array-group-meta-data"
                          ),
                          class: "array-group-meta-data",
                          children: /* @__PURE__ */ c.jsxs(
                            "span",
                            {
                              class: "object-size",
                              ...v(i, "object-size"),
                              children: [
                                x * m,
                                " - ",
                                x * m + m > r.length ? r.length : x * m + m
                              ]
                            }
                          )
                        }
                      ),
                      "]"
                    ]
                  }
                )
              ] })
            },
            x
          ))
        ]
      }
    );
  }
}
const Ia = 1, Ta = 5, Ve = class Ve extends O.PureComponent {
  constructor(r) {
    super(r);
    _(this, "toggleCollapsed", () => {
      const { onToggleCollapse: r, name: n, namespace: a, rjvId: s } = this.props;
      this.setState(
        {
          expanded: !this.state.expanded
        },
        () => {
          $.set(
            s,
            a,
            "expanded",
            this.state.expanded
          ), typeof r == "function" && r({ expanded: this.state.expanded, name: n, namespace: a });
        }
      );
    });
    _(this, "getObjectContent", (r, n, a) => /* @__PURE__ */ c.jsx("div", { class: "pushed-content object-container", children: /* @__PURE__ */ c.jsx(
      "div",
      {
        class: "object-content",
        ...v(this.props.theme, "pushed-content"),
        children: this.renderObjectContents(n, a)
      }
    ) }));
    _(this, "getEllipsis", () => {
      const { size: r } = this.state;
      return r === 0 ? null : /* @__PURE__ */ c.jsx(
        "div",
        {
          ...v(this.props.theme, "ellipsis"),
          class: "node-ellipsis",
          onClick: this.toggleCollapsed,
          children: "..."
        }
      );
    });
    _(this, "getObjectMetaData", (r) => {
      this.props;
      const { size: n, hovered: a } = this.state;
      return /* @__PURE__ */ c.jsx(qs, { rowHovered: a, size: n, ...this.props });
    });
    _(this, "renderObjectContents", (r, n) => {
      const {
        depth: a,
        parent_type: s,
        index_offset: i,
        groupArraysAfterLength: l,
        namespace: u
      } = this.props, { object_type: f } = this.state;
      let h = [], p, g = Object.keys(r || {});
      return this.props.sortKeys && f !== "array" && (g = g.sort()), g.forEach((m) => {
        if (p = new Pp(m, r[m]), s === "array_group" && i && (p.name = parseInt(p.name) + i), r.hasOwnProperty(m))
          if (p.type === "object")
            h.push(
              /* @__PURE__ */ c.jsx(
                mt,
                {
                  depth: a + Ia,
                  name: p.name,
                  src: p.value,
                  namespace: u.concat(p.name),
                  parent_type: f,
                  ...n
                },
                p.name
              )
            );
          else if (p.type === "array") {
            let E = mt;
            l && p.value.length > l && (E = Us), h.push(
              /* @__PURE__ */ c.jsx(
                E,
                {
                  depth: a + Ia,
                  name: p.name,
                  src: p.value,
                  namespace: u.concat(p.name),
                  type: "array",
                  parent_type: f,
                  ...n
                },
                p.name
              )
            );
          } else
            h.push(
              /* @__PURE__ */ c.jsx(
                Ap,
                {
                  variable: p,
                  singleIndent: Ta,
                  namespace: u,
                  type: this.props.type,
                  ...n
                },
                p.name + "_" + u
              )
            );
        else
          return;
      }), h;
    });
    const n = Ve.getState(r);
    this.state = {
      ...n,
      prevProps: {}
    };
  }
  static getDerivedStateFromProps(r, n) {
    const { prevProps: a } = n;
    return r.src !== a.src || r.collapsed !== a.collapsed || r.name !== a.name || r.namespace !== a.namespace || r.rjvId !== a.rjvId ? {
      ...Ve.getState(r),
      prevProps: r
    } : null;
  }
  getBraceStart(r, n) {
    const { src: a, theme: s, iconStyle: i, parent_type: l } = this.props;
    if (l === "array_group")
      return /* @__PURE__ */ c.jsxs("span", { children: [
        /* @__PURE__ */ c.jsx("span", { ...v(s, "brace"), children: r === "array" ? "[" : "{" }),
        n ? this.getObjectMetaData(a) : null
      ] });
    const u = n ? Ks : Hs;
    return /* @__PURE__ */ c.jsxs("span", { children: [
      /* @__PURE__ */ c.jsxs(
        "span",
        {
          onClick: (f) => {
            this.toggleCollapsed();
          },
          ...v(s, "brace-row"),
          children: [
            /* @__PURE__ */ c.jsx(
              "div",
              {
                class: "icon-container",
                ...v(s, "icon-container"),
                children: /* @__PURE__ */ c.jsx(u, { theme: s, iconStyle: i })
              }
            ),
            /* @__PURE__ */ c.jsx(Ws, { ...this.props }),
            /* @__PURE__ */ c.jsx("span", { ...v(s, "brace"), children: r === "array" ? "[" : "{" })
          ]
        }
      ),
      n ? this.getObjectMetaData(a) : null
    ] });
  }
  render() {
    const {
      depth: r,
      src: n,
      namespace: a,
      name: s,
      type: i,
      parent_type: l,
      theme: u,
      jsvRoot: f,
      iconStyle: h,
      ...p
    } = this.props, { object_type: g, expanded: m } = this.state;
    let E = {};
    return !f && l !== "array_group" ? E.paddingLeft = this.props.indentWidth * Ta : l === "array_group" && (E.borderLeft = 0, E.display = "inline"), /* @__PURE__ */ c.jsxs(
      "div",
      {
        class: "object-key-val",
        onMouseEnter: () => this.setState({ ...this.state, hovered: !0 }),
        onMouseLeave: () => this.setState({ ...this.state, hovered: !1 }),
        ...v(u, f ? "jsv-root" : "objectKeyVal", E),
        children: [
          this.getBraceStart(g, m),
          m ? this.getObjectContent(r, n, {
            theme: u,
            iconStyle: h,
            ...p
          }) : this.getEllipsis(),
          /* @__PURE__ */ c.jsxs("span", { class: "brace-row", children: [
            /* @__PURE__ */ c.jsx(
              "span",
              {
                style: {
                  ...v(u, "brace").style,
                  paddingLeft: m ? "3px" : "0px"
                },
                children: g === "array" ? "]" : "}"
              }
            ),
            m ? null : this.getObjectMetaData(n)
          ] })
        ]
      }
    );
  }
};
_(Ve, "getState", (r) => {
  const n = Object.keys(r.src).length, a = (r.collapsed === !1 || r.collapsed !== !0 && r.collapsed > r.depth) && (!r.shouldCollapse || r.shouldCollapse({
    name: r.name,
    src: r.src,
    type: K(r.src),
    namespace: r.namespace
  }) === !1) && //initialize closed if object has no items
  n !== 0;
  return {
    expanded: $.get(
      r.rjvId,
      r.namespace,
      "expanded",
      a
    ),
    object_type: r.type === "array" ? "array" : "object",
    parent_type: r.type === "array" ? "array" : "object",
    size: n,
    hovered: !1
  };
});
let yt = Ve;
class Pp {
  constructor(t, r) {
    this.name = t, this.value = r, this.type = K(r);
  }
}
La(yt);
const mt = yt;
class Ip extends O.PureComponent {
  constructor() {
    super(...arguments);
    _(this, "render", () => {
      const { props: r } = this, n = [r.name];
      let a = mt;
      return Array.isArray(r.src) && r.groupArraysAfterLength && r.src.length > r.groupArraysAfterLength && (a = Us), /* @__PURE__ */ c.jsx("div", { class: "pretty-json-container object-container", children: /* @__PURE__ */ c.jsx("div", { class: "object-content", children: /* @__PURE__ */ c.jsx(
        a,
        {
          namespace: n,
          depth: 0,
          jsvRoot: !0,
          ...r
        }
      ) }) });
    });
  }
}
class Tp extends O.PureComponent {
  constructor(r) {
    super(r);
    _(this, "closeModal", () => {
      Z.dispatch({
        rjvId: this.props.rjvId,
        name: "RESET"
      });
    });
    _(this, "submit", () => {
      this.props.submit(this.state.input);
    });
    this.state = {
      input: r.input ? r.input : ""
    };
  }
  render() {
    const { theme: r, rjvId: n, isValid: a } = this.props, { input: s } = this.state, i = a(s);
    return /* @__PURE__ */ c.jsx(
      "div",
      {
        class: "key-modal-request",
        ...v(r, "key-modal-request"),
        onClick: this.closeModal,
        children: /* @__PURE__ */ c.jsxs(
          "div",
          {
            ...v(r, "key-modal"),
            onClick: (l) => {
              l.stopPropagation();
            },
            children: [
              /* @__PURE__ */ c.jsx("div", { ...v(r, "key-modal-label"), children: "Key Name:" }),
              /* @__PURE__ */ c.jsxs("div", { style: { position: "relative" }, children: [
                /* @__PURE__ */ c.jsx(
                  "input",
                  {
                    ...v(r, "key-modal-input"),
                    class: "key-modal-input",
                    ref: (l) => l && l.focus(),
                    spellCheck: !1,
                    value: s,
                    placeholder: "...",
                    onChange: (l) => {
                      this.setState({
                        input: l.target.value
                      });
                    },
                    onKeyPress: (l) => {
                      i && l.key === "Enter" ? this.submit() : l.key === "Escape" && this.closeModal();
                    }
                  }
                ),
                i ? /* @__PURE__ */ c.jsx(
                  jr,
                  {
                    ...v(r, "key-modal-submit"),
                    class: "key-modal-submit",
                    onClick: (l) => this.submit()
                  }
                ) : null
              ] }),
              /* @__PURE__ */ c.jsx("span", { ...v(r, "key-modal-cancel"), children: /* @__PURE__ */ c.jsx(
                zs,
                {
                  ...v(r, "key-modal-cancel-icon"),
                  class: "key-modal-cancel",
                  onClick: () => {
                    Z.dispatch({
                      rjvId: n,
                      name: "RESET"
                    });
                  }
                }
              ) })
            ]
          }
        )
      }
    );
  }
}
class Fp extends O.PureComponent {
  constructor() {
    super(...arguments);
    _(this, "isValid", (r) => {
      const { rjvId: n } = this.props, a = $.get(
        n,
        "action",
        "new-key-request"
      );
      return r != "" && Object.keys(a.existing_value).indexOf(r) === -1;
    });
    _(this, "submit", (r) => {
      const { rjvId: n } = this.props;
      let a = $.get(n, "action", "new-key-request");
      a.new_value = { ...a.existing_value }, a.new_value[r] = this.props.defaultValue, Z.dispatch({
        name: "VARIABLE_ADDED",
        rjvId: n,
        data: a
      });
    });
  }
  render() {
    const { active: r, theme: n, rjvId: a } = this.props;
    return r ? /* @__PURE__ */ c.jsx(
      Tp,
      {
        rjvId: a,
        theme: n,
        isValid: this.isValid,
        submit: this.submit
      }
    ) : null;
  }
}
class kp extends O.PureComponent {
  render() {
    const { message: t, active: r, theme: n, rjvId: a } = this.props;
    return r ? /* @__PURE__ */ c.jsxs(
      "div",
      {
        class: "validation-failure",
        ...v(n, "validation-failure"),
        onClick: () => {
          Z.dispatch({
            rjvId: a,
            name: "RESET"
          });
        },
        children: [
          /* @__PURE__ */ c.jsx("span", { ...v(n, "validation-failure-label"), children: t }),
          /* @__PURE__ */ c.jsx(zs, { ...v(n, "validation-failure-clear") })
        ]
      }
    ) : null;
  }
}
const U = class U extends O.PureComponent {
  constructor(r) {
    super(r);
    //reference id for this instance
    _(this, "rjvId", Date.now().toString());
    _(this, "getListeners", () => ({
      reset: this.resetState,
      "variable-update": this.updateSrc,
      "add-key-request": this.addKeyRequest
    }));
    _(this, "updateSrc", () => {
      const {
        name: r,
        namespace: n,
        new_value: a,
        existing_value: s,
        variable_removed: i,
        updated_src: l,
        type: u
      } = $.get(this.rjvId, "action", "variable-update"), { onEdit: f, onDelete: h, onAdd: p } = this.props, { src: g } = this.state;
      let m;
      const E = {
        existing_src: g,
        new_value: a,
        updated_src: l,
        name: r,
        namespace: n,
        existing_value: s
      };
      switch (u) {
        case "variable-added":
          m = p(E);
          break;
        case "variable-edited":
          m = f(E);
          break;
        case "variable-removed":
          m = h(E);
          break;
      }
      m !== !1 ? ($.set(this.rjvId, "global", "src", l), this.setState({
        src: l
      })) : this.setState({
        validationFailure: !0
      });
    });
    _(this, "addKeyRequest", () => {
      this.setState({
        addKeyRequest: !0
      });
    });
    _(this, "resetState", () => {
      this.setState({
        validationFailure: !1,
        addKeyRequest: !1
      });
    });
    this.state = {
      //listen to request to add/edit a key to an object
      addKeyRequest: !1,
      editKeyRequest: !1,
      validationFailure: !1,
      src: U.defaultProps.src,
      name: U.defaultProps.name,
      theme: U.defaultProps.theme,
      validationMessage: U.defaultProps.validationMessage,
      // the state object also needs to remember the prev prop values, because we need to compare
      // old and new props in getDerivedStateFromProps().
      prevSrc: U.defaultProps.src,
      prevName: U.defaultProps.name,
      prevTheme: U.defaultProps.theme
    };
  }
  // will trigger whenever setState() is called, or parent passes in new props.
  static getDerivedStateFromProps(r, n) {
    if (r.src !== n.prevSrc || r.name !== n.prevName || r.theme !== n.prevTheme) {
      const a = {
        src: r.src,
        name: r.name,
        theme: r.theme,
        validationMessage: r.validationMessage,
        prevSrc: r.src,
        prevName: r.name,
        prevTheme: r.theme
      };
      return U.validateState(a);
    }
    return null;
  }
  componentDidMount() {
    $.set(this.rjvId, "global", "src", this.state.src);
    const r = this.getListeners();
    for (const n in r)
      $.on(n + "-" + this.rjvId, r[n]);
    this.setState({
      addKeyRequest: !1,
      editKeyRequest: !1
    });
  }
  componentDidUpdate(r, n) {
    n.addKeyRequest !== !1 && this.setState({
      addKeyRequest: !1
    }), n.editKeyRequest !== !1 && this.setState({
      editKeyRequest: !1
    }), r.src !== this.state.src && $.set(this.rjvId, "global", "src", this.state.src);
  }
  componentWillUnmount() {
    const r = this.getListeners();
    for (const n in r)
      $.removeListener(n + "-" + this.rjvId, r[n]);
  }
  render() {
    const {
      validationFailure: r,
      validationMessage: n,
      addKeyRequest: a,
      theme: s,
      src: i,
      name: l
    } = this.state, { style: u, defaultValue: f } = this.props;
    return /* @__PURE__ */ c.jsxs(
      "div",
      {
        class: "react-json-view",
        style: { ...v(s, "app-container").style, ...u },
        children: [
          /* @__PURE__ */ c.jsx(
            kp,
            {
              message: n,
              active: r,
              theme: s,
              rjvId: this.rjvId
            }
          ),
          /* @__PURE__ */ c.jsx(
            Ip,
            {
              ...this.props,
              src: i,
              name: l,
              theme: s,
              type: K(i),
              rjvId: this.rjvId
            }
          ),
          /* @__PURE__ */ c.jsx(
            Fp,
            {
              active: a,
              theme: s,
              rjvId: this.rjvId,
              defaultValue: f
            }
          )
        ]
      }
    );
  }
};
//all acceptable props and default values
_(U, "defaultProps", {
  src: {},
  name: "root",
  theme: "rjv-default",
  collapsed: !1,
  collapseStringsAfterLength: !1,
  shouldCollapse: !1,
  sortKeys: !1,
  quotesOnKeys: !0,
  groupArraysAfterLength: 100,
  indentWidth: 4,
  enableClipboard: !0,
  displayObjectSize: !0,
  displayDataTypes: !0,
  onEdit: !1,
  onDelete: !1,
  onAdd: !1,
  onSelect: !1,
  iconStyle: "triangle",
  style: {},
  validationMessage: "Validation Error",
  defaultValue: null,
  displayArrayKey: !0
}), //make sure props are passed in as expected
_(U, "validateState", (r) => {
  const n = {};
  return K(r.theme) === "object" && !Pi(r.theme) && (console.error(
    "react-json-view error:",
    "theme prop must be a theme name or valid base-16 theme object.",
    'defaulting to "rjv-default" theme'
  ), n.theme = "rjv-default"), K(r.src) !== "object" && K(r.src) !== "array" && (console.error(
    "react-json-view error:",
    "src property must be a valid json object"
  ), n.name = "ERROR", n.src = {
    message: "src property must be a valid json object"
  }), {
    // get the original state
    ...r,
    // override the original state
    ...n
  };
});
let _r = U;
La(_r);
export {
  _r as default
};
