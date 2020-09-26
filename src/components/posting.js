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
    }

    return (
        <>
            <Form onSubmit={postingFunction}>
                <Form.Group>
                    <h3>share your thoughts</h3>
                    <Form.Control as="textarea" rows="3" placeholder='share your thoughts' name='post' onChange={changeInput} />
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

            <ListGroup>
                <h4 className='add'>Add Or Remove Friends</h4>
                {props.data.users.map(user =>
                    <ListGroup.Item key={Math.random()} onClick={() => props.addFriend(user.username)} className='people'>
                        {user.username !== props.data.signedInUser.username ?
                            <h4>{user.username} {props.data.signedInUser.friends.includes(user.username) ? <span> Click To Add To Friends List</span> : <span>Click To Remove From Friends List</span>}</h4>
                            : null}

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