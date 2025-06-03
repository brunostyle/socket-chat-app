import type { ChangeEvent } from 'react';
import { Avatar, Button, Spinner } from '@heroui/react';
import { IoCameraOutline } from 'react-icons/io5';
import { notify } from '../components';
import { useAuth } from '../hooks';

export const FileImage = () => {
    const { user: { uid, name, img }, updateImage, isImgLoading } = useAuth();

    const handleImage = (e: ChangeEvent<HTMLInputElement>) => {
        const file = new FormData();
        const [files] = e.target.files!;
        const extension = files.name.split('.').pop();
        if (!['jpg', 'jpeg', 'png', 'jfif'].includes(extension!)) return notify.error('Extension no valida')
        file.append('file', files);
        updateImage(uid!, file)
    };

    const handleClick = () => {
        document.getElementById('file-input')?.click();
    };
    
    return (
        <div className="flex justify-center my-4 relative">
            <Avatar isBordered showFallback color="primary" name={name?.charAt(0).toUpperCase()} src={img!} className="w-32 h-32 text-2xl" />
            <input type="file" id="file-input" style={{ display: 'none' }} onChange={handleImage} />
            <Button onPress={handleClick} isIconOnly size="sm" color="primary" radius="full" className="absolute bottom-0 right-1/3 border-small border-foreground-50">
                {isImgLoading ? <Spinner size="sm" color="white" variant="spinner" /> : <IoCameraOutline />}
            </Button>
        </div>
    );
}