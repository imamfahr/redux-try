import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import {getProducts} from '../redux/actions/actions';
import {Spinner} from 'react-bootstrap'
import {useDispatch, useSelector} from 'react-redux'

function Products(props) {
    console.log(props)
    const getProducts = props.getProducts
   
    useEffect(()=>{
        getProducts();
    },[getProducts])

    
    return (
        <div>
            {props.isLoading===true?
            (<Spinner animation='border'/>):
            (
                props.products.map((item,index)=>(
                    <div key={index}>
                        <img src={item.avatar}></img>
                        <p>name {item.name}</p>
                        <p>created at: {item.createdAt}</p>

                    </div>
                ))
            )}
        </div>
    )
}

const mapStateToProps = (props) => {
    return{
        products : props.products.data,
        isLoading: props.products.isLoading

    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        getProducts: () => dispatch(getProducts()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Products)

