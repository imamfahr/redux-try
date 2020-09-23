import axios from 'axios';

//create constant of actions
export const GET_PRODUCTS_REQUEST = 'GET_PRODUCTS_REQUEST'
export const GET_PRODUCTS_SUCCESS = 'GET_PRODUCTS_SUCCESS'
export const GET_PRODUCTS_FAILED = 'GET_PRODUCTS_FAILED'


//create func for each const

export function getProductsRequest(){
    return{
        type: GET_PRODUCTS_REQUEST,
    }
}

export function getProductsSuccess(result){
    return{
        type: GET_PRODUCTS_SUCCESS,
        result,
    }
}

export function getProductsFailed(error){
    return{
        type: GET_PRODUCTS_FAILED,
        error,
    }
}

//function to take data

export function getProducts(){
    return function(dispatch){
        dispatch(getProductsRequest());
        
        axios
        .get('https://5f51a6865e98480016123bdd.mockapi.io/products')
        .then((result)=> dispatch(getProductsSuccess(result.data)))
        .catch((error)=> dispatch(getProductsFailed(error)))
    }

}