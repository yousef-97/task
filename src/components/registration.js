import React, { useState } from 'react';
import { connect } from 'react-redux';
import {getTheUsersAction, registerNewUserAction} from '../store/reducers';

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
            <form onSubmit={registerFunction}>
                <h3>Registration</h3>
                <label>
                    Username<br />
                    <input type='text' name='username' placeholder='username' onChange={changeInput} />
                </label><br />
                <label>
                    Password<br />
                    <input type='password' name='password' placeholder='password' onChange={changeInput} />
                </label><br />
                <button>SIGN UP</button>
            </form>
        </>
    );
}
const mapStateToProps = (state) => {
    console.log('state',state)
    return {
      data:state,
    };
  };
  
  const mapDispatchToProps =(dispatch)=> ({
    getUsers:()=>dispatch(getTheUsersAction()),
    register:(newUser)=>dispatch(registerNewUserAction(newUser))
  });
export default connect(mapStateToProps, mapDispatchToProps)(Registration);