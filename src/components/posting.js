import React, { useState } from 'react';
import { connect } from 'react-redux';
import { getTheUsersAction, addPostAction } from '../store/reducers';

function Posting(props) {
    const [thePost, setThePost] = useState('');
    const changeInput = (e) => {
        setThePost( e.target.value )
    }
    const postingFunction = (e) => {
        e.preventDefault();
        props.addPost(thePost)
        e.target.reset();
    }
    return (
        <>
            <form onSubmit={postingFunction}>
                <br />
                <h3>share your thoughts</h3>
                <textarea placeholder='share your thoughts' name='post' onChange={changeInput}></textarea><br />
                <button>POST</button>
            </form>
            {props.data.signedInUser.posts.map(onePost =>
                <div key={Math.random()}>
                   <p>{onePost}</p>
                </div>
            )}

            {props.data.users.map(user =>
                <div key={user.username}>
                    {/* <h4>{user.username}</h4> */}
                    {user.username !== props.data.signedInUser.username ?
                        <h4 >{user.username} is {props.data.signedInUser.friends.includes(user.username) ? `Your friend` : `Not your friend`}</h4>
                        : null}
                </div>
            )}
        </>
    );
}
const mapStateToProps = (state) => {
    return {
        data: state,
    };
};

const mapDispatchToProps = (dispatch) => ({
    getUsers: () => dispatch(getTheUsersAction()),
    addPost:(thePost)=>dispatch(addPostAction(thePost))
});
export default connect(mapStateToProps, mapDispatchToProps)(Posting);