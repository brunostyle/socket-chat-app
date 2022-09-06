import { Toaster } from 'react-hot-toast';

const styleToaster = {
	background: 'rgba(0,0,0,.5)',
	backdropFilter: 'blur(25px)',
	boxShadow: '0 0 3px #fff',
	color: '#fff',
};

export const Toast = () => <Toaster position="top-center" toastOptions={{ style: styleToaster }} />;
