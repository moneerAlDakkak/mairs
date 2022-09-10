var j = Object.defineProperty;
var F = (e, t, n) => t in e ? j(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n;
var b = (e, t, n) => (F(e, typeof t != "symbol" ? t + "" : t, n), n), D = (e, t, n) => {
  if (!t.has(e))
    throw TypeError("Cannot " + n);
};
var c = (e, t, n) => (D(e, t, "read from private field"), n ? n.call(e) : t.get(e)), x = (e, t, n) => {
  if (t.has(e))
    throw TypeError("Cannot add the same private member more than once");
  t instanceof WeakSet ? t.add(e) : t.set(e, n);
}, T = (e, t, n, r) => (D(e, t, "write to private field"), r ? r.call(e, n) : t.set(e, n), n);
import { openBlock as o, createElementBlock as l, normalizeClass as u, renderSlot as _, resolveComponent as L, withDirectives as R, createVNode as H, TransitionGroup as J, withCtx as w, Fragment as N, renderList as X, createElementVNode as p, createCommentVNode as f, createTextVNode as C, toDisplayString as $, vShow as q, withModifiers as E, normalizeStyle as B, createBlock as P, mergeProps as V, Transition as U, pushScopeId as W, popScopeId as Y } from "vue";
function A(e) {
  let [t, n, r, s = 1] = e.slice(e.indexOf("(") + 1, e.indexOf(")")).split(",").map((O) => parseInt(O));
  t /= 255, n /= 255, r /= 255;
  let i = Math.min(t, n, r), d = Math.max(t, n, r), a = d - i, m = 0, I = 0, v = 0;
  return a == 0 ? m = 0 : d == t ? m = (n - r) / a % 6 : d == n ? m = (r - t) / a + 2 : m = (t - n) / a + 4, m = Math.round(m * 60), m < 0 && (m += 360), v = (d + i) / 2, I = a == 0 ? 0 : a / (1 - Math.abs(2 * v - 1)), I = +(I * 100).toFixed(1), v = +(v * 100).toFixed(1), [m, I, v, s];
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
  let [i, d, a, m] = A(`rgba(${t}, ${n}, ${r}, ${s})`);
  return s = (s / 255).toFixed(3), [i, d, a, s];
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
    onFocus: t[0] || (t[0] = (d) => i.switchToEditable()),
    onBlur: t[1] || (t[1] = (d) => n.math ? i.renderMathJax() : null),
    onInput: t[2] || (t[2] = (d) => {
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
  const d = L("MP");
  return R((o(), l("section", ie, [
    H(J, {
      name: n.animation ? n.animation : "slide-right"
    }, {
      default: w(() => [
        (o(!0), l(N, null, X(s.notes, (a) => (o(), l("div", {
          key: a.title,
          class: u(`MNOTE ${a.accent ? "accent" : ""}`),
          onClick: (m) => i.goToLink(a.to)
        }, [
          p("b", null, [
            a.iconStart ? (o(), l("i", {
              key: 0,
              class: u(a.iconStart)
            }, null, 2)) : f("", !0),
            C(" " + $(a.title), 1)
          ]),
          H(d, {
            autoDirection: "",
            math: ""
          }, {
            default: w(() => [
              C($(a.message), 1)
            ]),
            _: 2
          }, 1024),
          a.href ? (o(), l("a", {
            key: 0,
            href: a.href,
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
const Ae = /* @__PURE__ */ M(se, [["render", ae], ["__scopeId", "data-v-4ae14643"]]);
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
      this.to && this.$router.push(this.to);
    }
  }
};
function de(e, t, n, r, s, i) {
  return o(), l("button", {
    class: u(i.classes)
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
  ], 2);
}
const ce = /* @__PURE__ */ M(le, [["render", de], ["__scopeId", "data-v-b0ae606a"]]);
const ue = {
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
function he(e, t, n, r, s, i) {
  return s.shown ? (o(), l("div", {
    key: 0,
    onClick: t[0] || (t[0] = E((d) => i.hide(), ["self"])),
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
const Oe = /* @__PURE__ */ M(ue, [["render", he], ["__scopeId", "data-v-668e5397"]]);
const fe = {
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
function me(e, t, n, r, s, i) {
  return o(), l("li", {
    class: u("MMENUITEM"),
    ref: "li",
    onClick: t[0] || (t[0] = (...d) => i.hideOnClickMethod && i.hideOnClickMethod(...d))
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
const je = /* @__PURE__ */ M(fe, [["render", me], ["__scopeId", "data-v-a7dba239"]]);
const pe = {
  name: "popup",
  components: { MButton: ce },
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
}, _e = { open: "" };
function ye(e, t, n, r, s, i) {
  const d = L("m-button");
  return s.isOpen ? (o(), l("div", {
    key: 0,
    onClick: t[2] || (t[2] = E((...a) => i.closeIfNotRequired && i.closeIfNotRequired(...a), ["self"])),
    class: u(`MPOPPUP ${n.blurred ? "m-blurred" : ""}`)
  }, [
    p("dialog", _e, [
      p("h3", null, $(s.title), 1),
      p("p", null, $(s.message), 1),
      _(e.$slots, "default", {}, void 0, !0),
      p("section", null, [
        s.cancel ? (o(), P(d, {
          key: 0,
          bordered: "",
          onClick: t[0] || (t[0] = (a) => i.respond(!1))
        }, {
          default: w(() => [
            C($(s.cancel), 1)
          ]),
          _: 1
        })) : f("", !0),
        s.confirm ? (o(), P(d, {
          key: 1,
          onClick: t[1] || (t[1] = (a) => i.respond(!0))
        }, {
          default: w(() => [
            C($(s.confirm), 1)
          ]),
          _: 1
        })) : f("", !0)
      ])
    ])
  ], 2)) : f("", !0);
}
const Fe = /* @__PURE__ */ M(pe, [["render", ye], ["__scopeId", "data-v-042d5d5b"]]);
const Me = {
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
}, ge = ["open"], $e = { key: 0 }, ve = { ref: "content" };
function Se(e, t, n, r, s, i) {
  return o(), l("details", {
    class: u(`MDROP ${n.styled ? "m-styled" : ""}`),
    ref: "details",
    open: n.open
  }, [
    p("summary", {
      ref: "summary",
      onClick: t[0] || (t[0] = E((...d) => i.handleClick && i.handleClick(...d), ["prevent"]))
    }, [
      n.summary ? (o(), l("span", $e, $(n.summary), 1)) : _(e.$slots, "summary", { key: 1 }, void 0, !0)
    ], 512),
    p("section", ve, [
      _(e.$slots, "default", {}, void 0, !0)
    ], 512)
  ], 10, ge);
}
const Re = /* @__PURE__ */ M(Me, [["render", Se], ["__scopeId", "data-v-2a43c111"]]);
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
function ke(e, t, n, r, s, i) {
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
const Je = /* @__PURE__ */ M(we, [["render", ke], ["__scopeId", "data-v-60e80c60"]]), Ie = {
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
function be(e, t, n, r, s, i) {
  return o(), l("form", {
    class: "MFORM",
    onSubmit: t[0] || (t[0] = E(() => {
    }, ["prevent"]))
  }, [
    _(e.$slots, "default")
  ], 32);
}
const Xe = /* @__PURE__ */ M(Ie, [["render", be]]);
const xe = {
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
}, Ce = (e) => (W("data-v-fdf58daa"), e = e(), Y(), e), Ee = { class: "MINPUT" }, Te = ["dir", "id", "type", "value"], He = /* @__PURE__ */ Ce(() => /* @__PURE__ */ p("div", null, null, -1)), Be = {
  key: 0,
  class: "m-invalid"
}, De = {
  key: 1,
  class: "m-valid"
};
function Pe(e, t, n, r, s, i) {
  return o(), l("div", Ee, [
    _(e.$slots, "start", {}, void 0, !0),
    p("input", V({
      dir: s.dir,
      ref: "input"
    }, e.$attrs, {
      id: n.id,
      type: n.type,
      value: n.modelValue,
      onInput: t[0] || (t[0] = (d) => {
        e.$emit("update:modelValue", d.currentTarget.value), n.autoDirection && n.type == "text" && i.adjustDirection(), s.firstInput = !0;
      })
    }), null, 16, Te),
    He,
    _(e.$slots, "end", {}, void 0, !0),
    H(U, { name: "fade" }, {
      default: w(() => [
        n.pattern && s.firstInput ? (o(), l(N, { key: 0 }, [
          !s.patternMatch && n.invalidMessage ? (o(), l("span", Be, $(n.invalidMessage), 1)) : s.patternMatch && n.validMessage ? (o(), l("span", De, $(n.validMessage), 1)) : f("", !0)
        ], 64)) : f("", !0)
      ]),
      _: 1
    })
  ]);
}
const qe = /* @__PURE__ */ M(xe, [["render", Pe], ["__scopeId", "data-v-fdf58daa"]]);
var g, k, h;
const y = class {
  constructor(t) {
    b(this, "name");
    b(this, "radius");
    b(this, "fonts");
    x(this, h, { main: [], accent: [], onAccent: [], text: [] });
    if (this.name = t.name, this.radius = t.radius || 0, this.fonts = t.fonts || { en: "", ar: "" }, T(this, h, Q(t.colors)), c(y, k)[t.name] = this, !document.getElementById("M_THEME")) {
      let r = document.createElement("style");
      r.id = "M_THEME", document.body.appendChild(r);
    }
    T(y, g, document.getElementById("M_THEME"));
  }
  static apply(t) {
    c(y, k)[t].apply();
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
g = new WeakMap(), k = new WeakMap(), h = new WeakMap(), x(S, g, void 0), x(S, k, {});
const Ve = (e) => {
  e.config.globalProperties.$MTheme = S;
};
export {
  ce as MButton,
  Re as MDrop,
  Xe as MForm,
  qe as MInput,
  Oe as MMenu,
  je as MMenuItem,
  Ae as MNotes,
  ne as MP,
  Fe as MPoppup,
  Je as MSlider,
  S as MTheme,
  Ve as install
};
