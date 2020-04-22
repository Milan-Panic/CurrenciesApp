import axios from 'axios';

const BASE_URL = 'http://localhost:3001/posts';

const getAllPosts = async () => {
    let response = await axios(BASE_URL);
    return response.data;
}
const getPost = async (id) => {
    let response = await axios(`${BASE_URL}/${id}`);
    return response.data;
}

const newPost = async (id, symbol, name) => {
    return await axios.post(BASE_URL,{id, symbol, name})
}

const editPost = async (id, symbol, name) => {
    return await axios.patch(`${BASE_URL}/${id}`, {symbol, name})
}

const deletePost = async (id) => {
    return await axios.delete(`${BASE_URL}/${id}`)
}
const paginationPosts = async (page, limit) => {
    let response = await axios.get(`${BASE_URL}?_page=${page}&_limit=${limit}`)
    return response.data;
}

export { getAllPosts, newPost, editPost, deletePost, getPost, paginationPosts }