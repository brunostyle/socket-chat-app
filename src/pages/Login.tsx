import { Checkbox } from "@heroui/react"
import { useEffect, useState } from "react";
import { Form, Formik } from "formik"
import { CustomButton, CustomInput } from "../components"
import { IoMailOutline, IoLogoGoogle, IoLockClosedOutline } from "react-icons/io5";
import { loginSchema } from "../assets/validations"
import type { ILogin } from "../assets/interfaces"
import { useAuth } from "../hooks";

const storage = 'login-yourphone';

export const Login = () => {
	const { login, isLoading } = useAuth();
	const [isSelected, changeIsSelected] = useState(!!localStorage.getItem(storage));
	const [initial, changeInitial] = useState({ email: '', password: '' });

	useEffect(() => {
		changeInitial(JSON.parse(localStorage.getItem(storage)!) ?? initial);
	}, [])

	const handleSubmit = (data: ILogin) => {
		login(data.email, data.password);
		if (isSelected) localStorage.setItem(storage, JSON.stringify(data))
	}

	const handleChange = () => {
		changeIsSelected(!isSelected);
		if (isSelected) localStorage.removeItem(storage);
	}

	return (
		<Formik enableReinitialize initialValues={initial} onSubmit={handleSubmit} validationSchema={loginSchema}>
			<Form className="grid gap-4">
				<CustomInput variant="bordered" name="email" label="Correo electronico" placeholder="email@gmail.com" icon={<IoMailOutline />} />
				<CustomInput variant="bordered" type="password" name="password" label="Contraseña" placeholder="******" icon={<IoLockClosedOutline />} />
				<Checkbox name="remember" isSelected={isSelected} onValueChange={handleChange}>Recuérdame</Checkbox>
				<CustomButton type="submit" color="primary" isLoading={isLoading} startContent={!isLoading && <IoMailOutline />}>Continuar con correo</CustomButton>
				<CustomButton variant="bordered" startContent={<IoLogoGoogle />}>Continuar con Google</CustomButton>
			</Form>
		</Formik>
	)
};