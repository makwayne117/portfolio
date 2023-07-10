import Head from 'next/head'
import {Box} from '@chakra-ui/react'

const Main = ({children, router}) => {
    return (
        <Box as="main" pb={8}>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <title>Wayne Mak Main Page</title>
                <Container maxW="container.md" pt={14}>
                    {children}
                </Container>
            </Head>
        </Box>
    )
}
export default Main