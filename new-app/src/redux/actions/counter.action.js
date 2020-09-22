export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';

export const addCounter = () => {
    return{
        type : DECREMENT,
    };
};


export const minusCounter = () => {
    return{
        type : INCREMENT,
    };
};


