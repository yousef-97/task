const initialState = {
    users:[
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
signedInUser:{},
signedIn:false,
};

//Reducer
export default (state = initialState, action) => {
    const { type, payload } = action;

    switch(type){
        case 'GETUSERS':
            return state.users;
        case 'REGISTER':
            // console.log(state, 'state in reducer')
            state.users.push({...payload, friends: [], posts: []});
            return {...state, signedInUser:{...payload, friends: [], posts: []}, signedIn:true}
        default:
            return state;   
        
    }
}

//Actions

export const getTheUsersAction = ()=>{
    return {
        type:'GETUSERS',
    }
}
export const registerNewUserAction = (newUser)=>{
    return {
        type:'REGISTER',
        payload:newUser,
    }
}