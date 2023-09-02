<template>
  <MDrop class="MSELECT" ref="drop" unclicked>
    <template #summary>
      <MText
        v-if="multiple && Array.isArray(props.modelValue)"
        :id="id + '-search'"
        tags
        v-model="tags"
        v-model:text-value="searchString"
        @blur="handleBlur($event)"
        @focus="handleFocus()"
        @keyup.enter="handleArrayInput()"
        @keyup.delete="handleArrayInput('backspace')"
        :placeholder="placeholder"
        :bordered="bordered"
        :pattern="pattern"
        :invalid-message="invalidMessage"
        :validMessage="validMessage"
        :transformer="transformer"
        :label="label"
        :disabled="disabled"
        :maxlength="maxlength"
      />
      <MInput
        v-else
        v-model="searchString"
        :id="id + '-search'"
        @blur="handleBlur($event)"
        @focus="handleFocus()"
        @keyup="handleStringInput()"
        :placeholder="placeholder"
        :bordered="bordered"
        :pattern="pattern"
        :invalid-message="invalidMessage"
        :validMessage="validMessage"
        :transformer="transformer"
        :label="label"
        :disabled="disabled"
      >
        <template #start>
          <slot name="start"></slot>
        </template>
        <template #end>
          <slot name="end"></slot>
        </template>
      </MInput>
    </template>
    <!-- Component options -->
    <template v-for="(option, i) of options">
      <div
        v-if="
          !searchString ||
          option.label?.toLowerCase().includes(searchString.toLowerCase())
        "
        @click="option.disabled ? null : handleClick(option)"
        :class="{
          'm-selected': modelValue.includes(option.value),
          'm-disabled': option.disabled,
        }"
      >
        {{ option.label }}
      </div>
    </template>
  </MDrop>
</template>

<script setup lang="ts">
import { ref, computed, getCurrentInstance, onMounted, watch } from "vue";
import MInput from "./MInput.vue";
import { MDrop, MText } from ".";

export interface OptionAttrs {
  selected?: boolean;
  disabled?: boolean;
  value: string;
  label: string;
}

const emit = defineEmits(["update:modelValue"]);
const props = defineProps<{
  options: OptionAttrs[];
  modelValue: string[] | string;
  multiple?: boolean;
  id: string;
  placeholder?: string;
  bordered?: boolean;

  freeOptions?: boolean;
  pattern?: RegExp;
  invalidMessage?: string;
  validMessage?: string;
  transformer?: (s: string) => string;
  label?: string;
  disabled?: boolean;
  maxlength?: number;
}>();

const labels = computed(() => props.options.map((opt) => opt.label));
const values = computed(() => props.options.map((opt) => opt.value));

function getOptionByLabel(label: string) {
  return props.options.find((opt) => opt.label === label);
}

function getOptionByValue(value: string) {
  return props.options.find((opt) => opt.value === value);
}

const searchString = ref("");
const tags = ref([...props.modelValue]);
const drop = ref();

function handleStringInput() {
  const option = {
    value: getOptionByLabel(searchString.value)?.value || searchString.value,
    label: searchString.value,
  };
  submitOption(option);
  checkValidate();
}

function handleArrayInput(method?: "backspace") {
  let newOptions: OptionAttrs[] = [];
  tags.value.forEach((tag) => {
    const option = {
      value: getOptionByLabel(tag)?.value || tag,
      label: tag,
    };
    newOptions.push(option);
  });
  submitOptions(newOptions, method);
  searchString.value = "";
  checkValidate();
}

watch(
  () => props.modelValue,
  (newArr) => {
    if (props.multiple)
      tags.value = (newArr as string[]).map(
        (val) => getOptionByValue(val)?.label || val
      );
  }
);

function handleFocus() {
  drop.value.openContent();
}

const handleBlur = (e: any) => {
  setTimeout(() => {
    drop.value.shrink();
  }, 200);

  if (!props.multiple) {
    handleStringInput();
  }
};

const handleClick = (option: OptionAttrs) => {
  if (props.multiple && Array.isArray(props.modelValue)) {
    submitOptions(option, "click");
  } else {
    submitOption(option);
  }
  checkValidate();
};

function submitOption(option: OptionAttrs) {
  if (!props.freeOptions && !values.value.includes(option.value)) return;
  if (props.pattern && !props.pattern.test(option.value)) return;
  emit("update:modelValue", option.value);
  searchString.value = option.label;
}

function submitOptions(
  option: OptionAttrs | OptionAttrs[],
  method?: "backspace" | "click"
) {
  let newOptions: OptionAttrs[] = [];
  if (Array.isArray(option)) {
    newOptions = [...option];
  } else {
    newOptions[0] = option;
  }

  let currentOptions = new Set([...props.modelValue]);
  if (method === "backspace" && !searchString.value) {
    let a = Array.from(currentOptions);
    a.pop();
    currentOptions = new Set(Array.from(a));
  } else {
    newOptions.forEach((newOption) => {
      if (!props.freeOptions && !values.value.includes(newOption.value)) return;
      if (props.pattern && !props.pattern.test(newOption.value)) return;

      if (method === "click" && currentOptions.has(newOption.value))
        currentOptions.delete(newOption.value);
      else currentOptions.add(newOption.value);
    });
  }
  const arrOptions = Array.from(currentOptions);
  if (props.maxlength && arrOptions.length > props.maxlength) return;
  emit("update:modelValue", arrOptions);
}

// MForm integration
onMounted(() => {
  if (props.pattern) {
    (formParent as any)?.value?.exposed.registerToInvalids(props.id);
  }
  const selectedOption = props.options.filter((opt) => opt.selected)[0];
  if (selectedOption && !props.multiple) submitOption(selectedOption);
  if (selectedOption && props.multiple) submitOptions(selectedOption);
});

function isValid() {
  return props.multiple ? props.modelValue.length > 0 : props.modelValue !== "";
}

const formParent = computed(() => {
  let parent = getCurrentInstance()?.parent;
  while (parent && parent.vnode.el?.nodeName != "FORM") {
    parent = parent.parent;
  }
  return parent;
});

function checkValidate() {
  (formParent as any)?.value?.exposed.removeFromInvalids(props.id);
}
</script>

<style lang="scss" scoped>
@use "../sass/index" as *;
.MSELECT {
  position: relative;
  &:has(.m-bordered) {
    background: none !important;
  }
  :deep(summary) {
    padding: 0 !important;
  }
  :deep(section) {
    position: absolute;
    width: 100%;
    padding: 0 !important;
  }
  summary + section div {
    padding: 0.5rem 1rem;
    cursor: pointer;
    &.m-selected {
      background-color: m-change-color("text", $alpha: 0.1);
    }
    &.m-disabled {
      opacity: 50%;
    }
  }
  .MINPUT.m-disabled {
    :deep(> div:first-of-type:after) {
      background-color: transparent;
      backdrop-filter: none;
    }
  }
}
</style>
