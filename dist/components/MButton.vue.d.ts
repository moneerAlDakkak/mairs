declare const _sfc_main: import("vue").DefineComponent<{
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
export default _sfc_main;
