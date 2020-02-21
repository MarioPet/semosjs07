const initialState = {
    userName: "",
    // showDate: false
}

const UserReducer = (state = initialState, action) => {
    switch(action.type) {
        case "FILL_USERNAME" :
            return {
                ...state,
                userName: action.payload
            }
        default: return state;
    }
}

export default UserReducer;