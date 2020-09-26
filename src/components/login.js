import React from 'react';


export default function LogIn(props){
    return (
        <>
            <h3>Log in</h3>
            <form>
                <label>
                    Username<br/>
                    <input type='text' name='username' placeholder='username'/>
                </label><br/>
                <label>
                    Password<br/>
                    <input type='password' name='password' placeholder='password'/>
                </label><br/>
                <button>LOG IN</button>
            </form>
        </>
    );
}