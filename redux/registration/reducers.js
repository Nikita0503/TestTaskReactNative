import {
    CHANGE_EMAIL,
    CHANGE_PASSWORD, 
    CHANGE_REPEAT_PASSWORD,
    CHANGE_NAME,
    CHANGE_IS_ADMIN
} from './actions';

const defaultState = {
    email: '',
    password: '',
    repeatPassword: '',
    name: '',
    isAdmin: false
}

export const registrationReducer = (state = defaultState, action) => {
    switch (action.type){
        case CHANGE_EMAIL:
            return {
                ...state,
                email: action.payload
            }
        case CHANGE_PASSWORD:
            return {
                ...state,
                password: action.payload
            }
        case CHANGE_REPEAT_PASSWORD:
            return {
                ...state,
                repeatPassword: action.payload
            }
        case CHANGE_NAME:
            return {
                ...state,
                name: action.payload
            }
        case CHANGE_IS_ADMIN:
            return {
                ...state,
                isAdmin: !state.isAdmin
            }
    }
    return state;
}