import * as yup from 'yup';

export const requestValidationSchema = yup.object().shape({
  name: yup.string().required(),
  email: yup.string().required(),
  phone: yup.string().required(),
  additional_info: yup.string().nullable(),
  lead_form_id: yup.string().nullable(),
});
