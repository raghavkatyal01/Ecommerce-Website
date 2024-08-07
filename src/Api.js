import axios from "axios"
export  function getProductList(pageNo,search,sortBy,sortType,items_per_page){

    
    const params={}

   
    if(pageNo){
        params.page=pageNo
    }

 if(sortBy){
        params.sortBy=sortBy
       
    }
    if(sortType){
        params.order=sortType
       
    }
    if(items_per_page|| pageNo){
    params.skip=(pageNo-1)*items_per_page
   
    params.limit=items_per_page
    }
    if(search){
        params.q=search
        params.skip=0
        params.limit=items_per_page
      }
   return axios.get("https://dummyjson.com/products/search",{
params
}
   ).then(response=>{
    return response.data
   }
   )

}
export function getProduct(id){
    return axios.get(`https://dummyjson.com/products/${id}`).then((response)=>{
        return response.data;
    });
}
export function setCart(cart){
    return axios.post("https://myeasykart.codeyogi.io/carts",{data:cart},
        {
            headers:{
                Authorization: localStorage.getItem("token")
            }
        }
    )

}
export function getCart(){
    return axios.get("https://myeasykart.codeyogi.io/carts",{
        headers:{
            Authorization:localStorage.getItem("token")
        }
    }).then((response)=>{
        console.log("resp",response)
      return response.data.reduce((acc, { product, quantity }) => {
           return {...acc,[product.id]: quantity}
          }, {});
    })
    
}
