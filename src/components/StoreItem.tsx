import { Card, CardImg, CardBody, CardTitle } from "reactstrap"

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
            <CardBody className='d-flex flex-column'></CardBody>
            <CardTitle className='d-flex justify-content-space-between align-items-baseline mb-4'>
                <span className='fs-2'>{name}</span>
                <span className='ms-2'>{price}</span>
            </CardTitle>
        </Card>
    )
}