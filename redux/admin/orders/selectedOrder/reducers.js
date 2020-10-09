import {
    CHANGE_SELECTED_ORDER,
    CHANGE_NAME,
    CHANGE_DATE,
    CHANGE_SERVICE,
    CHANGE_COST,
    CHANGE_WHY_REJECTED,
    CHANGE_STATUS
} from './actions';

const defaultState = {
    selectedOrder: null,
}

export const selectedOrderReducer = (state = defaultState, action) => {
    switch (action.type){
        case CHANGE_SELECTED_ORDER:
            return {
                ...state,
                selectedOrder: action.payload
            }
        case CHANGE_NAME:
            return {
                ...state,
                selectedOrder: {
                    ...state.selectedOrder,
                    client: {
                        ...state.client,
                        name: action.payload
                    }
                }
            }
        case CHANGE_DATE:
            return {
                ...state,
                selectedOrder: {
                    ...state.selectedOrder,
                    date: action.payload
                }
            }
        case CHANGE_SERVICE:
            return {
                ...state,
                selectedOrder: {
                    ...state.selectedOrder,
                    service: {
                        ...state.selectedOrder.service,
                        name: action.payload
                    }
                }
            }
        case CHANGE_COST:
            return {
                ...state,
                selectedOrder: {
                    ...state.selectedOrder,
                    service: {
                        ...state.selectedOrder.service,
                        cost: action.payload
                    }
                }
            }
        case CHANGE_WHY_REJECTED:
            return {
                ...state,
                selectedOrder: {
                    ...state.selectedOrder,
                    whyRejected: action.payload 
                }
            }
        case CHANGE_STATUS:
            return {
                ...state,
                selectedOrder: {
                    ...state.selectedOrder,
                    status: action.payload
                }
            }
    }
    return state;
}