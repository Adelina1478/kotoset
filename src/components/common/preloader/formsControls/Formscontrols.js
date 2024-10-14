import { Field } from "formik";
import React from "react";
import styles from "./FormControls.module.css";

// Компонент Textarea для использования с Formik
export const Textarea = ({ field, form: { touched, errors }, ...props }) => {
    const hasError = touched[field.name] && errors[field.name];
    return (
        <div className={styles.formcontrol + " " + (hasError ? styles.error : "")}>
            <div>
                <textarea {...field} {...props} />
            </div>
            {hasError && <span>{errors[field.name]}</span>}
        </div>
    );
};

// Компонент Input для использования с Formik
export const Input = ({ field, form: { touched, errors }, ...props }) => {
    const hasError = touched[field.name] && errors[field.name];
    return (
        <div className={styles.formcontrol + " " + (hasError ? styles.error : "")}>
            <div>
                <input {...field} {...props} />
            </div>
            {hasError && <span>{errors[field.name]}</span>}
        </div>
    );
};

// Функция для создания полей
export const createField = (placeholder, name, validators, component, props = {}, text = "") => {
    return (
        <div>
            <Field
                placeholder={placeholder}
                name={name}
                component={component}
                validate={validators}
                {...props}
            />
            {text}

        </div>
    );
};
