import React from 'react'
import axios from 'axios'


export const getCounters=(counters)=>{
    return {type:'GET_COUNTERS',payload:counters}
}

export const startGetCounters=()=>{
    return (dispatch)=>{
        axios.get('http://localhost:3063/api/counters')
                .then((response)=>{
                    console.log(response)
                    const counters=response.data
                    dispatch(getCounters(counters))
                })

                .catch((err)=>{
                    console.log(err)
                })
    }
}


export const addValue=(data)=>{
    return {type:'ADD_VALUE',payload:data}
}

export const subractValue=(data)=>{
    return {type:'SUBRACT_VALUE',payload:data}
}

export const resetValue=(data)=>{
    return {type:'RESET_VALUE',payload:data}
}

export const startEditAddValue=(id)=>{
    return (dispatch)=>{
        axios.put(`http://localhost:3063/api/counters/${id}?type=inc`)
            .then((response)=>{
                console.log(response)
                const body=response.data
                dispatch(addValue(body))
            })
            .catch((err)=>{
                console.log(err)
            })
    }
}

export const startEditMinusValue=(id)=>{
    return (dispatch)=>{
        axios.put(`http://localhost:3063/api/counters/${id}?type=dec`)
            .then((response)=>{
                console.log(response)
                const body=response.data
                dispatch(subractValue(body))
            })
            .catch((err)=>{
                console.log(err)
            })
    }
}

export const startEditResetValue=(id)=>{
    return (dispatch)=>{
        axios.put(`http://localhost:3063/api/counters/${id}?type=reset`)
            .then((response)=>{
                console.log(response)
                const body=response.data
                dispatch(resetValue(body))
            })
            .catch((err)=>{
                console.log(err)
            })
    }
}


export const removeValue=(data)=>{
    return {type:'REMOVE_VALUE',payload:data}
}


export const startRemoveValue=(id)=>{
    return (dispatch)=>{
        axios.delete(`http://localhost:3063/api/counters/${id}`)
                .then((response)=>{
                    console.log(response.data)
                    const value=response.data
                    dispatch(removeValue(value))
                })
                .catch((err)=>{
                    console.log(err)
                })
    }
}

export const addingValue=(data)=>{
return {type:'ADDING_VALUE',payload:data}
}

export const startAddCounter=()=>{
    return (dispatch)=>{
        axios.post(`http://localhost:3063/api/counters`)
                .then((response)=>{
                    console.log(response.data)
                    const value=response.data
                    dispatch(addingValue(value))
                })
                .catch((err)=>{
                    console.log(err)
                })
    }
}



