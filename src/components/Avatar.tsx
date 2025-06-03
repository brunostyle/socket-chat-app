import { User } from "@heroui/react";

type Props = React.HTMLAttributes<HTMLDivElement>

interface IProps extends Props {
    name: string;
    email: string;
    image?: string;
    color?: 'default' | 'primary' | 'secondary' | 'success' | 'warning' | 'danger';
}

export const Avatar: React.FC<IProps>   = ({ image, color = 'primary', name, email }: IProps) => (
    <User avatarProps={{ color, size: 'sm', src: image, name: name.charAt(0).toUpperCase() }} name={name} description={email} />
)