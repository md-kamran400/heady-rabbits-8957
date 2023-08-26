import React from 'react'

import {
  Box,
  Flex,
  Avatar,
  HStack,
  Text,
  IconButton,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
  useColorMode,
  
} from '@chakra-ui/react'
import { HamburgerIcon, CloseIcon, AddIcon,MoonIcon, SunIcon } from '@chakra-ui/icons'
import "./Navbar.css"
import { Link } from 'react-router-dom'
import { AiOutlineSearch } from 'react-icons/ai'



const NavLink = (props) => {
  const { children } = props
  return (
    <Box
      as="a"
      px={2}
      py={1}
      rounded={'md'}
      _hover={{
        textDecoration: 'none',
        bg: useColorModeValue('gray.200', 'gray.700'),
      }}
      href={'#'}>
      {children}
    </Box>
  )
}

export default function Navbar() {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const { colorMode, toggleColorMode } = useColorMode()


  return (
    <>
    <div className='navdiv'>
  <Box bg={useColorModeValue('gray.100', 'blackAlpha.800')} px={4} className='navP'>
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          <IconButton
            size={'md'}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={'Open Menu'}
            display={{ md: 'none' }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack spacing={8} alignItems={'center'}>
            <Box>Logo</Box>
            <HStack as={'nav'} spacing={4} display={{ base: 'none', md: 'flex' }}>
             
                <NavLink to="/">
                  Home
                </NavLink>

                <NavLink >
                    Shop
                </NavLink>

      <div className="searchDiv">

      <input type="text" name="" id="" placeholder='search' bg={useColorModeValue('gray.100', 'blackAlpha.800')}/>
      <AiOutlineSearch className='searchIcon'/>
      </div>
            


            </HStack>
          </HStack>
          <Flex alignItems={'center'}>
           

          <Button onClick={toggleColorMode}>
                {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
              </Button>


            <Menu>
              <MenuButton
                as={Button}
                rounded={'full'}
                variant={'link'}
                cursor={'pointer'}
                minW={0}>
                <Avatar
                  size={'sm'}
                  src={
                    'https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?w=2000'
                  }
                />
              </MenuButton>
              <MenuList>
                <MenuItem>Link 1</MenuItem>
                <MenuItem>Link 2</MenuItem>
                <MenuDivider />
                <MenuItem>Link 3</MenuItem>
              </MenuList>
            </Menu>



            <Button
              variant={'solid'}
              colorScheme={'teal'}
              size={'sm'}
              mr={4}
              leftIcon={<AddIcon />}>
              Submit
            </Button>
          </Flex>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: 'none' }}>
            <Stack as={'nav'} spacing={4}>
             
                <NavLink>Home</NavLink>
               <NavLink>Home</NavLink>
            </Stack>
          </Box>
        ) : null}
      </Box>

    </div>
    

    
    </>
  )
}






