import { Input as NextInput } from "@nextui-org/react";
import { ErrorMessage, Field } from "formik";

interface IInput {
   name: string;
   label: string;
}

export const Input = ({name, label}:IInput) => (
   <Field  
      aria-label="input"
      name={name}
      placeholder={label} 
      color="primary"
      autoComplete="off"
      bordered
      clearable 
      fullWidth 
      helperColor="error"
      helperText={<ErrorMessage name={name} />}
      as={NextInput}
   />
)

export const InputPassword = ({name, label}:IInput) => (
   <Field  
      aria-label="input"
      name={name}
      placeholder={label} 
      color="primary"
      autoComplete="off"
      bordered
      clearable 
      fullWidth 
      helperColor="error"
      helperText={<ErrorMessage name={name} />}
      as={NextInput.Password}
   />
)

export const InputChat = ({name, label}:IInput) => (
   <Field  
      aria-label="input"
      name={name}
      placeholder={label} 
      autoComplete="off"
      clearable 
      autoFocus
      fullWidth 
      as={NextInput}
   />
)

export const InputUpdate = ({name, label}:IInput) => (
   <Field  
      aria-label="input"
      name={name}
      placeholder={label} 
      autoComplete="off"
      clearable 
      fullWidth 
      helperColor="error"
      helperText={<ErrorMessage name={name} />}
      as={NextInput}
   />
)