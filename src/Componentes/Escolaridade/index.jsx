import {Container, ContainerTitle, Title} from "../../style/styles"
import { List, Secao, TitleLi } from "./style"

const Escolaridade= () =>{
    return(
        <Container>
            <ContainerTitle>
            <Title>Escolaridade</Title>
            </ContainerTitle>
            <List>
                <Secao>Ensino Superior:</Secao>
                <TitleLi>São Judas Tadeu - Leopoldina</TitleLi>
                    <List>
                        <li>Ciências da Computação</li>
                        <li>Período: 6° Semestre - Noturno - Cursando</li>
                    </List>
                <Secao>Cursos:</Secao>
                <TitleLi>INovePro</TitleLi>
                <List>
                    <li>Manutenção e Montagem de Computadores</li>
                    <li>HTML e CSS</li>
                </List>

                <TitleLi>Fundação Bradesco</TitleLi>
                <List>
                    <li>Curso Profissionalizante de Logística</li>
                    <li>Excel 2016, Básico, Intermediário</li>
                </List>

                <TitleLi>Alura</TitleLi>
                <List>
                    <li>Phyton 3 </li>
                    <li>Angular </li>
                </List>

                <TitleLi>Rocketseat</TitleLi>
                <List>
                    <li>HTML/CSS/JavaScript</li>
                    <li>React.js</li>
                </List>

                <TitleLi>DIO</TitleLi>
                <List>
                    <li>Git/Github</li>
                    <li>React.js</li>
                    <li>JavaScript/TypeScript</li>
                </List>

            </List>
        </Container>
    )
}

export{Escolaridade}