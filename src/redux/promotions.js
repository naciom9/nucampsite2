import { actions, actionTypes } from 'react-redux-form';
import * as ActionTypes from './ActionTypes';

export const Promotions = (state = { isLoading: true,
                                        errMess:null,
                                        promotions: [] }, action) => {
    switch (action.type) {
        case ActionTypes.ADD_PROMOTIONS:
            return {...state, isLoading: false, errMess: null, promotions: action.payload};

        case action.PROMOTIONS_LOADING:
            return {...state, isLoading: true, errMess: null, promotions: []};

        case actionTypes.PROMOTIONS_FAILED:
            return {...state, isLoading: false, errMess: action.payload};
            
        default:
            return state;
    }
};