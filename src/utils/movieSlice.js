import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
    name:"movies",
    initialState:{
        nowPlayingMovies:null,
        trailerVideo:null,
        popularMovies:null,
        topMovies:null,
        upComingMovies:null,
    },
    reducers: {
        addNowPlayingMovies:(state ,action) => {
           state.nowPlayingMovies= action.payload;
        },
        addTrailerVideo:(state,action)=>{
            state.trailerVideo =action.payload;
        },
        addPopularMovies:(state,action)=>{
            state.popularMovies = action.payload;
        },
        addTopMovies:(state,action)=>{
            state.topMovies = action.payload;
        },
        addUpcoming:(state,action)=>{
            state.upComingMovies = action.payload;
        },
    },
});


export const {addNowPlayingMovies,addTrailerVideo,addPopularMovies,addTopMovies,addUpcoming}=movieSlice.actions;

export default movieSlice.reducer;