import * as Action from './types';

export const loading = () => {
    return{
        type: Action.LOADING
    }
}

export const getNews = (data) => {
    return{
        type: Action.FETCH_NEWS,
        payload: data
    }
}

export const failed = (error) => {
    return{
        type: Action.ERROR,
        payload: error
    }
}

export const showSavedNews = (isShow) => {
    return {
        type: Action.SAVED,
        payload: isShow
    }
}

export const endPoint = data => {
    return {
        type: Action.END_POINT,
        payload: data
    }
}

export const modalData = data => {
    return {
        type: Action.SET_MODAL_DATA,
        payload: data
    }
}

export const newsTopic = data => {
    return {
        type: Action.NEWS_TOPIC,
        payload: data
    }
}

export const topNews = () => {
    return {
        type: Action.TOP_NEWS,
    }
}

export const searchTopics = () => {
    return {
        type: Action.SEARCH_RESULTS,
    }
}

export const fetchNews = (data, operator) => dispatch => {
    dispatch(loading);

    const base_url = "https://gnews.io/api/v3";
    const op = operator ? '&' : '?';

    const url = `${base_url}/${data}${op}token=${process.env.REACT_APP_GOOGLE_NEWS_API_KEY}`;
    dispatch(endPoint({ url: data, operator: op }));
    
    fetch(url)
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        dispatch(getNews(data.articles))
    })
    .catch(err => {
        dispatch(failed(err.message))
    })
}