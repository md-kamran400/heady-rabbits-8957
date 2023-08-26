import React from 'react'
import { AiOutlineStar } from 'react-icons/ai'
import { RiFolderUserFill } from 'react-icons/ri'

export default function Post({image,title,rating,publisher,_id}) {
  return (
    <div>
        <div class="container">
            <img src={image} alt="Avatar" class="image"  />
              <div class="middle">
                  <div class="text">
                      <b>{title}</b>
                       <p style={{ display: 'flex', alignItems: 'center' }}>
                          <AiOutlineStar style={{ marginRight: '8px' ,color:"#30c9c3"}} />
                          {rating}
                        </p>
                    </div>
                         
                     <p style={{ display: 'flex', alignItems: 'center' }}>
                         <RiFolderUserFill style={{ marginRight: '8px',color:"#30c9c3" }} />
                          {publisher}
                      </p>
                    </div>
              </div>

        </div>
  )
}
