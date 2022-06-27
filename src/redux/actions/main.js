import axios from "axios";
import { setLocation, setPhotos } from "../reducers/main";
let photosUrl = [];



export const getLocation = () => {
  let url = "https://ipinfo.io?token=e2f6ce2220f5e9";
  return async (dispatch) => {
    try {
      const res = await axios.get(url);
      dispatch(setLocation(res.data.city));
    } catch (e) {
      console.log(e);
    }
  };
};
