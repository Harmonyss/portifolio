import { List, Secao, TitleLi } from "./style"
import {Container, ContainerTitle, Title,} from "../../style/styles"


const Idiomas = () =>{
    return(
        <Container>
            <ContainerTitle>
                <Title>Idiomas</Title>
            </ContainerTitle>


            <List>
                <Secao>Ingles:</Secao>
                <TitleLi>CEL(Centro De Estudos de Linguas):</TitleLi>
                <li>Basico</li>
            </List>
        </Container>
    )

}

export{Idiomas}