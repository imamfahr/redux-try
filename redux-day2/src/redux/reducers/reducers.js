import{
GET_PRODUCTS_REQUEST,
GET_PRODUCTS_SUCCESS,
GET_PRODUCTS_FAILED,
} from '../actions/actions';



const intialState = {
    data: [],
    error: null,
    isLoading: false,
};


export function getProductsReducer(state = intialState,action) {
    console.log(action)
    switch(action.type){
        case GET_PRODUCTS_REQUEST:
        return{
            ...state,
            isLoading :true,
        }
        case GET_PRODUCTS_SUCCESS:
            console.log(action.result)
        return{
            ...state,
            isLoading:false, 
            data:action.result,
        }
        case GET_PRODUCTS_FAILED:
        return{
            ...state,
            isLoading:false,
            error: action.error,
        };
        default:
        return state
    }
    
}