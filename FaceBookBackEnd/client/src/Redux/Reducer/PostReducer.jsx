const InisitalState = {
  Post: {},
  Comment: {},
  Reply: {},
};
export const POSTTYPES = {
  CREATE_POST: "CREATE_POST",
};
const PostReducer = (state = InisitalState, action) => {
  switch (action.type) {
    case POSTTYPES.CREATE_POST:
      return {};
    default:
      return state;
  }
};
export default PostReducer;
