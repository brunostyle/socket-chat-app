import { Col, Row, styled, Text } from '@nextui-org/react';
import texture from '../assets/img/texture.png';
import background from '../assets/img/background.jpg';
import { Form as Formulary } from 'formik';

export const Menu = styled(Row, {
	gap: '1em',
	backgroundColor: '$backgroundContrast',
	outline: '2px solid $background',
	padding: '.5em 1em',
});

export const Title = styled(Text, {
	fontSize: '2em',
	fontWeight: 'bold',
	textGradient: '45deg, $blue600, $pink600',
});

export const Message = styled(Text, {
	backgroundColor: '$backgroundContrast',
	alignSelf: 'start',
	opacity: .8,
	padding: '.5em',
	borderRadius: '.5em',
	width: 'auto',
	minWidth: '20%',
	maxWidth: '80%',
});

export const NewMessage = styled(Message, {
	backgroundColor: '$primary',
	alignSelf: 'end',
});

export const Center = styled(Col, {
	height: '100%',
	padding: '1em',
	display: 'flex',
	gap: '2em',
	flexDirection: 'column',
	justifyContent: 'center',
	alignItems: 'center',
});

export const Collapse = styled(Col, {
	padding: '.5em',
	display: 'flex',
	flexDirection: 'column',
	gap: '.5em',
	overflowY: 'scroll',
});

export const ContainerCollapse = styled(Col, {
	height: '100vh',
	display: 'grid',
	gridTemplateRows: 'auto 1fr auto',
});

export const Form = styled(Formulary, {
	display: 'grid',
	gap: '2em'
});

export const Texture = styled(Col, {
	height: '100%',
	backgroundImage: `url(${texture})`,
	backgroundBlendMode: 'soft-light',
	backgroundColor: '$opacity',
});

export const Background = styled(Col, {
	width: '100%',
	height: '100%',
	display: 'grid',
	placeContent: 'center',
	padding: '1em',
	gap: '2em',
	textAlign: 'center',
	backgroundImage: `url(${background})`,
	backgroundRepeat: 'no-repeat',
	backgroundPosition: 'center',
	backgroundSize: 'cover',
	backgroundBlendMode: 'soft-light',
	backgroundColor: '$opacity',
});
