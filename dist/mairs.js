import { defineComponent as V, ref as v, computed as D, onBeforeMount as ge, onMounted as N, openBlock as f, createElementBlock as y, normalizeClass as I, unref as $, renderSlot as B, normalizeStyle as oe, createVNode as R, TransitionGroup as se, withCtx as S, Fragment as A, renderList as q, createElementVNode as T, createCommentVNode as x, createTextVNode as j, toDisplayString as w, pushScopeId as he, popScopeId as Me, onUnmounted as J, withDirectives as U, withModifiers as z, createBlock as P, Teleport as be, vShow as X, watch as _e, onUpdated as $e, reactive as ke, getCurrentInstance as K, mergeProps as ie, withKeys as xe } from "vue";
const we = ["dir"], Te = {
  name: "MP"
}, Be = /* @__PURE__ */ V({
  ...Te,
  props: {
    math: { type: Boolean },
    autoDirection: { type: Boolean },
    bordered: { type: Boolean },
    dashed: { type: Boolean }
  },
  setup(e, { expose: m }) {
    const l = e, t = /[\u0621-\u064A]/;
    let s = v("ltr"), r = v("");
    const i = D(() => {
      let u = ["MP"];
      return l.bordered && u.push("m-bordered"), l.dashed && u.push("m-dashed"), u.join(" ");
    });
    let p = v(null);
    function d() {
      return r.value;
    }
    function M() {
      r.value = p.value.innerText;
    }
    function g() {
      p.value.innerText = r.value;
    }
    function o() {
      t.test(p.value.textContent.trim()[0]) ? s.value = "rtl" : s.value = "ltr";
    }
    function a() {
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
        p.value
      ]));
    }
    return ge(() => {
      if (document && l.math && !document.getElementById("MATHJAX")) {
        const u = document.createElement("script");
        u.id = "MATHJAX", u.src = "https://cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.2/MathJax.js?config=TeX-AMS_HTML", document.body.appendChild(u);
      }
    }), N(() => {
      M(), l.autoDirection && o(), l.math && setTimeout(a, 400);
    }), m({
      getRawContent: d
    }), (u, n) => (f(), y("p", {
      class: I($(i)),
      ref_key: "mp",
      ref: p,
      dir: $(s),
      onFocus: n[0] || (n[0] = (c) => g()),
      onBlur: n[1] || (n[1] = (c) => e.math ? a() : null),
      onInput: n[2] || (n[2] = (c) => {
        M(), e.autoDirection && o();
      })
    }, [
      B(u.$slots, "default", {}, void 0, !0)
    ], 42, we));
  }
});
const E = (e, m) => {
  const l = e.__vccOpts || e;
  for (const [t, s] of m)
    l[t] = s;
  return l;
}, L = /* @__PURE__ */ E(Be, [["__scopeId", "data-v-863fdd37"]]), Ce = ["onClick"], Ie = {
  name: "MNotes",
  components: { MP: L }
}, Ve = /* @__PURE__ */ V({
  ...Ie,
  props: {
    animation: null,
    timeout: null,
    position: { default: "right" },
    autoDirection: { type: Boolean },
    math: { type: Boolean }
  },
  setup(e, { expose: m }) {
    const l = e, t = v([]), s = v(0);
    function r(i) {
      i.id = ++s.value, t.value.push(i), (i.timeout || l.timeout) && setTimeout(() => {
        t.value.splice(
          t.value.findIndex((p) => p.id == i.id),
          1
        );
      }, i.timeout || l.timeout);
    }
    return m({
      add: r
    }), (i, p) => (f(), y("aside", {
      class: I(`MNOTES m-${e.position}`),
      style: oe(t.value.length ? "" : "pointer-events: none")
    }, [
      R(se, {
        name: e.animation ? e.animation : `slide-${e.position}`
      }, {
        default: S(() => [
          (f(!0), y(A, null, q(t.value, (d) => (f(), y("div", {
            key: d.title,
            class: I(`MNOTE ${d.status ? "m-" + d.status : ""}`),
            onClick: (M) => d.handler ? d.handler() : null
          }, [
            T("b", null, [
              d.icon ? (f(), y("i", {
                key: 0,
                class: I(d.icon)
              }, null, 2)) : x("", !0),
              j(" " + w(d.title), 1)
            ]),
            R(L, {
              autoDirection: e.autoDirection,
              math: e.math
            }, {
              default: S(() => [
                j(w(d.message), 1)
              ]),
              _: 2
            }, 1032, ["autoDirection", "math"])
          ], 10, Ce))), 128))
        ]),
        _: 1
      }, 8, ["name"])
    ], 6));
  }
});
const re = /* @__PURE__ */ E(Ve, [["__scopeId", "data-v-65b5c17d"]]), Se = (e) => (he("data-v-9dff2b2d"), e = e(), Me(), e), Ee = ["disabled"], De = {
  key: 0,
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 512 512"
}, Ne = /* @__PURE__ */ Se(() => /* @__PURE__ */ T("path", {
  fill: "currentColor",
  d: "M222.7 32.1c5 16.9-4.6 34.8-21.5 39.8C121.8 95.6 64 169.1 64 256c0 106 86 192 192 192s192-86 192-192c0-86.9-57.8-160.4-137.1-184.1c-16.9-5-26.6-22.9-21.5-39.8s22.9-26.6 39.8-21.5C434.9 42.1 512 140 512 256c0 141.4-114.6 256-256 256S0 397.4 0 256C0 140 77.1 42.1 182.9 10.6c16.9-5 34.8 4.6 39.8 21.5z"
}, null, -1)), Oe = [
  Ne
], Ae = {
  name: "MButton"
}, He = /* @__PURE__ */ V({
  ...Ae,
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
    const m = e, l = D(() => ({
      "m-safe": m.safe,
      "m-warning": m.warning,
      "m-danger": m.danger
    })), t = D(() => ({
      MBUTTON: !m.unstyled,
      "m-bordered": m.bordered,
      "m-rounded": m.rounded
    }));
    return (s, r) => (f(), y("button", {
      class: I({ ...$(l), ...$(t) }),
      disabled: e.loading
    }, [
      e.loading ? (f(), y("svg", De, Oe)) : x("", !0),
      B(s.$slots, "default", {}, void 0, !0)
    ], 10, Ee));
  }
});
const H = /* @__PURE__ */ E(He, [["__scopeId", "data-v-9dff2b2d"]]), Pe = {
  name: "MMenu"
}, Le = /* @__PURE__ */ V({
  ...Pe,
  props: {
    unstyled: { type: Boolean }
  },
  setup(e, { expose: m }) {
    const l = v(!0), t = v(!1), s = v(-99999999), r = v(-99999999), i = v(0), p = v(0), d = v();
    let M;
    N(() => {
      var a;
      (a = d.value) == null || a.show(), setTimeout(() => {
        var u, n;
        i.value = Math.trunc(
          ((u = d.value) == null ? void 0 : u.getBoundingClientRect().width) || 0
        ), p.value = Math.trunc(
          ((n = d.value) == null ? void 0 : n.getBoundingClientRect().height) || 0
        ), l.value = !1;
      }, 1e3), M = new MutationObserver((u) => {
        var n;
        for (let c of u)
          c.type === "attributes" && c.attributeName === "open" && (l.value = ((n = d.value) == null ? void 0 : n.hasAttribute("open")) || !1);
      }), d.value && M.observe(d.value, { attributes: !0 });
    }), J(() => {
      M.disconnect();
    });
    function g(a) {
      var u;
      a.clientX + i.value >= window.innerWidth ? s.value = a.clientX - i.value : s.value = a.clientX, a.clientY + p.value >= window.innerHeight ? r.value = a.clientY - p.value : r.value = a.clientY, (u = d.value) == null || u.show(), l.value = !0;
    }
    function o() {
      t.value = !0, d.value && (d.value.open = !1), setTimeout(() => {
        var a;
        d.value && (d.value.open = !0), (a = d.value) == null || a.close(), t.value = !1;
      }, 500);
    }
    return m({
      show: g,
      close: o
    }), (a, u) => U((f(), y("dialog", {
      onClick: u[1] || (u[1] = z((n) => o(), ["self"])),
      class: I({
        MMENU: !e.unstyled,
        "m-hiding": t.value
      }),
      ref_key: "MMENU",
      ref: d,
      style: oe({ top: `${r.value}px`, left: `${s.value}px` })
    }, [
      (f(), P(be, { to: "body" }, [
        U(T("div", {
          class: "m-overlay",
          onClick: u[0] || (u[0] = (n) => o())
        }, null, 512), [
          [X, l.value]
        ])
      ])),
      T("div", null, [
        B(a.$slots, "default", {}, void 0, !0)
      ])
    ], 6)), [
      [X, l.value]
    ]);
  }
});
const de = /* @__PURE__ */ E(Le, [["__scopeId", "data-v-a616cf92"]]), Fe = { key: 0 }, je = { key: 2 }, Re = {
  name: "MPopup",
  components: { MButton: H, MP: L }
}, qe = /* @__PURE__ */ V({
  ...Re,
  props: {
    required: { type: Boolean },
    blurred: { type: Boolean },
    mobile: { type: Boolean },
    unstyled: { type: Boolean }
  },
  setup(e, { expose: m }) {
    const l = e;
    let t = v({});
    const s = v(), r = v(!1), i = v(!1);
    let p, d = v(void 0), M = v(void 0);
    N(() => {
      p = new MutationObserver((u) => {
        var n;
        for (let c of u)
          c.type === "attributes" && c.attributeName === "open" && (r.value = ((n = s.value) == null ? void 0 : n.hasAttribute("open")) || !1);
      }), s.value && p.observe(s.value, { attributes: !0 });
    }), J(() => {
      p.disconnect();
    });
    function g(u) {
      var n;
      return u && (t.value = u), (n = s.value) == null || n.showModal(), r.value = !0, new Promise((c, _) => {
        d.value = c, M.value = _;
      });
    }
    function o() {
      if (!l.required)
        return a(!1);
    }
    function a(u) {
      d.value(u), i.value = !0, s.value && (s.value.open = !1), setTimeout(() => {
        var n;
        s.value && (s.value.open = !0), (n = s.value) == null || n.close(), i.value = !1;
      }, 500);
    }
    return m({
      show: g,
      close: o,
      respond: a
    }), (u, n) => U((f(), y("dialog", {
      class: I({
        MPOPPUP: !e.unstyled,
        "m-blurred": e.blurred,
        "m-mobile": e.mobile,
        "m-hiding": i.value
      }),
      ref_key: "MPOP",
      ref: s,
      onClick: n[2] || (n[2] = z((c) => o(), ["self"]))
    }, [
      T("div", null, [
        $(t).title ? (f(), y("b", Fe, w($(t).title), 1)) : x("", !0),
        $(t).message ? (f(), P(L, { key: 1 }, {
          default: S(() => [
            j(w($(t).message), 1)
          ]),
          _: 1
        })) : x("", !0),
        B(u.$slots, "default", {}, void 0, !0),
        $(t).cancel || $(t).confirm ? (f(), y("section", je, [
          $(t).cancel ? (f(), P(H, {
            key: 0,
            bordered: "",
            onClick: n[0] || (n[0] = (c) => a(!1))
          }, {
            default: S(() => [
              j(w($(t).cancel), 1)
            ]),
            _: 1
          })) : x("", !0),
          $(t).confirm ? (f(), P(H, {
            key: 1,
            onClick: n[1] || (n[1] = (c) => a(!0))
          }, {
            default: S(() => [
              j(w($(t).confirm), 1)
            ]),
            _: 1
          })) : x("", !0)
        ])) : x("", !0)
      ])
    ], 2)), [
      [X, r.value]
    ]);
  }
});
const ce = /* @__PURE__ */ E(qe, [["__scopeId", "data-v-35f1cbe0"]]), Je = ["open"], Ue = ["onClick"], Xe = {
  name: "MDrop"
}, ze = /* @__PURE__ */ V({
  ...Xe,
  props: {
    open: { type: Boolean },
    unstyled: { type: Boolean }
  },
  setup(e) {
    let m = v(!1), l = v(!1), t = v(null), s = v(null), r = v(null);
    function i() {
      m.value || !s.value.open ? M() : (l.value || s.value.open) && d();
    }
    function p() {
      l.value = !0;
      const o = "0px", a = `${r.value.offsetHeight}px`;
      t.value && t.value.cancel(), t.value = r.value.animate(
        {
          height: [o, a]
        },
        {
          duration: 400,
          easing: "ease-out"
        }
      ), t.value.onfinish = () => g(!0), t.value.oncancel = () => l.value = !1;
    }
    function d() {
      m.value = !0;
      const o = `${r.value.offsetHeight}px`, a = 0;
      t.value && t.value.cancel(), t.value = r.value.animate(
        {
          height: [o, a]
        },
        {
          duration: 400,
          easing: "ease-out"
        }
      ), t.value.onfinish = () => g(!1), t.value.oncancel = () => m.value = !1;
    }
    function M() {
      r.value.style.height = `${r.value.offsetHeight}px`, s.value.open = !0, window.requestAnimationFrame(() => p());
    }
    function g(o) {
      try {
        s.value.open = o, t.value = null, m.value = !1, l.value = !1, r.value.style.height = "";
      } catch {
        return;
      }
    }
    return (o, a) => (f(), y("details", {
      class: I({ MDROP: !e.unstyled }),
      ref_key: "detailsEl",
      ref: s,
      open: e.open
    }, [
      T("summary", {
        ref: "summary",
        onClick: z(i, ["prevent"])
      }, [
        B(o.$slots, "summary", {}, void 0, !0)
      ], 8, Ue),
      T("section", {
        ref_key: "contentEl",
        ref: r
      }, [
        B(o.$slots, "default", {}, void 0, !0)
      ], 512)
    ], 10, Je));
  }
});
const Y = /* @__PURE__ */ E(ze, [["__scopeId", "data-v-835a5156"]]), Ke = ["onClick"], Ye = /* @__PURE__ */ V({
  __name: "MSlider",
  props: {
    carousel: { type: Boolean },
    infinite: { type: Boolean },
    stacked: { type: Boolean },
    changeTime: null,
    pointers: { type: Boolean }
  },
  setup(e, { expose: m }) {
    const l = e, t = v(0), s = v(0), r = v(null), i = v(null), p = v(null);
    function d(n) {
      (n < s.value && n > 0 || l.infinite) && (t.value = n);
    }
    function M() {
      !l.carousel || (t.value < s.value || l.infinite) && t.value++;
    }
    function g() {
      !l.carousel || (t.value > 0 || l.infinite) && t.value--;
    }
    _e(t, (n) => o(n));
    function o(n) {
      var c, _, C, F, b, h, k, O, G, Q, Z, ee, te, le, ne, ae;
      (_ = (c = i.value) == null ? void 0 : c.querySelector(".m-shown-slide")) == null || _.classList.remove("m-shown-slide"), (F = (C = i.value) == null ? void 0 : C.querySelector(".m-previous-slide")) == null || F.classList.remove("m-previous-slide"), (h = (b = i.value) == null ? void 0 : b.querySelector(".m-next-slide")) == null || h.classList.remove("m-next-slide"), (O = (k = i.value) == null ? void 0 : k.children[a(n - 1)]) == null || O.classList.add(
        "m-previous-slide"
      ), (Q = (G = i.value) == null ? void 0 : G.children[a(n + 1)]) == null || Q.classList.add(
        "m-next-slide"
      ), (ee = (Z = i.value) == null ? void 0 : Z.children[a(n)]) == null || ee.classList.add(
        "m-shown-slide"
      ), (le = (te = p.value) == null ? void 0 : te.querySelector(".m-active")) == null || le.classList.remove("m-active"), (ae = (ne = p.value) == null ? void 0 : ne.children[a(n)]) == null || ae.classList.add(
        "m-active"
      );
    }
    function a(n) {
      return (n % s.value + s.value) % s.value;
    }
    const u = v(null);
    return N(() => {
      var n;
      s.value = ((n = i.value) == null ? void 0 : n.childElementCount) || 0, l.carousel && o(0), l.changeTime && l.carousel && (u.value = setInterval(M, l.changeTime));
    }), $e(() => {
      var n;
      s.value = ((n = i.value) == null ? void 0 : n.childElementCount) || 0, l.carousel && o(0);
    }), J(() => {
      u.value = null;
    }), m({
      goTo: d,
      next: M,
      previous: g
    }), (n, c) => (f(), y("section", {
      ref_key: "slider",
      ref: r,
      class: I({ MSLIDER: !0, "m-stacked": e.stacked, "m-carousel": e.carousel })
    }, [
      R(H, {
        "aria-label": "slider-previous",
        onClick: c[0] || (c[0] = (_) => g())
      }),
      T("div", {
        class: "MTRACK",
        ref_key: "track",
        ref: i
      }, [
        B(n.$slots, "default", {}, void 0, !0)
      ], 512),
      R(H, {
        "aria-label": "slider-next",
        onClick: c[1] || (c[1] = (_) => M())
      }),
      e.carousel && e.pointers ? (f(), y("div", {
        key: 0,
        ref_key: "pointersEl",
        ref: p,
        class: "MPOINTERS"
      }, [
        (f(!0), y(A, null, q(new Array(s.value), (_, C) => (f(), y("span", {
          onClick: (F) => d(C)
        }, null, 8, Ke))), 256))
      ], 512)) : x("", !0)
    ], 2));
  }
});
const ve = /* @__PURE__ */ E(Ye, [["__scopeId", "data-v-ffd3b7ce"]]), We = { class: "MFORM" }, Ge = {
  name: "MForm"
}, fe = /* @__PURE__ */ V({
  ...Ge,
  setup(e, { expose: m }) {
    const l = ke([]);
    function t(i) {
      l.includes(i) || l.push(i);
    }
    function s(i) {
      l.splice(
        l.findIndex((p) => p == i),
        1
      );
    }
    function r() {
      return l.length === 0;
    }
    return m({
      registerToInvalids: t,
      removeFromInvalids: s,
      checkValidation: r
    }), (i, p) => (f(), y("form", We, [
      B(i.$slots, "default")
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
}, nt = /* @__PURE__ */ V({
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
  setup(e, { expose: m, emit: l }) {
    const t = e;
    let s = v(!1), r = v(
      t.pattern ? t.pattern.test(t.modelValue) : !0
    ), i = v("");
    const p = /[\u0621-\u064A]/;
    let d = v({ value: "" });
    const M = K(), g = D(() => {
      var _;
      let c = M == null ? void 0 : M.parent;
      for (; c && ((_ = c.vnode.el) == null ? void 0 : _.nodeName) != "FORM"; )
        c = c.parent;
      return c;
    });
    N(() => {
      var c;
      t.pattern && !r.value && ((c = g == null ? void 0 : g.value) == null || c.exposed.registerToInvalids(t.id)), t.autoDirection && o();
    });
    function o() {
      p.test(d.value.value[0]) ? i.value = "rtl" : i.value = "ltr";
    }
    function a() {
      return r.value;
    }
    function u(c) {
      var _, C;
      !t.pattern || (t.pattern.test(c.toString()) ? (r.value = !0, (_ = g == null ? void 0 : g.value) == null || _.exposed.removeFromInvalids(t.id)) : (r.value = !1, (C = g == null ? void 0 : g.value) == null || C.exposed.registerToInvalids(t.id)));
    }
    function n(c) {
      s.value = !0;
      let _ = c.currentTarget.value;
      t.transformer && (_ = t.transformer(_)), l("update:modelValue", _), t.autoDirection && o(), u(c.currentTarget.value);
    }
    return m({
      isValid: a
    }), (c, _) => (f(), y("div", {
      class: I({
        MINPUT: !e.unstyled,
        "m-bordered": e.bordered,
        "m-disabled": e.disabled,
        "m-shrinked": e.shrinked
      })
    }, [
      e.label ? (f(), y("label", {
        key: 0,
        for: e.id
      }, w(e.label), 9, Qe)) : x("", !0),
      T("div", null, [
        B(c.$slots, "start", {}, void 0, !0),
        T("input", ie({
          dir: $(i),
          ref_key: "input",
          ref: d
        }, c.$attrs, {
          type: e.type,
          value: e.modelValue,
          id: e.id,
          disabled: e.disabled,
          onInput: _[0] || (_[0] = (C) => n(C))
        }), null, 16, Ze),
        B(c.$slots, "end", {}, void 0, !0)
      ]),
      T("div", null, [
        e.pattern && $(s) ? (f(), y(A, { key: 0 }, [
          $(r) && e.validMessage ? (f(), y("span", et, w(e.validMessage), 1)) : x("", !0),
          !$(r) && e.invalidMessage ? (f(), y("span", tt, w(e.invalidMessage), 1)) : x("", !0)
        ], 64)) : x("", !0)
      ])
    ], 2));
  }
});
const W = /* @__PURE__ */ E(nt, [["__scopeId", "data-v-de3d049e"]]), at = {
  name: "MSection"
}, me = /* @__PURE__ */ V({
  ...at,
  props: {
    forward: { type: Boolean }
  },
  setup(e) {
    const m = e;
    let l = v(null), t;
    return N(() => {
      t = new IntersectionObserver(
        (s) => {
          s.forEach((r) => {
            const p = Math.round(r.intersectionRatio * 10) * 10;
            r.isIntersecting ? (r.target.setAttribute("data-m-visible", `${p}%`), r.target.style.setProperty(
              "--m-visibility-ratio",
              `${p}%`
            )) : m.forward || r.target.removeAttribute("data-m-visible");
          });
        },
        {
          threshold: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1]
        }
      ), t.observe(l.value);
    }), J(() => {
      t.disconnect();
    }), (s, r) => (f(), y("section", {
      ref_key: "sectionEl",
      ref: l,
      class: "MSECTION"
    }, [
      B(s.$slots, "default")
    ], 512));
  }
}), ut = ["for"], ot = ["dir", "id", "rows", "maxlength", "disabled"], st = {
  key: 0,
  class: "m-valid"
}, it = {
  key: 1,
  class: "m-invalid"
}, rt = { key: 1 }, dt = {
  name: "MText",
  inheritAttrs: !1
}, ct = /* @__PURE__ */ V({
  ...dt,
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
    transformer: null,
    unstyled: { type: Boolean }
  },
  emits: ["update:modelValue"],
  setup(e, { expose: m, emit: l }) {
    const t = e;
    let s = v(!1), r = v(!1), i = v("");
    const p = /[\u0621-\u064A]/, d = v(null), M = K(), g = D(() => {
      var h;
      let b = M == null ? void 0 : M.parent;
      for (; b && ((h = b.vnode.el) == null ? void 0 : h.nodeName) != "FORM"; )
        b = b.parent;
      return b;
    });
    N(() => {
      var b, h;
      r.value = t.pattern ? t.pattern.test((b = d.value) == null ? void 0 : b.value) : !0, t.pattern && !r.value && ((h = g == null ? void 0 : g.value) == null || h.exposed.registerToInvalids(t.id)), t.autoDirection && a();
    });
    function o(b) {
      const h = /<\/?([a-z][a-z0-9]*)\b[^>]*>/gi;
      return b.replace(h, (k, O) => t.includedHtml && t.includedHtml.includes(O.toLowerCase()) ? k : "");
    }
    function a() {
      d.value && p.test(d.value.value[0]) ? i.value = "rtl" : i.value = "ltr";
    }
    function u() {
      return r.value;
    }
    function n(b) {
      var h, k;
      !t.pattern || (t.pattern.test(b.toString()) ? (r.value = !0, (h = g == null ? void 0 : g.value) == null || h.exposed.removeFromInvalids(t.id)) : (r.value = !1, (k = g == null ? void 0 : g.value) == null || k.exposed.registerToInvalids(t.id)));
    }
    function c(b) {
      if (s.value = !0, !t.tags) {
        let h = b.currentTarget.value;
        t.includedHtml && (h = o(h)), t.transformer && (h = t.transformer(h)), l("update:modelValue", h);
      }
      t.autoDirection && a(), t.pattern && n(b.currentTarget.value.trim());
    }
    function _(b) {
      if (b.preventDefault(), !t.modelValue || !(t.modelValue instanceof Array) || t.maxlength && t.maxlength <= t.modelValue.length || !r.value)
        return;
      const h = t.transformer ? t.transformer(b.currentTarget.value) : b.currentTarget.value, k = [...t.modelValue, h];
      l("update:modelValue", k), b.currentTarget.value = "", s.value = !1;
    }
    const C = v("");
    function F(b) {
      if (!(!t.modelValue || !(t.modelValue instanceof Array))) {
        if (b.key == "Backspace" && C.value === "") {
          const h = [...t.modelValue];
          h.pop(), l("update:modelValue", h);
        }
        C.value = b.currentTarget.value;
      }
    }
    return m({
      isValid: u
    }), (b, h) => (f(), y("div", {
      class: I({
        MTEXT: !e.unstyled,
        "m-bordered": e.bordered,
        "m-tags": e.tags,
        "m-disabled": e.disabled
      })
    }, [
      e.label ? (f(), y("label", {
        key: 0,
        for: e.id
      }, w(e.label), 9, ut)) : x("", !0),
      T("div", {
        onClick: h[3] || (h[3] = (k) => {
          var O;
          return (O = d.value) == null ? void 0 : O.focus();
        })
      }, [
        e.tags ? (f(), P(se, {
          key: 0,
          name: "fade"
        }, {
          default: S(() => [
            (f(!0), y(A, null, q(e.modelValue, (k) => (f(), y("span", { key: k }, w(k), 1))), 128))
          ]),
          _: 1
        })) : x("", !0),
        T("textarea", ie({
          dir: $(i),
          ref_key: "input",
          ref: d
        }, b.$attrs, {
          id: e.id,
          onInput: h[0] || (h[0] = (k) => c(k)),
          onKeydown: h[1] || (h[1] = xe((k) => e.tags ? _(k) : null, ["enter"])),
          onKeyup: h[2] || (h[2] = (k) => e.tags ? F(k) : null),
          rows: e.tags ? 1 : e.rows,
          maxlength: e.tags ? void 0 : e.maxlength,
          disabled: e.disabled
        }), w(e.tags ? "" : e.modelValue), 17, ot)
      ]),
      T("div", null, [
        e.pattern && $(s) ? (f(), y(A, { key: 0 }, [
          $(r) && e.validMessage ? (f(), y("span", st, w(e.validMessage), 1)) : x("", !0),
          !$(r) && e.invalidMessage ? (f(), y("span", it, w(e.invalidMessage), 1)) : x("", !0)
        ], 64)) : x("", !0),
        e.maxlength && e.modelValue ? (f(), y("span", rt, w(e.maxlength - e.modelValue.length), 1)) : x("", !0)
      ])
    ], 2));
  }
});
const pe = /* @__PURE__ */ E(ct, [["__scopeId", "data-v-a509e3ea"]]), vt = ["onClick"], ft = /* @__PURE__ */ V({
  __name: "MSelect",
  props: {
    options: null,
    modelValue: null,
    multiple: { type: Boolean },
    id: null,
    placeholder: null,
    bordered: { type: Boolean },
    required: { type: Boolean }
  },
  emits: ["update:modelValue"],
  setup(e, { emit: m }) {
    const l = e, t = D(() => l.options.map((o) => o.label));
    D(() => l.options.map((o) => o.value));
    function s(o) {
      return l.options.find((a) => a.value === o);
    }
    const r = v(!1), i = v(""), p = (o) => {
      setTimeout(() => {
        var u;
        !t.value.includes(i.value) && !l.multiple && (i.value = l.modelValue && ((u = s(l.modelValue)) == null ? void 0 : u.label) || "");
      }, 100);
      const a = o.currentTarget.parentElement;
      setTimeout(() => {
        a.click();
      }, 200);
    }, d = (o) => {
      if (l.multiple && Array.isArray(l.modelValue)) {
        let a = [...l.modelValue];
        a.find((n) => n === o.value) ? a = a.filter((n) => n !== o.value) : a.push(o.value), m("update:modelValue", a);
        let u = l.options.filter((n) => a.includes(n.value)).map((n) => n.label);
        i.value = u.join(", ");
      } else
        r.value = !1, m("update:modelValue", o.value), i.value = o.label;
      g();
    };
    N(() => {
      var a;
      l.required && ((a = M == null ? void 0 : M.value) == null || a.exposed.registerToInvalids(l.id));
      const o = l.options.filter((u) => u.selected)[0];
      o && d(o);
    });
    const M = D(() => {
      var a, u;
      let o = (a = K()) == null ? void 0 : a.parent;
      for (; o && ((u = o.vnode.el) == null ? void 0 : u.nodeName) != "FORM"; )
        o = o.parent;
      return o;
    });
    function g() {
      var o;
      (o = M == null ? void 0 : M.value) == null || o.exposed.removeFromInvalids(l.id);
    }
    return (o, a) => (f(), P($(Y), { class: "MSELECT" }, {
      summary: S(() => [
        R(W, {
          modelValue: i.value,
          "onUpdate:modelValue": a[0] || (a[0] = (u) => i.value = u),
          disabled: e.multiple,
          placeholder: e.placeholder,
          id: e.id + "-search",
          onBlur: a[1] || (a[1] = (u) => p(u)),
          bordered: e.bordered
        }, {
          start: S(() => [
            B(o.$slots, "start", {}, void 0, !0)
          ]),
          end: S(() => [
            B(o.$slots, "end", {}, void 0, !0)
          ]),
          _: 3
        }, 8, ["modelValue", "disabled", "placeholder", "id", "bordered"])
      ]),
      default: S(() => [
        (f(!0), y(A, null, q(e.options, (u, n) => {
          var c;
          return f(), y(A, null, [
            !i.value || e.multiple || ((c = u.label) == null ? void 0 : c.toLowerCase().includes(i.value.toLowerCase())) ? (f(), y("div", {
              key: 0,
              onClick: (_) => u.disabled ? null : d(u),
              class: I({
                "m-selected": e.modelValue.includes(u.value),
                "m-disabled": u.disabled
              })
            }, w(u.label), 11, vt)) : x("", !0)
          ], 64);
        }), 256))
      ]),
      _: 3
    }));
  }
});
const ye = /* @__PURE__ */ E(ft, [["__scopeId", "data-v-86e44c0e"]]), ue = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  MNotes: re,
  MButton: H,
  MP: L,
  MMenu: de,
  MPoppup: ce,
  MDrop: Y,
  MSlider: ve,
  MForm: fe,
  MInput: W,
  MSection: me,
  MText: pe,
  MSelect: ye
}, Symbol.toStringTag, { value: "Module" })), pt = (e) => {
  for (let m in ue)
    e.component(m, ue[m]);
}, yt = re, gt = H, ht = L, Mt = de, bt = ce, _t = Y, $t = ve, kt = fe, xt = W, wt = me, Tt = pe, Bt = ye;
export {
  gt as MButton,
  _t as MDrop,
  kt as MForm,
  xt as MInput,
  Mt as MMenu,
  yt as MNotes,
  ht as MP,
  bt as MPoppup,
  wt as MSection,
  Bt as MSelect,
  $t as MSlider,
  Tt as MText,
  pt as install
};
