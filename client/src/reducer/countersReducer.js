import React from 'react'


const countersReducer=(state=[],action)=>{
    switch(action.type){
        case 'GET_COUNTERS':{
            return [...action.payload]
        }
        case 'ADD_VALUE':{
            return state.map(ele=>{
                if(ele._id==action.payload._id){
                   return Object.assign({},ele,action.payload)
                }
                else{
                   return Object.assign({},ele) 
                }
            })
        }
        case 'SUBRACT_VALUE':{
            return state.map(ele=>{
                if(ele._id==action.payload._id){
                   return {...action.payload}
                }
                else{
                   return {...ele}
                }
            })
        }
        case 'RESET_VALUE':{
            return state.map(ele=>{
                if(ele._id==action.payload._id){
                   return {...action.payload}
                }
                else{
                   return {...ele}
                }
            })
        }

        case 'REMOVE_VALUE':{
            return state.filter(ele=>ele._id!=action.payload._id)
        }
        case 'ADDING_VALUE':{
            return [...state,action.payload]
        }
        default:{
            return [...state]
        }
    }
}

export default countersReducer