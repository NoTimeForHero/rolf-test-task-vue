import { StateType } from '@/store/questions/state';
import { TypeQuestion } from '@/types';
import formatDate from '@/utils/date';
import { chance } from '@/utils';
import { ActionContext } from 'vuex';

type Context = ActionContext<StateType, unknown>;

export const addNewQuestion = async ({ state } : Context, question: TypeQuestion) : Promise<void> => {
  try {
    state.errors = undefined;
    state.isLoading = true;
    await new Promise((resolve) => setTimeout(resolve, 1000));
    if (chance(0.4)) throw new Error('Internal Server Error!');
    state.questions.push({ ...question, date: formatDate(new Date()) });
  } catch (ex) {
    state.errors = ex;
  } finally {
    state.isLoading = false;
  }
};

export default { addNewQuestion };
