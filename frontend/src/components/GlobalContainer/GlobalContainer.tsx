import { Container } from "@chakra-ui/react"

export const GlobalContainer = (props: {children: React.ReactNode}) =>{
    return (
        <Container
        maxW={1280}
        height="100%"
        width="100%"
        margin="0 0 auto"
        padding={0}>
            {props?.children}
        </Container>
    )
}