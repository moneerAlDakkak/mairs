import { defineComponent as T, ref as r, computed as H, onBeforeMount as ae, onMounted as A, openBlock as i, createElementBlock as f, normalizeClass as C, unref as y, renderSlot as V, withDirectives as se, createVNode as R, TransitionGroup as te, withCtx as D, Fragment as F, renderList as J, createElementVNode as I, createCommentVNode as b, createTextVNode as j, toDisplayString as w, vShow as oe, pushScopeId as ue, popScopeId as ie, useCssVars as re, withModifiers as q, normalizeStyle as de, getCurrentInstance as X, createBlock as P, watch as ce, onUpdated as ve, onUnmounted as fe, reactive as me, mergeProps as ne, withKeys as pe } from "vue";
const _e = ["dir"], ge = {
  name: "MP"
}, he = /* @__PURE__ */ T({
  ...ge,
  props: {
    math: { type: Boolean },
    autoDirection: { type: Boolean },
    bordered: { type: Boolean },
    dashed: { type: Boolean }
  },
  setup(t, { expose: u }) {
    const l = t, e = /[\u0621-\u064A]/;
    let n = r("ltr"), a = r("");
    const s = H(() => {
      let k = ["MP"];
      return l.bordered && k.push("m-bordered"), l.dashed && k.push("m-dashed"), k.join(" ");
    });
    let g = r(null);
    function c() {
      return a.value;
    }
    function M() {
      a.value = g.value.innerText;
    }
    function o() {
      g.value.innerText = a.value;
    }
    function d() {
      e.test(g.value.textContent.trim()[0]) ? n.value = "rtl" : n.value = "ltr";
    }
    function h() {
      window && window.MathJax && (window.MathJax.Hub.Config({
        tex2jax: {
          inlineMath: [
            ["$", "$"]
          ],
          displayMath: [
            ["$$", "$$"]
          ],
          processEscapes: !0,
          processEnvironments: !0
        },
        displayAlign: "center",
        "HTML-CSS": {
          styles: { ".MathJax_Display": { margin: 0 } }
        }
      }), window.MathJax.Hub.Queue([
        "Typeset",
        window.MathJax.Hub,
        g.value
      ]));
    }
    return ae(() => {
      if (document && l.math && !document.getElementById("MATHJAX")) {
        const k = document.createElement("script");
        k.id = "MATHJAX", k.src = "https://cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.2/MathJax.js?config=TeX-AMS_HTML", document.body.appendChild(k);
      }
    }), A(() => {
      M(), l.autoDirection && d(), l.math && setTimeout(h, 400);
    }), u({
      getRawContent: c
    }), (k, m) => (i(), f("p", {
      class: C(y(s)),
      ref_key: "mp",
      ref: g,
      dir: y(n),
      onFocus: m[0] || (m[0] = (p) => o()),
      onBlur: m[1] || (m[1] = (p) => t.math ? h() : null),
      onInput: m[2] || (m[2] = (p) => {
        M(), t.autoDirection && d();
      })
    }, [
      V(k.$slots, "default", {}, void 0, !0)
    ], 42, _e));
  }
});
const S = (t, u) => {
  const l = t.__vccOpts || t;
  for (const [e, n] of u)
    l[e] = n;
  return l;
}, L = /* @__PURE__ */ S(he, [["__scopeId", "data-v-7e874cbc"]]), ye = {
  class: /* @__PURE__ */ C("MNOTES")
}, Me = ["onClick"], $e = {
  name: "MNotes",
  components: { MP: L }
}, be = /* @__PURE__ */ T({
  ...$e,
  props: {
    animation: null,
    timeout: null
  },
  setup(t, { expose: u }) {
    const l = t, e = r([]), n = r(0);
    function a(s) {
      s.id = ++n.value, e.value.push(s), (s.timeout || l.timeout) && setTimeout(() => {
        e.value.splice(
          e.value.findIndex((g) => g.id == s.id),
          1
        );
      }, s.timeout || l.timeout);
    }
    return u({
      add: a
    }), (s, g) => se((i(), f("section", ye, [
      R(te, {
        name: t.animation ? t.animation : "slide-right"
      }, {
        default: D(() => [
          (i(!0), f(F, null, J(e.value, (c) => (i(), f("div", {
            key: c.title,
            class: C(`MNOTE ${c.status ? "m-" + c.status : ""}`),
            onClick: (M) => c.handler ? c.handler() : null
          }, [
            I("b", null, [
              c.icon ? (i(), f("i", {
                key: 0,
                class: C(c.icon)
              }, null, 2)) : b("", !0),
              j(" " + w(c.title), 1)
            ]),
            R(L, {
              autoDirection: "",
              math: ""
            }, {
              default: D(() => [
                j(w(c.message), 1)
              ]),
              _: 2
            }, 1024)
          ], 10, Me))), 128))
        ]),
        _: 1
      }, 8, ["name"])
    ], 512)), [
      [oe, e.value.length]
    ]);
  }
});
const xe = /* @__PURE__ */ S(be, [["__scopeId", "data-v-46150426"]]), le = T({
  props: {
    safe: Boolean,
    warning: Boolean,
    danger: Boolean
  },
  computed: {
    statusClass() {
      let t = "";
      return this.safe && (t = "m-safe"), this.warning && (t = "m-warning"), this.danger && (t = "m-danger"), t;
    }
  }
}), ke = (t) => (ue("data-v-d441921a"), t = t(), ie(), t), we = ["disabled"], Ie = {
  key: 0,
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 512 512"
}, Te = /* @__PURE__ */ ke(() => /* @__PURE__ */ I("path", { d: "M222.7 32.1c5 16.9-4.6 34.8-21.5 39.8C121.8 95.6 64 169.1 64 256c0 106 86 192 192 192s192-86 192-192c0-86.9-57.8-160.4-137.1-184.1c-16.9-5-26.6-22.9-21.5-39.8s22.9-26.6 39.8-21.5C434.9 42.1 512 140 512 256c0 141.4-114.6 256-256 256S0 397.4 0 256C0 140 77.1 42.1 182.9 10.6c16.9-5 34.8 4.6 39.8 21.5z" }, null, -1)), Be = [
  Te
], Ce = {
  name: "MButton",
  mixins: [le]
}, Ve = /* @__PURE__ */ T({
  ...Ce,
  props: {
    bordered: { type: Boolean },
    rounded: { type: Boolean },
    noStyle: { type: Boolean },
    safe: { type: Boolean },
    warning: { type: Boolean },
    danger: { type: Boolean },
    loading: { type: Boolean }
  },
  setup(t) {
    const u = t, l = H(() => {
      let n = "";
      return u.safe && (n = "m-safe"), u.warning && (n = "m-warning"), u.danger && (n = "m-danger"), n;
    }), e = H(() => {
      let n = ["MBUTTON"];
      return u.bordered && n.push("m-bordered"), u.rounded && n.push("m-rounded"), u.noStyle && n.push("m-no-style"), n.join(" ");
    });
    return (n, a) => (i(), f("button", {
      class: C([y(e), y(l)].join(" ")),
      disabled: t.loading
    }, [
      t.loading ? (i(), f("svg", Ie, Be)) : b("", !0),
      V(n.$slots, "default", {}, void 0, !0)
    ], 10, we));
  }
});
const N = /* @__PURE__ */ S(Ve, [["__scopeId", "data-v-d441921a"]]), Se = {
  name: "MMenu"
}, Ee = /* @__PURE__ */ T({
  ...Se,
  props: {
    blurred: { type: Boolean }
  },
  setup(t, { expose: u }) {
    re((d) => ({
      "4f3c2fc5": s.value,
      "981aa042": g.value
    }));
    const l = r(!0), e = r(0), n = r(0), a = r(0), s = r("-10"), g = r("hidden");
    let c = r(null);
    A(() => {
      setTimeout(() => {
        a.value = c.value ? c.value.offsetWidth : 0, l.value = !1, s.value = "10", g.value = "visible";
      }, 2e3);
    });
    function M(d) {
      s.value !== "-10" && (l.value = !0, d.clientX + a.value >= window.innerWidth ? e.value = d.clientX - a.value : e.value = d.clientX, n.value = d.clientY);
    }
    function o() {
      l.value = !1;
    }
    return u({
      show: M,
      hide: o
    }), (d, h) => l.value ? (i(), f("div", {
      key: 0,
      onClick: h[0] || (h[0] = q((k) => o(), ["self"])),
      class: C(`MMENU ${t.blurred ? "m-blurred" : ""}`)
    }, [
      I("ul", {
        ref_key: "menu",
        ref: c,
        style: de(`top: ${n.value}px; left: ${e.value}px`)
      }, [
        V(d.$slots, "default", {}, void 0, !0)
      ], 4)
    ], 2)) : b("", !0);
  }
});
const De = /* @__PURE__ */ S(Ee, [["__scopeId", "data-v-3bf33b6b"]]), He = {
  name: "MMenuItem",
  mixins: [le]
}, Ne = /* @__PURE__ */ T({
  ...He,
  props: {
    noHide: { type: Boolean }
  },
  setup(t) {
    const u = t, l = H(() => {
      var n;
      return (n = X()) == null ? void 0 : n.parent;
    });
    function e() {
      var n;
      u.noHide || (n = l.value) == null || n.hide();
    }
    return (n, a) => (i(), f("li", {
      class: C(`MMENUITEM ${n.statusClass}`),
      ref: "li",
      onClick: e
    }, [
      V(n.$slots, "default", {}, void 0, !0)
    ], 2));
  }
});
const Ae = /* @__PURE__ */ S(Ne, [["__scopeId", "data-v-c6a84dc6"]]), Oe = ["onClick"], je = { open: "" }, Fe = { key: 0 }, Le = { key: 2 }, Pe = {
  name: "MPopup",
  components: { MButton: N, MP: L }
}, Re = /* @__PURE__ */ T({
  ...Pe,
  props: {
    required: { type: Boolean },
    blurred: { type: Boolean }
  },
  setup(t, { expose: u }) {
    const l = t;
    let e, n = r(void 0), a = r(void 0), s = r(!1);
    function g(o) {
      return o && (e = o), s.value = !0, new Promise((d, h) => {
        n.value = d, a.value = h;
      });
    }
    function c(o) {
      s.value = !1, n.value(o);
    }
    function M() {
      l.required || (s.value = !1);
    }
    return u({
      show: g,
      respond: c
    }), (o, d) => y(s) ? (i(), f("div", {
      key: 0,
      onClick: q(M, ["self"]),
      class: C(`MPOPPUP ${t.blurred ? "m-blurred" : ""}`)
    }, [
      I("dialog", je, [
        y(e).title ? (i(), f("b", Fe, w(y(e).title), 1)) : b("", !0),
        y(e).message ? (i(), P(L, { key: 1 }, {
          default: D(() => [
            j(w(y(e).message), 1)
          ]),
          _: 1
        })) : b("", !0),
        V(o.$slots, "default", {}, void 0, !0),
        y(e).cancel || y(e).confirm ? (i(), f("section", Le, [
          y(e).cancel ? (i(), P(N, {
            key: 0,
            bordered: "",
            onClick: d[0] || (d[0] = (h) => c(!1))
          }, {
            default: D(() => [
              j(w(y(e).cancel), 1)
            ]),
            _: 1
          })) : b("", !0),
          y(e).confirm ? (i(), P(N, {
            key: 1,
            onClick: d[1] || (d[1] = (h) => c(!0))
          }, {
            default: D(() => [
              j(w(y(e).confirm), 1)
            ]),
            _: 1
          })) : b("", !0)
        ])) : b("", !0)
      ])
    ], 10, Oe)) : b("", !0);
  }
});
const Je = /* @__PURE__ */ S(Re, [["__scopeId", "data-v-c940a2ad"]]), qe = ["open"], Xe = ["onClick"], Ue = {
  name: "MDrop"
}, ze = /* @__PURE__ */ T({
  ...Ue,
  props: {
    open: { type: Boolean },
    noStyle: { type: Boolean }
  },
  setup(t) {
    let u = r(!1), l = r(!1), e = r(null), n = r(null), a = r(null);
    function s() {
      u.value || !n.value.open ? M() : (l.value || n.value.open) && c();
    }
    function g() {
      l.value = !0;
      const d = "0px", h = `${a.value.offsetHeight}px`;
      e.value && e.value.cancel(), e.value = a.value.animate(
        {
          height: [d, h]
        },
        {
          duration: 400,
          easing: "ease-out"
        }
      ), e.value.onfinish = () => o(!0), e.value.oncancel = () => l.value = !1;
    }
    function c() {
      u.value = !0;
      const d = `${a.value.offsetHeight}px`, h = 0;
      e.value && e.value.cancel(), e.value = a.value.animate(
        {
          height: [d, h]
        },
        {
          duration: 400,
          easing: "ease-out"
        }
      ), e.value.onfinish = () => o(!1), e.value.oncancel = () => u.value = !1;
    }
    function M() {
      a.value.style.height = `${a.value.offsetHeight}px`, n.value.open = !0, window.requestAnimationFrame(() => g());
    }
    function o(d) {
      try {
        n.value.open = d, e.value = null, u.value = !1, l.value = !1, a.value.style.height = "";
      } catch {
        return;
      }
    }
    return (d, h) => (i(), f("details", {
      class: C(`MDROP${t.noStyle ? " m-no-style" : ""}`),
      ref_key: "detailsEl",
      ref: n,
      open: t.open
    }, [
      I("summary", {
        ref: "summary",
        onClick: q(s, ["prevent"])
      }, [
        V(d.$slots, "summary", {}, void 0, !0)
      ], 8, Xe),
      I("section", {
        ref_key: "contentEl",
        ref: a
      }, [
        V(d.$slots, "default", {}, void 0, !0)
      ], 512)
    ], 10, qe));
  }
});
const Ke = /* @__PURE__ */ S(ze, [["__scopeId", "data-v-32fa0497"]]), We = ["onClick"], Ye = /* @__PURE__ */ T({
  __name: "MSlider",
  props: {
    carousel: { type: Boolean },
    infinite: { type: Boolean },
    stacked: { type: Boolean },
    changeTime: null,
    pointers: { type: Boolean }
  },
  setup(t, { expose: u }) {
    const l = t, e = r(0), n = r(0), a = r(null), s = r(null), g = r(null);
    function c(m) {
      (m < n.value && m > 0 || l.infinite) && (e.value = m);
    }
    function M() {
      !l.carousel || (e.value < n.value || l.infinite) && e.value++;
    }
    function o() {
      !l.carousel || (e.value > 0 || l.infinite) && e.value--;
    }
    ce(e, (m) => d(m));
    function d(m) {
      var p, $, B, O, _, v, x, E, U, z, K, W, Y, G, Q, Z;
      ($ = (p = s.value) == null ? void 0 : p.querySelector(".m-shown-slide")) == null || $.classList.remove("m-shown-slide"), (O = (B = s.value) == null ? void 0 : B.querySelector(".m-previous-slide")) == null || O.classList.remove("m-previous-slide"), (v = (_ = s.value) == null ? void 0 : _.querySelector(".m-next-slide")) == null || v.classList.remove("m-next-slide"), (E = (x = s.value) == null ? void 0 : x.children[h(m - 1)]) == null || E.classList.add(
        "m-previous-slide"
      ), (z = (U = s.value) == null ? void 0 : U.children[h(m + 1)]) == null || z.classList.add(
        "m-next-slide"
      ), (W = (K = s.value) == null ? void 0 : K.children[h(m)]) == null || W.classList.add(
        "m-shown-slide"
      ), (G = (Y = g.value) == null ? void 0 : Y.querySelector(".m-active")) == null || G.classList.remove("m-active"), (Z = (Q = g.value) == null ? void 0 : Q.children[h(m)]) == null || Z.classList.add(
        "m-active"
      );
    }
    function h(m) {
      return (m % n.value + n.value) % n.value;
    }
    const k = r(null);
    return A(() => {
      var m;
      n.value = ((m = s.value) == null ? void 0 : m.childElementCount) || 0, l.carousel && d(0), l.changeTime && l.carousel && (k.value = setInterval(M, l.changeTime));
    }), ve(() => {
      var m;
      n.value = ((m = s.value) == null ? void 0 : m.childElementCount) || 0, l.carousel && d(0);
    }), fe(() => {
      k.value = null;
    }), u({
      goTo: c,
      next: M,
      previous: o
    }), (m, p) => (i(), f("section", {
      ref_key: "slider",
      ref: a,
      class: C(`MSLIDER ${t.stacked ? "m-stacked" : ""} ${t.carousel ? "m-carousel" : ""}`)
    }, [
      R(N, {
        "aria-label": "slider-previous",
        onClick: p[0] || (p[0] = ($) => o())
      }),
      I("div", {
        class: "MTRACK",
        ref_key: "track",
        ref: s
      }, [
        V(m.$slots, "default", {}, void 0, !0)
      ], 512),
      R(N, {
        "aria-label": "slider-next",
        onClick: p[1] || (p[1] = ($) => M())
      }),
      t.carousel && t.pointers ? (i(), f("div", {
        key: 0,
        ref_key: "pointersEl",
        ref: g,
        class: "MPOINTERS"
      }, [
        (i(!0), f(F, null, J(new Array(n.value), ($, B) => (i(), f("span", {
          onClick: (O) => c(B)
        }, null, 8, We))), 256))
      ], 512)) : b("", !0)
    ], 2));
  }
});
const Ge = /* @__PURE__ */ S(Ye, [["__scopeId", "data-v-3158e7f5"]]), Qe = { class: "MFORM" }, Ze = {
  name: "MForm"
}, et = /* @__PURE__ */ T({
  ...Ze,
  setup(t, { expose: u }) {
    const l = me([]);
    function e(s) {
      l.includes(s) || l.push(s);
    }
    function n(s) {
      l.splice(
        l.findIndex((g) => g == s),
        1
      );
    }
    function a() {
      var s;
      return l.length !== 0 && ((s = document.getElementById(l[0])) == null || s.scrollIntoView()), l.length === 0;
    }
    return u({
      registerToInvalids: e,
      removeFromInvalids: n,
      checkValidation: a
    }), (s, g) => (i(), f("form", Qe, [
      V(s.$slots, "default")
    ]));
  }
}), tt = ["for"], nt = ["dir", "type", "value", "id", "disabled"], lt = {
  key: 0,
  class: "m-valid"
}, at = {
  key: 1,
  class: "m-invalid"
}, st = {
  name: "MInput",
  inheritAttrs: !1
}, ot = /* @__PURE__ */ T({
  ...st,
  props: {
    id: null,
    modelValue: null,
    pattern: null,
    invalidMessage: null,
    validMessage: null,
    autoDirection: { type: Boolean, default: !1 },
    bordered: { type: Boolean, default: !1 },
    type: { default: "text" },
    label: null,
    disabled: { type: Boolean },
    transformer: null
  },
  emits: ["update:modelValue"],
  setup(t, { expose: u, emit: l }) {
    const e = t;
    let n = r(!1), a = r(
      e.pattern ? e.pattern.test(e.modelValue) : !0
    ), s = r("");
    const g = /[\u0621-\u064A]/;
    let c = r({ value: "" });
    const M = X(), o = H(() => {
      var $;
      let p = M == null ? void 0 : M.parent;
      for (; p && (($ = p.vnode.el) == null ? void 0 : $.nodeName) != "FORM"; )
        p = p.parent;
      return p;
    });
    A(() => {
      var p;
      e.pattern && !a.value && ((p = o == null ? void 0 : o.value) == null || p.exposed.registerToInvalids(e.id)), e.autoDirection && d();
    });
    function d() {
      g.test(c.value.value) ? s.value = "rtl" : s.value = "ltr";
    }
    function h() {
      return a.value;
    }
    function k(p) {
      var $, B;
      !e.pattern || (e.pattern.test(p.toString()) ? (a.value = !0, ($ = o == null ? void 0 : o.value) == null || $.exposed.removeFromInvalids(e.id)) : (a.value = !1, (B = o == null ? void 0 : o.value) == null || B.exposed.registerToInvalids(e.id)));
    }
    function m(p) {
      n.value = !0;
      let $ = p.currentTarget.value;
      e.transformer && ($ = e.transformer($)), l("update:modelValue", $), e.autoDirection && d(), k(p.currentTarget.value);
    }
    return u({
      isValid: h
    }), (p, $) => (i(), f("div", {
      class: C(`MINPUT${t.bordered ? " m-bordered" : ""}${t.disabled ? " m-disabled" : ""}`)
    }, [
      t.label ? (i(), f("label", {
        key: 0,
        for: t.id
      }, w(t.label), 9, tt)) : b("", !0),
      I("div", null, [
        V(p.$slots, "start", {}, void 0, !0),
        I("input", ne({
          dir: y(s),
          ref_key: "input",
          ref: c
        }, p.$attrs, {
          type: t.type,
          value: t.modelValue,
          id: t.id,
          disabled: t.disabled,
          onInput: $[0] || ($[0] = (B) => m(B))
        }), null, 16, nt),
        V(p.$slots, "end", {}, void 0, !0)
      ]),
      I("div", null, [
        t.pattern && y(n) ? (i(), f(F, { key: 0 }, [
          y(a) && t.validMessage ? (i(), f("span", lt, w(t.validMessage), 1)) : b("", !0),
          !y(a) && t.invalidMessage ? (i(), f("span", at, w(t.invalidMessage), 1)) : b("", !0)
        ], 64)) : b("", !0)
      ])
    ], 2));
  }
});
const ut = /* @__PURE__ */ S(ot, [["__scopeId", "data-v-51a448a2"]]), it = {
  name: "MSection"
}, rt = /* @__PURE__ */ T({
  ...it,
  props: {
    forward: { type: Boolean }
  },
  setup(t) {
    const u = t;
    let l = r(null);
    return A(() => {
      new IntersectionObserver(
        (n) => {
          n.forEach((a) => {
            a.isIntersecting ? a.target.setAttribute(
              "data-m-visible",
              `${a.intersectionRatio * 100}%`
            ) : u.forward || a.target.removeAttribute("data-m-visible"), a.target.style.setProperty(
              "--m-visibility-ratio",
              `${a.intersectionRatio * 100}%`
            );
          });
        },
        {
          threshold: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1]
        }
      ).observe(l.value);
    }), (e, n) => (i(), f("section", {
      ref_key: "sectionEl",
      ref: l,
      class: "MSECTION"
    }, [
      V(e.$slots, "default")
    ], 512));
  }
}), dt = ["for"], ct = ["dir", "id", "rows", "maxlength", "disabled", "value"], vt = {
  key: 0,
  class: "m-valid"
}, ft = {
  key: 1,
  class: "m-invalid"
}, mt = { key: 1 }, pt = {
  name: "MText",
  inheritAttrs: !1
}, _t = /* @__PURE__ */ T({
  ...pt,
  props: {
    id: null,
    modelValue: null,
    autoDirection: { type: Boolean },
    bordered: { type: Boolean },
    label: null,
    tags: { type: Boolean },
    maxlength: null,
    pattern: null,
    invalidMessage: null,
    validMessage: null,
    disabled: { type: Boolean },
    rows: null,
    includedHtml: null,
    transformer: null
  },
  emits: ["update:modelValue"],
  setup(t, { expose: u, emit: l }) {
    const e = t;
    let n = r(!1), a = r(!1), s = r("");
    const g = /[\u0621-\u064A]/, c = r(null), M = X(), o = H(() => {
      var v;
      let _ = M == null ? void 0 : M.parent;
      for (; _ && ((v = _.vnode.el) == null ? void 0 : v.nodeName) != "FORM"; )
        _ = _.parent;
      return _;
    });
    A(() => {
      var _, v;
      a.value = e.pattern ? e.pattern.test((_ = c.value) == null ? void 0 : _.value) : !0, e.pattern && !a.value && ((v = o == null ? void 0 : o.value) == null || v.exposed.registerToInvalids(e.id)), e.autoDirection && h();
    });
    function d(_) {
      const v = /<\/?([a-z][a-z0-9]*)\b[^>]*>/gi;
      return _.replace(v, (x, E) => e.includedHtml && e.includedHtml.includes(E.toLowerCase()) ? x : "");
    }
    function h() {
      c.value && g.test(c.value.value) ? s.value = "rtl" : s.value = "ltr";
    }
    function k() {
      return a.value;
    }
    function m(_) {
      var v, x;
      !e.pattern || (e.pattern.test(_.toString()) ? (a.value = !0, (v = o == null ? void 0 : o.value) == null || v.exposed.removeFromInvalids(e.id)) : (a.value = !1, (x = o == null ? void 0 : o.value) == null || x.exposed.registerToInvalids(e.id)));
    }
    function p(_) {
      if (n.value = !0, !e.tags) {
        let v = _.currentTarget.value;
        e.includedHtml && (v = d(v)), e.transformer && (v = e.transformer(v)), l("update:modelValue", v);
      }
      e.autoDirection && h(), e.pattern && m(_.currentTarget.value.trim());
    }
    function $(_) {
      if (_.preventDefault(), !e.modelValue || !(e.modelValue instanceof Array) || e.maxlength && e.maxlength <= e.modelValue.length || !a.value)
        return;
      const v = e.transformer ? e.transformer(_.currentTarget.value) : _.currentTarget.value, x = [...e.modelValue, v];
      l("update:modelValue", x), _.currentTarget.value = "", n.value = !1;
    }
    const B = r("");
    function O(_) {
      if (!(!e.modelValue || !(e.modelValue instanceof Array))) {
        if (_.key == "Backspace" && B.value === "") {
          const v = [...e.modelValue];
          v.pop(), l("update:modelValue", v);
        }
        B.value = _.currentTarget.value;
      }
    }
    return u({
      isValid: k
    }), (_, v) => (i(), f("div", {
      class: C(`MTEXT${t.bordered ? " m-bordered" : ""}${t.tags ? " m-tags" : ""}${t.disabled ? " m-disabled" : ""}`)
    }, [
      t.label ? (i(), f("label", {
        key: 0,
        for: t.id
      }, w(t.label), 9, dt)) : b("", !0),
      I("div", {
        onClick: v[3] || (v[3] = (x) => {
          var E;
          return (E = c.value) == null ? void 0 : E.focus();
        })
      }, [
        t.tags ? (i(), P(te, {
          key: 0,
          name: "fade"
        }, {
          default: D(() => [
            (i(!0), f(F, null, J(t.modelValue, (x) => (i(), f("span", { key: x }, w(x), 1))), 128))
          ]),
          _: 1
        })) : b("", !0),
        I("textarea", ne({
          dir: y(s),
          ref_key: "input",
          ref: c
        }, _.$attrs, {
          id: t.id,
          onInput: v[0] || (v[0] = (x) => p(x)),
          onKeydown: v[1] || (v[1] = pe((x) => t.tags ? $(x) : null, ["enter"])),
          onKeyup: v[2] || (v[2] = (x) => t.tags ? O(x) : null),
          rows: t.tags ? 1 : t.rows,
          maxlength: t.tags ? void 0 : t.maxlength,
          disabled: t.disabled,
          value: t.tags ? "" : t.modelValue
        }), null, 16, ct)
      ]),
      I("div", null, [
        t.pattern && y(n) ? (i(), f(F, { key: 0 }, [
          y(a) && t.validMessage ? (i(), f("span", vt, w(t.validMessage), 1)) : b("", !0),
          !y(a) && t.invalidMessage ? (i(), f("span", ft, w(t.invalidMessage), 1)) : b("", !0)
        ], 64)) : b("", !0),
        t.maxlength && t.modelValue ? (i(), f("span", mt, w(t.maxlength - t.modelValue.length), 1)) : b("", !0)
      ])
    ], 2));
  }
});
const gt = /* @__PURE__ */ S(_t, [["__scopeId", "data-v-6acba60d"]]), ee = {
  MNotes: xe,
  MButton: N,
  MP: L,
  MMenu: De,
  MMenuItem: Ae,
  MPoppup: Je,
  MDrop: Ke,
  MSlider: Ge,
  MForm: et,
  MInput: ut,
  MSection: rt,
  MText: gt
}, yt = (t) => {
  for (let u in ee)
    t.component(u, ee[u]);
};
export {
  N as MButton,
  Ke as MDrop,
  et as MForm,
  ut as MInput,
  De as MMenu,
  Ae as MMenuItem,
  xe as MNotes,
  L as MP,
  Je as MPoppup,
  rt as MSection,
  Ge as MSlider,
  yt as install
};
