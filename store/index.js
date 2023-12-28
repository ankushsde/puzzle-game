import {configureStore} from "@reduxjs/toolkit"
import CategorySlice from "./slices/CategorySlice"
import UserSlice from "./slices/UserSlice"


const store = configureStore({
    reducer:{
        category : CategorySlice,
        user: UserSlice,

    }
})

export default store;