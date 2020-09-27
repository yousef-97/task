import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addPostAction, addFriendAction } from '../store/reducers';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import ListGroup from 'react-bootstrap/ListGroup';

function Posting(props) {
    const [thePost, setThePost] = useState('');
    const changeInput = (e) => {
        setThePost(e.target.value)
    }
    const postingFunction = (e) => {
        e.preventDefault();
        props.addPost(thePost)
        e.target.reset();
        setThePost('');
    }

    return (
        <>
            <Form onSubmit={postingFunction}>
                <Form.Group>
                    <h3>share your thoughts</h3>
                    <Form.Control as="textarea" rows="3" placeholder='share your thoughts' name='post' onChange={changeInput} required />
                </Form.Group>
                    <Button variant="primary" type="submit">POST</Button>
            </Form>
            <ListGroup>
                <h4 className='add'>My Posts</h4>
                {props.data.signedInUser.posts.map(onePost =>
                    <ListGroup.Item key={Math.random()}>
                        <p>{onePost}</p>
                    </ListGroup.Item>
                )}
            </ListGroup>

            <ListGroup className='peoplelist'>
                <h4 className='add'>My Friends</h4>
                <h4 className='notFriendsList'>People You Can Add To Friends List</h4>
                {props.data.users.map(user =>
                    <ListGroup.Item key={Math.random()} className='people'>
                        {user.username !== props.data.signedInUser.username && props.data.signedInUser.friends.includes(user.username) ?
                            <h5>{user.username}<button className='zind' onClick={() => props.addFriend(user.username)}>X</button></h5>
                            :user.username !== props.data.signedInUser.username?<h5 className='notFriends'>{user.username}<button className='zind' onClick={() => props.addFriend(user.username)}>send request</button></h5>:null }

                    </ListGroup.Item>
                )}
            </ListGroup>
        </>
    );
}
const mapStateToProps = (state) => {
    return {
        data: state,
    };
};

const mapDispatchToProps = (dispatch) => ({
    addPost: (thePost) => dispatch(addPostAction(thePost)),
    addFriend: (newFriend) => dispatch(addFriendAction(newFriend))
});
export default connect(mapStateToProps, mapDispatchToProps)(Posting);