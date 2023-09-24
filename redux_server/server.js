import { createStore, applyMiddleware } from "redux";
import logger from 'redux-logger';
//  CONSTANT CREATED    

const inc ='increment';
const dec = 'decrement';
const incByAmount= 'increaseByAmount';

//

// const history =[];

const store =createStore(reducer, applyMiddleware(logger.default));

function reducer(state={amount:1}, action){

    if(action.type === inc){
        return { amount: state.amount + 1}
    }
    if(action.type === dec){
        return { amount: state.amount -1}
    }
    if(action.type === incByAmount){
        return {amount: state.amount + state.payload}
    }
     
    return state
};

// store.subscribe(()=>{
// history.push(store.getState());
// console.log(history)
// });

function increment(){
    return {type: inc}
}

function decrement(){
    return {type: dec}
}

function increaseByAmount(){
    return {type: incByAmount}
}

setInterval(()=>{
    store.dispatch(increment())
},2000)