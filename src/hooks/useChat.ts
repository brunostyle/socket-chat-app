import { create } from 'zustand';
import { fetchWithToken } from '../assets/fetch';
import type { IMessage, IUser } from '../assets/interfaces'

interface IChat {
   contactActive: IUser | null;
   users: IUser[];
   messages: IMessage[];
   isLoading: boolean;
   isLoadingUsers: boolean;
   setUsers: (users: IUser[]) => void;
   activeChat: (contactActive: IUser) => void;
   exitChat: () => void;
   newMessage: (message: IMessage) => void;
   loadMessages: (uid: string) => void;
   clearChat: () => void;
}

export const useChat = create<IChat>((set, get) => ({
   contactActive: null,
   users: [],
   messages: [],
   isLoadingUsers: true,
   isLoading: false,

   setUsers: users => set({ users, isLoadingUsers: false }),

   activeChat: contactActive => set({ contactActive, messages: [] }),

   exitChat: () => set({ contactActive: null }),

   clearChat: () => set({ contactActive: null, users: [], messages: [] }),

   newMessage: message => {
      if (get().contactActive?.uid === message.from || get().contactActive?.uid === message.to) {
         set({ messages: [...get().messages, message] })
      }
   },

   loadMessages: async (uid) => {
      try {
         set({ isLoading: true })
         const { messages } = await fetchWithToken({ endpoint: '/messages/' + uid, method: 'GET' })
         set({ messages, isLoading: false })
      } catch (error) {
         set({ isLoading: false })
      }
   }
}));