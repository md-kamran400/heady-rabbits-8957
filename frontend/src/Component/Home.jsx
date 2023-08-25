import React, { useEffect } from "react";
import "./Home.css"
import { useDispatch, useSelector } from "react-redux";
import { getAllProducts } from "../Redux/Products/action";
import { AiOutlineStar } from "react-icons/ai";
import { RiFolderUserFill } from "react-icons/ri";

import {Box, Flex, HStack, Skeleton, useColorModeValue} from '@chakra-ui/react'


export default function Home() {

const dispatch=useDispatch()
const post=useSelector((store)=>store.singleData.Alldata)
const isloading=useSelector((store)=>store.singleData.isLoading)

    useEffect(() => {
        dispatch(getAllProducts());
      }, []);
    
//  console.log(post);


// if(isloading){
//   return <h1>Loading..........</h1>
// }

  return (
    <div>

        <div className="homeSection">

<Box className="heading" bg={useColorModeValue('blackAlpha.100', 'blackAlpha.500')}>
 Home
</Box>
         
            <div className='homediv'>



                {

                  isloading?

                    <div  style={{width:"100%",display:"grid",gridTemplateColumns:"repeat(4,1fr)"}}>
                  <Skeleton height='200px' />
                  <Skeleton height='200px' />
                  <Skeleton height='200px' />
                  <Skeleton height='200px' />
                  <Skeleton height='200px' />
                  <Skeleton height='200px' />
                    </div>   



                 :
                    post && post.map((el)=>(
                       <div key={el._id}>


                        <div class="container">
                        <img src={el.image} alt="Avatar" class="image"  />
                        <div class="middle">
                           
                            <div class="text">
                                <b>{el.title}</b>
                              
                                <p style={{ display: 'flex', alignItems: 'center' }}>
                                <AiOutlineStar style={{ marginRight: '8px' ,color:"#30c9c3"}} />
                                {el.rating}
                                </p>
                            </div>
                         
                           
                          <p style={{ display: 'flex', alignItems: 'center' }}>
                                <RiFolderUserFill style={{ marginRight: '8px',color:"#30c9c3" }} />
                               {el.publisher}
                             </p>
                        </div>
                        </div>


                                
                       </div> 
                    ))
                }
 
            </div>

        </div>


  </div>
  )
}
