import {REQUEST_DATA_LOAD} from '../constants/action-types';

export function requestDataLoad(){
	return function(dispatch){
		console.log(new Date());
		return dispatch({type:REQUEST_DATA_LOAD})
	}
}