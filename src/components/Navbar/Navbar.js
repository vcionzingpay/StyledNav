import React, {useState, useEffect} from 'react';
import {FaBars, FaTimes} from 'react-icons/fa';
import {IconContext} from 'react-icons/lib'
import {Button} from '../../GlobalStyles'
import {Nav,
    NavbarContainer, 
    NavLogo, 
    NavIcon,
    MobileIcon,
    NavMenu,
    NavItem,
    NavLink,
    NavItemBtn,
    NavBtnLink
    } from './Navbar.elements'


const Navbar = () => {
    const [click, setClick] = useState(false)
    const [button, setButton] = useState(true)
    const handleClick = () => setClick(!click)

    const showButton = () => {
        if(window.innerWidth <= 960) {
            setButton(false)
        } else {
            setButton(true)
        }
    }

useEffect(() =>{
    showButton()
}, [])

window.addEventListener('resize', showButton);
    return (
        <>
            <IconContext.Provider value={{color: '#fff'}}>
                <Nav>
                    <NavbarContainer> 
                        <NavLogo to="/">
                            <NavIcon/> 
                            ULTRA
                        </NavLogo>
                        <MobileIcon onClick={handleClick}>
                            {click ? <FaTimes/> : <FaBars/>}
                        </MobileIcon>
     {/*  Home */}
                        <NavMenu onClick={handleClick} click={click}>
                            <NavItem>
                                <NavLink to='/'>
                                    Home
                                </NavLink>
                            </NavItem>                      
    {/*  services */}
                            <NavItem>
                                <NavLink to='/services'>
                                    Services
                                </NavLink>
                            </NavItem>                       
    {/*  products */}
                            <NavItem>
                                <NavLink to='/products'>
                                    Products
                                </NavLink>
                            </NavItem>
                            <NavItemBtn>
                                {button ? (
                                    <NavBtnLink to="/sign-up">
                                        <Button primary>SIGN UP</Button>
                                    </NavBtnLink>
                                ) :(
                                    <NavBtnLink to="/sign-up">
                                        <Button fontBig primary>
                                            SIGN UP
                                        </Button>

                                    </NavBtnLink>
                                )}
                            </NavItemBtn>
                        </NavMenu>


                    </NavbarContainer>
                </Nav>
            </IconContext.Provider>
        </>
    )
}

export default Navbar

