const initialState = {
    users: [
        {
            username: 'yousef',
            password: '1234',
            friends: ['ahmad', 'mohammad', 'john doe'],
            posts: ['Good Morning Yousef', 'Good Night Yousef']
        },
        {
            username: 'ahmad',
            password: '1234',
            friends: ['yousef', 'john doe'],
            posts: ['Good Morning Ahmad', 'Good Night Ahmad']
        },
        {
            username: 'mohammad',
            password: '1234',
            friends: ['yousef'],
            posts: ['Good Morning Mohammad', 'Good Night Mohammad']
        },
        {
            username: 'john doe',
            password: '1234',
            friends: ['yousef', 'ahmad'],
            posts: ['Good Morning John doe', 'Good Night John doe']
        }
    ],
    signedInUser: {},
    signedIn: false,
};

//Reducer
export default (state = initialState, action) => {
    const { type, payload } = action;

    switch (type) {
        case 'GETUSERS':
            return state.users;
        case 'LOGOUT':
            return { ...state, signedInUser: {}, signedIn: false };
        case 'LOGIN':
            let checkingUser = state.users.filter(user => {
                return user.username.toUpperCase() === payload.username.toUpperCase() && user.password === payload.password
            });
            return checkingUser.length ? { ...state, signedInUser: checkingUser[0], signedIn: true } : state;
        case 'REGISTER':
            state.users.push({ ...payload, friends: [], posts: [] });
            return { ...state, signedInUser: { ...payload, friends: [], posts: [] }, signedIn: true }
        case 'POSTING':
            let userWithNewPost = state.users.filter(user => {
                if (user.username.toUpperCase() === state.signedInUser.username.toUpperCase()) {
                    user.posts.unshift(payload);
                    return user;
                } else { return false }
            })
            return { ...state, signedInUser: userWithNewPost[0] }

        case 'ADDFRIEND':
            let theUserWithNewFriend = state.users.filter(user => {
                if (user.username.toUpperCase() === state.signedInUser.username.toUpperCase()) {
                    if (user.friends.includes(payload)) {
                        let theIndexOfExistingFriend = user.friends.indexOf(payload);
                        user.friends.splice(theIndexOfExistingFriend, theIndexOfExistingFriend + 1);
                    } else { user.friends.push(payload) }
                    return user;
                } else { return false }
            })

            return { ...state, signedInUser: theUserWithNewFriend[0] }
        default:
            return state;

    }
}

//Actions

export const getTheUsersAction = () => {
    return {
        type: 'GETUSERS',
    }
}
export const registerNewUserAction = (newUser) => {
    return {
        type: 'REGISTER',
        payload: newUser,
    }
}
export const logoutAction = () => {
    return {
        type: 'LOGOUT',
    }
}
export const loginAction = (theUser) => {
    return {
        type: 'LOGIN',
        payload: theUser,
    }
}
export const addPostAction = (post) => {
    return {
        type: 'POSTING',
        payload: post,
    }
}
export const addFriendAction = (newFried) => {
    return {
        type: 'ADDFRIEND',
        payload: newFried,
    }
}
