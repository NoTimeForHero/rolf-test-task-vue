<template>
  <div class="root">
    <div class="header">
      <span>{{question.name}}</span>
      <span class="addInfo">{{question.carBrand}} {{question.carModel}}</span>
    </div>
    <div class="datetime">{{question.date}}</div>
    <div class="message">{{question.text}}</div>
  </div>
</template>

<script lang="ts" setup>
import { defineProps, PropType, toRefs } from 'vue';
import { TypeQuestion } from '@/types';

const props = defineProps({
  question: Object as PropType<TypeQuestion>,
});

const { question } = toRefs(props);
</script>

<style scoped lang="scss">

.root {
  margin: 30px 0;
  $text-margin-left: 15px;

  .header {
    font-size: 18px;
    font-weight: bold;

    & .addInfo {
      display: inline-block;
      color: darkred;
      padding-left: 15px;
    }
  }

  & .datetime {
    color: gray;
    margin-top: 5px;
    margin-left: $text-margin-left;
    font-weight: normal;
    font-size: 14px;
  }

  .message {
    margin-top: 10px;
    margin-left: $text-margin-left;
  }
}
</style>
