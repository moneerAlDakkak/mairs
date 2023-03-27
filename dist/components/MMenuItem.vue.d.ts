declare const _sfc_main: import("vue").DefineComponent<{
    noHide: {
        type: BooleanConstructor;
        required: false;
    };
}, {
    props: any;
    listParent: import("vue").ComputedRef<import("vue").ComponentInternalInstance | null | undefined>;
    hideOnClickMethod: () => void;
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
    noHide: {
        type: BooleanConstructor;
        required: false;
    };
}>>, {
    noHide: boolean;
}>;
export default _sfc_main;
