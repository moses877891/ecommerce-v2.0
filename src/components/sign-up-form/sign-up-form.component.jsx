import { useState, useContext } from "react";
import {
    createAuthUserWithEmailandPassword,
    createUserDocumentFromAuth
} from "../../utils/firebase/firebase.utils";


import FormInput from "../form-input/form-input.component";
import Button from '../button/button.component';
import { UserContext } from "../../contexts/user.context";

import './sign-up.styles.scss';

const defaultFormFields = {
    displayName: '',
    email: '',
    password: '',
    confirmPassword: ''
}

const SignUpForm = () => {
    const [formField, setFormField] = useState(defaultFormFields);
    const { displayName, email, password, confirmPassword } = formField;

    const { setCurrentUser } = useContext(UserContext);

    const resetFormFields = () => {
        setFormField(defaultFormFields);
    }

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (password !== confirmPassword) {
            alert("passwords do not match");
            return;
        }

        try {
            const { user } = await createAuthUserWithEmailandPassword(
                email,
                password
            );

            await createUserDocumentFromAuth(user, { displayName });
            resetFormFields();

        } catch (error) {
            if (error.code === 'auth/email-already-in-use') {
                alert("cannot create user, user already in use");
            }
            console.log('user creating encountered an error', error);
        }
    }

    const handleChange = event => {
        const { name, value } = event.target;
        setFormField({ ...formField, [name]: value });
    }

    return (
        <div className="sign-up-container">
            <h2>Don't have an account?</h2>
            <span>sign up with your email and password</span>
            <form onSubmit={handleSubmit}>
                <FormInput
                    label="Display Name"
                    type="text"
                    required
                    onChange={handleChange}
                    name='displayName'
                    value={displayName}
                />

                <FormInput
                    label="Email"
                    type="email"
                    required
                    onChange={handleChange}
                    name='email'
                    value={email}
                />

                <FormInput
                    label="password"
                    type="password"
                    required
                    onChange={handleChange}
                    name='password'
                    value={password}
                />

                <FormInput
                    label="confirm password"
                    type="password"
                    required
                    onChange={handleChange}
                    name='confirmPassword'
                    value={confirmPassword}
                />

                <Button type="submit">sign up</Button>
            </form>
        </div>
    )
}

export default SignUpForm;