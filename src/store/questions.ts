import { createModule } from 'vuexok';
import store from '@/store/index';
import { defaultQuestions } from '@/utils/default-data';

const questionsModule = createModule(
  'questionsModule',
  {
    namespaced: true,
    state: {
      questions: defaultQuestions,
      isLoading: false,
      errors: undefined,
    },
    mutations: {

    },
    actions: {

    },
  },
);

questionsModule.register(store);
export default questionsModule;
