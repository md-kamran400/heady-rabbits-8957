import React, { useState } from 'react'

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
  useToast,
  Heading,
  
} from '@chakra-ui/react'
import { HamburgerIcon, CloseIcon, AddIcon,MoonIcon, SunIcon } from '@chakra-ui/icons'
import "./Navbar.css"
import { Link } from 'react-router-dom'
import { AiOutlineSearch } from 'react-icons/ai'
import { useDispatch, useSelector } from 'react-redux'
import axios from 'axios'
import { LogoutAction } from '../Redux/Login/action'
import { getAllProducts } from '../Redux/Products/action'
import { FaUserAlt } from "react-icons/fa";


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
  const [searchQuery, setSearchQuery] = useState(''); //search


  const isAuth=useSelector((store)=>store.Loginreducer.isAuth)
  const activeuser=useSelector((store)=>store.Loginreducer.username)

  const dispatch=useDispatch()
  const toast = useToast()

  const handleLogout = () => {
    dispatch(LogoutAction());
    toast({
      title: 'You have been successfully logged out',
    
      status: 'success',
      duration: 3000,
      isClosable: true,
    })
  };


  const handleSearchInput=(e)=>{
    setSearchQuery(e.target.value);
  }

  const handleSearchSubmit = (e) => {
    e.preventDefault();
  
    dispatch(getAllProducts(1, searchQuery));
  };
  
  console.log(isAuth);
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
            <Box>
            <Heading as='h4' size='md'>
             <span style={{color:"#13b38b"}}> ART</span>HUB
            </Heading>


            </Box>
            <HStack as={'nav'} spacing={4} display={{ base: 'none', md: 'flex' }}>
             
                <Link to="/">
                  Home
                </Link>


                <Link to="/product" >
                    Shop
                </Link>
{/************* * search **************/}
      <div className="searchDiv">

      <form onSubmit={handleSearchSubmit}>
      <input
        type="text"
        name=""
        placeholder="search"
        bg={useColorModeValue('gray.100', 'blackAlpha.800')}
        value={searchQuery}
        onChange={handleSearchInput}
      />
      <AiOutlineSearch className="searchIcon" />
    </form>
      </div>
 {/************* * search-end **************/}      


            </HStack>
          </HStack>
          <Flex alignItems={'center'}>
           {
              isAuth?
             
               <button onClick={handleLogout}>Logout</button>
         :
         <Link to="/login" >
         Login
        </Link>
          

           }


             
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
      {
        isAuth ?
        <MenuList>
        <MenuItem>
      <FaUserAlt/> <b style={{color:"#ffd915"}}>&nbsp;&nbsp; {activeuser}</b> 
        
        </MenuItem>
        <MenuItem>
        <Link to="/userpost">Posts</Link>
      
        </MenuItem>
        <MenuDivider />
        
      </MenuList>
      :
      ""
      }


             
            </Menu>



            <Button
              variant={'solid'}
              colorScheme={'teal'}
              size={'sm'}
              mr={4}
              leftIcon={<AddIcon />}>

                <Link to="/addpost">Submit</Link>
              
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






