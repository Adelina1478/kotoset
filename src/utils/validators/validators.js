import * as Yup from "yup";

export const loginFormSchema = Yup.object().shape({
    email: Yup.string()
        .required("Field is required"),
    password: Yup.string()
        .required("Field is required")
        .max(20, "Nice try, nobody has a first name that long")
        .min(2, "Must be longer than 2 characters")
});

export const validateLoginForm = values => {
    const errors = {};
    if (!values.email) {
        errors.email = 'Field is required';
    } else if (
        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
    ) {
        errors.email = 'Invalid email address';
    }
    if (!values.password) {
        errors.password = 'Field is required';
    } else if (values.password.length < 2 || values.password.length > 20) {
        errors.password = 'Password must be between 2 and 20 characters';
    }

    return errors;
};

export const validationSchema = Yup.object({
    contacts: Yup.object().shape({
        facebook: Yup.string()
            .nullable() // Позволяет пустые значенияs
            .test('is-url-or-empty', 'Некорректный URL', value => !value || Yup.string().url().isValidSync(value)),
        website: Yup.string()
            .nullable()
            .test('is-url-or-empty', 'Некорректный URL', value => !value || Yup.string().url().isValidSync(value)),
        vk: Yup.string()
            .nullable()
            .test('is-url-or-empty', 'Некорректный URL', value => !value || Yup.string().url().isValidSync(value)),
        twitter: Yup.string()
            .nullable()
            .test('is-url-or-empty', 'Некорректный URL', value => !value || Yup.string().url().isValidSync(value)),
        instagram: Yup.string()
            .nullable()
            .test('is-url-or-empty', 'Некорректный URL', value => !value || Yup.string().url().isValidSync(value)),
        youtube: Yup.string()
            .nullable()
            .test('is-url-or-empty', 'Некорректный URL', value => !value || Yup.string().url().isValidSync(value)),
        github: Yup.string()
            .nullable()
            .test('is-url-or-empty', 'Некорректный URL', value => !value || Yup.string().url().isValidSync(value)),
        mainLink: Yup.string()
            .nullable()
            .test('is-url-or-empty', 'Некорректный URL', value => !value || Yup.string().url().isValidSync(value)),
    }),
});




