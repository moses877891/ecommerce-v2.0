import { signInWithGooglePopup, createUserDocumentFromAuth } from '../../utils/firebase/firebase.utils';
import SignUpForm from '../../components/sign-up-form/sign-up-form.component';

const SignIn = () => {
    const logGoogleUser = async () => {
        const { user } = await signInWithGooglePopup();
        // console.log(user);
        const userDocRef = await createUserDocumentFromAuth(user);
    }

    return (
        <div>
            <h1>This is signIn Page</h1>
            <button onClick={logGoogleUser}>
                signin with google popup
            </button>
            <SignUpForm />
        </div>
    );
}

export default SignIn;