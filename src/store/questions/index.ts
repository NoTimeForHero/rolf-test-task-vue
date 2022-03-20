import { createModule } from 'vuexok';
import store from '@/store';
import state from '@/store/questions/state';
import { TRef } from '@/types';
import mutations from './mutations';
import makeActions from './actions';

const refHolder : TRef<any> = { ref: undefined };

const questionsModule = createModule(
  'questionsModule',
  {
    namespaced: true,
    mutations: {
      ...mutations,
    },
    state,
    actions: {
      // К сожалению выражение ...makeActions(questionsModule) не сработает
      ...makeActions(refHolder),
    },
  },
);
refHolder.ref = questionsModule;

questionsModule.register(store);
export default questionsModule;
