
export const cartReducer = (state = [], action) => {

    switch (action.type){
        case "ADD_ITEM": 
            return [...state, action.payload]

        case "DELETE_ITEM":
            return state.filter(el => el.id !== action.payload)

        case "EMPTY_CART":
            return []



        default:
            return state
    }
}