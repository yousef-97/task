import React from 'react';
import { connect } from 'react-redux';
import {getTheUsersAction, registerNewUserAction, logoutAction} from '../store/reducers';
import Button from 'react-bootstrap/Button';


function LogOut(props){
    return (
        <>
            <Button onClick={props.logout}>Log out</Button>
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

