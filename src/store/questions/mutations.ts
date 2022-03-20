import { StateType } from '@/store/questions/state';
import { TResult, TypeQuestion } from '@/types';

export const Mutations = {
  beginLoading: (state: StateType) : void => {
    state.errors = undefined;
    state.isLoading = true;
  },
  endLoading: (state: StateType, payload: TResult<TypeQuestion>) : void => {
    state.isLoading = false;
    state.errors = (payload.success) ? undefined : payload.error;
    if (payload.success) state.questions.push(payload.payload);
  },
};

export default Mutations;
