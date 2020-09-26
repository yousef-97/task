import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getTheUsersAction } from '../store/reducers';

function Posting(props) {
    // console.log('data in posting component' ,props.data.users)
    // useEffect(() => {
    //     // console.log('get users');
    //     props.getUsers();
    // }, [])
    return (
        <>
            <form>
                <br />
                <h3>share your thoughts</h3>
                <textarea placeholder='share your thoughts'></textarea><br />
                <button>POST</button>
            </form>

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
    // console.log('state',state)
    return {
        data: state,
    };
};

const mapDispatchToProps = (dispatch) => ({
    getUsers: () => dispatch(getTheUsersAction())
});
export default connect(mapStateToProps, mapDispatchToProps)(Posting);