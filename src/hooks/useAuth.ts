import { create } from 'zustand';
import { fetchWithoutToken, fetchWithToken, fetchWithTokenImg } from '../assets/fetch';
import { notify } from '../components';

interface IUser {
	uid: string | null;
	name: string | null;
	email: string | null;
	img?: string | null;
}

interface IAuth {
	user: IUser;
	checking: boolean;
	isLoading: boolean;
	isUpdating: boolean;
	isImgLoading: boolean;
	logged: boolean;
	login: (email: string, password: string) => void;
	register: (name: string, email: string, password: string) => void;
	updateUser: (data: { uid: string; name?: string; email?: string }) => void;
	updateImage: (uid: string, file: FormData) => void; //--------------------------------------------
	validateToken: () => void;
	logout: () => void;
}

export const useAuth = create<IAuth>(set => ({
	user: { uid: null, name: null, email: null, img: null },
	checking: false,
	isLoading: false,
	isUpdating: false,
	isImgLoading: false,
	logged: false,

	login: async (email, password) => {
		try {
			set({ isLoading: true });
			const data = await fetchWithoutToken({ endpoint: '/auth/login', data: { email, password }, method: 'POST' });
			localStorage.setItem('token', data.token);
			set({ user: { uid: data.uid, name: data.name, email: data.email, img: data.img }, isLoading: false, logged: true });
		} catch (error) {
			set({ isLoading: false });
		}
	},

	register: async (name, email, password) => {
		try {
			set({ isLoading: true });
			const data = await fetchWithoutToken({ endpoint: '/auth/register', data: { name, email, password }, method: 'POST' });
			localStorage.setItem('token', data.token);
			set({ user: { uid: data.uid, name: data.name, email: data.email }, checking: false, isLoading: false, logged: true });
		} catch (error) {
			set({ isLoading: false });
		}
	},

	updateUser: async ({ uid, name, email }) => {
		try {
			set({ isUpdating: true });
			const data = await fetchWithToken({ endpoint: '/auth/update/' + uid, data: { name, email }, method: 'PUT' });
			set({ user: { uid, name: data.name, email: data.email, img: data.img }, isUpdating: false });
			notify.success('User updated');
		} catch (error) {
			set({ isUpdating: false });
		}
	},

	updateImage: async (uid, file) => {
		try {
			set({ isImgLoading: true });
			const data = await fetchWithTokenImg({ endpoint: '/auth/update/img/' + uid, method: 'POST', data: file });
			set({ user: { uid, name: data.name, email: data.email, img: data.img }, isImgLoading: false });
			notify.success('Image added');
		} catch (error) {
			set({ isImgLoading: false });
		}
	},

	validateToken: async () => {
		try {
			set({ checking: true });
			const token = localStorage.getItem('token');
			if (!token) {
				set({ checking: false, logged: false });
				return false;
			}
			const data = await fetchWithToken({ endpoint: '/auth/renew' });
			localStorage.setItem('token', data.token);
			set({ user: { uid: data.uid, name: data.name, email: data.email, img: data.img }, checking: false, logged: true });
			return true;
		} catch (error) {
			localStorage.removeItem('token');
			set({ checking: false, logged: false });
		}
	},

	logout: () => {
		localStorage.removeItem('token');
		set({ user: { uid: null, name: null, email: null, img: null }, checking: false, logged: false });
	},
}));
