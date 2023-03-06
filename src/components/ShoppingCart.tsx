import Offcanvas from "react-bootstrap/Offcanvas";

import { useShoppingCart } from "../context/ShoppingCartContext";
import { Stack } from "react-bootstrap";

import { CartItem } from "./CartItem";
import { formatCurrency } from "../utilites/formatCurrency";

import StoreItems from '../data/items.json';

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
                    <div className='ms-auto fw-bold fs-5'>
                        Total {formatCurrency(cartItems.reduce((total, cartItem) => {
                            const item = StoreItems.find(i => i.id === cartItem.id)
                            return total + (item?.price || 0) * cartItem.quantity
                        }, 0)
                        )}
                    </div>
                </Stack>
            </Offcanvas.Body>
        </Offcanvas>
    )
}