import { Avatar, Grid } from "@nextui-org/react";
import call from "../assets/img/llamada.png";
import { Center, Texture, Title } from "../components";

export const Nothing = () => (
	<Grid direction="column" xs={0} sm={8}>
      <Texture>
         <Center>
            <Avatar src={call} css={{w: '150px', h: '150px', background: 'none'}} />
            <Title>Welcome to YourPhone</Title>
         </Center>
      </Texture>
   </Grid>    
)