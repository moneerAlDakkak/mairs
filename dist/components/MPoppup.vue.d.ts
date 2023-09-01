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
    mobile: {
        type: BooleanConstructor;
        required: false;
    };
    unstyled: {
        type: BooleanConstructor;
        required: false;
    };
}, {
    props: any;
    poppupMsg: import("vue").Ref<{
        title?: string | undefined;
        message?: string | undefined;
        confirm?: string | undefined;
        cancel?: string | undefined;
    }>;
    MPOP: import("vue").Ref<HTMLDialogElement | undefined>;
    isOpen: import("vue").Ref<boolean>;
    isHiding: import("vue").Ref<boolean>;
    observer: MutationObserver;
    resolvePromise: any;
    rejectPromise: any;
    show: (options?: PoppupMsg) => Promise<boolean>;
    close: () => void;
    respond: (decision: boolean) => void;
    MButton: import("vue").DefineComponent<{
        bordered: {
            type: BooleanConstructor;
            required: false;
        };
        rounded: {
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
        unstyled: {
            type: BooleanConstructor;
            required: false;
        };
    }, {
        props: any;
        statusClasses: import("vue").ComputedRef<{
            "m-safe": boolean | undefined;
            "m-warning": boolean | undefined;
            "m-danger": boolean | undefined;
        }>;
        styleClasses: import("vue").ComputedRef<{
            MBUTTON: boolean;
            "m-bordered": boolean | undefined;
            "m-rounded": boolean | undefined;
        }>;
    }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
        bordered: {
            type: BooleanConstructor;
            required: false;
        };
        rounded: {
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
        unstyled: {
            type: BooleanConstructor;
            required: false;
        };
    }>>, {
        bordered: boolean;
        rounded: boolean;
        safe: boolean;
        warning: boolean;
        danger: boolean;
        loading: boolean;
        unstyled: boolean;
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
    mobile: {
        type: BooleanConstructor;
        required: false;
    };
    unstyled: {
        type: BooleanConstructor;
        required: false;
    };
}>>, {
    required: boolean;
    unstyled: boolean;
    blurred: boolean;
    mobile: boolean;
}>;
export default _sfc_main;
