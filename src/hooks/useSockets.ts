import { io, Socket } from 'socket.io-client';
import { create } from 'zustand';

interface ISocket {
    socket: Socket | null;
    online: boolean;
    connectSocket: () => void;
    disconnectSocket: () => void;
    setOnline: (status: boolean) => void;
}

export const useSocket = create<ISocket>((set, get) => ({
    socket: null,
    online: false,
    connectSocket: () => {
        const token = localStorage.getItem('token');
        const socket = io(import.meta.env.VITE_BASE_URL, {
            transports: ['websocket'],
            autoConnect: true,
            forceNew: true,
            query: { 'access-token': token },
        });
        set({ socket })
    },

    disconnectSocket: () => {
        get().socket?.disconnect();
    },

    setOnline: status => set({ online: status })
}))
