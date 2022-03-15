<template>
  <div class="input-group col-6 pb-3">
    <input type="text" :class="{'is-invalid': prop.error?.length > 0}"
           class="form-control" :placeholder="prop.placeholder" v-model="vModel">
    <div class="invalid-feedback">{{error}}</div>
  </div>
</template>

<script lang="ts" setup>
import { computed, defineProps, defineEmits } from 'vue';

const prop = defineProps({
  modelValue: String,
  placeholder: String,
  error: {
    type: String,
    default: '',
  },
});
const emit = defineEmits(['update:modelValue']);

const vModel = computed({
  get: () => prop.modelValue as string,
  set: (value: string) => emit('update:modelValue', value),
});
</script>

<style scoped>

</style>
