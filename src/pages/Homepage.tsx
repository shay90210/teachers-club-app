import { Container, Row, Col } from "reactstrap";
import { HomeCarousel } from '../components/HomeCarousel';

export const Homepage = () => {
    return (
        <div className='home-page'>
            <Container>
                <h1>THE TEACHERS' CLUB</h1>
                <Row>
                    <Col>
                        <h2>The safe space to wear your thoughts!</h2>
                    </Col>
                </Row>
                <Row className='mt-5'>
                    <img
                        className='home-image-one'
                        src='/img/mug3.jpg'
                        alt='woman holding product'
                        width='100%'
                        style={{
                            display: 'block',
                            margin: 'auto',
                        }}
                    />
                </Row>
            </Container>
            <HomeCarousel />
        </div>
    )
};
