import {Column, Container, Nome, Subtitle, UserPicture} from "./styles"
import  perfil  from "../../assets/perfil.jpeg"
const Header = () =>{
    return(
        <Container>
                <UserPicture src={perfil} alt="foto de perfil"/>
            <Column>
                <Nome>Lucas Souza Macedo</Nome>
                <Subtitle>Desenvolvedor</Subtitle>
            </Column>   
        </Container>
    )
}

export {Header}