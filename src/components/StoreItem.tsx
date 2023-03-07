import { Button, Card, CardTitle, CardBody, CardImg } from "reactstrap";
import { useShoppingCart } from "../context/ShoppingCartContext"
import { formatCurrency } from "../utilites/formatCurrency";

type StoreItemProps = {
    id: number
    name: string
    price: number
    imgUrl: string
}

export function StoreItem({ id, name, price, imgUrl }: StoreItemProps) {
    const {
        getItemQuantity,
        increaseCartQuantity,
        decreaseCartQuantity,
        removeFromCart,
    } = useShoppingCart()
    const quantity = getItemQuantity(id)

    return (
        <Card className="h-100">
            <CardImg
                variant="top"
                src={imgUrl}
                height="200px"
                style={{ objectFit: "cover" }}
            />
            <CardBody className="d-flex flex-column">
                <CardTitle className="d-flex justify-content-between align-items-baseline mb-4">
                    <span className="fs-2">{name}</span>
                    <span className="ms-2 text-muted">{formatCurrency(price)}</span>
                </CardTitle>
                <div className="shop-item mt-auto">
                    {quantity === 0 ? (
                        <Button className="add-button w-100" onClick={() => increaseCartQuantity(id)}>
                            + Add To Cart
                        </Button>
                    ) : (
                        <div
                            className="d-flex align-items-center flex-column"
                            style={{ gap: ".5rem" }}
                        >
                            <div
                                className="d-flex align-items-center justify-content-center"
                                style={{ gap: ".5rem" }}
                            >
                                <Button className='decrease-button' onClick={() => decreaseCartQuantity(id)}>-</Button>
                                <div>
                                    <span className="fs-3">{quantity}</span> in cart
                                </div>
                                <Button className='increase-button' onClick={() => increaseCartQuantity(id)}>+</Button>
                            </div>
                            <Button
                                className='remove-button'
                                onClick={() => removeFromCart(id)}
                                size="sm"
                            >
                                Remove
                            </Button>
                        </div>
                    )}
                </div>
            </CardBody>
        </Card>
    )
}