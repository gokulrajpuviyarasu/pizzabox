import axios from "axios";
export const registerUser = (user) => async (dispatch) => {
  dispatch({ type: "USER_REGISER_REQUEST" });

  try {
    const response = await axios.post("api/users/register",  user );
    console.log(response);
    dispatch({ type: "USER_REGISER_SUCCESS" });
  } catch (error) {
    dispatch({ type: "USER_REGISER_FAILED", payload: error });
  }
};
