/// <reference types="node" />
declare const _sfc_main: import("vue").DefineComponent<{
    carousel: {
        type: BooleanConstructor;
        required: false;
    };
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
    pointers: {
        type: BooleanConstructor;
        required: false;
    };
}, {
    props: any;
    currentShown: import("vue").Ref<number>;
    childCount: import("vue").Ref<number>;
    slider: import("vue").Ref<HTMLElement | null>;
    track: import("vue").Ref<HTMLElement | null>;
    pointersEl: import("vue").Ref<HTMLElement | null>;
    goTo: (n: number) => void;
    next: () => void;
    previous: () => void;
    setPositions: (newShown: number) => void;
    circularIndex: (i: number) => number;
    interval: import("vue").Ref<{
        hasRef: () => boolean;
        refresh: () => NodeJS.Timeout;
        [Symbol.toPrimitive]: () => number;
        ref: () => NodeJS.Timeout;
        unref: () => NodeJS.Timeout;
    } | null>;
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
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    carousel: {
        type: BooleanConstructor;
        required: false;
    };
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
    pointers: {
        type: BooleanConstructor;
        required: false;
    };
}>>, {
    carousel: boolean;
    infinite: boolean;
    stacked: boolean;
    pointers: boolean;
}>;
export default _sfc_main;
