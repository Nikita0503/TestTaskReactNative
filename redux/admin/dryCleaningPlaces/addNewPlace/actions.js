export const CHANGE_NAME = 'CHANGE_ADD_PLACE_NAME';
export const CHANGE_DESCRIPTION = 'CHANGE_ADD_PLACE_DESCRIPTION';
export const CHANGE_SERVICE_NAME = 'CHANGE_ADD_PLACE_SERVICE_NAME';
export const CHANGE_SERVICE_COST = 'CHANGE_ADD_PLACE_SERVICE_COST';
export const ADD_SERVICE = 'CHANGE_ADD_PLACE_ADD_SERVICE';
export const ADD_PHOTO = 'CHANGE_ADD_PLACE_ADD_PHOTO';
export const CHANGE_TYPE = 'CHANGE_TYPE';

export const setName = name => ({
    type: CHANGE_NAME,
    payload: name
});

export const setDescription = description => ({
    type: CHANGE_DESCRIPTION,
    payload: description
});

export const setServiceName = serviceName => ({
    type: CHANGE_SERVICE_NAME,
    payload: serviceName
});

export const setServiceCost = serviceCost => ({
    type: CHANGE_SERVICE_COST,
    payload: serviceCost
});

export const addService = () => ({
    type: ADD_SERVICE
});

export const addPhoto = photo => ({
    type: ADD_PHOTO,
    payload: photo
});

export const setType = type => ({
    type: CHANGE_TYPE,
    payload: type
})