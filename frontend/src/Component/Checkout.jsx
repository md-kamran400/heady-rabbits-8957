import { Box, Button, Heading, Image, Input, Text } from "@chakra-ui/react"
import { useNavigate } from "react-router-dom"



export const Checkout = () => {
    const navigate=useNavigate()

    const handlecheckout=()=>{
        alert("ordered placed")
        navigate("/")
    }

    return (
        <Box  pb={'1cm'}>
            <Heading color={'whiteAlpha.900'}>CHECKOUT</Heading>
            <Box bg={'blackAlpha.300'} w={'70%'} minH={'70vh'} m={'0.5cm auto 0 auto'} display={'flex'} justifyContent={'space-between'} borderRadius={'10px'} p={'10px'}>
                <Box w={'60%'} p={'10px'}>
                    <Text m={'15px 15px 5px 15px'} textAlign={'left'} fontWeight={'bold'} color={'grey'}>CHOOSE PAYMENT METHOD</Text>
                    <Box display={'flex'} justifyContent={'space-between'}>
                        <Box w={'31%'} cursor={'pointer'} textAlign={'center'} border={'1.5px solid #29B6F6'} padding={'10px 15px'}>
                            <Image w={'30px'} display={'block'} m={'5px auto'} src="https://cdn-icons-png.flaticon.com/128/4021/4021708.png" alt="pic" />
                            <Text color={'grey'}>Credit Card</Text>
                        </Box>
                        <Box w={'31%'} cursor={'pointer'} textAlign={'center'} border={'1px solid grey'} padding={'10px 15px'}>
                            <Image w={'30px'} display={'block'} m={'5px auto'} src="https://cdn-icons-png.flaticon.com/128/732/732119.png" alt="pic" />
                            <Text color={'grey'}>Credit Card</Text>
                        </Box>
                        <Box w={'31%'} cursor={'pointer'} textAlign={'center'} border={'1px solid grey'} padding={'10px 15px'}>
                            <Image w={'30px'} display={'block'} m={'5px auto'} src="https://cdn-icons-png.flaticon.com/128/2740/2740706.png" alt="pic" />
                            <Text color={'grey'}>Credit Card</Text>
                        </Box>
                    </Box>

                    <Text m={'15px 15px 5px 15px'} textAlign={'left'} fontWeight={'bold'} color={'grey'}>Card Number</Text>
                    <Box display={'flex'} justifyContent={'space-between'}>
                        <Input border={'1px solid #E0E0E0'} w={'80%'} type="number" placeholder="Card Number" />
                        <Box display={'flex'}>
                            <Image w={'25px'} h={'40px'} m={'0 2px'} src="https://cdn-icons-png.flaticon.com/128/10576/10576478.png" alt="visa" />
                            <Image w={'25px'} h={'40px'} m={'0 2px'} src="https://cdn-icons-png.flaticon.com/128/493/493836.png" alt="visa" />
                            <Image w={'25px'} h={'40px'} m={'0 2px'} src="https://cdn-icons-png.flaticon.com/128/8765/8765366.png" alt="visa" />
                        </Box>
                    </Box>

                    <Box display={'flex'} gap={'10px'}>
                        <Box w={'40%'}>
                            <Text m={'15px 15px 5px 15px'} textAlign={'left'} fontWeight={'bold'} color={'grey'}>Expiration Date</Text>
                            <Box display={'flex'} gap={'7px'}>
                                <Input border={'1px solid #E0E0E0'} type="number" placeholder={'MM'}/>

                                <Input border={'1px solid #E0E0E0'} type="number" placeholder={'YY'} />
                            </Box>
                        </Box>
                        <Box w={'30%'}>
                            <Text m={'15px 15px 5px 15px'} textAlign={'left'} fontWeight={'bold'} color={'grey'}>CVV</Text>
                            <Box display={'flex'}>
                                <Input border={'1px solid #E0E0E0'} type="number" placeholder={'###'} />
                            </Box>
                        </Box>
                    </Box>

                    <Text m={'15px 15px 5px 15px'} textAlign={'left'} fontWeight={'bold'} color={'grey'}>Name on Card</Text>
                    <Box>
                        <Input border={'1px solid #E0E0E0'} type="text" placeholder="Name on Crad" />
                    </Box>

                    <Text m={'15px 15px 5px 15px'} textAlign={'left'} fontWeight={'bold'} color={'grey'}>Address</Text>
                    <Box>
                        <Input border={'1px solid #E0E0E0'} type="text" placeholder="Address" />
                    </Box>

                    <Box display={'flex'} justifyContent={'space-between'}>
                        <Box>
                            <Text m={'15px 15px 5px 15px'} textAlign={'left'} fontWeight={'bold'} color={'grey'}>City</Text>
                            <Input  w={'100%'} border={'1px solid #E0E0E0'} type="text" placeholder="City" />
                        </Box>
                        <Box>
                            <Text m={'15px 15px 5px 15px'} textAlign={'left'} fontWeight={'bold'} color={'grey'}>Country</Text>
                            <Input w={'100%'} border={'1px solid #E0E0E0'} type="text" placeholder="Country" />
                        </Box>
                    </Box>

                    <Text m={'15px 15px 5px 15px'} textAlign={'left'} fontWeight={'bold'} color={'grey'}>ZIP / Postal Code</Text>
                    <Box>
                        <Input border={'1px solid #E0E0E0'} type="text" placeholder="ZIP / Postal Code" />
                    </Box>

                    <Box display={'flex'} mt={'20px'} mb={'20px'} alignItems={'center'}>
                    <input type='checkbox'/>
                    <Text ml={'7px'}>Remember this card for other purchases</Text>
                    </Box>

                </Box>


                <Box  borderRadius={'10px'} w={'40%'} bg={'#EEEEEE'} p={'10px'}>
                    <Text fontWeight={'bold'} mt={'1cm'}>SUMMARY</Text>
                    <Box w={'100%'} borderBottom={'1px solid #E0E0E0'} m={'0.4cm auto 1cm auto'}></Box>
                    <Box display={'flex'} justifyContent={'space-between'} alignItems={'center'}>
                    <Text fontSize={'14px'} color={'blue.400'} fontWeight={'bold'} textAlign={'left'}>Cloud Tutorial Part 1 by yuumei</Text>
                    <Text fontSize={'15px'}>$1.25 USD</Text>
                    </Box>
                    <Box w={'100%'} m={'10px auto'} minH={'300px'} bg={'#BDBDBD'}>

                    </Box>
                    <Box display={'flex'} mt={'20px'}>
                        <Input border={'1px solid #9E9E9E'} type="'text" placeholder="Coupon"/>
                        <Button bg={'blue.400'} color={'whiteAlpha.900'} ml={'7px'} fontSize={'14px'}>Apply</Button>
                    </Box>

                    <Box display={'flex'} justifyContent={'space-between'} mt={'1.5cm'} alignItems={'center'}>
                    <Text fontSize={'15px'} fontWeight={'bold'} textAlign={'left'}>TOTAL</Text>
                    <Text fontSize={'15px'}>$1.25 USD</Text>
                    </Box>

                    <Button mt={'0.5cm'} w={'100%'} h={'60px'} bg={'blue.400'} color={'whiteAlpha.900'} onClick={handlecheckout}>Pay</Button>
                </Box>
            </Box>
        </Box>
    )
}