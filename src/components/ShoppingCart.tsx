import Offcanvas from "react-bootstrap/Offcanvas";

import { useShoppingCart } from "../context/ShoppingCartContext";
import { Stack } from "react-bootstrap";

import { CartItem } from "./CartItem";

type ShoppingCartProps = {
    isOpen: boolean;
}

export const ShoppingCart = ({ isOpen }: ShoppingCartProps) => {
    const { closeCart, cartItems } = useShoppingCart();

    return (
        <Offcanvas show={isOpen} onHide={closeCart}>
            <Offcanvas.Header closeButton>
                <Offcanvas.Title>CART SUMMARY</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
                <Stack gap={3}>
                    {cartItems.map(item => (
                        <CartItem key={item.id} {...item} />))}
                </Stack>
            </Offcanvas.Body>
        </Offcanvas>
    )
}