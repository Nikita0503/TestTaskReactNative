export const CHANGE_SELECTED_PLACE = 'CHANGE_SELECTED_PLACE';

export const setSelectedPlace = selectedPlace => ({
    type: CHANGE_SELECTED_PLACE,
    payload: selectedPlace
});
