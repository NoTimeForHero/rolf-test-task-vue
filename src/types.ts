/* eslint-disable newline-per-chained-call */
import * as Yup from 'yup';
import { ValidationError } from 'yup';
import yupLocaleRu from '@/utils/yup_locale_ru';

Yup.setLocale(yupLocaleRu);

export type TypeQuestion = {
  name: string,
  email: string,
  carBrand: string,
  carModel: string,
  text: string,
  date?: string,
};

export const QuestionValidation : Yup.SchemaOf<TypeQuestion> = Yup.object({
  name: Yup.string().min(2).max(30).matches(/[а-яА-Я]+/, 'Только русские буквы').required(),
  email: Yup.string().email().required(),
  carBrand: Yup.string().min(4).max(20).matches(/[a-zA-Z]+/, 'Только английские буквы').required(),
  carModel: Yup.string().min(4).max(20).matches(/[a-zA-Z]+/, 'Только английские буквы').required(),
  text: Yup.string().min(1).max(300).matches(/[\Wa-zA-Zа-яА-Я0-9]+/, 'Спецсимволы не разрешены').required(),
  date: Yup.string().notRequired(),
});

export const ValidateErrors = (question: TypeQuestion) : { isValid: boolean, errors: Record<string, string> } => {
  const fields = Object.fromEntries(Object.keys(QuestionValidation.fields).map((key) => [key, '']));
  try {
    QuestionValidation.validateSync(question, { abortEarly: false });
    return { isValid: true, errors: fields };
  } catch (ex) {
    if (ex.name !== 'ValidationError') throw ex;
    const errors = ex.inner as ValidationError[];
    const fieldsWithError = Object.fromEntries(errors.map((error) => [error.path, error.message]));
    return { isValid: false, errors: { ...fields, ...fieldsWithError } };
  }
};
