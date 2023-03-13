import {
    Form,
    FormGroup,
    Label, Col,
    Input,
    Button
} from "reactstrap"
import { Formik } from "formik"

type ContactFormProps = {
    firstName: string;
    lastName: string;
    userEmail: string;
    phoneNum: string;
    userText: string;


}

export const ContactForm = () => {
    const handleSubmit = (values: ContactFormProps, { resetForm }: any) => {
        console.log('form values: ', values);
        console.log('in JSON format:', JSON.stringify(values));
        resetForm();
    }

    return (
        <Formik
            initialValues={{
                firstName: '',
                lastName: '',
                userEmail: '',
                phoneNum: '',
                contactCheckbox: 'By Phone',
                userText: '',
            }}
            onSubmit={handleSubmit}
        >
            <Form className='contact-form'>
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
                <FormGroup row>
                    <Label
                        for='phoneNum'
                        sm={2}
                    >
                        Phone Number
                    </Label>
                    <Col sm={10}>
                        <Input
                            id='phoneNum'
                            name='number'
                            placeholder='Phone Number'
                            type='text'
                        />
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Label
                        for="contactCheckbox"
                        sm={2}
                        className='form-label'
                    >
                        May we contact you?
                    </Label>
                    <Col
                        sm={{
                            size: 10
                        }}
                    >
                        <FormGroup check inline>
                            <Input
                                id="checkbox1"
                                type="checkbox"
                            />
                            {' '}
                            <Label check>
                                Yes
                            </Label>
                        </FormGroup>
                        <FormGroup check inline>
                            <Input
                                id="checkbox2"
                                type="checkbox"
                            />
                            {' '}
                            <Label check>
                                No
                            </Label>
                        </FormGroup>
                    </Col>
                </FormGroup>
                <FormGroup
                    row
                    tag="fieldset"
                >
                    <legend className="col-form-label col-sm-2">
                        Contact Preference
                    </legend>
                    <Col sm={10}>
                        <FormGroup check inline>
                            <Input
                                name="radio2"
                                type="radio"
                            />
                            {' '}
                            <Label check>
                                Phone
                            </Label>
                        </FormGroup>
                        <FormGroup check inline>
                            <Input
                                name="radio2"
                                type="radio"
                            />
                            {' '}
                            <Label check>
                                Email
                            </Label>
                        </FormGroup>
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Label
                        for="userText"
                        sm={2}
                        className='form-label'
                    >
                        Message
                    </Label>
                    <Col sm={10}>
                        <Input
                            id="userText"
                            name="text"
                            type="textarea"
                        />
                    </Col>
                </FormGroup>
                <Button className='form-button'>
                    Submit
                </Button>
            </Form>
        </Formik>
    )
}