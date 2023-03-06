import { OffcanvasTitle } from "react-bootstrap"
import { Offcanvas, OffcanvasHeader } from "reactstrap"

type ShoppingCartProps = {
    isOpen: boolean;
}

export const ShoppingCart = ({ isOpen }: ShoppingCartProps) => {
    return (
        <Offcanvas>
            <OffcanvasHeader close>
                <OffcanvasTitle>CART SUMMARY</OffcanvasTitle>
            </OffcanvasHeader>
        </Offcanvas>
    )
}