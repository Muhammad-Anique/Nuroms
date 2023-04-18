import { combineReducers } from 'redux';
import navigationSlice from './slices/navigationSlice'
import formTypeSlice from './slices/formTypeSlice'
import userSlice from './slices/userSlice'

const rootReducer = combineReducers({
   
        navigation : navigationSlice,
        formtype : formTypeSlice,
        user : userSlice,
});

export default rootReducer;