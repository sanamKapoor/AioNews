import * as Actions from './types';

export const initialState = {
    loading: false,
    news: [],
    error: '',
    saved: false,
    endPoint: {},
    setModalData: '',
    topic: '',
    topNews: '',
    searchResult: ''
}

export default (state = initialState, action) => {
    switch(action.type){
        case Actions.LOADING:
            return {
                ...state,
                loading: true,
            }
        case Actions.FETCH_NEWS:
            return {
                ...state,
                loading: false,
                news: action.payload,
                error: ''
            }
        case Actions.ERROR:
            return {
                ...state,
                loading: false,
                news: [],
                error: action.payload
            }
        case Actions.SAVED:
            return {
                ...state,
                saved: action.payload
            }
        case Actions.END_POINT:
            return {
                ...state,
                endPoint: action.payload
            }
        case Actions.SET_MODAL_DATA:
            return {
                ...state,
                setModalData: action.payload
            }
        case Actions.NEWS_TOPIC:
            return {
                ...state,
                topic: action.payload,
                searchResult: '',
                topNews: ''
            }
        case Actions.TOP_NEWS:
            return {
                ...state,
                searchResult: '',
                topNews: 'Top Headlines'
            }
        case Actions.SEARCH_RESULTS:
            return {
                ...state,
                searchResult: 'Search Results',
                topNews: ''
            }
        default:
            return state
    }
}