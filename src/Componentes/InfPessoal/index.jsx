import {Container, ContainerTitle, Title,} from "../../style/styles"
import { List } from "./style"


const InfPessoal = () => {
    return (
        <Container>
            <ContainerTitle>
                <Title>Informações Pessoais</Title>
            </ContainerTitle>

            <List>
                <li><b>Idade:</b> 20 Anos</li><br />
                <li><b>Telefone:</b> &#40;11&#41; 96123-2136</li><br />
                <li><b>Email:</b> lucasomacedo@gmail.com</li><br />
                <li><b>Endereço:</b> Rua Ana Ventura Nitão, 178 - Osasco</li><br />
                <li><b>Nascionalidade:</b> Brasileiro</li><br />
                <li><b>Linkedin:</b> <a href="https://www.linkedin.com/in/lucas-macedo-dev/">linkedin.com/in/lucas-macedo-dev/</a></li><br />
                <li><b>Github:</b> <a href="https://github.com/Harmonyss">github.com/Harmonyss</a></li><br />
            </List>
        </Container>
    )
}
export{InfPessoal}