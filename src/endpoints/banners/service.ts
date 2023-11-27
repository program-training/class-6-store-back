import axios from "axios";

const getByCategory = async(category: string)=> {
 try {
    const resp = await axios.get(`https://serverbanners.onrender.com/api/banners/cat/${category}`)
    return resp.data
 } catch (error) {
    console.log(error);
 }
}

const getAllBanners = async()=> {
    try {
       const resp = await axios.get(`https://serverbanners.onrender.com/api/banners/`)
       return resp.data
    } catch (error) {
       console.log(error);
    }
   }

export default {
    getByCategory,
    getAllBanners
}