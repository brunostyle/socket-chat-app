import { Button, Spinner } from "@heroui/react";
import type { ReactNode } from "react";

interface IButton {
    children: ReactNode;
    startContent?: ReactNode;
    className?: string;
    fullWidth?: boolean;
    isLoading?: boolean;
    isDisabled?: boolean;
    type?: 'button' | 'submit' | 'reset';
    size?: 'sm' | 'md' | 'lg';
    color?: 'default' | 'primary' | 'secondary' | 'success' | 'warning' | 'danger';
    variant?: 'solid' | 'bordered' | 'light' | 'flat' | 'faded' | 'shadow' | 'ghost';
    onPress?: () => void;
}

export const CustomButton = ({
    children,
    onPress,
    className,
    startContent,
    type = 'button',
    size = 'sm',
    color = 'default',
    variant = 'solid',
    fullWidth = false,
    isLoading = false,
    isDisabled = false,
}: IButton) => (
    <Button
        fullWidth={fullWidth}
        isLoading={isLoading}
        spinner={<Spinner variant="spinner" color="white" size="sm" />}
        isDisabled={isDisabled}
        className={className}
        type={type}
        size={size}
        color={color}
        startContent={startContent}
        variant={variant}
        onPress={onPress}
    >
        {children}
    </Button>
);