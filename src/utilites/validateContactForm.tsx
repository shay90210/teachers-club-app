type ValidateProps = {
    firstName: string;
    lastName: string;
    phoneNum: string;
    email: string;
}

export const validateContactForm = (values: ValidateProps) => {
    const errors: Record<keyof ValidateProps, string> = {
        firstName: "",
        lastName: "",
        phoneNum: "",
        email: ""
    };

    if (!values.firstName) {
        errors.firstName = 'Required';
    } else if (values.firstName.length < 2) {
        errors.firstName = 'Must be at least 2 characters.';
    } else if (values.firstName.length > 15) {
        errors.firstName = 'Must be 15 characters or less.';
    }

    if (!values.lastName) {
        errors.lastName = 'Required';
    } else if (values.firstName.length < 2) {
        errors.lastName = 'Must be at least 2 characters.';
    } else if (values.firstName.length > 15) {
        errors.lastName = 'Must be 15 characters or less.';
    }

    const reg = /^\d+$/;
    if (!reg.test(values.phoneNum)) {
        errors.phoneNum = 'The phone number should contain only numbers.';
    }

    if (!values.email.includes('@')) {
        errors.email = 'Email should contain a @.';
    }

    return errors;
}