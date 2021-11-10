import * as yup from "yup";

const validateSchema = yup.object({
    salutation: yup
        .string('Enter your salutation')
        .required('Salutation is required'),
    fname: yup
        .string('Enter your first name')
        .required('First name is required'),
    lname: yup
        .string('Enter your last name')
        .required('Last name is required'),
    gender: yup
        .string('Enter your gender')
        .required('Gender is required'),
    email: yup
        .string('Enter your email')
        .email('Enter a valid email')
        .required('Email is required'),
    phone: yup
        .string('Enter your phone')
        .min(10, 'Invalid number')
        .required('Phone is required'),
    address: yup
        .string('Enter your address')
        .required('Address is required'),
    city: yup
        .string('Enter your city')
        .required('City is required'),
    pinCode: yup
        .string('Enter your pin code')
        .required('Pin code is required'),
    status: yup
        .string('Enter your pin status')
        .required('Status code is required'),
});

export { validateSchema }
