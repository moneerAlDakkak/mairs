declare const _sfc_main: import("vue").DefineComponent<{
    open: {
        type: BooleanConstructor;
        required: false;
    };
    noStyle: {
        type: BooleanConstructor;
        required: false;
    };
}, {
    props: any;
    isClosing: import("vue").Ref<boolean>;
    isExpanding: import("vue").Ref<boolean>;
    animation: any;
    detailsEl: any;
    contentEl: any;
    handleClick: () => void;
    expand: () => void;
    shrink: () => void;
    openContent: () => void;
    onAnimationFinish: (open: boolean) => void;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    open: {
        type: BooleanConstructor;
        required: false;
    };
    noStyle: {
        type: BooleanConstructor;
        required: false;
    };
}>>, {
    noStyle: boolean;
    open: boolean;
}>;
export default _sfc_main;
