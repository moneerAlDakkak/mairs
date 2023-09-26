declare const _sfc_main: import("vue").DefineComponent<{
    id: {
        type: StringConstructor;
        required: true;
    };
    modelValue: {
        type: (StringConstructor | ArrayConstructor)[];
        required: false;
    };
    textValue: {
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
    label: {
        type: StringConstructor;
        required: false;
    };
    tags: {
        type: BooleanConstructor;
        required: false;
    };
    maxlength: {
        type: NumberConstructor;
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
    disabled: {
        type: BooleanConstructor;
        required: false;
    };
    rows: {
        type: NumberConstructor;
        required: false;
    };
    includedHtml: {
        type: ArrayConstructor;
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
    emit: (event: "update:modelValue" | "update:textValue", ...args: any[]) => void;
    firstInput: import("vue").Ref<boolean>;
    patternMatch: import("vue").Ref<boolean>;
    dir: import("vue").Ref<string>;
    ar: RegExp;
    input: import("vue").Ref<HTMLInputElement | null>;
    instance: import("vue").ComponentInternalInstance | null;
    formParent: import("vue").ComputedRef<import("vue").ComponentInternalInstance | null | undefined>;
    cleanHtmlString: (htmlString: string) => string;
    adjustDirection: () => void;
    isValid: () => boolean;
    checkValidate: (currentInput: string | number) => void;
    handleInput: (e: any) => void;
    addTag: (e: any) => void;
    lastValue: import("vue").Ref<string>;
    removeTag: (e: any) => void;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("update:modelValue" | "update:textValue")[], "update:modelValue" | "update:textValue", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    id: {
        type: StringConstructor;
        required: true;
    };
    modelValue: {
        type: (StringConstructor | ArrayConstructor)[];
        required: false;
    };
    textValue: {
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
    label: {
        type: StringConstructor;
        required: false;
    };
    tags: {
        type: BooleanConstructor;
        required: false;
    };
    maxlength: {
        type: NumberConstructor;
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
    disabled: {
        type: BooleanConstructor;
        required: false;
    };
    rows: {
        type: NumberConstructor;
        required: false;
    };
    includedHtml: {
        type: ArrayConstructor;
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
    "onUpdate:textValue"?: ((...args: any[]) => any) | undefined;
}, {
    autoDirection: boolean;
    bordered: boolean;
    unstyled: boolean;
    disabled: boolean;
    tags: boolean;
}>;
export default _sfc_main;
