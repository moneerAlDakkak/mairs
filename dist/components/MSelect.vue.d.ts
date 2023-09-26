export interface OptionAttrs {
    selected?: boolean;
    disabled?: boolean;
    value: string;
    label: string;
}
declare const _sfc_main: import("vue").DefineComponent<{
    options: {
        type: ArrayConstructor;
        required: true;
    };
    modelValue: {
        type: (StringConstructor | ArrayConstructor)[];
        required: true;
    };
    multiple: {
        type: BooleanConstructor;
        required: false;
    };
    id: {
        type: StringConstructor;
        required: true;
    };
    placeholder: {
        type: StringConstructor;
        required: false;
    };
    bordered: {
        type: BooleanConstructor;
        required: false;
    };
    freeOptions: {
        type: BooleanConstructor;
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
    transformer: {
        type: FunctionConstructor;
        required: false;
    };
    label: {
        type: StringConstructor;
        required: false;
    };
    disabled: {
        type: BooleanConstructor;
        required: false;
    };
    maxlength: {
        type: NumberConstructor;
        required: false;
    };
}, {
    emit: (event: "update:modelValue", ...args: any[]) => void;
    props: any;
    labels: import("vue").ComputedRef<string[]>;
    values: import("vue").ComputedRef<string[]>;
    getOptionByLabel: (label: string) => OptionAttrs | undefined;
    getOptionByValue: (value: string) => OptionAttrs | undefined;
    searchString: import("vue").Ref<string>;
    tags: import("vue").Ref<string[]>;
    drop: import("vue").Ref<any>;
    handleStringInput: () => void;
    handleArrayInput: (method?: "backspace") => void;
    handleFocus: () => void;
    handleBlur: (e: any) => void;
    handleClick: (option: OptionAttrs) => void;
    submitOption: (option: OptionAttrs) => void;
    submitOptions: (option: OptionAttrs | OptionAttrs[], method?: "backspace" | "click") => void;
    isValid: () => boolean;
    formParent: import("vue").ComputedRef<import("vue").ComponentInternalInstance | null | undefined>;
    checkValidate: () => void;
    MInput: import("vue").DefineComponent<{
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
    readonly MDrop: import("vue").DefineComponent<{
        open: {
            type: BooleanConstructor;
            required: false;
        };
        unstyled: {
            type: BooleanConstructor;
            required: false;
        };
        unclicked: {
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
        unstyled: {
            type: BooleanConstructor;
            required: false;
        };
        unclicked: {
            type: BooleanConstructor;
            required: false;
        };
    }>>, {
        unstyled: boolean;
        open: boolean;
        unclicked: boolean;
    }>;
    readonly MText: import("vue").DefineComponent<{
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
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "update:modelValue"[], "update:modelValue", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    options: {
        type: ArrayConstructor;
        required: true;
    };
    modelValue: {
        type: (StringConstructor | ArrayConstructor)[];
        required: true;
    };
    multiple: {
        type: BooleanConstructor;
        required: false;
    };
    id: {
        type: StringConstructor;
        required: true;
    };
    placeholder: {
        type: StringConstructor;
        required: false;
    };
    bordered: {
        type: BooleanConstructor;
        required: false;
    };
    freeOptions: {
        type: BooleanConstructor;
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
    transformer: {
        type: FunctionConstructor;
        required: false;
    };
    label: {
        type: StringConstructor;
        required: false;
    };
    disabled: {
        type: BooleanConstructor;
        required: false;
    };
    maxlength: {
        type: NumberConstructor;
        required: false;
    };
}>> & {
    "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
}, {
    bordered: boolean;
    disabled: boolean;
    multiple: boolean;
    freeOptions: boolean;
}>;
export default _sfc_main;
