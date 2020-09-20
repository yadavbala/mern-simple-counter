import React from 'react'
import axios from 'axios'
import {connect} from 'react-redux'
import {startGetCounters,startEditAddValue,startEditMinusValue,startEditResetValue,startRemoveValue,startAddCounter} from './action/counterAction'
class Users extends React.Component{

    componentDidMount(){
        if(this.props.count.length==0){
            this.props.dispatch(startGetCounters())
        }
    }

    handleCounter=()=>{
       this.props.dispatch(startAddCounter())
    }

    handleAdd=(id)=>{
        this.props.dispatch(startEditAddValue(id))
    }
    handleMinus=(id)=>{
        this.props.dispatch(startEditMinusValue(id))
    }
    handleReset=(id)=>{
        this.props.dispatch(startEditResetValue(id))
    }
    handleRemove=(id)=>{
        const confirmRemove=window.confirm('are you sure un want to remove')
        if(confirmRemove){
            this.props.dispatch(startRemoveValue(id))
        }
       
    }
   
    render(){
        return(
            <div>
                <h1>counters-{this.props.count.length}</h1>
                <button onClick={this.handleCounter}>Add Counter</button>
                {
                    this.props.count.map(ele=>{
                        return(<div key={ele._id}>
                            <h1>count-{ele.value}</h1>
                            <button onClick={()=>this.handleAdd(ele._id)}>+</button>
                            <button onClick={()=>this.handleMinus(ele._id)}>-</button>
                            <button onClick={()=>this.handleReset(ele._id)}>reset</button>
                            <button onClick={()=>this.handleRemove(ele._id)}>remove</button>
                        </div>
                        )
                    })
                }
            </div>
        )
    }
}

const mapStateToProps=(state)=>{
    return{
        count:state.count
    }
}

export default connect(mapStateToProps)(Users)