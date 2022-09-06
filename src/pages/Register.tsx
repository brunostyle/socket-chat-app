import { Button, Loading, Text } from '@nextui-org/react';
import { Formik } from 'formik';
import { Link } from 'react-router-dom';
import { IRegister } from '../assets/interfaces';
import { registerSchema } from '../assets/validations';
import { Background, Input, Title, Form, InputPassword } from '../components';
import { useAuth } from '../hooks';

export const Register = () => {
	const { register , isLoading} = useAuth();
	const initial: IRegister = { name: '', email: '', password: '' };

	const handleSubmit = (data: IRegister) => {
		register(data.name, data.email, data.password)
	};
	
	return (
		<Background>
			<Formik initialValues={initial} onSubmit={handleSubmit} validationSchema={registerSchema}>
				<Form>
					<Title>Create an account here!</Title>
					<Input name="name" label="Name" />
					<Input name="email" label="Email" />
					<InputPassword name="password" label="Password" />
					<Button type="submit" icon={isLoading && <Loading color="white" type="spinner" />}>Sign Up</Button>
					<Text size="1em" color="white">
						You already have an account? <Link to="/auth">Sign In</Link>
					</Text>
				</Form>
			</Formik>
		</Background>
	);
};
