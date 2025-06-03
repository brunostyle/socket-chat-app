import { useDisclosure, Divider, Spacer, Progress, Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Card, CardBody } from '@heroui/react';
import { Flex, Menu, Subtitle, Title } from '../styles';
import { CustomInput, CustomButtonIcon, CustomButton, FileImage } from '../components';
import { IoTrashOutline, IoPersonOutline, IoMailOutline, IoLockClosedOutline, IoSaveOutline, IoCloseOutline, IoExitOutline, IoArrowBackOutline } from 'react-icons/io5';
import { Form, Formik, type FormikHelpers } from 'formik';
import { updateSchema } from '../assets/validations';
import type { IUpdate } from '../assets/interfaces';
import { useAuth, useChat } from '../hooks';

const initial: IUpdate = { name: '', email: '' }

interface IChat {
	setChat: React.Dispatch<React.SetStateAction<boolean>>;
}

export const Profile = ({ setChat }: IChat) => {
	const { isOpen: isOpenModal, onOpen: onOpenModal, onClose: onCloseModal } = useDisclosure();
	const { user, updateUser, logout, isUpdating } = useAuth();
	const { clearChat, contactActive } = useChat();

	const exit = () => {
		logout();
		clearChat();
	}

	const handleSubmit = ({ name, email }: IUpdate, helpers: FormikHelpers<IUpdate>) => {
		helpers.resetForm();
		if (name) return updateUser({ uid: user.uid!, name });
		if (email) return updateUser({ uid: user.uid!, email });
	}

	const handleDelete = () => {
		onCloseModal();
		// deleteUser(user!)
	};

	return (
		<Card style={{ background: '#101010' }} className={`${contactActive ? 'hidden' : 'col-span-12'} sm:block sm:col-span-4`}>
			<Menu>
				<div>
					<Title>Perfil</Title>
					<Subtitle>Editar informacion</Subtitle>
				</div>
				<Flex>
					<CustomButtonIcon onPress={onOpenModal}><IoTrashOutline /></CustomButtonIcon>
					<CustomButtonIcon onPress={exit}><IoExitOutline /></CustomButtonIcon>
					<CustomButtonIcon onPress={() => setChat(true)}><IoArrowBackOutline /></CustomButtonIcon>
				</Flex>
			</Menu>
			<CardBody>
				<FileImage />
				<Formik enableReinitialize initialValues={initial} onSubmit={handleSubmit} validationSchema={updateSchema}>
					<Form className="grid gap-4">
						<CustomInput name="name" label="Nombre" placeholder={user?.name!} variant="bordered" icon={<IoPersonOutline />} />
						<CustomInput name="email" label="Email" placeholder={user?.email!} variant="bordered" icon={<IoMailOutline />} />
						<CustomInput name="password" label="Comtraseña" placeholder="******" variant="bordered" icon={<IoLockClosedOutline />} />
						<Spacer />
						<CustomButton type="submit" color="primary" startContent={<IoSaveOutline />}>Guardar</CustomButton>
						{(isUpdating) && <Progress size="sm" className="mt-4" isIndeterminate />}
					</Form>
				</Formik>
			</CardBody>
			<Modal isOpen={isOpenModal} onClose={onCloseModal} size="xs" placement="center">
				<ModalContent>
					<ModalHeader>
						<div>
							<Title>Eliminar perfil</Title>
							<Spacer />
							<Subtitle>Esta acción no se puede deshacer.</Subtitle>
						</div>
					</ModalHeader>
					<Divider />
					<ModalBody>
						<p className="text-sm">Todos tus datos serán eliminados de forma permanente.</p>
					</ModalBody>
					<ModalFooter>
						<CustomButton variant="flat" onPress={onCloseModal} startContent={<IoCloseOutline />}>Cancelar</CustomButton>
						<CustomButton color="danger" onPress={handleDelete} startContent={<IoTrashOutline />}>Eliminar</CustomButton>
					</ModalFooter>
				</ModalContent>
			</Modal>
		</Card>
	)
}