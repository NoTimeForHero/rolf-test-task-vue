<template>
  <div class="app container">
    <div class="header">Вопросы по автомобилям</div>
    <Question v-for="(question,key) in questionsModule.state.questions" :question="question" :key="key" />
    <AddQuestion />
  </div>
</template>

<script lang="ts" setup>
import questionsModule from '@/store/questions';
import AddQuestion from '@/components/AddQuestion.vue';
import Question from './Question.vue';

</script>

<style lang="scss" scoped>
.app {
  padding: 15px 0;
}

.header {
  font-size: 24px;
  font-weight: bold;
  color: royalblue;
}
</style>
