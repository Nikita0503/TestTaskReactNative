export const CHANGE_SELECTED_ORDER = 'CHANGE_SELECTED_ORDER';
export const CHANGE_NAME = 'SELECTED_ORDER_CHANGE_NAME';
export const CHANGE_DATE = 'SELECTED_ORDER_CHANGE_DATE';
export const CHANGE_SERVICE = 'SELECTED_ORDER_CHANGE_SERVICE';
export const CHANGE_COST = 'SELECTED_ORDER_CHANGE_COST';
export const CHANGE_WHY_REJECTED = 'CHANGE_WHY_REJECTED';
export const CHANGE_STATUS = 'CHANGE_STATUS';

export const setSelectedOrder = order => ({
    type: CHANGE_SELECTED_ORDER,
    payload: order
});

export const setName = name => ({
    type: CHANGE_NAME,
    payload: name
});

export const setDate = date => ({
    type: CHANGE_DATE,
    payload: date
});

export const setService = service => ({
    type: CHANGE_SERVICE,
    payload: service
});

export const setCost = cost => ({
    type: CHANGE_COST,
    payload: cost
});

export const setStatus = status => ({
    type: CHANGE_STATUS,
    payload: status
})

export const setWhyRejected = whyRejected => ({
    type: CHANGE_WHY_REJECTED,
    payload: whyRejected
})
