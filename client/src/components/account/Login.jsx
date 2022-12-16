import React, { useState} from 'react';
import { ToastContainer, toast } from 'react-toastify';
import { TextField, Box, Button, Typography, styled } from '@mui/material';
import { API } from '../../service/api';
import {DataContext} from "../context/DataProvider"
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
const Component = styled(Box)`
    margin-top : 5rem;
    width: 400px;
    margin: auto;
    box-shadow: 5px 2px 5px 2px rgb(0 0 0/ 0.6);
`;

const Heading = styled('h1')({
    justifyContent:"center",
    display: 'flex',
    margin: 'auto',
    padding: '50px 0 0'
});
const Wrapper = styled(Box)`
    padding: 25px 35px;
    display: flex;
    flex: 1;
    overflow: auto;
    flex-direction: column;
    & > div, & > button, & > p {
        margin-top: 20px;
    }
`;
const LoginButton = styled(Button)`
    text-transform: none;
    background: #FB641B;
    color: #fff;
    height: 48px;
    border-radius: 2px;
`;
const SignupButton = styled(Button)`
    text-transform: none;
    background: #fff;
    color: #2874f0;
    height: 48px;
    border-radius: 2px;
    box-shadow: 0 2px 4px 0 rgb(0 0 0 / 20%);
`;

const Text = styled(Typography)`
    color: #878787;
    font-size: 12px;
`;
const Error = styled(Typography)`
    font-size: 10px;
    color: #ff6161;
    line-height: 0;
    margin-top: 10px;
    font-weight: 600;
`
const loginInitialValues = {
    email: '',
    password: ''
};
const signupInitialValues = {
    name: '',
    email:'',
    phone:'',
    employee:'',
    password: '',
};
const Login = ({isUserAuthenticated}) => {
    const [login, setLogin] = useState(loginInitialValues);
    const [signup, setSignup] = useState(signupInitialValues);
    const [error, showError] = useState('');
    const [account, toggleAccount] = useState('login');
   const {setAccount} = useContext(DataContext);
   const navigate = useNavigate()
    const onValueChange = (e) => {
        setLogin({ ...login, [e.target.name]: e.target.value });
    }     
    const onInputChange = (e) => {
        setSignup({ ...signup, [e.target.name]: e.target.value });
    }
    const signupUsers = async () => {
        
        let response = await API.userSignup(signup);      
        if (response.isSuccess) {
            showError('');
            setSignup(signupInitialValues);
            toggleAccount('login');
            toast.success(response.data.msg)
        } else {
             showError('Something went wrong! please try again later');
        
            toast.error(response.msg)
        }
    }
    const loginUser = async () =>{
        let response = await API.userLogin(login);
        if (response.isSuccess) {
            showError('');
            navigate('/')
            sessionStorage.setItem('accessToken', `Bearer ${response.data.accessToken}`);
            sessionStorage.setItem('refreshToken', `Bearer ${response.data.refreshToken}`);
            setAccount({_id : response.data._id, email : response.data.email, name : response.data.name,phone : response.data.phone, employee : response.data.employee})
            isUserAuthenticated(true)
            toast.success(response.data.msg)
        } else {
             showError('Something went wrong! please try again later');
           
            toast.error(response.data.msg)
        }
    }
    const toggleSignup = () => {
        account === 'signup' ? toggleAccount('login') : toggleAccount('signup');
    }
    return (
        <Component>
            <ToastContainer/>
            <Box mt={5}>
               <Heading>PURSUE <span style={{color:"#FB641B"}}>TODAY</span></Heading>
                {
                    account === 'login' ?
                        <Wrapper>
                            <TextField type='text' variant="standard" value={login.email} onChange={(e) => onValueChange(e)} name='email' label='Enter Your Email' />
                            <TextField type='password' variant="standard" value={login.password} onChange={(e) => onValueChange(e)} name='password' label='Enter Your Password' />
                            {error && <Error>{error}</Error>}
                            <LoginButton variant="contained"  onClick={()=>loginUser()}>Login</LoginButton>
                            <Text style={{ textAlign: 'center' }}>OR</Text>
                            <SignupButton onClick={() => toggleSignup()} style={{ marginBottom: 50 }}>Create an account</SignupButton>
                        </Wrapper> :
                        <Wrapper>
                            <TextField type='text' variant="standard" value={signup.name} onChange={(e) => onInputChange(e)} name='name' label='Enter Your Name' />
                            <TextField type='text' variant="standard" value={signup.phone} onChange={(e) => onInputChange(e)} name='phone' label='Enter Your Phone' />
                            <TextField type='text' variant="standard" value={signup.email} onChange={(e) => onInputChange(e)} name='email' label='Enter Your Email' />
                            <TextField type='text' variant="standard" value={signup.employee} onChange={(e) => onInputChange(e)} name='employee' label='Employee' />

                            <TextField type='password' variant="standard" value={signup.password} onChange={(e) => onInputChange(e)} name='password' label='Enter Your Password' />
                            <SignupButton  onClick={() => signupUsers()}>Signup</SignupButton>
                            <Text style={{ textAlign: 'center' }}>OR</Text>
                            <LoginButton variant="contained" onClick={() => toggleSignup()}>Already have an account</LoginButton>
                        </Wrapper>
                         }
            </Box>
        </Component>
    )
}

export default Login;