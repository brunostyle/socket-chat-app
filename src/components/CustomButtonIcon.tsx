import { Button } from "@heroui/react";
import type { ReactNode } from "react";

interface IButton {
    children: ReactNode;
    size?: 'sm' | 'md' | 'lg';
    color?: 'default' | 'primary' | 'secondary' | 'success' | 'warning' | 'danger';
    type?: 'button' | 'submit' | 'reset';
    variant?: 'solid' | 'bordered' | 'light' | 'flat' | 'faded' | 'shadow' | 'ghost';
    onPress?: () => void;
}

export const CustomButtonIcon = ({ children, onPress, type = 'button', size = 'sm', color = 'default', variant = 'flat' }: IButton) => (
    <Button
        isIconOnly
        size={size}
        type={type}
        color={color}
        variant={variant}
        onPress={onPress}
    >
        {children}
    </Button>
);