var j = Object.defineProperty;
var F = (e, t, n) => t in e ? j(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n;
var C = (e, t, n) => (F(e, typeof t != "symbol" ? t + "" : t, n), n), B = (e, t, n) => {
  if (!t.has(e))
    throw TypeError("Cannot " + n);
};
var c = (e, t, n) => (B(e, t, "read from private field"), n ? n.call(e) : t.get(e)), T = (e, t, n) => {
  if (t.has(e))
    throw TypeError("Cannot add the same private member more than once");
  t instanceof WeakSet ? t.add(e) : t.set(e, n);
}, E = (e, t, n, r) => (B(e, t, "write to private field"), r ? r.call(e, n) : t.set(e, n), n);
import { openBlock as o, createElementBlock as l, normalizeClass as u, renderSlot as m, resolveComponent as L, withDirectives as R, createVNode as H, TransitionGroup as J, withCtx as w, Fragment as A, renderList as X, createElementVNode as _, createCommentVNode as h, createTextVNode as S, toDisplayString as g, vShow as q, withModifiers as x, normalizeStyle as P, createBlock as D, mergeProps as W, Transition as V, pushScopeId as U, popScopeId as z } from "vue";
function N(e) {
  let [t, n, r, s = 1] = e.slice(e.indexOf("(") + 1, e.indexOf(")")).split(",").map((O) => parseInt(O));
  t /= 255, n /= 255, r /= 255;
  let i = Math.min(t, n, r), a = Math.max(t, n, r), d = a - i, p = 0, I = 0, v = 0;
  return d == 0 ? p = 0 : a == t ? p = (n - r) / d % 6 : a == n ? p = (r - t) / d + 2 : p = (t - n) / d + 4, p = Math.round(p * 60), p < 0 && (p += 360), v = (a + i) / 2, I = d == 0 ? 0 : d / (1 - Math.abs(2 * v - 1)), I = +(I * 100).toFixed(1), v = +(v * 100).toFixed(1), [p, I, v, s];
}
function Y(e) {
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
  let [i, a, d, p] = N(`rgba(${t}, ${n}, ${r}, ${s})`);
  return s = (s / 255).toFixed(3), [i, a, d, s];
}
function G(e) {
  let [t, n, r, s = 1] = e.slice(e.indexOf("(") + 1, e.indexOf(")")).split(",").map((i) => parseInt(i));
  return [t, n, r, s];
}
function K(e) {
  return e.includes("rgb") ? N(e) : e.includes("#") ? Y(e) : e.includes("hsl") ? G(e) : (console.warn(
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
const y = (e, t) => {
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
    m(e.$slots, "default", {}, void 0, !0)
  ], 42, ee);
}
const ne = /* @__PURE__ */ y(Z, [["render", te], ["__scopeId", "data-v-c38afcff"]]);
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
      default: w(() => [
        (o(!0), l(A, null, X(s.notes, (d) => (o(), l("div", {
          key: d.title,
          class: u(`MNOTE ${d.accent ? "accent" : ""}`),
          onClick: (p) => i.goToLink(d.to)
        }, [
          _("b", null, [
            d.iconStart ? (o(), l("i", {
              key: 0,
              class: u(d.iconStart)
            }, null, 2)) : h("", !0),
            S(" " + g(d.title), 1)
          ]),
          H(a, {
            autoDirection: "",
            math: ""
          }, {
            default: w(() => [
              S(g(d.message), 1)
            ]),
            _: 2
          }, 1024),
          d.href ? (o(), l("a", {
            key: 0,
            href: d.href,
            ref_for: !0,
            ref: "a"
          }, null, 8, oe)) : h("", !0)
        ], 10, re))), 128))
      ]),
      _: 1
    }, 8, ["name"])
  ], 512)), [
    [q, s.notes.length]
  ]);
}
const Re = /* @__PURE__ */ y(se, [["render", ae], ["__scopeId", "data-v-4ae14643"]]);
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
    onClick: t[0] || (t[0] = x((...a) => i.goToLink && i.goToLink(...a), ["self", "prevent"]))
  }, [
    n.iconStart ? (o(), l("i", {
      key: 0,
      class: u(n.iconStart)
    }, null, 2)) : h("", !0),
    m(e.$slots, "default", {}, void 0, !0),
    n.iconEnd ? (o(), l("i", {
      key: 1,
      class: u(n.iconEnd)
    }, null, 2)) : h("", !0),
    n.href ? (o(), l("a", {
      key: 2,
      href: n.href,
      ref: "a"
    }, "a", 8, de)) : h("", !0)
  ], 2);
}
const ue = /* @__PURE__ */ y(le, [["render", ce], ["__scopeId", "data-v-dd5a4a18"]]);
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
    onClick: t[0] || (t[0] = x((a) => i.hide(), ["self"])),
    class: u(`MMENU ${n.blurred ? "m-blurred" : ""}`)
  }, [
    _("ul", {
      ref: "menu",
      style: P(`top: ${s.clientY}px; left: ${s.clientX}px`)
    }, [
      m(e.$slots, "default", {}, void 0, !0)
    ], 4)
  ], 2)) : h("", !0);
}
const Je = /* @__PURE__ */ y(he, [["render", fe], ["__scopeId", "data-v-668e5397"]]);
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
    }, null, 2)) : h("", !0),
    m(e.$slots, "default", {}, void 0, !0),
    n.iconEnd ? (o(), l("i", {
      key: 1,
      class: u(n.iconEnd)
    }, null, 2)) : h("", !0)
  ], 512);
}
const Xe = /* @__PURE__ */ y(me, [["render", pe], ["__scopeId", "data-v-a7dba239"]]);
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
}, ge = { open: "" };
function ye(e, t, n, r, s, i) {
  const a = L("m-button");
  return s.isOpen ? (o(), l("div", {
    key: 0,
    onClick: t[2] || (t[2] = x((...d) => i.closeIfNotRequired && i.closeIfNotRequired(...d), ["self"])),
    class: u(`MPOPPUP ${n.blurred ? "m-blurred" : ""}`)
  }, [
    _("dialog", ge, [
      _("h3", null, g(s.title), 1),
      _("p", null, g(s.message), 1),
      m(e.$slots, "default", {}, void 0, !0),
      _("section", null, [
        s.cancel ? (o(), D(a, {
          key: 0,
          bordered: "",
          onClick: t[0] || (t[0] = (d) => i.respond(!1))
        }, {
          default: w(() => [
            S(g(s.cancel), 1)
          ]),
          _: 1
        })) : h("", !0),
        s.confirm ? (o(), D(a, {
          key: 1,
          onClick: t[1] || (t[1] = (d) => i.respond(!0))
        }, {
          default: w(() => [
            S(g(s.confirm), 1)
          ]),
          _: 1
        })) : h("", !0)
      ])
    ])
  ], 2)) : h("", !0);
}
const qe = /* @__PURE__ */ y(_e, [["render", ye], ["__scopeId", "data-v-042d5d5b"]]);
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
}, $e = ["open"], ve = { key: 0 }, ke = { ref: "content" };
function we(e, t, n, r, s, i) {
  return o(), l("details", {
    class: u(`MDROP ${n.styled ? "m-styled" : ""}`),
    ref: "details",
    open: n.open
  }, [
    _("summary", {
      ref: "summary",
      onClick: t[0] || (t[0] = x((...a) => i.handleClick && i.handleClick(...a), ["prevent"]))
    }, [
      n.summary ? (o(), l("span", ve, g(n.summary), 1)) : m(e.$slots, "summary", { key: 1 }, void 0, !0)
    ], 512),
    _("section", ke, [
      m(e.$slots, "default", {}, void 0, !0)
    ], 512)
  ], 10, $e);
}
const We = /* @__PURE__ */ y(Me, [["render", we], ["__scopeId", "data-v-2a43c111"]]);
const Se = {
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
function be(e, t, n, r, s, i) {
  return o(), l("div", {
    class: u(`MSLIDER ${n.pop ? "pop" : ""}`),
    style: P(`--ratio: ${n.ratio}; --child-count: ${s.child_count}`)
  }, [
    _("div", {
      ref: "track",
      style: P(`--current-shown: ${s.currentShown}`)
    }, [
      m(e.$slots, "default", {}, void 0, !0)
    ], 4)
  ], 6);
}
const Ve = /* @__PURE__ */ y(Se, [["render", be], ["__scopeId", "data-v-60e80c60"]]), xe = {
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
function Ie(e, t, n, r, s, i) {
  return o(), l("form", {
    class: "MFORM",
    onSubmit: t[0] || (t[0] = x(() => {
    }, ["prevent"]))
  }, [
    m(e.$slots, "default")
  ], 32);
}
const Ue = /* @__PURE__ */ y(xe, [["render", Ie]]);
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
}, Te = (e) => (U("data-v-fdf58daa"), e = e(), z(), e), Ee = { class: "MINPUT" }, He = ["dir", "id", "type", "value"], Pe = /* @__PURE__ */ Te(() => /* @__PURE__ */ _("div", null, null, -1)), Be = {
  key: 0,
  class: "m-invalid"
}, De = {
  key: 1,
  class: "m-valid"
};
function Le(e, t, n, r, s, i) {
  return o(), l("div", Ee, [
    m(e.$slots, "start", {}, void 0, !0),
    _("input", W({
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
    Pe,
    m(e.$slots, "end", {}, void 0, !0),
    H(V, { name: "fade" }, {
      default: w(() => [
        n.pattern && s.firstInput ? (o(), l(A, { key: 0 }, [
          !s.patternMatch && n.invalidMessage ? (o(), l("span", Be, g(n.invalidMessage), 1)) : s.patternMatch && n.validMessage ? (o(), l("span", De, g(n.validMessage), 1)) : h("", !0)
        ], 64)) : h("", !0)
      ]),
      _: 1
    })
  ]);
}
const ze = /* @__PURE__ */ y(Ce, [["render", Le], ["__scopeId", "data-v-fdf58daa"]]);
const Ae = {
  name: "MCode",
  data() {
    return {
      colored: "",
      langPatterns: {
        html: {
          tags: /(&lt;).+?(&gt;)/gm,
          text: new RegExp("(?<=&gt;).+?(?=&lt;)", "gm"),
          comments: /(&lt;!--).+?(--&gt;)/gm
        },
        js: {
          strings: /(".+?")|('.+?')|(`.+?`)/gim,
          comments: /(\/\/.+?\n)|(\/\*.+?\*\/)/gm,
          numbers: /[0-9]/gm,
          keywords1: /(\s|\A)(if|else|switch|case|break|continue|import|export|default|as|from|async|await|return|try|catch|finally|throw|yeild)(?=\W)/gm,
          keywords2: /(\s|\A)(function|let|var|const|=|==|===|null|undefined|do|while|true|false|for|in|new|delete|interface|public|protected|private|implements|extends|static|super|this|typeof|instanceof|\*)(?=\W)/gm,
          functions: /(\w+\(|[\{\}\(\)\[\]])/gm
        },
        css: {
          keywords: /@\w+/
        }
      }
    };
  },
  props: {
    tag: String,
    block: {
      type: Boolean,
      default: !1
    },
    code: String
  },
  computed: {
    classes() {
      let e = ["MCODE"];
      return this.block && e.push("block"), e.join(" ");
    }
  },
  mounted() {
    this.block && this.colorize();
  },
  methods: {
    colorize() {
      var n;
      const e = this.$refs.code.innerHTML;
      let t = e;
      for (let r in this.langPatterns)
        for (let s in this.langPatterns[r])
          (n = e.match(this.langPatterns[r][s])) == null || n.forEach((i) => {
            let a = `<i class="m-code-${r}-${s}">${i}</i>`;
            t = t.replaceAll(i, a);
          });
      this.$refs.code.innerHTML = t;
    }
  }
}, Ne = { key: 0 };
function Oe(e, t, n, r, s, i) {
  return o(), l("code", {
    class: u(i.classes),
    ref: "code"
  }, [
    n.tag ? (o(), l("span", Ne, g(n.tag), 1)) : h("", !0),
    S(" " + g(n.code) + " ", 1),
    m(e.$slots, "default")
  ], 2);
}
const Ye = /* @__PURE__ */ y(Ae, [["render", Oe]]);
var $, b, f;
const M = class {
  constructor(t) {
    C(this, "name");
    C(this, "radius");
    C(this, "fonts");
    T(this, f, { main: [], accent: [], onAccent: [], text: [] });
    if (this.name = t.name, this.radius = t.radius || 0, this.fonts = t.fonts || { en: "", ar: "" }, E(this, f, Q(t.colors)), c(M, b)[t.name] = this, !document.getElementById("M_THEME")) {
      let r = document.createElement("style");
      r.id = "M_THEME", document.body.appendChild(r);
    }
    E(M, $, document.getElementById("M_THEME"));
  }
  static apply(t) {
    c(M, b)[t].apply();
  }
  apply() {
    c(M, $).innerHTML = "", document.body.className = document.body.className.split(" ").filter((t) => !t.includes("m-theme")).join(" "), document.body.classList.add(`m-theme-${this.name}`), c(M, $).innerHTML += `.m-theme-${this.name}{ --m-ui-radius: ${this.radius}px }`, c(M, $).innerHTML += `.m-theme-${this.name}{ --m-font-en: ${this.fonts.en} }`, this.fonts.ar && (c(M, $).innerHTML += `.m-theme-${this.name}{ --m-font-ar: ${this.fonts.ar} }`);
    for (let t in c(this, f))
      c(M, $).innerHTML += `.m-theme-${this.name}{
         --m-color-${t}-h: ${c(this, f)[t][0]};
         --m-color-${t}-s: ${c(this, f)[t][1]}%;
         --m-color-${t}-l: ${c(this, f)[t][2]}%;
         --m-color-${t}-a: ${c(this, f)[t][3]};
         --m-color-${t}: hsla(${c(this, f)[t][0]},
          ${c(this, f)[t][1]}%,
          ${c(this, f)[t][2]}%,
          ${c(this, f)[t][3]});
       }`;
  }
};
let k = M;
$ = new WeakMap(), b = new WeakMap(), f = new WeakMap(), T(k, $, void 0), T(k, b, {});
const Ge = (e) => {
  e.config.globalProperties.$MTheme = k;
};
export {
  ue as MButton,
  Ye as MCode,
  We as MDrop,
  Ue as MForm,
  ze as MInput,
  Je as MMenu,
  Xe as MMenuItem,
  Re as MNotes,
  ne as MP,
  qe as MPoppup,
  Ve as MSlider,
  k as MTheme,
  Ge as install
};
