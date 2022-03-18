<template>
  <div class="root">
    <div class="header">Задать вопрос</div>
    <div class="alert alert-danger" v-if="questionsModule.state.errors">{{questionsModule.state.errors}}</div>
    <div class="row">
      <TextField class="col-6 pb-2" placeholder="Имя" v-model="question.name" :error="errors.name" />
      <TextField class="col-6 pb-2" placeholder="EMail" v-model="question.email" :error="errors.email" />
      <TextField class="col-6 pb-2" placeholder="Марка авто" v-model="question.carBrand" :error="errors.carBrand" />
      <TextField class="col-6 pb-2" placeholder="Модель авто" v-model="question.carModel" :error="errors.carModel" />
      <div class="input-group col-12 pb-2">
        <div class="w-100"><textarea class="form-control" v-model="question.text" /></div>
        <div class="text-danger">{{errors.text}}</div>
      </div>
    </div>
    <div class="controls mt-1">
      <div class="spinner-border" role="status" v-if="questionsModule.state.isLoading">
        <span class="sr-only">Loading...</span>
      </div>
      <button v-else class="btn btn-primary" :disabled="!canSubmit" @click="onSubmit">Отправить</button>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { computed, reactive, ref } from 'vue';
import { TypeQuestion, ValidateErrors } from '@/types';
import TextField from '@/components/simple/TextField.vue';
import questionsModule from '@/store/questions';

const question = reactive<TypeQuestion>({
  // name: '',
  // email: '',
  // carBrand: '',
  // carModel: '',
  // text: '',
  name: 'Пример',
  email: 'mail@example.org',
  carBrand: 'Example',
  carModel: 'Example',
  text: 'Text',
});

// Валидация при вводе любой строки
// const errors = computed<TypeQuestion>(() => ValidateErrors(question).errors as TypeQuestion);

// Валидация при нажатии кнопки отправить
const errors = ref<TypeQuestion>({
  name: '',
  email: '',
  carBrand: '',
  carModel: '',
  text: '',
});

const canSubmit = computed(() => Object.values(question).every((field) => (field?.length ?? 0) > 0));

const onSubmit = () => {
  // Валидация при нажатии на кнопку
  const validation = ValidateErrors(question);
  errors.value = validation.errors as TypeQuestion;
  if (!validation.isValid) return;

  questionsModule.actions.addNewQuestion(question);
};

</script>

<style scoped lang="scss">

$input-margin: 10px;

.root {
  max-width: 500px;
}

.header {
  margin: 10px 0;
  font-size: 20px;
  font-weight: bold;
  color: royalblue;
}

.textarea {
  margin: $input-margin !important;
  // Костыль, чтобы избежать головной боли с переопределением внтуренних стилей MUI
  width: calc(100% - #{$input-margin} * 2);
}

.buttons {
  display: flex;
  justify-content: flex-end;
  margin: $input-margin;
}

.spinner {
  display: flex;
  justify-content: center;
  margin: $input-margin;
}
</style>
