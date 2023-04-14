import {Stat, StatLabel, StatNumber} from "@chakra-ui/react";

const Stats = ({label, value}) => {
    return <>
        <Stat>
            <StatLabel color={'#FFCD4B'}>{label}</StatLabel>
            <StatNumber>{value}</StatNumber>
        </Stat>
    </>
}

export default Stats;