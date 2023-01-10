declare const _sfc_main: import("vue").DefineComponent<{
    math: {
        type: BooleanConstructor;
        required: false;
    };
    autoDirection: {
        type: BooleanConstructor;
        required: false;
    };
    bordered: {
        type: BooleanConstructor;
        required: false;
    };
    dashed: {
        type: BooleanConstructor;
        required: false;
    };
}, {
    props: any;
    ar: RegExp;
    dir: import("vue").Ref<string>;
    rawContent: import("vue").Ref<string>;
    classes: import("vue").ComputedRef<string>;
    mp: any;
    getRawContent: () => string;
    recordContent: () => void;
    switchToEditable: () => void;
    adjustDirection: () => void;
    renderMathJax: () => void;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    math: {
        type: BooleanConstructor;
        required: false;
    };
    autoDirection: {
        type: BooleanConstructor;
        required: false;
    };
    bordered: {
        type: BooleanConstructor;
        required: false;
    };
    dashed: {
        type: BooleanConstructor;
        required: false;
    };
}>>, {
    math: boolean;
    autoDirection: boolean;
    bordered: boolean;
    dashed: boolean;
}>;
export default _sfc_main;
