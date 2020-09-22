import React from 'react'
import {connect} from 'react-redux'
import {addCounter, minusCounter} from '../redux/actions/counter.action'

function Counter({counter, addCounter,minusCounter}) {
    return (
        <div>
            <h1>{counter} </h1>

            <button onClick={()=>{addCounter()}}>-</button>
            <button onClick={()=>{minusCounter()}}>+</button>
            
        </div>
    )
}


const mapStateToProps =({ counter }) => {
    return{
        counter:counter,
    }
}

const mapDispatchToProps = (dispatch) =>{
            return{
                addCounter: () => dispatch(addCounter()),
                minusCounter:() => dispatch(minusCounter()),
            }
}

export default connect(mapStateToProps,mapDispatchToProps)(Counter);