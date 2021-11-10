import * as yup from "yup";

const validateSchema = yup.object({
    email: yup
        .string('Enter your email')
        .email('Enter a valid email')
        .required('Email is required'),
});

export {validateSchema};
