import { Card, CardBody, CardHeader, Image, Tab, Tabs } from "@heroui/react";
import { Container } from "../styles";
import { useState, type Key } from "react";
import { Login, Register } from "../pages";
import { IoPersonAddOutline, IoKeyOutline } from "react-icons/io5";

export const LayoutAuth = () => {
   const [selected, setSelected] = useState("sign-in");
   return (
      <div className="pattern">
         <Container className="flex">
            <Card className="w-[95%] max-w-[500px] m-auto border border-white/20 bg-gradient-to-tr from-background via-content1 to-background">
               <CardHeader className="grid gap-2 justify-center items-center text-center">
                  <div className="m-auto">
                     <Image src="/llamada.png" width={80} height={80} alt="" />
                  </div>
                  <h1 className="font-bold text-2xl">YourPhone</h1>
                  <h4 className="text-gray-500 text-sm">Una app sencilla y confiable para chatear</h4>
               </CardHeader>
               <CardBody>
                  <Tabs fullWidth size="sm" variant="bordered" color="primary" selectedKey={selected} onSelectionChange={(key: Key) => setSelected(String(key))}>
                     <Tab key="sign-in" title={<div className="flex items-center gap-2"><IoKeyOutline /><span>Inicia sesion</span></div>}>
                        <Login />
                     </Tab>
                     <Tab key="sign-up" title={<div className="flex items-center gap-2"><IoPersonAddOutline /><span>Registrate</span></div>}>
                        <Register />
                     </Tab>
                  </Tabs>
               </CardBody>
            </Card>
         </Container>
      </div>
   )
}