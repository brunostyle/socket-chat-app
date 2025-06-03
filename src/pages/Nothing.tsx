import { Button, Image } from "@heroui/react";
import { IoLogoGithub } from "react-icons/io";

export const Nothing = () => (
   <div className="hidden sm:block sm:col-span-8">
      <div className="pattern flex items-center">
         <div className="w-full m-4 border-y-1 border-slate-900 backdrop-blur p-8 flex flex-col gap-4 items-center">
            <Image src="/llamada.png" width={80} height={80} alt="" />
            <h1 className="text-2xl leading-snug font-bold text-center">
               Tus ideas siempre a mano con
               <span className="drop-shadow-[0_0_1px_#006FEE] bg-gradient-to-bl from-blue-300 to-blue-950  bg-clip-text text-transparent leading-normal"> YourPhone </span>
            </h1>
            <p className="text-xs text-gray-500">Una app sencilla y confiable para escribir, organizar y recordar lo que importa</p>
            <Button as="a" href="https://github.com/brunostyle" target="_blank" size="sm" variant="bordered" radius="full" startContent={<IoLogoGithub />}>Github</Button>
         </div>
      </div>
   </div>
)