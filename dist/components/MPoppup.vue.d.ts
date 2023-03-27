export interface PoppupMsg {
    title?: string;
    message?: string;
    confirm?: string;
    cancel?: string;
}
declare const _sfc_main: import("vue").DefineComponent<{
    required: {
        type: BooleanConstructor;
        required: false;
    };
    blurred: {
        type: BooleanConstructor;
        required: false;
    };
}, {
    props: any;
    poppupMsg: PoppupMsg;
    resolvePromise: any;
    rejectPromise: any;
    isOpen: import("vue").Ref<boolean>;
    show: (options?: PoppupMsg) => Promise<boolean>;
    respond: (decision: boolean) => void;
    closeIfNotRequired: () => void;
    MButton: import("vue").DefineComponent<{
        bordered: {
            type: BooleanConstructor;
            required: false;
        };
        rounded: {
            type: BooleanConstructor;
            required: false;
        };
        noStyle: {
            type: BooleanConstructor;
            required: false;
        };
        safe: {
            type: BooleanConstructor;
            required: false;
        };
        warning: {
            type: BooleanConstructor;
            required: false;
        };
        danger: {
            type: BooleanConstructor;
            required: false;
        };
        loading: {
            type: BooleanConstructor;
            required: false;
        };
    }, {
        props: any;
        statusClass: import("vue").ComputedRef<string>;
        classes: import("vue").ComputedRef<string>;
    }, unknown, {}, {}, import("vue").DefineComponent<{
        safe: BooleanConstructor;
        warning: BooleanConstructor;
        danger: BooleanConstructor;
    }, unknown, unknown, {
        statusClass(): string;
    }, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
        safe: BooleanConstructor;
        warning: BooleanConstructor;
        danger: BooleanConstructor;
    }>>, {
        safe: boolean;
        warning: boolean;
        danger: boolean;
    }>, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
        bordered: {
            type: BooleanConstructor;
            required: false;
        };
        rounded: {
            type: BooleanConstructor;
            required: false;
        };
        noStyle: {
            type: BooleanConstructor;
            required: false;
        };
        safe: {
            type: BooleanConstructor;
            required: false;
        };
        warning: {
            type: BooleanConstructor;
            required: false;
        };
        danger: {
            type: BooleanConstructor;
            required: false;
        };
        loading: {
            type: BooleanConstructor;
            required: false;
        };
    }>>, {
        bordered: boolean;
        safe: boolean;
        warning: boolean;
        danger: boolean;
        rounded: boolean;
        noStyle: boolean;
        loading: boolean;
    }>;
    MP: import("vue").DefineComponent<{
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
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    required: {
        type: BooleanConstructor;
        required: false;
    };
    blurred: {
        type: BooleanConstructor;
        required: false;
    };
}>>, {
    required: boolean;
    blurred: boolean;
}>;
export default _sfc_main;
