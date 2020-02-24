const initialState = {
    loading: false,
    photos: [],
    error: ""
}

const GalleryReducer = (state = initialState, action) => {
    switch(action.type) {
        case "START_LOAD" :
            return {
                ...state,
                loading: true
            }
        case "FETCH_PHOTOS" :
            return {
                ...state,
                photos: action.payload,
                loading: false
            }
        case "ERROR_FETCHING_PHOTOS" :
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        default: return state;
    }
}

export default GalleryReducer;