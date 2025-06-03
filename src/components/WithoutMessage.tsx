import { Image } from "@heroui/react";

export const WithoutMessage = () => (
    <div className="flex items-center h-full">
        <div className="w-full flex flex-col gap-4 items-center">
            <Image src="/llamada.png" width={80} height={80} alt="" />
            <h1 className="text-2xl leading-snug font-bold text-center">
                Aun no tienes
                <span className="drop-shadow-[0_0_1px_#006FEE] bg-gradient-to-bl from-blue-300 to-blue-950  bg-clip-text text-transparent leading-normal"> mensajes </span>
            </h1>
            <p className="text-xs text-gray-500">Comienza a chatear ahora mismo</p>
        </div>
    </div>
)