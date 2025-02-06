const { default: axios } = require('axios');

const axiosClient = axios.create({
    baseURL: 'https://be-well-strapi.onrender.com/api', // Added /api/ for Strapi v4
});

const getCategory = () => axiosClient.get('/categories?populate=*');

const getSlider = () => axiosClient.get('/sliders?populate=*').then(resp=>{
    return resp.data.data;
} );

const getAllProducts = () => axiosClient.get('/products?populate=*').then(resp=>{
    return resp.data.data;
} );

const getProductsByCategory=(categories) => axiosClient.get('/products?filters[categories][name][$in]='+categories+'&populate=*').then(resp=>{
    return resp.data.data;
} );

const getBrands = () => axiosClient.get('/brands?populate=*').then(resp=>{
    return resp.data.data;
} );

export default {
    getCategory,
    getSlider,
    getAllProducts,
    getProductsByCategory,
    getBrands
}