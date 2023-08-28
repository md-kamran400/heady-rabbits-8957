import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getUsersPostAction } from '../Redux/UserpostReducer/action'
import "./Mypost.css"
import { AiOutlineStar } from 'react-icons/ai'
import { Box, Card, CardBody, Heading, Text } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import { FaHandPointRight } from 'react-icons/fa'

export default function Mypost() {
const dispatch=useDispatch()
const token = useSelector((store) => store.Loginreducer.token);
const userpost=useSelector((store) => store.UserPostReducer.AllUserpost);

useEffect(() => {
  dispatch(getUsersPostAction(token));
}, [dispatch, token]);

console.log(userpost);


if(userpost.length==0){
  return   <Box w='100%'  pt={100} pb={150}color='white'>
        
  <Heading as='h3' size='lg'>
 No Post Added Yet .Submit Your First Post  <Link to="/addpost" style={{color:"#0b9b55"}}>Add</Link>
</Heading>



</Box>
}


  return (
<div>


<Heading as='h3' size='lg'>
   My Post
  </Heading>

    <div className='UserpostSection'>
  
      
    {
       userpost&& userpost.map((el)=>(
        <div key={el._id}>
          <img src={el.image} alt="" srcset="" />
          <p><b>{el.title}</b></p>
          {/* <AiOutlineStar style={{color:"#30c9c3"}} /> */}
          <p>₹ {el.price}</p>
          <p><b>Rating:</b> {el.rating}</p>
          
          </div>
      ))
    }
</div>
    </div>
  )
}
