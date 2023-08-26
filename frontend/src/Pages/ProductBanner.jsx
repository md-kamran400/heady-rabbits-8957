import React from 'react'
import "./productPage.css"
export default function ProductBanner() {
  return (
    <div>
       <div className='banner' style={{width: "100%", height: "500px", border: "1px solid black", }}>
        <input className='banner-inp' type="text" placeholder='Search DavianArt Shop' style={{fontSize: "20px"}} />
         <h1 className='banner-h1'>Shop for art from creators</h1>
         <h1 className='banner-h2'>you love</h1>
         <button className='search-btn'>Search</button>

         <div className='div_Name' style={{ width: "500px", height: "40px", display: "flex"}}>
            <p style={{margin: "auto", paddingBottom: "5px", fontFamily:"sans-serif", fontWeight: "900", color: "white"}}>Try This</p>
            <div>Adoptables</div>
            <div>Avatar</div>
            <div> Portrait</div>
            <div>Profile Skins</div>
           

         </div>
       </div>
    </div>
  )
}
