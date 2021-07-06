export const emptyUser = {
    id: '',
    username: '',
    email: '',
    role: {
        type: 'public', // public || authenticated
    }
}

export const initialState = { jwt: null, user: emptyUser };

export const AuthReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_TOKEN':
            return { ...state, jwt: action.payload };
        case 'SET_USER':
            return { ...state, user: { ...action.payload } };
        default:
            throw new Error(`Unhandled action type: ${action.type}`);
    }
}