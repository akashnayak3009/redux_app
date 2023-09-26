import { incBonus, incByAmount } from "../actions";

//Reducer function Bonus
export function bonusReducer(state = { points: 0 }, action) {
    switch (action.type) {
        case incBonus:{
            return { points: state.points + 10 };
        }
        case incByAmount: {
           if( action.payload>=100){
            return { points: state.points + 10 };
           }
         
        }
        default: {
            return state;
        }
    }
}