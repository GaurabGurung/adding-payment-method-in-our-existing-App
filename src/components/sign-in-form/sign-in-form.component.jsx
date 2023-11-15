import Button ,{ BUTTON_TYPE_CLASSES} from '../button/button.component';
import {  useState } from 'react';
import FormInput from '../form-input/form-input.component';
import {SignInContainer, TextStyle, ButtonContainer} from './sign-in-form.styles.jsx'
import { useDispatch } from 'react-redux';
import { googleSignInStart, emalSignInStart } from '../../store/user/user.action';


const defaultFormFields = {
    email : '',
    password : '',
}

const SignInForm = () => {

    const dispatch = useDispatch();
    const [ formFields , setFormFields ] = useState (defaultFormFields);
    const { email, password} = formFields;

    const resetFormFields = () => {
        setFormFields(defaultFormFields);
    }
    
    const signInWithGoogle = async () => {
        dispatch(googleSignInStart());

   }

    const handleSubmit = async (event)=> {
        event.preventDefault();

        try {   
            dispatch(emalSignInStart(email, password))
            resetFormFields ();
            
               }catch(error){
                    switch (error.code) {
                    case 'auth/user-not-found' : 
                            alert('User not found');
                            break;
                        
                        case 'auth/wrong-password' :
                            alert (' Wrong Password');
                            break;

                        default:
                            console.log(error)    
                }
            }
        };

        const handleChange = (event) => {
        const {name, value} = event.target;
        setFormFields({...formFields, [name]:value});
    };

    return (
        <SignInContainer>
            <TextStyle> Already have an account?</TextStyle>
            <span> Sign in with your email and password </span>
            <form onSubmit={handleSubmit}>

                <FormInput 
                    type= "email" 
                    name='email'
                    required       
                    label= 'Email'
                    onChange={ handleChange }
                    value = {email}
                />
                <FormInput
                    type= "password" 
                    name='password'
                    required
                    label= 'Password' 
                    onChange={ handleChange }  
                    value = {password} 
                />
                <ButtonContainer>
                    <Button type = 'submit'>
                        Sign in
                    </Button>
                    <Button 
                        type = 'button'
                        onClick= {signInWithGoogle}
                        buttonType = {BUTTON_TYPE_CLASSES.google}
                    > Google sign in 
                    </Button>
                </ButtonContainer>

            </form>
        </SignInContainer>
    )
}

export default SignInForm;