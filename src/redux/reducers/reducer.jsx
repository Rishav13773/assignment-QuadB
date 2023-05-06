const INIT_STATE = {
    movies: []
};


export const moviereducer = (state = INIT_STATE, action) => {
    switch (action.type) {
        case "ADD_MOVIE":
            return {
                movies: [action.payload]
            }
        default:
            return state
    }
}





