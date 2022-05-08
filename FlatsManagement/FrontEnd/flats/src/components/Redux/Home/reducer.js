import {home} from "./action";

const initalstate={
    home:[]
}


export const homeReducer=(store=initalstate,{type,payload})=>{
     switch(type){
         case home:
             return {...store,home:payload};
         default :
             return store;
     }
}