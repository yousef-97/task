import React from 'react';
import { connect } from 'react-redux';
import LogIn from './components/login';
import Registration from './components/registration'
import Posting from './components/posting';
import Show from './components/show';
import LogOut from './components/logout';
import './App.scss'

function App(props) {

  
  console.log('hey');
  return (
    <>
      <main>
        <Show condition={!props.data.signedIn}>
          <LogIn />
          <Registration />
        </Show>
        <Show condition={props.data.signedIn}>
          <div className='post'>
            <LogOut />
            <Posting />
          </div>
        </Show>
      </main>
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
