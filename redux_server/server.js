import { createStore, applyMiddleware, combineReducers } from "redux";
import logger from "redux-logger";
import axios from "axios";
import thunk from "redux-thunk";

//  CONSTANT CREATED

const inc = "increment";
const dec = "decrement";
const incByAmount = "increaseByAmount";
const init = "init";

//Root Reducer

const rootReducer = combineReducers({
    account: accountReducer,
    bonus: bonusReducer,
});

// const history =[];

// Central Store
const store = createStore(
    rootReducer,
    applyMiddleware(logger.default, thunk.default)
);

//Reducer function Account
function accountReducer(state = { amount: 0 }, action) {
    switch (action.type) {
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

//Reducer function Bonus
function bonusReducer(state = { points: 0 }, action) {
    switch (action.type) {
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

//Global State

// store.subscribe(()=>{
// history.push(store.getState());
// console.log(history)
// });

//Async API call && Actions 

function getUser(id) {
    return async (dispatch, getState) => {
        const response = await axios.get(`http://localhost:3000/account/${id}`);
        const data = response.data;
        dispatch(initUser(data.amount));
    };
}

//Actions 

function initUser(value) {
    return { type: init, payload: value };
}

function increment() {
    return { type: inc };
}

function decrement() {
    return { type: dec };
}

function increaseByAmount(value) {
    return { type: incByAmount, payload:value };
}

setTimeout(() => {
    // store.dispatch(getUser(1));
    store.dispatch(increaseByAmount(200));
}, 5000);



//START THE FAKE SERVER FIRST IN THE OTHER TERMINAL
//json-server db.json