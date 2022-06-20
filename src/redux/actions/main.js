import axios from "axios";
import { setLocation, setPhotos } from "../reducers/main";
let photosUrl = [];

export const getPhotos = () => {
  let url = "https://api.unsplash.com/photos?per_page=2";
  let accessToken = localStorage.getItem("accessToken");

  return async (dispatch) => {
    try {
      const res = await axios.get(url, {
        headers: {
          Authorization: `Client-ID avGYLy8xj-R8I3tiRSkeVZvRV0R39Ws34mZod3qn3Zo`,
          // Authorization: `Bearer ${accessToken}`,
        },
      });


      console.log(res);

      let photosUrl = [...res.data].map((el) => {
        return {
          ...el,
        };
      });
      // photosUrl.push(res.data);
      dispatch(setPhotos(photosUrl));
    } catch (e) {
      console.log(e);
    }
  };
};

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
