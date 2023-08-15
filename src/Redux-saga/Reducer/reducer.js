
const initialState = {
    saveTestData : ""
}

const Reducer = (state = initialState, action) => {
    switch (action.type) {
        case "ACTION_TEST" : 
        return { ...state, saveTestData: action.payload}

        default:
            return { ...state};
            
    }
}

export default Reducer