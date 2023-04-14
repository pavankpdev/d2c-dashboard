import {Flex, Heading, Text} from "@chakra-ui/react";

const News = () => {
    return <>
        <Flex
            flexDir={'column'}
            gap={'.5rem'}
        >
            <Heading
                size={'md'}
            >
                Best Stocks to Buy in 2023
            </Heading>
            <Text
                fontSize={'sm'}
            >
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci, quae.
            </Text>
        </Flex>
    </>
}

export default News