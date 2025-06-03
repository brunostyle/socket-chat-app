import { Spacer } from "@heroui/react"
import { Link } from "react-router-dom"
import { Form, Formik } from "formik"
import { CustomButton, CustomInput } from "../components"
import { IoMailOutline, IoLockClosedOutline, IoPersonOutline } from "react-icons/io5";
import { registerSchema } from "../assets/validations";
import type { IRegister } from "../assets/interfaces";
import { useAuth } from "../hooks";
import { Between } from "../styles";
import { LayoutAuth } from "../layout";

const initial: IRegister = { name: '', email: '', password: '' };

export const Register = () => {
	const { register, isLoading } = useAuth();
	const handleSubmit = (data: IRegister) => {
		register(data.name, data.email, data.password);
	}
	return (
		<LayoutAuth title="Crea una cuenta">
			<Formik initialValues={initial} onSubmit={handleSubmit} validationSchema={registerSchema}>
				<Form className="grid gap-4">
					<CustomInput variant="bordered" name="name" label="Nombre completo" placeholder="nombre" icon={<IoPersonOutline />} />
					<CustomInput variant="bordered" name="email" label="Correo electronico" placeholder="email@gmail.com" icon={<IoMailOutline />} />
					<CustomInput variant="bordered" type="password" name="password" label="Contraseña" placeholder="******" icon={<IoLockClosedOutline />} />
					<CustomButton type="submit" color="primary" isLoading={isLoading} startContent={!isLoading && <IoMailOutline />}>Crear cuenta</CustomButton>
				</Form>
			</Formik>
			<Spacer y={4} />
			<Between>
				<h4>¿Ya tienes cuenta?</h4>
				<Link to="/auth/login" className="text-purple-600">Inicia sesion</Link>
			</Between>
		</LayoutAuth>
	)
};