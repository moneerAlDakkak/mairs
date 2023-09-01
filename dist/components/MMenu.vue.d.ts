declare const _sfc_main: import("vue").DefineComponent<{
    unstyled: {
        type: BooleanConstructor;
        required: false;
    };
}, {
    isOpen: import("vue").Ref<boolean>;
    isHiding: import("vue").Ref<boolean>;
    clientX: import("vue").Ref<number>;
    clientY: import("vue").Ref<number>;
    menuWidth: import("vue").Ref<number>;
    menuHeight: import("vue").Ref<number>;
    MMENU: import("vue").Ref<HTMLDialogElement | undefined>;
    observer: MutationObserver;
    show: (e: MouseEvent) => void;
    close: () => void;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    unstyled: {
        type: BooleanConstructor;
        required: false;
    };
}>>, {
    unstyled: boolean;
}>;
export default _sfc_main;
