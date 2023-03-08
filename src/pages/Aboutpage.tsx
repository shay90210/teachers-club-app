import { Row, Col, Container } from "reactstrap";

export const Aboutpage = () => {
    return (
        <div className='about-page'>
            <h2 className='about-title'>ABOUT THE TEACHERS' CLUB</h2>
            <Container>
                <Row>
                    <Col>
                        <p>
                            As educators, we have the privilege of being in a signature, exemplary club that
                            is only understood by fellow teachers. While navigating the world of education
                            can be difficult, all of the long hours, grading, and lesson planning is worth
                            the impact we have on the future leaders of this world. The sole purpose of The
                            Teachers' Club is to provide educators with apparel and merchandise that evoke
                            the common feelings we all share, while celebrating the wonderful work we're
                            doing each day. We hope you find something in The Teachers' Club that you feel
                            proud to wear out loud.
                        </p>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <img
                            src='/img/bombteacherwithcurlpatternshirt.jpg'
                            alt='bomb teacher shirt'
                            style={{
                                maxWidth: '100%',
                                margin: 'auto',
                                display: 'block'

                            }}
                        />
                    </Col>
                    <Col>
                        <img
                            src='/img/teachlovehoodie.jpg'
                            alt='teach love hoodie'
                            style={{
                                maxWidth: '100%',
                                margin: 'auto',
                                display: 'block'

                            }}
                        />
                    </Col>
                </Row>
            </Container>
        </div>
    )
};