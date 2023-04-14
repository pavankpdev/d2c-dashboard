import {Flex, Stat, StatLabel, StatNumber, Text} from "@chakra-ui/react";
import WalletIcon from "@/assets/Icons/Wallet";

const Wallet = ({Icon}) => {
    return <>
        <Flex
            bg={'#282A36'}
            borderRadius={'10px'}
            p={'1.8rem'}
            justify={'space-between'}
        >
            <Flex
                flexDir={'column'}
                gap={'.5rem'}
            >
                {Icon}
                <Text>Wallet Balance</Text>
            </Flex>
            <Flex
                flexDir={'column'}
                gap={'.5rem'}
            >
                <Stat >
                    <StatNumber>10,000</StatNumber>
                    <StatLabel float={'right'} color={'#FFCD4B'}>INR</StatLabel>
                </Stat>
            </Flex>
        </Flex>
    </>
}
export default Wallet;
