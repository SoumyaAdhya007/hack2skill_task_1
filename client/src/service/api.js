import axios from "axios";
const BaseURL = `https://hack2skill-task-1.onrender.com`;
const getListData = async () => {
  try {
    const response = await axios.get(`${BaseURL}/api/list`);
    console.log(response);
    if (response.status === 200) {
      return response.data;
    }
  } catch (error) {
    console.log("Error while getListData API", error.message);
  }
};
export default getListData;
