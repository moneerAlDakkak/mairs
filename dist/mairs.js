import { defineComponent as T, ref as c, computed as A, onBeforeMount as G, onMounted as H, openBlock as d, createElementBlock as m, normalizeClass as k, unref as h, renderSlot as w, withDirectives as Q, createVNode as P, TransitionGroup as U, withCtx as N, Fragment as V, renderList as q, createElementVNode as E, createCommentVNode as I, createTextVNode as C, toDisplayString as $, vShow as Z, withModifiers as X, normalizeStyle as W, getCurrentInstance as J, createBlock as O, onUpdated as ee, watch as L, reactive as te, mergeProps as K, withKeys as ne } from "vue";
const le = ["dir"], ae = {
  name: "MP"
}, se = /* @__PURE__ */ T({
  ...ae,
  props: {
    math: { type: Boolean },
    autoDirection: { type: Boolean },
    bordered: { type: Boolean },
    dashed: { type: Boolean }
  },
  setup(t, { expose: u }) {
    const l = t, e = /[\u0621-\u064A]/;
    let n = c("ltr"), a = c("");
    const s = A(() => {
      let M = ["MP"];
      return l.bordered && M.push("m-bordered"), l.dashed && M.push("m-dashed"), M.join(" ");
    });
    let p = c(null);
    function v() {
      return a.value;
    }
    function _() {
      a.value = p.value.innerText;
    }
    function i() {
      p.value.innerText = a.value;
    }
    function o() {
      e.test(p.value.textContent.trim()[0]) ? n.value = "rtl" : n.value = "ltr";
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
        p.value
      ]));
    }
    return G(() => {
      if (document && l.math && !document.getElementById("MATHJAX")) {
        const M = document.createElement("script");
        M.id = "MATHJAX", M.src = "https://cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.2/MathJax.js?config=TeX-AMS_HTML", document.body.appendChild(M);
      }
    }), H(() => {
      _(), l.autoDirection && o(), l.math && setTimeout(y, 400);
    }), u({
      getRawContent: v
    }), (M, r) => (d(), m("p", {
      class: k(h(s)),
      ref_key: "mp",
      ref: p,
      dir: h(n),
      onFocus: r[0] || (r[0] = (f) => i()),
      onBlur: r[1] || (r[1] = (f) => t.math ? y() : null),
      onInput: r[2] || (r[2] = (f) => {
        _(), t.autoDirection && o();
      })
    }, [
      w(M.$slots, "default", {}, void 0, !0)
    ], 42, le));
  }
});
const D = (t, u) => {
  const l = t.__vccOpts || t;
  for (const [e, n] of u)
    l[e] = n;
  return l;
}, j = /* @__PURE__ */ D(se, [["__scopeId", "data-v-7e874cbc"]]), ue = {
  class: /* @__PURE__ */ k("MNOTES")
}, ie = ["onClick"], oe = {
  name: "MNotes",
  components: { MP: j }
}, re = /* @__PURE__ */ T({
  ...oe,
  props: {
    animation: null,
    timeout: null
  },
  setup(t, { expose: u }) {
    const l = t, e = c([]), n = c(0);
    function a(s) {
      s.id = ++n.value, e.value.push(s), (s.timeout || l.timeout) && setTimeout(() => {
        e.value.splice(
          e.value.findIndex((p) => p.id == s.id),
          1
        );
      }, s.timeout || l.timeout);
    }
    return u({
      add: a
    }), (s, p) => Q((d(), m("section", ue, [
      P(U, {
        name: t.animation ? t.animation : "slide-right"
      }, {
        default: N(() => [
          (d(!0), m(V, null, q(e.value, (v) => (d(), m("div", {
            key: v.title,
            class: k(`MNOTE ${v.status ? "m-" + v.status : ""}`),
            onClick: (_) => v.handler ? v.handler() : null
          }, [
            E("b", null, [
              v.icon ? (d(), m("i", {
                key: 0,
                class: k(v.icon)
              }, null, 2)) : I("", !0),
              C(" " + $(v.title), 1)
            ]),
            P(j, {
              autoDirection: "",
              math: ""
            }, {
              default: N(() => [
                C($(v.message), 1)
              ]),
              _: 2
            }, 1024)
          ], 10, ie))), 128))
        ]),
        _: 1
      }, 8, ["name"])
    ], 512)), [
      [Z, e.value.length]
    ]);
  }
});
const de = /* @__PURE__ */ D(re, [["__scopeId", "data-v-ffd7626a"]]), z = T({
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
}), ce = {
  name: "MButton",
  mixins: [z]
}, ve = /* @__PURE__ */ T({
  ...ce,
  props: {
    bordered: { type: Boolean },
    rounded: { type: Boolean },
    noStyle: { type: Boolean },
    safe: { type: Boolean },
    warning: { type: Boolean },
    danger: { type: Boolean }
  },
  setup(t) {
    const u = t, l = A(() => {
      let n = "";
      return u.safe && (n = "m-safe"), u.warning && (n = "m-warning"), u.danger && (n = "m-danger"), n;
    }), e = A(() => {
      let n = ["MBUTTON"];
      return u.bordered && n.push("m-bordered"), u.rounded && n.push("m-rounded"), u.noStyle && n.push("m-no-style"), n.join(" ");
    });
    return (n, a) => (d(), m("button", {
      class: k([h(e), h(l)].join(" "))
    }, [
      w(n.$slots, "default", {}, void 0, !0)
    ], 2));
  }
});
const F = /* @__PURE__ */ D(ve, [["__scopeId", "data-v-a6941771"]]), fe = {
  name: "MMenu"
}, me = /* @__PURE__ */ T({
  ...fe,
  props: {
    blurred: { type: Boolean }
  },
  setup(t, { expose: u }) {
    const l = c(!0);
    let e = c(0);
    const n = c(0), a = c(-1e7);
    let s = c({ offsetWidth: 0 });
    H(() => {
      e.value = s.value.offsetWidth, l.value = !1;
    });
    function p(_) {
      _.clientX + e.value >= window.innerWidth ? n.value = _.clientX - e.value : n.value = _.clientX, a.value = _.clientY, l.value = !0;
    }
    function v() {
      l.value = !1;
    }
    return u({
      show: p,
      hide: v
    }), (_, i) => l.value ? (d(), m("div", {
      key: 0,
      onClick: i[0] || (i[0] = X((o) => v(), ["self"])),
      class: k(`MMENU ${t.blurred ? "m-blurred" : ""}`)
    }, [
      E("ul", {
        ref_key: "menu",
        ref: s,
        style: W(`top: ${a.value}px; left: ${n.value}px`)
      }, [
        w(_.$slots, "default", {}, void 0, !0)
      ], 4)
    ], 2)) : I("", !0);
  }
});
const pe = /* @__PURE__ */ D(me, [["__scopeId", "data-v-442f1828"]]), _e = {
  name: "MMenuItem",
  mixins: [z]
}, he = /* @__PURE__ */ T({
  ..._e,
  props: {
    noHide: { type: Boolean }
  },
  setup(t) {
    const u = t;
    function l() {
      var e;
      u.noHide || ((e = J()) == null ? void 0 : e.parent).hide();
    }
    return (e, n) => (d(), m("li", {
      class: k(`MMENUITEM ${e.statusClass}`),
      ref: "li",
      onClick: l
    }, [
      w(e.$slots, "default", {}, void 0, !0)
    ], 2));
  }
});
const ge = /* @__PURE__ */ D(he, [["__scopeId", "data-v-0f4021aa"]]), ye = ["onClick"], Me = { open: "" }, $e = { key: 0 }, be = { key: 2 }, xe = {
  name: "MPopup",
  components: { MButton: F, MP: j }
}, ke = /* @__PURE__ */ T({
  ...xe,
  props: {
    required: { type: Boolean },
    blurred: { type: Boolean }
  },
  setup(t, { expose: u }) {
    const l = t;
    let e, n = c(void 0), a = c(void 0), s = c(!1);
    function p(i) {
      return i && (e = i), s.value = !0, new Promise((o, y) => {
        n.value = o, a.value = y;
      });
    }
    function v(i) {
      s.value = !1, n.value(i);
    }
    function _() {
      l.required || (s.value = !1);
    }
    return u({
      show: p,
      respond: v
    }), (i, o) => h(s) ? (d(), m("div", {
      key: 0,
      onClick: X(_, ["self"]),
      class: k(`MPOPPUP ${t.blurred ? "m-blurred" : ""}`)
    }, [
      E("dialog", Me, [
        h(e).title ? (d(), m("b", $e, $(h(e).title), 1)) : I("", !0),
        h(e).message ? (d(), O(j, { key: 1 }, {
          default: N(() => [
            C($(h(e).message), 1)
          ]),
          _: 1
        })) : I("", !0),
        w(i.$slots, "default", {}, void 0, !0),
        h(e).cancel || h(e).confirm ? (d(), m("section", be, [
          h(e).cancel ? (d(), O(F, {
            key: 0,
            bordered: "",
            onClick: o[0] || (o[0] = (y) => v(!1))
          }, {
            default: N(() => [
              C($(h(e).cancel), 1)
            ]),
            _: 1
          })) : I("", !0),
          h(e).confirm ? (d(), O(F, {
            key: 1,
            onClick: o[1] || (o[1] = (y) => v(!0))
          }, {
            default: N(() => [
              C($(h(e).confirm), 1)
            ]),
            _: 1
          })) : I("", !0)
        ])) : I("", !0)
      ])
    ], 10, ye)) : I("", !0);
  }
});
const Ie = /* @__PURE__ */ D(ke, [["__scopeId", "data-v-c940a2ad"]]), Te = ["open"], Be = ["onClick"], we = {
  name: "MDrop"
}, Ce = /* @__PURE__ */ T({
  ...we,
  props: {
    open: { type: Boolean },
    noStyle: { type: Boolean }
  },
  setup(t) {
    let u = c(!1), l = c(!1), e = c(null), n = c(null), a = c(null);
    function s() {
      u.value || !n.value.open ? _() : (l.value || n.value.open) && v();
    }
    function p() {
      l.value = !0;
      const o = "0px", y = `${a.value.offsetHeight}px`;
      e.value && e.value.cancel(), e.value = a.value.animate(
        {
          height: [o, y]
        },
        {
          duration: 400,
          easing: "ease-out"
        }
      ), e.value.onfinish = () => i(!0), e.value.oncancel = () => l.value = !1;
    }
    function v() {
      u.value = !0;
      const o = `${a.value.offsetHeight}px`, y = 0;
      e.value && e.value.cancel(), e.value = a.value.animate(
        {
          height: [o, y]
        },
        {
          duration: 400,
          easing: "ease-out"
        }
      ), e.value.onfinish = () => i(!1), e.value.oncancel = () => u.value = !1;
    }
    function _() {
      a.value.style.height = `${a.value.offsetHeight}px`, n.value.open = !0, window.requestAnimationFrame(() => p());
    }
    function i(o) {
      try {
        n.value.open = o, e.value = null, u.value = !1, l.value = !1, a.value.style.height = "";
      } catch {
        return;
      }
    }
    return (o, y) => (d(), m("details", {
      class: k(`MDROP${t.noStyle ? " m-no-style" : ""}`),
      ref_key: "detailsEl",
      ref: n,
      open: t.open
    }, [
      E("summary", {
        ref: "summary",
        onClick: X(s, ["prevent"])
      }, [
        w(o.$slots, "summary", {}, void 0, !0)
      ], 8, Be),
      E("section", {
        ref_key: "contentEl",
        ref: a
      }, [
        w(o.$slots, "default", {}, void 0, !0)
      ], 512)
    ], 10, Te));
  }
});
const Ee = /* @__PURE__ */ D(Ce, [["__scopeId", "data-v-32fa0497"]]), De = {
  name: "MSlider"
}, Ve = /* @__PURE__ */ T({
  ...De,
  props: {
    infinite: { type: Boolean },
    stacked: { type: Boolean },
    changeTime: null
  },
  setup(t, { expose: u }) {
    const l = t;
    let e = c(0), n = c(0), a = c(0), s = c(null);
    H(() => {
      e.value = s.value.childElementCount, y(0), l.changeTime && setInterval(v, l.changeTime);
    }), ee(() => {
      e.value = s.value.childElementCount;
    });
    function p(r) {
      return (r % e.value + e.value) % e.value;
    }
    function v() {
      n.value < e.value - 1 ? n.value++ : l.infinite && (n.value = 0);
    }
    function _() {
      n.value > 0 ? n.value-- : l.infinite && (n.value = e.value - 1);
    }
    function i(r) {
      n.value = p(r);
    }
    function o() {
      for (let r = 0; r < s.value.children.length; r++)
        s.value.children[r].classList.remove(
          "m-active",
          "m-next",
          "m-previous"
        );
    }
    function y(r) {
      o(), (l.infinite || r > 0) && s.value.children[p(r - 1)].classList.add(
        "m-previous"
      ), s.value.children[p(r)].classList.add("m-active"), (l.infinite || r < e.value - 1) && s.value.children[p(r + 1)].classList.add(
        "m-next"
      );
    }
    function M(r) {
      if (r.type === "pointerdown")
        a.value = Math.floor(r.clientX);
      else if (r.type === "pointermove" && a.value !== 0.1) {
        let f = Math.floor(r.clientX);
        a.value > f ? v() : f > a.value && _(), a.value = 0.1;
      }
    }
    return L(e, () => {
      y(0);
    }), L(n, (r) => {
      y(r);
    }), u({
      next: v,
      previous: _,
      goTo: i
    }), (r, f) => (d(), m("div", {
      ref_key: "sliderEl",
      ref: s,
      class: k(`MSLIDER ${t.stacked ? "m-stacked" : ""}`),
      style: W(`--child-count: ${h(e)}; --current-shown: ${h(n)}`),
      onPointerdown: f[0] || (f[0] = (b) => M(b)),
      onPointermove: f[1] || (f[1] = (b) => M(b))
    }, [
      w(r.$slots, "default")
    ], 38));
  }
});
const Se = { class: "MFORM" }, Ne = {
  name: "MForm"
}, He = /* @__PURE__ */ T({
  ...Ne,
  setup(t, { expose: u }) {
    const l = te([]);
    function e(s) {
      l.includes(s) || l.push(s);
    }
    function n(s) {
      l.splice(
        l.findIndex((p) => p == s),
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
    }), (s, p) => (d(), m("form", Se, [
      w(s.$slots, "default")
    ]));
  }
}), Ae = ["for"], je = ["dir", "type", "value", "id", "disabled"], Fe = {
  name: "MInput",
  inheritAttrs: !1
}, Oe = /* @__PURE__ */ T({
  ...Fe,
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
    disabled: { type: Boolean }
  },
  emits: ["update:modelValue"],
  setup(t, { expose: u, emit: l }) {
    const e = t;
    let n = c(!1), a = c(
      e.pattern ? e.pattern.test(e.modelValue) : !0
    ), s = c("");
    const p = /[\u0621-\u064A]/;
    let v = c({ value: "" });
    const _ = J(), i = A(() => {
      var b;
      let f = _ == null ? void 0 : _.parent;
      for (; f && ((b = f.vnode.el) == null ? void 0 : b.nodeName) != "FORM"; )
        f = f.parent;
      return f;
    });
    H(() => {
      var f;
      e.pattern && !a.value && ((f = i == null ? void 0 : i.value) == null || f.exposed.registerToInvalids(e.id)), e.autoDirection && o();
    });
    function o() {
      p.test(v.value.value) ? s.value = "rtl" : s.value = "ltr";
    }
    function y() {
      return a.value;
    }
    function M(f) {
      var b, S;
      !e.pattern || (e.pattern.test(f.toString()) ? (a.value = !0, (b = i == null ? void 0 : i.value) == null || b.exposed.removeFromInvalids(e.id)) : (a.value = !1, (S = i == null ? void 0 : i.value) == null || S.exposed.registerToInvalids(e.id)));
    }
    function r(f) {
      n.value = !0, l("update:modelValue", f.currentTarget.value), e.autoDirection && o(), M(f.currentTarget.value);
    }
    return u({
      isValid: y
    }), (f, b) => (d(), m("div", {
      class: k(`MINPUT${t.bordered ? " m-bordered" : ""}${t.disabled ? " m-disabled" : ""}`)
    }, [
      t.label ? (d(), m("label", {
        key: 0,
        for: t.id
      }, $(t.label), 9, Ae)) : I("", !0),
      E("div", null, [
        w(f.$slots, "start", {}, void 0, !0),
        E("input", K({
          dir: h(s),
          ref_key: "input",
          ref: v
        }, f.$attrs, {
          type: t.type,
          value: t.modelValue,
          id: t.id,
          disabled: t.disabled,
          onInput: b[0] || (b[0] = (S) => r(S))
        }), null, 16, je),
        w(f.$slots, "end", {}, void 0, !0)
      ]),
      E("div", null, [
        t.pattern && h(n) && (t.invalidMessage || t.validMessage) ? (d(), m("span", {
          key: 0,
          class: k(h(a) ? "m-valid" : "m-invalid")
        }, [
          h(a) ? (d(), m(V, { key: 0 }, [
            C($(t.validMessage), 1)
          ], 64)) : (d(), m(V, { key: 1 }, [
            C($(t.invalidMessage), 1)
          ], 64))
        ], 2)) : I("", !0)
      ])
    ], 2));
  }
});
const Pe = /* @__PURE__ */ D(Oe, [["__scopeId", "data-v-1d57e7fb"]]), Xe = {
  name: "MSection"
}, Je = /* @__PURE__ */ T({
  ...Xe,
  props: {
    forward: { type: Boolean }
  },
  setup(t) {
    const u = t;
    let l = c(null);
    return H(() => {
      new IntersectionObserver((n) => {
        n.forEach((a) => {
          a.isIntersecting ? a.target.setAttribute("data-m-visible", "true") : u.forward || a.target.setAttribute("data-m-visible", "false"), a.target.style.setProperty(
            "--m-visibility-ratio",
            `${a.intersectionRatio}%`
          );
        });
      }).observe(l.value);
    }), (e, n) => (d(), m("section", {
      ref_key: "sectionEl",
      ref: l,
      class: "MSECTION"
    }, [
      w(e.$slots, "default")
    ], 512));
  }
}), Le = ["for"], Re = ["dir", "id", "rows", "maxlength", "disabled"], Ue = { key: 1 }, qe = {
  name: "MText",
  inheritAttrs: !1
}, We = /* @__PURE__ */ T({
  ...qe,
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
    rows: null
  },
  emits: ["update:modelValue"],
  setup(t, { expose: u, emit: l }) {
    const e = t;
    let n = c(!1), a = c(!1), s = c("");
    const p = /[\u0621-\u064A]/;
    let v = c({ value: "" });
    const _ = J(), i = c([]), o = A(() => {
      var x;
      let g = _ == null ? void 0 : _.parent;
      for (; g && ((x = g.vnode.el) == null ? void 0 : x.nodeName) != "FORM"; )
        g = g.parent;
      return g;
    });
    H(() => {
      var g;
      a.value = e.pattern ? e.pattern.test(v.value.value) : !0, e.pattern && !a.value && ((g = o == null ? void 0 : o.value) == null || g.exposed.registerToInvalids(e.id)), e.autoDirection && y();
    });
    function y() {
      p.test(v.value.value) ? s.value = "rtl" : s.value = "ltr";
    }
    function M() {
      return a.value;
    }
    function r(g) {
      var x, B;
      !e.pattern || (e.pattern.test(g.toString()) ? (a.value = !0, (x = o == null ? void 0 : o.value) == null || x.exposed.removeFromInvalids(e.id)) : (a.value = !1, (B = o == null ? void 0 : o.value) == null || B.exposed.registerToInvalids(e.id)));
    }
    function f(g) {
      n.value = !0, e.tags || l("update:modelValue", g.currentTarget.value), e.autoDirection && y(), e.pattern && r(g.currentTarget.value.trim());
    }
    function b(g) {
      g.preventDefault(), !(e.maxlength && e.maxlength <= i.value.length) && (!a.value || (i.value.push(g.currentTarget.value), l("update:modelValue", i.value), g.currentTarget.value = "", n.value = !1));
    }
    const S = c("");
    function Y(g) {
      g.key == "Backspace" && S.value === "" && (i.value.pop(), l("update:modelValue", i.value)), S.value = g.currentTarget.value;
    }
    return u({
      isValid: M
    }), (g, x) => (d(), m("div", {
      class: k(`MTEXT${t.bordered ? " m-bordered" : ""}${t.tags ? " m-tags" : ""}${t.disabled ? " m-disabled" : ""}`)
    }, [
      t.label ? (d(), m("label", {
        key: 0,
        for: t.id
      }, $(t.label), 9, Le)) : I("", !0),
      E("div", {
        onClick: x[3] || (x[3] = (B) => g.$refs.input.focus())
      }, [
        P(U, { name: "fade" }, {
          default: N(() => [
            (d(!0), m(V, null, q(i.value, (B) => (d(), m("span", { key: B }, $(B), 1))), 128))
          ]),
          _: 1
        }),
        E("textarea", K({
          dir: h(s),
          ref_key: "input",
          ref: v
        }, g.$attrs, {
          id: t.id,
          onInput: x[0] || (x[0] = (B) => f(B)),
          onKeydown: x[1] || (x[1] = ne((B) => t.tags ? b(B) : null, ["enter"])),
          onKeyup: x[2] || (x[2] = (B) => t.tags ? Y(B) : null),
          rows: t.tags ? 1 : t.rows,
          maxlength: t.tags ? void 0 : t.maxlength,
          disabled: t.disabled
        }), null, 16, Re)
      ]),
      E("div", null, [
        t.pattern && h(n) && (t.invalidMessage || t.validMessage) ? (d(), m("span", {
          key: 0,
          class: k(h(a) ? "m-valid" : "m-invalid")
        }, [
          h(a) ? (d(), m(V, { key: 0 }, [
            C($(t.validMessage), 1)
          ], 64)) : (d(), m(V, { key: 1 }, [
            C($(t.invalidMessage), 1)
          ], 64))
        ], 2)) : I("", !0),
        t.maxlength ? (d(), m("span", Ue, [
          t.tags ? (d(), m(V, { key: 1 }, [
            C($(t.maxlength - i.value.length), 1)
          ], 64)) : (d(), m(V, { key: 0 }, [
            C($(t.maxlength - t.modelValue.length), 1)
          ], 64))
        ])) : I("", !0)
      ])
    ], 2));
  }
});
const Ke = /* @__PURE__ */ D(We, [["__scopeId", "data-v-56e3dc53"]]), R = {
  MNotes: de,
  MButton: F,
  MP: j,
  MMenu: pe,
  MMenuItem: ge,
  MPoppup: Ie,
  MDrop: Ee,
  MSlider: Ve,
  MForm: He,
  MInput: Pe,
  MSection: Je,
  MText: Ke
}, Ye = (t) => {
  for (let u in R)
    t.component(u, R[u]);
};
export {
  F as MButton,
  Ee as MDrop,
  He as MForm,
  Pe as MInput,
  pe as MMenu,
  ge as MMenuItem,
  de as MNotes,
  j as MP,
  Ie as MPoppup,
  Je as MSection,
  Ve as MSlider,
  Ye as install
};
