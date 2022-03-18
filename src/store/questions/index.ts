import { createModule } from 'vuexok';
import store from '@/store';
import state from '@/store/questions/state';
import actions from './actions';

const questionsModule = createModule(
  'questionsModule',
  {
    namespaced: true,
    state,
    actions,
  },
);

questionsModule.register(store);
export default questionsModule;
