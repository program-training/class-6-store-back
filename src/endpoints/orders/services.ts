import axios from "axios";
import dotenv from "dotenv"

const OMS_SERVER = process.env.OMS_SERVER

const createOrder = async (order: any) => {
  try {
    const resp = await axios.post(
      `${OMS_SERVER}/api/orders/`,
      order
    );
    return resp.data;
  } catch (error) {
    console.log(error);
  }
};

const getUserOrders = async (userId: any) => {
    try {
      const resp = await axios.get(
        `${OMS_SERVER}/api/orders/${userId}`,
      );
      return resp.data;
    } catch (error) {
      console.log(error);
    }
  };

export default {
  createOrder,
  getUserOrders
};
