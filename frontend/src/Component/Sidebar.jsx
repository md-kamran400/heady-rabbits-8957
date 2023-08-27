import SideNav, { Toggle, Nav, NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';
import React from 'react'
// Be sure to include styles at some point, probably during your bootstraping
import '@trendmicro/react-sidenav/dist/react-sidenav.css';
import { AiFillHome, IconName } from "react-icons/ai";

import "./Home.css"




export default function Sidebar() {
  return (
    <div>



<SideNav
    onSelect={(selected) => {
        // Add your code here
    }}
>
    <SideNav.Toggle style={{backgroundColor: "#131314"}}     />
    <SideNav.Nav defaultSelected="home" style={{backgroundColor: "#06070d",height: "100vh"}}>
        <NavItem eventKey="home">
            <NavIcon>
               <AiFillHome style={{ fontSize: '1.75em' }}/>
            </NavIcon>
            <NavText>
                Home
            </NavText>
        </NavItem>
   

        <NavItem eventKey="home">
            <NavIcon>
               <AiFillHome style={{ fontSize: '1.75em' }}/>
            </NavIcon>
            <NavText>
                Home
            </NavText>
        </NavItem>

        <NavItem eventKey="home">
            <NavIcon>
               <AiFillHome style={{ fontSize: '1.75em' }}/>
            </NavIcon>
            <NavText>
                Home
            </NavText>
        </NavItem>


        <NavItem eventKey="home">
            <NavIcon>
               <AiFillHome style={{ fontSize: '1.75em' }}/>
            </NavIcon>
            <NavText>
                Home
            </NavText>
        </NavItem>

        <NavItem eventKey="home">
            <NavIcon>
               <AiFillHome style={{ fontSize: '1.75em' }}/>
            </NavIcon>
            <NavText>
                Home
            </NavText>
        </NavItem>

    </SideNav.Nav>
</SideNav>






    </div>
  )
}