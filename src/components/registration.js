import React, { useState } from 'react';
import { connect } from 'react-redux';
import { getTheUsersAction, registerNewUserAction } from '../store/reducers';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
// import './style.scss'

function Registration(props) {
    const [theUser, setTheUser] = useState({ username: '', password: '' });

    const changeInput = (e) => {
        setTheUser({ ...theUser, [e.target.name]: e.target.value })
        // console.log(theUser)
    }
    const registerFunction = (e) => {
        e.preventDefault();
        props.register(theUser)
        e.target.reset();
    }
    return (
        <>
            <Form onSubmit={registerFunction} className='form'>
                <h3>Registration</h3>
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
                <Button variant="primary" type="submit">SIGN UP</Button>
            </Form>
        </>
    );
}
const mapStateToProps = (state) => {
    // console.log('state',state)
    return {
        data: state,
    };
};

const mapDispatchToProps = (dispatch) => ({
    getUsers: () => dispatch(getTheUsersAction()),
    register: (newUser) => dispatch(registerNewUserAction(newUser))
});
export default connect(mapStateToProps, mapDispatchToProps)(Registration);