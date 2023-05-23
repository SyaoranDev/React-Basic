const initState = {
    users:[
        {id: '1', name: 'Anh Tú'},
        {id: '2', name: 'Ngọc Tiền'},
        {id: '3', name: 'Chris'},
        {id: '4', name: 'Leon'}
    ],
    post: []
}

const rootReducer = (state = initState, action) => {
    switch (action.type) {
        case 'DELETE_USER':
            console.log('check action', action)

            let users = state.users;
            users = users.filter(item => item.id !== action.payload.id)

            return{
                ...state, users
            };
        
        case 'CREATE_USRER':
            let id = Math.floor(Math.random() * 10000)
            let user = {id: id, name: `random - ${id}`}

            return{
                ...state, users: [...state.users, user]
            }
        default:
            return state
    }
    
}

export default rootReducer