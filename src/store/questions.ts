import { createModule } from 'vuexok';
import store from '@/store/index';
import { defaultQuestions } from '@/utils/default-data';
import { TypeQuestion } from '@/types';
import formatDate from '@/utils/date';

const questionsModule = createModule(
  'questionsModule',
  {
    namespaced: true,
    state: {
      questions: defaultQuestions,
      isLoading: false,
      errors: undefined,
    },
    actions: {
      async addNewQuestion({ state }, question: TypeQuestion) {
        try {
          state.errors = undefined;
          state.isLoading = true;
          await new Promise((resolve) => setTimeout(resolve, 2000));
          // throw new Error('Internal Server Error!');
          state.questions.push({ ...question, date: formatDate(new Date()) });
        } catch (ex) {
          state.errors = ex;
        } finally {
          state.isLoading = false;
        }
      },
    },
  },
);

questionsModule.register(store);
export default questionsModule;
