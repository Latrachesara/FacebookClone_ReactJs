import axios from "axios";
const url = "http://localhost:4000/";
export const PostData = async (path, data) => {
  const res = await axios.post(`${path}`, data);
  return res;
};

export const GetData = async (path, data) => {
  return await axios.get(`${path}`, data);
};
