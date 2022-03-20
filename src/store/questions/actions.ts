import { TRef, TypeQuestion } from '@/types';
import formatDate from '@/utils/date';
import { chance } from '@/utils';
import { ModuleInstance } from 'vuexok';
import mutations from './mutations';

type TModMutations = ModuleInstance<{mutations: typeof mutations}>;
// type Context = ActionContext<StateType, unknown>;

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types, padded-blocks
export default function makeActions(context: TRef<TModMutations>) {

  const addNewQuestion = async (_ : unknown, question: TypeQuestion) : Promise<void> => {
    try {
      context.ref.mutations.beginLoading();
      await new Promise((resolve) => setTimeout(resolve, 1000));
      if (chance(0.4)) throw new Error('Internal Server Error!');
      const datedQuestion = { ...question, date: formatDate(new Date()) };
      context.ref.mutations.endLoading({ success: true, payload: datedQuestion });
    } catch (ex) {
      context.ref.mutations.endLoading({ success: false, error: ex });
    }
  };

  return { addNewQuestion };
}
