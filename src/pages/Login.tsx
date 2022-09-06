import { Button, Loading, Text } from '@nextui-org/react';
import { Formik } from 'formik';
import { Link } from 'react-router-dom';
import { ILogin } from '../assets/interfaces';
import { loginSchema } from '../assets/validations';
import { Background, Input, Title, Form, InputPassword } from '../components';
import { useAuth } from '../hooks';

export const Login = () => {
	const { login, isLoading } = useAuth();	
	const initial: ILogin = { email: '', password: '' };

	const handleSubmit = (data: ILogin) => {
		login(data.email, data.password);
	};

	return (
		<Background>
			<Formik initialValues={initial} onSubmit={handleSubmit} validationSchema={loginSchema}>
				<Form>
					<Title>Welcome to YourPhone</Title>
					<Input name="email" label="Email" />
					<InputPassword name="password" label="Password" />
					<Button type="submit" icon={isLoading && <Loading color="white" type="spinner" />}>Sign In</Button>
					<Text size="1em" color="white">
						You do not have an account? <Link to="register">Sign Up</Link>
					</Text>
				</Form>
			</Formik>
		</Background>
	);
};
