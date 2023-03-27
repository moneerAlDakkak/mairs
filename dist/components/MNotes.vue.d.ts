export interface Note {
    id?: number;
    title: string;
    message: string;
    icon?: string;
    status?: string;
    handler?: () => void;
    timeout?: number;
}
declare const _sfc_main: import("vue").DefineComponent<{
    animation: {
        type: StringConstructor;
        required: false;
    };
    timeout: {
        type: NumberConstructor;
        required: false;
    };
}, {
    notes: import("vue").Ref<{
        id?: number | undefined;
        title: string;
        message: string;
        icon?: string | undefined;
        status?: string | undefined;
        handler?: (() => void) | undefined;
        timeout?: number | undefined;
    }[]>;
    props: any;
    lastNoteId: import("vue").Ref<number>;
    add: (note: Note) => void;
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
    animation: {
        type: StringConstructor;
        required: false;
    };
    timeout: {
        type: NumberConstructor;
        required: false;
    };
}>>, {}>;
export default _sfc_main;
