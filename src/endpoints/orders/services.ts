import axios from "axios";

const createOrder = async (order: any) => {
  try {
    const resp = await axios.post(
      "https://demoosmserver.onrender.com/api/orders/",
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
        `https://demoosmserver.onrender.com/api/orders/${userId}`,
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
