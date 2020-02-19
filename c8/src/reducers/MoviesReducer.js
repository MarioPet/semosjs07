const initialState = {
    movies: ["Parasite", "The Bad and the Beautiful", "Rocco and his Brothers"]
};

const MoviesReducer = (state = initialState, action) => {
    switch(action.type) {
        case "FETCH_MOVIE_LIST" :
            return {
                movies: state.movies
            }
        default: return state;
    }
}

export default MoviesReducer;