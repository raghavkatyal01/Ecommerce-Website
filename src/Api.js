import axios from "axios"
export  function getProductList(){
   return axios.get("https://dummyjson.com/products/").then(response=>{
    return response.data;
   }).then(response=>{
    return response.products;
   });
}
export function getProduct(id){
    return axios.get(`https://dummyjson.com/products/${id}`).then((response)=>{
        return response.data;
    });
}