import { Container, Row, Col } from "reactstrap";

export const Homepage = () => {
    return (
        <div className='home-page'>
            <Container>
                <Row>
                    <Col>
                        <h2>The safe space to wear your thoughts!</h2>
                    </Col>
                </Row>
                <Row className='mt-5'>
                    <Col>
                        <img
                            className='home-image-one'
                            src='/img/mug3.jpg'
                            alt='woman holding product'
                            width='400px'
                            style={{
                                display: 'block',
                                margin: 'auto',
                                objectFit: 'cover'
                            }}
                        />
                    </Col>
                </Row>
            </Container>
        </div>
    )
};
