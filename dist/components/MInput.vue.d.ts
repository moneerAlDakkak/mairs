declare const _sfc_main: import("vue").DefineComponent<{
    id: {
        type: StringConstructor;
        required: true;
    };
    modelValue: {
        type: (StringConstructor | NumberConstructor)[];
        required: false;
    };
    pattern: {
        type: null;
        required: false;
    };
    invalidMessage: {
        type: StringConstructor;
        required: false;
    };
    validMessage: {
        type: StringConstructor;
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
    type: {
        type: StringConstructor;
        required: false;
        default: string;
    };
    label: {
        type: StringConstructor;
        required: false;
    };
    disabled: {
        type: BooleanConstructor;
        required: false;
    };
    shrinked: {
        type: BooleanConstructor;
        required: false;
    };
    transformer: {
        type: FunctionConstructor;
        required: false;
    };
    unstyled: {
        type: BooleanConstructor;
        required: false;
    };
}, {
    props: any;
    emit: (event: "update:modelValue", ...args: any[]) => void;
    firstInput: import("vue").Ref<boolean>;
    patternMatch: import("vue").Ref<boolean>;
    dir: import("vue").Ref<string>;
    ar: RegExp;
    input: import("vue").Ref<{
        value: string;
    }>;
    instance: import("vue").ComponentInternalInstance | null;
    formParent: import("vue").ComputedRef<import("vue").ComponentInternalInstance | null | undefined>;
    adjustDirection: () => void;
    isValid: () => boolean;
    checkValidate: (currentInput: string | number) => void;
    handleInput: (e: any) => void;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "update:modelValue"[], "update:modelValue", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    id: {
        type: StringConstructor;
        required: true;
    };
    modelValue: {
        type: (StringConstructor | NumberConstructor)[];
        required: false;
    };
    pattern: {
        type: null;
        required: false;
    };
    invalidMessage: {
        type: StringConstructor;
        required: false;
    };
    validMessage: {
        type: StringConstructor;
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
    type: {
        type: StringConstructor;
        required: false;
        default: string;
    };
    label: {
        type: StringConstructor;
        required: false;
    };
    disabled: {
        type: BooleanConstructor;
        required: false;
    };
    shrinked: {
        type: BooleanConstructor;
        required: false;
    };
    transformer: {
        type: FunctionConstructor;
        required: false;
    };
    unstyled: {
        type: BooleanConstructor;
        required: false;
    };
}>> & {
    "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
}, {
    autoDirection: boolean;
    bordered: boolean;
    type: string;
    unstyled: boolean;
    disabled: boolean;
    shrinked: boolean;
}>;
export default _sfc_main;
