import { useState } from 'react';
import {
    signInWithGooglePopup,
    createUserDocumentFromAuth,
    signInAuthUserWithEmailandPassword
} from '../../utils/firebase/firebase.utils';

import FormInput from '../form-input/form-input.component';
import Button from '../button/button.component';

import './sign-in-form.styles.scss';

const defaultFormFields = {
    email: '',
    password: ''
}

const SignInForm = () => {

    const [formField, setFormField] = useState(defaultFormFields);
    const { email, password } = formField;

    const resetFormFields = () => {
        setFormField(defaultFormFields);
    }

    const signInWithGooggle = async () => {
        const { user } = await signInWithGooglePopup();
        // console.log(user);
        const userDocRef = await createUserDocumentFromAuth(user);
    }

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const response = await signInAuthUserWithEmailandPassword(
                email,
                password
            );
            console.log(response);
            resetFormFields();
        } catch (error) {
            switch (error.code) {
                case 'auth/wrong-password':
                    alert("incorrect password for email");
                    break;
                case 'auth/user-not-found':
                    alert("no user assosiated with this email");
                    break;
                default:
                    console.log(error);
            }

        }
    }

    const handleChange = event => {
        const { type, value } = event.target;
        setFormField({ ...formField, [type]: value });
    }

    return (
        <div className='sign-in-container'>
            <h2>I already have an account</h2>
            <span>Sign in with your email and password</span>
            <form onSubmit={handleSubmit}>
                <FormInput
                    label="email"
                    type="email"
                    required
                    name="email"
                    onChange={handleChange}
                    value={email}
                />
                <FormInput
                    label="password"
                    type="password"
                    name="password"
                    required
                    onChange={handleChange}
                    value={password}
                />
                <div className='buttons-container'>
                    <Button type="submit">
                        sign in
                    </Button>
                    <Button type="button" buttonType='google' onClick={signInWithGooggle}>
                        google signin
                    </Button>
                </div>
            </form>
        </div>
    )
}

export default SignInForm;
