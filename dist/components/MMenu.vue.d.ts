declare const _sfc_main: import("vue").DefineComponent<{
    blurred: {
        type: BooleanConstructor;
        required: false;
    };
}, {
    props: any;
    shown: import("vue").Ref<boolean>;
    clientX: import("vue").Ref<number>;
    clientY: import("vue").Ref<number>;
    menuWidth: import("vue").Ref<number>;
    zIndex: import("vue").Ref<string>;
    visibility: import("vue").Ref<string>;
    menu: import("vue").Ref<HTMLElement | null>;
    show: (e: any) => void;
    hide: () => void;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    blurred: {
        type: BooleanConstructor;
        required: false;
    };
}>>, {
    blurred: boolean;
}>;
export default _sfc_main;
