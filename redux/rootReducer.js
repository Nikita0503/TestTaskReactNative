import {combineReducers} from 'redux';
import {persistReducer} from 'redux-persist';
import AsyncStorage from '@react-native-community/async-storage';

import {loginReducer} from './login/reducers';
import {registrationReducer} from './registration/reducers';
import {databaseReducer} from './database/databaseReducer'
import {dryCleaningPlacesReducer} from './admin/dryCleaningPlaces/reducers';
import {addNewPlaceReducer} from './admin/dryCleaningPlaces/addNewPlace/reducers';
import {ordersReducer} from './admin/orders/reducers';
import {selectedOrderReducer} from './admin/orders/selectedOrder/reducers'
import {selectedPlaceReducer} from './client/selectedPlace/reducers';

const persistConfig = {
    key: 'root',
    storage: AsyncStorage,
    whitelist: ['login', 'database']
}

const rootReducer = combineReducers({
    login: loginReducer,
    registration: registrationReducer,
    database: databaseReducer,
    dryCleaningPlaces: dryCleaningPlacesReducer,
    addNewPlace: addNewPlaceReducer,
    orders: ordersReducer,
    selectedOrder: selectedOrderReducer,
    selectedPlace: selectedPlaceReducer,
});

export default persistReducer(persistConfig, rootReducer);