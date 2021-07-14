export const GLOBALTYPES = {
  REGISTER: "REGISTER",
  LOGIN: "LOGIN",
  ALERT: "ALERT",
  VERIF_LOGGED_IN: "VERIF_LOGGED_IN",
  LOADING_ON: "LOADING_ON",
  LOADING_OFF: "LOADING_OFF",
};

// later to explain
export const EditData = (data, id, post) => {
  const newData = data.map((item) => (item._id === id ? post : item));
  return newData;
};

export const DeleteData = (data, id) => {
  const newData = data.filter((item) => item._id !== id);
  return newData;
};
