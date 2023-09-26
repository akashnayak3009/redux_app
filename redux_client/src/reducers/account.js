import { dec, getAccUserFulfilled, getAccUserPending, getAccUserRejected, inc, incByAmount, init } from "../actions";




//Reducer function Account
export function accountReducer(state = { amount: 0 }, action) {
    switch (action.type) {
        case getAccUserFulfilled:{
            return {amount: action.payload, pending: false};
        }
        case getAccUserRejected:{
            return { ...state, error:action.error, pending:false};
        }
        case getAccUserPending:{
            return { ...state, pending:true};
        }
        case init: {
            return { amount: action.payload };
        }
        case inc: {
            return { amount: state.amount + 100 };
        }
        case dec: {
            return { amount: state.amount - 100 };
        }
        case incByAmount: {
            return { amount: state.amount + action.payload };
        }
        default: {
            return state;
        }
    }
}
