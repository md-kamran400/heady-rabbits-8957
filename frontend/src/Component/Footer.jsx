import React from 'react'
import "./Footer.css"
import { Heading } from '@chakra-ui/react'

export default function Footer() {
  return (
    <div>
      <div className="footerSection">


        <div className='footerdiv'>
          <div>
          <Heading as='h4' size='md'>
             <span style={{color:"#13b38b"}}> ART</span>HUB
            </Heading>
         <p className='fAbout'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took 
        a galley of type and scrambled it to make a type specimen book.</p>
          </div>


            <div>
              <ul>
                <li>About</li>
                <li>Contact</li>
                <li>Core Membership</li>
                <li>ArtHub Protect</li>
              </ul>
            </div>

            <div>

              <ul>
                  <li>Developers</li>
                  <li>Advertise</li>
                  <li>Terms of Service</li>
                  <li>Etiquette</li>
              </ul>
        </div>
            <div>
              <ul>
                   <li>Careers</li>
                  <li>Privacy Policy</li>
                  <li>Copyright Policy</li>
                  <li>Help and FAQ</li>
               </ul>
               </div>
            

   

        </div>


      </div>



    </div>
  )
}