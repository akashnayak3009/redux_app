import axios from 'axios';


// ACTION NAME CONSTANT CREATED

export const init = "account/init";
export const inc = "account/increment";
export const dec = "account/decrement";
export const incByAmount = "account/increaseByAmount";
export const getAccUserPending ="account/getUser/pending";
export const getAccUserFulfilled="account/getUser/fulfilled";
export const getAccUserRejected="account/getUser/rejected";
export const incBonus = 'bonus/increment'

//ACTION CREATED

export function getAccount(id) {
    return async (dispatch, getState) => {
      try{
        dispatch(getAccountUserPending());
        const response = await axios.get(`http://localhost:8080/account/${id}`);
        const data = response.data;
        dispatch(getAccountUserFulfilled(data.amount));
      }catch(error){
        dispatch(getAccountUserRejected(error.message));
      }
    };
}

export function getAccountUserFulfilled(value){
    return {type:getAccUserFulfilled, payload:value};
}

export function getAccountUserRejected(error){
    return {type: getAccUserRejected, error: error};
}

export function getAccountUserPending(){
    return {type: getAccUserPending}
}

export function initUser(value) {
    return { type: init, payload: value };
}

export function increment() {
    return { type: inc };
}

export function decrement() {
    return { type: dec };
}

export function increaseByAmount(value) {
    return { type: incByAmount, payload:value };
}

export function incrementBonus(value) {
    return { type: incBonus};
}
