import storeItems from '../data/items.json';
import { StoreItem } from '../components/StoreItem';

import { Row, Col } from 'reactstrap';

export const Shoppage = () => {
    return (
        <>
            <div>STORE</div>

            <Row md={2} xs={1} lg={3} className='g-3'>
                {storeItems.map(item => (
                    <Col>
                        <StoreItem {...item} />
                    </Col>
                ))}
            </Row>
        </>
    )
};