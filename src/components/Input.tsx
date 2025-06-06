import { Input as HeroInput } from "@heroui/react";
import { ErrorMessage, Field, useField } from "formik";
import type { ReactNode } from "react";

interface IInput {
   name: string;
   label?: string;
   icon?: ReactNode;
   type?: 'text' | 'password' | 'number';
   isDisabled?: boolean;
   placeholder?: string;
   variant?: 'flat' | 'bordered' | 'underlined' | 'faded';
}

export const CustomInput = ({ name, label, icon, type = 'text', isDisabled = false, placeholder, variant = 'flat' }: IInput) => {
   const [_field, meta] = useField(name);
   return (
      <Field
         aria-label="input"
         name={name}
         type={type}
         isDisabled={isDisabled}
         variant={variant}
         label={label}
         labelPlacement="outside"
         placeholder={placeholder}
         autoComplete="off"
         size="sm"
         fullWidth
         isInvalid={!!meta.error && meta.touched}
         errorMessage={<ErrorMessage name={name} />}
         startContent={<span className="text-gray-500 text-small">{icon}</span>}
         as={HeroInput}
      />
   )
}

export const CustomInputChat = ({ name, label, icon, type = 'text', isDisabled = false, placeholder, variant = 'flat' }: IInput) => {
   return (
      <Field
         aria-label="input"
         name={name}
         type={type}
         isDisabled={isDisabled}
         variant={variant}
         label={label}
         labelPlacement="outside"
         placeholder={placeholder}
         autoComplete="off"
         size="sm"
         fullWidth
         startContent={<span className="text-gray-500 text-small">{icon}</span>}
         as={HeroInput}
      />
   )
}

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
   />
)