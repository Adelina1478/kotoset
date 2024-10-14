import { ErrorMessage, Form, Formik } from 'formik';
import React from 'react';
import { validationSchema } from '../../../utils/validators/validators';
import { createField, Input } from '../../common/preloader/formsControls/Formscontrols';
import s from './ProfileInfo.module.css';

const ProfileDataForm = ({ profile, onSubmit }) => {
    const initialValues = {
        fullName: profile?.fullName || '',
        lookingForAJob: profile?.lookingForAJob || false,
        lookingForAJobDescription: profile?.lookingForAJobDescription || '',
        aboutMe: profile?.aboutMe || '',
        contacts:profile?.contacts|| '',
    };

    return (
        <Formik
            initialValues={initialValues}
            onSubmit={onSubmit}// Обработка отправки формы
            validationSchema={validationSchema}

        >
            {({ values }) => (
                <Form>
                    <div>
                        <button type="submit">Сохранить</button>
                    </div>
                    <div>
                        <b>Имя: </b>
                        {createField('Full name', 'fullName', [], Input)}
                    </div>
                    <div>
                        <b>Ищу работу: </b> {values.lookingForAJob ? 'yes' : 'no'}
                        {createField('', 'lookingForAJob', [], Input, { type: 'checkbox' })}
                    </div>

                    {values.lookingForAJob && (
                        <div>
                            <b>Мои профессиональные навыки: </b>
                            {createField('Профессиональные навыки', 'lookingForAJobDescription', [], Input)}
                        </div>
                    )}

                    <div>
                        <b>Обо мне: </b>
                        {createField('Обо мне', 'aboutMe', [], Input)}
                    </div>
                    <div>
                        <b>Контакты: </b> {Object.keys(profile.contacts).map(key=>{
                            return <div key={key} className={s.contact}>
                                <b>{key}: {createField(key,'contacts.'+ key, [], Input)}</b>
                                <ErrorMessage name={`contacts.${key}`} component="div" className={s.error} />
                                </div>
                        })}
                    </div>
                    
                </Form>
            )}
        </Formik>
    );
};

export default ProfileDataForm;
