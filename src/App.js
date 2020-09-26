import React from 'react';
import { connect } from 'react-redux';

import './App.css';
import LogIn from './components/login';
import Registration from './components/registration'
import Posting from './components/posting';
import Show from './components/show';
import LogOut from './components/logout';


function App(props) {
  return (
    <>
      <Show condition={!props.data.signedIn}>
        <LogIn />
        <Registration />
      </Show>
      <Show condition={props.data.signedIn}>
        <Posting />
        <LogOut/>
      </Show>
    </>
  );
}
const mapStateToProps = (state) => {
  // console.log('state',state)
  return {
    data: state,
  };
};
export default connect(mapStateToProps)(App);
