import { Card, CardBody, CardHeader, Image } from "@heroui/react";
import { Container } from "../styles";
import type { ReactNode } from "react";

interface ILayout {
   children: ReactNode;
   title: string;
}

export const LayoutAuth = ({ children, title }: ILayout) => (
   <div className="pattern">
      <Container className="grid grid-cols-2 gap-4 place-content-center">
         <div className="flex justify-center items-center">
            {/* <Image disableSkeleton className="hidden md:block" src="/auris.png" alt="Ilustracion" /> */}
         </div>
         <Card className="col-span-2 md:col-span-1 bg-opacity-40">
            <CardHeader className="grid justify-center text-center items-center">
               <Image src="/llamada.png" width={80} height={80} alt="" />
               <h1 className="font-bold text-2xl">YourPhone</h1>
               <h4 className="text-gray-500 text-sm mb-4">{title}</h4>
            </CardHeader>
            <CardBody>
               {children}
            </CardBody>
         </Card>
      </Container>
   </div>
)