import {Avatar, Button, Flex, Heading, Input} from "@chakra-ui/react";

const Item = ({icon, name}) => {
    return <Flex
        justify={'space-between'}
        w={'100%'}
    >
        <Flex
            alignItems={'center'}
            gap={'1rem'}
        >
            <Avatar
                src={icon}
                name={name}
            />
            <Heading size={'md'}>
                {name} <span style={{fontSize: '15px', color: '#FFCD4B'}}>+19%</span>
            </Heading>
        </Flex>
        <Flex
            alignItems={'center'}
            gap={'.5rem'}
        >
            <Input
                type={'number'}
                placeholder={'0'}
            />
            <Button
                bg={'#FFCD4B'}
                color={'#0D1018'}
                _hover={{
                    bg: '#7e5c07',
                    color: '#0D1018',
                }}
            >
                Invest
            </Button>
        </Flex>
    </Flex>
}

export default Item;