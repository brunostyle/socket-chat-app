import { BiImages } from 'react-icons/bi';
import { Button, Loading, styled } from '@nextui-org/react';

interface IFile {
	onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
	isLoading: boolean;
}

export const File = ({ onChange, isLoading }: IFile) => (
	<Input auto css={{px: '1em', bg: '#2B2F31'}}>
		{isLoading ? <Loading size="xs" color="white" type="spinner" /> : <BiImages />}
      <input onChange={onChange} type="file" name="file" />
	</Input>
);

const Input = styled(Button, {
	position: 'relative',
	'input': {
		position: 'absolute',
		top: 0,
		left: 0,
		width: '100%',
		height: '100%',
		opacity: 0,
	}
});
