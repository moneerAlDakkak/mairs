/// <reference types="node" />
import MNotes from "./MNotes.vue";
import MButton from "./MButton.vue";
import MP from "./MP.vue";
import MMenu from "./MMenu.vue";
import MMenuItem from "./MMenuItem.vue";
import MPoppup from "./MPoppup.vue";
import MDrop from "./MDrop.vue";
import MSlider from "./MSlider.vue";
import MForm from "./MForm.vue";
import MInput from "./MInput.vue";
import MSection from "./MSection.vue";
import MText from "./MText.vue";
declare const components: {
    MNotes: import("vue").DefineComponent<{
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
        add: (note: import("./MNotes.vue").Note) => void;
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
    MButton: import("vue").DefineComponent<{
        bordered: {
            type: BooleanConstructor;
            required: false;
        };
        rounded: {
            type: BooleanConstructor;
            required: false;
        };
        noStyle: {
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
    }, {
        props: any;
        statusClass: import("vue").ComputedRef<string>;
        classes: import("vue").ComputedRef<string>;
    }, unknown, {}, {}, import("vue").DefineComponent<{
        safe: BooleanConstructor;
        warning: BooleanConstructor;
        danger: BooleanConstructor;
    }, unknown, unknown, {
        statusClass(): string;
    }, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
        safe: BooleanConstructor;
        warning: BooleanConstructor;
        danger: BooleanConstructor;
    }>>, {
        safe: boolean;
        warning: boolean;
        danger: boolean;
    }>, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
        bordered: {
            type: BooleanConstructor;
            required: false;
        };
        rounded: {
            type: BooleanConstructor;
            required: false;
        };
        noStyle: {
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
    }>>, {
        bordered: boolean;
        safe: boolean;
        warning: boolean;
        danger: boolean;
        rounded: boolean;
        noStyle: boolean;
        loading: boolean;
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
    MMenu: import("vue").DefineComponent<{
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
    MMenuItem: import("vue").DefineComponent<{
        noHide: {
            type: BooleanConstructor;
            required: false;
        };
    }, {
        props: any;
        listParent: import("vue").ComputedRef<import("vue").ComponentInternalInstance | null | undefined>;
        hideOnClickMethod: () => void;
    }, unknown, {}, {}, import("vue").DefineComponent<{
        safe: BooleanConstructor;
        warning: BooleanConstructor;
        danger: BooleanConstructor;
    }, unknown, unknown, {
        statusClass(): string;
    }, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
        safe: BooleanConstructor;
        warning: BooleanConstructor;
        danger: BooleanConstructor;
    }>>, {
        safe: boolean;
        warning: boolean;
        danger: boolean;
    }>, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
        noHide: {
            type: BooleanConstructor;
            required: false;
        };
    }>>, {
        noHide: boolean;
    }>;
    MPoppup: import("vue").DefineComponent<{
        required: {
            type: BooleanConstructor;
            required: false;
        };
        blurred: {
            type: BooleanConstructor;
            required: false;
        };
    }, {
        props: any;
        poppupMsg: import("./MPoppup.vue").PoppupMsg;
        resolvePromise: any;
        rejectPromise: any;
        isOpen: import("vue").Ref<boolean>;
        show: (options?: import("./MPoppup.vue").PoppupMsg | undefined) => Promise<boolean>;
        respond: (decision: boolean) => void;
        closeIfNotRequired: () => void;
        MButton: import("vue").DefineComponent<{
            bordered: {
                type: BooleanConstructor;
                required: false;
            };
            rounded: {
                type: BooleanConstructor;
                required: false;
            };
            noStyle: {
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
        }, {
            props: any;
            statusClass: import("vue").ComputedRef<string>;
            classes: import("vue").ComputedRef<string>;
        }, unknown, {}, {}, import("vue").DefineComponent<{
            safe: BooleanConstructor;
            warning: BooleanConstructor;
            danger: BooleanConstructor;
        }, unknown, unknown, {
            statusClass(): string;
        }, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
            safe: BooleanConstructor;
            warning: BooleanConstructor;
            danger: BooleanConstructor;
        }>>, {
            safe: boolean;
            warning: boolean;
            danger: boolean;
        }>, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
            bordered: {
                type: BooleanConstructor;
                required: false;
            };
            rounded: {
                type: BooleanConstructor;
                required: false;
            };
            noStyle: {
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
        }>>, {
            bordered: boolean;
            safe: boolean;
            warning: boolean;
            danger: boolean;
            rounded: boolean;
            noStyle: boolean;
            loading: boolean;
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
    }>>, {
        required: boolean;
        blurred: boolean;
    }>;
    MDrop: import("vue").DefineComponent<{
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
    MSlider: import("vue").DefineComponent<{
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
            noStyle: {
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
        }, {
            props: any;
            statusClass: import("vue").ComputedRef<string>;
            classes: import("vue").ComputedRef<string>;
        }, unknown, {}, {}, import("vue").DefineComponent<{
            safe: BooleanConstructor;
            warning: BooleanConstructor;
            danger: BooleanConstructor;
        }, unknown, unknown, {
            statusClass(): string;
        }, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
            safe: BooleanConstructor;
            warning: BooleanConstructor;
            danger: BooleanConstructor;
        }>>, {
            safe: boolean;
            warning: boolean;
            danger: boolean;
        }>, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
            bordered: {
                type: BooleanConstructor;
                required: false;
            };
            rounded: {
                type: BooleanConstructor;
                required: false;
            };
            noStyle: {
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
        }>>, {
            bordered: boolean;
            safe: boolean;
            warning: boolean;
            danger: boolean;
            rounded: boolean;
            noStyle: boolean;
            loading: boolean;
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
    MForm: import("vue").DefineComponent<{}, {
        invalids_IDs: string[];
        registerToInvalids: (inputId: string) => void;
        removeFromInvalids: (inputId: string) => void;
        checkValidation: () => boolean;
    }, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{}>>, {}>;
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
            default: boolean;
        };
        bordered: {
            type: BooleanConstructor;
            required: false;
            default: boolean;
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
        transformer: {
            type: FunctionConstructor;
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
            default: boolean;
        };
        bordered: {
            type: BooleanConstructor;
            required: false;
            default: boolean;
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
        transformer: {
            type: FunctionConstructor;
            required: false;
        };
    }>> & {
        "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
    }, {
        autoDirection: boolean;
        bordered: boolean;
        type: string;
        disabled: boolean;
    }>;
    MSection: import("vue").DefineComponent<{
        forward: {
            type: BooleanConstructor;
            required: false;
        };
    }, {
        props: any;
        sectionEl: any;
    }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
        forward: {
            type: BooleanConstructor;
            required: false;
        };
    }>>, {
        forward: boolean;
    }>;
    MText: import("vue").DefineComponent<{
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
    }>> & {
        "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
    }, {
        autoDirection: boolean;
        bordered: boolean;
        disabled: boolean;
        tags: boolean;
    }>;
};
export default components;
export { MNotes, MButton, MP, MMenu, MMenuItem, MPoppup, MDrop, MSlider, MForm, MInput, MSection, MText };
