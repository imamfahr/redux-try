import React from 'react'
import {connect} from 'react-redux'


function Header({counter} ){
    return (
        <div className='header'>
            Shopping cart
            <h1>{counter}</h1>
        </div>
    )
}

const mapStateToProps = ({counter}) =>{
    return{
        counter:counter,
    }
}

export default connect(mapStateToProps,null)(Header)