import { log } from "./action"
const initstate={
    log:null,
}

export const LogReducer=(store=initstate,{type,payload})=>{
    switch(type){
        case log :
           return {...store,log:payload}
           default :
           return store;
    }
}
