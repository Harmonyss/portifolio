import {Container, ContainerTitle, Title,} from "../../style/styles"
import estrela from "../../assets/Estrela.svg"
import vazia from "../../assets/Vazia.svg"
import python from "../../assets/python.png"
import js from "../../assets/js.svg"
import types from "../../assets/type.svg"
import logo from "../../assets/react.png"
import html from "../../assets/html5.svg"
import css3 from "../../assets/css3.svg"
import java from "../../assets/java.svg"
import git from "../../assets/git.svg"
import github from "../../assets/github.svg"
import { Card, CardImage, ContainerEstrelas, ContainerImage, Desc, Estrelas, Row } from "./style"
import React from "react"

const Skills = () =>{
    return(
        <Container>
            <ContainerTitle>
                <Title>Skills</Title>
            </ContainerTitle>
         
            <Row>
            <Card>
                <CardImage src={python}/>
                <Desc>Python</Desc>
                <ContainerEstrelas>
                    <Estrelas src={estrela}/>
                    <Estrelas src={estrela}/>
                    <Estrelas src={estrela}/>
                    <Estrelas src={vazia}/>
                    <Estrelas src={vazia}/>
                </ContainerEstrelas>
            </Card>
            <Card>
                <CardImage src={logo}/>
                <Desc>React.js</Desc>
                <ContainerEstrelas>
                    <Estrelas src={estrela}/>
                    <Estrelas src={estrela}/>
                    <Estrelas src={estrela}/>
                    <Estrelas src={vazia}/>
                    <Estrelas src={vazia}/>
                </ContainerEstrelas>
            </Card>
            
            <Card>
                <ContainerImage>
                <CardImage src={js}/>
                </ContainerImage>
                <Desc>JavaScript</Desc>
                <ContainerEstrelas>
                    <Estrelas src={estrela}/>
                    <Estrelas src={estrela}/>
                    <Estrelas src={estrela}/>
                    <Estrelas src={vazia}/>
                    <Estrelas src={vazia}/>
                </ContainerEstrelas>
            </Card>
            
            
            </Row>
            <Row>
            <Card>
                <CardImage src={types}/>
                <Desc>TypeScript</Desc>
                <ContainerEstrelas>
                    <Estrelas src={estrela}/>
                    <Estrelas src={estrela}/>
                    <Estrelas src={vazia}/>
                    <Estrelas src={vazia}/>
                    <Estrelas src={vazia}/>
                </ContainerEstrelas>
            </Card>
            <Card>
                <CardImage src={html}/>
                <Desc>HTML</Desc>
                <ContainerEstrelas>
                    <Estrelas src={estrela}/>
                    <Estrelas src={estrela}/>
                    <Estrelas src={estrela}/>
                    <Estrelas src={vazia}/>
                    <Estrelas src={vazia}/>
                </ContainerEstrelas>
            </Card>
            
            
            <Card>
                <CardImage src={css3}/>
                <Desc>CSS</Desc>
                <ContainerEstrelas>
                    <Estrelas src={estrela}/>
                    <Estrelas src={estrela}/>
                    <Estrelas src={vazia}/>
                    <Estrelas src={vazia}/>
                    <Estrelas src={vazia}/>
                </ContainerEstrelas>
            </Card>
            
    
            </Row>
            <Row>
            <Card>
                <CardImage src={git}/>
                <Desc>Git</Desc>
                <ContainerEstrelas>
                    <Estrelas src={estrela}/>
                    <Estrelas src={estrela}/>
                    <Estrelas src={vazia}/>
                    <Estrelas src={vazia}/>
                    <Estrelas src={vazia}/>
                </ContainerEstrelas>
            </Card>
            
            
            <Card>
                <CardImage src={github}/>
                <Desc>Github</Desc>
                <ContainerEstrelas>
                    <Estrelas src={estrela}/>
                    <Estrelas src={estrela}/>
                    <Estrelas src={vazia}/>
                    <Estrelas src={vazia}/>
                    <Estrelas src={vazia}/>
                </ContainerEstrelas>
            </Card>
            
            <Card>
                <CardImage src={java}/>
                <Desc>Java</Desc>
                <ContainerEstrelas>
                    <Estrelas src={estrela}/>
                    <Estrelas src={estrela}/>
                    <Estrelas src={vazia}/>
                    <Estrelas src={vazia}/>
                    <Estrelas src={vazia}/>
                </ContainerEstrelas>
            </Card>
            </Row>
                        
        </Container>
    )
}

export {Skills}