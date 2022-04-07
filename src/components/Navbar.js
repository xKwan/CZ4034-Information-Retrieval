import React from 'react';
import styled from 'styled-components';
import {Link} from "react-router-dom";
import logonav from "../images/BrainTalk_logo copy.png";

const Nav = styled.nav`
display: flex;
justify-content: space-between;
align-items: center;
height: 60px;
font-size: 14px;
`
const Leftlinks = styled.div`
adding: 10px;
margin-left: 10px;
`
const Rightlinks = styled.div`
padding: 10px;
margin-right: 16px;
display: flex;
align-items: center;
//   width: 50px;
//   height : 20px;
`
const Navlinks = styled(Link)`
padding: 0 8px;
text-decoration: none;
color: #000;
`

const Navbar = () => {
    return (
        <Nav>
            <Leftlinks>
                <Link to = "/">
                    <img src ={logonav} alt = "profile"/>
                </Link>
                <Navlinks to= "/about">About</Navlinks>

            </Leftlinks>

            <Rightlinks>
                <Navlinks to= "/viz">Visualisation</Navlinks>
                <Navlinks to = "/">
                    <svg focusable='false' viewBox='0 0 24 24'>
                        <path d='M6,8c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM12,20c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM6,20c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM6,14c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM12,14c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM16,6c0,1.1 0.9,2 2,2s2,-0.9 2,-2 -0.9,-2 -2,-2 -2,0.9 -2,2zM12,8c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM18,14c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM18,20c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2z' />
                    </svg>
                </Navlinks>
                <Navlinks to= "/settings">Settings</Navlinks> 
            </Rightlinks>

        </Nav>
    )
}

export default Navbar
