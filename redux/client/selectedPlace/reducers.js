import {
    CHANGE_SELECTED_PLACE, 
} from './actions';

const defaultState = {
    selectedPlace: null
}

export const selectedPlaceReducer = (state = defaultState, action) => {
    switch (action.type){
        case CHANGE_SELECTED_PLACE:
            return {
                ...state,
                selectedPlace: action.payload
            }
    }
    return state;
}