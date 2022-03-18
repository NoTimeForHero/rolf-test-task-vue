import { defaultQuestions } from '@/utils/default-data';

const state = {
  questions: defaultQuestions,
  isLoading: false,
  errors: undefined,
};

export type StateType = typeof state;
export default state;
