import { defineComponent as A, ref as p, computed as N, onBeforeMount as he, onMounted as P, openBlock as m, createElementBlock as h, normalizeClass as E, unref as B, renderSlot as I, normalizeStyle as ie, createVNode as U, TransitionGroup as re, withCtx as O, Fragment as F, renderList as J, createElementVNode as C, createCommentVNode as w, createTextVNode as R, toDisplayString as _, pushScopeId as be, popScopeId as $e, onUnmounted as X, withDirectives as q, withModifiers as Y, createBlock as H, Teleport as ke, vShow as z, watch as de, onUpdated as xe, reactive as Be, getCurrentInstance as W, mergeProps as ce, withKeys as K } from "vue";
const we = ["dir"], Te = {
  name: "MP"
}, Ve = /* @__PURE__ */ A({
  ...Te,
  props: {
    math: { type: Boolean },
    autoDirection: { type: Boolean },
    bordered: { type: Boolean },
    dashed: { type: Boolean }
  },
  setup(e, { expose: g }) {
    const l = e, t = /[\u0621-\u064A]/;
    let i = p("ltr"), o = p("");
    const s = N(() => {
      let r = ["MP"];
      return l.bordered && r.push("m-bordered"), l.dashed && r.push("m-dashed"), r.join(" ");
    });
    let f = p(null);
    function c() {
      return o.value;
    }
    function k() {
      o.value = f.value.innerText;
    }
    function M() {
      f.value.innerText = o.value;
    }
    function x() {
      t.test(f.value.textContent.trim()[0]) ? i.value = "rtl" : i.value = "ltr";
    }
    function y() {
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
        f.value
      ]));
    }
    return he(() => {
      if (document && l.math && !document.getElementById("MATHJAX")) {
        const r = document.createElement("script");
        r.id = "MATHJAX", r.src = "https://cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.2/MathJax.js?config=TeX-AMS_HTML", document.body.appendChild(r);
      }
    }), P(() => {
      k(), l.autoDirection && x(), l.math && setTimeout(y, 400);
    }), g({
      getRawContent: c
    }), (r, u) => (m(), h("p", {
      class: E(B(s)),
      ref_key: "mp",
      ref: f,
      dir: B(i),
      onFocus: u[0] || (u[0] = (v) => M()),
      onBlur: u[1] || (u[1] = (v) => e.math ? y() : null),
      onInput: u[2] || (u[2] = (v) => {
        k(), e.autoDirection && x();
      })
    }, [
      I(r.$slots, "default", {}, void 0, !0)
    ], 42, we));
  }
});
const D = (e, g) => {
  const l = e.__vccOpts || e;
  for (const [t, i] of g)
    l[t] = i;
  return l;
}, j = /* @__PURE__ */ D(Ve, [["__scopeId", "data-v-863fdd37"]]), _e = ["onClick"], Ce = {
  name: "MNotes",
  components: { MP: j }
}, Ie = /* @__PURE__ */ A({
  ...Ce,
  props: {
    animation: null,
    timeout: null,
    position: { default: "right" },
    autoDirection: { type: Boolean },
    math: { type: Boolean }
  },
  setup(e, { expose: g }) {
    const l = e, t = p([]), i = p(0);
    function o(s) {
      s.id = ++i.value, t.value.push(s), (s.timeout || l.timeout) && setTimeout(() => {
        t.value.splice(
          t.value.findIndex((f) => f.id == s.id),
          1
        );
      }, s.timeout || l.timeout);
    }
    return g({
      add: o
    }), (s, f) => (m(), h("aside", {
      class: E(`MNOTES m-${e.position}`),
      style: ie(t.value.length ? "" : "pointer-events: none")
    }, [
      U(re, {
        name: e.animation ? e.animation : `slide-${e.position}`
      }, {
        default: O(() => [
          (m(!0), h(F, null, J(t.value, (c) => (m(), h("div", {
            key: c.title,
            class: E(`MNOTE ${c.status ? "m-" + c.status : ""}`),
            onClick: (k) => c.handler ? c.handler() : null
          }, [
            C("b", null, [
              c.icon ? (m(), h("i", {
                key: 0,
                class: E(c.icon)
              }, null, 2)) : w("", !0),
              R(" " + _(c.title), 1)
            ]),
            U(j, {
              autoDirection: e.autoDirection,
              math: e.math
            }, {
              default: O(() => [
                R(_(c.message), 1)
              ]),
              _: 2
            }, 1032, ["autoDirection", "math"])
          ], 10, _e))), 128))
        ]),
        _: 1
      }, 8, ["name"])
    ], 6));
  }
});
const ve = /* @__PURE__ */ D(Ie, [["__scopeId", "data-v-65b5c17d"]]), Se = (e) => (be("data-v-9dff2b2d"), e = e(), $e(), e), Ee = ["disabled"], Ae = {
  key: 0,
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 512 512"
}, Oe = /* @__PURE__ */ Se(() => /* @__PURE__ */ C("path", {
  fill: "currentColor",
  d: "M222.7 32.1c5 16.9-4.6 34.8-21.5 39.8C121.8 95.6 64 169.1 64 256c0 106 86 192 192 192s192-86 192-192c0-86.9-57.8-160.4-137.1-184.1c-16.9-5-26.6-22.9-21.5-39.8s22.9-26.6 39.8-21.5C434.9 42.1 512 140 512 256c0 141.4-114.6 256-256 256S0 397.4 0 256C0 140 77.1 42.1 182.9 10.6c16.9-5 34.8 4.6 39.8 21.5z"
}, null, -1)), De = [
  Oe
], Ne = {
  name: "MButton"
}, He = /* @__PURE__ */ A({
  ...Ne,
  props: {
    bordered: { type: Boolean },
    rounded: { type: Boolean },
    safe: { type: Boolean },
    warning: { type: Boolean },
    danger: { type: Boolean },
    loading: { type: Boolean },
    unstyled: { type: Boolean }
  },
  setup(e) {
    const g = e, l = N(() => ({
      "m-safe": g.safe,
      "m-warning": g.warning,
      "m-danger": g.danger
    })), t = N(() => ({
      MBUTTON: !g.unstyled,
      "m-bordered": g.bordered,
      "m-rounded": g.rounded
    }));
    return (i, o) => (m(), h("button", {
      class: E({ ...B(l), ...B(t) }),
      disabled: e.loading
    }, [
      e.loading ? (m(), h("svg", Ae, De)) : w("", !0),
      I(i.$slots, "default", {}, void 0, !0)
    ], 10, Ee));
  }
});
const L = /* @__PURE__ */ D(He, [["__scopeId", "data-v-9dff2b2d"]]), Pe = {
  name: "MMenu"
}, Fe = /* @__PURE__ */ A({
  ...Pe,
  props: {
    unstyled: { type: Boolean }
  },
  setup(e, { expose: g }) {
    const l = p(!0), t = p(!1), i = p(-99999999), o = p(-99999999), s = p(0), f = p(0), c = p();
    let k;
    P(() => {
      var y;
      (y = c.value) == null || y.show(), setTimeout(() => {
        var r, u;
        s.value = Math.trunc(
          ((r = c.value) == null ? void 0 : r.getBoundingClientRect().width) || 0
        ), f.value = Math.trunc(
          ((u = c.value) == null ? void 0 : u.getBoundingClientRect().height) || 0
        ), l.value = !1;
      }, 1e3), k = new MutationObserver((r) => {
        var u;
        for (let v of r)
          v.type === "attributes" && v.attributeName === "open" && (l.value = ((u = c.value) == null ? void 0 : u.hasAttribute("open")) || !1);
      }), c.value && k.observe(c.value, { attributes: !0 });
    }), X(() => {
      k.disconnect();
    });
    function M(y) {
      var r;
      y.clientX + s.value >= window.innerWidth ? i.value = y.clientX - s.value : i.value = y.clientX, y.clientY + f.value >= window.innerHeight ? o.value = y.clientY - f.value : o.value = y.clientY, (r = c.value) == null || r.show(), l.value = !0;
    }
    function x() {
      t.value = !0, c.value && (c.value.open = !1), setTimeout(() => {
        var y;
        c.value && (c.value.open = !0), (y = c.value) == null || y.close(), t.value = !1;
      }, 500);
    }
    return g({
      show: M,
      close: x
    }), (y, r) => q((m(), h("dialog", {
      onClick: r[1] || (r[1] = Y((u) => x(), ["self"])),
      class: E({
        MMENU: !e.unstyled,
        "m-hiding": t.value
      }),
      ref_key: "MMENU",
      ref: c,
      style: ie({ top: `${o.value}px`, left: `${i.value}px` })
    }, [
      (m(), H(ke, { to: "body" }, [
        q(C("div", {
          class: "m-overlay",
          onClick: r[0] || (r[0] = (u) => x())
        }, null, 512), [
          [z, l.value]
        ])
      ])),
      C("div", null, [
        I(y.$slots, "default", {}, void 0, !0)
      ])
    ], 6)), [
      [z, l.value]
    ]);
  }
});
const fe = /* @__PURE__ */ D(Fe, [["__scopeId", "data-v-a616cf92"]]), Le = { key: 0 }, je = { key: 2 }, Re = {
  name: "MPopup",
  components: { MButton: L, MP: j }
}, Ue = /* @__PURE__ */ A({
  ...Re,
  props: {
    required: { type: Boolean },
    blurred: { type: Boolean },
    mobile: { type: Boolean },
    unstyled: { type: Boolean }
  },
  setup(e, { expose: g }) {
    const l = e;
    let t = p({});
    const i = p(), o = p(!1), s = p(!1);
    let f, c = p(void 0), k = p(void 0);
    P(() => {
      f = new MutationObserver((r) => {
        var u;
        for (let v of r)
          v.type === "attributes" && v.attributeName === "open" && (o.value = ((u = i.value) == null ? void 0 : u.hasAttribute("open")) || !1);
      }), i.value && f.observe(i.value, { attributes: !0 });
    }), X(() => {
      f.disconnect();
    });
    function M(r) {
      var u;
      return r && (t.value = r), (u = i.value) == null || u.showModal(), o.value = !0, new Promise((v, b) => {
        c.value = v, k.value = b;
      });
    }
    function x() {
      if (!l.required)
        return y(!1);
    }
    function y(r) {
      c.value(r), s.value = !0, i.value && (i.value.open = !1), setTimeout(() => {
        var u;
        i.value && (i.value.open = !0), (u = i.value) == null || u.close(), s.value = !1;
      }, 500);
    }
    return g({
      show: M,
      close: x,
      respond: y
    }), (r, u) => q((m(), h("dialog", {
      class: E({
        MPOPPUP: !e.unstyled,
        "m-blurred": e.blurred,
        "m-mobile": e.mobile,
        "m-hiding": s.value
      }),
      ref_key: "MPOP",
      ref: i,
      onClick: u[2] || (u[2] = Y((v) => x(), ["self"]))
    }, [
      C("div", null, [
        B(t).title ? (m(), h("b", Le, _(B(t).title), 1)) : w("", !0),
        B(t).message ? (m(), H(j, { key: 1 }, {
          default: O(() => [
            R(_(B(t).message), 1)
          ]),
          _: 1
        })) : w("", !0),
        I(r.$slots, "default", {}, void 0, !0),
        B(t).cancel || B(t).confirm ? (m(), h("section", je, [
          B(t).cancel ? (m(), H(L, {
            key: 0,
            bordered: "",
            onClick: u[0] || (u[0] = (v) => y(!1))
          }, {
            default: O(() => [
              R(_(B(t).cancel), 1)
            ]),
            _: 1
          })) : w("", !0),
          B(t).confirm ? (m(), H(L, {
            key: 1,
            onClick: u[1] || (u[1] = (v) => y(!0))
          }, {
            default: O(() => [
              R(_(B(t).confirm), 1)
            ]),
            _: 1
          })) : w("", !0)
        ])) : w("", !0)
      ])
    ], 2)), [
      [z, o.value]
    ]);
  }
});
const me = /* @__PURE__ */ D(Ue, [["__scopeId", "data-v-35f1cbe0"]]), Je = ["open"], Xe = ["onClick"], qe = {
  name: "MDrop"
}, ze = /* @__PURE__ */ A({
  ...qe,
  props: {
    open: { type: Boolean },
    unstyled: { type: Boolean },
    unclicked: { type: Boolean }
  },
  setup(e, { expose: g }) {
    const l = e;
    let t = p(!1), i = p(!1), o = p(null), s = p(null), f = p(null);
    function c() {
      l.unclicked || (t.value || !s.value.open ? x() : (i.value || s.value.open) && M());
    }
    function k() {
      i.value = !0;
      const r = "0px", u = `${f.value.offsetHeight}px`;
      o.value && o.value.cancel(), o.value = f.value.animate(
        {
          height: [r, u]
        },
        {
          duration: 400,
          easing: "ease-out"
        }
      ), o.value.onfinish = () => y(!0), o.value.oncancel = () => i.value = !1;
    }
    function M() {
      t.value = !0;
      const r = `${f.value.offsetHeight}px`, u = 0;
      o.value && o.value.cancel(), o.value = f.value.animate(
        {
          height: [r, u]
        },
        {
          duration: 400,
          easing: "ease-out"
        }
      ), o.value.onfinish = () => y(!1), o.value.oncancel = () => t.value = !1;
    }
    function x() {
      f.value.style.height = `${f.value.offsetHeight}px`, s.value.open = !0, window.requestAnimationFrame(() => k());
    }
    function y(r) {
      try {
        s.value.open = r, o.value = null, t.value = !1, i.value = !1, f.value.style.height = "";
      } catch {
        return;
      }
    }
    return g({ openContent: x, shrink: M }), (r, u) => (m(), h("details", {
      class: E({ MDROP: !e.unstyled }),
      ref_key: "detailsEl",
      ref: s,
      open: e.open
    }, [
      C("summary", {
        ref: "summary",
        onClick: Y(c, ["prevent"])
      }, [
        I(r.$slots, "summary", {}, void 0, !0)
      ], 8, Xe),
      C("section", {
        ref_key: "contentEl",
        ref: f
      }, [
        I(r.$slots, "default", {}, void 0, !0)
      ], 512)
    ], 10, Je));
  }
});
const G = /* @__PURE__ */ D(ze, [["__scopeId", "data-v-2a236634"]]), Ke = ["onClick"], Ye = /* @__PURE__ */ A({
  __name: "MSlider",
  props: {
    carousel: { type: Boolean },
    infinite: { type: Boolean },
    stacked: { type: Boolean },
    changeTime: null,
    pointers: { type: Boolean }
  },
  setup(e, { expose: g }) {
    const l = e, t = p(0), i = p(0), o = p(null), s = p(null), f = p(null);
    function c(u) {
      (u < i.value && u > 0 || l.infinite) && (t.value = u);
    }
    function k() {
      !l.carousel || (t.value < i.value || l.infinite) && t.value++;
    }
    function M() {
      !l.carousel || (t.value > 0 || l.infinite) && t.value--;
    }
    de(t, (u) => x(u));
    function x(u) {
      var v, b, T, d, n, a, $, V, S, ee, te, le, ne, ae, ue, se;
      (b = (v = s.value) == null ? void 0 : v.querySelector(".m-shown-slide")) == null || b.classList.remove("m-shown-slide"), (d = (T = s.value) == null ? void 0 : T.querySelector(".m-previous-slide")) == null || d.classList.remove("m-previous-slide"), (a = (n = s.value) == null ? void 0 : n.querySelector(".m-next-slide")) == null || a.classList.remove("m-next-slide"), (V = ($ = s.value) == null ? void 0 : $.children[y(u - 1)]) == null || V.classList.add(
        "m-previous-slide"
      ), (ee = (S = s.value) == null ? void 0 : S.children[y(u + 1)]) == null || ee.classList.add(
        "m-next-slide"
      ), (le = (te = s.value) == null ? void 0 : te.children[y(u)]) == null || le.classList.add(
        "m-shown-slide"
      ), (ae = (ne = f.value) == null ? void 0 : ne.querySelector(".m-active")) == null || ae.classList.remove("m-active"), (se = (ue = f.value) == null ? void 0 : ue.children[y(u)]) == null || se.classList.add(
        "m-active"
      );
    }
    function y(u) {
      return (u % i.value + i.value) % i.value;
    }
    const r = p(null);
    return P(() => {
      var u;
      i.value = ((u = s.value) == null ? void 0 : u.childElementCount) || 0, l.carousel && x(0), l.changeTime && l.carousel && (r.value = setInterval(k, l.changeTime));
    }), xe(() => {
      var u;
      i.value = ((u = s.value) == null ? void 0 : u.childElementCount) || 0, l.carousel && x(0);
    }), X(() => {
      r.value = null;
    }), g({
      goTo: c,
      next: k,
      previous: M
    }), (u, v) => (m(), h("section", {
      ref_key: "slider",
      ref: o,
      class: E({ MSLIDER: !0, "m-stacked": e.stacked, "m-carousel": e.carousel })
    }, [
      U(L, {
        "aria-label": "slider-previous",
        onClick: v[0] || (v[0] = (b) => M())
      }),
      C("div", {
        class: "MTRACK",
        ref_key: "track",
        ref: s
      }, [
        I(u.$slots, "default", {}, void 0, !0)
      ], 512),
      U(L, {
        "aria-label": "slider-next",
        onClick: v[1] || (v[1] = (b) => k())
      }),
      e.carousel && e.pointers ? (m(), h("div", {
        key: 0,
        ref_key: "pointersEl",
        ref: f,
        class: "MPOINTERS"
      }, [
        (m(!0), h(F, null, J(new Array(i.value), (b, T) => (m(), h("span", {
          onClick: (d) => c(T)
        }, null, 8, Ke))), 256))
      ], 512)) : w("", !0)
    ], 2));
  }
});
const pe = /* @__PURE__ */ D(Ye, [["__scopeId", "data-v-ffd3b7ce"]]), We = { class: "MFORM" }, Ge = {
  name: "MForm"
}, ye = /* @__PURE__ */ A({
  ...Ge,
  setup(e, { expose: g }) {
    const l = Be([]);
    function t(s) {
      l.includes(s) || l.push(s);
    }
    function i(s) {
      l.splice(
        l.findIndex((f) => f == s),
        1
      );
    }
    function o() {
      return l.length === 0;
    }
    return g({
      registerToInvalids: t,
      removeFromInvalids: i,
      checkValidation: o
    }), (s, f) => (m(), h("form", We, [
      I(s.$slots, "default")
    ]));
  }
}), Qe = ["for"], Ze = ["dir", "type", "value", "id", "disabled"], et = {
  key: 0,
  class: "m-valid"
}, tt = {
  key: 1,
  class: "m-invalid"
}, lt = {
  name: "MInput",
  inheritAttrs: !1
}, nt = /* @__PURE__ */ A({
  ...lt,
  props: {
    id: null,
    modelValue: null,
    pattern: null,
    invalidMessage: null,
    validMessage: null,
    autoDirection: { type: Boolean },
    bordered: { type: Boolean },
    type: { default: "text" },
    label: null,
    disabled: { type: Boolean },
    shrinked: { type: Boolean },
    transformer: null,
    unstyled: { type: Boolean }
  },
  emits: ["update:modelValue"],
  setup(e, { expose: g, emit: l }) {
    const t = e;
    let i = p(!1), o = p(
      t.pattern ? t.pattern.test(t.modelValue) : !0
    ), s = p("");
    const f = /[\u0621-\u064A]/;
    let c = p({ value: "" });
    const k = W(), M = N(() => {
      var b;
      let v = k == null ? void 0 : k.parent;
      for (; v && ((b = v.vnode.el) == null ? void 0 : b.nodeName) != "FORM"; )
        v = v.parent;
      return v;
    });
    P(() => {
      var v;
      t.pattern && !o.value && ((v = M == null ? void 0 : M.value) == null || v.exposed.registerToInvalids(t.id)), t.autoDirection && x();
    });
    function x() {
      f.test(c.value.value[0]) ? s.value = "rtl" : s.value = "ltr";
    }
    function y() {
      return o.value;
    }
    function r(v) {
      var b, T;
      !t.pattern || (t.pattern.test(v.toString()) ? (o.value = !0, (b = M == null ? void 0 : M.value) == null || b.exposed.removeFromInvalids(t.id)) : (o.value = !1, (T = M == null ? void 0 : M.value) == null || T.exposed.registerToInvalids(t.id)));
    }
    function u(v) {
      i.value = !0;
      let b = v.currentTarget.value;
      t.transformer && (b = t.transformer(b)), l("update:modelValue", b), t.autoDirection && x(), r(v.currentTarget.value);
    }
    return g({
      isValid: y
    }), (v, b) => (m(), h("div", {
      class: E({
        MINPUT: !e.unstyled,
        "m-bordered": e.bordered,
        "m-disabled": e.disabled,
        "m-shrinked": e.shrinked
      })
    }, [
      e.label ? (m(), h("label", {
        key: 0,
        for: e.id
      }, _(e.label), 9, Qe)) : w("", !0),
      C("div", null, [
        I(v.$slots, "start", {}, void 0, !0),
        C("input", ce({
          dir: B(s),
          ref_key: "input",
          ref: c
        }, v.$attrs, {
          type: e.type,
          value: e.modelValue,
          id: e.id,
          disabled: e.disabled,
          onInput: b[0] || (b[0] = (T) => u(T))
        }), null, 16, Ze),
        I(v.$slots, "end", {}, void 0, !0)
      ]),
      C("div", null, [
        e.pattern && B(i) ? (m(), h(F, { key: 0 }, [
          B(o) && e.validMessage ? (m(), h("span", et, _(e.validMessage), 1)) : w("", !0),
          !B(o) && e.invalidMessage ? (m(), h("span", tt, _(e.invalidMessage), 1)) : w("", !0)
        ], 64)) : w("", !0)
      ])
    ], 2));
  }
});
const Q = /* @__PURE__ */ D(nt, [["__scopeId", "data-v-de3d049e"]]), at = {
  name: "MSection"
}, ge = /* @__PURE__ */ A({
  ...at,
  props: {
    forward: { type: Boolean }
  },
  setup(e) {
    const g = e;
    let l = p(null), t;
    return P(() => {
      t = new IntersectionObserver(
        (i) => {
          i.forEach((o) => {
            const f = Math.round(o.intersectionRatio * 10) * 10;
            o.isIntersecting ? (o.target.setAttribute("data-m-visible", `${f}%`), o.target.style.setProperty(
              "--m-visibility-ratio",
              `${f}%`
            )) : g.forward || o.target.removeAttribute("data-m-visible");
          });
        },
        {
          threshold: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1]
        }
      ), t.observe(l.value);
    }), X(() => {
      t.disconnect();
    }), (i, o) => (m(), h("section", {
      ref_key: "sectionEl",
      ref: l,
      class: "MSECTION"
    }, [
      I(i.$slots, "default")
    ], 512));
  }
}), ut = ["for"], st = ["dir", "id", "rows", "maxlength", "disabled"], ot = {
  key: 0,
  class: "m-valid"
}, it = {
  key: 1,
  class: "m-invalid"
}, rt = { key: 1 }, dt = {
  name: "MText",
  inheritAttrs: !1
}, ct = /* @__PURE__ */ A({
  ...dt,
  props: {
    id: null,
    modelValue: null,
    textValue: null,
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
    transformer: null,
    unstyled: { type: Boolean }
  },
  emits: ["update:modelValue", "update:textValue"],
  setup(e, { expose: g, emit: l }) {
    const t = e;
    let i = p(!1), o = p(!1), s = p("");
    const f = /[\u0621-\u064A]/, c = p(null), k = W(), M = N(() => {
      var a;
      let n = k == null ? void 0 : k.parent;
      for (; n && ((a = n.vnode.el) == null ? void 0 : a.nodeName) != "FORM"; )
        n = n.parent;
      return n;
    });
    P(() => {
      var n, a;
      o.value = t.pattern ? t.pattern.test((n = c.value) == null ? void 0 : n.value) : !0, t.pattern && !o.value && ((a = M == null ? void 0 : M.value) == null || a.exposed.registerToInvalids(t.id)), t.autoDirection && y();
    });
    function x(n) {
      const a = /<\/?([a-z][a-z0-9]*)\b[^>]*>/gi;
      return n.replace(a, ($, V) => t.includedHtml && t.includedHtml.includes(V.toLowerCase()) ? $ : "");
    }
    function y() {
      c.value && f.test(c.value.value[0]) ? s.value = "rtl" : s.value = "ltr";
    }
    function r() {
      return o.value;
    }
    function u(n) {
      var a, $;
      !t.pattern || (t.pattern.test(n.toString()) ? (o.value = !0, (a = M == null ? void 0 : M.value) == null || a.exposed.removeFromInvalids(t.id)) : (o.value = !1, ($ = M == null ? void 0 : M.value) == null || $.exposed.registerToInvalids(t.id)));
    }
    function v(n) {
      if (i.value = !0, l("update:textValue", n.currentTarget.value), !t.tags) {
        let a = n.currentTarget.value;
        t.includedHtml && (a = x(a)), t.transformer && (a = t.transformer(a)), l("update:modelValue", a);
      }
      t.autoDirection && y(), t.pattern && u(n.currentTarget.value.trim());
    }
    function b(n) {
      if (n.preventDefault(), !t.modelValue || !(t.modelValue instanceof Array) || t.maxlength && t.maxlength <= t.modelValue.length || !o.value)
        return;
      const a = t.transformer ? t.transformer(n.currentTarget.value) : n.currentTarget.value, $ = [...t.modelValue, a];
      l("update:modelValue", $), n.currentTarget.value = "", i.value = !1;
    }
    const T = p("");
    function d(n) {
      if (!(!t.modelValue || !(t.modelValue instanceof Array))) {
        if (n.key == "Backspace" && T.value === "") {
          const a = [...t.modelValue];
          a.pop(), l("update:modelValue", a);
        }
        T.value = n.currentTarget.value;
      }
    }
    return g({
      isValid: r
    }), (n, a) => (m(), h("div", {
      class: E({
        MTEXT: !e.unstyled,
        "m-bordered": e.bordered,
        "m-tags": e.tags,
        "m-disabled": e.disabled
      })
    }, [
      e.label ? (m(), h("label", {
        key: 0,
        for: e.id
      }, _(e.label), 9, ut)) : w("", !0),
      C("div", {
        onClick: a[3] || (a[3] = ($) => {
          var V;
          return (V = c.value) == null ? void 0 : V.focus();
        })
      }, [
        e.tags ? (m(), H(re, {
          key: 0,
          name: "fade"
        }, {
          default: O(() => [
            (m(!0), h(F, null, J(e.modelValue, ($) => (m(), h("span", { key: $ }, _($), 1))), 128))
          ]),
          _: 1
        })) : w("", !0),
        C("textarea", ce({
          dir: B(s),
          ref_key: "input",
          ref: c
        }, n.$attrs, {
          id: e.id,
          onInput: a[0] || (a[0] = ($) => v($)),
          onKeydown: a[1] || (a[1] = K(($) => e.tags ? b($) : null, ["enter"])),
          onKeyup: a[2] || (a[2] = ($) => e.tags ? d($) : null),
          rows: e.tags ? 1 : e.rows,
          maxlength: e.tags ? void 0 : e.maxlength,
          disabled: e.disabled
        }), _(e.tags ? "" : e.modelValue), 17, st)
      ]),
      C("div", null, [
        e.pattern && B(i) ? (m(), h(F, { key: 0 }, [
          B(o) && e.validMessage ? (m(), h("span", ot, _(e.validMessage), 1)) : w("", !0),
          !B(o) && e.invalidMessage ? (m(), h("span", it, _(e.invalidMessage), 1)) : w("", !0)
        ], 64)) : w("", !0),
        e.maxlength && e.modelValue ? (m(), h("span", rt, _(e.maxlength - e.modelValue.length), 1)) : w("", !0)
      ])
    ], 2));
  }
});
const Z = /* @__PURE__ */ D(ct, [["__scopeId", "data-v-f8190f30"]]), vt = ["onClick"], ft = /* @__PURE__ */ A({
  __name: "MSelect",
  props: {
    options: null,
    modelValue: null,
    multiple: { type: Boolean },
    id: null,
    placeholder: null,
    bordered: { type: Boolean },
    freeOptions: { type: Boolean },
    pattern: null,
    invalidMessage: null,
    validMessage: null,
    transformer: null,
    label: null,
    disabled: { type: Boolean },
    maxlength: null
  },
  emits: ["update:modelValue"],
  setup(e, { emit: g }) {
    const l = e;
    N(() => l.options.map((d) => d.label));
    const t = N(() => l.options.map((d) => d.value));
    function i(d) {
      return l.options.find((n) => n.label === d);
    }
    function o(d) {
      return l.options.find((n) => n.value === d);
    }
    const s = p(""), f = p([...l.modelValue]), c = p();
    function k() {
      var n;
      const d = {
        value: ((n = i(s.value)) == null ? void 0 : n.value) || s.value,
        label: s.value
      };
      u(d), T();
    }
    function M(d) {
      let n = [];
      f.value.forEach((a) => {
        var V;
        const $ = {
          value: ((V = i(a)) == null ? void 0 : V.value) || a,
          label: a
        };
        n.push($);
      }), v(n, d), s.value = "", T();
    }
    de(
      () => l.modelValue,
      (d) => {
        l.multiple && (f.value = d.map(
          (n) => {
            var a;
            return ((a = o(n)) == null ? void 0 : a.label) || n;
          }
        ));
      }
    );
    function x() {
      c.value.openContent();
    }
    const y = (d) => {
      setTimeout(() => {
        c.value.shrink();
      }, 200), l.multiple || k();
    }, r = (d) => {
      l.multiple && Array.isArray(l.modelValue) ? v(d, "click") : u(d), T();
    };
    function u(d) {
      !l.freeOptions && !t.value.includes(d.value) || l.pattern && !l.pattern.test(d.value) || (g("update:modelValue", d.value), s.value = d.label);
    }
    function v(d, n) {
      let a = [];
      Array.isArray(d) ? a = [...d] : a[0] = d;
      let $ = /* @__PURE__ */ new Set([...l.modelValue]);
      if (n === "backspace" && !s.value) {
        let S = Array.from($);
        S.pop(), $ = new Set(Array.from(S));
      } else
        a.forEach((S) => {
          !l.freeOptions && !t.value.includes(S.value) || l.pattern && !l.pattern.test(S.value) || (n === "click" && $.has(S.value) ? $.delete(S.value) : $.add(S.value));
        });
      const V = Array.from($);
      l.maxlength && V.length > l.maxlength || g("update:modelValue", V);
    }
    P(() => {
      var n;
      l.pattern && ((n = b == null ? void 0 : b.value) == null || n.exposed.registerToInvalids(l.id));
      const d = l.options.filter((a) => a.selected)[0];
      d && !l.multiple && u(d), d && l.multiple && v(d);
    });
    const b = N(() => {
      var n, a;
      let d = (n = W()) == null ? void 0 : n.parent;
      for (; d && ((a = d.vnode.el) == null ? void 0 : a.nodeName) != "FORM"; )
        d = d.parent;
      return d;
    });
    function T() {
      var d;
      (d = b == null ? void 0 : b.value) == null || d.exposed.removeFromInvalids(l.id);
    }
    return (d, n) => (m(), H(B(G), {
      class: "MSELECT",
      ref_key: "drop",
      ref: c,
      unclicked: ""
    }, {
      summary: O(() => [
        e.multiple && Array.isArray(l.modelValue) ? (m(), H(B(Z), {
          key: 0,
          id: e.id + "-search",
          tags: "",
          modelValue: f.value,
          "onUpdate:modelValue": n[0] || (n[0] = (a) => f.value = a),
          "text-value": s.value,
          "onUpdate:text-value": n[1] || (n[1] = (a) => s.value = a),
          onBlur: n[2] || (n[2] = (a) => y()),
          onFocus: n[3] || (n[3] = (a) => x()),
          onKeyup: [
            n[4] || (n[4] = K((a) => M(), ["enter"])),
            n[5] || (n[5] = K((a) => M("backspace"), ["delete"]))
          ],
          placeholder: e.placeholder,
          bordered: e.bordered,
          pattern: e.pattern,
          "invalid-message": e.invalidMessage,
          validMessage: e.validMessage,
          transformer: e.transformer,
          label: e.label,
          disabled: e.disabled,
          maxlength: e.maxlength
        }, null, 8, ["id", "modelValue", "text-value", "placeholder", "bordered", "pattern", "invalid-message", "validMessage", "transformer", "label", "disabled", "maxlength"])) : (m(), H(Q, {
          key: 1,
          modelValue: s.value,
          "onUpdate:modelValue": n[6] || (n[6] = (a) => s.value = a),
          id: e.id + "-search",
          onBlur: n[7] || (n[7] = (a) => y()),
          onFocus: n[8] || (n[8] = (a) => x()),
          onKeyup: n[9] || (n[9] = (a) => k()),
          placeholder: e.placeholder,
          bordered: e.bordered,
          pattern: e.pattern,
          "invalid-message": e.invalidMessage,
          validMessage: e.validMessage,
          transformer: e.transformer,
          label: e.label,
          disabled: e.disabled
        }, {
          start: O(() => [
            I(d.$slots, "start", {}, void 0, !0)
          ]),
          end: O(() => [
            I(d.$slots, "end", {}, void 0, !0)
          ]),
          _: 3
        }, 8, ["modelValue", "id", "placeholder", "bordered", "pattern", "invalid-message", "validMessage", "transformer", "label", "disabled"]))
      ]),
      default: O(() => [
        (m(!0), h(F, null, J(e.options, (a, $) => {
          var V;
          return m(), h(F, null, [
            !s.value || ((V = a.label) == null ? void 0 : V.toLowerCase().includes(s.value.toLowerCase())) ? (m(), h("div", {
              key: 0,
              onClick: (S) => a.disabled ? null : r(a),
              class: E({
                "m-selected": e.modelValue.includes(a.value),
                "m-disabled": a.disabled
              })
            }, _(a.label), 11, vt)) : w("", !0)
          ], 64);
        }), 256))
      ]),
      _: 3
    }, 512));
  }
});
const Me = /* @__PURE__ */ D(ft, [["__scopeId", "data-v-92c161d8"]]), oe = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  MNotes: ve,
  MButton: L,
  MP: j,
  MMenu: fe,
  MPoppup: me,
  MDrop: G,
  MSlider: pe,
  MForm: ye,
  MInput: Q,
  MSection: ge,
  MText: Z,
  MSelect: Me
}, Symbol.toStringTag, { value: "Module" })), pt = (e) => {
  for (let g in oe)
    e.component(g, oe[g]);
}, yt = ve, gt = L, Mt = j, ht = fe, bt = me, $t = G, kt = pe, xt = ye, Bt = Q, wt = ge, Tt = Z, Vt = Me;
export {
  gt as MButton,
  $t as MDrop,
  xt as MForm,
  Bt as MInput,
  ht as MMenu,
  yt as MNotes,
  Mt as MP,
  bt as MPoppup,
  wt as MSection,
  Vt as MSelect,
  kt as MSlider,
  Tt as MText,
  pt as install
};
