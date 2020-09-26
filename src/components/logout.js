import React from 'react';
import { connect } from 'react-redux';
import {logoutAction} from '../store/reducers';
import Button from 'react-bootstrap/Button';


function LogOut(props){
    return (
        <>
            <Button onClick={props.logout}>Log out</Button>
        </>
    );
}
const mapStateToProps = (state) => {
    return {
      data:state,
    };
  };
  
  const mapDispatchToProps =(dispatch)=> ({
  
    logout:()=>dispatch(logoutAction())
  });
export default connect(mapStateToProps, mapDispatchToProps)(LogOut);

