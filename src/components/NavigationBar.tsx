import {
    Nav,
    NavItem,
    Collapse,
    Navbar,
    NavbarToggler,
    Container,
    Button
}
    from 'reactstrap';

import { NavLink } from 'react-router-dom';
import { useState } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingBag } from '@fortawesome/free-solid-svg-icons';

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
                    <Nav className='me-auto' navbar>
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
                    </Nav>
                    <Button><FontAwesomeIcon icon={faShoppingBag} /></Button>
                </Collapse>
            </Container>
        </Navbar>
    )
};