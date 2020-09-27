import React, { useState } from 'react';
import { connect } from 'react-redux';
import { loginAction } from '../store/reducers';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
// import './style.scss'

function LogIn(props) {
    const [theUserForLogIn, setTheUserForLogIn] = useState({ username: '', password: '' });

    const changeInput = (e) => {
        setTheUserForLogIn({ ...theUserForLogIn, [e.target.name]: e.target.value })

    }
    const LogInFunction = (e) => {
        e.preventDefault();
        props.login(theUserForLogIn)
        e.target.reset();
    }
    return (
        <>
            <Form onSubmit={LogInFunction} className='form'>
                <h3>Log in</h3>
                <Form.Group controlId="formBasicEmail">

                    <Form.Label>
                        Username
                    </Form.Label>
                    <Form.Control type='text' name='username' placeholder='username' onChange={changeInput} />
                </Form.Group>
                <Form.Group controlId="formBasicEmail">

                    <Form.Label>
                        Password
                    </Form.Label>
                    <Form.Control type='password' name='password' placeholder='password' onChange={changeInput} />
                </Form.Group>
                <Button variant="primary" type="submit">LOG IN</Button>
            </Form>
        </>
    );
}
const mapStateToProps = (state) => {
    return {
        data: state,
    };
};

const mapDispatchToProps = (dispatch) => ({
    login: (userInput) => dispatch(loginAction(userInput))
});
export default connect(mapStateToProps, mapDispatchToProps)(LogIn);