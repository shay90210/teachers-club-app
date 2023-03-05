import {
    Nav,
    NavItem,
    Collapse,
    Navbar,
    NavbarToggler,
    Container
}
    from 'reactstrap';
import { NavLink } from 'react-router-dom';
import { useState } from 'react';

export const NavigationBar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <Navbar
            sticky='top'
            expand='md'
            className='main-nav'
            light
        >
            <Container>
                <NavbarToggler onClick={() => setMenuOpen(!menuOpen)} />
                <Collapse isOpen={menuOpen} navbar>
                    <Nav className='pt-3 pb-3' navbar>
                        <div className='nav-links'>
                            <NavItem>
                                <NavLink className='nav-link' to='/'> HOME</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className='nav-link' to='/about'> ABOUT</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className='nav-link' to='/shop'> SHOP</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className='nav-link' to='/contact'> CONTACT</NavLink>
                            </NavItem>
                        </div>
                    </Nav>
                </Collapse>
            </Container>
        </Navbar>
    )
};