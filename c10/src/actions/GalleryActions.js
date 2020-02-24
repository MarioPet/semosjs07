const StartLoad = () => {
    return {
        type: "START_LOAD"
    }
}

const FetchStart = (photos) => {
    return {
        type: "FETCH_PHOTOS",
        payload: photos
    }
}

const ErrorFetchingPhotos = (err) => {
    return {
        type: "ERROR_FETCHING_PHOTOS",
        payload: err
    }
}

export const FetchPhotos = () => {
    return dispatch => {
        dispatch(StartLoad());
        fetch("https://jsonplaceholder.typicode.com/photos")
            .then(res => { return res.json() })
            .then(res => dispatch(FetchStart(res)))
            .catch(err => dispatch(ErrorFetchingPhotos(err)));
    }
}