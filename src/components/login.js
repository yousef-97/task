import React, { useState } from 'react';
import { connect } from 'react-redux';
import {getTheUsersAction, loginAction} from '../store/reducers';

function LogIn(props){
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
            <h3>Log in</h3>
            <form onSubmit={LogInFunction}>
                <label>
                    Username<br/>
                    <input type='text' name='username' placeholder='username' onChange={changeInput} />
                </label><br/>
                <label>
                    Password<br/>
                    <input type='password' name='password' placeholder='password' onChange={changeInput}/>
                </label><br/>
                <button>LOG IN</button>
            </form>
        </>
    );
}
const mapStateToProps = (state) => {
    return {
      data:state,
    };
  };
  
  const mapDispatchToProps =(dispatch)=> ({
    getUsers:()=>dispatch(getTheUsersAction()),
    login:(userInput)=>dispatch(loginAction(userInput))
  });
export default connect(mapStateToProps, mapDispatchToProps)(LogIn);