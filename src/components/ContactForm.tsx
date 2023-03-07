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
            <FormGroup row>
                <Label
                    for='lastName'
                    sm={2}
                >
                    Last Name
                </Label>
                <Col sm={10}>
                    <Input
                        id='lastName'
                        name='lastname'
                        placeholder='Last Name'
                        type='text'
                    />
                </Col>
            </FormGroup>
            <FormGroup row>
                <Label
                    for='userEmail'
                    sm={2}
                >
                    Email
                </Label>
                <Col sm={10}>
                    <Input
                        id='userEmail'
                        name='emailAddress'
                        placeholder='Email'
                        type='email'
                    />
                </Col>
            </FormGroup>
        </Form>
    )
}