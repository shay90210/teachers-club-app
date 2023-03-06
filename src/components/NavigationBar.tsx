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

import { useShoppingCart } from '../context/ShoppingCartContext';

export const NavigationBar = () => {
    const { openCart, cartQuantity } = useShoppingCart();
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <Navbar
            sticky='top'
            expand='sm'
            className='main-nav shadow-sm mb-3'
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
                    {cartQuantity > 0 && (
                        <Button
                            style={{ width: '3rem', height: '3rem', position: 'relative', backgroundColor: 'white' }}
                            className='rounded-circle'
                            onClick={openCart}
                        >
                            <FontAwesomeIcon icon={faShoppingBag} style={{ color: 'black' }} />
                            <div
                                className='rounded-circle'
                                d-flex
                                justify-content-center
                                align-items-center
                                style={{
                                    backgroundColor: 'red',
                                    color: 'white',
                                    width: '1.5rem',
                                    position: 'absolute',
                                    height: '1.5rem',
                                    bottom: '0',
                                    right: '0',
                                    transform: 'translate(25%, 25%)'
                                }}
                            >
                                {cartQuantity}
                            </div>
                        </Button>
                    )}
                </Collapse>
            </Container>
        </Navbar>
    )
};