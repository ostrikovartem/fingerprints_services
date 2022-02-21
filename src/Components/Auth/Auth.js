import React, {useState} from 'react'
import {makeStyles} from '@mui/styles';
import TextField from '@mui/material/TextField';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import axios from 'axios';

//https://identitytoolkit.googleapis.com/v1/accounts:signInWithCustomToken?key=AIzaSyBwF1JUubDDiwPji9ZpA096-am5DUklRUY


const useStyles = makeStyles({
    field: {
        display: 'block',
        color: 'red',
        marginTop: 80,
        marginBottom: 40
    },
});

const Auth = () => {

    const[email, setEmail] = useState('');

    const[password, setPassword] = useState('');

    const registerHandler = async () => {
        const authData = {
            email,
            password,
            returnSecureToken: true
        };
        try {
            const responce = await axios.post('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBwF1JUubDDiwPji9ZpA096-am5DUklRUY', authData)
            console.log(responce)
        } catch(e) {
            console.log(e)
        }
    };

    const loginHandler = async () => {
        const authData = {
            email,
            password,
            returnSecureToken: true
        };
        try {
            const responce = await axios.post('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBwF1JUubDDiwPji9ZpA096-am5DUklRUY', authData)
            console.log(responce)
        } catch(e) {
            console.log(e)
        }
    };

    const onChangeEmailHandler = event => {
        let value = event.target.value
        setEmail(value)
    };

    const onChangePasswordHandler = event => {
        let value = event.target.value
        setPassword(value)
    };

    const submitHandler = event => event.preventDefault()

    const classes = useStyles();

    return (
        <Container maxWidth="sm">
            <Typography
                variant='h3'
                color='textSecondary'
                gutterBottom
            >
                Authorization
            </Typography>
            <Box
                onSubmit={submitHandler}
                noValidate autocomplete='off'
            >
                <TextField
                    onChange={event => onChangeEmailHandler(event)}
                    className={classes.field}
                    label='Email'
                    variant='outlined'
                    color='secondary'
                    fullWidth
                    required
                    gutterBottom
                />
                <TextField
                    onChange={event => onChangePasswordHandler(event)}
                    className={classes.field}
                    label='Password'
                    variant='outlined'
                    color='secondary'
                    fullWidth
                    required
                    gutterBottom
                />
            </Box>
            <Box className='buttons' mt={4}>
                <Button
                    onClick={loginHandler}
                    variant="contained"
                >
                    Sign in
                </Button>
                <Button
                    onClick={registerHandler}
                    variant="outlined"
                >
                    Sign up
                </Button>
            </Box>
        </Container>
    )
};

export default Auth