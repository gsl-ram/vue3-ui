<template>
  <button :disabled="disabled" :class="dynamicClass">
    <span v-if="text" class="vue3-ui-button-text">{{ text }}</span>
    <slot v-else />
  </button>
</template>

<script setup lang="ts">
import { computed } from "vue";

const props = defineProps({
  text: {
    type: String,
    default: "",
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  cssClass: {
    type: String,
    default: "",
  },
});

const dynamicClass = computed(() => {
  return {
    "vue3-ui-button": true,
    "vue3-ui-button-disabled": props.disabled,
    [props.cssClass]: props.cssClass,
  };
});
</script>
<style>
.vue3-ui-button {
  background-color: #333d9b;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
}

.vue3-ui-button-disabled {
  background-color: #333d9b;
  opacity: 0.5;
  cursor: not-allowed;
}

.vue3-ui-button-text {
  font-size: 16px;
}
</style>