import Head from 'next/head'
import {
    Avatar,
    Box, Button,
    Container,
    Divider,
    Flex,
    Grid,
    Heading,
    Image, Input,
    Stat,
    StatLabel,
    StatNumber,
    Text,
    VStack,
} from '@chakra-ui/react'
import Stats from "@/Components/overview/Stats";
import dynamic from "next/dynamic";
import Wallet from "@/Components/Wallets";
import WalletIcon from "@/assets/Icons/Wallet";
import LendIcon from "@/assets/Icons/Lend";
import BorrowIcon from "@/assets/Icons/Borrow";
import News from "@/Components/News";
import InvestItem from "@/Components/Invest/Item";
const Chart = dynamic(() => import('@/Components/overview/Chart'), {ssr: false});
export default function Home() {
  return (
    <>
      <Head>
        <title>My Dashboard</title>
        <meta name="description" content="Design to Code" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Box
        as={'main'}
        width={'100%'}
        height={'100%'}
        bg={'#0D1018'}
        color={'white'}
      >
          <Flex
            width={'100%'}
            bg={'#282A36'}
            py={'1rem'}
          >
            <Container
                maxW={'container.xl'}
            >
                <Box
                    width={'180px'}
                    height={'60px'}
                >
                    <Image
                        src={'https://logos-download.com/wp-content/uploads/2016/09/React_logo_wordmark.png'}
                        alt={'React Logo'}
                        width={'100%'}
                        height={'100%'}
                    />
                </Box>
            </Container>
          </Flex>

          <Container
              maxW={'container.xl'}
              py={'2rem'}
          >
              <Grid
                  gridTemplateColumns={'60% 40%'}
                  gap={'1rem'}
              >
                  <Flex
                      flexDir={'column'}
                      gap={'1rem'}
                  >
                      <Heading>Overview</Heading>
                      <Flex
                        bg={'#282A36'}
                        p={'1.5rem'}
                        borderRadius={'10px'}
                      >
                          <Flex
                              flexDir={'column'}
                              gap={'1rem'}
                              w={'20%'}
                          >
                              <Stats label={'Total Users'} value={'1200'}/>
                              <Stats label={'Total Invested'} value={'300'}/>
                              <Stats label={'Total Gainers'} value={'200'}/>
                              <Stats label={'Total Losers'} value={'100'}/>
                          </Flex>
                           <Flex w={'80%'}>
                               <Chart />
                           </Flex>
                      </Flex>
                  </Flex>
                  <Flex
                      flexDir={'column'}
                      gap={'1rem'}
                  >
                      <Heading>Wallets</Heading>
                      <Flex
                          flexDir={'column'}
                          gap={'1rem'}
                      >
                          <Wallet Icon={<WalletIcon />} />
                          <Wallet Icon={<LendIcon />} />
                          <Wallet Icon={<BorrowIcon />} />
                      </Flex>
                  </Flex>
              </Grid>
              <Grid
                  my={'4rem'}
                  gridTemplateColumns={'40% 60%'}
                  gap={'1rem'}
              >
                  <Flex
                      flexDir={'column'}
                      gap={'1rem'}
                  >
                      <Heading>News</Heading>
                      <Flex
                          bg={'#282A36'}
                          p={'1.5rem'}
                          borderRadius={'10px'}
                      >
                          <VStack
                                spacing={'1rem'}
                                divider={<Divider orientation="horizontal" />}
                          >
                              <News />
                              <News />
                              <News />
                              <News />
                          </VStack>
                      </Flex>
                  </Flex>
                  <Flex
                      flexDir={'column'}
                      gap={'1rem'}
                  >
                      <Heading>Wallets</Heading>
                      <Flex
                          bg={'#282A36'}
                          p={'1.5rem'}
                          borderRadius={'10px'}
                          w={'100%'}
                          flexDir={'column'}
                            gap={'2rem'}
                      >
                          <InvestItem
                              icon={'https://cryptologos.cc/logos/aave-aave-logo.png'}
                              name={'AAVE'}
                          />
                          <InvestItem
                            icon={'https://cryptologos.cc/logos/aave-aave-logo.png'}
                            name={'AAVE'}
                          />
                          <InvestItem
                            icon={'https://cryptologos.cc/logos/aave-aave-logo.png'}
                            name={'AAVE'}
                          />
                          <InvestItem
                            icon={'https://cryptologos.cc/logos/aave-aave-logo.png'}
                            name={'AAVE'}
                          />
                          <InvestItem
                            icon={'https://cryptologos.cc/logos/aave-aave-logo.png'}
                            name={'AAVE'}
                          />
                      </Flex>
                  </Flex>
              </Grid>
          </Container>

      </Box>

    </>
  )
}
