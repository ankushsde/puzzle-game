import { createSlice } from "@reduxjs/toolkit";

// to track user-related information, such as scores, progress, or settings, you might have a user slice.
const userSlice =  createSlice({
    name:"user",
    initialState:{
        score:0,
        progress:0,
        settings:{}
    },
    reducers:{
         updateScore: (state,action) =>{
            state.score += action.payload
         },
         updateProgress: (state,action)=> {
            state.progress = action.payload
         },
         updateSettings: (state,action)=>{
            state.settings = {...state.payload, ...action.payload}
         }
    }
})

export const selectScore = (state)=> state.user.score;
export const selectProgress = (state)=> state.user.progress;
export const selectSettings = (state)=>state.user.settings;

export const {updateScore,updateProgress,updateSettings} = userSlice.actions

export default userSlice.reducer
