import { createStore, applyMiddleware, combineReducers } from "redux";
import logger from "redux-logger";
import axios from "axios";
import thunk from "redux-thunk";

// ACTION NAME CONSTANT CREATED

const init = "account/init";
const inc = "account/increment";
const dec = "account/decrement";
const incByAmount = "account/increaseByAmount";
const getAccUserPending ="account/getUser/pending";
const getAccUserFulfilled="account/getUser/fulfilled";
const getAccUserRejected="account/getUser/rejected";
const incBonus = 'bonus/increment'

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

//Reducer function Bonus
function bonusReducer(state = { points: 0 }, action) {
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

//Global State

// store.subscribe(()=>{
// history.push(store.getState());
// console.log(history)
// });

//Async API call && Actions 


//ACTION CREATED

function getAccount(id) {
    return async (dispatch, getState) => {
      try{
        dispatch(getAccountUserPending());
        const response = await axios.get(`http://localhost:3000/account/${id}`);
        const data = response.data;
        dispatch(getAccountUserFulfilled(data.amount));
      }catch(error){
        dispatch(getAccUserRejected(error.message));
      }
    };
}

function getAccountUserFulfilled(value){
    return {type:getAccUserFulfilled, payload:value};
}

function getAccUserRejected(error){
    return {type: getAccUserRejected, error: error};
}

function getAccountUserPending(){
    return {type: getAccUserPending}
}

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

function incrementBonus(value) {
    return { type: incBonus};
}


setTimeout(() => {
    // store.dispatch(getAccount (1));
    // store.dispatch(increaseByAmount(200));
    store.dispatch(incrementBonus());
}, 5000);



//START THE FAKE SERVER FIRST IN THE OTHER TERMINAL
//json-server db.json