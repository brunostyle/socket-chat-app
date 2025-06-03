import { IoImageOutline } from "react-icons/io5";
import { CustomButtonIcon } from './CustomButtonIcon';

interface IProps {
	id: string;
	onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const File = ({ id, onChange }: IProps) => {
	const handleClick = () => {
		document.getElementById(id)?.click();
	};
	return <>
		<input onChange={onChange} type="file" id={id} style={{ display: 'none' }} />
		<CustomButtonIcon onPress={handleClick}><IoImageOutline /></CustomButtonIcon>
	</>
}