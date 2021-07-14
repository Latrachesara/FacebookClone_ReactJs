import { PostData, GetData } from "./../../Utils/APICalls";
import { GLOBALTYPES } from "./GlobalType";
import { POSTTYPES } from "./../Reducer/PostReducer";

export const CreatePost = (data) => async (dispatch) => {
  await PostData(`/creation/post`, data)
    .then((res) => {
      dispatch({ type: POSTTYPES.CREATE_POST, payload: res.data });
    })
    .catch((err) => {
      dispatch({
        type: GLOBALTYPES.ALERT,
        payload: {
          error: true,
          msg: err.response.data.message,
          type: "POSTCREATION",
        },
      });
    });
};
