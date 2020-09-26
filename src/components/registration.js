import React from 'react';

export default function Registration(props){
    return(
        <>
              <form>
                  <h3>Registration</h3>
                <label>
                    Username<br/>
                    <input type='text' name='username' placeholder='username'/>
                </label><br/>
                <label>
                    Password<br/>
                    <input type='password' name='password' placeholder='password'/>
                </label><br/>
                <button>SIGN UP</button>
            </form>
        </>
    );
}