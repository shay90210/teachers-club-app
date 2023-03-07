import {
    Form,
    FormGroup,
    Label, Col,
    Input,
} from "reactstrap"

export const ContactForm = () => {
    return (
        <Form>
            <FormGroup row>
                <Label
                    for='firstName'
                    sm={2}
                >
                    First Name
                </Label>
                <Col sm={10}>
                    <Input
                        id='firstName'
                        name='firstname'
                        placeholder='First Name'
                        type='text'
                    />
                </Col>
            </FormGroup>
        </Form>
    )
}