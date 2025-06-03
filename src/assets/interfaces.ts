export interface ILogin { 
   email: string;
   password: string; 
}

export interface IRegister { 
   name: string;
   email: string;
   password: string; 
}

export interface IUpdate { 
   name: string;
   email: string;
}

export interface IMessage { 
   _id: string;
   from: string;
   to: string;
   message: string; 
   createdAt: Date;
   updatedAt: Date;
}

export interface IUser {
   uid?: string;
   name: string;
   email: string;
   online: boolean;
   img?: string;
}
