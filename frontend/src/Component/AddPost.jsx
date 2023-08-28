import React, { useState } from 'react'
import "./Addpost.css"
import { useDispatch, useSelector } from 'react-redux';
import { addPost } from '../Redux/Products/action';
import { useToast } from '@chakra-ui/react';
export default function AddPost() {
    const token = useSelector((store) => store.Loginreducer.token); 
    const dispatch=useDispatch()
    const toast = useToast()


    const initialState={
        title: "",
        image: "",
        category: "",
        rating: "",
        price: "",
        date:""
      
   }
   const [postData,setPostData]=useState(initialState)

    const handleChange=(e)=>{
        const { name, value}=e.target
        setPostData((prev)=>{
            return { ...prev, [name]: name === "price" || name === "rating" ? +value : value };
        })
        
    }

    // console.log(postData);

    const handleAddPost = (e) => {
        e.preventDefault();
        const currentDate = new Date(); 
        postData.date = currentDate.toISOString();
        
        const headers = {
          Authorization: `Bearer ${token}`, 
        };
    
        dispatch(addPost(postData, headers));
        setPostData(initialState)
        toast({
            title: 'Your Post is added Successfully',
         
            status: 'success',
            duration: 4000,
            isClosable: true,
          })
      };


  return (
    <div>


        <div className="postSection">
            <form action="" className='postform'>
             <h3>Create Post</h3>
            <input type="text" name="title"  value={postData.title} placeholder='title' onChange={handleChange} />
            <input type="text" name="image" value={postData.image} placeholder='image'onChange={handleChange} />

        <select name="category" value={postData.category} onChange={handleChange} >
            <option value="">Select Category</option>
            <option value="Photography">Photography</option>
            <option value="Art">Art</option>
            <option value="Digital Art">Digital Art</option>
          
        </select>
        <input type="text" name="rating" value={postData.rating} placeholder='rating' onChange={handleChange}/>
        <input type="text" name="price"value={postData.price} placeholder='price' onChange={handleChange} />
        <button type='submit' onClick={handleAddPost} >Submit Post</button>
        </form>
        </div>




    </div>
  )
}
