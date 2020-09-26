const initialState = [
    {
        name: 'yousef',
        password: '1234',
        friends: ['ahmad', 'mohammad', 'john doe'],
        posts: ['Good Morning Yousef', 'Good Night Yousef']
    },
    {
        name: 'ahmad',
        password: '1234',
        friends: ['yousef', 'john doe'],
        posts: ['Good Morning Ahmad', 'Good Night Ahmad']
    },
    {
        name: 'mohammad',
        password: '1234',
        friends: ['yousef'],
        posts: ['Good Morning Mohammad', 'Good Night Mohammad']
    },
    {
        name: 'john doe',
        password: '1234',
        friends: ['yousef', 'ahmad'],
        posts: ['Good Morning John doe', 'Good Night John doe']
    }
];

export default (state = initialState, action) => {
    const { type, payload } = action;

    switch(type){
        
    }
}