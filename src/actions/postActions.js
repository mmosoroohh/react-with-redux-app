import { FETCH_POSTS, NEW_POST } from './types';
import axios from 'axios';

export const fetchPosts = () => dispatch => {
    // console.log('fetching, getting');
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(posts => 
            dispatch({
                type: FETCH_POSTS,
                payload: posts
            })
        );
};

export const createPost = (postData) => dispatch => {
    // console.log('action called');
    let url = 'https://jsonplaceholder.typicode.com/posts';
        axios.post(url, postData)
        .then(post => dispatch({
            type: NEW_POST,
            payload: post
        }))
        .catch(err => console.error(err))
};