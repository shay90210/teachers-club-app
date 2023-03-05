import { Card, CardImg } from "reactstrap"

type StoreItemProps = {
    id: number
    name: string
    price: number
    imgUrl: string
}

export const StoreItem = ({ id, name, price, imgUrl }: StoreItemProps) => {
    return (
        <Card>
            <CardImg
                variant='top'
                src={imgUrl}
                height='400px'
                style={{
                    objectFit: 'cover'
                }}
            />
        </Card>
    )
}