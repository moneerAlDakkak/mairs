declare const _sfc_main: import("vue").DefineComponent<{
    infinite: {
        type: BooleanConstructor;
        required: false;
    };
    stacked: {
        type: BooleanConstructor;
        required: false;
    };
    changeTime: {
        type: NumberConstructor;
        required: false;
    };
}, {
    props: any;
    child_count: import("vue").Ref<number>;
    currentShown: import("vue").Ref<number>;
    firstTouch: import("vue").Ref<number>;
    sliderEl: any;
    circularIndex: (i: number) => number;
    next: () => void;
    previous: () => void;
    goTo: (n: number) => void;
    removePositions: () => void;
    setPositions: (newShown: number) => void;
    handleTouch: (e: any) => void;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    infinite: {
        type: BooleanConstructor;
        required: false;
    };
    stacked: {
        type: BooleanConstructor;
        required: false;
    };
    changeTime: {
        type: NumberConstructor;
        required: false;
    };
}>>, {
    infinite: boolean;
    stacked: boolean;
}>;
export default _sfc_main;
