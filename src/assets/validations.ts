import * as Yup from 'yup'

export const loginSchema = Yup.object({
   email: Yup.string()
     .required('The email is required')
     .trim()
     .email('The email is not valid'),
   password: Yup.string()
     .required('The password is required')
     .min(6, 'The password must be at least 6 characters')
     .max(20, 'The password must not have more than 20 characters')
})

export const registerSchema = Yup.object({
   name: Yup.string()
     .required('The name is required')
     .trim()
     .min(3, 'The name must be at least 3 characters')
     .max(20, 'The Name must not have more than 20 characters'),
   email: Yup.string()
     .required('The email is required')
     .trim()
     .email('The email is not valid'),
   password: Yup.string()
     .required('The password is required')
     .min(6, 'The password must be at least 6 characters')
     .max(20, 'The password must not have more than 20 characters')
})

export const updateSchema = Yup.object({
   name: Yup.string()
     .trim()
     .min(3, 'The name must be at least 3 characters')
     .max(20, 'The Name must not have more than 20 characters'),
   email: Yup.string()
     .trim()
     .email('The email is not valid'),
})

export const messageSchema = Yup.object({
  message: Yup.string()
    .required('The message is required')
    .trim()
})