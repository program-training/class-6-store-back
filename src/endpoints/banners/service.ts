import axios from "axios";
import dotenv from "dotenv"

const BANNERS_SERVER = process.env.BANNERS_SERVER

const getByCategory = async(category: string)=> {
 try {
    const resp = await axios.get(`${BANNERS_SERVER}/api/banners/cat/${category}`)
    return resp.data
 } catch (error) {
    console.log(error);  
 }
}

const getAllBanners = async()=> {
    try {
       const resp = await axios.get(`${BANNERS_SERVER}/api/banners/`)
       return resp.data
    } catch (error) {
       console.log(error);
    }
   }

export default {
    getByCategory,
    getAllBanners
}