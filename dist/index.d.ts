/// <reference types="node" />
export declare const install: (Vue: any) => void;
export declare const MNotes: import("vue").DefineComponent<{
    animation: {
        type: StringConstructor;
        required: false;
    };
    timeout: {
        type: NumberConstructor;
        required: false;
    };
    position: {
        type: StringConstructor;
        required: true;
        default: string;
    };
    autoDirection: {
        type: BooleanConstructor;
        required: false;
    };
    math: {
        type: BooleanConstructor;
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
    add: (note: import("./components/MNotes.vue").Note) => void;
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
    position: {
        type: StringConstructor;
        required: true;
        default: string;
    };
    autoDirection: {
        type: BooleanConstructor;
        required: false;
    };
    math: {
        type: BooleanConstructor;
        required: false;
    };
}>>, {
    math: boolean;
    autoDirection: boolean;
    position: string;
}>;
export declare const MButton: import("vue").DefineComponent<{
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
export declare const MP: import("vue").DefineComponent<{
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
export declare const MMenu: import("vue").DefineComponent<{
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
export declare const MPoppup: import("vue").DefineComponent<{
    required: {
        type: BooleanConstructor;
        required: false;
    };
    blurred: {
        type: BooleanConstructor;
        required: false;
    };
    mobile: {
        type: BooleanConstructor;
        required: false;
    };
    unstyled: {
        type: BooleanConstructor;
        required: false;
    };
}, {
    props: any;
    poppupMsg: import("vue").Ref<{
        title?: string | undefined;
        message?: string | undefined;
        confirm?: string | undefined;
        cancel?: string | undefined;
    }>;
    MPOP: import("vue").Ref<HTMLDialogElement | undefined>;
    isOpen: import("vue").Ref<boolean>;
    isHiding: import("vue").Ref<boolean>;
    observer: MutationObserver;
    resolvePromise: any;
    rejectPromise: any;
    show: (options?: import("./components/MPoppup.vue").PoppupMsg | undefined) => Promise<boolean>;
    close: () => void;
    respond: (decision: boolean) => void;
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
    required: {
        type: BooleanConstructor;
        required: false;
    };
    blurred: {
        type: BooleanConstructor;
        required: false;
    };
    mobile: {
        type: BooleanConstructor;
        required: false;
    };
    unstyled: {
        type: BooleanConstructor;
        required: false;
    };
}>>, {
    required: boolean;
    unstyled: boolean;
    blurred: boolean;
    mobile: boolean;
}>;
export declare const MDrop: import("vue").DefineComponent<{
    open: {
        type: BooleanConstructor;
        required: false;
    };
    unstyled: {
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
}>>, {
    unstyled: boolean;
    open: boolean;
}>;
export declare const MSlider: import("vue").DefineComponent<{
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
export declare const MForm: import("vue").DefineComponent<{}, {
    invalids_IDs: string[];
    registerToInvalids: (inputId: string) => void;
    removeFromInvalids: (inputId: string) => void;
    checkValidation: () => boolean;
}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{}>>, {}>;
export declare const MInput: import("vue").DefineComponent<{
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
export declare const MSection: import("vue").DefineComponent<{
    forward: {
        type: BooleanConstructor;
        required: false;
    };
}, {
    props: any;
    sectionEl: any;
    observer: IntersectionObserver;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    forward: {
        type: BooleanConstructor;
        required: false;
    };
}>>, {
    forward: boolean;
}>;
export declare const MText: import("vue").DefineComponent<{
    id: {
        type: StringConstructor;
        required: true;
    };
    modelValue: {
        type: (StringConstructor | ArrayConstructor)[];
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
    emit: (event: "update:modelValue", ...args: any[]) => void;
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
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "update:modelValue"[], "update:modelValue", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    id: {
        type: StringConstructor;
        required: true;
    };
    modelValue: {
        type: (StringConstructor | ArrayConstructor)[];
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
}, {
    autoDirection: boolean;
    bordered: boolean;
    unstyled: boolean;
    disabled: boolean;
    tags: boolean;
}>;
export declare const MSelect: import("vue").DefineComponent<{
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
    required: {
        type: BooleanConstructor;
        required: false;
    };
}, {
    emit: (event: "update:modelValue", ...args: any[]) => void;
    props: any;
    labels: import("vue").ComputedRef<string[]>;
    values: import("vue").ComputedRef<string[]>;
    getOptionByLabel: (label: string) => import("./components/MSelect.vue").OptionAttrs | undefined;
    getOptionByValue: (value: string) => import("./components/MSelect.vue").OptionAttrs | undefined;
    isOpen: import("vue").Ref<boolean>;
    searchString: import("vue").Ref<string>;
    handleBlur: (e: any) => void;
    handleClick: (option: import("./components/MSelect.vue").OptionAttrs) => void;
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
    }>>, {
        unstyled: boolean;
        open: boolean;
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
    required: {
        type: BooleanConstructor;
        required: false;
    };
}>> & {
    "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
}, {
    bordered: boolean;
    required: boolean;
    multiple: boolean;
}>;
