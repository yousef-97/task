import React from 'react';
import { connect } from 'react-redux';
import {getTheUsersAction, registerNewUserAction, logoutAction} from '../store/reducers';

function LogOut(props){
    return (
        <>
            <button onClick={props.logout}>Log out</button>
        </>
    );
}
const mapStateToProps = (state) => {
    // console.log('state',state)
    return {
      data:state,
    };
  };
  
  const mapDispatchToProps =(dispatch)=> ({
    getUsers:()=>dispatch(getTheUsersAction()),
    register:(newUser)=>dispatch(registerNewUserAction(newUser)),
    logout:()=>dispatch(logoutAction())
  });
export default connect(mapStateToProps, mapDispatchToProps)(LogOut);

