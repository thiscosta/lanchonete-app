import { staticBurger } from '../temp/data'

const initialState = {
    burgers: [
        staticBurger,
        staticBurger,
        staticBurger,
        staticBurger,
        staticBurger,
        staticBurger,
        staticBurger,
        staticBurger,
    ]
}

export default function burgersReducer(state = initialState, action) {
    switch (action.type) {
        case 'ADD_BURGER':
            return {
                ...state,
                burgers: [...state.burgers, action.payload]
            }
        default:
            return state
    }
}