import { openBlock as r, createElementBlock as o, normalizeClass as h, renderSlot as c, resolveComponent as b, withDirectives as k, createVNode as y, TransitionGroup as B, withCtx as _, Fragment as I, renderList as P, createElementVNode as u, createCommentVNode as m, createTextVNode as v, toDisplayString as p, vShow as T, withModifiers as g, normalizeStyle as M, createBlock as w, mergeProps as D, pushScopeId as E, popScopeId as N } from "vue";
const f = (e, t) => {
  const s = e.__vccOpts || e;
  for (const [l, n] of t)
    s[l] = n;
  return s;
}, O = {
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
}, j = ["dir"];
function H(e, t, s, l, n, i) {
  return r(), o("p", {
    class: h(i.classes),
    ref: "mp",
    dir: n.dir,
    onFocus: t[0] || (t[0] = (a) => i.switchToEditable()),
    onBlur: t[1] || (t[1] = (a) => s.math ? i.renderMathJax() : null),
    onInput: t[2] || (t[2] = (a) => {
      i.recordContent(), s.autoDirection && i.adjustDirection();
    })
  }, [
    c(e.$slots, "default", {}, void 0, !0)
  ], 42, j);
}
const x = /* @__PURE__ */ f(O, [["render", H], ["__scopeId", "data-v-64579904"]]);
const A = {
  name: "MNotes",
  components: { MP: x },
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
    }
  }
}, F = {
  class: /* @__PURE__ */ h("MNOTES")
}, V = ["onClick"];
function J(e, t, s, l, n, i) {
  const a = b("MP");
  return k((r(), o("section", F, [
    y(B, {
      name: s.animation ? s.animation : "slide-right"
    }, {
      default: _(() => [
        (r(!0), o(I, null, P(n.notes, (d) => (r(), o("div", {
          key: d.title,
          class: h(`MNOTE ${d.status ? "m-" + d.status : ""}`),
          onClick: (Ce) => d.handler()
        }, [
          u("b", null, [
            d.icon ? (r(), o("i", {
              key: 0,
              class: h(d.icon)
            }, null, 2)) : m("", !0),
            v(" " + p(d.title), 1)
          ]),
          y(a, {
            autoDirection: "",
            math: ""
          }, {
            default: _(() => [
              v(p(d.message), 1)
            ]),
            _: 2
          }, 1024)
        ], 10, V))), 128))
      ]),
      _: 1
    }, 8, ["name"])
  ], 512)), [
    [T, n.notes.length]
  ]);
}
const X = /* @__PURE__ */ f(A, [["render", J], ["__scopeId", "data-v-d65c319c"]]), C = {
  props: {
    safe: Boolean,
    warning: Boolean,
    danger: Boolean
  },
  computed: {
    statusClass() {
      let e = "";
      return this.safe && (e = "m-safe"), this.warning && (e = "m-warning"), this.danger && (e = "m-danger"), e;
    }
  }
};
const R = {
  name: "MButton",
  mixins: [C],
  props: {
    bordered: {
      type: Boolean,
      default: !1
    },
    rounded: {
      type: Boolean,
      default: !1
    },
    noStyle: {
      type: Boolean,
      default: !1
    }
  },
  computed: {
    classes() {
      let e = ["MBUTTON"];
      return this.bordered && e.push("m-bordered"), this.rounded && e.push("m-rounded"), this.noStyle && e.push("m-no-style"), e.join(" ");
    }
  }
};
function L(e, t, s, l, n, i) {
  return r(), o("button", {
    class: h([i.classes, e.statusClass].join(" "))
  }, [
    c(e.$slots, "default", {}, void 0, !0)
  ], 2);
}
const S = /* @__PURE__ */ f(R, [["render", L], ["__scopeId", "data-v-c64cd6cd"]]);
const W = {
  name: "MMenu",
  props: {
    blurred: Boolean
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
function q(e, t, s, l, n, i) {
  return n.shown ? (r(), o("div", {
    key: 0,
    onClick: t[0] || (t[0] = g((a) => i.hide(), ["self"])),
    class: h(`MMENU ${s.blurred ? "m-blurred" : ""}`)
  }, [
    u("ul", {
      ref: "menu",
      style: M(`top: ${n.clientY}px; left: ${n.clientX}px`)
    }, [
      c(e.$slots, "default", {}, void 0, !0)
    ], 4)
  ], 2)) : m("", !0);
}
const U = /* @__PURE__ */ f(W, [["render", q], ["__scopeId", "data-v-eae02ace"]]);
const Y = {
  name: "MMenuItem",
  mixins: [C],
  props: {
    noHide: Boolean
  },
  methods: {
    hideOnClickMethod() {
      this.noHide || this.$parent.hide();
    }
  }
};
function z(e, t, s, l, n, i) {
  return r(), o("li", {
    class: h(`MMENUITEM ${e.statusClass}`),
    ref: "li",
    onClick: t[0] || (t[0] = (...a) => i.hideOnClickMethod && i.hideOnClickMethod(...a))
  }, [
    c(e.$slots, "default", {}, void 0, !0)
  ], 2);
}
const G = /* @__PURE__ */ f(Y, [["render", z], ["__scopeId", "data-v-453a5493"]]);
const K = {
  name: "popup",
  components: { MButton: S },
  props: {
    required: {
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
    show({ title: e, message: t, confirm: s, cancel: l }) {
      return this.title = e || "", this.message = t || "", this.confirm = s || "", this.cancel = l || "", this.isOpen = !0, new Promise((n, i) => {
        this.resolvePromise = n, this.rejectPromise = i;
      });
    },
    respond(e) {
      this.isOpen = !1, this.resolvePromise(e);
    },
    closeIfNotRequired() {
      this.required || (this.isOpen = !1);
    }
  }
}, Q = { open: "" };
function Z(e, t, s, l, n, i) {
  const a = b("m-button");
  return n.isOpen ? (r(), o("div", {
    key: 0,
    onClick: t[2] || (t[2] = g((...d) => i.closeIfNotRequired && i.closeIfNotRequired(...d), ["self"])),
    class: h(`MPOPPUP ${s.blurred ? "m-blurred" : ""}`)
  }, [
    u("dialog", Q, [
      u("b", null, p(n.title), 1),
      u("p", null, p(n.message), 1),
      c(e.$slots, "default", {}, void 0, !0),
      u("section", null, [
        n.cancel ? (r(), w(a, {
          key: 0,
          bordered: "",
          onClick: t[0] || (t[0] = (d) => i.respond(!1))
        }, {
          default: _(() => [
            v(p(n.cancel), 1)
          ]),
          _: 1
        })) : m("", !0),
        n.confirm ? (r(), w(a, {
          key: 1,
          onClick: t[1] || (t[1] = (d) => i.respond(!0))
        }, {
          default: _(() => [
            v(p(n.confirm), 1)
          ]),
          _: 1
        })) : m("", !0)
      ])
    ])
  ], 2)) : m("", !0);
}
const ee = /* @__PURE__ */ f(K, [["render", Z], ["__scopeId", "data-v-3137cae4"]]);
const te = {
  name: "MDrop",
  props: {
    open: {
      type: Boolean,
      default: !1
    },
    noStyle: {
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
}, se = ["open"], ne = { ref: "content" };
function ie(e, t, s, l, n, i) {
  return r(), o("details", {
    class: h(`MDROP ${s.noStyle ? "m-no-style" : ""}`),
    ref: "details",
    open: s.open
  }, [
    u("summary", {
      ref: "summary",
      onClick: t[0] || (t[0] = g((...a) => i.handleClick && i.handleClick(...a), ["prevent"]))
    }, [
      c(e.$slots, "summary", {}, void 0, !0)
    ], 512),
    u("section", ne, [
      c(e.$slots, "default", {}, void 0, !0)
    ], 512)
  ], 10, se);
}
const re = /* @__PURE__ */ f(te, [["render", ie], ["__scopeId", "data-v-a0af22f5"]]);
const oe = {
  name: "MSlider",
  props: { ratio: String, infinite: Boolean, changeTime: String },
  data() {
    return {
      currentShown: 0,
      child_count: 0,
      lastPosition: 0
    };
  },
  mounted() {
    this.child_count = this.$refs.track.childElementCount, this.changeTime && setInterval(this.next, this.changeTime);
  },
  updated() {
    this.child_count = this.$refs.track.childElementCount;
  },
  watch: {
    currentShown(e) {
      this.$refs.slider.style.overflow = "hidden", this.$refs.slider.scrollLeft = e * this.$refs.track.firstElementChild.offsetWidth;
    }
  },
  methods: {
    next() {
      this.$refs.slider.style.overflow = "hidden", this.currentShown < this.child_count - 1 ? this.currentShown++ : this.currentShown = 0;
    },
    previous() {
      this.$refs.slider.style.overflow = "hidden", this.currentShown > 0 ? this.currentShown-- : this.currentShown = this.child_count - 1;
    },
    handleScroll(e) {
      e.target.style.overflow === "hidden" ? e.target.scrollLeft == this.currentShown * this.$refs.track.firstElementChild.offsetWidth && (this.$refs.slider.style.overflow = "auto") : (this.lastPosition > this.$refs.slider.scrollLeft ? "backwards" : "forwards") === "forwards" ? this.next() : this.previous(), this.lastPosition = this.$refs.slider.scrollLeft;
    }
  }
};
function ae(e, t, s, l, n, i) {
  return r(), o("div", {
    ref: "slider",
    class: h("MSLIDER"),
    style: M(`--ratio: ${s.ratio}; --child-count: ${n.child_count}`),
    onScroll: t[0] || (t[0] = (a) => i.handleScroll(a))
  }, [
    u("div", {
      ref: "track",
      style: M(`--current-shown: ${n.currentShown}`)
    }, [
      c(e.$slots, "default", {}, void 0, !0)
    ], 4)
  ], 36);
}
const le = /* @__PURE__ */ f(oe, [["render", ae], ["__scopeId", "data-v-5b3daad8"]]), de = {
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
}, ue = { class: "MFORM" };
function ce(e, t, s, l, n, i) {
  return r(), o("form", ue, [
    c(e.$slots, "default")
  ]);
}
const he = /* @__PURE__ */ f(de, [["render", ce]]);
const fe = {
  name: "MINPUT",
  data() {
    return {
      firstInput: !1,
      patternMatch: this.pattern ? this.pattern.test(this.modelValue) : !0,
      ar: /[\u0621-\u064A]/,
      dir: ""
    };
  },
  inheritAttrs: !1,
  props: {
    modelValue: String | Number,
    pattern: RegExp,
    invalidMessage: String,
    validMessage: String,
    autoDirection: Boolean,
    bordered: Boolean,
    id: { type: String, required: !0 },
    type: {
      type: String,
      default: "text",
      validator: (e) => ["text", "email", "password", "number", "date", "url"].includes(
        e
      )
    }
  },
  watch: {
    modelValue(e) {
      var t, s;
      !this.pattern || (this.pattern.test(e) ? (this.patternMatch = !0, (t = this.formParent) == null || t.removeFromInvalids(this.id)) : (this.patternMatch = !1, (s = this.formParent) == null || s.registerToInvalids(this.id)));
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
}, pe = (e) => (E("data-v-10fb8f8b"), e = e(), N(), e), me = ["dir", "type", "value"], _e = /* @__PURE__ */ pe(() => /* @__PURE__ */ u("div", null, null, -1)), ve = {
  key: 0,
  class: "m-invalid"
}, $e = {
  key: 1,
  class: "m-valid"
};
function Me(e, t, s, l, n, i) {
  return r(), o("div", {
    class: h(`MINPUT ${s.bordered ? "m-bordered" : ""}`)
  }, [
    u("div", null, [
      c(e.$slots, "start", {}, void 0, !0),
      u("input", D({
        dir: n.dir,
        ref: "input"
      }, e.$attrs, {
        type: s.type,
        value: s.modelValue,
        onInput: t[0] || (t[0] = (a) => {
          e.$emit("update:modelValue", a.currentTarget.value), s.autoDirection && s.type == "text" && i.adjustDirection(), n.firstInput = !0;
        })
      }), null, 16, me),
      _e,
      c(e.$slots, "end", {}, void 0, !0)
    ]),
    s.pattern && n.firstInput ? (r(), o(I, { key: 0 }, [
      !n.patternMatch && s.invalidMessage ? (r(), o("span", ve, p(s.invalidMessage), 1)) : n.patternMatch && s.validMessage ? (r(), o("span", $e, p(s.validMessage), 1)) : m("", !0)
    ], 64)) : m("", !0)
  ], 2);
}
const ge = /* @__PURE__ */ f(fe, [["render", Me], ["__scopeId", "data-v-10fb8f8b"]]), ye = {
  name: "MSection",
  props: {
    forward: {
      type: Boolean,
      default: !1
    }
  },
  mounted() {
    new IntersectionObserver((t) => {
      t.forEach((s) => {
        s.isIntersecting ? s.target.setAttribute("data-m-visible", !0) : this.forward || s.target.setAttribute("data-m-visible", !1);
      });
    }).observe(this.$refs.section);
  }
}, we = {
  ref: "section",
  class: "MSECTION"
};
function be(e, t, s, l, n, i) {
  return r(), o("section", we, [
    c(e.$slots, "default")
  ], 512);
}
const Ie = /* @__PURE__ */ f(ye, [["render", be]]);
let $ = {
  MNotes: X,
  MButton: S,
  MP: x,
  MMenu: U,
  MMenuItem: G,
  MPoppup: ee,
  MDrop: re,
  MSlider: le,
  MForm: he,
  MInput: ge,
  MSection: Ie
};
function xe(e, t) {
  return t in e;
}
const ke = (e) => {
  for (let t in $)
    xe($, t) && e.component(t, $[t]);
};
export {
  S as MButton,
  re as MDrop,
  he as MForm,
  ge as MInput,
  U as MMenu,
  G as MMenuItem,
  X as MNotes,
  x as MP,
  ee as MPoppup,
  Ie as MSection,
  le as MSlider,
  ke as install
};
