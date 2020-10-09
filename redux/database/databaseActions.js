export const ORDER_STATUS_NEW = 1;
export const ORDER_STATUS_COMPLETED = 2;
export const ORDER_STATUS_REJECTED = 3;
export const ADD_USER = 'ADD_USER';
export const ADD_DRY_CLEANING_PLACE = 'ADD_DRY_CLEANING_PLACE';
export const DELETE_DRY_CLEANING_PLACE = 'DELETE_DRY_CLEANING_PLACE';
export const UPDATE_ORDER = 'UPDATE_ORDER';
export const CHANGE_CURRENT_USER = 'CHANGE_CURRENT_USER';
export const UPDATE_USER = 'UPDATE_USER';
export const ADD_ORDER = 'ADD_ORDER';
export const RETURN_MONEY = 'RETURN_MONEY';
export const DELETE_ORDER = 'DELETE_ORDER';

export const addUser = user => ({
    type: ADD_USER,
    payload: user
});

export const addDryCleaningPlace = dryCleaningPlace => ({
    type: ADD_DRY_CLEANING_PLACE,
    payload: dryCleaningPlace
});

export const deleteDryCleaningPlace = dryCleaningPlace => ({
    type: DELETE_DRY_CLEANING_PLACE,
    payload: dryCleaningPlace
});

export const updateOrder = order => ({
    type: UPDATE_ORDER,
    payload: order
});

export const setCurrentUser = user => ({
    type: CHANGE_CURRENT_USER,
    payload: user
});

export const updateUser = user => ({
    type: UPDATE_USER,
    payload: user
});

export const addOrder = order => ({
    type: ADD_ORDER,
    payload: order
});

export const returnMoney = (order) => ({
    type: RETURN_MONEY,
    payload: order
})

export const deleteOrder = (order) => ({
    type: DELETE_ORDER,
    payload: order
})

export const orderService = (currentUser, service) => {
    return async dispatch => {
        var user = currentUser;
        user.balance -= service.cost;
        dispatch(updateUser(user));
        dispatch(setCurrentUser(user));
        const date = new Date();
        let dateOfCreating = date.getFullYear()
        dateOfCreating += "."
        dateOfCreating += parseInt(date.getMonth()) + 1
        dateOfCreating += "."
        dateOfCreating += date.getDate();
        dispatch(addOrder({
            id: new Date().getTime(),
            client: user,
            service: service,
            date: dateOfCreating,
            status: ORDER_STATUS_NEW
        }))               
    }
}