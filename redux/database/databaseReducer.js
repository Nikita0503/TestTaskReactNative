import {
    ADD_USER,
    ADD_DRY_CLEANING_PLACE,
    DELETE_DRY_CLEANING_PLACE,
    UPDATE_ORDER,
    CHANGE_CURRENT_USER,
    UPDATE_USER,
    ADD_ORDER,
    RETURN_MONEY,
    DELETE_ORDER
} from './databaseActions';

const defaultState = {
    users: [{
        email: 1,
        password: 1,
        name: 'admin',
        type: 'admin',
    },
    {
        email: '2',
        password: 2,
        name: 'Nikita',
        type: 'client',
        balance: 340
    }],
    dryCleaningPlaces: [

    ],
    orders: [{
        id: 1,
        client: {
            email: '2',
            password: 2,
            name: 'Nikita',
            type: 'client',
        },
        service: {name: 'wash cap', cost: 5},
        date: '01.02.2021',
        status: 1
    },
    {
        id: 2,
        client: {
            email: '2',
            password: 2,
            name: 'Nikita',
            type: 'client',
        },
        service: {name: 'clean t-shirt', cost: 14},
        date: '05.03.2021',
        status: 1
    }],
    currentUser: null
}

export const databaseReducer = (state = defaultState, action) => {
    switch (action.type){
        case ADD_USER:
            return {
                ...state,
                users: [...state.users, action.payload]
            }
        case ADD_DRY_CLEANING_PLACE:
            return {
                ...state,
                dryCleaningPlaces: [...state.dryCleaningPlaces, action.payload]
            }
        case DELETE_DRY_CLEANING_PLACE:
            return {
                ...state,
                dryCleaningPlaces: state.dryCleaningPlaces.filter(item => item.id !== action.payload)
            }
        case UPDATE_ORDER:
            return {
                ...state,
                orders: state.orders.map(item => {
                    if(item.id == action.payload.id){
                        return action.payload
                    }else{
                        return item
                    }
                })
            }
        case CHANGE_CURRENT_USER:
            return {
                ...state,
                currentUser: action.payload
            }
        case UPDATE_USER:
            return {
                ...state,
                users: state.users.map(item => {
                    if(item.email == action.payload.email){
                        return action.payload
                    }else{
                        return item
                    }
                })
            }
        case ADD_ORDER:
            return {
                ...state,
                orders: [...state.orders, action.payload]
            }
        case RETURN_MONEY:
            return {
                ...state,
                users: state.users.map(item => {
                    if(item.email == action.payload.client.email){
                        var user = item;
                        user.balance += parseInt(action.payload.service.cost)
                        return user
                    }else{
                        return item
                    }
                })
            }
        case DELETE_ORDER:
            return {
                ...state,
                orders: state.orders.filter(item => item.id != action.payload.id)
            }
    }
    return state;
}