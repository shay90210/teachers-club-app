import { Row, Col, Container } from "reactstrap";
import { AboutAccordion } from "../components/AboutAccordion";

export const Aboutpage = () => {
    return (
        <div className='about-page'>
            <h3 className='about-title'>ABOUT THE TEACHERS' CLUB</h3>
            <Container>
                <Row>
                    <Col>
                        <p>
                            As educators, we have the privilege of being in a signature, exemplary club that
                            is only understood by fellow teachers. While navigating the world of education
                            can be difficult, all of the long hours, grading, and lesson planning is worth
                            the impact we have on the future leaders of this world.
                        </p>
                        <p>
                            The sole purpose of The Teachers' Club is to provide educators with apparel and
                            merchandise that evoke the common feelings we all share, while celebrating the
                            wonderful work we're doing each day. We hope you find something in The Teachers'
                            Club that you feel proud to wear out loud.
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
                <Row className='mt-5'>
                    <h3 className='about-title'>LEARN OUR COMPANY</h3>
                    <AboutAccordion />
                </Row>
                <Row className='mt-5'>
                    <h3 className='about-title'>ABOUT OUR TTC FOUNDER</h3>
                    <Col>
                        <p>For 10 years, Jody has dedicated her life to educating high school students.
                            Her alma mater University of Wisconsin-Whitewater provided the necessary tools
                            for Jody to succeed at her first school - Washington High School in Milwaukee,
                            WI.
                        </p>
                        <p>The Teachers' Club started out as a small idea and became something bigger
                            for Jody. She developed the concept to spread love to teachers after realizing
                            that teacher shortages came from a lack of motivation, a lack of support, and
                            much needed love and attention.
                        </p>
                        <p>With her humorous sarcasm and loving nature, she created apparel for teachers
                            to have fun with their students and to remind teachers their 'why' for choosing
                            to become an educator.

                        </p>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <img
                            src='/img/jodyProfile.jpg'
                            alt='teacher founder'
                            style={{
                                maxWidth: '100%',
                                display: 'block',
                                margin: 'auto'
                            }}
                        />
                    </Col>
                </Row>
            </Container>
        </div>
    )
};