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
            // console.log(state, 'state in reducer')
            state.users.push({ ...payload, friends: [], posts: [] });
            return { ...state, signedInUser: { ...payload, friends: [], posts: [] }, signedIn: true }
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
