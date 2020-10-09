import {
    CHANGE_NAME,
    CHANGE_DESCRIPTION,
    CHANGE_SERVICE_NAME,
    CHANGE_SERVICE_COST,
    ADD_SERVICE,
    ADD_PHOTO,
    CHANGE_TYPE
} from './actions';

const defaultState = {
    name: '',
    description: '',
    serviceName: '',
    serviceCost: 0,
    services: [],
    photos: [],
    type: undefined
}

export const addNewPlaceReducer = (state = defaultState, action) => {
    switch (action.type){
        case CHANGE_NAME:
            return {
                ...state,
                name: action.payload
            }
        case CHANGE_DESCRIPTION:
            return {
                ...state,
                description: action.payload
            }
        case CHANGE_SERVICE_NAME:
            return {
                ...state,
                serviceName: action.payload
            }
        case CHANGE_SERVICE_COST:
            return {
                ...state,
                serviceCost: action.payload
            }
        case ADD_SERVICE:
            return {
                ...state,
                services: [...state.services, {id: state.services.length + 1, name: state.serviceName, cost: state.serviceCost}],
                serviceName: '',
                serviceCost: 0
            }
        case ADD_PHOTO:
            return {
                ...state,
                photos: [...state.photos, action.payload]
            }
        case CHANGE_TYPE:
            return {
                ...state,
                type: action.payload
            }
    }
    return state;
}