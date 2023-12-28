import { createSlice } from "@reduxjs/toolkit";

const categorySlice = createSlice({
    name:"category",
    initialState:{
        selectedCategory: null,
        availableCategory:[]
    },
    reducers:{
        setCategory(state,action){
            state.availableCategory = action.payload;
            console.log("check slice category",state.availableCategory)
        },
        selectCategory(state,action){
            state.selectedCategory = action.payload;
        }
    }
});

export const selectSelectedCategory = (state)=> state.category.selectedCategory;
export const selectAvailableCategory = (state)=> state.category.availableCategory ;

export const {selectCategory,setCategory} = categorySlice.actions;

export default categorySlice.reducer;

