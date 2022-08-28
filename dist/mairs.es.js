var j = Object.defineProperty;
var F = (e, t, n) => t in e ? j(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n;
var x = (e, t, n) => (F(e, typeof t != "symbol" ? t + "" : t, n), n), D = (e, t, n) => {
  if (!t.has(e))
    throw TypeError("Cannot " + n);
};
var c = (e, t, n) => (D(e, t, "read from private field"), n ? n.call(e) : t.get(e)), C = (e, t, n) => {
  if (t.has(e))
    throw TypeError("Cannot add the same private member more than once");
  t instanceof WeakSet ? t.add(e) : t.set(e, n);
}, E = (e, t, n, r) => (D(e, t, "write to private field"), r ? r.call(e, n) : t.set(e, n), n);
import { openBlock as o, createElementBlock as l, normalizeClass as u, renderSlot as _, resolveComponent as L, withDirectives as R, createVNode as H, TransitionGroup as J, withCtx as k, Fragment as N, renderList as X, createElementVNode as p, createCommentVNode as f, createTextVNode as T, toDisplayString as $, vShow as q, withModifiers as I, normalizeStyle as B, createBlock as P, mergeProps as V, Transition as U, pushScopeId as W, popScopeId as Y } from "vue";
function A(e) {
  let [t, n, r, s = 1] = e.slice(e.indexOf("(") + 1, e.indexOf(")")).split(",").map((O) => parseInt(O));
  t /= 255, n /= 255, r /= 255;
  let i = Math.min(t, n, r), a = Math.max(t, n, r), d = a - i, m = 0, b = 0, v = 0;
  return d == 0 ? m = 0 : a == t ? m = (n - r) / d % 6 : a == n ? m = (r - t) / d + 2 : m = (t - n) / d + 4, m = Math.round(m * 60), m < 0 && (m += 360), v = (a + i) / 2, b = d == 0 ? 0 : d / (1 - Math.abs(2 * v - 1)), b = +(b * 100).toFixed(1), v = +(v * 100).toFixed(1), [m, b, v, s];
}
function z(e) {
  let t = 0, n = 0, r = 0, s = 1;
  switch (e.length) {
    case 4:
      t = "0x" + e[1] + e[1], n = "0x" + e[2] + e[2], r = "0x" + e[3] + e[3], s = "0xff";
      break;
    case 5:
      t = "0x" + e[1] + e[1], n = "0x" + e[2] + e[2], r = "0x" + e[3] + e[3], s = "0x" + e[4] + e[4];
      break;
    case 7:
      t = "0x" + e[1] + e[2], n = "0x" + e[3] + e[4], r = "0x" + e[5] + e[6], s = "0xff";
      break;
    case 9:
      t = "0x" + e[1] + e[2], n = "0x" + e[3] + e[4], r = "0x" + e[5] + e[6], s = "0x" + e[7] + e[8];
      break;
  }
  let [i, a, d, m] = A(`rgba(${t}, ${n}, ${r}, ${s})`);
  return s = (s / 255).toFixed(3), [i, a, d, s];
}
function G(e) {
  let [t, n, r, s = 1] = e.slice(e.indexOf("(") + 1, e.indexOf(")")).split(",").map((i) => parseInt(i));
  return [t, n, r, s];
}
function K(e) {
  return e.includes("rgb") ? A(e) : e.includes("#") ? z(e) : e.includes("hsl") ? G(e) : (console.warn(
    "your color should be hex, rgb or hsl. otherwise it's displayed as black"
  ), [0, 0, 0, 1]);
}
function Q(e) {
  let t = {
    main: [],
    accent: [],
    onAccent: [],
    text: []
  };
  for (let n in e)
    t[n] = K(e[n]);
  return t;
}
const M = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [r, s] of t)
    n[r] = s;
  return n;
}, Z = {
  name: "MP",
  props: {
    math: {
      type: Boolean,
      default: !1
    },
    autoDirection: {
      type: Boolean,
      default: !1
    },
    bordered: {
      type: Boolean,
      default: !1
    },
    dashed: {
      type: Boolean,
      default: !1
    }
  },
  data() {
    return {
      ar: /[\u0621-\u064A]/,
      dir: "ltr",
      rawContent: ""
    };
  },
  computed: {
    classes() {
      let e = ["MP"];
      return this.bordered && e.push("m-bordered"), this.dashed && e.push("m-bordered m-dashed"), e.join(" ");
    }
  },
  methods: {
    getRawContent() {
      return this.rawContent;
    },
    recordContent() {
      this.rawContent = this.$refs.mp.innerText;
    },
    switchToEditable() {
      this.$refs.mp.innerText = this.rawContent;
    },
    renderMathJax() {
      window.MathJax && (window.MathJax.Hub.Config({
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
        this.$refs.mp
      ]));
    },
    adjustDirection() {
      this.ar.test(this.$refs.mp.textContent.trim()[0]) ? this.dir = "rtl" : this.dir = "ltr";
    }
  },
  beforeMount() {
    if (this.math && !document.getElementById("MATHJAX")) {
      const e = document.createElement("script");
      e.id = "MATHJAX", e.src = "https://cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.2/MathJax.js?config=TeX-AMS_HTML", document.body.appendChild(e);
    }
  },
  mounted() {
    this.recordContent(), this.autoDirection && this.adjustDirection(), this.math && setTimeout(this.renderMathJax, 400);
  }
}, ee = ["dir"];
function te(e, t, n, r, s, i) {
  return o(), l("p", {
    class: u(i.classes),
    ref: "mp",
    dir: s.dir,
    onFocus: t[0] || (t[0] = (a) => i.switchToEditable()),
    onBlur: t[1] || (t[1] = (a) => n.math ? i.renderMathJax() : null),
    onInput: t[2] || (t[2] = (a) => {
      i.recordContent(), n.autoDirection && i.adjustDirection();
    })
  }, [
    _(e.$slots, "default", {}, void 0, !0)
  ], 42, ee);
}
const ne = /* @__PURE__ */ M(Z, [["render", te], ["__scopeId", "data-v-c38afcff"]]);
const se = {
  name: "MNotes",
  components: { MP: ne },
  data() {
    return {
      notes: []
    };
  },
  props: {
    animation: String,
    timeout: {
      type: [Number, String],
      default: 1e4
    }
  },
  methods: {
    add(e) {
      this.notes.push(e), setTimeout(() => {
        this.notes.shift();
      }, e.timeout || this.timeout);
    },
    goToLink(e) {
      e && this.$router.push(e);
    }
  }
}, ie = {
  class: /* @__PURE__ */ u("MNOTES")
}, re = ["onClick"], oe = ["href"];
function ae(e, t, n, r, s, i) {
  const a = L("MP");
  return R((o(), l("section", ie, [
    H(J, {
      name: n.animation ? n.animation : "slide-right"
    }, {
      default: k(() => [
        (o(!0), l(N, null, X(s.notes, (d) => (o(), l("div", {
          key: d.title,
          class: u(`MNOTE ${d.accent ? "accent" : ""}`),
          onClick: (m) => i.goToLink(d.to)
        }, [
          p("b", null, [
            d.iconStart ? (o(), l("i", {
              key: 0,
              class: u(d.iconStart)
            }, null, 2)) : f("", !0),
            T(" " + $(d.title), 1)
          ]),
          H(a, {
            autoDirection: "",
            math: ""
          }, {
            default: k(() => [
              T($(d.message), 1)
            ]),
            _: 2
          }, 1024),
          d.href ? (o(), l("a", {
            key: 0,
            href: d.href,
            ref_for: !0,
            ref: "a"
          }, null, 8, oe)) : f("", !0)
        ], 10, re))), 128))
      ]),
      _: 1
    }, 8, ["name"])
  ], 512)), [
    [q, s.notes.length]
  ]);
}
const Oe = /* @__PURE__ */ M(se, [["render", ae], ["__scopeId", "data-v-4ae14643"]]);
const le = {
  name: "MButton",
  props: {
    bordered: {
      type: Boolean,
      default: !1
    },
    circled: {
      type: Boolean,
      default: !1
    },
    iconStart: {
      type: String
    },
    iconEnd: {
      type: String
    },
    to: {
      type: String
    },
    href: {
      type: String
    }
  },
  computed: {
    classes() {
      let e = ["MBUTTON"];
      return this.bordered && e.push("m-bordered"), this.circled && e.push("m-circled"), e.join(" ");
    }
  },
  methods: {
    goToLink() {
      this.to && this.$router.push(this.to), this.href && this.$refs.a.click();
    }
  }
}, de = ["href"];
function ce(e, t, n, r, s, i) {
  return o(), l("button", {
    class: u(i.classes),
    onClick: t[0] || (t[0] = I((...a) => i.goToLink && i.goToLink(...a), ["self", "prevent"]))
  }, [
    n.iconStart ? (o(), l("i", {
      key: 0,
      class: u(n.iconStart)
    }, null, 2)) : f("", !0),
    _(e.$slots, "default", {}, void 0, !0),
    n.iconEnd ? (o(), l("i", {
      key: 1,
      class: u(n.iconEnd)
    }, null, 2)) : f("", !0),
    n.href ? (o(), l("a", {
      key: 2,
      href: n.href,
      ref: "a"
    }, "a", 8, de)) : f("", !0)
  ], 2);
}
const ue = /* @__PURE__ */ M(le, [["render", ce], ["__scopeId", "data-v-dd5a4a18"]]);
const he = {
  name: "MMenu",
  props: {
    blurred: {
      type: Boolean,
      default: !1
    }
  },
  data() {
    return {
      shown: !0,
      menuWidth: 0,
      clientX: 0,
      clientY: -1e7
    };
  },
  mounted() {
    this.menuWidth = this.$refs.menu.offsetWidth, this.shown = !1;
  },
  methods: {
    show(e) {
      e.clientX + this.menuWidth >= window.innerWidth ? this.clientX = e.clientX - this.menuWidth : this.clientX = e.clientX, this.clientY = e.clientY, this.shown = !0;
    },
    hide() {
      this.shown = !1;
    }
  }
};
function fe(e, t, n, r, s, i) {
  return s.shown ? (o(), l("div", {
    key: 0,
    onClick: t[0] || (t[0] = I((a) => i.hide(), ["self"])),
    class: u(`MMENU ${n.blurred ? "m-blurred" : ""}`)
  }, [
    p("ul", {
      ref: "menu",
      style: B(`top: ${s.clientY}px; left: ${s.clientX}px`)
    }, [
      _(e.$slots, "default", {}, void 0, !0)
    ], 4)
  ], 2)) : f("", !0);
}
const je = /* @__PURE__ */ M(he, [["render", fe], ["__scopeId", "data-v-668e5397"]]);
const me = {
  name: "MMenuItem",
  props: {
    iconStart: String,
    iconEnd: String,
    noHide: {
      type: Boolean,
      default: !1
    }
  },
  methods: {
    hideOnClickMethod() {
      this.noHide || this.$parent.hide();
    }
  }
};
function pe(e, t, n, r, s, i) {
  return o(), l("li", {
    class: u("MMENUITEM"),
    ref: "li",
    onClick: t[0] || (t[0] = (...a) => i.hideOnClickMethod && i.hideOnClickMethod(...a))
  }, [
    n.iconStart ? (o(), l("i", {
      key: 0,
      class: u(n.iconStart)
    }, null, 2)) : f("", !0),
    _(e.$slots, "default", {}, void 0, !0),
    n.iconEnd ? (o(), l("i", {
      key: 1,
      class: u(n.iconEnd)
    }, null, 2)) : f("", !0)
  ], 512);
}
const Fe = /* @__PURE__ */ M(me, [["render", pe], ["__scopeId", "data-v-a7dba239"]]);
const _e = {
  name: "popup",
  components: { MButton: ue },
  props: {
    notRequired: {
      type: Boolean,
      default: !1
    },
    blurred: {
      type: Boolean,
      default: !1
    }
  },
  data() {
    return {
      resolvePromise: void 0,
      rejectPromise: void 0,
      isOpen: !1,
      title: "",
      message: "",
      confirm: "",
      cancel: ""
    };
  },
  methods: {
    show({ title: e, message: t, confirm: n, cancel: r }) {
      return this.title = e || "", this.message = t || "", this.confirm = n || "", this.cancel = r || "", this.isOpen = !0, new Promise((s, i) => {
        this.resolvePromise = s, this.rejectPromise = i;
      });
    },
    respond(e) {
      this.isOpen = !1, this.resolvePromise(e);
    },
    closeIfNotRequired() {
      this.notRequired && (this.isOpen = !1);
    }
  }
}, ye = { open: "" };
function Me(e, t, n, r, s, i) {
  const a = L("m-button");
  return s.isOpen ? (o(), l("div", {
    key: 0,
    onClick: t[2] || (t[2] = I((...d) => i.closeIfNotRequired && i.closeIfNotRequired(...d), ["self"])),
    class: u(`MPOPPUP ${n.blurred ? "m-blurred" : ""}`)
  }, [
    p("dialog", ye, [
      p("h3", null, $(s.title), 1),
      p("p", null, $(s.message), 1),
      _(e.$slots, "default", {}, void 0, !0),
      p("section", null, [
        s.cancel ? (o(), P(a, {
          key: 0,
          bordered: "",
          onClick: t[0] || (t[0] = (d) => i.respond(!1))
        }, {
          default: k(() => [
            T($(s.cancel), 1)
          ]),
          _: 1
        })) : f("", !0),
        s.confirm ? (o(), P(a, {
          key: 1,
          onClick: t[1] || (t[1] = (d) => i.respond(!0))
        }, {
          default: k(() => [
            T($(s.confirm), 1)
          ]),
          _: 1
        })) : f("", !0)
      ])
    ])
  ], 2)) : f("", !0);
}
const Re = /* @__PURE__ */ M(_e, [["render", Me], ["__scopeId", "data-v-042d5d5b"]]);
const ge = {
  name: "MDrop",
  props: {
    summary: {
      type: String
    },
    open: {
      type: Boolean,
      default: !1
    },
    styled: {
      type: Boolean,
      default: !1
    }
  },
  data() {
    return {
      isClosing: !1,
      isExpanding: !1,
      animation: null
    };
  },
  methods: {
    handleClick() {
      this.isClosing || !this.$refs.details.open ? this.openContent() : (this.isExpanding || this.$refs.details.open) && this.shrink();
    },
    shrink() {
      this.isClosing = !0;
      const e = `${this.$refs.content.offsetHeight}px`, t = 0;
      this.animation && this.animation.cancel(), this.animation = this.$refs.content.animate(
        {
          height: [e, t]
        },
        {
          duration: 400,
          easing: "ease-out"
        }
      ), this.animation.onfinish = () => this.onAnimationFinish(!1), this.animation.oncancel = () => this.isClosing = !1;
    },
    openContent() {
      this.$refs.content.style.height = `${this.$refs.content.offsetHeight}px`, this.$refs.details.open = !0, window.requestAnimationFrame(() => this.expand());
    },
    expand() {
      this.isExpanding = !0;
      const e = "0px", t = `${this.$refs.content.offsetHeight}px`;
      this.animation && this.animation.cancel(), this.animation = this.$refs.content.animate(
        {
          height: [e, t]
        },
        {
          duration: 400,
          easing: "ease-out"
        }
      ), this.animation.onfinish = () => this.onAnimationFinish(!0), this.animation.oncancel = () => this.isExpanding = !1;
    },
    onAnimationFinish(e) {
      try {
        this.$refs.details.open = e, this.animation = null, this.isClosing = !1, this.isExpanding = !1, this.$refs.content.style.height = "";
      } catch {
        return;
      }
    }
  }
}, $e = ["open"], ve = { key: 0 }, Se = { ref: "content" };
function ke(e, t, n, r, s, i) {
  return o(), l("details", {
    class: u(`MDROP ${n.styled ? "m-styled" : ""}`),
    ref: "details",
    open: n.open
  }, [
    p("summary", {
      ref: "summary",
      onClick: t[0] || (t[0] = I((...a) => i.handleClick && i.handleClick(...a), ["prevent"]))
    }, [
      n.summary ? (o(), l("span", ve, $(n.summary), 1)) : _(e.$slots, "summary", { key: 1 }, void 0, !0)
    ], 512),
    p("section", Se, [
      _(e.$slots, "default", {}, void 0, !0)
    ], 512)
  ], 10, $e);
}
const Je = /* @__PURE__ */ M(ge, [["render", ke], ["__scopeId", "data-v-2a43c111"]]);
const we = {
  name: "MSlider",
  props: { ratio: String, pop: Boolean, infinite: Boolean, changeTime: String },
  data() {
    return {
      currentShown: 0,
      child_count: 0
    };
  },
  watch: {
    currentShown(e) {
      var t;
      (t = document.querySelector(".MSLIDER .current-shown")) == null || t.classList.remove("current-shown"), this.$refs.track.children[e].classList.add("current-shown");
    }
  },
  mounted() {
    var e;
    (e = this.$refs.track.children[0]) == null || e.classList.add("current-shown"), this.child_count = this.$refs.track.childElementCount, this.changeTime && setInterval(this.next, this.changeTime);
  },
  updated() {
    var e;
    (e = this.$refs.track.children[0]) == null || e.classList.add("current-shown"), this.child_count = this.$refs.track.childElementCount;
  },
  methods: {
    next() {
      this.currentShown < this.child_count - 1 ? this.currentShown++ : this.infinite && (this.currentShown = 0);
    },
    previous() {
      this.currentShown > 0 ? this.currentShown-- : this.infinite && (this.currentShown = this.child_count - 1);
    }
  }
};
function Ie(e, t, n, r, s, i) {
  return o(), l("div", {
    class: u(`MSLIDER ${n.pop ? "pop" : ""}`),
    style: B(`--ratio: ${n.ratio}; --child-count: ${s.child_count}`)
  }, [
    p("div", {
      ref: "track",
      style: B(`--current-shown: ${s.currentShown}`)
    }, [
      _(e.$slots, "default", {}, void 0, !0)
    ], 4)
  ], 6);
}
const Xe = /* @__PURE__ */ M(we, [["render", Ie], ["__scopeId", "data-v-60e80c60"]]), be = {
  name: "MForm",
  data() {
    return {
      invalids_IDs: []
    };
  },
  methods: {
    registerToInvalids(e) {
      this.invalids_IDs.includes(e) || this.invalids_IDs.push(e);
    },
    removeFromInvalids(e) {
      this.invalids_IDs.splice(
        this.invalids_IDs.findIndex((t) => t == e),
        1
      );
    },
    checkValidation() {
      return this.invalids_IDs.length !== 0 && document.getElementById(this.invalids_IDs[0]).scrollIntoView(), this.invalids_IDs.length === 0;
    }
  }
};
function xe(e, t, n, r, s, i) {
  return o(), l("form", {
    class: "MFORM",
    onSubmit: t[0] || (t[0] = I(() => {
    }, ["prevent"]))
  }, [
    _(e.$slots, "default")
  ], 32);
}
const qe = /* @__PURE__ */ M(be, [["render", xe]]);
const Ce = {
  name: "MINPUT",
  data() {
    return {
      firstInput: !1,
      patternMatch: this.pattern ? this.pattern.test(this.modelValue) : !0,
      ar: /[\u0621-\u064A]/,
      dir: "ltr"
    };
  },
  inheritAttrs: !1,
  props: {
    modelValue: String,
    id: {
      type: String,
      required: !0
    },
    pattern: RegExp,
    invalidMessage: String,
    validMessage: String,
    autoDirection: {
      type: Boolean,
      default: !1
    },
    type: {
      type: String,
      default: "text",
      validator: (e) => ["text", "email", "password", "number", "date"].includes(e)
    }
  },
  watch: {
    modelValue(e) {
      var t, n;
      !this.pattern || (this.pattern.test(e) ? (this.patternMatch = !0, (t = this.formParent) == null || t.removeFromInvalids(this.id)) : (this.patternMatch = !1, (n = this.formParent) == null || n.registerToInvalids(this.id)));
    }
  },
  computed: {
    formParent() {
      let e = this.$parent;
      for (; e && e.$el.nodeName != "FORM"; )
        e = e.$parent;
      return e;
    }
  },
  mounted() {
    var e;
    this.pattern && !this.patternMatch && ((e = this.formParent) == null || e.registerToInvalids(this.id));
  },
  methods: {
    adjustDirection() {
      this.ar.test(this.$refs.input.value) ? this.dir = "rtl" : this.dir = "ltr";
    },
    isValid() {
      return this.patternMatch;
    }
  }
}, Te = (e) => (W("data-v-fdf58daa"), e = e(), Y(), e), Ee = { class: "MINPUT" }, He = ["dir", "id", "type", "value"], Be = /* @__PURE__ */ Te(() => /* @__PURE__ */ p("div", null, null, -1)), De = {
  key: 0,
  class: "m-invalid"
}, Pe = {
  key: 1,
  class: "m-valid"
};
function Le(e, t, n, r, s, i) {
  return o(), l("div", Ee, [
    _(e.$slots, "start", {}, void 0, !0),
    p("input", V({
      dir: s.dir,
      ref: "input"
    }, e.$attrs, {
      id: n.id,
      type: n.type,
      value: n.modelValue,
      onInput: t[0] || (t[0] = (a) => {
        e.$emit("update:modelValue", a.currentTarget.value), n.autoDirection && n.type == "text" && i.adjustDirection(), s.firstInput = !0;
      })
    }), null, 16, He),
    Be,
    _(e.$slots, "end", {}, void 0, !0),
    H(U, { name: "fade" }, {
      default: k(() => [
        n.pattern && s.firstInput ? (o(), l(N, { key: 0 }, [
          !s.patternMatch && n.invalidMessage ? (o(), l("span", De, $(n.invalidMessage), 1)) : s.patternMatch && n.validMessage ? (o(), l("span", Pe, $(n.validMessage), 1)) : f("", !0)
        ], 64)) : f("", !0)
      ]),
      _: 1
    })
  ]);
}
const Ve = /* @__PURE__ */ M(Ce, [["render", Le], ["__scopeId", "data-v-fdf58daa"]]);
var g, w, h;
const y = class {
  constructor(t) {
    x(this, "name");
    x(this, "radius");
    x(this, "fonts");
    C(this, h, { main: [], accent: [], onAccent: [], text: [] });
    if (this.name = t.name, this.radius = t.radius || 0, this.fonts = t.fonts || { en: "", ar: "" }, E(this, h, Q(t.colors)), c(y, w)[t.name] = this, !document.getElementById("M_THEME")) {
      let r = document.createElement("style");
      r.id = "M_THEME", document.body.appendChild(r);
    }
    E(y, g, document.getElementById("M_THEME"));
  }
  static apply(t) {
    c(y, w)[t].apply();
  }
  apply() {
    c(y, g).innerHTML = "", document.body.className = document.body.className.split(" ").filter((t) => !t.includes("m-theme")).join(" "), document.body.classList.add(`m-theme-${this.name}`), c(y, g).innerHTML += `.m-theme-${this.name}{ --m-ui-radius: ${this.radius}px }`, c(y, g).innerHTML += `.m-theme-${this.name}{ --m-font-en: ${this.fonts.en} }`, this.fonts.ar && (c(y, g).innerHTML += `.m-theme-${this.name}{ --m-font-ar: ${this.fonts.ar} }`);
    for (let t in c(this, h))
      c(y, g).innerHTML += `.m-theme-${this.name}{
         --m-color-${t}-h: ${c(this, h)[t][0]};
         --m-color-${t}-s: ${c(this, h)[t][1]}%;
         --m-color-${t}-l: ${c(this, h)[t][2]}%;
         --m-color-${t}-a: ${c(this, h)[t][3]};
         --m-color-${t}: hsla(${c(this, h)[t][0]},
          ${c(this, h)[t][1]}%,
          ${c(this, h)[t][2]}%,
          ${c(this, h)[t][3]});
       }`;
  }
};
let S = y;
g = new WeakMap(), w = new WeakMap(), h = new WeakMap(), C(S, g, void 0), C(S, w, {});
const Ue = (e) => {
  e.config.globalProperties.$MTheme = S;
};
export {
  ue as MButton,
  Je as MDrop,
  qe as MForm,
  Ve as MInput,
  je as MMenu,
  Fe as MMenuItem,
  Oe as MNotes,
  ne as MP,
  Re as MPoppup,
  Xe as MSlider,
  S as MTheme,
  Ue as install
};
